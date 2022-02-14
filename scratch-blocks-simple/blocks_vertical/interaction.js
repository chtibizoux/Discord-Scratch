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
Blockly.Blocks['interaction_applicationId'] = {
  init: function() {
    this.jsonInit({
      "message0": "applicationId of %1",
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
Blockly.Blocks['interaction_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
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
Blockly.Blocks['interaction_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
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
Blockly.Blocks['interaction_memberPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "memberPermissions of %1",
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
Blockly.Blocks['interaction_guildLocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildLocale of %1",
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
Blockly.Blocks['interaction_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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
Blockly.Blocks['interaction_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
      "message0": "inGuild of %1",
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
      "message0": "inCachedGuild of %1",
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
      "message0": "inRawGuild of %1",
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
      "message0": "isApplicationCommand of %1",
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
      "message0": "isCommand of %1",
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
      "message0": "isContextMenu of %1",
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
      "message0": "isUserContextMenu of %1",
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
      "message0": "isMessageContextMenu of %1",
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
      "message0": "isAutocomplete of %1",
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
      "message0": "isMessageComponent of %1",
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
      "message0": "isButton of %1",
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
      "message0": "isSelectMenu of %1",
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