'use strict';

goog.provide('Blockly.Blocks.guildmemberrolemanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildmemberrolemanager_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_hoist'] = {
  init: function() {
    this.jsonInit({
      "message0": "hoist of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_color'] = {
  init: function() {
    this.jsonInit({
      "message0": "color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_highest'] = {
  init: function() {
    this.jsonInit({
      "message0": "highest of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_premiumSubscriberRole'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumSubscriberRole of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_botRole'] = {
  init: function() {
    this.jsonInit({
      "message0": "botRole of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        }
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_add'] = {
  init: function() {
    this.jsonInit({
      "message0": "add of %1 roleOrRoles: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLEORROLES"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_remove'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove of %1 roleOrRoles: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLEORROLES"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_set'] = {
  init: function() {
    this.jsonInit({
      "message0": "set of %1 roles: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "ROLES"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildmemberrolemanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDMEMBERROLEMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildmemberrolemanager,
      "extensions": ["colours_guildmemberrolemanager", "shape_statement"]
    });
  }
};
