const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const CustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    city: String,
    phone: String,
    address: String,
    image: String,
    description: String
  },
  {
    timestamps: false,
    statics: {
      findByNam(name) {
        return this.find({ name: new RegExp(name, 'i') });
      }
    }
  }
);

CustomerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });

const User = mongoose.model('customer', CustomerSchema);

module.exports = User;
