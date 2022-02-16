'use strict';

goog.provide('Blockly.Blocks.clientuser');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['clientuser_verified'] = {
  init: function() {
    this.jsonInit({
      "message0": "verified of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_mfaenabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "mfa enabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_presence'] = {
  init: function() {
    this.jsonInit({
      "message0": "presence of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_username'] = {
  init: function() {
    this.jsonInit({
      "message0": "username of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_bot'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_discriminator'] = {
  init: function() {
    this.jsonInit({
      "message0": "discriminator of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_avatar'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_banner'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_accentcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "accent color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_system'] = {
  init: function() {
    this.jsonInit({
      "message0": "system of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_defaultavatarurl'] = {
  init: function() {
    this.jsonInit({
      "message0": "default avatarurl of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_hexaccentcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "hex accentcolor of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_tag'] = {
  init: function() {
    this.jsonInit({
      "message0": "tag of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_dmchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "dm channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        }
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "output_string"]
    });
  }
};

Blockly.Blocks['clientuser_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setUsername'] = {
  init: function() {
    this.jsonInit({
      "message0": "set username of %1 username: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "USERNAME"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setAvatar'] = {
  init: function() {
    this.jsonInit({
      "message0": "set avatar of %1 avatar: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "AVATAR"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setPresence'] = {
  init: function() {
    this.jsonInit({
      "message0": "set presence of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setStatus'] = {
  init: function() {
    this.jsonInit({
      "message0": "set status of %1 status: %2 shardId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "STATUS"
        },
        {
          "type": "input_value",
          "name": "SHARDID"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setActivity'] = {
  init: function() {
    this.jsonInit({
      "message0": "set activity of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_setAFK'] = {
  init: function() {
    this.jsonInit({
      "message0": "set afk of %1 afk: %2 shardId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "AFK"
        },
        {
          "type": "input_value",
          "name": "SHARDID"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_avatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_displayAvatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "display avatarurl of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_bannerURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_createDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "create dm of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_deleteDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete dm of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_fetchFlags'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch flags of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientuser_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTUSER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientuser,
      "extensions": ["colours_clientuser", "shape_statement"]
    });
  }
};
