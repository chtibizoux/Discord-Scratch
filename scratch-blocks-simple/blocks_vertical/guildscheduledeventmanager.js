'use strict';

goog.provide('Blockly.Blocks.guildscheduledeventmanager');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildscheduledeventmanager_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        }
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_cache'] = {
  init: function() {
    this.jsonInit({
      "message0": "cache of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        }
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        }
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "output_string"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_create'] = {
  init: function() {
    this.jsonInit({
      "message0": "create of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 guildScheduledEvent: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 guildScheduledEvent: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENT"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_fetchSubscribers'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetchSubscribers of %1 guildScheduledEvent: %2 options: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENT"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_resolve'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolve of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};

Blockly.Blocks['guildscheduledeventmanager_resolveId'] = {
  init: function() {
    this.jsonInit({
      "message0": "resolveId of %1 idOrInstance: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDSCHEDULEDEVENTMANAGER"
        },
        {
          "type": "input_value",
          "name": "IDORINSTANCE"
        },
      ],
      "category": Blockly.Categories.guildscheduledeventmanager,
      "extensions": ["colours_guildscheduledeventmanager", "shape_statement"]
    });
  }
};
