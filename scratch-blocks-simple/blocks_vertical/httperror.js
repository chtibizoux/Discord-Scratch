'use strict';

goog.provide('Blockly.Blocks.httperror');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['httperror_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "HTTPERROR"
        }
      ],
      "category": Blockly.Categories.httperror,
      "extensions": ["colours_httperror", "output_string"]
    });
  }
};

Blockly.Blocks['httperror_code'] = {
  init: function() {
    this.jsonInit({
      "message0": "code of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "HTTPERROR"
        }
      ],
      "category": Blockly.Categories.httperror,
      "extensions": ["colours_httperror", "output_string"]
    });
  }
};

Blockly.Blocks['httperror_method'] = {
  init: function() {
    this.jsonInit({
      "message0": "method of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "HTTPERROR"
        }
      ],
      "category": Blockly.Categories.httperror,
      "extensions": ["colours_httperror", "output_string"]
    });
  }
};

Blockly.Blocks['httperror_path'] = {
  init: function() {
    this.jsonInit({
      "message0": "path of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "HTTPERROR"
        }
      ],
      "category": Blockly.Categories.httperror,
      "extensions": ["colours_httperror", "output_string"]
    });
  }
};

Blockly.Blocks['httperror_requestdata'] = {
  init: function() {
    this.jsonInit({
      "message0": "request data of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "HTTPERROR"
        }
      ],
      "category": Blockly.Categories.httperror,
      "extensions": ["colours_httperror", "output_string"]
    });
  }
};
