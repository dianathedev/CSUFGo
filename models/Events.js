var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  location: String,
  contact: String,
  description: String,
  creator: String,
  subscribers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscriber'}]
});

mongoose.model('Event', EventSchema);
