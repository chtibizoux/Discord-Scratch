'use strict';

goog.provide('Blockly.Blocks.presencemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['presencemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCEMANAGER"
        }
      ],
      "category": Blockly.Categories.presencemanager,
      "extensions": ["colours_presencemanager", "output_string"]
    });
  }
};
Blockly.Blocks['presencemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCEMANAGER"
        }
      ],
      "category": Blockly.Categories.presencemanager,
      "extensions": ["colours_presencemanager", "output_string"]
    });
  }
};
Blockly.Blocks['presencemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 presence: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
      ],
      "category": Blockly.Categories.presencemanager,
      "extensions": ["colours_presencemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['presencemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 presence: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
      ],
      "category": Blockly.Categories.presencemanager,
      "extensions": ["colours_presencemanager", "shape_statement"]
    });
  }
};