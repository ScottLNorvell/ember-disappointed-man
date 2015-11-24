import Ember from 'ember';

const {
  Service,
  inject
} = Ember;

export default Service.extend({
  word: inject.service(),
  guess: inject.service(),
  keyboard: inject.service(),
  playAgain() {
    this.get('word').setSecretWord();
    this.get('guess').reset();
    this.get('keyboard').reset();
  }
});
