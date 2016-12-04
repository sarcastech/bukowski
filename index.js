'use strict'

let intervalLength = 50
let target
let text
let counter = 0
let cursor = '_'
let interval

function play () {
  target.innerHTML = text.substr(0, counter) + cursor

  if (counter <= text.length) {
    counter += 1
  } else {
    counter = 0
    target.innerHTML = text
    clearInterval(interval)
  }
};

export function start (el, str) {
  target = el
  text = str
  interval = setInterval(play(), intervalLength)
}
