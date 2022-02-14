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

Blockly.Blocks['voicestate_serverDeaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "serverDeaf of %1",
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

Blockly.Blocks['voicestate_serverMute'] = {
  init: function() {
    this.jsonInit({
      "message0": "serverMute of %1",
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

Blockly.Blocks['voicestate_selfDeaf'] = {
  init: function() {
    this.jsonInit({
      "message0": "selfDeaf of %1",
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

Blockly.Blocks['voicestate_selfMute'] = {
  init: function() {
    this.jsonInit({
      "message0": "selfMute of %1",
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

Blockly.Blocks['voicestate_selfVideo'] = {
  init: function() {
    this.jsonInit({
      "message0": "selfVideo of %1",
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

Blockly.Blocks['voicestate_sessionId'] = {
  init: function() {
    this.jsonInit({
      "message0": "sessionId of %1",
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

Blockly.Blocks['voicestate_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
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

Blockly.Blocks['voicestate_requestToSpeakTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "requestToSpeakTimestamp of %1",
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
      "message0": "setMute of %1 mute: %2 reason: %3",
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
      "message0": "setDeaf of %1 deaf: %2 reason: %3",
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
      "message0": "setChannel of %1 channel: %2 reason: %3",
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
      "message0": "setRequestToSpeak of %1 request: %2",
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
      "message0": "setSuppressed of %1 suppressed: %2",
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
