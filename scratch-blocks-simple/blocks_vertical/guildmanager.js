'use strict';

goog.provide('Blockly.Blocks.guildmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 guild: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 guild: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmanager,
      "extensions": ["colours_guildmanager", "shape_statement"]
    });
  }
};
