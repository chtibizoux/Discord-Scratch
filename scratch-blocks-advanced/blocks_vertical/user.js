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

goog.provide('Blockly.Blocks.user');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');


Blockly.Blocks['user_createdm'] = {
  init: function() {
    this.jsonInit({
      "message0": "create dm channel with %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_deletedm'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete dm channel with %1",
      "args0": [
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};

Blockly.Blocks['user_send'] = {
  init: function() {
    this.jsonInit({
      "message0": "send %1 at %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "USER"
        }
      ],
      "category": Blockly.Categories.user,
      "extensions": ["colours_user", "shape_statement"]
    });
  }
};
// Blockly.Blocks['user_'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "USER"
//         }
//       ],
//       "category": Blockly.Categories.user,
//       "extensions": ["colours_user", "shape_statement"]
//     });
//   }
// };