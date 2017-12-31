export default RatioSchema = new SimpleSchema({
  "numerator" : {
    type: QuantitySchema
  },
  "denominator" : {
    type: QuantitySchema
  }
});
