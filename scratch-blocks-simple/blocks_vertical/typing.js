'use strict';

goog.provide('Blockly.Blocks.typing');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['typing_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_startedtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "started timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_startedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "started at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        }
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "output_string"]
    });
  }
};

Blockly.Blocks['typing_inGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TYPING"
        },
      ],
      "category": Blockly.Categories.typing,
      "extensions": ["colours_typing", "shape_statement"]
    });
  }
};
