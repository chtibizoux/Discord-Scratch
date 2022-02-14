'use strict';

goog.provide('Blockly.Blocks.threadmembermanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['threadmembermanager_thread'] = {
  init: function() {
    this.jsonInit({
      "message0": "thread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['threadmembermanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['threadmembermanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['threadmembermanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 member: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['threadmembermanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 member: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['threadmembermanager_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 member: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['threadmembermanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 id: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['threadmembermanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 member: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadmembermanager,
      "extensions": ["colours_threadmembermanager", "shape_statement"]
    });
  }
};