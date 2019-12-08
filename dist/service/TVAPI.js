"use strict";Object.defineProperty(exports, "__esModule", {value: true});const TotalVoice = require('totalvoice-node');
require('dotenv/config');

const TVAPI = new TotalVoice(process.env.SECRET_KEY);

exports. default = TVAPI;
