'use strict';

goog.provide('Blockly.Blocks.applicationcommandmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['applicationcommandmanager_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        }
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 command: %2 guildId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 commands: %2 guildId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "COMMANDS"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 command: %2 data: %3 guildId: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 command: %2 guildId: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommandmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMANDMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.applicationcommandmanager,
      "extensions": ["colours_applicationcommandmanager", "shape_statement"]
    });
  }
};
