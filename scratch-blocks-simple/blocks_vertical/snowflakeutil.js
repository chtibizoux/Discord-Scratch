'use strict';

goog.provide('Blockly.Blocks.snowflakeutil');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['snowflakeutil_EPOCH'] = {
  init: function() {
    this.jsonInit({
      "message0": "EPOCH of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SNOWFLAKEUTIL"
        }
      ],
      "category": Blockly.Categories.snowflakeutil,
      "extensions": ["colours_snowflakeutil", "output_string"]
    });
  }
};

Blockly.Blocks['snowflakeutil_generate'] = {
  init: function() {
    this.jsonInit({
      "message0": "generate of %1 timestamp: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SNOWFLAKEUTIL"
        },
        {
          "type": "input_value",
          "name": "TIMESTAMP"
        },
      ],
      "category": Blockly.Categories.snowflakeutil,
      "extensions": ["colours_snowflakeutil", "shape_statement"]
    });
  }
};

Blockly.Blocks['snowflakeutil_deconstruct'] = {
  init: function() {
    this.jsonInit({
      "message0": "deconstruct of %1 snowflake: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SNOWFLAKEUTIL"
        },
        {
          "type": "input_value",
          "name": "SNOWFLAKE"
        },
      ],
      "category": Blockly.Categories.snowflakeutil,
      "extensions": ["colours_snowflakeutil", "shape_statement"]
    });
  }
};

Blockly.Blocks['snowflakeutil_timestampFrom'] = {
  init: function() {
    this.jsonInit({
      "message0": "timestampFrom of %1 snowflake: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SNOWFLAKEUTIL"
        },
        {
          "type": "input_value",
          "name": "SNOWFLAKE"
        },
      ],
      "category": Blockly.Categories.snowflakeutil,
      "extensions": ["colours_snowflakeutil", "shape_statement"]
    });
  }
};
