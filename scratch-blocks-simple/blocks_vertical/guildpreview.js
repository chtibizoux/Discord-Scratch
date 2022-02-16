'use strict';

goog.provide('Blockly.Blocks.guildpreview');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildpreview_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_splash'] = {
  init: function() {
    this.jsonInit({
      "message0": "splash of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_discoverysplash'] = {
  init: function() {
    this.jsonInit({
      "message0": "discovery splash of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_features'] = {
  init: function() {
    this.jsonInit({
      "message0": "features of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_approximatemembercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximate membercount of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_approximatepresencecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximate presencecount of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_emojis'] = {
  init: function() {
    this.jsonInit({
      "message0": "emojis of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        }
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "output_string"]
    });
  }
};

Blockly.Blocks['guildpreview_splashURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "splash url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildpreview_discoverySplashURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "discovery splashurl of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildpreview_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildpreview_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        },
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildpreview_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDPREVIEW"
        },
      ],
      "category": Blockly.Categories.guildpreview,
      "extensions": ["colours_guildpreview", "shape_statement"]
    });
  }
};
