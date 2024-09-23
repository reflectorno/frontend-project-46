#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
.description('Compares two configuration files and shows a difference.')
.version('0.9.0')

program.parse();