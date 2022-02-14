'use strict';

goog.provide('Blockly.Blocks.guildmember');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildmember_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_joinedTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_premiumSinceTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumSinceTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_nickname'] = {
  init: function() {
    this.jsonInit({
      "message0": "nickname of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_pending'] = {
  init: function() {
    this.jsonInit({
      "message0": "pending of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_communicationDisabledUntilTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "communicationDisabledUntilTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_avatar'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_voice'] = {
  init: function() {
    this.jsonInit({
      "message0": "voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_joinedAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_communicationDisabledUntil'] = {
  init: function() {
    this.jsonInit({
      "message0": "communicationDisabledUntil of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_premiumSince'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumSince of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_presence'] = {
  init: function() {
    this.jsonInit({
      "message0": "presence of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_displayColor'] = {
  init: function() {
    this.jsonInit({
      "message0": "displayColor of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_displayHexColor'] = {
  init: function() {
    this.jsonInit({
      "message0": "displayHexColor of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_displayName'] = {
  init: function() {
    this.jsonInit({
      "message0": "displayName of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_kickable'] = {
  init: function() {
    this.jsonInit({
      "message0": "kickable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_bannable'] = {
  init: function() {
    this.jsonInit({
      "message0": "bannable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_moderatable'] = {
  init: function() {
    this.jsonInit({
      "message0": "moderatable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        }
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "output_string"]
    });
  }
};

Blockly.Blocks['guildmember_avatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatarURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_displayAvatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "displayAvatarURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_isCommunicationDisabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "isCommunicationDisabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_permissionsIn'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsIn of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
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
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_setNickname'] = {
  init: function() {
    this.jsonInit({
      "message0": "setNickname of %1 nick: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "NICK"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_createDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "createDM of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_deleteDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "deleteDM of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_kick'] = {
  init: function() {
    this.jsonInit({
      "message0": "kick of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_ban'] = {
  init: function() {
    this.jsonInit({
      "message0": "ban of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_disableCommunicationUntil'] = {
  init: function() {
    this.jsonInit({
      "message0": "disableCommunicationUntil of %1 communicationDisabledUntil: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "COMMUNICATIONDISABLEDUNTIL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_timeout'] = {
  init: function() {
    this.jsonInit({
      "message0": "timeout of %1 timeout: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "TIMEOUT"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 member: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmember_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmember,
      "extensions": ["colours_guildmember", "shape_statement"]
    });
  }
};
