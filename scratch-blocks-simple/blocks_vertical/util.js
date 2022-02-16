'use strict';

goog.provide('Blockly.Blocks.util');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['util_flatten'] = {
  init: function() {
    this.jsonInit({
      "message0": "flatten of %1 obj: %2 props: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "OBJ"
        },
        {
          "type": "input_value",
          "name": "PROPS"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_splitMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "split message of %1 text: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeMarkdown'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape markdown of %1 text: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeCodeBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape codeblock of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeInlineCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape inlinecode of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeItalic'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape italic of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeBold'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape bold of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeUnderline'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape underline of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeStrikethrough'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape strikethrough of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_escapeSpoiler'] = {
  init: function() {
    this.jsonInit({
      "message0": "escape spoiler of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_fetchRecommendedShards'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch recommendedshards of %1 token: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TOKEN"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_verifyString'] = {
  init: function() {
    this.jsonInit({
      "message0": "verify string of %1 data: %2 error: %3 errorMessage: %4 allowEmpty: %5",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "ERROR"
        },
        {
          "type": "input_value",
          "name": "ERRORMESSAGE"
        },
        {
          "type": "input_value",
          "name": "ALLOWEMPTY"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_resolveColor'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve color of %1 color: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "COLOR"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_discordSort'] = {
  init: function() {
    this.jsonInit({
      "message0": "discord sort of %1 collection: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "COLLECTION"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_cleanContent'] = {
  init: function() {
    this.jsonInit({
      "message0": "clean content of %1 str: %2 channel: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "STR"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};

Blockly.Blocks['util_cleanCodeBlockContent'] = {
  init: function() {
    this.jsonInit({
      "message0": "clean codeblockcontent of %1 text: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "UTIL"
        },
        {
          "type": "input_value",
          "name": "TEXT"
        },
      ],
      "category": Blockly.Categories.util,
      "extensions": ["colours_util", "shape_statement"]
    });
  }
};
