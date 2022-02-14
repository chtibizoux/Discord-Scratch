'use strict';

goog.provide('Blockly.Blocks.basemessagecomponent');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['basemessagecomponent_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEMESSAGECOMPONENT"
        }
      ],
      "category": Blockly.Categories.basemessagecomponent,
      "extensions": ["colours_basemessagecomponent", "output_string"]
    });
  }
};
