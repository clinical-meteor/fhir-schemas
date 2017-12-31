export default SignatureSchema = new SimpleSchema({
  "type" : {
    type: [ CodingSchema ]
    },
  "when" : {
    type: Date
    },
  "whoUri" : {
    optional: true,
    type: String
    },
  "whoReference" : {
    optional: true,
    type: ReferenceSchema
    },
  "contentType" : {
    optional: true,
    type: String
  },
  "onBehalfOfUri" : {
    optional: true,
    type: String
    },
  "onBehalfOfReference" : {
    optional: true,
    type: ReferenceSchema
    },
  "blob" : {
    optional: true,
    blackbox: true,
    type: Object
    }  
});


Signature = {
  create: function(){
    var newSignature = {

    };

    return newSignature;
  }
}
