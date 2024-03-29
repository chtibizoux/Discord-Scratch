'use strict';

goog.provide('Blockly.Blocks.webhook');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['webhook_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_avatar'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_owner'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_sourceguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "source guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_sourcechannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "source channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        }
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "output_string"]
    });
  }
};

Blockly.Blocks['webhook_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_sendSlackMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "send slackmessage of %1 body: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "BODY"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_fetchMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch message of %1 message: %2 cacheOrOptions: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "CACHEOROPTIONS"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_editMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit message of %1 message: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_deleteMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete message of %1 message: %2 threadId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "THREADID"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_avatarURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "avatar url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_isChannelFollower'] = {
  init: function() {
    this.jsonInit({
      "message0": "is channelfollower of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};

Blockly.Blocks['webhook_isIncoming'] = {
  init: function() {
    this.jsonInit({
      "message0": "is incoming of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOK"
        },
      ],
      "category": Blockly.Categories.webhook,
      "extensions": ["colours_webhook", "shape_statement"]
    });
  }
};
