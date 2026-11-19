import test from 'node:test';
import assert from 'node:assert/strict';
import { evaluateJollyJesterEssay, applyActiveExitPenalty } from './jesterEvaluator';
import { JollyJesterState } from '../types';

test('evaluateJollyJesterEssay requires title and sufficient word count', () => {
  const shortResult = evaluateJollyJesterEssay('Brief Title', 'Short text here.');
  assert.equal(shortResult.passed, false);
  assert.equal(shortResult.totalWords < 200, true);
  assert.ok(shortResult.failedRequirements.some(r => r.includes('too brief')));
});

test('evaluateJollyJesterEssay checks chapter evidence accurately', () => {
  const sampleTitle = 'On the Nature of Grammar and Victorian Scholarship';
  const sampleEssay = `
    The study of grammar is a noble pursuit, and scholars have dedicated centuries to its principles.
    While the master was reading ancient manuscripts, his students were learning the rules of syntax.
    By the time the dictionary had been published, thousands had embraced its wisdom.
    We will soon discover that as soon as the sun rises, the library door opens.
    
    Each of the apprentices was eager to excel. The news regarding the lexicographical discovery was alarming.
    Reflexive pronouns allow authors to express how individuals examine themselves.
    Scholars must study diligently; they ought to observe every exception carefully.
    
    The courier could have delivered the folio earlier, but he must have encountered an impediment.
    The larger lexicon was compiled by Soleiman Haim, and it is believed that his work remains peerless.
    Nobody understands why the manuscript disappeared, or whether it shall ever return.
    
    The book, which was bound in fine calfskin, delighted the bibliophile who discovered it.
    The student avoided making careless slips, and he decided to consult the authorities.
    The professor made him rewrite the entire treatise, because he was not accustomed to working with haste.
    Not only did the work demand patience, but also it required profound linguistic erudition.
    
    Although difficulties were frequent, the research continued until night fell.
    Having finished his translation, the scholar rested beneath the oak trees.
    The text was demanding; nevertheless, every student gained immense insight.
    If I were the rector, I would bestow upon him the highest honors; had he arrived earlier, we would have celebrated.
    Rarely did the court witness such dedication, and he always insisted on absolute precision.
  `;

  const result = evaluateJollyJesterEssay(sampleTitle, sampleEssay);
  assert.equal(result.totalWords >= 200, true);
  assert.equal(result.titleRelevance, true);
  assert.ok(result.passedChaptersCount >= 18);
});

test('applyActiveExitPenalty consumes 2 attempts when abandoning an active uncompleted challenge', () => {
  const activeState: JollyJesterState = {
    unlocked: true,
    isCompleted: false,
    attemptsRemaining: 3,
    hasViewedWarning: true,
    active: true,
    lastDraftTitle: '',
    lastDraftEssay: ''
  };

  const penalized = applyActiveExitPenalty(activeState);
  assert.equal(penalized.active, false);
  assert.equal(penalized.attemptsRemaining, 1);
  assert.equal(penalized.interruptionLogged?.penaltyApplied, 2);

  // Non-active state should incur zero penalty
  const inactiveOncePenalized = applyActiveExitPenalty(penalized);
  assert.equal(inactiveOncePenalized.attemptsRemaining, 1);
});

