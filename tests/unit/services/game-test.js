import { moduleFor, test } from 'ember-qunit';

moduleFor('service:game', 'Unit | Service | game', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});

test('playAgain resets everything!', function(assert) {
  assert.expect(3);
  let service = this.subject({
    word: {
      setSecretWord() {
        assert.ok(true, 'setSecretWord called!');
      }
    },
    guess: {
      reset() {
        assert.ok(true, 'reset called on guess!');
      }
    },
    keyboard: {
      reset() {
        assert.ok(true, 'reset called keyboard!');
      }
    },
  });

  service.playAgain();
});
