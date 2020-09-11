const Twilio = require('twilio');
// import Twilio from 'twilio';

// Don't leave your keys hanging out in a publicly accessable folder
const client = new Twilio('ACef731a26f22c98bbc946c4b19b5fcf37', '55ea110c0c4281057d573057e873f124');

client.messages
  .list()
  .then(messages => console.log(`The most recent message is ${messages[0].body}`))
  .catch(err => console.log(err));

console.log('Getting your message log...');
