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

Blockly.Blocks['threadmember_joinedTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedTimestamp of %1",
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

Blockly.Blocks['threadmember_guildMember'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildMember of %1",
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

Blockly.Blocks['threadmember_joinedAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedAt of %1",
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
