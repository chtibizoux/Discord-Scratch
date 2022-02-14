'use strict';

goog.provide('Blockly.Blocks.shardclientutil');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['shardclientutil_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        }
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "output_string"]
    });
  }
};
Blockly.Blocks['shardclientutil_mode'] = {
  init: function() {
    this.jsonInit({
      "message0": "mode of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        }
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "output_string"]
    });
  }
};
Blockly.Blocks['shardclientutil_parentPort'] = {
  init: function() {
    this.jsonInit({
      "message0": "parentPort of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        }
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "output_string"]
    });
  }
};
Blockly.Blocks['shardclientutil_ids'] = {
  init: function() {
    this.jsonInit({
      "message0": "ids of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        }
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "output_string"]
    });
  }
};
Blockly.Blocks['shardclientutil_count'] = {
  init: function() {
    this.jsonInit({
      "message0": "count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        }
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "output_string"]
    });
  }
};
Blockly.Blocks['shardclientutil_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};
Blockly.Blocks['shardclientutil_fetchClientValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchClientValues of %1 prop: %2 shard: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "PROP"
        },
        {
          "type": "input_value",
          "name": "SHARD"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};
Blockly.Blocks['shardclientutil_broadcastEval'] = {
  init: function() {
    this.jsonInit({
      "message0": "broadcastEval of %1 script: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "SCRIPT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};
Blockly.Blocks['shardclientutil_respawnAll'] = {
  init: function() {
    this.jsonInit({
      "message0": "respawnAll of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};
Blockly.Blocks['shardclientutil_singleton'] = {
  init: function() {
    this.jsonInit({
      "message0": "singleton of %1 client: %2 mode: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "CLIENT"
        },
        {
          "type": "input_value",
          "name": "MODE"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};
Blockly.Blocks['shardclientutil_shardIdForGuildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "shardIdForGuildId of %1 guildId: %2 shardCount: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDCLIENTUTIL"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        },
        {
          "type": "input_value",
          "name": "SHARDCOUNT"
        },
      ],
      "category": Blockly.Categories.shardclientutil,
      "extensions": ["colours_shardclientutil", "shape_statement"]
    });
  }
};