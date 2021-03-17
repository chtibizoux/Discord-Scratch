/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2013 Google Inc.
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

goog.require('Blockly.DropDownDiv');
goog.require('Blockly.FieldTextInput');
goog.require('goog.math');
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
  // Add degree symbol: '360°' (LTR) or '°360' (RTL)
  this.symbol_ = Blockly.utils.createSvgElement('tspan', {}, null);
  this.symbol_.appendChild(document.createTextNode('\u00B0'));
  
  var numRestrictor = new RegExp("^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])$|^[0-9]*$");

  opt_value = (opt_value && !isNaN(opt_value)) ? String(opt_value) : '0';
  Blockly.FieldEmoji.superClass_.constructor.call(
      this, opt_value, opt_validator, numRestrictor);
  this.addArgType('angle');
};
goog.inherits(Blockly.FieldEmoji, Blockly.FieldTextInput);

/**
 * Construct a FieldEmoji from a JSON arg object.
 * @param {!Object} options A JSON object with options (angle).
 * @returns {!Blockly.FieldEmoji} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldEmoji.fromJson = function(options) {
  return new Blockly.FieldEmoji(options['angle']);
};
Blockly.FieldEmoji.ROUND = 15;
Blockly.FieldEmoji.HALF = 120 / 2;
Blockly.FieldEmoji.CLOCKWISE = true;
Blockly.FieldEmoji.OFFSET = 90;
Blockly.FieldEmoji.WRAP = 180;
Blockly.FieldEmoji.HANDLE_RADIUS = 10;
Blockly.FieldEmoji.ARROW_WIDTH = Blockly.FieldEmoji.HANDLE_RADIUS;
Blockly.FieldEmoji.HANDLE_GLOW_WIDTH = 3;
Blockly.FieldEmoji.RADIUS = Blockly.FieldEmoji.HALF - Blockly.FieldEmoji.HANDLE_RADIUS - Blockly.FieldEmoji.HANDLE_GLOW_WIDTH;
Blockly.FieldEmoji.CENTER_RADIUS = 2;
Blockly.FieldEmoji.ARROW_SVG_PATH = 'icons/arrow.svg';
Blockly.FieldEmoji.prototype.dispose_ = function() {
  var thisField = this;
  return function() {
    Blockly.FieldEmoji.superClass_.dispose_.call(thisField)();
    thisField.gauge_ = null;
    if (thisField.mouseDownWrapper_) {
      Blockly.unbindEvent_(thisField.mouseDownWrapper_);
    }
    if (thisField.mouseUpWrapper_) {
      Blockly.unbindEvent_(thisField.mouseUpWrapper_);
    }
    if (thisField.mouseMoveWrapper_) {
      Blockly.unbindEvent_(thisField.mouseMoveWrapper_);
    }
  };
};
Blockly.FieldEmoji.prototype.showEditor_ = function() {
  Blockly.FieldEmoji.superClass_.showEditor_.call(this, this.useTouchInteraction_);
  Blockly.DropDownDiv.hideWithoutAnimation();
  Blockly.DropDownDiv.clearContent();
  var div = Blockly.DropDownDiv.getContentDiv();
  var svg = Blockly.utils.createSvgElement('svg', {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:html': 'http://www.w3.org/1999/xhtml',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    'version': '1.1',
    'height': (Blockly.FieldEmoji.HALF * 2) + 'px',
    'width': (Blockly.FieldEmoji.HALF * 2) + 'px'
  }, div);
  Blockly.utils.createSvgElement('circle', {
    'cx': Blockly.FieldEmoji.HALF, 'cy': Blockly.FieldEmoji.HALF,
    'r': Blockly.FieldEmoji.RADIUS,
    'class': 'blocklyAngleCircle'
  }, svg);
  this.gauge_ = Blockly.utils.createSvgElement('path',
      {'class': 'blocklyAngleGauge'}, svg);
  this.line_ = Blockly.utils.createSvgElement('line',{
    'x1': Blockly.FieldEmoji.HALF,
    'y1': Blockly.FieldEmoji.HALF,
    'class': 'blocklyAngleLine'
  }, svg);
  var offsetRadians = Math.PI * Blockly.FieldEmoji.OFFSET / 180;
  Blockly.utils.createSvgElement('line', {
    'x1': Blockly.FieldEmoji.HALF,
    'y1': Blockly.FieldEmoji.HALF,
    'x2': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS * Math.cos(offsetRadians),
    'y2': Blockly.FieldEmoji.HALF - Blockly.FieldEmoji.RADIUS * Math.sin(offsetRadians),
    'class': 'blocklyAngleLine'
  }, svg);
  for (var angle = 0; angle < 360; angle += 15) {
    Blockly.utils.createSvgElement('line', {
      'x1': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS - 13,
      'y1': Blockly.FieldEmoji.HALF,
      'x2': Blockly.FieldEmoji.HALF + Blockly.FieldEmoji.RADIUS - 7,
      'y2': Blockly.FieldEmoji.HALF,
      'class': 'blocklyAngleMarks',
      'transform': 'rotate(' + angle + ',' +
          Blockly.FieldEmoji.HALF + ',' + Blockly.FieldEmoji.HALF + ')'
    }, svg);
  }
  Blockly.utils.createSvgElement('circle', {
    'cx': Blockly.FieldEmoji.HALF, 'cy': Blockly.FieldEmoji.HALF,
    'r': Blockly.FieldEmoji.CENTER_RADIUS,
    'class': 'blocklyAngleCenterPoint'
  }, svg);
  this.handle_ = Blockly.utils.createSvgElement('g', {}, svg);
  Blockly.utils.createSvgElement('circle', {
    'cx': 0,
    'cy': 0,
    'r': Blockly.FieldEmoji.HANDLE_RADIUS,
    'class': 'blocklyAngleDragHandle'
  }, this.handle_);
  this.arrowSvg_ = Blockly.utils.createSvgElement('image',
      {
        'width': Blockly.FieldEmoji.ARROW_WIDTH,
        'height': Blockly.FieldEmoji.ARROW_WIDTH,
        'x': -Blockly.FieldEmoji.ARROW_WIDTH / 2,
        'y': -Blockly.FieldEmoji.ARROW_WIDTH / 2,
        'class': 'blocklyAngleDragArrow'
      },
      this.handle_);
  this.arrowSvg_.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      Blockly.mainWorkspace.options.pathToMedia + Blockly.FieldEmoji.ARROW_SVG_PATH
  );

  Blockly.DropDownDiv.setColour(this.sourceBlock_.parentBlock_.getColour(),
      this.sourceBlock_.getColourTertiary());
  Blockly.DropDownDiv.setCategory(this.sourceBlock_.parentBlock_.getCategory());
  Blockly.DropDownDiv.showPositionedByBlock(this, this.sourceBlock_);

  this.mouseDownWrapper_ =
      Blockly.bindEvent_(this.handle_, 'mousedown', this, this.onMouseDown);

  this.updateGraph_();
};
Blockly.FieldEmoji.prototype.onMouseDown = function() {
  this.mouseMoveWrapper_ = Blockly.bindEvent_(document.body, 'mousemove', this, this.onMouseMove);
  this.mouseUpWrapper_ = Blockly.bindEvent_(document.body, 'mouseup', this, this.onMouseUp);
};
Blockly.FieldEmoji.prototype.onMouseUp = function() {
  Blockly.unbindEvent_(this.mouseMoveWrapper_);
  Blockly.unbindEvent_(this.mouseUpWrapper_);
};

/**
 * Set the angle to match the mouse's position.
 * @param {!Event} e Mouse move event.
 */
