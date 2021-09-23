// /**
//  * @license
//  * Visual Blocks Editor
//  *
//  * Copyright 2013 Google Inc.
//  * https://developers.google.com/blockly/
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  *   http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// /**
//  * @fileoverview Emoji input field.
//  * @author fraser@google.com (Neil Fraser)
//  */
// 'use strict';

// goog.provide('Blockly.FieldEmoji');

// goog.require('Blockly.DropDownDiv');
// goog.require('Blockly.FieldTextInput');
// goog.require('goog.userAgent');
// goog.require('Blockly.Field');
// goog.require('goog.dom');
// goog.require('goog.events');
// goog.require('goog.style');
// goog.require('goog.ui.Menu');
// goog.require('goog.ui.MenuItem');

// /**
//  * Class for an editable emoji field.
//  * @param {(string|number)=} opt_value The initial content of the field. The
//  *     value should cast to a number, and if it does not, '0' will be used.
//  * @param {Function=} opt_validator An optional function that is called
//  *     to validate any constraints on what the user entered.  Takes the new
//  *     text as an argument and returns the accepted text or null to abort
//  *     the change.
//  * @extends {Blockly.FieldTextInput}
//  * @constructor
//  */
// Blockly.FieldEmoji = function(opt_value, opt_validator) {
//   // opt_value = (opt_value.includes(":") || /\p{Extended_Pictographic}/u.test(opt_value)) ? opt_value : '';
//   Blockly.FieldEmoji.superClass_.constructor.call(
//       this, opt_value, opt_validator);
//   this.addArgType('emoji');
// };
// goog.inherits(Blockly.FieldEmoji, Blockly.FieldTextInput);
// /**
//  * Construct a FieldEmoji from a JSON arg object.
//  * @param {!Object} options A JSON object with options (angle).
//  * @returns {!Blockly.FieldEmoji} The new field instance.
//  * @package
//  * @nocollapse
//  */
// Blockly.FieldEmoji.fromJson = function(options) {
//   return new Blockly.FieldEmoji(options['emoji']);
// };

// Blockly.FieldEmoji.CHECKMARK_OVERHANG = 25;
// Blockly.FieldEmoji.prototype.CURSOR = 'default';
// Blockly.FieldEmoji.prototype.selectedItem = null;
// Blockly.FieldEmoji.prototype.value_ = '';
// Blockly.FieldEmoji.prototype.imageElement_ = null;
// Blockly.FieldEmoji.prototype.imageJson_ = null;

