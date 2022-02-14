'use strict';

goog.provide('Blockly.Blocks.reactioncollector');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['reactioncollector_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("REACTIONCOLLECTOR")
        .appendField(new Blockly.FieldDropdown([["create", "create"], ["collect", "collect"], ["dispose", "dispose"], ["remove", "remove"], ["end", "end"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.reactioncollector.primary);
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
        case "create":
          this.addOutputs(["reaction","user"]);
          break;
        case "collect":
          this.addOutputs(["reaction","user"]);
          break;
        case "dispose":
          this.addOutputs(["reaction","user"]);
          break;
        case "remove":
          this.addOutputs(["reaction","user"]);
          break;
        case "end":
          this.addOutputs(["collected","reason"]);
          break;
      }
      this.render(true);
    }
  }
};

Blockly.Blocks['reactioncollector_message'] = {
  init: function() {
    this.jsonInit({
      "message0": "message of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_users'] = {
  init: function() {
    this.jsonInit({
      "message0": "users of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_total'] = {
  init: function() {
    this.jsonInit({
      "message0": "total of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_endReason'] = {
  init: function() {
    this.jsonInit({
      "message0": "endReason of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_filter'] = {
  init: function() {
    this.jsonInit({
      "message0": "filter of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_collected'] = {
  init: function() {
    this.jsonInit({
      "message0": "collected of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_ended'] = {
  init: function() {
    this.jsonInit({
      "message0": "ended of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_next'] = {
  init: function() {
    this.jsonInit({
      "message0": "next of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        }
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "output_string"]
    });
  }
};

Blockly.Blocks['reactioncollector_dispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "dispose of %1 reaction: %2 user: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_empty'] = {
  init: function() {
    this.jsonInit({
      "message0": "empty of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_handleCollect'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleCollect of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_handleDispose'] = {
  init: function() {
    this.jsonInit({
      "message0": "handleDispose of %1 args: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "ARGS"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_stop'] = {
  init: function() {
    this.jsonInit({
      "message0": "stop of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_resetTimer'] = {
  init: function() {
    this.jsonInit({
      "message0": "resetTimer of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_checkEnd'] = {
  init: function() {
    this.jsonInit({
      "message0": "checkEnd of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};

Blockly.Blocks['reactioncollector_key'] = {
  init: function() {
    this.jsonInit({
      "message0": "key of %1 reaction: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTIONCOLLECTOR"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        },
      ],
      "category": Blockly.Categories.reactioncollector,
      "extensions": ["colours_reactioncollector", "shape_statement"]
    });
  }
};
