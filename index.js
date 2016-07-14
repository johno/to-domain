'use strict'

module.exports = function toDomain (domain) {
  if (typeof domain !== 'string') {
    throw new TypeError('to-domain expected a string')
  }

  return domain.trim().replace(/[\W_]+/g, '-')
}
