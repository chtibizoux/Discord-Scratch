'use strict';

goog.provide('Blockly.Blocks.options');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['options_defaultMakeCacheSettings'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultMakeCacheSettings of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        }
      ],
      "category": Blockly.Categories.options,
      "extensions": ["colours_options", "output_string"]
    });
  }
};
Blockly.Blocks['options_defaultSweeperSettings'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultSweeperSettings of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        }
      ],
      "category": Blockly.Categories.options,
      "extensions": ["colours_options", "output_string"]
    });
  }
};
Blockly.Blocks['options_createDefault'] = {
  init: function() {
    this.jsonInit({
      "message0": "createDefault of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.options,
      "extensions": ["colours_options", "shape_statement"]
    });
  }
};
Blockly.Blocks['options_cacheWithLimits'] = {
  init: function() {
    this.jsonInit({
      "message0": "cacheWithLimits of %1 settings: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "SETTINGS"
        },
      ],
      "category": Blockly.Categories.options,
      "extensions": ["colours_options", "shape_statement"]
    });
  }
};
Blockly.Blocks['options_cacheEverything'] = {
  init: function() {
    this.jsonInit({
      "message0": "cacheEverything of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.options,
      "extensions": ["colours_options", "shape_statement"]
    });
  }
};