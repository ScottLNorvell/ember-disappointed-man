import Ember from 'ember';
import wordList from 'ember-disappointed-man/utils/word-list';

export default Ember.Service.extend({
  wordList,
  secretWord: '',
  setSecretWord() {
    let wordList = this.get('wordList');
    let index = Math.floor(Math.random() * wordList.length);
    this.set('secretWord', wordList[index]);
  }
});
