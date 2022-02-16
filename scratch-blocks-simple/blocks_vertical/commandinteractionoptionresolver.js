'use strict';

goog.provide('Blockly.Blocks.commandinteractionoptionresolver');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['commandinteractionoptionresolver_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        }
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "output_string"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_data'] = {
  init: function() {
    this.jsonInit({
      "message0": "data of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        }
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "output_string"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_resolved'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolved of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        }
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "output_string"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_get'] = {
  init: function() {
    this.jsonInit({
      "message0": "get of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getSubcommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "get subcommand of %1 required: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getSubcommandGroup'] = {
  init: function() {
    this.jsonInit({
      "message0": "get subcommandgroup of %1 required: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getBoolean'] = {
  init: function() {
    this.jsonInit({
      "message0": "get boolean of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "get channel of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getString'] = {
  init: function() {
    this.jsonInit({
      "message0": "get string of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getInteger'] = {
  init: function() {
    this.jsonInit({
      "message0": "get integer of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getNumber'] = {
  init: function() {
    this.jsonInit({
      "message0": "get number of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "get user of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getMember'] = {
  init: function() {
    this.jsonInit({
      "message0": "get member of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getRole'] = {
  init: function() {
    this.jsonInit({
      "message0": "get role of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getMentionable'] = {
  init: function() {
    this.jsonInit({
      "message0": "get mentionable of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getMessage'] = {
  init: function() {
    this.jsonInit({
      "message0": "get message of %1 name: %2 required: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REQUIRED"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};

Blockly.Blocks['commandinteractionoptionresolver_getFocused'] = {
  init: function() {
    this.jsonInit({
      "message0": "get focused of %1 getFull: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDINTERACTIONOPTIONRESOLVER"
        },
        {
          "type": "input_value",
          "name": "GETFULL"
        },
      ],
      "category": Blockly.Categories.commandinteractionoptionresolver,
      "extensions": ["colours_commandinteractionoptionresolver", "shape_statement"]
    });
  }
};
