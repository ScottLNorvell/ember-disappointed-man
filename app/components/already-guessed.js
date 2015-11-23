import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  guess: inject.service(),
  alreadyGuessed: computed.reads('guess.badLetters')
});
