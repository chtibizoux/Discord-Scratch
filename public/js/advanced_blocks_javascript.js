var start = 'const fs = require("fs"), discord = require("discord.js");\nconst bot = new discord.Client();\n';
var end = "\nbot.login(token);";
// var message = "";
// for (var i = 0; i < Object.keys(Blockly.Blocks).length; i++) {
//     if (!Blockly.JavaScript[Object.keys(Blockly.Blocks)[i]]) {
//         message += 'Blockly.JavaScript["' + Object.keys(Blockly.Blocks)[i] + '"] = function(block) {\n    var code = "";\n    return code;\n};\n';
//     }
// }
// console.log(message);
Blockly.JavaScript['discord_token'] = function(block) {
    return ["const token = '" + block.getFieldValue('TEXT') + "';\n", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_activitypartyID'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".activity.partyID", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_activitytype'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".activity.type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_content'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".content", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_cleancontent'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".cleanContent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_attachementscollection'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".attachments", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_url'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_type'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_webhookID'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".webhookID", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_edits'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".edits", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_embeds'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".embeds", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reactions'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reactions.cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_removereactions'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".reactions.removeAll();\n";
};
Blockly.JavaScript['message_reactionsresolve'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reactions.resolve(" + reaction + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reactionsresolveid'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reactions.resolveID(" + reaction + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_mentionseveryone'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".mentions.everyone", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_mentionscollection'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".mentions." + block.getFieldValue("OBJECTMENU"), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_mentionshas'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".mentions.has(" + object + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_timestamps'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + "." + block.getFieldValue("OBJECTMENU"), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reference'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reference." + block.getFieldValue("OBJECTMENU"), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flagsbitfield'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".flags.bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flagsadd'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "''";
    return message + ".flags.add(" + bits + ");\n";
};
Blockly.JavaScript['message_flagsany'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "''";
    return message + ".flags.any(" + bit + ");\n";
};
Blockly.JavaScript['message_flagsfreeze'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".flags.freeze();\n";
};
Blockly.JavaScript['message_flagshas'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".flags.has(" + object + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flagsmissing'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "''";
    return [message + ".flags.missing(" + bits + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flagsremove'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "''";
    return message + ".flags.remove(" + bits + ");\n";
};
Blockly.JavaScript['message_flagsserialize'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".flags.serialize()", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flagsserialize'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".flags.toArray()", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_getboolean'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + "." + block.getFieldValue("OBJECTMENU"), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_getobject'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + "." + block.getFieldValue("OBJECTMENU"), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var object = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".reply(" + text + ")" + finalstring;
};
Blockly.JavaScript['message_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var object = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".edit(" + text + ")" + finalstring;
};
Blockly.JavaScript['message_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var object = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".delete()" + finalstring;
};
Blockly.JavaScript['message_reaction'] = function(block) {
    return ["'" + block.getFieldValue('REACTION') + "'", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_react'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    var object = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".react(" + reaction + ")" + finalstring;
};
Blockly.JavaScript['message_pin'] = function (block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "''";
    return message + ".pin({ reason: '" + reason + "' })" + finalstring;
};
Blockly.JavaScript['message_unpin'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "''";
    return message + ".unpin({ reason: '" + reason + "' })" + finalstring;
};
Blockly.JavaScript['message_crosspost'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".crosspost()" + finalstring;
};
Blockly.JavaScript['message_suppressembeds'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".suppressEmbeds()" + finalstring;
};
Blockly.JavaScript['message_awaitreactions'] = function (block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".awaitReactions(" + filter + ", { time: " + time + ", idle: " + idle + ", dispose: " + dispose + ", max: " + max + ", maxEmojis: " + maxEmojis + ", maxUsers: " + maxUsers + " })" + finalstring;
};
Blockly.JavaScript['message_reactioncollector'] = function (block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return "const collector = " +  message + ".createReactionCollector(" + filter + ", { time: " + time + ", idle: " + idle + ", dispose: " + dispose + ", max: " + max + ", maxEmojis: " + maxEmojis + ", maxUsers: " + maxUsers + " })" + finalstring;
};
Blockly.JavaScript['message_reactioncollectoron'] = function (block) {
    var statement = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    return "collector.on('" + block.getFieldValue('ACTION') + "', function(object){\n" + statement + "})" + finalstring;
};
Blockly.JavaScript['message_reactioncollectoronobject'] = function (block) {
    return ["object", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_fetchwebhook'] = function (block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".fetchWebhook()" + finalstring;
};
// bot.user.client
// bot.user.flags
// bot.user.avatar
// bot.user.createdAt
// bot.user.createdTimestamp
// bot.user.defaultAvatarURL
// bot.user.discriminator
// bot.user.dmChannel
// bot.user.lastMessage
// bot.user.lastMessageChannelID
// bot.user.lastMessageID
// bot.user.locale
// bot.user.partial
// bot.user.presence
// bot.user.system
// bot.user.tag
// bot.user.avatarURL()
// bot.user.createDM()
// bot.user.deleteDM()
// bot.user.displayAvatarURL()
// bot.user.equals()
// bot.user.fetchFlags()
// bot.user.send()
// bot.user.typingDurationIn()
// bot.user.typingIn()
// bot.user.typingSinceIn()
Blockly.JavaScript['channel_send'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var object = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".send(" + text + ");\n";
};
Blockly.JavaScript['channel_create'] = function(block) {
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var type = Blockly.JavaScript.valueToCode(block, 'TYPE', Blockly.JavaScript.ORDER_NONE) || "";
    var rateLimitPerUser = Blockly.JavaScript.valueToCode(block, 'USERLIMIT', Blockly.JavaScript.ORDER_NONE) || "";
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_NONE) || "";
    var nsfw = Blockly.JavaScript.valueToCode(block, 'NSFW', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    var bitrate = Blockly.JavaScript.valueToCode(block, 'BITRATE', Blockly.JavaScript.ORDER_NONE) || "";
    var userLimit = Blockly.JavaScript.valueToCode(block, 'USERLIMIT', Blockly.JavaScript.ORDER_NONE) || "";
    var object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "";
    return object + ".channels.create(" + name + ", { rateLimitPerUser: " + rateLimitPerUser + ", userLimit: " + userLimit + ", bitrate: " + bitrate + ", parent: " + parent + ", topic: " + topic + ", nsfw: " + nsfw + ", position: " + position + ", type: " + type + ", reason: " + reason + ", permissionOverwrites: " + permissions + " });\n";
};
Blockly.JavaScript['guild_systemchannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".systemChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['event_on'] = function(block) {
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "channelCreate":
        case "channelDelete":
        case "webhookUpdate":
            variables = "channel";
            break;
        case "channelPinsUpdate":
            variables = "channel, time";
            break;
        case "channelUpdate":
            variables = "oldChannel, newChannel";
            break;
        case "warn":
        case "debug":
            variables = "info";
            break;
        case "emojiCreate":
        case "emojiDelete":
            variables = "emoji";
            break;
        case "emojiUpdate":
            variables = "oldEmoji, newEmoji";
            break;
        case "error":
            variables = "error";
            break;
        case "guildBanAdd":
        case "guildBanRemove":
            variables = "guild, user";
            break;
        case "guildCreate":
        case "guildDelete":
        case "guildUnavailable":
        case "guildIntegrationsUpdate":
            variables = "guild";
            break;
        case "guildMemberAdd":
        case "guildMemberAvailable":
        case "guildMemberRemove":
            variables = "member";
            break;
        case "guildMembersChunk":
            variables = "members, guild, chunk";
            break;
        case "guildMemberSpeaking":
            variables = "member, speaking";
            break;
        case "guildMemberUpdate":
            variables = "oldMember, newMember";
            break;
        case "guildUpdate":
            variables = "oldGuild, newGuild, invalidated";
            break;
        case "inviteCreate":
        case "inviteDelete":
            variables = "invite";
            break;
        case "message":
        case "messageDelete":
        case "messageReactionRemoveAll":
            variables = "message";
            break;
        case "messageDeleteBulk":
            variables = "messages";
            break;
        case "messageReactionAdd":
        case "messageReactionRemove":
            variables = "messageReaction";
            break;
        case "messageReactionRemoveEmoji":
            variabless = "reaction";
            break;
        case "messageUpdate":
        case "presenceUpdate":
            variables = "oldPresence, newPresence";
            break;
        case "rateLimit":
            variables = "rateLimitData";
            break;
        case "roleCreate":
        case "roleDelete":
            variables = "role";
            break;
        case "roleUpdate":
            variables = "oldRole, newRole";
            break;
        case "shardDisconnect":
            variables = "event, id";
            break;
        case "shardError":
            variables = "error, shardID";
            break;
        case "shardReady":
            variables = "id, unavailableGuilds";
            break;
        case "shardReconnecting":
            variables = "id";
            break;
        case "shardResume":
            variables = "id, replayedEvents";
            break;
        case "typingStart":
            variables = "channel, user";
            break;
        case "userUpdate":
            variables = "oldUser, newUser";
            break;
        case "voiceStateUpdate":
            variables = "oldState, newState";
            break;
    }
    block.variables = variables;
    return ["bot.on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['event_variables'] = function (block) {
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) {
        return "";
    }else {
        return [block.getFieldValue("VARIABLE"), Blockly.JavaScript.ORDER_NONE];
    }
};
Blockly.JavaScript['event_whenflagclicked'] = function(block) {
    return "// Flag\n";
};
function getSurroundOn(block) {
    do {
        if (block.type === 'event_on') {
            return block;
        }
        block = block.getSurroundParent();
    } while (block);
    return null;
}
Blockly.JavaScript['event_trycatch'] = function (block) {
    var substrack = Blockly.JavaScript.statementToCode(block, 'SUBSTACK') || "";
    var substrack2 = Blockly.JavaScript.statementToCode(block, 'SUBSTACK2') || "";
    return "try {\n" + substrack + "} catch(error) {\n" + substrack2 + "}\n";
};
Blockly.JavaScript['event_catcherror'] = function (block) {
    return ["error", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['event_exit'] = function (block) {
    return "process.exit(1);\n";
};
Blockly.JavaScript['operator_startswith'] = function(block) {
    var string1 = Blockly.JavaScript.valueToCode(block, 'STRING1') || "";
    var string2 = Blockly.JavaScript.valueToCode(block, 'STRING2') || "";
    return [string1 + ".startsWith(" + string2 + ")", Blockly.JavaScript.ORDER_EQUALITY];
};
Blockly.JavaScript['control_wait'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_FUNCTION_CALL) || 0;
    var argument1 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
    var code = 'setTimeout(function(){\n' + argument1 + '}, ' + (parseInt(argument0) * 1000) + ');\n';
    return code;
};
Blockly.JavaScript['control_wait_until'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_FUNCTION_CALL) || 0;
    var argument1 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
    var waitFor = Blockly.JavaScript.provideFunction_(
        'waitFor',
        [ 'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(conditionFunction) {',
          '  const poll = resolve => {',
          '    if(conditionFunction()) resolve();',
          '    else setTimeout(_ => poll(resolve), 400);',
          '  }',
          '  return new Promise(poll);',
          '}']);
    // Generate the function call for this block.
    var code = waitFor + "(_ => " + argument0 + ").then(_ => {\n" + argument1 + "});\n";
    return code;
};
Blockly.JavaScript['sensing_log'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return "console.log(" + text + ");\n";
};
Blockly.JavaScript['sensing_resetdatetonow'] = function(block) {
    var date = Blockly.JavaScript.provideFunction_('date',['var ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = new Date()']);
    var code = date + " = new Date();\n";
    return code;
};
Blockly.JavaScript['sensing_resetdate'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "";
    var date = Blockly.JavaScript.provideFunction_('date',['var ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = new Date()']);
    var code = date + " = new Date(" + argument0 + ");\n";
    return code;
};
Blockly.JavaScript['sensing_setdate'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "0";
    var date = Blockly.JavaScript.provideFunction_('date',['var ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = new Date()']);
    switch (block.getFieldValue('CURRENTMENU')) {
        case 'YEAR':
            var code = date + ".setFullYear(" + argument0 + ");\n";
            break;
        case 'MONTH':
            var code = date + ".setMonth(" + argument0 + ");\n";
            break;
        case 'DATE':
            var code = date + ".setDate(" + argument0 + ");\n";
            break;
        case 'HOUR':
            var code = date + ".setHours(" + argument0 + ");\n";
            break;
        case 'MINUTE':
            var code = date + ".setMinutes(" + argument0 + ");\n";
            break;
        case 'SECOND':
            var code = date + ".setSeconds(" + argument0 + ");\n";
            break;
        case 'MILLISECOND':
            var code = date + ".setMilliseconds(" + argument0 + ");\n";
            break;
    }
    return code;
};
Blockly.JavaScript['sensing_getdate'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "0";
    var date = Blockly.JavaScript.provideFunction_('date',['var ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + ' = new Date()']);
    switch (block.getFieldValue('CURRENTMENU')) {
        case 'YEAR':
            var code = date + ".getFullYear()";
            break;
        case 'MONTH':
            var code = date + ".getMonth()";
            break;
        case 'DATE':
            var code = date + ".getDate()";
            break;
        case 'HOUR':
            var code = date + ".getHours()";
            break;
        case 'MINUTE':
            var code = date + ".getMinutes()";
            break;
        case 'SECOND':
            var code = date + ".getSeconds()";
            break;
        case 'MILLISECOND':
            var code = date + ".getMilliseconds()";
            break;
        case 'DAYOFWEEK':
            var code = date + ".getDay()";
            break;
        case 'MILLISECONDSINCE1970':
            var code = date + ".getTime()";
            break;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_current'] = function(block) {
    switch (block.getFieldValue('CURRENTMENU')) {
        case 'YEAR':
            var code = "new Date().getFullYear()";
            break;
        case 'MONTH':
            var code = "new Date().getMonth()";
            break;
        case 'DATE':
            var code = "new Date().getDate()";
            break;
        case 'HOUR':
            var code = "new Date().getHours()";
            break;
        case 'MINUTE':
            var code = "new Date().getMinutes()";
            break;
        case 'SECOND':
            var code = "new Date().getSeconds()";
            break;
        case 'MILLISECOND':
            var code = "new Date().getMilliseconds()";
            break;
        case 'DAYOFWEEK':
            var code = "new Date().getDay()";
            break;
        case 'MILLISECONDSINCE1970':
            var code = "new Date().getTime()";
            break;
    }
    return [code, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_userid'] = function(block) {
    return ["bot.user.id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_username'] = function(block) {
    return ["bot.user.username", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_bot'] = function(block) {
    return ["bot", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_getid'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [argument0 + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_getobject'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "null";
    var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJECTMENU', Blockly.JavaScript.ORDER_NONE);
    return [argument0 + "." + argument1, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_getwithid'] = function(block) {
    var argument0 = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "''";
    var argument1 = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE) || "null";
    var argument2 = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var code = "";
    switch (block.getFieldValue('OBJECTMENU')) {
        case "MESSAGE":
            code = argument1 + ".messages.fetch(" + argument0 + ").then(function(object) {\n" + argument2 + "});\n";
            break;
        case "CHANNEL":
            code = argument1 + ".channels.fetch(" + argument0 + ").then(function(object) {\n" + argument2 + "});\n";
            break;
        case "GUILD":
            code = argument1 + ".guilds.fetch(" + argument0 + ").then(function(object) {\n" + argument2 + "});\n";
            break;
        case "ROLE":
            code = argument1 + ".roles.fetch(" + argument0 + ").then(function(object) {\n" + argument2 + "});\n";
            break;
    }
    return code;
};
Blockly.JavaScript['sensing_getwithidobject'] = function(block) {
    return ["object", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_then'] = function(block) {
    var thenStatement = Blockly.JavaScript.statementToCode(block, 'THEN') || "";
    var catchStatement = Blockly.JavaScript.statementToCode(block, 'CATCH') || "";
    return ".then(function(object){\n" + thenStatement + "}).catch(function(error){\n" + catchStatement + "});\n";
};
Blockly.JavaScript['sensing_thenobject'] = function(block) {
    return ["object", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_catcherror'] = function(block) {
    return ["error", Blockly.JavaScript.ORDER_NONE];
};
function getPath(name, block) {
    var path = Blockly.JavaScript.valueToCode(block, name, Blockly.JavaScript.ORDER_NONE) || "''";
    path = path.split("..").join("");
    if (path.startsWith("'/") || path.startsWith("'\\")) path = "'" + path.slice(2);
    if (path.startsWith("'./") || path.startsWith("'.\\")) path = "'" + path.slice(3);
    path = path.split("\\").join("\\\\");
    return "__dirname + " + path;
}
Blockly.JavaScript['filesystem_exists'] = function(block) {
    var path = getPath('PATH', block);
    return ["fs.existsSync(" + path + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['filesystem_readfile'] = function(block) {
    var path = getPath('PATH', block);
    return ["fs.readFileSync(" + path + ")", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['filesystem_writefile'] = function(block) {
    var path = getPath('PATH', block);
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "''";
    return "fs.writeFileSync(" + path + ", " + data + ");\n";
};
Blockly.JavaScript['filesystem_appendfile'] = function(block) {
    var path = getPath('PATH', block);
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "''";
    return "fs.appendFileSync(" + path + ", " + data + ");\n";
};
Blockly.JavaScript['filesystem_copyfile'] = function(block) {
    var src = getPath('SRC', block);
    var dest = getPath('DEST', block);
    return "fs.copyFileSync(" + src + ", " + dest + ", fs.constants.COPYFILE_EXCL);\n";
};
Blockly.JavaScript['filesystem_renamefile'] = function(block) {
    var oldFile = getPath('OLD', block);
    var newFile = getPath('NEW', block);
    return "fs.renameSync(" + oldFile + ", " + newFile + ");\n";
};
Blockly.JavaScript['filesystem_removefile'] = function(block) {
    var path = getPath('PATH', block);
    return "fs.rmSync(" + path + ");\n";
};
Blockly.JavaScript['filesystem_readdir'] = function(block) {
    var path = getPath('PATH', block);
    return "fs.readdirSync(" + path + ");\n";
};
Blockly.JavaScript['filesystem_mkdir'] = function(block) {
    var path = getPath('PATH', block);
    return "fs.mkdirSync(" + path + ");\n";
};
Blockly.JavaScript['filesystem_rmdir'] = function(block) {
    var path = getPath('PATH', block);
    return "fs.rmdirSync(" + path + ");\n";
};
