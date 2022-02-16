'use strict';

goog.provide('Blockly.Blocks.guildemojirolemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildemojirolemanager_emoji'] = {
  init: function() {
    this.jsonInit({
      "message0": "emoji of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 roleOrRoles: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLEORROLES"
        },
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 roleOrRoles: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLEORROLES"
        },
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 roles: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLES"
        },
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemojirolemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJIROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildemojirolemanager,
      "extensions": ["colours_guildemojirolemanager", "shape_statement"]
    });
  }
};
