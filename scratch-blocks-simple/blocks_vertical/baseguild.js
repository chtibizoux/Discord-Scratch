'use strict';

goog.provide('Blockly.Blocks.baseguild');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['baseguild_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_features'] = {
  init: function() {
    this.jsonInit({
      "message0": "features of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_nameAcronym'] = {
  init: function() {
    this.jsonInit({
      "message0": "nameAcronym of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_partnered'] = {
  init: function() {
    this.jsonInit({
      "message0": "partnered of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_verified'] = {
  init: function() {
    this.jsonInit({
      "message0": "verified of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        }
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "output_string"]
    });
  }
};
Blockly.Blocks['baseguild_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "iconURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "shape_statement"]
    });
  }
};
Blockly.Blocks['baseguild_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        },
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "shape_statement"]
    });
  }
};
Blockly.Blocks['baseguild_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASEGUILD"
        },
      ],
      "category": Blockly.Categories.baseguild,
      "extensions": ["colours_baseguild", "shape_statement"]
    });
  }
};