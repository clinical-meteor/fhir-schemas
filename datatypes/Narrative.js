
exports.NarrativeSchema = new SimpleSchema({
  "status" : {
    type: Code,
    optional: true,
    defaultValue: 'additional'
  },
  "div" : {
    type: String,
    optional: true
  }
});



exports.DefaultNarrative = {
  create: function(){
    var newNarrative = {

    };

    return newNarrative;
  }
}
