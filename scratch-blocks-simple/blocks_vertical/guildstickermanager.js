'use strict';

goog.provide('Blockly.Blocks.guildstickermanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildstickermanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildstickermanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildstickermanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildstickermanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 file: %2 name: %3 tags: %4 options: %5",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        },
        {
          "type": "input_value",
          "name": "FILE"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "TAGS"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildstickermanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 sticker: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        },
        {
          "type": "input_value",
          "name": "STICKER"
        },
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildstickermanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 sticker: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        },
        {
          "type": "input_value",
          "name": "STICKER"
        },
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildstickermanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 sticker: %2 data: %3 reason: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        },
        {
          "type": "input_value",
          "name": "STICKER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildstickermanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 sticker: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
        },
        {
          "type": "input_value",
          "name": "STICKER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildstickermanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSTICKERMANAGER"
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
      "category": Blockly.Categories.guildstickermanager,
      "extensions": ["colours_guildstickermanager", "shape_statement"]
    });
  }
};
