'use strict';

goog.provide('Blockly.Blocks.discordapierror');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['discordapierror_method'] = {
  init: function() {
    this.jsonInit({
      "message0": "method of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DISCORDAPIERROR"
        }
      ],
      "category": Blockly.Categories.discordapierror,
      "extensions": ["colours_discordapierror", "output_string"]
    });
  }
};

Blockly.Blocks['discordapierror_path'] = {
  init: function() {
    this.jsonInit({
      "message0": "path of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DISCORDAPIERROR"
        }
      ],
      "category": Blockly.Categories.discordapierror,
      "extensions": ["colours_discordapierror", "output_string"]
    });
  }
};

Blockly.Blocks['discordapierror_code'] = {
  init: function() {
    this.jsonInit({
      "message0": "code of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DISCORDAPIERROR"
        }
      ],
      "category": Blockly.Categories.discordapierror,
      "extensions": ["colours_discordapierror", "output_string"]
    });
  }
};

Blockly.Blocks['discordapierror_httpStatus'] = {
  init: function() {
    this.jsonInit({
      "message0": "httpStatus of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DISCORDAPIERROR"
        }
      ],
      "category": Blockly.Categories.discordapierror,
      "extensions": ["colours_discordapierror", "output_string"]
    });
  }
};

Blockly.Blocks['discordapierror_requestData'] = {
  init: function() {
    this.jsonInit({
      "message0": "requestData of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DISCORDAPIERROR"
        }
      ],
      "category": Blockly.Categories.discordapierror,
      "extensions": ["colours_discordapierror", "output_string"]
    });
  }
};
