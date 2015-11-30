import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dm-keyboard', 'Integration | Component | dm keyboard', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dm-keyboard}}`);

  let keysMatcher = /[a-z]*/i;

  assert.ok(keysMatcher.test(this.$().text().trim()));
});
