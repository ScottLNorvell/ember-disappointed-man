import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const {
  isPresent,
  isArray
} = Ember;

moduleFor('service:word', 'Unit | Service | word', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('it can #setSecretWord', function(assert) {
  let wordList = ['a', 'b', 'c'];
  let service = this.subject({ wordList });

  assert.equal(service.get('secretWord'), '', 'precond - secret word absent');
  service.setSecretWord();
  assert.ok(wordList.indexOf(service.get('secretWord')) !== -1, 'secret words set!');
});

test('display word shows blanks instead of letters when nothing is guessed', function(assert) {
  let secretWord = 'bunnies';
  let service = this.subject({ secretWord });

  let displayWord = service.get('displayWord');
  assert.ok(isPresent(displayWord), 'displayWord exists!');
  assert.ok(isArray(displayWord), 'displayWord is an array!');

  let actualWord = displayWord.mapBy('letter').join('');

  assert.equal(actualWord, secretWord, 'displayWord IS secret word!');
});
