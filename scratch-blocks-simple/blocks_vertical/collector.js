'use strict';

goog.provide('Blockly.Blocks.collector');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['collector_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("COLLECTOR")
        .appendField(new Blockly.FieldDropdown([["collect", "collect"], ["dispose", "dispose"], ["end", "end"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.collector.primary);
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
        case "collect":
          this.addOutputs(["args"]);
          break;
        case "dispose":
          this.addOutputs(["args"]);
          break;
        case "end":
          this.addOutputs(["collected","reason"]);
          break;
      }
      this.render(true);
    }
  }
};
Blockly.Blocks['collector_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_filter'] = {
  init: function() {
    this.jsonInit({
      "message0": "filter of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_collected'] = {
  init: function() {
    this.jsonInit({
      "message0": "collected of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_ended'] = {
  init: function() {
    this.jsonInit({
      "message0": "ended of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_next'] = {
  init: function() {
    this.jsonInit({
      "message0": "next of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_endReason'] = {
  init: function() {
    this.jsonInit({
      "message0": "endReason of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        }
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "output_string"]
    });
  }
};
Blockly.Blocks['collector_handleCollect'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleCollect of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_handleDispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleDispose of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_stop'] = {
  init: function() {
    this.jsonInit({
      "message0": "stop of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_resetTimer'] = {
  init: function() {
    this.jsonInit({
      "message0": "resetTimer of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_checkEnd'] = {
  init: function() {
    this.jsonInit({
      "message0": "checkEnd of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_collect'] = {
  init: function() {
    this.jsonInit({
      "message0": "collect of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};
Blockly.Blocks['collector_dispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "dispose of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.collector,
      "extensions": ["colours_collector", "shape_statement"]
    });
  }
};