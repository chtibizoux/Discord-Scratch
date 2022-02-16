'use strict';

goog.provide('Blockly.Blocks.newschannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['newschannel_messages'] = {
  init: function() {
    this.jsonInit({
      "message0": "messages of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_threads'] = {
  init: function() {
    this.jsonInit({
      "message0": "threads of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_nsfw'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfw of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_lastmessageid'] = {
  init: function() {
    this.jsonInit({
      "message0": "last messageid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_lastpintimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pintimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_defaultautoarchiveduration'] = {
  init: function() {
    this.jsonInit({
      "message0": "default autoarchiveduration of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_lastmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "last message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_lastpinat'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pinat of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_permissionoverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permission overwrites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_rawposition'] = {
  init: function() {
    this.jsonInit({
      "message0": "raw position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_permissionslocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_position'] = {
  init: function() {
    this.jsonInit({
      "message0": "position of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        }
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "output_string"]
    });
  }
};

Blockly.Blocks['newschannel_addFollower'] = {
  init: function() {
    this.jsonInit({
      "message0": "add follower of %1 channel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setDefaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "set defaultautoarchiveduration of %1 defaultAutoArchiveDuration: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setNSFW'] = {
  init: function() {
    this.jsonInit({
      "message0": "set nsfw of %1 nsfw: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setType'] = {
  init: function() {
    this.jsonInit({
      "message0": "set type of %1 type: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_fetchWebhooks'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch webhooks of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_createWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "create webhook of %1 name: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setTopic'] = {
  init: function() {
    this.jsonInit({
      "message0": "set topic of %1 topic: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_createInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "create invite of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_fetchInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch invites of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_sendTyping'] = {
  init: function() {
    this.jsonInit({
      "message0": "send typing of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_createMessageCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_awaitMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messages of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecomponentcollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messagecomponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_bulkDelete'] = {
  init: function() {
    this.jsonInit({
      "message0": "bulk delete of %1 messages: %2 filterOld: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_lockPermissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "lock permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setParent'] = {
  init: function() {
    this.jsonInit({
      "message0": "set parent of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_setPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "set position of %1 position: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
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
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_clone'] = {
  init: function() {
    this.jsonInit({
      "message0": "clone of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['newschannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "NEWSCHANNEL"
        },
      ],
      "category": Blockly.Categories.newschannel,
      "extensions": ["colours_newschannel", "shape_statement"]
    });
  }
};
