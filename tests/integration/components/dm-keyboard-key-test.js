import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dm-keyboard-key', 'Integration | Component | dm keyboard key', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dm-keyboard-key}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dm-keyboard-key}}
      template block text
    {{/dm-keyboard-key}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
