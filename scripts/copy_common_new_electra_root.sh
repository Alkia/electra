#!/bin/bash

DESTINATION="/home/alkia/electra"
SOURCE_DIR="/home/alkia/electra01"

# Copy Scripts
cp $SOURCE_DIR/scripts $DESTINATION -r
cp $SOURCE_DIR/docs $DESTINATION -r
cp $SOURCE_DIR/vue/public $DESTINATION/vue  -r
cp $SOURCE_DIR/vue/.env $DESTINATION/vue  
cp $DESTINATION/vue/index.html $DESTINATION/vue/index.html.orig
cp $SOURCE_DIR/vue/index.html $DESTINATION/vue

# Change the VUE template Menu
# cp $SOURCE_DIR/vue/public $DESTINATION/vue/public  -r
cp $SOURCE_DIR/Makefile $DESTINATION/Makefile 
cp $SOURCE_DIR/Makefile2 $DESTINATION/Makefile2  
cp $SOURCE_DIR/readme.md $DESTINATION/readme.md  