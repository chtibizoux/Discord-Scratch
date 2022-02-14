'use strict';

goog.provide('Blockly.Blocks.interactioncollector');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['interactioncollector_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("INTERACTIONCOLLECTOR")
        .appendField(new Blockly.FieldDropdown([["collect", "collect"], ["dispose", "dispose"], ["end", "end"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.interactioncollector.primary);
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
          this.addOutputs(["interaction"]);
          break;
        case "dispose":
          this.addOutputs(["interaction"]);
          break;
        case "end":
          this.addOutputs(["collected","reason"]);
          break;
      }
      this.render(true);
    }
  }
};

Blockly.Blocks['interactioncollector_messageId'] = {
  init: function() {
    this.jsonInit({
      "message0": "messageId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_interactionType'] = {
  init: function() {
    this.jsonInit({
      "message0": "interactionType of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_componentType'] = {
  init: function() {
    this.jsonInit({
      "message0": "componentType of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_users'] = {
  init: function() {
    this.jsonInit({
      "message0": "users of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_total'] = {
  init: function() {
    this.jsonInit({
      "message0": "total of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_endReason'] = {
  init: function() {
    this.jsonInit({
      "message0": "endReason of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_filter'] = {
  init: function() {
    this.jsonInit({
      "message0": "filter of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_collected'] = {
  init: function() {
    this.jsonInit({
      "message0": "collected of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_ended'] = {
  init: function() {
    this.jsonInit({
      "message0": "ended of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_next'] = {
  init: function() {
    this.jsonInit({
      "message0": "next of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['interactioncollector_dispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "dispose of %1 interaction: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "INTERACTION"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_empty'] = {
  init: function() {
    this.jsonInit({
      "message0": "empty of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_handleCollect'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleCollect of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_handleDispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleDispose of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_stop'] = {
  init: function() {
    this.jsonInit({
      "message0": "stop of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_resetTimer'] = {
  init: function() {
    this.jsonInit({
      "message0": "resetTimer of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['interactioncollector_checkEnd'] = {
  init: function() {
    this.jsonInit({
      "message0": "checkEnd of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTERACTIONCOLLECTOR"
        },
      ],
      "category": Blockly.Categories.interactioncollector,
      "extensions": ["colours_interactioncollector", "shape_statement"]
    });
  }
};
