const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = ({
  title: String,
  price: String,
  description: String,
  image: [ String ],
  location: String,
  lat: Number,
  lng: Number,
  author: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reviews'
    }
  ],
});

module.exports = mongoose.model('Post', PostSchema);