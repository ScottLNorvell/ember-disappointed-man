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
  attributeBindings: ['disabled'],
  disabled: computed('guessed', 'guess.gameOver', function() {
    return isPresent(this.get('guessed')) || this.get('guess.gameOver');
  }),
  tagName: 'button',
  guess: inject.service(),
  letter: computed.alias('key.key'),
  guessed: computed.alias('key.guessed'),
  click() {
    if (isPresent(this.get('guessed'))) { return; }
    let goodGuess = this.get('guess').guess(this.get('letter'));
    let guessed = goodGuess ? 'correct' : 'incorrect';
    this.set('guessed', guessed);
  }
});
