import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('the-disappointed-man', 'Integration | Component | the disappointed man', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{the-disappointed-man}}`);

  assert.equal(this.$().text().trim(), '');
});
