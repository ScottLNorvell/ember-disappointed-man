import Ember from 'ember';

const {
  Service,
  computed
} = Ember;

// TODO: support different configurations?
export default Service.extend({
  alphabet: 'abcdefghijklmnopqrstuvwxyz',
  keys: computed(function() {
    let letters = this.get('alphabet').split('');
    let keys = [];
    for (let i = 0, len = letters.length; i < len; i++) {
      let letter = letters[i];
      keys.push(Ember.Object.create({
        key: letter,
        guessed: ''
      }));
    }
    return Ember.A(keys);
  }),
  reset() {
    this.get('keys').setEach('guessed', '');
  }
});
