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

Blockly.Blocks['dmchannel_lastmessageid'] = {
  init: function() {
    this.jsonInit({
      "message0": "last messageid of %1",
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

Blockly.Blocks['dmchannel_lastpintimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pintimestamp of %1",
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

Blockly.Blocks['dmchannel_lastmessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "last message of %1",
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

Blockly.Blocks['dmchannel_lastpinat'] = {
  init: function() {
    this.jsonInit({
      "message0": "last pinat of %1",
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

Blockly.Blocks['dmchannel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
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

Blockly.Blocks['dmchannel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
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
      "message0": "to string of %1",
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
      "message0": "send typing of %1",
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
      "message0": "create messagecollector of %1 options: %2",
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
      "message0": "await messages of %1 options: %2",
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
      "message0": "create messagecomponentcollector of %1 options: %2",
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
      "message0": "await messagecomponent of %1 options: %2",
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
      "message0": "is text of %1",
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
      "message0": "is voice of %1",
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
      "message0": "is thread of %1",
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
