'use strict';

goog.provide('Blockly.Blocks.guildinvitemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildinvitemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 invite: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "INVITE"
        },
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 invite: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "INVITE"
        },
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildinvitemanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 invite: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDINVITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "INVITE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildinvitemanager,
      "extensions": ["colours_guildinvitemanager", "shape_statement"]
    });
  }
};
