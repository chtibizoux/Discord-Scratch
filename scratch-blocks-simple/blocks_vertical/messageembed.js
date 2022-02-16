'use strict';

goog.provide('Blockly.Blocks.messageembed');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['messageembed_title'] = {
  init: function() {
    this.jsonInit({
      "message0": "title of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_url'] = {
  init: function() {
    this.jsonInit({
      "message0": "url of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_color'] = {
  init: function() {
    this.jsonInit({
      "message0": "color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_timestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_fields'] = {
  init: function() {
    this.jsonInit({
      "message0": "fields of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_thumbnail'] = {
  init: function() {
    this.jsonInit({
      "message0": "thumbnail of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_image'] = {
  init: function() {
    this.jsonInit({
      "message0": "image of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_video'] = {
  init: function() {
    this.jsonInit({
      "message0": "video of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_author'] = {
  init: function() {
    this.jsonInit({
      "message0": "author of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_provider'] = {
  init: function() {
    this.jsonInit({
      "message0": "provider of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_footer'] = {
  init: function() {
    this.jsonInit({
      "message0": "footer of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_hexcolor'] = {
  init: function() {
    this.jsonInit({
      "message0": "hex color of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_length'] = {
  init: function() {
    this.jsonInit({
      "message0": "length of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        }
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "output_string"]
    });
  }
};

Blockly.Blocks['messageembed_equals'] = {
  init: function() {
    this.jsonInit({
      "message0": "equals of %1 embed: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "EMBED"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_addField'] = {
  init: function() {
    this.jsonInit({
      "message0": "add field of %1 name: %2 value: %3 inline: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "INLINE"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_addFields'] = {
  init: function() {
    this.jsonInit({
      "message0": "add fields of %1 fields: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "FIELDS"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_spliceFields'] = {
  init: function() {
    this.jsonInit({
      "message0": "splice fields of %1 index: %2 deleteCount: %3 fields: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "INDEX"
        },
        {
          "type": "input_value",
          "name": "DELETECOUNT"
        },
        {
          "type": "input_value",
          "name": "FIELDS"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setFields'] = {
  init: function() {
    this.jsonInit({
      "message0": "set fields of %1 fields: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "FIELDS"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setAuthor'] = {
  init: function() {
    this.jsonInit({
      "message0": "set author of %1 options: %2 deprecatedIconURL: %3 deprecatedURL: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "DEPRECATEDICONURL"
        },
        {
          "type": "input_value",
          "name": "DEPRECATEDURL"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setColor'] = {
  init: function() {
    this.jsonInit({
      "message0": "set color of %1 color: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "COLOR"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setDescription'] = {
  init: function() {
    this.jsonInit({
      "message0": "set description of %1 description: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "DESCRIPTION"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setFooter'] = {
  init: function() {
    this.jsonInit({
      "message0": "set footer of %1 options: %2 deprecatedIconURL: %3",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
        {
          "type": "input_value",
          "name": "DEPRECATEDICONURL"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setImage'] = {
  init: function() {
    this.jsonInit({
      "message0": "set image of %1 url: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "URL"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setThumbnail'] = {
  init: function() {
    this.jsonInit({
      "message0": "set thumbnail of %1 url: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "URL"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "set timestamp of %1 timestamp: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "TIMESTAMP"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setTitle'] = {
  init: function() {
    this.jsonInit({
      "message0": "set title of %1 title: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "TITLE"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_setURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "set url of %1 url: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "URL"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_toJSON'] = {
  init: function() {
    this.jsonInit({
      "message0": "to json of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_normalizeField'] = {
  init: function() {
    this.jsonInit({
      "message0": "normalize field of %1 name: %2 value: %3 inline: %4",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "NAME"
        },
        {
          "type": "input_value",
          "name": "VALUE"
        },
        {
          "type": "input_value",
          "name": "INLINE"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};

Blockly.Blocks['messageembed_normalizeFields'] = {
  init: function() {
    this.jsonInit({
      "message0": "normalize fields of %1 fields: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "MESSAGEEMBED"
        },
        {
          "type": "input_value",
          "name": "FIELDS"
        },
      ],
      "category": Blockly.Categories.messageembed,
      "extensions": ["colours_messageembed", "shape_statement"]
    });
  }
};
