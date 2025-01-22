import mongoose from 'mongoose';

const UserDataSchema = new mongoose.Schema({
  name: String,
  phone: String
});

const UserData = mongoose.model('User', UserDataSchema);

export default UserData;
