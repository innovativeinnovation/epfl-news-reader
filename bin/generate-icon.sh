#!/usr/bin/env bash

#
# (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
# See the LICENSE file for more details.
#

BUILD_DIR=/tmp

which convert > /dev/null
if [ 0 -ne $? ]; then echo -e 'convert not found. Install Image Magick'; exit 1; fi

which optipng > /dev/null
if [ 0 -ne $? ]; then echo -e 'optipng not found. Install optipng'; exit 1; fi

# Generate App icon
target=( icon-256 icon-192 icon-152 icon-144 icon-128 )
draw=("roundrectangle 0,0,255,255,30,30" "roundrectangle 0,0,191,191,30,30" "roundrectangle 0,0,151,151,20,20" "roundrectangle 0,0,143,143,20,20" "roundrectangle 0,0,128,128,20,20")
size=(256 192 152 144 128)
for ((i=0; i < ${#target[@]}; i++))
do
  convert -density 72 -resize "${size[$i]}"x"${size[$i]}" assets/gimp/news-icon.png $BUILD_DIR/raw-icon.png
  convert -size "${size[$i]}"x"${size[$i]}" xc:transparent -draw "${draw[$i]}" png:- | convert $BUILD_DIR/raw-icon.png -matte - -compose DstIn -composite $BUILD_DIR/icon.png
  optipng $BUILD_DIR/icon.png
  cp $BUILD_DIR/icon.png src/img/icons/"${target[$i]}".png
done
