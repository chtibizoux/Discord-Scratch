'use strict';

goog.provide('Blockly.Blocks.stickerpack');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');
Blockly.Blocks['stickerpack_id'] = {
  init: function() {
    this.jsonInit({
      "message0": "id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_stickers'] = {
  init: function() {
    this.jsonInit({
      "message0": "stickers of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_name'] = {
  init: function() {
    this.jsonInit({
      "message0": "name of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_skuid'] = {
  init: function() {
    this.jsonInit({
      "message0": "sku id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_coverstickerid'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover stickerid of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_description'] = {
  init: function() {
    this.jsonInit({
      "message0": "description of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_bannerid'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner id of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_createdtimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "created timestamp of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_createdat'] = {
  init: function() {
    this.jsonInit({
      "message0": "created at of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_coversticker'] = {
  init: function() {
    this.jsonInit({
      "message0": "cover sticker of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_client'] = {
  init: function() {
    this.jsonInit({
      "message0": "client of %1",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        }
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "output_string"]
    });
  }
};

Blockly.Blocks['stickerpack_bannerURL'] = {
  init: function() {
    this.jsonInit({
      "message0": "banner url of %1 options: %2",
      "args0": [
        {
          "type": "input_value",
          "name": "STICKERPACK"
        },
        {
          "type": "input_value",
          "name": "OPTIONS"
        },
      ],
      "category": Blockly.Categories.stickerpack,
      "extensions": ["colours_stickerpack", "shape_statement"]
    });
  }
};
