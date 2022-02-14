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
Blockly.Blocks['stickerpack_skuId'] = {
  init: function() {
    this.jsonInit({
      "message0": "skuId of %1",
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
Blockly.Blocks['stickerpack_coverStickerId'] = {
  init: function() {
    this.jsonInit({
      "message0": "coverStickerId of %1",
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
Blockly.Blocks['stickerpack_bannerId'] = {
  init: function() {
    this.jsonInit({
      "message0": "bannerId of %1",
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
Blockly.Blocks['stickerpack_createdTimestamp'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdTimestamp of %1",
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
Blockly.Blocks['stickerpack_createdAt'] = {
  init: function() {
    this.jsonInit({
      "message0": "createdAt of %1",
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
Blockly.Blocks['stickerpack_coverSticker'] = {
  init: function() {
    this.jsonInit({
      "message0": "coverSticker of %1",
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
      "message0": "bannerURL of %1 options: %2",
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