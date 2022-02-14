'use strict';

goog.provide('Blockly.Blocks.textchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['textchannel_rateLimitPerUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "rateLimitPerUser of %1",
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

Blockly.Blocks['textchannel_lastMessageId'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessageId of %1",
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

Blockly.Blocks['textchannel_lastPinTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinTimestamp of %1",
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

Blockly.Blocks['textchannel_defaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultAutoArchiveDuration of %1",
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

Blockly.Blocks['textchannel_lastMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessage of %1",
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

Blockly.Blocks['textchannel_lastPinAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinAt of %1",
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

Blockly.Blocks['textchannel_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
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

Blockly.Blocks['textchannel_permissionOverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionOverwrites of %1",
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

Blockly.Blocks['textchannel_rawPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "rawPosition of %1",
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

Blockly.Blocks['textchannel_parentId'] = {
  init: function() {
    this.jsonInit({
      "message0": "parentId of %1",
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

Blockly.Blocks['textchannel_permissionsLocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsLocked of %1",
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

Blockly.Blocks['textchannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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

Blockly.Blocks['textchannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
      "message0": "setRateLimitPerUser of %1 rateLimitPerUser: %2 reason: %3",
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
      "message0": "setDefaultAutoArchiveDuration of %1 defaultAutoArchiveDuration: %2 reason: %3",
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
      "message0": "setNSFW of %1 nsfw: %2 reason: %3",
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
      "message0": "setType of %1 type: %2 reason: %3",
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
      "message0": "fetchWebhooks of %1",
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
      "message0": "createWebhook of %1 name: %2 options: %3",
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
      "message0": "setTopic of %1 topic: %2 reason: %3",
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
      "message0": "createInvite of %1 options: %2",
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
      "message0": "fetchInvites of %1 cache: %2",
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
      "message0": "sendTyping of %1",
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
      "message0": "createMessageCollector of %1 options: %2",
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
      "message0": "awaitMessages of %1 options: %2",
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
      "message0": "createMessageComponentCollector of %1 options: %2",
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
      "message0": "awaitMessageComponent of %1 options: %2",
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
      "message0": "bulkDelete of %1 messages: %2 filterOld: %3",
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
      "message0": "permissionsFor of %1 memberOrRole: %2 checkAdmin: %3",
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
      "message0": "lockPermissions of %1",
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
      "message0": "setName of %1 name: %2 reason: %3",
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
      "message0": "setParent of %1 channel: %2 options: %3",
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
      "message0": "setPosition of %1 position: %2 options: %3",
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
      "message0": "toString of %1",
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
      "message0": "isText of %1",
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
      "message0": "isVoice of %1",
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
      "message0": "isThread of %1",
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