// Blockly.FieldDropdown.prototype.dispose_ = function() {
//   this.selectedItem = null;
//   Blockly.WidgetDiv.hideIfOwner(this);
//   Blockly.FieldDropdown.superClass_.dispose_.call(this);
// };
// Blockly.FieldEmoji.prototype.showEditor_ = function() {
//   Blockly.FieldEmoji.superClass_.showEditor_.call(this, this.useTouchInteraction_);
//   Blockly.DropDownDiv.hideWithoutAnimation();
//   Blockly.DropDownDiv.clearContent();
//   var div = Blockly.DropDownDiv.getContentDiv();
//   var svg = Blockly.utils.createSvgElement('svg', {
//     'xmlns': 'http://www.w3.org/2000/svg',
//     'xmlns:html': 'http://www.w3.org/1999/xhtml',
//     'xmlns:xlink': 'http://www.w3.org/1999/xlink',
//     'version': '1.1',
//     'height': (Blockly.FieldEmoji.HALF * 2) + 'px',
//     'width': (Blockly.FieldEmoji.HALF * 2) + 'px'
//   }, div);
//   Blockly.utils.createSvgElement('circle', {
//     'cx': Blockly.FieldEmoji.HALF, 'cy': Blockly.FieldEmoji.HALF,
//     'r': Blockly.FieldEmoji.RADIUS,
//     'class': 'blocklyAngleCircle'
//   }, svg);
//   this.gauge_ = Blockly.utils.createSvgElement('path',
//       {'class': 'blocklyAngleGauge'}, svg);
//   this.line_ = Blockly.utils.createSvgElement('line',{
//     'x1': Blockly.FieldEmoji.HALF,
//     'y1': Blockly.FieldEmoji.HALF,
//     'class': 'blocklyAngleLine'
//   }, svg);
//   var offsetRadians = Math.PI * Blockly.FieldEmoji.OFFSET / 180;
//   Blockly.utils.createSvgElement('line', {
//     'x1': Blockly.FieldEmoji.HALF,
//     'y1': Blockly.FieldEmoji.HALF,
//     'x2': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS * Math.cos(offsetRadians),
//     'y2': Blockly.FieldEmoji.HALF - Blockly.FieldEmoji.RADIUS * Math.sin(offsetRadians),
//     'class': 'blocklyAngleLine'
//   }, svg);
//   for (var angle = 0; angle < 360; angle += 15) {
//     Blockly.utils.createSvgElement('line', {
//       'x1': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS - 13,
//       'y1': Blockly.FieldEmoji.HALF,
//       'x2': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS - 7,
//       'y2': Blockly.FieldEmoji.HALF,
//       'class': 'blocklyAngleMarks',
//       'transform': 'rotate(' + angle + ',' +
//           Blockly.FieldEmoji.HALF + ',' + Blockly.FieldEmoji.HALF + ')'
//     }, svg);
//   }
//   Blockly.utils.createSvgElement('circle', {
//     'cx': Blockly.FieldEmoji.HALF, 'cy': Blockly.FieldEmoji.HALF,
//     'r': Blockly.FieldEmoji.CENTER_RADIUS,
//     'class': 'blocklyAngleCenterPoint'
//   }, svg);
//   this.handle_ = Blockly.utils.createSvgElement('g', {}, svg);
//   Blockly.utils.createSvgElement('circle', {
//     'cx': 0,
//     'cy': 0,
//     'r': Blockly.FieldEmoji.HANDLE_RADIUS,
//     'class': 'blocklyAngleDragHandle'
//   }, this.handle_);
//   this.arrowSvg_ = Blockly.utils.createSvgElement('image',
//       {
//         'width': Blockly.FieldEmoji.ARROW_WIDTH,
//         'height': Blockly.FieldEmoji.ARROW_WIDTH,
//         'x': -Blockly.FieldEmoji.ARROW_WIDTH / 2,
//         'y': -Blockly.FieldEmoji.ARROW_WIDTH / 2,
//         'class': 'blocklyAngleDragArrow'
//       },
//       this.handle_);
//   this.arrowSvg_.setAttributeNS(
//       'http://www.w3.org/1999/xlink',
//       'xlink:href',
//       Blockly.mainWorkspace.options.pathToMedia + Blockly.FieldEmoji.ARROW_SVG_PATH
//   );

//   Blockly.DropDownDiv.setColour(this.sourceBlock_.parentBlock_.getColour(),
//       this.sourceBlock_.getColourTertiary());
//   Blockly.DropDownDiv.setCategory(this.sourceBlock_.parentBlock_.getCategory());
//   Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);
//   this.updateGraph_();
// };

