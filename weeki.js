/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');

const Language = require('../language');
const Lang = Language.getString('scrapers');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

Asena.addCommand({pattern: 'weki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 
    if (match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]}'') return await message.sendMessage(Lang.NEED_WORDS);    
    var reply = await message.reply(Lang.SEARCHING);

    var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
        .page(match[1]);

    var info = await arama.rawContent();
    await message.reply(info);
    await reply.delete();
}));
