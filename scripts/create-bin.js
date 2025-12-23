#!/usr/bin/env node
import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const distDir = join(__dirname, '..', 'dist');

// Create Windows .cmd file
const cmdContent = `@echo off
node "%~dp0index.js" %*
`;

// Create PowerShell .ps1 file
const ps1Content = `#!/usr/bin/env pwsh
node "$PSScriptRoot/index.js" $args
`;

writeFileSync(join(distDir, 'cclsp.cmd'), cmdContent, 'utf8');
writeFileSync(join(distDir, 'cclsp.ps1'), ps1Content, 'utf8');

console.log('✓ Created Windows executable files: cclsp.cmd, cclsp.ps1');

