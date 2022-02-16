'use strict';

goog.provide('Blockly.Blocks.baseguildtextchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['baseguildtextchannel_messages'] = {
  init: function() {
    this.jsonInit({
      "message0": "messages of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_threads'] = {
  init: function() {
    this.jsonInit({
      "message0": "threads of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_nsfw'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfw of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_lastmessageid'] = {
  init: function() {
    this.jsonInit({
      "message0": "last messageid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_lastpintimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pintimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_defaultautoarchiveduration'] = {
  init: function() {
    this.jsonInit({
      "message0": "default autoarchiveduration of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_lastmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "last message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_lastpinat'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pinat of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "output_string"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setDefaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "set defaultautoarchiveduration of %1 defaultAutoArchiveDuration: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "DEFAULTAUTOARCHIVEDURATION"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setNSFW'] = {
  init: function() {
    this.jsonInit({
      "message0": "set nsfw of %1 nsfw: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "NSFW"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setType'] = {
  init: function() {
    this.jsonInit({
      "message0": "set type of %1 type: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "TYPE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_fetchWebhooks'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch webhooks of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "create webhook of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setTopic'] = {
  init: function() {
    this.jsonInit({
      "message0": "set topic of %1 topic: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_sendTyping'] = {
  init: function() {
    this.jsonInit({
      "message0": "send typing of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createMessageCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_awaitMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messages of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecomponentcollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messagecomponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_bulkDelete'] = {
  init: function() {
    this.jsonInit({
      "message0": "bulk delete of %1 messages: %2 filterOld: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "MESSAGES"
        },
        {
          "type": "input_value",
          "name": "FILTEROLD"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
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
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['baseguildtextchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILDTEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.baseguildtextchannel,
      "extensions": ["colours_baseguildtextchannel", "shape_statement"]
    });
  }
};
