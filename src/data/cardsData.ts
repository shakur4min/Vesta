/**
 * 52 Playing Cards Specification & Question Mapping
 * Complete 52-card standard deck: 13 Spades, 13 Clubs, 13 Hearts, 13 Diamonds
 * Each suit contains: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King
 * Created by Jackdaw
 */

import { CardRank, CardSuit, PlayingCardData } from '../types';

const SUITS: CardSuit[] = ['spades', 'clubs', 'hearts', 'diamonds'];
const RANKS: CardRank[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function rankDisplayName(rank: CardRank): string {
  switch (rank) {
    case 'A': return 'Ace';
    case 'J': return 'Jack';
    case 'Q': return 'Queen';
    case 'K': return 'King';
    default: return rank;
  }
}

// Generates the 52 standard playing cards according to the specification:
// Chapters 1-8: 2 cards per chapter (Q1-10, Q11-20) -> 16 cards
// Chapters 9-20: 3 cards per chapter (Q1-7, Q8-14, Q15-20) -> 36 cards
// Total: 16 + 36 = 52 cards
function generateDeck(): PlayingCardData[] {
  const deck: PlayingCardData[] = [];
  let cardIndex = 0;

  // Chapter 1 to 8: 2 cards each
  for (let ch = 1; ch <= 8; ch++) {
    // Card 1: Q1-10
    const suit1 = SUITS[Math.floor(cardIndex / 13)];
    const rank1 = RANKS[cardIndex % 13];
    const qIds1 = Array.from({ length: 10 }, (_, i) => `ch-${ch.toString().padStart(2, '0')}-q${i + 1}`);

    deck.push({
      id: `card-${cardIndex + 1}`,
      cardIndex,
      suit: suit1,
      rank: rank1,
      name: `${rankDisplayName(rank1)} of ${capitalize(suit1)}`,
      namePersian: `${translateRank(rank1)}ِ ${translateSuit(suit1)}`,
      chapterNumber: ch,
      cardInChapter: 1,
      questionRange: [1, 10],
      questionIds: qIds1,
      title: `Chapter ${ch} Novice Seal`,
      victorianFlavor: `Mastery of Chapter ${ch} foundational forms.`
    });
    cardIndex++;

    // Card 2: Q11-20
    const suit2 = SUITS[Math.floor(cardIndex / 13)];
    const rank2 = RANKS[cardIndex % 13];
    const qIds2 = Array.from({ length: 10 }, (_, i) => `ch-${ch.toString().padStart(2, '0')}-q${i + 11}`);

    deck.push({
      id: `card-${cardIndex + 1}`,
      cardIndex,
      suit: suit2,
      rank: rank2,
      name: `${rankDisplayName(rank2)} of ${capitalize(suit2)}`,
      namePersian: `${translateRank(rank2)}ِ ${translateSuit(suit2)}`,
      chapterNumber: ch,
      cardInChapter: 2,
      questionRange: [11, 20],
      questionIds: qIds2,
      title: `Chapter ${ch} Scholar Seal`,
      victorianFlavor: `Advanced syntactical command of Chapter ${ch}.`
    });
    cardIndex++;
  }

  // Chapter 9 to 20: 3 cards each
  for (let ch = 9; ch <= 20; ch++) {
    // Card 1: Q1-7
    const suit1 = SUITS[Math.floor(cardIndex / 13)];
    const rank1 = RANKS[cardIndex % 13];
    const qIds1 = Array.from({ length: 7 }, (_, i) => `ch-${ch.toString().padStart(2, '0')}-q${i + 1}`);

    deck.push({
      id: `card-${cardIndex + 1}`,
      cardIndex,
      suit: suit1,
      rank: rank1,
      name: `${rankDisplayName(rank1)} of ${capitalize(suit1)}`,
      namePersian: `${translateRank(rank1)}ِ ${translateSuit(suit1)}`,
      chapterNumber: ch,
      cardInChapter: 1,
      questionRange: [1, 7],
      questionIds: qIds1,
      title: `Chapter ${ch} Initiate Emblem`,
      victorianFlavor: `Core rules of Chapter ${ch} successfully absorbed.`
    });
    cardIndex++;

    // Card 2: Q8-14
    const suit2 = SUITS[Math.floor(cardIndex / 13)];
    const rank2 = RANKS[cardIndex % 13];
    const qIds2 = Array.from({ length: 7 }, (_, i) => `ch-${ch.toString().padStart(2, '0')}-q${i + 8}`);

    deck.push({
      id: `card-${cardIndex + 1}`,
      cardIndex,
      suit: suit2,
      rank: rank2,
      name: `${rankDisplayName(rank2)} of ${capitalize(suit2)}`,
      namePersian: `${translateRank(rank2)}ِ ${translateSuit(suit2)}`,
      chapterNumber: ch,
      cardInChapter: 2,
      questionRange: [8, 14],
      questionIds: qIds2,
      title: `Chapter ${ch} Adept Crest`,
      victorianFlavor: `Subtle exceptions and transformations mastered in Chapter ${ch}.`
    });
    cardIndex++;

    // Card 3: Q15-20
    const suit3 = SUITS[Math.floor(cardIndex / 13)];
    const rank3 = RANKS[cardIndex % 13];
    const qIds3 = Array.from({ length: 6 }, (_, i) => `ch-${ch.toString().padStart(2, '0')}-q${i + 15}`);

    deck.push({
      id: `card-${cardIndex + 1}`,
      cardIndex,
      suit: suit3,
      rank: rank3,
      name: `${rankDisplayName(rank3)} of ${capitalize(suit3)}`,
      namePersian: `${translateRank(rank3)}ِ ${translateSuit(suit3)}`,
      chapterNumber: ch,
      cardInChapter: 3,
      questionRange: [15, 20],
      questionIds: qIds3,
      title: `Chapter ${ch} Sovereign Medallion`,
      victorianFlavor: `Full fluency and error prevention in Chapter ${ch}.`
    });
    cardIndex++;
  }

  return deck;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function translateSuit(suit: CardSuit): string {
  switch (suit) {
    case 'spades': return 'پیک';
    case 'clubs': return 'گشنیز';
    case 'hearts': return 'دل';
    case 'diamonds': return 'خشت';
  }
}

function translateRank(rank: CardRank): string {
  switch (rank) {
    case 'J': return 'سرباز';
    case 'Q': return 'بی‌بی';
    case 'K': return 'شاه';
    case 'A': return 'آس';
    default: return rank;
  }
}

export const PLAYING_CARDS_DECK: PlayingCardData[] = generateDeck();
