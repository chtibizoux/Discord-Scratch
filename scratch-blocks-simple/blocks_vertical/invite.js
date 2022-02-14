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

Blockly.Blocks['invite_presenceCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "presenceCount of %1",
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

Blockly.Blocks['invite_memberCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "memberCount of %1",
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

Blockly.Blocks['invite_maxAge'] = {
  init: function() {
    this.jsonInit({
      "message0": "maxAge of %1",
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

Blockly.Blocks['invite_maxUses'] = {
  init: function() {
    this.jsonInit({
      "message0": "maxUses of %1",
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

Blockly.Blocks['invite_inviterId'] = {
  init: function() {
    this.jsonInit({
      "message0": "inviterId of %1",
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

Blockly.Blocks['invite_targetUser'] = {
  init: function() {
    this.jsonInit({
      "message0": "targetUser of %1",
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

Blockly.Blocks['invite_targetApplication'] = {
  init: function() {
    this.jsonInit({
      "message0": "targetApplication of %1",
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

Blockly.Blocks['invite_targetType'] = {
  init: function() {
    this.jsonInit({
      "message0": "targetType of %1",
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

Blockly.Blocks['invite_channelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "channelId of %1",
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

Blockly.Blocks['invite_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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

Blockly.Blocks['invite_stageInstance'] = {
  init: function() {
    this.jsonInit({
      "message0": "stageInstance of %1",
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

Blockly.Blocks['invite_guildScheduledEvent'] = {
  init: function() {
    this.jsonInit({
      "message0": "guildScheduledEvent of %1",
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

Blockly.Blocks['invite_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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

Blockly.Blocks['invite_expiresTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "expiresTimestamp of %1",
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

Blockly.Blocks['invite_expiresAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "expiresAt of %1",
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

Blockly.Blocks['invite_INVITES_PATTERN'] = {
  init: function() {
    this.jsonInit({
      "message0": "INVITES_PATTERN of %1",
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
      "message0": "toString of %1",
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