// Blockly.FieldEmoji.prototype.setText = function(text) {
//   Blockly.FieldEmoji.superClass_.setText.call(this, text);
//   if (!this.textElement_) {
//     return;
//   }
//   this.updateGraph_();
//   this.size_.width = 0;
// };
// Blockly.FieldEmoji.prototype.updateGraph_ = function() {
//   if (!this.gauge_) {
//     return;
//   }
//   var angleDegrees = Number(this.getText()) % 360 + Blockly.FieldEmoji.OFFSET;
//   var angleRadians = goog.math.toRadians(angleDegrees);
//   var path = ['M ', Blockly.FieldEmoji.HALF, ',', Blockly.FieldEmoji.HALF];
//   var x2 = Blockly.FieldEmoji.HALF;
//   var y2 = Blockly.FieldEmoji.HALF;
//   if (!isNaN(angleRadians)) {
//     var angle1 = goog.math.toRadians(Blockly.FieldEmoji.OFFSET);
//     var x1 = Math.cos(angle1) * Blockly.FieldEmoji.RADIUS;
//     var y1 = Math.sin(angle1) * -Blockly.FieldEmoji.RADIUS;
//     if (Blockly.FieldEmoji.CLOCKWISE) {
//       angleRadians = 2 * angle1 - angleRadians;
//     }
//     x2 += Math.cos(angleRadians) * Blockly.FieldEmoji.RADIUS;
//     y2 -= Math.sin(angleRadians) * Blockly.FieldEmoji.RADIUS;
//     var largeFlag = Math.abs(angleDegrees - Blockly.FieldEmoji.OFFSET) > 180 ? 1 : 0;
//     var sweepFlag = Number(Blockly.FieldEmoji.CLOCKWISE);
//     if (angleDegrees < Blockly.FieldEmoji.OFFSET) {
//       sweepFlag = 1 - sweepFlag;
//     }
//     path.push(' l ', x1, ',', y1,
//         ' A ', Blockly.FieldEmoji.RADIUS, ',', Blockly.FieldEmoji.RADIUS,
//         ' 0 ', largeFlag, ' ', sweepFlag, ' ', x2, ',', y2, ' z');
//     if (Blockly.FieldEmoji.CLOCKWISE) {
//       var imageRotation = angleDegrees + 2 * Blockly.FieldEmoji.OFFSET;
//     } else {
//       var imageRotation = -angleDegrees;
//     }
//     this.arrowSvg_.setAttribute('transform', 'rotate(' + (imageRotation) + ')');
//   }
//   this.gauge_.setAttribute('d', path.join(''));
//   this.line_.setAttribute('x2', x2);
//   this.line_.setAttribute('y2', y2);
//   this.handle_.setAttribute('transform', 'translate(' + x2 + ',' + y2 + ')');
// };

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
 * @fileoverview Dropdown input field.  Used for editable titles and variables.
 * In the interests of a consistent UI, the toolbox shares some functions and
 * properties with the context menu.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldEmoji');

goog.require('Blockly.FieldTextInput');
goog.require('Blockly.DropDownDiv');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.ui.Menu');
goog.require('goog.ui.MenuItem');
goog.require('goog.userAgent');


/**
 * Class for an editable emoji field.
 * @param {(string|number)=} opt_value The initial content of the field. The
 *     value should cast to a number, and if it does not, '0' will be used.
 * @param {Function=} opt_validator An optional function that is called
 *     to validate any constraints on what the user entered.  Takes the new
 *     text as an argument and returns the accepted text or null to abort
 *     the change.
 * @extends {Blockly.FieldTextInput}
 * @constructor
 */
Blockly.FieldEmoji = function(opt_value, opt_validator) {
  // opt_value = (opt_value.includes(":") || /\p{Extended_Pictographic}/u.test(opt_value)) ? opt_value : '';
  Blockly.FieldEmoji.superClass_.constructor.call(
      this, opt_value, opt_validator);
  this.addArgType('emoji');
};
goog.inherits(Blockly.FieldEmoji, Blockly.FieldTextInput);

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

Blockly.FieldEmoji.prototype.menuGenerator_ = [["😀", "test"]];
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

  Blockly.FieldEmoji.superClass_.showEditor_.call(this, this.useTouchInteraction_);
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

  var menu = new goog.ui.Menu();
  menu.setRightToLeft(this.sourceBlock_.RTL);
  for (var i = 0; i < options.length; i++) {
    var content = options[i][0]; // Human-readable text or image.
    var value = options[i][1];   // Language-neutral value.
    if (typeof content == 'object') {
      // An image, not text.
      var image = new Image(content['width'], content['height']);
      image.src = content['src'];
      image.alt = content['alt'] || '';
      content = image;
    }
    var menuItem = new goog.ui.MenuItem(content);
    menuItem.setRightToLeft(this.sourceBlock_.RTL);
    menuItem.setValue(value);
    menuItem.setCheckable(true);
    menu.addChild(menuItem, true);
    var checked = (value == this.value_);
    menuItem.setChecked(checked);
    if (checked) {
      this.selectedItem = menuItem;
    }
  }
  // Listen for mouse/keyboard events.
  goog.events.listen(menu, goog.ui.Component.EventType.ACTION, callback);

  // Record windowSize and scrollOffset before adding menu.
  menu.render(contentDiv);
  var menuDom = menu.getElement();
  Blockly.utils.addClass(menuDom, 'blocklyDropdownMenu');
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
