/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.event');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['event_on'] = {
  /**
   * Block for when a sprite is touching an object.
   * @this Blockly.Block
   */
  init: function() {
    this.appendDummyInput()
      .appendField('on')
        .appendField(new Blockly.FieldDropdown([
          ["channelCreate", "channelCreate"],
          ["channelDelete", "channelDelete"],
          ["guildBanAdd", "guildBanAdd"],
          ["guildBanRemove", "guildBanRemove"],
          ["guildUnavailable", "guildUnavailable"],
          ["guildDelete", "guildDelete"],
          ["emojiCreate", "emojiCreate"],
          ["emojiDelete", "emojiDelete"],
          ["emojiUpdate", "emojiUpdate"],
          ["guildIntegrationsUpdate", "guildIntegrationsUpdate"],
          ["guildMemberRemove", "guildMemberRemove"],
          ["guildMemberUpdate", "guildMemberUpdate"],
          ["guildMemberAvailable", "guildMemberAvailable"],
          ["roleCreate", "roleCreate"],
          ["roleDelete", "roleDelete"],
          ["roleUpdate", "roleUpdate"],
          ["guildScheduledEventCreate", "guildScheduledEventCreate"],
          ["guildScheduledEventDelete", "guildScheduledEventDelete"],
          ["guildScheduledEventUpdate", "guildScheduledEventUpdate"],
          ["guildScheduledEventUserAdd", "guildScheduledEventUserAdd"],
          ["guildScheduledEventUserRemove", "guildScheduledEventUserRemove"],
          ["stickerCreate", "stickerCreate"],
          ["stickerDelete", "stickerDelete"],
          ["stickerUpdate", "stickerUpdate"],
          ["guildUpdate", "guildUpdate"],
          ["interactionCreate", "interactionCreate"],
          ["inviteCreate", "inviteCreate"],
          ["inviteDelete", "inviteDelete"],
          ["messageCreate", "messageCreate"],
          ["messageDelete", "messageDelete"],
          ["messageDeleteBulk", "messageDeleteBulk"],
          ["messageReactionAdd", "messageReactionAdd"],
          ["messageReactionRemove", "messageReactionRemove"],
          ["messageReactionRemoveAll", "messageReactionRemoveAll"],
          ["messageReactionRemoveEmoji", "messageReactionRemoveEmoji"],
          ["presenceUpdate", "presenceUpdate"],
          ["stageInstanceCreate", "stageInstanceCreate"],
          ["stageInstanceDelete", "stageInstanceDelete"],
          ["stageInstanceUpdate", "stageInstanceUpdate"],
          ["threadCreate", "threadCreate"],
          ["threadDelete", "threadDelete"],
          ["threadListSync", "threadListSync"],
          ["threadMembersUpdate", "threadMembersUpdate"],
          ["threadMemberUpdate", "threadMemberUpdate"],
          ["typingStart", "typingStart"],
          ["userUpdate", "userUpdate"],
          ["voiceStateUpdate", "voiceStateUpdate"],
          ["webhookUpdate", "webhookUpdate"],
          ["warn", "warn"],
          ["channelPinsUpdate", "channelPinsUpdate"],
          ["channelUpdate", "channelUpdate"],
          ["guildCreate", "guildCreate"],
          ["guildMemberAdd", "guildMemberAdd"],
          ["guildMembersChunk", "guildMembersChunk"],
          ["messageUpdate", "messageUpdate"],
          ["shardResume", "shardResume"],
          ["threadUpdate", "threadUpdate"],
          ["shardReady", "shardReady"],
          ["shardDisconnect", "shardDisconnect"],
          ["shardReconnecting", "shardReconnecting"],
          ["invalidated", "invalidated"],
          ["ready", "ready"],
          ["shardError", "shardError"],
          ["error", "error"],
          ["debug", "debug"],
          ["rateLimit", "rateLimit"],
          ["apiRequest", "apiRequest"],
          ["apiResponse", "apiResponse"],
          ["invalidRequestWarning", "invalidRequestWarning"],
        ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.event.primary);
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
          this.addOutputs(["oldEmoji", "newEmoji"]);
          break;
        case "guildIntegrationsUpdate":
          this.addOutputs(["guild"]);
          break;
        case "guildMemberRemove":
          this.addOutputs(["member"]);
          break;
        case "guildMemberUpdate":
          this.addOutputs(["oldMember", "newMember"]);
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
          this.addOutputs(["oldRole", "newRole"]);
          break;
        case "guildScheduledEventCreate":
          this.addOutputs(["guildScheduledEvent"]);
          break;
        case "guildScheduledEventDelete":
          this.addOutputs(["guildScheduledEvent"]);
          break;
        case "guildScheduledEventUpdate":
          this.addOutputs(["oldGuildScheduledEvent", "newGuildScheduledEvent"]);
          break;
        case "guildScheduledEventUserAdd":
          this.addOutputs(["guildScheduledEvent", "user"]);
          break;
        case "guildScheduledEventUserRemove":
          this.addOutputs(["guildScheduledEvent", "user"]);
          break;
        case "stickerCreate":
          this.addOutputs(["sticker"]);
          break;
        case "stickerDelete":
          this.addOutputs(["sticker"]);
          break;
        case "stickerUpdate":
          this.addOutputs(["oldSticker", "newSticker"]);
          break;
        case "guildUpdate":
          this.addOutputs(["oldGuild", "newGuild"]);
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
          this.addOutputs(["messageReaction", "user"]);
          break;
        case "messageReactionRemove":
          this.addOutputs(["messageReaction", "user"]);
          break;
        case "messageReactionRemoveAll":
          this.addOutputs(["message", "reactions"]);
          break;
        case "messageReactionRemoveEmoji":
          this.addOutputs(["reaction"]);
          break;
        case "presenceUpdate":
          this.addOutputs(["oldPresence", "newPresence"]);
          break;
        case "stageInstanceCreate":
          this.addOutputs(["stageInstance"]);
          break;
        case "stageInstanceDelete":
          this.addOutputs(["stageInstance"]);
          break;
        case "stageInstanceUpdate":
          this.addOutputs(["oldStageInstance", "newStageInstance"]);
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
          this.addOutputs(["oldMembers", "newMembers"]);
          break;
        case "threadMemberUpdate":
          this.addOutputs(["oldMember", "newMember"]);
          break;
        case "typingStart":
          this.addOutputs(["typing"]);
          break;
        case "userUpdate":
          this.addOutputs(["oldUser", "newUser"]);
          break;
        case "voiceStateUpdate":
          this.addOutputs(["oldState", "newState"]);
          break;
        case "webhookUpdate":
          this.addOutputs(["channel"]);
          break;
        case "warn":
          this.addOutputs(["info"]);
          break;
        case "channelPinsUpdate":
          this.addOutputs(["channel", "time"]);
          break;
        case "channelUpdate":
          this.addOutputs(["oldChannel", "newChannel"]);
          break;
        case "guildCreate":
          this.addOutputs(["guild"]);
          break;
        case "guildMemberAdd":
          this.addOutputs(["member"]);
          break;
        case "guildMembersChunk":
          this.addOutputs(["members", "guild", "chunk"]);
          break;
        case "messageUpdate":
          this.addOutputs(["oldMessage", "newMessage"]);
          break;
        case "shardResume":
          this.addOutputs(["id", "replayedEvents"]);
          break;
        case "threadUpdate":
          this.addOutputs(["oldThread", "newThread"]);
          break;
        case "shardReady":
          this.addOutputs(["id", "unavailableGuilds"]);
          break;
        case "shardDisconnect":
          this.addOutputs(["event", "id"]);
          break;
        case "shardReconnecting":
          this.addOutputs(["id"]);
          break;
        case "ready":
          this.addOutputs(["client"]);
          break;
        case "shardError":
          this.addOutputs(["error", "shardId"]);
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
          this.addOutputs(["request", "response"]);
          break;
        case "invalidRequestWarning":
          this.addOutputs(["invalidRequestWarningData"]);
          break;
      }
      this.render(true);
    }
  }
};

