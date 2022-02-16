'use strict';

goog.provide('Blockly.Blocks.reactionemoji');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['reactionemoji_reaction'] = {
  init: function() {
    this.jsonInit({
      "message0": "reaction of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_animated'] = {
  init: function() {
    this.jsonInit({
      "message0": "animated of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_identifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "identifier of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        }
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "output_string"]
    });
  }
};

Blockly.Blocks['reactionemoji_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONEMOJI"
        },
      ],
      "category": Blockly.Categories.reactionemoji,
      "extensions": ["colours_reactionemoji", "shape_statement"]
    });
  }
};