Blockly.FieldEmoji.prototype.onMouseMove = function(e) {
  e.preventDefault();
  var bBox = this.gauge_.ownerSVGElement.getBoundingClientRect();
  var dx = e.clientX - bBox.left - Blockly.FieldEmoji.HALF;
  var dy = e.clientY - bBox.top - Blockly.FieldEmoji.HALF;
  var angle = Math.atan(-dy / dx);
  if (isNaN(angle)) {
    return;
  }
  angle = goog.math.toDegrees(angle);
  if (dx < 0) {
    angle += 180;
  } else if (dy > 0) {
    angle += 360;
  }
  if (Blockly.FieldEmoji.CLOCKWISE) {
    angle = Blockly.FieldEmoji.OFFSET + 360 - angle;
  } else {
    angle -= Blockly.FieldEmoji.OFFSET;
  }
  if (Blockly.FieldEmoji.ROUND) {
    angle = Math.round(angle / Blockly.FieldEmoji.ROUND) *
        Blockly.FieldEmoji.ROUND;
  }
  angle = this.callValidator(angle);
  Blockly.FieldTextInput.htmlInput_.value = angle;
  this.setValue(angle);
  this.validate_();
  this.resizeEditor_();
};

/**
 * Insert a degree symbol.
 * @param {?string} text New text.
 */
