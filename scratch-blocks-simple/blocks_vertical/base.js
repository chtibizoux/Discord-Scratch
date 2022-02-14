'use strict';

goog.provide('Blockly.Blocks.base');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['base_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASE"
        }
      ],
      "category": Blockly.Categories.base,
      "extensions": ["colours_base", "output_string"]
    });
  }
};
