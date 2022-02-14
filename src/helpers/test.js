/**
 * Performs an assertion.
 * @ignore
 *
 * @param  {Boolean} condition - The expression to assert.
 * @param  {String}  errorMessage - The message to throw if the assertion fails
 * @param  {ErrorConstructor}   [ErrorType=Error] - The error to throw if the assertion fails.
 *
 * @throws {Error} If `condition` returns `false`.
 * 
 * SRC : https://github.com/dinerojs/dinero.js/blob/develop/src/services/assert.js
 * 
 * USAGE
 * 
 *   assert(
    isPercentage(percentage),
    'You must provide a numeric value between 0 and 100.',
    RangeError
  )
 * 
 * RangeError, TypeError
 * 
 */
const assert = function (condition, errorMessage, ErrorType = Error) {
  if (!condition) throw new ErrorType(errorMessage)
}

export {
	assert
}
