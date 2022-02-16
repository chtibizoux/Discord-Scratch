'use strict';

goog.provide('Blockly.Blocks.permissions');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['permissions_bitfield'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitfield of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        }
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "output_string"]
    });
  }
};

Blockly.Blocks['permissions_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": " flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        }
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "output_string"]
    });
  }
};

Blockly.Blocks['permissions_all'] = {
  init: function() {
    this.jsonInit({
      "message0": " all of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        }
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "output_string"]
    });
  }
};

Blockly.Blocks['permissions_default'] = {
  init: function() {
    this.jsonInit({
      "message0": " default of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        }
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "output_string"]
    });
  }
};

Blockly.Blocks['permissions_stage_moderator'] = {
  init: function() {
    this.jsonInit({
      "message0": " stage_moderator of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        }
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "output_string"]
    });
  }
};

Blockly.Blocks['permissions_missing'] = {
  init: function() {
    this.jsonInit({
      "message0": "missing of %1 bits: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
        {
          "type": "input_value",
          "name": "CHECKADMIN"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_any'] = {
  init: function() {
    this.jsonInit({
      "message0": "any of %1 permission: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "PERMISSION"
        },
        {
          "type": "input_value",
          "name": "CHECKADMIN"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 permission: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "PERMISSION"
        },
        {
          "type": "input_value",
          "name": "CHECKADMIN"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_toArray'] = {
  init: function() {
    this.jsonInit({
      "message0": "to array of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_freeze'] = {
  init: function() {
    this.jsonInit({
      "message0": "freeze of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};

Blockly.Blocks['permissions_serialize'] = {
  init: function() {
    this.jsonInit({
      "message0": "serialize of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.permissions,
      "extensions": ["colours_permissions", "shape_statement"]
    });
  }
};
