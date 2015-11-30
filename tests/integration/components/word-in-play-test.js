import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('word-in-play', 'Integration | Component | word in play', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{word-in-play}}`);

  assert.equal(this.$().text().trim(), '');
});
