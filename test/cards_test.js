import { Deck } from '../src/card.js';
import * as assert from 'assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import lodash from 'lodash';

describe('Deck', () => {
  const sampleCards = [
    'Ace of Spades',
    '2 of Spades',
    '3 of Spades',
    '4 of Spades',
    '5 of Spades',
    '6 of Spades',
    '7 of Spades',
    '8 of Spades',
    '9 of Spades',
    '10 of Spades',
    'Jack of Spades',
    'Queen of Spades',
    'King of Spades',
  ]; 

  it('should create a deck with the given cards shuffled', () => {
    const deck = new Deck(sampleCards);
    assert.equal(deck.cards.length, sampleCards.length);
    assert.assertNotEquals(deck.cards, sampleCards);
  });

  it('should draw a card and reduce the deck size by 1', () => {
    const deck = new Deck(sampleCards);
    const initialSize = deck.cards.length;
    const drawnCard = deck.drawCard();
    assert.equal(deck.cards.length, initialSize - 1);
    assert.assert(drawnCard);
  });

  it('should return null when drawing from an empty deck', () => {
    const deck = new Deck(sampleCards);
    while (deck.hasCards()) {
      deck.drawCard();
    }
    const drawnCard = deck.drawCard();
    assert.equal(drawnCard, null);
  });

  it('should reshuffle the deck and reset it to the original cards', () => {
    const deck = new Deck(sampleCards);
    deck.drawCard();
    deck.reShuffle();
    assert.assertEquals(lodash.sortBy(deck.cards), lodash.sortBy(sampleCards));
  });
});
