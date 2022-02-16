'use strict';

goog.provide('Blockly.Blocks.threadmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['threadmanager_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "output_string"]
    });
  }
};

Blockly.Blocks['threadmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "output_string"]
    });
  }
};

Blockly.Blocks['threadmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        }
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "output_string"]
    });
  }
};

Blockly.Blocks['threadmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 thread: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "THREAD"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 thread: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "THREAD"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2 cacheOptions: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "CACHEOPTIONS"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmanager_fetchArchived'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch archived of %1 options: %2 cache: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['threadmanager_fetchActive'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch active of %1 cache: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "THREADMANAGER"
        },
        {
          "type": "input_value",
          "name": "CACHE"
        },
      ],
      "category": Blockly.Categories.threadmanager,
      "extensions": ["colours_threadmanager", "shape_statement"]
    });
  }
};
