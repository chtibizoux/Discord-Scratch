'use strict';

goog.provide('Blockly.Blocks.cachedmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['cachedmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CACHEDMANAGER"
        }
      ],
      "category": Blockly.Categories.cachedmanager,
      "extensions": ["colours_cachedmanager", "output_string"]
    });
  }
};
Blockly.Blocks['cachedmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CACHEDMANAGER"
        }
      ],
      "category": Blockly.Categories.cachedmanager,
      "extensions": ["colours_cachedmanager", "output_string"]
    });
  }
};
Blockly.Blocks['cachedmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CACHEDMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.cachedmanager,
      "extensions": ["colours_cachedmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['cachedmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CACHEDMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.cachedmanager,
      "extensions": ["colours_cachedmanager", "shape_statement"]
    });
  }
};