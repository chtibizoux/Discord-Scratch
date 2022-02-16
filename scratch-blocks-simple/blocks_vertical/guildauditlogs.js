'use strict';

goog.provide('Blockly.Blocks.guildauditlogs');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildauditlogs_entries'] = {
  init: function() {
    this.jsonInit({
      "message0": "entries of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        }
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogs_targets'] = {
  init: function() {
    this.jsonInit({
      "message0": " targets of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        }
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogs_actions'] = {
  init: function() {
    this.jsonInit({
      "message0": " actions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        }
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogs_build'] = {
  init: function() {
    this.jsonInit({
      "message0": "build of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        },
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildauditlogs_targetType'] = {
  init: function() {
    this.jsonInit({
      "message0": "target type of %1 target: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        },
        {
          "type": "input_value",
          "name": "TARGET"
        },
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildauditlogs_actionType'] = {
  init: function() {
    this.jsonInit({
      "message0": "action type of %1 action: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGS"
        },
        {
          "type": "input_value",
          "name": "ACTION"
        },
      ],
      "category": Blockly.Categories.guildauditlogs,
      "extensions": ["colours_guildauditlogs", "shape_statement"]
    });
  }
};
