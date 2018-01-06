export default GroupSchema = new SimpleSchema({
  "linkId" : {
    optional: true,
    type: String
    },
  "title" : {
    optional: true,
    type: String
    },
  "concept" : {
    optional: true,
    type: [ CodingSchema ]
    },
  "text" : {
    optional: true,
    type: String
    },
  "required" : {
    optional: true,
    type: Boolean
    },
  "repeats" : {
    optional: true,
    type: Boolean
    },
  "group" : {
    optional: true,
    blackbox: true,
    type: GroupSchema
    },
  "question.$.linkId" : {
    optional: true,
    type: String
    },
  "question.$.concept" : {
    optional: true,
    type: [ CodingSchema ]
    },
  "question.$.text" : {
    optional: true,
    type: String
    },
  "question.$.type" : {
    optional: true,
    type: String
    },
  "question.$.required" : {
    optional: true,
    type: Boolean
    },
  "question.$.repeats" : {
    optional: true,
    type: Boolean
    },
  "question.$.options" : {
    optional: true,
    type: ReferenceSchema //(ValueSet)
    },
  "question.$.option" : {
    optional: true,
    type: [ CodingSchema ]
    },
  "question.$.group" : {
    optional: true,
    blackbox: true,
    type: GroupSchema
    },
});



Group = {
  create: function(){
    var newGroup = {

    };

    return newGroup;
  }
}