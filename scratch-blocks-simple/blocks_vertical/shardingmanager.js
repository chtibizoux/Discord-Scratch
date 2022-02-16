'use strict';

goog.provide('Blockly.Blocks.shardingmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['shardingmanager_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("SHARDINGMANAGER")
        .appendField(new Blockly.FieldDropdown([["shardCreate", "shardCreate"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.shardingmanager.primary);
  },
  addOutputs: function(variables) {
    for (var i = 0; i < variables.length; i++) {
      var input = this.appendValueInput("VARIABLE" + (i + 1));
      this.moveInputBefore("VARIABLE" + (i + 1), i === 0 ? "DO" : "VARIABLE" + i);
      var block = new Blockly.BlockSvg(this.workspace, "event_variables");
      block.initSvg();
      block.render(true);
      block.contextMenu = false;
      block.setFieldValue(variables[i], "VARIABLE");
      input.connection.connect(block.outputConnection);
    }
  },
  onchange: function(e) {
    if (e.blockId === this.id) {
      var i = 1;
      while (this.getInput('VARIABLE' + i)) {
        if (this.getInputTargetBlock("VARIABLE" + i)) {
          this.getInputTargetBlock("VARIABLE" + i).dispose();
        }
        this.removeInput('VARIABLE' + i);
        i++;
      }

      var action = this.getFieldValue("ACTION");
      switch (action) {
        case "shardCreate":
          this.addOutputs(["shard"]);
          break;
      }
      this.render(true);
    }
  }
};

Blockly.Blocks['shardingmanager_file'] = {
  init: function() {
    this.jsonInit({
      "message0": "file of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_shardlist'] = {
  init: function() {
    this.jsonInit({
      "message0": "shard list of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_totalshards'] = {
  init: function() {
    this.jsonInit({
      "message0": "total shards of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_mode'] = {
  init: function() {
    this.jsonInit({
      "message0": "mode of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_respawn'] = {
  init: function() {
    this.jsonInit({
      "message0": "respawn of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_shardargs'] = {
  init: function() {
    this.jsonInit({
      "message0": "shard args of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_execargv'] = {
  init: function() {
    this.jsonInit({
      "message0": "exec argv of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_token'] = {
  init: function() {
    this.jsonInit({
      "message0": "token of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_shards'] = {
  init: function() {
    this.jsonInit({
      "message0": "shards of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        }
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "output_string"]
    });
  }
};

Blockly.Blocks['shardingmanager_createShard'] = {
  init: function() {
    this.jsonInit({
      "message0": "create shard of %1 id: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['shardingmanager_spawn'] = {
  init: function() {
    this.jsonInit({
      "message0": "spawn of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['shardingmanager_broadcast'] = {
  init: function() {
    this.jsonInit({
      "message0": "broadcast of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['shardingmanager_broadcastEval'] = {
  init: function() {
    this.jsonInit({
      "message0": "broadcast eval of %1 script: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
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
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['shardingmanager_fetchClientValues'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch clientvalues of %1 prop: %2 shard: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
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
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['shardingmanager_respawnAll'] = {
  init: function() {
    this.jsonInit({
      "message0": "respawn all of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARDINGMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.shardingmanager,
      "extensions": ["colours_shardingmanager", "shape_statement"]
    });
  }
};
