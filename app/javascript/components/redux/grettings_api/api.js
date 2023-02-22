import axios from 'axios';

const url = 'http://127.0.0.1:3000/api/v1/greetings';

const receiveGreeting = async () => {
  const response = await axios.get(url);
  return response.data;
};

export default receiveGreeting;
