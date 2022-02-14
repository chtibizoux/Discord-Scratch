'use strict';

goog.provide('Blockly.Blocks.datamanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['datamanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DATAMANAGER"
        }
      ],
      "category": Blockly.Categories.datamanager,
      "extensions": ["colours_datamanager", "output_string"]
    });
  }
};

Blockly.Blocks['datamanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DATAMANAGER"
        }
      ],
      "category": Blockly.Categories.datamanager,
      "extensions": ["colours_datamanager", "output_string"]
    });
  }
};

Blockly.Blocks['datamanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATAMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.datamanager,
      "extensions": ["colours_datamanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['datamanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATAMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.datamanager,
      "extensions": ["colours_datamanager", "shape_statement"]
    });
  }
};
