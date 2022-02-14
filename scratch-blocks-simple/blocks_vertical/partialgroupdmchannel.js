'use strict';

goog.provide('Blockly.Blocks.partialgroupdmchannel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['partialgroupdmchannel_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_recipients'] = {
  init: function() {
    this.jsonInit({
      "message0": "recipients of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        }
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "output_string"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "iconURL of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 force: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "FORCE"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_isText'] = {
  init: function() {
    this.jsonInit({
      "message0": "isText of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_isVoice'] = {
  init: function() {
    this.jsonInit({
      "message0": "isVoice of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};
Blockly.Blocks['partialgroupdmchannel_isThread'] = {
  init: function() {
    this.jsonInit({
      "message0": "isThread of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PARTIALGROUPDMCHANNEL"
        },
      ],
      "category": Blockly.Categories.partialgroupdmchannel,
      "extensions": ["colours_partialgroupdmchannel", "shape_statement"]
    });
  }
};