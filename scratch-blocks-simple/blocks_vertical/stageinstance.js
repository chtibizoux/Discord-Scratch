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

Blockly.Blocks['stageinstance_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
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

Blockly.Blocks['stageinstance_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
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

Blockly.Blocks['stageinstance_privacylevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "privacy level of %1",
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

Blockly.Blocks['stageinstance_discoverabledisabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "discoverable disabled of %1",
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

Blockly.Blocks['stageinstance_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
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

Blockly.Blocks['stageinstance_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
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
      "message0": "set topic of %1 topic: %2",
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
