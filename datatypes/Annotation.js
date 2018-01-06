
Annotation = {
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
