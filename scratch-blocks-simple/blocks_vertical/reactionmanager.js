'use strict';

goog.provide('Blockly.Blocks.reactionmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['reactionmanager_message'] = {
  init: function() {
    this.jsonInit({
      "message0": "message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "output_string"]
    });
  }
};
Blockly.Blocks['reactionmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "output_string"]
    });
  }
};
Blockly.Blocks['reactionmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "output_string"]
    });
  }
};
Blockly.Blocks['reactionmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 reaction: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        },
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['reactionmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 reaction: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        },
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['reactionmanager_removeAll'] = {
  init: function() {
    this.jsonInit({
      "message0": "removeAll of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONMANAGER"
        },
      ],
      "category": Blockly.Categories.reactionmanager,
      "extensions": ["colours_reactionmanager", "shape_statement"]
    });
  }
};