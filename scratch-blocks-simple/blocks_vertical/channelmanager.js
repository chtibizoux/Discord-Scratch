'use strict';

goog.provide('Blockly.Blocks.channelmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['channelmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.channelmanager,
      "extensions": ["colours_channelmanager", "output_string"]
    });
  }
};

Blockly.Blocks['channelmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.channelmanager,
      "extensions": ["colours_channelmanager", "output_string"]
    });
  }
};

Blockly.Blocks['channelmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channelmanager,
      "extensions": ["colours_channelmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['channelmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channelmanager,
      "extensions": ["colours_channelmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['channelmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.channelmanager,
      "extensions": ["colours_channelmanager", "shape_statement"]
    });
  }
};
