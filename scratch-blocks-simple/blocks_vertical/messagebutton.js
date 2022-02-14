'use strict';

goog.provide('Blockly.Blocks.messagebutton');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagebutton_label'] = {
  init: function() {
    this.jsonInit({
      "message0": "label of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_customId'] = {
  init: function() {
    this.jsonInit({
      "message0": "customId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_style'] = {
  init: function() {
    this.jsonInit({
      "message0": "style of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_emoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "emoji of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_disabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "disabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        }
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "output_string"]
    });
  }
};

Blockly.Blocks['messagebutton_setCustomId'] = {
  init: function() {
    this.jsonInit({
      "message0": "setCustomId of %1 customId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "CUSTOMID"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_setDisabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "setDisabled of %1 disabled: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "DISABLED"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_setEmoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "setEmoji of %1 emoji: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "EMOJI"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_setLabel'] = {
  init: function() {
    this.jsonInit({
      "message0": "setLabel of %1 label: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "LABEL"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_setStyle'] = {
  init: function() {
    this.jsonInit({
      "message0": "setStyle of %1 style: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "STYLE"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_setURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "setURL of %1 url: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
        {
          "type": "input_value",
          "name": "URL"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagebutton_toJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": "toJSON of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEBUTTON"
        },
      ],
      "category": Blockly.Categories.messagebutton,
      "extensions": ["colours_messagebutton", "shape_statement"]
    });
  }
};
