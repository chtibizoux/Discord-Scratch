'use strict';

goog.provide('Blockly.Blocks.richpresenceassets');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['richpresenceassets_largeText'] = {
  init: function() {
    this.jsonInit({
      "message0": "largeText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        }
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "output_string"]
    });
  }
};
Blockly.Blocks['richpresenceassets_smallText'] = {
  init: function() {
    this.jsonInit({
      "message0": "smallText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        }
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "output_string"]
    });
  }
};
Blockly.Blocks['richpresenceassets_largeImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "largeImage of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        }
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "output_string"]
    });
  }
};
Blockly.Blocks['richpresenceassets_smallImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "smallImage of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        }
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "output_string"]
    });
  }
};
Blockly.Blocks['richpresenceassets_smallImageURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "smallImageURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "shape_statement"]
    });
  }
};
Blockly.Blocks['richpresenceassets_largeImageURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "largeImageURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "RICHPRESENCEASSETS"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.richpresenceassets,
      "extensions": ["colours_richpresenceassets", "shape_statement"]
    });
  }
};