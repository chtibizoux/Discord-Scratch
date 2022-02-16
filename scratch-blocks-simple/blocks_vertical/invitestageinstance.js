'use strict';

goog.provide('Blockly.Blocks.invitestageinstance');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['invitestageinstance_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_participantcount'] = {
  init: function() {
    this.jsonInit({
      "message0": "participant count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_speakercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "speaker count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['invitestageinstance_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITESTAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.invitestageinstance,
      "extensions": ["colours_invitestageinstance", "output_string"]
    });
  }
};
