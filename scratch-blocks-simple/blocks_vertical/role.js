'use strict';

goog.provide('Blockly.Blocks.role');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['role_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_unicodeemoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "unicode emoji of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_color'] = {
  init: function() {
    this.jsonInit({
      "message0": "color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_hoist'] = {
  init: function() {
    this.jsonInit({
      "message0": "hoist of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_managed'] = {
  init: function() {
    this.jsonInit({
      "message0": "managed of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_mentionable'] = {
  init: function() {
    this.jsonInit({
      "message0": "mentionable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_tags'] = {
  init: function() {
    this.jsonInit({
      "message0": "tags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_hexcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "hex color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_editable'] = {
  init: function() {
    this.jsonInit({
      "message0": "editable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        }
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "output_string"]
    });
  }
};

Blockly.Blocks['role_comparePositionTo'] = {
  init: function() {
    this.jsonInit({
      "message0": "compare positionto of %1 role: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_permissionsIn'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions in of %1 channel: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHECKADMIN"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setColor'] = {
  init: function() {
    this.jsonInit({
      "message0": "set color of %1 color: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "COLOR"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setHoist'] = {
  init: function() {
    this.jsonInit({
      "message0": "set hoist of %1 hoist: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "HOIST"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "set permissions of %1 permissions: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "PERMISSIONS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setMentionable'] = {
  init: function() {
    this.jsonInit({
      "message0": "set mentionable of %1 mentionable: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "MENTIONABLE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setIcon'] = {
  init: function() {
    this.jsonInit({
      "message0": "set icon of %1 icon: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "ICON"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setUnicodeEmoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "set unicodeemoji of %1 unicodeEmoji: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "UNICODEEMOJI"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "POSITION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 role: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};

Blockly.Blocks['role_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLE"
        },
      ],
      "category": Blockly.Categories.role,
      "extensions": ["colours_role", "shape_statement"]
    });
  }
};
