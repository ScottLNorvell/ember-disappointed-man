import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('letter-in-play', 'Integration | Component | letter in play', {
  integration: true
});

test('it shows a blank when show => false', function(assert) {
  let letter = Ember.Object.create({
    letter: 'a',
    show: false
  });

  this.set('letter', letter);

  this.render(hbs`{{letter-in-play letter=letter }}`);
  assert.equal(this.$().text().trim(), '_');
});

test('it shows a letter when show => true', function(assert) {
  let letter = Ember.Object.create({
    letter: 'a',
    show: true
  });

  this.set('letter', letter);

  this.render(hbs`{{letter-in-play letter=letter }}`);
  assert.equal(this.$().text().trim(), 'a');
});

test('it shows a non-breaking space when letter is space...', function(assert) {
  let letter = Ember.Object.create({
    letter: ' ',
    show: true
  });

  this.set('letter', letter);

  this.render(hbs`{{letter-in-play letter=letter }}`);
  let matcher = /&nbsp;/;
  assert.ok(matcher.test(this.$().html()));
});
