import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dm-modal', 'Integration | Component | dm modal', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dm-modal}}`);

  let matcher = /the word was/i;

  assert.ok(matcher.test(this.$().text().trim()));
});
