import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['dm-word-in-play'],
  attributeBindings: ['style'],
  word: inject.service(),
  displayWord: computed.reads('word.displayWord'),
  secretWord: computed.reads('word.secretWord'),
  style: computed('secretWord', function() {
    let width = this.get('secretWord').length * 18.75;
    let style =  `width: ${width}px`;
    return Ember.String.htmlSafe(style);
  })
});
