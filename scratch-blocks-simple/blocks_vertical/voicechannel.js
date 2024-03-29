'use strict';

goog.provide('Blockly.Blocks.voicechannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['voicechannel_joinable'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_speakable'] = {
  init: function() {
    this.jsonInit({
      "message0": "speakable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_rtcregion'] = {
  init: function() {
    this.jsonInit({
      "message0": "rtc region of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_bitrate'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitrate of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_userlimit'] = {
  init: function() {
    this.jsonInit({
      "message0": "user limit of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_full'] = {
  init: function() {
    this.jsonInit({
      "message0": "full of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        }
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "output_string"]
    });
  }
};

Blockly.Blocks['voicechannel_setBitrate'] = {
  init: function() {
    this.jsonInit({
      "message0": "set bitrate of %1 bitrate: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "BITRATE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_setUserLimit'] = {
  init: function() {
    this.jsonInit({
      "message0": "set userlimit of %1 userLimit: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "USERLIMIT"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_setRTCRegion'] = {
  init: function() {
    this.jsonInit({
      "message0": "set rtcregion of %1 region: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "REGION"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
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
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
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
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
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
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
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
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
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
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicechannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICECHANNEL"
        },
      ],
      "category": Blockly.Categories.voicechannel,
      "extensions": ["colours_voicechannel", "shape_statement"]
    });
  }
};
