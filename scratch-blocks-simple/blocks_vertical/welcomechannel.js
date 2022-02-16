'use strict';

goog.provide('Blockly.Blocks.welcomechannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['welcomechannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};

Blockly.Blocks['welcomechannel_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};

Blockly.Blocks['welcomechannel_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};

Blockly.Blocks['welcomechannel_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};

Blockly.Blocks['welcomechannel_emoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "emoji of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};

Blockly.Blocks['welcomechannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMECHANNEL"
        }
      ],
      "category": Blockly.Categories.welcomechannel,
      "extensions": ["colours_welcomechannel", "output_string"]
    });
  }
};
