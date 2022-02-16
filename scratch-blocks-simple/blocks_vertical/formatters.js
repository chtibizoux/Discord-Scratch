'use strict';

goog.provide('Blockly.Blocks.formatters');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['formatters_timestampstyles'] = {
  init: function() {
    this.jsonInit({
      "message0": " timestampstyles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        }
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "output_string"]
    });
  }
};

Blockly.Blocks['formatters_blockQuote'] = {
  init: function() {
    this.jsonInit({
      "message0": "block quote of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_bold'] = {
  init: function() {
    this.jsonInit({
      "message0": "bold of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_channelMention'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel mention of %1 channelId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CHANNELID"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_codeBlock'] = {
  init: function() {
    this.jsonInit({
      "message0": "code block of %1 contentOrLanguage: %2 content: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENTORLANGUAGE"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_formatEmoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "format emoji of %1 emojiId: %2 animated: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "EMOJIID"
        },
        {
          "type": "input_value",
          "name": "ANIMATED"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_hideLinkEmbed'] = {
  init: function() {
    this.jsonInit({
      "message0": "hide linkembed of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_hyperlink'] = {
  init: function() {
    this.jsonInit({
      "message0": "hyperlink of %1 content: %2 url: %3 title: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
        {
          "type": "input_value",
          "name": "URL"
        },
        {
          "type": "input_value",
          "name": "TITLE"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_inlineCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "inline code of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_italic'] = {
  init: function() {
    this.jsonInit({
      "message0": "italic of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_memberNicknameMention'] = {
  init: function() {
    this.jsonInit({
      "message0": "member nicknamemention of %1 memberId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "MEMBERID"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_quote'] = {
  init: function() {
    this.jsonInit({
      "message0": "quote of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_roleMention'] = {
  init: function() {
    this.jsonInit({
      "message0": "role mention of %1 roleId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "ROLEID"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_spoiler'] = {
  init: function() {
    this.jsonInit({
      "message0": "spoiler of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_strikethrough'] = {
  init: function() {
    this.jsonInit({
      "message0": "strikethrough of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_time'] = {
  init: function() {
    this.jsonInit({
      "message0": "time of %1 date: %2 style: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "DATE"
        },
        {
          "type": "input_value",
          "name": "STYLE"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_underscore'] = {
  init: function() {
    this.jsonInit({
      "message0": "underscore of %1 content: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "CONTENT"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};

Blockly.Blocks['formatters_userMention'] = {
  init: function() {
    this.jsonInit({
      "message0": "user mention of %1 userId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "FORMATTERS"
        },
        {
          "type": "input_value",
          "name": "USERID"
        },
      ],
      "category": Blockly.Categories.formatters,
      "extensions": ["colours_formatters", "shape_statement"]
    });
  }
};
