import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['dm-modal'],
  word: inject.service(),
  game: inject.service(),
  secretWord: computed.reads('word.secretWord'),
  actions: {
    playAgain() {
      this.get('game').playAgain();
    }
  }
});
