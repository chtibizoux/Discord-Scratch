'use strict';

goog.provide('Blockly.Blocks.sweepers');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['sweepers_options'] = {
  init: function() {
    this.jsonInit({
      "message0": "options of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        }
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "output_string"]
    });
  }
};

Blockly.Blocks['sweepers_intervals'] = {
  init: function() {
    this.jsonInit({
      "message0": "intervals of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        }
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "output_string"]
    });
  }
};

Blockly.Blocks['sweepers_sweepApplicationCommands'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep applicationcommands of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepBans'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep bans of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepEmojis'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep emojis of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepInvites'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep invites of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepGuildMembers'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep guildmembers of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepMessages'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep messages of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepPresences'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep presences of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepReactions'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep reactions of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepStageInstances'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep stageinstances of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepThreadMembers'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep threadmembers of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepThreads'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep threads of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepUsers'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep users of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_sweepVoiceStates'] = {
  init: function() {
    this.jsonInit({
      "message0": "sweep voicestates of %1 filter: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "FILTER"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_destroy'] = {
  init: function() {
    this.jsonInit({
      "message0": "destroy of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_filterByLifetime'] = {
  init: function() {
    this.jsonInit({
      "message0": "filter bylifetime of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_archivedThreadSweepFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "archived threadsweepfilter of %1 lifetime: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "LIFETIME"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_expiredInviteSweepFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "expired invitesweepfilter of %1 lifetime: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "LIFETIME"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};

Blockly.Blocks['sweepers_outdatedMessageSweepFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "outdated messagesweepfilter of %1 lifetime: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SWEEPERS"
        },
        {
          "type": "input_value",
          "name": "LIFETIME"
        },
      ],
      "category": Blockly.Categories.sweepers,
      "extensions": ["colours_sweepers", "shape_statement"]
    });
  }
};
