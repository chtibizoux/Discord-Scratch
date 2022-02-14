'use strict';

goog.provide('Blockly.Blocks.messagereaction');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagereaction_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_message'] = {
  init: function() {
    this.jsonInit({
      "message0": "message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_me'] = {
  init: function() {
    this.jsonInit({
      "message0": "me of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_users'] = {
  init: function() {
    this.jsonInit({
      "message0": "users of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_count'] = {
  init: function() {
    this.jsonInit({
      "message0": "count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_emoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "emoji of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        }
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "output_string"]
    });
  }
};

Blockly.Blocks['messagereaction_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        },
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "shape_statement"]
    });
  }
};

Blockly.Blocks['messagereaction_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEREACTION"
        },
      ],
      "category": Blockly.Categories.messagereaction,
      "extensions": ["colours_messagereaction", "shape_statement"]
    });
  }
};
