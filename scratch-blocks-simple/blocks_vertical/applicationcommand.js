'use strict';

goog.provide('Blockly.Blocks.applicationcommand');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['applicationcommand_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_applicationid'] = {
  init: function() {
    this.jsonInit({
      "message0": "application id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_guildid'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_permissions'] = {
  init: function() {
    this.jsonInit({
      "message0": "permissions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_defaultpermission'] = {
  init: function() {
    this.jsonInit({
      "message0": "default permission of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_version'] = {
  init: function() {
    this.jsonInit({
      "message0": "version of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_manager'] = {
  init: function() {
    this.jsonInit({
      "message0": "manager of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        }
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "output_string"]
    });
  }
};

Blockly.Blocks['applicationcommand_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_setDescription'] = {
  init: function() {
    this.jsonInit({
      "message0": "set description of %1 description: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "DESCRIPTION"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_setDefaultPermission'] = {
  init: function() {
    this.jsonInit({
      "message0": "set defaultpermission of %1 defaultPermission: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "DEFAULTPERMISSION"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_setOptions'] = {
  init: function() {
    this.jsonInit({
      "message0": "set options of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 command: %2 enforceOptionOrder: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "ENFORCEOPTIONORDER"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};

Blockly.Blocks['applicationcommand_optionsEqual'] = {
  init: function() {
    this.jsonInit({
      "message0": "options equal of %1 existing: %2 options: %3 enforceOptionOrder: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "APPLICATIONCOMMAND"
        },
        {
          "type": "input_value",
          "name": "EXISTING"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "ENFORCEOPTIONORDER"
        },
      ],
      "category": Blockly.Categories.applicationcommand,
      "extensions": ["colours_applicationcommand", "shape_statement"]
    });
  }
};
