'use strict';

goog.provide('Blockly.Blocks.threadmember');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['threadmember_thread'] = {
  init: function() {
    this.jsonInit({
      "message0": "thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_joinedtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "joined timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_guildmember'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_joinedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "joined at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_manageable'] = {
  init: function() {
    this.jsonInit({
      "message0": "manageable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        }
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "output_string"]
    });
  }
};

Blockly.Blocks['threadmember_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadmember,
      "extensions": ["colours_threadmember", "shape_statement"]
    });
  }
};
