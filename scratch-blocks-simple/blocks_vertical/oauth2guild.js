'use strict';

goog.provide('Blockly.Blocks.oauth2guild');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['oauth2guild_owner'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_features'] = {
  init: function() {
    this.jsonInit({
      "message0": "features of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_nameacronym'] = {
  init: function() {
    this.jsonInit({
      "message0": "name acronym of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_partnered'] = {
  init: function() {
    this.jsonInit({
      "message0": "partnered of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_verified'] = {
  init: function() {
    this.jsonInit({
      "message0": "verified of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        }
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "output_string"]
    });
  }
};

Blockly.Blocks['oauth2guild_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['oauth2guild_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        },
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['oauth2guild_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OAUTH2GUILD"
        },
      ],
      "category": Blockly.Categories.oauth2guild,
      "extensions": ["colours_oauth2guild", "shape_statement"]
    });
  }
};
