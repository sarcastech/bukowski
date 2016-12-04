'use strict'

let defaults = Object.seal({
  speed: 50,
  element: null,
  text: '',
  counter: 0,
  cursor: '_'
})

let Bukowski = function (config) {
  this.config = Object.assign(defaults, config)
  this.interval = setInterval(this.play(), this.config.speed)
}

Bukowski.prototype = {
  play: function () {
    this.element.innerHTML = this.text.substr(0, this.counter) + this.cursor

    if (this.counter <= this.text.length) {
      this.counter += 1
    } else {
      this.counter = 0
      this.element.innerHTML = this.text
      clearInterval(this.interval)
    }
  }
}

module.exports = Bukowski
