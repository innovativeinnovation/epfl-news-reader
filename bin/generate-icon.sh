#!/usr/bin/env bash

#
# Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
# Modified work (c) William Belle, 2018.
# See the LICENSE file for more details.
#

BUILD_DIR=/tmp

which convert > /dev/null
if [ 0 -ne $? ]; then echo -e 'convert not found. Install Image Magick'; exit 1; fi

which optipng > /dev/null
if [ 0 -ne $? ]; then echo -e 'optipng not found. Install optipng'; exit 1; fi

# Generate App icon
target=( icon-512 icon-256 icon-192 icon-152 icon-144 icon-128 )
draw=("roundrectangle 0,0,511,511,50,50" "roundrectangle 0,0,255,255,30,30" "roundrectangle 0,0,191,191,30,30" "roundrectangle 0,0,151,151,20,20" "roundrectangle 0,0,143,143,20,20" "roundrectangle 0,0,128,128,20,20")
size=(512 256 192 152 144 128)
for ((i=0; i < ${#target[@]}; i++))
do
  convert -density 72 -resize "${size[$i]}"x"${size[$i]}" assets/gimp/news-icon.png $BUILD_DIR/raw-icon.png
  convert -size "${size[$i]}"x"${size[$i]}" xc:transparent -draw "${draw[$i]}" png:- | convert $BUILD_DIR/raw-icon.png -matte - -compose DstIn -composite $BUILD_DIR/icon.png
  optipng $BUILD_DIR/icon.png
  cp $BUILD_DIR/icon.png src/img/icons/"${target[$i]}".png
done

# Apple touch icons
target=( touch-icon-iphone-retina touch-icon-ipad-retina touch-icon-ipad touch-icon-iphone )
size=(180 167 152 120)
for ((i=0; i < ${#target[@]}; i++))
do
  convert -density 72 -resize "${size[$i]}"x"${size[$i]}" assets/gimp/news-icon.png $BUILD_DIR/icon.png
  optipng $BUILD_DIR/icon.png
  cp $BUILD_DIR/icon.png src/img/icons/"${target[$i]}".png
done

# Favicons
convert -density 72 -resize 32x32 assets/gimp/news-icon.png src/img/favicon-32.png
convert -density 72 -resize 16x16 assets/gimp/news-icon.png src/img/favicon.png
optipng src/img/*.png
convert $BUILD_DIR/favicon.png $BUILD_DIR/favicon-32.png -colors 256 src/img/favicon.ico
