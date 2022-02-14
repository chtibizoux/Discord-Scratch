'use strict';

goog.provide('Blockly.Blocks.guildpreviewemoji');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildpreviewemoji_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_requiresColons'] = {
  init: function() {
    this.jsonInit({
      "message0": "requiresColons of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_managed'] = {
  init: function() {
    this.jsonInit({
      "message0": "managed of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_available'] = {
  init: function() {
    this.jsonInit({
      "message0": "available of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_animated'] = {
  init: function() {
    this.jsonInit({
      "message0": "animated of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_identifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "identifier of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        }
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreviewemoji_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "toString of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEWEMOJI"
        },
      ],
      "category": Blockly.Categories.guildpreviewemoji,
      "extensions": ["colours_guildpreviewemoji", "shape_statement"]
    });
  }
};
