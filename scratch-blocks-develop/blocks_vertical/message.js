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

goog.provide('Blockly.Blocks.message');

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
          "category": Blockly.Categories.message,
          "extensions": ["colours_message"]
      });
  }
};

Blockly.Blocks['message_activitypartyID'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "party ID of %1 activity",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_activitytype'] = {
  /**
   * Block to Report if its touching a Object.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "type of %1 activity",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_content'] = {
  init: function() {
    this.jsonInit({
      "message0": "content of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_cleancontent'] = {
  init: function() {
    this.jsonInit({
      "message0": "clean content of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_attachements'] = {
  init: function() {
    this.jsonInit({
      "message0": "collection of %1 attachements",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_type'] = {
  init: function() {
    this.jsonInit({
      "message0": "type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_webhookID'] = {
  init: function() {
    this.jsonInit({
      "message0": "webhook ID of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_edits'] = {
  init: function() {
    this.jsonInit({
      "message0": "list of %1 edits",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reactions'] = {
  init: function() {
    this.jsonInit({
      "message0": "collection of %1 reactions",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_removereactions'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove all reactions of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_reactionsresolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve reaction %2 in %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reactionsresolveid'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve id of reaction %2 in %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "REACTION"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_embeds'] = {
  init: function() {
    this.jsonInit({
      "message0": "list of %1 embeds",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_mentionseveryone'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 contains @everyone or @here",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_boolean"]
    });
  }
};

Blockly.Blocks['message_mentionscollection'] = {
  init: function() {
    this.jsonInit({
      "message0": "collection of %1 mentionned in %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["channels", 'channels'],
            ["crosspostedChannels", 'crosspostedChannels'],
            ["members", 'members'],
            ["roles", 'roles'],
            ["guild", 'guild'],
            ["users", 'users']
          ]
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_mentionshas'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 is mentionned in %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_boolean"]
    });
  }
};

Blockly.Blocks['message_timestamps'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 of %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["created date", 'createdAt'],
            ["created timestamp", 'createdTimestamp'],
            ["edited date", 'editedAt'],
            ["edited timestamp", 'editedTimestamp']
          ]
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reference'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 of crossposted message of %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["channelID", 'channelID'],
            ["guildID", 'guildID'],
            ["messageID", 'messageID']
          ]
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_flagsbitfield'] = {
  init: function() {
    this.jsonInit({
      "message0": "flags bitfield of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_flagsadd'] = {
  init: function() {
    this.jsonInit({
      "message0": "Add %2 at flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "BITS"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_flagsany'] = {
  init: function() {
    this.jsonInit({
      "message0": "Bitfield %2 in flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "BIT"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_flagsfreeze'] = {
  init: function() {
    this.jsonInit({
      "message0": "freeze flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_flagshas'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 is in flags of %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OBJECT"
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_boolean"]
    });
  }
};

Blockly.Blocks['message_flagsmissing'] = {
  init: function() {
    this.jsonInit({
      "message0": "list of missing bits in %2 in flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "BITS"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_flagsremove'] = {
  init: function() {
    this.jsonInit({
      "message0": "Remove %2 in flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "BITS"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_flagsserialize'] = {
  init: function() {
    this.jsonInit({
      "message0": "dictionary of serialized bits in flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_flagstoarray'] = {
  init: function() {
    this.jsonInit({
      "message0": "list of bits in flags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_getboolean'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 is %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["crosspostable", 'crosspostable'],
            ["deletable", 'deletable'],
            ["deleted", 'deleted'],
            ["editable", 'editable'],
            ["pinnable", 'pinnable'],
            ["pinned", 'pinned'],
            ["tts", 'tts'],
            ["system", 'system'],
            ["partial", 'partial']
          ]
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_boolean"]
    });
  }
};

Blockly.Blocks['message_getobject'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1 of %2",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "OBJECTMENU",
          "options": [
            ["author", 'author'],
            ["member", 'member'],
            ["client", 'client'],
            ["channel", 'channel'],
            ["guild", 'guild'],
            ["application", 'application']
          ]
        },
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "output_string"]
    });
  }
};

Blockly.Blocks['message_reply'] = {
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
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_edit'] = {
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
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete %1 with timeout %2 and reason %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "TIMEOUT"
        },
        {
          "type": "input_value",
          "name": "REASON"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_reaction'] = {
  init: function() {
    this.jsonInit({
      "message0": "%1",
      "args0": [
        {
          "type": "field_emoji",
          "name": "REACTION"
        }
      ],
      "category": Blockly.Categories.message,
      "colour": Blockly.Colours.textField,
      "colourSecondary": Blockly.Colours.textField,
      "colourTertiary": Blockly.Colours.textField,
      "extensions": ["output_string"]
    });
  }
};

Blockly.Blocks['message_react'] = {
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
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_pin'] = {
  init: function() {
    this.jsonInit({
      "message0": "pin %1 with reason %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_unpin'] = {
  init: function() {
    this.jsonInit({
      "message0": "unpin %1 with reason %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_crosspost'] = {
  init: function() {
    this.jsonInit({
      "message0": "crosspost %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_suppressembeds'] = {
  init: function() {
    this.jsonInit({
      "message0": "suppress embeds of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};

Blockly.Blocks['message_fetchwebhook'] = {
  init: function () {
    this.jsonInit({
      "message0": "fetch webhook of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGE"
        }
      ],
      "category": Blockly.Categories.message,
      "extensions": ["colours_message", "shape_statement"]
    });
  }
};