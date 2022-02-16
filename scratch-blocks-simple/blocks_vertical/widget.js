'use strict';

goog.provide('Blockly.Blocks.widget');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['widget_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_instantinvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "instant invite of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_channels'] = {
  init: function() {
    this.jsonInit({
      "message0": "channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_presencecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "presence count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        }
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "output_string"]
    });
  }
};

Blockly.Blocks['widget_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WIDGET"
        },
      ],
      "category": Blockly.Categories.widget,
      "extensions": ["colours_widget", "shape_statement"]
    });
  }
};
