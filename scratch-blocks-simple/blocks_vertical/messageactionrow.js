'use strict';

goog.provide('Blockly.Blocks.messageactionrow');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messageactionrow_components'] = {
  init: function() {
    this.jsonInit({
      "message0": "components of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        }
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "output_string"]
    });
  }
};
Blockly.Blocks['messageactionrow_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        }
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "output_string"]
    });
  }
};
Blockly.Blocks['messageactionrow_addComponents'] = {
  init: function() {
    this.jsonInit({
      "message0": "addComponents of %1 components: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        },
        {
          "type": "input_value",
          "name": "COMPONENTS"
        },
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageactionrow_setComponents'] = {
  init: function() {
    this.jsonInit({
      "message0": "setComponents of %1 components: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        },
        {
          "type": "input_value",
          "name": "COMPONENTS"
        },
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageactionrow_spliceComponents'] = {
  init: function() {
    this.jsonInit({
      "message0": "spliceComponents of %1 index: %2 deleteCount: %3 components: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "input_value",
          "name": "DELETECOUNT"
        },
        {
          "type": "input_value",
          "name": "COMPONENTS"
        },
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageactionrow_toJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": "toJSON of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEACTIONROW"
        },
      ],
      "category": Blockly.Categories.messageactionrow,
      "extensions": ["colours_messageactionrow", "shape_statement"]
    });
  }
};