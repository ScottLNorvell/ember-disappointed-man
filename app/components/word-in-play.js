import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  word: inject.service(),
  displayWord: computed.reads('word.displayWord')
});
