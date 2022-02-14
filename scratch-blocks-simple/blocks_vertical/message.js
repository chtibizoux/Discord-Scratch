'use strict';

goog.provide('Blockly.Blocks.message');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['message_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_system'] = {
  init: function() {
    this.jsonInit({
      "message0": "system of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_content'] = {
  init: function() {
    this.jsonInit({
      "message0": "content of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_author'] = {
  init: function() {
    this.jsonInit({
      "message0": "author of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_pinned'] = {
  init: function() {
    this.jsonInit({
      "message0": "pinned of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_tts'] = {
  init: function() {
    this.jsonInit({
      "message0": "tts of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_nonce'] = {
  init: function() {
    this.jsonInit({
      "message0": "nonce of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_embeds'] = {
  init: function() {
    this.jsonInit({
      "message0": "embeds of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_components'] = {
  init: function() {
    this.jsonInit({
      "message0": "components of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_attachments'] = {
  init: function() {
    this.jsonInit({
      "message0": "attachments of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_stickers'] = {
  init: function() {
    this.jsonInit({
      "message0": "stickers of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_editedTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "editedTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reactions'] = {
  init: function() {
    this.jsonInit({
      "message0": "reactions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_mentions'] = {
  init: function() {
    this.jsonInit({
      "message0": "mentions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_webhookId'] = {
  init: function() {
    this.jsonInit({
      "message0": "webhookId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_groupActivityApplication'] = {
  init: function() {
    this.jsonInit({
      "message0": "groupActivityApplication of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_applicationId'] = {
  init: function() {
    this.jsonInit({
      "message0": "applicationId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_activity'] = {
  init: function() {
    this.jsonInit({
      "message0": "activity of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reference'] = {
  init: function() {
    this.jsonInit({
      "message0": "reference of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_interaction'] = {
  init: function() {
    this.jsonInit({
      "message0": "interaction of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_editedAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "editedAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_hasThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "hasThread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_thread'] = {
  init: function() {
    this.jsonInit({
      "message0": "thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_cleanContent'] = {
  init: function() {
    this.jsonInit({
      "message0": "cleanContent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_editable'] = {
  init: function() {
    this.jsonInit({
      "message0": "editable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_pinnable'] = {
  init: function() {
    this.jsonInit({
      "message0": "pinnable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_crosspostable'] = {
  init: function() {
    this.jsonInit({
      "message0": "crosspostable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_createReactionCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "createReactionCollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_awaitReactions'] = {
  init: function() {
    this.jsonInit({
      "message0": "awaitReactions of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "createMessageComponentCollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "awaitMessageComponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_fetchReference'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchReference of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_crosspost'] = {
  init: function() {
    this.jsonInit({
      "message0": "crosspost of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_pin'] = {
  init: function() {
    this.jsonInit({
      "message0": "pin of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_unpin'] = {
  init: function() {
    this.jsonInit({
      "message0": "unpin of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_react'] = {
  init: function() {
    this.jsonInit({
      "message0": "react of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_reply'] = {
  init: function() {
    this.jsonInit({
      "message0": "reply of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_startThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "startThread of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_fetchWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchWebhook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_suppressEmbeds'] = {
  init: function() {
    this.jsonInit({
      "message0": "suppressEmbeds of %1 suppress: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "SUPPRESS"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_removeAttachments'] = {
  init: function() {
    this.jsonInit({
      "message0": "removeAttachments of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_resolveComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveComponent of %1 customId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "CUSTOMID"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 message: %2 rawData: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "RAWDATA"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_inGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "inGuild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};
