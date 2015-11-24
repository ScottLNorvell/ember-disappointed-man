import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  guess: inject.service(),
  success: computed.reads('guess.success'),
  gameOver: computed.reads('guess.gameOver'),
  show: computed.or('success', 'gameOver')
});
