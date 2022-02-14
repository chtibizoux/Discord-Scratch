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
      "message0": "getSubcommand of %1 required: %2",
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
      "message0": "getSubcommandGroup of %1 required: %2",
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
      "message0": "getBoolean of %1 name: %2 required: %3",
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
      "message0": "getChannel of %1 name: %2 required: %3",
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
      "message0": "getString of %1 name: %2 required: %3",
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
      "message0": "getInteger of %1 name: %2 required: %3",
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
      "message0": "getNumber of %1 name: %2 required: %3",
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
      "message0": "getUser of %1 name: %2 required: %3",
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
      "message0": "getMember of %1 name: %2 required: %3",
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
      "message0": "getRole of %1 name: %2 required: %3",
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
      "message0": "getMentionable of %1 name: %2 required: %3",
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
      "message0": "getMessage of %1 name: %2 required: %3",
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
      "message0": "getFocused of %1 getFull: %2",
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
