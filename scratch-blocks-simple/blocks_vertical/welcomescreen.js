'use strict';

goog.provide('Blockly.Blocks.welcomescreen');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['welcomescreen_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMESCREEN"
        }
      ],
      "category": Blockly.Categories.welcomescreen,
      "extensions": ["colours_welcomescreen", "output_string"]
    });
  }
};

Blockly.Blocks['welcomescreen_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMESCREEN"
        }
      ],
      "category": Blockly.Categories.welcomescreen,
      "extensions": ["colours_welcomescreen", "output_string"]
    });
  }
};

Blockly.Blocks['welcomescreen_welcomechannels'] = {
  init: function() {
    this.jsonInit({
      "message0": "welcome channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMESCREEN"
        }
      ],
      "category": Blockly.Categories.welcomescreen,
      "extensions": ["colours_welcomescreen", "output_string"]
    });
  }
};

Blockly.Blocks['welcomescreen_enabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "enabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMESCREEN"
        }
      ],
      "category": Blockly.Categories.welcomescreen,
      "extensions": ["colours_welcomescreen", "output_string"]
    });
  }
};

Blockly.Blocks['welcomescreen_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WELCOMESCREEN"
        }
      ],
      "category": Blockly.Categories.welcomescreen,
      "extensions": ["colours_welcomescreen", "output_string"]
    });
  }
};
