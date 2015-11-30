import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dm-modal-shower', 'Integration | Component | dm modal shower', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{dm-modal-shower}}`);

  assert.ok(/success/i.test(this.$().text().trim()));
});
