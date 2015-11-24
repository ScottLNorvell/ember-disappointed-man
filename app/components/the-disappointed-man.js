import Ember from 'ember';

const {
  Component,
  computed,
  inject
} = Ember;

export default Component.extend({
  classNames: ['disappointed-man'],
  guess: inject.service(),
  success: computed.reads('guess.success'),
  badGuessCount: computed.reads('guess.badGuesses.length'),
  levelOfDisappointment: computed('badGuessCount', 'success', function() {
    if (this.get('success')) {
      return 0;
    } else {
      return this.get('badGuessCount');
    }
  }),
});
