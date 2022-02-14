'use strict';

goog.provide('Blockly.Blocks.interactionwebhook');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['interactionwebhook_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        }
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "output_string"]
    });
  }
};
Blockly.Blocks['interactionwebhook_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        }
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "output_string"]
    });
  }
};
Blockly.Blocks['interactionwebhook_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        }
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "output_string"]
    });
  }
};
Blockly.Blocks['interactionwebhook_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "shape_statement"]
    });
  }
};
Blockly.Blocks['interactionwebhook_fetchMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchMessage of %1 message: %2 cacheOrOptions: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "CACHEOROPTIONS"
        },
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "shape_statement"]
    });
  }
};
Blockly.Blocks['interactionwebhook_editMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "editMessage of %1 message: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "shape_statement"]
    });
  }
};
Blockly.Blocks['interactionwebhook_deleteMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "deleteMessage of %1 message: %2 threadId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONWEBHOOK"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "THREADID"
        },
      ],
      "category": Blockly.Categories.interactionwebhook,
      "extensions": ["colours_interactionwebhook", "shape_statement"]
    });
  }
};