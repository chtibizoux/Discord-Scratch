'use strict';

goog.provide('Blockly.Blocks.guildauditlogsentry');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guildauditlogsentry_targettype'] = {
  init: function() {
    this.jsonInit({
      "message0": "target type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_actiontype'] = {
  init: function() {
    this.jsonInit({
      "message0": "action type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_action'] = {
  init: function() {
    this.jsonInit({
      "message0": "action of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_reason'] = {
  init: function() {
    this.jsonInit({
      "message0": "reason of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_executor'] = {
  init: function() {
    this.jsonInit({
      "message0": "executor of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_changes'] = {
  init: function() {
    this.jsonInit({
      "message0": "changes of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_extra'] = {
  init: function() {
    this.jsonInit({
      "message0": "extra of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_target'] = {
  init: function() {
    this.jsonInit({
      "message0": "target of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};

Blockly.Blocks['guildauditlogsentry_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILDAUDITLOGSENTRY"
        }
      ],
      "category": Blockly.Categories.guildauditlogsentry,
      "extensions": ["colours_guildauditlogsentry", "output_string"]
    });
  }
};
