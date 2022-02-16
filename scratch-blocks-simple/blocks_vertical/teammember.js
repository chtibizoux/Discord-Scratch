'use strict';

goog.provide('Blockly.Blocks.teammember');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['teammember_team'] = {
  init: function() {
    this.jsonInit({
      "message0": "team of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_membershipstate'] = {
  init: function() {
    this.jsonInit({
      "message0": "membership state of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        }
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "output_string"]
    });
  }
};

Blockly.Blocks['teammember_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAMMEMBER"
        },
      ],
      "category": Blockly.Categories.teammember,
      "extensions": ["colours_teammember", "shape_statement"]
    });
  }
};
