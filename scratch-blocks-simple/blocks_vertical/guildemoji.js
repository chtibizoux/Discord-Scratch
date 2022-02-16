'use strict';

goog.provide('Blockly.Blocks.guildemoji');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildemoji_author'] = {
  init: function() {
    this.jsonInit({
      "message0": "author of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_requirescolons'] = {
  init: function() {
    this.jsonInit({
      "message0": "requires colons of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_managed'] = {
  init: function() {
    this.jsonInit({
      "message0": "managed of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_available'] = {
  init: function() {
    this.jsonInit({
      "message0": "available of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_animated'] = {
  init: function() {
    this.jsonInit({
      "message0": "animated of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_identifier'] = {
  init: function() {
    this.jsonInit({
      "message0": "identifier of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        }
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "output_string"]
    });
  }
};

Blockly.Blocks['guildemoji_fetchAuthor'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch author of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        },
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemoji_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
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
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemoji_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemoji_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemoji_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 other: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        },
        {
          "type": "input_value",
          "name": "OTHER"
        },
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildemoji_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDEMOJI"
        },
      ],
      "category": Blockly.Categories.guildemoji,
      "extensions": ["colours_guildemoji", "shape_statement"]
    });
  }
};
