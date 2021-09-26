/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
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

/**
 * @fileoverview Emoji input field.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldEmoji');

goog.require('Blockly.Field');
goog.require('Blockly.DropDownDiv');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.ui.Menu');
goog.require('goog.ui.MenuItem');
goog.require('goog.ui.MenuSeparator');
goog.require('goog.userAgent');


/**
 * Class for an editable emoji field.
 * @param {(string|number)=} opt_value The initial content of the field. The
 *     value should cast to a number, and if it does not, '0' will be used.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns the accepted text or null to abort
 *     the change.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldEmoji = function(opt_value, opt_validator) {
  // opt_value = (opt_value.includes(":") || /\p{Extended_Pictographic}/u.test(opt_value)) ? opt_value : '';
  Blockly.FieldEmoji.superClass_.constructor.call(
      this, opt_value, opt_validator);
  this.addArgType('emoji');
};
goog.inherits(Blockly.FieldEmoji, Blockly.Field);

/**
 * Construct a FieldEmoji from a JSON arg object.
 * @param {!Object} element A JSON object with options.
 * @returns {!Blockly.FieldEmoji} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldEmoji.fromJson = function(element) {
  return new Blockly.FieldEmoji(element['emoji']);
};

/**
 * Horizontal distance that a checkmark overhangs the dropdown.
 */
Blockly.FieldEmoji.CHECKMARK_OVERHANG = 25;

