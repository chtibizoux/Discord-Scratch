'use strict';

goog.provide('Blockly.Blocks.voiceregion');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['voiceregion_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};

Blockly.Blocks['voiceregion_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};

Blockly.Blocks['voiceregion_vip'] = {
  init: function() {
    this.jsonInit({
      "message0": "vip of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};

Blockly.Blocks['voiceregion_deprecated'] = {
  init: function() {
    this.jsonInit({
      "message0": "deprecated of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};

Blockly.Blocks['voiceregion_optimal'] = {
  init: function() {
    this.jsonInit({
      "message0": "optimal of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};

Blockly.Blocks['voiceregion_custom'] = {
  init: function() {
    this.jsonInit({
      "message0": "custom of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICEREGION"
        }
      ],
      "category": Blockly.Categories.voiceregion,
      "extensions": ["colours_voiceregion", "output_string"]
    });
  }
};
