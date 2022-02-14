'use strict';

goog.provide('Blockly.Blocks.applicationcommandpermissionsmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['applicationcommandpermissionsmanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "output_string"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_guildId'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "output_string"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_commandId'] = {
  init: function() {
    this.jsonInit({
      "message0": "commandId of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "output_string"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "output_string"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['applicationcommandpermissionsmanager_has'] = {
  init: function() {
    this.jsonInit({
      "message0": "has of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDPERMISSIONSMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandpermissionsmanager,
      "extensions": ["colours_applicationcommandpermissionsmanager", "shape_statement"]
    });
  }
};