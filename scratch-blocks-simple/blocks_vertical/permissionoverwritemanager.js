'use strict';

goog.provide('Blockly.Blocks.permissionoverwritemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['permissionoverwritemanager_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        }
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "output_string"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        }
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "output_string"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        }
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "output_string"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 overwrites: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "OVERWRITES"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 userOrRole: %2 options: %3 overwriteOptions: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "USERORROLE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "OVERWRITEOPTIONS"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 userOrRole: %2 options: %3 overwriteOptions: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "USERORROLE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "OVERWRITEOPTIONS"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 userOrRole: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "USERORROLE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['permissionoverwritemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.permissionoverwritemanager,
      "extensions": ["colours_permissionoverwritemanager", "shape_statement"]
    });
  }
};