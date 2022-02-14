'use strict';

goog.provide('Blockly.Blocks.guildbanmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildbanmanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        }
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildbanmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        }
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildbanmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        }
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildbanmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 ban: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        },
        {
          "type": "input_value",
          "name": "BAN"
        },
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildbanmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildbanmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildbanmanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 user: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildbanmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDBANMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildbanmanager,
      "extensions": ["colours_guildbanmanager", "shape_statement"]
    });
  }
};