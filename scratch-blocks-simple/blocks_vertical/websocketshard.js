'use strict';

goog.provide('Blockly.Blocks.websocketshard');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['websocketshard_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("WEBSOCKETSHARD")
        .appendField(new Blockly.FieldDropdown([["close", "close"], ["ready", "ready"], ["resumed", "resumed"], ["allReady", "allReady"], ["destroyed", "destroyed"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.websocketshard.primary);
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
        case "close":
          this.addOutputs(["event"]);
          break;
        case "allReady":
          this.addOutputs(["unavailableGuilds"]);
          break;
      }
      this.render(true);
    }
  }
};

Blockly.Blocks['websocketshard_manager'] = {
  init: function() {
    this.jsonInit({
      "message0": "manager of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETSHARD"
        }
      ],
      "category": Blockly.Categories.websocketshard,
      "extensions": ["colours_websocketshard", "output_string"]
    });
  }
};

Blockly.Blocks['websocketshard_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETSHARD"
        }
      ],
      "category": Blockly.Categories.websocketshard,
      "extensions": ["colours_websocketshard", "output_string"]
    });
  }
};

Blockly.Blocks['websocketshard_status'] = {
  init: function() {
    this.jsonInit({
      "message0": "status of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETSHARD"
        }
      ],
      "category": Blockly.Categories.websocketshard,
      "extensions": ["colours_websocketshard", "output_string"]
    });
  }
};

Blockly.Blocks['websocketshard_ping'] = {
  init: function() {
    this.jsonInit({
      "message0": "ping of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETSHARD"
        }
      ],
      "category": Blockly.Categories.websocketshard,
      "extensions": ["colours_websocketshard", "output_string"]
    });
  }
};

Blockly.Blocks['websocketshard_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 data: %2 important: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBSOCKETSHARD"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "IMPORTANT"
        },
      ],
      "category": Blockly.Categories.websocketshard,
      "extensions": ["colours_websocketshard", "shape_statement"]
    });
  }
};
