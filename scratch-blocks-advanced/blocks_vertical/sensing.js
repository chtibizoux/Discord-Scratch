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

goog.provide('Blockly.Blocks.sensing');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['sensing_log'] = {
  init: function() {
    this.jsonInit({
      "message0": "log %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks["sensing_bot"] = {
  init: function() {
    this.jsonInit({
      "message0": "bot client",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks["sensing_user"] = {
  init: function() {
    this.jsonInit({
      "message0": "bot user",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_getid'] = {
  init: function() {
    this.jsonInit({
      "message0": "get id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_readyAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "ready at",
      "args0": [
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

// Blockly.Blocks['sensing_sweepers'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "sweepers of %1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "sensing"
//         }
//       ],
//       "category": Blockly.Categories.sensing,
//       "extensions": ["colours_sensing", "output_string"]
//     });
//   }
// };

Blockly.Blocks['sensing_readyTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "ready timestamp",
      "args0": [
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_uptime'] = {
  init: function() {
    this.jsonInit({
      "message0": "uptime",
      "args0": [
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options",
      "args0": [
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_isReady'] = {
  init: function() {
    this.jsonInit({
      "message0": "is ready",
      "args0": [
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_boolean"]
    });
  }
};

// Blockly.Blocks['sensing_fetchInvite'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "fetch invite %1",
//       "message1": "%1",
//       "message2": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "INVITE"
//         },
//       ],
//       "args1": [
//         {
//           "type": "input_value",
//           "name": "GETOBJECT"
//         }
//       ],
//       "args2": [
//         {
//           "type": "input_statement",
//           "name": "DO"
//         }
//       ],
//       "category": Blockly.Categories.sensing,
//       "extensions": ["colours_sensing", "shape_statement"]
//     });
//   }
// };

// Blockly.Blocks['sensing_fetchGuildTemplate'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "fetch guild template %1",
//       "message1": "%1",
//       "message2": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "TEMPLATE"
//         },
//       ],
//       "args1": [
//         {
//           "type": "input_value",
//           "name": "GETOBJECT"
//         }
//       ],
//       "args2": [
//         {
//           "type": "input_statement",
//           "name": "DO"
//         }
//       ],
//       "category": Blockly.Categories.sensing,
//       "extensions": ["colours_sensing", "shape_statement"]
//     });
//   }
// };

// Blockly.Blocks['sensing_fetchWebhook'] = {
//   init: function() {
//     this.jsonInit({
//       "message0": "fetch webhook %1 ",
//       "message1": "%1",
//       "message2": "%1",
//       "args0": [
//         {
//           "type": "input_value",
//           "name": "ID"
//         },
//       ],
//       "args1": [
//         {
//           "type": "input_value",
//           "name": "GETOBJECT"
//         }
//       ],
//       "args2": [
//         {
//           "type": "input_statement",
//           "name": "DO"
//         }
//       ],
//       "category": Blockly.Categories.sensing,
//       "extensions": ["colours_sensing", "shape_statement"]
//     });
//   }
// };

Blockly.Blocks['sensing_generateInvite'] = {
  init: function() {
    this.jsonInit({
      "message0": "generate invite options: %1",
      "args0": [
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_string"]
    });
  }
};


Blockly.Blocks['sensing_then'] = {
  init: function() {
    this.jsonInit({
      "message0": "then %1",
      "message1": "%1",
      "message2": "catch %1",
      "message3": "%1",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "args1": [
        {
          "type": "input_statement",
          "name": "THEN"
        }
      ],
      "args2": [
        {
          "type": "input_value",
          "name": "ERROR"
        }
      ],
      "args3": [
        {
          "type": "input_statement",
          "name": "CATCH"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_thenobject'] = {
  init: function() {
    this.jsonInit({
      "message0": "object",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_data", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_catcherror'] = {
  init: function() {
    this.jsonInit({
      "message0": "error",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_data", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch %1 with id %2 in %3",
      "message1": "%1",
      "message2": "%1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["message", 'MESSAGE'],
            ["channel", 'CHANNEL'],
            ["guild", 'GUILD'],
            ["role", 'ROLE'],
            ["emojis", 'EMOJIS'],
            ["command", 'COMMAND'],
          ]
        },
        {
          "type": "input_value",
          "name": "ID"
        },
        {
          "type": "input_value",
          "name": "OBJECT"
        }
      ],
      "args1": [
        {
          "type": "input_value",
          "name": "GETOBJECT"
        }
      ],
      "args2": [
        {
          "type": "input_statement",
          "name": "DO"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_fetchobject'] = {
  init: function() {
    this.jsonInit({
      "message0": "object",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_data", "output_string"]
    });
  }
};

Blockly.Blocks['sensing_resetdatetonow'] = {
  init: function() {
    this.jsonInit({
      "message0": "reset date to now",
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_resetdate'] = {
  init: function() {
    this.jsonInit({
      "message0": "reset date to %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_setdate'] = {
  init: function() {
    this.jsonInit({
      "message0": "set date %1 at %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly.Msg.SENSING_CURRENT_YEAR, 'YEAR'],
            [Blockly.Msg.SENSING_CURRENT_MONTH, 'MONTH'],
            [Blockly.Msg.SENSING_CURRENT_DATE, 'DATE'],
            [Blockly.Msg.SENSING_CURRENT_HOUR, 'HOUR'],
            [Blockly.Msg.SENSING_CURRENT_MINUTE, 'MINUTE'],
            [Blockly.Msg.SENSING_CURRENT_SECOND, 'SECOND'],
            ["milliseconds", 'MILLISECOND']
          ]
        },
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "shape_statement"]
    });
  }
};

Blockly.Blocks['sensing_getdate'] = {
  init: function() {
    this.jsonInit({
      "message0": "date %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly.Msg.SENSING_CURRENT_YEAR, 'YEAR'],
            [Blockly.Msg.SENSING_CURRENT_MONTH, 'MONTH'],
            [Blockly.Msg.SENSING_CURRENT_DATE, 'DATE'],
            [Blockly.Msg.SENSING_CURRENT_DAYOFWEEK, 'DAYOFWEEK'],
            [Blockly.Msg.SENSING_CURRENT_HOUR, 'HOUR'],
            [Blockly.Msg.SENSING_CURRENT_MINUTE, 'MINUTE'],
            [Blockly.Msg.SENSING_CURRENT_SECOND, 'SECOND'],
            ["milliseconds since 1970", 'MILLISECONDSINCE1970']
          ]
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};

Blockly.Blocks['sensing_current'] = {
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.SENSING_CURRENT,
      "args0": [
        {
          "type": "field_dropdown",
          "name": "CURRENTMENU",
          "options": [
            [Blockly.Msg.SENSING_CURRENT_YEAR, 'YEAR'],
            [Blockly.Msg.SENSING_CURRENT_MONTH, 'MONTH'],
            [Blockly.Msg.SENSING_CURRENT_DATE, 'DATE'],
            [Blockly.Msg.SENSING_CURRENT_DAYOFWEEK, 'DAYOFWEEK'],
            [Blockly.Msg.SENSING_CURRENT_HOUR, 'HOUR'],
            [Blockly.Msg.SENSING_CURRENT_MINUTE, 'MINUTE'],
            [Blockly.Msg.SENSING_CURRENT_SECOND, 'SECOND'],
            ["milliseconds", 'MILLISECOND'],
            ["milliseconds since 1970", 'MILLISECONDSINCE1970']
          ]
        }
      ],
      "category": Blockly.Categories.sensing,
      "extensions": ["colours_sensing", "output_number"]
    });
  }
};
