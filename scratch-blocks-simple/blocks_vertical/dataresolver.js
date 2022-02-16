'use strict';

goog.provide('Blockly.Blocks.dataresolver');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['dataresolver_resolveCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve code of %1 data: %2 regex: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "REGEX"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveInviteCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve invitecode of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveGuildTemplateCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve guildtemplatecode of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve image of %1 image: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "IMAGE"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveBase64'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve base64 of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveFile'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve file of %1 resource: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "RESOURCE"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['dataresolver_resolveFileAsBuffer'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve fileasbuffer of %1 resource: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "DATARESOLVER"
        },
        {
          "type": "input_value",
          "name": "RESOURCE"
        },
      ],
      "category": Blockly.Categories.dataresolver,
      "extensions": ["colours_dataresolver", "shape_statement"]
    });
  }
};
