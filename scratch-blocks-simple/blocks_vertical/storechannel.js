'use strict';

goog.provide('Blockly.Blocks.storechannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['storechannel_nsfw'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfw of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        }
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "output_string"]
    });
  }
};

Blockly.Blocks['storechannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "MEMBERORROLE"
        },
        {
          "type": "input_value",
          "name": "CHECKADMIN"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
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
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
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
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
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
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
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
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['storechannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STORECHANNEL"
        },
      ],
      "category": Blockly.Categories.storechannel,
      "extensions": ["colours_storechannel", "shape_statement"]
    });
  }
};
