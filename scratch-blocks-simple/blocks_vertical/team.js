'use strict';

goog.provide('Blockly.Blocks.team');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['team_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_ownerid'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_owner'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        }
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "output_string"]
    });
  }
};

Blockly.Blocks['team_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "shape_statement"]
    });
  }
};

Blockly.Blocks['team_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "TEAM"
        },
      ],
      "category": Blockly.Categories.team,
      "extensions": ["colours_team", "shape_statement"]
    });
  }
};
