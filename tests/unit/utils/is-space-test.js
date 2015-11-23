import isSpace from '../../../utils/is-space';
import { module, test } from 'qunit';

module('Unit | Utility | is space');

// Replace this with your real tests.
test('it returns true if a letter is a space', function(assert) {
  let result = isSpace(' ');
  assert.ok(result);
});

test('it returns false if a letter is NOT a space', function(assert) {
  let result = isSpace('b');
  assert.ok(!result);
});
