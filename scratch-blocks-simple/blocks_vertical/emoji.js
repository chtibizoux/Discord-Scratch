'use strict';

goog.provide('Blockly.Blocks.emoji');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['emoji_animated'] = {
  init: function() {
    this.jsonInit({
      "message0": "animated of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_identifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "identifier of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        }
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "output_string"]
    });
  }
};

Blockly.Blocks['emoji_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.emoji,
      "extensions": ["colours_emoji", "shape_statement"]
    });
  }
};
