import wordList from '../../../utils/word-list';
import { module, test } from 'qunit';
import Ember from 'ember';

module('Unit | Utility | word list');

// Replace this with your real tests.
test('it is an array of words', function(assert) {
  assert.ok(Ember.isArray(wordList), 'the word list is an array!');
  assert.ok(wordList.length, 'the array of words is not empty!');
  assert.ok(wordList.indexOf('javascript') !== -1, 'javascript is in there!');
});
