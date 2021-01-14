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

Blockly.Blocks['discord_gotoxyz'] = {
  /**
   * Block to go to X, Y.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "aller à x: %1 y: %2 z: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        },
        {
          "type": "input_value",
          "name": "Z"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_goto'] = {
  /**
   * Block to go to a menu item.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_GOTO,
      "args0": [
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_rotatetoxyz'] = {
  /**
   * Block to go to X, Y.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "tourner à x: %1 y: %2 z: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        },
        {
          "type": "input_value",
          "name": "Z"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_pointtoposition'] = {
  /**
   * Block to point in direction.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "s'orienter vers x: %1 y: %2 z: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        },
        {
          "type": "input_value",
          "name": "Z"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_pointtowards'] = {
  /**
   * Block to point in direction.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_POINTTOWARDS,
      "args0": [
        {
          "type": "input_value",
          "name": "TO"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_scaletoxyz'] = {
  /**
   * Block to go to X, Y.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "mettre à l'échelle à x: %1 y: %2 z: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "X"
        },
        {
          "type": "input_value",
          "name": "Y"
        },
        {
          "type": "input_value",
          "name": "Z"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

// Blockly.Blocks['discord_glidesecstoxy'] = {
//   /**
//    * Block to glide for a specified time.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.discord_GLIDESECSTOXY,
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "SECS"
//         },
//         {
//           "type": "input_value",
//           "name": "X"
//         },
//         {
//           "type": "input_value",
//           "name": "Y"
//         }
//       ],
//       "category": Blockly.Categories.discord,
//       "extensions": ["colours_discord", "shape_statement"]
//     });
//   }
// };
//
// Blockly.Blocks['discord_glideto_menu'] = {
//   /**
//    * Glide to drop-down menu
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": "%1",
//       "args0": [
//         {
//           "type": "field_dropdown",
//           "name": "TO",
//           "options": [
//             [Blockly.Msg.discord_GLIDETO_POINTER, '_mouse_'],
//             [Blockly.Msg.discord_GLIDETO_RANDOM, '_random_']
//           ]
//         }
//       ],
//       "colour": Blockly.Colours.discord.secondary,
//       "colourSecondary": Blockly.Colours.discord.secondary,
//       "colourTertiary": Blockly.Colours.discord.tertiary,
//       "extensions": ["output_string"]
//     });
//   }
// };
//
// Blockly.Blocks['discord_glideto'] = {
//   /**
//    * Block to glide to a menu item
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.jsonInit({
//       "message0": Blockly.Msg.discord_GLIDETO,
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "SECS"
//         },
//         {
//           "type": "input_value",
//           "name": "TO"
//         }
//       ],
//       "category": Blockly.Categories.discord,
//       "extensions": ["colours_discord", "shape_statement"]
//     });
//   }
// };

Blockly.Blocks['discord_changeby'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "ajouter %2 à %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VARIABLE",
          "options": [
            ["position x", 'POSITIONX'],
            ["position y", 'POSITIONY'],
            ["position z", 'POSITIONZ'],
            ["direction x", 'ROTATIONX'],
            ["direction y", 'ROTATIONY'],
            ["direction z", 'ROTATIONZ'],
            ["taille x", 'SCALEX'],
            ["taille y", 'SCALEY'],
            ["taille z", 'SCALEZ']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_set'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "mettre %1 à %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VARIABLE",
          "options": [
            ["position x", 'POSITIONX'],
            ["position y", 'POSITIONY'],
            ["position z", 'POSITIONZ'],
            ["rotation x", 'ROTATIONX'],
            ["rotation y", 'ROTATIONY'],
            ["rotation z", 'ROTATIONZ'],
            ["scale x", 'SCALEX'],
            ["scale y", 'SCALEY'],
            ["scale z", 'SCALEZ']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_variable'] = {
  /**
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "VARIABLE",
          "options": [
            ["position x", 'POSITIONX'],
            ["position y", 'POSITIONY'],
            ["position z", 'POSITIONZ'],
            ["rotation x", 'ROTATIONX'],
            ["rotation y", 'ROTATIONY'],
            ["rotation z", 'ROTATIONZ'],
            ["scale x", 'SCALEX'],
            ["scale y", 'SCALEY'],
            ["scale z", 'SCALEZ']
          ]
        }
      ],
      "category": Blockly.Categories.discord,
      "checkboxInFlyout": true,
      "extensions": ["colours_discord", "output_number"]
    });
  }
};

Blockly.Blocks['discord_scroll_right'] = {
  /**
   * Block to scroll the stage right. Does not actually do anything. This is
   * an obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_SCROLLRIGHT,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCE"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_scroll_up'] = {
  /**
   * Block to scroll the stage up. Does not actually do anything. This is an
   * obsolete block that is implemented for compatibility with Scratch 2.0
   * projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_SCROLLUP,
      "args0": [
        {
          "type": "input_value",
          "name": "DISTANCE"
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_align_scene'] = {
  /**
   * Block to change the stage's scrolling alignment. Does not actually do
   * anything. This is an obsolete block that is implemented for compatibility
   * with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_ALIGNSCENE,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "ALIGNMENT",
          "options": [
            [Blockly.Msg.discord_ALIGNSCENE_BOTTOMLEFT, 'bottom-left'],
            [Blockly.Msg.discord_ALIGNSCENE_BOTTOMRIGHT, 'bottom-right'],
            [Blockly.Msg.discord_ALIGNSCENE_MIDDLE, 'middle'],
            [Blockly.Msg.discord_ALIGNSCENE_TOPLEFT, 'top-left'],
            [Blockly.Msg.discord_ALIGNSCENE_TOPRIGHT, 'top-right']
          ]
        }
      ],
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "shape_statement"]
    });
  }
};

Blockly.Blocks['discord_xscroll'] = {
  /**
   * Block to report the stage's scroll position's X value. Does not actually
   * do anything. This is an obsolete block that is implemented for
   * compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_XSCROLL,
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "output_number"]
    });
  }
};

Blockly.Blocks['discord_yscroll'] = {
  /**
   * Block to report the stage's scroll position's Y value. Does not actually
   * do anything. This is an obsolete block that is implemented for
   * compatibility with Scratch 2.0 projects.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.discord_YSCROLL,
      "category": Blockly.Categories.discord,
      "extensions": ["colours_discord", "output_number"]
    });
  }
};
