'use strict';

goog.provide('Blockly.Blocks.rolemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['rolemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_everyone'] = {
  init: function() {
    this.jsonInit({
      "message0": "everyone of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_premiumsubscriberrole'] = {
  init: function() {
    this.jsonInit({
      "message0": "premium subscriberrole of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_highest'] = {
  init: function() {
    this.jsonInit({
      "message0": "highest of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['rolemanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 id: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
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
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 role: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of %1 role: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 role: %2 data: %3 reason: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 role: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_setPositions'] = {
  init: function() {
    this.jsonInit({
      "message0": "set positions of %1 rolePositions: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLEPOSITIONS"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_comparePositions'] = {
  init: function() {
    this.jsonInit({
      "message0": "compare positions of %1 role1: %2 role2: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLE1"
        },
        {
          "type": "input_value",
          "name": "ROLE2"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['rolemanager_botRoleFor'] = {
  init: function() {
    this.jsonInit({
      "message0": "bot rolefor of %1 user: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "ROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
      ],
      "category": Blockly.Categories.rolemanager,
      "extensions": ["colours_rolemanager", "shape_statement"]
    });
  }
};
