/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.guild');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['guild_createguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "create guild %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

// TODO: Move to commands
Blockly.Blocks['guild_createcommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "create command %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_deletecommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete command %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_editcommand'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit command %1 with %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "DATA"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_setcommands'] = {
  init: function() {
    this.jsonInit({
      "message0": "set commands %1",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDS"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_createcommandforguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "create command %1 for guild %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_deletecommandforguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete command %1 for guild %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_editcommandforguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit command %1 with %2 for guild %3",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMAND"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
Blockly.Blocks['guild_setcommandsforguild'] = {
  init: function() {
    this.jsonInit({
      "message0": "set commands %1 for guild %2",
      "args0": [
        {
          "type": "input_value",
          "name": "COMMANDS"
        },
        {
          "type": "input_value",
          "name": "GUILDID"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_systemchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "system channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};