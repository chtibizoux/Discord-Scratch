@echo off
wsl npm run prepublish
copy blockly_compressed_vertical.js ..\public\js\advanced_blockly_compressed_vertical.js
copy blocks_compressed_vertical.js ..\public\js\advanced_blocks_compressed_vertical.js
copy blocks_compressed.js ..\public\js\advanced_blocks_compressed.js
copy msg\scratch_msgs.js ..\public\js\advanced_scratch_msgs.js
