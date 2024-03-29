'use strict';

goog.provide('Blockly.Blocks.integration');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['integration_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_enabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "enabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_syncing'] = {
  init: function() {
    this.jsonInit({
      "message0": "syncing of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_role'] = {
  init: function() {
    this.jsonInit({
      "message0": "role of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_enableemoticons'] = {
  init: function() {
    this.jsonInit({
      "message0": "enable emoticons of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_user'] = {
  init: function() {
    this.jsonInit({
      "message0": "user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_account'] = {
  init: function() {
    this.jsonInit({
      "message0": "account of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_syncedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "synced at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_subscribercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "subscriber count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_revoked'] = {
  init: function() {
    this.jsonInit({
      "message0": "revoked of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_expirebehavior'] = {
  init: function() {
    this.jsonInit({
      "message0": "expire behavior of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_expiregraceperiod'] = {
  init: function() {
    this.jsonInit({
      "message0": "expire graceperiod of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_application'] = {
  init: function() {
    this.jsonInit({
      "message0": "application of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        }
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "output_string"]
    });
  }
};

Blockly.Blocks['integration_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INTEGRATION"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.integration,
      "extensions": ["colours_integration", "shape_statement"]
    });
  }
};
