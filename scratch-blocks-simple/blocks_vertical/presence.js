'use strict';

goog.provide('Blockly.Blocks.presence');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['presence_userid'] = {
  init: function() {
    this.jsonInit({
      "message0": "user id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_status'] = {
  init: function() {
    this.jsonInit({
      "message0": "status of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_activities'] = {
  init: function() {
    this.jsonInit({
      "message0": "activities of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_clientstatus'] = {
  init: function() {
    this.jsonInit({
      "message0": "client status of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        }
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "output_string"]
    });
  }
};

Blockly.Blocks['presence_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 presence: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
      ],
      "category": Blockly.Categories.presence,
      "extensions": ["colours_presence", "shape_statement"]
    });
  }
};
