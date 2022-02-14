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

Blockly.Blocks['permissions_FLAGS'] = {
  init: function() {
    this.jsonInit({
      "message0": "FLAGS of %1",
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

Blockly.Blocks['permissions_ALL'] = {
  init: function() {
    this.jsonInit({
      "message0": "ALL of %1",
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

Blockly.Blocks['permissions_DEFAULT'] = {
  init: function() {
    this.jsonInit({
      "message0": "DEFAULT of %1",
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

Blockly.Blocks['permissions_STAGE_MODERATOR'] = {
  init: function() {
    this.jsonInit({
      "message0": "STAGE_MODERATOR of %1",
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
      "message0": "toArray of %1",
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
