'use strict';

goog.provide('Blockly.Blocks.user');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['user_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_username'] = {
  init: function() {
    this.jsonInit({
      "message0": "username of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_bot'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_discriminator'] = {
  init: function() {
    this.jsonInit({
      "message0": "discriminator of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_avatar'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_banner'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_accentcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "accent color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_system'] = {
  init: function() {
    this.jsonInit({
      "message0": "system of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_defaultavatarurl'] = {
  init: function() {
    this.jsonInit({
      "message0": "default avatarurl of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_hexaccentcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "hex accentcolor of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_tag'] = {
  init: function() {
    this.jsonInit({
      "message0": "tag of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_dmchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "dm channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "output_string"]
    });
  }
};

Blockly.Blocks['user_avatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_displayAvatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "display avatarurl of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_bannerURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_createDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "create dm of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_deleteDM'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete dm of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_fetchFlags'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch flags of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};
