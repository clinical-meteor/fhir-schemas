export default SampledDataSchema = new SimpleSchema({
  "origin" : {
    type: QuantitySchema
    },
  "period" : {
    type: Number
    },
  "factor" : {
    type: Number
    },
  "lowerLimit" : {
    type: Number
    },
  "upperLimit" : {
    type: Number
    },
  "dimensions" : {
    type: Number
    },
  "data" : {
    type: String
    }
});



SampledData = {
  create: function(){
    var newSampledData = {

    };

    return newSampledData;
  }
}
