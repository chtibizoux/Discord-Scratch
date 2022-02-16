'use strict';

goog.provide('Blockly.Blocks.clientapplication');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['clientapplication_commands'] = {
  init: function() {
    this.jsonInit({
      "message0": "commands of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_flags'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_cover'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_rpcorigins'] = {
  init: function() {
    this.jsonInit({
      "message0": "rpc origins of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_botrequirecodegrant'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot requirecodegrant of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_botpublic'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot public of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_owner'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_partial'] = {
  init: function() {
    this.jsonInit({
      "message0": "partial of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        }
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "output_string"]
    });
  }
};

Blockly.Blocks['clientapplication_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        },
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientapplication_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientapplication_coverURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientapplication_fetchAssets'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch assets of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        },
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['clientapplication_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "CLIENTAPPLICATION"
        },
      ],
      "category": Blockly.Categories.clientapplication,
      "extensions": ["colours_clientapplication", "shape_statement"]
    });
  }
};
