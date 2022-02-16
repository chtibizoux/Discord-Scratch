'use strict';

goog.provide('Blockly.Blocks.intents');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['intents_bitfield'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitfield of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        }
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "output_string"]
    });
  }
};

Blockly.Blocks['intents_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": " flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        }
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "output_string"]
    });
  }
};

Blockly.Blocks['intents_any'] = {
  init: function() {
    this.jsonInit({
      "message0": "any of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_missing'] = {
  init: function() {
    this.jsonInit({
      "message0": "missing of %1 bits: %2 hasParams: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_freeze'] = {
  init: function() {
    this.jsonInit({
      "message0": "freeze of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_serialize'] = {
  init: function() {
    this.jsonInit({
      "message0": "serialize of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};

Blockly.Blocks['intents_toArray'] = {
  init: function() {
    this.jsonInit({
      "message0": "to array of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTENTS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.intents,
      "extensions": ["colours_intents", "shape_statement"]
    });
  }
};
