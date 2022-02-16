'use strict';

goog.provide('Blockly.Blocks.integrationapplication');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['integrationapplication_bot'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_termsofserviceurl'] = {
  init: function() {
    this.jsonInit({
      "message0": "terms ofserviceurl of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_privacypolicyurl'] = {
  init: function() {
    this.jsonInit({
      "message0": "privacy policyurl of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_rpcorigins'] = {
  init: function() {
    this.jsonInit({
      "message0": "rpc origins of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_summary'] = {
  init: function() {
    this.jsonInit({
      "message0": "summary of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_hook'] = {
  init: function() {
    this.jsonInit({
      "message0": "hook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_cover'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_verifykey'] = {
  init: function() {
    this.jsonInit({
      "message0": "verify key of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        }
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "output_string"]
    });
  }
};

Blockly.Blocks['integrationapplication_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['integrationapplication_coverURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['integrationapplication_fetchAssets'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch assets of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        },
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "shape_statement"]
    });
  }
};

Blockly.Blocks['integrationapplication_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATIONAPPLICATION"
        },
      ],
      "category": Blockly.Categories.integrationapplication,
      "extensions": ["colours_integrationapplication", "shape_statement"]
    });
  }
};
