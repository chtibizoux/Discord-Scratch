'use strict';

goog.provide('Blockly.Blocks.guildchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildchannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_permissionOverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionOverwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_rawPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "rawPosition of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_parentId'] = {
  init: function() {
    this.jsonInit({
      "message0": "parentId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_permissionsLocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsLocked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        }
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "output_string"]
    });
  }
};

Blockly.Blocks['guildchannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsFor of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
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
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lockPermissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
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
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "setName of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
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
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "setParent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
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
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "setPosition of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
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
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "isText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "isVoice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "isThread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDCHANNEL"
        },
      ],
      "category": Blockly.Categories.guildchannel,
      "extensions": ["colours_guildchannel", "shape_statement"]
    });
  }
};
