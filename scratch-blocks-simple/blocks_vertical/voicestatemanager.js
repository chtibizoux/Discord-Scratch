'use strict';

goog.provide('Blockly.Blocks.voicestatemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['voicestatemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATEMANAGER"
        }
      ],
      "category": Blockly.Categories.voicestatemanager,
      "extensions": ["colours_voicestatemanager", "output_string"]
    });
  }
};

Blockly.Blocks['voicestatemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATEMANAGER"
        }
      ],
      "category": Blockly.Categories.voicestatemanager,
      "extensions": ["colours_voicestatemanager", "output_string"]
    });
  }
};

Blockly.Blocks['voicestatemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATEMANAGER"
        }
      ],
      "category": Blockly.Categories.voicestatemanager,
      "extensions": ["colours_voicestatemanager", "output_string"]
    });
  }
};

Blockly.Blocks['voicestatemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.voicestatemanager,
      "extensions": ["colours_voicestatemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestatemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.voicestatemanager,
      "extensions": ["colours_voicestatemanager", "shape_statement"]
    });
  }
};
