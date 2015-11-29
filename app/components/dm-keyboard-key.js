import Ember from 'ember';

const {
  Component,
  computed,
  inject,
  isPresent
} = Ember;

export default Component.extend({
  classNames: ['dm-keyboard-key'],
  classNameBindings: ['guessed'],
  disabled: computed('guessed', 'gameComplete', function() {
    return isPresent(this.get('guessed')) || this.get('gameComplete');
  }),
  guess: inject.service(),
  gameComplete: computed.or('guess.gameOver', 'guess.success'),
  letter: computed.alias('key.key'),
  guessed: computed.alias('key.guessed'),

  click() {
    if (this.get('disabled')) { return; }
    let goodGuess = this.get('guess').guess(this.get('letter'));
    let guessed = goodGuess ? 'correct' : 'incorrect';
    this.set('guessed', guessed);
  }
});
