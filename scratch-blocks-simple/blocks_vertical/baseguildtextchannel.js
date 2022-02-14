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
Blockly.Blocks['baseguildtextchannel_lastMessageId'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessageId of %1",
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
Blockly.Blocks['baseguildtextchannel_lastPinTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinTimestamp of %1",
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
Blockly.Blocks['baseguildtextchannel_defaultAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultAutoArchiveDuration of %1",
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
Blockly.Blocks['baseguildtextchannel_lastMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessage of %1",
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
Blockly.Blocks['baseguildtextchannel_lastPinAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinAt of %1",
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
Blockly.Blocks['baseguildtextchannel_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
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
Blockly.Blocks['baseguildtextchannel_permissionOverwrites'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionOverwrites of %1",
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
Blockly.Blocks['baseguildtextchannel_rawPosition'] = {
  init: function() {
    this.jsonInit({
      "message0": "rawPosition of %1",
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
Blockly.Blocks['baseguildtextchannel_parentId'] = {
  init: function() {
    this.jsonInit({
      "message0": "parentId of %1",
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
Blockly.Blocks['baseguildtextchannel_permissionsLocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissionsLocked of %1",
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
Blockly.Blocks['baseguildtextchannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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
Blockly.Blocks['baseguildtextchannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
      "message0": "setDefaultAutoArchiveDuration of %1 defaultAutoArchiveDuration: %2 reason: %3",
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
      "message0": "setNSFW of %1 nsfw: %2 reason: %3",
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
      "message0": "setType of %1 type: %2 reason: %3",
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
      "message0": "fetchWebhooks of %1",
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
      "message0": "createWebhook of %1 name: %2 options: %3",
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
      "message0": "setTopic of %1 topic: %2 reason: %3",
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
      "message0": "createInvite of %1 options: %2",
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
      "message0": "fetchInvites of %1 cache: %2",
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
      "message0": "sendTyping of %1",
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
      "message0": "createMessageCollector of %1 options: %2",
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
      "message0": "awaitMessages of %1 options: %2",
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
      "message0": "createMessageComponentCollector of %1 options: %2",
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
      "message0": "awaitMessageComponent of %1 options: %2",
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
      "message0": "bulkDelete of %1 messages: %2 filterOld: %3",
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
      "message0": "permissionsFor of %1 memberOrRole: %2 checkAdmin: %3",
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
      "message0": "lockPermissions of %1",
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
      "message0": "setName of %1 name: %2 reason: %3",
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
      "message0": "setParent of %1 channel: %2 options: %3",
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
      "message0": "setPosition of %1 position: %2 options: %3",
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
      "message0": "toString of %1",
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
      "message0": "isText of %1",
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
      "message0": "isVoice of %1",
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
      "message0": "isThread of %1",
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