import User from '../models/UserData.js';

const GetUserData = async () => {
  try {
    const users = await User.find();

    return users.map(user => ({ phone: user.phone, name: user.name })); 
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
};

export default GetUserData;
