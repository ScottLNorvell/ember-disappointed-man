import Ember from 'ember';

const {
  Component,
  computed
} = Ember;

export default Component.extend({
  keyboardKeys: computed(function() {
    return Ember.A('abcdefghijklmnopqrstuvwxyz'.split(''))
  })
});
