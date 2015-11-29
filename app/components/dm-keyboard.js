import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['dm-keyboard'],
  keyboard: inject.service(),
  keyboardKeys: computed.reads('keyboard.keys')
});
