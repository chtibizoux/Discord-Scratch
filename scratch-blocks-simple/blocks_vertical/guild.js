'use strict';

goog.provide('Blockly.Blocks.guild');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['guild_commands'] = {
  init: function() {
    this.jsonInit({
      "message0": "commands of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_members'] = {
  init: function() {
    this.jsonInit({
      "message0": "members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_channels'] = {
  init: function() {
    this.jsonInit({
      "message0": "channels of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_bans'] = {
  init: function() {
    this.jsonInit({
      "message0": "bans of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_roles'] = {
  init: function() {
    this.jsonInit({
      "message0": "roles of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_presences'] = {
  init: function() {
    this.jsonInit({
      "message0": "presences of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_voicestates'] = {
  init: function() {
    this.jsonInit({
      "message0": "voice states of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_stageinstances'] = {
  init: function() {
    this.jsonInit({
      "message0": "stage instances of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_invites'] = {
  init: function() {
    this.jsonInit({
      "message0": "invites of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_scheduledevents'] = {
  init: function() {
    this.jsonInit({
      "message0": "scheduled events of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_available'] = {
  init: function() {
    this.jsonInit({
      "message0": "available of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_shardid'] = {
  init: function() {
    this.jsonInit({
      "message0": "shard id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_shard'] = {
  init: function() {
    this.jsonInit({
      "message0": "shard of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_discoverysplash'] = {
  init: function() {
    this.jsonInit({
      "message0": "discovery splash of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_membercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "member count of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_large'] = {
  init: function() {
    this.jsonInit({
      "message0": "large of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_premiumprogressbarenabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "premium progressbarenabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_applicationid'] = {
  init: function() {
    this.jsonInit({
      "message0": "application id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_afktimeout'] = {
  init: function() {
    this.jsonInit({
      "message0": "afk timeout of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_afkchannelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "afk channelid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_systemchannelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "system channelid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_premiumtier'] = {
  init: function() {
    this.jsonInit({
      "message0": "premium tier of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_premiumsubscriptioncount'] = {
  init: function() {
    this.jsonInit({
      "message0": "premium subscriptioncount of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_widgetenabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "widget enabled of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_widgetchannelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "widget channelid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_explicitcontentfilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "explicit contentfilter of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_mfalevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "mfa level of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_joinedtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "joined timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_defaultmessagenotifications'] = {
  init: function() {
    this.jsonInit({
      "message0": "default messagenotifications of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_systemchannelflags'] = {
  init: function() {
    this.jsonInit({
      "message0": "system channelflags of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_maximummembers'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximum members of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_maximumpresences'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximum presences of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_approximatemembercount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximate membercount of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_approximatepresencecount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximate presencecount of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_vanityurluses'] = {
  init: function() {
    this.jsonInit({
      "message0": "vanity urluses of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_ruleschannelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "rules channelid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_publicupdateschannelid'] = {
  init: function() {
    this.jsonInit({
      "message0": "public updateschannelid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_preferredlocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "preferred locale of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_ownerid'] = {
  init: function() {
    this.jsonInit({
      "message0": "owner id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_emojis'] = {
  init: function() {
    this.jsonInit({
      "message0": "emojis of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_stickers'] = {
  init: function() {
    this.jsonInit({
      "message0": "stickers of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_joinedat'] = {
  init: function() {
    this.jsonInit({
      "message0": "joined at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_afkchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "afk channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_systemchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "system channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_widgetchannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "widget channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_ruleschannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "rules channel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_publicupdateschannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "public updateschannel of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_me'] = {
  init: function() {
    this.jsonInit({
      "message0": "me of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_maximumbitrate'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximum bitrate of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_voiceadaptercreator'] = {
  init: function() {
    this.jsonInit({
      "message0": "voice adaptercreator of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_splash'] = {
  init: function() {
    this.jsonInit({
      "message0": "splash of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_banner'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_verificationlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "verification level of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_vanityurlcode'] = {
  init: function() {
    this.jsonInit({
      "message0": "vanity urlcode of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_nsfwlevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfw level of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_icon'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_features'] = {
  init: function() {
    this.jsonInit({
      "message0": "features of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_nameacronym'] = {
  init: function() {
    this.jsonInit({
      "message0": "name acronym of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_partnered'] = {
  init: function() {
    this.jsonInit({
      "message0": "partnered of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_verified'] = {
  init: function() {
    this.jsonInit({
      "message0": "verified of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        }
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "output_string"]
    });
  }
};

Blockly.Blocks['guild_discoverySplashURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "discovery splashurl of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchOwner'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch owner of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchIntegrations'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch integrations of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchTemplates'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch templates of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchWelcomeScreen'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch welcomescreen of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_createTemplate'] = {
  init: function() {
    this.jsonInit({
      "message0": "create template of %1 name: %2 description: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "DESCRIPTION"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchPreview'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch preview of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchVanityData'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch vanitydata of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchWebhooks'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch webhooks of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchWidget'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch widget of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchWidgetSettings'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch widgetsettings of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetchAuditLogs'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch auditlogs of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_edit'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit of %1 data: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_editWelcomeScreen'] = {
  init: function() {
    this.jsonInit({
      "message0": "edit welcomescreen of %1 data: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "DATA"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setExplicitContentFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "set explicitcontentfilter of %1 explicitContentFilter: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "EXPLICITCONTENTFILTER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setDefaultMessageNotifications'] = {
  init: function() {
    this.jsonInit({
      "message0": "set defaultmessagenotifications of %1 defaultMessageNotifications: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "DEFAULTMESSAGENOTIFICATIONS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setSystemChannelFlags'] = {
  init: function() {
    this.jsonInit({
      "message0": "set systemchannelflags of %1 systemChannelFlags: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "SYSTEMCHANNELFLAGS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setVerificationLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set verificationlevel of %1 verificationLevel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "VERIFICATIONLEVEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setAFKChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set afkchannel of %1 afkChannel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "AFKCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setSystemChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set systemchannel of %1 systemChannel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "SYSTEMCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setAFKTimeout'] = {
  init: function() {
    this.jsonInit({
      "message0": "set afktimeout of %1 afkTimeout: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "AFKTIMEOUT"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setIcon'] = {
  init: function() {
    this.jsonInit({
      "message0": "set icon of %1 icon: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "ICON"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setOwner'] = {
  init: function() {
    this.jsonInit({
      "message0": "set owner of %1 owner: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OWNER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setSplash'] = {
  init: function() {
    this.jsonInit({
      "message0": "set splash of %1 splash: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "SPLASH"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setDiscoverySplash'] = {
  init: function() {
    this.jsonInit({
      "message0": "set discoverysplash of %1 discoverySplash: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "DISCOVERYSPLASH"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setBanner'] = {
  init: function() {
    this.jsonInit({
      "message0": "set banner of %1 banner: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "BANNER"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setRulesChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set ruleschannel of %1 rulesChannel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "RULESCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setPublicUpdatesChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "set publicupdateschannel of %1 publicUpdatesChannel: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "PUBLICUPDATESCHANNEL"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setPreferredLocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "set preferredlocale of %1 preferredLocale: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "PREFERREDLOCALE"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setPremiumProgressBarEnabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "set premiumprogressbarenabled of %1 enabled: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "ENABLED"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_setWidgetSettings'] = {
  init: function() {
    this.jsonInit({
      "message0": "set widgetsettings of %1 settings: %2 reason: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "SETTINGS"
        },
        {
          "type": "input_value",
          "name": "REASON"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_leave'] = {
  init: function() {
    this.jsonInit({
      "message0": "leave of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_delete'] = {
  init: function() {
    this.jsonInit({
      "message0": "delete of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 guild: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_bannerURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_splashURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "splash url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_iconURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "icon url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_fetch'] = {
  init: function() {
    this.jsonInit({
      "message0": "fetch of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};

Blockly.Blocks['guild_toString'] = {
  init: function() {
    this.jsonInit({
      "message0": "to string of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "GUILD"
        },
      ],
      "category": Blockly.Categories.guild,
      "extensions": ["colours_guild", "shape_statement"]
    });
  }
};
