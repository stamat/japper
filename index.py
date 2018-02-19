#!/usr/bin/env python
# -*- coding: utf-8 -*-
import os, json

selected_dir = './'
files = os.listdir(selected_dir)

targetf_name = 'combined.js'
targetf = open(targetf_name, 'w')
targetf.write('var SCHEMA = {};\n\n')

for f in files:
    fpath = os.path.join(selected_dir, f)
    ext = os.path.splitext(f)[1]

    if os.path.isfile(fpath):
        if ext == '.json':
            sourcef = open(fpath, 'r');
            targetf.write('SCHEMA["'+f+'"] = ');

            for line in sourcef:
                targetf.write(line)

            targetf.write(';\n\n');
        elif ext == '.md':

            sourcef = open(fpath, 'r');
            text = '';
            for line in sourcef:
                text += line

            targetf.write('var README = '+ json.dumps(text)+';\n\n');
