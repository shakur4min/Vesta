import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeText,
  expandContractions,
  damerauLevenshteinDistance,
  compareWithSpellingTolerance,
  validateAnswer
} from './validationEngine';
import { GRAMMAR_QUESTIONS } from '../data/grammarQuestions';
import { GrammarQuestion } from '../types';

test('normalizeText handles whitespace, quotes, internal commas, and trailing punctuation', () => {
  assert.equal(normalizeText("  He didn't go.  "), "he didn't go");
  assert.equal(normalizeText("“Hello, World!”"), 'hello world');
});

test('expandContractions converts common contractions', () => {
  assert.equal(expandContractions("i'm walking and he's running"), "i am walking and he is running");
  assert.equal(expandContractions("they haven't finished"), "they have not finished");
});

test('damerauLevenshteinDistance calculates transposition and edits', () => {
  assert.equal(damerauLevenshteinDistance('ca', 'abc'), 3);
  assert.equal(damerauLevenshteinDistance('teh', 'the'), 1); // transposition
  assert.equal(damerauLevenshteinDistance('kitten', 'sitting'), 3);
});

test('compareWithSpellingTolerance allows minor content typo but strictly rejects grammar word errors', () => {
  const contentTypo = compareWithSpellingTolerance('she is beautifull', 'she is beautiful', 2);
  assert.equal(contentTypo.match, true);

  const grammarMismatch = compareWithSpellingTolerance('she was beautiful', 'she is beautiful', 2);
  assert.equal(grammarMismatch.match, false);
});

test('all 400 GRAMMAR_QUESTIONS contain zero fill-in-the-blank underscores (___) and span 20 chapters x 20 questions', () => {
  assert.equal(GRAMMAR_QUESTIONS.length, 400, 'Must have exactly 400 questions');

  const countsByChapter: Record<number, number> = {};

  for (const q of GRAMMAR_QUESTIONS) {
    countsByChapter[q.chapterNumber] = (countsByChapter[q.chapterNumber] || 0) + 1;
    assert.equal(
      q.prompt.includes('___'),
      false,
      `Question ${q.id} prompt still contains fill-in-the-blank underscores: ${q.prompt}`
    );
    assert.equal(
      (q.promptPersian || '').includes('___'),
      false,
      `Question ${q.id} Persian prompt still contains fill-in-the-blank underscores`
    );
    assert.ok(q.acceptedAnswers.length >= 1, `Question ${q.id} must have at least one accepted answer`);

    // Check difficulty progression
    if (q.questionNumber <= 5) assert.equal(q.difficulty, 'easy');
    else if (q.questionNumber <= 10) assert.equal(q.difficulty, 'medium');
    else if (q.questionNumber <= 15) assert.equal(q.difficulty, 'hard');
    else assert.equal(q.difficulty, 'advanced');
  }

  for (let ch = 1; ch <= 20; ch++) {
    assert.equal(countsByChapter[ch], 20, `Chapter ${ch} must have exactly 20 questions`);
  }
});

test('validateAnswer accepts both full transformed sentence and target grammatical form, and never leaks answer on error', () => {
  const q1 = GRAMMAR_QUESTIONS[0]; // ch-01-q1: The earth [revolve] around the sun.

  // Full sentence submission
  const fullSentRes = validateAnswer('The earth revolves around the sun.', q1, 'en');
  assert.equal(fullSentRes.isCorrect, true, 'Full transformed sentence must be accepted');

  // Target verb form submission
  const targetRes = validateAnswer('revolves', q1, 'en');
  assert.equal(targetRes.isCorrect, true, 'Target grammatical form must be accepted');

  // Wrong answer must fail and must NOT leak the expected answer
  const wrongRes = validateAnswer('revolved', q1, 'en');
  assert.equal(wrongRes.isCorrect, false);
  assert.equal(wrongRes.requiresRevision, true);
  assert.equal(
    wrongRes.feedback.toLowerCase().includes('revolves'),
    false,
    'Wrong-answer feedback must never reveal the expected answer'
  );
});

