'use strict';

goog.provide('Blockly.Blocks.permissionoverwrites');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['permissionoverwrites_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_deny'] = {
  init: function() {
    this.jsonInit({
      "message0": "deny of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_allow'] = {
  init: function() {
    this.jsonInit({
      "message0": "allow of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        }
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "output_string"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_resolveOverwriteOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve overwriteoptions of %1 options: %2 initialPermissions: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "INITIALPERMISSIONS"
        },
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissionoverwrites_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 overwrite: %2 guild: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONOVERWRITES"
        },
        {
          "type": "input_value",
          "name": "OVERWRITE"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.permissionoverwrites,
      "extensions": ["colours_permissionoverwrites", "shape_statement"]
    });
  }
};
