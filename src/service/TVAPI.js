const TotalVoice = require('totalvoice-node');
require('dotenv/config');

const TVAPI = new TotalVoice(process.env.SECRET_KEY);

export default TVAPI;
