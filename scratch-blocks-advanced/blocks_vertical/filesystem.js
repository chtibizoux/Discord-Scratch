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

goog.provide('Blockly.Blocks.filesystem');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['filesystem_readfile'] = {
  init: function() {
    this.jsonInit({
      "message0": "read file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "output_string"]
    });
  }
};

Blockly.Blocks['filesystem_writefile'] = {
  init: function() {
    this.jsonInit({
      "message0": "write %2 to file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        },
        {
          "type": "input_value",
          "name": "DATA"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_exists'] = {
  init: function() {
    this.jsonInit({
      "message0": "file or directory %1 exists",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "output_boolean"]
    });
  }
};

Blockly.Blocks['filesystem_appendfile'] = {
  init: function() {
    this.jsonInit({
      "message0": "append %2 to file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        },
        {
          "type": "input_value",
          "name": "DATA"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_copyfile'] = {
  init: function() {
    this.jsonInit({
      "message0": "copy file %1 to file %2",
      "args0": [
        {
          "type": "input_value",
          "name": "SRC"
        },
        {
          "type": "input_value",
          "name": "DEST"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_renamefile'] = {
  init: function() {
    this.jsonInit({
      "message0": "rename file %1 to %2",
      "args0": [
        {
          "type": "input_value",
          "name": "OLD"
        },
        {
          "type": "input_value",
          "name": "NEW"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_removefile'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove file %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_readdir'] = {
  init: function() {
    this.jsonInit({
      "message0": "read directory %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_mkdir'] = {
  init: function() {
    this.jsonInit({
      "message0": "make directory %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};

Blockly.Blocks['filesystem_rmdir'] = {
  init: function() {
    this.jsonInit({
      "message0": "remove directory %1",
      "args0": [
        {
          "type": "input_value",
          "name": "PATH"
        }
      ],
      "category": Blockly.Categories.filesystem,
      "extensions": ["colours_filesystem", "shape_statement"]
    });
  }
};