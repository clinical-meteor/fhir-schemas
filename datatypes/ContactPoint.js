export default ContactPointSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "ContactPoint",
    },
  "system" : {
    optional: true,
    type: Code
    },
  "value" : {
    optional: true,
    type: String
    },
  "use" : {
    optional: true,
    type: Code
    },
  "rank" : {
    optional: true,
    type: Number // PositiveInt
    },
  "period" : {
    optional: true,
    type: PeriodSchema
    }
});




ContactPoint = {
  create: function(){
    var newContactPoint = {

    };

    return newContactPoint;
  }
}
