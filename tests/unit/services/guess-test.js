import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:guess', 'Unit | Service | guess');

test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('reset clears stuff!', function(assert) {
  let service = this.subject({
    guessed: new Set(['a', 'b', 'c', 'd', 'e', 'f']),
    badGuesses: Ember.A(['a', 'b', 'c']),
    goodGuesses: Ember.A(['d', 'e', 'f']),
  });
  assert.equal(service.get('guessed.size'), 6, 'precond - guessed is full...');
  assert.equal(service.get('goodGuesses.length'), 3, 'precond - goodGuesses is full...');
  assert.equal(service.get('badGuesses.length'), 3, 'precond - badGuesses is full...');

  service.reset();

  assert.equal(service.get('guessed.size'), 0, 'guessed is empty after reset!');
  assert.equal(service.get('goodGuesses.length'), 0, 'goodGuesses is empty after reset!');
  assert.equal(service.get('badGuesses.length'), 0, 'badGuesses is empty after reset!');
});

test('guess guesses a letter!', function(assert) {
  let checkLettersCalled = 0;
  let service = this.subject({
    word: {
      letterSet: new Set(['a', 'b']),
      letterCount: 2,
      checkLetters() {
        checkLettersCalled += 1;
      }
    }
  });

  assert.equal(service.get('guessed.size'), 0, 'precond - guessed is empty...');
  assert.equal(service.get('goodGuesses.length'), 0, 'precond - goodGuesses is empty...');
  assert.equal(service.get('badGuesses.length'), 0, 'precond - badGuesses is empty...');
  assert.equal(checkLettersCalled, 0, 'precond - checkLetters not called yet...');
  assert.ok(!service.get('success'), 'precond - we do not have success...');

  let firstGoodGuess = 'a';

  service.guess(firstGoodGuess);

  assert.ok(service.get('guessed').has(firstGoodGuess), 'guessed has firstGoodGuess...');
  assert.ok(service.get('goodGuesses').contains(firstGoodGuess), 'firstGoodGuess was a goodGuess');
  assert.ok(!service.get('badGuesses').contains(firstGoodGuess), 'firstGoodGuess was not a badGuess');
  assert.equal(checkLettersCalled, 1, 'checkLetters called once');
  assert.ok(!service.get('success'), 'we do not have success...');

  let badGuess = 'z';

  service.guess(badGuess);

  assert.ok(service.get('guessed').has(badGuess), 'guessed has badGuess...');
  assert.ok(!service.get('goodGuesses').contains(badGuess), 'badGuess was not a goodGuess');
  assert.ok(service.get('badGuesses').contains(badGuess), 'badGuess was a badGuess');
  assert.equal(checkLettersCalled, 2, 'checkLetters called twice');
  assert.ok(!service.get('success'), 'we do not have success...');

  let secondGoodGuess = 'b';

  service.guess(secondGoodGuess);

  assert.ok(service.get('guessed').has(secondGoodGuess), 'guessed has secondGoodGuess...');
  assert.ok(service.get('goodGuesses').contains(secondGoodGuess), 'secondGoodGuess was a goodGuess');
  assert.ok(!service.get('badGuesses').contains(secondGoodGuess), 'secondGoodGuess was not a badGuess');
  assert.equal(checkLettersCalled, 3, 'checkLetters called thrice');

  assert.ok(service.get('success'), 'we guessed all the letters and THUS => SUCCESS!!!');
});
