'use strict';

goog.provide('Blockly.Blocks.channel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['channel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        }
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "output_string"]
    });
  }
};
Blockly.Blocks['channel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};
Blockly.Blocks['channel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};
Blockly.Blocks['channel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};
Blockly.Blocks['channel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "isText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};
Blockly.Blocks['channel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "isVoice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};
Blockly.Blocks['channel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "isThread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.channel,
      "extensions": ["colours_channel", "shape_statement"]
    });
  }
};