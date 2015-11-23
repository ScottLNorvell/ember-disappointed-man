import Ember from 'ember';

const {
  Service,
  computed,
  inject
} = Ember;

export default Service.extend({
  word: inject.service(),
  guessed: computed(function() {
    return new Set();
  }),
  goodLetters: computed('word.displayWord', function() {
    let displayWord = this.get('word.displayWord');
    return new Set(displayWord.mapBy('letter'));
  }),
  badLetters: Ember.A(),
  guess(letter) {
    let guessed = this.get('guessed');
    let goodLetters = this.get('goodLetters');
    guessed.add(letter);
    if (!goodLetters.has(letter)) {
      this.get('badLetters').pushObject(letter);
    }
    this.get('word').checkLetters(guessed);
  },
  reset() {
    this.get('guessed').clear();
    this.get('badLetters').clear();
  }
});
