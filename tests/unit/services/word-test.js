import { moduleFor, test } from 'ember-qunit';

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
  let service = this.subject({
    wordList
  });
  assert.equal(service.get('secretWord'), '', 'precond - secret word absent');
  service.setSecretWord();
  assert.ok(wordList.indexOf(service.get('secretWord')) !== -1, 'secret words set!');
});
