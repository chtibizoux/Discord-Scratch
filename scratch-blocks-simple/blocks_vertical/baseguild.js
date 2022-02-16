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

Blockly.Blocks['baseguild_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
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

Blockly.Blocks['baseguild_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
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

Blockly.Blocks['baseguild_nameacronym'] = {
  init: function() {
    this.jsonInit({
      "message0": "name acronym of %1",
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
      "message0": "icon url of %1 options: %2",
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
      "message0": "to string of %1",
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
