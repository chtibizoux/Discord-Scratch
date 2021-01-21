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

Blockly.Blocks['event_on_menu'] = {
  /**
   * Go to drop-down menu.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ACTION",
          "options": [
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
          ]
        }
      ],
      "colour": Blockly.Colours.event.secondary,
      "colourSecondary": Blockly.Colours.event.secondary,
      "colourTertiary": Blockly.Colours.event.tertiary,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['event_on'] = {
  /**
   * Block for when a sprite is touching an object.
   * @this Blockly.Block
   */
    init: function() {
        this.appendValueInput("ACTION")
            .appendField('on');
        this.appendStatementInput('DO');
        this.setColour(Blockly.Colours.event.primary);
    }
};

Blockly.Blocks['event_variables'] = {
  /**
   * @this Blockly.Block
   */
  variables: [["message", "message"]],
  init: function() {
    this.jsonInit({
      "message0": "on output variable %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VARIABLE",
          "options": this.generateOptions
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "output_string", "event_on_variables_options"]
    });
    // this.appendDummyInput()
    //   .appendField('on output variable')
    //   .appendField(new Blockly.FieldDropdown(this.generateOptions, 'VARIABLE'));
    // this.setOutput(true);
    // this.setColour(Blockly.Colours.event.primary);
  },
  generateOptions: function() {
    if (this.sourceBlock_) {
      return this.sourceBlock_.variables;
    }else{
      return [["message", "message"]];
    }
  }
};
Blockly.Blocks.event.EVENT_ON_VARIABLES_OPTIONS = {
  onchange: function(e) {
    var surroundOn = getSurroundOn(this);
    var variables = [];
    if (surroundOn !== null) {
        var action = Blockly.JavaScript.valueToCode(surroundOn, 'ACTION', Blockly.JavaScript.ORDER_NONE) || "";
        switch (action) {
            case "channelCreate":
            case "channelDelete":
            case "webhookUpdate":
                variables = [["channel", "channel"]];
                break;
            case "channelPinsUpdate":
                variables = [["channel", "channel"], ["time", "time"]];
                break;
            case "channelUpdate":
                variables = [["oldChannel", "oldChannel"], ["newChannel", "newChannel"]];
                break;
            case "warn":
            case "debug":
                variables = [["info", "info"]];
                break;
            case "emojiCreate":
            case "emojiDelete":
                variables = [["emoji", "emoji"]];
                break;
            case "emojiUpdate":
                variables = [["oldEmoji", "oldEmoji"], ["newEmoji", "newEmoji"]];
                break;
            case "error":
                variables = [["error", "error"]];
                break;
            case "guildBanAdd":
            case "guildBanRemove":
                variables = [["guild", "guild"], ["user", "user"]];
                break;
            case "guildCreate":
            case "guildDelete":
            case "guildUnavailable":
            case "guildIntegrationsUpdate":
                variables = [["guild", "guild"]];
                break;
            case "guildMemberAdd":
            case "guildMemberAvailable":
            case "guildMemberRemove":
                variables = [["member", "member"]];
                break;
            case "guildMembersChunk":
                variables = [["members", "members"], ["guild", "guild"], ["chunk", "chunk"], ["index", "index"], ["count", "count"], ["nonce", "nonce"]];
                break;
            case "guildMemberSpeaking":
                variables = [["member", "member"], ["speaking", "speaking"]];
                break;
            case "guildMemberUpdate":
                variables = [["oldMember", "oldMember"], ["newMember", "newMember"]];
                break;
            case "guildUpdate":
                variables = [["oldGuild", "oldGuild"], ["newGuild", "newGuild"], ["invalidated", "invalidated"]];
                break;
            case "inviteCreate":
            case "inviteDelete":
                variables = [["invite", "invite"]];
                break;
            case "message":
            case "messageDelete":
            case "messageReactionRemoveAll":
                variables = [["message", "message"]];
                break;
            case "messageDeleteBulk":
                variables = [["messages", "messages"]];
                break;
            case "messageReactionAdd":
            case "messageReactionRemove":
                variables = [["messageReaction", "messageReaction"]];
                break;
            case "messageReactionRemoveEmoji":
                variabless = [["reaction", "reaction"]];
                break;
            case "messageUpdate":
            case "presenceUpdate":
                variables = [["oldPresence", "oldPresence"], ["newPresence", "newPresence"]];
                break;
            case "rateLimit":
                variables = [["rateLimitInfo", "rateLimitInfo"], ["timeout", "timeout"], ["limit", "limit"], ["method", "method"], ["path", "path"], ["route", "route"]];
                break;
            case "roleCreate":
            case "roleDelete":
                variables = [["role", "role"]];
                break;
            case "roleUpdate":
                variables = [["oldRole", "oldRole"], ["newRole", "newRole"]];
                break;
            case "shardDisconnect":
                variables = [["event", "event"], ["id", "id"]];
                break;
            case "shardError":
                variables = [["error", "error"], ["shardID", "shardID"]];
                break;
            case "shardReady":
                variables = [["id", "id"], ["unavailableGuilds", "unavailableGuilds"]];
                break;
            case "shardReconnecting":
                variables = [["id", "id"]];
                break;
            case "shardResume":
                variables = [["id", "id"], ["replayedEvents", "replayedEvents"]];
                break;
            case "typingStart":
                variables = [["channel", "channel"], ["user", "user"]];
                break;
            case "userUpdate":
                variables = [["oldUser", "oldUser"], ["newUser", "newUser"]];
                break;
            case "voiceStateUpdate":
                variables = [["oldState", "oldState"], ["newState", "newState"]];
                break;
        }
    }
    this.variables = variables;
  }
};
Blockly.Extensions.registerMixin('event_on_variables_options', Blockly.Blocks.event.EVENT_ON_VARIABLES_OPTIONS);

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
