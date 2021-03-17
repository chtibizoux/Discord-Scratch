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

goog.provide('Blockly.Blocks.channel');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

// Blockly.Blocks['channel_'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "CHANNEL"
//         }
//       ],
//       "category": Blockly.Categories.channel,
//       "extensions": ["colours_channel", "shape_statement"]
//     });
//   }
// };

// Blockly.Blocks['channel_send'] = {
//   /**
//    * Block to Report if its touching a Object.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": "send %1 in %2",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "TEXT"
//         },
//         {
//           "type": "input_value",
//           "name": "OBJECT"
//         }
//       ],
//       "category": Blockly.Categories.message,
//       "extensions": ["colours_message", "shape_statement"]
//     });
//   }
// };