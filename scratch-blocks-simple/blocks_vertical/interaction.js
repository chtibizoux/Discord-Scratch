'use strict';

goog.provide('Blockly.Blocks.interaction');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['interaction_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_applicationid'] = {
  init: function() {
    this.jsonInit({
      "message0": "application id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_version'] = {
  init: function() {
    this.jsonInit({
      "message0": "version of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_memberpermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "member permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_locale'] = {
  init: function() {
    this.jsonInit({
      "message0": "locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_guildlocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        }
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "output_string"]
    });
  }
};

Blockly.Blocks['interaction_inGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_inCachedGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in cachedguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_inRawGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "in rawguild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isApplicationCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is applicationcommand of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isCommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "is command of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is contextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isUserContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is usercontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isMessageContextMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecontextmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isAutocomplete'] = {
  init: function() {
    this.jsonInit({
      "message0": "is autocomplete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagecomponent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isButton'] = {
  init: function() {
    this.jsonInit({
      "message0": "is button of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['interaction_isSelectMenu'] = {
  init: function() {
    this.jsonInit({
      "message0": "is selectmenu of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interaction,
      "extensions": ["colours_interaction", "shape_statement"]
    });
  }
};
