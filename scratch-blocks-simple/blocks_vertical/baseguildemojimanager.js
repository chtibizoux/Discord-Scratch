'use strict';

goog.provide('Blockly.Blocks.baseguildemojimanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['baseguildemojimanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDEMOJIMANAGER"
        }
      ],
      "category": Blockly.Categories.baseguildemojimanager,
      "extensions": ["colours_baseguildemojimanager", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildemojimanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDEMOJIMANAGER"
        }
      ],
      "category": Blockly.Categories.baseguildemojimanager,
      "extensions": ["colours_baseguildemojimanager", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildemojimanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.baseguildemojimanager,
      "extensions": ["colours_baseguildemojimanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildemojimanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.baseguildemojimanager,
      "extensions": ["colours_baseguildemojimanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildemojimanager_resolveIdentifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveIdentifier of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.baseguildemojimanager,
      "extensions": ["colours_baseguildemojimanager", "shape_statement"]
    });
  }
};
