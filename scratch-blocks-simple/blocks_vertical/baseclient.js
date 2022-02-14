'use strict';

goog.provide('Blockly.Blocks.baseclient');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['baseclient_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("BASECLIENT")
        .appendField(new Blockly.FieldDropdown([["debug", "debug"], ["rateLimit", "rateLimit"], ["apiRequest", "apiRequest"], ["apiResponse", "apiResponse"], ["invalidRequestWarning", "invalidRequestWarning"], ]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.baseclient.primary);
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
Blockly.Blocks['baseclient_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASECLIENT"
        }
      ],
      "category": Blockly.Categories.baseclient,
      "extensions": ["colours_baseclient", "output_string"]
    });
  }
};
Blockly.Blocks['baseclient_destroy'] = {
  init: function() {
    this.jsonInit({
      "message0": "destroy of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BASECLIENT"
        },
      ],
      "category": Blockly.Categories.baseclient,
      "extensions": ["colours_baseclient", "shape_statement"]
    });
  }
};