Blockly.FieldEmoji.prototype.setText = function(text) {
  Blockly.FieldEmoji.superClass_.setText.call(this, text);
  if (!this.textElement_) {
    return;
  }
  this.updateGraph_();
  this.size_.width = 0;
};

/**
 * Redraw the graph with the current angle.
 * @private
 */
Blockly.FieldEmoji.prototype.updateGraph_ = function() {
  if (!this.gauge_) {
    return;
  }
  var angleDegrees = Number(this.getText()) % 360 + Blockly.FieldEmoji.OFFSET;
  var angleRadians = goog.math.toRadians(angleDegrees);
  var path = ['M ', Blockly.FieldEmoji.HALF, ',', Blockly.FieldEmoji.HALF];
  var x2 = Blockly.FieldEmoji.HALF;
  var y2 = Blockly.FieldEmoji.HALF;
  if (!isNaN(angleRadians)) {
    var angle1 = goog.math.toRadians(Blockly.FieldEmoji.OFFSET);
    var x1 = Math.cos(angle1) * Blockly.FieldEmoji.RADIUS;
    var y1 = Math.sin(angle1) * -Blockly.FieldEmoji.RADIUS;
    if (Blockly.FieldEmoji.CLOCKWISE) {
      angleRadians = 2 * angle1 - angleRadians;
    }
    x2 += Math.cos(angleRadians) * Blockly.FieldEmoji.RADIUS;
    y2 -= Math.sin(angleRadians) * Blockly.FieldEmoji.RADIUS;
    var largeFlag = Math.abs(angleDegrees - Blockly.FieldEmoji.OFFSET) > 180 ? 1 : 0;
    var sweepFlag = Number(Blockly.FieldEmoji.CLOCKWISE);
    if (angleDegrees < Blockly.FieldEmoji.OFFSET) {
      sweepFlag = 1 - sweepFlag;
    }
    path.push(' l ', x1, ',', y1,
        ' A ', Blockly.FieldEmoji.RADIUS, ',', Blockly.FieldEmoji.RADIUS,
        ' 0 ', largeFlag, ' ', sweepFlag, ' ', x2, ',', y2, ' z');
    if (Blockly.FieldEmoji.CLOCKWISE) {
      var imageRotation = angleDegrees + 2 * Blockly.FieldEmoji.OFFSET;
    } else {
      var imageRotation = -angleDegrees;
    }
    this.arrowSvg_.setAttribute('transform', 'rotate(' + (imageRotation) + ')');
  }
  this.gauge_.setAttribute('d', path.join(''));
  this.line_.setAttribute('x2', x2);
  this.line_.setAttribute('y2', y2);
  this.handle_.setAttribute('transform', 'translate(' + x2 + ',' + y2 + ')');
};

/**
 * Ensure that only an angle may be entered.
 * @param {string} text The user's text.
 * @return {?string} A string representing a valid angle, or null if invalid.
 */
Blockly.FieldEmoji.prototype.classValidator = function(text) {
  if (text === null) {
    return null;
  }
  var n = parseFloat(text || 0);
  if (isNaN(n)) {
    return null;
  }
  n = n % 360;
  if (n < 0) {
    n += 360;
  }
  if (n > Blockly.FieldEmoji.WRAP) {
    n -= 360;
  }
  return String(n);
};

Blockly.Field.register('field_emoji', Blockly.FieldEmoji);
