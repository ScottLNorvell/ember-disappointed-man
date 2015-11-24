import Ember from 'ember';

const {
  Route,
  inject
} = Ember;

export default Route.extend({
  word: inject.service(),
  beforeModel() {
    this.get('word').setSecretWord();
  }
});
