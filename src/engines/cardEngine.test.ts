import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getAllCards,
  isCardEarned,
  getEarnedCards,
  isJollyJesterEligible
} from './cardEngine';
import { resolveQAOverride } from '../config/qaOverride';

test('deck contains exactly 52 standard cards with 13 ranks (A through K) in each of the 4 suits', () => {
  const cards = getAllCards();
  assert.equal(cards.length, 52);

  const expectedRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const suits = ['spades', 'clubs', 'hearts', 'diamonds'] as const;

  for (const suit of suits) {
    const suitCards = cards.filter(c => c.suit === suit);
    assert.equal(suitCards.length, 13, `Suit ${suit} must have exactly 13 cards`);
    const ranks = suitCards.map(c => c.rank);
    assert.deepEqual(ranks, expectedRanks, `Suit ${suit} must contain A through K in order`);
  }
});

test('deck maps all 400 questions without duplicates or gaps', () => {
  const cards = getAllCards();
  const allQuestionIds = new Set<string>();

  for (const card of cards) {
    for (const qId of card.questionIds) {
      assert.equal(allQuestionIds.has(qId), false, `Duplicate question ID found: ${qId}`);
      allQuestionIds.add(qId);
    }
  }

  assert.equal(allQuestionIds.size, 400, 'Total questions mapped must be exactly 400');
});

test('chapters 1-8 have exactly 2 cards, and chapters 9-20 have exactly 3 cards', () => {
  const cards = getAllCards();
  const chapterCardCounts: Record<number, number> = {};

  for (const card of cards) {
    chapterCardCounts[card.chapterNumber] = (chapterCardCounts[card.chapterNumber] || 0) + 1;
  }

  for (let ch = 1; ch <= 8; ch++) {
    assert.equal(chapterCardCounts[ch], 2, `Chapter ${ch} must have 2 cards`);
  }
  for (let ch = 9; ch <= 20; ch++) {
    assert.equal(chapterCardCounts[ch], 3, `Chapter ${ch} must have 3 cards`);
  }
});

test('card earning and Jolly Jester eligibility works strictly and separately from the 52 cards', () => {
  const cards = getAllCards();
  const mastered = new Set<string>();

  assert.equal(isJollyJesterEligible(mastered), false);

  // Master questions for first card (Ace of Spades)
  for (const qId of cards[0].questionIds) {
    mastered.add(qId);
  }

  assert.equal(isCardEarned(cards[0], mastered), true);
  assert.equal(isCardEarned(cards[1], mastered), false);
  assert.equal(getEarnedCards(mastered).length, 1);

  // Master all 400
  for (const card of cards) {
    for (const qId of card.questionIds) {
      mastered.add(qId);
    }
  }

  assert.equal(isJollyJesterEligible(mastered), true);
  assert.equal(getEarnedCards(mastered).length, 52);
});

test('QA_OVERRIDE resolver strictly disables all overrides in production mode', () => {
  const sampleConfig = {
    enabled: true,
    chapter: 5,
    question: 10,
    card: 12,
    unlockAllChapters: true,
    unlockAllQuestions: true,
    unlockAllCards: true,
    unlockJollyJester: true,
    openJollyJester: true,
    simulateJokerWin: true,
    bypassAnswerValidation: true,
    resetTestProgress: false
  };

  const devResolved = resolveQAOverride(sampleConfig, false);
  assert.equal(devResolved.enabled, true);
  assert.equal(devResolved.unlockAllCards, true);
  assert.equal(devResolved.unlockAllQuestions, true);

  const prodResolved = resolveQAOverride(sampleConfig, true);
  assert.equal(prodResolved.enabled, false);
  assert.equal(prodResolved.unlockAllCards, false);
  assert.equal(prodResolved.unlockAllQuestions, false);
  assert.equal(prodResolved.unlockJollyJester, false);
  assert.equal(prodResolved.simulateJokerWin, false);
});


