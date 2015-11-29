
const duration = 250;

export default function() {
  this.transition(
    this.hasClass('display-letter'),
    this.toValue(true),
    this.use('toDown', { duration }),
    this.reverse('toUp', { duration })
  );
}
