import Twilio from"twilio";const client=new Twilio("ACef731a26f22c98bbc946c4b19b5fcf37","55ea110c0c4281057d573057e873f124");client.messages.list().then(e=>console.log("The most recent message is "+e[0].body)).catch(e=>console.log(e)),console.log("Getting your message log...");
//# sourceMappingURL=explore-dist.js.map