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

Blockly.Blocks['channel_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
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

Blockly.Blocks['channel_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
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
      "message0": "to string of %1",
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
      "message0": "is text of %1",
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
      "message0": "is voice of %1",
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
      "message0": "is thread of %1",
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
