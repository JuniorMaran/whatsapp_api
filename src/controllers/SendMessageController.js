import MessageBody from '../services/MessageBody.js';
import GetUserData from '../services/GetUserData.js';


const SendMessageController = async (req, res) => {
    try {
      const users = await GetUserData();

      users.map(user => MessageBody(user.name, user.phone))
      res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default SendMessageController;
