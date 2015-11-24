TODO:

- [x] the-disappointed-man (component) 
    - [x] listens to disappointment level
    - [x] bind to class `'.disappointment-level--{{level}}'`
- [x] game (service, handle game details)
  - [x] playAgain (resets everything...)
- [x] guess service
    - [x] guess ()
- [x] word-list (util)
- [ ] letter-in-play (component letter=letter use animations with liquid if as to whether to display [letter || _])
- [x] word (service)
    - [x] sets secret word (get from api? hard list?)
    - [x] displays letters and blanks
- [x] keyboard (component, take in letters, spit out letter buttons)
    - [ ] perhaps it controls the order?
    - [x] alphabetical
    - [ ] qwerty?
    - [ ] dvorak?
- [x] letter-button (component, action "guess letter")
- [x] guessed (component, display "wrong letters")
    - [x] could also just keep track of state in keyboard (save space)


