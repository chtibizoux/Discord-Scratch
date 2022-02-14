'use strict';

goog.provide('Blockly.Blocks.webhookclient');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['webhookclient_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("WEBHOOKCLIENT")
        .appendField(new Blockly.FieldDropdown([["debug", "debug"], ["rateLimit", "rateLimit"], ["apiRequest", "apiRequest"], ["apiResponse", "apiResponse"], ["invalidRequestWarning", "invalidRequestWarning"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.webhookclient.primary);
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
        case "debug":
          this.addOutputs(["info"]);
          break;
        case "rateLimit":
          this.addOutputs(["rateLimitData"]);
          break;
        case "apiRequest":
          this.addOutputs(["request"]);
          break;
        case "apiResponse":
          this.addOutputs(["request","response"]);
          break;
        case "invalidRequestWarning":
          this.addOutputs(["invalidRequestWarningData"]);
          break;
      }
      this.render(true);
    }
  }
};
Blockly.Blocks['webhookclient_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        }
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "output_string"]
    });
  }
};
Blockly.Blocks['webhookclient_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        }
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "output_string"]
    });
  }
};
Blockly.Blocks['webhookclient_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        }
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "output_string"]
    });
  }
};
Blockly.Blocks['webhookclient_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        }
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "output_string"]
    });
  }
};
Blockly.Blocks['webhookclient_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        }
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "output_string"]
    });
  }
};
Blockly.Blocks['webhookclient_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_sendSlackMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "sendSlackMessage of %1 body: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "BODY"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_fetchMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchMessage of %1 message: %2 cacheOrOptions: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "CACHEOROPTIONS"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_editMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "editMessage of %1 message: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_deleteMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "deleteMessage of %1 message: %2 threadId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "THREADID"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};
Blockly.Blocks['webhookclient_destroy'] = {
  init: function() {
    this.jsonInit({
      "message0": "destroy of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "WEBHOOKCLIENT"
        },
      ],
      "category": Blockly.Categories.webhookclient,
      "extensions": ["colours_webhookclient", "shape_statement"]
    });
  }
};