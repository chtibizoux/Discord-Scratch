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
Blockly.Blocks['newschannel_lastMessageId'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessageId of %1",
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
Blockly.Blocks['newschannel_lastPinTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinTimestamp of %1",
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
Blockly.Blocks['newschannel_defaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultAutoArchiveDuration of %1",
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
Blockly.Blocks['newschannel_lastMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessage of %1",
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
Blockly.Blocks['newschannel_lastPinAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinAt of %1",
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
Blockly.Blocks['newschannel_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
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
Blockly.Blocks['newschannel_permissionOverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionOverwrites of %1",
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
Blockly.Blocks['newschannel_rawPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "rawPosition of %1",
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
Blockly.Blocks['newschannel_parentId'] = {
  init: function() {
    this.jsonInit({
      "message0": "parentId of %1",
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
Blockly.Blocks['newschannel_permissionsLocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsLocked of %1",
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
Blockly.Blocks['newschannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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
Blockly.Blocks['newschannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
      "message0": "addFollower of %1 channel: %2 reason: %3",
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
      "message0": "setDefaultAutoArchiveDuration of %1 defaultAutoArchiveDuration: %2 reason: %3",
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
      "message0": "setNSFW of %1 nsfw: %2 reason: %3",
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
      "message0": "setType of %1 type: %2 reason: %3",
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
      "message0": "fetchWebhooks of %1",
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
      "message0": "createWebhook of %1 name: %2 options: %3",
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
      "message0": "setTopic of %1 topic: %2 reason: %3",
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
      "message0": "createInvite of %1 options: %2",
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
      "message0": "fetchInvites of %1 cache: %2",
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
      "message0": "sendTyping of %1",
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
      "message0": "createMessageCollector of %1 options: %2",
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
      "message0": "awaitMessages of %1 options: %2",
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
      "message0": "createMessageComponentCollector of %1 options: %2",
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
      "message0": "awaitMessageComponent of %1 options: %2",
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
      "message0": "bulkDelete of %1 messages: %2 filterOld: %3",
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
      "message0": "permissionsFor of %1 memberOrRole: %2 checkAdmin: %3",
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
      "message0": "lockPermissions of %1",
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
      "message0": "setName of %1 name: %2 reason: %3",
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
      "message0": "setParent of %1 channel: %2 options: %3",
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
      "message0": "setPosition of %1 position: %2 options: %3",
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
      "message0": "toString of %1",
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
      "message0": "isText of %1",
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
      "message0": "isVoice of %1",
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
      "message0": "isThread of %1",
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