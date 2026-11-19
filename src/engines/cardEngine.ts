/**
 * VESTA Card Progression Engine
 * Evaluates achievement cards and Jolly Jester eligibility based on question mastery.
 * Created by Jackdaw
 */

import { PLAYING_CARDS_DECK } from '../data/cardsData';
import { PlayingCardData } from '../types';

export function getAllCards(): PlayingCardData[] {
  return PLAYING_CARDS_DECK;
}

/**
 * Checks whether all questions associated with a card are in the mastered set
 */
export function isCardEarned(card: PlayingCardData, masteredQuestionIds: Set<string>): boolean {
  if (!card.questionIds || card.questionIds.length === 0) return false;
  return card.questionIds.every(qId => masteredQuestionIds.has(qId));
}

/**
 * Returns all earned cards given a set of mastered question IDs
 */
export function getEarnedCards(masteredQuestionIds: Set<string>): PlayingCardData[] {
  return PLAYING_CARDS_DECK.filter(card => isCardEarned(card, masteredQuestionIds));
}

/**
 * Checks if all 52 cards are earned, making Jolly Jester eligible
 */
export function isJollyJesterEligible(masteredQuestionIds: Set<string>): boolean {
  return PLAYING_CARDS_DECK.every(card => isCardEarned(card, masteredQuestionIds));
}

/**
 * Finds the currently active card being worked on (the first unearned card)
 */
export function getCurrentTargetCard(masteredQuestionIds: Set<string>): {
  currentCard: PlayingCardData | null;
  progressRatio: number;
  completedQuestionsInCard: number;
  totalQuestionsInCard: number;
} {
  for (const card of PLAYING_CARDS_DECK) {
    if (!isCardEarned(card, masteredQuestionIds)) {
      const completed = card.questionIds.filter(qId => masteredQuestionIds.has(qId)).length;
      return {
        currentCard: card,
        progressRatio: completed / card.questionIds.length,
        completedQuestionsInCard: completed,
        totalQuestionsInCard: card.questionIds.length
      };
    }
  }

  // All 52 cards completed!
  const lastCard = PLAYING_CARDS_DECK[PLAYING_CARDS_DECK.length - 1];
  return {
    currentCard: lastCard,
    progressRatio: 1,
    completedQuestionsInCard: lastCard.questionIds.length,
    totalQuestionsInCard: lastCard.questionIds.length
  };
}
