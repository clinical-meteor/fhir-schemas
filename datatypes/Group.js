var Code = require('../datatypes/Code');
var CodingSchema = require('../datatypes/Coding');
var PeriodSchema = require('../datatypes/Period');
var ReferenceSchema = require('../datatypes/Reference');



const _GroupSchema = new SimpleSchema({
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
    type: _GroupSchema
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
    type: _GroupSchema
    },
});
exports.GroupSchema = _GroupSchema;

exports.DefaultGroup = {
  create: function(){
    var newGroup = {

    };

    return newGroup;
  }
}

