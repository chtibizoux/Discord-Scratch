'use strict';

goog.provide('Blockly.Blocks.limitedcollection');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['limitedcollection_maxSize'] = {
  init: function() {
    this.jsonInit({
      "message0": "maxSize of %1",
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

Blockly.Blocks['limitedcollection_keepOverLimit'] = {
  init: function() {
    this.jsonInit({
      "message0": "keepOverLimit of %1",
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
