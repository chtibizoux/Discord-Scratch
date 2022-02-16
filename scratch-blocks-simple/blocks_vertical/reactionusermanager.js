'use strict';

goog.provide('Blockly.Blocks.reactionusermanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['reactionusermanager_reaction'] = {
  init: function() {
    this.jsonInit({
      "message0": "reaction of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "output_string"]
    });
  }
};

Blockly.Blocks['reactionusermanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "output_string"]
    });
  }
};

Blockly.Blocks['reactionusermanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        }
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "output_string"]
    });
  }
};

Blockly.Blocks['reactionusermanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactionusermanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactionusermanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactionusermanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONUSERMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.reactionusermanager,
      "extensions": ["colours_reactionusermanager", "shape_statement"]
    });
  }
};
