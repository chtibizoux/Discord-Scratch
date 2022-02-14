'use strict';

goog.provide('Blockly.Blocks.basemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['basemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEMANAGER"
        }
      ],
      "category": Blockly.Categories.basemanager,
      "extensions": ["colours_basemanager", "output_string"]
    });
  }
};
