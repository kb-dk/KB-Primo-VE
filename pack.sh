#!/usr/bin/env bash
rm -r package/KGL/
cd package
mkdir KGL
cd KGL
mkdir css
mkdir fonts
mkdir html
mkdir js
mkdir img
cp -a ../../css/custom1.css css/
cp -a ../../js/custom.js js/
cp -a ../../html/* html/
cp -a ../../fonts/* fonts/
cp -a ../../img/* img/