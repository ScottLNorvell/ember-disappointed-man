import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  keyboard: inject.service(),
  keyboardKeys: computed.reads('keyboard.keys')
});
