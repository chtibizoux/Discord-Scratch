'use strict';

goog.provide('Blockly.Blocks.messagementions');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messagementions_everyone'] = {
  init: function() {
    this.jsonInit({
      "message0": "everyone of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_users'] = {
  init: function() {
    this.jsonInit({
      "message0": "users of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_crosspostedchannels'] = {
  init: function() {
    this.jsonInit({
      "message0": "crossposted channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_replieduser'] = {
  init: function() {
    this.jsonInit({
      "message0": "replied user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_channels'] = {
  init: function() {
    this.jsonInit({
      "message0": "channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_everyone_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " everyone_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_users_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " users_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_roles_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " roles_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_channels_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " channels_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        }
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "output_string"]
    });
  }
};

Blockly.Blocks['messagementions_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 data: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEMENTIONS"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.messagementions,
      "extensions": ["colours_messagementions", "shape_statement"]
    });
  }
};
