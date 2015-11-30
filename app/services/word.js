import Ember from 'ember';
import wordList from 'ember-disappointed-man/utils/word-list';
import isSpace from 'ember-disappointed-man/utils/is-space';

const {
  Service,
  computed
} = Ember;

export default Service.extend({
  wordList,
  secretWord: '',
  displayWord: computed('secretWord', function() {
    let { secretWord } = this;
    let letterArray = secretWord.split('');
    let displayWord = Ember.A();
    for (let i = 0, len = letterArray.length; i < len; i++) {
      let letter = letterArray[i];
      displayWord.pushObject(Ember.Object.create({letter, show: isSpace(letter)}));
    }
    return displayWord;
  }),
  uniqLetters: computed('secretWord', function() {
    let letters = this.get('secretWord')
      .replace(/\s/g,'')
      .split('');
    return Ember.A(letters).uniq();
  }),
  letterCount: computed.alias('uniqLetters.length'),
  letterSet: computed('uniqLetters', function() {
    return new Set(this.get('uniqLetters'));
  }),
  setSecretWord() {
    let { wordList } = this;
    let index = Math.floor(Math.random() * wordList.length);
    this.set('secretWord', wordList[index]);
  },
  checkLetters(guessed) {
    let displayWord = this.get('displayWord');
    for (let i = 0, len = displayWord.length; i < len; i++) {
      let letter = displayWord[i];
      let show = isSpace(letter.letter) || guessed.has(letter.letter);
      letter.set('show', show);
    }
  }
});
