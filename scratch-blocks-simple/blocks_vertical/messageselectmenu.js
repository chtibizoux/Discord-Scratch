'use strict';

goog.provide('Blockly.Blocks.messageselectmenu');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messageselectmenu_customId'] = {
  init: function() {
    this.jsonInit({
      "message0": "customId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_placeholder'] = {
  init: function() {
    this.jsonInit({
      "message0": "placeholder of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_minValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "minValues of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_maxValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "maxValues of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_disabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "disabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        }
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "output_string"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setCustomId'] = {
  init: function() {
    this.jsonInit({
      "message0": "setCustomId of %1 customId: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "CUSTOMID"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setDisabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "setDisabled of %1 disabled: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "DISABLED"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setMaxValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "setMaxValues of %1 maxValues: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "MAXVALUES"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setMinValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "setMinValues of %1 minValues: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "MINVALUES"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setPlaceholder'] = {
  init: function() {
    this.jsonInit({
      "message0": "setPlaceholder of %1 placeholder: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "PLACEHOLDER"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_addOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "addOptions of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_setOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "setOptions of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_spliceOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "spliceOptions of %1 index: %2 deleteCount: %3 options: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "input_value",
          "name": "DELETECOUNT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_toJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": "toJSON of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_normalizeOption'] = {
  init: function() {
    this.jsonInit({
      "message0": "normalizeOption of %1 option: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "OPTION"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};
Blockly.Blocks['messageselectmenu_normalizeOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "normalizeOptions of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGESELECTMENU"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messageselectmenu,
      "extensions": ["colours_messageselectmenu", "shape_statement"]
    });
  }
};