Blockly.FieldEmoji.prototype.menuGenerator_ = [
  ["Person", "separator"],
  [{
    "alt": ":grinning:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px 0px",
    "size": "1344px 1184px"
  }, "😀"],
  [{
    "alt": ":smiley:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px 0px",
    "size": "1344px 1184px"
  }, "😃"],
  [{
    "alt": ":smile:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px 0px",
    "size": "1344px 1184px"
  }, "😄"],
  [{
    "alt": ":grin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px 0px",
    "size": "1344px 1184px"
  }, "😁"],
  [{
    "alt": ":laughing:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px 0px",
    "size": "1344px 1184px"
  }, "😆"],
  [{
    "alt": ":sweat_smile:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px 0px",
    "size": "1344px 1184px"
  }, "😅"],
  [{
    "alt": ":joy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px 0px",
    "size": "1344px 1184px"
  }, "😂"],
  [{
    "alt": ":rofl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px 0px",
    "size": "1344px 1184px"
  }, "🤣"],
  [{
    "alt": ":relaxed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px 0px",
    "size": "1344px 1184px"
  }, "☺️"],
  [{
    "alt": ":blush:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px 0px",
    "size": "1344px 1184px"
  }, "😊"],
  [{
    "alt": ":innocent:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px 0px",
    "size": "1344px 1184px"
  }, "😇"],
  [{
    "alt": ":slight_smile:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px 0px",
    "size": "1344px 1184px"
  }, "🙂"],
  [{
    "alt": ":upside_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px 0px",
    "size": "1344px 1184px"
  }, "🙃"],
  [{
    "alt": ":wink:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px 0px",
    "size": "1344px 1184px"
  }, "😉"],
  [{
    "alt": ":relieved:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px 0px",
    "size": "1344px 1184px"
  }, "😌"],
  [{
    "alt": ":smiling_face_with_tear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px 0px",
    "size": "1344px 1184px"
  }, "🥲"],
  [{
    "alt": ":heart_eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px 0px",
    "size": "1344px 1184px"
  }, "😍"],
  [{
    "alt": ":smiling_face_with_3_hearts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px 0px",
    "size": "1344px 1184px"
  }, "🥰"],
  [{
    "alt": ":kissing_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px 0px",
    "size": "1344px 1184px"
  }, "😘"],
  [{
    "alt": ":kissing:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px 0px",
    "size": "1344px 1184px"
  }, "😗"],
  [{
    "alt": ":kissing_smiling_eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px 0px",
    "size": "1344px 1184px"
  }, "😙"],
  [{
    "alt": ":kissing_closed_eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px 0px",
    "size": "1344px 1184px"
  }, "😚"],
  [{
    "alt": ":yum:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px 0px",
    "size": "1344px 1184px"
  }, "😋"],
  [{
    "alt": ":stuck_out_tongue:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px 0px",
    "size": "1344px 1184px"
  }, "😛"],
  [{
    "alt": ":stuck_out_tongue_closed_eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px 0px",
    "size": "1344px 1184px"
  }, "😝"],
  [{
    "alt": ":stuck_out_tongue_winking_eye:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px 0px",
    "size": "1344px 1184px"
  }, "😜"],
  [{
    "alt": ":zany_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px 0px",
    "size": "1344px 1184px"
  }, "🤪"],
  [{
    "alt": ":face_with_raised_eyebrow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px 0px",
    "size": "1344px 1184px"
  }, "🤨"],
  [{
    "alt": ":face_with_monocle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px 0px",
    "size": "1344px 1184px"
  }, "🧐"],
  [{
    "alt": ":nerd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px 0px",
    "size": "1344px 1184px"
  }, "🤓"],
  [{
    "alt": ":sunglasses:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px 0px",
    "size": "1344px 1184px"
  }, "😎"],
  [{
    "alt": ":star_struck:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px 0px",
    "size": "1344px 1184px"
  }, "🤩"],
  [{
    "alt": ":partying_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px 0px",
    "size": "1344px 1184px"
  }, "🥳"],
  [{
    "alt": ":smirk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px 0px",
    "size": "1344px 1184px"
  }, "😏"],
  [{
    "alt": ":unamused:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px 0px",
    "size": "1344px 1184px"
  }, "😒"],
  [{
    "alt": ":disappointed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px 0px",
    "size": "1344px 1184px"
  }, "😞"],
  [{
    "alt": ":pensive:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px 0px",
    "size": "1344px 1184px"
  }, "😔"],
  [{
    "alt": ":worried:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px 0px",
    "size": "1344px 1184px"
  }, "😟"],
  [{
    "alt": ":confused:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px 0px",
    "size": "1344px 1184px"
  }, "😕"],
  [{
    "alt": ":slight_frown:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px 0px",
    "size": "1344px 1184px"
  }, "🙁"],
  [{
    "alt": ":frowning2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px 0px",
    "size": "1344px 1184px"
  }, "☹️"],
  [{
    "alt": ":persevere:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px 0px",
    "size": "1344px 1184px"
  }, "😣"],
  [{
    "alt": ":confounded:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -32px",
    "size": "1344px 1184px"
  }, "😖"],
  [{
    "alt": ":tired_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -32px",
    "size": "1344px 1184px"
  }, "😫"],
  [{
    "alt": ":weary:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -32px",
    "size": "1344px 1184px"
  }, "😩"],
  [{
    "alt": ":pleading_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -32px",
    "size": "1344px 1184px"
  }, "🥺"],
  [{
    "alt": ":cry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -32px",
    "size": "1344px 1184px"
  }, "😢"],
  [{
    "alt": ":sob:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -32px",
    "size": "1344px 1184px"
  }, "😭"],
  [{
    "alt": ":triumph:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -32px",
    "size": "1344px 1184px"
  }, "😤"],
  [{
    "alt": ":angry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -32px",
    "size": "1344px 1184px"
  }, "😠"],
  [{
    "alt": ":rage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -32px",
    "size": "1344px 1184px"
  }, "😡"],
  [{
    "alt": ":face_with_symbols_over_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -32px",
    "size": "1344px 1184px"
  }, "🤬"],
  [{
    "alt": ":exploding_head:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -32px",
    "size": "1344px 1184px"
  }, "🤯"],
  [{
    "alt": ":flushed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -32px",
    "size": "1344px 1184px"
  }, "😳"],
  [{
    "alt": ":hot_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -32px",
    "size": "1344px 1184px"
  }, "🥵"],
  [{
    "alt": ":cold_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -32px",
    "size": "1344px 1184px"
  }, "🥶"],
  [{
    "alt": ":scream:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -32px",
    "size": "1344px 1184px"
  }, "😱"],
  [{
    "alt": ":fearful:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -32px",
    "size": "1344px 1184px"
  }, "😨"],
  [{
    "alt": ":cold_sweat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -32px",
    "size": "1344px 1184px"
  }, "😰"],
  [{
    "alt": ":disappointed_relieved:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -32px",
    "size": "1344px 1184px"
  }, "😥"],
  [{
    "alt": ":sweat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -32px",
    "size": "1344px 1184px"
  }, "😓"],
  [{
    "alt": ":hugging:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -32px",
    "size": "1344px 1184px"
  }, "🤗"],
  [{
    "alt": ":thinking:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -32px",
    "size": "1344px 1184px"
  }, "🤔"],
  [{
    "alt": ":face_with_hand_over_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -32px",
    "size": "1344px 1184px"
  }, "🤭"],
  [{
    "alt": ":yawning_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -32px",
    "size": "1344px 1184px"
  }, "🥱"],
  [{
    "alt": ":shushing_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -32px",
    "size": "1344px 1184px"
  }, "🤫"],
  [{
    "alt": ":lying_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -32px",
    "size": "1344px 1184px"
  }, "🤥"],
  [{
    "alt": ":no_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -32px",
    "size": "1344px 1184px"
  }, "😶"],
  [{
    "alt": ":neutral_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -32px",
    "size": "1344px 1184px"
  }, "😐"],
  [{
    "alt": ":expressionless:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -32px",
    "size": "1344px 1184px"
  }, "😑"],
  [{
    "alt": ":grimacing:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -32px",
    "size": "1344px 1184px"
  }, "😬"],
  [{
    "alt": ":rolling_eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -32px",
    "size": "1344px 1184px"
  }, "🙄"],
  [{
    "alt": ":hushed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -32px",
    "size": "1344px 1184px"
  }, "😯"],
  [{
    "alt": ":frowning:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -32px",
    "size": "1344px 1184px"
  }, "😦"],
  [{
    "alt": ":anguished:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -32px",
    "size": "1344px 1184px"
  }, "😧"],
  [{
    "alt": ":open_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -32px",
    "size": "1344px 1184px"
  }, "😮"],
  [{
    "alt": ":astonished:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -32px",
    "size": "1344px 1184px"
  }, "😲"],
  [{
    "alt": ":sleeping:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -32px",
    "size": "1344px 1184px"
  }, "😴"],
  [{
    "alt": ":drooling_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -32px",
    "size": "1344px 1184px"
  }, "🤤"],
  [{
    "alt": ":sleepy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -32px",
    "size": "1344px 1184px"
  }, "😪"],
  [{
    "alt": ":dizzy_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -32px",
    "size": "1344px 1184px"
  }, "😵"],
  [{
    "alt": ":zipper_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -32px",
    "size": "1344px 1184px"
  }, "🤐"],
  [{
    "alt": ":woozy_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -32px",
    "size": "1344px 1184px"
  }, "🥴"],
  [{
    "alt": ":nauseated_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -32px",
    "size": "1344px 1184px"
  }, "🤢"],
  [{
    "alt": ":face_vomiting:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -64px",
    "size": "1344px 1184px"
  }, "🤮"],
  [{
    "alt": ":sneezing_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -64px",
    "size": "1344px 1184px"
  }, "🤧"],
  [{
    "alt": ":mask:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -64px",
    "size": "1344px 1184px"
  }, "😷"],
  [{
    "alt": ":thermometer_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -64px",
    "size": "1344px 1184px"
  }, "🤒"],
  [{
    "alt": ":head_bandage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -64px",
    "size": "1344px 1184px"
  }, "🤕"],
  [{
    "alt": ":money_mouth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -64px",
    "size": "1344px 1184px"
  }, "🤑"],
  [{
    "alt": ":cowboy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -64px",
    "size": "1344px 1184px"
  }, "🤠"],
  [{
    "alt": ":disguised_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -64px",
    "size": "1344px 1184px"
  }, "🥸"],
  [{
    "alt": ":smiling_imp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -64px",
    "size": "1344px 1184px"
  }, "😈"],
  [{
    "alt": ":imp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -64px",
    "size": "1344px 1184px"
  }, "👿"],
  [{
    "alt": ":japanese_ogre:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -64px",
    "size": "1344px 1184px"
  }, "👹"],
  [{
    "alt": ":japanese_goblin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -64px",
    "size": "1344px 1184px"
  }, "👺"],
  [{
    "alt": ":clown:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -64px",
    "size": "1344px 1184px"
  }, "🤡"],
  [{
    "alt": ":poop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -64px",
    "size": "1344px 1184px"
  }, "💩"],
  [{
    "alt": ":ghost:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -64px",
    "size": "1344px 1184px"
  }, "👻"],
  [{
    "alt": ":skull:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -64px",
    "size": "1344px 1184px"
  }, "💀"],
  [{
    "alt": ":skull_crossbones:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -64px",
    "size": "1344px 1184px"
  }, "☠️"],
  [{
    "alt": ":alien:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -64px",
    "size": "1344px 1184px"
  }, "👽"],
  [{
    "alt": ":space_invader:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -64px",
    "size": "1344px 1184px"
  }, "👾"],
  [{
    "alt": ":robot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -64px",
    "size": "1344px 1184px"
  }, "🤖"],
  [{
    "alt": ":jack_o_lantern:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -64px",
    "size": "1344px 1184px"
  }, "🎃"],
  [{
    "alt": ":smiley_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -64px",
    "size": "1344px 1184px"
  }, "😺"],
  [{
    "alt": ":smile_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -64px",
    "size": "1344px 1184px"
  }, "😸"],
  [{
    "alt": ":joy_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -64px",
    "size": "1344px 1184px"
  }, "😹"],
  [{
    "alt": ":heart_eyes_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -64px",
    "size": "1344px 1184px"
  }, "😻"],
  [{
    "alt": ":smirk_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -64px",
    "size": "1344px 1184px"
  }, "😼"],
  [{
    "alt": ":kissing_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -64px",
    "size": "1344px 1184px"
  }, "😽"],
  [{
    "alt": ":scream_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -64px",
    "size": "1344px 1184px"
  }, "🙀"],
  [{
    "alt": ":crying_cat_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -64px",
    "size": "1344px 1184px"
  }, "😿"],
  [{
    "alt": ":pouting_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -64px",
    "size": "1344px 1184px"
  }, "😾"],
  [{
    "alt": ":palms_up_together:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px 0px",
    "size": "320px 896px"
  }, "🤲"],
  [{
    "alt": ":open_hands:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px 0px",
    "size": "320px 896px"
  }, "👐"],
  [{
    "alt": ":raised_hands:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px 0px",
    "size": "320px 896px"
  }, "🙌"],
  [{
    "alt": ":clap:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px 0px",
    "size": "320px 896px"
  }, "👏"],
  [{
    "alt": ":handshake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -64px",
    "size": "1344px 1184px"
  }, "🤝"],
  [{
    "alt": ":thumbsup:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px 0px",
    "size": "320px 896px"
  }, "👍"],
  [{
    "alt": ":thumbsdown:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px 0px",
    "size": "320px 896px"
  }, "👎"],
  [{
    "alt": ":punch:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px 0px",
    "size": "320px 896px"
  }, "👊"],
  [{
    "alt": ":fist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px 0px",
    "size": "320px 896px"
  }, "✊"],
  [{
    "alt": ":left_facing_fist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px 0px",
    "size": "320px 896px"
  }, "🤛"],
  [{
    "alt": ":right_facing_fist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px 0px",
    "size": "320px 896px"
  }, "🤜"],
  [{
    "alt": ":fingers_crossed:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -32px",
    "size": "320px 896px"
  }, "🤞"],
  [{
    "alt": ":v:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -32px",
    "size": "320px 896px"
  }, "✌️"],
  [{
    "alt": ":love_you_gesture:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -32px",
    "size": "320px 896px"
  }, "🤟"],
  [{
    "alt": ":metal:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -32px",
    "size": "320px 896px"
  }, "🤘"],
  [{
    "alt": ":ok_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -32px",
    "size": "320px 896px"
  }, "👌"],
  [{
    "alt": ":pinching_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -32px",
    "size": "320px 896px"
  }, "🤏"],
  [{
    "alt": ":pinched_fingers:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -32px",
    "size": "320px 896px"
  }, "🤌"],
  [{
    "alt": ":point_left:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -32px",
    "size": "320px 896px"
  }, "👈"],
  [{
    "alt": ":point_right:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -32px",
    "size": "320px 896px"
  }, "👉"],
  [{
    "alt": ":point_up_2:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -32px",
    "size": "320px 896px"
  }, "👆"],
  [{
    "alt": ":point_down:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -64px",
    "size": "320px 896px"
  }, "👇"],
  [{
    "alt": ":point_up:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -64px",
    "size": "320px 896px"
  }, "☝️"],
  [{
    "alt": ":raised_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -64px",
    "size": "320px 896px"
  }, "✋"],
  [{
    "alt": ":raised_back_of_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -64px",
    "size": "320px 896px"
  }, "🤚"],
  [{
    "alt": ":hand_splayed:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -64px",
    "size": "320px 896px"
  }, "🖐️"],
  [{
    "alt": ":vulcan:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -64px",
    "size": "320px 896px"
  }, "🖖"],
  [{
    "alt": ":wave:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -64px",
    "size": "320px 896px"
  }, "👋"],
  [{
    "alt": ":call_me:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -64px",
    "size": "320px 896px"
  }, "🤙"],
  [{
    "alt": ":muscle:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -64px",
    "size": "320px 896px"
  }, "💪"],
  [{
    "alt": ":mechanical_arm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -64px",
    "size": "1344px 1184px"
  }, "🦾"],
  [{
    "alt": ":middle_finger:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -64px",
    "size": "320px 896px"
  }, "🖕"],
  [{
    "alt": ":writing_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -96px",
    "size": "320px 896px"
  }, "✍️"],
  [{
    "alt": ":pray:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -96px",
    "size": "320px 896px"
  }, "🙏"],
  [{
    "alt": ":foot:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -96px",
    "size": "320px 896px"
  }, "🦶"],
  [{
    "alt": ":leg:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -96px",
    "size": "320px 896px"
  }, "🦵"],
  [{
    "alt": ":mechanical_leg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -64px",
    "size": "1344px 1184px"
  }, "🦿"],
  [{
    "alt": ":lipstick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -64px",
    "size": "1344px 1184px"
  }, "💄"],
  [{
    "alt": ":kiss:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -64px",
    "size": "1344px 1184px"
  }, "💋"],
  [{
    "alt": ":lips:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -64px",
    "size": "1344px 1184px"
  }, "👄"],
  [{
    "alt": ":tooth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -64px",
    "size": "1344px 1184px"
  }, "🦷"],
  [{
    "alt": ":bone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -64px",
    "size": "1344px 1184px"
  }, "🦴"],
  [{
    "alt": ":tongue:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -64px",
    "size": "1344px 1184px"
  }, "👅"],
  [{
    "alt": ":ear:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -96px",
    "size": "320px 896px"
  }, "👂"],
  [{
    "alt": ":ear_with_hearing_aid:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -96px",
    "size": "320px 896px"
  }, "🦻"],
  [{
    "alt": ":nose:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -96px",
    "size": "320px 896px"
  }, "👃"],
  [{
    "alt": ":footprints:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -64px",
    "size": "1344px 1184px"
  }, "👣"],
  [{
    "alt": ":eye:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -64px",
    "size": "1344px 1184px"
  }, "👁️"],
  [{
    "alt": ":eyes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -64px",
    "size": "1344px 1184px"
  }, "👀"],
  [{
    "alt": ":brain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -96px",
    "size": "1344px 1184px"
  }, "🧠"],
  [{
    "alt": ":anatomical_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -96px",
    "size": "1344px 1184px"
  }, "🫀"],
  [{
    "alt": ":lungs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -96px",
    "size": "1344px 1184px"
  }, "🫁"],
  [{
    "alt": ":speaking_head:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -96px",
    "size": "1344px 1184px"
  }, "🗣️"],
  [{
    "alt": ":bust_in_silhouette:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -96px",
    "size": "1344px 1184px"
  }, "👤"],
  [{
    "alt": ":busts_in_silhouette:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -96px",
    "size": "1344px 1184px"
  }, "👥"],
  [{
    "alt": ":people_hugging:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -96px",
    "size": "1344px 1184px"
  }, "🫂"],
  [{
    "alt": ":baby:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -96px",
    "size": "320px 896px"
  }, "👶"],
  [{
    "alt": ":girl:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -96px",
    "size": "320px 896px"
  }, "👧"],
  [{
    "alt": ":child:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -96px",
    "size": "320px 896px"
  }, "🧒"],
  [{
    "alt": ":boy:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -128px",
    "size": "320px 896px"
  }, "👦"],
  [{
    "alt": ":woman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -128px",
    "size": "320px 896px"
  }, "👩"],
  [{
    "alt": ":adult:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -128px",
    "size": "320px 896px"
  }, "🧑"],
  [{
    "alt": ":man:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -128px",
    "size": "320px 896px"
  }, "👨"],
  [{
    "alt": ":person_curly_hair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -128px",
    "size": "320px 896px"
  }, "🧑‍🦱"],
  [{
    "alt": ":woman_curly_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -128px",
    "size": "320px 896px"
  }, "👩‍🦱"],
  [{
    "alt": ":man_curly_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -128px",
    "size": "320px 896px"
  }, "👨‍🦱"],
  [{
    "alt": ":person_red_hair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -128px",
    "size": "320px 896px"
  }, "🧑‍🦰"],
  [{
    "alt": ":woman_red_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -128px",
    "size": "320px 896px"
  }, "👩‍🦰"],
  [{
    "alt": ":man_red_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -128px",
    "size": "320px 896px"
  }, "👨‍🦰"],
  [{
    "alt": ":blond_haired_woman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -160px",
    "size": "320px 896px"
  }, "👱‍♀️"],
  [{
    "alt": ":blond_haired_person:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -160px",
    "size": "320px 896px"
  }, "👱"],
  [{
    "alt": ":blond_haired_man:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -160px",
    "size": "320px 896px"
  }, "👱‍♂️"],
  [{
    "alt": ":person_white_hair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -160px",
    "size": "320px 896px"
  }, "🧑‍🦳"],
  [{
    "alt": ":woman_white_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -160px",
    "size": "320px 896px"
  }, "👩‍🦳"],
  [{
    "alt": ":man_white_haired:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -160px",
    "size": "320px 896px"
  }, "👨‍🦳"],
  [{
    "alt": ":person_bald:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -160px",
    "size": "320px 896px"
  }, "🧑‍🦲"],
  [{
    "alt": ":woman_bald:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -160px",
    "size": "320px 896px"
  }, "👩‍🦲"],
  [{
    "alt": ":man_bald:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -160px",
    "size": "320px 896px"
  }, "👨‍🦲"],
  [{
    "alt": ":bearded_person:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -160px",
    "size": "320px 896px"
  }, "🧔"],
  [{
    "alt": ":older_woman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -192px",
    "size": "320px 896px"
  }, "👵"],
  [{
    "alt": ":older_adult:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -192px",
    "size": "320px 896px"
  }, "🧓"],
  [{
    "alt": ":older_man:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -192px",
    "size": "320px 896px"
  }, "👴"],
  [{
    "alt": ":man_with_chinese_cap:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -192px",
    "size": "320px 896px"
  }, "👲"],
  [{
    "alt": ":person_wearing_turban:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -192px",
    "size": "320px 896px"
  }, "👳"],
  [{
    "alt": ":woman_wearing_turban:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -192px",
    "size": "320px 896px"
  }, "👳‍♀️"],
  [{
    "alt": ":man_wearing_turban:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -192px",
    "size": "320px 896px"
  }, "👳‍♂️"],
  [{
    "alt": ":woman_with_headscarf:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -192px",
    "size": "320px 896px"
  }, "🧕"],
  [{
    "alt": ":police_officer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -192px",
    "size": "320px 896px"
  }, "👮"],
  [{
    "alt": ":woman_police_officer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -192px",
    "size": "320px 896px"
  }, "👮‍♀️"],
  [{
    "alt": ":man_police_officer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -224px",
    "size": "320px 896px"
  }, "👮‍♂️"],
  [{
    "alt": ":construction_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -224px",
    "size": "320px 896px"
  }, "👷"],
  [{
    "alt": ":woman_construction_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -224px",
    "size": "320px 896px"
  }, "👷‍♀️"],
  [{
    "alt": ":man_construction_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -224px",
    "size": "320px 896px"
  }, "👷‍♂️"],
  [{
    "alt": ":guard:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -224px",
    "size": "320px 896px"
  }, "💂"],
  [{
    "alt": ":woman_guard:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -224px",
    "size": "320px 896px"
  }, "💂‍♀️"],
  [{
    "alt": ":man_guard:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -224px",
    "size": "320px 896px"
  }, "💂‍♂️"],
  [{
    "alt": ":detective:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -224px",
    "size": "320px 896px"
  }, "🕵️"],
  [{
    "alt": ":woman_detective:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -224px",
    "size": "320px 896px"
  }, "🕵️‍♀️"],
  [{
    "alt": ":man_detective:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -224px",
    "size": "320px 896px"
  }, "🕵️‍♂️"],
  [{
    "alt": ":health_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -256px",
    "size": "320px 896px"
  }, "🧑‍⚕️"],
  [{
    "alt": ":woman_health_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -256px",
    "size": "320px 896px"
  }, "👩‍⚕️"],
  [{
    "alt": ":man_health_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -256px",
    "size": "320px 896px"
  }, "👨‍⚕️"],
  [{
    "alt": ":farmer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -256px",
    "size": "320px 896px"
  }, "🧑‍🌾"],
  [{
    "alt": ":woman_farmer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -256px",
    "size": "320px 896px"
  }, "👩‍🌾"],
  [{
    "alt": ":man_farmer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -256px",
    "size": "320px 896px"
  }, "👨‍🌾"],
  [{
    "alt": ":cook:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -256px",
    "size": "320px 896px"
  }, "🧑‍🍳"],
  [{
    "alt": ":woman_cook:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -256px",
    "size": "320px 896px"
  }, "👩‍🍳"],
  [{
    "alt": ":man_cook:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -256px",
    "size": "320px 896px"
  }, "👨‍🍳"],
  [{
    "alt": ":student:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -256px",
    "size": "320px 896px"
  }, "🧑‍🎓"],
  [{
    "alt": ":woman_student:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -288px",
    "size": "320px 896px"
  }, "👩‍🎓"],
  [{
    "alt": ":man_student:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -288px",
    "size": "320px 896px"
  }, "👨‍🎓"],
  [{
    "alt": ":singer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -288px",
    "size": "320px 896px"
  }, "🧑‍🎤"],
  [{
    "alt": ":woman_singer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -288px",
    "size": "320px 896px"
  }, "👩‍🎤"],
  [{
    "alt": ":man_singer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -288px",
    "size": "320px 896px"
  }, "👨‍🎤"],
  [{
    "alt": ":teacher:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -288px",
    "size": "320px 896px"
  }, "🧑‍🏫"],
  [{
    "alt": ":woman_teacher:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -288px",
    "size": "320px 896px"
  }, "👩‍🏫"],
  [{
    "alt": ":man_teacher:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -288px",
    "size": "320px 896px"
  }, "👨‍🏫"],
  [{
    "alt": ":factory_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -288px",
    "size": "320px 896px"
  }, "🧑‍🏭"],
  [{
    "alt": ":woman_factory_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -288px",
    "size": "320px 896px"
  }, "👩‍🏭"],
  [{
    "alt": ":man_factory_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -320px",
    "size": "320px 896px"
  }, "👨‍🏭"],
  [{
    "alt": ":technologist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -320px",
    "size": "320px 896px"
  }, "🧑‍💻"],
  [{
    "alt": ":woman_technologist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -320px",
    "size": "320px 896px"
  }, "👩‍💻"],
  [{
    "alt": ":man_technologist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -320px",
    "size": "320px 896px"
  }, "👨‍💻"],
  [{
    "alt": ":office_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -320px",
    "size": "320px 896px"
  }, "🧑‍💼"],
  [{
    "alt": ":woman_office_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -320px",
    "size": "320px 896px"
  }, "👩‍💼"],
  [{
    "alt": ":man_office_worker:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -320px",
    "size": "320px 896px"
  }, "👨‍💼"],
  [{
    "alt": ":mechanic:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -320px",
    "size": "320px 896px"
  }, "🧑‍🔧"],
  [{
    "alt": ":woman_mechanic:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -320px",
    "size": "320px 896px"
  }, "👩‍🔧"],
  [{
    "alt": ":man_mechanic:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -320px",
    "size": "320px 896px"
  }, "👨‍🔧"],
  [{
    "alt": ":scientist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -352px",
    "size": "320px 896px"
  }, "🧑‍🔬"],
  [{
    "alt": ":woman_scientist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -352px",
    "size": "320px 896px"
  }, "👩‍🔬"],
  [{
    "alt": ":man_scientist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -352px",
    "size": "320px 896px"
  }, "👨‍🔬"],
  [{
    "alt": ":artist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -352px",
    "size": "320px 896px"
  }, "🧑‍🎨"],
  [{
    "alt": ":woman_artist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -352px",
    "size": "320px 896px"
  }, "👩‍🎨"],
  [{
    "alt": ":man_artist:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -352px",
    "size": "320px 896px"
  }, "👨‍🎨"],
  [{
    "alt": ":firefighter:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -352px",
    "size": "320px 896px"
  }, "🧑‍🚒"],
  [{
    "alt": ":woman_firefighter:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -352px",
    "size": "320px 896px"
  }, "👩‍🚒"],
  [{
    "alt": ":man_firefighter:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -352px",
    "size": "320px 896px"
  }, "👨‍🚒"],
  [{
    "alt": ":pilot:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -352px",
    "size": "320px 896px"
  }, "🧑‍✈️"],
  [{
    "alt": ":woman_pilot:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -384px",
    "size": "320px 896px"
  }, "👩‍✈️"],
  [{
    "alt": ":man_pilot:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -384px",
    "size": "320px 896px"
  }, "👨‍✈️"],
  [{
    "alt": ":astronaut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -384px",
    "size": "320px 896px"
  }, "🧑‍🚀"],
  [{
    "alt": ":woman_astronaut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -384px",
    "size": "320px 896px"
  }, "👩‍🚀"],
  [{
    "alt": ":man_astronaut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -384px",
    "size": "320px 896px"
  }, "👨‍🚀"],
  [{
    "alt": ":judge:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -384px",
    "size": "320px 896px"
  }, "🧑‍⚖️"],
  [{
    "alt": ":woman_judge:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -384px",
    "size": "320px 896px"
  }, "👩‍⚖️"],
  [{
    "alt": ":man_judge:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -384px",
    "size": "320px 896px"
  }, "👨‍⚖️"],
  [{
    "alt": ":person_with_veil:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -384px",
    "size": "320px 896px"
  }, "👰"],
  [{
    "alt": ":woman_with_veil:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -384px",
    "size": "320px 896px"
  }, "👰‍♀️"],
  [{
    "alt": ":man_with_veil:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -416px",
    "size": "320px 896px"
  }, "👰‍♂️"],
  [{
    "alt": ":person_in_tuxedo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -416px",
    "size": "320px 896px"
  }, "🤵"],
  [{
    "alt": ":woman_in_tuxedo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -416px",
    "size": "320px 896px"
  }, "🤵‍♀️"],
  [{
    "alt": ":man_in_tuxedo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -416px",
    "size": "320px 896px"
  }, "🤵‍♂️"],
  [{
    "alt": ":princess:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -416px",
    "size": "320px 896px"
  }, "👸"],
  [{
    "alt": ":prince:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -416px",
    "size": "320px 896px"
  }, "🤴"],
  [{
    "alt": ":superhero:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -416px",
    "size": "320px 896px"
  }, "🦸"],
  [{
    "alt": ":woman_superhero:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -416px",
    "size": "320px 896px"
  }, "🦸‍♀️"],
  [{
    "alt": ":man_superhero:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -416px",
    "size": "320px 896px"
  }, "🦸‍♂️"],
  [{
    "alt": ":supervillain:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -416px",
    "size": "320px 896px"
  }, "🦹"],
  [{
    "alt": ":woman_supervillain:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -448px",
    "size": "320px 896px"
  }, "🦹‍♀️"],
  [{
    "alt": ":man_supervillain:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -448px",
    "size": "320px 896px"
  }, "🦹‍♂️"],
  [{
    "alt": ":ninja:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -448px",
    "size": "320px 896px"
  }, "🥷"],
  [{
    "alt": ":mx_claus:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -448px",
    "size": "320px 896px"
  }, "🧑‍🎄"],
  [{
    "alt": ":mrs_claus:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -448px",
    "size": "320px 896px"
  }, "🤶"],
  [{
    "alt": ":santa:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -448px",
    "size": "320px 896px"
  }, "🎅"],
  [{
    "alt": ":mage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -448px",
    "size": "320px 896px"
  }, "🧙"],
  [{
    "alt": ":woman_mage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -448px",
    "size": "320px 896px"
  }, "🧙‍♀️"],
  [{
    "alt": ":man_mage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -448px",
    "size": "320px 896px"
  }, "🧙‍♂️"],
  [{
    "alt": ":elf:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -448px",
    "size": "320px 896px"
  }, "🧝"],
  [{
    "alt": ":woman_elf:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -480px",
    "size": "320px 896px"
  }, "🧝‍♀️"],
  [{
    "alt": ":man_elf:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -480px",
    "size": "320px 896px"
  }, "🧝‍♂️"],
  [{
    "alt": ":vampire:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -480px",
    "size": "320px 896px"
  }, "🧛"],
  [{
    "alt": ":woman_vampire:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -480px",
    "size": "320px 896px"
  }, "🧛‍♀️"],
  [{
    "alt": ":man_vampire:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -480px",
    "size": "320px 896px"
  }, "🧛‍♂️"],
  [{
    "alt": ":zombie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -96px",
    "size": "1344px 1184px"
  }, "🧟"],
  [{
    "alt": ":woman_zombie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -96px",
    "size": "1344px 1184px"
  }, "🧟‍♀️"],
  [{
    "alt": ":man_zombie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -96px",
    "size": "1344px 1184px"
  }, "🧟‍♂️"],
  [{
    "alt": ":genie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -96px",
    "size": "1344px 1184px"
  }, "🧞"],
  [{
    "alt": ":woman_genie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -96px",
    "size": "1344px 1184px"
  }, "🧞‍♀️"],
  [{
    "alt": ":man_genie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -96px",
    "size": "1344px 1184px"
  }, "🧞‍♂️"],
  [{
    "alt": ":merperson:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -480px",
    "size": "320px 896px"
  }, "🧜"],
  [{
    "alt": ":mermaid:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -480px",
    "size": "320px 896px"
  }, "🧜‍♀️"],
  [{
    "alt": ":merman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -480px",
    "size": "320px 896px"
  }, "🧜‍♂️"],
  [{
    "alt": ":fairy:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -480px",
    "size": "320px 896px"
  }, "🧚"],
  [{
    "alt": ":woman_fairy:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -480px",
    "size": "320px 896px"
  }, "🧚‍♀️"],
  [{
    "alt": ":man_fairy:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -512px",
    "size": "320px 896px"
  }, "🧚‍♂️"],
  [{
    "alt": ":angel:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -512px",
    "size": "320px 896px"
  }, "👼"],
  [{
    "alt": ":pregnant_woman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -512px",
    "size": "320px 896px"
  }, "🤰"],
  [{
    "alt": ":breast_feeding:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -512px",
    "size": "320px 896px"
  }, "🤱"],
  [{
    "alt": ":person_feeding_baby:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -512px",
    "size": "320px 896px"
  }, "🧑‍🍼"],
  [{
    "alt": ":woman_feeding_baby:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -512px",
    "size": "320px 896px"
  }, "👩‍🍼"],
  [{
    "alt": ":man_feeding_baby:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -512px",
    "size": "320px 896px"
  }, "👨‍🍼"],
  [{
    "alt": ":person_bowing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -512px",
    "size": "320px 896px"
  }, "🙇"],
  [{
    "alt": ":woman_bowing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -512px",
    "size": "320px 896px"
  }, "🙇‍♀️"],
  [{
    "alt": ":man_bowing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -512px",
    "size": "320px 896px"
  }, "🙇‍♂️"],
  [{
    "alt": ":person_tipping_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -544px",
    "size": "320px 896px"
  }, "💁"],
  [{
    "alt": ":woman_tipping_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -544px",
    "size": "320px 896px"
  }, "💁‍♀️"],
  [{
    "alt": ":man_tipping_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -544px",
    "size": "320px 896px"
  }, "💁‍♂️"],
  [{
    "alt": ":person_gesturing_no:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -544px",
    "size": "320px 896px"
  }, "🙅"],
  [{
    "alt": ":woman_gesturing_no:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -544px",
    "size": "320px 896px"
  }, "🙅‍♀️"],
  [{
    "alt": ":man_gesturing_no:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -544px",
    "size": "320px 896px"
  }, "🙅‍♂️"],
  [{
    "alt": ":person_gesturing_ok:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -544px",
    "size": "320px 896px"
  }, "🙆"],
  [{
    "alt": ":woman_gesturing_ok:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -544px",
    "size": "320px 896px"
  }, "🙆‍♀️"],
  [{
    "alt": ":man_gesturing_ok:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -544px",
    "size": "320px 896px"
  }, "🙆‍♂️"],
  [{
    "alt": ":person_raising_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -544px",
    "size": "320px 896px"
  }, "🙋"],
  [{
    "alt": ":woman_raising_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -576px",
    "size": "320px 896px"
  }, "🙋‍♀️"],
  [{
    "alt": ":man_raising_hand:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -576px",
    "size": "320px 896px"
  }, "🙋‍♂️"],
  [{
    "alt": ":deaf_person:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -576px",
    "size": "320px 896px"
  }, "🧏"],
  [{
    "alt": ":deaf_woman:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -576px",
    "size": "320px 896px"
  }, "🧏‍♀️"],
  [{
    "alt": ":deaf_man:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -576px",
    "size": "320px 896px"
  }, "🧏‍♂️"],
  [{
    "alt": ":person_facepalming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -576px",
    "size": "320px 896px"
  }, "🤦"],
  [{
    "alt": ":woman_facepalming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -576px",
    "size": "320px 896px"
  }, "🤦‍♀️"],
  [{
    "alt": ":man_facepalming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -576px",
    "size": "320px 896px"
  }, "🤦‍♂️"],
  [{
    "alt": ":person_shrugging:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -576px",
    "size": "320px 896px"
  }, "🤷"],
  [{
    "alt": ":woman_shrugging:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -576px",
    "size": "320px 896px"
  }, "🤷‍♀️"],
  [{
    "alt": ":man_shrugging:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -608px",
    "size": "320px 896px"
  }, "🤷‍♂️"],
  [{
    "alt": ":person_pouting:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -608px",
    "size": "320px 896px"
  }, "🙎"],
  [{
    "alt": ":woman_pouting:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -608px",
    "size": "320px 896px"
  }, "🙎‍♀️"],
  [{
    "alt": ":man_pouting:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -608px",
    "size": "320px 896px"
  }, "🙎‍♂️"],
  [{
    "alt": ":person_frowning:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -608px",
    "size": "320px 896px"
  }, "🙍"],
  [{
    "alt": ":woman_frowning:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -608px",
    "size": "320px 896px"
  }, "🙍‍♀️"],
  [{
    "alt": ":man_frowning:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -608px",
    "size": "320px 896px"
  }, "🙍‍♂️"],
  [{
    "alt": ":person_getting_haircut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -608px",
    "size": "320px 896px"
  }, "💇"],
  [{
    "alt": ":woman_getting_haircut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -608px",
    "size": "320px 896px"
  }, "💇‍♀️"],
  [{
    "alt": ":man_getting_haircut:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -608px",
    "size": "320px 896px"
  }, "💇‍♂️"],
  [{
    "alt": ":person_getting_massage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -640px",
    "size": "320px 896px"
  }, "💆"],
  [{
    "alt": ":woman_getting_face_massage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -640px",
    "size": "320px 896px"
  }, "💆‍♀️"],
  [{
    "alt": ":man_getting_face_massage:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -640px",
    "size": "320px 896px"
  }, "💆‍♂️"],
  [{
    "alt": ":person_in_steamy_room:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -640px",
    "size": "320px 896px"
  }, "🧖"],
  [{
    "alt": ":woman_in_steamy_room:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -640px",
    "size": "320px 896px"
  }, "🧖‍♀️"],
  [{
    "alt": ":man_in_steamy_room:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -640px",
    "size": "320px 896px"
  }, "🧖‍♂️"],
  [{
    "alt": ":nail_care:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -640px",
    "size": "320px 896px"
  }, "💅"],
  [{
    "alt": ":selfie:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -640px",
    "size": "320px 896px"
  }, "🤳"],
  [{
    "alt": ":dancer:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -640px",
    "size": "320px 896px"
  }, "💃"],
  [{
    "alt": ":man_dancing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -640px",
    "size": "320px 896px"
  }, "🕺"],
  [{
    "alt": ":people_with_bunny_ears_partying:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -96px",
    "size": "1344px 1184px"
  }, "👯"],
  [{
    "alt": ":women_with_bunny_ears_partying:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -96px",
    "size": "1344px 1184px"
  }, "👯‍♀️"],
  [{
    "alt": ":men_with_bunny_ears_partying:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -96px",
    "size": "1344px 1184px"
  }, "👯‍♂️"],
  [{
    "alt": ":levitate:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -672px",
    "size": "320px 896px"
  }, "🕴️"],
  [{
    "alt": ":person_in_manual_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -672px",
    "size": "320px 896px"
  }, "🧑‍🦽"],
  [{
    "alt": ":woman_in_manual_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -672px",
    "size": "320px 896px"
  }, "👩‍🦽"],
  [{
    "alt": ":man_in_manual_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -672px",
    "size": "320px 896px"
  }, "👨‍🦽"],
  [{
    "alt": ":person_in_motorized_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -672px",
    "size": "320px 896px"
  }, "🧑‍🦼"],
  [{
    "alt": ":woman_in_motorized_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -672px",
    "size": "320px 896px"
  }, "👩‍🦼"],
  [{
    "alt": ":man_in_motorized_wheelchair:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -672px",
    "size": "320px 896px"
  }, "👨‍🦼"],
  [{
    "alt": ":person_walking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -672px",
    "size": "320px 896px"
  }, "🚶"],
  [{
    "alt": ":woman_walking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -672px",
    "size": "320px 896px"
  }, "🚶‍♀️"],
  [{
    "alt": ":man_walking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -672px",
    "size": "320px 896px"
  }, "🚶‍♂️"],
  [{
    "alt": ":person_with_probing_cane:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -704px",
    "size": "320px 896px"
  }, "🧑‍🦯"],
  [{
    "alt": ":woman_with_probing_cane:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -704px",
    "size": "320px 896px"
  }, "👩‍🦯"],
  [{
    "alt": ":man_with_probing_cane:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -704px",
    "size": "320px 896px"
  }, "👨‍🦯"],
  [{
    "alt": ":person_kneeling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -704px",
    "size": "320px 896px"
  }, "🧎"],
  [{
    "alt": ":woman_kneeling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -704px",
    "size": "320px 896px"
  }, "🧎‍♀️"],
  [{
    "alt": ":man_kneeling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -704px",
    "size": "320px 896px"
  }, "🧎‍♂️"],
  [{
    "alt": ":person_running:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -704px",
    "size": "320px 896px"
  }, "🏃"],
  [{
    "alt": ":woman_running:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -704px",
    "size": "320px 896px"
  }, "🏃‍♀️"],
  [{
    "alt": ":man_running:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -704px",
    "size": "320px 896px"
  }, "🏃‍♂️"],
  [{
    "alt": ":person_standing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -704px",
    "size": "320px 896px"
  }, "🧍"],
  [{
    "alt": ":woman_standing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -736px",
    "size": "320px 896px"
  }, "🧍‍♀️"],
  [{
    "alt": ":man_standing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -736px",
    "size": "320px 896px"
  }, "🧍‍♂️"],
  [{
    "alt": ":people_holding_hands:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -96px",
    "size": "1344px 1184px"
  }, "🧑‍🤝‍🧑"],
  [{
    "alt": ":couple:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -96px",
    "size": "1344px 1184px"
  }, "👫"],
  [{
    "alt": ":two_women_holding_hands:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -96px",
    "size": "1344px 1184px"
  }, "👭"],
  [{
    "alt": ":two_men_holding_hands:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -96px",
    "size": "1344px 1184px"
  }, "👬"],
  [{
    "alt": ":couple_with_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -96px",
    "size": "1344px 1184px"
  }, "💑"],
  [{
    "alt": ":couple_with_heart_woman_man:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -96px",
    "size": "1344px 1184px"
  }, "👩‍❤️‍👨"],
  [{
    "alt": ":couple_ww:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -96px",
    "size": "1344px 1184px"
  }, "👩‍❤️‍👩"],
  [{
    "alt": ":couple_mm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -96px",
    "size": "1344px 1184px"
  }, "👨‍❤️‍👨"],
  [{
    "alt": ":couplekiss:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -96px",
    "size": "1344px 1184px"
  }, "💏"],
  [{
    "alt": ":kiss_woman_man:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -96px",
    "size": "1344px 1184px"
  }, "👩‍❤️‍💋‍👨"],
  [{
    "alt": ":kiss_ww:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -96px",
    "size": "1344px 1184px"
  }, "👩‍❤️‍💋‍👩"],
  [{
    "alt": ":kiss_mm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -96px",
    "size": "1344px 1184px"
  }, "👨‍❤️‍💋‍👨"],
  [{
    "alt": ":family:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -96px",
    "size": "1344px 1184px"
  }, "👪"],
  [{
    "alt": ":family_man_woman_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -96px",
    "size": "1344px 1184px"
  }, "👨‍👩‍👦"],
  [{
    "alt": ":family_mwg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -96px",
    "size": "1344px 1184px"
  }, "👨‍👩‍👧"],
  [{
    "alt": ":family_mwgb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -96px",
    "size": "1344px 1184px"
  }, "👨‍👩‍👧‍👦"],
  [{
    "alt": ":family_mwbb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -96px",
    "size": "1344px 1184px"
  }, "👨‍👩‍👦‍👦"],
  [{
    "alt": ":family_mwgg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -96px",
    "size": "1344px 1184px"
  }, "👨‍👩‍👧‍👧"],
  [{
    "alt": ":family_wwb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -96px",
    "size": "1344px 1184px"
  }, "👩‍👩‍👦"],
  [{
    "alt": ":family_wwg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -96px",
    "size": "1344px 1184px"
  }, "👩‍👩‍👧"],
  [{
    "alt": ":family_wwgb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -96px",
    "size": "1344px 1184px"
  }, "👩‍👩‍👧‍👦"],
  [{
    "alt": ":family_wwbb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -96px",
    "size": "1344px 1184px"
  }, "👩‍👩‍👦‍👦"],
  [{
    "alt": ":family_wwgg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -96px",
    "size": "1344px 1184px"
  }, "👩‍👩‍👧‍👧"],
  [{
    "alt": ":family_mmb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -96px",
    "size": "1344px 1184px"
  }, "👨‍👨‍👦"],
  [{
    "alt": ":family_mmg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -96px",
    "size": "1344px 1184px"
  }, "👨‍👨‍👧"],
  [{
    "alt": ":family_mmgb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -96px",
    "size": "1344px 1184px"
  }, "👨‍👨‍👧‍👦"],
  [{
    "alt": ":family_mmbb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -128px",
    "size": "1344px 1184px"
  }, "👨‍👨‍👦‍👦"],
  [{
    "alt": ":family_mmgg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -128px",
    "size": "1344px 1184px"
  }, "👨‍👨‍👧‍👧"],
  [{
    "alt": ":family_woman_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -128px",
    "size": "1344px 1184px"
  }, "👩‍👦"],
  [{
    "alt": ":family_woman_girl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -128px",
    "size": "1344px 1184px"
  }, "👩‍👧"],
  [{
    "alt": ":family_woman_girl_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -128px",
    "size": "1344px 1184px"
  }, "👩‍👧‍👦"],
  [{
    "alt": ":family_woman_boy_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -128px",
    "size": "1344px 1184px"
  }, "👩‍👦‍👦"],
  [{
    "alt": ":family_woman_girl_girl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -128px",
    "size": "1344px 1184px"
  }, "👩‍👧‍👧"],
  [{
    "alt": ":family_man_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -128px",
    "size": "1344px 1184px"
  }, "👨‍👦"],
  [{
    "alt": ":family_man_girl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -128px",
    "size": "1344px 1184px"
  }, "👨‍👧"],
  [{
    "alt": ":family_man_girl_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -128px",
    "size": "1344px 1184px"
  }, "👨‍👧‍👦"],
  [{
    "alt": ":family_man_boy_boy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -128px",
    "size": "1344px 1184px"
  }, "👨‍👦‍👦"],
  [{
    "alt": ":family_man_girl_girl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -128px",
    "size": "1344px 1184px"
  }, "👨‍👧‍👧"],
  [{
    "alt": ":yarn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -128px",
    "size": "1344px 1184px"
  }, "🧶"],
  [{
    "alt": ":thread:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -128px",
    "size": "1344px 1184px"
  }, "🧵"],
  [{
    "alt": ":coat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -128px",
    "size": "1344px 1184px"
  }, "🧥"],
  [{
    "alt": ":lab_coat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -128px",
    "size": "1344px 1184px"
  }, "🥼"],
  [{
    "alt": ":safety_vest:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -128px",
    "size": "1344px 1184px"
  }, "🦺"],
  [{
    "alt": ":womans_clothes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -128px",
    "size": "1344px 1184px"
  }, "👚"],
  [{
    "alt": ":shirt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -128px",
    "size": "1344px 1184px"
  }, "👕"],
  [{
    "alt": ":jeans:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -128px",
    "size": "1344px 1184px"
  }, "👖"],
  [{
    "alt": ":briefs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -128px",
    "size": "1344px 1184px"
  }, "🩲"],
  [{
    "alt": ":shorts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -128px",
    "size": "1344px 1184px"
  }, "🩳"],
  [{
    "alt": ":necktie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -128px",
    "size": "1344px 1184px"
  }, "👔"],
  [{
    "alt": ":dress:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -128px",
    "size": "1344px 1184px"
  }, "👗"],
  [{
    "alt": ":bikini:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -128px",
    "size": "1344px 1184px"
  }, "👙"],
  [{
    "alt": ":one_piece_swimsuit:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -128px",
    "size": "1344px 1184px"
  }, "🩱"],
  [{
    "alt": ":kimono:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -128px",
    "size": "1344px 1184px"
  }, "👘"],
  [{
    "alt": ":sari:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -128px",
    "size": "1344px 1184px"
  }, "🥻"],
  [{
    "alt": ":womans_flat_shoe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -128px",
    "size": "1344px 1184px"
  }, "🥿"],
  [{
    "alt": ":high_heel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -128px",
    "size": "1344px 1184px"
  }, "👠"],
  [{
    "alt": ":sandal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -128px",
    "size": "1344px 1184px"
  }, "👡"],
  [{
    "alt": ":boot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -128px",
    "size": "1344px 1184px"
  }, "👢"],
  [{
    "alt": ":mans_shoe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -128px",
    "size": "1344px 1184px"
  }, "👞"],
  [{
    "alt": ":athletic_shoe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -128px",
    "size": "1344px 1184px"
  }, "👟"],
  [{
    "alt": ":hiking_boot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -128px",
    "size": "1344px 1184px"
  }, "🥾"],
  [{
    "alt": ":thong_sandal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -128px",
    "size": "1344px 1184px"
  }, "🩴"],
  [{
    "alt": ":socks:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -128px",
    "size": "1344px 1184px"
  }, "🧦"],
  [{
    "alt": ":gloves:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -128px",
    "size": "1344px 1184px"
  }, "🧤"],
  [{
    "alt": ":scarf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -128px",
    "size": "1344px 1184px"
  }, "🧣"],
  [{
    "alt": ":tophat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -128px",
    "size": "1344px 1184px"
  }, "🎩"],
  [{
    "alt": ":billed_cap:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -128px",
    "size": "1344px 1184px"
  }, "🧢"],
  [{
    "alt": ":womans_hat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -128px",
    "size": "1344px 1184px"
  }, "👒"],
  [{
    "alt": ":mortar_board:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -160px",
    "size": "1344px 1184px"
  }, "🎓"],
  [{
    "alt": ":helmet_with_cross:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -160px",
    "size": "1344px 1184px"
  }, "⛑️"],
  [{
    "alt": ":military_helmet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -160px",
    "size": "1344px 1184px"
  }, "🪖"],
  [{
    "alt": ":crown:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -160px",
    "size": "1344px 1184px"
  }, "👑"],
  [{
    "alt": ":ring:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -160px",
    "size": "1344px 1184px"
  }, "💍"],
  [{
    "alt": ":pouch:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -160px",
    "size": "1344px 1184px"
  }, "👝"],
  [{
    "alt": ":purse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -160px",
    "size": "1344px 1184px"
  }, "👛"],
  [{
    "alt": ":handbag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -160px",
    "size": "1344px 1184px"
  }, "👜"],
  [{
    "alt": ":briefcase:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -160px",
    "size": "1344px 1184px"
  }, "💼"],
  [{
    "alt": ":school_satchel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -160px",
    "size": "1344px 1184px"
  }, "🎒"],
  [{
    "alt": ":luggage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -160px",
    "size": "1344px 1184px"
  }, "🧳"],
  [{
    "alt": ":eyeglasses:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -160px",
    "size": "1344px 1184px"
  }, "👓"],
  [{
    "alt": ":dark_sunglasses:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -160px",
    "size": "1344px 1184px"
  }, "🕶️"],
  [{
    "alt": ":goggles:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -160px",
    "size": "1344px 1184px"
  }, "🥽"],
  [{
    "alt": ":closed_umbrella:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -160px",
    "size": "1344px 1184px"
  }, "🌂"],
  ["Nature", "separator"],
  [{
    "alt": ":dog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -160px",
    "size": "1344px 1184px"
  }, "🐶"],
  [{
    "alt": ":cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -160px",
    "size": "1344px 1184px"
  }, "🐱"],
  [{
    "alt": ":mouse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -160px",
    "size": "1344px 1184px"
  }, "🐭"],
  [{
    "alt": ":hamster:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -160px",
    "size": "1344px 1184px"
  }, "🐹"],
  [{
    "alt": ":rabbit:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -160px",
    "size": "1344px 1184px"
  }, "🐰"],
  [{
    "alt": ":fox:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -160px",
    "size": "1344px 1184px"
  }, "🦊"],
  [{
    "alt": ":bear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -160px",
    "size": "1344px 1184px"
  }, "🐻"],
  [{
    "alt": ":panda_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -160px",
    "size": "1344px 1184px"
  }, "🐼"],
  [{
    "alt": ":polar_bear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -160px",
    "size": "1344px 1184px"
  }, "🐻‍❄️"],
  [{
    "alt": ":koala:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -160px",
    "size": "1344px 1184px"
  }, "🐨"],
  [{
    "alt": ":tiger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -160px",
    "size": "1344px 1184px"
  }, "🐯"],
  [{
    "alt": ":lion_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -160px",
    "size": "1344px 1184px"
  }, "🦁"],
  [{
    "alt": ":cow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -160px",
    "size": "1344px 1184px"
  }, "🐮"],
  [{
    "alt": ":pig:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -160px",
    "size": "1344px 1184px"
  }, "🐷"],
  [{
    "alt": ":pig_nose:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -160px",
    "size": "1344px 1184px"
  }, "🐽"],
  [{
    "alt": ":frog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -160px",
    "size": "1344px 1184px"
  }, "🐸"],
  [{
    "alt": ":monkey_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -160px",
    "size": "1344px 1184px"
  }, "🐵"],
  [{
    "alt": ":see_no_evil:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -160px",
    "size": "1344px 1184px"
  }, "🙈"],
  [{
    "alt": ":hear_no_evil:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -160px",
    "size": "1344px 1184px"
  }, "🙉"],
  [{
    "alt": ":speak_no_evil:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -160px",
    "size": "1344px 1184px"
  }, "🙊"],
  [{
    "alt": ":monkey:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -160px",
    "size": "1344px 1184px"
  }, "🐒"],
  [{
    "alt": ":chicken:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -160px",
    "size": "1344px 1184px"
  }, "🐔"],
  [{
    "alt": ":penguin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -160px",
    "size": "1344px 1184px"
  }, "🐧"],
  [{
    "alt": ":bird:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -160px",
    "size": "1344px 1184px"
  }, "🐦"],
  [{
    "alt": ":baby_chick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -160px",
    "size": "1344px 1184px"
  }, "🐤"],
  [{
    "alt": ":hatching_chick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -160px",
    "size": "1344px 1184px"
  }, "🐣"],
  [{
    "alt": ":hatched_chick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -160px",
    "size": "1344px 1184px"
  }, "🐥"],
  [{
    "alt": ":duck:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -192px",
    "size": "1344px 1184px"
  }, "🦆"],
  [{
    "alt": ":dodo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -192px",
    "size": "1344px 1184px"
  }, "🦤"],
  [{
    "alt": ":eagle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -192px",
    "size": "1344px 1184px"
  }, "🦅"],
  [{
    "alt": ":owl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -192px",
    "size": "1344px 1184px"
  }, "🦉"],
  [{
    "alt": ":bat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -192px",
    "size": "1344px 1184px"
  }, "🦇"],
  [{
    "alt": ":wolf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -192px",
    "size": "1344px 1184px"
  }, "🐺"],
  [{
    "alt": ":boar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -192px",
    "size": "1344px 1184px"
  }, "🐗"],
  [{
    "alt": ":horse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -192px",
    "size": "1344px 1184px"
  }, "🐴"],
  [{
    "alt": ":unicorn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -192px",
    "size": "1344px 1184px"
  }, "🦄"],
  [{
    "alt": ":bee:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -192px",
    "size": "1344px 1184px"
  }, "🐝"],
  [{
    "alt": ":bug:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -192px",
    "size": "1344px 1184px"
  }, "🐛"],
  [{
    "alt": ":butterfly:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -192px",
    "size": "1344px 1184px"
  }, "🦋"],
  [{
    "alt": ":snail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -192px",
    "size": "1344px 1184px"
  }, "🐌"],
  [{
    "alt": ":worm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -192px",
    "size": "1344px 1184px"
  }, "🪱"],
  [{
    "alt": ":lady_beetle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -192px",
    "size": "1344px 1184px"
  }, "🐞"],
  [{
    "alt": ":ant:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -192px",
    "size": "1344px 1184px"
  }, "🐜"],
  [{
    "alt": ":fly:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -192px",
    "size": "1344px 1184px"
  }, "🪰"],
  [{
    "alt": ":mosquito:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -192px",
    "size": "1344px 1184px"
  }, "🦟"],
  [{
    "alt": ":cockroach:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -192px",
    "size": "1344px 1184px"
  }, "🪳"],
  [{
    "alt": ":beetle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -192px",
    "size": "1344px 1184px"
  }, "🪲"],
  [{
    "alt": ":cricket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -192px",
    "size": "1344px 1184px"
  }, "🦗"],
  [{
    "alt": ":spider:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -192px",
    "size": "1344px 1184px"
  }, "🕷️"],
  [{
    "alt": ":spider_web:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -192px",
    "size": "1344px 1184px"
  }, "🕸️"],
  [{
    "alt": ":scorpion:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -192px",
    "size": "1344px 1184px"
  }, "🦂"],
  [{
    "alt": ":turtle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -192px",
    "size": "1344px 1184px"
  }, "🐢"],
  [{
    "alt": ":snake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -192px",
    "size": "1344px 1184px"
  }, "🐍"],
  [{
    "alt": ":lizard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -192px",
    "size": "1344px 1184px"
  }, "🦎"],
  [{
    "alt": ":t_rex:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -192px",
    "size": "1344px 1184px"
  }, "🦖"],
  [{
    "alt": ":sauropod:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -192px",
    "size": "1344px 1184px"
  }, "🦕"],
  [{
    "alt": ":octopus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -192px",
    "size": "1344px 1184px"
  }, "🐙"],
  [{
    "alt": ":squid:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -192px",
    "size": "1344px 1184px"
  }, "🦑"],
  [{
    "alt": ":shrimp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -192px",
    "size": "1344px 1184px"
  }, "🦐"],
  [{
    "alt": ":lobster:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -192px",
    "size": "1344px 1184px"
  }, "🦞"],
  [{
    "alt": ":crab:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -192px",
    "size": "1344px 1184px"
  }, "🦀"],
  [{
    "alt": ":blowfish:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -192px",
    "size": "1344px 1184px"
  }, "🐡"],
  [{
    "alt": ":tropical_fish:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -192px",
    "size": "1344px 1184px"
  }, "🐠"],
  [{
    "alt": ":fish:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -192px",
    "size": "1344px 1184px"
  }, "🐟"],
  [{
    "alt": ":seal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -192px",
    "size": "1344px 1184px"
  }, "🦭"],
  [{
    "alt": ":dolphin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -192px",
    "size": "1344px 1184px"
  }, "🐬"],
  [{
    "alt": ":whale:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -192px",
    "size": "1344px 1184px"
  }, "🐳"],
  [{
    "alt": ":whale2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -192px",
    "size": "1344px 1184px"
  }, "🐋"],
  [{
    "alt": ":shark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -192px",
    "size": "1344px 1184px"
  }, "🦈"],
  [{
    "alt": ":crocodile:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -224px",
    "size": "1344px 1184px"
  }, "🐊"],
  [{
    "alt": ":tiger2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -224px",
    "size": "1344px 1184px"
  }, "🐅"],
  [{
    "alt": ":leopard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -224px",
    "size": "1344px 1184px"
  }, "🐆"],
  [{
    "alt": ":zebra:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -224px",
    "size": "1344px 1184px"
  }, "🦓"],
  [{
    "alt": ":gorilla:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -224px",
    "size": "1344px 1184px"
  }, "🦍"],
  [{
    "alt": ":orangutan:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -224px",
    "size": "1344px 1184px"
  }, "🦧"],
  [{
    "alt": ":elephant:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -224px",
    "size": "1344px 1184px"
  }, "🐘"],
  [{
    "alt": ":mammoth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -224px",
    "size": "1344px 1184px"
  }, "🦣"],
  [{
    "alt": ":bison:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -224px",
    "size": "1344px 1184px"
  }, "🦬"],
  [{
    "alt": ":hippopotamus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -224px",
    "size": "1344px 1184px"
  }, "🦛"],
  [{
    "alt": ":rhino:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -224px",
    "size": "1344px 1184px"
  }, "🦏"],
  [{
    "alt": ":dromedary_camel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -224px",
    "size": "1344px 1184px"
  }, "🐪"],
  [{
    "alt": ":camel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -224px",
    "size": "1344px 1184px"
  }, "🐫"],
  [{
    "alt": ":giraffe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -224px",
    "size": "1344px 1184px"
  }, "🦒"],
  [{
    "alt": ":kangaroo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -224px",
    "size": "1344px 1184px"
  }, "🦘"],
  [{
    "alt": ":water_buffalo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -224px",
    "size": "1344px 1184px"
  }, "🐃"],
  [{
    "alt": ":ox:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -224px",
    "size": "1344px 1184px"
  }, "🐂"],
  [{
    "alt": ":cow2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -224px",
    "size": "1344px 1184px"
  }, "🐄"],
  [{
    "alt": ":racehorse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -224px",
    "size": "1344px 1184px"
  }, "🐎"],
  [{
    "alt": ":pig2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -224px",
    "size": "1344px 1184px"
  }, "🐖"],
  [{
    "alt": ":ram:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -224px",
    "size": "1344px 1184px"
  }, "🐏"],
  [{
    "alt": ":sheep:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -224px",
    "size": "1344px 1184px"
  }, "🐑"],
  [{
    "alt": ":llama:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -224px",
    "size": "1344px 1184px"
  }, "🦙"],
  [{
    "alt": ":goat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -224px",
    "size": "1344px 1184px"
  }, "🐐"],
  [{
    "alt": ":deer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -224px",
    "size": "1344px 1184px"
  }, "🦌"],
  [{
    "alt": ":dog2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -224px",
    "size": "1344px 1184px"
  }, "🐕"],
  [{
    "alt": ":poodle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -224px",
    "size": "1344px 1184px"
  }, "🐩"],
  [{
    "alt": ":guide_dog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -224px",
    "size": "1344px 1184px"
  }, "🦮"],
  [{
    "alt": ":service_dog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -224px",
    "size": "1344px 1184px"
  }, "🐕‍🦺"],
  [{
    "alt": ":cat2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -224px",
    "size": "1344px 1184px"
  }, "🐈"],
  [{
    "alt": ":black_cat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -224px",
    "size": "1344px 1184px"
  }, "🐈‍⬛"],
  [{
    "alt": ":rooster:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -224px",
    "size": "1344px 1184px"
  }, "🐓"],
  [{
    "alt": ":turkey:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -224px",
    "size": "1344px 1184px"
  }, "🦃"],
  [{
    "alt": ":peacock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -224px",
    "size": "1344px 1184px"
  }, "🦚"],
  [{
    "alt": ":parrot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -224px",
    "size": "1344px 1184px"
  }, "🦜"],
  [{
    "alt": ":swan:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -224px",
    "size": "1344px 1184px"
  }, "🦢"],
  [{
    "alt": ":flamingo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -224px",
    "size": "1344px 1184px"
  }, "🦩"],
  [{
    "alt": ":dove:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -224px",
    "size": "1344px 1184px"
  }, "🕊️"],
  [{
    "alt": ":rabbit2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -224px",
    "size": "1344px 1184px"
  }, "🐇"],
  [{
    "alt": ":raccoon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -224px",
    "size": "1344px 1184px"
  }, "🦝"],
  [{
    "alt": ":skunk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -224px",
    "size": "1344px 1184px"
  }, "🦨"],
  [{
    "alt": ":badger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -224px",
    "size": "1344px 1184px"
  }, "🦡"],
  [{
    "alt": ":beaver:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -256px",
    "size": "1344px 1184px"
  }, "🦫"],
  [{
    "alt": ":otter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -256px",
    "size": "1344px 1184px"
  }, "🦦"],
  [{
    "alt": ":sloth:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -256px",
    "size": "1344px 1184px"
  }, "🦥"],
  [{
    "alt": ":mouse2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -256px",
    "size": "1344px 1184px"
  }, "🐁"],
  [{
    "alt": ":rat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -256px",
    "size": "1344px 1184px"
  }, "🐀"],
  [{
    "alt": ":chipmunk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -256px",
    "size": "1344px 1184px"
  }, "🐿️"],
  [{
    "alt": ":hedgehog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -256px",
    "size": "1344px 1184px"
  }, "🦔"],
  [{
    "alt": ":feet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -256px",
    "size": "1344px 1184px"
  }, "🐾"],
  [{
    "alt": ":dragon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -256px",
    "size": "1344px 1184px"
  }, "🐉"],
  [{
    "alt": ":dragon_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -256px",
    "size": "1344px 1184px"
  }, "🐲"],
  [{
    "alt": ":cactus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -256px",
    "size": "1344px 1184px"
  }, "🌵"],
  [{
    "alt": ":christmas_tree:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -256px",
    "size": "1344px 1184px"
  }, "🎄"],
  [{
    "alt": ":evergreen_tree:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -256px",
    "size": "1344px 1184px"
  }, "🌲"],
  [{
    "alt": ":deciduous_tree:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -256px",
    "size": "1344px 1184px"
  }, "🌳"],
  [{
    "alt": ":palm_tree:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -256px",
    "size": "1344px 1184px"
  }, "🌴"],
  [{
    "alt": ":seedling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -256px",
    "size": "1344px 1184px"
  }, "🌱"],
  [{
    "alt": ":herb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -256px",
    "size": "1344px 1184px"
  }, "🌿"],
  [{
    "alt": ":shamrock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -256px",
    "size": "1344px 1184px"
  }, "☘️"],
  [{
    "alt": ":four_leaf_clover:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -256px",
    "size": "1344px 1184px"
  }, "🍀"],
  [{
    "alt": ":bamboo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -256px",
    "size": "1344px 1184px"
  }, "🎍"],
  [{
    "alt": ":tanabata_tree:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -256px",
    "size": "1344px 1184px"
  }, "🎋"],
  [{
    "alt": ":leaves:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -256px",
    "size": "1344px 1184px"
  }, "🍃"],
  [{
    "alt": ":fallen_leaf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -256px",
    "size": "1344px 1184px"
  }, "🍂"],
  [{
    "alt": ":maple_leaf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -256px",
    "size": "1344px 1184px"
  }, "🍁"],
  [{
    "alt": ":feather:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -256px",
    "size": "1344px 1184px"
  }, "🪶"],
  [{
    "alt": ":mushroom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -256px",
    "size": "1344px 1184px"
  }, "🍄"],
  [{
    "alt": ":shell:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -256px",
    "size": "1344px 1184px"
  }, "🐚"],
  [{
    "alt": ":rock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -256px",
    "size": "1344px 1184px"
  }, "🪨"],
  [{
    "alt": ":wood:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -256px",
    "size": "1344px 1184px"
  }, "🪵"],
  [{
    "alt": ":ear_of_rice:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -256px",
    "size": "1344px 1184px"
  }, "🌾"],
  [{
    "alt": ":potted_plant:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -256px",
    "size": "1344px 1184px"
  }, "🪴"],
  [{
    "alt": ":bouquet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -256px",
    "size": "1344px 1184px"
  }, "💐"],
  [{
    "alt": ":tulip:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -256px",
    "size": "1344px 1184px"
  }, "🌷"],
  [{
    "alt": ":rose:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -256px",
    "size": "1344px 1184px"
  }, "🌹"],
  [{
    "alt": ":wilted_rose:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -256px",
    "size": "1344px 1184px"
  }, "🥀"],
  [{
    "alt": ":hibiscus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -256px",
    "size": "1344px 1184px"
  }, "🌺"],
  [{
    "alt": ":cherry_blossom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -256px",
    "size": "1344px 1184px"
  }, "🌸"],
  [{
    "alt": ":blossom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -256px",
    "size": "1344px 1184px"
  }, "🌼"],
  [{
    "alt": ":sunflower:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -256px",
    "size": "1344px 1184px"
  }, "🌻"],
  [{
    "alt": ":sun_with_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -256px",
    "size": "1344px 1184px"
  }, "🌞"],
  [{
    "alt": ":full_moon_with_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -256px",
    "size": "1344px 1184px"
  }, "🌝"],
  [{
    "alt": ":first_quarter_moon_with_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -256px",
    "size": "1344px 1184px"
  }, "🌛"],
  [{
    "alt": ":last_quarter_moon_with_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -288px",
    "size": "1344px 1184px"
  }, "🌜"],
  [{
    "alt": ":new_moon_with_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -288px",
    "size": "1344px 1184px"
  }, "🌚"],
  [{
    "alt": ":full_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -288px",
    "size": "1344px 1184px"
  }, "🌕"],
  [{
    "alt": ":waning_gibbous_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -288px",
    "size": "1344px 1184px"
  }, "🌖"],
  [{
    "alt": ":last_quarter_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -288px",
    "size": "1344px 1184px"
  }, "🌗"],
  [{
    "alt": ":waning_crescent_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -288px",
    "size": "1344px 1184px"
  }, "🌘"],
  [{
    "alt": ":new_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -288px",
    "size": "1344px 1184px"
  }, "🌑"],
  [{
    "alt": ":waxing_crescent_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -288px",
    "size": "1344px 1184px"
  }, "🌒"],
  [{
    "alt": ":first_quarter_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -288px",
    "size": "1344px 1184px"
  }, "🌓"],
  [{
    "alt": ":waxing_gibbous_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -288px",
    "size": "1344px 1184px"
  }, "🌔"],
  [{
    "alt": ":crescent_moon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -288px",
    "size": "1344px 1184px"
  }, "🌙"],
  [{
    "alt": ":earth_americas:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -288px",
    "size": "1344px 1184px"
  }, "🌎"],
  [{
    "alt": ":earth_africa:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -288px",
    "size": "1344px 1184px"
  }, "🌍"],
  [{
    "alt": ":earth_asia:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -288px",
    "size": "1344px 1184px"
  }, "🌏"],
  [{
    "alt": ":ringed_planet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -288px",
    "size": "1344px 1184px"
  }, "🪐"],
  [{
    "alt": ":dizzy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -288px",
    "size": "1344px 1184px"
  }, "💫"],
  [{
    "alt": ":star:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -288px",
    "size": "1344px 1184px"
  }, "⭐"],
  [{
    "alt": ":star2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -288px",
    "size": "1344px 1184px"
  }, "🌟"],
  [{
    "alt": ":sparkles:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -288px",
    "size": "1344px 1184px"
  }, "✨"],
  [{
    "alt": ":zap:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -288px",
    "size": "1344px 1184px"
  }, "⚡"],
  [{
    "alt": ":comet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -288px",
    "size": "1344px 1184px"
  }, "☄️"],
  [{
    "alt": ":boom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -288px",
    "size": "1344px 1184px"
  }, "💥"],
  [{
    "alt": ":fire:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -288px",
    "size": "1344px 1184px"
  }, "🔥"],
  [{
    "alt": ":cloud_tornado:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -288px",
    "size": "1344px 1184px"
  }, "🌪️"],
  [{
    "alt": ":rainbow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -288px",
    "size": "1344px 1184px"
  }, "🌈"],
  [{
    "alt": ":sunny:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -288px",
    "size": "1344px 1184px"
  }, "☀️"],
  [{
    "alt": ":white_sun_small_cloud:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -288px",
    "size": "1344px 1184px"
  }, "🌤️"],
  [{
    "alt": ":partly_sunny:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -288px",
    "size": "1344px 1184px"
  }, "⛅"],
  [{
    "alt": ":white_sun_cloud:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -288px",
    "size": "1344px 1184px"
  }, "🌥️"],
  [{
    "alt": ":cloud:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -288px",
    "size": "1344px 1184px"
  }, "☁️"],
  [{
    "alt": ":white_sun_rain_cloud:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -288px",
    "size": "1344px 1184px"
  }, "🌦️"],
  [{
    "alt": ":cloud_rain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -288px",
    "size": "1344px 1184px"
  }, "🌧️"],
  [{
    "alt": ":thunder_cloud_rain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -288px",
    "size": "1344px 1184px"
  }, "⛈️"],
  [{
    "alt": ":cloud_lightning:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -288px",
    "size": "1344px 1184px"
  }, "🌩️"],
  [{
    "alt": ":cloud_snow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -288px",
    "size": "1344px 1184px"
  }, "🌨️"],
  [{
    "alt": ":snowflake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -288px",
    "size": "1344px 1184px"
  }, "❄️"],
  [{
    "alt": ":snowman2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -288px",
    "size": "1344px 1184px"
  }, "☃️"],
  [{
    "alt": ":snowman:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -288px",
    "size": "1344px 1184px"
  }, "⛄"],
  [{
    "alt": ":wind_blowing_face:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -288px",
    "size": "1344px 1184px"
  }, "🌬️"],
  [{
    "alt": ":dash:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -288px",
    "size": "1344px 1184px"
  }, "💨"],
  [{
    "alt": ":droplet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -288px",
    "size": "1344px 1184px"
  }, "💧"],
  [{
    "alt": ":sweat_drops:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -288px",
    "size": "1344px 1184px"
  }, "💦"],
  [{
    "alt": ":umbrella:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -320px",
    "size": "1344px 1184px"
  }, "☔"],
  [{
    "alt": ":umbrella2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -320px",
    "size": "1344px 1184px"
  }, "☂️"],
  [{
    "alt": ":ocean:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -320px",
    "size": "1344px 1184px"
  }, "🌊"],
  [{
    "alt": ":fog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -320px",
    "size": "1344px 1184px"
  }, "🌫️"],
  ["Food", "separator"],
  [{
    "alt": ":green_apple:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -320px",
    "size": "1344px 1184px"
  }, "🍏"],
  [{
    "alt": ":apple:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -320px",
    "size": "1344px 1184px"
  }, "🍎"],
  [{
    "alt": ":pear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -320px",
    "size": "1344px 1184px"
  }, "🍐"],
  [{
    "alt": ":tangerine:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -320px",
    "size": "1344px 1184px"
  }, "🍊"],
  [{
    "alt": ":lemon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -320px",
    "size": "1344px 1184px"
  }, "🍋"],
  [{
    "alt": ":banana:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -320px",
    "size": "1344px 1184px"
  }, "🍌"],
  [{
    "alt": ":watermelon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -320px",
    "size": "1344px 1184px"
  }, "🍉"],
  [{
    "alt": ":grapes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -320px",
    "size": "1344px 1184px"
  }, "🍇"],
  [{
    "alt": ":blueberries:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -320px",
    "size": "1344px 1184px"
  }, "🫐"],
  [{
    "alt": ":strawberry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -320px",
    "size": "1344px 1184px"
  }, "🍓"],
  [{
    "alt": ":melon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -320px",
    "size": "1344px 1184px"
  }, "🍈"],
  [{
    "alt": ":cherries:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -320px",
    "size": "1344px 1184px"
  }, "🍒"],
  [{
    "alt": ":peach:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -320px",
    "size": "1344px 1184px"
  }, "🍑"],
  [{
    "alt": ":mango:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -320px",
    "size": "1344px 1184px"
  }, "🥭"],
  [{
    "alt": ":pineapple:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -320px",
    "size": "1344px 1184px"
  }, "🍍"],
  [{
    "alt": ":coconut:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -320px",
    "size": "1344px 1184px"
  }, "🥥"],
  [{
    "alt": ":kiwi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -320px",
    "size": "1344px 1184px"
  }, "🥝"],
  [{
    "alt": ":tomato:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -320px",
    "size": "1344px 1184px"
  }, "🍅"],
  [{
    "alt": ":eggplant:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -320px",
    "size": "1344px 1184px"
  }, "🍆"],
  [{
    "alt": ":avocado:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -320px",
    "size": "1344px 1184px"
  }, "🥑"],
  [{
    "alt": ":olive:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -320px",
    "size": "1344px 1184px"
  }, "🫒"],
  [{
    "alt": ":broccoli:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -320px",
    "size": "1344px 1184px"
  }, "🥦"],
  [{
    "alt": ":leafy_green:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -320px",
    "size": "1344px 1184px"
  }, "🥬"],
  [{
    "alt": ":bell_pepper:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -320px",
    "size": "1344px 1184px"
  }, "🫑"],
  [{
    "alt": ":cucumber:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -320px",
    "size": "1344px 1184px"
  }, "🥒"],
  [{
    "alt": ":hot_pepper:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -320px",
    "size": "1344px 1184px"
  }, "🌶️"],
  [{
    "alt": ":corn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -320px",
    "size": "1344px 1184px"
  }, "🌽"],
  [{
    "alt": ":carrot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -320px",
    "size": "1344px 1184px"
  }, "🥕"],
  [{
    "alt": ":garlic:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -320px",
    "size": "1344px 1184px"
  }, "🧄"],
  [{
    "alt": ":onion:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -320px",
    "size": "1344px 1184px"
  }, "🧅"],
  [{
    "alt": ":potato:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -320px",
    "size": "1344px 1184px"
  }, "🥔"],
  [{
    "alt": ":sweet_potato:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -320px",
    "size": "1344px 1184px"
  }, "🍠"],
  [{
    "alt": ":croissant:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -320px",
    "size": "1344px 1184px"
  }, "🥐"],
  [{
    "alt": ":bagel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -320px",
    "size": "1344px 1184px"
  }, "🥯"],
  [{
    "alt": ":bread:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -320px",
    "size": "1344px 1184px"
  }, "🍞"],
  [{
    "alt": ":french_bread:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -320px",
    "size": "1344px 1184px"
  }, "🥖"],
  [{
    "alt": ":flatbread:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -320px",
    "size": "1344px 1184px"
  }, "🫓"],
  [{
    "alt": ":pretzel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -320px",
    "size": "1344px 1184px"
  }, "🥨"],
  [{
    "alt": ":cheese:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -352px",
    "size": "1344px 1184px"
  }, "🧀"],
  [{
    "alt": ":egg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -352px",
    "size": "1344px 1184px"
  }, "🥚"],
  [{
    "alt": ":cooking:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -352px",
    "size": "1344px 1184px"
  }, "🍳"],
  [{
    "alt": ":butter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -352px",
    "size": "1344px 1184px"
  }, "🧈"],
  [{
    "alt": ":pancakes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -352px",
    "size": "1344px 1184px"
  }, "🥞"],
  [{
    "alt": ":waffle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -352px",
    "size": "1344px 1184px"
  }, "🧇"],
  [{
    "alt": ":bacon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -352px",
    "size": "1344px 1184px"
  }, "🥓"],
  [{
    "alt": ":cut_of_meat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -352px",
    "size": "1344px 1184px"
  }, "🥩"],
  [{
    "alt": ":poultry_leg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -352px",
    "size": "1344px 1184px"
  }, "🍗"],
  [{
    "alt": ":meat_on_bone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -352px",
    "size": "1344px 1184px"
  }, "🍖"],
  [{
    "alt": ":hotdog:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -352px",
    "size": "1344px 1184px"
  }, "🌭"],
  [{
    "alt": ":hamburger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -352px",
    "size": "1344px 1184px"
  }, "🍔"],
  [{
    "alt": ":fries:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -352px",
    "size": "1344px 1184px"
  }, "🍟"],
  [{
    "alt": ":pizza:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -352px",
    "size": "1344px 1184px"
  }, "🍕"],
  [{
    "alt": ":sandwich:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -352px",
    "size": "1344px 1184px"
  }, "🥪"],
  [{
    "alt": ":stuffed_flatbread:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -352px",
    "size": "1344px 1184px"
  }, "🥙"],
  [{
    "alt": ":falafel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -352px",
    "size": "1344px 1184px"
  }, "🧆"],
  [{
    "alt": ":taco:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -352px",
    "size": "1344px 1184px"
  }, "🌮"],
  [{
    "alt": ":burrito:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -352px",
    "size": "1344px 1184px"
  }, "🌯"],
  [{
    "alt": ":tamale:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -352px",
    "size": "1344px 1184px"
  }, "🫔"],
  [{
    "alt": ":salad:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -352px",
    "size": "1344px 1184px"
  }, "🥗"],
  [{
    "alt": ":shallow_pan_of_food:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -352px",
    "size": "1344px 1184px"
  }, "🥘"],
  [{
    "alt": ":fondue:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -352px",
    "size": "1344px 1184px"
  }, "🫕"],
  [{
    "alt": ":canned_food:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -352px",
    "size": "1344px 1184px"
  }, "🥫"],
  [{
    "alt": ":spaghetti:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -352px",
    "size": "1344px 1184px"
  }, "🍝"],
  [{
    "alt": ":ramen:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -352px",
    "size": "1344px 1184px"
  }, "🍜"],
  [{
    "alt": ":stew:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -352px",
    "size": "1344px 1184px"
  }, "🍲"],
  [{
    "alt": ":curry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -352px",
    "size": "1344px 1184px"
  }, "🍛"],
  [{
    "alt": ":sushi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -352px",
    "size": "1344px 1184px"
  }, "🍣"],
  [{
    "alt": ":bento:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -352px",
    "size": "1344px 1184px"
  }, "🍱"],
  [{
    "alt": ":dumpling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -352px",
    "size": "1344px 1184px"
  }, "🥟"],
  [{
    "alt": ":oyster:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -352px",
    "size": "1344px 1184px"
  }, "🦪"],
  [{
    "alt": ":fried_shrimp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -352px",
    "size": "1344px 1184px"
  }, "🍤"],
  [{
    "alt": ":rice_ball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -352px",
    "size": "1344px 1184px"
  }, "🍙"],
  [{
    "alt": ":rice:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -352px",
    "size": "1344px 1184px"
  }, "🍚"],
  [{
    "alt": ":rice_cracker:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -352px",
    "size": "1344px 1184px"
  }, "🍘"],
  [{
    "alt": ":fish_cake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -352px",
    "size": "1344px 1184px"
  }, "🍥"],
  [{
    "alt": ":fortune_cookie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -352px",
    "size": "1344px 1184px"
  }, "🥠"],
  [{
    "alt": ":moon_cake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -352px",
    "size": "1344px 1184px"
  }, "🥮"],
  [{
    "alt": ":oden:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -352px",
    "size": "1344px 1184px"
  }, "🍢"],
  [{
    "alt": ":dango:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -352px",
    "size": "1344px 1184px"
  }, "🍡"],
  [{
    "alt": ":shaved_ice:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -352px",
    "size": "1344px 1184px"
  }, "🍧"],
  [{
    "alt": ":ice_cream:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -384px",
    "size": "1344px 1184px"
  }, "🍨"],
  [{
    "alt": ":icecream:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -384px",
    "size": "1344px 1184px"
  }, "🍦"],
  [{
    "alt": ":pie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -384px",
    "size": "1344px 1184px"
  }, "🥧"],
  [{
    "alt": ":cupcake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -384px",
    "size": "1344px 1184px"
  }, "🧁"],
  [{
    "alt": ":cake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -384px",
    "size": "1344px 1184px"
  }, "🍰"],
  [{
    "alt": ":birthday:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -384px",
    "size": "1344px 1184px"
  }, "🎂"],
  [{
    "alt": ":custard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -384px",
    "size": "1344px 1184px"
  }, "🍮"],
  [{
    "alt": ":lollipop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -384px",
    "size": "1344px 1184px"
  }, "🍭"],
  [{
    "alt": ":candy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -384px",
    "size": "1344px 1184px"
  }, "🍬"],
  [{
    "alt": ":chocolate_bar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -384px",
    "size": "1344px 1184px"
  }, "🍫"],
  [{
    "alt": ":popcorn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -384px",
    "size": "1344px 1184px"
  }, "🍿"],
  [{
    "alt": ":doughnut:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -384px",
    "size": "1344px 1184px"
  }, "🍩"],
  [{
    "alt": ":cookie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -384px",
    "size": "1344px 1184px"
  }, "🍪"],
  [{
    "alt": ":chestnut:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -384px",
    "size": "1344px 1184px"
  }, "🌰"],
  [{
    "alt": ":peanuts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -384px",
    "size": "1344px 1184px"
  }, "🥜"],
  [{
    "alt": ":honey_pot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -384px",
    "size": "1344px 1184px"
  }, "🍯"],
  [{
    "alt": ":milk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -384px",
    "size": "1344px 1184px"
  }, "🥛"],
  [{
    "alt": ":baby_bottle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -384px",
    "size": "1344px 1184px"
  }, "🍼"],
  [{
    "alt": ":coffee:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -384px",
    "size": "1344px 1184px"
  }, "☕"],
  [{
    "alt": ":tea:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -384px",
    "size": "1344px 1184px"
  }, "🍵"],
  [{
    "alt": ":teapot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -384px",
    "size": "1344px 1184px"
  }, "🫖"],
  [{
    "alt": ":mate:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -384px",
    "size": "1344px 1184px"
  }, "🧉"],
  [{
    "alt": ":bubble_tea:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -384px",
    "size": "1344px 1184px"
  }, "🧋"],
  [{
    "alt": ":beverage_box:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -384px",
    "size": "1344px 1184px"
  }, "🧃"],
  [{
    "alt": ":cup_with_straw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -384px",
    "size": "1344px 1184px"
  }, "🥤"],
  [{
    "alt": ":sake:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -384px",
    "size": "1344px 1184px"
  }, "🍶"],
  [{
    "alt": ":beer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -384px",
    "size": "1344px 1184px"
  }, "🍺"],
  [{
    "alt": ":beers:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -384px",
    "size": "1344px 1184px"
  }, "🍻"],
  [{
    "alt": ":champagne_glass:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -384px",
    "size": "1344px 1184px"
  }, "🥂"],
  [{
    "alt": ":wine_glass:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -384px",
    "size": "1344px 1184px"
  }, "🍷"],
  [{
    "alt": ":tumbler_glass:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -384px",
    "size": "1344px 1184px"
  }, "🥃"],
  [{
    "alt": ":cocktail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -384px",
    "size": "1344px 1184px"
  }, "🍸"],
  [{
    "alt": ":tropical_drink:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -384px",
    "size": "1344px 1184px"
  }, "🍹"],
  [{
    "alt": ":champagne:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -384px",
    "size": "1344px 1184px"
  }, "🍾"],
  [{
    "alt": ":ice_cube:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -384px",
    "size": "1344px 1184px"
  }, "🧊"],
  [{
    "alt": ":spoon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -384px",
    "size": "1344px 1184px"
  }, "🥄"],
  [{
    "alt": ":fork_and_knife:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -384px",
    "size": "1344px 1184px"
  }, "🍴"],
  [{
    "alt": ":fork_knife_plate:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -384px",
    "size": "1344px 1184px"
  }, "🍽️"],
  [{
    "alt": ":bowl_with_spoon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -384px",
    "size": "1344px 1184px"
  }, "🥣"],
  [{
    "alt": ":takeout_box:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -384px",
    "size": "1344px 1184px"
  }, "🥡"],
  [{
    "alt": ":chopsticks:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -384px",
    "size": "1344px 1184px"
  }, "🥢"],
  [{
    "alt": ":salt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -384px",
    "size": "1344px 1184px"
  }, "🧂"],
  ["Activities", "separator"],
  [{
    "alt": ":soccer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -416px",
    "size": "1344px 1184px"
  }, "⚽"],
  [{
    "alt": ":basketball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -416px",
    "size": "1344px 1184px"
  }, "🏀"],
  [{
    "alt": ":football:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -416px",
    "size": "1344px 1184px"
  }, "🏈"],
  [{
    "alt": ":baseball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -416px",
    "size": "1344px 1184px"
  }, "⚾"],
  [{
    "alt": ":softball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -416px",
    "size": "1344px 1184px"
  }, "🥎"],
  [{
    "alt": ":tennis:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -416px",
    "size": "1344px 1184px"
  }, "🎾"],
  [{
    "alt": ":volleyball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -416px",
    "size": "1344px 1184px"
  }, "🏐"],
  [{
    "alt": ":rugby_football:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -416px",
    "size": "1344px 1184px"
  }, "🏉"],
  [{
    "alt": ":flying_disc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -416px",
    "size": "1344px 1184px"
  }, "🥏"],
  [{
    "alt": ":boomerang:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -416px",
    "size": "1344px 1184px"
  }, "🪃"],
  [{
    "alt": ":8ball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -416px",
    "size": "1344px 1184px"
  }, "🎱"],
  [{
    "alt": ":yo_yo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -416px",
    "size": "1344px 1184px"
  }, "🪀"],
  [{
    "alt": ":ping_pong:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -416px",
    "size": "1344px 1184px"
  }, "🏓"],
  [{
    "alt": ":badminton:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -416px",
    "size": "1344px 1184px"
  }, "🏸"],
  [{
    "alt": ":hockey:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -416px",
    "size": "1344px 1184px"
  }, "🏒"],
  [{
    "alt": ":field_hockey:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -416px",
    "size": "1344px 1184px"
  }, "🏑"],
  [{
    "alt": ":lacrosse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -416px",
    "size": "1344px 1184px"
  }, "🥍"],
  [{
    "alt": ":cricket_game:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -416px",
    "size": "1344px 1184px"
  }, "🏏"],
  [{
    "alt": ":goal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -416px",
    "size": "1344px 1184px"
  }, "🥅"],
  [{
    "alt": ":golf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -416px",
    "size": "1344px 1184px"
  }, "⛳"],
  [{
    "alt": ":kite:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -416px",
    "size": "1344px 1184px"
  }, "🪁"],
  [{
    "alt": ":bow_and_arrow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -416px",
    "size": "1344px 1184px"
  }, "🏹"],
  [{
    "alt": ":fishing_pole_and_fish:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -416px",
    "size": "1344px 1184px"
  }, "🎣"],
  [{
    "alt": ":diving_mask:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -416px",
    "size": "1344px 1184px"
  }, "🤿"],
  [{
    "alt": ":boxing_glove:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -416px",
    "size": "1344px 1184px"
  }, "🥊"],
  [{
    "alt": ":martial_arts_uniform:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -416px",
    "size": "1344px 1184px"
  }, "🥋"],
  [{
    "alt": ":running_shirt_with_sash:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -416px",
    "size": "1344px 1184px"
  }, "🎽"],
  [{
    "alt": ":skateboard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -416px",
    "size": "1344px 1184px"
  }, "🛹"],
  [{
    "alt": ":roller_skate:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -416px",
    "size": "1344px 1184px"
  }, "🛼"],
  [{
    "alt": ":sled:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -416px",
    "size": "1344px 1184px"
  }, "🛷"],
  [{
    "alt": ":ice_skate:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -416px",
    "size": "1344px 1184px"
  }, "⛸️"],
  [{
    "alt": ":curling_stone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -416px",
    "size": "1344px 1184px"
  }, "🥌"],
  [{
    "alt": ":ski:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -416px",
    "size": "1344px 1184px"
  }, "🎿"],
  [{
    "alt": ":skier:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -416px",
    "size": "1344px 1184px"
  }, "⛷️"],
  [{
    "alt": ":snowboarder:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -736px",
    "size": "320px 896px"
  }, "🏂"],
  [{
    "alt": ":parachute:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -416px",
    "size": "1344px 1184px"
  }, "🪂"],
  [{
    "alt": ":person_lifting_weights:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -736px",
    "size": "320px 896px"
  }, "🏋️"],
  [{
    "alt": ":woman_lifting_weights:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -736px",
    "size": "320px 896px"
  }, "🏋️‍♀️"],
  [{
    "alt": ":man_lifting_weights:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -736px",
    "size": "320px 896px"
  }, "🏋️‍♂️"],
  [{
    "alt": ":people_wrestling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -416px",
    "size": "1344px 1184px"
  }, "🤼"],
  [{
    "alt": ":women_wrestling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -416px",
    "size": "1344px 1184px"
  }, "🤼‍♀️"],
  [{
    "alt": ":men_wrestling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -416px",
    "size": "1344px 1184px"
  }, "🤼‍♂️"],
  [{
    "alt": ":person_doing_cartwheel:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -736px",
    "size": "320px 896px"
  }, "🤸"],
  [{
    "alt": ":woman_cartwheeling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -736px",
    "size": "320px 896px"
  }, "🤸‍♀️"],
  [{
    "alt": ":man_cartwheeling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -736px",
    "size": "320px 896px"
  }, "🤸‍♂️"],
  [{
    "alt": ":person_bouncing_ball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -736px",
    "size": "320px 896px"
  }, "⛹️"],
  [{
    "alt": ":woman_bouncing_ball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -768px",
    "size": "320px 896px"
  }, "⛹️‍♀️"],
  [{
    "alt": ":man_bouncing_ball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -768px",
    "size": "320px 896px"
  }, "⛹️‍♂️"],
  [{
    "alt": ":person_fencing:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -416px",
    "size": "1344px 1184px"
  }, "🤺"],
  [{
    "alt": ":person_playing_handball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -768px",
    "size": "320px 896px"
  }, "🤾"],
  [{
    "alt": ":woman_playing_handball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -768px",
    "size": "320px 896px"
  }, "🤾‍♀️"],
  [{
    "alt": ":man_playing_handball:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -768px",
    "size": "320px 896px"
  }, "🤾‍♂️"],
  [{
    "alt": ":person_golfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -768px",
    "size": "320px 896px"
  }, "🏌️"],
  [{
    "alt": ":woman_golfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -768px",
    "size": "320px 896px"
  }, "🏌️‍♀️"],
  [{
    "alt": ":man_golfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -768px",
    "size": "320px 896px"
  }, "🏌️‍♂️"],
  [{
    "alt": ":horse_racing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -768px",
    "size": "320px 896px"
  }, "🏇"],
  [{
    "alt": ":person_in_lotus_position:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -768px",
    "size": "320px 896px"
  }, "🧘"],
  [{
    "alt": ":woman_in_lotus_position:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -800px",
    "size": "320px 896px"
  }, "🧘‍♀️"],
  [{
    "alt": ":man_in_lotus_position:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -800px",
    "size": "320px 896px"
  }, "🧘‍♂️"],
  [{
    "alt": ":person_surfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -800px",
    "size": "320px 896px"
  }, "🏄"],
  [{
    "alt": ":woman_surfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -800px",
    "size": "320px 896px"
  }, "🏄‍♀️"],
  [{
    "alt": ":man_surfing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -800px",
    "size": "320px 896px"
  }, "🏄‍♂️"],
  [{
    "alt": ":person_swimming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -800px",
    "size": "320px 896px"
  }, "🏊"],
  [{
    "alt": ":woman_swimming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -800px",
    "size": "320px 896px"
  }, "🏊‍♀️"],
  [{
    "alt": ":man_swimming:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -800px",
    "size": "320px 896px"
  }, "🏊‍♂️"],
  [{
    "alt": ":person_playing_water_polo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -800px",
    "size": "320px 896px"
  }, "🤽"],
  [{
    "alt": ":woman_playing_water_polo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -800px",
    "size": "320px 896px"
  }, "🤽‍♀️"],
  [{
    "alt": ":man_playing_water_polo:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -832px",
    "size": "320px 896px"
  }, "🤽‍♂️"],
  [{
    "alt": ":person_rowing_boat:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -832px",
    "size": "320px 896px"
  }, "🚣"],
  [{
    "alt": ":woman_rowing_boat:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -832px",
    "size": "320px 896px"
  }, "🚣‍♀️"],
  [{
    "alt": ":man_rowing_boat:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -832px",
    "size": "320px 896px"
  }, "🚣‍♂️"],
  [{
    "alt": ":person_climbing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -832px",
    "size": "320px 896px"
  }, "🧗"],
  [{
    "alt": ":woman_climbing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -832px",
    "size": "320px 896px"
  }, "🧗‍♀️"],
  [{
    "alt": ":man_climbing:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -832px",
    "size": "320px 896px"
  }, "🧗‍♂️"],
  [{
    "alt": ":person_mountain_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -832px",
    "size": "320px 896px"
  }, "🚵"],
  [{
    "alt": ":woman_mountain_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-256px -832px",
    "size": "320px 896px"
  }, "🚵‍♀️"],
  [{
    "alt": ":man_mountain_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-288px -832px",
    "size": "320px 896px"
  }, "🚵‍♂️"],
  [{
    "alt": ":person_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "0px -864px",
    "size": "320px 896px"
  }, "🚴"],
  [{
    "alt": ":woman_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-32px -864px",
    "size": "320px 896px"
  }, "🚴‍♀️"],
  [{
    "alt": ":man_biking:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-64px -864px",
    "size": "320px 896px"
  }, "🚴‍♂️"],
  [{
    "alt": ":trophy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -416px",
    "size": "1344px 1184px"
  }, "🏆"],
  [{
    "alt": ":first_place:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -416px",
    "size": "1344px 1184px"
  }, "🥇"],
  [{
    "alt": ":second_place:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -416px",
    "size": "1344px 1184px"
  }, "🥈"],
  [{
    "alt": ":third_place:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -448px",
    "size": "1344px 1184px"
  }, "🥉"],
  [{
    "alt": ":medal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -448px",
    "size": "1344px 1184px"
  }, "🏅"],
  [{
    "alt": ":military_medal:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -448px",
    "size": "1344px 1184px"
  }, "🎖️"],
  [{
    "alt": ":rosette:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -448px",
    "size": "1344px 1184px"
  }, "🏵️"],
  [{
    "alt": ":reminder_ribbon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -448px",
    "size": "1344px 1184px"
  }, "🎗️"],
  [{
    "alt": ":ticket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -448px",
    "size": "1344px 1184px"
  }, "🎫"],
  [{
    "alt": ":tickets:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -448px",
    "size": "1344px 1184px"
  }, "🎟️"],
  [{
    "alt": ":circus_tent:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -448px",
    "size": "1344px 1184px"
  }, "🎪"],
  [{
    "alt": ":person_juggling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-96px -864px",
    "size": "320px 896px"
  }, "🤹"],
  [{
    "alt": ":woman_juggling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-128px -864px",
    "size": "320px 896px"
  }, "🤹‍♀️"],
  [{
    "alt": ":man_juggling:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-160px -864px",
    "size": "320px 896px"
  }, "🤹‍♂️"],
  [{
    "alt": ":performing_arts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -448px",
    "size": "1344px 1184px"
  }, "🎭"],
  [{
    "alt": ":ballet_shoes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -448px",
    "size": "1344px 1184px"
  }, "🩰"],
  [{
    "alt": ":art:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -448px",
    "size": "1344px 1184px"
  }, "🎨"],
  [{
    "alt": ":clapper:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -448px",
    "size": "1344px 1184px"
  }, "🎬"],
  [{
    "alt": ":microphone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -448px",
    "size": "1344px 1184px"
  }, "🎤"],
  [{
    "alt": ":headphones:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -448px",
    "size": "1344px 1184px"
  }, "🎧"],
  [{
    "alt": ":musical_score:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -448px",
    "size": "1344px 1184px"
  }, "🎼"],
  [{
    "alt": ":musical_keyboard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -448px",
    "size": "1344px 1184px"
  }, "🎹"],
  [{
    "alt": ":drum:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -448px",
    "size": "1344px 1184px"
  }, "🥁"],
  [{
    "alt": ":long_drum:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -448px",
    "size": "1344px 1184px"
  }, "🪘"],
  [{
    "alt": ":saxophone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -448px",
    "size": "1344px 1184px"
  }, "🎷"],
  [{
    "alt": ":trumpet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -448px",
    "size": "1344px 1184px"
  }, "🎺"],
  [{
    "alt": ":guitar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -448px",
    "size": "1344px 1184px"
  }, "🎸"],
  [{
    "alt": ":banjo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -448px",
    "size": "1344px 1184px"
  }, "🪕"],
  [{
    "alt": ":violin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -448px",
    "size": "1344px 1184px"
  }, "🎻"],
  [{
    "alt": ":accordion:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -448px",
    "size": "1344px 1184px"
  }, "🪗"],
  [{
    "alt": ":game_die:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -448px",
    "size": "1344px 1184px"
  }, "🎲"],
  [{
    "alt": ":chess_pawn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -448px",
    "size": "1344px 1184px"
  }, "♟️"],
  [{
    "alt": ":dart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -448px",
    "size": "1344px 1184px"
  }, "🎯"],
  [{
    "alt": ":bowling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -448px",
    "size": "1344px 1184px"
  }, "🎳"],
  [{
    "alt": ":video_game:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -448px",
    "size": "1344px 1184px"
  }, "🎮"],
  [{
    "alt": ":slot_machine:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -448px",
    "size": "1344px 1184px"
  }, "🎰"],
  [{
    "alt": ":jigsaw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -448px",
    "size": "1344px 1184px"
  }, "🧩"],
  ["Travel", "separator"],
  [{
    "alt": ":red_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -448px",
    "size": "1344px 1184px"
  }, "🚗"],
  [{
    "alt": ":taxi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -448px",
    "size": "1344px 1184px"
  }, "🚕"],
  [{
    "alt": ":blue_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -448px",
    "size": "1344px 1184px"
  }, "🚙"],
  [{
    "alt": ":pickup_truck:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -448px",
    "size": "1344px 1184px"
  }, "🛻"],
  [{
    "alt": ":bus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -448px",
    "size": "1344px 1184px"
  }, "🚌"],
  [{
    "alt": ":trolleybus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -448px",
    "size": "1344px 1184px"
  }, "🚎"],
  [{
    "alt": ":race_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -448px",
    "size": "1344px 1184px"
  }, "🏎️"],
  [{
    "alt": ":police_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -448px",
    "size": "1344px 1184px"
  }, "🚓"],
  [{
    "alt": ":ambulance:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -448px",
    "size": "1344px 1184px"
  }, "🚑"],
  [{
    "alt": ":fire_engine:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -448px",
    "size": "1344px 1184px"
  }, "🚒"],
  [{
    "alt": ":minibus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -448px",
    "size": "1344px 1184px"
  }, "🚐"],
  [{
    "alt": ":truck:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -480px",
    "size": "1344px 1184px"
  }, "🚚"],
  [{
    "alt": ":articulated_lorry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -480px",
    "size": "1344px 1184px"
  }, "🚛"],
  [{
    "alt": ":tractor:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -480px",
    "size": "1344px 1184px"
  }, "🚜"],
  [{
    "alt": ":probing_cane:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -480px",
    "size": "1344px 1184px"
  }, "🦯"],
  [{
    "alt": ":manual_wheelchair:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -480px",
    "size": "1344px 1184px"
  }, "🦽"],
  [{
    "alt": ":motorized_wheelchair:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -480px",
    "size": "1344px 1184px"
  }, "🦼"],
  [{
    "alt": ":scooter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -480px",
    "size": "1344px 1184px"
  }, "🛴"],
  [{
    "alt": ":bike:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -480px",
    "size": "1344px 1184px"
  }, "🚲"],
  [{
    "alt": ":motor_scooter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -480px",
    "size": "1344px 1184px"
  }, "🛵"],
  [{
    "alt": ":motorcycle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -480px",
    "size": "1344px 1184px"
  }, "🏍️"],
  [{
    "alt": ":auto_rickshaw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -480px",
    "size": "1344px 1184px"
  }, "🛺"],
  [{
    "alt": ":rotating_light:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -480px",
    "size": "1344px 1184px"
  }, "🚨"],
  [{
    "alt": ":oncoming_police_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -480px",
    "size": "1344px 1184px"
  }, "🚔"],
  [{
    "alt": ":oncoming_bus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -480px",
    "size": "1344px 1184px"
  }, "🚍"],
  [{
    "alt": ":oncoming_automobile:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -480px",
    "size": "1344px 1184px"
  }, "🚘"],
  [{
    "alt": ":oncoming_taxi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -480px",
    "size": "1344px 1184px"
  }, "🚖"],
  [{
    "alt": ":aerial_tramway:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -480px",
    "size": "1344px 1184px"
  }, "🚡"],
  [{
    "alt": ":mountain_cableway:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -480px",
    "size": "1344px 1184px"
  }, "🚠"],
  [{
    "alt": ":suspension_railway:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -480px",
    "size": "1344px 1184px"
  }, "🚟"],
  [{
    "alt": ":railway_car:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -480px",
    "size": "1344px 1184px"
  }, "🚃"],
  [{
    "alt": ":train:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -480px",
    "size": "1344px 1184px"
  }, "🚋"],
  [{
    "alt": ":mountain_railway:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -480px",
    "size": "1344px 1184px"
  }, "🚞"],
  [{
    "alt": ":monorail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -480px",
    "size": "1344px 1184px"
  }, "🚝"],
  [{
    "alt": ":bullettrain_side:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -480px",
    "size": "1344px 1184px"
  }, "🚄"],
  [{
    "alt": ":bullettrain_front:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -480px",
    "size": "1344px 1184px"
  }, "🚅"],
  [{
    "alt": ":light_rail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -480px",
    "size": "1344px 1184px"
  }, "🚈"],
  [{
    "alt": ":steam_locomotive:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -480px",
    "size": "1344px 1184px"
  }, "🚂"],
  [{
    "alt": ":train2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -480px",
    "size": "1344px 1184px"
  }, "🚆"],
  [{
    "alt": ":metro:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -480px",
    "size": "1344px 1184px"
  }, "🚇"],
  [{
    "alt": ":tram:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -480px",
    "size": "1344px 1184px"
  }, "🚊"],
  [{
    "alt": ":station:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -480px",
    "size": "1344px 1184px"
  }, "🚉"],
  [{
    "alt": ":airplane:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -480px",
    "size": "1344px 1184px"
  }, "✈️"],
  [{
    "alt": ":airplane_departure:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -480px",
    "size": "1344px 1184px"
  }, "🛫"],
  [{
    "alt": ":airplane_arriving:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -480px",
    "size": "1344px 1184px"
  }, "🛬"],
  [{
    "alt": ":airplane_small:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -480px",
    "size": "1344px 1184px"
  }, "🛩️"],
  [{
    "alt": ":seat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -480px",
    "size": "1344px 1184px"
  }, "💺"],
  [{
    "alt": ":satellite_orbital:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -480px",
    "size": "1344px 1184px"
  }, "🛰️"],
  [{
    "alt": ":rocket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -480px",
    "size": "1344px 1184px"
  }, "🚀"],
  [{
    "alt": ":flying_saucer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -480px",
    "size": "1344px 1184px"
  }, "🛸"],
  [{
    "alt": ":helicopter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -480px",
    "size": "1344px 1184px"
  }, "🚁"],
  [{
    "alt": ":canoe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -480px",
    "size": "1344px 1184px"
  }, "🛶"],
  [{
    "alt": ":sailboat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -480px",
    "size": "1344px 1184px"
  }, "⛵"],
  [{
    "alt": ":speedboat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -512px",
    "size": "1344px 1184px"
  }, "🚤"],
  [{
    "alt": ":motorboat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -512px",
    "size": "1344px 1184px"
  }, "🛥️"],
  [{
    "alt": ":cruise_ship:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -512px",
    "size": "1344px 1184px"
  }, "🛳️"],
  [{
    "alt": ":ferry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -512px",
    "size": "1344px 1184px"
  }, "⛴️"],
  [{
    "alt": ":ship:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -512px",
    "size": "1344px 1184px"
  }, "🚢"],
  [{
    "alt": ":anchor:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -512px",
    "size": "1344px 1184px"
  }, "⚓"],
  [{
    "alt": ":fuelpump:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -512px",
    "size": "1344px 1184px"
  }, "⛽"],
  [{
    "alt": ":construction:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -512px",
    "size": "1344px 1184px"
  }, "🚧"],
  [{
    "alt": ":vertical_traffic_light:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -512px",
    "size": "1344px 1184px"
  }, "🚦"],
  [{
    "alt": ":traffic_light:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -512px",
    "size": "1344px 1184px"
  }, "🚥"],
  [{
    "alt": ":busstop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -512px",
    "size": "1344px 1184px"
  }, "🚏"],
  [{
    "alt": ":map:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -512px",
    "size": "1344px 1184px"
  }, "🗺️"],
  [{
    "alt": ":moyai:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -512px",
    "size": "1344px 1184px"
  }, "🗿"],
  [{
    "alt": ":statue_of_liberty:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -512px",
    "size": "1344px 1184px"
  }, "🗽"],
  [{
    "alt": ":tokyo_tower:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -512px",
    "size": "1344px 1184px"
  }, "🗼"],
  [{
    "alt": ":european_castle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -512px",
    "size": "1344px 1184px"
  }, "🏰"],
  [{
    "alt": ":japanese_castle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -512px",
    "size": "1344px 1184px"
  }, "🏯"],
  [{
    "alt": ":stadium:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -512px",
    "size": "1344px 1184px"
  }, "🏟️"],
  [{
    "alt": ":ferris_wheel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -512px",
    "size": "1344px 1184px"
  }, "🎡"],
  [{
    "alt": ":roller_coaster:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -512px",
    "size": "1344px 1184px"
  }, "🎢"],
  [{
    "alt": ":carousel_horse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -512px",
    "size": "1344px 1184px"
  }, "🎠"],
  [{
    "alt": ":fountain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -512px",
    "size": "1344px 1184px"
  }, "⛲"],
  [{
    "alt": ":beach_umbrella:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -512px",
    "size": "1344px 1184px"
  }, "⛱️"],
  [{
    "alt": ":beach:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -512px",
    "size": "1344px 1184px"
  }, "🏖️"],
  [{
    "alt": ":island:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -512px",
    "size": "1344px 1184px"
  }, "🏝️"],
  [{
    "alt": ":desert:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -512px",
    "size": "1344px 1184px"
  }, "🏜️"],
  [{
    "alt": ":volcano:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -512px",
    "size": "1344px 1184px"
  }, "🌋"],
  [{
    "alt": ":mountain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -512px",
    "size": "1344px 1184px"
  }, "⛰️"],
  [{
    "alt": ":mountain_snow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -512px",
    "size": "1344px 1184px"
  }, "🏔️"],
  [{
    "alt": ":mount_fuji:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -512px",
    "size": "1344px 1184px"
  }, "🗻"],
  [{
    "alt": ":camping:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -512px",
    "size": "1344px 1184px"
  }, "🏕️"],
  [{
    "alt": ":tent:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -512px",
    "size": "1344px 1184px"
  }, "⛺"],
  [{
    "alt": ":house:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -512px",
    "size": "1344px 1184px"
  }, "🏠"],
  [{
    "alt": ":house_with_garden:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -512px",
    "size": "1344px 1184px"
  }, "🏡"],
  [{
    "alt": ":homes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -512px",
    "size": "1344px 1184px"
  }, "🏘️"],
  [{
    "alt": ":house_abandoned:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -512px",
    "size": "1344px 1184px"
  }, "🏚️"],
  [{
    "alt": ":hut:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -512px",
    "size": "1344px 1184px"
  }, "🛖"],
  [{
    "alt": ":construction_site:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -512px",
    "size": "1344px 1184px"
  }, "🏗️"],
  [{
    "alt": ":factory:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -512px",
    "size": "1344px 1184px"
  }, "🏭"],
  [{
    "alt": ":office:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -512px",
    "size": "1344px 1184px"
  }, "🏢"],
  [{
    "alt": ":department_store:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -512px",
    "size": "1344px 1184px"
  }, "🏬"],
  [{
    "alt": ":post_office:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -512px",
    "size": "1344px 1184px"
  }, "🏣"],
  [{
    "alt": ":european_post_office:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -544px",
    "size": "1344px 1184px"
  }, "🏤"],
  [{
    "alt": ":hospital:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -544px",
    "size": "1344px 1184px"
  }, "🏥"],
  [{
    "alt": ":bank:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -544px",
    "size": "1344px 1184px"
  }, "🏦"],
  [{
    "alt": ":hotel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -544px",
    "size": "1344px 1184px"
  }, "🏨"],
  [{
    "alt": ":convenience_store:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -544px",
    "size": "1344px 1184px"
  }, "🏪"],
  [{
    "alt": ":school:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -544px",
    "size": "1344px 1184px"
  }, "🏫"],
  [{
    "alt": ":love_hotel:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -544px",
    "size": "1344px 1184px"
  }, "🏩"],
  [{
    "alt": ":wedding:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -544px",
    "size": "1344px 1184px"
  }, "💒"],
  [{
    "alt": ":classical_building:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -544px",
    "size": "1344px 1184px"
  }, "🏛️"],
  [{
    "alt": ":church:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -544px",
    "size": "1344px 1184px"
  }, "⛪"],
  [{
    "alt": ":mosque:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -544px",
    "size": "1344px 1184px"
  }, "🕌"],
  [{
    "alt": ":synagogue:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -544px",
    "size": "1344px 1184px"
  }, "🕍"],
  [{
    "alt": ":hindu_temple:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -544px",
    "size": "1344px 1184px"
  }, "🛕"],
  [{
    "alt": ":kaaba:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -544px",
    "size": "1344px 1184px"
  }, "🕋"],
  [{
    "alt": ":shinto_shrine:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -544px",
    "size": "1344px 1184px"
  }, "⛩️"],
  [{
    "alt": ":railway_track:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -544px",
    "size": "1344px 1184px"
  }, "🛤️"],
  [{
    "alt": ":motorway:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -544px",
    "size": "1344px 1184px"
  }, "🛣️"],
  [{
    "alt": ":japan:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -544px",
    "size": "1344px 1184px"
  }, "🗾"],
  [{
    "alt": ":rice_scene:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -544px",
    "size": "1344px 1184px"
  }, "🎑"],
  [{
    "alt": ":park:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -544px",
    "size": "1344px 1184px"
  }, "🏞️"],
  [{
    "alt": ":sunrise:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -544px",
    "size": "1344px 1184px"
  }, "🌅"],
  [{
    "alt": ":sunrise_over_mountains:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -544px",
    "size": "1344px 1184px"
  }, "🌄"],
  [{
    "alt": ":stars:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -544px",
    "size": "1344px 1184px"
  }, "🌠"],
  [{
    "alt": ":sparkler:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -544px",
    "size": "1344px 1184px"
  }, "🎇"],
  [{
    "alt": ":fireworks:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -544px",
    "size": "1344px 1184px"
  }, "🎆"],
  [{
    "alt": ":city_sunset:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -544px",
    "size": "1344px 1184px"
  }, "🌇"],
  [{
    "alt": ":city_dusk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -544px",
    "size": "1344px 1184px"
  }, "🌆"],
  [{
    "alt": ":cityscape:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -544px",
    "size": "1344px 1184px"
  }, "🏙️"],
  [{
    "alt": ":night_with_stars:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -544px",
    "size": "1344px 1184px"
  }, "🌃"],
  [{
    "alt": ":milky_way:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -544px",
    "size": "1344px 1184px"
  }, "🌌"],
  [{
    "alt": ":bridge_at_night:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -544px",
    "size": "1344px 1184px"
  }, "🌉"],
  [{
    "alt": ":foggy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -544px",
    "size": "1344px 1184px"
  }, "🌁"],
  ["Objects", "separator"],
  [{
    "alt": ":watch:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -544px",
    "size": "1344px 1184px"
  }, "⌚"],
  [{
    "alt": ":mobile_phone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -544px",
    "size": "1344px 1184px"
  }, "📱"],
  [{
    "alt": ":calling:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -544px",
    "size": "1344px 1184px"
  }, "📲"],
  [{
    "alt": ":computer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -544px",
    "size": "1344px 1184px"
  }, "💻"],
  [{
    "alt": ":keyboard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -544px",
    "size": "1344px 1184px"
  }, "⌨️"],
  [{
    "alt": ":desktop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -544px",
    "size": "1344px 1184px"
  }, "🖥️"],
  [{
    "alt": ":printer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -544px",
    "size": "1344px 1184px"
  }, "🖨️"],
  [{
    "alt": ":mouse_three_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -544px",
    "size": "1344px 1184px"
  }, "🖱️"],
  [{
    "alt": ":trackball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -544px",
    "size": "1344px 1184px"
  }, "🖲️"],
  [{
    "alt": ":joystick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -544px",
    "size": "1344px 1184px"
  }, "🕹️"],
  [{
    "alt": ":compression:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -576px",
    "size": "1344px 1184px"
  }, "🗜️"],
  [{
    "alt": ":minidisc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -576px",
    "size": "1344px 1184px"
  }, "💽"],
  [{
    "alt": ":floppy_disk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -576px",
    "size": "1344px 1184px"
  }, "💾"],
  [{
    "alt": ":cd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -576px",
    "size": "1344px 1184px"
  }, "💿"],
  [{
    "alt": ":dvd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -576px",
    "size": "1344px 1184px"
  }, "📀"],
  [{
    "alt": ":vhs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -576px",
    "size": "1344px 1184px"
  }, "📼"],
  [{
    "alt": ":camera:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -576px",
    "size": "1344px 1184px"
  }, "📷"],
  [{
    "alt": ":camera_with_flash:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -576px",
    "size": "1344px 1184px"
  }, "📸"],
  [{
    "alt": ":video_camera:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -576px",
    "size": "1344px 1184px"
  }, "📹"],
  [{
    "alt": ":movie_camera:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -576px",
    "size": "1344px 1184px"
  }, "🎥"],
  [{
    "alt": ":projector:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -576px",
    "size": "1344px 1184px"
  }, "📽️"],
  [{
    "alt": ":film_frames:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -576px",
    "size": "1344px 1184px"
  }, "🎞️"],
  [{
    "alt": ":telephone_receiver:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -576px",
    "size": "1344px 1184px"
  }, "📞"],
  [{
    "alt": ":telephone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -576px",
    "size": "1344px 1184px"
  }, "☎️"],
  [{
    "alt": ":pager:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -576px",
    "size": "1344px 1184px"
  }, "📟"],
  [{
    "alt": ":fax:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -576px",
    "size": "1344px 1184px"
  }, "📠"],
  [{
    "alt": ":tv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -576px",
    "size": "1344px 1184px"
  }, "📺"],
  [{
    "alt": ":radio:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -576px",
    "size": "1344px 1184px"
  }, "📻"],
  [{
    "alt": ":microphone2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -576px",
    "size": "1344px 1184px"
  }, "🎙️"],
  [{
    "alt": ":level_slider:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -576px",
    "size": "1344px 1184px"
  }, "🎚️"],
  [{
    "alt": ":control_knobs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -576px",
    "size": "1344px 1184px"
  }, "🎛️"],
  [{
    "alt": ":compass:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -576px",
    "size": "1344px 1184px"
  }, "🧭"],
  [{
    "alt": ":stopwatch:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -576px",
    "size": "1344px 1184px"
  }, "⏱️"],
  [{
    "alt": ":timer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -576px",
    "size": "1344px 1184px"
  }, "⏲️"],
  [{
    "alt": ":alarm_clock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -576px",
    "size": "1344px 1184px"
  }, "⏰"],
  [{
    "alt": ":clock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -576px",
    "size": "1344px 1184px"
  }, "🕰️"],
  [{
    "alt": ":hourglass:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -576px",
    "size": "1344px 1184px"
  }, "⌛"],
  [{
    "alt": ":hourglass_flowing_sand:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -576px",
    "size": "1344px 1184px"
  }, "⏳"],
  [{
    "alt": ":satellite:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -576px",
    "size": "1344px 1184px"
  }, "📡"],
  [{
    "alt": ":battery:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -576px",
    "size": "1344px 1184px"
  }, "🔋"],
  [{
    "alt": ":electric_plug:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -576px",
    "size": "1344px 1184px"
  }, "🔌"],
  [{
    "alt": ":bulb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -576px",
    "size": "1344px 1184px"
  }, "💡"],
  [{
    "alt": ":flashlight:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -576px",
    "size": "1344px 1184px"
  }, "🔦"],
  [{
    "alt": ":candle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -576px",
    "size": "1344px 1184px"
  }, "🕯️"],
  [{
    "alt": ":diya_lamp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -576px",
    "size": "1344px 1184px"
  }, "🪔"],
  [{
    "alt": ":fire_extinguisher:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -576px",
    "size": "1344px 1184px"
  }, "🧯"],
  [{
    "alt": ":oil:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -576px",
    "size": "1344px 1184px"
  }, "🛢️"],
  [{
    "alt": ":money_with_wings:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -576px",
    "size": "1344px 1184px"
  }, "💸"],
  [{
    "alt": ":dollar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -576px",
    "size": "1344px 1184px"
  }, "💵"],
  [{
    "alt": ":yen:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -576px",
    "size": "1344px 1184px"
  }, "💴"],
  [{
    "alt": ":euro:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -576px",
    "size": "1344px 1184px"
  }, "💶"],
  [{
    "alt": ":pound:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -576px",
    "size": "1344px 1184px"
  }, "💷"],
  [{
    "alt": ":coin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -608px",
    "size": "1344px 1184px"
  }, "🪙"],
  [{
    "alt": ":moneybag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -608px",
    "size": "1344px 1184px"
  }, "💰"],
  [{
    "alt": ":credit_card:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -608px",
    "size": "1344px 1184px"
  }, "💳"],
  [{
    "alt": ":gem:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -608px",
    "size": "1344px 1184px"
  }, "💎"],
  [{
    "alt": ":scales:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -608px",
    "size": "1344px 1184px"
  }, "⚖️"],
  [{
    "alt": ":ladder:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -608px",
    "size": "1344px 1184px"
  }, "🪜"],
  [{
    "alt": ":toolbox:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -608px",
    "size": "1344px 1184px"
  }, "🧰"],
  [{
    "alt": ":screwdriver:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -608px",
    "size": "1344px 1184px"
  }, "🪛"],
  [{
    "alt": ":wrench:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -608px",
    "size": "1344px 1184px"
  }, "🔧"],
  [{
    "alt": ":hammer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -608px",
    "size": "1344px 1184px"
  }, "🔨"],
  [{
    "alt": ":hammer_pick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -608px",
    "size": "1344px 1184px"
  }, "⚒️"],
  [{
    "alt": ":tools:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -608px",
    "size": "1344px 1184px"
  }, "🛠️"],
  [{
    "alt": ":pick:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -608px",
    "size": "1344px 1184px"
  }, "⛏️"],
  [{
    "alt": ":nut_and_bolt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -608px",
    "size": "1344px 1184px"
  }, "🔩"],
  [{
    "alt": ":gear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -608px",
    "size": "1344px 1184px"
  }, "⚙️"],
  [{
    "alt": ":bricks:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -608px",
    "size": "1344px 1184px"
  }, "🧱"],
  [{
    "alt": ":chains:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -608px",
    "size": "1344px 1184px"
  }, "⛓️"],
  [{
    "alt": ":hook:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -608px",
    "size": "1344px 1184px"
  }, "🪝"],
  [{
    "alt": ":knot:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -608px",
    "size": "1344px 1184px"
  }, "🪢"],
  [{
    "alt": ":magnet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -608px",
    "size": "1344px 1184px"
  }, "🧲"],
  [{
    "alt": ":gun:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -608px",
    "size": "1344px 1184px"
  }, "🔫"],
  [{
    "alt": ":bomb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -608px",
    "size": "1344px 1184px"
  }, "💣"],
  [{
    "alt": ":firecracker:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -608px",
    "size": "1344px 1184px"
  }, "🧨"],
  [{
    "alt": ":axe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -608px",
    "size": "1344px 1184px"
  }, "🪓"],
  [{
    "alt": ":carpentry_saw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -608px",
    "size": "1344px 1184px"
  }, "🪚"],
  [{
    "alt": ":knife:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -608px",
    "size": "1344px 1184px"
  }, "🔪"],
  [{
    "alt": ":dagger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -608px",
    "size": "1344px 1184px"
  }, "🗡️"],
  [{
    "alt": ":crossed_swords:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -608px",
    "size": "1344px 1184px"
  }, "⚔️"],
  [{
    "alt": ":shield:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -608px",
    "size": "1344px 1184px"
  }, "🛡️"],
  [{
    "alt": ":smoking:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -608px",
    "size": "1344px 1184px"
  }, "🚬"],
  [{
    "alt": ":coffin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -608px",
    "size": "1344px 1184px"
  }, "⚰️"],
  [{
    "alt": ":headstone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -608px",
    "size": "1344px 1184px"
  }, "🪦"],
  [{
    "alt": ":urn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -608px",
    "size": "1344px 1184px"
  }, "⚱️"],
  [{
    "alt": ":amphora:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -608px",
    "size": "1344px 1184px"
  }, "🏺"],
  [{
    "alt": ":magic_wand:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -608px",
    "size": "1344px 1184px"
  }, "🪄"],
  [{
    "alt": ":crystal_ball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -608px",
    "size": "1344px 1184px"
  }, "🔮"],
  [{
    "alt": ":prayer_beads:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -608px",
    "size": "1344px 1184px"
  }, "📿"],
  [{
    "alt": ":nazar_amulet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -608px",
    "size": "1344px 1184px"
  }, "🧿"],
  [{
    "alt": ":barber:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -608px",
    "size": "1344px 1184px"
  }, "💈"],
  [{
    "alt": ":alembic:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -608px",
    "size": "1344px 1184px"
  }, "⚗️"],
  [{
    "alt": ":telescope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -608px",
    "size": "1344px 1184px"
  }, "🔭"],
  [{
    "alt": ":microscope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -608px",
    "size": "1344px 1184px"
  }, "🔬"],
  [{
    "alt": ":hole:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -640px",
    "size": "1344px 1184px"
  }, "🕳️"],
  [{
    "alt": ":window:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -640px",
    "size": "1344px 1184px"
  }, "🪟"],
  [{
    "alt": ":adhesive_bandage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -640px",
    "size": "1344px 1184px"
  }, "🩹"],
  [{
    "alt": ":stethoscope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -640px",
    "size": "1344px 1184px"
  }, "🩺"],
  [{
    "alt": ":pill:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -640px",
    "size": "1344px 1184px"
  }, "💊"],
  [{
    "alt": ":syringe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -640px",
    "size": "1344px 1184px"
  }, "💉"],
  [{
    "alt": ":drop_of_blood:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -640px",
    "size": "1344px 1184px"
  }, "🩸"],
  [{
    "alt": ":dna:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -640px",
    "size": "1344px 1184px"
  }, "🧬"],
  [{
    "alt": ":microbe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -640px",
    "size": "1344px 1184px"
  }, "🦠"],
  [{
    "alt": ":petri_dish:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -640px",
    "size": "1344px 1184px"
  }, "🧫"],
  [{
    "alt": ":test_tube:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -640px",
    "size": "1344px 1184px"
  }, "🧪"],
  [{
    "alt": ":thermometer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -640px",
    "size": "1344px 1184px"
  }, "🌡️"],
  [{
    "alt": ":mouse_trap:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -640px",
    "size": "1344px 1184px"
  }, "🪤"],
  [{
    "alt": ":broom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -640px",
    "size": "1344px 1184px"
  }, "🧹"],
  [{
    "alt": ":basket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -640px",
    "size": "1344px 1184px"
  }, "🧺"],
  [{
    "alt": ":sewing_needle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -640px",
    "size": "1344px 1184px"
  }, "🪡"],
  [{
    "alt": ":roll_of_paper:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -640px",
    "size": "1344px 1184px"
  }, "🧻"],
  [{
    "alt": ":toilet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -640px",
    "size": "1344px 1184px"
  }, "🚽"],
  [{
    "alt": ":plunger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -640px",
    "size": "1344px 1184px"
  }, "🪠"],
  [{
    "alt": ":bucket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -640px",
    "size": "1344px 1184px"
  }, "🪣"],
  [{
    "alt": ":potable_water:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -640px",
    "size": "1344px 1184px"
  }, "🚰"],
  [{
    "alt": ":shower:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -640px",
    "size": "1344px 1184px"
  }, "🚿"],
  [{
    "alt": ":bathtub:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -640px",
    "size": "1344px 1184px"
  }, "🛁"],
  [{
    "alt": ":bath:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-192px -864px",
    "size": "320px 896px"
  }, "🛀"],
  [{
    "alt": ":toothbrush:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -640px",
    "size": "1344px 1184px"
  }, "🪥"],
  [{
    "alt": ":soap:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -640px",
    "size": "1344px 1184px"
  }, "🧼"],
  [{
    "alt": ":razor:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -640px",
    "size": "1344px 1184px"
  }, "🪒"],
  [{
    "alt": ":sponge:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -640px",
    "size": "1344px 1184px"
  }, "🧽"],
  [{
    "alt": ":squeeze_bottle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -640px",
    "size": "1344px 1184px"
  }, "🧴"],
  [{
    "alt": ":bellhop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -640px",
    "size": "1344px 1184px"
  }, "🛎️"],
  [{
    "alt": ":key:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -640px",
    "size": "1344px 1184px"
  }, "🔑"],
  [{
    "alt": ":key2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -640px",
    "size": "1344px 1184px"
  }, "🗝️"],
  [{
    "alt": ":door:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -640px",
    "size": "1344px 1184px"
  }, "🚪"],
  [{
    "alt": ":chair:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -640px",
    "size": "1344px 1184px"
  }, "🪑"],
  [{
    "alt": ":mirror:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -640px",
    "size": "1344px 1184px"
  }, "🪞"],
  [{
    "alt": ":couch:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -640px",
    "size": "1344px 1184px"
  }, "🛋️"],
  [{
    "alt": ":bed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -640px",
    "size": "1344px 1184px"
  }, "🛏️"],
  [{
    "alt": ":sleeping_accommodation:",
    "src": "/assets/images/scratch/c3df8c474460a13a81ef7078b5c03bff.png",
    "position": "-224px -864px",
    "size": "320px 896px"
  }, "🛌"],
  [{
    "alt": ":teddy_bear:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -640px",
    "size": "1344px 1184px"
  }, "🧸"],
  [{
    "alt": ":frame_photo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -640px",
    "size": "1344px 1184px"
  }, "🖼️"],
  [{
    "alt": ":shopping_bags:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -640px",
    "size": "1344px 1184px"
  }, "🛍️"],
  [{
    "alt": ":shopping_cart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -640px",
    "size": "1344px 1184px"
  }, "🛒"],
  [{
    "alt": ":gift:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -640px",
    "size": "1344px 1184px"
  }, "🎁"],
  [{
    "alt": ":balloon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -640px",
    "size": "1344px 1184px"
  }, "🎈"],
  [{
    "alt": ":flags:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -672px",
    "size": "1344px 1184px"
  }, "🎏"],
  [{
    "alt": ":ribbon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -672px",
    "size": "1344px 1184px"
  }, "🎀"],
  [{
    "alt": ":confetti_ball:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -672px",
    "size": "1344px 1184px"
  }, "🎊"],
  [{
    "alt": ":tada:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -672px",
    "size": "1344px 1184px"
  }, "🎉"],
  [{
    "alt": ":piñata:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -672px",
    "size": "1344px 1184px"
  }, "🪅"],
  [{
    "alt": ":nesting_dolls:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -672px",
    "size": "1344px 1184px"
  }, "🪆"],
  [{
    "alt": ":dolls:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -672px",
    "size": "1344px 1184px"
  }, "🎎"],
  [{
    "alt": ":izakaya_lantern:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -672px",
    "size": "1344px 1184px"
  }, "🏮"],
  [{
    "alt": ":wind_chime:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -672px",
    "size": "1344px 1184px"
  }, "🎐"],
  [{
    "alt": ":red_envelope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -672px",
    "size": "1344px 1184px"
  }, "🧧"],
  [{
    "alt": ":envelope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -672px",
    "size": "1344px 1184px"
  }, "✉️"],
  [{
    "alt": ":envelope_with_arrow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -672px",
    "size": "1344px 1184px"
  }, "📩"],
  [{
    "alt": ":incoming_envelope:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -672px",
    "size": "1344px 1184px"
  }, "📨"],
  [{
    "alt": ":e_mail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -672px",
    "size": "1344px 1184px"
  }, "📧"],
  [{
    "alt": ":love_letter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -672px",
    "size": "1344px 1184px"
  }, "💌"],
  [{
    "alt": ":inbox_tray:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -672px",
    "size": "1344px 1184px"
  }, "📥"],
  [{
    "alt": ":outbox_tray:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -672px",
    "size": "1344px 1184px"
  }, "📤"],
  [{
    "alt": ":package:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -672px",
    "size": "1344px 1184px"
  }, "📦"],
  [{
    "alt": ":label:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -672px",
    "size": "1344px 1184px"
  }, "🏷️"],
  [{
    "alt": ":mailbox_closed:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -672px",
    "size": "1344px 1184px"
  }, "📪"],
  [{
    "alt": ":mailbox:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -672px",
    "size": "1344px 1184px"
  }, "📫"],
  [{
    "alt": ":mailbox_with_mail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -672px",
    "size": "1344px 1184px"
  }, "📬"],
  [{
    "alt": ":mailbox_with_no_mail:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -672px",
    "size": "1344px 1184px"
  }, "📭"],
  [{
    "alt": ":postbox:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -672px",
    "size": "1344px 1184px"
  }, "📮"],
  [{
    "alt": ":postal_horn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -672px",
    "size": "1344px 1184px"
  }, "📯"],
  [{
    "alt": ":placard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -672px",
    "size": "1344px 1184px"
  }, "🪧"],
  [{
    "alt": ":scroll:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -672px",
    "size": "1344px 1184px"
  }, "📜"],
  [{
    "alt": ":page_with_curl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -672px",
    "size": "1344px 1184px"
  }, "📃"],
  [{
    "alt": ":page_facing_up:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -672px",
    "size": "1344px 1184px"
  }, "📄"],
  [{
    "alt": ":bookmark_tabs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -672px",
    "size": "1344px 1184px"
  }, "📑"],
  [{
    "alt": ":receipt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -672px",
    "size": "1344px 1184px"
  }, "🧾"],
  [{
    "alt": ":bar_chart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -672px",
    "size": "1344px 1184px"
  }, "📊"],
  [{
    "alt": ":chart_with_upwards_trend:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -672px",
    "size": "1344px 1184px"
  }, "📈"],
  [{
    "alt": ":chart_with_downwards_trend:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -672px",
    "size": "1344px 1184px"
  }, "📉"],
  [{
    "alt": ":notepad_spiral:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -672px",
    "size": "1344px 1184px"
  }, "🗒️"],
  [{
    "alt": ":calendar_spiral:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -672px",
    "size": "1344px 1184px"
  }, "🗓️"],
  [{
    "alt": ":calendar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -672px",
    "size": "1344px 1184px"
  }, "📆"],
  [{
    "alt": ":date:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -672px",
    "size": "1344px 1184px"
  }, "📅"],
  [{
    "alt": ":wastebasket:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -672px",
    "size": "1344px 1184px"
  }, "🗑️"],
  [{
    "alt": ":card_index:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -672px",
    "size": "1344px 1184px"
  }, "📇"],
  [{
    "alt": ":card_box:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -672px",
    "size": "1344px 1184px"
  }, "🗃️"],
  [{
    "alt": ":ballot_box:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -672px",
    "size": "1344px 1184px"
  }, "🗳️"],
  [{
    "alt": ":file_cabinet:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -704px",
    "size": "1344px 1184px"
  }, "🗄️"],
  [{
    "alt": ":clipboard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -704px",
    "size": "1344px 1184px"
  }, "📋"],
  [{
    "alt": ":file_folder:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -704px",
    "size": "1344px 1184px"
  }, "📁"],
  [{
    "alt": ":open_file_folder:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -704px",
    "size": "1344px 1184px"
  }, "📂"],
  [{
    "alt": ":dividers:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -704px",
    "size": "1344px 1184px"
  }, "🗂️"],
  [{
    "alt": ":newspaper2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -704px",
    "size": "1344px 1184px"
  }, "🗞️"],
  [{
    "alt": ":newspaper:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -704px",
    "size": "1344px 1184px"
  }, "📰"],
  [{
    "alt": ":notebook:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -704px",
    "size": "1344px 1184px"
  }, "📓"],
  [{
    "alt": ":notebook_with_decorative_cover:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -704px",
    "size": "1344px 1184px"
  }, "📔"],
  [{
    "alt": ":ledger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -704px",
    "size": "1344px 1184px"
  }, "📒"],
  [{
    "alt": ":closed_book:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -704px",
    "size": "1344px 1184px"
  }, "📕"],
  [{
    "alt": ":green_book:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -704px",
    "size": "1344px 1184px"
  }, "📗"],
  [{
    "alt": ":blue_book:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -704px",
    "size": "1344px 1184px"
  }, "📘"],
  [{
    "alt": ":orange_book:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -704px",
    "size": "1344px 1184px"
  }, "📙"],
  [{
    "alt": ":books:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -704px",
    "size": "1344px 1184px"
  }, "📚"],
  [{
    "alt": ":book:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -704px",
    "size": "1344px 1184px"
  }, "📖"],
  [{
    "alt": ":bookmark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -704px",
    "size": "1344px 1184px"
  }, "🔖"],
  [{
    "alt": ":safety_pin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -704px",
    "size": "1344px 1184px"
  }, "🧷"],
  [{
    "alt": ":link:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -704px",
    "size": "1344px 1184px"
  }, "🔗"],
  [{
    "alt": ":paperclip:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -704px",
    "size": "1344px 1184px"
  }, "📎"],
  [{
    "alt": ":paperclips:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -704px",
    "size": "1344px 1184px"
  }, "🖇️"],
  [{
    "alt": ":triangular_ruler:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -704px",
    "size": "1344px 1184px"
  }, "📐"],
  [{
    "alt": ":straight_ruler:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -704px",
    "size": "1344px 1184px"
  }, "📏"],
  [{
    "alt": ":abacus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -704px",
    "size": "1344px 1184px"
  }, "🧮"],
  [{
    "alt": ":pushpin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -704px",
    "size": "1344px 1184px"
  }, "📌"],
  [{
    "alt": ":round_pushpin:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -704px",
    "size": "1344px 1184px"
  }, "📍"],
  [{
    "alt": ":scissors:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -704px",
    "size": "1344px 1184px"
  }, "✂️"],
  [{
    "alt": ":pen_ballpoint:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -704px",
    "size": "1344px 1184px"
  }, "🖊️"],
  [{
    "alt": ":pen_fountain:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -704px",
    "size": "1344px 1184px"
  }, "🖋️"],
  [{
    "alt": ":black_nib:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -704px",
    "size": "1344px 1184px"
  }, "✒️"],
  [{
    "alt": ":paintbrush:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -704px",
    "size": "1344px 1184px"
  }, "🖌️"],
  [{
    "alt": ":crayon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -704px",
    "size": "1344px 1184px"
  }, "🖍️"],
  [{
    "alt": ":pencil:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -704px",
    "size": "1344px 1184px"
  }, "📝"],
  [{
    "alt": ":pencil2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -704px",
    "size": "1344px 1184px"
  }, "✏️"],
  [{
    "alt": ":mag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -704px",
    "size": "1344px 1184px"
  }, "🔍"],
  [{
    "alt": ":mag_right:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -704px",
    "size": "1344px 1184px"
  }, "🔎"],
  [{
    "alt": ":lock_with_ink_pen:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -704px",
    "size": "1344px 1184px"
  }, "🔏"],
  [{
    "alt": ":closed_lock_with_key:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -704px",
    "size": "1344px 1184px"
  }, "🔐"],
  [{
    "alt": ":lock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -704px",
    "size": "1344px 1184px"
  }, "🔒"],
  [{
    "alt": ":unlock:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -704px",
    "size": "1344px 1184px"
  }, "🔓"],
  ["Symbols", "separator"],
  [{
    "alt": ":heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -704px",
    "size": "1344px 1184px"
  }, "❤️"],
  [{
    "alt": ":orange_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -704px",
    "size": "1344px 1184px"
  }, "🧡"],
  [{
    "alt": ":yellow_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -736px",
    "size": "1344px 1184px"
  }, "💛"],
  [{
    "alt": ":green_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -736px",
    "size": "1344px 1184px"
  }, "💚"],
  [{
    "alt": ":blue_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -736px",
    "size": "1344px 1184px"
  }, "💙"],
  [{
    "alt": ":purple_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -736px",
    "size": "1344px 1184px"
  }, "💜"],
  [{
    "alt": ":black_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -736px",
    "size": "1344px 1184px"
  }, "🖤"],
  [{
    "alt": ":brown_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -736px",
    "size": "1344px 1184px"
  }, "🤎"],
  [{
    "alt": ":white_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -736px",
    "size": "1344px 1184px"
  }, "🤍"],
  [{
    "alt": ":broken_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -736px",
    "size": "1344px 1184px"
  }, "💔"],
  [{
    "alt": ":heart_exclamation:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -736px",
    "size": "1344px 1184px"
  }, "❣️"],
  [{
    "alt": ":two_hearts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -736px",
    "size": "1344px 1184px"
  }, "💕"],
  [{
    "alt": ":revolving_hearts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -736px",
    "size": "1344px 1184px"
  }, "💞"],
  [{
    "alt": ":heartbeat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -736px",
    "size": "1344px 1184px"
  }, "💓"],
  [{
    "alt": ":heartpulse:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -736px",
    "size": "1344px 1184px"
  }, "💗"],
  [{
    "alt": ":sparkling_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -736px",
    "size": "1344px 1184px"
  }, "💖"],
  [{
    "alt": ":cupid:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -736px",
    "size": "1344px 1184px"
  }, "💘"],
  [{
    "alt": ":gift_heart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -736px",
    "size": "1344px 1184px"
  }, "💝"],
  [{
    "alt": ":heart_decoration:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -736px",
    "size": "1344px 1184px"
  }, "💟"],
  [{
    "alt": ":peace:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -736px",
    "size": "1344px 1184px"
  }, "☮️"],
  [{
    "alt": ":cross:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -736px",
    "size": "1344px 1184px"
  }, "✝️"],
  [{
    "alt": ":star_and_crescent:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -736px",
    "size": "1344px 1184px"
  }, "☪️"],
  [{
    "alt": ":om_symbol:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -736px",
    "size": "1344px 1184px"
  }, "🕉️"],
  [{
    "alt": ":wheel_of_dharma:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -736px",
    "size": "1344px 1184px"
  }, "☸️"],
  [{
    "alt": ":star_of_david:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -736px",
    "size": "1344px 1184px"
  }, "✡️"],
  [{
    "alt": ":six_pointed_star:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -736px",
    "size": "1344px 1184px"
  }, "🔯"],
  [{
    "alt": ":menorah:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -736px",
    "size": "1344px 1184px"
  }, "🕎"],
  [{
    "alt": ":yin_yang:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -736px",
    "size": "1344px 1184px"
  }, "☯️"],
  [{
    "alt": ":orthodox_cross:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -736px",
    "size": "1344px 1184px"
  }, "☦️"],
  [{
    "alt": ":place_of_worship:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -736px",
    "size": "1344px 1184px"
  }, "🛐"],
  [{
    "alt": ":ophiuchus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -736px",
    "size": "1344px 1184px"
  }, "⛎"],
  [{
    "alt": ":aries:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -736px",
    "size": "1344px 1184px"
  }, "♈"],
  [{
    "alt": ":taurus:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -736px",
    "size": "1344px 1184px"
  }, "♉"],
  [{
    "alt": ":gemini:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -736px",
    "size": "1344px 1184px"
  }, "♊"],
  [{
    "alt": ":cancer:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -736px",
    "size": "1344px 1184px"
  }, "♋"],
  [{
    "alt": ":leo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -736px",
    "size": "1344px 1184px"
  }, "♌"],
  [{
    "alt": ":virgo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -736px",
    "size": "1344px 1184px"
  }, "♍"],
  [{
    "alt": ":libra:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -736px",
    "size": "1344px 1184px"
  }, "♎"],
  [{
    "alt": ":scorpius:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -736px",
    "size": "1344px 1184px"
  }, "♏"],
  [{
    "alt": ":sagittarius:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -736px",
    "size": "1344px 1184px"
  }, "♐"],
  [{
    "alt": ":capricorn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -736px",
    "size": "1344px 1184px"
  }, "♑"],
  [{
    "alt": ":aquarius:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -736px",
    "size": "1344px 1184px"
  }, "♒"],
  [{
    "alt": ":pisces:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -736px",
    "size": "1344px 1184px"
  }, "♓"],
  [{
    "alt": ":id:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -736px",
    "size": "1344px 1184px"
  }, "🆔"],
  [{
    "alt": ":atom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -768px",
    "size": "1344px 1184px"
  }, "⚛️"],
  [{
    "alt": ":accept:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -768px",
    "size": "1344px 1184px"
  }, "🉑"],
  [{
    "alt": ":radioactive:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -768px",
    "size": "1344px 1184px"
  }, "☢️"],
  [{
    "alt": ":biohazard:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -768px",
    "size": "1344px 1184px"
  }, "☣️"],
  [{
    "alt": ":mobile_phone_off:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -768px",
    "size": "1344px 1184px"
  }, "📴"],
  [{
    "alt": ":vibration_mode:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -768px",
    "size": "1344px 1184px"
  }, "📳"],
  [{
    "alt": ":u6709:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -768px",
    "size": "1344px 1184px"
  }, "🈶"],
  [{
    "alt": ":u7121:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -768px",
    "size": "1344px 1184px"
  }, "🈚"],
  [{
    "alt": ":u7533:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -768px",
    "size": "1344px 1184px"
  }, "🈸"],
  [{
    "alt": ":u55b6:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -768px",
    "size": "1344px 1184px"
  }, "🈺"],
  [{
    "alt": ":u6708:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -768px",
    "size": "1344px 1184px"
  }, "🈷️"],
  [{
    "alt": ":eight_pointed_black_star:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -768px",
    "size": "1344px 1184px"
  }, "✴️"],
  [{
    "alt": ":vs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -768px",
    "size": "1344px 1184px"
  }, "🆚"],
  [{
    "alt": ":white_flower:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -768px",
    "size": "1344px 1184px"
  }, "💮"],
  [{
    "alt": ":ideograph_advantage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -768px",
    "size": "1344px 1184px"
  }, "🉐"],
  [{
    "alt": ":secret:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -768px",
    "size": "1344px 1184px"
  }, "㊙️"],
  [{
    "alt": ":congratulations:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -768px",
    "size": "1344px 1184px"
  }, "㊗️"],
  [{
    "alt": ":u5408:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -768px",
    "size": "1344px 1184px"
  }, "🈴"],
  [{
    "alt": ":u6e80:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -768px",
    "size": "1344px 1184px"
  }, "🈵"],
  [{
    "alt": ":u5272:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -768px",
    "size": "1344px 1184px"
  }, "🈹"],
  [{
    "alt": ":u7981:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -768px",
    "size": "1344px 1184px"
  }, "🈲"],
  [{
    "alt": ":a:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -768px",
    "size": "1344px 1184px"
  }, "🅰️"],
  [{
    "alt": ":b:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -768px",
    "size": "1344px 1184px"
  }, "🅱️"],
  [{
    "alt": ":ab:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -768px",
    "size": "1344px 1184px"
  }, "🆎"],
  [{
    "alt": ":cl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -768px",
    "size": "1344px 1184px"
  }, "🆑"],
  [{
    "alt": ":o2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -768px",
    "size": "1344px 1184px"
  }, "🅾️"],
  [{
    "alt": ":sos:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -768px",
    "size": "1344px 1184px"
  }, "🆘"],
  [{
    "alt": ":x:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -768px",
    "size": "1344px 1184px"
  }, "❌"],
  [{
    "alt": ":o:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -768px",
    "size": "1344px 1184px"
  }, "⭕"],
  [{
    "alt": ":octagonal_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -768px",
    "size": "1344px 1184px"
  }, "🛑"],
  [{
    "alt": ":no_entry:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -768px",
    "size": "1344px 1184px"
  }, "⛔"],
  [{
    "alt": ":name_badge:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -768px",
    "size": "1344px 1184px"
  }, "📛"],
  [{
    "alt": ":no_entry_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -768px",
    "size": "1344px 1184px"
  }, "🚫"],
  [{
    "alt": ":100:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -768px",
    "size": "1344px 1184px"
  }, "💯"],
  [{
    "alt": ":anger:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -768px",
    "size": "1344px 1184px"
  }, "💢"],
  [{
    "alt": ":hotsprings:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -768px",
    "size": "1344px 1184px"
  }, "♨️"],
  [{
    "alt": ":no_pedestrians:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -768px",
    "size": "1344px 1184px"
  }, "🚷"],
  [{
    "alt": ":do_not_litter:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -768px",
    "size": "1344px 1184px"
  }, "🚯"],
  [{
    "alt": ":no_bicycles:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -768px",
    "size": "1344px 1184px"
  }, "🚳"],
  [{
    "alt": ":non_potable_water:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -768px",
    "size": "1344px 1184px"
  }, "🚱"],
  [{
    "alt": ":underage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -768px",
    "size": "1344px 1184px"
  }, "🔞"],
  [{
    "alt": ":no_mobile_phones:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -768px",
    "size": "1344px 1184px"
  }, "📵"],
  [{
    "alt": ":no_smoking:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -800px",
    "size": "1344px 1184px"
  }, "🚭"],
  [{
    "alt": ":exclamation:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -800px",
    "size": "1344px 1184px"
  }, "❗"],
  [{
    "alt": ":grey_exclamation:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -800px",
    "size": "1344px 1184px"
  }, "❕"],
  [{
    "alt": ":question:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -800px",
    "size": "1344px 1184px"
  }, "❓"],
  [{
    "alt": ":grey_question:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -800px",
    "size": "1344px 1184px"
  }, "❔"],
  [{
    "alt": ":bangbang:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -800px",
    "size": "1344px 1184px"
  }, "‼️"],
  [{
    "alt": ":interrobang:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -800px",
    "size": "1344px 1184px"
  }, "⁉️"],
  [{
    "alt": ":low_brightness:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -800px",
    "size": "1344px 1184px"
  }, "🔅"],
  [{
    "alt": ":high_brightness:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -800px",
    "size": "1344px 1184px"
  }, "🔆"],
  [{
    "alt": ":part_alternation_mark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -800px",
    "size": "1344px 1184px"
  }, "〽️"],
  [{
    "alt": ":warning:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -800px",
    "size": "1344px 1184px"
  }, "⚠️"],
  [{
    "alt": ":children_crossing:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -800px",
    "size": "1344px 1184px"
  }, "🚸"],
  [{
    "alt": ":trident:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -800px",
    "size": "1344px 1184px"
  }, "🔱"],
  [{
    "alt": ":fleur_de_lis:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -800px",
    "size": "1344px 1184px"
  }, "⚜️"],
  [{
    "alt": ":beginner:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -800px",
    "size": "1344px 1184px"
  }, "🔰"],
  [{
    "alt": ":recycle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -800px",
    "size": "1344px 1184px"
  }, "♻️"],
  [{
    "alt": ":white_check_mark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -800px",
    "size": "1344px 1184px"
  }, "✅"],
  [{
    "alt": ":u6307:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -800px",
    "size": "1344px 1184px"
  }, "🈯"],
  [{
    "alt": ":chart:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -800px",
    "size": "1344px 1184px"
  }, "💹"],
  [{
    "alt": ":sparkle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -800px",
    "size": "1344px 1184px"
  }, "❇️"],
  [{
    "alt": ":eight_spoked_asterisk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -800px",
    "size": "1344px 1184px"
  }, "✳️"],
  [{
    "alt": ":negative_squared_cross_mark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -800px",
    "size": "1344px 1184px"
  }, "❎"],
  [{
    "alt": ":globe_with_meridians:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -800px",
    "size": "1344px 1184px"
  }, "🌐"],
  [{
    "alt": ":diamond_shape_with_a_dot_inside:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -800px",
    "size": "1344px 1184px"
  }, "💠"],
  [{
    "alt": ":m:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -800px",
    "size": "1344px 1184px"
  }, "Ⓜ️"],
  [{
    "alt": ":cyclone:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -800px",
    "size": "1344px 1184px"
  }, "🌀"],
  [{
    "alt": ":zzz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -800px",
    "size": "1344px 1184px"
  }, "💤"],
  [{
    "alt": ":atm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -800px",
    "size": "1344px 1184px"
  }, "🏧"],
  [{
    "alt": ":wc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -800px",
    "size": "1344px 1184px"
  }, "🚾"],
  [{
    "alt": ":wheelchair:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -800px",
    "size": "1344px 1184px"
  }, "♿"],
  [{
    "alt": ":parking:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -800px",
    "size": "1344px 1184px"
  }, "🅿️"],
  [{
    "alt": ":u7a7a:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -800px",
    "size": "1344px 1184px"
  }, "🈳"],
  [{
    "alt": ":sa:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -800px",
    "size": "1344px 1184px"
  }, "🈂️"],
  [{
    "alt": ":passport_control:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -800px",
    "size": "1344px 1184px"
  }, "🛂"],
  [{
    "alt": ":customs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -800px",
    "size": "1344px 1184px"
  }, "🛃"],
  [{
    "alt": ":baggage_claim:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -800px",
    "size": "1344px 1184px"
  }, "🛄"],
  [{
    "alt": ":left_luggage:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -800px",
    "size": "1344px 1184px"
  }, "🛅"],
  [{
    "alt": ":elevator:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -800px",
    "size": "1344px 1184px"
  }, "🛗"],
  [{
    "alt": ":mens:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -800px",
    "size": "1344px 1184px"
  }, "🚹"],
  [{
    "alt": ":womens:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -800px",
    "size": "1344px 1184px"
  }, "🚺"],
  [{
    "alt": ":baby_symbol:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -800px",
    "size": "1344px 1184px"
  }, "🚼"],
  [{
    "alt": ":restroom:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -800px",
    "size": "1344px 1184px"
  }, "🚻"],
  [{
    "alt": ":put_litter_in_its_place:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -832px",
    "size": "1344px 1184px"
  }, "🚮"],
  [{
    "alt": ":cinema:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -832px",
    "size": "1344px 1184px"
  }, "🎦"],
  [{
    "alt": ":signal_strength:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -832px",
    "size": "1344px 1184px"
  }, "📶"],
  [{
    "alt": ":koko:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -832px",
    "size": "1344px 1184px"
  }, "🈁"],
  [{
    "alt": ":symbols:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -832px",
    "size": "1344px 1184px"
  }, "🔣"],
  [{
    "alt": ":information_source:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -832px",
    "size": "1344px 1184px"
  }, "ℹ️"],
  [{
    "alt": ":abc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -832px",
    "size": "1344px 1184px"
  }, "🔤"],
  [{
    "alt": ":abcd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -832px",
    "size": "1344px 1184px"
  }, "🔡"],
  [{
    "alt": ":capital_abcd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -832px",
    "size": "1344px 1184px"
  }, "🔠"],
  [{
    "alt": ":ng:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -832px",
    "size": "1344px 1184px"
  }, "🆖"],
  [{
    "alt": ":ok:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -832px",
    "size": "1344px 1184px"
  }, "🆗"],
  [{
    "alt": ":up:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -832px",
    "size": "1344px 1184px"
  }, "🆙"],
  [{
    "alt": ":cool:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -832px",
    "size": "1344px 1184px"
  }, "🆒"],
  [{
    "alt": ":new:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -832px",
    "size": "1344px 1184px"
  }, "🆕"],
  [{
    "alt": ":free:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -832px",
    "size": "1344px 1184px"
  }, "🆓"],
  [{
    "alt": ":zero:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -832px",
    "size": "1344px 1184px"
  }, "0️⃣"],
  [{
    "alt": ":one:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -832px",
    "size": "1344px 1184px"
  }, "1️⃣"],
  [{
    "alt": ":two:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -832px",
    "size": "1344px 1184px"
  }, "2️⃣"],
  [{
    "alt": ":three:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -832px",
    "size": "1344px 1184px"
  }, "3️⃣"],
  [{
    "alt": ":four:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -832px",
    "size": "1344px 1184px"
  }, "4️⃣"],
  [{
    "alt": ":five:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -832px",
    "size": "1344px 1184px"
  }, "5️⃣"],
  [{
    "alt": ":six:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -832px",
    "size": "1344px 1184px"
  }, "6️⃣"],
  [{
    "alt": ":seven:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -832px",
    "size": "1344px 1184px"
  }, "7️⃣"],
  [{
    "alt": ":eight:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -832px",
    "size": "1344px 1184px"
  }, "8️⃣"],
  [{
    "alt": ":nine:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -832px",
    "size": "1344px 1184px"
  }, "9️⃣"],
  [{
    "alt": ":keycap_ten:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -832px",
    "size": "1344px 1184px"
  }, "🔟"],
  [{
    "alt": ":1234:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -832px",
    "size": "1344px 1184px"
  }, "🔢"],
  [{
    "alt": ":hash:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -832px",
    "size": "1344px 1184px"
  }, "#️⃣"],
  [{
    "alt": ":asterisk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -832px",
    "size": "1344px 1184px"
  }, "*️⃣"],
  [{
    "alt": ":eject:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -832px",
    "size": "1344px 1184px"
  }, "⏏️"],
  [{
    "alt": ":arrow_forward:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -832px",
    "size": "1344px 1184px"
  }, "▶️"],
  [{
    "alt": ":pause_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -832px",
    "size": "1344px 1184px"
  }, "⏸️"],
  [{
    "alt": ":play_pause:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -832px",
    "size": "1344px 1184px"
  }, "⏯️"],
  [{
    "alt": ":stop_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -832px",
    "size": "1344px 1184px"
  }, "⏹️"],
  [{
    "alt": ":record_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -832px",
    "size": "1344px 1184px"
  }, "⏺️"],
  [{
    "alt": ":track_next:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -832px",
    "size": "1344px 1184px"
  }, "⏭️"],
  [{
    "alt": ":track_previous:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -832px",
    "size": "1344px 1184px"
  }, "⏮️"],
  [{
    "alt": ":fast_forward:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -832px",
    "size": "1344px 1184px"
  }, "⏩"],
  [{
    "alt": ":rewind:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -832px",
    "size": "1344px 1184px"
  }, "⏪"],
  [{
    "alt": ":arrow_double_up:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -832px",
    "size": "1344px 1184px"
  }, "⏫"],
  [{
    "alt": ":arrow_double_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -832px",
    "size": "1344px 1184px"
  }, "⏬"],
  [{
    "alt": ":arrow_backward:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -832px",
    "size": "1344px 1184px"
  }, "◀️"],
  [{
    "alt": ":arrow_up_small:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -864px",
    "size": "1344px 1184px"
  }, "🔼"],
  [{
    "alt": ":arrow_down_small:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -864px",
    "size": "1344px 1184px"
  }, "🔽"],
  [{
    "alt": ":arrow_right:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -864px",
    "size": "1344px 1184px"
  }, "➡️"],
  [{
    "alt": ":arrow_left:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -864px",
    "size": "1344px 1184px"
  }, "⬅️"],
  [{
    "alt": ":arrow_up:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -864px",
    "size": "1344px 1184px"
  }, "⬆️"],
  [{
    "alt": ":arrow_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -864px",
    "size": "1344px 1184px"
  }, "⬇️"],
  [{
    "alt": ":arrow_upper_right:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -864px",
    "size": "1344px 1184px"
  }, "↗️"],
  [{
    "alt": ":arrow_lower_right:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -864px",
    "size": "1344px 1184px"
  }, "↘️"],
  [{
    "alt": ":arrow_lower_left:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -864px",
    "size": "1344px 1184px"
  }, "↙️"],
  [{
    "alt": ":arrow_upper_left:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -864px",
    "size": "1344px 1184px"
  }, "↖️"],
  [{
    "alt": ":arrow_up_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -864px",
    "size": "1344px 1184px"
  }, "↕️"],
  [{
    "alt": ":left_right_arrow:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -864px",
    "size": "1344px 1184px"
  }, "↔️"],
  [{
    "alt": ":arrow_right_hook:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -864px",
    "size": "1344px 1184px"
  }, "↪️"],
  [{
    "alt": ":leftwards_arrow_with_hook:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -864px",
    "size": "1344px 1184px"
  }, "↩️"],
  [{
    "alt": ":arrow_heading_up:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -864px",
    "size": "1344px 1184px"
  }, "⤴️"],
  [{
    "alt": ":arrow_heading_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -864px",
    "size": "1344px 1184px"
  }, "⤵️"],
  [{
    "alt": ":twisted_rightwards_arrows:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -864px",
    "size": "1344px 1184px"
  }, "🔀"],
  [{
    "alt": ":repeat:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -864px",
    "size": "1344px 1184px"
  }, "🔁"],
  [{
    "alt": ":repeat_one:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -864px",
    "size": "1344px 1184px"
  }, "🔂"],
  [{
    "alt": ":arrows_counterclockwise:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -864px",
    "size": "1344px 1184px"
  }, "🔄"],
  [{
    "alt": ":arrows_clockwise:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -864px",
    "size": "1344px 1184px"
  }, "🔃"],
  [{
    "alt": ":musical_note:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -864px",
    "size": "1344px 1184px"
  }, "🎵"],
  [{
    "alt": ":notes:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -864px",
    "size": "1344px 1184px"
  }, "🎶"],
  [{
    "alt": ":heavy_plus_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -864px",
    "size": "1344px 1184px"
  }, "➕"],
  [{
    "alt": ":heavy_minus_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -864px",
    "size": "1344px 1184px"
  }, "➖"],
  [{
    "alt": ":heavy_division_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -864px",
    "size": "1344px 1184px"
  }, "➗"],
  [{
    "alt": ":heavy_multiplication_x:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -864px",
    "size": "1344px 1184px"
  }, "✖️"],
  [{
    "alt": ":infinity:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -864px",
    "size": "1344px 1184px"
  }, "♾️"],
  [{
    "alt": ":heavy_dollar_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -864px",
    "size": "1344px 1184px"
  }, "💲"],
  [{
    "alt": ":currency_exchange:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -864px",
    "size": "1344px 1184px"
  }, "💱"],
  [{
    "alt": ":tm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -864px",
    "size": "1344px 1184px"
  }, "™️"],
  [{
    "alt": ":copyright:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -864px",
    "size": "1344px 1184px"
  }, "©️"],
  [{
    "alt": ":registered:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -864px",
    "size": "1344px 1184px"
  }, "®️"],
  [{
    "alt": ":wavy_dash:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -864px",
    "size": "1344px 1184px"
  }, "〰️"],
  [{
    "alt": ":curly_loop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -864px",
    "size": "1344px 1184px"
  }, "➰"],
  [{
    "alt": ":loop:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -864px",
    "size": "1344px 1184px"
  }, "➿"],
  [{
    "alt": ":end:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -864px",
    "size": "1344px 1184px"
  }, "🔚"],
  [{
    "alt": ":back:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -864px",
    "size": "1344px 1184px"
  }, "🔙"],
  [{
    "alt": ":on:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -864px",
    "size": "1344px 1184px"
  }, "🔛"],
  [{
    "alt": ":top:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -864px",
    "size": "1344px 1184px"
  }, "🔝"],
  [{
    "alt": ":soon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -864px",
    "size": "1344px 1184px"
  }, "🔜"],
  [{
    "alt": ":heavy_check_mark:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -864px",
    "size": "1344px 1184px"
  }, "✔️"],
  [{
    "alt": ":ballot_box_with_check:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -896px",
    "size": "1344px 1184px"
  }, "☑️"],
  [{
    "alt": ":radio_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -896px",
    "size": "1344px 1184px"
  }, "🔘"],
  [{
    "alt": ":white_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -896px",
    "size": "1344px 1184px"
  }, "⚪"],
  [{
    "alt": ":black_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -896px",
    "size": "1344px 1184px"
  }, "⚫"],
  [{
    "alt": ":red_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -896px",
    "size": "1344px 1184px"
  }, "🔴"],
  [{
    "alt": ":blue_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -896px",
    "size": "1344px 1184px"
  }, "🔵"],
  [{
    "alt": ":brown_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -896px",
    "size": "1344px 1184px"
  }, "🟤"],
  [{
    "alt": ":purple_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -896px",
    "size": "1344px 1184px"
  }, "🟣"],
  [{
    "alt": ":green_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -896px",
    "size": "1344px 1184px"
  }, "🟢"],
  [{
    "alt": ":yellow_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -896px",
    "size": "1344px 1184px"
  }, "🟡"],
  [{
    "alt": ":orange_circle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -896px",
    "size": "1344px 1184px"
  }, "🟠"],
  [{
    "alt": ":small_red_triangle:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -896px",
    "size": "1344px 1184px"
  }, "🔺"],
  [{
    "alt": ":small_red_triangle_down:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -896px",
    "size": "1344px 1184px"
  }, "🔻"],
  [{
    "alt": ":small_orange_diamond:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -896px",
    "size": "1344px 1184px"
  }, "🔸"],
  [{
    "alt": ":small_blue_diamond:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -896px",
    "size": "1344px 1184px"
  }, "🔹"],
  [{
    "alt": ":large_orange_diamond:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -896px",
    "size": "1344px 1184px"
  }, "🔶"],
  [{
    "alt": ":large_blue_diamond:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -896px",
    "size": "1344px 1184px"
  }, "🔷"],
  [{
    "alt": ":white_square_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -896px",
    "size": "1344px 1184px"
  }, "🔳"],
  [{
    "alt": ":black_square_button:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -896px",
    "size": "1344px 1184px"
  }, "🔲"],
  [{
    "alt": ":black_small_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -896px",
    "size": "1344px 1184px"
  }, "▪️"],
  [{
    "alt": ":white_small_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -896px",
    "size": "1344px 1184px"
  }, "▫️"],
  [{
    "alt": ":black_medium_small_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -896px",
    "size": "1344px 1184px"
  }, "◾"],
  [{
    "alt": ":white_medium_small_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -896px",
    "size": "1344px 1184px"
  }, "◽"],
  [{
    "alt": ":black_medium_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -896px",
    "size": "1344px 1184px"
  }, "◼️"],
  [{
    "alt": ":white_medium_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -896px",
    "size": "1344px 1184px"
  }, "◻️"],
  [{
    "alt": ":black_large_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -896px",
    "size": "1344px 1184px"
  }, "⬛"],
  [{
    "alt": ":white_large_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -896px",
    "size": "1344px 1184px"
  }, "⬜"],
  [{
    "alt": ":orange_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -896px",
    "size": "1344px 1184px"
  }, "🟧"],
  [{
    "alt": ":blue_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -896px",
    "size": "1344px 1184px"
  }, "🟦"],
  [{
    "alt": ":red_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -896px",
    "size": "1344px 1184px"
  }, "🟥"],
  [{
    "alt": ":brown_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -896px",
    "size": "1344px 1184px"
  }, "🟫"],
  [{
    "alt": ":purple_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -896px",
    "size": "1344px 1184px"
  }, "🟪"],
  [{
    "alt": ":green_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -896px",
    "size": "1344px 1184px"
  }, "🟩"],
  [{
    "alt": ":yellow_square:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -896px",
    "size": "1344px 1184px"
  }, "🟨"],
  [{
    "alt": ":speaker:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -896px",
    "size": "1344px 1184px"
  }, "🔈"],
  [{
    "alt": ":mute:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -896px",
    "size": "1344px 1184px"
  }, "🔇"],
  [{
    "alt": ":sound:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -896px",
    "size": "1344px 1184px"
  }, "🔉"],
  [{
    "alt": ":loud_sound:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -896px",
    "size": "1344px 1184px"
  }, "🔊"],
  [{
    "alt": ":bell:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -896px",
    "size": "1344px 1184px"
  }, "🔔"],
  [{
    "alt": ":no_bell:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -896px",
    "size": "1344px 1184px"
  }, "🔕"],
  [{
    "alt": ":mega:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -896px",
    "size": "1344px 1184px"
  }, "📣"],
  [{
    "alt": ":loudspeaker:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -896px",
    "size": "1344px 1184px"
  }, "📢"],
  [{
    "alt": ":speech_left:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -928px",
    "size": "1344px 1184px"
  }, "🗨️"],
  [{
    "alt": ":eye_in_speech_bubble:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -928px",
    "size": "1344px 1184px"
  }, "👁‍🗨"],
  [{
    "alt": ":speech_balloon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -928px",
    "size": "1344px 1184px"
  }, "💬"],
  [{
    "alt": ":thought_balloon:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -928px",
    "size": "1344px 1184px"
  }, "💭"],
  [{
    "alt": ":anger_right:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -928px",
    "size": "1344px 1184px"
  }, "🗯️"],
  [{
    "alt": ":spades:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -928px",
    "size": "1344px 1184px"
  }, "♠️"],
  [{
    "alt": ":clubs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -928px",
    "size": "1344px 1184px"
  }, "♣️"],
  [{
    "alt": ":hearts:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -928px",
    "size": "1344px 1184px"
  }, "♥️"],
  [{
    "alt": ":diamonds:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -928px",
    "size": "1344px 1184px"
  }, "♦️"],
  [{
    "alt": ":black_joker:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -928px",
    "size": "1344px 1184px"
  }, "🃏"],
  [{
    "alt": ":flower_playing_cards:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -928px",
    "size": "1344px 1184px"
  }, "🎴"],
  [{
    "alt": ":mahjong:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -928px",
    "size": "1344px 1184px"
  }, "🀄"],
  [{
    "alt": ":clock1:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -928px",
    "size": "1344px 1184px"
  }, "🕐"],
  [{
    "alt": ":clock2:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -928px",
    "size": "1344px 1184px"
  }, "🕑"],
  [{
    "alt": ":clock3:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -928px",
    "size": "1344px 1184px"
  }, "🕒"],
  [{
    "alt": ":clock4:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -928px",
    "size": "1344px 1184px"
  }, "🕓"],
  [{
    "alt": ":clock5:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -928px",
    "size": "1344px 1184px"
  }, "🕔"],
  [{
    "alt": ":clock6:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -928px",
    "size": "1344px 1184px"
  }, "🕕"],
  [{
    "alt": ":clock7:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -928px",
    "size": "1344px 1184px"
  }, "🕖"],
  [{
    "alt": ":clock8:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -928px",
    "size": "1344px 1184px"
  }, "🕗"],
  [{
    "alt": ":clock9:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -928px",
    "size": "1344px 1184px"
  }, "🕘"],
  [{
    "alt": ":clock10:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -928px",
    "size": "1344px 1184px"
  }, "🕙"],
  [{
    "alt": ":clock11:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -928px",
    "size": "1344px 1184px"
  }, "🕚"],
  [{
    "alt": ":clock12:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -928px",
    "size": "1344px 1184px"
  }, "🕛"],
  [{
    "alt": ":clock130:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -928px",
    "size": "1344px 1184px"
  }, "🕜"],
  [{
    "alt": ":clock230:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -928px",
    "size": "1344px 1184px"
  }, "🕝"],
  [{
    "alt": ":clock330:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -928px",
    "size": "1344px 1184px"
  }, "🕞"],
  [{
    "alt": ":clock430:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -928px",
    "size": "1344px 1184px"
  }, "🕟"],
  [{
    "alt": ":clock530:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -928px",
    "size": "1344px 1184px"
  }, "🕠"],
  [{
    "alt": ":clock630:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -928px",
    "size": "1344px 1184px"
  }, "🕡"],
  [{
    "alt": ":clock730:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -928px",
    "size": "1344px 1184px"
  }, "🕢"],
  [{
    "alt": ":clock830:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -928px",
    "size": "1344px 1184px"
  }, "🕣"],
  [{
    "alt": ":clock930:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -928px",
    "size": "1344px 1184px"
  }, "🕤"],
  [{
    "alt": ":clock1030:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -928px",
    "size": "1344px 1184px"
  }, "🕥"],
  [{
    "alt": ":clock1130:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -928px",
    "size": "1344px 1184px"
  }, "🕦"],
  [{
    "alt": ":clock1230:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -928px",
    "size": "1344px 1184px"
  }, "🕧"],
  [{
    "alt": ":female_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -928px",
    "size": "1344px 1184px"
  }, "♀️"],
  [{
    "alt": ":male_sign:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -928px",
    "size": "1344px 1184px"
  }, "♂️"],
  [{
    "alt": ":transgender_symbol:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -928px",
    "size": "1344px 1184px"
  }, "⚧"],
  [{
    "alt": ":medical_symbol:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -928px",
    "size": "1344px 1184px"
  }, "⚕️"],
  [{
    "alt": ":regional_indicator_z:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -928px",
    "size": "1344px 1184px"
  }, "🇿"],
  [{
    "alt": ":regional_indicator_y:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -928px",
    "size": "1344px 1184px"
  }, "🇾"],
  [{
    "alt": ":regional_indicator_x:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -960px",
    "size": "1344px 1184px"
  }, "🇽"],
  [{
    "alt": ":regional_indicator_w:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -960px",
    "size": "1344px 1184px"
  }, "🇼"],
  [{
    "alt": ":regional_indicator_v:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -960px",
    "size": "1344px 1184px"
  }, "🇻"],
  [{
    "alt": ":regional_indicator_u:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -960px",
    "size": "1344px 1184px"
  }, "🇺"],
  [{
    "alt": ":regional_indicator_t:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -960px",
    "size": "1344px 1184px"
  }, "🇹"],
  [{
    "alt": ":regional_indicator_s:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -960px",
    "size": "1344px 1184px"
  }, "🇸"],
  [{
    "alt": ":regional_indicator_r:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -960px",
    "size": "1344px 1184px"
  }, "🇷"],
  [{
    "alt": ":regional_indicator_q:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -960px",
    "size": "1344px 1184px"
  }, "🇶"],
  [{
    "alt": ":regional_indicator_p:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -960px",
    "size": "1344px 1184px"
  }, "🇵"],
  [{
    "alt": ":regional_indicator_o:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -960px",
    "size": "1344px 1184px"
  }, "🇴"],
  [{
    "alt": ":regional_indicator_n:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -960px",
    "size": "1344px 1184px"
  }, "🇳"],
  [{
    "alt": ":regional_indicator_m:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -960px",
    "size": "1344px 1184px"
  }, "🇲"],
  [{
    "alt": ":regional_indicator_l:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -960px",
    "size": "1344px 1184px"
  }, "🇱"],
  [{
    "alt": ":regional_indicator_k:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -960px",
    "size": "1344px 1184px"
  }, "🇰"],
  [{
    "alt": ":regional_indicator_j:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -960px",
    "size": "1344px 1184px"
  }, "🇯"],
  [{
    "alt": ":regional_indicator_i:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -960px",
    "size": "1344px 1184px"
  }, "🇮"],
  [{
    "alt": ":regional_indicator_h:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -960px",
    "size": "1344px 1184px"
  }, "🇭"],
  [{
    "alt": ":regional_indicator_g:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -960px",
    "size": "1344px 1184px"
  }, "🇬"],
  [{
    "alt": ":regional_indicator_f:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -960px",
    "size": "1344px 1184px"
  }, "🇫"],
  [{
    "alt": ":regional_indicator_e:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -960px",
    "size": "1344px 1184px"
  }, "🇪"],
  [{
    "alt": ":regional_indicator_d:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -960px",
    "size": "1344px 1184px"
  }, "🇩"],
  [{
    "alt": ":regional_indicator_c:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -960px",
    "size": "1344px 1184px"
  }, "🇨"],
  [{
    "alt": ":regional_indicator_b:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -960px",
    "size": "1344px 1184px"
  }, "🇧"],
  [{
    "alt": ":regional_indicator_a:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -960px",
    "size": "1344px 1184px"
  }, "🇦"],
  ["Flags", "separator"],
  [{
    "alt": ":flag_white:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -960px",
    "size": "1344px 1184px"
  }, "🏳️"],
  [{
    "alt": ":flag_black:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -960px",
    "size": "1344px 1184px"
  }, "🏴"],
  [{
    "alt": ":checkered_flag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -960px",
    "size": "1344px 1184px"
  }, "🏁"],
  [{
    "alt": ":triangular_flag_on_post:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -960px",
    "size": "1344px 1184px"
  }, "🚩"],
  [{
    "alt": ":rainbow_flag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -960px",
    "size": "1344px 1184px"
  }, "🏳️‍🌈"],
  [{
    "alt": ":transgender_flag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -960px",
    "size": "1344px 1184px"
  }, "🏳️‍⚧️"],
  [{
    "alt": ":pirate_flag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -960px",
    "size": "1344px 1184px"
  }, "🏴‍☠️"],
  [{
    "alt": ":flag_af:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -960px",
    "size": "1344px 1184px"
  }, "🇦🇫"],
  [{
    "alt": ":flag_ax:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -960px",
    "size": "1344px 1184px"
  }, "🇦🇽"],
  [{
    "alt": ":flag_al:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -960px",
    "size": "1344px 1184px"
  }, "🇦🇱"],
  [{
    "alt": ":flag_dz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -960px",
    "size": "1344px 1184px"
  }, "🇩🇿"],
  [{
    "alt": ":flag_as:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -960px",
    "size": "1344px 1184px"
  }, "🇦🇸"],
  [{
    "alt": ":flag_ad:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -960px",
    "size": "1344px 1184px"
  }, "🇦🇩"],
  [{
    "alt": ":flag_ao:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -960px",
    "size": "1344px 1184px"
  }, "🇦🇴"],
  [{
    "alt": ":flag_ai:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -960px",
    "size": "1344px 1184px"
  }, "🇦🇮"],
  [{
    "alt": ":flag_aq:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -960px",
    "size": "1344px 1184px"
  }, "🇦🇶"],
  [{
    "alt": ":flag_ag:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -960px",
    "size": "1344px 1184px"
  }, "🇦🇬"],
  [{
    "alt": ":flag_ar:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -960px",
    "size": "1344px 1184px"
  }, "🇦🇷"],
  [{
    "alt": ":flag_am:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -992px",
    "size": "1344px 1184px"
  }, "🇦🇲"],
  [{
    "alt": ":flag_aw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -992px",
    "size": "1344px 1184px"
  }, "🇦🇼"],
  [{
    "alt": ":flag_au:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -992px",
    "size": "1344px 1184px"
  }, "🇦🇺"],
  [{
    "alt": ":flag_at:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -992px",
    "size": "1344px 1184px"
  }, "🇦🇹"],
  [{
    "alt": ":flag_az:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -992px",
    "size": "1344px 1184px"
  }, "🇦🇿"],
  [{
    "alt": ":flag_bs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -992px",
    "size": "1344px 1184px"
  }, "🇧🇸"],
  [{
    "alt": ":flag_bh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -992px",
    "size": "1344px 1184px"
  }, "🇧🇭"],
  [{
    "alt": ":flag_bd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -992px",
    "size": "1344px 1184px"
  }, "🇧🇩"],
  [{
    "alt": ":flag_bb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -992px",
    "size": "1344px 1184px"
  }, "🇧🇧"],
  [{
    "alt": ":flag_by:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -992px",
    "size": "1344px 1184px"
  }, "🇧🇾"],
  [{
    "alt": ":flag_be:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -992px",
    "size": "1344px 1184px"
  }, "🇧🇪"],
  [{
    "alt": ":flag_bz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -992px",
    "size": "1344px 1184px"
  }, "🇧🇿"],
  [{
    "alt": ":flag_bj:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -992px",
    "size": "1344px 1184px"
  }, "🇧🇯"],
  [{
    "alt": ":flag_bm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -992px",
    "size": "1344px 1184px"
  }, "🇧🇲"],
  [{
    "alt": ":flag_bt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -992px",
    "size": "1344px 1184px"
  }, "🇧🇹"],
  [{
    "alt": ":flag_bo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -992px",
    "size": "1344px 1184px"
  }, "🇧🇴"],
  [{
    "alt": ":flag_ba:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -992px",
    "size": "1344px 1184px"
  }, "🇧🇦"],
  [{
    "alt": ":flag_bw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -992px",
    "size": "1344px 1184px"
  }, "🇧🇼"],
  [{
    "alt": ":flag_br:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -992px",
    "size": "1344px 1184px"
  }, "🇧🇷"],
  [{
    "alt": ":flag_io:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -992px",
    "size": "1344px 1184px"
  }, "🇮🇴"],
  [{
    "alt": ":flag_vg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -992px",
    "size": "1344px 1184px"
  }, "🇻🇬"],
  [{
    "alt": ":flag_bn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -992px",
    "size": "1344px 1184px"
  }, "🇧🇳"],
  [{
    "alt": ":flag_bg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -992px",
    "size": "1344px 1184px"
  }, "🇧🇬"],
  [{
    "alt": ":flag_bf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -992px",
    "size": "1344px 1184px"
  }, "🇧🇫"],
  [{
    "alt": ":flag_bi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -992px",
    "size": "1344px 1184px"
  }, "🇧🇮"],
  [{
    "alt": ":flag_kh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -992px",
    "size": "1344px 1184px"
  }, "🇰🇭"],
  [{
    "alt": ":flag_cm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -992px",
    "size": "1344px 1184px"
  }, "🇨🇲"],
  [{
    "alt": ":flag_ca:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -992px",
    "size": "1344px 1184px"
  }, "🇨🇦"],
  [{
    "alt": ":flag_ic:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -992px",
    "size": "1344px 1184px"
  }, "🇮🇨"],
  [{
    "alt": ":flag_cv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -992px",
    "size": "1344px 1184px"
  }, "🇨🇻"],
  [{
    "alt": ":flag_bq:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -992px",
    "size": "1344px 1184px"
  }, "🇧🇶"],
  [{
    "alt": ":flag_ky:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -992px",
    "size": "1344px 1184px"
  }, "🇰🇾"],
  [{
    "alt": ":flag_cf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -992px",
    "size": "1344px 1184px"
  }, "🇨🇫"],
  [{
    "alt": ":flag_td:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -992px",
    "size": "1344px 1184px"
  }, "🇹🇩"],
  [{
    "alt": ":flag_cl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -992px",
    "size": "1344px 1184px"
  }, "🇨🇱"],
  [{
    "alt": ":flag_cn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -992px",
    "size": "1344px 1184px"
  }, "🇨🇳"],
  [{
    "alt": ":flag_cx:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -992px",
    "size": "1344px 1184px"
  }, "🇨🇽"],
  [{
    "alt": ":flag_cc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -992px",
    "size": "1344px 1184px"
  }, "🇨🇨"],
  [{
    "alt": ":flag_co:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -992px",
    "size": "1344px 1184px"
  }, "🇨🇴"],
  [{
    "alt": ":flag_km:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -992px",
    "size": "1344px 1184px"
  }, "🇰🇲"],
  [{
    "alt": ":flag_cg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -992px",
    "size": "1344px 1184px"
  }, "🇨🇬"],
  [{
    "alt": ":flag_cd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -992px",
    "size": "1344px 1184px"
  }, "🇨🇩"],
  [{
    "alt": ":flag_ck:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇰"],
  [{
    "alt": ":flag_cr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇷"],
  [{
    "alt": ":flag_ci:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇮"],
  [{
    "alt": ":flag_hr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -1024px",
    "size": "1344px 1184px"
  }, "🇭🇷"],
  [{
    "alt": ":flag_cu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇺"],
  [{
    "alt": ":flag_cw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇼"],
  [{
    "alt": ":flag_cy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇾"],
  [{
    "alt": ":flag_cz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -1024px",
    "size": "1344px 1184px"
  }, "🇨🇿"],
  [{
    "alt": ":flag_dk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -1024px",
    "size": "1344px 1184px"
  }, "🇩🇰"],
  [{
    "alt": ":flag_dj:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -1024px",
    "size": "1344px 1184px"
  }, "🇩🇯"],
  [{
    "alt": ":flag_dm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -1024px",
    "size": "1344px 1184px"
  }, "🇩🇲"],
  [{
    "alt": ":flag_do:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -1024px",
    "size": "1344px 1184px"
  }, "🇩🇴"],
  [{
    "alt": ":flag_ec:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇨"],
  [{
    "alt": ":flag_eg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇬"],
  [{
    "alt": ":flag_sv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -1024px",
    "size": "1344px 1184px"
  }, "🇸🇻"],
  [{
    "alt": ":flag_gq:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇶"],
  [{
    "alt": ":flag_er:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇷"],
  [{
    "alt": ":flag_ee:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇪"],
  [{
    "alt": ":flag_et:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇹"],
  [{
    "alt": ":flag_eu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -1024px",
    "size": "1344px 1184px"
  }, "🇪🇺"],
  [{
    "alt": ":flag_fk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -1024px",
    "size": "1344px 1184px"
  }, "🇫🇰"],
  [{
    "alt": ":flag_fo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -1024px",
    "size": "1344px 1184px"
  }, "🇫🇴"],
  [{
    "alt": ":flag_fj:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -1024px",
    "size": "1344px 1184px"
  }, "🇫🇯"],
  [{
    "alt": ":flag_fi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -1024px",
    "size": "1344px 1184px"
  }, "🇫🇮"],
  [{
    "alt": ":flag_fr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -1024px",
    "size": "1344px 1184px"
  }, "🇫🇷"],
  [{
    "alt": ":flag_gf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇫"],
  [{
    "alt": ":flag_pf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -1024px",
    "size": "1344px 1184px"
  }, "🇵🇫"],
  [{
    "alt": ":flag_tf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -1024px",
    "size": "1344px 1184px"
  }, "🇹🇫"],
  [{
    "alt": ":flag_ga:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇦"],
  [{
    "alt": ":flag_gm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇲"],
  [{
    "alt": ":flag_ge:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇪"],
  [{
    "alt": ":flag_de:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -1024px",
    "size": "1344px 1184px"
  }, "🇩🇪"],
  [{
    "alt": ":flag_gh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇭"],
  [{
    "alt": ":flag_gi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇮"],
  [{
    "alt": ":flag_gr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇷"],
  [{
    "alt": ":flag_gl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇱"],
  [{
    "alt": ":flag_gd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇩"],
  [{
    "alt": ":flag_gp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇵"],
  [{
    "alt": ":flag_gu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇺"],
  [{
    "alt": ":flag_gt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇹"],
  [{
    "alt": ":flag_gg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇬"],
  [{
    "alt": ":flag_gn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -1024px",
    "size": "1344px 1184px"
  }, "🇬🇳"],
  [{
    "alt": ":flag_gw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -1056px",
    "size": "1344px 1184px"
  }, "🇬🇼"],
  [{
    "alt": ":flag_gy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -1056px",
    "size": "1344px 1184px"
  }, "🇬🇾"],
  [{
    "alt": ":flag_ht:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -1056px",
    "size": "1344px 1184px"
  }, "🇭🇹"],
  [{
    "alt": ":flag_hn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -1056px",
    "size": "1344px 1184px"
  }, "🇭🇳"],
  [{
    "alt": ":flag_hk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -1056px",
    "size": "1344px 1184px"
  }, "🇭🇰"],
  [{
    "alt": ":flag_hu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -1056px",
    "size": "1344px 1184px"
  }, "🇭🇺"],
  [{
    "alt": ":flag_is:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇸"],
  [{
    "alt": ":flag_in:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇳"],
  [{
    "alt": ":flag_id:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇩"],
  [{
    "alt": ":flag_ir:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇷"],
  [{
    "alt": ":flag_iq:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇶"],
  [{
    "alt": ":flag_ie:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇪"],
  [{
    "alt": ":flag_im:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇲"],
  [{
    "alt": ":flag_il:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇱"],
  [{
    "alt": ":flag_it:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -1056px",
    "size": "1344px 1184px"
  }, "🇮🇹"],
  [{
    "alt": ":flag_jm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -1056px",
    "size": "1344px 1184px"
  }, "🇯🇲"],
  [{
    "alt": ":flag_jp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -1056px",
    "size": "1344px 1184px"
  }, "🇯🇵"],
  [{
    "alt": ":crossed_flags:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -1056px",
    "size": "1344px 1184px"
  }, "🎌"],
  [{
    "alt": ":flag_je:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -1056px",
    "size": "1344px 1184px"
  }, "🇯🇪"],
  [{
    "alt": ":flag_jo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -1056px",
    "size": "1344px 1184px"
  }, "🇯🇴"],
  [{
    "alt": ":flag_kz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -1056px",
    "size": "1344px 1184px"
  }, "🇰🇿"],
  [{
    "alt": ":flag_ke:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -1056px",
    "size": "1344px 1184px"
  }, "🇰🇪"],
  [{
    "alt": ":flag_ki:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -1056px",
    "size": "1344px 1184px"
  }, "🇰🇮"],
  [{
    "alt": ":flag_xk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -1056px",
    "size": "1344px 1184px"
  }, "🇽🇰"],
  [{
    "alt": ":flag_kw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -1056px",
    "size": "1344px 1184px"
  }, "🇰🇼"],
  [{
    "alt": ":flag_kg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -1056px",
    "size": "1344px 1184px"
  }, "🇰🇬"],
  [{
    "alt": ":flag_la:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇦"],
  [{
    "alt": ":flag_lv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇻"],
  [{
    "alt": ":flag_lb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇧"],
  [{
    "alt": ":flag_ls:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇸"],
  [{
    "alt": ":flag_lr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇷"],
  [{
    "alt": ":flag_ly:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇾"],
  [{
    "alt": ":flag_li:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇮"],
  [{
    "alt": ":flag_lt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇹"],
  [{
    "alt": ":flag_lu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -1056px",
    "size": "1344px 1184px"
  }, "🇱🇺"],
  [{
    "alt": ":flag_mo:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇴"],
  [{
    "alt": ":flag_mk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇰"],
  [{
    "alt": ":flag_mg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇬"],
  [{
    "alt": ":flag_mw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇼"],
  [{
    "alt": ":flag_my:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇾"],
  [{
    "alt": ":flag_mv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇻"],
  [{
    "alt": ":flag_ml:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -1056px",
    "size": "1344px 1184px"
  }, "🇲🇱"],
  [{
    "alt": ":flag_mt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇹"],
  [{
    "alt": ":flag_mh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇭"],
  [{
    "alt": ":flag_mq:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇶"],
  [{
    "alt": ":flag_mr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇷"],
  [{
    "alt": ":flag_mu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇺"],
  [{
    "alt": ":flag_yt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -1088px",
    "size": "1344px 1184px"
  }, "🇾🇹"],
  [{
    "alt": ":flag_mx:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇽"],
  [{
    "alt": ":flag_fm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -1088px",
    "size": "1344px 1184px"
  }, "🇫🇲"],
  [{
    "alt": ":flag_md:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇩"],
  [{
    "alt": ":flag_mc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇨"],
  [{
    "alt": ":flag_mn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇳"],
  [{
    "alt": ":flag_me:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇪"],
  [{
    "alt": ":flag_ms:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇸"],
  [{
    "alt": ":flag_ma:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇦"],
  [{
    "alt": ":flag_mz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇿"],
  [{
    "alt": ":flag_mm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇲"],
  [{
    "alt": ":flag_na:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇦"],
  [{
    "alt": ":flag_nr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇷"],
  [{
    "alt": ":flag_np:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇵"],
  [{
    "alt": ":flag_nl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇱"],
  [{
    "alt": ":flag_nc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇨"],
  [{
    "alt": ":flag_nz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇿"],
  [{
    "alt": ":flag_ni:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇮"],
  [{
    "alt": ":flag_ne:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇪"],
  [{
    "alt": ":flag_ng:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇬"],
  [{
    "alt": ":flag_nu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇺"],
  [{
    "alt": ":flag_nf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇫"],
  [{
    "alt": ":flag_kp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -1088px",
    "size": "1344px 1184px"
  }, "🇰🇵"],
  [{
    "alt": ":flag_mp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -1088px",
    "size": "1344px 1184px"
  }, "🇲🇵"],
  [{
    "alt": ":flag_no:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -1088px",
    "size": "1344px 1184px"
  }, "🇳🇴"],
  [{
    "alt": ":flag_om:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -1088px",
    "size": "1344px 1184px"
  }, "🇴🇲"],
  [{
    "alt": ":flag_pk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇰"],
  [{
    "alt": ":flag_pw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇼"],
  [{
    "alt": ":flag_ps:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇸"],
  [{
    "alt": ":flag_pa:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇦"],
  [{
    "alt": ":flag_pg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇬"],
  [{
    "alt": ":flag_py:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇾"],
  [{
    "alt": ":flag_pe:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇪"],
  [{
    "alt": ":flag_ph:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇭"],
  [{
    "alt": ":flag_pn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇳"],
  [{
    "alt": ":flag_pl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇱"],
  [{
    "alt": ":flag_pt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -1088px",
    "size": "1344px 1184px"
  }, "🇵🇹"],
  [{
    "alt": ":flag_pr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -1120px",
    "size": "1344px 1184px"
  }, "🇵🇷"],
  [{
    "alt": ":flag_qa:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -1120px",
    "size": "1344px 1184px"
  }, "🇶🇦"],
  [{
    "alt": ":flag_re:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -1120px",
    "size": "1344px 1184px"
  }, "🇷🇪"],
  [{
    "alt": ":flag_ro:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -1120px",
    "size": "1344px 1184px"
  }, "🇷🇴"],
  [{
    "alt": ":flag_ru:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -1120px",
    "size": "1344px 1184px"
  }, "🇷🇺"],
  [{
    "alt": ":flag_rw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -1120px",
    "size": "1344px 1184px"
  }, "🇷🇼"],
  [{
    "alt": ":flag_ws:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -1120px",
    "size": "1344px 1184px"
  }, "🇼🇸"],
  [{
    "alt": ":flag_sm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇲"],
  [{
    "alt": ":flag_st:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇹"],
  [{
    "alt": ":flag_sa:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇦"],
  [{
    "alt": ":flag_sn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇳"],
  [{
    "alt": ":flag_rs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -1120px",
    "size": "1344px 1184px"
  }, "🇷🇸"],
  [{
    "alt": ":flag_sc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇨"],
  [{
    "alt": ":flag_sl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇱"],
  [{
    "alt": ":flag_sg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇬"],
  [{
    "alt": ":flag_sx:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇽"],
  [{
    "alt": ":flag_sk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇰"],
  [{
    "alt": ":flag_si:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇮"],
  [{
    "alt": ":flag_gs:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -1120px",
    "size": "1344px 1184px"
  }, "🇬🇸"],
  [{
    "alt": ":flag_sb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇧"],
  [{
    "alt": ":flag_so:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇴"],
  [{
    "alt": ":flag_za:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -1120px",
    "size": "1344px 1184px"
  }, "🇿🇦"],
  [{
    "alt": ":flag_kr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -1120px",
    "size": "1344px 1184px"
  }, "🇰🇷"],
  [{
    "alt": ":flag_ss:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇸"],
  [{
    "alt": ":flag_es:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -1120px",
    "size": "1344px 1184px"
  }, "🇪🇸"],
  [{
    "alt": ":flag_lk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -1120px",
    "size": "1344px 1184px"
  }, "🇱🇰"],
  [{
    "alt": ":flag_bl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -1120px",
    "size": "1344px 1184px"
  }, "🇧🇱"],
  [{
    "alt": ":flag_sh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇭"],
  [{
    "alt": ":flag_kn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -1120px",
    "size": "1344px 1184px"
  }, "🇰🇳"],
  [{
    "alt": ":flag_lc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -1120px",
    "size": "1344px 1184px"
  }, "🇱🇨"],
  [{
    "alt": ":flag_pm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -1120px",
    "size": "1344px 1184px"
  }, "🇵🇲"],
  [{
    "alt": ":flag_vc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -1120px",
    "size": "1344px 1184px"
  }, "🇻🇨"],
  [{
    "alt": ":flag_sd:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇩"],
  [{
    "alt": ":flag_sr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇷"],
  [{
    "alt": ":flag_sz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇿"],
  [{
    "alt": ":flag_se:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇪"],
  [{
    "alt": ":flag_ch:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -1120px",
    "size": "1344px 1184px"
  }, "🇨🇭"],
  [{
    "alt": ":flag_sy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -1120px",
    "size": "1344px 1184px"
  }, "🇸🇾"],
  [{
    "alt": ":flag_tw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -1120px",
    "size": "1344px 1184px"
  }, "🇹🇼"],
  [{
    "alt": ":flag_tj:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -1120px",
    "size": "1344px 1184px"
  }, "🇹🇯"],
  [{
    "alt": ":flag_tz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -1120px",
    "size": "1344px 1184px"
  }, "🇹🇿"],
  [{
    "alt": ":flag_th:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1312px -1120px",
    "size": "1344px 1184px"
  }, "🇹🇭"],
  [{
    "alt": ":flag_tl:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "0px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇱"],
  [{
    "alt": ":flag_tg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-32px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇬"],
  [{
    "alt": ":flag_tk:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-64px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇰"],
  [{
    "alt": ":flag_to:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-96px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇴"],
  [{
    "alt": ":flag_tt:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-128px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇹"],
  [{
    "alt": ":flag_tn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-160px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇳"],
  [{
    "alt": ":flag_tr:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-192px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇷"],
  [{
    "alt": ":flag_tm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-224px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇲"],
  [{
    "alt": ":flag_tc:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-256px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇨"],
  [{
    "alt": ":flag_vi:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-288px -1152px",
    "size": "1344px 1184px"
  }, "🇻🇮"],
  [{
    "alt": ":flag_tv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-320px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇻"],
  [{
    "alt": ":flag_ug:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-352px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇬"],
  [{
    "alt": ":flag_ua:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-384px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇦"],
  [{
    "alt": ":flag_ae:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-416px -1152px",
    "size": "1344px 1184px"
  }, "🇦🇪"],
  [{
    "alt": ":flag_gb:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-448px -1152px",
    "size": "1344px 1184px"
  }, "🇬🇧"],
  [{
    "alt": ":england:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-480px -1152px",
    "size": "1344px 1184px"
  }, "🏴󠁧󠁢󠁥󠁮󠁧󠁿"],
  [{
    "alt": ":scotland:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-512px -1152px",
    "size": "1344px 1184px"
  }, "🏴󠁧󠁢󠁳󠁣󠁴󠁿"],
  [{
    "alt": ":wales:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-544px -1152px",
    "size": "1344px 1184px"
  }, "🏴󠁧󠁢󠁷󠁬󠁳󠁿"],
  [{
    "alt": ":flag_us:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-576px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇸"],
  [{
    "alt": ":flag_uy:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-608px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇾"],
  [{
    "alt": ":flag_uz:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-640px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇿"],
  [{
    "alt": ":flag_vu:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-672px -1152px",
    "size": "1344px 1184px"
  }, "🇻🇺"],
  [{
    "alt": ":flag_va:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-704px -1152px",
    "size": "1344px 1184px"
  }, "🇻🇦"],
  [{
    "alt": ":flag_ve:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-736px -1152px",
    "size": "1344px 1184px"
  }, "🇻🇪"],
  [{
    "alt": ":flag_vn:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-768px -1152px",
    "size": "1344px 1184px"
  }, "🇻🇳"],
  [{
    "alt": ":flag_wf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-800px -1152px",
    "size": "1344px 1184px"
  }, "🇼🇫"],
  [{
    "alt": ":flag_eh:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-832px -1152px",
    "size": "1344px 1184px"
  }, "🇪🇭"],
  [{
    "alt": ":flag_ye:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-864px -1152px",
    "size": "1344px 1184px"
  }, "🇾🇪"],
  [{
    "alt": ":flag_zm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-896px -1152px",
    "size": "1344px 1184px"
  }, "🇿🇲"],
  [{
    "alt": ":flag_zw:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-928px -1152px",
    "size": "1344px 1184px"
  }, "🇿🇼"],
  [{
    "alt": ":flag_ac:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-960px -1152px",
    "size": "1344px 1184px"
  }, "🇦🇨"],
  [{
    "alt": ":flag_bv:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-992px -1152px",
    "size": "1344px 1184px"
  }, "🇧🇻"],
  [{
    "alt": ":flag_cp:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1024px -1152px",
    "size": "1344px 1184px"
  }, "🇨🇵"],
  [{
    "alt": ":flag_ea:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1056px -1152px",
    "size": "1344px 1184px"
  }, "🇪🇦"],
  [{
    "alt": ":flag_dg:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1088px -1152px",
    "size": "1344px 1184px"
  }, "🇩🇬"],
  [{
    "alt": ":flag_hm:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1120px -1152px",
    "size": "1344px 1184px"
  }, "🇭🇲"],
  [{
    "alt": ":flag_mf:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1152px -1152px",
    "size": "1344px 1184px"
  }, "🇲🇫"],
  [{
    "alt": ":flag_sj:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1184px -1152px",
    "size": "1344px 1184px"
  }, "🇸🇯"],
  [{
    "alt": ":flag_ta:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1216px -1152px",
    "size": "1344px 1184px"
  }, "🇹🇦"],
  [{
    "alt": ":flag_um:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1248px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇲"],
  [{
    "alt": ":united_nations:",
    "src": "/assets/images/scratch/d234cfa374e30dab3650f8531d00fbfd.png",
    "position": "-1280px -1152px",
    "size": "1344px 1184px"
  }, "🇺🇳"]
];
/**
 * Closure menu item currently selected.
 * @type {?goog.ui.MenuItem}
 */
Blockly.FieldEmoji.prototype.selectedItem = null;

/**
 * Language-neutral currently selected string or image object.
 * @type {string|!Object}
 * @private
 */
Blockly.FieldEmoji.prototype.value_ = '';

/**
 * SVG image element if currently selected option is an image, or null.
 * @type {SVGElement}
 * @private
 */
Blockly.FieldEmoji.prototype.imageElement_ = null;

/**
 * Object with src, height, width, and alt attributes if currently selected
 * option is an image, or null.
 * @type {Object}
 * @private
 */
Blockly.FieldEmoji.prototype.imageJson_ = null;

/**
 * Install this dropdown on a block.
 */
Blockly.FieldEmoji.prototype.init = function() {
  if (this.fieldGroup_) {
    // Dropdown has already been initialized once.
    return;
  }

  Blockly.FieldEmoji.superClass_.init.call(this);
};

/**
 * Create a dropdown menu under the text.
 * @private
 */
Blockly.FieldEmoji.prototype.showEditor_ = function() {
  var options = this.getOptions();
  if (options.length == 0) return;

  this.dropDownOpen_ = true;
  // If there is an existing drop-down someone else owns, hide it immediately and clear it.
  Blockly.DropDownDiv.hideWithoutAnimation();
  Blockly.DropDownDiv.clearContent();

  var contentDiv = Blockly.DropDownDiv.getContentDiv();

  var thisField = this;

  function callback(e) {
    var menu = this;
    var menuItem = e.target;
    if (menuItem) {
      thisField.onItemSelected(menu, menuItem);
    }
    Blockly.DropDownDiv.hide();
    Blockly.Events.setGroup(false);
  }

  var separators = [];
  var menu = new goog.ui.Menu();
  menu.setRightToLeft(this.sourceBlock_.RTL);
  for (var i = 0; i < options.length; i++) {
    if (options[i][1] === "separator") {
      var menuSeparator = new goog.ui.MenuSeparator();
      separators.push({
        element: menuSeparator,
        value: options[i][0]
      });
      menu.addChild(menuSeparator, true);
    } else {
      var value = options[i][1];
      var content = document.createElement("div");
      content.style.background = 'url("' + options[i][0]['src'] + '")';
      content.style.backgroundPosition = options[i][0]['position'];
      content.style.backgroundSize = options[i][0]['size'];
      content.style.height = "32px";
      content.style.width = "32px";

      var menuItem = new goog.ui.MenuItem(content);
      menuItem.setRightToLeft(this.sourceBlock_.RTL);
      menuItem.alt = options[i][0]['alt'];
      menuItem.setValue(value);
      menu.addChild(menuItem, true);
      var checked = (value == this.value_);
      if (checked) {
        this.selectedItem = menuItem;
      }
    }
  }
  // Listen for mouse/keyboard events.
  goog.events.listen(menu, goog.ui.Component.EventType.ACTION, callback);

  contentDiv.style.overflow = "hidden";
  contentDiv.style.display = "flex";
  contentDiv.style.flexDirection = "column";
  contentDiv.style.alignItems = "center";

  var searchDiv = document.createElement("div");
  searchDiv.style.position = "relative";
  contentDiv.appendChild(searchDiv);
  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Find emoji";
  input.style.border = "none";
  input.style.outline = "none";
  input.style.borderRadius = "4px";
  input.style.width = "300px";
  input.style.fontSize = "16px";
  input.style.padding = "8px";
  input.style.paddingRight = "40px";
  input.style.margin = "5px";
  input.id = "search-input";
  searchDiv.appendChild(input);
  var icon = document.createElement("span");
  icon.innerHTML = '<svg class="icon-3cZ1F_ visible-3V0mGj" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 7.863 17.167 5.854 15.656 4.344C14.146 2.832 12.137 2 10 2C7.863 2 5.854 2.832 4.344 4.344C2.833 5.854 2 7.863 2 10C2 12.137 2.833 14.146 4.344 15.656C5.854 17.168 7.863 18 10 18C11.799 18 13.504 17.404 14.9 16.314L20.293 21.706L21.707 20.293ZM10 16C8.397 16 6.891 15.376 5.758 14.243C4.624 13.11 4 11.603 4 10C4 8.398 4.624 6.891 5.758 5.758C6.891 4.624 8.397 4 10 4C11.603 4 13.109 4.624 14.242 5.758C15.376 6.891 16 8.398 16 10C16 11.603 15.376 13.11 14.242 14.243C13.109 15.376 11.603 16 10 16Z"></path></svg>';
  icon.style.position = "absolute";
  icon.style.color = "#72767d";
  icon.style.padding = "10px";
  icon.style.right = "0";
  searchDiv.appendChild(icon);


  var selectorDiv = document.createElement("div");
  selectorDiv.style.display = "flex";
  selectorDiv.style.height = "230px";
  contentDiv.appendChild(selectorDiv);

  var rightDiv = document.createElement("div");
  rightDiv.style.margin = "5px";
  rightDiv.style.color = "white";
  rightDiv.innerHTML = `<div onclick="document.getElementById('Person').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.522 2 12 2ZM16.293 6.293L17.707 7.706L16.414 9L17.707 10.293L16.293 11.706L13.586 9L16.293 6.293ZM6.293 7.707L7.707 6.294L10.414 9L7.707 11.707L6.293 10.294L7.586 9L6.293 7.707ZM12 19C9.609 19 7.412 17.868 6 16.043L7.559 14.486C8.555 15.92 10.196 16.831 12 16.831C13.809 16.831 15.447 15.92 16.443 14.481L18 16.04C16.59 17.867 14.396 19 12 19Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Nature').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M6.814 8.982C4.539 11.674 4.656 15.591 6.931 18.153L4.034 21.579L5.561 22.87L8.463 19.437C9.569 20.127 10.846 20.513 12.161 20.513C14.231 20.513 16.183 19.607 17.516 18.027C20.069 15.01 20.771 6.945 21 3C17.765 3.876 9.032 6.356 6.814 8.982V8.982ZM8.935 17.331C6.826 15.548 6.56 12.382 8.342 10.272C9.592 8.793 14.904 6.845 18.764 5.698L8.935 17.331V17.331Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Food').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M11 18H13V22H11V18Z" fill="currentColor"></path>
        <path d="M12 2C8.822 2 7 4.187 7 8V16C7 16.552 7.447 17 8 17H16C16.553 17 17 16.552 17 16V8C17 4.187 15.178 2 12 2ZM11 14.001H10V5.001H11V14.001ZM14 14.001H13V5.001H14V14.001Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Activities').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5.66487 5H18.3351C19.9078 5 21.2136 6.21463 21.3272 7.78329L21.9931 16.9774C22.0684 18.0165 21.287 18.9198 20.248 18.9951C20.2026 18.9984 20.1572 19 20.1117 19C18.919 19 17.8785 18.1904 17.5855 17.0342L17.0698 15H6.93015L6.41449 17.0342C6.12142 18.1904 5.08094 19 3.88826 19C2.84645 19 2.00189 18.1554 2.00189 17.1136C2.00189 17.0682 2.00354 17.0227 2.00682 16.9774L2.67271 7.78329C2.78632 6.21463 4.0921 5 5.66487 5ZM14.5 10C15.3284 10 16 9.32843 16 8.5C16 7.67157 15.3284 7 14.5 7C13.6716 7 13 7.67157 13 8.5C13 9.32843 13.6716 10 14.5 10ZM18.5 13C19.3284 13 20 12.3284 20 11.5C20 10.6716 19.3284 10 18.5 10C17.6716 10 17 10.6716 17 11.5C17 12.3284 17.6716 13 18.5 13ZM6.00001 9H4.00001V11H6.00001V13H8.00001V11H10V9H8.00001V7H6.00001V9Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Travel').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M22 17H19.725C19.892 16.529 20 16.029 20 15.5C20 13.015 17.985 11 15.5 11H13.5L12.276 8.553C12.107 8.214 11.761 8 11.382 8H7C6.448 8 6 8.447 6 9V11.051C3.753 11.302 2 13.186 2 15.5C2 17.986 4.015 20 6.5 20H15.5C16.563 20 17.527 19.616 18.297 19H22V17ZM6.5 16.75C5.81 16.75 5.25 16.19 5.25 15.5C5.25 14.81 5.81 14.25 6.5 14.25C7.19 14.25 7.75 14.81 7.75 15.5C7.75 16.19 7.19 16.75 6.5 16.75ZM11.5 16.75C10.81 16.75 10.25 16.19 10.25 15.5C10.25 14.81 10.81 14.25 11.5 14.25C12.19 14.25 12.75 14.81 12.75 15.5C12.75 16.19 12.19 16.75 11.5 16.75ZM16.5 16.75C15.81 16.75 15.25 16.19 15.25 15.5C15.25 14.81 15.81 14.25 16.5 14.25C17.19 14.25 17.75 14.81 17.75 15.5C17.75 16.19 17.19 16.75 16.5 16.75Z" fill="currentColor"></path>
        <path d="M8 7H10C10 5.346 8.654 4 7 4H6V6H7C7.551 6 8 6.449 8 7Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Objects').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M18 5.999H17V4.999C17 4.448 16.553 3.999 16 3.999H4C3.447 3.999 3 4.448 3 4.999V12.999C3 14.488 3.47 15.865 4.265 16.999H15.722C16.335 16.122 16.761 15.105 16.92 13.999H18C20.205 13.999 22 12.205 22 9.999C22 7.794 20.205 5.999 18 5.999V5.999ZM18 12H17V8H18C19.104 8 20 8.897 20 10C20 11.102 19.104 12 18 12Z" fill="currentColor"></path>
        <path d="M2 18H18V20H2V18Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Symbols').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16 4.001C14.406 4.001 12.93 4.838 12 6.081C11.07 4.838 9.594 4.001 8 4.001C5.243 4.001 3 6.244 3 9.001C3 14.492 11.124 19.633 11.471 19.849C11.633 19.95 11.817 20.001 12 20.001C12.183 20.001 12.367 19.95 12.529 19.849C12.876 19.633 21 14.492 21 9.001C21 6.244 18.757 4.001 16 4.001V4.001Z" fill="currentColor"></path>
    </svg>
  </div>
  <div onclick="document.getElementById('Flags').scrollIntoView()" style="cursor: pointer;">
    <svg class="categoryIcon-1SvUHG" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path d="M20 6.002H14V3.002C14 2.45 13.553 2.002 13 2.002H4C3.447 2.002 3 2.45 3 3.002V22.002H5V14.002H10.586L8.293 16.295C8.007 16.581 7.922 17.011 8.076 17.385C8.23 17.759 8.596 18.002 9 18.002H20C20.553 18.002 21 17.554 21 17.002V7.002C21 6.45 20.553 6.002 20 6.002Z" fill="currentColor"></path>
    </svg>
  </div>`;
  selectorDiv.appendChild(rightDiv);

  var menuDiv = document.createElement("div");
  menuDiv.style.overflow = "auto";
  menuDiv.style.padding = "5px";
  selectorDiv.appendChild(menuDiv);
  // Record windowSize and scrollOffset before adding menu.
  menu.render(menuDiv);
  var menuDom = menu.getElement();
  menuDom.style.display = "flex";
  menuDom.style.flexWrap = "wrap";
  menuDom.style.width = "360px";
  for (var i of separators) {
    i.element.getElement().id = i.value;
    i.element.getElement().innerHTML = i.value;
  }
  for (var child of menuDom.children) {
    if (child.className === 'goog-menuseparator') {
      child.style.color = "white";
      child.style.border = "none";
      child.style.fontSize = "15px";
      child.style.margin = "0";
      child.style.width = "100%";
    } else {
      child.style.borderRadius = "4px";
      child.style.padding = "4px";
    }
  }
  input.addEventListener("keyup", function (e) {
    for (var item of menu.getItems()) {
      if (item.getElement().className === 'goog-menuseparator') {
        if (e.target.value === "") {
          item.getElement().style.display = "";
        } else {
          item.getElement().style.display = "none";
        }
      } else {
        var show = false;
        for (const i of e.target.value.trim().split(" ")) {
          if (item.alt.includes(i.toLowerCase()) || item.getValue().includes(i.toLowerCase())) {
            show = true;
          }
        }
        if (show === false) {
          item.getElement().style.display = "none";
        } else {
          item.getElement().style.display = "";
        }
      }
    }
  });
  Blockly.utils.addClass(menuDom, 'blocklyEmojiMenu');
  // Record menuSize after adding menu.
  var menuSize = goog.style.getSize(menuDom);
  // Recalculate height for the total content, not only box height.
  menuSize.height = menuDom.scrollHeight;

  var primaryColour = (this.sourceBlock_.isShadow()) ?
    this.sourceBlock_.parentBlock_.getColour() : this.sourceBlock_.getColour();

  Blockly.DropDownDiv.setColour(primaryColour, this.sourceBlock_.getColourTertiary());

  var category = (this.sourceBlock_.isShadow()) ?
    this.sourceBlock_.parentBlock_.getCategory() : this.sourceBlock_.getCategory();
  Blockly.DropDownDiv.setCategory(category);

  // Calculate positioning based on the field position.
  var scale = this.sourceBlock_.workspace.scale;
  var bBox = {width: this.size_.width, height: this.size_.height};
  bBox.width *= scale;
  bBox.height *= scale;
  var position = this.fieldGroup_.getBoundingClientRect();
  var primaryX = position.left + bBox.width / 2;
  var primaryY = position.top + bBox.height;
  var secondaryX = primaryX;
  var secondaryY = position.top;
  // Set bounds to workspace; show the drop-down.
  Blockly.DropDownDiv.setBoundsElement(this.sourceBlock_.workspace.getParentSvg().parentNode);
  Blockly.DropDownDiv.show(
      this, primaryX, primaryY, secondaryX, secondaryY, this.onHide.bind(this));

  menu.setAllowAutoFocus(true);
  menuDom.focus();

  // Update colour to look selected.
  if (!this.disableColourChange_) {
    if (this.sourceBlock_.isShadow()) {
      this.sourceBlock_.setShadowColour(this.sourceBlock_.getColourTertiary());
    } else if (this.box_) {
      this.box_.setAttribute('fill', this.sourceBlock_.getColourTertiary());
    }
  }
};

/**
 * Callback for when the drop-down is hidden.
 */
Blockly.FieldEmoji.prototype.onHide = function() {
  this.dropDownOpen_ = false;
  // Update colour to look selected.
  if (!this.disableColourChange_ && this.sourceBlock_) {
    if (this.sourceBlock_.isShadow()) {
      this.sourceBlock_.clearShadowColour();
    } else if (this.box_) {
      this.box_.setAttribute('fill', this.sourceBlock_.getColour());
    }
  }
};

/**
 * Handle the selection of an item in the dropdown menu.
 * @param {!goog.ui.Menu} menu The Menu component clicked.
 * @param {!goog.ui.MenuItem} menuItem The MenuItem selected within menu.
 */
Blockly.FieldEmoji.prototype.onItemSelected = function(menu, menuItem) {
  var value = menuItem.getValue();
  if (this.sourceBlock_) {
    // Call any validation function, and allow it to override.
    value = this.callValidator(value);
  }
  // If the value of the menu item is a function, call it and do not select it.
  if (typeof value == 'function') {
    value();
    return;
  }
  if (value !== null) {
    this.setValue(value);
  }
};

/**
 * Factor out common words in statically defined options.
 * Create prefix and/or suffix labels.
 * @private
 */
Blockly.FieldEmoji.prototype.trimOptions_ = function() {
  this.prefixField = null;
  this.suffixField = null;
  var options = this.menuGenerator_;
  if (!goog.isArray(options)) {
    return;
  }
  var hasImages = false;
  // Localize label text and image alt text.
  for (var i = 0; i < options.length; i++) {
    var label = options[i][0];
    if (typeof label == 'string') {
      options[i][0] = Blockly.utils.replaceMessageReferences(label);
    } else {
      if (label.alt != null) {
        options[i][0].alt = Blockly.utils.replaceMessageReferences(label.alt);
      }
      hasImages = true;
    }
  }
  if (hasImages || options.length < 2) {
    return;  // Do nothing if too few items or at least one label is an image.
  }
  var strings = [];
  for (var i = 0; i < options.length; i++) {
    strings.push(options[i][0]);
  }
  var shortest = Blockly.utils.shortestStringLength(strings);
  var prefixLength = Blockly.utils.commonWordPrefix(strings, shortest);
  var suffixLength = Blockly.utils.commonWordSuffix(strings, shortest);
  if (!prefixLength && !suffixLength) {
    return;
  }
  if (shortest <= prefixLength + suffixLength) {
    // One or more strings will entirely vanish if we proceed.  Abort.
    return;
  }
  if (prefixLength) {
    this.prefixField = strings[0].substring(0, prefixLength - 1);
  }
  if (suffixLength) {
    this.suffixField = strings[0].substr(1 - suffixLength);
  }
  // Remove the prefix and suffix from the options.
  var newOptions = [];
  for (var i = 0; i < options.length; i++) {
    var text = options[i][0];
    var value = options[i][1];
    text = text.substring(prefixLength, text.length - suffixLength);
    newOptions[i] = [text, value];
  }
  this.menuGenerator_ = newOptions;
};

/**
 * @return {boolean} True if the option list is generated by a function.
 *     Otherwise false.
 */
Blockly.FieldEmoji.prototype.isOptionListDynamic = function() {
  return goog.isFunction(this.menuGenerator_);
};

/**
 * Return a list of the options for this dropdown.
 * @return {!Array.<!Array>} Array of option tuples:
 *     (human-readable text or image, language-neutral name).
 */
Blockly.FieldEmoji.prototype.getOptions = function() {
  if (goog.isFunction(this.menuGenerator_)) {
    return this.menuGenerator_.call(this);
  }
  return /** @type {!Array.<!Array.<string>>} */ (this.menuGenerator_);
};

/**
 * Get the language-neutral value from this dropdown menu.
 * @return {string} Current text.
 */
Blockly.FieldEmoji.prototype.getValue = function() {
  return this.value_;
};

/**
 * Set the language-neutral value for this dropdown menu.
 * @param {string} newValue New value to set.
 */
Blockly.FieldEmoji.prototype.setValue = function(newValue) {
  if (newValue === null || newValue === this.value_) {
    return;  // No change if null.
  }
  if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        this.sourceBlock_, 'field', this.name, this.value_, newValue));
  }
  // Clear menu item for old value.
  if (this.selectedItem) {
    this.selectedItem.setChecked(false);
    this.selectedItem = null;
  }
  this.value_ = newValue;
  // Look up and display the human-readable text.
  var options = this.getOptions();
  for (var i = 0; i < options.length; i++) {
    // Options are tuples of human-readable text and language-neutral values.
    if (options[i][1] == newValue) {
      var content = options[i][0];
      if (typeof content == 'object') {
        this.imageJson_ = content;
        this.text_ = content.alt;
      } else {
        this.imageJson_ = null;
        this.text_ = content;
      }
      // Always rerender if either the value or the text has changed.
      this.forceRerender();
      return;
    }
  }
  // Value not found.  Add it, maybe it will become valid once set
  // (like variable names).
  this.text_ = newValue;
  this.forceRerender();
};

/**
 * Sets the text in this field.  Trigger a rerender of the source block.
 * @param {?string} text New text.
 */
Blockly.FieldEmoji.prototype.setText = function(text) {
  if (text === null || text === this.text_) {
    // No change if null.
    return;
  }
  this.text_ = text;
  this.updateTextNode_();

  if (this.textElement_) {
    this.textElement_.parentNode.appendChild(this.arrow_);
  }
  if (this.sourceBlock_ && this.sourceBlock_.rendered) {
    this.sourceBlock_.render();
    this.sourceBlock_.bumpNeighbours_();
  }
};

/**
 * Close the dropdown menu if this input is being deleted.
 */
Blockly.FieldEmoji.prototype.dispose = function() {
  this.selectedItem = null;
  Blockly.WidgetDiv.hideIfOwner(this);
  Blockly.FieldEmoji.superClass_.dispose.call(this);
};

Blockly.Field.register('field_emoji', Blockly.FieldEmoji);
