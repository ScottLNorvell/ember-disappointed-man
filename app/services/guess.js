import Ember from 'ember';

const {
  Service,
  computed,
  inject
} = Ember;

export default Service.extend({
  word: inject.service(),
  letterCount: computed.reads('word.letterCount'),
  displayWord: computed.reads('word.displayWord'),
  guessed: computed(function() {
    return new Set();
  }),
  goodLetters: computed.reads('word.letterSet'),
  success: computed('goodGuesses.length', 'letterCount', function() {
    return this.get('goodGuesses.length') >= this.get('letterCount');
  }),
  badGuesses: Ember.A(),
  goodGuesses: Ember.A(),
  gameOver: computed.equal('badGuesses.length', 7),
  guess(letter) {
    let guessed = this.get('guessed');
    let goodLetters = this.get('goodLetters');
    let goodGuess = goodLetters.has(letter);
    guessed.add(letter);
    if (goodGuess) {
      this.get('goodGuesses').pushObject(letter);
    } else {
      this.get('badGuesses').pushObject(letter);
    }
    this.get('word').checkLetters(guessed);
    return goodGuess;
  },
  reset() {
    this.get('guessed').clear();
    this.get('badGuesses').clear();
    this.get('goodGuesses').clear();
  }
});
