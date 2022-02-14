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

Blockly.Blocks['integrationapplication_termsOfServiceURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "termsOfServiceURL of %1",
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

Blockly.Blocks['integrationapplication_privacyPolicyURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "privacyPolicyURL of %1",
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

Blockly.Blocks['integrationapplication_rpcOrigins'] = {
  init: function() {
    this.jsonInit({
      "message0": "rpcOrigins of %1",
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

Blockly.Blocks['integrationapplication_verifyKey'] = {
  init: function() {
    this.jsonInit({
      "message0": "verifyKey of %1",
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

Blockly.Blocks['integrationapplication_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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

Blockly.Blocks['integrationapplication_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
      "message0": "iconURL of %1 options: %2",
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
      "message0": "coverURL of %1 options: %2",
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
      "message0": "fetchAssets of %1",
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
      "message0": "toString of %1",
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
