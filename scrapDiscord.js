const fetch = require('node-fetch');
const fs = require('fs');
var categorys = ['collection', 'client', 'role', 'channel', 'message', 'guild', 'user', 'member', 'reaction'];
(async () => {
  if (!fs.existsSync("./scratch-blocks-simple/blocks_vertical")) {
    fs.mkdirSync("./scratch-blocks-simple/blocks_vertical", { recursive: true });
  }
  var responce = await fetch("https://raw.githubusercontent.com/discordjs/docs/main/discord.js/stable.json");
  var json = await responce.json();
  var toolbox = `'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');
Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +`;
  var javascript = `var start = 'const fs = require("fs"), discord = require("discord.js");\\nconst bot = new discord.Client();\\n';
var end = "\\nbot.login(token);";

Blockly.JavaScript['discord_token'] = function(block) {
    return ["const token = '" + block.getFieldValue('TEXT') + "';\\n", Blockly.JavaScript.ORDER_NONE];
};`;
  for (const value of json.classes) {
    if (categorys.includes(value.name.toLocaleLowerCase())) {
      toolbox += `
  '<category name="${value.name}" id="${value.name.toLowerCase()}" colour="#4C97FF" secondaryColour="#3373CC">' +`;
      var data = `'use strict';

goog.provide('Blockly.Blocks.${value.name.toLowerCase()}');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');`;
      if (value.events) {
        var dropdown = "";
        var switchData = "";
        var jsSwitchData = "";
        for (const event of value.events) {
          // [ 'name', 'description', 'params', 'meta', 'deprecated' ]
          if (!event.deprecated) {
            dropdown += `["${event.name}", "${event.name}"], `;
            if (event.params) {
              switchData += `
        case "${event.name}":
          this.addOutputs(${JSON.stringify(event.params.map((v) => v.name))});
          break;`
              jsSwitchData += `
        case "${event.name}":
            variables = "${event.params.map((v) => v.name).join(", ")}";
            break;`
            }
          }
        }
        dropdown.slice(0, -2);
        javascript += `
Blockly.JavaScript['${value.name.toLowerCase()}_on'] = function(block) {
    var ${value.name.toLowerCase()} = Blockly.JavaScript.valueToCode(block, '${value.name.toUpperCase()}', Blockly.JavaScript.ORDER_NONE) || "null";
    var action = block.getFieldValue('ACTION');
    var d = Blockly.JavaScript.statementToCode(block, 'DO') || "";
    var variables = "";
    switch (action) {${jsSwitchData}
    }
    block.variables = variables;
    return [${value.name.toLowerCase()} + ".on('" + action + "', (" + variables + ") => {\\n" + d + "});\\n", Blockly.JavaScript.ORDER_FUNCTION_CALL];
};`;
        toolbox += `
    '<block type="${value.name.toLowerCase()}_on" id="${value.name.toLowerCase()}_on"></block>' +`;
        data += `
Blockly.Blocks['${value.name.toLowerCase()}_on'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('on');
    this.appendValueInput("${value.name.toUpperCase()}")
        .appendField(new Blockly.FieldDropdown([${dropdown}]), "ACTION");
    this.appendStatementInput('DO');
    this.setColour(Blockly.Colours.${value.name.toLowerCase()}.primary);
  },
  addOutputs: function(variables) {
    for (var i = 0; i < variables.length; i++) {
      var input = this.appendValueInput("VARIABLE" + (i + 1));
      this.moveInputBefore("VARIABLE" + (i + 1), i === 0 ? "DO" : "VARIABLE" + i);
      var block = new Blockly.BlockSvg(this.workspace, "event_variables");
      block.initSvg();
      block.render(true);
      block.contextMenu = false;
      block.setFieldValue(variables[i], "VARIABLE");
      input.connection.connect(block.outputConnection);
    }
  },
  onchange: function(e) {
    if (e.blockId === this.id) {
      var i = 1;
      while (this.getInput('VARIABLE' + i)) {
        if (this.getInputTargetBlock("VARIABLE" + i)) {
          this.getInputTargetBlock("VARIABLE" + i).dispose();
        }
        this.removeInput('VARIABLE' + i);
        i++;
      }

      var action = this.getFieldValue("ACTION");
      switch (action) {${switchData}
      }
      this.render(true);
    }
  }
};`;
      }
      if (value.props) {
        for (const prop of value.props) {
          // [ 'name', 'description', 'type', 'meta', 'access', 'readonly', 'nullable', 'abstract', 'see', 'deprecated', 'props', 'scope' ]
          if (!prop.deprecated && !prop.access) {
            data += `
Blockly.Blocks['${value.name.toLowerCase()}_${prop.name}'] = {
  init: function() {
    this.jsonInit({
      "message0": "${prop.name} of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "${value.name.toUpperCase()}"
        }
      ],
      "category": Blockly.Categories.${value.name.toLowerCase()},
      "extensions": ["colours_${value.name.toLowerCase()}", "output_string"]
    });
  }
};`;
            toolbox += `
    '<block type="${value.name.toLowerCase()}_${prop.name}" id="${value.name.toLowerCase()}_${prop.name}"></block>' +`;
            javascript += `
Blockly.JavaScript['${value.name.toLowerCase()}_${prop.name}'] = function(block) {
    var ${value.name.toLowerCase()} = Blockly.JavaScript.valueToCode(block, '${value.name.toUpperCase()}', Blockly.JavaScript.ORDER_NONE) || "null";
    return [${value.name.toLowerCase()} + ".${prop.name}", Blockly.JavaScript.ORDER_NONE];
};`;
          }
        }
      }
      if (value.methods) {
        for (const method of value.methods) {
          // [ 'name', 'description', 'returns', 'meta', 'access', 'examples', 'params', 'async', 'inherits', 'inherited', 'implements', 'see', 'scope', 'emits', 'deprecated', 'abstract' ]
          if (!method.deprecated && !method.access) {
            var params = "";
            var paramsIDs = "";
            var paramsID = 2;
            var jsParams = "";
            var jsParamsIDs = [];
            var options = [];
            var toolboxParams = "";
            if (method.params) {
              for (const param of method.params) {
                if (param.type[0][0][0] === 'function') {
                  console.log(value.name + ": " + method.name + " argument is a function");
                }
                params += `
        {
          "type": "input_value",
          "name": "${param.name.replace("options.", "").toUpperCase()}"
        },`;
                switch (param.type[0][0][0]) {
                  case "string":
                    toolboxParams += `
      '<value name="${param.name.replace("options.", "").toUpperCase()}">' +
        '<shadow type="text">' +
          '<field name="TEXT">text</field>' +
        '</shadow>' +
      '</value>' +`;
                    break;
                  case "number":
                    toolboxParams += `
      '<value name="${param.name.replace("options.", "").toUpperCase()}">' +
        '<shadow type="math_number">' +
          '<field name="NUM">1</field>' +
        '</shadow>' +
      '</value>' +`;
                    break;
                  case "boolean":
      //               toolboxParams += `
      // '<value name="${param.name.replace("options.", "").toUpperCase()}">' +
      //   '<shadow type="boolean">' +
      //     '<field name="BOOL">true</field>' +
      //   '</shadow>' +
      // '</value>' +`;
                    break;
                }
                jsParams += `
    var ${param.name.replace("options.", "")} = Blockly.JavaScript.valueToCode(block, '${param.name.replace("options.", "").toUpperCase()}', Blockly.JavaScript.ORDER_NONE) || "";`;
                if (param.name.startsWith("options.")) {
                  options.push(`" + ${param.name.replace("options.", "")} + "`);
                } else {
                  jsParamsIDs.push(`" + ${param.name} + "`);
                }
                paramsIDs += ` ${param.name.replace("options.", "")}: %${paramsID}`;
                paramsID++;
              }
            }
            toolbox += `
    '<block type="${value.name.toLowerCase()}_${method.name}" id="${value.name.toLowerCase()}_${method.name}">' +${toolboxParams}
    '</block>' +`;
            data += `
Blockly.Blocks['${value.name.toLowerCase()}_${method.name}'] = {
  init: function() {
    this.jsonInit({
      "message0": "${method.name} of %1${paramsIDs}",
      "args0": [
        {
          "type": "input_value",
          "name": "${value.name.toUpperCase()}"
        },${params}
      ],
      "category": Blockly.Categories.${value.name.toLowerCase()},
      "extensions": ["colours_${value.name.toLowerCase()}", "shape_statement"]
    });
  }
};`;
            if (method.async) {
              javascript += `
Blockly.JavaScript['${value.name.toLowerCase()}_${method.name}'] = function(block) {
    var finalstring = ";\\n";
    if (block.getNextBlock()) {
        if (block.getNextBlock().type === "sensing_then") {
            finalstring = "";
        }
    }
    var ${value.name.toLowerCase()} = Blockly.JavaScript.valueToCode(block, '${value.name.toUpperCase()}', Blockly.JavaScript.ORDER_NONE) || "null";${jsParams}
    return ${value.name.toLowerCase()} + ".${method.name}(${jsParamsIDs.join(", ")}${options.length > 0 ? ", { " + options.join(", ") + " }" : ""})" + finalstring;
};`;
            } else {
              javascript += `
Blockly.JavaScript['${value.name.toLowerCase()}_${method.name}'] = function(block) {
    var ${value.name.toLowerCase()} = Blockly.JavaScript.valueToCode(block, '${value.name.toUpperCase()}', Blockly.JavaScript.ORDER_NONE) || "null";${jsParams}
    return ${value.name.toLowerCase()} + ".${method.name}(${jsParamsIDs.join(", ")}${options.length > 0 ? ", { " + options.join(", ") + " }" : ""});\\n";
};`;
            }
          }
        }
      }
      fs.writeFileSync("./scratch-blocks-simple/blocks_vertical/" + value.name.toLowerCase() + ".js", data);
      toolbox += `
  '</category>' +`;
    }
  }
  toolbox += `
  '</xml>';`;
  fs.writeFileSync("./scratch-blocks-simple/blocks_vertical/vertical_extensions.js", `/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2017 Google Inc.
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
 * @fileoverview Extensions for vertical blocks in scratch-blocks.
 * The following extensions can be used to describe a block in Scratch terms.
 * For instance, a block in the operators colour scheme with a number output
 * would have the "colours_operators" and "output_number" extensions.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.ScratchBlocks.VerticalExtensions');

goog.require('Blockly.Colours');
goog.require('Blockly.constants');


/**
 * Helper function that generates an extension based on a category name.
 * The generated function will set primary, secondary, and tertiary colours
 * based on the category name.
 * @param {String} category The name of the category to set colours for.
 * @return {function} An extension function that sets colours based on the given
 *     category.
 */
Blockly.ScratchBlocks.VerticalExtensions.colourHelper = function(category) {
  var colours = Blockly.Colours[category];
  if (!(colours && colours.primary && colours.secondary && colours.tertiary)) {
    throw new Error('Could not find colours for category "' + category + '"');
  }
  /**
   * Set the primary, secondary, and tertiary colours on this block for the
   * given category.
   * @this {Blockly.Block}
   */
  return function() {
    this.setColourFromRawValues_(colours.primary, colours.secondary,
        colours.tertiary);
  };
};

/**
 * Extension to set the colours of a text field, which are all the same.
 */
Blockly.ScratchBlocks.VerticalExtensions.COLOUR_TEXTFIELD = function() {
  this.setColourFromRawValues_(Blockly.Colours.textField,
      Blockly.Colours.textField, Blockly.Colours.textField);
};

/**
 * Extension to make a block fit into a stack of statements, regardless of its
 * inputs.  That means the block should have a previous connection and a next
 * connection and have inline inputs.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_STATEMENT = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as a hat block, regardless of its
 * inputs.  That means the block should have a next connection and have inline
 * inputs, but have no previous connection.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_HAT = function() {
  this.setInputsInline(true);
  this.setNextStatement(true, null);
};

/**
 * Extension to make a block be shaped as an end block, regardless of its
 * inputs.  That means the block should have a previous connection and have
 * inline inputs, but have no next connection.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.SHAPE_END = function() {
  this.setInputsInline(true);
  this.setPreviousStatement(true, null);
};

/**
 * Extension to make represent a number reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Number'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_NUMBER = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'Number');
};

/**
 * Extension to make represent a string reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'String'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_STRING = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
  this.setOutput(true, 'String');
};

/**
 * Extension to make represent a boolean reporter in Scratch-Blocks.
 * That means the block has inline inputs, a round output shape, and a 'Boolean'
 * output type.
 * @this {Blockly.Block}
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_BOOLEAN = function() {
  this.setInputsInline(true);
  this.setOutputShape(Blockly.OUTPUT_SHAPE_HEXAGONAL);
  this.setOutput(true, 'Boolean');
};

/**
 * Mixin to add a context menu for a procedure definition block.
 * It adds the "edit" option and removes the "duplicate" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU = {
  /**
   * Add the "edit" option and removes the "duplicate" option from the context
   * menu.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    // Add the edit option at the end.
    menuOptions.push(Blockly.Procedures.makeEditOption(this));

    // Find the delete option and update its callback to be specific to
    // functions.
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DELETE_BLOCK) {
        var input = this.getInput('custom_block');
        // this is the root block, not the shadow block.
        if (input && input.connection && input.connection.targetBlock()) {
          var procCode = input.connection.targetBlock().getProcCode();
        } else {
          return;
        }
        var rootBlock = this;
        option.callback = function() {
          var didDelete = Blockly.Procedures.deleteProcedureDefCallback(
              procCode, rootBlock);
          if (!didDelete) {
            alert(Blockly.Msg.PROCEDURE_USED);
          }
        };
      }
    }
    // Find and remove the duplicate option
    for (var i = 0, option; option = menuOptions[i]; i++) {
      if (option.text == Blockly.Msg.DUPLICATE) {
        menuOptions.splice(i, 1);
        break;
      }
    }
  }
};

/**
 * Mixin to add a context menu for a procedure call block.
 * It adds the "edit" option and the "define" option.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU = {
  /**
   * Add the "edit" option to the context menu.
   * @todo Add "go to definition" option once implemented.
   * @param {!Array.<!Object>} menuOptions List of menu options to edit.
   * @this Blockly.Block
   */
  customContextMenu: function(menuOptions) {
    menuOptions.push(Blockly.Procedures.makeEditOption(this));
  }
};


Blockly.ScratchBlocks.VerticalExtensions.SCRATCH_EXTENSION = function() {
  this.isScratchExtension = true;
};
/**
 * Register all extensions for scratch-blocks.
 * @package
 */
Blockly.ScratchBlocks.VerticalExtensions.registerAll = function() {
  var categoryNames = ${JSON.stringify(json.classes.map((v) => v.name.toLowerCase()))};
  // Register functions for all category colours.
  for (var i = 0; i < categoryNames.length; i++) {
    var name = categoryNames[i];
    Blockly.Extensions.register('colours_' + name,
        Blockly.ScratchBlocks.VerticalExtensions.colourHelper(name));
  }

  // Text fields transcend categories.
  Blockly.Extensions.register('colours_textfield',
      Blockly.ScratchBlocks.VerticalExtensions.COLOUR_TEXTFIELD);

  // Register extensions for common block shapes.
  Blockly.Extensions.register('shape_statement',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_STATEMENT);
  Blockly.Extensions.register('shape_hat',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_HAT);
  Blockly.Extensions.register('shape_end',
      Blockly.ScratchBlocks.VerticalExtensions.SHAPE_END);

  // Output shapes and types are related.
  Blockly.Extensions.register('output_number',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_NUMBER);
  Blockly.Extensions.register('output_string',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_STRING);
  Blockly.Extensions.register('output_boolean',
      Blockly.ScratchBlocks.VerticalExtensions.OUTPUT_BOOLEAN);

  // Custom procedures have interesting context menus.
  Blockly.Extensions.registerMixin('procedure_def_contextmenu',
      Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_DEF_CONTEXTMENU);
  Blockly.Extensions.registerMixin('procedure_call_contextmenu',
      Blockly.ScratchBlocks.VerticalExtensions.PROCEDURE_CALL_CONTEXTMENU);

  // Extension blocks have slightly different block rendering.
  Blockly.Extensions.register('scratch_extension',
      Blockly.ScratchBlocks.VerticalExtensions.SCRATCH_EXTENSION);
};

Blockly.ScratchBlocks.VerticalExtensions.registerAll();
`);
  fs.writeFileSync("./scratch-blocks-simple/core/colours.js", `/**
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

goog.provide('Blockly.Colours');

Blockly.Colours = {${json.classes.map((v) => `
  ${v.name.toLowerCase()}: {
    "primary": "#4C97FF",
    "secondary": "#4280D7",
    "tertiary": "#3373CC"
  },`).join("")}
  "filesystem": {
    "primary": "#9966FF",
    "secondary": "#855CD6",
    "tertiary": "#774DCB"
  },
  "control": {
    "primary": "#FFAB19",
    "secondary": "#EC9C13",
    "tertiary": "#CF8B17"
  },
  "event": {
    "primary": "#FFBF00",
    "secondary": "#E6AC00",
    "tertiary": "#CC9900"
  },
  "sensing": {
    "primary": "#5CB1D6",
    "secondary": "#47A8D1",
    "tertiary": "#2E8EB8"
  },
  "operators": {
    "primary": "#59C059",
    "secondary": "#46B946",
    "tertiary": "#389438"
  },
  "data": {
    "primary": "#FF8C1A",
    "secondary": "#FF8000",
    "tertiary": "#DB6E00"
  },
  "data_lists": {
    "primary": "#FF661A",
    "secondary": "#FF5500",
    "tertiary": "#E64D00"
  },
  "data_dictionary": {
    "primary": "#ff3c1a",
    "secondary": "#FF2b00",
    "tertiary": "#E62A00"
  },
  "more": {
    "primary": "#FF6680",
    "secondary": "#FF4D6A",
    "tertiary": "#FF3355"
  },
  "text": "#575E75",
  "workspace": "#F9F9F9",
  "toolboxHover": "#4C97FF",
  "toolboxSelected": "#e9eef2",
  "toolboxText": "#575E75",
  "toolbox": "#FFFFFF",
  "flyout": "#F9F9F9",
  "scrollbar": "#CECDCE",
  "scrollbarHover": '#CECDCE',
  "textField": "#FFFFFF",
  "insertionMarker": "#000000",
  "insertionMarkerOpacity": 0.2,
  "dragShadowOpacity": 0.3,
  "stackGlow": "#FFF200",
  "stackGlowSize": 4,
  "stackGlowOpacity": 1,
  "replacementGlow": "#FFFFFF",
  "replacementGlowSize": 2,
  "replacementGlowOpacity": 1,
  "colourPickerStroke": "#FFFFFF",
  // CSS colours: support RGBA
  "fieldShadow": "rgba(0,0,0,0.1)",
  "dropDownShadow": "rgba(0, 0, 0, .3)",
  "numPadBackground": "#547AB2",
  "numPadBorder": "#435F91",
  "numPadActiveBackground": "#435F91",
  "numPadText": "white", // Do not use hex here, it cannot be inlined with data-uri SVG
  "valueReportBackground": "#FFFFFF",
  "valueReportBorder": "#AAAAAA"
};

/**
 * Override the colours in Blockly.Colours with new values basded on the
 * given dictionary.
 * @param {!Object} colours Dictionary of colour properties and new values.
 * @package
 */
Blockly.Colours.overrideColours = function(colours) {
  // Colour overrides provided by the injection
  if (colours) {
    for (var colourProperty in colours) {
      if (colours.hasOwnProperty(colourProperty) &&
          Blockly.Colours.hasOwnProperty(colourProperty)) {
        // If a property is in both colours option and Blockly.Colours,
        // set the Blockly.Colours value to the override.
        // Override Blockly category color object properties with those
        // provided.
        var colourPropertyValue = colours[colourProperty];
        if (goog.isObject(colourPropertyValue)) {
          for (var colourSequence in colourPropertyValue) {
            if (colourPropertyValue.hasOwnProperty(colourSequence) &&
              Blockly.Colours[colourProperty].hasOwnProperty(colourSequence)) {
              Blockly.Colours[colourProperty][colourSequence] =
                  colourPropertyValue[colourSequence];
            }
          }
        } else {
          Blockly.Colours[colourProperty] = colourPropertyValue;
        }
      }
    }
  }
};
`);
  fs.writeFileSync("./scratch-blocks-simple/tests/vertical_playground.html", `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <title>Vertical Playground</title>

    <script src="../blockly_uncompressed_vertical.js"></script>
    <script src="../msg/messages.js"></script>
    <script src="../msg/scratch_msgs.js"></script>
    <script src="../blocks_vertical/vertical_extensions.js"></script>
    <script src="../blocks_common/math.js"></script>
    <script src="../blocks_common/matrix.js"></script>
    <script src="../blocks_common/note.js"></script>
    <script src="../blocks_common/text.js"></script>
    <script src="../blocks_common/colour.js"></script>${json.classes.map((v) => `
    <script src="../blocks_vertical/${v.name.toLowerCase()}.js"></script>`).join("")}
    <script src="../blocks_vertical/event.js"></script>
    <script src="../blocks_vertical/default_toolbox.js"></script>

    <script>
      'use strict';

      var workspace = null;

      function start() {
        var soundsEnabled = null;
        if (sessionStorage) {
          // Restore sounds state.
          soundsEnabled = sessionStorage.getItem('soundsEnabled');
          if (soundsEnabled === null) {
            soundsEnabled = true;
          } else {
            soundsEnabled = (soundsEnabled === 'true');
          }
        } else {
          soundsEnabled = true;
        }
        setSoundsEnabled(soundsEnabled);

        // Setup blocks
        // Parse the URL arguments.
        var match = location.search.match(/dir=([^&]+)/);
        var rtl = match && match[1] == 'rtl';
        document.forms.options.elements.dir.selectedIndex = Number(rtl);
        var toolbox = getToolboxElement();
        document.forms.options.elements.toolbox.selectedIndex =
          toolbox ? 1: 0;

        match = location.search.match(/side=([^&]+)/);

        var side = match ? match[1] : 'start';

        document.forms.options.elements.side.value = side;

        match = location.search.match(/locale=([^&]+)/);
        var locale = match ? match[1] : 'en';
        Blockly.ScratchMsgs.setLocale(locale);
        document.forms.options.elements.locale.value = locale;

        // Create main workspace.
        workspace = Blockly.inject('blocklyDiv', {
          comments: true,
          disable: false,
          collapse: false,
          media: '../media/',
          readOnly: false,
          rtl: rtl,
          scrollbars: true,
          toolbox: toolbox,
          toolboxPosition: side == 'top' || side == 'start' ? 'start' : 'end',
          horizontalLayout: side == 'top' || side == 'bottom',
          sounds: soundsEnabled,
          zoom: {
            controls: true,
            wheel: true,
            startScale: 0.675,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
          },
          colours: {
            fieldShadow: 'rgba(255, 255, 255, 0.3)',
            dragShadowOpacity: 0.6
          }
        });

        if (sessionStorage) {
          // Restore previously displayed text.
          var text = sessionStorage.getItem('textarea');
          if (text) {
            document.getElementById('importExport').value = text;
          }
          taChange();
        }

        if (sessionStorage) {
          // Restore event logging state.
          var state = sessionStorage.getItem('logEvents');
          logEvents(Boolean(state));

          // Restore flyout event logging state.
          state = sessionStorage.getItem('logFlyoutEvents');
          logFlyoutEvents(Boolean(state));
        }
      }

      function getToolboxElement() {
        var match = location.search.match(/toolbox=([^&]+)/);
        return document.getElementById('toolbox-' + (match ? match[1] : 'categories'));
      }

      function toXml() {
        var output = document.getElementById('importExport');
        var xml = Blockly.Xml.workspaceToDom(workspace);
        output.value = Blockly.Xml.domToPrettyText(xml);
        output.focus();
        output.select();
        taChange();
      }

      function fromXml() {
        var input = document.getElementById('importExport');
        var xml = Blockly.Xml.textToDom(input.value);
        Blockly.Xml.domToWorkspace(xml, workspace);
        taChange();
      }

      // Disable the "Import from XML" button if the XML is invalid.
      // Preserve text between page reloads.
      function taChange() {
        var textarea = document.getElementById('importExport');
        if (sessionStorage) {
          sessionStorage.setItem('textarea', textarea.value)
        }
        var valid = true;
        try {
          Blockly.Xml.textToDom(textarea.value);
        } catch (e) {
          valid = false;
        }
        document.getElementById('import').disabled = !valid;
      }

      function logEvents(state) {
        var checkbox = document.getElementById('logCheck');
        checkbox.checked = state;
        if (sessionStorage) {
          sessionStorage.setItem('logEvents', state ? 'checked' : '');
        }
        if (state) {
          workspace.addChangeListener(logger);
        } else {
          workspace.removeChangeListener(logger);
        }
      }

      function logFlyoutEvents(state) {
        var checkbox = document.getElementById('logFlyoutCheck');
        checkbox.checked = state;
        var soundsEnabled = null;
        if (sessionStorage) {
          sessionStorage.setItem('logFlyoutEvents', state ? 'checked' : '');
        }
        var flyoutWorkspace = (workspace.flyout_) ? workspace.flyout_.workspace_ :
          workspace.toolbox_.flyout_.workspace_;
        if (state) {
          flyoutWorkspace.addChangeListener(logger);
        } else {
          flyoutWorkspace.removeChangeListener(logger);
        }
      }

      function logger(e) {
        console.log(e);
      }

      function glowBlock() {
        if (Blockly.selected) {
          workspace.glowBlock(Blockly.selected.id, true);
        }
      }

      function unglowBlock() {
        if (Blockly.selected) {
          workspace.glowBlock(Blockly.selected.id, false);
        }
      }

      function glowStack() {
        if (Blockly.selected) {
          workspace.glowStack(Blockly.selected.id, true);
        }
      }

      function unglowStack() {
        if (Blockly.selected) {
          workspace.glowStack(Blockly.selected.id, false);
        }
      }

      function sprinkles(n) {
        var prototypes = [];
        var toolbox = workspace.options.languageTree;
        if (!toolbox) {
          console.error('Toolbox not found; add a toolbox element to the DOM.');
          return;
        }
        var blocks = toolbox.getElementsByTagName('block');
        for (var i = 0; i < n; i++) {
          var blockXML = blocks[Math.floor(Math.random() * blocks.length)];
          var block = Blockly.Xml.domToBlock(blockXML, workspace);
          block.initSvg();
          block.moveBy(
            Math.round(Math.random() * 450 + 40),
            Math.round(Math.random() * 600 + 40)
          );
        }
      }

      var equalsXml = [
        '  <shadow type="operator_equals">',
        '    <value name="OPERAND1">',
        '     <shadow type="text">',
        '      <field name="TEXT">foo</field>',
        '     </shadow>',
        '    </value>',
        '    <value name="OPERAND2">',
        '      <shadow type="operator_equals"></shadow>',
        '    </value>',
        '  </shadow>'
      ].join('\\n');

      var spaghettiXml = [
        '  <block type="control_if_else">',
        '    <value name="CONDITION">',
        '      <shadow type="operator_equals"></shadow>',
        '    </value>',
        '    <statement name="SUBSTACK"></statement>',
        '    <statement name="SUBSTACK2"></statement>',
        '    <next></next>',
        '  </block>'
      ].join('\\n');

      function spaghetti(n) {
        console.log("Starting spaghetti.  This may take some time...");
        var xml = spaghettiXml;
        // Nest if/else statements deeply.
        for(var i = 0; i < 2 * n; i++) {
          xml = xml.replace(/(<statement name="SUBSTACK2?"?>)<\\//g,
              '$1' + spaghettiXml + '</');
        }
        // Stack a bit.
        for(var i = 0; i < n; i++) {
          xml = xml.replace(/(<next>)<\//g,
          '$1' + spaghettiXml + '</');
        }

        // Nest boolean comparisons.
        var equalsBlock = equalsXml;
        for (var i = 0; i < n; i++) {
          equalsBlock = equalsBlock.replace(
              /(<shadow( type="operator_equals")?>)<\\/shadow>/g, equalsXml);
        }

        // Put the nested boolean comparisons into if/else statements.
        xml = xml.replace(/(<shadow( type="operator_equals")?>)<\\/shadow>/g,
            equalsBlock);

        xml = '<xml xmlns="http://www.w3.org/1999/xhtml">' + xml + '</xml>';
        var dom = Blockly.Xml.textToDom(xml);
        console.time('Spaghetti domToWorkspace');
        Blockly.Xml.domToWorkspace(dom, workspace);
        console.timeEnd('Spaghetti domToWorkspace');
      }

      function setSoundsEnabled(state) {
        var checkbox = document.getElementById('soundsEnabled');
        checkbox.checked = (state) ? 'checked' : '';
        if (sessionStorage) {
          sessionStorage.setItem('soundsEnabled', state);
        }
      }

      function reportDemo() {
        if (Blockly.selected) {
          workspace.reportValue(
            Blockly.selected.id,
            document.getElementById('reportValue').value
          );
        }
      }

      function setLocale(locale) {
        workspace.getFlyout().setRecyclingEnabled(false);
        var xml = Blockly.Xml.workspaceToDom(workspace);
        Blockly.ScratchMsgs.setLocale(locale);
        Blockly.Xml.clearWorkspaceAndLoadFromXml(xml, workspace);
        workspace.getFlyout().setRecyclingEnabled(true);
      }
      
        // function codeUpdate(event) {
        //   if (connected) {
        //     var code = start + Blockly.JavaScript.workspaceToCode(workspace) + end;
        //     document.getElementById("javascript-viewer").innerHTML = code;
        //   }
        // }
        // workspace.addChangeListener(codeUpdate);
    </script>

    <style>
      html, body {
        height: 100%;
      }

      body {
        background-color: #fff;
        font-family: sans-serif;
        overflow: hidden;
      }

      h1 {
        font-weight: normal;
        font-size: 140%;
      }

      #blocklyDiv {
        float: right;
        height: 95%;
        width: 70%;
      }
      .blocklyToolboxDiv {
        scrollbar-width: 0;
      }
      .blocklyToolboxDiv::-webkit-scrollbar {
          display: none;
      }

      #collaborators {
        float: right;
        width: 30px;
        margin-left: 10px;
      }

      #collaborators > img {
        margin-right: 5px;
        height: 30px;
        padding-bottom: 5px;
        width: 30px;
        border-radius: 3px;
      }

      #importExport {
        font-family: monospace;
      }
    </style>
  </head>

  <body onload="start()">
    <div id="collaborators"></div>
    <div id="blocklyDiv"></div>
    <!-- Simple toolbox -->
    <xml id="toolbox-simple" style="display: none">
      <block type="operator_random">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="operator_lt">
        <value name="OPERAND1">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
        <value name="OPERAND2">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="operator_equals">
        <value name="OPERAND1">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
        <value name="OPERAND2">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="operator_gt">
        <value name="OPERAND1">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
        <value name="OPERAND2">
          <shadow type="text">
            <field name="TEXT"></field>
          </shadow>
        </value>
      </block>
      <block type="operator_and"></block>
      <block type="operator_or"></block>
      <block type="operator_not"></block>
      <block type="operator_join">
        <value name="STRING1">
          <shadow type="text">
            <field name="TEXT">hello</field>
          </shadow>
        </value>
        <value name="STRING2">
          <shadow type="text">
            <field name="TEXT">world</field>
          </shadow>
        </value>
      </block>
      <block type="operator_letter_of">
        <value name="LETTER">
          <shadow type="math_whole_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="STRING">
          <shadow type="text">
            <field name="TEXT">world</field>
          </shadow>
        </value>
      </block>
      <block type="operator_length">
        <value name="STRING">
          <shadow type="text">
            <field name="TEXT">world</field>
          </shadow>
        </value>
      </block>
      <block type="operator_mod">
        <value name="NUM1">
          <shadow type="math_number">
            <field name="NUM"></field>
          </shadow>
        </value>
        <value name="NUM2">
          <shadow type="math_number">
            <field name="NUM"></field>
          </shadow>
        </value>
      </block>
      <block type="operator_round">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM"></field>
          </shadow>
        </value>
      </block>
      <block type="operator_mathop">
        <value name="OPERATOR">
          <shadow type="operator_mathop_menu"></shadow>
        </value>
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM"></field>
          </shadow>
        </value>
      </block>
    </xml>

    <!-- Sidebar -->
    <h1>Vertical Blocks</h1>
    <p>
      <a href="javascript:void(workspace.setVisible(true))">Show</a>
      - <a href="javascript:void(workspace.setVisible(false))">Hide</a>
    </p>

    <form id="options">
        <select name="dir" onchange="document.forms.options.submit()">
          <option value="ltr">LTR</option>
          <option value="rtl">RTL</option>
        </select>
        <select name="toolbox" onchange="document.forms.options.submit()">
          <option value="categories">Categories</option>
          <option value="simple">Simple</option>
        </select>
        <select name="side" onchange="document.forms.options.submit()">
          <option value="start">Start</option>
          <option value="end">End</option>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
        </select>
        <select name="locale" onchange="setLocale(this.value)">
          <option value="en">English</option>
          <option value="ca">Catalan</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="nl">Dutch</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="he">Hebrew</option>
          <option value="hu">Hungarian</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish Gaelic</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="ja-Hira">Japanese(Hira)</option>
          <option value="mi">Maori</option>
          <option value="nb">Norwegian (Bokmal)</option>
          <option value="pt">Portuguese</option>
          <option value="pt-br">Portuguese (Brazil)</option>
          <option value="gd">Scottish Gaelic</option>
          <option value="sr">Serbian</option>
          <option value="sl">Slovenian</option>
          <option value="es">Spanish</option>
          <option value="es-419">Spanish (Latin America)</option>
          <option value="sv">Swedish</option>
          <option value="tr">Turkish</option>
          <option value="uk">Ukranian</option>
          <option value="vi">Vietnamese</option>
          <option value="cy">Welsh</option>
          <option value="zh-cn">Chinese (China)</option>
          <option value="zh-tw">Chinese (TW)</option>
        </select>
      </form>

    <p>
      <input type="button" value="Export to XML" onclick="toXml()">
      &nbsp;
      <input type="button" value="Import from XML" onclick="fromXml()" id="import">
      <br>
      <textarea id="importExport" style="width: 26%; height: 12em"
        onchange="taChange();" onkeyup="taChange()"></textarea>
    </p>

    <hr>

    <p>
      Log events: &nbsp;
      <input type="checkbox" onclick="logEvents(this.checked)" id="logCheck">
    </p>

    <p>
      Stress test: &nbsp;
      <input type="button" value="Sprinkles!" onclick="sprinkles(100)">
      <input type="button" value="Spaghetti!" onclick="spaghetti(3)">
    </p>

    <p>
      Glows: &nbsp;
      <input type="button" value="Glow last clicked block" onclick="glowBlock()" />
      <input type="button" value="Unglow last clicked block" onclick="unglowBlock()" />
      <input type="button" value="Stack glow last clicked block" onclick="glowStack()" />
      <input type="button" value="Stack unglow last clicked block" onclick="unglowStack()" />
    </p>

    <p>
      Log flyout events: &nbsp;
      <input type="checkbox" onclick="logFlyoutEvents(this.checked)" id="logFlyoutCheck">
    </p>

    <p>
      Enable sounds (after refresh): &nbsp;
      <input type="checkbox" onclick="setSoundsEnabled(this.checked)" id="soundsEnabled">
    </p>

    <p>
      <input type="button" value="Undo" onclick="workspace.undo()" />
      <input type="button" value="Redo" onclick="workspace.undo(true)" />
    </p>

    <p>
      Report:
      <input id="reportValue" type="text" value="123" />
      <input type="button" value="Report last clicked block" onclick="reportDemo()" />
    </p>
  </body>
</html>`);
  fs.writeFileSync("./scratch-blocks-simple/blocks_vertical/default_toolbox.js", toolbox);
  fs.writeFileSync("./scratch-blocks-simple/blocks_vertical/block_javascript.js", javascript);
})();