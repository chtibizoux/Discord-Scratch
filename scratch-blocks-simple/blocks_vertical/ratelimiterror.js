'use strict';

goog.provide('Blockly.Blocks.ratelimiterror');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['ratelimiterror_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_timeout'] = {
  init: function() {
    this.jsonInit({
      "message0": "timeout of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_method'] = {
  init: function() {
    this.jsonInit({
      "message0": "method of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_path'] = {
  init: function() {
    this.jsonInit({
      "message0": "path of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_route'] = {
  init: function() {
    this.jsonInit({
      "message0": "route of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_global'] = {
  init: function() {
    this.jsonInit({
      "message0": "global of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};
Blockly.Blocks['ratelimiterror_limit'] = {
  init: function() {
    this.jsonInit({
      "message0": "limit of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "RATELIMITERROR"
        }
      ],
      "category": Blockly.Categories.ratelimiterror,
      "extensions": ["colours_ratelimiterror", "output_string"]
    });
  }
};