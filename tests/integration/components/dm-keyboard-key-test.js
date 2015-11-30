import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dm-keyboard-key', 'Integration | Component | dm keyboard key', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dm-keyboard-key}}`);

  assert.equal(this.$().text().trim(), '');

});

test('it renders with a sweet letter', function(assert) {
  let key = Ember.Object.create({
    key: 'a',
    guessed: ''
  });

  this.set('key', key);

  this.render(hbs`{{dm-keyboard-key key=key}}`);

  assert.equal(this.$().text().trim(), 'a');
});
