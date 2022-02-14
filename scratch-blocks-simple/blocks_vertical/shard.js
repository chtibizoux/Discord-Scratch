'use strict';

goog.provide('Blockly.Blocks.shard');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['shard_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("SHARD")
        .appendField(new Blockly.FieldDropdown([["spawn", "spawn"], ["ready", "ready"], ["disconnect", "disconnect"], ["reconnecting", "reconnecting"], ["message", "message"], ["death", "death"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.shard.primary);
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
        case "spawn":
          this.addOutputs(["process"]);
          break;
        case "message":
          this.addOutputs(["message"]);
          break;
        case "death":
          this.addOutputs(["process"]);
          break;
      }
      this.render(true);
    }
  }
};
Blockly.Blocks['shard_manager'] = {
  init: function() {
    this.jsonInit({
      "message0": "manager of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_args'] = {
  init: function() {
    this.jsonInit({
      "message0": "args of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_execArgv'] = {
  init: function() {
    this.jsonInit({
      "message0": "execArgv of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_env'] = {
  init: function() {
    this.jsonInit({
      "message0": "env of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_ready'] = {
  init: function() {
    this.jsonInit({
      "message0": "ready of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_process'] = {
  init: function() {
    this.jsonInit({
      "message0": "process of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_worker'] = {
  init: function() {
    this.jsonInit({
      "message0": "worker of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        }
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "output_string"]
    });
  }
};
Blockly.Blocks['shard_spawn'] = {
  init: function() {
    this.jsonInit({
      "message0": "spawn of %1 timeout: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
        {
          "type": "input_value",
          "name": "TIMEOUT"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};
Blockly.Blocks['shard_kill'] = {
  init: function() {
    this.jsonInit({
      "message0": "kill of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};
Blockly.Blocks['shard_respawn'] = {
  init: function() {
    this.jsonInit({
      "message0": "respawn of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};
Blockly.Blocks['shard_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 message: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};
Blockly.Blocks['shard_fetchClientValue'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchClientValue of %1 prop: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
        {
          "type": "input_value",
          "name": "PROP"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};
Blockly.Blocks['shard_eval'] = {
  init: function() {
    this.jsonInit({
      "message0": "eval of %1 script: %2 context: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "SHARD"
        },
        {
          "type": "input_value",
          "name": "SCRIPT"
        },
        {
          "type": "input_value",
          "name": "CONTEXT"
        },
      ],
      "category": Blockly.Categories.shard,
      "extensions": ["colours_shard", "shape_statement"]
    });
  }
};