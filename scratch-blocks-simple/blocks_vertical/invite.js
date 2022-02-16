'use strict';

goog.provide('Blockly.Blocks.invite');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['invite_guild'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_code'] = {
  init: function() {
    this.jsonInit({
      "message0": "code of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_presencecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "presence count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_membercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "member count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_temporary'] = {
  init: function() {
    this.jsonInit({
      "message0": "temporary of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_maxage'] = {
  init: function() {
    this.jsonInit({
      "message0": "max age of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_uses'] = {
  init: function() {
    this.jsonInit({
      "message0": "uses of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_maxuses'] = {
  init: function() {
    this.jsonInit({
      "message0": "max uses of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_inviterid'] = {
  init: function() {
    this.jsonInit({
      "message0": "inviter id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_inviter'] = {
  init: function() {
    this.jsonInit({
      "message0": "inviter of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_targetuser'] = {
  init: function() {
    this.jsonInit({
      "message0": "target user of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_targetapplication'] = {
  init: function() {
    this.jsonInit({
      "message0": "target application of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_targettype'] = {
  init: function() {
    this.jsonInit({
      "message0": "target type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_channelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_channel'] = {
  init: function() {
    this.jsonInit({
      "message0": "channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_stageinstance'] = {
  init: function() {
    this.jsonInit({
      "message0": "stage instance of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_guildscheduledevent'] = {
  init: function() {
    this.jsonInit({
      "message0": "guild scheduledevent of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_deletable'] = {
  init: function() {
    this.jsonInit({
      "message0": "deletable of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_expirestimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "expires timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_expiresat'] = {
  init: function() {
    this.jsonInit({
      "message0": "expires at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_invites_pattern'] = {
  init: function() {
    this.jsonInit({
      "message0": " invites_pattern of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        }
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "output_string"]
    });
  }
};

Blockly.Blocks['invite_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1 reason: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "shape_statement"]
    });
  }
};

Blockly.Blocks['invite_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "INVITE"
        },
      ],
      "category": Blockly.Categories.invite,
      "extensions": ["colours_invite", "shape_statement"]
    });
  }
};
