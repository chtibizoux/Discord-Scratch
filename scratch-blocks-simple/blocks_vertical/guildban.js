'use strict';

goog.provide('Blockly.Blocks.guildban');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildban_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        }
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "output_string"]
    });
  }
};
Blockly.Blocks['guildban_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        }
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "output_string"]
    });
  }
};
Blockly.Blocks['guildban_reason'] = {
  init: function() {
    this.jsonInit({
      "message0": "reason of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        }
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "output_string"]
    });
  }
};
Blockly.Blocks['guildban_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        }
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "output_string"]
    });
  }
};
Blockly.Blocks['guildban_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        }
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "output_string"]
    });
  }
};
Blockly.Blocks['guildban_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBAN"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.guildban,
      "extensions": ["colours_guildban", "shape_statement"]
    });
  }
};