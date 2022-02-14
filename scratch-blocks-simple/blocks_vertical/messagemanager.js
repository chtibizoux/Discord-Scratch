'use strict';

goog.provide('Blockly.Blocks.messagemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagemanager_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        }
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "output_string"]
    });
  }
};

Blockly.Blocks['messagemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        }
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "output_string"]
    });
  }
};

Blockly.Blocks['messagemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        }
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "output_string"]
    });
  }
};

Blockly.Blocks['messagemanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 message: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
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
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_fetchPinned'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchPinned of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 message: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
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
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_crosspost'] = {
  init: function() {
    this.jsonInit({
      "message0": "crosspost of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_pin'] = {
  init: function() {
    this.jsonInit({
      "message0": "pin of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_unpin'] = {
  init: function() {
    this.jsonInit({
      "message0": "unpin of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_react'] = {
  init: function() {
    this.jsonInit({
      "message0": "react of %1 message: %2 emoji: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagemanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.messagemanager,
      "extensions": ["colours_messagemanager", "shape_statement"]
    });
  }
};
