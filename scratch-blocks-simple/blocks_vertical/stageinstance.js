'use strict';

goog.provide('Blockly.Blocks.stageinstance');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['stageinstance_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_topic'] = {
  init: function() {
    this.jsonInit({
      "message0": "topic of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_privacyLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "privacyLevel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_discoverableDisabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "discoverableDisabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        }
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "output_string"]
    });
  }
};

Blockly.Blocks['stageinstance_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstance_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        },
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "shape_statement"]
    });
  }
};

Blockly.Blocks['stageinstance_setTopic'] = {
  init: function() {
    this.jsonInit({
      "message0": "setTopic of %1 topic: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STAGEINSTANCE"
        },
        {
          "type": "input_value",
          "name": "TOPIC"
        },
      ],
      "category": Blockly.Categories.stageinstance,
      "extensions": ["colours_stageinstance", "shape_statement"]
    });
  }
};