Blockly.Blocks['event_variables'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_label_serializable",
          "name": "VARIABLE",
          "text": "null"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_data", "output_string"]
    });
  }
};

Blockly.Blocks['event_whenflagclicked'] = {
  /**
   * Block for when flag clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenflagclicked",
      "message0": Blockly.Msg.EVENT_WHENFLAGCLICKED,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "green-flag.svg",
          "width": 24,
          "height": 24,
          "alt": "flag"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_hat"]
    });
  }
};
Blockly.Blocks['event_trycatch'] = {
  init: function() {
    this.jsonInit({
      "type": "event_trycatch",
      "message0": "try",
      "message1": "%1",
      "message2": "catch %1",
      "message3": "%1",
      "args1": [
        {
          "type": "input_statement",
          "name": "SUBSTACK"
        }
      ],
      "args2": [
        {
          "type": "input_value",
          "name": "ERROR"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "SUBSTACK2"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_statement"]
    });
  }
};
Blockly.Blocks['event_catcherror'] = {
  init: function() {
    this.jsonInit({
      "message0": "error",
      "category": Blockly.Categories.event,
      "extensions": ["colours_data", "output_string"]
    });
  }
};
Blockly.Blocks['event_exit'] = {
  init: function() {
    this.jsonInit({
      "message0": "exit application",
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_statement"]
    });
  }
};
