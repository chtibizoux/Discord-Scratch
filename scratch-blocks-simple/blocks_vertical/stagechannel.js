'use strict';

goog.provide('Blockly.Blocks.stagechannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['stagechannel_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_stageinstance'] = {
  init: function() {
    this.jsonInit({
      "message0": "stage instance of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_rtcregion'] = {
  init: function() {
    this.jsonInit({
      "message0": "rtc region of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_bitrate'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitrate of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_userlimit'] = {
  init: function() {
    this.jsonInit({
      "message0": "user limit of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_full'] = {
  init: function() {
    this.jsonInit({
      "message0": "full of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_joinable'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        }
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "output_string"]
    });
  }
};

Blockly.Blocks['stagechannel_createStageInstance'] = {
  init: function() {
    this.jsonInit({
      "message0": "create stageinstance of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_setTopic'] = {
  init: function() {
    this.jsonInit({
      "message0": "set topic of %1 topic: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "TOPIC"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_setRTCRegion'] = {
  init: function() {
    this.jsonInit({
      "message0": "set rtcregion of %1 region: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "REGION"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
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
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
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
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
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
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
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
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
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
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['stagechannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGECHANNEL"
        },
      ],
      "category": Blockly.Categories.stagechannel,
      "extensions": ["colours_stagechannel", "shape_statement"]
    });
  }
};
