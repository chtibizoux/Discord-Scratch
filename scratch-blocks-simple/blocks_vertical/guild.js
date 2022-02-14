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
Blockly.Blocks['guild_voiceStates'] = {
  init: function() {
    this.jsonInit({
      "message0": "voiceStates of %1",
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
Blockly.Blocks['guild_stageInstances'] = {
  init: function() {
    this.jsonInit({
      "message0": "stageInstances of %1",
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
Blockly.Blocks['guild_scheduledEvents'] = {
  init: function() {
    this.jsonInit({
      "message0": "scheduledEvents of %1",
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
Blockly.Blocks['guild_shardId'] = {
  init: function() {
    this.jsonInit({
      "message0": "shardId of %1",
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
Blockly.Blocks['guild_discoverySplash'] = {
  init: function() {
    this.jsonInit({
      "message0": "discoverySplash of %1",
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
Blockly.Blocks['guild_memberCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "memberCount of %1",
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
Blockly.Blocks['guild_premiumProgressBarEnabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumProgressBarEnabled of %1",
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
Blockly.Blocks['guild_applicationId'] = {
  init: function() {
    this.jsonInit({
      "message0": "applicationId of %1",
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
Blockly.Blocks['guild_afkTimeout'] = {
  init: function() {
    this.jsonInit({
      "message0": "afkTimeout of %1",
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
Blockly.Blocks['guild_afkChannelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "afkChannelId of %1",
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
Blockly.Blocks['guild_systemChannelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "systemChannelId of %1",
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
Blockly.Blocks['guild_premiumTier'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumTier of %1",
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
Blockly.Blocks['guild_premiumSubscriptionCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "premiumSubscriptionCount of %1",
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
Blockly.Blocks['guild_widgetEnabled'] = {
  init: function() {
    this.jsonInit({
      "message0": "widgetEnabled of %1",
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
Blockly.Blocks['guild_widgetChannelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "widgetChannelId of %1",
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
Blockly.Blocks['guild_explicitContentFilter'] = {
  init: function() {
    this.jsonInit({
      "message0": "explicitContentFilter of %1",
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
Blockly.Blocks['guild_mfaLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "mfaLevel of %1",
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
Blockly.Blocks['guild_joinedTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedTimestamp of %1",
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
Blockly.Blocks['guild_defaultMessageNotifications'] = {
  init: function() {
    this.jsonInit({
      "message0": "defaultMessageNotifications of %1",
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
Blockly.Blocks['guild_systemChannelFlags'] = {
  init: function() {
    this.jsonInit({
      "message0": "systemChannelFlags of %1",
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
Blockly.Blocks['guild_maximumMembers'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximumMembers of %1",
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
Blockly.Blocks['guild_maximumPresences'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximumPresences of %1",
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
Blockly.Blocks['guild_approximateMemberCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximateMemberCount of %1",
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
Blockly.Blocks['guild_approximatePresenceCount'] = {
  init: function() {
    this.jsonInit({
      "message0": "approximatePresenceCount of %1",
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
Blockly.Blocks['guild_vanityURLUses'] = {
  init: function() {
    this.jsonInit({
      "message0": "vanityURLUses of %1",
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
Blockly.Blocks['guild_rulesChannelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "rulesChannelId of %1",
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
Blockly.Blocks['guild_publicUpdatesChannelId'] = {
  init: function() {
    this.jsonInit({
      "message0": "publicUpdatesChannelId of %1",
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
Blockly.Blocks['guild_preferredLocale'] = {
  init: function() {
    this.jsonInit({
      "message0": "preferredLocale of %1",
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
Blockly.Blocks['guild_ownerId'] = {
  init: function() {
    this.jsonInit({
      "message0": "ownerId of %1",
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
Blockly.Blocks['guild_joinedAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "joinedAt of %1",
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
Blockly.Blocks['guild_afkChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "afkChannel of %1",
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
Blockly.Blocks['guild_systemChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "systemChannel of %1",
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
Blockly.Blocks['guild_widgetChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "widgetChannel of %1",
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
Blockly.Blocks['guild_rulesChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "rulesChannel of %1",
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
Blockly.Blocks['guild_publicUpdatesChannel'] = {
  init: function() {
    this.jsonInit({
      "message0": "publicUpdatesChannel of %1",
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
Blockly.Blocks['guild_maximumBitrate'] = {
  init: function() {
    this.jsonInit({
      "message0": "maximumBitrate of %1",
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
Blockly.Blocks['guild_voiceAdapterCreator'] = {
  init: function() {
    this.jsonInit({
      "message0": "voiceAdapterCreator of %1",
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
Blockly.Blocks['guild_verificationLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "verificationLevel of %1",
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
Blockly.Blocks['guild_vanityURLCode'] = {
  init: function() {
    this.jsonInit({
      "message0": "vanityURLCode of %1",
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
Blockly.Blocks['guild_nsfwLevel'] = {
  init: function() {
    this.jsonInit({
      "message0": "nsfwLevel of %1",
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
Blockly.Blocks['guild_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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
Blockly.Blocks['guild_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
Blockly.Blocks['guild_nameAcronym'] = {
  init: function() {
    this.jsonInit({
      "message0": "nameAcronym of %1",
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
      "message0": "discoverySplashURL of %1 options: %2",
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
      "message0": "fetchOwner of %1 options: %2",
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
      "message0": "fetchIntegrations of %1",
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
      "message0": "fetchTemplates of %1",
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
      "message0": "fetchWelcomeScreen of %1",
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
      "message0": "createTemplate of %1 name: %2 description: %3",
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
      "message0": "fetchPreview of %1",
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
      "message0": "fetchVanityData of %1",
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
      "message0": "fetchWebhooks of %1",
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
      "message0": "fetchWidget of %1",
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
      "message0": "fetchWidgetSettings of %1",
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
      "message0": "fetchAuditLogs of %1 options: %2",
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
      "message0": "editWelcomeScreen of %1 data: %2",
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
      "message0": "setExplicitContentFilter of %1 explicitContentFilter: %2 reason: %3",
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
      "message0": "setDefaultMessageNotifications of %1 defaultMessageNotifications: %2 reason: %3",
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
      "message0": "setSystemChannelFlags of %1 systemChannelFlags: %2 reason: %3",
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
      "message0": "setName of %1 name: %2 reason: %3",
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
      "message0": "setVerificationLevel of %1 verificationLevel: %2 reason: %3",
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
      "message0": "setAFKChannel of %1 afkChannel: %2 reason: %3",
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
      "message0": "setSystemChannel of %1 systemChannel: %2 reason: %3",
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
      "message0": "setAFKTimeout of %1 afkTimeout: %2 reason: %3",
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
      "message0": "setIcon of %1 icon: %2 reason: %3",
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
      "message0": "setOwner of %1 owner: %2 reason: %3",
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
      "message0": "setSplash of %1 splash: %2 reason: %3",
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
      "message0": "setDiscoverySplash of %1 discoverySplash: %2 reason: %3",
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
      "message0": "setBanner of %1 banner: %2 reason: %3",
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
      "message0": "setRulesChannel of %1 rulesChannel: %2 reason: %3",
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
      "message0": "setPublicUpdatesChannel of %1 publicUpdatesChannel: %2 reason: %3",
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
      "message0": "setPreferredLocale of %1 preferredLocale: %2 reason: %3",
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
      "message0": "setPremiumProgressBarEnabled of %1 enabled: %2 reason: %3",
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
      "message0": "setWidgetSettings of %1 settings: %2 reason: %3",
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
      "message0": "bannerURL of %1 options: %2",
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
      "message0": "splashURL of %1 options: %2",
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
      "message0": "iconURL of %1 options: %2",
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
      "message0": "toString of %1",
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