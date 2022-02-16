'use strict';

goog.provide('Blockly.Blocks.messagecontextmenuinteraction');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagecontextmenuinteraction_targetmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "target message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_targetid'] = {
  init: function() {
    this.jsonInit({
      "message0": "target id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_targettype'] = {
  init: function() {
    this.jsonInit({
      "message0": "target type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_commandid'] = {
  init: function() {
    this.jsonInit({
      "message0": "command id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_commandname'] = {
  init: function() {
    this.jsonInit({
      "message0": "command name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_deferred'] = {
  init: function() {
    this.jsonInit({
      "message0": "deferred of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_replied'] = {
  init: function() {
    this.jsonInit({
      "message0": "replied of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_ephemeral'] = {
  init: function() {
    this.jsonInit({
      "message0": "ephemeral of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_webhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "webhook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_command'] = {
  init: function() {
    this.jsonInit({
      "message0": "command of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_applicationid'] = {
  init: function() {
    this.jsonInit({
      "message0": "application id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_version'] = {
  init: function() {
    this.jsonInit({
      "message0": "version of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_memberpermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "member permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_locale'] = {
  init: function() {
    this.jsonInit({
      "message0": "locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_guildlocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        }
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "output_string"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_deferReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "defer reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_reply'] = {
  init: function() {
    this.jsonInit({
      "message0": "reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_fetchReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch reply of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_editReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_deleteReply'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete reply of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_followUp'] = {
  init: function() {
    this.jsonInit({
      "message0": "follow up of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_inGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_inCachedGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in cachedguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_inRawGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in rawguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isApplicationCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is applicationcommand of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is command of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is contextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isUserContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is usercontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isMessageContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isAutocomplete'] = {
  init: function() {
    this.jsonInit({
      "message0": "is autocomplete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecomponent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isButton'] = {
  init: function() {
    this.jsonInit({
      "message0": "is button of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagecontextmenuinteraction_isSelectMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is selectmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGECONTEXTMENUINTERACTION"
        },
      ],
      "category": Blockly.Categories.messagecontextmenuinteraction,
      "extensions": ["colours_messagecontextmenuinteraction", "shape_statement"]
    });
  }
};
