

export default RangeSchema = new SimpleSchema({
  "low" : {
    type: QuantitySchema
    },
  "high" : {
    type: QuantitySchema
    }
});



Range = {
  create: function(){
    var newRange = {

    };

    return newRange;
  }
}
