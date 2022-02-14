'use strict';

goog.provide('Blockly.Blocks.clientpresence');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['clientpresence_userId'] = {
  init: function() {
    this.jsonInit({
      "message0": "userId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_status'] = {
  init: function() {
    this.jsonInit({
      "message0": "status of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_activities'] = {
  init: function() {
    this.jsonInit({
      "message0": "activities of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_clientStatus'] = {
  init: function() {
    this.jsonInit({
      "message0": "clientStatus of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        }
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "output_string"]
    });
  }
};
Blockly.Blocks['clientpresence_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 presence: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        },
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "shape_statement"]
    });
  }
};
Blockly.Blocks['clientpresence_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 presence: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTPRESENCE"
        },
        {
          "type": "input_value",
          "name": "PRESENCE"
        },
      ],
      "category": Blockly.Categories.clientpresence,
      "extensions": ["colours_clientpresence", "shape_statement"]
    });
  }
};