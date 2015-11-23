import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['dm-keyboard-key'],
  classNameBindings: ['guessed'],
  attributeBindings: ['disabled'],
  disabled: computed.alias('guessed'),
  tagName: 'button',
  guess: inject.service(),
  guessed: false,
  click() {
    if (this.get('guessed')) { return; }

    this.set('guessed', true);
    this.get('guess').guess(this.get('letter'));
  }
});
