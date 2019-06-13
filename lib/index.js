"use strict"

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

var erbExpression = new RegExp('<%(.*?)\%>', 'g')

// import processors
module.exports.processors = {
  ".js.erb": {
    preprocess: function(text, filename) {
      var lintableText = text
        .replace(erbExpression, '\'Ignored Ruby Expression.\'')

      return [lintableText]
    },
    postprocess: function(messages, filename) {
      return messages[0]
    }
  }
}
