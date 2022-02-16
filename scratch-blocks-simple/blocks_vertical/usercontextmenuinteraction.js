'use strict';

goog.provide('Blockly.Blocks.usercontextmenuinteraction');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['usercontextmenuinteraction_targetuser'] = {
  init: function() {
    this.jsonInit({
      "message0": "target user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_targetmember'] = {
  init: function() {
    this.jsonInit({
      "message0": "target member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_targetid'] = {
  init: function() {
    this.jsonInit({
      "message0": "target id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_targettype'] = {
  init: function() {
    this.jsonInit({
      "message0": "target type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_commandid'] = {
  init: function() {
    this.jsonInit({
      "message0": "command id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_commandname'] = {
  init: function() {
    this.jsonInit({
      "message0": "command name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_deferred'] = {
  init: function() {
    this.jsonInit({
      "message0": "deferred of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_replied'] = {
  init: function() {
    this.jsonInit({
      "message0": "replied of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_ephemeral'] = {
  init: function() {
    this.jsonInit({
      "message0": "ephemeral of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_webhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "webhook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_command'] = {
  init: function() {
    this.jsonInit({
      "message0": "command of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_applicationid'] = {
  init: function() {
    this.jsonInit({
      "message0": "application id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_version'] = {
  init: function() {
    this.jsonInit({
      "message0": "version of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_memberpermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "member permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_locale'] = {
  init: function() {
    this.jsonInit({
      "message0": "locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_guildlocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_deferReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "defer reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_reply'] = {
  init: function() {
    this.jsonInit({
      "message0": "reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_fetchReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch reply of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_editReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_deleteReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete reply of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_followUp'] = {
  init: function() {
    this.jsonInit({
      "message0": "follow up of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_inGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_inCachedGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in cachedguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_inRawGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in rawguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isApplicationCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is applicationcommand of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is command of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is contextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isUserContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is usercontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isMessageContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isAutocomplete'] = {
  init: function() {
    this.jsonInit({
      "message0": "is autocomplete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecomponent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isButton'] = {
  init: function() {
    this.jsonInit({
      "message0": "is button of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['usercontextmenuinteraction_isSelectMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is selectmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USERCONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.usercontextmenuinteraction,
      "extensions": ["colours_usercontextmenuinteraction", "shape_statement"]
    });
  }
};
