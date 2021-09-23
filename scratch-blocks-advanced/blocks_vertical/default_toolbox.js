/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MESSAGE}" id="message" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="message_content" id="message_content"></block>' +
    '<block type="message_cleancontent" id="message_cleancontent"></block>' +
    '<block type="message_attachements" id="message_attachements"></block>' +
    '<block type="message_url" id="message_url"></block>' +
    '<block type="message_type" id="message_type"></block>' +
    '<block type="message_webhookID" id="message_webhookID"></block>' +
    '<block type="message_edits" id="message_edits"></block>' +
    '<block type="message_embeds" id="message_embeds"></block>' +
    '<block type="message_reactions" id="message_reactions"></block>' +
    '<block type="message_removereactions" id="message_removereactions"></block>' +
    '<block type="message_reactionsresolve" id="message_reactionsresolve"></block>' +
    '<block type="message_reactionsresolveid" id="message_reactionsresolveid"></block>' +
    '<block type="message_mentionseveryone" id="message_mentionseveryone"></block>' +
    '<block type="message_mentionscollection" id="message_mentionscollection"></block>' +
    '<block type="message_mentionshas" id="message_mentionshas"></block>' +
    '<block type="message_getboolean" id="message_getobject"></block>' +
    '<block type="message_getobject" id="message_getobject"></block>' +
    '<block type="message_timestamps" id="message_timestamps"></block>' +
    '<block type="message_reference" id="message_reference"></block>' +
    '<block type="message_flagsbitfield" id="message_flagsbitfield"></block>' +
    '<block type="message_flagsadd" id="message_flagsadd">' +
      '<value name="BITS">' +
        '<shadow type="text">' +
          '<field name="TEXT">CROSSPOSTED</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_flagsany" id="message_flagsany">' +
      '<value name="BIT">' +
        '<shadow type="text">' +
          '<field name="TEXT">CROSSPOSTED</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_flagsfreeze" id="message_flagsfreeze"></block>' +
    '<block type="message_flagshas" id="message_flagshas">' +
      '<value name="OBJECT">' +
        '<shadow type="text">' +
          '<field name="TEXT">CROSSPOSTED</field>' +
        '</shadow>' +
      '</value></block>' +
    '<block type="message_flagsmissing" id="message_flagsmissing">' +
      '<value name="BITS">' +
        '<shadow type="text">' +
          '<field name="TEXT">CROSSPOSTED</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_flagsremove" id="message_flagsremove">' +
      '<value name="BITS">' +
        '<shadow type="text">' +
          '<field name="TEXT">CROSSPOSTED</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_flagsserialize" id="message_flagsserialize"></block>' +
    '<block type="message_flagstoarray" id="message_flagstoarray"></block>' +
    '<block type="message_activitypartyID" id="message_activitypartyID"></block>' +
    '<block type="message_activitytype" id="message_activitytype"></block>' +
    '<block type="message_reply" id="message_reply">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value></block>' +
    '<block type="message_edit" id="message_edit">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value></block>' +
    '<block type="message_delete" id="message_delete">' +
      '<value name="TIMEOUT">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">Important</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_react" id="message_react">' +
      '<value name="REACTION">' +
        '<shadow type="message_reaction">' +
          '<field name="REACTION">😀</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_pin" id="message_pin">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">Important</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_unpin" id="message_unpin">' +
      '<value name="REASON">' +
        '<shadow type="text">' +
          '<field name="TEXT">No longer relevant</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="message_crosspost" id="message_crosspost"></block>' +
    '<block type="message_suppressembeds" id="message_suppressembeds"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CLIENT}" id="client" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_USER}" id="user" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CHANNEL}" id="channel" colour="#4C97FF" secondaryColour="#3373CC">' +
    // '<block type="channel_send" id="channel_send">' +
    //   '<value name="TEXT">' +
    //     '<shadow type="text">' +
    //       '<field name="TEXT">Hello word !</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="OBJECT">' +
    //     '<block type="event_variables"></block>' +
    //   '</value>' +
    // '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_GUILD}" id="guild" colour="#4C97FF" secondaryColour="#3373CC">' +
    // '<block type="guild_systemchannel" id="guild_systemchannel">' +
    //   '<value name="GUILD">' +
    //     '<block type="event_variables"></block>' +
    //   '</value>' +
    // '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_MEMBER}" id="member" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_ROLE}" id="role" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_REACTION}" id="reaction" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_COLLECTION}" id="collection" colour="#4C97FF" secondaryColour="#3373CC">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_FILESYSTEM}" id="filesystem" colour="#9966FF" secondaryColour="#855CD6">' +
    '<block type="filesystem_exists" id="filesystem_exists">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_readfile" id="filesystem_readfile">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_writefile" id="filesystem_writefile">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DATA">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_appendfile" id="filesystem_appendfile">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DATA">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_copyfile" id="filesystem_copyfile">' +
      '<value name="SRC">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="DEST">' +
        '<shadow type="text">' +
          '<field name="TEXT">file copy.txt</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_renamefile" id="filesystem_renamefile">' +
      '<value name="OLD">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NEW">' +
        '<shadow type="text">' +
          '<field name="TEXT">new file.txt</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_removefile" id="filesystem_removefile">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">file.txt</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_readdir" id="filesystem_readdir">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">directory</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_mkdir" id="filesystem_mkdir">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">directory</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="filesystem_rmdir" id="filesystem_rmdir">' +
      '<value name="PATH">' +
        '<shadow type="text">' +
          '<field name="TEXT">directory</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_on" id="event_on"></block>' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
    '<block type="event_trycatch" id="event_trycatch">' +
      '<value name="ERROR">' +
        '<block type="event_catcherror" id="event_catcherror"></block>' +
      '</value>' +
    '</block>' +
    '<block type="event_exit" id="event_exit"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">' +
    '<block type="control_wait" id="control_wait">' +
      '<value name="DURATION">' +
        '<shadow type="math_positive_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_repeat" id="control_repeat">' +
      '<value name="TIMES">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="control_if" id="control_if"></block>' +
    '<block type="control_if_else" id="control_if_else"></block>' +
    '<block type="control_wait_until" id="control_wait_until"></block>' +
    '<block type="control_repeat_until" id="control_repeat_until"></block>' +
    '<block type="control_repeat_while" id="control_repeat_while"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SENSING}" id="sensing" colour="#4CBFE6" secondaryColour="#2E8EB8">' +
    '<block type="sensing_log" id="sensing_log">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_bot" id="sensing_bot"></block>' +
    '<block type="sensing_then" id="sensing_then">' +
      '<value name="OBJECT">' +
        '<block type="sensing_thenobject"></block>' +
      '</value>' +
      '<value name="ERROR">' +
        '<block type="sensing_catcherror"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getwithid" id="sensing_getwithid">' +
      '<value name="GETOBJECT">' +
        '<block type="sensing_getwithidobject"></block>' +
      '</value>' +
      '<value name="ID">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="sensing_bot"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getid" id="sensing_getid">' +
      '<value name="OBJECT">' +
        '<block type="sensing_bot"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_resetdatetonow" id="sensing_resetdatetonow"></block>' +
    '<block type="sensing_resetdate" id="sensing_resetdate">' +
      '<value name="VALUE">' +
        '<shadow type="text">' +
          '<field name="TEXT">December 17, 1995 03:24:00</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_setdate" id="sensing_setdate">' +
      '<value name="VALUE">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getdate" id="sensing_getdate"></block>' +
    '<block type="sensing_current" id="sensing_current"></block>' +
    '<block type="sensing_username" id="sensing_username"></block>' +
    '<block type="sensing_userid" id="sensing_userid"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_OPERATORS}" id="operators" colour="#40BF4A" secondaryColour="#389438">' +
    '<block type="operator_add" id="operator_add">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_subtract" id="operator_subtract">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_multiply" id="operator_multiply">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_divide" id="operator_divide">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_pow" id="operator_pow">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_random" id="operator_random">' +
      '<value name="FROM">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="TO">' +
        '<shadow type="math_number">' +
          '<field name="NUM">10</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_lt" id="operator_lt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_lte" id="operator_lte">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_equals" id="operator_equals">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gt" id="operator_gt">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_gte" id="operator_gte">' +
      '<value name="OPERAND1">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OPERAND2">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_and" id="operator_and"></block>' +
    '<block type="operator_or" id="operator_or"></block>' +
    '<block type="operator_not" id="operator_not"></block>' +
    '<block type="operator_join" id="operator_join">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_letter_of" id="operator_letter_of">' +
      '<value name="LETTER">' +
        '<shadow type="math_whole_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_length" id="operator_length">' +
      '<value name="STRING">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_contains" id="operator_contains">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">world</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_startswith" id="operator_startswith">' +
      '<value name="STRING1">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello world !</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="STRING2">' +
        '<shadow type="text">' +
          '<field name="TEXT">hello</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mod" id="operator_mod">' +
      '<value name="NUM1">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="NUM2">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_round" id="operator_round">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="operator_mathop" id="operator_mathop">' +
      '<value name="NUM">' +
        '<shadow type="math_number">' +
          '<field name="NUM"></field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_MYBLOCKS}" id="more" colour="#FF6680" secondaryColour="#FF4D6A" custom="PROCEDURE">' +
  '</category>' +
  '</xml>';
