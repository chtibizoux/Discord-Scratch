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

Blockly.Blocks['messagepayload_iswebhook'] = {
  init: function() {
    this.jsonInit({
      "message0": "is webhook of %1",
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

Blockly.Blocks['messagepayload_isuser'] = {
  init: function() {
    this.jsonInit({
      "message0": "is user of %1",
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

Blockly.Blocks['messagepayload_ismessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "is message of %1",
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

Blockly.Blocks['messagepayload_ismessagemanager'] = {
  init: function() {
    this.jsonInit({
      "message0": "is messagemanager of %1",
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

Blockly.Blocks['messagepayload_isinteraction'] = {
  init: function() {
    this.jsonInit({
      "message0": "is interaction of %1",
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
      "message0": "make content of %1",
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
      "message0": "resolve data of %1",
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
      "message0": "resolve files of %1",
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
      "message0": "resolve file of %1 fileLike: %2",
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
