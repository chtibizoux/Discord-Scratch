'use strict';

goog.provide('Blockly.Blocks.messageattachment');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messageattachment_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_size'] = {
  init: function() {
    this.jsonInit({
      "message0": "size of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_proxyurl'] = {
  init: function() {
    this.jsonInit({
      "message0": "proxy url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_height'] = {
  init: function() {
    this.jsonInit({
      "message0": "height of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_width'] = {
  init: function() {
    this.jsonInit({
      "message0": "width of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_contenttype'] = {
  init: function() {
    this.jsonInit({
      "message0": "content type of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_ephemeral'] = {
  init: function() {
    this.jsonInit({
      "message0": "ephemeral of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_spoiler'] = {
  init: function() {
    this.jsonInit({
      "message0": "spoiler of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        }
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "output_string"]
    });
  }
};

Blockly.Blocks['messageattachment_setDescription'] = {
  init: function() {
    this.jsonInit({
      "message0": "set description of %1 description: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        },
        {
          "type": "input_value",
          "name": "DESCRIPTION"
        },
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageattachment_setFile'] = {
  init: function() {
    this.jsonInit({
      "message0": "set file of %1 attachment: %2 name: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        },
        {
          "type": "input_value",
          "name": "ATTACHMENT"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageattachment_setName'] = {
  init: function() {
    this.jsonInit({
      "message0": "set name of %1 name: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageattachment_setSpoiler'] = {
  init: function() {
    this.jsonInit({
      "message0": "set spoiler of %1 spoiler: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEATTACHMENT"
        },
        {
          "type": "input_value",
          "name": "SPOILER"
        },
      ],
      "category": Blockly.Categories.messageattachment,
      "extensions": ["colours_messageattachment", "shape_statement"]
    });
  }
};
