'use strict';

goog.provide('Blockly.Blocks.clientvoicemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['clientvoicemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTVOICEMANAGER"
        }
      ],
      "category": Blockly.Categories.clientvoicemanager,
      "extensions": ["colours_clientvoicemanager", "output_string"]
    });
  }
};
Blockly.Blocks['clientvoicemanager_adapters'] = {
  init: function() {
    this.jsonInit({
      "message0": "adapters of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTVOICEMANAGER"
        }
      ],
      "category": Blockly.Categories.clientvoicemanager,
      "extensions": ["colours_clientvoicemanager", "output_string"]
    });
  }
};