'use strict';

goog.provide('Blockly.Blocks.activityflags');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['activityflags_bitfield'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitfield of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        }
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "output_string"]
    });
  }
};

Blockly.Blocks['activityflags_FLAGS'] = {
  init: function() {
    this.jsonInit({
      "message0": "FLAGS of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        }
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "output_string"]
    });
  }
};

Blockly.Blocks['activityflags_any'] = {
  init: function() {
    this.jsonInit({
      "message0": "any of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_missing'] = {
  init: function() {
    this.jsonInit({
      "message0": "missing of %1 bits: %2 hasParams: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
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
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_freeze'] = {
  init: function() {
    this.jsonInit({
      "message0": "freeze of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_serialize'] = {
  init: function() {
    this.jsonInit({
      "message0": "serialize of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['activityflags_toArray'] = {
  init: function() {
    this.jsonInit({
      "message0": "toArray of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ACTIVITYFLAGS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.activityflags,
      "extensions": ["colours_activityflags", "shape_statement"]
    });
  }
};
