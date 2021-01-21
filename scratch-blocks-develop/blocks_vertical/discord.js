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

goog.provide('Blockly.Blocks.discord');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['discord_token'] = {
  init: function() {
      this.jsonInit({
          "message0": "token: %1",
          "args0": [
              {
                  "type": "field_input",
                  "name": "TEXT"
              }
          ],
          "category": Blockly.Categories.sensing,
          "extensions": ["colours_discord"]
      });
  }
};

Blockly.Blocks['discord_reply'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "reply %1 at %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_send'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "send %1 in %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_editmessage'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "edit %2 with %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_deletemessage'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "delete %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_reaction'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_emoji",
          "name": "REACTION"
        }
      ],
      "category": Blockly.Categories.discord,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['discord_react'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "react at %2 with %1",
      "args0": [
        {
          "type": "input_value",
          "name": "REACTION"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};