'use strict';

goog.provide('Blockly.Blocks.usermanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['usermanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
        }
      ],
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "output_string"]
    });
  }
};

Blockly.Blocks['usermanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
        }
      ],
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "output_string"]
    });
  }
};

Blockly.Blocks['usermanager_createDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "create dm of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
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
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_deleteDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete dm of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
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
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_fetchFlags'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch flags of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
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
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
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
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['usermanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.usermanager,
      "extensions": ["colours_usermanager", "shape_statement"]
    });
  }
};
