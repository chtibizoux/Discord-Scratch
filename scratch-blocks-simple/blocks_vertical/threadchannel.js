'use strict';

goog.provide('Blockly.Blocks.threadchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['threadchannel_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_messages'] = {
  init: function() {
    this.jsonInit({
      "message0": "messages of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_parentid'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_locked'] = {
  init: function() {
    this.jsonInit({
      "message0": "locked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_invitable'] = {
  init: function() {
    this.jsonInit({
      "message0": "invitable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_archived'] = {
  init: function() {
    this.jsonInit({
      "message0": "archived of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_autoarchiveduration'] = {
  init: function() {
    this.jsonInit({
      "message0": "auto archiveduration of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_archivetimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "archive timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_ownerid'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_lastmessageid'] = {
  init: function() {
    this.jsonInit({
      "message0": "last messageid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_lastpintimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pintimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_ratelimitperuser'] = {
  init: function() {
    this.jsonInit({
      "message0": "rate limitperuser of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_messagecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "message count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_membercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "member count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_guildmembers'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_archivedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "archived at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_parent'] = {
  init: function() {
    this.jsonInit({
      "message0": "parent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_joined'] = {
  init: function() {
    this.jsonInit({
      "message0": "joined of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_editable'] = {
  init: function() {
    this.jsonInit({
      "message0": "editable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_joinable'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_viewable'] = {
  init: function() {
    this.jsonInit({
      "message0": "viewable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_sendable'] = {
  init: function() {
    this.jsonInit({
      "message0": "sendable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_unarchivable'] = {
  init: function() {
    this.jsonInit({
      "message0": "unarchivable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_lastmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "last message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_lastpinat'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pinat of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        }
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "output_string"]
    });
  }
};

Blockly.Blocks['threadchannel_join'] = {
  init: function() {
    this.jsonInit({
      "message0": "join of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_leave'] = {
  init: function() {
    this.jsonInit({
      "message0": "leave of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_permissionsFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions for of %1 memberOrRole: %2 checkAdmin: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
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
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_fetchOwner'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch owner of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_fetchStarterMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch startermessage of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
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
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setArchived'] = {
  init: function() {
    this.jsonInit({
      "message0": "set archived of %1 archived: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "ARCHIVED"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setAutoArchiveDuration'] = {
  init: function() {
    this.jsonInit({
      "message0": "set autoarchiveduration of %1 autoArchiveDuration: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "AUTOARCHIVEDURATION"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setInvitable'] = {
  init: function() {
    this.jsonInit({
      "message0": "set invitable of %1 invitable: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "INVITABLE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setLocked'] = {
  init: function() {
    this.jsonInit({
      "message0": "set locked of %1 locked: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "LOCKED"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
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
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_setRateLimitPerUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "set ratelimitperuser of %1 rateLimitPerUser: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
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
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_sendTyping'] = {
  init: function() {
    this.jsonInit({
      "message0": "send typing of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_createMessageCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_awaitMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messages of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "create messagecomponentcollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "await messagecomponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_bulkDelete'] = {
  init: function() {
    this.jsonInit({
      "message0": "bulk delete of %1 messages: %2 filterOld: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
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
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "is text of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "is voice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "is thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADCHANNEL"
        },
      ],
      "category": Blockly.Categories.threadchannel,
      "extensions": ["colours_threadchannel", "shape_statement"]
    });
  }
};
