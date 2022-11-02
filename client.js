'use strict';



const Discord = require('discord.js');

const hook = new Discord.WebhookClient('webhook id', 'webhook token');

hook.send('Server Status: DOWN! <a:gostatus:1032519464396263424>');
