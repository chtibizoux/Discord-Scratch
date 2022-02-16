'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');
Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="BaseClient" id="baseclient" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseclient_on" id="baseclient_on"></block>' +
    '<block type="baseclient_options" id="baseclient_options"></block>' +
    '<block type="baseclient_destroy" id="baseclient_destroy">' +
    '</block>' +
  '</category>' +
  '<category name="Client" id="client" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="client_on" id="client_on"></block>' +
    '<block type="client_ws" id="client_ws"></block>' +
    '<block type="client_voice" id="client_voice"></block>' +
    '<block type="client_shard" id="client_shard"></block>' +
    '<block type="client_users" id="client_users"></block>' +
    '<block type="client_guilds" id="client_guilds"></block>' +
    '<block type="client_channels" id="client_channels"></block>' +
    '<block type="client_sweepers" id="client_sweepers"></block>' +
    '<block type="client_token" id="client_token"></block>' +
    '<block type="client_user" id="client_user"></block>' +
    '<block type="client_application" id="client_application"></block>' +
    '<block type="client_readyat" id="client_readyAt"></block>' +
    '<block type="client_emojis" id="client_emojis"></block>' +
    '<block type="client_readytimestamp" id="client_readyTimestamp"></block>' +
    '<block type="client_uptime" id="client_uptime"></block>' +
    '<block type="client_options" id="client_options"></block>' +
    '<block type="client_login" id="client_login">' +
      '<value name="TOKEN">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="client_isReady" id="client_isReady">' +
    '</block>' +
    '<block type="client_destroy" id="client_destroy">' +
    '</block>' +
    '<block type="client_fetchInvite" id="client_fetchInvite">' +
    '</block>' +
    '<block type="client_fetchGuildTemplate" id="client_fetchGuildTemplate">' +
    '</block>' +
    '<block type="client_fetchWebhook" id="client_fetchWebhook">' +
      '<value name="TOKEN">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="client_fetchVoiceRegions" id="client_fetchVoiceRegions">' +
    '</block>' +
    '<block type="client_fetchSticker" id="client_fetchSticker">' +
    '</block>' +
    '<block type="client_fetchPremiumStickerPacks" id="client_fetchPremiumStickerPacks">' +
    '</block>' +
    '<block type="client_sweepMessages" id="client_sweepMessages">' +
      '<value name="LIFETIME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="client_fetchGuildPreview" id="client_fetchGuildPreview">' +
    '</block>' +
    '<block type="client_fetchGuildWidget" id="client_fetchGuildWidget">' +
    '</block>' +
    '<block type="client_generateInvite" id="client_generateInvite">' +
    '</block>' +
  '</category>' +
  '<category name="ClientVoiceManager" id="clientvoicemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="clientvoicemanager_client" id="clientvoicemanager_client"></block>' +
    '<block type="clientvoicemanager_adapters" id="clientvoicemanager_adapters"></block>' +
  '</category>' +
  '<category name="WebhookClient" id="webhookclient" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="webhookclient_on" id="webhookclient_on"></block>' +
    '<block type="webhookclient_id" id="webhookclient_id"></block>' +
    '<block type="webhookclient_createdtimestamp" id="webhookclient_createdTimestamp"></block>' +
    '<block type="webhookclient_createdat" id="webhookclient_createdAt"></block>' +
    '<block type="webhookclient_url" id="webhookclient_url"></block>' +
    '<block type="webhookclient_options" id="webhookclient_options"></block>' +
    '<block type="webhookclient_send" id="webhookclient_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhookclient_sendSlackMessage" id="webhookclient_sendSlackMessage">' +
    '</block>' +
    '<block type="webhookclient_edit" id="webhookclient_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhookclient_fetchMessage" id="webhookclient_fetchMessage">' +
    '</block>' +
    '<block type="webhookclient_editMessage" id="webhookclient_editMessage">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhookclient_delete" id="webhookclient_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhookclient_deleteMessage" id="webhookclient_deleteMessage">' +
    '</block>' +
    '<block type="webhookclient_destroy" id="webhookclient_destroy">' +
    '</block>' +
  '</category>' +
  '<category name="WebSocketManager" id="websocketmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="websocketmanager_client" id="websocketmanager_client"></block>' +
    '<block type="websocketmanager_gateway" id="websocketmanager_gateway"></block>' +
    '<block type="websocketmanager_shards" id="websocketmanager_shards"></block>' +
    '<block type="websocketmanager_status" id="websocketmanager_status"></block>' +
    '<block type="websocketmanager_ping" id="websocketmanager_ping"></block>' +
  '</category>' +
  '<category name="WebSocketShard" id="websocketshard" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="websocketshard_on" id="websocketshard_on"></block>' +
    '<block type="websocketshard_manager" id="websocketshard_manager"></block>' +
    '<block type="websocketshard_id" id="websocketshard_id"></block>' +
    '<block type="websocketshard_status" id="websocketshard_status"></block>' +
    '<block type="websocketshard_ping" id="websocketshard_ping"></block>' +
    '<block type="websocketshard_send" id="websocketshard_send">' +
    '</block>' +
  '</category>' +
  '<category name="ApplicationCommandManager" id="applicationcommandmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="applicationcommandmanager_permissions" id="applicationcommandmanager_permissions"></block>' +
    '<block type="applicationcommandmanager_cache" id="applicationcommandmanager_cache"></block>' +
    '<block type="applicationcommandmanager_client" id="applicationcommandmanager_client"></block>' +
    '<block type="applicationcommandmanager_fetch" id="applicationcommandmanager_fetch">' +
    '</block>' +
    '<block type="applicationcommandmanager_create" id="applicationcommandmanager_create">' +
    '</block>' +
    '<block type="applicationcommandmanager_set" id="applicationcommandmanager_set">' +
    '</block>' +
    '<block type="applicationcommandmanager_edit" id="applicationcommandmanager_edit">' +
    '</block>' +
    '<block type="applicationcommandmanager_delete" id="applicationcommandmanager_delete">' +
    '</block>' +
    '<block type="applicationcommandmanager_resolve" id="applicationcommandmanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="applicationcommandmanager_resolveId" id="applicationcommandmanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="ApplicationCommandPermissionsManager" id="applicationcommandpermissionsmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="applicationcommandpermissionsmanager_guild" id="applicationcommandpermissionsmanager_guild"></block>' +
    '<block type="applicationcommandpermissionsmanager_guildid" id="applicationcommandpermissionsmanager_guildId"></block>' +
    '<block type="applicationcommandpermissionsmanager_commandid" id="applicationcommandpermissionsmanager_commandId"></block>' +
    '<block type="applicationcommandpermissionsmanager_client" id="applicationcommandpermissionsmanager_client"></block>' +
    '<block type="applicationcommandpermissionsmanager_fetch" id="applicationcommandpermissionsmanager_fetch">' +
    '</block>' +
    '<block type="applicationcommandpermissionsmanager_set" id="applicationcommandpermissionsmanager_set">' +
    '</block>' +
    '<block type="applicationcommandpermissionsmanager_add" id="applicationcommandpermissionsmanager_add">' +
    '</block>' +
    '<block type="applicationcommandpermissionsmanager_remove" id="applicationcommandpermissionsmanager_remove">' +
    '</block>' +
    '<block type="applicationcommandpermissionsmanager_has" id="applicationcommandpermissionsmanager_has">' +
    '</block>' +
  '</category>' +
  '<category name="BaseGuildEmojiManager" id="baseguildemojimanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseguildemojimanager_cache" id="baseguildemojimanager_cache"></block>' +
    '<block type="baseguildemojimanager_client" id="baseguildemojimanager_client"></block>' +
    '<block type="baseguildemojimanager_resolve" id="baseguildemojimanager_resolve">' +
    '</block>' +
    '<block type="baseguildemojimanager_resolveId" id="baseguildemojimanager_resolveId">' +
    '</block>' +
    '<block type="baseguildemojimanager_resolveIdentifier" id="baseguildemojimanager_resolveIdentifier">' +
    '</block>' +
  '</category>' +
  '<category name="BaseManager" id="basemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="basemanager_client" id="basemanager_client"></block>' +
  '</category>' +
  '<category name="CachedManager" id="cachedmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="cachedmanager_cache" id="cachedmanager_cache"></block>' +
    '<block type="cachedmanager_client" id="cachedmanager_client"></block>' +
    '<block type="cachedmanager_resolve" id="cachedmanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="cachedmanager_resolveId" id="cachedmanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="ChannelManager" id="channelmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="channelmanager_cache" id="channelmanager_cache"></block>' +
    '<block type="channelmanager_client" id="channelmanager_client"></block>' +
    '<block type="channelmanager_resolve" id="channelmanager_resolve">' +
    '</block>' +
    '<block type="channelmanager_resolveId" id="channelmanager_resolveId">' +
    '</block>' +
    '<block type="channelmanager_fetch" id="channelmanager_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="DataManager" id="datamanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="datamanager_cache" id="datamanager_cache"></block>' +
    '<block type="datamanager_client" id="datamanager_client"></block>' +
    '<block type="datamanager_resolve" id="datamanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="datamanager_resolveId" id="datamanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildApplicationCommandManager" id="guildapplicationcommandmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildapplicationcommandmanager_guild" id="guildapplicationcommandmanager_guild"></block>' +
    '<block type="guildapplicationcommandmanager_permissions" id="guildapplicationcommandmanager_permissions"></block>' +
    '<block type="guildapplicationcommandmanager_cache" id="guildapplicationcommandmanager_cache"></block>' +
    '<block type="guildapplicationcommandmanager_client" id="guildapplicationcommandmanager_client"></block>' +
    '<block type="guildapplicationcommandmanager_fetch" id="guildapplicationcommandmanager_fetch">' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_create" id="guildapplicationcommandmanager_create">' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_set" id="guildapplicationcommandmanager_set">' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_edit" id="guildapplicationcommandmanager_edit">' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_delete" id="guildapplicationcommandmanager_delete">' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_resolve" id="guildapplicationcommandmanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildapplicationcommandmanager_resolveId" id="guildapplicationcommandmanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildBanManager" id="guildbanmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildbanmanager_guild" id="guildbanmanager_guild"></block>' +
    '<block type="guildbanmanager_cache" id="guildbanmanager_cache"></block>' +
    '<block type="guildbanmanager_client" id="guildbanmanager_client"></block>' +
    '<block type="guildbanmanager_resolve" id="guildbanmanager_resolve">' +
    '</block>' +
    '<block type="guildbanmanager_fetch" id="guildbanmanager_fetch">' +
    '</block>' +
    '<block type="guildbanmanager_create" id="guildbanmanager_create">' +
    '</block>' +
    '<block type="guildbanmanager_remove" id="guildbanmanager_remove">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildbanmanager_resolveId" id="guildbanmanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildChannelManager" id="guildchannelmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildchannelmanager_guild" id="guildchannelmanager_guild"></block>' +
    '<block type="guildchannelmanager_channelcountwithoutthreads" id="guildchannelmanager_channelCountWithoutThreads"></block>' +
    '<block type="guildchannelmanager_cache" id="guildchannelmanager_cache"></block>' +
    '<block type="guildchannelmanager_client" id="guildchannelmanager_client"></block>' +
    '<block type="guildchannelmanager_resolve" id="guildchannelmanager_resolve">' +
    '</block>' +
    '<block type="guildchannelmanager_resolveId" id="guildchannelmanager_resolveId">' +
    '</block>' +
    '<block type="guildchannelmanager_create" id="guildchannelmanager_create">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildchannelmanager_fetch" id="guildchannelmanager_fetch">' +
    '</block>' +
    '<block type="guildchannelmanager_setPositions" id="guildchannelmanager_setPositions">' +
    '</block>' +
    '<block type="guildchannelmanager_fetchActiveThreads" id="guildchannelmanager_fetchActiveThreads">' +
    '</block>' +
  '</category>' +
  '<category name="GuildEmojiManager" id="guildemojimanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildemojimanager_guild" id="guildemojimanager_guild"></block>' +
    '<block type="guildemojimanager_cache" id="guildemojimanager_cache"></block>' +
    '<block type="guildemojimanager_client" id="guildemojimanager_client"></block>' +
    '<block type="guildemojimanager_create" id="guildemojimanager_create">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildemojimanager_fetch" id="guildemojimanager_fetch">' +
    '</block>' +
    '<block type="guildemojimanager_resolve" id="guildemojimanager_resolve">' +
    '</block>' +
    '<block type="guildemojimanager_resolveId" id="guildemojimanager_resolveId">' +
    '</block>' +
    '<block type="guildemojimanager_resolveIdentifier" id="guildemojimanager_resolveIdentifier">' +
    '</block>' +
  '</category>' +
  '<category name="GuildEmojiRoleManager" id="guildemojirolemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildemojirolemanager_emoji" id="guildemojirolemanager_emoji"></block>' +
    '<block type="guildemojirolemanager_guild" id="guildemojirolemanager_guild"></block>' +
    '<block type="guildemojirolemanager_cache" id="guildemojirolemanager_cache"></block>' +
    '<block type="guildemojirolemanager_client" id="guildemojirolemanager_client"></block>' +
    '<block type="guildemojirolemanager_add" id="guildemojirolemanager_add">' +
    '</block>' +
    '<block type="guildemojirolemanager_remove" id="guildemojirolemanager_remove">' +
    '</block>' +
    '<block type="guildemojirolemanager_set" id="guildemojirolemanager_set">' +
    '</block>' +
    '<block type="guildemojirolemanager_resolve" id="guildemojirolemanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildemojirolemanager_resolveId" id="guildemojirolemanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildInviteManager" id="guildinvitemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildinvitemanager_guild" id="guildinvitemanager_guild"></block>' +
    '<block type="guildinvitemanager_cache" id="guildinvitemanager_cache"></block>' +
    '<block type="guildinvitemanager_client" id="guildinvitemanager_client"></block>' +
    '<block type="guildinvitemanager_resolve" id="guildinvitemanager_resolve">' +
    '</block>' +
    '<block type="guildinvitemanager_resolveId" id="guildinvitemanager_resolveId">' +
    '</block>' +
    '<block type="guildinvitemanager_fetch" id="guildinvitemanager_fetch">' +
    '</block>' +
    '<block type="guildinvitemanager_create" id="guildinvitemanager_create">' +
    '</block>' +
    '<block type="guildinvitemanager_delete" id="guildinvitemanager_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildManager" id="guildmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildmanager_cache" id="guildmanager_cache"></block>' +
    '<block type="guildmanager_client" id="guildmanager_client"></block>' +
    '<block type="guildmanager_resolve" id="guildmanager_resolve">' +
    '</block>' +
    '<block type="guildmanager_resolveId" id="guildmanager_resolveId">' +
    '</block>' +
    '<block type="guildmanager_create" id="guildmanager_create">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmanager_fetch" id="guildmanager_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="GuildMemberManager" id="guildmembermanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildmembermanager_guild" id="guildmembermanager_guild"></block>' +
    '<block type="guildmembermanager_cache" id="guildmembermanager_cache"></block>' +
    '<block type="guildmembermanager_client" id="guildmembermanager_client"></block>' +
    '<block type="guildmembermanager_resolve" id="guildmembermanager_resolve">' +
    '</block>' +
    '<block type="guildmembermanager_resolveId" id="guildmembermanager_resolveId">' +
    '</block>' +
    '<block type="guildmembermanager_add" id="guildmembermanager_add">' +
    '</block>' +
    '<block type="guildmembermanager_fetch" id="guildmembermanager_fetch">' +
    '</block>' +
    '<block type="guildmembermanager_search" id="guildmembermanager_search">' +
    '</block>' +
    '<block type="guildmembermanager_list" id="guildmembermanager_list">' +
    '</block>' +
    '<block type="guildmembermanager_edit" id="guildmembermanager_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmembermanager_prune" id="guildmembermanager_prune">' +
    '</block>' +
    '<block type="guildmembermanager_kick" id="guildmembermanager_kick">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmembermanager_ban" id="guildmembermanager_ban">' +
    '</block>' +
    '<block type="guildmembermanager_unban" id="guildmembermanager_unban">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildMemberRoleManager" id="guildmemberrolemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildmemberrolemanager_member" id="guildmemberrolemanager_member"></block>' +
    '<block type="guildmemberrolemanager_guild" id="guildmemberrolemanager_guild"></block>' +
    '<block type="guildmemberrolemanager_cache" id="guildmemberrolemanager_cache"></block>' +
    '<block type="guildmemberrolemanager_hoist" id="guildmemberrolemanager_hoist"></block>' +
    '<block type="guildmemberrolemanager_icon" id="guildmemberrolemanager_icon"></block>' +
    '<block type="guildmemberrolemanager_color" id="guildmemberrolemanager_color"></block>' +
    '<block type="guildmemberrolemanager_highest" id="guildmemberrolemanager_highest"></block>' +
    '<block type="guildmemberrolemanager_premiumsubscriberrole" id="guildmemberrolemanager_premiumSubscriberRole"></block>' +
    '<block type="guildmemberrolemanager_botrole" id="guildmemberrolemanager_botRole"></block>' +
    '<block type="guildmemberrolemanager_client" id="guildmemberrolemanager_client"></block>' +
    '<block type="guildmemberrolemanager_add" id="guildmemberrolemanager_add">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmemberrolemanager_remove" id="guildmemberrolemanager_remove">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmemberrolemanager_set" id="guildmemberrolemanager_set">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmemberrolemanager_resolve" id="guildmemberrolemanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmemberrolemanager_resolveId" id="guildmemberrolemanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildScheduledEventManager" id="guildscheduledeventmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildscheduledeventmanager_guild" id="guildscheduledeventmanager_guild"></block>' +
    '<block type="guildscheduledeventmanager_cache" id="guildscheduledeventmanager_cache"></block>' +
    '<block type="guildscheduledeventmanager_client" id="guildscheduledeventmanager_client"></block>' +
    '<block type="guildscheduledeventmanager_create" id="guildscheduledeventmanager_create">' +
    '</block>' +
    '<block type="guildscheduledeventmanager_fetch" id="guildscheduledeventmanager_fetch">' +
    '</block>' +
    '<block type="guildscheduledeventmanager_edit" id="guildscheduledeventmanager_edit">' +
    '</block>' +
    '<block type="guildscheduledeventmanager_delete" id="guildscheduledeventmanager_delete">' +
    '</block>' +
    '<block type="guildscheduledeventmanager_fetchSubscribers" id="guildscheduledeventmanager_fetchSubscribers">' +
    '</block>' +
    '<block type="guildscheduledeventmanager_resolve" id="guildscheduledeventmanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledeventmanager_resolveId" id="guildscheduledeventmanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildStickerManager" id="guildstickermanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildstickermanager_guild" id="guildstickermanager_guild"></block>' +
    '<block type="guildstickermanager_cache" id="guildstickermanager_cache"></block>' +
    '<block type="guildstickermanager_client" id="guildstickermanager_client"></block>' +
    '<block type="guildstickermanager_create" id="guildstickermanager_create">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TAGS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildstickermanager_resolve" id="guildstickermanager_resolve">' +
    '</block>' +
    '<block type="guildstickermanager_resolveId" id="guildstickermanager_resolveId">' +
    '</block>' +
    '<block type="guildstickermanager_edit" id="guildstickermanager_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildstickermanager_delete" id="guildstickermanager_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildstickermanager_fetch" id="guildstickermanager_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="MessageManager" id="messagemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagemanager_channel" id="messagemanager_channel"></block>' +
    '<block type="messagemanager_cache" id="messagemanager_cache"></block>' +
    '<block type="messagemanager_client" id="messagemanager_client"></block>' +
    '<block type="messagemanager_fetch" id="messagemanager_fetch">' +
    '</block>' +
    '<block type="messagemanager_fetchPinned" id="messagemanager_fetchPinned">' +
    '</block>' +
    '<block type="messagemanager_resolve" id="messagemanager_resolve">' +
    '</block>' +
    '<block type="messagemanager_resolveId" id="messagemanager_resolveId">' +
    '</block>' +
    '<block type="messagemanager_edit" id="messagemanager_edit">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagemanager_crosspost" id="messagemanager_crosspost">' +
    '</block>' +
    '<block type="messagemanager_pin" id="messagemanager_pin">' +
    '</block>' +
    '<block type="messagemanager_unpin" id="messagemanager_unpin">' +
    '</block>' +
    '<block type="messagemanager_react" id="messagemanager_react">' +
    '</block>' +
    '<block type="messagemanager_delete" id="messagemanager_delete">' +
    '</block>' +
  '</category>' +
  '<category name="PermissionOverwriteManager" id="permissionoverwritemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="permissionoverwritemanager_channel" id="permissionoverwritemanager_channel"></block>' +
    '<block type="permissionoverwritemanager_cache" id="permissionoverwritemanager_cache"></block>' +
    '<block type="permissionoverwritemanager_client" id="permissionoverwritemanager_client"></block>' +
    '<block type="permissionoverwritemanager_set" id="permissionoverwritemanager_set">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="permissionoverwritemanager_create" id="permissionoverwritemanager_create">' +
    '</block>' +
    '<block type="permissionoverwritemanager_edit" id="permissionoverwritemanager_edit">' +
    '</block>' +
    '<block type="permissionoverwritemanager_delete" id="permissionoverwritemanager_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="permissionoverwritemanager_resolve" id="permissionoverwritemanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="permissionoverwritemanager_resolveId" id="permissionoverwritemanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="PresenceManager" id="presencemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="presencemanager_cache" id="presencemanager_cache"></block>' +
    '<block type="presencemanager_client" id="presencemanager_client"></block>' +
    '<block type="presencemanager_resolve" id="presencemanager_resolve">' +
    '</block>' +
    '<block type="presencemanager_resolveId" id="presencemanager_resolveId">' +
    '</block>' +
  '</category>' +
  '<category name="ReactionManager" id="reactionmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="reactionmanager_message" id="reactionmanager_message"></block>' +
    '<block type="reactionmanager_cache" id="reactionmanager_cache"></block>' +
    '<block type="reactionmanager_client" id="reactionmanager_client"></block>' +
    '<block type="reactionmanager_resolve" id="reactionmanager_resolve">' +
    '</block>' +
    '<block type="reactionmanager_resolveId" id="reactionmanager_resolveId">' +
    '</block>' +
    '<block type="reactionmanager_removeAll" id="reactionmanager_removeAll">' +
    '</block>' +
  '</category>' +
  '<category name="ReactionUserManager" id="reactionusermanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="reactionusermanager_reaction" id="reactionusermanager_reaction"></block>' +
    '<block type="reactionusermanager_cache" id="reactionusermanager_cache"></block>' +
    '<block type="reactionusermanager_client" id="reactionusermanager_client"></block>' +
    '<block type="reactionusermanager_fetch" id="reactionusermanager_fetch">' +
    '</block>' +
    '<block type="reactionusermanager_remove" id="reactionusermanager_remove">' +
    '</block>' +
    '<block type="reactionusermanager_resolve" id="reactionusermanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="reactionusermanager_resolveId" id="reactionusermanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="RoleManager" id="rolemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="rolemanager_guild" id="rolemanager_guild"></block>' +
    '<block type="rolemanager_cache" id="rolemanager_cache"></block>' +
    '<block type="rolemanager_everyone" id="rolemanager_everyone"></block>' +
    '<block type="rolemanager_premiumsubscriberrole" id="rolemanager_premiumSubscriberRole"></block>' +
    '<block type="rolemanager_highest" id="rolemanager_highest"></block>' +
    '<block type="rolemanager_client" id="rolemanager_client"></block>' +
    '<block type="rolemanager_fetch" id="rolemanager_fetch">' +
    '</block>' +
    '<block type="rolemanager_resolve" id="rolemanager_resolve">' +
    '</block>' +
    '<block type="rolemanager_resolveId" id="rolemanager_resolveId">' +
    '</block>' +
    '<block type="rolemanager_create" id="rolemanager_create">' +
    '</block>' +
    '<block type="rolemanager_edit" id="rolemanager_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="rolemanager_delete" id="rolemanager_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="rolemanager_setPositions" id="rolemanager_setPositions">' +
    '</block>' +
    '<block type="rolemanager_comparePositions" id="rolemanager_comparePositions">' +
    '</block>' +
    '<block type="rolemanager_botRoleFor" id="rolemanager_botRoleFor">' +
    '</block>' +
  '</category>' +
  '<category name="StageInstanceManager" id="stageinstancemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="stageinstancemanager_guild" id="stageinstancemanager_guild"></block>' +
    '<block type="stageinstancemanager_cache" id="stageinstancemanager_cache"></block>' +
    '<block type="stageinstancemanager_client" id="stageinstancemanager_client"></block>' +
    '<block type="stageinstancemanager_create" id="stageinstancemanager_create">' +
    '</block>' +
    '<block type="stageinstancemanager_fetch" id="stageinstancemanager_fetch">' +
    '</block>' +
    '<block type="stageinstancemanager_edit" id="stageinstancemanager_edit">' +
    '</block>' +
    '<block type="stageinstancemanager_delete" id="stageinstancemanager_delete">' +
    '</block>' +
    '<block type="stageinstancemanager_resolve" id="stageinstancemanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stageinstancemanager_resolveId" id="stageinstancemanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="ThreadManager" id="threadmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="threadmanager_channel" id="threadmanager_channel"></block>' +
    '<block type="threadmanager_cache" id="threadmanager_cache"></block>' +
    '<block type="threadmanager_client" id="threadmanager_client"></block>' +
    '<block type="threadmanager_resolve" id="threadmanager_resolve">' +
    '</block>' +
    '<block type="threadmanager_resolveId" id="threadmanager_resolveId">' +
    '</block>' +
    '<block type="threadmanager_create" id="threadmanager_create">' +
    '</block>' +
    '<block type="threadmanager_fetch" id="threadmanager_fetch">' +
    '</block>' +
    '<block type="threadmanager_fetchArchived" id="threadmanager_fetchArchived">' +
    '</block>' +
    '<block type="threadmanager_fetchActive" id="threadmanager_fetchActive">' +
    '</block>' +
  '</category>' +
  '<category name="ThreadMemberManager" id="threadmembermanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="threadmembermanager_thread" id="threadmembermanager_thread"></block>' +
    '<block type="threadmembermanager_cache" id="threadmembermanager_cache"></block>' +
    '<block type="threadmembermanager_client" id="threadmembermanager_client"></block>' +
    '<block type="threadmembermanager_resolve" id="threadmembermanager_resolve">' +
    '</block>' +
    '<block type="threadmembermanager_resolveId" id="threadmembermanager_resolveId">' +
    '</block>' +
    '<block type="threadmembermanager_add" id="threadmembermanager_add">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadmembermanager_remove" id="threadmembermanager_remove">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadmembermanager_fetch" id="threadmembermanager_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="UserManager" id="usermanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="usermanager_cache" id="usermanager_cache"></block>' +
    '<block type="usermanager_client" id="usermanager_client"></block>' +
    '<block type="usermanager_createDM" id="usermanager_createDM">' +
    '</block>' +
    '<block type="usermanager_deleteDM" id="usermanager_deleteDM">' +
    '</block>' +
    '<block type="usermanager_fetch" id="usermanager_fetch">' +
    '</block>' +
    '<block type="usermanager_fetchFlags" id="usermanager_fetchFlags">' +
    '</block>' +
    '<block type="usermanager_send" id="usermanager_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="usermanager_resolve" id="usermanager_resolve">' +
    '</block>' +
    '<block type="usermanager_resolveId" id="usermanager_resolveId">' +
    '</block>' +
  '</category>' +
  '<category name="VoiceStateManager" id="voicestatemanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="voicestatemanager_guild" id="voicestatemanager_guild"></block>' +
    '<block type="voicestatemanager_cache" id="voicestatemanager_cache"></block>' +
    '<block type="voicestatemanager_client" id="voicestatemanager_client"></block>' +
    '<block type="voicestatemanager_resolve" id="voicestatemanager_resolve">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicestatemanager_resolveId" id="voicestatemanager_resolveId">' +
      '<value name="IDORINSTANCE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="DiscordAPIError" id="discordapierror" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="discordapierror_method" id="discordapierror_method"></block>' +
    '<block type="discordapierror_path" id="discordapierror_path"></block>' +
    '<block type="discordapierror_code" id="discordapierror_code"></block>' +
    '<block type="discordapierror_httpstatus" id="discordapierror_httpStatus"></block>' +
    '<block type="discordapierror_requestdata" id="discordapierror_requestData"></block>' +
  '</category>' +
  '<category name="HTTPError" id="httperror" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="httperror_name" id="httperror_name"></block>' +
    '<block type="httperror_code" id="httperror_code"></block>' +
    '<block type="httperror_method" id="httperror_method"></block>' +
    '<block type="httperror_path" id="httperror_path"></block>' +
    '<block type="httperror_requestdata" id="httperror_requestData"></block>' +
  '</category>' +
  '<category name="RateLimitError" id="ratelimiterror" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="ratelimiterror_name" id="ratelimiterror_name"></block>' +
    '<block type="ratelimiterror_timeout" id="ratelimiterror_timeout"></block>' +
    '<block type="ratelimiterror_method" id="ratelimiterror_method"></block>' +
    '<block type="ratelimiterror_path" id="ratelimiterror_path"></block>' +
    '<block type="ratelimiterror_route" id="ratelimiterror_route"></block>' +
    '<block type="ratelimiterror_global" id="ratelimiterror_global"></block>' +
    '<block type="ratelimiterror_limit" id="ratelimiterror_limit"></block>' +
  '</category>' +
  '<category name="Shard" id="shard" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="shard_on" id="shard_on"></block>' +
    '<block type="shard_manager" id="shard_manager"></block>' +
    '<block type="shard_id" id="shard_id"></block>' +
    '<block type="shard_args" id="shard_args"></block>' +
    '<block type="shard_execargv" id="shard_execArgv"></block>' +
    '<block type="shard_env" id="shard_env"></block>' +
    '<block type="shard_ready" id="shard_ready"></block>' +
    '<block type="shard_process" id="shard_process"></block>' +
    '<block type="shard_worker" id="shard_worker"></block>' +
    '<block type="shard_spawn" id="shard_spawn">' +
      '<value name="TIMEOUT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="shard_kill" id="shard_kill">' +
    '</block>' +
    '<block type="shard_respawn" id="shard_respawn">' +
    '</block>' +
    '<block type="shard_send" id="shard_send">' +
    '</block>' +
    '<block type="shard_fetchClientValue" id="shard_fetchClientValue">' +
      '<value name="PROP">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="shard_eval" id="shard_eval">' +
      '<value name="SCRIPT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="ShardClientUtil" id="shardclientutil" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="shardclientutil_client" id="shardclientutil_client"></block>' +
    '<block type="shardclientutil_mode" id="shardclientutil_mode"></block>' +
    '<block type="shardclientutil_parentport" id="shardclientutil_parentPort"></block>' +
    '<block type="shardclientutil_ids" id="shardclientutil_ids"></block>' +
    '<block type="shardclientutil_count" id="shardclientutil_count"></block>' +
    '<block type="shardclientutil_send" id="shardclientutil_send">' +
    '</block>' +
    '<block type="shardclientutil_fetchClientValues" id="shardclientutil_fetchClientValues">' +
      '<value name="PROP">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="SHARD">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="shardclientutil_broadcastEval" id="shardclientutil_broadcastEval">' +
    '</block>' +
    '<block type="shardclientutil_respawnAll" id="shardclientutil_respawnAll">' +
    '</block>' +
    '<block type="shardclientutil_singleton" id="shardclientutil_singleton">' +
    '</block>' +
    '<block type="shardclientutil_shardIdForGuildId" id="shardclientutil_shardIdForGuildId">' +
      '<value name="SHARDCOUNT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="ShardingManager" id="shardingmanager" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="shardingmanager_on" id="shardingmanager_on"></block>' +
    '<block type="shardingmanager_file" id="shardingmanager_file"></block>' +
    '<block type="shardingmanager_shardlist" id="shardingmanager_shardList"></block>' +
    '<block type="shardingmanager_totalshards" id="shardingmanager_totalShards"></block>' +
    '<block type="shardingmanager_mode" id="shardingmanager_mode"></block>' +
    '<block type="shardingmanager_respawn" id="shardingmanager_respawn"></block>' +
    '<block type="shardingmanager_shardargs" id="shardingmanager_shardArgs"></block>' +
    '<block type="shardingmanager_execargv" id="shardingmanager_execArgv"></block>' +
    '<block type="shardingmanager_token" id="shardingmanager_token"></block>' +
    '<block type="shardingmanager_shards" id="shardingmanager_shards"></block>' +
    '<block type="shardingmanager_createShard" id="shardingmanager_createShard">' +
      '<value name="ID">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="shardingmanager_spawn" id="shardingmanager_spawn">' +
    '</block>' +
    '<block type="shardingmanager_broadcast" id="shardingmanager_broadcast">' +
    '</block>' +
    '<block type="shardingmanager_broadcastEval" id="shardingmanager_broadcastEval">' +
    '</block>' +
    '<block type="shardingmanager_fetchClientValues" id="shardingmanager_fetchClientValues">' +
      '<value name="PROP">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="SHARD">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="shardingmanager_respawnAll" id="shardingmanager_respawnAll">' +
    '</block>' +
  '</category>' +
  '<category name="AnonymousGuild" id="anonymousguild" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="anonymousguild_splash" id="anonymousguild_splash"></block>' +
    '<block type="anonymousguild_banner" id="anonymousguild_banner"></block>' +
    '<block type="anonymousguild_description" id="anonymousguild_description"></block>' +
    '<block type="anonymousguild_verificationlevel" id="anonymousguild_verificationLevel"></block>' +
    '<block type="anonymousguild_vanityurlcode" id="anonymousguild_vanityURLCode"></block>' +
    '<block type="anonymousguild_nsfwlevel" id="anonymousguild_nsfwLevel"></block>' +
    '<block type="anonymousguild_id" id="anonymousguild_id"></block>' +
    '<block type="anonymousguild_name" id="anonymousguild_name"></block>' +
    '<block type="anonymousguild_icon" id="anonymousguild_icon"></block>' +
    '<block type="anonymousguild_features" id="anonymousguild_features"></block>' +
    '<block type="anonymousguild_createdtimestamp" id="anonymousguild_createdTimestamp"></block>' +
    '<block type="anonymousguild_createdat" id="anonymousguild_createdAt"></block>' +
    '<block type="anonymousguild_nameacronym" id="anonymousguild_nameAcronym"></block>' +
    '<block type="anonymousguild_partnered" id="anonymousguild_partnered"></block>' +
    '<block type="anonymousguild_verified" id="anonymousguild_verified"></block>' +
    '<block type="anonymousguild_client" id="anonymousguild_client"></block>' +
    '<block type="anonymousguild_bannerURL" id="anonymousguild_bannerURL">' +
    '</block>' +
    '<block type="anonymousguild_splashURL" id="anonymousguild_splashURL">' +
    '</block>' +
    '<block type="anonymousguild_iconURL" id="anonymousguild_iconURL">' +
    '</block>' +
    '<block type="anonymousguild_fetch" id="anonymousguild_fetch">' +
    '</block>' +
    '<block type="anonymousguild_toString" id="anonymousguild_toString">' +
    '</block>' +
  '</category>' +
  '<category name="ApplicationCommand" id="applicationcommand" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="applicationcommand_id" id="applicationcommand_id"></block>' +
    '<block type="applicationcommand_applicationid" id="applicationcommand_applicationId"></block>' +
    '<block type="applicationcommand_guild" id="applicationcommand_guild"></block>' +
    '<block type="applicationcommand_guildid" id="applicationcommand_guildId"></block>' +
    '<block type="applicationcommand_permissions" id="applicationcommand_permissions"></block>' +
    '<block type="applicationcommand_type" id="applicationcommand_type"></block>' +
    '<block type="applicationcommand_name" id="applicationcommand_name"></block>' +
    '<block type="applicationcommand_description" id="applicationcommand_description"></block>' +
    '<block type="applicationcommand_options" id="applicationcommand_options"></block>' +
    '<block type="applicationcommand_defaultpermission" id="applicationcommand_defaultPermission"></block>' +
    '<block type="applicationcommand_version" id="applicationcommand_version"></block>' +
    '<block type="applicationcommand_createdtimestamp" id="applicationcommand_createdTimestamp"></block>' +
    '<block type="applicationcommand_createdat" id="applicationcommand_createdAt"></block>' +
    '<block type="applicationcommand_manager" id="applicationcommand_manager"></block>' +
    '<block type="applicationcommand_client" id="applicationcommand_client"></block>' +
    '<block type="applicationcommand_edit" id="applicationcommand_edit">' +
    '</block>' +
    '<block type="applicationcommand_setName" id="applicationcommand_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="applicationcommand_setDescription" id="applicationcommand_setDescription">' +
      '<value name="DESCRIPTION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="applicationcommand_setDefaultPermission" id="applicationcommand_setDefaultPermission">' +
    '</block>' +
    '<block type="applicationcommand_setOptions" id="applicationcommand_setOptions">' +
    '</block>' +
    '<block type="applicationcommand_delete" id="applicationcommand_delete">' +
    '</block>' +
    '<block type="applicationcommand_equals" id="applicationcommand_equals">' +
    '</block>' +
    '<block type="applicationcommand_optionsEqual" id="applicationcommand_optionsEqual">' +
    '</block>' +
  '</category>' +
  '<category name="AutocompleteInteraction" id="autocompleteinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="autocompleteinteraction_channelid" id="autocompleteinteraction_channelId"></block>' +
    '<block type="autocompleteinteraction_commandid" id="autocompleteinteraction_commandId"></block>' +
    '<block type="autocompleteinteraction_commandname" id="autocompleteinteraction_commandName"></block>' +
    '<block type="autocompleteinteraction_responded" id="autocompleteinteraction_responded"></block>' +
    '<block type="autocompleteinteraction_options" id="autocompleteinteraction_options"></block>' +
    '<block type="autocompleteinteraction_command" id="autocompleteinteraction_command"></block>' +
    '<block type="autocompleteinteraction_type" id="autocompleteinteraction_type"></block>' +
    '<block type="autocompleteinteraction_id" id="autocompleteinteraction_id"></block>' +
    '<block type="autocompleteinteraction_token" id="autocompleteinteraction_token"></block>' +
    '<block type="autocompleteinteraction_applicationid" id="autocompleteinteraction_applicationId"></block>' +
    '<block type="autocompleteinteraction_guildid" id="autocompleteinteraction_guildId"></block>' +
    '<block type="autocompleteinteraction_user" id="autocompleteinteraction_user"></block>' +
    '<block type="autocompleteinteraction_member" id="autocompleteinteraction_member"></block>' +
    '<block type="autocompleteinteraction_version" id="autocompleteinteraction_version"></block>' +
    '<block type="autocompleteinteraction_memberpermissions" id="autocompleteinteraction_memberPermissions"></block>' +
    '<block type="autocompleteinteraction_locale" id="autocompleteinteraction_locale"></block>' +
    '<block type="autocompleteinteraction_guildlocale" id="autocompleteinteraction_guildLocale"></block>' +
    '<block type="autocompleteinteraction_createdtimestamp" id="autocompleteinteraction_createdTimestamp"></block>' +
    '<block type="autocompleteinteraction_createdat" id="autocompleteinteraction_createdAt"></block>' +
    '<block type="autocompleteinteraction_channel" id="autocompleteinteraction_channel"></block>' +
    '<block type="autocompleteinteraction_guild" id="autocompleteinteraction_guild"></block>' +
    '<block type="autocompleteinteraction_client" id="autocompleteinteraction_client"></block>' +
    '<block type="autocompleteinteraction_respond" id="autocompleteinteraction_respond">' +
    '</block>' +
    '<block type="autocompleteinteraction_inGuild" id="autocompleteinteraction_inGuild">' +
    '</block>' +
    '<block type="autocompleteinteraction_inCachedGuild" id="autocompleteinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="autocompleteinteraction_inRawGuild" id="autocompleteinteraction_inRawGuild">' +
    '</block>' +
    '<block type="autocompleteinteraction_isApplicationCommand" id="autocompleteinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="autocompleteinteraction_isCommand" id="autocompleteinteraction_isCommand">' +
    '</block>' +
    '<block type="autocompleteinteraction_isContextMenu" id="autocompleteinteraction_isContextMenu">' +
    '</block>' +
    '<block type="autocompleteinteraction_isUserContextMenu" id="autocompleteinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="autocompleteinteraction_isMessageContextMenu" id="autocompleteinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="autocompleteinteraction_isAutocomplete" id="autocompleteinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="autocompleteinteraction_isMessageComponent" id="autocompleteinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="autocompleteinteraction_isButton" id="autocompleteinteraction_isButton">' +
    '</block>' +
    '<block type="autocompleteinteraction_isSelectMenu" id="autocompleteinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="Base" id="base" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="base_client" id="base_client"></block>' +
  '</category>' +
  '<category name="BaseCommandInteraction" id="basecommandinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="basecommandinteraction_channelid" id="basecommandinteraction_channelId"></block>' +
    '<block type="basecommandinteraction_commandid" id="basecommandinteraction_commandId"></block>' +
    '<block type="basecommandinteraction_commandname" id="basecommandinteraction_commandName"></block>' +
    '<block type="basecommandinteraction_deferred" id="basecommandinteraction_deferred"></block>' +
    '<block type="basecommandinteraction_replied" id="basecommandinteraction_replied"></block>' +
    '<block type="basecommandinteraction_ephemeral" id="basecommandinteraction_ephemeral"></block>' +
    '<block type="basecommandinteraction_webhook" id="basecommandinteraction_webhook"></block>' +
    '<block type="basecommandinteraction_command" id="basecommandinteraction_command"></block>' +
    '<block type="basecommandinteraction_type" id="basecommandinteraction_type"></block>' +
    '<block type="basecommandinteraction_id" id="basecommandinteraction_id"></block>' +
    '<block type="basecommandinteraction_token" id="basecommandinteraction_token"></block>' +
    '<block type="basecommandinteraction_applicationid" id="basecommandinteraction_applicationId"></block>' +
    '<block type="basecommandinteraction_guildid" id="basecommandinteraction_guildId"></block>' +
    '<block type="basecommandinteraction_user" id="basecommandinteraction_user"></block>' +
    '<block type="basecommandinteraction_member" id="basecommandinteraction_member"></block>' +
    '<block type="basecommandinteraction_version" id="basecommandinteraction_version"></block>' +
    '<block type="basecommandinteraction_memberpermissions" id="basecommandinteraction_memberPermissions"></block>' +
    '<block type="basecommandinteraction_locale" id="basecommandinteraction_locale"></block>' +
    '<block type="basecommandinteraction_guildlocale" id="basecommandinteraction_guildLocale"></block>' +
    '<block type="basecommandinteraction_createdtimestamp" id="basecommandinteraction_createdTimestamp"></block>' +
    '<block type="basecommandinteraction_createdat" id="basecommandinteraction_createdAt"></block>' +
    '<block type="basecommandinteraction_channel" id="basecommandinteraction_channel"></block>' +
    '<block type="basecommandinteraction_guild" id="basecommandinteraction_guild"></block>' +
    '<block type="basecommandinteraction_client" id="basecommandinteraction_client"></block>' +
    '<block type="basecommandinteraction_deferReply" id="basecommandinteraction_deferReply">' +
    '</block>' +
    '<block type="basecommandinteraction_reply" id="basecommandinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="basecommandinteraction_fetchReply" id="basecommandinteraction_fetchReply">' +
    '</block>' +
    '<block type="basecommandinteraction_editReply" id="basecommandinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="basecommandinteraction_deleteReply" id="basecommandinteraction_deleteReply">' +
    '</block>' +
    '<block type="basecommandinteraction_followUp" id="basecommandinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="basecommandinteraction_inGuild" id="basecommandinteraction_inGuild">' +
    '</block>' +
    '<block type="basecommandinteraction_inCachedGuild" id="basecommandinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="basecommandinteraction_inRawGuild" id="basecommandinteraction_inRawGuild">' +
    '</block>' +
    '<block type="basecommandinteraction_isApplicationCommand" id="basecommandinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="basecommandinteraction_isCommand" id="basecommandinteraction_isCommand">' +
    '</block>' +
    '<block type="basecommandinteraction_isContextMenu" id="basecommandinteraction_isContextMenu">' +
    '</block>' +
    '<block type="basecommandinteraction_isUserContextMenu" id="basecommandinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="basecommandinteraction_isMessageContextMenu" id="basecommandinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="basecommandinteraction_isAutocomplete" id="basecommandinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="basecommandinteraction_isMessageComponent" id="basecommandinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="basecommandinteraction_isButton" id="basecommandinteraction_isButton">' +
    '</block>' +
    '<block type="basecommandinteraction_isSelectMenu" id="basecommandinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="BaseGuild" id="baseguild" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseguild_id" id="baseguild_id"></block>' +
    '<block type="baseguild_name" id="baseguild_name"></block>' +
    '<block type="baseguild_icon" id="baseguild_icon"></block>' +
    '<block type="baseguild_features" id="baseguild_features"></block>' +
    '<block type="baseguild_createdtimestamp" id="baseguild_createdTimestamp"></block>' +
    '<block type="baseguild_createdat" id="baseguild_createdAt"></block>' +
    '<block type="baseguild_nameacronym" id="baseguild_nameAcronym"></block>' +
    '<block type="baseguild_partnered" id="baseguild_partnered"></block>' +
    '<block type="baseguild_verified" id="baseguild_verified"></block>' +
    '<block type="baseguild_client" id="baseguild_client"></block>' +
    '<block type="baseguild_iconURL" id="baseguild_iconURL">' +
    '</block>' +
    '<block type="baseguild_fetch" id="baseguild_fetch">' +
    '</block>' +
    '<block type="baseguild_toString" id="baseguild_toString">' +
    '</block>' +
  '</category>' +
  '<category name="BaseGuildEmoji" id="baseguildemoji" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseguildemoji_guild" id="baseguildemoji_guild"></block>' +
    '<block type="baseguildemoji_requirescolons" id="baseguildemoji_requiresColons"></block>' +
    '<block type="baseguildemoji_managed" id="baseguildemoji_managed"></block>' +
    '<block type="baseguildemoji_available" id="baseguildemoji_available"></block>' +
    '<block type="baseguildemoji_animated" id="baseguildemoji_animated"></block>' +
    '<block type="baseguildemoji_name" id="baseguildemoji_name"></block>' +
    '<block type="baseguildemoji_id" id="baseguildemoji_id"></block>' +
    '<block type="baseguildemoji_identifier" id="baseguildemoji_identifier"></block>' +
    '<block type="baseguildemoji_url" id="baseguildemoji_url"></block>' +
    '<block type="baseguildemoji_createdtimestamp" id="baseguildemoji_createdTimestamp"></block>' +
    '<block type="baseguildemoji_createdat" id="baseguildemoji_createdAt"></block>' +
    '<block type="baseguildemoji_client" id="baseguildemoji_client"></block>' +
    '<block type="baseguildemoji_toString" id="baseguildemoji_toString">' +
    '</block>' +
  '</category>' +
  '<category name="BaseGuildTextChannel" id="baseguildtextchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseguildtextchannel_messages" id="baseguildtextchannel_messages"></block>' +
    '<block type="baseguildtextchannel_threads" id="baseguildtextchannel_threads"></block>' +
    '<block type="baseguildtextchannel_nsfw" id="baseguildtextchannel_nsfw"></block>' +
    '<block type="baseguildtextchannel_topic" id="baseguildtextchannel_topic"></block>' +
    '<block type="baseguildtextchannel_lastmessageid" id="baseguildtextchannel_lastMessageId"></block>' +
    '<block type="baseguildtextchannel_lastpintimestamp" id="baseguildtextchannel_lastPinTimestamp"></block>' +
    '<block type="baseguildtextchannel_defaultautoarchiveduration" id="baseguildtextchannel_defaultAutoArchiveDuration"></block>' +
    '<block type="baseguildtextchannel_lastmessage" id="baseguildtextchannel_lastMessage"></block>' +
    '<block type="baseguildtextchannel_lastpinat" id="baseguildtextchannel_lastPinAt"></block>' +
    '<block type="baseguildtextchannel_guild" id="baseguildtextchannel_guild"></block>' +
    '<block type="baseguildtextchannel_guildid" id="baseguildtextchannel_guildId"></block>' +
    '<block type="baseguildtextchannel_permissionoverwrites" id="baseguildtextchannel_permissionOverwrites"></block>' +
    '<block type="baseguildtextchannel_name" id="baseguildtextchannel_name"></block>' +
    '<block type="baseguildtextchannel_rawposition" id="baseguildtextchannel_rawPosition"></block>' +
    '<block type="baseguildtextchannel_parentid" id="baseguildtextchannel_parentId"></block>' +
    '<block type="baseguildtextchannel_parent" id="baseguildtextchannel_parent"></block>' +
    '<block type="baseguildtextchannel_permissionslocked" id="baseguildtextchannel_permissionsLocked"></block>' +
    '<block type="baseguildtextchannel_position" id="baseguildtextchannel_position"></block>' +
    '<block type="baseguildtextchannel_members" id="baseguildtextchannel_members"></block>' +
    '<block type="baseguildtextchannel_deletable" id="baseguildtextchannel_deletable"></block>' +
    '<block type="baseguildtextchannel_manageable" id="baseguildtextchannel_manageable"></block>' +
    '<block type="baseguildtextchannel_viewable" id="baseguildtextchannel_viewable"></block>' +
    '<block type="baseguildtextchannel_type" id="baseguildtextchannel_type"></block>' +
    '<block type="baseguildtextchannel_id" id="baseguildtextchannel_id"></block>' +
    '<block type="baseguildtextchannel_createdtimestamp" id="baseguildtextchannel_createdTimestamp"></block>' +
    '<block type="baseguildtextchannel_createdat" id="baseguildtextchannel_createdAt"></block>' +
    '<block type="baseguildtextchannel_partial" id="baseguildtextchannel_partial"></block>' +
    '<block type="baseguildtextchannel_client" id="baseguildtextchannel_client"></block>' +
    '<block type="baseguildtextchannel_setDefaultAutoArchiveDuration" id="baseguildtextchannel_setDefaultAutoArchiveDuration">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_setNSFW" id="baseguildtextchannel_setNSFW">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_setType" id="baseguildtextchannel_setType">' +
      '<value name="TYPE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_fetchWebhooks" id="baseguildtextchannel_fetchWebhooks">' +
    '</block>' +
    '<block type="baseguildtextchannel_createWebhook" id="baseguildtextchannel_createWebhook">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_setTopic" id="baseguildtextchannel_setTopic">' +
      '<value name="TOPIC">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_createInvite" id="baseguildtextchannel_createInvite">' +
    '</block>' +
    '<block type="baseguildtextchannel_fetchInvites" id="baseguildtextchannel_fetchInvites">' +
    '</block>' +
    '<block type="baseguildtextchannel_send" id="baseguildtextchannel_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_sendTyping" id="baseguildtextchannel_sendTyping">' +
    '</block>' +
    '<block type="baseguildtextchannel_createMessageCollector" id="baseguildtextchannel_createMessageCollector">' +
    '</block>' +
    '<block type="baseguildtextchannel_awaitMessages" id="baseguildtextchannel_awaitMessages">' +
    '</block>' +
    '<block type="baseguildtextchannel_createMessageComponentCollector" id="baseguildtextchannel_createMessageComponentCollector">' +
    '</block>' +
    '<block type="baseguildtextchannel_awaitMessageComponent" id="baseguildtextchannel_awaitMessageComponent">' +
    '</block>' +
    '<block type="baseguildtextchannel_bulkDelete" id="baseguildtextchannel_bulkDelete">' +
    '</block>' +
    '<block type="baseguildtextchannel_permissionsFor" id="baseguildtextchannel_permissionsFor">' +
    '</block>' +
    '<block type="baseguildtextchannel_lockPermissions" id="baseguildtextchannel_lockPermissions">' +
    '</block>' +
    '<block type="baseguildtextchannel_edit" id="baseguildtextchannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_setName" id="baseguildtextchannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_setParent" id="baseguildtextchannel_setParent">' +
    '</block>' +
    '<block type="baseguildtextchannel_setPosition" id="baseguildtextchannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_clone" id="baseguildtextchannel_clone">' +
    '</block>' +
    '<block type="baseguildtextchannel_equals" id="baseguildtextchannel_equals">' +
    '</block>' +
    '<block type="baseguildtextchannel_delete" id="baseguildtextchannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildtextchannel_toString" id="baseguildtextchannel_toString">' +
    '</block>' +
    '<block type="baseguildtextchannel_fetch" id="baseguildtextchannel_fetch">' +
    '</block>' +
    '<block type="baseguildtextchannel_isText" id="baseguildtextchannel_isText">' +
    '</block>' +
    '<block type="baseguildtextchannel_isVoice" id="baseguildtextchannel_isVoice">' +
    '</block>' +
    '<block type="baseguildtextchannel_isThread" id="baseguildtextchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="BaseGuildVoiceChannel" id="baseguildvoicechannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="baseguildvoicechannel_rtcregion" id="baseguildvoicechannel_rtcRegion"></block>' +
    '<block type="baseguildvoicechannel_bitrate" id="baseguildvoicechannel_bitrate"></block>' +
    '<block type="baseguildvoicechannel_userlimit" id="baseguildvoicechannel_userLimit"></block>' +
    '<block type="baseguildvoicechannel_members" id="baseguildvoicechannel_members"></block>' +
    '<block type="baseguildvoicechannel_full" id="baseguildvoicechannel_full"></block>' +
    '<block type="baseguildvoicechannel_joinable" id="baseguildvoicechannel_joinable"></block>' +
    '<block type="baseguildvoicechannel_guild" id="baseguildvoicechannel_guild"></block>' +
    '<block type="baseguildvoicechannel_guildid" id="baseguildvoicechannel_guildId"></block>' +
    '<block type="baseguildvoicechannel_permissionoverwrites" id="baseguildvoicechannel_permissionOverwrites"></block>' +
    '<block type="baseguildvoicechannel_name" id="baseguildvoicechannel_name"></block>' +
    '<block type="baseguildvoicechannel_rawposition" id="baseguildvoicechannel_rawPosition"></block>' +
    '<block type="baseguildvoicechannel_parentid" id="baseguildvoicechannel_parentId"></block>' +
    '<block type="baseguildvoicechannel_parent" id="baseguildvoicechannel_parent"></block>' +
    '<block type="baseguildvoicechannel_permissionslocked" id="baseguildvoicechannel_permissionsLocked"></block>' +
    '<block type="baseguildvoicechannel_position" id="baseguildvoicechannel_position"></block>' +
    '<block type="baseguildvoicechannel_deletable" id="baseguildvoicechannel_deletable"></block>' +
    '<block type="baseguildvoicechannel_manageable" id="baseguildvoicechannel_manageable"></block>' +
    '<block type="baseguildvoicechannel_viewable" id="baseguildvoicechannel_viewable"></block>' +
    '<block type="baseguildvoicechannel_type" id="baseguildvoicechannel_type"></block>' +
    '<block type="baseguildvoicechannel_id" id="baseguildvoicechannel_id"></block>' +
    '<block type="baseguildvoicechannel_createdtimestamp" id="baseguildvoicechannel_createdTimestamp"></block>' +
    '<block type="baseguildvoicechannel_createdat" id="baseguildvoicechannel_createdAt"></block>' +
    '<block type="baseguildvoicechannel_partial" id="baseguildvoicechannel_partial"></block>' +
    '<block type="baseguildvoicechannel_client" id="baseguildvoicechannel_client"></block>' +
    '<block type="baseguildvoicechannel_setRTCRegion" id="baseguildvoicechannel_setRTCRegion">' +
      '<value name="REGION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildvoicechannel_createInvite" id="baseguildvoicechannel_createInvite">' +
    '</block>' +
    '<block type="baseguildvoicechannel_fetchInvites" id="baseguildvoicechannel_fetchInvites">' +
    '</block>' +
    '<block type="baseguildvoicechannel_permissionsFor" id="baseguildvoicechannel_permissionsFor">' +
    '</block>' +
    '<block type="baseguildvoicechannel_lockPermissions" id="baseguildvoicechannel_lockPermissions">' +
    '</block>' +
    '<block type="baseguildvoicechannel_edit" id="baseguildvoicechannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildvoicechannel_setName" id="baseguildvoicechannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildvoicechannel_setParent" id="baseguildvoicechannel_setParent">' +
    '</block>' +
    '<block type="baseguildvoicechannel_setPosition" id="baseguildvoicechannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildvoicechannel_clone" id="baseguildvoicechannel_clone">' +
    '</block>' +
    '<block type="baseguildvoicechannel_equals" id="baseguildvoicechannel_equals">' +
    '</block>' +
    '<block type="baseguildvoicechannel_delete" id="baseguildvoicechannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="baseguildvoicechannel_toString" id="baseguildvoicechannel_toString">' +
    '</block>' +
    '<block type="baseguildvoicechannel_fetch" id="baseguildvoicechannel_fetch">' +
    '</block>' +
    '<block type="baseguildvoicechannel_isText" id="baseguildvoicechannel_isText">' +
    '</block>' +
    '<block type="baseguildvoicechannel_isVoice" id="baseguildvoicechannel_isVoice">' +
    '</block>' +
    '<block type="baseguildvoicechannel_isThread" id="baseguildvoicechannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="BaseMessageComponent" id="basemessagecomponent" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="basemessagecomponent_type" id="basemessagecomponent_type"></block>' +
  '</category>' +
  '<category name="ButtonInteraction" id="buttoninteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="buttoninteraction_channelid" id="buttoninteraction_channelId"></block>' +
    '<block type="buttoninteraction_message" id="buttoninteraction_message"></block>' +
    '<block type="buttoninteraction_customid" id="buttoninteraction_customId"></block>' +
    '<block type="buttoninteraction_componenttype" id="buttoninteraction_componentType"></block>' +
    '<block type="buttoninteraction_deferred" id="buttoninteraction_deferred"></block>' +
    '<block type="buttoninteraction_ephemeral" id="buttoninteraction_ephemeral"></block>' +
    '<block type="buttoninteraction_replied" id="buttoninteraction_replied"></block>' +
    '<block type="buttoninteraction_webhook" id="buttoninteraction_webhook"></block>' +
    '<block type="buttoninteraction_component" id="buttoninteraction_component"></block>' +
    '<block type="buttoninteraction_type" id="buttoninteraction_type"></block>' +
    '<block type="buttoninteraction_id" id="buttoninteraction_id"></block>' +
    '<block type="buttoninteraction_token" id="buttoninteraction_token"></block>' +
    '<block type="buttoninteraction_applicationid" id="buttoninteraction_applicationId"></block>' +
    '<block type="buttoninteraction_guildid" id="buttoninteraction_guildId"></block>' +
    '<block type="buttoninteraction_user" id="buttoninteraction_user"></block>' +
    '<block type="buttoninteraction_member" id="buttoninteraction_member"></block>' +
    '<block type="buttoninteraction_version" id="buttoninteraction_version"></block>' +
    '<block type="buttoninteraction_memberpermissions" id="buttoninteraction_memberPermissions"></block>' +
    '<block type="buttoninteraction_locale" id="buttoninteraction_locale"></block>' +
    '<block type="buttoninteraction_guildlocale" id="buttoninteraction_guildLocale"></block>' +
    '<block type="buttoninteraction_createdtimestamp" id="buttoninteraction_createdTimestamp"></block>' +
    '<block type="buttoninteraction_createdat" id="buttoninteraction_createdAt"></block>' +
    '<block type="buttoninteraction_channel" id="buttoninteraction_channel"></block>' +
    '<block type="buttoninteraction_guild" id="buttoninteraction_guild"></block>' +
    '<block type="buttoninteraction_client" id="buttoninteraction_client"></block>' +
    '<block type="buttoninteraction_deferReply" id="buttoninteraction_deferReply">' +
    '</block>' +
    '<block type="buttoninteraction_reply" id="buttoninteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="buttoninteraction_fetchReply" id="buttoninteraction_fetchReply">' +
    '</block>' +
    '<block type="buttoninteraction_editReply" id="buttoninteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="buttoninteraction_deleteReply" id="buttoninteraction_deleteReply">' +
    '</block>' +
    '<block type="buttoninteraction_followUp" id="buttoninteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="buttoninteraction_deferUpdate" id="buttoninteraction_deferUpdate">' +
    '</block>' +
    '<block type="buttoninteraction_update" id="buttoninteraction_update">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="buttoninteraction_inGuild" id="buttoninteraction_inGuild">' +
    '</block>' +
    '<block type="buttoninteraction_inCachedGuild" id="buttoninteraction_inCachedGuild">' +
    '</block>' +
    '<block type="buttoninteraction_inRawGuild" id="buttoninteraction_inRawGuild">' +
    '</block>' +
    '<block type="buttoninteraction_isApplicationCommand" id="buttoninteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="buttoninteraction_isCommand" id="buttoninteraction_isCommand">' +
    '</block>' +
    '<block type="buttoninteraction_isContextMenu" id="buttoninteraction_isContextMenu">' +
    '</block>' +
    '<block type="buttoninteraction_isUserContextMenu" id="buttoninteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="buttoninteraction_isMessageContextMenu" id="buttoninteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="buttoninteraction_isAutocomplete" id="buttoninteraction_isAutocomplete">' +
    '</block>' +
    '<block type="buttoninteraction_isMessageComponent" id="buttoninteraction_isMessageComponent">' +
    '</block>' +
    '<block type="buttoninteraction_isButton" id="buttoninteraction_isButton">' +
    '</block>' +
    '<block type="buttoninteraction_isSelectMenu" id="buttoninteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="CategoryChannel" id="categorychannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="categorychannel_children" id="categorychannel_children"></block>' +
    '<block type="categorychannel_guild" id="categorychannel_guild"></block>' +
    '<block type="categorychannel_guildid" id="categorychannel_guildId"></block>' +
    '<block type="categorychannel_permissionoverwrites" id="categorychannel_permissionOverwrites"></block>' +
    '<block type="categorychannel_name" id="categorychannel_name"></block>' +
    '<block type="categorychannel_rawposition" id="categorychannel_rawPosition"></block>' +
    '<block type="categorychannel_parentid" id="categorychannel_parentId"></block>' +
    '<block type="categorychannel_parent" id="categorychannel_parent"></block>' +
    '<block type="categorychannel_permissionslocked" id="categorychannel_permissionsLocked"></block>' +
    '<block type="categorychannel_position" id="categorychannel_position"></block>' +
    '<block type="categorychannel_members" id="categorychannel_members"></block>' +
    '<block type="categorychannel_deletable" id="categorychannel_deletable"></block>' +
    '<block type="categorychannel_manageable" id="categorychannel_manageable"></block>' +
    '<block type="categorychannel_viewable" id="categorychannel_viewable"></block>' +
    '<block type="categorychannel_type" id="categorychannel_type"></block>' +
    '<block type="categorychannel_id" id="categorychannel_id"></block>' +
    '<block type="categorychannel_createdtimestamp" id="categorychannel_createdTimestamp"></block>' +
    '<block type="categorychannel_createdat" id="categorychannel_createdAt"></block>' +
    '<block type="categorychannel_partial" id="categorychannel_partial"></block>' +
    '<block type="categorychannel_client" id="categorychannel_client"></block>' +
    '<block type="categorychannel_setParent" id="categorychannel_setParent">' +
    '</block>' +
    '<block type="categorychannel_createChannel" id="categorychannel_createChannel">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="categorychannel_permissionsFor" id="categorychannel_permissionsFor">' +
    '</block>' +
    '<block type="categorychannel_lockPermissions" id="categorychannel_lockPermissions">' +
    '</block>' +
    '<block type="categorychannel_edit" id="categorychannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="categorychannel_setName" id="categorychannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="categorychannel_setPosition" id="categorychannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="categorychannel_clone" id="categorychannel_clone">' +
    '</block>' +
    '<block type="categorychannel_equals" id="categorychannel_equals">' +
    '</block>' +
    '<block type="categorychannel_delete" id="categorychannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="categorychannel_toString" id="categorychannel_toString">' +
    '</block>' +
    '<block type="categorychannel_fetch" id="categorychannel_fetch">' +
    '</block>' +
    '<block type="categorychannel_isText" id="categorychannel_isText">' +
    '</block>' +
    '<block type="categorychannel_isVoice" id="categorychannel_isVoice">' +
    '</block>' +
    '<block type="categorychannel_isThread" id="categorychannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="Channel" id="channel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="channel_type" id="channel_type"></block>' +
    '<block type="channel_id" id="channel_id"></block>' +
    '<block type="channel_createdtimestamp" id="channel_createdTimestamp"></block>' +
    '<block type="channel_createdat" id="channel_createdAt"></block>' +
    '<block type="channel_partial" id="channel_partial"></block>' +
    '<block type="channel_client" id="channel_client"></block>' +
    '<block type="channel_toString" id="channel_toString">' +
    '</block>' +
    '<block type="channel_delete" id="channel_delete">' +
    '</block>' +
    '<block type="channel_fetch" id="channel_fetch">' +
    '</block>' +
    '<block type="channel_isText" id="channel_isText">' +
    '</block>' +
    '<block type="channel_isVoice" id="channel_isVoice">' +
    '</block>' +
    '<block type="channel_isThread" id="channel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="ClientApplication" id="clientapplication" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="clientapplication_commands" id="clientapplication_commands"></block>' +
    '<block type="clientapplication_flags" id="clientapplication_flags"></block>' +
    '<block type="clientapplication_cover" id="clientapplication_cover"></block>' +
    '<block type="clientapplication_rpcorigins" id="clientapplication_rpcOrigins"></block>' +
    '<block type="clientapplication_botrequirecodegrant" id="clientapplication_botRequireCodeGrant"></block>' +
    '<block type="clientapplication_botpublic" id="clientapplication_botPublic"></block>' +
    '<block type="clientapplication_owner" id="clientapplication_owner"></block>' +
    '<block type="clientapplication_partial" id="clientapplication_partial"></block>' +
    '<block type="clientapplication_id" id="clientapplication_id"></block>' +
    '<block type="clientapplication_name" id="clientapplication_name"></block>' +
    '<block type="clientapplication_description" id="clientapplication_description"></block>' +
    '<block type="clientapplication_icon" id="clientapplication_icon"></block>' +
    '<block type="clientapplication_createdtimestamp" id="clientapplication_createdTimestamp"></block>' +
    '<block type="clientapplication_createdat" id="clientapplication_createdAt"></block>' +
    '<block type="clientapplication_fetch" id="clientapplication_fetch">' +
    '</block>' +
    '<block type="clientapplication_iconURL" id="clientapplication_iconURL">' +
    '</block>' +
    '<block type="clientapplication_coverURL" id="clientapplication_coverURL">' +
    '</block>' +
    '<block type="clientapplication_fetchAssets" id="clientapplication_fetchAssets">' +
    '</block>' +
    '<block type="clientapplication_toString" id="clientapplication_toString">' +
    '</block>' +
  '</category>' +
  '<category name="ClientPresence" id="clientpresence" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="clientpresence_userid" id="clientpresence_userId"></block>' +
    '<block type="clientpresence_guild" id="clientpresence_guild"></block>' +
    '<block type="clientpresence_user" id="clientpresence_user"></block>' +
    '<block type="clientpresence_member" id="clientpresence_member"></block>' +
    '<block type="clientpresence_status" id="clientpresence_status"></block>' +
    '<block type="clientpresence_activities" id="clientpresence_activities"></block>' +
    '<block type="clientpresence_clientstatus" id="clientpresence_clientStatus"></block>' +
    '<block type="clientpresence_client" id="clientpresence_client"></block>' +
    '<block type="clientpresence_set" id="clientpresence_set">' +
    '</block>' +
    '<block type="clientpresence_equals" id="clientpresence_equals">' +
    '</block>' +
  '</category>' +
  '<category name="ClientUser" id="clientuser" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="clientuser_verified" id="clientuser_verified"></block>' +
    '<block type="clientuser_mfaenabled" id="clientuser_mfaEnabled"></block>' +
    '<block type="clientuser_presence" id="clientuser_presence"></block>' +
    '<block type="clientuser_id" id="clientuser_id"></block>' +
    '<block type="clientuser_username" id="clientuser_username"></block>' +
    '<block type="clientuser_bot" id="clientuser_bot"></block>' +
    '<block type="clientuser_discriminator" id="clientuser_discriminator"></block>' +
    '<block type="clientuser_avatar" id="clientuser_avatar"></block>' +
    '<block type="clientuser_banner" id="clientuser_banner"></block>' +
    '<block type="clientuser_accentcolor" id="clientuser_accentColor"></block>' +
    '<block type="clientuser_system" id="clientuser_system"></block>' +
    '<block type="clientuser_flags" id="clientuser_flags"></block>' +
    '<block type="clientuser_partial" id="clientuser_partial"></block>' +
    '<block type="clientuser_createdtimestamp" id="clientuser_createdTimestamp"></block>' +
    '<block type="clientuser_createdat" id="clientuser_createdAt"></block>' +
    '<block type="clientuser_defaultavatarurl" id="clientuser_defaultAvatarURL"></block>' +
    '<block type="clientuser_hexaccentcolor" id="clientuser_hexAccentColor"></block>' +
    '<block type="clientuser_tag" id="clientuser_tag"></block>' +
    '<block type="clientuser_dmchannel" id="clientuser_dmChannel"></block>' +
    '<block type="clientuser_client" id="clientuser_client"></block>' +
    '<block type="clientuser_edit" id="clientuser_edit">' +
    '</block>' +
    '<block type="clientuser_setUsername" id="clientuser_setUsername">' +
      '<value name="USERNAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="clientuser_setAvatar" id="clientuser_setAvatar">' +
    '</block>' +
    '<block type="clientuser_setPresence" id="clientuser_setPresence">' +
    '</block>' +
    '<block type="clientuser_setStatus" id="clientuser_setStatus">' +
      '<value name="SHARDID">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="clientuser_setActivity" id="clientuser_setActivity">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="clientuser_setAFK" id="clientuser_setAFK">' +
      '<value name="SHARDID">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="clientuser_avatarURL" id="clientuser_avatarURL">' +
    '</block>' +
    '<block type="clientuser_displayAvatarURL" id="clientuser_displayAvatarURL">' +
    '</block>' +
    '<block type="clientuser_bannerURL" id="clientuser_bannerURL">' +
    '</block>' +
    '<block type="clientuser_createDM" id="clientuser_createDM">' +
    '</block>' +
    '<block type="clientuser_deleteDM" id="clientuser_deleteDM">' +
    '</block>' +
    '<block type="clientuser_equals" id="clientuser_equals">' +
    '</block>' +
    '<block type="clientuser_fetchFlags" id="clientuser_fetchFlags">' +
    '</block>' +
    '<block type="clientuser_fetch" id="clientuser_fetch">' +
    '</block>' +
    '<block type="clientuser_toString" id="clientuser_toString">' +
    '</block>' +
    '<block type="clientuser_send" id="clientuser_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="CommandInteraction" id="commandinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="commandinteraction_options" id="commandinteraction_options"></block>' +
    '<block type="commandinteraction_channelid" id="commandinteraction_channelId"></block>' +
    '<block type="commandinteraction_commandid" id="commandinteraction_commandId"></block>' +
    '<block type="commandinteraction_commandname" id="commandinteraction_commandName"></block>' +
    '<block type="commandinteraction_deferred" id="commandinteraction_deferred"></block>' +
    '<block type="commandinteraction_replied" id="commandinteraction_replied"></block>' +
    '<block type="commandinteraction_ephemeral" id="commandinteraction_ephemeral"></block>' +
    '<block type="commandinteraction_webhook" id="commandinteraction_webhook"></block>' +
    '<block type="commandinteraction_command" id="commandinteraction_command"></block>' +
    '<block type="commandinteraction_type" id="commandinteraction_type"></block>' +
    '<block type="commandinteraction_id" id="commandinteraction_id"></block>' +
    '<block type="commandinteraction_token" id="commandinteraction_token"></block>' +
    '<block type="commandinteraction_applicationid" id="commandinteraction_applicationId"></block>' +
    '<block type="commandinteraction_guildid" id="commandinteraction_guildId"></block>' +
    '<block type="commandinteraction_user" id="commandinteraction_user"></block>' +
    '<block type="commandinteraction_member" id="commandinteraction_member"></block>' +
    '<block type="commandinteraction_version" id="commandinteraction_version"></block>' +
    '<block type="commandinteraction_memberpermissions" id="commandinteraction_memberPermissions"></block>' +
    '<block type="commandinteraction_locale" id="commandinteraction_locale"></block>' +
    '<block type="commandinteraction_guildlocale" id="commandinteraction_guildLocale"></block>' +
    '<block type="commandinteraction_createdtimestamp" id="commandinteraction_createdTimestamp"></block>' +
    '<block type="commandinteraction_createdat" id="commandinteraction_createdAt"></block>' +
    '<block type="commandinteraction_channel" id="commandinteraction_channel"></block>' +
    '<block type="commandinteraction_guild" id="commandinteraction_guild"></block>' +
    '<block type="commandinteraction_client" id="commandinteraction_client"></block>' +
    '<block type="commandinteraction_toString" id="commandinteraction_toString">' +
    '</block>' +
    '<block type="commandinteraction_deferReply" id="commandinteraction_deferReply">' +
    '</block>' +
    '<block type="commandinteraction_reply" id="commandinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteraction_fetchReply" id="commandinteraction_fetchReply">' +
    '</block>' +
    '<block type="commandinteraction_editReply" id="commandinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteraction_deleteReply" id="commandinteraction_deleteReply">' +
    '</block>' +
    '<block type="commandinteraction_followUp" id="commandinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteraction_inGuild" id="commandinteraction_inGuild">' +
    '</block>' +
    '<block type="commandinteraction_inCachedGuild" id="commandinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="commandinteraction_inRawGuild" id="commandinteraction_inRawGuild">' +
    '</block>' +
    '<block type="commandinteraction_isApplicationCommand" id="commandinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="commandinteraction_isCommand" id="commandinteraction_isCommand">' +
    '</block>' +
    '<block type="commandinteraction_isContextMenu" id="commandinteraction_isContextMenu">' +
    '</block>' +
    '<block type="commandinteraction_isUserContextMenu" id="commandinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="commandinteraction_isMessageContextMenu" id="commandinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="commandinteraction_isAutocomplete" id="commandinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="commandinteraction_isMessageComponent" id="commandinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="commandinteraction_isButton" id="commandinteraction_isButton">' +
    '</block>' +
    '<block type="commandinteraction_isSelectMenu" id="commandinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="CommandInteractionOptionResolver" id="commandinteractionoptionresolver" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="commandinteractionoptionresolver_client" id="commandinteractionoptionresolver_client"></block>' +
    '<block type="commandinteractionoptionresolver_data" id="commandinteractionoptionresolver_data"></block>' +
    '<block type="commandinteractionoptionresolver_resolved" id="commandinteractionoptionresolver_resolved"></block>' +
    '<block type="commandinteractionoptionresolver_get" id="commandinteractionoptionresolver_get">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getSubcommand" id="commandinteractionoptionresolver_getSubcommand">' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getSubcommandGroup" id="commandinteractionoptionresolver_getSubcommandGroup">' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getBoolean" id="commandinteractionoptionresolver_getBoolean">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getChannel" id="commandinteractionoptionresolver_getChannel">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getString" id="commandinteractionoptionresolver_getString">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getInteger" id="commandinteractionoptionresolver_getInteger">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getNumber" id="commandinteractionoptionresolver_getNumber">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getUser" id="commandinteractionoptionresolver_getUser">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getMember" id="commandinteractionoptionresolver_getMember">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getRole" id="commandinteractionoptionresolver_getRole">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getMentionable" id="commandinteractionoptionresolver_getMentionable">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getMessage" id="commandinteractionoptionresolver_getMessage">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="commandinteractionoptionresolver_getFocused" id="commandinteractionoptionresolver_getFocused">' +
    '</block>' +
  '</category>' +
  '<category name="ContextMenuInteraction" id="contextmenuinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="contextmenuinteraction_options" id="contextmenuinteraction_options"></block>' +
    '<block type="contextmenuinteraction_targetid" id="contextmenuinteraction_targetId"></block>' +
    '<block type="contextmenuinteraction_targettype" id="contextmenuinteraction_targetType"></block>' +
    '<block type="contextmenuinteraction_channelid" id="contextmenuinteraction_channelId"></block>' +
    '<block type="contextmenuinteraction_commandid" id="contextmenuinteraction_commandId"></block>' +
    '<block type="contextmenuinteraction_commandname" id="contextmenuinteraction_commandName"></block>' +
    '<block type="contextmenuinteraction_deferred" id="contextmenuinteraction_deferred"></block>' +
    '<block type="contextmenuinteraction_replied" id="contextmenuinteraction_replied"></block>' +
    '<block type="contextmenuinteraction_ephemeral" id="contextmenuinteraction_ephemeral"></block>' +
    '<block type="contextmenuinteraction_webhook" id="contextmenuinteraction_webhook"></block>' +
    '<block type="contextmenuinteraction_command" id="contextmenuinteraction_command"></block>' +
    '<block type="contextmenuinteraction_type" id="contextmenuinteraction_type"></block>' +
    '<block type="contextmenuinteraction_id" id="contextmenuinteraction_id"></block>' +
    '<block type="contextmenuinteraction_token" id="contextmenuinteraction_token"></block>' +
    '<block type="contextmenuinteraction_applicationid" id="contextmenuinteraction_applicationId"></block>' +
    '<block type="contextmenuinteraction_guildid" id="contextmenuinteraction_guildId"></block>' +
    '<block type="contextmenuinteraction_user" id="contextmenuinteraction_user"></block>' +
    '<block type="contextmenuinteraction_member" id="contextmenuinteraction_member"></block>' +
    '<block type="contextmenuinteraction_version" id="contextmenuinteraction_version"></block>' +
    '<block type="contextmenuinteraction_memberpermissions" id="contextmenuinteraction_memberPermissions"></block>' +
    '<block type="contextmenuinteraction_locale" id="contextmenuinteraction_locale"></block>' +
    '<block type="contextmenuinteraction_guildlocale" id="contextmenuinteraction_guildLocale"></block>' +
    '<block type="contextmenuinteraction_createdtimestamp" id="contextmenuinteraction_createdTimestamp"></block>' +
    '<block type="contextmenuinteraction_createdat" id="contextmenuinteraction_createdAt"></block>' +
    '<block type="contextmenuinteraction_channel" id="contextmenuinteraction_channel"></block>' +
    '<block type="contextmenuinteraction_guild" id="contextmenuinteraction_guild"></block>' +
    '<block type="contextmenuinteraction_client" id="contextmenuinteraction_client"></block>' +
    '<block type="contextmenuinteraction_deferReply" id="contextmenuinteraction_deferReply">' +
    '</block>' +
    '<block type="contextmenuinteraction_reply" id="contextmenuinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="contextmenuinteraction_fetchReply" id="contextmenuinteraction_fetchReply">' +
    '</block>' +
    '<block type="contextmenuinteraction_editReply" id="contextmenuinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="contextmenuinteraction_deleteReply" id="contextmenuinteraction_deleteReply">' +
    '</block>' +
    '<block type="contextmenuinteraction_followUp" id="contextmenuinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="contextmenuinteraction_inGuild" id="contextmenuinteraction_inGuild">' +
    '</block>' +
    '<block type="contextmenuinteraction_inCachedGuild" id="contextmenuinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="contextmenuinteraction_inRawGuild" id="contextmenuinteraction_inRawGuild">' +
    '</block>' +
    '<block type="contextmenuinteraction_isApplicationCommand" id="contextmenuinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="contextmenuinteraction_isCommand" id="contextmenuinteraction_isCommand">' +
    '</block>' +
    '<block type="contextmenuinteraction_isContextMenu" id="contextmenuinteraction_isContextMenu">' +
    '</block>' +
    '<block type="contextmenuinteraction_isUserContextMenu" id="contextmenuinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="contextmenuinteraction_isMessageContextMenu" id="contextmenuinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="contextmenuinteraction_isAutocomplete" id="contextmenuinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="contextmenuinteraction_isMessageComponent" id="contextmenuinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="contextmenuinteraction_isButton" id="contextmenuinteraction_isButton">' +
    '</block>' +
    '<block type="contextmenuinteraction_isSelectMenu" id="contextmenuinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="DMChannel" id="dmchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="dmchannel_messages" id="dmchannel_messages"></block>' +
    '<block type="dmchannel_recipient" id="dmchannel_recipient"></block>' +
    '<block type="dmchannel_lastmessageid" id="dmchannel_lastMessageId"></block>' +
    '<block type="dmchannel_lastpintimestamp" id="dmchannel_lastPinTimestamp"></block>' +
    '<block type="dmchannel_partial" id="dmchannel_partial"></block>' +
    '<block type="dmchannel_lastmessage" id="dmchannel_lastMessage"></block>' +
    '<block type="dmchannel_lastpinat" id="dmchannel_lastPinAt"></block>' +
    '<block type="dmchannel_type" id="dmchannel_type"></block>' +
    '<block type="dmchannel_id" id="dmchannel_id"></block>' +
    '<block type="dmchannel_createdtimestamp" id="dmchannel_createdTimestamp"></block>' +
    '<block type="dmchannel_createdat" id="dmchannel_createdAt"></block>' +
    '<block type="dmchannel_client" id="dmchannel_client"></block>' +
    '<block type="dmchannel_fetch" id="dmchannel_fetch">' +
    '</block>' +
    '<block type="dmchannel_toString" id="dmchannel_toString">' +
    '</block>' +
    '<block type="dmchannel_send" id="dmchannel_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="dmchannel_sendTyping" id="dmchannel_sendTyping">' +
    '</block>' +
    '<block type="dmchannel_createMessageCollector" id="dmchannel_createMessageCollector">' +
    '</block>' +
    '<block type="dmchannel_awaitMessages" id="dmchannel_awaitMessages">' +
    '</block>' +
    '<block type="dmchannel_createMessageComponentCollector" id="dmchannel_createMessageComponentCollector">' +
    '</block>' +
    '<block type="dmchannel_awaitMessageComponent" id="dmchannel_awaitMessageComponent">' +
    '</block>' +
    '<block type="dmchannel_delete" id="dmchannel_delete">' +
    '</block>' +
    '<block type="dmchannel_isText" id="dmchannel_isText">' +
    '</block>' +
    '<block type="dmchannel_isVoice" id="dmchannel_isVoice">' +
    '</block>' +
    '<block type="dmchannel_isThread" id="dmchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="Emoji" id="emoji" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="emoji_animated" id="emoji_animated"></block>' +
    '<block type="emoji_name" id="emoji_name"></block>' +
    '<block type="emoji_id" id="emoji_id"></block>' +
    '<block type="emoji_identifier" id="emoji_identifier"></block>' +
    '<block type="emoji_url" id="emoji_url"></block>' +
    '<block type="emoji_createdtimestamp" id="emoji_createdTimestamp"></block>' +
    '<block type="emoji_createdat" id="emoji_createdAt"></block>' +
    '<block type="emoji_client" id="emoji_client"></block>' +
    '<block type="emoji_toString" id="emoji_toString">' +
    '</block>' +
  '</category>' +
  '<category name="Guild" id="guild" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guild_commands" id="guild_commands"></block>' +
    '<block type="guild_members" id="guild_members"></block>' +
    '<block type="guild_channels" id="guild_channels"></block>' +
    '<block type="guild_bans" id="guild_bans"></block>' +
    '<block type="guild_roles" id="guild_roles"></block>' +
    '<block type="guild_presences" id="guild_presences"></block>' +
    '<block type="guild_voicestates" id="guild_voiceStates"></block>' +
    '<block type="guild_stageinstances" id="guild_stageInstances"></block>' +
    '<block type="guild_invites" id="guild_invites"></block>' +
    '<block type="guild_scheduledevents" id="guild_scheduledEvents"></block>' +
    '<block type="guild_available" id="guild_available"></block>' +
    '<block type="guild_shardid" id="guild_shardId"></block>' +
    '<block type="guild_shard" id="guild_shard"></block>' +
    '<block type="guild_discoverysplash" id="guild_discoverySplash"></block>' +
    '<block type="guild_membercount" id="guild_memberCount"></block>' +
    '<block type="guild_large" id="guild_large"></block>' +
    '<block type="guild_premiumprogressbarenabled" id="guild_premiumProgressBarEnabled"></block>' +
    '<block type="guild_applicationid" id="guild_applicationId"></block>' +
    '<block type="guild_afktimeout" id="guild_afkTimeout"></block>' +
    '<block type="guild_afkchannelid" id="guild_afkChannelId"></block>' +
    '<block type="guild_systemchannelid" id="guild_systemChannelId"></block>' +
    '<block type="guild_premiumtier" id="guild_premiumTier"></block>' +
    '<block type="guild_premiumsubscriptioncount" id="guild_premiumSubscriptionCount"></block>' +
    '<block type="guild_widgetenabled" id="guild_widgetEnabled"></block>' +
    '<block type="guild_widgetchannelid" id="guild_widgetChannelId"></block>' +
    '<block type="guild_explicitcontentfilter" id="guild_explicitContentFilter"></block>' +
    '<block type="guild_mfalevel" id="guild_mfaLevel"></block>' +
    '<block type="guild_joinedtimestamp" id="guild_joinedTimestamp"></block>' +
    '<block type="guild_defaultmessagenotifications" id="guild_defaultMessageNotifications"></block>' +
    '<block type="guild_systemchannelflags" id="guild_systemChannelFlags"></block>' +
    '<block type="guild_maximummembers" id="guild_maximumMembers"></block>' +
    '<block type="guild_maximumpresences" id="guild_maximumPresences"></block>' +
    '<block type="guild_approximatemembercount" id="guild_approximateMemberCount"></block>' +
    '<block type="guild_approximatepresencecount" id="guild_approximatePresenceCount"></block>' +
    '<block type="guild_vanityurluses" id="guild_vanityURLUses"></block>' +
    '<block type="guild_ruleschannelid" id="guild_rulesChannelId"></block>' +
    '<block type="guild_publicupdateschannelid" id="guild_publicUpdatesChannelId"></block>' +
    '<block type="guild_preferredlocale" id="guild_preferredLocale"></block>' +
    '<block type="guild_ownerid" id="guild_ownerId"></block>' +
    '<block type="guild_emojis" id="guild_emojis"></block>' +
    '<block type="guild_stickers" id="guild_stickers"></block>' +
    '<block type="guild_joinedat" id="guild_joinedAt"></block>' +
    '<block type="guild_afkchannel" id="guild_afkChannel"></block>' +
    '<block type="guild_systemchannel" id="guild_systemChannel"></block>' +
    '<block type="guild_widgetchannel" id="guild_widgetChannel"></block>' +
    '<block type="guild_ruleschannel" id="guild_rulesChannel"></block>' +
    '<block type="guild_publicupdateschannel" id="guild_publicUpdatesChannel"></block>' +
    '<block type="guild_me" id="guild_me"></block>' +
    '<block type="guild_maximumbitrate" id="guild_maximumBitrate"></block>' +
    '<block type="guild_voiceadaptercreator" id="guild_voiceAdapterCreator"></block>' +
    '<block type="guild_splash" id="guild_splash"></block>' +
    '<block type="guild_banner" id="guild_banner"></block>' +
    '<block type="guild_description" id="guild_description"></block>' +
    '<block type="guild_verificationlevel" id="guild_verificationLevel"></block>' +
    '<block type="guild_vanityurlcode" id="guild_vanityURLCode"></block>' +
    '<block type="guild_nsfwlevel" id="guild_nsfwLevel"></block>' +
    '<block type="guild_id" id="guild_id"></block>' +
    '<block type="guild_name" id="guild_name"></block>' +
    '<block type="guild_icon" id="guild_icon"></block>' +
    '<block type="guild_features" id="guild_features"></block>' +
    '<block type="guild_createdtimestamp" id="guild_createdTimestamp"></block>' +
    '<block type="guild_createdat" id="guild_createdAt"></block>' +
    '<block type="guild_nameacronym" id="guild_nameAcronym"></block>' +
    '<block type="guild_partnered" id="guild_partnered"></block>' +
    '<block type="guild_verified" id="guild_verified"></block>' +
    '<block type="guild_client" id="guild_client"></block>' +
    '<block type="guild_discoverySplashURL" id="guild_discoverySplashURL">' +
    '</block>' +
    '<block type="guild_fetchOwner" id="guild_fetchOwner">' +
    '</block>' +
    '<block type="guild_fetchIntegrations" id="guild_fetchIntegrations">' +
    '</block>' +
    '<block type="guild_fetchTemplates" id="guild_fetchTemplates">' +
    '</block>' +
    '<block type="guild_fetchWelcomeScreen" id="guild_fetchWelcomeScreen">' +
    '</block>' +
    '<block type="guild_createTemplate" id="guild_createTemplate">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DESCRIPTION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_fetchPreview" id="guild_fetchPreview">' +
    '</block>' +
    '<block type="guild_fetchVanityData" id="guild_fetchVanityData">' +
    '</block>' +
    '<block type="guild_fetchWebhooks" id="guild_fetchWebhooks">' +
    '</block>' +
    '<block type="guild_fetchWidget" id="guild_fetchWidget">' +
    '</block>' +
    '<block type="guild_fetchWidgetSettings" id="guild_fetchWidgetSettings">' +
    '</block>' +
    '<block type="guild_fetchAuditLogs" id="guild_fetchAuditLogs">' +
    '</block>' +
    '<block type="guild_edit" id="guild_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_editWelcomeScreen" id="guild_editWelcomeScreen">' +
    '</block>' +
    '<block type="guild_setExplicitContentFilter" id="guild_setExplicitContentFilter">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setDefaultMessageNotifications" id="guild_setDefaultMessageNotifications">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setSystemChannelFlags" id="guild_setSystemChannelFlags">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setName" id="guild_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setVerificationLevel" id="guild_setVerificationLevel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setAFKChannel" id="guild_setAFKChannel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setSystemChannel" id="guild_setSystemChannel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setAFKTimeout" id="guild_setAFKTimeout">' +
      '<value name="AFKTIMEOUT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setIcon" id="guild_setIcon">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setOwner" id="guild_setOwner">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setSplash" id="guild_setSplash">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setDiscoverySplash" id="guild_setDiscoverySplash">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setBanner" id="guild_setBanner">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setRulesChannel" id="guild_setRulesChannel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setPublicUpdatesChannel" id="guild_setPublicUpdatesChannel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setPreferredLocale" id="guild_setPreferredLocale">' +
      '<value name="PREFERREDLOCALE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setPremiumProgressBarEnabled" id="guild_setPremiumProgressBarEnabled">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_setWidgetSettings" id="guild_setWidgetSettings">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guild_leave" id="guild_leave">' +
    '</block>' +
    '<block type="guild_delete" id="guild_delete">' +
    '</block>' +
    '<block type="guild_equals" id="guild_equals">' +
    '</block>' +
    '<block type="guild_bannerURL" id="guild_bannerURL">' +
    '</block>' +
    '<block type="guild_splashURL" id="guild_splashURL">' +
    '</block>' +
    '<block type="guild_iconURL" id="guild_iconURL">' +
    '</block>' +
    '<block type="guild_fetch" id="guild_fetch">' +
    '</block>' +
    '<block type="guild_toString" id="guild_toString">' +
    '</block>' +
  '</category>' +
  '<category name="GuildAuditLogs" id="guildauditlogs" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildauditlogs_entries" id="guildauditlogs_entries"></block>' +
    '<block type="guildauditlogs_targets" id="guildauditlogs_Targets"></block>' +
    '<block type="guildauditlogs_actions" id="guildauditlogs_Actions"></block>' +
    '<block type="guildauditlogs_build" id="guildauditlogs_build">' +
    '</block>' +
    '<block type="guildauditlogs_targetType" id="guildauditlogs_targetType">' +
    '</block>' +
    '<block type="guildauditlogs_actionType" id="guildauditlogs_actionType">' +
    '</block>' +
  '</category>' +
  '<category name="GuildAuditLogsEntry" id="guildauditlogsentry" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildauditlogsentry_targettype" id="guildauditlogsentry_targetType"></block>' +
    '<block type="guildauditlogsentry_actiontype" id="guildauditlogsentry_actionType"></block>' +
    '<block type="guildauditlogsentry_action" id="guildauditlogsentry_action"></block>' +
    '<block type="guildauditlogsentry_reason" id="guildauditlogsentry_reason"></block>' +
    '<block type="guildauditlogsentry_executor" id="guildauditlogsentry_executor"></block>' +
    '<block type="guildauditlogsentry_changes" id="guildauditlogsentry_changes"></block>' +
    '<block type="guildauditlogsentry_id" id="guildauditlogsentry_id"></block>' +
    '<block type="guildauditlogsentry_extra" id="guildauditlogsentry_extra"></block>' +
    '<block type="guildauditlogsentry_target" id="guildauditlogsentry_target"></block>' +
    '<block type="guildauditlogsentry_createdtimestamp" id="guildauditlogsentry_createdTimestamp"></block>' +
    '<block type="guildauditlogsentry_createdat" id="guildauditlogsentry_createdAt"></block>' +
  '</category>' +
  '<category name="GuildBan" id="guildban" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildban_guild" id="guildban_guild"></block>' +
    '<block type="guildban_user" id="guildban_user"></block>' +
    '<block type="guildban_reason" id="guildban_reason"></block>' +
    '<block type="guildban_partial" id="guildban_partial"></block>' +
    '<block type="guildban_client" id="guildban_client"></block>' +
    '<block type="guildban_fetch" id="guildban_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="GuildChannel" id="guildchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildchannel_guild" id="guildchannel_guild"></block>' +
    '<block type="guildchannel_guildid" id="guildchannel_guildId"></block>' +
    '<block type="guildchannel_permissionoverwrites" id="guildchannel_permissionOverwrites"></block>' +
    '<block type="guildchannel_name" id="guildchannel_name"></block>' +
    '<block type="guildchannel_rawposition" id="guildchannel_rawPosition"></block>' +
    '<block type="guildchannel_parentid" id="guildchannel_parentId"></block>' +
    '<block type="guildchannel_parent" id="guildchannel_parent"></block>' +
    '<block type="guildchannel_permissionslocked" id="guildchannel_permissionsLocked"></block>' +
    '<block type="guildchannel_position" id="guildchannel_position"></block>' +
    '<block type="guildchannel_members" id="guildchannel_members"></block>' +
    '<block type="guildchannel_deletable" id="guildchannel_deletable"></block>' +
    '<block type="guildchannel_manageable" id="guildchannel_manageable"></block>' +
    '<block type="guildchannel_viewable" id="guildchannel_viewable"></block>' +
    '<block type="guildchannel_type" id="guildchannel_type"></block>' +
    '<block type="guildchannel_id" id="guildchannel_id"></block>' +
    '<block type="guildchannel_createdtimestamp" id="guildchannel_createdTimestamp"></block>' +
    '<block type="guildchannel_createdat" id="guildchannel_createdAt"></block>' +
    '<block type="guildchannel_partial" id="guildchannel_partial"></block>' +
    '<block type="guildchannel_client" id="guildchannel_client"></block>' +
    '<block type="guildchannel_permissionsFor" id="guildchannel_permissionsFor">' +
    '</block>' +
    '<block type="guildchannel_lockPermissions" id="guildchannel_lockPermissions">' +
    '</block>' +
    '<block type="guildchannel_edit" id="guildchannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildchannel_setName" id="guildchannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildchannel_setParent" id="guildchannel_setParent">' +
    '</block>' +
    '<block type="guildchannel_setPosition" id="guildchannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildchannel_clone" id="guildchannel_clone">' +
    '</block>' +
    '<block type="guildchannel_equals" id="guildchannel_equals">' +
    '</block>' +
    '<block type="guildchannel_delete" id="guildchannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildchannel_toString" id="guildchannel_toString">' +
    '</block>' +
    '<block type="guildchannel_fetch" id="guildchannel_fetch">' +
    '</block>' +
    '<block type="guildchannel_isText" id="guildchannel_isText">' +
    '</block>' +
    '<block type="guildchannel_isVoice" id="guildchannel_isVoice">' +
    '</block>' +
    '<block type="guildchannel_isThread" id="guildchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="GuildEmoji" id="guildemoji" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildemoji_author" id="guildemoji_author"></block>' +
    '<block type="guildemoji_guild" id="guildemoji_guild"></block>' +
    '<block type="guildemoji_deletable" id="guildemoji_deletable"></block>' +
    '<block type="guildemoji_roles" id="guildemoji_roles"></block>' +
    '<block type="guildemoji_requirescolons" id="guildemoji_requiresColons"></block>' +
    '<block type="guildemoji_managed" id="guildemoji_managed"></block>' +
    '<block type="guildemoji_available" id="guildemoji_available"></block>' +
    '<block type="guildemoji_animated" id="guildemoji_animated"></block>' +
    '<block type="guildemoji_name" id="guildemoji_name"></block>' +
    '<block type="guildemoji_id" id="guildemoji_id"></block>' +
    '<block type="guildemoji_identifier" id="guildemoji_identifier"></block>' +
    '<block type="guildemoji_url" id="guildemoji_url"></block>' +
    '<block type="guildemoji_createdtimestamp" id="guildemoji_createdTimestamp"></block>' +
    '<block type="guildemoji_createdat" id="guildemoji_createdAt"></block>' +
    '<block type="guildemoji_client" id="guildemoji_client"></block>' +
    '<block type="guildemoji_fetchAuthor" id="guildemoji_fetchAuthor">' +
    '</block>' +
    '<block type="guildemoji_edit" id="guildemoji_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildemoji_setName" id="guildemoji_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildemoji_delete" id="guildemoji_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildemoji_equals" id="guildemoji_equals">' +
    '</block>' +
    '<block type="guildemoji_toString" id="guildemoji_toString">' +
    '</block>' +
  '</category>' +
  '<category name="GuildMember" id="guildmember" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildmember_guild" id="guildmember_guild"></block>' +
    '<block type="guildmember_joinedtimestamp" id="guildmember_joinedTimestamp"></block>' +
    '<block type="guildmember_premiumsincetimestamp" id="guildmember_premiumSinceTimestamp"></block>' +
    '<block type="guildmember_nickname" id="guildmember_nickname"></block>' +
    '<block type="guildmember_pending" id="guildmember_pending"></block>' +
    '<block type="guildmember_communicationdisableduntiltimestamp" id="guildmember_communicationDisabledUntilTimestamp"></block>' +
    '<block type="guildmember_user" id="guildmember_user"></block>' +
    '<block type="guildmember_avatar" id="guildmember_avatar"></block>' +
    '<block type="guildmember_partial" id="guildmember_partial"></block>' +
    '<block type="guildmember_roles" id="guildmember_roles"></block>' +
    '<block type="guildmember_voice" id="guildmember_voice"></block>' +
    '<block type="guildmember_joinedat" id="guildmember_joinedAt"></block>' +
    '<block type="guildmember_communicationdisableduntil" id="guildmember_communicationDisabledUntil"></block>' +
    '<block type="guildmember_premiumsince" id="guildmember_premiumSince"></block>' +
    '<block type="guildmember_presence" id="guildmember_presence"></block>' +
    '<block type="guildmember_displaycolor" id="guildmember_displayColor"></block>' +
    '<block type="guildmember_displayhexcolor" id="guildmember_displayHexColor"></block>' +
    '<block type="guildmember_id" id="guildmember_id"></block>' +
    '<block type="guildmember_displayname" id="guildmember_displayName"></block>' +
    '<block type="guildmember_permissions" id="guildmember_permissions"></block>' +
    '<block type="guildmember_manageable" id="guildmember_manageable"></block>' +
    '<block type="guildmember_kickable" id="guildmember_kickable"></block>' +
    '<block type="guildmember_bannable" id="guildmember_bannable"></block>' +
    '<block type="guildmember_moderatable" id="guildmember_moderatable"></block>' +
    '<block type="guildmember_client" id="guildmember_client"></block>' +
    '<block type="guildmember_avatarURL" id="guildmember_avatarURL">' +
    '</block>' +
    '<block type="guildmember_displayAvatarURL" id="guildmember_displayAvatarURL">' +
    '</block>' +
    '<block type="guildmember_isCommunicationDisabled" id="guildmember_isCommunicationDisabled">' +
    '</block>' +
    '<block type="guildmember_permissionsIn" id="guildmember_permissionsIn">' +
    '</block>' +
    '<block type="guildmember_edit" id="guildmember_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmember_setNickname" id="guildmember_setNickname">' +
      '<value name="NICK">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmember_createDM" id="guildmember_createDM">' +
    '</block>' +
    '<block type="guildmember_deleteDM" id="guildmember_deleteDM">' +
    '</block>' +
    '<block type="guildmember_kick" id="guildmember_kick">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmember_ban" id="guildmember_ban">' +
    '</block>' +
    '<block type="guildmember_disableCommunicationUntil" id="guildmember_disableCommunicationUntil">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmember_timeout" id="guildmember_timeout">' +
      '<value name="TIMEOUT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildmember_fetch" id="guildmember_fetch">' +
    '</block>' +
    '<block type="guildmember_equals" id="guildmember_equals">' +
    '</block>' +
    '<block type="guildmember_toString" id="guildmember_toString">' +
    '</block>' +
    '<block type="guildmember_send" id="guildmember_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="GuildPreview" id="guildpreview" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildpreview_id" id="guildpreview_id"></block>' +
    '<block type="guildpreview_name" id="guildpreview_name"></block>' +
    '<block type="guildpreview_icon" id="guildpreview_icon"></block>' +
    '<block type="guildpreview_splash" id="guildpreview_splash"></block>' +
    '<block type="guildpreview_discoverysplash" id="guildpreview_discoverySplash"></block>' +
    '<block type="guildpreview_features" id="guildpreview_features"></block>' +
    '<block type="guildpreview_approximatemembercount" id="guildpreview_approximateMemberCount"></block>' +
    '<block type="guildpreview_approximatepresencecount" id="guildpreview_approximatePresenceCount"></block>' +
    '<block type="guildpreview_description" id="guildpreview_description"></block>' +
    '<block type="guildpreview_emojis" id="guildpreview_emojis"></block>' +
    '<block type="guildpreview_createdtimestamp" id="guildpreview_createdTimestamp"></block>' +
    '<block type="guildpreview_createdat" id="guildpreview_createdAt"></block>' +
    '<block type="guildpreview_client" id="guildpreview_client"></block>' +
    '<block type="guildpreview_splashURL" id="guildpreview_splashURL">' +
    '</block>' +
    '<block type="guildpreview_discoverySplashURL" id="guildpreview_discoverySplashURL">' +
    '</block>' +
    '<block type="guildpreview_iconURL" id="guildpreview_iconURL">' +
    '</block>' +
    '<block type="guildpreview_fetch" id="guildpreview_fetch">' +
    '</block>' +
    '<block type="guildpreview_toString" id="guildpreview_toString">' +
    '</block>' +
  '</category>' +
  '<category name="GuildPreviewEmoji" id="guildpreviewemoji" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildpreviewemoji_guild" id="guildpreviewemoji_guild"></block>' +
    '<block type="guildpreviewemoji_roles" id="guildpreviewemoji_roles"></block>' +
    '<block type="guildpreviewemoji_requirescolons" id="guildpreviewemoji_requiresColons"></block>' +
    '<block type="guildpreviewemoji_managed" id="guildpreviewemoji_managed"></block>' +
    '<block type="guildpreviewemoji_available" id="guildpreviewemoji_available"></block>' +
    '<block type="guildpreviewemoji_animated" id="guildpreviewemoji_animated"></block>' +
    '<block type="guildpreviewemoji_name" id="guildpreviewemoji_name"></block>' +
    '<block type="guildpreviewemoji_id" id="guildpreviewemoji_id"></block>' +
    '<block type="guildpreviewemoji_identifier" id="guildpreviewemoji_identifier"></block>' +
    '<block type="guildpreviewemoji_url" id="guildpreviewemoji_url"></block>' +
    '<block type="guildpreviewemoji_createdtimestamp" id="guildpreviewemoji_createdTimestamp"></block>' +
    '<block type="guildpreviewemoji_createdat" id="guildpreviewemoji_createdAt"></block>' +
    '<block type="guildpreviewemoji_client" id="guildpreviewemoji_client"></block>' +
    '<block type="guildpreviewemoji_toString" id="guildpreviewemoji_toString">' +
    '</block>' +
  '</category>' +
  '<category name="GuildScheduledEvent" id="guildscheduledevent" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildscheduledevent_id" id="guildscheduledevent_id"></block>' +
    '<block type="guildscheduledevent_guildid" id="guildscheduledevent_guildId"></block>' +
    '<block type="guildscheduledevent_channelid" id="guildscheduledevent_channelId"></block>' +
    '<block type="guildscheduledevent_creatorid" id="guildscheduledevent_creatorId"></block>' +
    '<block type="guildscheduledevent_name" id="guildscheduledevent_name"></block>' +
    '<block type="guildscheduledevent_description" id="guildscheduledevent_description"></block>' +
    '<block type="guildscheduledevent_scheduledstarttimestamp" id="guildscheduledevent_scheduledStartTimestamp"></block>' +
    '<block type="guildscheduledevent_scheduledendtimestamp" id="guildscheduledevent_scheduledEndTimestamp"></block>' +
    '<block type="guildscheduledevent_privacylevel" id="guildscheduledevent_privacyLevel"></block>' +
    '<block type="guildscheduledevent_status" id="guildscheduledevent_status"></block>' +
    '<block type="guildscheduledevent_entitytype" id="guildscheduledevent_entityType"></block>' +
    '<block type="guildscheduledevent_entityid" id="guildscheduledevent_entityId"></block>' +
    '<block type="guildscheduledevent_usercount" id="guildscheduledevent_userCount"></block>' +
    '<block type="guildscheduledevent_creator" id="guildscheduledevent_creator"></block>' +
    '<block type="guildscheduledevent_entitymetadata" id="guildscheduledevent_entityMetadata"></block>' +
    '<block type="guildscheduledevent_createdtimestamp" id="guildscheduledevent_createdTimestamp"></block>' +
    '<block type="guildscheduledevent_createdat" id="guildscheduledevent_createdAt"></block>' +
    '<block type="guildscheduledevent_scheduledstartat" id="guildscheduledevent_scheduledStartAt"></block>' +
    '<block type="guildscheduledevent_scheduledendat" id="guildscheduledevent_scheduledEndAt"></block>' +
    '<block type="guildscheduledevent_channel" id="guildscheduledevent_channel"></block>' +
    '<block type="guildscheduledevent_guild" id="guildscheduledevent_guild"></block>' +
    '<block type="guildscheduledevent_url" id="guildscheduledevent_url"></block>' +
    '<block type="guildscheduledevent_client" id="guildscheduledevent_client"></block>' +
    '<block type="guildscheduledevent_createInviteURL" id="guildscheduledevent_createInviteURL">' +
    '</block>' +
    '<block type="guildscheduledevent_edit" id="guildscheduledevent_edit">' +
    '</block>' +
    '<block type="guildscheduledevent_delete" id="guildscheduledevent_delete">' +
    '</block>' +
    '<block type="guildscheduledevent_setName" id="guildscheduledevent_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_setScheduledStartTime" id="guildscheduledevent_setScheduledStartTime">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_setScheduledEndTime" id="guildscheduledevent_setScheduledEndTime">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_setDescription" id="guildscheduledevent_setDescription">' +
      '<value name="DESCRIPTION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_setStatus" id="guildscheduledevent_setStatus">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_setLocation" id="guildscheduledevent_setLocation">' +
      '<value name="LOCATION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildscheduledevent_fetchSubscribers" id="guildscheduledevent_fetchSubscribers">' +
    '</block>' +
    '<block type="guildscheduledevent_toString" id="guildscheduledevent_toString">' +
    '</block>' +
    '<block type="guildscheduledevent_isActive" id="guildscheduledevent_isActive">' +
    '</block>' +
    '<block type="guildscheduledevent_isCanceled" id="guildscheduledevent_isCanceled">' +
    '</block>' +
    '<block type="guildscheduledevent_isCompleted" id="guildscheduledevent_isCompleted">' +
    '</block>' +
    '<block type="guildscheduledevent_isScheduled" id="guildscheduledevent_isScheduled">' +
    '</block>' +
  '</category>' +
  '<category name="GuildTemplate" id="guildtemplate" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="guildtemplate_code" id="guildtemplate_code"></block>' +
    '<block type="guildtemplate_name" id="guildtemplate_name"></block>' +
    '<block type="guildtemplate_description" id="guildtemplate_description"></block>' +
    '<block type="guildtemplate_usagecount" id="guildtemplate_usageCount"></block>' +
    '<block type="guildtemplate_creatorid" id="guildtemplate_creatorId"></block>' +
    '<block type="guildtemplate_creator" id="guildtemplate_creator"></block>' +
    '<block type="guildtemplate_createdat" id="guildtemplate_createdAt"></block>' +
    '<block type="guildtemplate_updatedat" id="guildtemplate_updatedAt"></block>' +
    '<block type="guildtemplate_guildid" id="guildtemplate_guildId"></block>' +
    '<block type="guildtemplate_serializedguild" id="guildtemplate_serializedGuild"></block>' +
    '<block type="guildtemplate_unsynced" id="guildtemplate_unSynced"></block>' +
    '<block type="guildtemplate_createdtimestamp" id="guildtemplate_createdTimestamp"></block>' +
    '<block type="guildtemplate_updatedtimestamp" id="guildtemplate_updatedTimestamp"></block>' +
    '<block type="guildtemplate_guild" id="guildtemplate_guild"></block>' +
    '<block type="guildtemplate_url" id="guildtemplate_url"></block>' +
    '<block type="guildtemplate_client" id="guildtemplate_client"></block>' +
    '<block type="guildtemplate_guild_templates_pattern" id="guildtemplate_GUILD_TEMPLATES_PATTERN"></block>' +
    '<block type="guildtemplate_createGuild" id="guildtemplate_createGuild">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="guildtemplate_edit" id="guildtemplate_edit">' +
    '</block>' +
    '<block type="guildtemplate_delete" id="guildtemplate_delete">' +
    '</block>' +
    '<block type="guildtemplate_sync" id="guildtemplate_sync">' +
    '</block>' +
    '<block type="guildtemplate_toString" id="guildtemplate_toString">' +
    '</block>' +
  '</category>' +
  '<category name="Integration" id="integration" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="integration_guild" id="integration_guild"></block>' +
    '<block type="integration_id" id="integration_id"></block>' +
    '<block type="integration_name" id="integration_name"></block>' +
    '<block type="integration_type" id="integration_type"></block>' +
    '<block type="integration_enabled" id="integration_enabled"></block>' +
    '<block type="integration_syncing" id="integration_syncing"></block>' +
    '<block type="integration_role" id="integration_role"></block>' +
    '<block type="integration_enableemoticons" id="integration_enableEmoticons"></block>' +
    '<block type="integration_user" id="integration_user"></block>' +
    '<block type="integration_account" id="integration_account"></block>' +
    '<block type="integration_syncedat" id="integration_syncedAt"></block>' +
    '<block type="integration_subscribercount" id="integration_subscriberCount"></block>' +
    '<block type="integration_revoked" id="integration_revoked"></block>' +
    '<block type="integration_roles" id="integration_roles"></block>' +
    '<block type="integration_expirebehavior" id="integration_expireBehavior"></block>' +
    '<block type="integration_expiregraceperiod" id="integration_expireGracePeriod"></block>' +
    '<block type="integration_application" id="integration_application"></block>' +
    '<block type="integration_delete" id="integration_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="IntegrationApplication" id="integrationapplication" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="integrationapplication_bot" id="integrationapplication_bot"></block>' +
    '<block type="integrationapplication_termsofserviceurl" id="integrationapplication_termsOfServiceURL"></block>' +
    '<block type="integrationapplication_privacypolicyurl" id="integrationapplication_privacyPolicyURL"></block>' +
    '<block type="integrationapplication_rpcorigins" id="integrationapplication_rpcOrigins"></block>' +
    '<block type="integrationapplication_summary" id="integrationapplication_summary"></block>' +
    '<block type="integrationapplication_hook" id="integrationapplication_hook"></block>' +
    '<block type="integrationapplication_cover" id="integrationapplication_cover"></block>' +
    '<block type="integrationapplication_verifykey" id="integrationapplication_verifyKey"></block>' +
    '<block type="integrationapplication_id" id="integrationapplication_id"></block>' +
    '<block type="integrationapplication_name" id="integrationapplication_name"></block>' +
    '<block type="integrationapplication_description" id="integrationapplication_description"></block>' +
    '<block type="integrationapplication_icon" id="integrationapplication_icon"></block>' +
    '<block type="integrationapplication_createdtimestamp" id="integrationapplication_createdTimestamp"></block>' +
    '<block type="integrationapplication_createdat" id="integrationapplication_createdAt"></block>' +
    '<block type="integrationapplication_iconURL" id="integrationapplication_iconURL">' +
    '</block>' +
    '<block type="integrationapplication_coverURL" id="integrationapplication_coverURL">' +
    '</block>' +
    '<block type="integrationapplication_fetchAssets" id="integrationapplication_fetchAssets">' +
    '</block>' +
    '<block type="integrationapplication_toString" id="integrationapplication_toString">' +
    '</block>' +
  '</category>' +
  '<category name="Interaction" id="interaction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="interaction_type" id="interaction_type"></block>' +
    '<block type="interaction_id" id="interaction_id"></block>' +
    '<block type="interaction_token" id="interaction_token"></block>' +
    '<block type="interaction_applicationid" id="interaction_applicationId"></block>' +
    '<block type="interaction_channelid" id="interaction_channelId"></block>' +
    '<block type="interaction_guildid" id="interaction_guildId"></block>' +
    '<block type="interaction_user" id="interaction_user"></block>' +
    '<block type="interaction_member" id="interaction_member"></block>' +
    '<block type="interaction_version" id="interaction_version"></block>' +
    '<block type="interaction_memberpermissions" id="interaction_memberPermissions"></block>' +
    '<block type="interaction_locale" id="interaction_locale"></block>' +
    '<block type="interaction_guildlocale" id="interaction_guildLocale"></block>' +
    '<block type="interaction_createdtimestamp" id="interaction_createdTimestamp"></block>' +
    '<block type="interaction_createdat" id="interaction_createdAt"></block>' +
    '<block type="interaction_channel" id="interaction_channel"></block>' +
    '<block type="interaction_guild" id="interaction_guild"></block>' +
    '<block type="interaction_client" id="interaction_client"></block>' +
    '<block type="interaction_inGuild" id="interaction_inGuild">' +
    '</block>' +
    '<block type="interaction_inCachedGuild" id="interaction_inCachedGuild">' +
    '</block>' +
    '<block type="interaction_inRawGuild" id="interaction_inRawGuild">' +
    '</block>' +
    '<block type="interaction_isApplicationCommand" id="interaction_isApplicationCommand">' +
    '</block>' +
    '<block type="interaction_isCommand" id="interaction_isCommand">' +
    '</block>' +
    '<block type="interaction_isContextMenu" id="interaction_isContextMenu">' +
    '</block>' +
    '<block type="interaction_isUserContextMenu" id="interaction_isUserContextMenu">' +
    '</block>' +
    '<block type="interaction_isMessageContextMenu" id="interaction_isMessageContextMenu">' +
    '</block>' +
    '<block type="interaction_isAutocomplete" id="interaction_isAutocomplete">' +
    '</block>' +
    '<block type="interaction_isMessageComponent" id="interaction_isMessageComponent">' +
    '</block>' +
    '<block type="interaction_isButton" id="interaction_isButton">' +
    '</block>' +
    '<block type="interaction_isSelectMenu" id="interaction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="InteractionCollector" id="interactioncollector" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="interactioncollector_on" id="interactioncollector_on"></block>' +
    '<block type="interactioncollector_messageid" id="interactioncollector_messageId"></block>' +
    '<block type="interactioncollector_channelid" id="interactioncollector_channelId"></block>' +
    '<block type="interactioncollector_guildid" id="interactioncollector_guildId"></block>' +
    '<block type="interactioncollector_interactiontype" id="interactioncollector_interactionType"></block>' +
    '<block type="interactioncollector_componenttype" id="interactioncollector_componentType"></block>' +
    '<block type="interactioncollector_users" id="interactioncollector_users"></block>' +
    '<block type="interactioncollector_total" id="interactioncollector_total"></block>' +
    '<block type="interactioncollector_endreason" id="interactioncollector_endReason"></block>' +
    '<block type="interactioncollector_client" id="interactioncollector_client"></block>' +
    '<block type="interactioncollector_filter" id="interactioncollector_filter"></block>' +
    '<block type="interactioncollector_options" id="interactioncollector_options"></block>' +
    '<block type="interactioncollector_collected" id="interactioncollector_collected"></block>' +
    '<block type="interactioncollector_ended" id="interactioncollector_ended"></block>' +
    '<block type="interactioncollector_next" id="interactioncollector_next"></block>' +
    '<block type="interactioncollector_dispose" id="interactioncollector_dispose">' +
    '</block>' +
    '<block type="interactioncollector_empty" id="interactioncollector_empty">' +
    '</block>' +
    '<block type="interactioncollector_handleCollect" id="interactioncollector_handleCollect">' +
    '</block>' +
    '<block type="interactioncollector_handleDispose" id="interactioncollector_handleDispose">' +
    '</block>' +
    '<block type="interactioncollector_stop" id="interactioncollector_stop">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="interactioncollector_resetTimer" id="interactioncollector_resetTimer">' +
    '</block>' +
    '<block type="interactioncollector_checkEnd" id="interactioncollector_checkEnd">' +
    '</block>' +
  '</category>' +
  '<category name="InteractionWebhook" id="interactionwebhook" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="interactionwebhook_client" id="interactionwebhook_client"></block>' +
    '<block type="interactionwebhook_id" id="interactionwebhook_id"></block>' +
    '<block type="interactionwebhook_url" id="interactionwebhook_url"></block>' +
    '<block type="interactionwebhook_send" id="interactionwebhook_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="interactionwebhook_fetchMessage" id="interactionwebhook_fetchMessage">' +
    '</block>' +
    '<block type="interactionwebhook_editMessage" id="interactionwebhook_editMessage">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="interactionwebhook_deleteMessage" id="interactionwebhook_deleteMessage">' +
    '</block>' +
  '</category>' +
  '<category name="Application" id="application" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="application_id" id="application_id"></block>' +
    '<block type="application_name" id="application_name"></block>' +
    '<block type="application_description" id="application_description"></block>' +
    '<block type="application_icon" id="application_icon"></block>' +
    '<block type="application_createdtimestamp" id="application_createdTimestamp"></block>' +
    '<block type="application_createdat" id="application_createdAt"></block>' +
    '<block type="application_iconURL" id="application_iconURL">' +
    '</block>' +
    '<block type="application_coverURL" id="application_coverURL">' +
    '</block>' +
    '<block type="application_fetchAssets" id="application_fetchAssets">' +
    '</block>' +
    '<block type="application_toString" id="application_toString">' +
    '</block>' +
  '</category>' +
  '<category name="Collector" id="collector" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="collector_on" id="collector_on"></block>' +
    '<block type="collector_client" id="collector_client"></block>' +
    '<block type="collector_filter" id="collector_filter"></block>' +
    '<block type="collector_options" id="collector_options"></block>' +
    '<block type="collector_collected" id="collector_collected"></block>' +
    '<block type="collector_ended" id="collector_ended"></block>' +
    '<block type="collector_next" id="collector_next"></block>' +
    '<block type="collector_endreason" id="collector_endReason"></block>' +
    '<block type="collector_handleCollect" id="collector_handleCollect">' +
    '</block>' +
    '<block type="collector_handleDispose" id="collector_handleDispose">' +
    '</block>' +
    '<block type="collector_stop" id="collector_stop">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="collector_resetTimer" id="collector_resetTimer">' +
    '</block>' +
    '<block type="collector_checkEnd" id="collector_checkEnd">' +
    '</block>' +
    '<block type="collector_collect" id="collector_collect">' +
    '</block>' +
    '<block type="collector_dispose" id="collector_dispose">' +
    '</block>' +
  '</category>' +
  '<category name="Invite" id="invite" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="invite_guild" id="invite_guild"></block>' +
    '<block type="invite_code" id="invite_code"></block>' +
    '<block type="invite_presencecount" id="invite_presenceCount"></block>' +
    '<block type="invite_membercount" id="invite_memberCount"></block>' +
    '<block type="invite_temporary" id="invite_temporary"></block>' +
    '<block type="invite_maxage" id="invite_maxAge"></block>' +
    '<block type="invite_uses" id="invite_uses"></block>' +
    '<block type="invite_maxuses" id="invite_maxUses"></block>' +
    '<block type="invite_inviterid" id="invite_inviterId"></block>' +
    '<block type="invite_inviter" id="invite_inviter"></block>' +
    '<block type="invite_targetuser" id="invite_targetUser"></block>' +
    '<block type="invite_targetapplication" id="invite_targetApplication"></block>' +
    '<block type="invite_targettype" id="invite_targetType"></block>' +
    '<block type="invite_channelid" id="invite_channelId"></block>' +
    '<block type="invite_channel" id="invite_channel"></block>' +
    '<block type="invite_createdtimestamp" id="invite_createdTimestamp"></block>' +
    '<block type="invite_stageinstance" id="invite_stageInstance"></block>' +
    '<block type="invite_guildscheduledevent" id="invite_guildScheduledEvent"></block>' +
    '<block type="invite_createdat" id="invite_createdAt"></block>' +
    '<block type="invite_deletable" id="invite_deletable"></block>' +
    '<block type="invite_expirestimestamp" id="invite_expiresTimestamp"></block>' +
    '<block type="invite_expiresat" id="invite_expiresAt"></block>' +
    '<block type="invite_url" id="invite_url"></block>' +
    '<block type="invite_client" id="invite_client"></block>' +
    '<block type="invite_invites_pattern" id="invite_INVITES_PATTERN"></block>' +
    '<block type="invite_delete" id="invite_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="invite_toString" id="invite_toString">' +
    '</block>' +
  '</category>' +
  '<category name="InviteGuild" id="inviteguild" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="inviteguild_welcomescreen" id="inviteguild_welcomeScreen"></block>' +
    '<block type="inviteguild_splash" id="inviteguild_splash"></block>' +
    '<block type="inviteguild_banner" id="inviteguild_banner"></block>' +
    '<block type="inviteguild_description" id="inviteguild_description"></block>' +
    '<block type="inviteguild_verificationlevel" id="inviteguild_verificationLevel"></block>' +
    '<block type="inviteguild_vanityurlcode" id="inviteguild_vanityURLCode"></block>' +
    '<block type="inviteguild_nsfwlevel" id="inviteguild_nsfwLevel"></block>' +
    '<block type="inviteguild_id" id="inviteguild_id"></block>' +
    '<block type="inviteguild_name" id="inviteguild_name"></block>' +
    '<block type="inviteguild_icon" id="inviteguild_icon"></block>' +
    '<block type="inviteguild_features" id="inviteguild_features"></block>' +
    '<block type="inviteguild_createdtimestamp" id="inviteguild_createdTimestamp"></block>' +
    '<block type="inviteguild_createdat" id="inviteguild_createdAt"></block>' +
    '<block type="inviteguild_nameacronym" id="inviteguild_nameAcronym"></block>' +
    '<block type="inviteguild_partnered" id="inviteguild_partnered"></block>' +
    '<block type="inviteguild_verified" id="inviteguild_verified"></block>' +
    '<block type="inviteguild_client" id="inviteguild_client"></block>' +
    '<block type="inviteguild_bannerURL" id="inviteguild_bannerURL">' +
    '</block>' +
    '<block type="inviteguild_splashURL" id="inviteguild_splashURL">' +
    '</block>' +
    '<block type="inviteguild_iconURL" id="inviteguild_iconURL">' +
    '</block>' +
    '<block type="inviteguild_fetch" id="inviteguild_fetch">' +
    '</block>' +
    '<block type="inviteguild_toString" id="inviteguild_toString">' +
    '</block>' +
  '</category>' +
  '<category name="InviteStageInstance" id="invitestageinstance" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="invitestageinstance_channelid" id="invitestageinstance_channelId"></block>' +
    '<block type="invitestageinstance_guildid" id="invitestageinstance_guildId"></block>' +
    '<block type="invitestageinstance_members" id="invitestageinstance_members"></block>' +
    '<block type="invitestageinstance_topic" id="invitestageinstance_topic"></block>' +
    '<block type="invitestageinstance_participantcount" id="invitestageinstance_participantCount"></block>' +
    '<block type="invitestageinstance_speakercount" id="invitestageinstance_speakerCount"></block>' +
    '<block type="invitestageinstance_channel" id="invitestageinstance_channel"></block>' +
    '<block type="invitestageinstance_guild" id="invitestageinstance_guild"></block>' +
    '<block type="invitestageinstance_client" id="invitestageinstance_client"></block>' +
  '</category>' +
  '<category name="Message" id="message" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="message_channelid" id="message_channelId"></block>' +
    '<block type="message_guildid" id="message_guildId"></block>' +
    '<block type="message_id" id="message_id"></block>' +
    '<block type="message_createdtimestamp" id="message_createdTimestamp"></block>' +
    '<block type="message_type" id="message_type"></block>' +
    '<block type="message_system" id="message_system"></block>' +
    '<block type="message_content" id="message_content"></block>' +
    '<block type="message_author" id="message_author"></block>' +
    '<block type="message_pinned" id="message_pinned"></block>' +
    '<block type="message_tts" id="message_tts"></block>' +
    '<block type="message_nonce" id="message_nonce"></block>' +
    '<block type="message_embeds" id="message_embeds"></block>' +
    '<block type="message_components" id="message_components"></block>' +
    '<block type="message_attachments" id="message_attachments"></block>' +
    '<block type="message_stickers" id="message_stickers"></block>' +
    '<block type="message_editedtimestamp" id="message_editedTimestamp"></block>' +
    '<block type="message_reactions" id="message_reactions"></block>' +
    '<block type="message_mentions" id="message_mentions"></block>' +
    '<block type="message_webhookid" id="message_webhookId"></block>' +
    '<block type="message_groupactivityapplication" id="message_groupActivityApplication"></block>' +
    '<block type="message_applicationid" id="message_applicationId"></block>' +
    '<block type="message_activity" id="message_activity"></block>' +
    '<block type="message_flags" id="message_flags"></block>' +
    '<block type="message_reference" id="message_reference"></block>' +
    '<block type="message_interaction" id="message_interaction"></block>' +
    '<block type="message_channel" id="message_channel"></block>' +
    '<block type="message_partial" id="message_partial"></block>' +
    '<block type="message_member" id="message_member"></block>' +
    '<block type="message_createdat" id="message_createdAt"></block>' +
    '<block type="message_editedat" id="message_editedAt"></block>' +
    '<block type="message_guild" id="message_guild"></block>' +
    '<block type="message_hasthread" id="message_hasThread"></block>' +
    '<block type="message_thread" id="message_thread"></block>' +
    '<block type="message_url" id="message_url"></block>' +
    '<block type="message_cleancontent" id="message_cleanContent"></block>' +
    '<block type="message_editable" id="message_editable"></block>' +
    '<block type="message_deletable" id="message_deletable"></block>' +
    '<block type="message_pinnable" id="message_pinnable"></block>' +
    '<block type="message_crosspostable" id="message_crosspostable"></block>' +
    '<block type="message_client" id="message_client"></block>' +
    '<block type="message_createReactionCollector" id="message_createReactionCollector">' +
    '</block>' +
    '<block type="message_awaitReactions" id="message_awaitReactions">' +
    '</block>' +
    '<block type="message_createMessageComponentCollector" id="message_createMessageComponentCollector">' +
    '</block>' +
    '<block type="message_awaitMessageComponent" id="message_awaitMessageComponent">' +
    '</block>' +
    '<block type="message_fetchReference" id="message_fetchReference">' +
    '</block>' +
    '<block type="message_edit" id="message_edit">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_crosspost" id="message_crosspost">' +
    '</block>' +
    '<block type="message_pin" id="message_pin">' +
    '</block>' +
    '<block type="message_unpin" id="message_unpin">' +
    '</block>' +
    '<block type="message_react" id="message_react">' +
    '</block>' +
    '<block type="message_delete" id="message_delete">' +
    '</block>' +
    '<block type="message_reply" id="message_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_startThread" id="message_startThread">' +
    '</block>' +
    '<block type="message_fetch" id="message_fetch">' +
    '</block>' +
    '<block type="message_fetchWebhook" id="message_fetchWebhook">' +
    '</block>' +
    '<block type="message_suppressEmbeds" id="message_suppressEmbeds">' +
    '</block>' +
    '<block type="message_removeAttachments" id="message_removeAttachments">' +
    '</block>' +
    '<block type="message_resolveComponent" id="message_resolveComponent">' +
      '<value name="CUSTOMID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_equals" id="message_equals">' +
    '</block>' +
    '<block type="message_inGuild" id="message_inGuild">' +
    '</block>' +
    '<block type="message_toString" id="message_toString">' +
    '</block>' +
  '</category>' +
  '<category name="MessageActionRow" id="messageactionrow" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messageactionrow_components" id="messageactionrow_components"></block>' +
    '<block type="messageactionrow_type" id="messageactionrow_type"></block>' +
    '<block type="messageactionrow_addComponents" id="messageactionrow_addComponents">' +
    '</block>' +
    '<block type="messageactionrow_setComponents" id="messageactionrow_setComponents">' +
    '</block>' +
    '<block type="messageactionrow_spliceComponents" id="messageactionrow_spliceComponents">' +
      '<value name="INDEX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DELETECOUNT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageactionrow_toJSON" id="messageactionrow_toJSON">' +
    '</block>' +
  '</category>' +
  '<category name="MessageAttachment" id="messageattachment" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messageattachment_name" id="messageattachment_name"></block>' +
    '<block type="messageattachment_id" id="messageattachment_id"></block>' +
    '<block type="messageattachment_size" id="messageattachment_size"></block>' +
    '<block type="messageattachment_url" id="messageattachment_url"></block>' +
    '<block type="messageattachment_proxyurl" id="messageattachment_proxyURL"></block>' +
    '<block type="messageattachment_height" id="messageattachment_height"></block>' +
    '<block type="messageattachment_width" id="messageattachment_width"></block>' +
    '<block type="messageattachment_contenttype" id="messageattachment_contentType"></block>' +
    '<block type="messageattachment_description" id="messageattachment_description"></block>' +
    '<block type="messageattachment_ephemeral" id="messageattachment_ephemeral"></block>' +
    '<block type="messageattachment_spoiler" id="messageattachment_spoiler"></block>' +
    '<block type="messageattachment_setDescription" id="messageattachment_setDescription">' +
      '<value name="DESCRIPTION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageattachment_setFile" id="messageattachment_setFile">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageattachment_setName" id="messageattachment_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageattachment_setSpoiler" id="messageattachment_setSpoiler">' +
    '</block>' +
  '</category>' +
  '<category name="MessageButton" id="messagebutton" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagebutton_label" id="messagebutton_label"></block>' +
    '<block type="messagebutton_customid" id="messagebutton_customId"></block>' +
    '<block type="messagebutton_style" id="messagebutton_style"></block>' +
    '<block type="messagebutton_emoji" id="messagebutton_emoji"></block>' +
    '<block type="messagebutton_url" id="messagebutton_url"></block>' +
    '<block type="messagebutton_disabled" id="messagebutton_disabled"></block>' +
    '<block type="messagebutton_type" id="messagebutton_type"></block>' +
    '<block type="messagebutton_setCustomId" id="messagebutton_setCustomId">' +
      '<value name="CUSTOMID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagebutton_setDisabled" id="messagebutton_setDisabled">' +
    '</block>' +
    '<block type="messagebutton_setEmoji" id="messagebutton_setEmoji">' +
    '</block>' +
    '<block type="messagebutton_setLabel" id="messagebutton_setLabel">' +
      '<value name="LABEL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagebutton_setStyle" id="messagebutton_setStyle">' +
    '</block>' +
    '<block type="messagebutton_setURL" id="messagebutton_setURL">' +
      '<value name="URL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagebutton_toJSON" id="messagebutton_toJSON">' +
    '</block>' +
  '</category>' +
  '<category name="MessageCollector" id="messagecollector" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagecollector_on" id="messagecollector_on"></block>' +
    '<block type="messagecollector_channel" id="messagecollector_channel"></block>' +
    '<block type="messagecollector_received" id="messagecollector_received"></block>' +
    '<block type="messagecollector_endreason" id="messagecollector_endReason"></block>' +
    '<block type="messagecollector_client" id="messagecollector_client"></block>' +
    '<block type="messagecollector_filter" id="messagecollector_filter"></block>' +
    '<block type="messagecollector_options" id="messagecollector_options"></block>' +
    '<block type="messagecollector_collected" id="messagecollector_collected"></block>' +
    '<block type="messagecollector_ended" id="messagecollector_ended"></block>' +
    '<block type="messagecollector_next" id="messagecollector_next"></block>' +
    '<block type="messagecollector_dispose" id="messagecollector_dispose">' +
    '</block>' +
    '<block type="messagecollector_handleCollect" id="messagecollector_handleCollect">' +
    '</block>' +
    '<block type="messagecollector_handleDispose" id="messagecollector_handleDispose">' +
    '</block>' +
    '<block type="messagecollector_stop" id="messagecollector_stop">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecollector_resetTimer" id="messagecollector_resetTimer">' +
    '</block>' +
    '<block type="messagecollector_checkEnd" id="messagecollector_checkEnd">' +
    '</block>' +
  '</category>' +
  '<category name="MessageComponentInteraction" id="messagecomponentinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagecomponentinteraction_channelid" id="messagecomponentinteraction_channelId"></block>' +
    '<block type="messagecomponentinteraction_message" id="messagecomponentinteraction_message"></block>' +
    '<block type="messagecomponentinteraction_customid" id="messagecomponentinteraction_customId"></block>' +
    '<block type="messagecomponentinteraction_componenttype" id="messagecomponentinteraction_componentType"></block>' +
    '<block type="messagecomponentinteraction_deferred" id="messagecomponentinteraction_deferred"></block>' +
    '<block type="messagecomponentinteraction_ephemeral" id="messagecomponentinteraction_ephemeral"></block>' +
    '<block type="messagecomponentinteraction_replied" id="messagecomponentinteraction_replied"></block>' +
    '<block type="messagecomponentinteraction_webhook" id="messagecomponentinteraction_webhook"></block>' +
    '<block type="messagecomponentinteraction_component" id="messagecomponentinteraction_component"></block>' +
    '<block type="messagecomponentinteraction_type" id="messagecomponentinteraction_type"></block>' +
    '<block type="messagecomponentinteraction_id" id="messagecomponentinteraction_id"></block>' +
    '<block type="messagecomponentinteraction_token" id="messagecomponentinteraction_token"></block>' +
    '<block type="messagecomponentinteraction_applicationid" id="messagecomponentinteraction_applicationId"></block>' +
    '<block type="messagecomponentinteraction_guildid" id="messagecomponentinteraction_guildId"></block>' +
    '<block type="messagecomponentinteraction_user" id="messagecomponentinteraction_user"></block>' +
    '<block type="messagecomponentinteraction_member" id="messagecomponentinteraction_member"></block>' +
    '<block type="messagecomponentinteraction_version" id="messagecomponentinteraction_version"></block>' +
    '<block type="messagecomponentinteraction_memberpermissions" id="messagecomponentinteraction_memberPermissions"></block>' +
    '<block type="messagecomponentinteraction_locale" id="messagecomponentinteraction_locale"></block>' +
    '<block type="messagecomponentinteraction_guildlocale" id="messagecomponentinteraction_guildLocale"></block>' +
    '<block type="messagecomponentinteraction_createdtimestamp" id="messagecomponentinteraction_createdTimestamp"></block>' +
    '<block type="messagecomponentinteraction_createdat" id="messagecomponentinteraction_createdAt"></block>' +
    '<block type="messagecomponentinteraction_channel" id="messagecomponentinteraction_channel"></block>' +
    '<block type="messagecomponentinteraction_guild" id="messagecomponentinteraction_guild"></block>' +
    '<block type="messagecomponentinteraction_client" id="messagecomponentinteraction_client"></block>' +
    '<block type="messagecomponentinteraction_deferReply" id="messagecomponentinteraction_deferReply">' +
    '</block>' +
    '<block type="messagecomponentinteraction_reply" id="messagecomponentinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecomponentinteraction_fetchReply" id="messagecomponentinteraction_fetchReply">' +
    '</block>' +
    '<block type="messagecomponentinteraction_editReply" id="messagecomponentinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecomponentinteraction_deleteReply" id="messagecomponentinteraction_deleteReply">' +
    '</block>' +
    '<block type="messagecomponentinteraction_followUp" id="messagecomponentinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecomponentinteraction_deferUpdate" id="messagecomponentinteraction_deferUpdate">' +
    '</block>' +
    '<block type="messagecomponentinteraction_update" id="messagecomponentinteraction_update">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecomponentinteraction_inGuild" id="messagecomponentinteraction_inGuild">' +
    '</block>' +
    '<block type="messagecomponentinteraction_inCachedGuild" id="messagecomponentinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="messagecomponentinteraction_inRawGuild" id="messagecomponentinteraction_inRawGuild">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isApplicationCommand" id="messagecomponentinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isCommand" id="messagecomponentinteraction_isCommand">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isContextMenu" id="messagecomponentinteraction_isContextMenu">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isUserContextMenu" id="messagecomponentinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isMessageContextMenu" id="messagecomponentinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isAutocomplete" id="messagecomponentinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isMessageComponent" id="messagecomponentinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isButton" id="messagecomponentinteraction_isButton">' +
    '</block>' +
    '<block type="messagecomponentinteraction_isSelectMenu" id="messagecomponentinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="MessageContextMenuInteraction" id="messagecontextmenuinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagecontextmenuinteraction_targetmessage" id="messagecontextmenuinteraction_targetMessage"></block>' +
    '<block type="messagecontextmenuinteraction_options" id="messagecontextmenuinteraction_options"></block>' +
    '<block type="messagecontextmenuinteraction_targetid" id="messagecontextmenuinteraction_targetId"></block>' +
    '<block type="messagecontextmenuinteraction_targettype" id="messagecontextmenuinteraction_targetType"></block>' +
    '<block type="messagecontextmenuinteraction_channelid" id="messagecontextmenuinteraction_channelId"></block>' +
    '<block type="messagecontextmenuinteraction_commandid" id="messagecontextmenuinteraction_commandId"></block>' +
    '<block type="messagecontextmenuinteraction_commandname" id="messagecontextmenuinteraction_commandName"></block>' +
    '<block type="messagecontextmenuinteraction_deferred" id="messagecontextmenuinteraction_deferred"></block>' +
    '<block type="messagecontextmenuinteraction_replied" id="messagecontextmenuinteraction_replied"></block>' +
    '<block type="messagecontextmenuinteraction_ephemeral" id="messagecontextmenuinteraction_ephemeral"></block>' +
    '<block type="messagecontextmenuinteraction_webhook" id="messagecontextmenuinteraction_webhook"></block>' +
    '<block type="messagecontextmenuinteraction_command" id="messagecontextmenuinteraction_command"></block>' +
    '<block type="messagecontextmenuinteraction_type" id="messagecontextmenuinteraction_type"></block>' +
    '<block type="messagecontextmenuinteraction_id" id="messagecontextmenuinteraction_id"></block>' +
    '<block type="messagecontextmenuinteraction_token" id="messagecontextmenuinteraction_token"></block>' +
    '<block type="messagecontextmenuinteraction_applicationid" id="messagecontextmenuinteraction_applicationId"></block>' +
    '<block type="messagecontextmenuinteraction_guildid" id="messagecontextmenuinteraction_guildId"></block>' +
    '<block type="messagecontextmenuinteraction_user" id="messagecontextmenuinteraction_user"></block>' +
    '<block type="messagecontextmenuinteraction_member" id="messagecontextmenuinteraction_member"></block>' +
    '<block type="messagecontextmenuinteraction_version" id="messagecontextmenuinteraction_version"></block>' +
    '<block type="messagecontextmenuinteraction_memberpermissions" id="messagecontextmenuinteraction_memberPermissions"></block>' +
    '<block type="messagecontextmenuinteraction_locale" id="messagecontextmenuinteraction_locale"></block>' +
    '<block type="messagecontextmenuinteraction_guildlocale" id="messagecontextmenuinteraction_guildLocale"></block>' +
    '<block type="messagecontextmenuinteraction_createdtimestamp" id="messagecontextmenuinteraction_createdTimestamp"></block>' +
    '<block type="messagecontextmenuinteraction_createdat" id="messagecontextmenuinteraction_createdAt"></block>' +
    '<block type="messagecontextmenuinteraction_channel" id="messagecontextmenuinteraction_channel"></block>' +
    '<block type="messagecontextmenuinteraction_guild" id="messagecontextmenuinteraction_guild"></block>' +
    '<block type="messagecontextmenuinteraction_client" id="messagecontextmenuinteraction_client"></block>' +
    '<block type="messagecontextmenuinteraction_deferReply" id="messagecontextmenuinteraction_deferReply">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_reply" id="messagecontextmenuinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_fetchReply" id="messagecontextmenuinteraction_fetchReply">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_editReply" id="messagecontextmenuinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_deleteReply" id="messagecontextmenuinteraction_deleteReply">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_followUp" id="messagecontextmenuinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_inGuild" id="messagecontextmenuinteraction_inGuild">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_inCachedGuild" id="messagecontextmenuinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_inRawGuild" id="messagecontextmenuinteraction_inRawGuild">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isApplicationCommand" id="messagecontextmenuinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isCommand" id="messagecontextmenuinteraction_isCommand">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isContextMenu" id="messagecontextmenuinteraction_isContextMenu">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isUserContextMenu" id="messagecontextmenuinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isMessageContextMenu" id="messagecontextmenuinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isAutocomplete" id="messagecontextmenuinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isMessageComponent" id="messagecontextmenuinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isButton" id="messagecontextmenuinteraction_isButton">' +
    '</block>' +
    '<block type="messagecontextmenuinteraction_isSelectMenu" id="messagecontextmenuinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="MessageEmbed" id="messageembed" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messageembed_title" id="messageembed_title"></block>' +
    '<block type="messageembed_description" id="messageembed_description"></block>' +
    '<block type="messageembed_url" id="messageembed_url"></block>' +
    '<block type="messageembed_color" id="messageembed_color"></block>' +
    '<block type="messageembed_timestamp" id="messageembed_timestamp"></block>' +
    '<block type="messageembed_fields" id="messageembed_fields"></block>' +
    '<block type="messageembed_thumbnail" id="messageembed_thumbnail"></block>' +
    '<block type="messageembed_image" id="messageembed_image"></block>' +
    '<block type="messageembed_video" id="messageembed_video"></block>' +
    '<block type="messageembed_author" id="messageembed_author"></block>' +
    '<block type="messageembed_provider" id="messageembed_provider"></block>' +
    '<block type="messageembed_footer" id="messageembed_footer"></block>' +
    '<block type="messageembed_createdat" id="messageembed_createdAt"></block>' +
    '<block type="messageembed_hexcolor" id="messageembed_hexColor"></block>' +
    '<block type="messageembed_length" id="messageembed_length"></block>' +
    '<block type="messageembed_equals" id="messageembed_equals">' +
    '</block>' +
    '<block type="messageembed_addField" id="messageembed_addField">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="VALUE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_addFields" id="messageembed_addFields">' +
    '</block>' +
    '<block type="messageembed_spliceFields" id="messageembed_spliceFields">' +
      '<value name="INDEX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DELETECOUNT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setFields" id="messageembed_setFields">' +
    '</block>' +
    '<block type="messageembed_setAuthor" id="messageembed_setAuthor">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DEPRECATEDICONURL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DEPRECATEDURL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setColor" id="messageembed_setColor">' +
    '</block>' +
    '<block type="messageembed_setDescription" id="messageembed_setDescription">' +
      '<value name="DESCRIPTION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setFooter" id="messageembed_setFooter">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DEPRECATEDICONURL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setImage" id="messageembed_setImage">' +
      '<value name="URL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setThumbnail" id="messageembed_setThumbnail">' +
      '<value name="URL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setTimestamp" id="messageembed_setTimestamp">' +
    '</block>' +
    '<block type="messageembed_setTitle" id="messageembed_setTitle">' +
      '<value name="TITLE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_setURL" id="messageembed_setURL">' +
      '<value name="URL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_toJSON" id="messageembed_toJSON">' +
    '</block>' +
    '<block type="messageembed_normalizeField" id="messageembed_normalizeField">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="VALUE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageembed_normalizeFields" id="messageembed_normalizeFields">' +
    '</block>' +
  '</category>' +
  '<category name="MessageMentions" id="messagementions" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagementions_everyone" id="messagementions_everyone"></block>' +
    '<block type="messagementions_users" id="messagementions_users"></block>' +
    '<block type="messagementions_roles" id="messagementions_roles"></block>' +
    '<block type="messagementions_crosspostedchannels" id="messagementions_crosspostedChannels"></block>' +
    '<block type="messagementions_replieduser" id="messagementions_repliedUser"></block>' +
    '<block type="messagementions_members" id="messagementions_members"></block>' +
    '<block type="messagementions_channels" id="messagementions_channels"></block>' +
    '<block type="messagementions_everyone_pattern" id="messagementions_EVERYONE_PATTERN"></block>' +
    '<block type="messagementions_users_pattern" id="messagementions_USERS_PATTERN"></block>' +
    '<block type="messagementions_roles_pattern" id="messagementions_ROLES_PATTERN"></block>' +
    '<block type="messagementions_channels_pattern" id="messagementions_CHANNELS_PATTERN"></block>' +
    '<block type="messagementions_has" id="messagementions_has">' +
    '</block>' +
  '</category>' +
  '<category name="MessagePayload" id="messagepayload" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagepayload_target" id="messagepayload_target"></block>' +
    '<block type="messagepayload_options" id="messagepayload_options"></block>' +
    '<block type="messagepayload_data" id="messagepayload_data"></block>' +
    '<block type="messagepayload_files" id="messagepayload_files"></block>' +
    '<block type="messagepayload_iswebhook" id="messagepayload_isWebhook"></block>' +
    '<block type="messagepayload_isuser" id="messagepayload_isUser"></block>' +
    '<block type="messagepayload_ismessage" id="messagepayload_isMessage"></block>' +
    '<block type="messagepayload_ismessagemanager" id="messagepayload_isMessageManager"></block>' +
    '<block type="messagepayload_isinteraction" id="messagepayload_isInteraction"></block>' +
    '<block type="messagepayload_makeContent" id="messagepayload_makeContent">' +
    '</block>' +
    '<block type="messagepayload_resolveData" id="messagepayload_resolveData">' +
    '</block>' +
    '<block type="messagepayload_resolveFiles" id="messagepayload_resolveFiles">' +
    '</block>' +
    '<block type="messagepayload_resolveFile" id="messagepayload_resolveFile">' +
    '</block>' +
    '<block type="messagepayload_create" id="messagepayload_create">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="MessageReaction" id="messagereaction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messagereaction_client" id="messagereaction_client"></block>' +
    '<block type="messagereaction_message" id="messagereaction_message"></block>' +
    '<block type="messagereaction_me" id="messagereaction_me"></block>' +
    '<block type="messagereaction_users" id="messagereaction_users"></block>' +
    '<block type="messagereaction_count" id="messagereaction_count"></block>' +
    '<block type="messagereaction_emoji" id="messagereaction_emoji"></block>' +
    '<block type="messagereaction_partial" id="messagereaction_partial"></block>' +
    '<block type="messagereaction_remove" id="messagereaction_remove">' +
    '</block>' +
    '<block type="messagereaction_fetch" id="messagereaction_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="MessageSelectMenu" id="messageselectmenu" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messageselectmenu_customid" id="messageselectmenu_customId"></block>' +
    '<block type="messageselectmenu_placeholder" id="messageselectmenu_placeholder"></block>' +
    '<block type="messageselectmenu_minvalues" id="messageselectmenu_minValues"></block>' +
    '<block type="messageselectmenu_maxvalues" id="messageselectmenu_maxValues"></block>' +
    '<block type="messageselectmenu_options" id="messageselectmenu_options"></block>' +
    '<block type="messageselectmenu_disabled" id="messageselectmenu_disabled"></block>' +
    '<block type="messageselectmenu_type" id="messageselectmenu_type"></block>' +
    '<block type="messageselectmenu_setCustomId" id="messageselectmenu_setCustomId">' +
      '<value name="CUSTOMID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageselectmenu_setDisabled" id="messageselectmenu_setDisabled">' +
    '</block>' +
    '<block type="messageselectmenu_setMaxValues" id="messageselectmenu_setMaxValues">' +
      '<value name="MAXVALUES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageselectmenu_setMinValues" id="messageselectmenu_setMinValues">' +
      '<value name="MINVALUES">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageselectmenu_setPlaceholder" id="messageselectmenu_setPlaceholder">' +
      '<value name="PLACEHOLDER">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageselectmenu_addOptions" id="messageselectmenu_addOptions">' +
    '</block>' +
    '<block type="messageselectmenu_setOptions" id="messageselectmenu_setOptions">' +
    '</block>' +
    '<block type="messageselectmenu_spliceOptions" id="messageselectmenu_spliceOptions">' +
      '<value name="INDEX">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DELETECOUNT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="messageselectmenu_toJSON" id="messageselectmenu_toJSON">' +
    '</block>' +
    '<block type="messageselectmenu_normalizeOption" id="messageselectmenu_normalizeOption">' +
    '</block>' +
    '<block type="messageselectmenu_normalizeOptions" id="messageselectmenu_normalizeOptions">' +
    '</block>' +
  '</category>' +
  '<category name="NewsChannel" id="newschannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="newschannel_messages" id="newschannel_messages"></block>' +
    '<block type="newschannel_threads" id="newschannel_threads"></block>' +
    '<block type="newschannel_nsfw" id="newschannel_nsfw"></block>' +
    '<block type="newschannel_topic" id="newschannel_topic"></block>' +
    '<block type="newschannel_lastmessageid" id="newschannel_lastMessageId"></block>' +
    '<block type="newschannel_lastpintimestamp" id="newschannel_lastPinTimestamp"></block>' +
    '<block type="newschannel_defaultautoarchiveduration" id="newschannel_defaultAutoArchiveDuration"></block>' +
    '<block type="newschannel_lastmessage" id="newschannel_lastMessage"></block>' +
    '<block type="newschannel_lastpinat" id="newschannel_lastPinAt"></block>' +
    '<block type="newschannel_guild" id="newschannel_guild"></block>' +
    '<block type="newschannel_guildid" id="newschannel_guildId"></block>' +
    '<block type="newschannel_permissionoverwrites" id="newschannel_permissionOverwrites"></block>' +
    '<block type="newschannel_name" id="newschannel_name"></block>' +
    '<block type="newschannel_rawposition" id="newschannel_rawPosition"></block>' +
    '<block type="newschannel_parentid" id="newschannel_parentId"></block>' +
    '<block type="newschannel_parent" id="newschannel_parent"></block>' +
    '<block type="newschannel_permissionslocked" id="newschannel_permissionsLocked"></block>' +
    '<block type="newschannel_position" id="newschannel_position"></block>' +
    '<block type="newschannel_members" id="newschannel_members"></block>' +
    '<block type="newschannel_deletable" id="newschannel_deletable"></block>' +
    '<block type="newschannel_manageable" id="newschannel_manageable"></block>' +
    '<block type="newschannel_viewable" id="newschannel_viewable"></block>' +
    '<block type="newschannel_type" id="newschannel_type"></block>' +
    '<block type="newschannel_id" id="newschannel_id"></block>' +
    '<block type="newschannel_createdtimestamp" id="newschannel_createdTimestamp"></block>' +
    '<block type="newschannel_createdat" id="newschannel_createdAt"></block>' +
    '<block type="newschannel_partial" id="newschannel_partial"></block>' +
    '<block type="newschannel_client" id="newschannel_client"></block>' +
    '<block type="newschannel_addFollower" id="newschannel_addFollower">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setDefaultAutoArchiveDuration" id="newschannel_setDefaultAutoArchiveDuration">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setNSFW" id="newschannel_setNSFW">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setType" id="newschannel_setType">' +
      '<value name="TYPE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_fetchWebhooks" id="newschannel_fetchWebhooks">' +
    '</block>' +
    '<block type="newschannel_createWebhook" id="newschannel_createWebhook">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setTopic" id="newschannel_setTopic">' +
      '<value name="TOPIC">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_createInvite" id="newschannel_createInvite">' +
    '</block>' +
    '<block type="newschannel_fetchInvites" id="newschannel_fetchInvites">' +
    '</block>' +
    '<block type="newschannel_send" id="newschannel_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_sendTyping" id="newschannel_sendTyping">' +
    '</block>' +
    '<block type="newschannel_createMessageCollector" id="newschannel_createMessageCollector">' +
    '</block>' +
    '<block type="newschannel_awaitMessages" id="newschannel_awaitMessages">' +
    '</block>' +
    '<block type="newschannel_createMessageComponentCollector" id="newschannel_createMessageComponentCollector">' +
    '</block>' +
    '<block type="newschannel_awaitMessageComponent" id="newschannel_awaitMessageComponent">' +
    '</block>' +
    '<block type="newschannel_bulkDelete" id="newschannel_bulkDelete">' +
    '</block>' +
    '<block type="newschannel_permissionsFor" id="newschannel_permissionsFor">' +
    '</block>' +
    '<block type="newschannel_lockPermissions" id="newschannel_lockPermissions">' +
    '</block>' +
    '<block type="newschannel_edit" id="newschannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setName" id="newschannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_setParent" id="newschannel_setParent">' +
    '</block>' +
    '<block type="newschannel_setPosition" id="newschannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_clone" id="newschannel_clone">' +
    '</block>' +
    '<block type="newschannel_equals" id="newschannel_equals">' +
    '</block>' +
    '<block type="newschannel_delete" id="newschannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="newschannel_toString" id="newschannel_toString">' +
    '</block>' +
    '<block type="newschannel_fetch" id="newschannel_fetch">' +
    '</block>' +
    '<block type="newschannel_isText" id="newschannel_isText">' +
    '</block>' +
    '<block type="newschannel_isVoice" id="newschannel_isVoice">' +
    '</block>' +
    '<block type="newschannel_isThread" id="newschannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="OAuth2Guild" id="oauth2guild" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="oauth2guild_owner" id="oauth2guild_owner"></block>' +
    '<block type="oauth2guild_permissions" id="oauth2guild_permissions"></block>' +
    '<block type="oauth2guild_id" id="oauth2guild_id"></block>' +
    '<block type="oauth2guild_name" id="oauth2guild_name"></block>' +
    '<block type="oauth2guild_icon" id="oauth2guild_icon"></block>' +
    '<block type="oauth2guild_features" id="oauth2guild_features"></block>' +
    '<block type="oauth2guild_createdtimestamp" id="oauth2guild_createdTimestamp"></block>' +
    '<block type="oauth2guild_createdat" id="oauth2guild_createdAt"></block>' +
    '<block type="oauth2guild_nameacronym" id="oauth2guild_nameAcronym"></block>' +
    '<block type="oauth2guild_partnered" id="oauth2guild_partnered"></block>' +
    '<block type="oauth2guild_verified" id="oauth2guild_verified"></block>' +
    '<block type="oauth2guild_client" id="oauth2guild_client"></block>' +
    '<block type="oauth2guild_iconURL" id="oauth2guild_iconURL">' +
    '</block>' +
    '<block type="oauth2guild_fetch" id="oauth2guild_fetch">' +
    '</block>' +
    '<block type="oauth2guild_toString" id="oauth2guild_toString">' +
    '</block>' +
  '</category>' +
  '<category name="PartialGroupDMChannel" id="partialgroupdmchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="partialgroupdmchannel_name" id="partialgroupdmchannel_name"></block>' +
    '<block type="partialgroupdmchannel_icon" id="partialgroupdmchannel_icon"></block>' +
    '<block type="partialgroupdmchannel_recipients" id="partialgroupdmchannel_recipients"></block>' +
    '<block type="partialgroupdmchannel_type" id="partialgroupdmchannel_type"></block>' +
    '<block type="partialgroupdmchannel_id" id="partialgroupdmchannel_id"></block>' +
    '<block type="partialgroupdmchannel_createdtimestamp" id="partialgroupdmchannel_createdTimestamp"></block>' +
    '<block type="partialgroupdmchannel_createdat" id="partialgroupdmchannel_createdAt"></block>' +
    '<block type="partialgroupdmchannel_partial" id="partialgroupdmchannel_partial"></block>' +
    '<block type="partialgroupdmchannel_client" id="partialgroupdmchannel_client"></block>' +
    '<block type="partialgroupdmchannel_iconURL" id="partialgroupdmchannel_iconURL">' +
    '</block>' +
    '<block type="partialgroupdmchannel_toString" id="partialgroupdmchannel_toString">' +
    '</block>' +
    '<block type="partialgroupdmchannel_delete" id="partialgroupdmchannel_delete">' +
    '</block>' +
    '<block type="partialgroupdmchannel_fetch" id="partialgroupdmchannel_fetch">' +
    '</block>' +
    '<block type="partialgroupdmchannel_isText" id="partialgroupdmchannel_isText">' +
    '</block>' +
    '<block type="partialgroupdmchannel_isVoice" id="partialgroupdmchannel_isVoice">' +
    '</block>' +
    '<block type="partialgroupdmchannel_isThread" id="partialgroupdmchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="PermissionOverwrites" id="permissionoverwrites" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="permissionoverwrites_channel" id="permissionoverwrites_channel"></block>' +
    '<block type="permissionoverwrites_id" id="permissionoverwrites_id"></block>' +
    '<block type="permissionoverwrites_type" id="permissionoverwrites_type"></block>' +
    '<block type="permissionoverwrites_deny" id="permissionoverwrites_deny"></block>' +
    '<block type="permissionoverwrites_allow" id="permissionoverwrites_allow"></block>' +
    '<block type="permissionoverwrites_client" id="permissionoverwrites_client"></block>' +
    '<block type="permissionoverwrites_edit" id="permissionoverwrites_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="permissionoverwrites_delete" id="permissionoverwrites_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="permissionoverwrites_resolveOverwriteOptions" id="permissionoverwrites_resolveOverwriteOptions">' +
    '</block>' +
    '<block type="permissionoverwrites_resolve" id="permissionoverwrites_resolve">' +
    '</block>' +
  '</category>' +
  '<category name="Presence" id="presence" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="presence_userid" id="presence_userId"></block>' +
    '<block type="presence_guild" id="presence_guild"></block>' +
    '<block type="presence_user" id="presence_user"></block>' +
    '<block type="presence_member" id="presence_member"></block>' +
    '<block type="presence_status" id="presence_status"></block>' +
    '<block type="presence_activities" id="presence_activities"></block>' +
    '<block type="presence_clientstatus" id="presence_clientStatus"></block>' +
    '<block type="presence_client" id="presence_client"></block>' +
    '<block type="presence_equals" id="presence_equals">' +
    '</block>' +
  '</category>' +
  '<category name="Activity" id="activity" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="activity_id" id="activity_id"></block>' +
    '<block type="activity_name" id="activity_name"></block>' +
    '<block type="activity_type" id="activity_type"></block>' +
    '<block type="activity_url" id="activity_url"></block>' +
    '<block type="activity_details" id="activity_details"></block>' +
    '<block type="activity_state" id="activity_state"></block>' +
    '<block type="activity_applicationid" id="activity_applicationId"></block>' +
    '<block type="activity_timestamps" id="activity_timestamps"></block>' +
    '<block type="activity_syncid" id="activity_syncId"></block>' +
    '<block type="activity_platform" id="activity_platform"></block>' +
    '<block type="activity_party" id="activity_party"></block>' +
    '<block type="activity_assets" id="activity_assets"></block>' +
    '<block type="activity_flags" id="activity_flags"></block>' +
    '<block type="activity_emoji" id="activity_emoji"></block>' +
    '<block type="activity_sessionid" id="activity_sessionId"></block>' +
    '<block type="activity_buttons" id="activity_buttons"></block>' +
    '<block type="activity_createdtimestamp" id="activity_createdTimestamp"></block>' +
    '<block type="activity_createdat" id="activity_createdAt"></block>' +
    '<block type="activity_equals" id="activity_equals">' +
    '</block>' +
    '<block type="activity_toString" id="activity_toString">' +
    '</block>' +
  '</category>' +
  '<category name="RichPresenceAssets" id="richpresenceassets" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="richpresenceassets_largetext" id="richpresenceassets_largeText"></block>' +
    '<block type="richpresenceassets_smalltext" id="richpresenceassets_smallText"></block>' +
    '<block type="richpresenceassets_largeimage" id="richpresenceassets_largeImage"></block>' +
    '<block type="richpresenceassets_smallimage" id="richpresenceassets_smallImage"></block>' +
    '<block type="richpresenceassets_smallImageURL" id="richpresenceassets_smallImageURL">' +
    '</block>' +
    '<block type="richpresenceassets_largeImageURL" id="richpresenceassets_largeImageURL">' +
    '</block>' +
  '</category>' +
  '<category name="ReactionCollector" id="reactioncollector" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="reactioncollector_on" id="reactioncollector_on"></block>' +
    '<block type="reactioncollector_message" id="reactioncollector_message"></block>' +
    '<block type="reactioncollector_users" id="reactioncollector_users"></block>' +
    '<block type="reactioncollector_total" id="reactioncollector_total"></block>' +
    '<block type="reactioncollector_endreason" id="reactioncollector_endReason"></block>' +
    '<block type="reactioncollector_client" id="reactioncollector_client"></block>' +
    '<block type="reactioncollector_filter" id="reactioncollector_filter"></block>' +
    '<block type="reactioncollector_options" id="reactioncollector_options"></block>' +
    '<block type="reactioncollector_collected" id="reactioncollector_collected"></block>' +
    '<block type="reactioncollector_ended" id="reactioncollector_ended"></block>' +
    '<block type="reactioncollector_next" id="reactioncollector_next"></block>' +
    '<block type="reactioncollector_dispose" id="reactioncollector_dispose">' +
    '</block>' +
    '<block type="reactioncollector_empty" id="reactioncollector_empty">' +
    '</block>' +
    '<block type="reactioncollector_handleCollect" id="reactioncollector_handleCollect">' +
    '</block>' +
    '<block type="reactioncollector_handleDispose" id="reactioncollector_handleDispose">' +
    '</block>' +
    '<block type="reactioncollector_stop" id="reactioncollector_stop">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="reactioncollector_resetTimer" id="reactioncollector_resetTimer">' +
    '</block>' +
    '<block type="reactioncollector_checkEnd" id="reactioncollector_checkEnd">' +
    '</block>' +
    '<block type="reactioncollector_key" id="reactioncollector_key">' +
    '</block>' +
  '</category>' +
  '<category name="ReactionEmoji" id="reactionemoji" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="reactionemoji_reaction" id="reactionemoji_reaction"></block>' +
    '<block type="reactionemoji_animated" id="reactionemoji_animated"></block>' +
    '<block type="reactionemoji_name" id="reactionemoji_name"></block>' +
    '<block type="reactionemoji_id" id="reactionemoji_id"></block>' +
    '<block type="reactionemoji_identifier" id="reactionemoji_identifier"></block>' +
    '<block type="reactionemoji_url" id="reactionemoji_url"></block>' +
    '<block type="reactionemoji_createdtimestamp" id="reactionemoji_createdTimestamp"></block>' +
    '<block type="reactionemoji_createdat" id="reactionemoji_createdAt"></block>' +
    '<block type="reactionemoji_client" id="reactionemoji_client"></block>' +
    '<block type="reactionemoji_toString" id="reactionemoji_toString">' +
    '</block>' +
  '</category>' +
  '<category name="Role" id="role" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="role_guild" id="role_guild"></block>' +
    '<block type="role_icon" id="role_icon"></block>' +
    '<block type="role_unicodeemoji" id="role_unicodeEmoji"></block>' +
    '<block type="role_id" id="role_id"></block>' +
    '<block type="role_name" id="role_name"></block>' +
    '<block type="role_color" id="role_color"></block>' +
    '<block type="role_hoist" id="role_hoist"></block>' +
    '<block type="role_rawposition" id="role_rawPosition"></block>' +
    '<block type="role_permissions" id="role_permissions"></block>' +
    '<block type="role_managed" id="role_managed"></block>' +
    '<block type="role_mentionable" id="role_mentionable"></block>' +
    '<block type="role_tags" id="role_tags"></block>' +
    '<block type="role_createdtimestamp" id="role_createdTimestamp"></block>' +
    '<block type="role_createdat" id="role_createdAt"></block>' +
    '<block type="role_hexcolor" id="role_hexColor"></block>' +
    '<block type="role_members" id="role_members"></block>' +
    '<block type="role_editable" id="role_editable"></block>' +
    '<block type="role_position" id="role_position"></block>' +
    '<block type="role_client" id="role_client"></block>' +
    '<block type="role_comparePositionTo" id="role_comparePositionTo">' +
    '</block>' +
    '<block type="role_edit" id="role_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_permissionsIn" id="role_permissionsIn">' +
    '</block>' +
    '<block type="role_setName" id="role_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setColor" id="role_setColor">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setHoist" id="role_setHoist">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setPermissions" id="role_setPermissions">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setMentionable" id="role_setMentionable">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setIcon" id="role_setIcon">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setUnicodeEmoji" id="role_setUnicodeEmoji">' +
      '<value name="UNICODEEMOJI">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_setPosition" id="role_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_delete" id="role_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="role_iconURL" id="role_iconURL">' +
    '</block>' +
    '<block type="role_equals" id="role_equals">' +
    '</block>' +
    '<block type="role_toString" id="role_toString">' +
    '</block>' +
  '</category>' +
  '<category name="SelectMenuInteraction" id="selectmenuinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="selectmenuinteraction_values" id="selectmenuinteraction_values"></block>' +
    '<block type="selectmenuinteraction_channelid" id="selectmenuinteraction_channelId"></block>' +
    '<block type="selectmenuinteraction_message" id="selectmenuinteraction_message"></block>' +
    '<block type="selectmenuinteraction_customid" id="selectmenuinteraction_customId"></block>' +
    '<block type="selectmenuinteraction_componenttype" id="selectmenuinteraction_componentType"></block>' +
    '<block type="selectmenuinteraction_deferred" id="selectmenuinteraction_deferred"></block>' +
    '<block type="selectmenuinteraction_ephemeral" id="selectmenuinteraction_ephemeral"></block>' +
    '<block type="selectmenuinteraction_replied" id="selectmenuinteraction_replied"></block>' +
    '<block type="selectmenuinteraction_webhook" id="selectmenuinteraction_webhook"></block>' +
    '<block type="selectmenuinteraction_component" id="selectmenuinteraction_component"></block>' +
    '<block type="selectmenuinteraction_type" id="selectmenuinteraction_type"></block>' +
    '<block type="selectmenuinteraction_id" id="selectmenuinteraction_id"></block>' +
    '<block type="selectmenuinteraction_token" id="selectmenuinteraction_token"></block>' +
    '<block type="selectmenuinteraction_applicationid" id="selectmenuinteraction_applicationId"></block>' +
    '<block type="selectmenuinteraction_guildid" id="selectmenuinteraction_guildId"></block>' +
    '<block type="selectmenuinteraction_user" id="selectmenuinteraction_user"></block>' +
    '<block type="selectmenuinteraction_member" id="selectmenuinteraction_member"></block>' +
    '<block type="selectmenuinteraction_version" id="selectmenuinteraction_version"></block>' +
    '<block type="selectmenuinteraction_memberpermissions" id="selectmenuinteraction_memberPermissions"></block>' +
    '<block type="selectmenuinteraction_locale" id="selectmenuinteraction_locale"></block>' +
    '<block type="selectmenuinteraction_guildlocale" id="selectmenuinteraction_guildLocale"></block>' +
    '<block type="selectmenuinteraction_createdtimestamp" id="selectmenuinteraction_createdTimestamp"></block>' +
    '<block type="selectmenuinteraction_createdat" id="selectmenuinteraction_createdAt"></block>' +
    '<block type="selectmenuinteraction_channel" id="selectmenuinteraction_channel"></block>' +
    '<block type="selectmenuinteraction_guild" id="selectmenuinteraction_guild"></block>' +
    '<block type="selectmenuinteraction_client" id="selectmenuinteraction_client"></block>' +
    '<block type="selectmenuinteraction_deferReply" id="selectmenuinteraction_deferReply">' +
    '</block>' +
    '<block type="selectmenuinteraction_reply" id="selectmenuinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="selectmenuinteraction_fetchReply" id="selectmenuinteraction_fetchReply">' +
    '</block>' +
    '<block type="selectmenuinteraction_editReply" id="selectmenuinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="selectmenuinteraction_deleteReply" id="selectmenuinteraction_deleteReply">' +
    '</block>' +
    '<block type="selectmenuinteraction_followUp" id="selectmenuinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="selectmenuinteraction_deferUpdate" id="selectmenuinteraction_deferUpdate">' +
    '</block>' +
    '<block type="selectmenuinteraction_update" id="selectmenuinteraction_update">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="selectmenuinteraction_inGuild" id="selectmenuinteraction_inGuild">' +
    '</block>' +
    '<block type="selectmenuinteraction_inCachedGuild" id="selectmenuinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="selectmenuinteraction_inRawGuild" id="selectmenuinteraction_inRawGuild">' +
    '</block>' +
    '<block type="selectmenuinteraction_isApplicationCommand" id="selectmenuinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="selectmenuinteraction_isCommand" id="selectmenuinteraction_isCommand">' +
    '</block>' +
    '<block type="selectmenuinteraction_isContextMenu" id="selectmenuinteraction_isContextMenu">' +
    '</block>' +
    '<block type="selectmenuinteraction_isUserContextMenu" id="selectmenuinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="selectmenuinteraction_isMessageContextMenu" id="selectmenuinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="selectmenuinteraction_isAutocomplete" id="selectmenuinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="selectmenuinteraction_isMessageComponent" id="selectmenuinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="selectmenuinteraction_isButton" id="selectmenuinteraction_isButton">' +
    '</block>' +
    '<block type="selectmenuinteraction_isSelectMenu" id="selectmenuinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="StageChannel" id="stagechannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="stagechannel_topic" id="stagechannel_topic"></block>' +
    '<block type="stagechannel_stageinstance" id="stagechannel_stageInstance"></block>' +
    '<block type="stagechannel_rtcregion" id="stagechannel_rtcRegion"></block>' +
    '<block type="stagechannel_bitrate" id="stagechannel_bitrate"></block>' +
    '<block type="stagechannel_userlimit" id="stagechannel_userLimit"></block>' +
    '<block type="stagechannel_members" id="stagechannel_members"></block>' +
    '<block type="stagechannel_full" id="stagechannel_full"></block>' +
    '<block type="stagechannel_joinable" id="stagechannel_joinable"></block>' +
    '<block type="stagechannel_guild" id="stagechannel_guild"></block>' +
    '<block type="stagechannel_guildid" id="stagechannel_guildId"></block>' +
    '<block type="stagechannel_permissionoverwrites" id="stagechannel_permissionOverwrites"></block>' +
    '<block type="stagechannel_name" id="stagechannel_name"></block>' +
    '<block type="stagechannel_rawposition" id="stagechannel_rawPosition"></block>' +
    '<block type="stagechannel_parentid" id="stagechannel_parentId"></block>' +
    '<block type="stagechannel_parent" id="stagechannel_parent"></block>' +
    '<block type="stagechannel_permissionslocked" id="stagechannel_permissionsLocked"></block>' +
    '<block type="stagechannel_position" id="stagechannel_position"></block>' +
    '<block type="stagechannel_deletable" id="stagechannel_deletable"></block>' +
    '<block type="stagechannel_manageable" id="stagechannel_manageable"></block>' +
    '<block type="stagechannel_viewable" id="stagechannel_viewable"></block>' +
    '<block type="stagechannel_type" id="stagechannel_type"></block>' +
    '<block type="stagechannel_id" id="stagechannel_id"></block>' +
    '<block type="stagechannel_createdtimestamp" id="stagechannel_createdTimestamp"></block>' +
    '<block type="stagechannel_createdat" id="stagechannel_createdAt"></block>' +
    '<block type="stagechannel_partial" id="stagechannel_partial"></block>' +
    '<block type="stagechannel_client" id="stagechannel_client"></block>' +
    '<block type="stagechannel_createStageInstance" id="stagechannel_createStageInstance">' +
    '</block>' +
    '<block type="stagechannel_setTopic" id="stagechannel_setTopic">' +
      '<value name="TOPIC">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_setRTCRegion" id="stagechannel_setRTCRegion">' +
      '<value name="REGION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_createInvite" id="stagechannel_createInvite">' +
    '</block>' +
    '<block type="stagechannel_fetchInvites" id="stagechannel_fetchInvites">' +
    '</block>' +
    '<block type="stagechannel_permissionsFor" id="stagechannel_permissionsFor">' +
    '</block>' +
    '<block type="stagechannel_lockPermissions" id="stagechannel_lockPermissions">' +
    '</block>' +
    '<block type="stagechannel_edit" id="stagechannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_setName" id="stagechannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_setParent" id="stagechannel_setParent">' +
    '</block>' +
    '<block type="stagechannel_setPosition" id="stagechannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_clone" id="stagechannel_clone">' +
    '</block>' +
    '<block type="stagechannel_equals" id="stagechannel_equals">' +
    '</block>' +
    '<block type="stagechannel_delete" id="stagechannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="stagechannel_toString" id="stagechannel_toString">' +
    '</block>' +
    '<block type="stagechannel_fetch" id="stagechannel_fetch">' +
    '</block>' +
    '<block type="stagechannel_isText" id="stagechannel_isText">' +
    '</block>' +
    '<block type="stagechannel_isVoice" id="stagechannel_isVoice">' +
    '</block>' +
    '<block type="stagechannel_isThread" id="stagechannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="StageInstance" id="stageinstance" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="stageinstance_id" id="stageinstance_id"></block>' +
    '<block type="stageinstance_guildid" id="stageinstance_guildId"></block>' +
    '<block type="stageinstance_channelid" id="stageinstance_channelId"></block>' +
    '<block type="stageinstance_topic" id="stageinstance_topic"></block>' +
    '<block type="stageinstance_privacylevel" id="stageinstance_privacyLevel"></block>' +
    '<block type="stageinstance_discoverabledisabled" id="stageinstance_discoverableDisabled"></block>' +
    '<block type="stageinstance_channel" id="stageinstance_channel"></block>' +
    '<block type="stageinstance_guild" id="stageinstance_guild"></block>' +
    '<block type="stageinstance_createdtimestamp" id="stageinstance_createdTimestamp"></block>' +
    '<block type="stageinstance_createdat" id="stageinstance_createdAt"></block>' +
    '<block type="stageinstance_client" id="stageinstance_client"></block>' +
    '<block type="stageinstance_edit" id="stageinstance_edit">' +
    '</block>' +
    '<block type="stageinstance_delete" id="stageinstance_delete">' +
    '</block>' +
    '<block type="stageinstance_setTopic" id="stageinstance_setTopic">' +
      '<value name="TOPIC">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="Sticker" id="sticker" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="sticker_id" id="sticker_id"></block>' +
    '<block type="sticker_description" id="sticker_description"></block>' +
    '<block type="sticker_type" id="sticker_type"></block>' +
    '<block type="sticker_format" id="sticker_format"></block>' +
    '<block type="sticker_name" id="sticker_name"></block>' +
    '<block type="sticker_packid" id="sticker_packId"></block>' +
    '<block type="sticker_tags" id="sticker_tags"></block>' +
    '<block type="sticker_available" id="sticker_available"></block>' +
    '<block type="sticker_guildid" id="sticker_guildId"></block>' +
    '<block type="sticker_user" id="sticker_user"></block>' +
    '<block type="sticker_sortvalue" id="sticker_sortValue"></block>' +
    '<block type="sticker_createdtimestamp" id="sticker_createdTimestamp"></block>' +
    '<block type="sticker_createdat" id="sticker_createdAt"></block>' +
    '<block type="sticker_partial" id="sticker_partial"></block>' +
    '<block type="sticker_guild" id="sticker_guild"></block>' +
    '<block type="sticker_url" id="sticker_url"></block>' +
    '<block type="sticker_client" id="sticker_client"></block>' +
    '<block type="sticker_fetch" id="sticker_fetch">' +
    '</block>' +
    '<block type="sticker_fetchPack" id="sticker_fetchPack">' +
    '</block>' +
    '<block type="sticker_fetchUser" id="sticker_fetchUser">' +
    '</block>' +
    '<block type="sticker_edit" id="sticker_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sticker_delete" id="sticker_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sticker_equals" id="sticker_equals">' +
    '</block>' +
  '</category>' +
  '<category name="StickerPack" id="stickerpack" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="stickerpack_id" id="stickerpack_id"></block>' +
    '<block type="stickerpack_stickers" id="stickerpack_stickers"></block>' +
    '<block type="stickerpack_name" id="stickerpack_name"></block>' +
    '<block type="stickerpack_skuid" id="stickerpack_skuId"></block>' +
    '<block type="stickerpack_coverstickerid" id="stickerpack_coverStickerId"></block>' +
    '<block type="stickerpack_description" id="stickerpack_description"></block>' +
    '<block type="stickerpack_bannerid" id="stickerpack_bannerId"></block>' +
    '<block type="stickerpack_createdtimestamp" id="stickerpack_createdTimestamp"></block>' +
    '<block type="stickerpack_createdat" id="stickerpack_createdAt"></block>' +
    '<block type="stickerpack_coversticker" id="stickerpack_coverSticker"></block>' +
    '<block type="stickerpack_client" id="stickerpack_client"></block>' +
    '<block type="stickerpack_bannerURL" id="stickerpack_bannerURL">' +
    '</block>' +
  '</category>' +
  '<category name="StoreChannel" id="storechannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="storechannel_nsfw" id="storechannel_nsfw"></block>' +
    '<block type="storechannel_guild" id="storechannel_guild"></block>' +
    '<block type="storechannel_guildid" id="storechannel_guildId"></block>' +
    '<block type="storechannel_permissionoverwrites" id="storechannel_permissionOverwrites"></block>' +
    '<block type="storechannel_name" id="storechannel_name"></block>' +
    '<block type="storechannel_rawposition" id="storechannel_rawPosition"></block>' +
    '<block type="storechannel_parentid" id="storechannel_parentId"></block>' +
    '<block type="storechannel_parent" id="storechannel_parent"></block>' +
    '<block type="storechannel_permissionslocked" id="storechannel_permissionsLocked"></block>' +
    '<block type="storechannel_position" id="storechannel_position"></block>' +
    '<block type="storechannel_members" id="storechannel_members"></block>' +
    '<block type="storechannel_deletable" id="storechannel_deletable"></block>' +
    '<block type="storechannel_manageable" id="storechannel_manageable"></block>' +
    '<block type="storechannel_viewable" id="storechannel_viewable"></block>' +
    '<block type="storechannel_type" id="storechannel_type"></block>' +
    '<block type="storechannel_id" id="storechannel_id"></block>' +
    '<block type="storechannel_createdtimestamp" id="storechannel_createdTimestamp"></block>' +
    '<block type="storechannel_createdat" id="storechannel_createdAt"></block>' +
    '<block type="storechannel_partial" id="storechannel_partial"></block>' +
    '<block type="storechannel_client" id="storechannel_client"></block>' +
    '<block type="storechannel_createInvite" id="storechannel_createInvite">' +
    '</block>' +
    '<block type="storechannel_fetchInvites" id="storechannel_fetchInvites">' +
    '</block>' +
    '<block type="storechannel_permissionsFor" id="storechannel_permissionsFor">' +
    '</block>' +
    '<block type="storechannel_lockPermissions" id="storechannel_lockPermissions">' +
    '</block>' +
    '<block type="storechannel_edit" id="storechannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="storechannel_setName" id="storechannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="storechannel_setParent" id="storechannel_setParent">' +
    '</block>' +
    '<block type="storechannel_setPosition" id="storechannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="storechannel_clone" id="storechannel_clone">' +
    '</block>' +
    '<block type="storechannel_equals" id="storechannel_equals">' +
    '</block>' +
    '<block type="storechannel_delete" id="storechannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="storechannel_toString" id="storechannel_toString">' +
    '</block>' +
    '<block type="storechannel_fetch" id="storechannel_fetch">' +
    '</block>' +
    '<block type="storechannel_isText" id="storechannel_isText">' +
    '</block>' +
    '<block type="storechannel_isVoice" id="storechannel_isVoice">' +
    '</block>' +
    '<block type="storechannel_isThread" id="storechannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="Team" id="team" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="team_id" id="team_id"></block>' +
    '<block type="team_name" id="team_name"></block>' +
    '<block type="team_icon" id="team_icon"></block>' +
    '<block type="team_ownerid" id="team_ownerId"></block>' +
    '<block type="team_members" id="team_members"></block>' +
    '<block type="team_owner" id="team_owner"></block>' +
    '<block type="team_createdtimestamp" id="team_createdTimestamp"></block>' +
    '<block type="team_createdat" id="team_createdAt"></block>' +
    '<block type="team_client" id="team_client"></block>' +
    '<block type="team_iconURL" id="team_iconURL">' +
    '</block>' +
    '<block type="team_toString" id="team_toString">' +
    '</block>' +
  '</category>' +
  '<category name="TeamMember" id="teammember" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="teammember_team" id="teammember_team"></block>' +
    '<block type="teammember_permissions" id="teammember_permissions"></block>' +
    '<block type="teammember_membershipstate" id="teammember_membershipState"></block>' +
    '<block type="teammember_user" id="teammember_user"></block>' +
    '<block type="teammember_id" id="teammember_id"></block>' +
    '<block type="teammember_client" id="teammember_client"></block>' +
    '<block type="teammember_toString" id="teammember_toString">' +
    '</block>' +
  '</category>' +
  '<category name="TextChannel" id="textchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="textchannel_ratelimitperuser" id="textchannel_rateLimitPerUser"></block>' +
    '<block type="textchannel_messages" id="textchannel_messages"></block>' +
    '<block type="textchannel_threads" id="textchannel_threads"></block>' +
    '<block type="textchannel_nsfw" id="textchannel_nsfw"></block>' +
    '<block type="textchannel_topic" id="textchannel_topic"></block>' +
    '<block type="textchannel_lastmessageid" id="textchannel_lastMessageId"></block>' +
    '<block type="textchannel_lastpintimestamp" id="textchannel_lastPinTimestamp"></block>' +
    '<block type="textchannel_defaultautoarchiveduration" id="textchannel_defaultAutoArchiveDuration"></block>' +
    '<block type="textchannel_lastmessage" id="textchannel_lastMessage"></block>' +
    '<block type="textchannel_lastpinat" id="textchannel_lastPinAt"></block>' +
    '<block type="textchannel_guild" id="textchannel_guild"></block>' +
    '<block type="textchannel_guildid" id="textchannel_guildId"></block>' +
    '<block type="textchannel_permissionoverwrites" id="textchannel_permissionOverwrites"></block>' +
    '<block type="textchannel_name" id="textchannel_name"></block>' +
    '<block type="textchannel_rawposition" id="textchannel_rawPosition"></block>' +
    '<block type="textchannel_parentid" id="textchannel_parentId"></block>' +
    '<block type="textchannel_parent" id="textchannel_parent"></block>' +
    '<block type="textchannel_permissionslocked" id="textchannel_permissionsLocked"></block>' +
    '<block type="textchannel_position" id="textchannel_position"></block>' +
    '<block type="textchannel_members" id="textchannel_members"></block>' +
    '<block type="textchannel_deletable" id="textchannel_deletable"></block>' +
    '<block type="textchannel_manageable" id="textchannel_manageable"></block>' +
    '<block type="textchannel_viewable" id="textchannel_viewable"></block>' +
    '<block type="textchannel_type" id="textchannel_type"></block>' +
    '<block type="textchannel_id" id="textchannel_id"></block>' +
    '<block type="textchannel_createdtimestamp" id="textchannel_createdTimestamp"></block>' +
    '<block type="textchannel_createdat" id="textchannel_createdAt"></block>' +
    '<block type="textchannel_partial" id="textchannel_partial"></block>' +
    '<block type="textchannel_client" id="textchannel_client"></block>' +
    '<block type="textchannel_setRateLimitPerUser" id="textchannel_setRateLimitPerUser">' +
      '<value name="RATELIMITPERUSER">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setDefaultAutoArchiveDuration" id="textchannel_setDefaultAutoArchiveDuration">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setNSFW" id="textchannel_setNSFW">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setType" id="textchannel_setType">' +
      '<value name="TYPE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_fetchWebhooks" id="textchannel_fetchWebhooks">' +
    '</block>' +
    '<block type="textchannel_createWebhook" id="textchannel_createWebhook">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setTopic" id="textchannel_setTopic">' +
      '<value name="TOPIC">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_createInvite" id="textchannel_createInvite">' +
    '</block>' +
    '<block type="textchannel_fetchInvites" id="textchannel_fetchInvites">' +
    '</block>' +
    '<block type="textchannel_send" id="textchannel_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_sendTyping" id="textchannel_sendTyping">' +
    '</block>' +
    '<block type="textchannel_createMessageCollector" id="textchannel_createMessageCollector">' +
    '</block>' +
    '<block type="textchannel_awaitMessages" id="textchannel_awaitMessages">' +
    '</block>' +
    '<block type="textchannel_createMessageComponentCollector" id="textchannel_createMessageComponentCollector">' +
    '</block>' +
    '<block type="textchannel_awaitMessageComponent" id="textchannel_awaitMessageComponent">' +
    '</block>' +
    '<block type="textchannel_bulkDelete" id="textchannel_bulkDelete">' +
    '</block>' +
    '<block type="textchannel_permissionsFor" id="textchannel_permissionsFor">' +
    '</block>' +
    '<block type="textchannel_lockPermissions" id="textchannel_lockPermissions">' +
    '</block>' +
    '<block type="textchannel_edit" id="textchannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setName" id="textchannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_setParent" id="textchannel_setParent">' +
    '</block>' +
    '<block type="textchannel_setPosition" id="textchannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_clone" id="textchannel_clone">' +
    '</block>' +
    '<block type="textchannel_equals" id="textchannel_equals">' +
    '</block>' +
    '<block type="textchannel_delete" id="textchannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="textchannel_toString" id="textchannel_toString">' +
    '</block>' +
    '<block type="textchannel_fetch" id="textchannel_fetch">' +
    '</block>' +
    '<block type="textchannel_isText" id="textchannel_isText">' +
    '</block>' +
    '<block type="textchannel_isVoice" id="textchannel_isVoice">' +
    '</block>' +
    '<block type="textchannel_isThread" id="textchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="ThreadChannel" id="threadchannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="threadchannel_guild" id="threadchannel_guild"></block>' +
    '<block type="threadchannel_guildid" id="threadchannel_guildId"></block>' +
    '<block type="threadchannel_messages" id="threadchannel_messages"></block>' +
    '<block type="threadchannel_members" id="threadchannel_members"></block>' +
    '<block type="threadchannel_name" id="threadchannel_name"></block>' +
    '<block type="threadchannel_parentid" id="threadchannel_parentId"></block>' +
    '<block type="threadchannel_locked" id="threadchannel_locked"></block>' +
    '<block type="threadchannel_invitable" id="threadchannel_invitable"></block>' +
    '<block type="threadchannel_archived" id="threadchannel_archived"></block>' +
    '<block type="threadchannel_autoarchiveduration" id="threadchannel_autoArchiveDuration"></block>' +
    '<block type="threadchannel_archivetimestamp" id="threadchannel_archiveTimestamp"></block>' +
    '<block type="threadchannel_ownerid" id="threadchannel_ownerId"></block>' +
    '<block type="threadchannel_lastmessageid" id="threadchannel_lastMessageId"></block>' +
    '<block type="threadchannel_lastpintimestamp" id="threadchannel_lastPinTimestamp"></block>' +
    '<block type="threadchannel_ratelimitperuser" id="threadchannel_rateLimitPerUser"></block>' +
    '<block type="threadchannel_messagecount" id="threadchannel_messageCount"></block>' +
    '<block type="threadchannel_membercount" id="threadchannel_memberCount"></block>' +
    '<block type="threadchannel_guildmembers" id="threadchannel_guildMembers"></block>' +
    '<block type="threadchannel_archivedat" id="threadchannel_archivedAt"></block>' +
    '<block type="threadchannel_parent" id="threadchannel_parent"></block>' +
    '<block type="threadchannel_joined" id="threadchannel_joined"></block>' +
    '<block type="threadchannel_editable" id="threadchannel_editable"></block>' +
    '<block type="threadchannel_joinable" id="threadchannel_joinable"></block>' +
    '<block type="threadchannel_manageable" id="threadchannel_manageable"></block>' +
    '<block type="threadchannel_viewable" id="threadchannel_viewable"></block>' +
    '<block type="threadchannel_sendable" id="threadchannel_sendable"></block>' +
    '<block type="threadchannel_unarchivable" id="threadchannel_unarchivable"></block>' +
    '<block type="threadchannel_lastmessage" id="threadchannel_lastMessage"></block>' +
    '<block type="threadchannel_lastpinat" id="threadchannel_lastPinAt"></block>' +
    '<block type="threadchannel_type" id="threadchannel_type"></block>' +
    '<block type="threadchannel_id" id="threadchannel_id"></block>' +
    '<block type="threadchannel_createdtimestamp" id="threadchannel_createdTimestamp"></block>' +
    '<block type="threadchannel_createdat" id="threadchannel_createdAt"></block>' +
    '<block type="threadchannel_partial" id="threadchannel_partial"></block>' +
    '<block type="threadchannel_client" id="threadchannel_client"></block>' +
    '<block type="threadchannel_join" id="threadchannel_join">' +
    '</block>' +
    '<block type="threadchannel_leave" id="threadchannel_leave">' +
    '</block>' +
    '<block type="threadchannel_permissionsFor" id="threadchannel_permissionsFor">' +
    '</block>' +
    '<block type="threadchannel_fetchOwner" id="threadchannel_fetchOwner">' +
    '</block>' +
    '<block type="threadchannel_fetchStarterMessage" id="threadchannel_fetchStarterMessage">' +
    '</block>' +
    '<block type="threadchannel_edit" id="threadchannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setArchived" id="threadchannel_setArchived">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setAutoArchiveDuration" id="threadchannel_setAutoArchiveDuration">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setInvitable" id="threadchannel_setInvitable">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setLocked" id="threadchannel_setLocked">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setName" id="threadchannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_setRateLimitPerUser" id="threadchannel_setRateLimitPerUser">' +
      '<value name="RATELIMITPERUSER">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_delete" id="threadchannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_send" id="threadchannel_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="threadchannel_sendTyping" id="threadchannel_sendTyping">' +
    '</block>' +
    '<block type="threadchannel_createMessageCollector" id="threadchannel_createMessageCollector">' +
    '</block>' +
    '<block type="threadchannel_awaitMessages" id="threadchannel_awaitMessages">' +
    '</block>' +
    '<block type="threadchannel_createMessageComponentCollector" id="threadchannel_createMessageComponentCollector">' +
    '</block>' +
    '<block type="threadchannel_awaitMessageComponent" id="threadchannel_awaitMessageComponent">' +
    '</block>' +
    '<block type="threadchannel_bulkDelete" id="threadchannel_bulkDelete">' +
    '</block>' +
    '<block type="threadchannel_toString" id="threadchannel_toString">' +
    '</block>' +
    '<block type="threadchannel_fetch" id="threadchannel_fetch">' +
    '</block>' +
    '<block type="threadchannel_isText" id="threadchannel_isText">' +
    '</block>' +
    '<block type="threadchannel_isVoice" id="threadchannel_isVoice">' +
    '</block>' +
    '<block type="threadchannel_isThread" id="threadchannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="ThreadMember" id="threadmember" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="threadmember_thread" id="threadmember_thread"></block>' +
    '<block type="threadmember_joinedtimestamp" id="threadmember_joinedTimestamp"></block>' +
    '<block type="threadmember_id" id="threadmember_id"></block>' +
    '<block type="threadmember_flags" id="threadmember_flags"></block>' +
    '<block type="threadmember_guildmember" id="threadmember_guildMember"></block>' +
    '<block type="threadmember_joinedat" id="threadmember_joinedAt"></block>' +
    '<block type="threadmember_user" id="threadmember_user"></block>' +
    '<block type="threadmember_manageable" id="threadmember_manageable"></block>' +
    '<block type="threadmember_client" id="threadmember_client"></block>' +
    '<block type="threadmember_remove" id="threadmember_remove">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="Typing" id="typing" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="typing_channel" id="typing_channel"></block>' +
    '<block type="typing_user" id="typing_user"></block>' +
    '<block type="typing_startedtimestamp" id="typing_startedTimestamp"></block>' +
    '<block type="typing_startedat" id="typing_startedAt"></block>' +
    '<block type="typing_guild" id="typing_guild"></block>' +
    '<block type="typing_member" id="typing_member"></block>' +
    '<block type="typing_client" id="typing_client"></block>' +
    '<block type="typing_inGuild" id="typing_inGuild">' +
    '</block>' +
  '</category>' +
  '<category name="User" id="user" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="user_id" id="user_id"></block>' +
    '<block type="user_username" id="user_username"></block>' +
    '<block type="user_bot" id="user_bot"></block>' +
    '<block type="user_discriminator" id="user_discriminator"></block>' +
    '<block type="user_avatar" id="user_avatar"></block>' +
    '<block type="user_banner" id="user_banner"></block>' +
    '<block type="user_accentcolor" id="user_accentColor"></block>' +
    '<block type="user_system" id="user_system"></block>' +
    '<block type="user_flags" id="user_flags"></block>' +
    '<block type="user_partial" id="user_partial"></block>' +
    '<block type="user_createdtimestamp" id="user_createdTimestamp"></block>' +
    '<block type="user_createdat" id="user_createdAt"></block>' +
    '<block type="user_defaultavatarurl" id="user_defaultAvatarURL"></block>' +
    '<block type="user_hexaccentcolor" id="user_hexAccentColor"></block>' +
    '<block type="user_tag" id="user_tag"></block>' +
    '<block type="user_dmchannel" id="user_dmChannel"></block>' +
    '<block type="user_client" id="user_client"></block>' +
    '<block type="user_avatarURL" id="user_avatarURL">' +
    '</block>' +
    '<block type="user_displayAvatarURL" id="user_displayAvatarURL">' +
    '</block>' +
    '<block type="user_bannerURL" id="user_bannerURL">' +
    '</block>' +
    '<block type="user_createDM" id="user_createDM">' +
    '</block>' +
    '<block type="user_deleteDM" id="user_deleteDM">' +
    '</block>' +
    '<block type="user_equals" id="user_equals">' +
    '</block>' +
    '<block type="user_fetchFlags" id="user_fetchFlags">' +
    '</block>' +
    '<block type="user_fetch" id="user_fetch">' +
    '</block>' +
    '<block type="user_toString" id="user_toString">' +
    '</block>' +
    '<block type="user_send" id="user_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="UserContextMenuInteraction" id="usercontextmenuinteraction" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="usercontextmenuinteraction_targetuser" id="usercontextmenuinteraction_targetUser"></block>' +
    '<block type="usercontextmenuinteraction_targetmember" id="usercontextmenuinteraction_targetMember"></block>' +
    '<block type="usercontextmenuinteraction_options" id="usercontextmenuinteraction_options"></block>' +
    '<block type="usercontextmenuinteraction_targetid" id="usercontextmenuinteraction_targetId"></block>' +
    '<block type="usercontextmenuinteraction_targettype" id="usercontextmenuinteraction_targetType"></block>' +
    '<block type="usercontextmenuinteraction_channelid" id="usercontextmenuinteraction_channelId"></block>' +
    '<block type="usercontextmenuinteraction_commandid" id="usercontextmenuinteraction_commandId"></block>' +
    '<block type="usercontextmenuinteraction_commandname" id="usercontextmenuinteraction_commandName"></block>' +
    '<block type="usercontextmenuinteraction_deferred" id="usercontextmenuinteraction_deferred"></block>' +
    '<block type="usercontextmenuinteraction_replied" id="usercontextmenuinteraction_replied"></block>' +
    '<block type="usercontextmenuinteraction_ephemeral" id="usercontextmenuinteraction_ephemeral"></block>' +
    '<block type="usercontextmenuinteraction_webhook" id="usercontextmenuinteraction_webhook"></block>' +
    '<block type="usercontextmenuinteraction_command" id="usercontextmenuinteraction_command"></block>' +
    '<block type="usercontextmenuinteraction_type" id="usercontextmenuinteraction_type"></block>' +
    '<block type="usercontextmenuinteraction_id" id="usercontextmenuinteraction_id"></block>' +
    '<block type="usercontextmenuinteraction_token" id="usercontextmenuinteraction_token"></block>' +
    '<block type="usercontextmenuinteraction_applicationid" id="usercontextmenuinteraction_applicationId"></block>' +
    '<block type="usercontextmenuinteraction_guildid" id="usercontextmenuinteraction_guildId"></block>' +
    '<block type="usercontextmenuinteraction_user" id="usercontextmenuinteraction_user"></block>' +
    '<block type="usercontextmenuinteraction_member" id="usercontextmenuinteraction_member"></block>' +
    '<block type="usercontextmenuinteraction_version" id="usercontextmenuinteraction_version"></block>' +
    '<block type="usercontextmenuinteraction_memberpermissions" id="usercontextmenuinteraction_memberPermissions"></block>' +
    '<block type="usercontextmenuinteraction_locale" id="usercontextmenuinteraction_locale"></block>' +
    '<block type="usercontextmenuinteraction_guildlocale" id="usercontextmenuinteraction_guildLocale"></block>' +
    '<block type="usercontextmenuinteraction_createdtimestamp" id="usercontextmenuinteraction_createdTimestamp"></block>' +
    '<block type="usercontextmenuinteraction_createdat" id="usercontextmenuinteraction_createdAt"></block>' +
    '<block type="usercontextmenuinteraction_channel" id="usercontextmenuinteraction_channel"></block>' +
    '<block type="usercontextmenuinteraction_guild" id="usercontextmenuinteraction_guild"></block>' +
    '<block type="usercontextmenuinteraction_client" id="usercontextmenuinteraction_client"></block>' +
    '<block type="usercontextmenuinteraction_deferReply" id="usercontextmenuinteraction_deferReply">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_reply" id="usercontextmenuinteraction_reply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="usercontextmenuinteraction_fetchReply" id="usercontextmenuinteraction_fetchReply">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_editReply" id="usercontextmenuinteraction_editReply">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="usercontextmenuinteraction_deleteReply" id="usercontextmenuinteraction_deleteReply">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_followUp" id="usercontextmenuinteraction_followUp">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="usercontextmenuinteraction_inGuild" id="usercontextmenuinteraction_inGuild">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_inCachedGuild" id="usercontextmenuinteraction_inCachedGuild">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_inRawGuild" id="usercontextmenuinteraction_inRawGuild">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isApplicationCommand" id="usercontextmenuinteraction_isApplicationCommand">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isCommand" id="usercontextmenuinteraction_isCommand">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isContextMenu" id="usercontextmenuinteraction_isContextMenu">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isUserContextMenu" id="usercontextmenuinteraction_isUserContextMenu">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isMessageContextMenu" id="usercontextmenuinteraction_isMessageContextMenu">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isAutocomplete" id="usercontextmenuinteraction_isAutocomplete">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isMessageComponent" id="usercontextmenuinteraction_isMessageComponent">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isButton" id="usercontextmenuinteraction_isButton">' +
    '</block>' +
    '<block type="usercontextmenuinteraction_isSelectMenu" id="usercontextmenuinteraction_isSelectMenu">' +
    '</block>' +
  '</category>' +
  '<category name="VoiceChannel" id="voicechannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="voicechannel_joinable" id="voicechannel_joinable"></block>' +
    '<block type="voicechannel_speakable" id="voicechannel_speakable"></block>' +
    '<block type="voicechannel_rtcregion" id="voicechannel_rtcRegion"></block>' +
    '<block type="voicechannel_bitrate" id="voicechannel_bitrate"></block>' +
    '<block type="voicechannel_userlimit" id="voicechannel_userLimit"></block>' +
    '<block type="voicechannel_members" id="voicechannel_members"></block>' +
    '<block type="voicechannel_full" id="voicechannel_full"></block>' +
    '<block type="voicechannel_guild" id="voicechannel_guild"></block>' +
    '<block type="voicechannel_guildid" id="voicechannel_guildId"></block>' +
    '<block type="voicechannel_permissionoverwrites" id="voicechannel_permissionOverwrites"></block>' +
    '<block type="voicechannel_name" id="voicechannel_name"></block>' +
    '<block type="voicechannel_rawposition" id="voicechannel_rawPosition"></block>' +
    '<block type="voicechannel_parentid" id="voicechannel_parentId"></block>' +
    '<block type="voicechannel_parent" id="voicechannel_parent"></block>' +
    '<block type="voicechannel_permissionslocked" id="voicechannel_permissionsLocked"></block>' +
    '<block type="voicechannel_position" id="voicechannel_position"></block>' +
    '<block type="voicechannel_deletable" id="voicechannel_deletable"></block>' +
    '<block type="voicechannel_manageable" id="voicechannel_manageable"></block>' +
    '<block type="voicechannel_viewable" id="voicechannel_viewable"></block>' +
    '<block type="voicechannel_type" id="voicechannel_type"></block>' +
    '<block type="voicechannel_id" id="voicechannel_id"></block>' +
    '<block type="voicechannel_createdtimestamp" id="voicechannel_createdTimestamp"></block>' +
    '<block type="voicechannel_createdat" id="voicechannel_createdAt"></block>' +
    '<block type="voicechannel_partial" id="voicechannel_partial"></block>' +
    '<block type="voicechannel_client" id="voicechannel_client"></block>' +
    '<block type="voicechannel_setBitrate" id="voicechannel_setBitrate">' +
      '<value name="BITRATE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_setUserLimit" id="voicechannel_setUserLimit">' +
      '<value name="USERLIMIT">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_setRTCRegion" id="voicechannel_setRTCRegion">' +
      '<value name="REGION">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_createInvite" id="voicechannel_createInvite">' +
    '</block>' +
    '<block type="voicechannel_fetchInvites" id="voicechannel_fetchInvites">' +
    '</block>' +
    '<block type="voicechannel_permissionsFor" id="voicechannel_permissionsFor">' +
    '</block>' +
    '<block type="voicechannel_lockPermissions" id="voicechannel_lockPermissions">' +
    '</block>' +
    '<block type="voicechannel_edit" id="voicechannel_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_setName" id="voicechannel_setName">' +
      '<value name="NAME">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_setParent" id="voicechannel_setParent">' +
    '</block>' +
    '<block type="voicechannel_setPosition" id="voicechannel_setPosition">' +
      '<value name="POSITION">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_clone" id="voicechannel_clone">' +
    '</block>' +
    '<block type="voicechannel_equals" id="voicechannel_equals">' +
    '</block>' +
    '<block type="voicechannel_delete" id="voicechannel_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicechannel_toString" id="voicechannel_toString">' +
    '</block>' +
    '<block type="voicechannel_fetch" id="voicechannel_fetch">' +
    '</block>' +
    '<block type="voicechannel_isText" id="voicechannel_isText">' +
    '</block>' +
    '<block type="voicechannel_isVoice" id="voicechannel_isVoice">' +
    '</block>' +
    '<block type="voicechannel_isThread" id="voicechannel_isThread">' +
    '</block>' +
  '</category>' +
  '<category name="VoiceRegion" id="voiceregion" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="voiceregion_id" id="voiceregion_id"></block>' +
    '<block type="voiceregion_name" id="voiceregion_name"></block>' +
    '<block type="voiceregion_vip" id="voiceregion_vip"></block>' +
    '<block type="voiceregion_deprecated" id="voiceregion_deprecated"></block>' +
    '<block type="voiceregion_optimal" id="voiceregion_optimal"></block>' +
    '<block type="voiceregion_custom" id="voiceregion_custom"></block>' +
  '</category>' +
  '<category name="VoiceState" id="voicestate" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="voicestate_guild" id="voicestate_guild"></block>' +
    '<block type="voicestate_id" id="voicestate_id"></block>' +
    '<block type="voicestate_serverdeaf" id="voicestate_serverDeaf"></block>' +
    '<block type="voicestate_servermute" id="voicestate_serverMute"></block>' +
    '<block type="voicestate_selfdeaf" id="voicestate_selfDeaf"></block>' +
    '<block type="voicestate_selfmute" id="voicestate_selfMute"></block>' +
    '<block type="voicestate_selfvideo" id="voicestate_selfVideo"></block>' +
    '<block type="voicestate_sessionid" id="voicestate_sessionId"></block>' +
    '<block type="voicestate_streaming" id="voicestate_streaming"></block>' +
    '<block type="voicestate_channelid" id="voicestate_channelId"></block>' +
    '<block type="voicestate_suppress" id="voicestate_suppress"></block>' +
    '<block type="voicestate_requesttospeaktimestamp" id="voicestate_requestToSpeakTimestamp"></block>' +
    '<block type="voicestate_member" id="voicestate_member"></block>' +
    '<block type="voicestate_channel" id="voicestate_channel"></block>' +
    '<block type="voicestate_deaf" id="voicestate_deaf"></block>' +
    '<block type="voicestate_mute" id="voicestate_mute"></block>' +
    '<block type="voicestate_setMute" id="voicestate_setMute">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicestate_setDeaf" id="voicestate_setDeaf">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicestate_disconnect" id="voicestate_disconnect">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicestate_setChannel" id="voicestate_setChannel">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="voicestate_setRequestToSpeak" id="voicestate_setRequestToSpeak">' +
    '</block>' +
    '<block type="voicestate_setSuppressed" id="voicestate_setSuppressed">' +
    '</block>' +
  '</category>' +
  '<category name="Webhook" id="webhook" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="webhook_client" id="webhook_client"></block>' +
    '<block type="webhook_name" id="webhook_name"></block>' +
    '<block type="webhook_token" id="webhook_token"></block>' +
    '<block type="webhook_avatar" id="webhook_avatar"></block>' +
    '<block type="webhook_id" id="webhook_id"></block>' +
    '<block type="webhook_type" id="webhook_type"></block>' +
    '<block type="webhook_guildid" id="webhook_guildId"></block>' +
    '<block type="webhook_channelid" id="webhook_channelId"></block>' +
    '<block type="webhook_owner" id="webhook_owner"></block>' +
    '<block type="webhook_sourceguild" id="webhook_sourceGuild"></block>' +
    '<block type="webhook_sourcechannel" id="webhook_sourceChannel"></block>' +
    '<block type="webhook_createdtimestamp" id="webhook_createdTimestamp"></block>' +
    '<block type="webhook_createdat" id="webhook_createdAt"></block>' +
    '<block type="webhook_url" id="webhook_url"></block>' +
    '<block type="webhook_send" id="webhook_send">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhook_sendSlackMessage" id="webhook_sendSlackMessage">' +
    '</block>' +
    '<block type="webhook_edit" id="webhook_edit">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhook_fetchMessage" id="webhook_fetchMessage">' +
    '</block>' +
    '<block type="webhook_editMessage" id="webhook_editMessage">' +
      '<value name="OPTIONS">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhook_delete" id="webhook_delete">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="webhook_deleteMessage" id="webhook_deleteMessage">' +
    '</block>' +
    '<block type="webhook_avatarURL" id="webhook_avatarURL">' +
    '</block>' +
    '<block type="webhook_isChannelFollower" id="webhook_isChannelFollower">' +
    '</block>' +
    '<block type="webhook_isIncoming" id="webhook_isIncoming">' +
    '</block>' +
  '</category>' +
  '<category name="WelcomeChannel" id="welcomechannel" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="welcomechannel_guild" id="welcomechannel_guild"></block>' +
    '<block type="welcomechannel_description" id="welcomechannel_description"></block>' +
    '<block type="welcomechannel_channelid" id="welcomechannel_channelId"></block>' +
    '<block type="welcomechannel_channel" id="welcomechannel_channel"></block>' +
    '<block type="welcomechannel_emoji" id="welcomechannel_emoji"></block>' +
    '<block type="welcomechannel_client" id="welcomechannel_client"></block>' +
  '</category>' +
  '<category name="WelcomeScreen" id="welcomescreen" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="welcomescreen_guild" id="welcomescreen_guild"></block>' +
    '<block type="welcomescreen_description" id="welcomescreen_description"></block>' +
    '<block type="welcomescreen_welcomechannels" id="welcomescreen_welcomeChannels"></block>' +
    '<block type="welcomescreen_enabled" id="welcomescreen_enabled"></block>' +
    '<block type="welcomescreen_client" id="welcomescreen_client"></block>' +
  '</category>' +
  '<category name="Widget" id="widget" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="widget_id" id="widget_id"></block>' +
    '<block type="widget_name" id="widget_name"></block>' +
    '<block type="widget_instantinvite" id="widget_instantInvite"></block>' +
    '<block type="widget_channels" id="widget_channels"></block>' +
    '<block type="widget_members" id="widget_members"></block>' +
    '<block type="widget_presencecount" id="widget_presenceCount"></block>' +
    '<block type="widget_fetch" id="widget_fetch">' +
    '</block>' +
  '</category>' +
  '<category name="WidgetMember" id="widgetmember" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="widgetmember_id" id="widgetmember_id"></block>' +
    '<block type="widgetmember_username" id="widgetmember_username"></block>' +
    '<block type="widgetmember_discriminator" id="widgetmember_discriminator"></block>' +
    '<block type="widgetmember_avatar" id="widgetmember_avatar"></block>' +
    '<block type="widgetmember_status" id="widgetmember_status"></block>' +
    '<block type="widgetmember_deaf" id="widgetmember_deaf"></block>' +
    '<block type="widgetmember_mute" id="widgetmember_mute"></block>' +
    '<block type="widgetmember_selfdeaf" id="widgetmember_selfDeaf"></block>' +
    '<block type="widgetmember_selfmute" id="widgetmember_selfMute"></block>' +
    '<block type="widgetmember_suppress" id="widgetmember_suppress"></block>' +
    '<block type="widgetmember_channelid" id="widgetmember_channelId"></block>' +
    '<block type="widgetmember_avatarurl" id="widgetmember_avatarURL"></block>' +
    '<block type="widgetmember_activity" id="widgetmember_activity"></block>' +
  '</category>' +
  '<category name="ActivityFlags" id="activityflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="activityflags_bitfield" id="activityflags_bitfield"></block>' +
    '<block type="activityflags_flags" id="activityflags_FLAGS"></block>' +
    '<block type="activityflags_any" id="activityflags_any">' +
    '</block>' +
    '<block type="activityflags_equals" id="activityflags_equals">' +
    '</block>' +
    '<block type="activityflags_has" id="activityflags_has">' +
    '</block>' +
    '<block type="activityflags_missing" id="activityflags_missing">' +
    '</block>' +
    '<block type="activityflags_freeze" id="activityflags_freeze">' +
    '</block>' +
    '<block type="activityflags_add" id="activityflags_add">' +
    '</block>' +
    '<block type="activityflags_remove" id="activityflags_remove">' +
    '</block>' +
    '<block type="activityflags_serialize" id="activityflags_serialize">' +
    '</block>' +
    '<block type="activityflags_toArray" id="activityflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="ApplicationFlags" id="applicationflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="applicationflags_bitfield" id="applicationflags_bitfield"></block>' +
    '<block type="applicationflags_flags" id="applicationflags_FLAGS"></block>' +
    '<block type="applicationflags_any" id="applicationflags_any">' +
    '</block>' +
    '<block type="applicationflags_equals" id="applicationflags_equals">' +
    '</block>' +
    '<block type="applicationflags_has" id="applicationflags_has">' +
    '</block>' +
    '<block type="applicationflags_missing" id="applicationflags_missing">' +
    '</block>' +
    '<block type="applicationflags_freeze" id="applicationflags_freeze">' +
    '</block>' +
    '<block type="applicationflags_add" id="applicationflags_add">' +
    '</block>' +
    '<block type="applicationflags_remove" id="applicationflags_remove">' +
    '</block>' +
    '<block type="applicationflags_serialize" id="applicationflags_serialize">' +
    '</block>' +
    '<block type="applicationflags_toArray" id="applicationflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="BitField" id="bitfield" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="bitfield_bitfield" id="bitfield_bitfield"></block>' +
    '<block type="bitfield_flags" id="bitfield_FLAGS"></block>' +
    '<block type="bitfield_any" id="bitfield_any">' +
    '</block>' +
    '<block type="bitfield_equals" id="bitfield_equals">' +
    '</block>' +
    '<block type="bitfield_has" id="bitfield_has">' +
    '</block>' +
    '<block type="bitfield_missing" id="bitfield_missing">' +
    '</block>' +
    '<block type="bitfield_freeze" id="bitfield_freeze">' +
    '</block>' +
    '<block type="bitfield_add" id="bitfield_add">' +
    '</block>' +
    '<block type="bitfield_remove" id="bitfield_remove">' +
    '</block>' +
    '<block type="bitfield_serialize" id="bitfield_serialize">' +
    '</block>' +
    '<block type="bitfield_toArray" id="bitfield_toArray">' +
    '</block>' +
    '<block type="bitfield_resolve" id="bitfield_resolve">' +
    '</block>' +
  '</category>' +
  '<category name="DataResolver" id="dataresolver" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="dataresolver_resolveCode" id="dataresolver_resolveCode">' +
      '<value name="DATA">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="dataresolver_resolveInviteCode" id="dataresolver_resolveInviteCode">' +
    '</block>' +
    '<block type="dataresolver_resolveGuildTemplateCode" id="dataresolver_resolveGuildTemplateCode">' +
    '</block>' +
    '<block type="dataresolver_resolveImage" id="dataresolver_resolveImage">' +
    '</block>' +
    '<block type="dataresolver_resolveBase64" id="dataresolver_resolveBase64">' +
    '</block>' +
    '<block type="dataresolver_resolveFile" id="dataresolver_resolveFile">' +
    '</block>' +
    '<block type="dataresolver_resolveFileAsBuffer" id="dataresolver_resolveFileAsBuffer">' +
    '</block>' +
  '</category>' +
  '<category name="Formatters" id="formatters" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="formatters_timestampstyles" id="formatters_TimestampStyles"></block>' +
    '<block type="formatters_blockQuote" id="formatters_blockQuote">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_bold" id="formatters_bold">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_channelMention" id="formatters_channelMention">' +
      '<value name="CHANNELID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_codeBlock" id="formatters_codeBlock">' +
      '<value name="CONTENTORLANGUAGE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_formatEmoji" id="formatters_formatEmoji">' +
      '<value name="EMOJIID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_hideLinkEmbed" id="formatters_hideLinkEmbed">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_hyperlink" id="formatters_hyperlink">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="URL">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TITLE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_inlineCode" id="formatters_inlineCode">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_italic" id="formatters_italic">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_memberNicknameMention" id="formatters_memberNicknameMention">' +
      '<value name="MEMBERID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_quote" id="formatters_quote">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_roleMention" id="formatters_roleMention">' +
      '<value name="ROLEID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_spoiler" id="formatters_spoiler">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_strikethrough" id="formatters_strikethrough">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_time" id="formatters_time">' +
      '<value name="DATE">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_underscore" id="formatters_underscore">' +
      '<value name="CONTENT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="formatters_userMention" id="formatters_userMention">' +
      '<value name="USERID">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="Intents" id="intents" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="intents_bitfield" id="intents_bitfield"></block>' +
    '<block type="intents_flags" id="intents_FLAGS"></block>' +
    '<block type="intents_any" id="intents_any">' +
    '</block>' +
    '<block type="intents_equals" id="intents_equals">' +
    '</block>' +
    '<block type="intents_has" id="intents_has">' +
    '</block>' +
    '<block type="intents_missing" id="intents_missing">' +
    '</block>' +
    '<block type="intents_freeze" id="intents_freeze">' +
    '</block>' +
    '<block type="intents_add" id="intents_add">' +
    '</block>' +
    '<block type="intents_remove" id="intents_remove">' +
    '</block>' +
    '<block type="intents_serialize" id="intents_serialize">' +
    '</block>' +
    '<block type="intents_toArray" id="intents_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="LimitedCollection" id="limitedcollection" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="limitedcollection_maxsize" id="limitedcollection_maxSize"></block>' +
    '<block type="limitedcollection_keepoverlimit" id="limitedcollection_keepOverLimit"></block>' +
  '</category>' +
  '<category name="MessageFlags" id="messageflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="messageflags_bitfield" id="messageflags_bitfield"></block>' +
    '<block type="messageflags_flags" id="messageflags_FLAGS"></block>' +
    '<block type="messageflags_any" id="messageflags_any">' +
    '</block>' +
    '<block type="messageflags_equals" id="messageflags_equals">' +
    '</block>' +
    '<block type="messageflags_has" id="messageflags_has">' +
    '</block>' +
    '<block type="messageflags_missing" id="messageflags_missing">' +
    '</block>' +
    '<block type="messageflags_freeze" id="messageflags_freeze">' +
    '</block>' +
    '<block type="messageflags_add" id="messageflags_add">' +
    '</block>' +
    '<block type="messageflags_remove" id="messageflags_remove">' +
    '</block>' +
    '<block type="messageflags_serialize" id="messageflags_serialize">' +
    '</block>' +
    '<block type="messageflags_toArray" id="messageflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="Options" id="options" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="options_defaultmakecachesettings" id="options_defaultMakeCacheSettings"></block>' +
    '<block type="options_defaultsweepersettings" id="options_defaultSweeperSettings"></block>' +
    '<block type="options_createDefault" id="options_createDefault">' +
    '</block>' +
    '<block type="options_cacheWithLimits" id="options_cacheWithLimits">' +
    '</block>' +
    '<block type="options_cacheEverything" id="options_cacheEverything">' +
    '</block>' +
  '</category>' +
  '<category name="Permissions" id="permissions" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="permissions_bitfield" id="permissions_bitfield"></block>' +
    '<block type="permissions_flags" id="permissions_FLAGS"></block>' +
    '<block type="permissions_all" id="permissions_ALL"></block>' +
    '<block type="permissions_default" id="permissions_DEFAULT"></block>' +
    '<block type="permissions_stage_moderator" id="permissions_STAGE_MODERATOR"></block>' +
    '<block type="permissions_missing" id="permissions_missing">' +
    '</block>' +
    '<block type="permissions_any" id="permissions_any">' +
    '</block>' +
    '<block type="permissions_has" id="permissions_has">' +
    '</block>' +
    '<block type="permissions_toArray" id="permissions_toArray">' +
    '</block>' +
    '<block type="permissions_equals" id="permissions_equals">' +
    '</block>' +
    '<block type="permissions_freeze" id="permissions_freeze">' +
    '</block>' +
    '<block type="permissions_add" id="permissions_add">' +
    '</block>' +
    '<block type="permissions_remove" id="permissions_remove">' +
    '</block>' +
    '<block type="permissions_serialize" id="permissions_serialize">' +
    '</block>' +
  '</category>' +
  '<category name="SnowflakeUtil" id="snowflakeutil" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="snowflakeutil_epoch" id="snowflakeutil_EPOCH"></block>' +
    '<block type="snowflakeutil_generate" id="snowflakeutil_generate">' +
      '<value name="TIMESTAMP">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="snowflakeutil_deconstruct" id="snowflakeutil_deconstruct">' +
    '</block>' +
    '<block type="snowflakeutil_timestampFrom" id="snowflakeutil_timestampFrom">' +
    '</block>' +
  '</category>' +
  '<category name="Sweepers" id="sweepers" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="sweepers_options" id="sweepers_options"></block>' +
    '<block type="sweepers_intervals" id="sweepers_intervals"></block>' +
    '<block type="sweepers_sweepApplicationCommands" id="sweepers_sweepApplicationCommands">' +
    '</block>' +
    '<block type="sweepers_sweepBans" id="sweepers_sweepBans">' +
    '</block>' +
    '<block type="sweepers_sweepEmojis" id="sweepers_sweepEmojis">' +
    '</block>' +
    '<block type="sweepers_sweepInvites" id="sweepers_sweepInvites">' +
    '</block>' +
    '<block type="sweepers_sweepGuildMembers" id="sweepers_sweepGuildMembers">' +
    '</block>' +
    '<block type="sweepers_sweepMessages" id="sweepers_sweepMessages">' +
    '</block>' +
    '<block type="sweepers_sweepPresences" id="sweepers_sweepPresences">' +
    '</block>' +
    '<block type="sweepers_sweepReactions" id="sweepers_sweepReactions">' +
    '</block>' +
    '<block type="sweepers_sweepStageInstances" id="sweepers_sweepStageInstances">' +
    '</block>' +
    '<block type="sweepers_sweepThreadMembers" id="sweepers_sweepThreadMembers">' +
    '</block>' +
    '<block type="sweepers_sweepThreads" id="sweepers_sweepThreads">' +
    '</block>' +
    '<block type="sweepers_sweepUsers" id="sweepers_sweepUsers">' +
    '</block>' +
    '<block type="sweepers_sweepVoiceStates" id="sweepers_sweepVoiceStates">' +
    '</block>' +
    '<block type="sweepers_destroy" id="sweepers_destroy">' +
    '</block>' +
    '<block type="sweepers_filterByLifetime" id="sweepers_filterByLifetime">' +
    '</block>' +
    '<block type="sweepers_archivedThreadSweepFilter" id="sweepers_archivedThreadSweepFilter">' +
      '<value name="LIFETIME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sweepers_expiredInviteSweepFilter" id="sweepers_expiredInviteSweepFilter">' +
      '<value name="LIFETIME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sweepers_outdatedMessageSweepFilter" id="sweepers_outdatedMessageSweepFilter">' +
      '<value name="LIFETIME">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="SystemChannelFlags" id="systemchannelflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="systemchannelflags_bitfield" id="systemchannelflags_bitfield"></block>' +
    '<block type="systemchannelflags_flags" id="systemchannelflags_FLAGS"></block>' +
    '<block type="systemchannelflags_any" id="systemchannelflags_any">' +
    '</block>' +
    '<block type="systemchannelflags_equals" id="systemchannelflags_equals">' +
    '</block>' +
    '<block type="systemchannelflags_has" id="systemchannelflags_has">' +
    '</block>' +
    '<block type="systemchannelflags_missing" id="systemchannelflags_missing">' +
    '</block>' +
    '<block type="systemchannelflags_freeze" id="systemchannelflags_freeze">' +
    '</block>' +
    '<block type="systemchannelflags_add" id="systemchannelflags_add">' +
    '</block>' +
    '<block type="systemchannelflags_remove" id="systemchannelflags_remove">' +
    '</block>' +
    '<block type="systemchannelflags_serialize" id="systemchannelflags_serialize">' +
    '</block>' +
    '<block type="systemchannelflags_toArray" id="systemchannelflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="ThreadMemberFlags" id="threadmemberflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="threadmemberflags_bitfield" id="threadmemberflags_bitfield"></block>' +
    '<block type="threadmemberflags_flags" id="threadmemberflags_FLAGS"></block>' +
    '<block type="threadmemberflags_any" id="threadmemberflags_any">' +
    '</block>' +
    '<block type="threadmemberflags_equals" id="threadmemberflags_equals">' +
    '</block>' +
    '<block type="threadmemberflags_has" id="threadmemberflags_has">' +
    '</block>' +
    '<block type="threadmemberflags_missing" id="threadmemberflags_missing">' +
    '</block>' +
    '<block type="threadmemberflags_freeze" id="threadmemberflags_freeze">' +
    '</block>' +
    '<block type="threadmemberflags_add" id="threadmemberflags_add">' +
    '</block>' +
    '<block type="threadmemberflags_remove" id="threadmemberflags_remove">' +
    '</block>' +
    '<block type="threadmemberflags_serialize" id="threadmemberflags_serialize">' +
    '</block>' +
    '<block type="threadmemberflags_toArray" id="threadmemberflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="UserFlags" id="userflags" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="userflags_bitfield" id="userflags_bitfield"></block>' +
    '<block type="userflags_flags" id="userflags_FLAGS"></block>' +
    '<block type="userflags_any" id="userflags_any">' +
    '</block>' +
    '<block type="userflags_equals" id="userflags_equals">' +
    '</block>' +
    '<block type="userflags_has" id="userflags_has">' +
    '</block>' +
    '<block type="userflags_missing" id="userflags_missing">' +
    '</block>' +
    '<block type="userflags_freeze" id="userflags_freeze">' +
    '</block>' +
    '<block type="userflags_add" id="userflags_add">' +
    '</block>' +
    '<block type="userflags_remove" id="userflags_remove">' +
    '</block>' +
    '<block type="userflags_serialize" id="userflags_serialize">' +
    '</block>' +
    '<block type="userflags_toArray" id="userflags_toArray">' +
    '</block>' +
  '</category>' +
  '<category name="Util" id="util" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="util_flatten" id="util_flatten">' +
    '</block>' +
    '<block type="util_splitMessage" id="util_splitMessage">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeMarkdown" id="util_escapeMarkdown">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeCodeBlock" id="util_escapeCodeBlock">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeInlineCode" id="util_escapeInlineCode">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeItalic" id="util_escapeItalic">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeBold" id="util_escapeBold">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeUnderline" id="util_escapeUnderline">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeStrikethrough" id="util_escapeStrikethrough">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_escapeSpoiler" id="util_escapeSpoiler">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_fetchRecommendedShards" id="util_fetchRecommendedShards">' +
      '<value name="TOKEN">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_verifyString" id="util_verifyString">' +
      '<value name="DATA">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="ERRORMESSAGE">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_resolveColor" id="util_resolveColor">' +
    '</block>' +
    '<block type="util_discordSort" id="util_discordSort">' +
    '</block>' +
    '<block type="util_cleanContent" id="util_cleanContent">' +
      '<value name="STR">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="util_cleanCodeBlockContent" id="util_cleanCodeBlockContent">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '</xml>';