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
Blockly.JavaScript['discord_reply'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (surroundOn.variables.split(", ").includes("message")) return "message.reply(" + text + ");\n";
    return "";
};
Blockly.JavaScript['discord_send'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (surroundOn.variables.split(", ").includes("message")) return "message.channel.send(" + text + ");\n";
    if (surroundOn.variables.split(", ").includes("channel")) return "channel.send(" + text + ");\n";
    return "";
};
Blockly.JavaScript['discord_editmessage'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (surroundOn.variables.split(", ").includes("message")) return "message.edit(" + text + ");\n";
    return "";
};
Blockly.JavaScript['discord_deletemessage'] = function(block) {
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (surroundOn.variables.split(", ").includes("message")) return "message.delete();\n";
    return "";
};
Blockly.JavaScript['discord_reaction'] = function(block) {
    return [block.getFieldValue('REACTION'), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['discord_react'] = function(block) {
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (surroundOn.variables.split(", ").includes("message")) return "message.react(" + reaction + ");\n";
    return "";
};
Blockly.JavaScript['event_on_menu'] = function(block) {
    return [block.getFieldValue('ACTION'), Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['event_on'] = function(block) {
    var action = Blockly.JavaScript.valueToCode(block, 'ACTION', Blockly.JavaScript.ORDER_NONE) || "";
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
            variables = "members, guild, chunk, index, count, nonce";
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
            variables = "rateLimitInfo, timeout, limit, method, path, route";
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
Blockly.JavaScript['event_on_variables'] = function (block) {
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) {
        return "";
    }else {
        return [block.getFieldValue("VARIABLE"), Blockly.JavaScript.ORDER_NONE];
    }
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
Blockly.JavaScript['event_on_message_content'] = function(block) {
    var surroundOn = getSurroundOn(block);
    if (surroundOn === null) return "";
    if (!surroundOn.variables)  return "";
    if (!"message" in surroundOn.variables.split(", "))  return "";
    return ["message.content", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sensing_log'] = function(block) {
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return "console.log(" + text + ");\n";
};
Blockly.JavaScript['operator_startswith'] = function(block) {
    var string1 = Blockly.JavaScript.valueToCode(block, 'STRING1') || "";
    var string2 = Blockly.JavaScript.valueToCode(block, 'STRING2') || "";
    return [string1 + ".startsWith(" + string2 + ")", Blockly.JavaScript.ORDER_EQUALITY];
};
Blockly.JavaScript['math_angle'] = function(block) {
    return [block.getFieldValue('NUM'), Blockly.JavaScript.ORDER_NONE];
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
Blockly.JavaScript['event_whenflagclicked'] = function(block) {
    return "// Flag";
};
// Blockly.JavaScript['when_anykeypress'] = function(block) {
//     var variable_key = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('KEY'), Blockly.Variables.NAME_TYPE);
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('keypress', function(event) {\n  " + variable_key + " = event.code;\n" + argument0 + "});\n";
//     return code;
// };
// Blockly.JavaScript['when_keypress'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('mousepress', function(event) {\nif (" + block.getFieldValue('KEY') + " == event.code) {\n" + argument0 + "}\n});\n";
//     return code;
// };
// Blockly.JavaScript['when_keydown'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('keydown', function(event) {\nif (" + block.getFieldValue('KEY') + " == event.code) {\n" + argument0 + "}\n});\n";
//     return code;
// };
// Blockly.JavaScript['when_keyup'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('keyup', function(event) {\nif (" + block.getFieldValue('KEY') + " == event.code) {\n" + argument0 + "}\n});\n";
//     return code;
// };
// Blockly.JavaScript['when_mousedown'] = function(block) {
//     var variable_mouseX = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEX'), Blockly.Variables.NAME_TYPE);
//     var variable_mouseY = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEY'), Blockly.Variables.NAME_TYPE);
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('mousedown', function(event) {\nif (" + block.getFieldValue('MOUSE_BUTTON') + " == event.button) {\n  " + variable_mouseX + " = event.mouseX;\n  " + variable_mouseY + " = event.mouseY;\n" + argument0 + "}\n});\n";
//     return code;
// };
// Blockly.JavaScript['when_mouseup'] = function(block) {
//     var variable_mouseX = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEX'), Blockly.Variables.NAME_TYPE);
//     var variable_mouseY = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEY'), Blockly.Variables.NAME_TYPE);
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('mouseup', function(event) {\nif (" + block.getFieldValue('MOUSE_BUTTON') + " == event.button) {\n  " + variable_mouseX + " = event.mouseX;\n  " + variable_mouseY + " = event.mouseY;\n" + argument0 + "}\n});\n";
//     return code;
// };
// Blockly.JavaScript['when_mousemove'] = function(block) {
//     var variable_mouseX = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEX'), Blockly.Variables.NAME_TYPE);
//     var variable_mouseY = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MOUSEY'), Blockly.Variables.NAME_TYPE);
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "document.addEventListener('mousemove', function(event) {\n  " + variable_mouseX + " = event.mouseX;\n  " + variable_mouseY + " = event.mouseY;\n" + argument0 + "});\n";
//     return code;
// };
// Blockly.JavaScript['when_mouseclick'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "sprite.addEventListener('mouseclick', function() {\n" + argument0 + "});\n"
//     return code;
// };
// Blockly.JavaScript['when_mousehover'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "sprite.addEventListener('mousehover', function() {\n" + argument0 + "});\n"
//     return code;
// };
// Blockly.JavaScript['when_mouseout'] = function(block) {
//     var argument0 = Blockly.JavaScript.statementToCode(block, 'DO', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '';
//     var code = "sprite.addEventListener('mouseout', function() {\n" + argument0 + "});\n"
//     return code;
// };
// Blockly.JavaScript['date_get'] = function(block) {
//     var code = '0';
//     switch (block.getFieldValue('TYPE')) {
//         case "YEAR":
//             code = 'new Date().getFullYear()';
//             break;
//         case "MONTH":
//             code = 'new Date().getMonth()';
//             break;
//         case "DATE":
//             code = 'new Date().getDate()';
//             break;
//         case "DAY":
//             code = 'new Date().getDay()';
//             break;
//         case "HOUR":
//             code = 'new Date().getHours()';
//             break;
//         case "MINUTE":
//             code = 'new Date().getMinutes()';
//             break;
//         case "SECOND":
//             code = 'new Date().getSeconds()';
//             break;
//     }
//     return code;
// };
// Blockly.JavaScript['text_includes'] = function(block) {
//     var argument0 = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
//     var argument1 = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
//     var code = argument0 + '.includes(' + argument1 + ')';
//     return code;
// };
