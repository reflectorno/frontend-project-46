#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('0.9.0')
.helpOption('-h, --help', 'output usage information')
.option('-f, --format [type]', 'output format')
.arguments('<filepath1> <filepath2>')

program.parse();