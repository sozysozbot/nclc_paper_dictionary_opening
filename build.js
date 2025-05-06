import fs from 'fs';

const input = fs.readFileSync('grammar_linzklar_raw.html', { encoding: 'utf-8' });

const output = input.replaceAll(/【/g, ' <span class="linzklar-in-text">').replaceAll(/】/g, '</span> ');

fs.writeFileSync('vivliostyle/0_09_grammar_linzklar.html', output, { encoding: 'utf-8' });