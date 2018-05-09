function areSiblings (x, y) {
  if (x === y) {
    return false
  }

  return Object.keys(x).every(k => y[k] === x[k])
}

export {areSiblings}
