'use strict';

goog.provide('Blockly.Blocks.guildchannelmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildchannelmanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_channelCountWithoutThreads'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelCountWithoutThreads of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        }
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
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
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
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
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_setPositions'] = {
  init: function() {
    this.jsonInit({
      "message0": "setPositions of %1 channelPositions: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNELPOSITIONS"
        },
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildchannelmanager_fetchActiveThreads'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchActiveThreads of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNELMANAGER"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.guildchannelmanager,
      "extensions": ["colours_guildchannelmanager", "shape_statement"]
    });
  }
};