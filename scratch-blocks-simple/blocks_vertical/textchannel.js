'use strict';

goog.provide('Blockly.Blocks.textchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['textchannel_ratelimitperuser'] = {
  init: function() {
    this.jsonInit({
      "message0": "rate limitperuser of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_messages'] = {
  init: function() {
    this.jsonInit({
      "message0": "messages of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_threads'] = {
  init: function() {
    this.jsonInit({
      "message0": "threads of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_nsfw'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfw of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_lastmessageid'] = {
  init: function() {
    this.jsonInit({
      "message0": "last messageid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_lastpintimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pintimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_defaultautoarchiveduration'] = {
  init: function() {
    this.jsonInit({
      "message0": "default autoarchiveduration of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_lastmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "last message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_lastpinat'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pinat of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        }
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "output_string"]
    });
  }
};

Blockly.Blocks['textchannel_setRateLimitPerUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "set ratelimitperuser of %1 rateLimitPerUser: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "RATELIMITPERUSER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setDefaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "set defaultautoarchiveduration of %1 defaultAutoArchiveDuration: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setNSFW'] = {
  init: function() {
    this.jsonInit({
      "message0": "set nsfw of %1 nsfw: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setType'] = {
  init: function() {
    this.jsonInit({
      "message0": "set type of %1 type: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_fetchWebhooks'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch webhooks of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_createWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "create webhook of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setTopic'] = {
  init: function() {
    this.jsonInit({
      "message0": "set topic of %1 topic: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_sendTyping'] = {
  init: function() {
    this.jsonInit({
      "message0": "send typing of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_createMessageCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_awaitMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messages of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecomponentcollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messagecomponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_bulkDelete'] = {
  init: function() {
    this.jsonInit({
      "message0": "bulk delete of %1 messages: %2 filterOld: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
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
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['textchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXTCHANNEL"
        },
      ],
      "category": Blockly.Categories.textchannel,
      "extensions": ["colours_textchannel", "shape_statement"]
    });
  }
};
