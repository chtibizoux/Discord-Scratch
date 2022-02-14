'use strict';

goog.provide('Blockly.Blocks.threadmemberflags');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['threadmemberflags_bitfield'] = {
  init: function() {
    this.jsonInit({
      "message0": "bitfield of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        }
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "output_string"]
    });
  }
};

Blockly.Blocks['threadmemberflags_FLAGS'] = {
  init: function() {
    this.jsonInit({
      "message0": "FLAGS of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        }
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "output_string"]
    });
  }
};

Blockly.Blocks['threadmemberflags_any'] = {
  init: function() {
    this.jsonInit({
      "message0": "any of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 bit: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "BIT"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_missing'] = {
  init: function() {
    this.jsonInit({
      "message0": "missing of %1 bits: %2 hasParams: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
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
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_freeze'] = {
  init: function() {
    this.jsonInit({
      "message0": "freeze of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 bits: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "BITS"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_serialize'] = {
  init: function() {
    this.jsonInit({
      "message0": "serialize of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmemberflags_toArray'] = {
  init: function() {
    this.jsonInit({
      "message0": "toArray of %1 hasParams: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERFLAGS"
        },
        {
          "type": "input_value",
          "name": "HASPARAMS"
        },
      ],
      "category": Blockly.Categories.threadmemberflags,
      "extensions": ["colours_threadmemberflags", "shape_statement"]
    });
  }
};
