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
          ["ready", "ready"],
          ["warn", "warn"],
          ["debug", "debug"],
          ["error", "error"],
          ["message", "message"],
          ["messageDelete", "messageDelete"],
          ["messageDeleteBulk", "messageDeleteBulk"],
          ["messageReactionAdd", "messageReactionAdd"],
          ["messageReactionRemove", "messageReactionRemove"],
          ["messageReactionRemoveAll", "messageReactionRemoveAll"],
          ["messageReactionRemoveEmoji", "messageReactionRemoveEmoji"],
          ["messageUpdate", "messageUpdate"],
          ["presenceUpdate", "presenceUpdate"],
          ["channelCreate", "channelCreate"],
          ["channelDelete", "channelDelete"],
          ["channelPinsUpdate", "channelPinsUpdate"],
          ["channelUpdate", "channelUpdate"],
          ["emojiCreate", "emojiCreate"],
          ["emojiDelete", "emojiDelete"],
          ["emojiUpdate", "emojiUpdate"],
          ["userUpdate", "userUpdate"],
          ["guildBanAdd", "guildBanAdd"],
          ["guildBanRemove", "guildBanRemove"],
          ["guildCreate", "guildCreate"],
          ["guildDelete", "guildDelete"],
          ["guildIntegrationsUpdate", "guildIntegrationsUpdate"],
          ["guildMemberAdd", "guildMemberAdd"],
          ["guildMemberAvailable", "guildMemberAvailable"],
          ["guildMemberRemove", "guildMemberRemove"],
          ["guildMembersChunk", "guildMembersChunk"],
          ["guildMemberSpeaking", "guildMemberSpeaking"],
          ["guildMemberUpdate", "guildMemberUpdate"],
          ["guildUnavailable", "guildUnavailable"],
          ["guildUpdate", "guildUpdate"],
          ["invalidated", "invalidated"],
          ["inviteCreate", "inviteCreate"],
          ["inviteDelete", "inviteDelete"],
          ["rateLimit", "rateLimit"],
          ["roleCreate", "roleCreate"],
          ["roleDelete", "roleDelete"],
          ["roleUpdate", "roleUpdate"],
          ["shardDisconnect", "shardDisconnect"],
          ["shardError", "shardError"],
          ["shardReady", "shardReady"],
          ["shardReconnecting", "shardReconnecting"],
          ["shardResume", "shardResume"],
          ["typingStart", "typingStart"],
          ["voiceStateUpdate", "voiceStateUpdate"],
          ["webhookUpdate", "webhookUpdate"]
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
        case "channelDelete":
        case "webhookUpdate":
          this.addOutputs(["channel"]);
          break;
        case "channelPinsUpdate":
          this.addOutputs(["channel", "time"]);
          break;
        case "channelUpdate":
          this.addOutputs(["oldChannel", "newChannel"]);
          break;
        case "warn":
        case "debug":
          this.addOutputs(["info"]);
          break;
        case "emojiCreate":
        case "emojiDelete":
          this.addOutputs(["emoji"]);
          break;
        case "emojiUpdate":
          this.addOutputs(["oldEmoji", "newEmoji"]);
          break;
        case "error":
          this.addOutputs(["error"]);
          break;
        case "guildBanAdd":
        case "guildBanRemove":
          this.addOutputs(["guild", "user"]);
          break;
        case "guildCreate":
        case "guildDelete":
        case "guildUnavailable":
        case "guildIntegrationsUpdate":
          this.addOutputs(["guild"]);
          break;
        case "guildMemberAdd":
        case "guildMemberAvailable":
        case "guildMemberRemove":
          this.addOutputs(["member"]);
          break;
        case "guildMembersChunk":
          this.addOutputs(["members", "guild", "chunk"]);
          break;
        case "guildMemberSpeaking":
          this.addOutputs(["member", "speaking"]);
          break;
        case "guildMemberUpdate":
          this.addOutputs(["oldMember", "newMember"]);
          break;
        case "guildUpdate":
          this.addOutputs(["oldGuild", "newGuild", "invalidated"]);
          break;
        case "inviteCreate":
        case "inviteDelete":
          this.addOutputs(["invite"]);
          break;
        case "message":
        case "messageDelete":
        case "messageReactionRemoveAll":
          this.addOutputs(["message"]);
          break;
        case "messageDeleteBulk":
          this.addOutputs(["messages"]);
          break;
        case "messageReactionAdd":
        case "messageReactionRemove":
          this.addOutputs(["messageReaction"]);
          break;
        case "messageReactionRemoveEmoji":
          this.addOutputs(["reaction"]);
          break;
        case "messageUpdate":
          this.addOutputs(["oldMessage", "newMessage"]);
          break;
        case "presenceUpdate":
          this.addOutputs(["oldPresence", "newPresence"]);
          break;
        case "rateLimit":
          this.addOutputs(["rateLimitData"]);
          break;
        case "roleCreate":
        case "roleDelete":
          this.addOutputs(["role"]);
          break;
        case "roleUpdate":
          this.addOutputs(["oldRole", "newRole"]);
          break;
        case "shardDisconnect":
          this.addOutputs(["event", "id"]);
          break;
        case "shardError":
          this.addOutputs(["error", "shardID"]);
          break;
        case "shardReady":
          this.addOutputs(["id", "unavailableGuilds"]);
          break;
        case "shardReconnecting":
          this.addOutputs(["id"]);
          break;
        case "shardResume":
          this.addOutputs(["id", "replayedEvents"]);
          break;
        case "typingStart":
          this.addOutputs(["channel", "user"]);
          break;
        case "userUpdate":
          this.addOutputs(["oldUser", "newUser"]);
          break;
        case "voiceStateUpdate":
          this.addOutputs(["oldState", "newState"]);
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
