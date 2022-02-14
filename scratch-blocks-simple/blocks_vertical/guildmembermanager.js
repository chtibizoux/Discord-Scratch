'use strict';

goog.provide('Blockly.Blocks.guildmembermanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildmembermanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildmembermanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildmembermanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "output_string"]
    });
  }
};
Blockly.Blocks['guildmembermanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 member: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 member: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "MEMBER"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_search'] = {
  init: function() {
    this.jsonInit({
      "message0": "search of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_list'] = {
  init: function() {
    this.jsonInit({
      "message0": "list of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 user: %2 data: %3 reason: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
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
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_prune'] = {
  init: function() {
    this.jsonInit({
      "message0": "prune of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_kick'] = {
  init: function() {
    this.jsonInit({
      "message0": "kick of %1 user: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_ban'] = {
  init: function() {
    this.jsonInit({
      "message0": "ban of %1 user: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};
Blockly.Blocks['guildmembermanager_unban'] = {
  init: function() {
    this.jsonInit({
      "message0": "unban of %1 user: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERMANAGER"
        },
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmembermanager,
      "extensions": ["colours_guildmembermanager", "shape_statement"]
    });
  }
};