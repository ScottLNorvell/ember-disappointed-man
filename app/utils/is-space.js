const spaceRegex = /\s/;

export default function isSpace(letter) {
  return spaceRegex.test(letter);
}
