'use strict';

goog.provide('Blockly.Blocks.application');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['application_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        }
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "output_string"]
    });
  }
};

Blockly.Blocks['application_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "shape_statement"]
    });
  }
};

Blockly.Blocks['application_coverURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "shape_statement"]
    });
  }
};

Blockly.Blocks['application_fetchAssets'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch assets of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        },
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "shape_statement"]
    });
  }
};

Blockly.Blocks['application_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATION"
        },
      ],
      "category": Blockly.Categories.application,
      "extensions": ["colours_application", "shape_statement"]
    });
  }
};
