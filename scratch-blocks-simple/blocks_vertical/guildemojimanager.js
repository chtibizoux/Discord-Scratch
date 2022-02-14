'use strict';

goog.provide('Blockly.Blocks.guildemojimanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildemojimanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildemojimanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildemojimanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildemojimanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 attachment: %2 name: %3 options: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "ATTACHMENT"
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
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildemojimanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildemojimanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildemojimanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildemojimanager_resolveIdentifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveIdentifier of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIMANAGER"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.guildemojimanager,
      "extensions": ["colours_guildemojimanager", "shape_statement"]
    });
  }
};