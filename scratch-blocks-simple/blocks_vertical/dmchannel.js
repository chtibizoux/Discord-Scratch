'use strict';

goog.provide('Blockly.Blocks.dmchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['dmchannel_messages'] = {
  init: function() {
    this.jsonInit({
      "message0": "messages of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_recipient'] = {
  init: function() {
    this.jsonInit({
      "message0": "recipient of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_lastMessageId'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessageId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_lastPinTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_lastMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastMessage of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_lastPinAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "lastPinAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        }
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "output_string"]
    });
  }
};

Blockly.Blocks['dmchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_sendTyping'] = {
  init: function() {
    this.jsonInit({
      "message0": "sendTyping of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_createMessageCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "createMessageCollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_awaitMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "awaitMessages of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_createMessageComponentCollector'] = {
  init: function() {
    this.jsonInit({
      "message0": "createMessageComponentCollector of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_awaitMessageComponent'] = {
  init: function() {
    this.jsonInit({
      "message0": "awaitMessageComponent of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "isText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "isVoice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};

Blockly.Blocks['dmchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "isThread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "DMCHANNEL"
        },
      ],
      "category": Blockly.Categories.dmchannel,
      "extensions": ["colours_dmchannel", "shape_statement"]
    });
  }
};
