'use strict';

goog.provide('Blockly.Blocks.messageselectmenu');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messageselectmenu_customid'] = {
  init: function() {
    this.jsonInit({
      "message0": "custom id of %1",
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

Blockly.Blocks['messageselectmenu_minvalues'] = {
  init: function() {
    this.jsonInit({
      "message0": "min values of %1",
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

Blockly.Blocks['messageselectmenu_maxvalues'] = {
  init: function() {
    this.jsonInit({
      "message0": "max values of %1",
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
      "message0": "set customid of %1 customId: %2",
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
      "message0": "set disabled of %1 disabled: %2",
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
      "message0": "set maxvalues of %1 maxValues: %2",
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
      "message0": "set minvalues of %1 minValues: %2",
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
      "message0": "set placeholder of %1 placeholder: %2",
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
      "message0": "add options of %1 options: %2",
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
      "message0": "set options of %1 options: %2",
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
      "message0": "splice options of %1 index: %2 deleteCount: %3 options: %4",
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
      "message0": "to json of %1",
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
      "message0": "normalize option of %1 option: %2",
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
      "message0": "normalize options of %1 options: %2",
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
