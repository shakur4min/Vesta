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

test('all 400 GRAMMAR_QUESTIONS contain zero blanks (___), zero brackets ([]), and never write the answer as the source sentence', () => {
  assert.equal(GRAMMAR_QUESTIONS.length, 400, 'Must have exactly 400 questions');

  const countsByChapter: Record<number, number> = {};

  for (const q of GRAMMAR_QUESTIONS) {
    countsByChapter[q.chapterNumber] = (countsByChapter[q.chapterNumber] || 0) + 1;
    assert.equal(
      q.prompt.includes('___'),
      false,
      `Question ${q.id} prompt contains underscores: ${q.prompt}`
    );
    assert.equal(
      q.prompt.includes('[') || q.prompt.includes(']'),
      false,
      `Question ${q.id} prompt contains brackets: ${q.prompt}`
    );
    assert.ok(q.acceptedAnswers.length >= 1, `Question ${q.id} must have at least one accepted answer`);

    // For transformation questions (Q3-Q20), verify the quoted source sentence is strictly different from every accepted answer
    if (q.questionNumber >= 3) {
      const quotedMatch = q.prompt.match(/:\s*"([^"]+)"$/);
      if (quotedMatch) {
        const sourceNorm = normalizeText(quotedMatch[1]);
        for (const acc of q.acceptedAnswers) {
          assert.notEqual(
            sourceNorm,
            normalizeText(acc),
            `Question ${q.id} source sentence "${quotedMatch[1]}" must not equal accepted answer "${acc}"`
          );
        }
      }
    }

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

test('validateAnswer accepts student-written sentences on open chapter tasks and full transformed sentences on conversion tasks', () => {
  const ch1q1 = GRAMMAR_QUESTIONS[0]; // Write a complete sentence in the simple present tense.
  assert.equal(validateAnswer('She studies English grammar every day.', ch1q1, 'en').isCorrect, true);
  assert.equal(validateAnswer('I read ancient books in the library.', ch1q1, 'en').isCorrect, true);
  assert.equal(validateAnswer('She studied English yesterday.', ch1q1, 'en').isCorrect, false);

  const ch1q3 = GRAMMAR_QUESTIONS[2]; // Transformation task -> Yesterday, the curator discovered an obscure folio.
  const fullSentRes = validateAnswer('Yesterday, the curator discovered an obscure folio.', ch1q3, 'en');
  assert.equal(fullSentRes.isCorrect, true, 'Full transformed sentence must be accepted');

  // Wrong answer must fail and must NOT leak the expected answer
  const wrongRes = validateAnswer('Yesterday, the curator discovers an obscure folio.', ch1q3, 'en');
  assert.equal(wrongRes.isCorrect, false);
  assert.equal(wrongRes.requiresRevision, true);
  assert.equal(
    wrongRes.feedback.toLowerCase().includes('discovered'),
    false,
    'Wrong-answer feedback must never reveal the expected answer'
  );
});


