'use strict';

goog.provide('Blockly.Blocks.messagepayload');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagepayload_target'] = {
  init: function() {
    this.jsonInit({
      "message0": "target of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_data'] = {
  init: function() {
    this.jsonInit({
      "message0": "data of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_files'] = {
  init: function() {
    this.jsonInit({
      "message0": "files of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_isWebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "isWebhook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_isUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "isUser of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_isMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "isMessage of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_isMessageManager'] = {
  init: function() {
    this.jsonInit({
      "message0": "isMessageManager of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_isInteraction'] = {
  init: function() {
    this.jsonInit({
      "message0": "isInteraction of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        }
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "output_string"]
    });
  }
};
Blockly.Blocks['messagepayload_makeContent'] = {
  init: function() {
    this.jsonInit({
      "message0": "makeContent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        },
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "shape_statement"]
    });
  }
};
Blockly.Blocks['messagepayload_resolveData'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveData of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        },
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "shape_statement"]
    });
  }
};
Blockly.Blocks['messagepayload_resolveFiles'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveFiles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        },
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "shape_statement"]
    });
  }
};
Blockly.Blocks['messagepayload_resolveFile'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveFile of %1 fileLike: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        },
        {
          "type": "input_value",
          "name": "FILELIKE"
        },
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "shape_statement"]
    });
  }
};
Blockly.Blocks['messagepayload_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 target: %2 options: %3 extra: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEPAYLOAD"
        },
        {
          "type": "input_value",
          "name": "TARGET"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "EXTRA"
        },
      ],
      "category": Blockly.Categories.messagepayload,
      "extensions": ["colours_messagepayload", "shape_statement"]
    });
  }
};