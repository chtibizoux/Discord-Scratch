'use strict';

goog.provide('Blockly.Blocks.stageinstancemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['stageinstancemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        }
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        }
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        }
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 channel: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 channel: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstancemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.stageinstancemanager,
      "extensions": ["colours_stageinstancemanager", "shape_statement"]
    });
  }
};
