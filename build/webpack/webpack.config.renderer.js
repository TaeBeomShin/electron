module.exports = require('./webpack.config.base')({
  target: 'renderer',
  alwaysHasNode: true,
  targetDeletesNodeGlobals: true,
  wrapInitWithTryCatch: true
})
