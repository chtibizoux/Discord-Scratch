'use strict';

goog.provide('Blockly.Blocks.richpresenceassets');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['richpresenceassets_largetext'] = {
  init: function() {
    this.jsonInit({
      "message0": "large text of %1",
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

Blockly.Blocks['richpresenceassets_smalltext'] = {
  init: function() {
    this.jsonInit({
      "message0": "small text of %1",
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

Blockly.Blocks['richpresenceassets_largeimage'] = {
  init: function() {
    this.jsonInit({
      "message0": "large image of %1",
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

Blockly.Blocks['richpresenceassets_smallimage'] = {
  init: function() {
    this.jsonInit({
      "message0": "small image of %1",
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
      "message0": "small imageurl of %1 options: %2",
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
      "message0": "large imageurl of %1 options: %2",
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
