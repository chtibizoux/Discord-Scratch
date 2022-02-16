'use strict';

goog.provide('Blockly.Blocks.guildtemplate');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildtemplate_code'] = {
  init: function() {
    this.jsonInit({
      "message0": "code of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_usagecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "usage count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_creatorid'] = {
  init: function() {
    this.jsonInit({
      "message0": "creator id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_creator'] = {
  init: function() {
    this.jsonInit({
      "message0": "creator of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_updatedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "updated at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_serializedguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "serialized guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_unsynced'] = {
  init: function() {
    this.jsonInit({
      "message0": "un synced of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_updatedtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "updated timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_guild_templates_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " guild_templates_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        }
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "output_string"]
    });
  }
};

Blockly.Blocks['guildtemplate_createGuild'] = {
  init: function() {
    this.jsonInit({
      "message0": "create guild of %1 name: %2 icon: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "ICON"
        },
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildtemplate_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildtemplate_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        },
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildtemplate_sync'] = {
  init: function() {
    this.jsonInit({
      "message0": "sync of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        },
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildtemplate_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDTEMPLATE"
        },
      ],
      "category": Blockly.Categories.guildtemplate,
      "extensions": ["colours_guildtemplate", "shape_statement"]
    });
  }
};
