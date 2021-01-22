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
  '<category name="%{BKY_CATEGORY_DISCORD}" id="discord" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="discord_reply" id="discord_reply">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="discord_send" id="discord_send">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="discord_editmessage" id="discord_editmessage">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="discord_deletemessage" id="discord_delete_message">' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="discord_react" id="discord_react">' +
      '<value name="REACTION">' +
        '<shadow type="discord_reaction"></shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_on" id="event_on">' +
      '<value name="ACTION">' +
        '<shadow type="event_on_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_variables" id="event_variables"></block>' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
    '<block type="event_trycatch" id="event_trycatch"></block>' +
    '<block type="event_catcherror" id="event_catcherror"></block>' +
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
    '<block type="sensing_systemchannel" id="sensing_systemchannel">' +
      '<value name="GUILD">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_message_content" id="sensing_message_content">' +
      '<value name="MESSAGE">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getobject" id="sensing_message_content">' +
      '<value name="OBJECT">' +
        '<block type="event_variables"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getwithid" id="sensing_getwithid">' +
      '<value name="ID">' +
        '<shadow type="text">' +
          '<field name="TEXT"></field>' +
        '</shadow>' +
      '</value>' +
      '<value name="OBJECT">' +
        '<block type="sensing_bot"></block>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_getwithidobject" id="sensing_getwithidobject"></block>' +
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
