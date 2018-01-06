exports.PeriodSchema = new SimpleSchema({
  "start" : {
    optional: true,
    type : Date
  },
  "end" : {
    optional: true,
    type : Date
  }
});

exports.DefaultPeriod = {
  start: null,
  end: null
}