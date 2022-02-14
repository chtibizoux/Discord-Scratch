'use strict';

goog.provide('Blockly.Blocks.websocketmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['websocketmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETMANAGER"
        }
      ],
      "category": Blockly.Categories.websocketmanager,
      "extensions": ["colours_websocketmanager", "output_string"]
    });
  }
};

Blockly.Blocks['websocketmanager_gateway'] = {
  init: function() {
    this.jsonInit({
      "message0": "gateway of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETMANAGER"
        }
      ],
      "category": Blockly.Categories.websocketmanager,
      "extensions": ["colours_websocketmanager", "output_string"]
    });
  }
};

Blockly.Blocks['websocketmanager_shards'] = {
  init: function() {
    this.jsonInit({
      "message0": "shards of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETMANAGER"
        }
      ],
      "category": Blockly.Categories.websocketmanager,
      "extensions": ["colours_websocketmanager", "output_string"]
    });
  }
};

Blockly.Blocks['websocketmanager_status'] = {
  init: function() {
    this.jsonInit({
      "message0": "status of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETMANAGER"
        }
      ],
      "category": Blockly.Categories.websocketmanager,
      "extensions": ["colours_websocketmanager", "output_string"]
    });
  }
};

Blockly.Blocks['websocketmanager_ping'] = {
  init: function() {
    this.jsonInit({
      "message0": "ping of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETMANAGER"
        }
      ],
      "category": Blockly.Categories.websocketmanager,
      "extensions": ["colours_websocketmanager", "output_string"]
    });
  }
};
