var Code = require('../datatypes/Code');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');


exports.AnnotationSchema = new SimpleSchema({
  "authorReference" : {
    type: ReferenceSchema,
    optional: true
    },
  "authorString" : {
    type: String,
    optional: true
    },
  "time" : {
    type: Date,
    optional: true
    },
  "text" : {
    type: String,
    optional: true
    }
});

exports.DefaultAnnotation = {
  create: function(authorString, text){
    var newAnnotation = {
      authorString: '',
      time: new Date(),
      text: ''
    };

    if (authorString) {
      newAnnotation.authorString = authorString;
    }
    if (text) {
      newAnnotation.text = text;
    }

    return newAnnotation;
  }
}