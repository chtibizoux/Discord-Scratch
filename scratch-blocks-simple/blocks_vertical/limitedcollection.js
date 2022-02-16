'use strict';

goog.provide('Blockly.Blocks.limitedcollection');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['limitedcollection_maxsize'] = {
  init: function() {
    this.jsonInit({
      "message0": "max size of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LIMITEDCOLLECTION"
        }
      ],
      "category": Blockly.Categories.limitedcollection,
      "extensions": ["colours_limitedcollection", "output_string"]
    });
  }
};

Blockly.Blocks['limitedcollection_keepoverlimit'] = {
  init: function() {
    this.jsonInit({
      "message0": "keep overlimit of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "LIMITEDCOLLECTION"
        }
      ],
      "category": Blockly.Categories.limitedcollection,
      "extensions": ["colours_limitedcollection", "output_string"]
    });
  }
};
