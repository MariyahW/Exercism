// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
    let item = cards[position];
    return item;
  }
  
  /**
   * Exchange card with replacementCard at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   * @param {number} replacementCard
   *
   * @returns {number[]} the cards with the change applied
   */
  export function setItem(cards, position, replacementCard) {
    let newDeck = cards;
    newDeck.splice(position, 1,replacementCard);
    return newDeck;
  }
  
  /**
   * Insert newCard at the end of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards with the newCard applied
   */
  export function insertItemAtTop(cards, newCard) {
   let pushDeck = cards;
    pushDeck.push(newCard);
    return (pushDeck);
  }
  
  /**
   * Remove the card at the 0-based position
   *
   * @param {number[]} cards
   * @param {number} position
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItem(cards, position) {
    let spliceDeck = cards;
    spliceDeck.splice(position, 1);
    return (spliceDeck);
  }
  
  /**
   * Remove card from the end of the cards array
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItemFromTop(cards) {
    let popDeck = cards;
    popDeck.pop();
    return (popDeck);
  }
  
  /**
   * Insert newCard at beginning of the cards array
   *
   * @param {number[]} cards
   * @param {number} newCard
   *
   * @returns {number[]} the cards including the new card
   */
  export function insertItemAtBottom(cards, newCard) {
    let unshiftDeck = cards;
    unshiftDeck.unshift(newCard);
    return (unshiftDeck);
  }
  
  /**
   * Remove card from the beginning of the cards
   *
   * @param {number[]} cards
   *
   * @returns {number[]} the cards without the removed card
   */
  export function removeItemAtBottom(cards) {
    let shiftDeck = cards;
    shiftDeck.shift();
    return (shiftDeck);
  }
  
  /**
   * Compare the number of cards with the given stackSize
   *
   * @param {number[]} cards
   * @param {number} stackSize
   *
   * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
   */
  export function checkSizeOfStack(cards, stackSize) {
    
    let size = cards.length;

    return size==stackSize;
  }
  