var start = 'const fs = require("fs"), discord = require("discord.js");\nconst bot = new discord.Client();\n';
var end = "\nbot.login(token);";

Blockly.JavaScript['discord_token'] = function(block) {
    return ["const token = '" + block.getFieldValue('TEXT') + "';\n", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseclient_on'] = function(block) {
    var baseclient = Blockly.JavaScript.valueToCode(block, 'BASECLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "debug":
            variables = "info";
            break;
        case "rateLimit":
            variables = "rateLimitData";
            break;
        case "apiRequest":
            variables = "request";
            break;
        case "apiResponse":
            variables = "request, response";
            break;
        case "invalidRequestWarning":
            variables = "invalidRequestWarningData";
            break;
    }
    block.variables = variables;
    return [baseclient + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['baseclient_options'] = function(block) {
    var baseclient = Blockly.JavaScript.valueToCode(block, 'BASECLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseclient + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseclient_destroy'] = function(block) {
    var baseclient = Blockly.JavaScript.valueToCode(block, 'BASECLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseclient + ".destroy();\n";
};
Blockly.JavaScript['client_on'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "channelCreate":
            variables = "channel";
            break;
        case "channelDelete":
            variables = "channel";
            break;
        case "guildBanAdd":
            variables = "ban";
            break;
        case "guildBanRemove":
            variables = "ban";
            break;
        case "guildUnavailable":
            variables = "guild";
            break;
        case "guildDelete":
            variables = "guild";
            break;
        case "emojiCreate":
            variables = "emoji";
            break;
        case "emojiDelete":
            variables = "emoji";
            break;
        case "emojiUpdate":
            variables = "oldEmoji, newEmoji";
            break;
        case "guildIntegrationsUpdate":
            variables = "guild";
            break;
        case "guildMemberRemove":
            variables = "member";
            break;
        case "guildMemberUpdate":
            variables = "oldMember, newMember";
            break;
        case "guildMemberAvailable":
            variables = "member";
            break;
        case "roleCreate":
            variables = "role";
            break;
        case "roleDelete":
            variables = "role";
            break;
        case "roleUpdate":
            variables = "oldRole, newRole";
            break;
        case "guildScheduledEventCreate":
            variables = "guildScheduledEvent";
            break;
        case "guildScheduledEventDelete":
            variables = "guildScheduledEvent";
            break;
        case "guildScheduledEventUpdate":
            variables = "oldGuildScheduledEvent, newGuildScheduledEvent";
            break;
        case "guildScheduledEventUserAdd":
            variables = "guildScheduledEvent, user";
            break;
        case "guildScheduledEventUserRemove":
            variables = "guildScheduledEvent, user";
            break;
        case "stickerCreate":
            variables = "sticker";
            break;
        case "stickerDelete":
            variables = "sticker";
            break;
        case "stickerUpdate":
            variables = "oldSticker, newSticker";
            break;
        case "guildUpdate":
            variables = "oldGuild, newGuild";
            break;
        case "interactionCreate":
            variables = "interaction";
            break;
        case "inviteCreate":
            variables = "invite";
            break;
        case "inviteDelete":
            variables = "invite";
            break;
        case "messageCreate":
            variables = "message";
            break;
        case "messageDelete":
            variables = "message";
            break;
        case "messageDeleteBulk":
            variables = "messages";
            break;
        case "messageReactionAdd":
            variables = "messageReaction, user";
            break;
        case "messageReactionRemove":
            variables = "messageReaction, user";
            break;
        case "messageReactionRemoveAll":
            variables = "message, reactions";
            break;
        case "messageReactionRemoveEmoji":
            variables = "reaction";
            break;
        case "presenceUpdate":
            variables = "oldPresence, newPresence";
            break;
        case "stageInstanceCreate":
            variables = "stageInstance";
            break;
        case "stageInstanceDelete":
            variables = "stageInstance";
            break;
        case "stageInstanceUpdate":
            variables = "oldStageInstance, newStageInstance";
            break;
        case "threadCreate":
            variables = "thread";
            break;
        case "threadDelete":
            variables = "thread";
            break;
        case "threadListSync":
            variables = "threads";
            break;
        case "threadMembersUpdate":
            variables = "oldMembers, newMembers";
            break;
        case "threadMemberUpdate":
            variables = "oldMember, newMember";
            break;
        case "typingStart":
            variables = "typing";
            break;
        case "userUpdate":
            variables = "oldUser, newUser";
            break;
        case "voiceStateUpdate":
            variables = "oldState, newState";
            break;
        case "webhookUpdate":
            variables = "channel";
            break;
        case "warn":
            variables = "info";
            break;
        case "channelPinsUpdate":
            variables = "channel, time";
            break;
        case "channelUpdate":
            variables = "oldChannel, newChannel";
            break;
        case "guildCreate":
            variables = "guild";
            break;
        case "guildMemberAdd":
            variables = "member";
            break;
        case "guildMembersChunk":
            variables = "members, guild, chunk";
            break;
        case "messageUpdate":
            variables = "oldMessage, newMessage";
            break;
        case "shardResume":
            variables = "id, replayedEvents";
            break;
        case "threadUpdate":
            variables = "oldThread, newThread";
            break;
        case "shardReady":
            variables = "id, unavailableGuilds";
            break;
        case "shardDisconnect":
            variables = "event, id";
            break;
        case "shardReconnecting":
            variables = "id";
            break;
        case "ready":
            variables = "client";
            break;
        case "shardError":
            variables = "error, shardId";
            break;
        case "error":
            variables = "error";
            break;
        case "debug":
            variables = "info";
            break;
        case "rateLimit":
            variables = "rateLimitData";
            break;
        case "apiRequest":
            variables = "request";
            break;
        case "apiResponse":
            variables = "request, response";
            break;
        case "invalidRequestWarning":
            variables = "invalidRequestWarningData";
            break;
    }
    block.variables = variables;
    return [client + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['client_ws'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".ws", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_voice'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".voice", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_shard'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".shard", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_users'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".users", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_guilds'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".guilds", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_channels'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".channels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_sweepers'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".sweepers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_token'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_user'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_application'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".application", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_readyAt'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".readyAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_emojis'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".emojis", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_readyTimestamp'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".readyTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_uptime'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".uptime", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_options'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [client + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['client_login'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var token = Blockly.JavaScript.valueToCode(block, 'TOKEN', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".login(" + token + ")" + finalstring;
};
Blockly.JavaScript['client_isReady'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return client + ".isReady();\n";
};
Blockly.JavaScript['client_destroy'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return client + ".destroy();\n";
};
Blockly.JavaScript['client_fetchInvite'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchInvite(" + invite + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['client_fetchGuildTemplate'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var template = Blockly.JavaScript.valueToCode(block, 'TEMPLATE', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchGuildTemplate(" + template + ")" + finalstring;
};
Blockly.JavaScript['client_fetchWebhook'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var token = Blockly.JavaScript.valueToCode(block, 'TOKEN', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchWebhook(" + id + ", " + token + ")" + finalstring;
};
Blockly.JavaScript['client_fetchVoiceRegions'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return client + ".fetchVoiceRegions()" + finalstring;
};
Blockly.JavaScript['client_fetchSticker'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchSticker(" + id + ")" + finalstring;
};
Blockly.JavaScript['client_fetchPremiumStickerPacks'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return client + ".fetchPremiumStickerPacks()" + finalstring;
};
Blockly.JavaScript['client_sweepMessages'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var lifetime = Blockly.JavaScript.valueToCode(block, 'LIFETIME', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".sweepMessages(" + lifetime + ");\n";
};
Blockly.JavaScript['client_fetchGuildPreview'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchGuildPreview(" + guild + ")" + finalstring;
};
Blockly.JavaScript['client_fetchGuildWidget'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".fetchGuildWidget(" + guild + ")" + finalstring;
};
Blockly.JavaScript['client_generateInvite'] = function(block) {
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return client + ".generateInvite(" + options + ");\n";
};
Blockly.JavaScript['clientvoicemanager_client'] = function(block) {
    var clientvoicemanager = Blockly.JavaScript.valueToCode(block, 'CLIENTVOICEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientvoicemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientvoicemanager_adapters'] = function(block) {
    var clientvoicemanager = Blockly.JavaScript.valueToCode(block, 'CLIENTVOICEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientvoicemanager + ".adapters", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_on'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "debug":
            variables = "info";
            break;
        case "rateLimit":
            variables = "rateLimitData";
            break;
        case "apiRequest":
            variables = "request";
            break;
        case "apiResponse":
            variables = "request, response";
            break;
        case "invalidRequestWarning":
            variables = "invalidRequestWarningData";
            break;
    }
    block.variables = variables;
    return [webhookclient + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['webhookclient_id'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhookclient + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_createdTimestamp'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhookclient + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_createdAt'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhookclient + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_url'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhookclient + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_options'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhookclient + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhookclient_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_sendSlackMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".sendSlackMessage(" + body + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".edit(" + options + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_fetchMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var cacheOrOptions = Blockly.JavaScript.valueToCode(block, 'CACHEOROPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".fetchMessage(" + message + ", " + cacheOrOptions + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_editMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".editMessage(" + message + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_deleteMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var threadId = Blockly.JavaScript.valueToCode(block, 'THREADID', Blockly.JavaScript.ORDER_NONE) || "";
    return webhookclient + ".deleteMessage(" + message + ", " + threadId + ")" + finalstring;
};
Blockly.JavaScript['webhookclient_destroy'] = function(block) {
    var webhookclient = Blockly.JavaScript.valueToCode(block, 'WEBHOOKCLIENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return webhookclient + ".destroy();\n";
};
Blockly.JavaScript['websocketmanager_client'] = function(block) {
    var websocketmanager = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketmanager_gateway'] = function(block) {
    var websocketmanager = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketmanager + ".gateway", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketmanager_shards'] = function(block) {
    var websocketmanager = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketmanager + ".shards", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketmanager_status'] = function(block) {
    var websocketmanager = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketmanager + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketmanager_ping'] = function(block) {
    var websocketmanager = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketmanager + ".ping", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketshard_on'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "close":
            variables = "event";
            break;
        case "allReady":
            variables = "unavailableGuilds";
            break;
    }
    block.variables = variables;
    return [websocketshard + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['websocketshard_manager'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketshard + ".manager", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketshard_id'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketshard + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketshard_status'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketshard + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketshard_ping'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [websocketshard + ".ping", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['websocketshard_send'] = function(block) {
    var websocketshard = Blockly.JavaScript.valueToCode(block, 'WEBSOCKETSHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var important = Blockly.JavaScript.valueToCode(block, 'IMPORTANT', Blockly.JavaScript.ORDER_NONE) || "";
    return websocketshard + ".send(" + data + ", " + important + ");\n";
};
Blockly.JavaScript['applicationcommandmanager_permissions'] = function(block) {
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandmanager + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandmanager_cache'] = function(block) {
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandmanager_client'] = function(block) {
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".create(" + command + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandmanager_set'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var commands = Blockly.JavaScript.valueToCode(block, 'COMMANDS', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".set(" + commands + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandmanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".edit(" + command + ", " + data + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandmanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".delete(" + command + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandmanager_resolve'] = function(block) {
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['applicationcommandmanager_resolveId'] = function(block) {
    var applicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandmanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['applicationcommandpermissionsmanager_guild'] = function(block) {
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandpermissionsmanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandpermissionsmanager_guildId'] = function(block) {
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandpermissionsmanager + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandpermissionsmanager_commandId'] = function(block) {
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandpermissionsmanager + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandpermissionsmanager_client'] = function(block) {
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommandpermissionsmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommandpermissionsmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandpermissionsmanager + ".fetch(" + options + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandpermissionsmanager_set'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandpermissionsmanager + ".set(" + options + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandpermissionsmanager_add'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandpermissionsmanager + ".add(" + options + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandpermissionsmanager_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandpermissionsmanager + ".remove(" + options + ")" + finalstring;
};
Blockly.JavaScript['applicationcommandpermissionsmanager_has'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var applicationcommandpermissionsmanager = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMANDPERMISSIONSMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommandpermissionsmanager + ".has(" + options + ")" + finalstring;
};
Blockly.JavaScript['baseguildemojimanager_cache'] = function(block) {
    var baseguildemojimanager = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemojimanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemojimanager_client'] = function(block) {
    var baseguildemojimanager = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemojimanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemojimanager_resolve'] = function(block) {
    var baseguildemojimanager = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildemojimanager + ".resolve(" + emoji + ");\n";
};
Blockly.JavaScript['baseguildemojimanager_resolveId'] = function(block) {
    var baseguildemojimanager = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildemojimanager + ".resolveId(" + emoji + ");\n";
};
Blockly.JavaScript['baseguildemojimanager_resolveIdentifier'] = function(block) {
    var baseguildemojimanager = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildemojimanager + ".resolveIdentifier(" + emoji + ");\n";
};
Blockly.JavaScript['basemanager_client'] = function(block) {
    var basemanager = Blockly.JavaScript.valueToCode(block, 'BASEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['cachedmanager_cache'] = function(block) {
    var cachedmanager = Blockly.JavaScript.valueToCode(block, 'CACHEDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [cachedmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['cachedmanager_client'] = function(block) {
    var cachedmanager = Blockly.JavaScript.valueToCode(block, 'CACHEDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [cachedmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['cachedmanager_resolve'] = function(block) {
    var cachedmanager = Blockly.JavaScript.valueToCode(block, 'CACHEDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return cachedmanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['cachedmanager_resolveId'] = function(block) {
    var cachedmanager = Blockly.JavaScript.valueToCode(block, 'CACHEDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return cachedmanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['channelmanager_cache'] = function(block) {
    var channelmanager = Blockly.JavaScript.valueToCode(block, 'CHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channelmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channelmanager_client'] = function(block) {
    var channelmanager = Blockly.JavaScript.valueToCode(block, 'CHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channelmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channelmanager_resolve'] = function(block) {
    var channelmanager = Blockly.JavaScript.valueToCode(block, 'CHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return channelmanager + ".resolve(" + channel + ");\n";
};
Blockly.JavaScript['channelmanager_resolveId'] = function(block) {
    var channelmanager = Blockly.JavaScript.valueToCode(block, 'CHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return channelmanager + ".resolveId(" + channel + ");\n";
};
Blockly.JavaScript['channelmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var channelmanager = Blockly.JavaScript.valueToCode(block, 'CHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return channelmanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['datamanager_cache'] = function(block) {
    var datamanager = Blockly.JavaScript.valueToCode(block, 'DATAMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [datamanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['datamanager_client'] = function(block) {
    var datamanager = Blockly.JavaScript.valueToCode(block, 'DATAMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [datamanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['datamanager_resolve'] = function(block) {
    var datamanager = Blockly.JavaScript.valueToCode(block, 'DATAMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return datamanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['datamanager_resolveId'] = function(block) {
    var datamanager = Blockly.JavaScript.valueToCode(block, 'DATAMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return datamanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildapplicationcommandmanager_guild'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildapplicationcommandmanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildapplicationcommandmanager_permissions'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildapplicationcommandmanager + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildapplicationcommandmanager_cache'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildapplicationcommandmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildapplicationcommandmanager_client'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildapplicationcommandmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildapplicationcommandmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildapplicationcommandmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".create(" + command + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['guildapplicationcommandmanager_set'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var commands = Blockly.JavaScript.valueToCode(block, 'COMMANDS', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".set(" + commands + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['guildapplicationcommandmanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".edit(" + command + ", " + data + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['guildapplicationcommandmanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".delete(" + command + ", " + guildId + ")" + finalstring;
};
Blockly.JavaScript['guildapplicationcommandmanager_resolve'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildapplicationcommandmanager_resolveId'] = function(block) {
    var guildapplicationcommandmanager = Blockly.JavaScript.valueToCode(block, 'GUILDAPPLICATIONCOMMANDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildapplicationcommandmanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildbanmanager_guild'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildbanmanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildbanmanager_cache'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildbanmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildbanmanager_client'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildbanmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildbanmanager_resolve'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var ban = Blockly.JavaScript.valueToCode(block, 'BAN', Blockly.JavaScript.ORDER_NONE) || "";
    return guildbanmanager + ".resolve(" + ban + ");\n";
};
Blockly.JavaScript['guildbanmanager_fetch'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildbanmanager + ".fetch(" + options + ");\n";
};
Blockly.JavaScript['guildbanmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildbanmanager + ".create(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildbanmanager_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildbanmanager + ".remove(" + user + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildbanmanager_resolveId'] = function(block) {
    var guildbanmanager = Blockly.JavaScript.valueToCode(block, 'GUILDBANMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildbanmanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildchannelmanager_guild'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannelmanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannelmanager_channelCountWithoutThreads'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannelmanager + ".channelCountWithoutThreads", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannelmanager_cache'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannelmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannelmanager_client'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannelmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannelmanager_resolve'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".resolve(" + channel + ");\n";
};
Blockly.JavaScript['guildchannelmanager_resolveId'] = function(block) {
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".resolveId(" + channel + ");\n";
};
Blockly.JavaScript['guildchannelmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".create(" + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildchannelmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildchannelmanager_setPositions'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channelPositions = Blockly.JavaScript.valueToCode(block, 'CHANNELPOSITIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".setPositions(" + channelPositions + ")" + finalstring;
};
Blockly.JavaScript['guildchannelmanager_fetchActiveThreads'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannelmanager = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNELMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannelmanager + ".fetchActiveThreads(" + cache + ")" + finalstring;
};
Blockly.JavaScript['guildemojimanager_guild'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojimanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojimanager_cache'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojimanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojimanager_client'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojimanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojimanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var attachment = Blockly.JavaScript.valueToCode(block, 'ATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojimanager + ".create(" + attachment + ", " + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildemojimanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojimanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildemojimanager_resolve'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojimanager + ".resolve(" + emoji + ");\n";
};
Blockly.JavaScript['guildemojimanager_resolveId'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojimanager + ".resolveId(" + emoji + ");\n";
};
Blockly.JavaScript['guildemojimanager_resolveIdentifier'] = function(block) {
    var guildemojimanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojimanager + ".resolveIdentifier(" + emoji + ");\n";
};
Blockly.JavaScript['guildemojirolemanager_emoji'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojirolemanager + ".emoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojirolemanager_guild'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojirolemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojirolemanager_cache'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojirolemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojirolemanager_client'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemojirolemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemojirolemanager_add'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roleOrRoles = Blockly.JavaScript.valueToCode(block, 'ROLEORROLES', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojirolemanager + ".add(" + roleOrRoles + ");\n";
};
Blockly.JavaScript['guildemojirolemanager_remove'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roleOrRoles = Blockly.JavaScript.valueToCode(block, 'ROLEORROLES', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojirolemanager + ".remove(" + roleOrRoles + ");\n";
};
Blockly.JavaScript['guildemojirolemanager_set'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roles = Blockly.JavaScript.valueToCode(block, 'ROLES', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojirolemanager + ".set(" + roles + ");\n";
};
Blockly.JavaScript['guildemojirolemanager_resolve'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojirolemanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildemojirolemanager_resolveId'] = function(block) {
    var guildemojirolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJIROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemojirolemanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildinvitemanager_guild'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildinvitemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildinvitemanager_cache'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildinvitemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildinvitemanager_client'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildinvitemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildinvitemanager_resolve'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildinvitemanager + ".resolve(" + invite + ");\n";
};
Blockly.JavaScript['guildinvitemanager_resolveId'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildinvitemanager + ".resolveId(" + invite + ");\n";
};
Blockly.JavaScript['guildinvitemanager_fetch'] = function(block) {
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildinvitemanager + ".fetch(" + options + ");\n";
};
Blockly.JavaScript['guildinvitemanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildinvitemanager + ".create(" + channel + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildinvitemanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildinvitemanager = Blockly.JavaScript.valueToCode(block, 'GUILDINVITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildinvitemanager + ".delete(" + invite + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildmanager_cache'] = function(block) {
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmanager_client'] = function(block) {
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmanager_resolve'] = function(block) {
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmanager + ".resolve(" + guild + ");\n";
};
Blockly.JavaScript['guildmanager_resolveId'] = function(block) {
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmanager + ".resolveId(" + guild + ");\n";
};
Blockly.JavaScript['guildmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmanager + ".create(" + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmanager = Blockly.JavaScript.valueToCode(block, 'GUILDMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmanager + ".fetch(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_guild'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmembermanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmembermanager_cache'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmembermanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmembermanager_client'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmembermanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmembermanager_resolve'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".resolve(" + member + ");\n";
};
Blockly.JavaScript['guildmembermanager_resolveId'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".resolveId(" + member + ");\n";
};
Blockly.JavaScript['guildmembermanager_add'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".add(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_fetch'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".fetch(" + options + ");\n";
};
Blockly.JavaScript['guildmembermanager_search'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".search(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_list'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".list(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".edit(" + user + ", " + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_prune'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".prune(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_kick'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".kick(" + user + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildmembermanager_ban'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".ban(" + user + ", " + options + ");\n";
};
Blockly.JavaScript['guildmembermanager_unban'] = function(block) {
    var guildmembermanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmembermanager + ".unban(" + user + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmemberrolemanager_member'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_guild'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_cache'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_hoist'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".hoist", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_icon'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_color'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".color", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_highest'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".highest", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_premiumSubscriberRole'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".premiumSubscriberRole", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_botRole'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".botRole", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_client'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmemberrolemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmemberrolemanager_add'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roleOrRoles = Blockly.JavaScript.valueToCode(block, 'ROLEORROLES', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmemberrolemanager + ".add(" + roleOrRoles + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildmemberrolemanager_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roleOrRoles = Blockly.JavaScript.valueToCode(block, 'ROLEORROLES', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmemberrolemanager + ".remove(" + roleOrRoles + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildmemberrolemanager_set'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var roles = Blockly.JavaScript.valueToCode(block, 'ROLES', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmemberrolemanager + ".set(" + roles + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmemberrolemanager_resolve'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmemberrolemanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildmemberrolemanager_resolveId'] = function(block) {
    var guildmemberrolemanager = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBERROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmemberrolemanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildscheduledeventmanager_guild'] = function(block) {
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledeventmanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledeventmanager_cache'] = function(block) {
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledeventmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledeventmanager_client'] = function(block) {
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledeventmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledeventmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".create(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledeventmanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".fetch(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledeventmanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var guildScheduledEvent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".edit(" + guildScheduledEvent + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledeventmanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var guildScheduledEvent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".delete(" + guildScheduledEvent + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledeventmanager_fetchSubscribers'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var guildScheduledEvent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".fetchSubscribers(" + guildScheduledEvent + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledeventmanager_resolve'] = function(block) {
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildscheduledeventmanager_resolveId'] = function(block) {
    var guildscheduledeventmanager = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENTMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledeventmanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['guildstickermanager_guild'] = function(block) {
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildstickermanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildstickermanager_cache'] = function(block) {
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildstickermanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildstickermanager_client'] = function(block) {
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildstickermanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildstickermanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var file = Blockly.JavaScript.valueToCode(block, 'FILE', Blockly.JavaScript.ORDER_NONE) || "";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var tags = Blockly.JavaScript.valueToCode(block, 'TAGS', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".create(" + file + ", " + name + ", " + tags + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildstickermanager_resolve'] = function(block) {
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".resolve(" + sticker + ");\n";
};
Blockly.JavaScript['guildstickermanager_resolveId'] = function(block) {
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".resolveId(" + sticker + ");\n";
};
Blockly.JavaScript['guildstickermanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".edit(" + sticker + ", " + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildstickermanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".delete(" + sticker + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildstickermanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildstickermanager = Blockly.JavaScript.valueToCode(block, 'GUILDSTICKERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildstickermanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_channel'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagemanager + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagemanager_cache'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagemanager_client'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagemanager_fetch'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".fetch(" + message + ", " + options + ");\n";
};
Blockly.JavaScript['messagemanager_fetchPinned'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".fetchPinned(" + cache + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_resolve'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".resolve(" + message + ");\n";
};
Blockly.JavaScript['messagemanager_resolveId'] = function(block) {
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".resolveId(" + message + ");\n";
};
Blockly.JavaScript['messagemanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".edit(" + message + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_crosspost'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".crosspost(" + message + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_pin'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".pin(" + message + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_unpin'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".unpin(" + message + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_react'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".react(" + message + ", " + emoji + ")" + finalstring;
};
Blockly.JavaScript['messagemanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagemanager = Blockly.JavaScript.valueToCode(block, 'MESSAGEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagemanager + ".delete(" + message + ")" + finalstring;
};
Blockly.JavaScript['permissionoverwritemanager_channel'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwritemanager + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwritemanager_cache'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwritemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwritemanager_client'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwritemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwritemanager_set'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var overwrites = Blockly.JavaScript.valueToCode(block, 'OVERWRITES', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".set(" + overwrites + ", " + reason + ");\n";
};
Blockly.JavaScript['permissionoverwritemanager_create'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var userOrRole = Blockly.JavaScript.valueToCode(block, 'USERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var overwriteOptions = Blockly.JavaScript.valueToCode(block, 'OVERWRITEOPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".create(" + userOrRole + ", " + options + ", " + overwriteOptions + ");\n";
};
Blockly.JavaScript['permissionoverwritemanager_edit'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var userOrRole = Blockly.JavaScript.valueToCode(block, 'USERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var overwriteOptions = Blockly.JavaScript.valueToCode(block, 'OVERWRITEOPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".edit(" + userOrRole + ", " + options + ", " + overwriteOptions + ");\n";
};
Blockly.JavaScript['permissionoverwritemanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var userOrRole = Blockly.JavaScript.valueToCode(block, 'USERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".delete(" + userOrRole + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['permissionoverwritemanager_resolve'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['permissionoverwritemanager_resolveId'] = function(block) {
    var permissionoverwritemanager = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwritemanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['presencemanager_cache'] = function(block) {
    var presencemanager = Blockly.JavaScript.valueToCode(block, 'PRESENCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presencemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presencemanager_client'] = function(block) {
    var presencemanager = Blockly.JavaScript.valueToCode(block, 'PRESENCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presencemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presencemanager_resolve'] = function(block) {
    var presencemanager = Blockly.JavaScript.valueToCode(block, 'PRESENCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "";
    return presencemanager + ".resolve(" + presence + ");\n";
};
Blockly.JavaScript['presencemanager_resolveId'] = function(block) {
    var presencemanager = Blockly.JavaScript.valueToCode(block, 'PRESENCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "";
    return presencemanager + ".resolveId(" + presence + ");\n";
};
Blockly.JavaScript['reactionmanager_message'] = function(block) {
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionmanager + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionmanager_cache'] = function(block) {
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionmanager_client'] = function(block) {
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionmanager_resolve'] = function(block) {
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionmanager + ".resolve(" + reaction + ");\n";
};
Blockly.JavaScript['reactionmanager_resolveId'] = function(block) {
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionmanager + ".resolveId(" + reaction + ");\n";
};
Blockly.JavaScript['reactionmanager_removeAll'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reactionmanager = Blockly.JavaScript.valueToCode(block, 'REACTIONMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return reactionmanager + ".removeAll()" + finalstring;
};
Blockly.JavaScript['reactionusermanager_reaction'] = function(block) {
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionusermanager + ".reaction", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionusermanager_cache'] = function(block) {
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionusermanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionusermanager_client'] = function(block) {
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionusermanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionusermanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionusermanager + ".fetch(" + options + ")" + finalstring;
};
Blockly.JavaScript['reactionusermanager_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionusermanager + ".remove(" + user + ")" + finalstring;
};
Blockly.JavaScript['reactionusermanager_resolve'] = function(block) {
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionusermanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['reactionusermanager_resolveId'] = function(block) {
    var reactionusermanager = Blockly.JavaScript.valueToCode(block, 'REACTIONUSERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return reactionusermanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['rolemanager_guild'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_cache'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_everyone'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".everyone", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_premiumSubscriberRole'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".premiumSubscriberRole", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_highest'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".highest", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_client'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [rolemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['rolemanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".fetch(" + id + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['rolemanager_resolve'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".resolve(" + role + ");\n";
};
Blockly.JavaScript['rolemanager_resolveId'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".resolveId(" + role + ");\n";
};
Blockly.JavaScript['rolemanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".create(" + options + ")" + finalstring;
};
Blockly.JavaScript['rolemanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".edit(" + role + ", " + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['rolemanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".delete(" + role + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['rolemanager_setPositions'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var rolePositions = Blockly.JavaScript.valueToCode(block, 'ROLEPOSITIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".setPositions(" + rolePositions + ")" + finalstring;
};
Blockly.JavaScript['rolemanager_comparePositions'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var role1 = Blockly.JavaScript.valueToCode(block, 'ROLE1', Blockly.JavaScript.ORDER_NONE) || "";
    var role2 = Blockly.JavaScript.valueToCode(block, 'ROLE2', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".comparePositions(" + role1 + ", " + role2 + ");\n";
};
Blockly.JavaScript['rolemanager_botRoleFor'] = function(block) {
    var rolemanager = Blockly.JavaScript.valueToCode(block, 'ROLEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return rolemanager + ".botRoleFor(" + user + ");\n";
};
Blockly.JavaScript['stageinstancemanager_guild'] = function(block) {
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstancemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstancemanager_cache'] = function(block) {
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstancemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstancemanager_client'] = function(block) {
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstancemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstancemanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".create(" + channel + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['stageinstancemanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".fetch(" + channel + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['stageinstancemanager_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".edit(" + channel + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['stageinstancemanager_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".delete(" + channel + ")" + finalstring;
};
Blockly.JavaScript['stageinstancemanager_resolve'] = function(block) {
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['stageinstancemanager_resolveId'] = function(block) {
    var stageinstancemanager = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstancemanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['threadmanager_channel'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmanager + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmanager_cache'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmanager_client'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmanager_resolve'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var thread = Blockly.JavaScript.valueToCode(block, 'THREAD', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".resolve(" + thread + ");\n";
};
Blockly.JavaScript['threadmanager_resolveId'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var thread = Blockly.JavaScript.valueToCode(block, 'THREAD', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".resolveId(" + thread + ");\n";
};
Blockly.JavaScript['threadmanager_create'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".create(" + options + ")" + finalstring;
};
Blockly.JavaScript['threadmanager_fetch'] = function(block) {
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var cacheOptions = Blockly.JavaScript.valueToCode(block, 'CACHEOPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".fetch(" + options + ", " + cacheOptions + ");\n";
};
Blockly.JavaScript['threadmanager_fetchArchived'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".fetchArchived(" + options + ", " + cache + ")" + finalstring;
};
Blockly.JavaScript['threadmanager_fetchActive'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmanager = Blockly.JavaScript.valueToCode(block, 'THREADMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmanager + ".fetchActive(" + cache + ")" + finalstring;
};
Blockly.JavaScript['threadmembermanager_thread'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmembermanager + ".thread", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmembermanager_cache'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmembermanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmembermanager_client'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmembermanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmembermanager_resolve'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmembermanager + ".resolve(" + member + ");\n";
};
Blockly.JavaScript['threadmembermanager_resolveId'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmembermanager + ".resolveId(" + member + ");\n";
};
Blockly.JavaScript['threadmembermanager_add'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmembermanager + ".add(" + member + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['threadmembermanager_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmembermanager + ".remove(" + id + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['threadmembermanager_fetch'] = function(block) {
    var threadmembermanager = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmembermanager + ".fetch(" + member + ", " + options + ");\n";
};
Blockly.JavaScript['usermanager_cache'] = function(block) {
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usermanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usermanager_client'] = function(block) {
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usermanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usermanager_createDM'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".createDM(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['usermanager_deleteDM'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".deleteDM(" + user + ")" + finalstring;
};
Blockly.JavaScript['usermanager_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".fetch(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['usermanager_fetchFlags'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".fetchFlags(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['usermanager_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".send(" + user + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['usermanager_resolve'] = function(block) {
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".resolve(" + user + ");\n";
};
Blockly.JavaScript['usermanager_resolveId'] = function(block) {
    var usermanager = Blockly.JavaScript.valueToCode(block, 'USERMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return usermanager + ".resolveId(" + user + ");\n";
};
Blockly.JavaScript['voicestatemanager_guild'] = function(block) {
    var voicestatemanager = Blockly.JavaScript.valueToCode(block, 'VOICESTATEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestatemanager + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestatemanager_cache'] = function(block) {
    var voicestatemanager = Blockly.JavaScript.valueToCode(block, 'VOICESTATEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestatemanager + ".cache", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestatemanager_client'] = function(block) {
    var voicestatemanager = Blockly.JavaScript.valueToCode(block, 'VOICESTATEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestatemanager + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestatemanager_resolve'] = function(block) {
    var voicestatemanager = Blockly.JavaScript.valueToCode(block, 'VOICESTATEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestatemanager + ".resolve(" + idOrInstance + ");\n";
};
Blockly.JavaScript['voicestatemanager_resolveId'] = function(block) {
    var voicestatemanager = Blockly.JavaScript.valueToCode(block, 'VOICESTATEMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var idOrInstance = Blockly.JavaScript.valueToCode(block, 'IDORINSTANCE', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestatemanager + ".resolveId(" + idOrInstance + ");\n";
};
Blockly.JavaScript['discordapierror_method'] = function(block) {
    var discordapierror = Blockly.JavaScript.valueToCode(block, 'DISCORDAPIERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [discordapierror + ".method", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['discordapierror_path'] = function(block) {
    var discordapierror = Blockly.JavaScript.valueToCode(block, 'DISCORDAPIERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [discordapierror + ".path", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['discordapierror_code'] = function(block) {
    var discordapierror = Blockly.JavaScript.valueToCode(block, 'DISCORDAPIERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [discordapierror + ".code", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['discordapierror_httpStatus'] = function(block) {
    var discordapierror = Blockly.JavaScript.valueToCode(block, 'DISCORDAPIERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [discordapierror + ".httpStatus", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['discordapierror_requestData'] = function(block) {
    var discordapierror = Blockly.JavaScript.valueToCode(block, 'DISCORDAPIERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [discordapierror + ".requestData", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['httperror_name'] = function(block) {
    var httperror = Blockly.JavaScript.valueToCode(block, 'HTTPERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [httperror + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['httperror_code'] = function(block) {
    var httperror = Blockly.JavaScript.valueToCode(block, 'HTTPERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [httperror + ".code", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['httperror_method'] = function(block) {
    var httperror = Blockly.JavaScript.valueToCode(block, 'HTTPERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [httperror + ".method", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['httperror_path'] = function(block) {
    var httperror = Blockly.JavaScript.valueToCode(block, 'HTTPERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [httperror + ".path", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['httperror_requestData'] = function(block) {
    var httperror = Blockly.JavaScript.valueToCode(block, 'HTTPERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [httperror + ".requestData", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_name'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_timeout'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".timeout", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_method'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".method", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_path'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".path", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_route'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".route", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_global'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".global", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['ratelimiterror_limit'] = function(block) {
    var ratelimiterror = Blockly.JavaScript.valueToCode(block, 'RATELIMITERROR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [ratelimiterror + ".limit", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_on'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "spawn":
            variables = "process";
            break;
        case "message":
            variables = "message";
            break;
        case "death":
            variables = "process";
            break;
    }
    block.variables = variables;
    return [shard + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['shard_manager'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".manager", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_id'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_args'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".args", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_execArgv'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".execArgv", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_env'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".env", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_ready'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".ready", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_process'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".process", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_worker'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shard + ".worker", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shard_spawn'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var timeout = Blockly.JavaScript.valueToCode(block, 'TIMEOUT', Blockly.JavaScript.ORDER_NONE) || "";
    return shard + ".spawn(" + timeout + ");\n";
};
Blockly.JavaScript['shard_kill'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    return shard + ".kill();\n";
};
Blockly.JavaScript['shard_respawn'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shard + ".respawn(" + options + ")" + finalstring;
};
Blockly.JavaScript['shard_send'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return shard + ".send(" + message + ");\n";
};
Blockly.JavaScript['shard_fetchClientValue'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var prop = Blockly.JavaScript.valueToCode(block, 'PROP', Blockly.JavaScript.ORDER_NONE) || "";
    return shard + ".fetchClientValue(" + prop + ");\n";
};
Blockly.JavaScript['shard_eval'] = function(block) {
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "null";
    var script = Blockly.JavaScript.valueToCode(block, 'SCRIPT', Blockly.JavaScript.ORDER_NONE) || "";
    var context = Blockly.JavaScript.valueToCode(block, 'CONTEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return shard + ".eval(" + script + ", " + context + ");\n";
};
Blockly.JavaScript['shardclientutil_client'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardclientutil + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardclientutil_mode'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardclientutil + ".mode", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardclientutil_parentPort'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardclientutil + ".parentPort", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardclientutil_ids'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardclientutil + ".ids", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardclientutil_count'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardclientutil + ".count", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardclientutil_send'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".send(" + message + ");\n";
};
Blockly.JavaScript['shardclientutil_fetchClientValues'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var prop = Blockly.JavaScript.valueToCode(block, 'PROP', Blockly.JavaScript.ORDER_NONE) || "";
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".fetchClientValues(" + prop + ", " + shard + ");\n";
};
Blockly.JavaScript['shardclientutil_broadcastEval'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var script = Blockly.JavaScript.valueToCode(block, 'SCRIPT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".broadcastEval(" + script + ", " + options + ");\n";
};
Blockly.JavaScript['shardclientutil_respawnAll'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".respawnAll(" + options + ");\n";
};
Blockly.JavaScript['shardclientutil_singleton'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var client = Blockly.JavaScript.valueToCode(block, 'CLIENT', Blockly.JavaScript.ORDER_NONE) || "";
    var mode = Blockly.JavaScript.valueToCode(block, 'MODE', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".singleton(" + client + ", " + mode + ");\n";
};
Blockly.JavaScript['shardclientutil_shardIdForGuildId'] = function(block) {
    var shardclientutil = Blockly.JavaScript.valueToCode(block, 'SHARDCLIENTUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var guildId = Blockly.JavaScript.valueToCode(block, 'GUILDID', Blockly.JavaScript.ORDER_NONE) || "";
    var shardCount = Blockly.JavaScript.valueToCode(block, 'SHARDCOUNT', Blockly.JavaScript.ORDER_NONE) || "";
    return shardclientutil + ".shardIdForGuildId(" + guildId + ", " + shardCount + ");\n";
};
Blockly.JavaScript['shardingmanager_on'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "shardCreate":
            variables = "shard";
            break;
    }
    block.variables = variables;
    return [shardingmanager + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['shardingmanager_file'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".file", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_shardList'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".shardList", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_totalShards'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".totalShards", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_mode'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".mode", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_respawn'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".respawn", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_shardArgs'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".shardArgs", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_execArgv'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".execArgv", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_token'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_shards'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [shardingmanager + ".shards", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['shardingmanager_createShard'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".createShard(" + id + ");\n";
};
Blockly.JavaScript['shardingmanager_spawn'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".spawn(" + options + ")" + finalstring;
};
Blockly.JavaScript['shardingmanager_broadcast'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".broadcast(" + message + ");\n";
};
Blockly.JavaScript['shardingmanager_broadcastEval'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var script = Blockly.JavaScript.valueToCode(block, 'SCRIPT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".broadcastEval(" + script + ", " + options + ");\n";
};
Blockly.JavaScript['shardingmanager_fetchClientValues'] = function(block) {
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var prop = Blockly.JavaScript.valueToCode(block, 'PROP', Blockly.JavaScript.ORDER_NONE) || "";
    var shard = Blockly.JavaScript.valueToCode(block, 'SHARD', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".fetchClientValues(" + prop + ", " + shard + ");\n";
};
Blockly.JavaScript['shardingmanager_respawnAll'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var shardingmanager = Blockly.JavaScript.valueToCode(block, 'SHARDINGMANAGER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return shardingmanager + ".respawnAll(" + options + ")" + finalstring;
};
Blockly.JavaScript['anonymousguild_splash'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".splash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_banner'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".banner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_description'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_verificationLevel'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".verificationLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_vanityURLCode'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".vanityURLCode", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_nsfwLevel'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".nsfwLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_id'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_name'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_icon'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_features'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_createdTimestamp'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_createdAt'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_nameAcronym'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".nameAcronym", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_partnered'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".partnered", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_verified'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_client'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [anonymousguild + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['anonymousguild_bannerURL'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return anonymousguild + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['anonymousguild_splashURL'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return anonymousguild + ".splashURL(" + options + ");\n";
};
Blockly.JavaScript['anonymousguild_iconURL'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return anonymousguild + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['anonymousguild_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return anonymousguild + ".fetch()" + finalstring;
};
Blockly.JavaScript['anonymousguild_toString'] = function(block) {
    var anonymousguild = Blockly.JavaScript.valueToCode(block, 'ANONYMOUSGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return anonymousguild + ".toString();\n";
};
Blockly.JavaScript['applicationcommand_id'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_applicationId'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_guild'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_guildId'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_permissions'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_type'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_name'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_description'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_options'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_defaultPermission'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".defaultPermission", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_version'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_createdTimestamp'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_createdAt'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_manager'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".manager", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_client'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationcommand + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationcommand_edit'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".edit(" + data + ");\n";
};
Blockly.JavaScript['applicationcommand_setName'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".setName(" + name + ");\n";
};
Blockly.JavaScript['applicationcommand_setDescription'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".setDescription(" + description + ");\n";
};
Blockly.JavaScript['applicationcommand_setDefaultPermission'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var defaultPermission = Blockly.JavaScript.valueToCode(block, 'DEFAULTPERMISSION', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".setDefaultPermission(" + defaultPermission + ");\n";
};
Blockly.JavaScript['applicationcommand_setOptions'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".setOptions(" + options + ");\n";
};
Blockly.JavaScript['applicationcommand_delete'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    return applicationcommand + ".delete();\n";
};
Blockly.JavaScript['applicationcommand_equals'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var command = Blockly.JavaScript.valueToCode(block, 'COMMAND', Blockly.JavaScript.ORDER_NONE) || "";
    var enforceOptionOrder = Blockly.JavaScript.valueToCode(block, 'ENFORCEOPTIONORDER', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".equals(" + command + ", " + enforceOptionOrder + ");\n";
};
Blockly.JavaScript['applicationcommand_optionsEqual'] = function(block) {
    var applicationcommand = Blockly.JavaScript.valueToCode(block, 'APPLICATIONCOMMAND', Blockly.JavaScript.ORDER_NONE) || "null";
    var existing = Blockly.JavaScript.valueToCode(block, 'EXISTING', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var enforceOptionOrder = Blockly.JavaScript.valueToCode(block, 'ENFORCEOPTIONORDER', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationcommand + ".optionsEqual(" + existing + ", " + options + ", " + enforceOptionOrder + ");\n";
};
Blockly.JavaScript['autocompleteinteraction_channelId'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_commandId'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_commandName'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_responded'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".responded", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_options'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_command'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_type'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_id'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_token'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_applicationId'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_guildId'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_user'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_member'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_version'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_memberPermissions'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_locale'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_guildLocale'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_createdTimestamp'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_createdAt'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_channel'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_guild'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_client'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [autocompleteinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['autocompleteinteraction_respond'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return autocompleteinteraction + ".respond(" + options + ")" + finalstring;
};
Blockly.JavaScript['autocompleteinteraction_inGuild'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".inGuild();\n";
};
Blockly.JavaScript['autocompleteinteraction_inCachedGuild'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['autocompleteinteraction_inRawGuild'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['autocompleteinteraction_isApplicationCommand'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['autocompleteinteraction_isCommand'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isCommand();\n";
};
Blockly.JavaScript['autocompleteinteraction_isContextMenu'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['autocompleteinteraction_isUserContextMenu'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['autocompleteinteraction_isMessageContextMenu'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['autocompleteinteraction_isAutocomplete'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['autocompleteinteraction_isMessageComponent'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['autocompleteinteraction_isButton'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isButton();\n";
};
Blockly.JavaScript['autocompleteinteraction_isSelectMenu'] = function(block) {
    var autocompleteinteraction = Blockly.JavaScript.valueToCode(block, 'AUTOCOMPLETEINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return autocompleteinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['base_client'] = function(block) {
    var base = Blockly.JavaScript.valueToCode(block, 'BASE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [base + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_channelId'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_commandId'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_commandName'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_deferred'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_replied'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_ephemeral'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_webhook'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_command'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_type'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_id'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_token'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_applicationId'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_guildId'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_user'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_member'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_version'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_memberPermissions'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_locale'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_guildLocale'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_createdTimestamp'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_createdAt'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_channel'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_guild'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_client'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basecommandinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['basecommandinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return basecommandinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['basecommandinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return basecommandinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['basecommandinteraction_fetchReply'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['basecommandinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return basecommandinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['basecommandinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['basecommandinteraction_followUp'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return basecommandinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['basecommandinteraction_inGuild'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".inGuild();\n";
};
Blockly.JavaScript['basecommandinteraction_inCachedGuild'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['basecommandinteraction_inRawGuild'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['basecommandinteraction_isApplicationCommand'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['basecommandinteraction_isCommand'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isCommand();\n";
};
Blockly.JavaScript['basecommandinteraction_isContextMenu'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['basecommandinteraction_isUserContextMenu'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['basecommandinteraction_isMessageContextMenu'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['basecommandinteraction_isAutocomplete'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['basecommandinteraction_isMessageComponent'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['basecommandinteraction_isButton'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isButton();\n";
};
Blockly.JavaScript['basecommandinteraction_isSelectMenu'] = function(block) {
    var basecommandinteraction = Blockly.JavaScript.valueToCode(block, 'BASECOMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return basecommandinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['baseguild_id'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_name'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_icon'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_features'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_createdTimestamp'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_createdAt'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_nameAcronym'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".nameAcronym", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_partnered'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".partnered", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_verified'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_client'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguild + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguild_iconURL'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguild + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['baseguild_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguild + ".fetch()" + finalstring;
};
Blockly.JavaScript['baseguild_toString'] = function(block) {
    var baseguild = Blockly.JavaScript.valueToCode(block, 'BASEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguild + ".toString();\n";
};
Blockly.JavaScript['baseguildemoji_guild'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_requiresColons'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".requiresColons", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_managed'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".managed", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_available'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".available", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_animated'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".animated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_name'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_id'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_identifier'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".identifier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_url'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_createdTimestamp'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_createdAt'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_client'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildemoji + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildemoji_toString'] = function(block) {
    var baseguildemoji = Blockly.JavaScript.valueToCode(block, 'BASEGUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildemoji + ".toString();\n";
};
Blockly.JavaScript['baseguildtextchannel_messages'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".messages", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_threads'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".threads", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_nsfw'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".nsfw", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_topic'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_lastMessageId'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".lastMessageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_lastPinTimestamp'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".lastPinTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_defaultAutoArchiveDuration'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".defaultAutoArchiveDuration", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_lastMessage'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".lastMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_lastPinAt'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".lastPinAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_guild'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_guildId'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_permissionOverwrites'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_name'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_rawPosition'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_parentId'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_parent'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_permissionsLocked'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_position'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_members'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_deletable'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_manageable'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_viewable'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_type'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_id'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_createdTimestamp'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_createdAt'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_partial'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_client'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildtextchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildtextchannel_setDefaultAutoArchiveDuration'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var defaultAutoArchiveDuration = Blockly.JavaScript.valueToCode(block, 'DEFAULTAUTOARCHIVEDURATION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setDefaultAutoArchiveDuration(" + defaultAutoArchiveDuration + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_setNSFW'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var nsfw = Blockly.JavaScript.valueToCode(block, 'NSFW', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setNSFW(" + nsfw + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_setType'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var type = Blockly.JavaScript.valueToCode(block, 'TYPE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setType(" + type + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_fetchWebhooks'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".fetchWebhooks()" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_createWebhook'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".createWebhook(" + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_setTopic'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setTopic(" + topic + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_createInvite'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_fetchInvites'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_sendTyping'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".sendTyping()" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_createMessageCollector'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".createMessageCollector(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_awaitMessages'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".awaitMessages(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_createMessageComponentCollector'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_awaitMessageComponent'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_bulkDelete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var messages = Blockly.JavaScript.valueToCode(block, 'MESSAGES', Blockly.JavaScript.ORDER_NONE) || "";
    var filterOld = Blockly.JavaScript.valueToCode(block, 'FILTEROLD', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".bulkDelete(" + messages + ", " + filterOld + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_permissionsFor'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_lockPermissions'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".lockPermissions();\n";
};
Blockly.JavaScript['baseguildtextchannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_setName'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_setParent'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_clone'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_equals'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['baseguildtextchannel_toString'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".toString();\n";
};
Blockly.JavaScript['baseguildtextchannel_fetch'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildtextchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['baseguildtextchannel_isText'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".isText();\n";
};
Blockly.JavaScript['baseguildtextchannel_isVoice'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".isVoice();\n";
};
Blockly.JavaScript['baseguildtextchannel_isThread'] = function(block) {
    var baseguildtextchannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDTEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildtextchannel + ".isThread();\n";
};
Blockly.JavaScript['baseguildvoicechannel_rtcRegion'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".rtcRegion", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_bitrate'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".bitrate", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_userLimit'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".userLimit", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_members'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_full'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".full", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_joinable'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".joinable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_guild'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_guildId'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_permissionOverwrites'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_name'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_rawPosition'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_parentId'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_parent'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_permissionsLocked'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_position'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_deletable'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_manageable'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_viewable'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_type'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_id'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_createdTimestamp'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_createdAt'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_partial'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_client'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [baseguildvoicechannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['baseguildvoicechannel_setRTCRegion'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var region = Blockly.JavaScript.valueToCode(block, 'REGION', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".setRTCRegion(" + region + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_createInvite'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_fetchInvites'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_permissionsFor'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_lockPermissions'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildvoicechannel + ".lockPermissions();\n";
};
Blockly.JavaScript['baseguildvoicechannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['baseguildvoicechannel_setName'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_setParent'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['baseguildvoicechannel_clone'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_equals'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['baseguildvoicechannel_toString'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildvoicechannel + ".toString();\n";
};
Blockly.JavaScript['baseguildvoicechannel_fetch'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return baseguildvoicechannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['baseguildvoicechannel_isText'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildvoicechannel + ".isText();\n";
};
Blockly.JavaScript['baseguildvoicechannel_isVoice'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildvoicechannel + ".isVoice();\n";
};
Blockly.JavaScript['baseguildvoicechannel_isThread'] = function(block) {
    var baseguildvoicechannel = Blockly.JavaScript.valueToCode(block, 'BASEGUILDVOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return baseguildvoicechannel + ".isThread();\n";
};
Blockly.JavaScript['basemessagecomponent_type'] = function(block) {
    var basemessagecomponent = Blockly.JavaScript.valueToCode(block, 'BASEMESSAGECOMPONENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [basemessagecomponent + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_channelId'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_message'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_customId'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".customId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_componentType'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".componentType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_deferred'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_ephemeral'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_replied'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_webhook'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_component'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".component", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_type'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_id'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_token'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_applicationId'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_guildId'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_user'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_member'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_version'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_memberPermissions'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_locale'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_guildLocale'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_createdTimestamp'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_createdAt'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_channel'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_guild'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_client'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [buttoninteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['buttoninteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['buttoninteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['buttoninteraction_fetchReply'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".fetchReply();\n";
};
Blockly.JavaScript['buttoninteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['buttoninteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['buttoninteraction_followUp'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['buttoninteraction_deferUpdate'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".deferUpdate(" + options + ")" + finalstring;
};
Blockly.JavaScript['buttoninteraction_update'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return buttoninteraction + ".update(" + options + ")" + finalstring;
};
Blockly.JavaScript['buttoninteraction_inGuild'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".inGuild();\n";
};
Blockly.JavaScript['buttoninteraction_inCachedGuild'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['buttoninteraction_inRawGuild'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['buttoninteraction_isApplicationCommand'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['buttoninteraction_isCommand'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isCommand();\n";
};
Blockly.JavaScript['buttoninteraction_isContextMenu'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['buttoninteraction_isUserContextMenu'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['buttoninteraction_isMessageContextMenu'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['buttoninteraction_isAutocomplete'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['buttoninteraction_isMessageComponent'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['buttoninteraction_isButton'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isButton();\n";
};
Blockly.JavaScript['buttoninteraction_isSelectMenu'] = function(block) {
    var buttoninteraction = Blockly.JavaScript.valueToCode(block, 'BUTTONINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return buttoninteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['categorychannel_children'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".children", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_guild'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_guildId'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_permissionOverwrites'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_name'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_rawPosition'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_parentId'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_parent'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_permissionsLocked'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_position'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_members'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_deletable'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_manageable'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_viewable'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_type'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_id'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_createdTimestamp'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_createdAt'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_partial'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_client'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [categorychannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['categorychannel_setParent'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['categorychannel_createChannel'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".createChannel(" + name + ", " + options + ");\n";
};
Blockly.JavaScript['categorychannel_permissionsFor'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['categorychannel_lockPermissions'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return categorychannel + ".lockPermissions();\n";
};
Blockly.JavaScript['categorychannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['categorychannel_setName'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['categorychannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['categorychannel_clone'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['categorychannel_equals'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['categorychannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['categorychannel_toString'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return categorychannel + ".toString();\n";
};
Blockly.JavaScript['categorychannel_fetch'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return categorychannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['categorychannel_isText'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return categorychannel + ".isText();\n";
};
Blockly.JavaScript['categorychannel_isVoice'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return categorychannel + ".isVoice();\n";
};
Blockly.JavaScript['categorychannel_isThread'] = function(block) {
    var categorychannel = Blockly.JavaScript.valueToCode(block, 'CATEGORYCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return categorychannel + ".isThread();\n";
};
Blockly.JavaScript['channel_type'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_id'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_createdTimestamp'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_createdAt'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_partial'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_client'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [channel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['channel_toString'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return channel + ".toString();\n";
};
Blockly.JavaScript['channel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return channel + ".delete()" + finalstring;
};
Blockly.JavaScript['channel_fetch'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return channel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['channel_isText'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return channel + ".isText();\n";
};
Blockly.JavaScript['channel_isVoice'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return channel + ".isVoice();\n";
};
Blockly.JavaScript['channel_isThread'] = function(block) {
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return channel + ".isThread();\n";
};
Blockly.JavaScript['clientapplication_commands'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".commands", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_flags'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_cover'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".cover", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_rpcOrigins'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".rpcOrigins", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_botRequireCodeGrant'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".botRequireCodeGrant", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_botPublic'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".botPublic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_owner'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".owner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_partial'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_id'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_name'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_description'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_icon'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_createdTimestamp'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_createdAt'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientapplication + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientapplication_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return clientapplication + ".fetch()" + finalstring;
};
Blockly.JavaScript['clientapplication_iconURL'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientapplication + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['clientapplication_coverURL'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientapplication + ".coverURL(" + options + ");\n";
};
Blockly.JavaScript['clientapplication_fetchAssets'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return clientapplication + ".fetchAssets()" + finalstring;
};
Blockly.JavaScript['clientapplication_toString'] = function(block) {
    var clientapplication = Blockly.JavaScript.valueToCode(block, 'CLIENTAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return clientapplication + ".toString();\n";
};
Blockly.JavaScript['clientpresence_userId'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".userId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_guild'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_user'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_member'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_status'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_activities'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".activities", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_clientStatus'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".clientStatus", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_client'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientpresence + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientpresence_set'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "";
    return clientpresence + ".set(" + presence + ");\n";
};
Blockly.JavaScript['clientpresence_equals'] = function(block) {
    var clientpresence = Blockly.JavaScript.valueToCode(block, 'CLIENTPRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "";
    return clientpresence + ".equals(" + presence + ");\n";
};
Blockly.JavaScript['clientuser_verified'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_mfaEnabled'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".mfaEnabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_presence'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".presence", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_id'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_username'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".username", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_bot'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".bot", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_discriminator'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".discriminator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_avatar'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".avatar", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_banner'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".banner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_accentColor'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".accentColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_system'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".system", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_flags'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_partial'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_createdTimestamp'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_createdAt'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_defaultAvatarURL'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".defaultAvatarURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_hexAccentColor'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".hexAccentColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_tag'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".tag", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_dmChannel'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".dmChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_client'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [clientuser + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['clientuser_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".edit(" + data + ")" + finalstring;
};
Blockly.JavaScript['clientuser_setUsername'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var username = Blockly.JavaScript.valueToCode(block, 'USERNAME', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setUsername(" + username + ");\n";
};
Blockly.JavaScript['clientuser_setAvatar'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var avatar = Blockly.JavaScript.valueToCode(block, 'AVATAR', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setAvatar(" + avatar + ");\n";
};
Blockly.JavaScript['clientuser_setPresence'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setPresence(" + data + ");\n";
};
Blockly.JavaScript['clientuser_setStatus'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var status = Blockly.JavaScript.valueToCode(block, 'STATUS', Blockly.JavaScript.ORDER_NONE) || "";
    var shardId = Blockly.JavaScript.valueToCode(block, 'SHARDID', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setStatus(" + status + ", " + shardId + ");\n";
};
Blockly.JavaScript['clientuser_setActivity'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setActivity(" + name + ", " + options + ");\n";
};
Blockly.JavaScript['clientuser_setAFK'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var afk = Blockly.JavaScript.valueToCode(block, 'AFK', Blockly.JavaScript.ORDER_NONE) || "";
    var shardId = Blockly.JavaScript.valueToCode(block, 'SHARDID', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".setAFK(" + afk + ", " + shardId + ");\n";
};
Blockly.JavaScript['clientuser_avatarURL'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".avatarURL(" + options + ");\n";
};
Blockly.JavaScript['clientuser_displayAvatarURL'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".displayAvatarURL(" + options + ");\n";
};
Blockly.JavaScript['clientuser_bannerURL'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['clientuser_createDM'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".createDM(" + force + ");\n";
};
Blockly.JavaScript['clientuser_deleteDM'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return clientuser + ".deleteDM();\n";
};
Blockly.JavaScript['clientuser_equals'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".equals(" + user + ");\n";
};
Blockly.JavaScript['clientuser_fetchFlags'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".fetchFlags(" + force + ");\n";
};
Blockly.JavaScript['clientuser_fetch'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['clientuser_toString'] = function(block) {
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    return clientuser + ".toString();\n";
};
Blockly.JavaScript['clientuser_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var clientuser = Blockly.JavaScript.valueToCode(block, 'CLIENTUSER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return clientuser + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['commandinteraction_options'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_channelId'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_commandId'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_commandName'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_deferred'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_replied'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_ephemeral'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_webhook'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_command'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_type'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_id'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_token'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_applicationId'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_guildId'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_user'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_member'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_version'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_memberPermissions'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_locale'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_guildLocale'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_createdTimestamp'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_createdAt'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_channel'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_guild'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_client'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteraction_toString'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".toString();\n";
};
Blockly.JavaScript['commandinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['commandinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['commandinteraction_fetchReply'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['commandinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['commandinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['commandinteraction_followUp'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['commandinteraction_inGuild'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".inGuild();\n";
};
Blockly.JavaScript['commandinteraction_inCachedGuild'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['commandinteraction_inRawGuild'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['commandinteraction_isApplicationCommand'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['commandinteraction_isCommand'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isCommand();\n";
};
Blockly.JavaScript['commandinteraction_isContextMenu'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['commandinteraction_isUserContextMenu'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['commandinteraction_isMessageContextMenu'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['commandinteraction_isAutocomplete'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['commandinteraction_isMessageComponent'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['commandinteraction_isButton'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isButton();\n";
};
Blockly.JavaScript['commandinteraction_isSelectMenu'] = function(block) {
    var commandinteraction = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return commandinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_client'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteractionoptionresolver + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteractionoptionresolver_data'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteractionoptionresolver + ".data", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteractionoptionresolver_resolved'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [commandinteractionoptionresolver + ".resolved", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['commandinteractionoptionresolver_get'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".get(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getSubcommand'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getSubcommand(" + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getSubcommandGroup'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getSubcommandGroup(" + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getBoolean'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getBoolean(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getChannel'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getChannel(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getString'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getString(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getInteger'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getInteger(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getNumber'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getNumber(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getUser'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getUser(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getMember'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getMember(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getRole'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getRole(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getMentionable'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getMentionable(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getMessage'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var required = Blockly.JavaScript.valueToCode(block, 'REQUIRED', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getMessage(" + name + ", " + required + ");\n";
};
Blockly.JavaScript['commandinteractionoptionresolver_getFocused'] = function(block) {
    var commandinteractionoptionresolver = Blockly.JavaScript.valueToCode(block, 'COMMANDINTERACTIONOPTIONRESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var getFull = Blockly.JavaScript.valueToCode(block, 'GETFULL', Blockly.JavaScript.ORDER_NONE) || "";
    return commandinteractionoptionresolver + ".getFocused(" + getFull + ");\n";
};
Blockly.JavaScript['contextmenuinteraction_options'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_targetId'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".targetId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_targetType'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".targetType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_channelId'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_commandId'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_commandName'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_deferred'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_replied'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_ephemeral'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_webhook'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_command'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_type'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_id'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_token'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_applicationId'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_guildId'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_user'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_member'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_version'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_memberPermissions'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_locale'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_guildLocale'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_createdTimestamp'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_createdAt'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_channel'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_guild'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_client'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [contextmenuinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['contextmenuinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return contextmenuinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['contextmenuinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return contextmenuinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['contextmenuinteraction_fetchReply'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['contextmenuinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return contextmenuinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['contextmenuinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['contextmenuinteraction_followUp'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return contextmenuinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['contextmenuinteraction_inGuild'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".inGuild();\n";
};
Blockly.JavaScript['contextmenuinteraction_inCachedGuild'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['contextmenuinteraction_inRawGuild'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['contextmenuinteraction_isApplicationCommand'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['contextmenuinteraction_isCommand'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isCommand();\n";
};
Blockly.JavaScript['contextmenuinteraction_isContextMenu'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['contextmenuinteraction_isUserContextMenu'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['contextmenuinteraction_isMessageContextMenu'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['contextmenuinteraction_isAutocomplete'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['contextmenuinteraction_isMessageComponent'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['contextmenuinteraction_isButton'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isButton();\n";
};
Blockly.JavaScript['contextmenuinteraction_isSelectMenu'] = function(block) {
    var contextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'CONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return contextmenuinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['dmchannel_messages'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".messages", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_recipient'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".recipient", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_lastMessageId'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".lastMessageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_lastPinTimestamp'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".lastPinTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_partial'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_lastMessage'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".lastMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_lastPinAt'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".lastPinAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_type'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_id'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_createdTimestamp'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_createdAt'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_client'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [dmchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['dmchannel_fetch'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['dmchannel_toString'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".toString();\n";
};
Blockly.JavaScript['dmchannel_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['dmchannel_sendTyping'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".sendTyping()" + finalstring;
};
Blockly.JavaScript['dmchannel_createMessageCollector'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".createMessageCollector(" + options + ");\n";
};
Blockly.JavaScript['dmchannel_awaitMessages'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".awaitMessages(" + options + ");\n";
};
Blockly.JavaScript['dmchannel_createMessageComponentCollector'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['dmchannel_awaitMessageComponent'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return dmchannel + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['dmchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".delete()" + finalstring;
};
Blockly.JavaScript['dmchannel_isText'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".isText();\n";
};
Blockly.JavaScript['dmchannel_isVoice'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".isVoice();\n";
};
Blockly.JavaScript['dmchannel_isThread'] = function(block) {
    var dmchannel = Blockly.JavaScript.valueToCode(block, 'DMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return dmchannel + ".isThread();\n";
};
Blockly.JavaScript['emoji_animated'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".animated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_name'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_id'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_identifier'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".identifier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_url'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_createdTimestamp'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_createdAt'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_client'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [emoji + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emoji_toString'] = function(block) {
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return emoji + ".toString();\n";
};
Blockly.JavaScript['guild_commands'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".commands", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_members'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_channels'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".channels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_bans'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".bans", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_roles'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_presences'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".presences", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_voiceStates'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".voiceStates", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_stageInstances'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".stageInstances", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_invites'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".invites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_scheduledEvents'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".scheduledEvents", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_available'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".available", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_shardId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".shardId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_shard'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".shard", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_discoverySplash'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".discoverySplash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_memberCount'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".memberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_large'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".large", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_premiumProgressBarEnabled'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".premiumProgressBarEnabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_applicationId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_afkTimeout'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".afkTimeout", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_afkChannelId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".afkChannelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_systemChannelId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".systemChannelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_premiumTier'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".premiumTier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_premiumSubscriptionCount'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".premiumSubscriptionCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_widgetEnabled'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".widgetEnabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_widgetChannelId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".widgetChannelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_explicitContentFilter'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".explicitContentFilter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_mfaLevel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".mfaLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_joinedTimestamp'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".joinedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_defaultMessageNotifications'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".defaultMessageNotifications", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_systemChannelFlags'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".systemChannelFlags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_maximumMembers'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".maximumMembers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_maximumPresences'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".maximumPresences", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_approximateMemberCount'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".approximateMemberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_approximatePresenceCount'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".approximatePresenceCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_vanityURLUses'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".vanityURLUses", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_rulesChannelId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".rulesChannelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_publicUpdatesChannelId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".publicUpdatesChannelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_preferredLocale'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".preferredLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_ownerId'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".ownerId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_emojis'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".emojis", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_stickers'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".stickers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_joinedAt'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".joinedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_afkChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".afkChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_systemChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".systemChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_widgetChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".widgetChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_rulesChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".rulesChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_publicUpdatesChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".publicUpdatesChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_me'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".me", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_maximumBitrate'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".maximumBitrate", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_voiceAdapterCreator'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".voiceAdapterCreator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_splash'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".splash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_banner'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".banner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_description'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_verificationLevel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".verificationLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_vanityURLCode'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".vanityURLCode", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_nsfwLevel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".nsfwLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_id'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_name'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_icon'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_features'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_createdTimestamp'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_createdAt'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_nameAcronym'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".nameAcronym", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_partnered'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".partnered", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_verified'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_client'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guild + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guild_discoverySplashURL'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".discoverySplashURL(" + options + ");\n";
};
Blockly.JavaScript['guild_fetchOwner'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".fetchOwner(" + options + ");\n";
};
Blockly.JavaScript['guild_fetchIntegrations'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchIntegrations()" + finalstring;
};
Blockly.JavaScript['guild_fetchTemplates'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchTemplates()" + finalstring;
};
Blockly.JavaScript['guild_fetchWelcomeScreen'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchWelcomeScreen()" + finalstring;
};
Blockly.JavaScript['guild_createTemplate'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".createTemplate(" + name + ", " + description + ")" + finalstring;
};
Blockly.JavaScript['guild_fetchPreview'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchPreview()" + finalstring;
};
Blockly.JavaScript['guild_fetchVanityData'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchVanityData()" + finalstring;
};
Blockly.JavaScript['guild_fetchWebhooks'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchWebhooks()" + finalstring;
};
Blockly.JavaScript['guild_fetchWidget'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchWidget();\n";
};
Blockly.JavaScript['guild_fetchWidgetSettings'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetchWidgetSettings()" + finalstring;
};
Blockly.JavaScript['guild_fetchAuditLogs'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".fetchAuditLogs(" + options + ")" + finalstring;
};
Blockly.JavaScript['guild_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guild_editWelcomeScreen'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".editWelcomeScreen(" + data + ")" + finalstring;
};
Blockly.JavaScript['guild_setExplicitContentFilter'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var explicitContentFilter = Blockly.JavaScript.valueToCode(block, 'EXPLICITCONTENTFILTER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setExplicitContentFilter(" + explicitContentFilter + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setDefaultMessageNotifications'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var defaultMessageNotifications = Blockly.JavaScript.valueToCode(block, 'DEFAULTMESSAGENOTIFICATIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setDefaultMessageNotifications(" + defaultMessageNotifications + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setSystemChannelFlags'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var systemChannelFlags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setSystemChannelFlags(" + systemChannelFlags + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setName'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setVerificationLevel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var verificationLevel = Blockly.JavaScript.valueToCode(block, 'VERIFICATIONLEVEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setVerificationLevel(" + verificationLevel + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setAFKChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var afkChannel = Blockly.JavaScript.valueToCode(block, 'AFKCHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setAFKChannel(" + afkChannel + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setSystemChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var systemChannel = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setSystemChannel(" + systemChannel + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setAFKTimeout'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var afkTimeout = Blockly.JavaScript.valueToCode(block, 'AFKTIMEOUT', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setAFKTimeout(" + afkTimeout + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setIcon'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var icon = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setIcon(" + icon + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setOwner'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var owner = Blockly.JavaScript.valueToCode(block, 'OWNER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setOwner(" + owner + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setSplash'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var splash = Blockly.JavaScript.valueToCode(block, 'SPLASH', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setSplash(" + splash + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setDiscoverySplash'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var discoverySplash = Blockly.JavaScript.valueToCode(block, 'DISCOVERYSPLASH', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setDiscoverySplash(" + discoverySplash + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setBanner'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var banner = Blockly.JavaScript.valueToCode(block, 'BANNER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setBanner(" + banner + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setRulesChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var rulesChannel = Blockly.JavaScript.valueToCode(block, 'RULESCHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setRulesChannel(" + rulesChannel + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setPublicUpdatesChannel'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var publicUpdatesChannel = Blockly.JavaScript.valueToCode(block, 'PUBLICUPDATESCHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setPublicUpdatesChannel(" + publicUpdatesChannel + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setPreferredLocale'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var preferredLocale = Blockly.JavaScript.valueToCode(block, 'PREFERREDLOCALE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setPreferredLocale(" + preferredLocale + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setPremiumProgressBarEnabled'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var enabled = Blockly.JavaScript.valueToCode(block, 'ENABLED', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setPremiumProgressBarEnabled(" + enabled + ", " + reason + ");\n";
};
Blockly.JavaScript['guild_setWidgetSettings'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var settings = Blockly.JavaScript.valueToCode(block, 'SETTINGS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".setWidgetSettings(" + settings + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guild_leave'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".leave()" + finalstring;
};
Blockly.JavaScript['guild_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".delete()" + finalstring;
};
Blockly.JavaScript['guild_equals'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".equals(" + guild + ");\n";
};
Blockly.JavaScript['guild_bannerURL'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['guild_splashURL'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".splashURL(" + options + ");\n";
};
Blockly.JavaScript['guild_iconURL'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guild + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['guild_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".fetch()" + finalstring;
};
Blockly.JavaScript['guild_toString'] = function(block) {
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return guild + ".toString();\n";
};
Blockly.JavaScript['guildauditlogs_entries'] = function(block) {
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogs + ".entries", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogs_Targets'] = function(block) {
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogs + ".Targets", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogs_Actions'] = function(block) {
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogs + ".Actions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogs_build'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildauditlogs + ".build()" + finalstring;
};
Blockly.JavaScript['guildauditlogs_targetType'] = function(block) {
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_NONE) || "";
    return guildauditlogs + ".targetType(" + target + ");\n";
};
Blockly.JavaScript['guildauditlogs_actionType'] = function(block) {
    var guildauditlogs = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = Blockly.JavaScript.valueToCode(block, 'ACTION', Blockly.JavaScript.ORDER_NONE) || "";
    return guildauditlogs + ".actionType(" + action + ");\n";
};
Blockly.JavaScript['guildauditlogsentry_targetType'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".targetType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_actionType'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".actionType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_action'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".action", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_reason'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".reason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_executor'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".executor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_changes'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".changes", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_id'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_extra'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".extra", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_target'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".target", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_createdTimestamp'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildauditlogsentry_createdAt'] = function(block) {
    var guildauditlogsentry = Blockly.JavaScript.valueToCode(block, 'GUILDAUDITLOGSENTRY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildauditlogsentry + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_guild'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildban + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_user'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildban + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_reason'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildban + ".reason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_partial'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildban + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_client'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildban + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildban_fetch'] = function(block) {
    var guildban = Blockly.JavaScript.valueToCode(block, 'GUILDBAN', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildban + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['guildchannel_guild'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_guildId'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_permissionOverwrites'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_name'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_rawPosition'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_parentId'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_parent'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_permissionsLocked'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_position'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_members'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_deletable'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_manageable'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_viewable'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_type'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_id'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_createdTimestamp'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_createdAt'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_partial'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_client'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildchannel_permissionsFor'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['guildchannel_lockPermissions'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildchannel + ".lockPermissions();\n";
};
Blockly.JavaScript['guildchannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildchannel_setName'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['guildchannel_setParent'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['guildchannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['guildchannel_clone'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['guildchannel_equals'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['guildchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['guildchannel_toString'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildchannel + ".toString();\n";
};
Blockly.JavaScript['guildchannel_fetch'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['guildchannel_isText'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildchannel + ".isText();\n";
};
Blockly.JavaScript['guildchannel_isVoice'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildchannel + ".isVoice();\n";
};
Blockly.JavaScript['guildchannel_isThread'] = function(block) {
    var guildchannel = Blockly.JavaScript.valueToCode(block, 'GUILDCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildchannel + ".isThread();\n";
};
Blockly.JavaScript['guildemoji_author'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".author", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_guild'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_deletable'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_roles'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_requiresColons'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".requiresColons", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_managed'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".managed", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_available'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".available", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_animated'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".animated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_name'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_id'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_identifier'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".identifier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_url'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_createdTimestamp'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_createdAt'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_client'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildemoji + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildemoji_fetchAuthor'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildemoji + ".fetchAuthor()" + finalstring;
};
Blockly.JavaScript['guildemoji_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemoji + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['guildemoji_setName'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemoji + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['guildemoji_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemoji + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['guildemoji_equals'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    var other = Blockly.JavaScript.valueToCode(block, 'OTHER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildemoji + ".equals(" + other + ");\n";
};
Blockly.JavaScript['guildemoji_toString'] = function(block) {
    var guildemoji = Blockly.JavaScript.valueToCode(block, 'GUILDEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildemoji + ".toString();\n";
};
Blockly.JavaScript['guildmember_guild'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_joinedTimestamp'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".joinedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_premiumSinceTimestamp'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".premiumSinceTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_nickname'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".nickname", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_pending'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".pending", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_communicationDisabledUntilTimestamp'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".communicationDisabledUntilTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_user'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_avatar'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".avatar", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_partial'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_roles'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_voice'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".voice", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_joinedAt'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".joinedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_communicationDisabledUntil'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".communicationDisabledUntil", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_premiumSince'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".premiumSince", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_presence'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".presence", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_displayColor'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".displayColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_displayHexColor'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".displayHexColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_id'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_displayName'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".displayName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_permissions'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_manageable'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_kickable'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".kickable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_bannable'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".bannable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_moderatable'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".moderatable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_client'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildmember + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildmember_avatarURL'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".avatarURL(" + options + ");\n";
};
Blockly.JavaScript['guildmember_displayAvatarURL'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".displayAvatarURL(" + options + ");\n";
};
Blockly.JavaScript['guildmember_isCommunicationDisabled'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildmember + ".isCommunicationDisabled();\n";
};
Blockly.JavaScript['guildmember_permissionsIn'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".permissionsIn(" + channel + ");\n";
};
Blockly.JavaScript['guildmember_edit'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".edit(" + data + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmember_setNickname'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var nick = Blockly.JavaScript.valueToCode(block, 'NICK', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".setNickname(" + nick + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmember_createDM'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".createDM(" + force + ");\n";
};
Blockly.JavaScript['guildmember_deleteDM'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildmember + ".deleteDM();\n";
};
Blockly.JavaScript['guildmember_kick'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".kick(" + reason + ");\n";
};
Blockly.JavaScript['guildmember_ban'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".ban(" + options + ");\n";
};
Blockly.JavaScript['guildmember_disableCommunicationUntil'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var communicationDisabledUntil = Blockly.JavaScript.valueToCode(block, 'COMMUNICATIONDISABLEDUNTIL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".disableCommunicationUntil(" + communicationDisabledUntil + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmember_timeout'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var timeout = Blockly.JavaScript.valueToCode(block, 'TIMEOUT', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".timeout(" + timeout + ", " + reason + ");\n";
};
Blockly.JavaScript['guildmember_fetch'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['guildmember_equals'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var member = Blockly.JavaScript.valueToCode(block, 'MEMBER', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".equals(" + member + ");\n";
};
Blockly.JavaScript['guildmember_toString'] = function(block) {
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildmember + ".toString();\n";
};
Blockly.JavaScript['guildmember_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildmember = Blockly.JavaScript.valueToCode(block, 'GUILDMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildmember + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildpreview_id'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_name'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_icon'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_splash'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".splash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_discoverySplash'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".discoverySplash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_features'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_approximateMemberCount'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".approximateMemberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_approximatePresenceCount'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".approximatePresenceCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_description'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_emojis'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".emojis", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_createdTimestamp'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_createdAt'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_client'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreview + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreview_splashURL'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildpreview + ".splashURL(" + options + ");\n";
};
Blockly.JavaScript['guildpreview_discoverySplashURL'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildpreview + ".discoverySplashURL(" + options + ");\n";
};
Blockly.JavaScript['guildpreview_iconURL'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildpreview + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['guildpreview_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildpreview + ".fetch()" + finalstring;
};
Blockly.JavaScript['guildpreview_toString'] = function(block) {
    var guildpreview = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEW', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildpreview + ".toString();\n";
};
Blockly.JavaScript['guildpreviewemoji_guild'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_roles'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_requiresColons'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".requiresColons", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_managed'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".managed", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_available'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".available", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_animated'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".animated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_name'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_id'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_identifier'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".identifier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_url'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_createdTimestamp'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_createdAt'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_client'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildpreviewemoji + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildpreviewemoji_toString'] = function(block) {
    var guildpreviewemoji = Blockly.JavaScript.valueToCode(block, 'GUILDPREVIEWEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildpreviewemoji + ".toString();\n";
};
Blockly.JavaScript['guildscheduledevent_id'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_guildId'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_channelId'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_creatorId'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".creatorId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_name'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_description'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_scheduledStartTimestamp'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".scheduledStartTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_scheduledEndTimestamp'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".scheduledEndTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_privacyLevel'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".privacyLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_status'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_entityType'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".entityType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_entityId'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".entityId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_userCount'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".userCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_creator'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".creator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_entityMetadata'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".entityMetadata", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_createdTimestamp'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_createdAt'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_scheduledStartAt'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".scheduledStartAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_scheduledEndAt'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".scheduledEndAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_channel'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_guild'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_url'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_client'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildscheduledevent + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildscheduledevent_createInviteURL'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".createInviteURL(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildscheduledevent_edit'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".edit(" + options + ");\n";
};
Blockly.JavaScript['guildscheduledevent_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".delete()" + finalstring;
};
Blockly.JavaScript['guildscheduledevent_setName'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_setScheduledStartTime'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var scheduledStartTime = Blockly.JavaScript.valueToCode(block, 'SCHEDULEDSTARTTIME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setScheduledStartTime(" + scheduledStartTime + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_setScheduledEndTime'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var scheduledEndTime = Blockly.JavaScript.valueToCode(block, 'SCHEDULEDENDTIME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setScheduledEndTime(" + scheduledEndTime + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_setDescription'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setDescription(" + description + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_setStatus'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var status = Blockly.JavaScript.valueToCode(block, 'STATUS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setStatus(" + status + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_setLocation'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var location = Blockly.JavaScript.valueToCode(block, 'LOCATION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".setLocation(" + location + ", " + reason + ");\n";
};
Blockly.JavaScript['guildscheduledevent_fetchSubscribers'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildscheduledevent + ".fetchSubscribers(" + options + ");\n";
};
Blockly.JavaScript['guildscheduledevent_toString'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".toString();\n";
};
Blockly.JavaScript['guildscheduledevent_isActive'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".isActive();\n";
};
Blockly.JavaScript['guildscheduledevent_isCanceled'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".isCanceled();\n";
};
Blockly.JavaScript['guildscheduledevent_isCompleted'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".isCompleted();\n";
};
Blockly.JavaScript['guildscheduledevent_isScheduled'] = function(block) {
    var guildscheduledevent = Blockly.JavaScript.valueToCode(block, 'GUILDSCHEDULEDEVENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildscheduledevent + ".isScheduled();\n";
};
Blockly.JavaScript['guildtemplate_code'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".code", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_name'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_description'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_usageCount'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".usageCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_creatorId'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".creatorId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_creator'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".creator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_createdAt'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_updatedAt'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".updatedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_guildId'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_serializedGuild'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".serializedGuild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_unSynced'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".unSynced", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_createdTimestamp'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_updatedTimestamp'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".updatedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_guild'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_url'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_client'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_GUILD_TEMPLATES_PATTERN'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [guildtemplate + ".GUILD_TEMPLATES_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['guildtemplate_createGuild'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var icon = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_NONE) || "";
    return guildtemplate + ".createGuild(" + name + ", " + icon + ")" + finalstring;
};
Blockly.JavaScript['guildtemplate_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return guildtemplate + ".edit(" + options + ")" + finalstring;
};
Blockly.JavaScript['guildtemplate_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildtemplate + ".delete()" + finalstring;
};
Blockly.JavaScript['guildtemplate_sync'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildtemplate + ".sync()" + finalstring;
};
Blockly.JavaScript['guildtemplate_toString'] = function(block) {
    var guildtemplate = Blockly.JavaScript.valueToCode(block, 'GUILDTEMPLATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return guildtemplate + ".toString();\n";
};
Blockly.JavaScript['integration_guild'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_id'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_name'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_type'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_enabled'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".enabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_syncing'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".syncing", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_role'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".role", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_enableEmoticons'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".enableEmoticons", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_user'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_account'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".account", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_syncedAt'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".syncedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_subscriberCount'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".subscriberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_revoked'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".revoked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_roles'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_expireBehavior'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".expireBehavior", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_expireGracePeriod'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".expireGracePeriod", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_application'] = function(block) {
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integration + ".application", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integration_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var integration = Blockly.JavaScript.valueToCode(block, 'INTEGRATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return integration + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['integrationapplication_bot'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".bot", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_termsOfServiceURL'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".termsOfServiceURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_privacyPolicyURL'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".privacyPolicyURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_rpcOrigins'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".rpcOrigins", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_summary'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".summary", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_hook'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".hook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_cover'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".cover", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_verifyKey'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".verifyKey", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_id'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_name'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_description'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_icon'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_createdTimestamp'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_createdAt'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [integrationapplication + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['integrationapplication_iconURL'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return integrationapplication + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['integrationapplication_coverURL'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return integrationapplication + ".coverURL(" + options + ");\n";
};
Blockly.JavaScript['integrationapplication_fetchAssets'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return integrationapplication + ".fetchAssets()" + finalstring;
};
Blockly.JavaScript['integrationapplication_toString'] = function(block) {
    var integrationapplication = Blockly.JavaScript.valueToCode(block, 'INTEGRATIONAPPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return integrationapplication + ".toString();\n";
};
Blockly.JavaScript['interaction_type'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_id'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_token'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_applicationId'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_channelId'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_guildId'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_user'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_member'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_version'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_memberPermissions'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_locale'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_guildLocale'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_createdTimestamp'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_createdAt'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_channel'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_guild'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_client'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interaction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interaction_inGuild'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".inGuild();\n";
};
Blockly.JavaScript['interaction_inCachedGuild'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".inCachedGuild();\n";
};
Blockly.JavaScript['interaction_inRawGuild'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".inRawGuild();\n";
};
Blockly.JavaScript['interaction_isApplicationCommand'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['interaction_isCommand'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isCommand();\n";
};
Blockly.JavaScript['interaction_isContextMenu'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isContextMenu();\n";
};
Blockly.JavaScript['interaction_isUserContextMenu'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['interaction_isMessageContextMenu'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['interaction_isAutocomplete'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isAutocomplete();\n";
};
Blockly.JavaScript['interaction_isMessageComponent'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isMessageComponent();\n";
};
Blockly.JavaScript['interaction_isButton'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isButton();\n";
};
Blockly.JavaScript['interaction_isSelectMenu'] = function(block) {
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return interaction + ".isSelectMenu();\n";
};
Blockly.JavaScript['interactioncollector_on'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "collect":
            variables = "interaction";
            break;
        case "dispose":
            variables = "interaction";
            break;
        case "end":
            variables = "collected, reason";
            break;
    }
    block.variables = variables;
    return [interactioncollector + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['interactioncollector_messageId'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".messageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_channelId'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_guildId'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_interactionType'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".interactionType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_componentType'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".componentType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_users'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".users", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_total'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".total", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_endReason'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".endReason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_client'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_filter'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".filter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_options'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_collected'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".collected", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_ended'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".ended", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_next'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactioncollector + ".next", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactioncollector_dispose'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var interaction = Blockly.JavaScript.valueToCode(block, 'INTERACTION', Blockly.JavaScript.ORDER_NONE) || "";
    return interactioncollector + ".dispose(" + interaction + ");\n";
};
Blockly.JavaScript['interactioncollector_empty'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return interactioncollector + ".empty();\n";
};
Blockly.JavaScript['interactioncollector_handleCollect'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactioncollector + ".handleCollect(" + args + ")" + finalstring;
};
Blockly.JavaScript['interactioncollector_handleDispose'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactioncollector + ".handleDispose(" + args + ")" + finalstring;
};
Blockly.JavaScript['interactioncollector_stop'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return interactioncollector + ".stop(" + reason + ");\n";
};
Blockly.JavaScript['interactioncollector_resetTimer'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactioncollector + ".resetTimer(" + options + ");\n";
};
Blockly.JavaScript['interactioncollector_checkEnd'] = function(block) {
    var interactioncollector = Blockly.JavaScript.valueToCode(block, 'INTERACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return interactioncollector + ".checkEnd();\n";
};
Blockly.JavaScript['interactionwebhook_client'] = function(block) {
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactionwebhook + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactionwebhook_id'] = function(block) {
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactionwebhook + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactionwebhook_url'] = function(block) {
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [interactionwebhook + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['interactionwebhook_send'] = function(block) {
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactionwebhook + ".send(" + options + ");\n";
};
Blockly.JavaScript['interactionwebhook_fetchMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var cacheOrOptions = Blockly.JavaScript.valueToCode(block, 'CACHEOROPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactionwebhook + ".fetchMessage(" + message + ", " + cacheOrOptions + ")" + finalstring;
};
Blockly.JavaScript['interactionwebhook_editMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return interactionwebhook + ".editMessage(" + message + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['interactionwebhook_deleteMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var interactionwebhook = Blockly.JavaScript.valueToCode(block, 'INTERACTIONWEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var threadId = Blockly.JavaScript.valueToCode(block, 'THREADID', Blockly.JavaScript.ORDER_NONE) || "";
    return interactionwebhook + ".deleteMessage(" + message + ", " + threadId + ")" + finalstring;
};
Blockly.JavaScript['application_id'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_name'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_description'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_icon'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_createdTimestamp'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_createdAt'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [application + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['application_iconURL'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return application + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['application_coverURL'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return application + ".coverURL(" + options + ");\n";
};
Blockly.JavaScript['application_fetchAssets'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return application + ".fetchAssets()" + finalstring;
};
Blockly.JavaScript['application_toString'] = function(block) {
    var application = Blockly.JavaScript.valueToCode(block, 'APPLICATION', Blockly.JavaScript.ORDER_NONE) || "null";
    return application + ".toString();\n";
};
Blockly.JavaScript['collector_on'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "collect":
            variables = "args";
            break;
        case "dispose":
            variables = "args";
            break;
        case "end":
            variables = "collected, reason";
            break;
    }
    block.variables = variables;
    return [collector + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['collector_client'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_filter'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".filter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_options'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_collected'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".collected", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_ended'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".ended", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_next'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".next", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_endReason'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [collector + ".endReason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['collector_handleCollect'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".handleCollect(" + args + ")" + finalstring;
};
Blockly.JavaScript['collector_handleDispose'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".handleDispose(" + args + ")" + finalstring;
};
Blockly.JavaScript['collector_stop'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".stop(" + reason + ");\n";
};
Blockly.JavaScript['collector_resetTimer'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".resetTimer(" + options + ");\n";
};
Blockly.JavaScript['collector_checkEnd'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return collector + ".checkEnd();\n";
};
Blockly.JavaScript['collector_collect'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".collect(" + args + ");\n";
};
Blockly.JavaScript['collector_dispose'] = function(block) {
    var collector = Blockly.JavaScript.valueToCode(block, 'COLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return collector + ".dispose(" + args + ");\n";
};
Blockly.JavaScript['invite_guild'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_code'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".code", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_presenceCount'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".presenceCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_memberCount'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".memberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_temporary'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".temporary", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_maxAge'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".maxAge", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_uses'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".uses", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_maxUses'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".maxUses", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_inviterId'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".inviterId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_inviter'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".inviter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_targetUser'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".targetUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_targetApplication'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".targetApplication", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_targetType'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".targetType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_channelId'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_channel'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_createdTimestamp'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_stageInstance'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".stageInstance", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_guildScheduledEvent'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".guildScheduledEvent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_createdAt'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_deletable'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_expiresTimestamp'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".expiresTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_expiresAt'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".expiresAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_url'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_client'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_INVITES_PATTERN'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invite + ".INVITES_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invite_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return invite + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['invite_toString'] = function(block) {
    var invite = Blockly.JavaScript.valueToCode(block, 'INVITE', Blockly.JavaScript.ORDER_NONE) || "null";
    return invite + ".toString();\n";
};
Blockly.JavaScript['inviteguild_welcomeScreen'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".welcomeScreen", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_splash'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".splash", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_banner'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".banner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_description'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_verificationLevel'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".verificationLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_vanityURLCode'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".vanityURLCode", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_nsfwLevel'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".nsfwLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_id'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_name'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_icon'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_features'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_createdTimestamp'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_createdAt'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_nameAcronym'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".nameAcronym", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_partnered'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".partnered", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_verified'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_client'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [inviteguild + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['inviteguild_bannerURL'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return inviteguild + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['inviteguild_splashURL'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return inviteguild + ".splashURL(" + options + ");\n";
};
Blockly.JavaScript['inviteguild_iconURL'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return inviteguild + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['inviteguild_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return inviteguild + ".fetch()" + finalstring;
};
Blockly.JavaScript['inviteguild_toString'] = function(block) {
    var inviteguild = Blockly.JavaScript.valueToCode(block, 'INVITEGUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return inviteguild + ".toString();\n";
};
Blockly.JavaScript['invitestageinstance_channelId'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_guildId'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_members'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_topic'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_participantCount'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".participantCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_speakerCount'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".speakerCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_channel'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_guild'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['invitestageinstance_client'] = function(block) {
    var invitestageinstance = Blockly.JavaScript.valueToCode(block, 'INVITESTAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [invitestageinstance + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_channelId'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_guildId'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_id'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_createdTimestamp'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_type'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_system'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".system", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_content'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".content", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_author'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".author", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_pinned'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".pinned", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_tts'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".tts", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_nonce'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".nonce", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_embeds'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".embeds", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_components'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".components", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_attachments'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".attachments", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_stickers'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".stickers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_editedTimestamp'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".editedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reactions'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reactions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_mentions'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".mentions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_webhookId'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".webhookId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_groupActivityApplication'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".groupActivityApplication", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_applicationId'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_activity'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".activity", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_flags'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_reference'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".reference", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_interaction'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".interaction", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_channel'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_partial'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_member'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_createdAt'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_editedAt'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".editedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_guild'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_hasThread'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".hasThread", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_thread'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".thread", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_url'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_cleanContent'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".cleanContent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_editable'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".editable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_deletable'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_pinnable'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".pinnable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_crosspostable'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".crosspostable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_client'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [message + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['message_createReactionCollector'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".createReactionCollector(" + options + ");\n";
};
Blockly.JavaScript['message_awaitReactions'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".awaitReactions(" + options + ");\n";
};
Blockly.JavaScript['message_createMessageComponentCollector'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['message_awaitMessageComponent'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['message_fetchReference'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".fetchReference()" + finalstring;
};
Blockly.JavaScript['message_edit'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".edit(" + options + ");\n";
};
Blockly.JavaScript['message_crosspost'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".crosspost();\n";
};
Blockly.JavaScript['message_pin'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".pin()" + finalstring;
};
Blockly.JavaScript['message_unpin'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".unpin()" + finalstring;
};
Blockly.JavaScript['message_react'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".react(" + emoji + ")" + finalstring;
};
Blockly.JavaScript['message_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".delete()" + finalstring;
};
Blockly.JavaScript['message_reply'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".reply(" + options + ");\n";
};
Blockly.JavaScript['message_startThread'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".startThread(" + options + ");\n";
};
Blockly.JavaScript['message_fetch'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['message_fetchWebhook'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".fetchWebhook();\n";
};
Blockly.JavaScript['message_suppressEmbeds'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var suppress = Blockly.JavaScript.valueToCode(block, 'SUPPRESS', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".suppressEmbeds(" + suppress + ");\n";
};
Blockly.JavaScript['message_removeAttachments'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".removeAttachments();\n";
};
Blockly.JavaScript['message_resolveComponent'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var customId = Blockly.JavaScript.valueToCode(block, 'CUSTOMID', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".resolveComponent(" + customId + ");\n";
};
Blockly.JavaScript['message_equals'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var rawData = Blockly.JavaScript.valueToCode(block, 'RAWDATA', Blockly.JavaScript.ORDER_NONE) || "";
    return message + ".equals(" + message + ", " + rawData + ");\n";
};
Blockly.JavaScript['message_inGuild'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".inGuild();\n";
};
Blockly.JavaScript['message_toString'] = function(block) {
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "null";
    return message + ".toString();\n";
};
Blockly.JavaScript['messageactionrow_components'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageactionrow + ".components", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageactionrow_type'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageactionrow + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageactionrow_addComponents'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    var components = Blockly.JavaScript.valueToCode(block, 'COMPONENTS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageactionrow + ".addComponents(" + components + ");\n";
};
Blockly.JavaScript['messageactionrow_setComponents'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    var components = Blockly.JavaScript.valueToCode(block, 'COMPONENTS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageactionrow + ".setComponents(" + components + ");\n";
};
Blockly.JavaScript['messageactionrow_spliceComponents'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE) || "";
    var deleteCount = Blockly.JavaScript.valueToCode(block, 'DELETECOUNT', Blockly.JavaScript.ORDER_NONE) || "";
    var components = Blockly.JavaScript.valueToCode(block, 'COMPONENTS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageactionrow + ".spliceComponents(" + index + ", " + deleteCount + ", " + components + ");\n";
};
Blockly.JavaScript['messageactionrow_toJSON'] = function(block) {
    var messageactionrow = Blockly.JavaScript.valueToCode(block, 'MESSAGEACTIONROW', Blockly.JavaScript.ORDER_NONE) || "null";
    return messageactionrow + ".toJSON();\n";
};
Blockly.JavaScript['messageattachment_name'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_id'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_size'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".size", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_url'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_proxyURL'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".proxyURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_height'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".height", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_width'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".width", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_contentType'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".contentType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_description'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_ephemeral'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_spoiler'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageattachment + ".spoiler", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageattachment_setDescription'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_NONE) || "";
    return messageattachment + ".setDescription(" + description + ");\n";
};
Blockly.JavaScript['messageattachment_setFile'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var attachment = Blockly.JavaScript.valueToCode(block, 'ATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    return messageattachment + ".setFile(" + attachment + ", " + name + ");\n";
};
Blockly.JavaScript['messageattachment_setName'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    return messageattachment + ".setName(" + name + ");\n";
};
Blockly.JavaScript['messageattachment_setSpoiler'] = function(block) {
    var messageattachment = Blockly.JavaScript.valueToCode(block, 'MESSAGEATTACHMENT', Blockly.JavaScript.ORDER_NONE) || "null";
    var spoiler = Blockly.JavaScript.valueToCode(block, 'SPOILER', Blockly.JavaScript.ORDER_NONE) || "";
    return messageattachment + ".setSpoiler(" + spoiler + ");\n";
};
Blockly.JavaScript['messagebutton_label'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".label", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_customId'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".customId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_style'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".style", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_emoji'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".emoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_url'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_disabled'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".disabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_type'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagebutton + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagebutton_setCustomId'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var customId = Blockly.JavaScript.valueToCode(block, 'CUSTOMID', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setCustomId(" + customId + ");\n";
};
Blockly.JavaScript['messagebutton_setDisabled'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var disabled = Blockly.JavaScript.valueToCode(block, 'DISABLED', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setDisabled(" + disabled + ");\n";
};
Blockly.JavaScript['messagebutton_setEmoji'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var emoji = Blockly.JavaScript.valueToCode(block, 'EMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setEmoji(" + emoji + ");\n";
};
Blockly.JavaScript['messagebutton_setLabel'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var label = Blockly.JavaScript.valueToCode(block, 'LABEL', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setLabel(" + label + ");\n";
};
Blockly.JavaScript['messagebutton_setStyle'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setStyle(" + style + ");\n";
};
Blockly.JavaScript['messagebutton_setURL'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || "";
    return messagebutton + ".setURL(" + url + ");\n";
};
Blockly.JavaScript['messagebutton_toJSON'] = function(block) {
    var messagebutton = Blockly.JavaScript.valueToCode(block, 'MESSAGEBUTTON', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagebutton + ".toJSON();\n";
};
Blockly.JavaScript['messagecollector_on'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "collect":
            variables = "message";
            break;
        case "dispose":
            variables = "message";
            break;
        case "end":
            variables = "collected, reason";
            break;
    }
    block.variables = variables;
    return [messagecollector + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['messagecollector_channel'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_received'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".received", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_endReason'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".endReason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_client'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_filter'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".filter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_options'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_collected'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".collected", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_ended'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".ended", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_next'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecollector + ".next", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecollector_dispose'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecollector + ".dispose(" + message + ");\n";
};
Blockly.JavaScript['messagecollector_handleCollect'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecollector + ".handleCollect(" + args + ")" + finalstring;
};
Blockly.JavaScript['messagecollector_handleDispose'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecollector + ".handleDispose(" + args + ")" + finalstring;
};
Blockly.JavaScript['messagecollector_stop'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecollector + ".stop(" + reason + ");\n";
};
Blockly.JavaScript['messagecollector_resetTimer'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecollector + ".resetTimer(" + options + ");\n";
};
Blockly.JavaScript['messagecollector_checkEnd'] = function(block) {
    var messagecollector = Blockly.JavaScript.valueToCode(block, 'MESSAGECOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecollector + ".checkEnd();\n";
};
Blockly.JavaScript['messagecomponentinteraction_channelId'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_message'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_customId'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".customId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_componentType'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".componentType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_deferred'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_ephemeral'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_replied'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_webhook'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_component'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".component", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_type'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_id'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_token'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_applicationId'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_guildId'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_user'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_member'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_version'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_memberPermissions'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_locale'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_guildLocale'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_createdTimestamp'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_createdAt'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_channel'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_guild'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_client'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecomponentinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecomponentinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_fetchReply'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['messagecomponentinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_followUp'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['messagecomponentinteraction_deferUpdate'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".deferUpdate(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_update'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecomponentinteraction + ".update(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecomponentinteraction_inGuild'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".inGuild();\n";
};
Blockly.JavaScript['messagecomponentinteraction_inCachedGuild'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['messagecomponentinteraction_inRawGuild'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isApplicationCommand'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isCommand'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isCommand();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isContextMenu'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isUserContextMenu'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isMessageContextMenu'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isAutocomplete'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isMessageComponent'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isButton'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isButton();\n";
};
Blockly.JavaScript['messagecomponentinteraction_isSelectMenu'] = function(block) {
    var messagecomponentinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECOMPONENTINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecomponentinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_targetMessage'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".targetMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_options'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_targetId'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".targetId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_targetType'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".targetType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_channelId'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_commandId'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_commandName'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_deferred'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_replied'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_ephemeral'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_webhook'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_command'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_type'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_id'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_token'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_applicationId'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_guildId'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_user'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_member'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_version'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_memberPermissions'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_locale'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_guildLocale'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_createdTimestamp'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_createdAt'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_channel'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_guild'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_client'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagecontextmenuinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagecontextmenuinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecontextmenuinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecontextmenuinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecontextmenuinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecontextmenuinteraction_fetchReply'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecontextmenuinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['messagecontextmenuinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['messagecontextmenuinteraction_followUp'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagecontextmenuinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_inGuild'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".inGuild();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_inCachedGuild'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_inRawGuild'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isApplicationCommand'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isCommand'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isCommand();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isContextMenu'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isUserContextMenu'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isMessageContextMenu'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isAutocomplete'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isMessageComponent'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isButton'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isButton();\n";
};
Blockly.JavaScript['messagecontextmenuinteraction_isSelectMenu'] = function(block) {
    var messagecontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'MESSAGECONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagecontextmenuinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['messageembed_title'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".title", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_description'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_url'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_color'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".color", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_timestamp'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".timestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_fields'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".fields", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_thumbnail'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".thumbnail", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_image'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".image", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_video'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".video", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_author'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".author", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_provider'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".provider", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_footer'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".footer", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_createdAt'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_hexColor'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".hexColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_length'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageembed + ".length", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageembed_equals'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var embed = Blockly.JavaScript.valueToCode(block, 'EMBED', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".equals(" + embed + ");\n";
};
Blockly.JavaScript['messageembed_addField'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "";
    var inline = Blockly.JavaScript.valueToCode(block, 'INLINE', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".addField(" + name + ", " + value + ", " + inline + ");\n";
};
Blockly.JavaScript['messageembed_addFields'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var fields = Blockly.JavaScript.valueToCode(block, 'FIELDS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".addFields(" + fields + ");\n";
};
Blockly.JavaScript['messageembed_spliceFields'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE) || "";
    var deleteCount = Blockly.JavaScript.valueToCode(block, 'DELETECOUNT', Blockly.JavaScript.ORDER_NONE) || "";
    var fields = Blockly.JavaScript.valueToCode(block, 'FIELDS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".spliceFields(" + index + ", " + deleteCount + ", " + fields + ");\n";
};
Blockly.JavaScript['messageembed_setFields'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var fields = Blockly.JavaScript.valueToCode(block, 'FIELDS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setFields(" + fields + ");\n";
};
Blockly.JavaScript['messageembed_setAuthor'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var deprecatedIconURL = Blockly.JavaScript.valueToCode(block, 'DEPRECATEDICONURL', Blockly.JavaScript.ORDER_NONE) || "";
    var deprecatedURL = Blockly.JavaScript.valueToCode(block, 'DEPRECATEDURL', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setAuthor(" + options + ", " + deprecatedIconURL + ", " + deprecatedURL + ");\n";
};
Blockly.JavaScript['messageembed_setColor'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setColor(" + color + ");\n";
};
Blockly.JavaScript['messageembed_setDescription'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setDescription(" + description + ");\n";
};
Blockly.JavaScript['messageembed_setFooter'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var deprecatedIconURL = Blockly.JavaScript.valueToCode(block, 'DEPRECATEDICONURL', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setFooter(" + options + ", " + deprecatedIconURL + ");\n";
};
Blockly.JavaScript['messageembed_setImage'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setImage(" + url + ");\n";
};
Blockly.JavaScript['messageembed_setThumbnail'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setThumbnail(" + url + ");\n";
};
Blockly.JavaScript['messageembed_setTimestamp'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var timestamp = Blockly.JavaScript.valueToCode(block, 'TIMESTAMP', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setTimestamp(" + timestamp + ");\n";
};
Blockly.JavaScript['messageembed_setTitle'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var title = Blockly.JavaScript.valueToCode(block, 'TITLE', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setTitle(" + title + ");\n";
};
Blockly.JavaScript['messageembed_setURL'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".setURL(" + url + ");\n";
};
Blockly.JavaScript['messageembed_toJSON'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    return messageembed + ".toJSON();\n";
};
Blockly.JavaScript['messageembed_normalizeField'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || "";
    var inline = Blockly.JavaScript.valueToCode(block, 'INLINE', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".normalizeField(" + name + ", " + value + ", " + inline + ");\n";
};
Blockly.JavaScript['messageembed_normalizeFields'] = function(block) {
    var messageembed = Blockly.JavaScript.valueToCode(block, 'MESSAGEEMBED', Blockly.JavaScript.ORDER_NONE) || "null";
    var fields = Blockly.JavaScript.valueToCode(block, 'FIELDS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageembed + ".normalizeFields(" + fields + ");\n";
};
Blockly.JavaScript['messagementions_everyone'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".everyone", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_users'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".users", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_roles'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".roles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_crosspostedChannels'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".crosspostedChannels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_repliedUser'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".repliedUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_members'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_channels'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".channels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_EVERYONE_PATTERN'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".EVERYONE_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_USERS_PATTERN'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".USERS_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_ROLES_PATTERN'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".ROLES_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_CHANNELS_PATTERN'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagementions + ".CHANNELS_PATTERN", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagementions_has'] = function(block) {
    var messagementions = Blockly.JavaScript.valueToCode(block, 'MESSAGEMENTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messagementions + ".has(" + data + ", " + options + ");\n";
};
Blockly.JavaScript['messagepayload_target'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".target", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_options'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_data'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".data", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_files'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".files", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_isWebhook'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".isWebhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_isUser'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".isUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_isMessage'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".isMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_isMessageManager'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".isMessageManager", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_isInteraction'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagepayload + ".isInteraction", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagepayload_makeContent'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagepayload + ".makeContent();\n";
};
Blockly.JavaScript['messagepayload_resolveData'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagepayload + ".resolveData();\n";
};
Blockly.JavaScript['messagepayload_resolveFiles'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagepayload + ".resolveFiles()" + finalstring;
};
Blockly.JavaScript['messagepayload_resolveFile'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    var fileLike = Blockly.JavaScript.valueToCode(block, 'FILELIKE', Blockly.JavaScript.ORDER_NONE) || "";
    return messagepayload + ".resolveFile(" + fileLike + ")" + finalstring;
};
Blockly.JavaScript['messagepayload_create'] = function(block) {
    var messagepayload = Blockly.JavaScript.valueToCode(block, 'MESSAGEPAYLOAD', Blockly.JavaScript.ORDER_NONE) || "null";
    var target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var extra = Blockly.JavaScript.valueToCode(block, 'EXTRA', Blockly.JavaScript.ORDER_NONE) || "";
    return messagepayload + ".create(" + target + ", " + options + ", " + extra + ");\n";
};
Blockly.JavaScript['messagereaction_client'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_message'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_me'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".me", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_users'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".users", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_count'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".count", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_emoji'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".emoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_partial'] = function(block) {
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messagereaction + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messagereaction_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagereaction + ".remove()" + finalstring;
};
Blockly.JavaScript['messagereaction_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var messagereaction = Blockly.JavaScript.valueToCode(block, 'MESSAGEREACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return messagereaction + ".fetch()" + finalstring;
};
Blockly.JavaScript['messageselectmenu_customId'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".customId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_placeholder'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".placeholder", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_minValues'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".minValues", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_maxValues'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".maxValues", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_options'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_disabled'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".disabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_type'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageselectmenu + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageselectmenu_setCustomId'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var customId = Blockly.JavaScript.valueToCode(block, 'CUSTOMID', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setCustomId(" + customId + ");\n";
};
Blockly.JavaScript['messageselectmenu_setDisabled'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var disabled = Blockly.JavaScript.valueToCode(block, 'DISABLED', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setDisabled(" + disabled + ");\n";
};
Blockly.JavaScript['messageselectmenu_setMaxValues'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var maxValues = Blockly.JavaScript.valueToCode(block, 'MAXVALUES', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setMaxValues(" + maxValues + ");\n";
};
Blockly.JavaScript['messageselectmenu_setMinValues'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var minValues = Blockly.JavaScript.valueToCode(block, 'MINVALUES', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setMinValues(" + minValues + ");\n";
};
Blockly.JavaScript['messageselectmenu_setPlaceholder'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var placeholder = Blockly.JavaScript.valueToCode(block, 'PLACEHOLDER', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setPlaceholder(" + placeholder + ");\n";
};
Blockly.JavaScript['messageselectmenu_addOptions'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".addOptions(" + options + ");\n";
};
Blockly.JavaScript['messageselectmenu_setOptions'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".setOptions(" + options + ");\n";
};
Blockly.JavaScript['messageselectmenu_spliceOptions'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_NONE) || "";
    var deleteCount = Blockly.JavaScript.valueToCode(block, 'DELETECOUNT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".spliceOptions(" + index + ", " + deleteCount + ", " + options + ");\n";
};
Blockly.JavaScript['messageselectmenu_toJSON'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    return messageselectmenu + ".toJSON();\n";
};
Blockly.JavaScript['messageselectmenu_normalizeOption'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var option = Blockly.JavaScript.valueToCode(block, 'OPTION', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".normalizeOption(" + option + ");\n";
};
Blockly.JavaScript['messageselectmenu_normalizeOptions'] = function(block) {
    var messageselectmenu = Blockly.JavaScript.valueToCode(block, 'MESSAGESELECTMENU', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageselectmenu + ".normalizeOptions(" + options + ");\n";
};
Blockly.JavaScript['newschannel_messages'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".messages", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_threads'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".threads", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_nsfw'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".nsfw", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_topic'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_lastMessageId'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".lastMessageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_lastPinTimestamp'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".lastPinTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_defaultAutoArchiveDuration'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".defaultAutoArchiveDuration", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_lastMessage'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".lastMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_lastPinAt'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".lastPinAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_guild'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_guildId'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_permissionOverwrites'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_name'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_rawPosition'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_parentId'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_parent'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_permissionsLocked'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_position'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_members'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_deletable'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_manageable'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_viewable'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_type'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_id'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_createdTimestamp'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_createdAt'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_partial'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_client'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [newschannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['newschannel_addFollower'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".addFollower(" + channel + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['newschannel_setDefaultAutoArchiveDuration'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var defaultAutoArchiveDuration = Blockly.JavaScript.valueToCode(block, 'DEFAULTAUTOARCHIVEDURATION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setDefaultAutoArchiveDuration(" + defaultAutoArchiveDuration + ", " + reason + ");\n";
};
Blockly.JavaScript['newschannel_setNSFW'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var nsfw = Blockly.JavaScript.valueToCode(block, 'NSFW', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setNSFW(" + nsfw + ", " + reason + ");\n";
};
Blockly.JavaScript['newschannel_setType'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var type = Blockly.JavaScript.valueToCode(block, 'TYPE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setType(" + type + ", " + reason + ");\n";
};
Blockly.JavaScript['newschannel_fetchWebhooks'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".fetchWebhooks()" + finalstring;
};
Blockly.JavaScript['newschannel_createWebhook'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".createWebhook(" + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['newschannel_setTopic'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setTopic(" + topic + ", " + reason + ");\n";
};
Blockly.JavaScript['newschannel_createInvite'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['newschannel_fetchInvites'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['newschannel_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['newschannel_sendTyping'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".sendTyping()" + finalstring;
};
Blockly.JavaScript['newschannel_createMessageCollector'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".createMessageCollector(" + options + ");\n";
};
Blockly.JavaScript['newschannel_awaitMessages'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".awaitMessages(" + options + ");\n";
};
Blockly.JavaScript['newschannel_createMessageComponentCollector'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['newschannel_awaitMessageComponent'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['newschannel_bulkDelete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var messages = Blockly.JavaScript.valueToCode(block, 'MESSAGES', Blockly.JavaScript.ORDER_NONE) || "";
    var filterOld = Blockly.JavaScript.valueToCode(block, 'FILTEROLD', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".bulkDelete(" + messages + ", " + filterOld + ")" + finalstring;
};
Blockly.JavaScript['newschannel_permissionsFor'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['newschannel_lockPermissions'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".lockPermissions();\n";
};
Blockly.JavaScript['newschannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['newschannel_setName'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['newschannel_setParent'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['newschannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['newschannel_clone'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['newschannel_equals'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['newschannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['newschannel_toString'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".toString();\n";
};
Blockly.JavaScript['newschannel_fetch'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return newschannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['newschannel_isText'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".isText();\n";
};
Blockly.JavaScript['newschannel_isVoice'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".isVoice();\n";
};
Blockly.JavaScript['newschannel_isThread'] = function(block) {
    var newschannel = Blockly.JavaScript.valueToCode(block, 'NEWSCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return newschannel + ".isThread();\n";
};
Blockly.JavaScript['oauth2guild_owner'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".owner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_permissions'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_id'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_name'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_icon'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_features'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".features", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_createdTimestamp'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_createdAt'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_nameAcronym'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".nameAcronym", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_partnered'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".partnered", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_verified'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".verified", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_client'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [oauth2guild + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['oauth2guild_iconURL'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return oauth2guild + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['oauth2guild_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return oauth2guild + ".fetch()" + finalstring;
};
Blockly.JavaScript['oauth2guild_toString'] = function(block) {
    var oauth2guild = Blockly.JavaScript.valueToCode(block, 'OAUTH2GUILD', Blockly.JavaScript.ORDER_NONE) || "null";
    return oauth2guild + ".toString();\n";
};
Blockly.JavaScript['partialgroupdmchannel_name'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_icon'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_recipients'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".recipients", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_type'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_id'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_createdTimestamp'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_createdAt'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_partial'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_client'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [partialgroupdmchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['partialgroupdmchannel_iconURL'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return partialgroupdmchannel + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['partialgroupdmchannel_toString'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return partialgroupdmchannel + ".toString();\n";
};
Blockly.JavaScript['partialgroupdmchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return partialgroupdmchannel + ".delete()" + finalstring;
};
Blockly.JavaScript['partialgroupdmchannel_fetch'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return partialgroupdmchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['partialgroupdmchannel_isText'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return partialgroupdmchannel + ".isText();\n";
};
Blockly.JavaScript['partialgroupdmchannel_isVoice'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return partialgroupdmchannel + ".isVoice();\n";
};
Blockly.JavaScript['partialgroupdmchannel_isThread'] = function(block) {
    var partialgroupdmchannel = Blockly.JavaScript.valueToCode(block, 'PARTIALGROUPDMCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return partialgroupdmchannel + ".isThread();\n";
};
Blockly.JavaScript['permissionoverwrites_channel'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_id'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_type'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_deny'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".deny", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_allow'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".allow", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_client'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissionoverwrites + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissionoverwrites_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwrites + ".edit(" + options + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['permissionoverwrites_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwrites + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['permissionoverwrites_resolveOverwriteOptions'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var initialPermissions = Blockly.JavaScript.valueToCode(block, 'INITIALPERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwrites + ".resolveOverwriteOptions(" + options + ", " + initialPermissions + ");\n";
};
Blockly.JavaScript['permissionoverwrites_resolve'] = function(block) {
    var permissionoverwrites = Blockly.JavaScript.valueToCode(block, 'PERMISSIONOVERWRITES', Blockly.JavaScript.ORDER_NONE) || "null";
    var overwrite = Blockly.JavaScript.valueToCode(block, 'OVERWRITE', Blockly.JavaScript.ORDER_NONE) || "";
    var guild = Blockly.JavaScript.valueToCode(block, 'GUILD', Blockly.JavaScript.ORDER_NONE) || "";
    return permissionoverwrites + ".resolve(" + overwrite + ", " + guild + ");\n";
};
Blockly.JavaScript['presence_userId'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".userId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_guild'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_user'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_member'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_status'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_activities'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".activities", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_clientStatus'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".clientStatus", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_client'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [presence + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['presence_equals'] = function(block) {
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "null";
    var presence = Blockly.JavaScript.valueToCode(block, 'PRESENCE', Blockly.JavaScript.ORDER_NONE) || "";
    return presence + ".equals(" + presence + ");\n";
};
Blockly.JavaScript['activity_id'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_name'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_type'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_url'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_details'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".details", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_state'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".state", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_applicationId'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_timestamps'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".timestamps", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_syncId'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".syncId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_platform'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".platform", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_party'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".party", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_assets'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".assets", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_flags'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_emoji'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".emoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_sessionId'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".sessionId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_buttons'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".buttons", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_createdTimestamp'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_createdAt'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activity + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activity_equals'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "";
    return activity + ".equals(" + activity + ");\n";
};
Blockly.JavaScript['activity_toString'] = function(block) {
    var activity = Blockly.JavaScript.valueToCode(block, 'ACTIVITY', Blockly.JavaScript.ORDER_NONE) || "null";
    return activity + ".toString();\n";
};
Blockly.JavaScript['richpresenceassets_largeText'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [richpresenceassets + ".largeText", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['richpresenceassets_smallText'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [richpresenceassets + ".smallText", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['richpresenceassets_largeImage'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [richpresenceassets + ".largeImage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['richpresenceassets_smallImage'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [richpresenceassets + ".smallImage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['richpresenceassets_smallImageURL'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return richpresenceassets + ".smallImageURL(" + options + ");\n";
};
Blockly.JavaScript['richpresenceassets_largeImageURL'] = function(block) {
    var richpresenceassets = Blockly.JavaScript.valueToCode(block, 'RICHPRESENCEASSETS', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return richpresenceassets + ".largeImageURL(" + options + ");\n";
};
Blockly.JavaScript['reactioncollector_on'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {
        case "create":
            variables = "reaction, user";
            break;
        case "collect":
            variables = "reaction, user";
            break;
        case "dispose":
            variables = "reaction, user";
            break;
        case "remove":
            variables = "reaction, user";
            break;
        case "end":
            variables = "collected, reason";
            break;
    }
    block.variables = variables;
    return [reactioncollector + ".on('" + action + "', (" + variables + ") => {\n" + d + "});\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
Blockly.JavaScript['reactioncollector_message'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_users'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".users", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_total'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".total", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_endReason'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".endReason", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_client'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_filter'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".filter", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_options'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_collected'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".collected", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_ended'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".ended", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_next'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactioncollector + ".next", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactioncollector_dispose'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".dispose(" + reaction + ", " + user + ");\n";
};
Blockly.JavaScript['reactioncollector_empty'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return reactioncollector + ".empty();\n";
};
Blockly.JavaScript['reactioncollector_handleCollect'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".handleCollect(" + args + ")" + finalstring;
};
Blockly.JavaScript['reactioncollector_handleDispose'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var args = Blockly.JavaScript.valueToCode(block, 'ARGS', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".handleDispose(" + args + ")" + finalstring;
};
Blockly.JavaScript['reactioncollector_stop'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".stop(" + reason + ");\n";
};
Blockly.JavaScript['reactioncollector_resetTimer'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".resetTimer(" + options + ");\n";
};
Blockly.JavaScript['reactioncollector_checkEnd'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    return reactioncollector + ".checkEnd();\n";
};
Blockly.JavaScript['reactioncollector_key'] = function(block) {
    var reactioncollector = Blockly.JavaScript.valueToCode(block, 'REACTIONCOLLECTOR', Blockly.JavaScript.ORDER_NONE) || "null";
    var reaction = Blockly.JavaScript.valueToCode(block, 'REACTION', Blockly.JavaScript.ORDER_NONE) || "";
    return reactioncollector + ".key(" + reaction + ");\n";
};
Blockly.JavaScript['reactionemoji_reaction'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".reaction", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_animated'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".animated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_name'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_id'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_identifier'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".identifier", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_url'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_createdTimestamp'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_createdAt'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_client'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return [reactionemoji + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['reactionemoji_toString'] = function(block) {
    var reactionemoji = Blockly.JavaScript.valueToCode(block, 'REACTIONEMOJI', Blockly.JavaScript.ORDER_NONE) || "null";
    return reactionemoji + ".toString();\n";
};
Blockly.JavaScript['role_guild'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_icon'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_unicodeEmoji'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".unicodeEmoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_id'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_name'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_color'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".color", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_hoist'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".hoist", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_rawPosition'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_permissions'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_managed'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".managed", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_mentionable'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".mentionable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_tags'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".tags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_createdTimestamp'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_createdAt'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_hexColor'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".hexColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_members'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_editable'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".editable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_position'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_client'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [role + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['role_comparePositionTo'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".comparePositionTo(" + role + ");\n";
};
Blockly.JavaScript['role_edit'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".edit(" + data + ", " + reason + ");\n";
};
Blockly.JavaScript['role_permissionsIn'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".permissionsIn(" + channel + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['role_setName'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setColor'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setColor(" + color + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setHoist'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var hoist = Blockly.JavaScript.valueToCode(block, 'HOIST', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setHoist(" + hoist + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setPermissions'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setPermissions(" + permissions + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setMentionable'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var mentionable = Blockly.JavaScript.valueToCode(block, 'MENTIONABLE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setMentionable(" + mentionable + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setIcon'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var icon = Blockly.JavaScript.valueToCode(block, 'ICON', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setIcon(" + icon + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setUnicodeEmoji'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var unicodeEmoji = Blockly.JavaScript.valueToCode(block, 'UNICODEEMOJI', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setUnicodeEmoji(" + unicodeEmoji + ", " + reason + ");\n";
};
Blockly.JavaScript['role_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['role_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['role_iconURL'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['role_equals'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "";
    return role + ".equals(" + role + ");\n";
};
Blockly.JavaScript['role_toString'] = function(block) {
    var role = Blockly.JavaScript.valueToCode(block, 'ROLE', Blockly.JavaScript.ORDER_NONE) || "null";
    return role + ".toString();\n";
};
Blockly.JavaScript['selectmenuinteraction_values'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".values", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_channelId'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_message'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".message", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_customId'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".customId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_componentType'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".componentType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_deferred'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_ephemeral'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_replied'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_webhook'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_component'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".component", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_type'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_id'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_token'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_applicationId'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_guildId'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_user'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_member'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_version'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_memberPermissions'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_locale'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_guildLocale'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_createdTimestamp'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_createdAt'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_channel'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_guild'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_client'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [selectmenuinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['selectmenuinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_fetchReply'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['selectmenuinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_followUp'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['selectmenuinteraction_deferUpdate'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".deferUpdate(" + options + ")" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_update'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return selectmenuinteraction + ".update(" + options + ")" + finalstring;
};
Blockly.JavaScript['selectmenuinteraction_inGuild'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".inGuild();\n";
};
Blockly.JavaScript['selectmenuinteraction_inCachedGuild'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['selectmenuinteraction_inRawGuild'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['selectmenuinteraction_isApplicationCommand'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['selectmenuinteraction_isCommand'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isCommand();\n";
};
Blockly.JavaScript['selectmenuinteraction_isContextMenu'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['selectmenuinteraction_isUserContextMenu'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['selectmenuinteraction_isMessageContextMenu'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['selectmenuinteraction_isAutocomplete'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['selectmenuinteraction_isMessageComponent'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['selectmenuinteraction_isButton'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isButton();\n";
};
Blockly.JavaScript['selectmenuinteraction_isSelectMenu'] = function(block) {
    var selectmenuinteraction = Blockly.JavaScript.valueToCode(block, 'SELECTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return selectmenuinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['stagechannel_topic'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_stageInstance'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".stageInstance", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_rtcRegion'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".rtcRegion", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_bitrate'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".bitrate", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_userLimit'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".userLimit", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_members'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_full'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".full", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_joinable'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".joinable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_guild'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_guildId'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_permissionOverwrites'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_name'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_rawPosition'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_parentId'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_parent'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_permissionsLocked'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_position'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_deletable'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_manageable'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_viewable'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_type'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_id'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_createdTimestamp'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_createdAt'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_partial'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_client'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stagechannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stagechannel_createStageInstance'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".createStageInstance(" + options + ");\n";
};
Blockly.JavaScript['stagechannel_setTopic'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".setTopic(" + topic + ", " + reason + ");\n";
};
Blockly.JavaScript['stagechannel_setRTCRegion'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var region = Blockly.JavaScript.valueToCode(block, 'REGION', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".setRTCRegion(" + region + ");\n";
};
Blockly.JavaScript['stagechannel_createInvite'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['stagechannel_fetchInvites'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['stagechannel_permissionsFor'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['stagechannel_lockPermissions'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return stagechannel + ".lockPermissions();\n";
};
Blockly.JavaScript['stagechannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['stagechannel_setName'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['stagechannel_setParent'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['stagechannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['stagechannel_clone'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['stagechannel_equals'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['stagechannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['stagechannel_toString'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return stagechannel + ".toString();\n";
};
Blockly.JavaScript['stagechannel_fetch'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return stagechannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['stagechannel_isText'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return stagechannel + ".isText();\n";
};
Blockly.JavaScript['stagechannel_isVoice'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return stagechannel + ".isVoice();\n";
};
Blockly.JavaScript['stagechannel_isThread'] = function(block) {
    var stagechannel = Blockly.JavaScript.valueToCode(block, 'STAGECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return stagechannel + ".isThread();\n";
};
Blockly.JavaScript['stageinstance_id'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_guildId'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_channelId'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_topic'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_privacyLevel'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".privacyLevel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_discoverableDisabled'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".discoverableDisabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_channel'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_guild'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_createdTimestamp'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_createdAt'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_client'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stageinstance + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stageinstance_edit'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstance + ".edit(" + options + ");\n";
};
Blockly.JavaScript['stageinstance_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    return stageinstance + ".delete()" + finalstring;
};
Blockly.JavaScript['stageinstance_setTopic'] = function(block) {
    var stageinstance = Blockly.JavaScript.valueToCode(block, 'STAGEINSTANCE', Blockly.JavaScript.ORDER_NONE) || "null";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    return stageinstance + ".setTopic(" + topic + ");\n";
};
Blockly.JavaScript['sticker_id'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_description'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_type'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_format'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".format", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_name'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_packId'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".packId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_tags'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".tags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_available'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".available", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_guildId'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_user'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_sortValue'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".sortValue", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_createdTimestamp'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_createdAt'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_partial'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_guild'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_url'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_client'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sticker + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sticker_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return sticker + ".fetch()" + finalstring;
};
Blockly.JavaScript['sticker_fetchPack'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return sticker + ".fetchPack()" + finalstring;
};
Blockly.JavaScript['sticker_fetchUser'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    return sticker + ".fetchUser()" + finalstring;
};
Blockly.JavaScript['sticker_edit'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return sticker + ".edit(" + data + ", " + reason + ");\n";
};
Blockly.JavaScript['sticker_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return sticker + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['sticker_equals'] = function(block) {
    var sticker = Blockly.JavaScript.valueToCode(block, 'STICKER', Blockly.JavaScript.ORDER_NONE) || "null";
    var other = Blockly.JavaScript.valueToCode(block, 'OTHER', Blockly.JavaScript.ORDER_NONE) || "";
    return sticker + ".equals(" + other + ");\n";
};
Blockly.JavaScript['stickerpack_id'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_stickers'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".stickers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_name'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_skuId'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".skuId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_coverStickerId'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".coverStickerId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_description'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_bannerId'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".bannerId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_createdTimestamp'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_createdAt'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_coverSticker'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".coverSticker", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_client'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [stickerpack + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['stickerpack_bannerURL'] = function(block) {
    var stickerpack = Blockly.JavaScript.valueToCode(block, 'STICKERPACK', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return stickerpack + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['storechannel_nsfw'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".nsfw", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_guild'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_guildId'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_permissionOverwrites'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_name'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_rawPosition'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_parentId'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_parent'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_permissionsLocked'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_position'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_members'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_deletable'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_manageable'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_viewable'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_type'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_id'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_createdTimestamp'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_createdAt'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_partial'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_client'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [storechannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['storechannel_createInvite'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['storechannel_fetchInvites'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['storechannel_permissionsFor'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['storechannel_lockPermissions'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return storechannel + ".lockPermissions();\n";
};
Blockly.JavaScript['storechannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['storechannel_setName'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['storechannel_setParent'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['storechannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['storechannel_clone'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['storechannel_equals'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['storechannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['storechannel_toString'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return storechannel + ".toString();\n";
};
Blockly.JavaScript['storechannel_fetch'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return storechannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['storechannel_isText'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return storechannel + ".isText();\n";
};
Blockly.JavaScript['storechannel_isVoice'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return storechannel + ".isVoice();\n";
};
Blockly.JavaScript['storechannel_isThread'] = function(block) {
    var storechannel = Blockly.JavaScript.valueToCode(block, 'STORECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return storechannel + ".isThread();\n";
};
Blockly.JavaScript['team_id'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_name'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_icon'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".icon", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_ownerId'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".ownerId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_members'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_owner'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".owner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_createdTimestamp'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_createdAt'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_client'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return [team + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['team_iconURL'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return team + ".iconURL(" + options + ");\n";
};
Blockly.JavaScript['team_toString'] = function(block) {
    var team = Blockly.JavaScript.valueToCode(block, 'TEAM', Blockly.JavaScript.ORDER_NONE) || "null";
    return team + ".toString();\n";
};
Blockly.JavaScript['teammember_team'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".team", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_permissions'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".permissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_membershipState'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".membershipState", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_user'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_id'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_client'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [teammember + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['teammember_toString'] = function(block) {
    var teammember = Blockly.JavaScript.valueToCode(block, 'TEAMMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return teammember + ".toString();\n";
};
Blockly.JavaScript['textchannel_rateLimitPerUser'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".rateLimitPerUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_messages'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".messages", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_threads'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".threads", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_nsfw'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".nsfw", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_topic'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".topic", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_lastMessageId'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".lastMessageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_lastPinTimestamp'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".lastPinTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_defaultAutoArchiveDuration'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".defaultAutoArchiveDuration", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_lastMessage'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".lastMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_lastPinAt'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".lastPinAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_guild'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_guildId'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_permissionOverwrites'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_name'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_rawPosition'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_parentId'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_parent'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_permissionsLocked'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_position'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_members'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_deletable'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_manageable'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_viewable'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_type'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_id'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_createdTimestamp'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_createdAt'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_partial'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_client'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [textchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['textchannel_setRateLimitPerUser'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var rateLimitPerUser = Blockly.JavaScript.valueToCode(block, 'RATELIMITPERUSER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setRateLimitPerUser(" + rateLimitPerUser + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_setDefaultAutoArchiveDuration'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var defaultAutoArchiveDuration = Blockly.JavaScript.valueToCode(block, 'DEFAULTAUTOARCHIVEDURATION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setDefaultAutoArchiveDuration(" + defaultAutoArchiveDuration + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_setNSFW'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var nsfw = Blockly.JavaScript.valueToCode(block, 'NSFW', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setNSFW(" + nsfw + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_setType'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var type = Blockly.JavaScript.valueToCode(block, 'TYPE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setType(" + type + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_fetchWebhooks'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".fetchWebhooks()" + finalstring;
};
Blockly.JavaScript['textchannel_createWebhook'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".createWebhook(" + name + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['textchannel_setTopic'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var topic = Blockly.JavaScript.valueToCode(block, 'TOPIC', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setTopic(" + topic + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_createInvite'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['textchannel_fetchInvites'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['textchannel_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['textchannel_sendTyping'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".sendTyping()" + finalstring;
};
Blockly.JavaScript['textchannel_createMessageCollector'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".createMessageCollector(" + options + ");\n";
};
Blockly.JavaScript['textchannel_awaitMessages'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".awaitMessages(" + options + ");\n";
};
Blockly.JavaScript['textchannel_createMessageComponentCollector'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['textchannel_awaitMessageComponent'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['textchannel_bulkDelete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var messages = Blockly.JavaScript.valueToCode(block, 'MESSAGES', Blockly.JavaScript.ORDER_NONE) || "";
    var filterOld = Blockly.JavaScript.valueToCode(block, 'FILTEROLD', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".bulkDelete(" + messages + ", " + filterOld + ")" + finalstring;
};
Blockly.JavaScript['textchannel_permissionsFor'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['textchannel_lockPermissions'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".lockPermissions();\n";
};
Blockly.JavaScript['textchannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['textchannel_setName'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['textchannel_setParent'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['textchannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['textchannel_clone'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['textchannel_equals'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['textchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['textchannel_toString'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".toString();\n";
};
Blockly.JavaScript['textchannel_fetch'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return textchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['textchannel_isText'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".isText();\n";
};
Blockly.JavaScript['textchannel_isVoice'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".isVoice();\n";
};
Blockly.JavaScript['textchannel_isThread'] = function(block) {
    var textchannel = Blockly.JavaScript.valueToCode(block, 'TEXTCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return textchannel + ".isThread();\n";
};
Blockly.JavaScript['threadchannel_guild'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_guildId'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_messages'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".messages", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_members'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_name'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_parentId'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_locked'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".locked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_invitable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".invitable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_archived'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".archived", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_autoArchiveDuration'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".autoArchiveDuration", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_archiveTimestamp'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".archiveTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_ownerId'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".ownerId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_lastMessageId'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".lastMessageId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_lastPinTimestamp'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".lastPinTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_rateLimitPerUser'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".rateLimitPerUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_messageCount'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".messageCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_memberCount'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".memberCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_guildMembers'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".guildMembers", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_archivedAt'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".archivedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_parent'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_joined'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".joined", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_editable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".editable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_joinable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".joinable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_manageable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_viewable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_sendable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".sendable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_unarchivable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".unarchivable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_lastMessage'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".lastMessage", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_lastPinAt'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".lastPinAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_type'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_id'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_createdTimestamp'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_createdAt'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_partial'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_client'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadchannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadchannel_join'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".join()" + finalstring;
};
Blockly.JavaScript['threadchannel_leave'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".leave()" + finalstring;
};
Blockly.JavaScript['threadchannel_permissionsFor'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['threadchannel_fetchOwner'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".fetchOwner(" + options + ")" + finalstring;
};
Blockly.JavaScript['threadchannel_fetchStarterMessage'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".fetchStarterMessage(" + options + ");\n";
};
Blockly.JavaScript['threadchannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['threadchannel_setArchived'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var archived = Blockly.JavaScript.valueToCode(block, 'ARCHIVED', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setArchived(" + archived + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_setAutoArchiveDuration'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var autoArchiveDuration = Blockly.JavaScript.valueToCode(block, 'AUTOARCHIVEDURATION', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setAutoArchiveDuration(" + autoArchiveDuration + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_setInvitable'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var invitable = Blockly.JavaScript.valueToCode(block, 'INVITABLE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setInvitable(" + invitable + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_setLocked'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var locked = Blockly.JavaScript.valueToCode(block, 'LOCKED', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setLocked(" + locked + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_setName'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_setRateLimitPerUser'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var rateLimitPerUser = Blockly.JavaScript.valueToCode(block, 'RATELIMITPERUSER', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".setRateLimitPerUser(" + rateLimitPerUser + ", " + reason + ");\n";
};
Blockly.JavaScript['threadchannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['threadchannel_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['threadchannel_sendTyping'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".sendTyping()" + finalstring;
};
Blockly.JavaScript['threadchannel_createMessageCollector'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".createMessageCollector(" + options + ");\n";
};
Blockly.JavaScript['threadchannel_awaitMessages'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".awaitMessages(" + options + ");\n";
};
Blockly.JavaScript['threadchannel_createMessageComponentCollector'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".createMessageComponentCollector(" + options + ");\n";
};
Blockly.JavaScript['threadchannel_awaitMessageComponent'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".awaitMessageComponent(" + options + ");\n";
};
Blockly.JavaScript['threadchannel_bulkDelete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var messages = Blockly.JavaScript.valueToCode(block, 'MESSAGES', Blockly.JavaScript.ORDER_NONE) || "";
    var filterOld = Blockly.JavaScript.valueToCode(block, 'FILTEROLD', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".bulkDelete(" + messages + ", " + filterOld + ")" + finalstring;
};
Blockly.JavaScript['threadchannel_toString'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".toString();\n";
};
Blockly.JavaScript['threadchannel_fetch'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return threadchannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['threadchannel_isText'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".isText();\n";
};
Blockly.JavaScript['threadchannel_isVoice'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".isVoice();\n";
};
Blockly.JavaScript['threadchannel_isThread'] = function(block) {
    var threadchannel = Blockly.JavaScript.valueToCode(block, 'THREADCHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadchannel + ".isThread();\n";
};
Blockly.JavaScript['threadmember_thread'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".thread", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_joinedTimestamp'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".joinedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_id'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_flags'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_guildMember'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".guildMember", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_joinedAt'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".joinedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_user'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_manageable'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_client'] = function(block) {
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmember + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmember_remove'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var threadmember = Blockly.JavaScript.valueToCode(block, 'THREADMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmember + ".remove(" + reason + ")" + finalstring;
};
Blockly.JavaScript['typing_channel'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_user'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_startedTimestamp'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".startedTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_startedAt'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".startedAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_guild'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_member'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_client'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return [typing + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['typing_inGuild'] = function(block) {
    var typing = Blockly.JavaScript.valueToCode(block, 'TYPING', Blockly.JavaScript.ORDER_NONE) || "null";
    return typing + ".inGuild();\n";
};
Blockly.JavaScript['user_id'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_username'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".username", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_bot'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".bot", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_discriminator'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".discriminator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_avatar'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".avatar", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_banner'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".banner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_accentColor'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".accentColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_system'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".system", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_flags'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".flags", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_partial'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_createdTimestamp'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_createdAt'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_defaultAvatarURL'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".defaultAvatarURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_hexAccentColor'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".hexAccentColor", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_tag'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".tag", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_dmChannel'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".dmChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_client'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [user + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['user_avatarURL'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".avatarURL(" + options + ");\n";
};
Blockly.JavaScript['user_displayAvatarURL'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".displayAvatarURL(" + options + ");\n";
};
Blockly.JavaScript['user_bannerURL'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".bannerURL(" + options + ");\n";
};
Blockly.JavaScript['user_createDM'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".createDM(" + force + ");\n";
};
Blockly.JavaScript['user_deleteDM'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return user + ".deleteDM();\n";
};
Blockly.JavaScript['user_equals'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".equals(" + user + ");\n";
};
Blockly.JavaScript['user_fetchFlags'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".fetchFlags(" + force + ");\n";
};
Blockly.JavaScript['user_fetch'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['user_toString'] = function(block) {
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    return user + ".toString();\n";
};
Blockly.JavaScript['user_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var user = Blockly.JavaScript.valueToCode(block, 'USER', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return user + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['usercontextmenuinteraction_targetUser'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".targetUser", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_targetMember'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".targetMember", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_options'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_targetId'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".targetId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_targetType'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".targetType", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_channelId'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_commandId'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".commandId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_commandName'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".commandName", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_deferred'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".deferred", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_replied'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".replied", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_ephemeral'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".ephemeral", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_webhook'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".webhook", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_command'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".command", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_type'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_id'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_token'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_applicationId'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".applicationId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_guildId'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_user'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".user", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_member'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_version'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".version", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_memberPermissions'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".memberPermissions", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_locale'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".locale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_guildLocale'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".guildLocale", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_createdTimestamp'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_createdAt'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_channel'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_guild'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_client'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [usercontextmenuinteraction + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['usercontextmenuinteraction_deferReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usercontextmenuinteraction + ".deferReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['usercontextmenuinteraction_reply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usercontextmenuinteraction + ".reply(" + options + ")" + finalstring;
};
Blockly.JavaScript['usercontextmenuinteraction_fetchReply'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".fetchReply();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_editReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usercontextmenuinteraction + ".editReply(" + options + ")" + finalstring;
};
Blockly.JavaScript['usercontextmenuinteraction_deleteReply'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".deleteReply()" + finalstring;
};
Blockly.JavaScript['usercontextmenuinteraction_followUp'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return usercontextmenuinteraction + ".followUp(" + options + ");\n";
};
Blockly.JavaScript['usercontextmenuinteraction_inGuild'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".inGuild();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_inCachedGuild'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".inCachedGuild();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_inRawGuild'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".inRawGuild();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isApplicationCommand'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isApplicationCommand();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isCommand'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isCommand();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isContextMenu'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isContextMenu();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isUserContextMenu'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isUserContextMenu();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isMessageContextMenu'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isMessageContextMenu();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isAutocomplete'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isAutocomplete();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isMessageComponent'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isMessageComponent();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isButton'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isButton();\n";
};
Blockly.JavaScript['usercontextmenuinteraction_isSelectMenu'] = function(block) {
    var usercontextmenuinteraction = Blockly.JavaScript.valueToCode(block, 'USERCONTEXTMENUINTERACTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return usercontextmenuinteraction + ".isSelectMenu();\n";
};
Blockly.JavaScript['voicechannel_joinable'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".joinable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_speakable'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".speakable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_rtcRegion'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".rtcRegion", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_bitrate'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".bitrate", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_userLimit'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".userLimit", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_members'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_full'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".full", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_guild'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_guildId'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_permissionOverwrites'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".permissionOverwrites", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_name'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_rawPosition'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".rawPosition", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_parentId'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".parentId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_parent'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".parent", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_permissionsLocked'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".permissionsLocked", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_position'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".position", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_deletable'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".deletable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_manageable'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".manageable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_viewable'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".viewable", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_type'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_id'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_createdTimestamp'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_createdAt'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_partial'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".partial", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_client'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicechannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicechannel_setBitrate'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var bitrate = Blockly.JavaScript.valueToCode(block, 'BITRATE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setBitrate(" + bitrate + ", " + reason + ");\n";
};
Blockly.JavaScript['voicechannel_setUserLimit'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var userLimit = Blockly.JavaScript.valueToCode(block, 'USERLIMIT', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setUserLimit(" + userLimit + ", " + reason + ");\n";
};
Blockly.JavaScript['voicechannel_setRTCRegion'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var region = Blockly.JavaScript.valueToCode(block, 'REGION', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setRTCRegion(" + region + ");\n";
};
Blockly.JavaScript['voicechannel_createInvite'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".createInvite(" + options + ");\n";
};
Blockly.JavaScript['voicechannel_fetchInvites'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var cache = Blockly.JavaScript.valueToCode(block, 'CACHE', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".fetchInvites(" + cache + ");\n";
};
Blockly.JavaScript['voicechannel_permissionsFor'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberOrRole = Blockly.JavaScript.valueToCode(block, 'MEMBERORROLE', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".permissionsFor(" + memberOrRole + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['voicechannel_lockPermissions'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return voicechannel + ".lockPermissions();\n";
};
Blockly.JavaScript['voicechannel_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".edit(" + data + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['voicechannel_setName'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setName(" + name + ", " + reason + ");\n";
};
Blockly.JavaScript['voicechannel_setParent'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setParent(" + channel + ", " + options + ");\n";
};
Blockly.JavaScript['voicechannel_setPosition'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".setPosition(" + position + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['voicechannel_clone'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".clone(" + options + ");\n";
};
Blockly.JavaScript['voicechannel_equals'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".equals(" + channel + ");\n";
};
Blockly.JavaScript['voicechannel_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['voicechannel_toString'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return voicechannel + ".toString();\n";
};
Blockly.JavaScript['voicechannel_fetch'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    var force = Blockly.JavaScript.valueToCode(block, 'FORCE', Blockly.JavaScript.ORDER_NONE) || "";
    return voicechannel + ".fetch(" + force + ");\n";
};
Blockly.JavaScript['voicechannel_isText'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return voicechannel + ".isText();\n";
};
Blockly.JavaScript['voicechannel_isVoice'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return voicechannel + ".isVoice();\n";
};
Blockly.JavaScript['voicechannel_isThread'] = function(block) {
    var voicechannel = Blockly.JavaScript.valueToCode(block, 'VOICECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return voicechannel + ".isThread();\n";
};
Blockly.JavaScript['voiceregion_id'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voiceregion_name'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voiceregion_vip'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".vip", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voiceregion_deprecated'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".deprecated", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voiceregion_optimal'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".optimal", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voiceregion_custom'] = function(block) {
    var voiceregion = Blockly.JavaScript.valueToCode(block, 'VOICEREGION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voiceregion + ".custom", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_guild'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_id'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_serverDeaf'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".serverDeaf", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_serverMute'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".serverMute", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_selfDeaf'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".selfDeaf", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_selfMute'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".selfMute", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_selfVideo'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".selfVideo", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_sessionId'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".sessionId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_streaming'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".streaming", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_channelId'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_suppress'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".suppress", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_requestToSpeakTimestamp'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".requestToSpeakTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_member'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".member", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_channel'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_deaf'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".deaf", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_mute'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    return [voicestate + ".mute", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['voicestate_setMute'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var mute = Blockly.JavaScript.valueToCode(block, 'MUTE', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".setMute(" + mute + ", " + reason + ");\n";
};
Blockly.JavaScript['voicestate_setDeaf'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var deaf = Blockly.JavaScript.valueToCode(block, 'DEAF', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".setDeaf(" + deaf + ", " + reason + ");\n";
};
Blockly.JavaScript['voicestate_disconnect'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".disconnect(" + reason + ");\n";
};
Blockly.JavaScript['voicestate_setChannel'] = function(block) {
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".setChannel(" + channel + ", " + reason + ");\n";
};
Blockly.JavaScript['voicestate_setRequestToSpeak'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var request = Blockly.JavaScript.valueToCode(block, 'REQUEST', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".setRequestToSpeak(" + request + ")" + finalstring;
};
Blockly.JavaScript['voicestate_setSuppressed'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var voicestate = Blockly.JavaScript.valueToCode(block, 'VOICESTATE', Blockly.JavaScript.ORDER_NONE) || "null";
    var suppressed = Blockly.JavaScript.valueToCode(block, 'SUPPRESSED', Blockly.JavaScript.ORDER_NONE) || "";
    return voicestate + ".setSuppressed(" + suppressed + ")" + finalstring;
};
Blockly.JavaScript['webhook_client'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_name'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_token'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".token", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_avatar'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".avatar", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_id'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_type'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".type", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_guildId'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".guildId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_channelId'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_owner'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".owner", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_sourceGuild'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".sourceGuild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_sourceChannel'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".sourceChannel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_createdTimestamp'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".createdTimestamp", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_createdAt'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".createdAt", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_url'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return [webhook + ".url", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['webhook_send'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".send(" + options + ")" + finalstring;
};
Blockly.JavaScript['webhook_sendSlackMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".sendSlackMessage(" + body + ")" + finalstring;
};
Blockly.JavaScript['webhook_edit'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".edit(" + options + ", " + reason + ")" + finalstring;
};
Blockly.JavaScript['webhook_fetchMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var cacheOrOptions = Blockly.JavaScript.valueToCode(block, 'CACHEOROPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".fetchMessage(" + message + ", " + cacheOrOptions + ")" + finalstring;
};
Blockly.JavaScript['webhook_editMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".editMessage(" + message + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['webhook_delete'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var reason = Blockly.JavaScript.valueToCode(block, 'REASON', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".delete(" + reason + ")" + finalstring;
};
Blockly.JavaScript['webhook_deleteMessage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var message = Blockly.JavaScript.valueToCode(block, 'MESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var threadId = Blockly.JavaScript.valueToCode(block, 'THREADID', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".deleteMessage(" + message + ", " + threadId + ")" + finalstring;
};
Blockly.JavaScript['webhook_avatarURL'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return webhook + ".avatarURL(" + options + ");\n";
};
Blockly.JavaScript['webhook_isChannelFollower'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return webhook + ".isChannelFollower();\n";
};
Blockly.JavaScript['webhook_isIncoming'] = function(block) {
    var webhook = Blockly.JavaScript.valueToCode(block, 'WEBHOOK', Blockly.JavaScript.ORDER_NONE) || "null";
    return webhook + ".isIncoming();\n";
};
Blockly.JavaScript['welcomechannel_guild'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomechannel_description'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomechannel_channelId'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomechannel_channel'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".channel", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomechannel_emoji'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".emoji", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomechannel_client'] = function(block) {
    var welcomechannel = Blockly.JavaScript.valueToCode(block, 'WELCOMECHANNEL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomechannel + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomescreen_guild'] = function(block) {
    var welcomescreen = Blockly.JavaScript.valueToCode(block, 'WELCOMESCREEN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomescreen + ".guild", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomescreen_description'] = function(block) {
    var welcomescreen = Blockly.JavaScript.valueToCode(block, 'WELCOMESCREEN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomescreen + ".description", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomescreen_welcomeChannels'] = function(block) {
    var welcomescreen = Blockly.JavaScript.valueToCode(block, 'WELCOMESCREEN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomescreen + ".welcomeChannels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomescreen_enabled'] = function(block) {
    var welcomescreen = Blockly.JavaScript.valueToCode(block, 'WELCOMESCREEN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomescreen + ".enabled", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['welcomescreen_client'] = function(block) {
    var welcomescreen = Blockly.JavaScript.valueToCode(block, 'WELCOMESCREEN', Blockly.JavaScript.ORDER_NONE) || "null";
    return [welcomescreen + ".client", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_id'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_name'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".name", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_instantInvite'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".instantInvite", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_channels'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".channels", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_members'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".members", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_presenceCount'] = function(block) {
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widget + ".presenceCount", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widget_fetch'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var widget = Blockly.JavaScript.valueToCode(block, 'WIDGET', Blockly.JavaScript.ORDER_NONE) || "null";
    return widget + ".fetch()" + finalstring;
};
Blockly.JavaScript['widgetmember_id'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".id", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_username'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".username", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_discriminator'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".discriminator", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_avatar'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".avatar", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_status'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".status", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_deaf'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".deaf", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_mute'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".mute", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_selfDeaf'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".selfDeaf", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_selfMute'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".selfMute", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_suppress'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".suppress", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_channelId'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".channelId", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_avatarURL'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".avatarURL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['widgetmember_activity'] = function(block) {
    var widgetmember = Blockly.JavaScript.valueToCode(block, 'WIDGETMEMBER', Blockly.JavaScript.ORDER_NONE) || "null";
    return [widgetmember + ".activity", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activityflags_bitfield'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activityflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activityflags_FLAGS'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [activityflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['activityflags_any'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['activityflags_equals'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['activityflags_has'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['activityflags_missing'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['activityflags_freeze'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return activityflags + ".freeze();\n";
};
Blockly.JavaScript['activityflags_add'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['activityflags_remove'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['activityflags_serialize'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['activityflags_toArray'] = function(block) {
    var activityflags = Blockly.JavaScript.valueToCode(block, 'ACTIVITYFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return activityflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['applicationflags_bitfield'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationflags_FLAGS'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [applicationflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['applicationflags_any'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['applicationflags_equals'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['applicationflags_has'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['applicationflags_missing'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['applicationflags_freeze'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return applicationflags + ".freeze();\n";
};
Blockly.JavaScript['applicationflags_add'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['applicationflags_remove'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['applicationflags_serialize'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['applicationflags_toArray'] = function(block) {
    var applicationflags = Blockly.JavaScript.valueToCode(block, 'APPLICATIONFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return applicationflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['bitfield_bitfield'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [bitfield + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['bitfield_FLAGS'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    return [bitfield + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['bitfield_any'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".any(" + bit + ");\n";
};
Blockly.JavaScript['bitfield_equals'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['bitfield_has'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".has(" + bit + ");\n";
};
Blockly.JavaScript['bitfield_missing'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['bitfield_freeze'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    return bitfield + ".freeze();\n";
};
Blockly.JavaScript['bitfield_add'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".add(" + bits + ");\n";
};
Blockly.JavaScript['bitfield_remove'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['bitfield_serialize'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['bitfield_toArray'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['bitfield_resolve'] = function(block) {
    var bitfield = Blockly.JavaScript.valueToCode(block, 'BITFIELD', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return bitfield + ".resolve(" + bit + ");\n";
};
Blockly.JavaScript['dataresolver_resolveCode'] = function(block) {
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var regex = Blockly.JavaScript.valueToCode(block, 'REGEX', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveCode(" + data + ", " + regex + ");\n";
};
Blockly.JavaScript['dataresolver_resolveInviteCode'] = function(block) {
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveInviteCode(" + data + ");\n";
};
Blockly.JavaScript['dataresolver_resolveGuildTemplateCode'] = function(block) {
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveGuildTemplateCode(" + data + ");\n";
};
Blockly.JavaScript['dataresolver_resolveImage'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var image = Blockly.JavaScript.valueToCode(block, 'IMAGE', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveImage(" + image + ")" + finalstring;
};
Blockly.JavaScript['dataresolver_resolveBase64'] = function(block) {
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveBase64(" + data + ");\n";
};
Blockly.JavaScript['dataresolver_resolveFile'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var resource = Blockly.JavaScript.valueToCode(block, 'RESOURCE', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveFile(" + resource + ")" + finalstring;
};
Blockly.JavaScript['dataresolver_resolveFileAsBuffer'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var dataresolver = Blockly.JavaScript.valueToCode(block, 'DATARESOLVER', Blockly.JavaScript.ORDER_NONE) || "null";
    var resource = Blockly.JavaScript.valueToCode(block, 'RESOURCE', Blockly.JavaScript.ORDER_NONE) || "";
    return dataresolver + ".resolveFileAsBuffer(" + resource + ")" + finalstring;
};
Blockly.JavaScript['formatters_TimestampStyles'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [formatters + ".TimestampStyles", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['formatters_blockQuote'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".blockQuote(" + content + ");\n";
};
Blockly.JavaScript['formatters_bold'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".bold(" + content + ");\n";
};
Blockly.JavaScript['formatters_channelMention'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var channelId = Blockly.JavaScript.valueToCode(block, 'CHANNELID', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".channelMention(" + channelId + ");\n";
};
Blockly.JavaScript['formatters_codeBlock'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var contentOrLanguage = Blockly.JavaScript.valueToCode(block, 'CONTENTORLANGUAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".codeBlock(" + contentOrLanguage + ", " + content + ");\n";
};
Blockly.JavaScript['formatters_formatEmoji'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var emojiId = Blockly.JavaScript.valueToCode(block, 'EMOJIID', Blockly.JavaScript.ORDER_NONE) || "";
    var animated = Blockly.JavaScript.valueToCode(block, 'ANIMATED', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".formatEmoji(" + emojiId + ", " + animated + ");\n";
};
Blockly.JavaScript['formatters_hideLinkEmbed'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".hideLinkEmbed(" + content + ");\n";
};
Blockly.JavaScript['formatters_hyperlink'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    var url = Blockly.JavaScript.valueToCode(block, 'URL', Blockly.JavaScript.ORDER_NONE) || "";
    var title = Blockly.JavaScript.valueToCode(block, 'TITLE', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".hyperlink(" + content + ", " + url + ", " + title + ");\n";
};
Blockly.JavaScript['formatters_inlineCode'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".inlineCode(" + content + ");\n";
};
Blockly.JavaScript['formatters_italic'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".italic(" + content + ");\n";
};
Blockly.JavaScript['formatters_memberNicknameMention'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var memberId = Blockly.JavaScript.valueToCode(block, 'MEMBERID', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".memberNicknameMention(" + memberId + ");\n";
};
Blockly.JavaScript['formatters_quote'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".quote(" + content + ");\n";
};
Blockly.JavaScript['formatters_roleMention'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var roleId = Blockly.JavaScript.valueToCode(block, 'ROLEID', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".roleMention(" + roleId + ");\n";
};
Blockly.JavaScript['formatters_spoiler'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".spoiler(" + content + ");\n";
};
Blockly.JavaScript['formatters_strikethrough'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".strikethrough(" + content + ");\n";
};
Blockly.JavaScript['formatters_time'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var date = Blockly.JavaScript.valueToCode(block, 'DATE', Blockly.JavaScript.ORDER_NONE) || "";
    var style = Blockly.JavaScript.valueToCode(block, 'STYLE', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".time(" + date + ", " + style + ");\n";
};
Blockly.JavaScript['formatters_underscore'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var content = Blockly.JavaScript.valueToCode(block, 'CONTENT', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".underscore(" + content + ");\n";
};
Blockly.JavaScript['formatters_userMention'] = function(block) {
    var formatters = Blockly.JavaScript.valueToCode(block, 'FORMATTERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var userId = Blockly.JavaScript.valueToCode(block, 'USERID', Blockly.JavaScript.ORDER_NONE) || "";
    return formatters + ".userMention(" + userId + ");\n";
};
Blockly.JavaScript['intents_bitfield'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [intents + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['intents_FLAGS'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [intents + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['intents_any'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".any(" + bit + ");\n";
};
Blockly.JavaScript['intents_equals'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['intents_has'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".has(" + bit + ");\n";
};
Blockly.JavaScript['intents_missing'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['intents_freeze'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    return intents + ".freeze();\n";
};
Blockly.JavaScript['intents_add'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".add(" + bits + ");\n";
};
Blockly.JavaScript['intents_remove'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['intents_serialize'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['intents_toArray'] = function(block) {
    var intents = Blockly.JavaScript.valueToCode(block, 'INTENTS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return intents + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['limitedcollection_maxSize'] = function(block) {
    var limitedcollection = Blockly.JavaScript.valueToCode(block, 'LIMITEDCOLLECTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [limitedcollection + ".maxSize", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['limitedcollection_keepOverLimit'] = function(block) {
    var limitedcollection = Blockly.JavaScript.valueToCode(block, 'LIMITEDCOLLECTION', Blockly.JavaScript.ORDER_NONE) || "null";
    return [limitedcollection + ".keepOverLimit", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageflags_bitfield'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageflags_FLAGS'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [messageflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['messageflags_any'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['messageflags_equals'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['messageflags_has'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['messageflags_missing'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['messageflags_freeze'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return messageflags + ".freeze();\n";
};
Blockly.JavaScript['messageflags_add'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['messageflags_remove'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['messageflags_serialize'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['messageflags_toArray'] = function(block) {
    var messageflags = Blockly.JavaScript.valueToCode(block, 'MESSAGEFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return messageflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['options_defaultMakeCacheSettings'] = function(block) {
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [options + ".defaultMakeCacheSettings", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['options_defaultSweeperSettings'] = function(block) {
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [options + ".defaultSweeperSettings", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['options_createDefault'] = function(block) {
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return options + ".createDefault();\n";
};
Blockly.JavaScript['options_cacheWithLimits'] = function(block) {
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var settings = Blockly.JavaScript.valueToCode(block, 'SETTINGS', Blockly.JavaScript.ORDER_NONE) || "";
    return options + ".cacheWithLimits(" + settings + ");\n";
};
Blockly.JavaScript['options_cacheEverything'] = function(block) {
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return options + ".cacheEverything();\n";
};
Blockly.JavaScript['permissions_bitfield'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissions + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissions_FLAGS'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissions + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissions_ALL'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissions + ".ALL", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissions_DEFAULT'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissions + ".DEFAULT", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissions_STAGE_MODERATOR'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [permissions + ".STAGE_MODERATOR", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['permissions_missing'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".missing(" + bits + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['permissions_any'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var permission = Blockly.JavaScript.valueToCode(block, 'PERMISSION', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".any(" + permission + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['permissions_has'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var permission = Blockly.JavaScript.valueToCode(block, 'PERMISSION', Blockly.JavaScript.ORDER_NONE) || "";
    var checkAdmin = Blockly.JavaScript.valueToCode(block, 'CHECKADMIN', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".has(" + permission + ", " + checkAdmin + ");\n";
};
Blockly.JavaScript['permissions_toArray'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return permissions + ".toArray();\n";
};
Blockly.JavaScript['permissions_equals'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['permissions_freeze'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    return permissions + ".freeze();\n";
};
Blockly.JavaScript['permissions_add'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".add(" + bits + ");\n";
};
Blockly.JavaScript['permissions_remove'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['permissions_serialize'] = function(block) {
    var permissions = Blockly.JavaScript.valueToCode(block, 'PERMISSIONS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return permissions + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['snowflakeutil_EPOCH'] = function(block) {
    var snowflakeutil = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKEUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    return [snowflakeutil + ".EPOCH", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['snowflakeutil_generate'] = function(block) {
    var snowflakeutil = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKEUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var timestamp = Blockly.JavaScript.valueToCode(block, 'TIMESTAMP', Blockly.JavaScript.ORDER_NONE) || "";
    return snowflakeutil + ".generate(" + timestamp + ");\n";
};
Blockly.JavaScript['snowflakeutil_deconstruct'] = function(block) {
    var snowflakeutil = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKEUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var snowflake = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKE', Blockly.JavaScript.ORDER_NONE) || "";
    return snowflakeutil + ".deconstruct(" + snowflake + ");\n";
};
Blockly.JavaScript['snowflakeutil_timestampFrom'] = function(block) {
    var snowflakeutil = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKEUTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var snowflake = Blockly.JavaScript.valueToCode(block, 'SNOWFLAKE', Blockly.JavaScript.ORDER_NONE) || "";
    return snowflakeutil + ".timestampFrom(" + snowflake + ");\n";
};
Blockly.JavaScript['sweepers_options'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sweepers + ".options", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sweepers_intervals'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [sweepers + ".intervals", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['sweepers_sweepApplicationCommands'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepApplicationCommands(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepBans'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepBans(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepEmojis'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepEmojis(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepInvites'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepInvites(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepGuildMembers'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepGuildMembers(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepMessages'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepMessages(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepPresences'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepPresences(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepReactions'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepReactions(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepStageInstances'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepStageInstances(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepThreadMembers'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepThreadMembers(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepThreads'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepThreads(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepUsers'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepUsers(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_sweepVoiceStates'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var filter = Blockly.JavaScript.valueToCode(block, 'FILTER', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".sweepVoiceStates(" + filter + ");\n";
};
Blockly.JavaScript['sweepers_destroy'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    return sweepers + ".destroy();\n";
};
Blockly.JavaScript['sweepers_filterByLifetime'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".filterByLifetime(" + options + ");\n";
};
Blockly.JavaScript['sweepers_archivedThreadSweepFilter'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var lifetime = Blockly.JavaScript.valueToCode(block, 'LIFETIME', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".archivedThreadSweepFilter(" + lifetime + ");\n";
};
Blockly.JavaScript['sweepers_expiredInviteSweepFilter'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var lifetime = Blockly.JavaScript.valueToCode(block, 'LIFETIME', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".expiredInviteSweepFilter(" + lifetime + ");\n";
};
Blockly.JavaScript['sweepers_outdatedMessageSweepFilter'] = function(block) {
    var sweepers = Blockly.JavaScript.valueToCode(block, 'SWEEPERS', Blockly.JavaScript.ORDER_NONE) || "null";
    var lifetime = Blockly.JavaScript.valueToCode(block, 'LIFETIME', Blockly.JavaScript.ORDER_NONE) || "";
    return sweepers + ".outdatedMessageSweepFilter(" + lifetime + ");\n";
};
Blockly.JavaScript['systemchannelflags_bitfield'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [systemchannelflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['systemchannelflags_FLAGS'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [systemchannelflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['systemchannelflags_any'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['systemchannelflags_equals'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['systemchannelflags_has'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['systemchannelflags_missing'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['systemchannelflags_freeze'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return systemchannelflags + ".freeze();\n";
};
Blockly.JavaScript['systemchannelflags_add'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['systemchannelflags_remove'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['systemchannelflags_serialize'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['systemchannelflags_toArray'] = function(block) {
    var systemchannelflags = Blockly.JavaScript.valueToCode(block, 'SYSTEMCHANNELFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return systemchannelflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['threadmemberflags_bitfield'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmemberflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmemberflags_FLAGS'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [threadmemberflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['threadmemberflags_any'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['threadmemberflags_equals'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['threadmemberflags_has'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['threadmemberflags_missing'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['threadmemberflags_freeze'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return threadmemberflags + ".freeze();\n";
};
Blockly.JavaScript['threadmemberflags_add'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['threadmemberflags_remove'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['threadmemberflags_serialize'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['threadmemberflags_toArray'] = function(block) {
    var threadmemberflags = Blockly.JavaScript.valueToCode(block, 'THREADMEMBERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return threadmemberflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['userflags_bitfield'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [userflags + ".bitfield", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['userflags_FLAGS'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return [userflags + ".FLAGS", Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['userflags_any'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".any(" + bit + ");\n";
};
Blockly.JavaScript['userflags_equals'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".equals(" + bit + ");\n";
};
Blockly.JavaScript['userflags_has'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bit = Blockly.JavaScript.valueToCode(block, 'BIT', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".has(" + bit + ");\n";
};
Blockly.JavaScript['userflags_missing'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".missing(" + bits + ", " + hasParams + ");\n";
};
Blockly.JavaScript['userflags_freeze'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    return userflags + ".freeze();\n";
};
Blockly.JavaScript['userflags_add'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".add(" + bits + ");\n";
};
Blockly.JavaScript['userflags_remove'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var bits = Blockly.JavaScript.valueToCode(block, 'BITS', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".remove(" + bits + ");\n";
};
Blockly.JavaScript['userflags_serialize'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".serialize(" + hasParams + ");\n";
};
Blockly.JavaScript['userflags_toArray'] = function(block) {
    var userflags = Blockly.JavaScript.valueToCode(block, 'USERFLAGS', Blockly.JavaScript.ORDER_NONE) || "null";
    var hasParams = Blockly.JavaScript.valueToCode(block, 'HASPARAMS', Blockly.JavaScript.ORDER_NONE) || "";
    return userflags + ".toArray(" + hasParams + ");\n";
};
Blockly.JavaScript['util_flatten'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var obj = Blockly.JavaScript.valueToCode(block, 'OBJ', Blockly.JavaScript.ORDER_NONE) || "";
    var props = Blockly.JavaScript.valueToCode(block, 'PROPS', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".flatten(" + obj + ", " + props + ");\n";
};
Blockly.JavaScript['util_splitMessage'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".splitMessage(" + text + ", " + options + ");\n";
};
Blockly.JavaScript['util_escapeMarkdown'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeMarkdown(" + text + ", " + options + ");\n";
};
Blockly.JavaScript['util_escapeCodeBlock'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeCodeBlock(" + text + ");\n";
};
Blockly.JavaScript['util_escapeInlineCode'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeInlineCode(" + text + ");\n";
};
Blockly.JavaScript['util_escapeItalic'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeItalic(" + text + ");\n";
};
Blockly.JavaScript['util_escapeBold'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeBold(" + text + ");\n";
};
Blockly.JavaScript['util_escapeUnderline'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeUnderline(" + text + ");\n";
};
Blockly.JavaScript['util_escapeStrikethrough'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeStrikethrough(" + text + ");\n";
};
Blockly.JavaScript['util_escapeSpoiler'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".escapeSpoiler(" + text + ");\n";
};
Blockly.JavaScript['util_fetchRecommendedShards'] = function(block) {
    var finalstring = ";\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var token = Blockly.JavaScript.valueToCode(block, 'TOKEN', Blockly.JavaScript.ORDER_NONE) || "";
    var options = Blockly.JavaScript.valueToCode(block, 'OPTIONS', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".fetchRecommendedShards(" + token + ", " + options + ")" + finalstring;
};
Blockly.JavaScript['util_verifyString'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var data = Blockly.JavaScript.valueToCode(block, 'DATA', Blockly.JavaScript.ORDER_NONE) || "";
    var error = Blockly.JavaScript.valueToCode(block, 'ERROR', Blockly.JavaScript.ORDER_NONE) || "";
    var errorMessage = Blockly.JavaScript.valueToCode(block, 'ERRORMESSAGE', Blockly.JavaScript.ORDER_NONE) || "";
    var allowEmpty = Blockly.JavaScript.valueToCode(block, 'ALLOWEMPTY', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".verifyString(" + data + ", " + error + ", " + errorMessage + ", " + allowEmpty + ");\n";
};
Blockly.JavaScript['util_resolveColor'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var color = Blockly.JavaScript.valueToCode(block, 'COLOR', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".resolveColor(" + color + ");\n";
};
Blockly.JavaScript['util_discordSort'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var collection = Blockly.JavaScript.valueToCode(block, 'COLLECTION', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".discordSort(" + collection + ");\n";
};
Blockly.JavaScript['util_cleanContent'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var str = Blockly.JavaScript.valueToCode(block, 'STR', Blockly.JavaScript.ORDER_NONE) || "";
    var channel = Blockly.JavaScript.valueToCode(block, 'CHANNEL', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".cleanContent(" + str + ", " + channel + ");\n";
};
Blockly.JavaScript['util_cleanCodeBlockContent'] = function(block) {
    var util = Blockly.JavaScript.valueToCode(block, 'UTIL', Blockly.JavaScript.ORDER_NONE) || "null";
    var text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_NONE) || "";
    return util + ".cleanCodeBlockContent(" + text + ");\n";
};