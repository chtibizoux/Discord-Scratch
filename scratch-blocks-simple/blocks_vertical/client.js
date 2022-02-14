'use strict';

goog.provide('Blockly.Blocks.client');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['client_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("CLIENT")
        .appendField(new Blockly.FieldDropdown([["channelCreate", "channelCreate"], ["channelDelete", "channelDelete"], ["guildBanAdd", "guildBanAdd"], ["guildBanRemove", "guildBanRemove"], ["guildUnavailable", "guildUnavailable"], ["guildDelete", "guildDelete"], ["emojiCreate", "emojiCreate"], ["emojiDelete", "emojiDelete"], ["emojiUpdate", "emojiUpdate"], ["guildIntegrationsUpdate", "guildIntegrationsUpdate"], ["guildMemberRemove", "guildMemberRemove"], ["guildMemberUpdate", "guildMemberUpdate"], ["guildMemberAvailable", "guildMemberAvailable"], ["roleCreate", "roleCreate"], ["roleDelete", "roleDelete"], ["roleUpdate", "roleUpdate"], ["guildScheduledEventCreate", "guildScheduledEventCreate"], ["guildScheduledEventDelete", "guildScheduledEventDelete"], ["guildScheduledEventUpdate", "guildScheduledEventUpdate"], ["guildScheduledEventUserAdd", "guildScheduledEventUserAdd"], ["guildScheduledEventUserRemove", "guildScheduledEventUserRemove"], ["stickerCreate", "stickerCreate"], ["stickerDelete", "stickerDelete"], ["stickerUpdate", "stickerUpdate"], ["guildUpdate", "guildUpdate"], ["interactionCreate", "interactionCreate"], ["inviteCreate", "inviteCreate"], ["inviteDelete", "inviteDelete"], ["messageCreate", "messageCreate"], ["messageDelete", "messageDelete"], ["messageDeleteBulk", "messageDeleteBulk"], ["messageReactionAdd", "messageReactionAdd"], ["messageReactionRemove", "messageReactionRemove"], ["messageReactionRemoveAll", "messageReactionRemoveAll"], ["messageReactionRemoveEmoji", "messageReactionRemoveEmoji"], ["presenceUpdate", "presenceUpdate"], ["stageInstanceCreate", "stageInstanceCreate"], ["stageInstanceDelete", "stageInstanceDelete"], ["stageInstanceUpdate", "stageInstanceUpdate"], ["threadCreate", "threadCreate"], ["threadDelete", "threadDelete"], ["threadListSync", "threadListSync"], ["threadMembersUpdate", "threadMembersUpdate"], ["threadMemberUpdate", "threadMemberUpdate"], ["typingStart", "typingStart"], ["userUpdate", "userUpdate"], ["voiceStateUpdate", "voiceStateUpdate"], ["webhookUpdate", "webhookUpdate"], ["warn", "warn"], ["channelPinsUpdate", "channelPinsUpdate"], ["channelUpdate", "channelUpdate"], ["guildCreate", "guildCreate"], ["guildMemberAdd", "guildMemberAdd"], ["guildMembersChunk", "guildMembersChunk"], ["messageUpdate", "messageUpdate"], ["shardResume", "shardResume"], ["threadUpdate", "threadUpdate"], ["shardReady", "shardReady"], ["shardDisconnect", "shardDisconnect"], ["shardReconnecting", "shardReconnecting"], ["invalidated", "invalidated"], ["ready", "ready"], ["shardError", "shardError"], ["error", "error"], ["debug", "debug"], ["rateLimit", "rateLimit"], ["apiRequest", "apiRequest"], ["apiResponse", "apiResponse"], ["invalidRequestWarning", "invalidRequestWarning"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.client.primary);
  },
  addOutputs: function(variables) {
    for (var i = 0; i < variables.length; i++) {
      var input = this.appendValueInput("VARIABLE" + (i + 1));
      this.moveInputBefore("VARIABLE" + (i + 1), i === 0 ? "DO" : "VARIABLE" + i);
      var block = new Blockly.BlockSvg(this.workspace, "event_variables");
      block.initSvg();
      block.render(true);
      block.contextMenu = false;
      block.setFieldValue(variables[i], "VARIABLE");
      input.connection.connect(block.outputConnection);
    }
  },
  onchange: function(e) {
    if (e.blockId === this.id) {
      var i = 1;
      while (this.getInput('VARIABLE' + i)) {
        if (this.getInputTargetBlock("VARIABLE" + i)) {
          this.getInputTargetBlock("VARIABLE" + i).dispose();
        }
        this.removeInput('VARIABLE' + i);
        i++;
      }

      var action = this.getFieldValue("ACTION");
      switch (action) {
        case "channelCreate":
          this.addOutputs(["channel"]);
          break;
        case "channelDelete":
          this.addOutputs(["channel"]);
          break;
        case "guildBanAdd":
          this.addOutputs(["ban"]);
          break;
        case "guildBanRemove":
          this.addOutputs(["ban"]);
          break;
        case "guildUnavailable":
          this.addOutputs(["guild"]);
          break;
        case "guildDelete":
          this.addOutputs(["guild"]);
          break;
        case "emojiCreate":
          this.addOutputs(["emoji"]);
          break;
        case "emojiDelete":
          this.addOutputs(["emoji"]);
          break;
        case "emojiUpdate":
          this.addOutputs(["oldEmoji","newEmoji"]);
          break;
        case "guildIntegrationsUpdate":
          this.addOutputs(["guild"]);
          break;
        case "guildMemberRemove":
          this.addOutputs(["member"]);
          break;
        case "guildMemberUpdate":
          this.addOutputs(["oldMember","newMember"]);
          break;
        case "guildMemberAvailable":
          this.addOutputs(["member"]);
          break;
        case "roleCreate":
          this.addOutputs(["role"]);
          break;
        case "roleDelete":
          this.addOutputs(["role"]);
          break;
        case "roleUpdate":
          this.addOutputs(["oldRole","newRole"]);
          break;
        case "guildScheduledEventCreate":
          this.addOutputs(["guildScheduledEvent"]);
          break;
        case "guildScheduledEventDelete":
          this.addOutputs(["guildScheduledEvent"]);
          break;
        case "guildScheduledEventUpdate":
          this.addOutputs(["oldGuildScheduledEvent","newGuildScheduledEvent"]);
          break;
        case "guildScheduledEventUserAdd":
          this.addOutputs(["guildScheduledEvent","user"]);
          break;
        case "guildScheduledEventUserRemove":
          this.addOutputs(["guildScheduledEvent","user"]);
          break;
        case "stickerCreate":
          this.addOutputs(["sticker"]);
          break;
        case "stickerDelete":
          this.addOutputs(["sticker"]);
          break;
        case "stickerUpdate":
          this.addOutputs(["oldSticker","newSticker"]);
          break;
        case "guildUpdate":
          this.addOutputs(["oldGuild","newGuild"]);
          break;
        case "interactionCreate":
          this.addOutputs(["interaction"]);
          break;
        case "inviteCreate":
          this.addOutputs(["invite"]);
          break;
        case "inviteDelete":
          this.addOutputs(["invite"]);
          break;
        case "messageCreate":
          this.addOutputs(["message"]);
          break;
        case "messageDelete":
          this.addOutputs(["message"]);
          break;
        case "messageDeleteBulk":
          this.addOutputs(["messages"]);
          break;
        case "messageReactionAdd":
          this.addOutputs(["messageReaction","user"]);
          break;
        case "messageReactionRemove":
          this.addOutputs(["messageReaction","user"]);
          break;
        case "messageReactionRemoveAll":
          this.addOutputs(["message","reactions"]);
          break;
        case "messageReactionRemoveEmoji":
          this.addOutputs(["reaction"]);
          break;
        case "presenceUpdate":
          this.addOutputs(["oldPresence","newPresence"]);
          break;
        case "stageInstanceCreate":
          this.addOutputs(["stageInstance"]);
          break;
        case "stageInstanceDelete":
          this.addOutputs(["stageInstance"]);
          break;
        case "stageInstanceUpdate":
          this.addOutputs(["oldStageInstance","newStageInstance"]);
          break;
        case "threadCreate":
          this.addOutputs(["thread"]);
          break;
        case "threadDelete":
          this.addOutputs(["thread"]);
          break;
        case "threadListSync":
          this.addOutputs(["threads"]);
          break;
        case "threadMembersUpdate":
          this.addOutputs(["oldMembers","newMembers"]);
          break;
        case "threadMemberUpdate":
          this.addOutputs(["oldMember","newMember"]);
          break;
        case "typingStart":
          this.addOutputs(["typing"]);
          break;
        case "userUpdate":
          this.addOutputs(["oldUser","newUser"]);
          break;
        case "voiceStateUpdate":
          this.addOutputs(["oldState","newState"]);
          break;
        case "webhookUpdate":
          this.addOutputs(["channel"]);
          break;
        case "warn":
          this.addOutputs(["info"]);
          break;
        case "channelPinsUpdate":
          this.addOutputs(["channel","time"]);
          break;
        case "channelUpdate":
          this.addOutputs(["oldChannel","newChannel"]);
          break;
        case "guildCreate":
          this.addOutputs(["guild"]);
          break;
        case "guildMemberAdd":
          this.addOutputs(["member"]);
          break;
        case "guildMembersChunk":
          this.addOutputs(["members","guild","chunk"]);
          break;
        case "messageUpdate":
          this.addOutputs(["oldMessage","newMessage"]);
          break;
        case "shardResume":
          this.addOutputs(["id","replayedEvents"]);
          break;
        case "threadUpdate":
          this.addOutputs(["oldThread","newThread"]);
          break;
        case "shardReady":
          this.addOutputs(["id","unavailableGuilds"]);
          break;
        case "shardDisconnect":
          this.addOutputs(["event","id"]);
          break;
        case "shardReconnecting":
          this.addOutputs(["id"]);
          break;
        case "ready":
          this.addOutputs(["client"]);
          break;
        case "shardError":
          this.addOutputs(["error","shardId"]);
          break;
        case "error":
          this.addOutputs(["error"]);
          break;
        case "debug":
          this.addOutputs(["info"]);
          break;
        case "rateLimit":
          this.addOutputs(["rateLimitData"]);
          break;
        case "apiRequest":
          this.addOutputs(["request"]);
          break;
        case "apiResponse":
          this.addOutputs(["request","response"]);
          break;
        case "invalidRequestWarning":
          this.addOutputs(["invalidRequestWarningData"]);
          break;
      }
      this.render(true);
    }
  }
};
Blockly.Blocks['client_ws'] = {
  init: function() {
    this.jsonInit({
      "message0": "ws of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_voice'] = {
  init: function() {
    this.jsonInit({
      "message0": "voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_shard'] = {
  init: function() {
    this.jsonInit({
      "message0": "shard of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_users'] = {
  init: function() {
    this.jsonInit({
      "message0": "users of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_guilds'] = {
  init: function() {
    this.jsonInit({
      "message0": "guilds of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_channels'] = {
  init: function() {
    this.jsonInit({
      "message0": "channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_sweepers'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweepers of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_application'] = {
  init: function() {
    this.jsonInit({
      "message0": "application of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_readyAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "readyAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_emojis'] = {
  init: function() {
    this.jsonInit({
      "message0": "emojis of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_readyTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "readyTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_uptime'] = {
  init: function() {
    this.jsonInit({
      "message0": "uptime of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        }
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "output_string"]
    });
  }
};
Blockly.Blocks['client_login'] = {
  init: function() {
    this.jsonInit({
      "message0": "login of %1 token: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "TOKEN"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_isReady'] = {
  init: function() {
    this.jsonInit({
      "message0": "isReady of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_destroy'] = {
  init: function() {
    this.jsonInit({
      "message0": "destroy of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchInvite of %1 invite: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "INVITE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchGuildTemplate'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchGuildTemplate of %1 template: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "TEMPLATE"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchWebhook of %1 id: %2 token: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "TOKEN"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchVoiceRegions'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchVoiceRegions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchSticker'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchSticker of %1 id: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchPremiumStickerPacks'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchPremiumStickerPacks of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_sweepMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweepMessages of %1 lifetime: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "LIFETIME"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchGuildPreview'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchGuildPreview of %1 guild: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_fetchGuildWidget'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchGuildWidget of %1 guild: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};
Blockly.Blocks['client_generateInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "generateInvite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.client,
      "extensions": ["colours_client", "shape_statement"]
    });
  }
};