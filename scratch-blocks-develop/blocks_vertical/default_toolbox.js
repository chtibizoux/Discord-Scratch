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
    '</block>' +
    '<block type="discord_send" id="discord_send">' +
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">Hello word !</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="discord_delete_message" id="discord_delete_message"></block>' +
    // '<block type="discord_gotoxyz" id="discord_gotoxyz">' +
    //   '<value name="X">' +
    //     '<shadow id="movex" type="math_number">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Y">' +
    //     '<shadow id="movey" type="math_number">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Z">' +
    //     '<shadow id="movez" type="math_number">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_goto" id="discord_goto">' +
    //   '<value name="TO">' +
    //     '<shadow type="discord_objects_menu">' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_rotatetoxyz" id="discord_rotatetoxyz">' +
    //   '<value name="X">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Y">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Z">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_pointtoposition" id="discord_pointtoposition">' +
    //   '<value name="X">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Y">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Z">' +
    //     '<shadow type="math_angle">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_pointtowards" id="discord_pointtowards">' +
    //   '<value name="TO">' +
    //     '<shadow type="discord_objects_menu">' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_scaletoxyz" id="discord_scaletoxyz">' +
    //   '<value name="X">' +
    //     '<shadow id="scalex" type="math_number">' +
    //       '<field name="NUM">1</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Y">' +
    //     '<shadow id="scaley" type="math_number">' +
    //       '<field name="NUM">1</field>' +
    //     '</shadow>' +
    //   '</value>' +
    //   '<value name="Z">' +
    //     '<shadow id="scalez" type="math_number">' +
    //       '<field name="NUM">1</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_changeby" id="discord_changeby">' +
    //   '<value name="VALUE">' +
    //     '<shadow type="math_number">' +
    //       '<field name="NUM">10</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_set" id="discord_set">' +
    //   '<value name="VALUE">' +
    //     '<shadow type="math_number">' +
    //       '<field name="NUM">0</field>' +
    //     '</shadow>' +
    //   '</value>' +
    // '</block>' +
    // '<block type="discord_variable" id="discord_variable"></block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_on" id="event_on">' +
      '<value name="ACTION">' +
        '<shadow type="event_on_menu">' +
        '</shadow>' +
      '</value>' +
    '</block>' +
    '<block type="event_on_message_content" id="event_on_message_content"></block>' +
    '<block type="event_whenflagclicked" id="event_whenflagclicked"></block>' +
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
    '<block type="sensing_distanceto" id="sensing_distanceto">' +
      '<value name="DISTANCETOMENU">' +
        '<shadow type="sensing_distancetomenu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_keypressed" id="sensing_keypressed">' +
        '<value name="KEY_OPTION">' +
          '<shadow type="sensing_keyoptions"></shadow>' +
        '</value>' +
    '</block>' +
    '<block type="sensing_mousedown" id="sensing_mousedown"></block>' +
    '<block type="sensing_mousex" id="sensing_mousex"></block>' +
    '<block type="sensing_mousey" id="sensing_mousey"></block>' +
    '<block type="sensing_setdragmode" id="sensing_setdragmode"></block>' +
    '<block type="sensing_loudness" id="sensing_loudness"></block>' +
    '<block type="sensing_timer" id="sensing_timer"></block>' +
    '<block type="sensing_resettimer" id="sensing_resettimer"></block>' +
    '<block type="sensing_of" id="sensing_of">' +
      '<value name="OBJECT">' +
        '<shadow type="sensing_of_object_menu"></shadow>' +
      '</value>' +
    '</block>' +
    '<block type="sensing_current" id="sensing_current"></block>' +
    '<block type="sensing_dayssince2000" id="sensing_dayssince2000"></block>' +
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
