import Ember from 'ember';
import isSpace from 'ember-disappointed-man/utils/is-space';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  guess: inject.service(),
  guessed: computed.reads('guess.guessed'),
  tagName: 'span',
  displayLetter: computed('letter.letter', function() {
    if (this.get('isSpace')) {
      return '&nbsp;';
    }
    return this.get('letter.letter');
  }),
  isSpace: computed('letter.letter', function() {
    return isSpace(this.get('letter.letter'));
  }),
  showLetter: computed.alias('letter.show')
});
