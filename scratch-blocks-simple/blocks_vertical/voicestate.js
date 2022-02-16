'use strict';

goog.provide('Blockly.Blocks.voicestate');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['voicestate_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_serverdeaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "server deaf of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_servermute'] = {
  init: function() {
    this.jsonInit({
      "message0": "server mute of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_selfdeaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "self deaf of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_selfmute'] = {
  init: function() {
    this.jsonInit({
      "message0": "self mute of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_selfvideo'] = {
  init: function() {
    this.jsonInit({
      "message0": "self video of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_sessionid'] = {
  init: function() {
    this.jsonInit({
      "message0": "session id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_streaming'] = {
  init: function() {
    this.jsonInit({
      "message0": "streaming of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_suppress'] = {
  init: function() {
    this.jsonInit({
      "message0": "suppress of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_requesttospeaktimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "request tospeaktimestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_member'] = {
  init: function() {
    this.jsonInit({
      "message0": "member of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_deaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "deaf of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_mute'] = {
  init: function() {
    this.jsonInit({
      "message0": "mute of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        }
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "output_string"]
    });
  }
};

Blockly.Blocks['voicestate_setMute'] = {
  init: function() {
    this.jsonInit({
      "message0": "set mute of %1 mute: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "MUTE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestate_setDeaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "set deaf of %1 deaf: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "DEAF"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestate_disconnect'] = {
  init: function() {
    this.jsonInit({
      "message0": "disconnect of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestate_setChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set channel of %1 channel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "CHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestate_setRequestToSpeak'] = {
  init: function() {
    this.jsonInit({
      "message0": "set requesttospeak of %1 request: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "REQUEST"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};

Blockly.Blocks['voicestate_setSuppressed'] = {
  init: function() {
    this.jsonInit({
      "message0": "set suppressed of %1 suppressed: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "VOICESTATE"
        },
        {
          "type": "input_value",
          "name": "SUPPRESSED"
        },
      ],
      "category": Blockly.Categories.voicestate,
      "extensions": ["colours_voicestate", "shape_statement"]
    });
  }
};
