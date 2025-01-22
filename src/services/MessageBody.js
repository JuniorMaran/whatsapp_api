import axios from 'axios';

const MessageBody = async (name, phone) => {
  console.log('phone ',name, phone);
  const messageData = {
    messaging_product: 'whatsapp',
    to: phone,
    type: 'template',
    template: {
      name: 'ola',
      language: { code: 'pt_BR' },
      components: [
        {
          type: 'body',
          parameters: [
            {
              type: 'text',
              text: name,
            },
          ],
        },
      ],
    },
  };

  try {
    const response = await axios({
      method: 'POST',
      url: `${process.env.FB_API_URL}/${process.env.FB_PHONE_NUMBER}/messages`,
      headers: {
        'Authorization': `Bearer ${process.env.FB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      data: messageData
    });
    
    console.log('Mensagem enviada com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', JSON.stringify(error.response?.data || error.message));
    throw error;
  }
};

export default MessageBody;