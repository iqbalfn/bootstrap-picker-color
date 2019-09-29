'use strict'

const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Bootstrap Picker Color v0.0.2 (https://iqbalfn.github.io/bootstrap-picker-color/)
  * Copyright 2019 Iqbal Fauzi
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */`
}

module.exports = getBanner
