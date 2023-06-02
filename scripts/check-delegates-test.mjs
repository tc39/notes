import { strict as assert } from 'node:assert';
import { checkDelegates } from './check-delegates.mjs';

const lex = `Rob Palmer (RPR)\nUjjwal Sharma (USA)\nChris de Almeida (CDA)`;
const missing = `Chris de Almeida (CDA)\nRob Palmer\nUjjwal Sharma (USA)`;
const uppercaseLatin = `Chris de Almeida (CDA)\nRob Palmer (竄)\nUjjwal Sharma (USA)`;
const twoLetter = `Chris de Almeida (CDA)\nRob Palmer (RP)\nUjjwal Sharma (USA)`;
const threeLetter = `Chris de Almeida (CDA)\nRob Palmer (ROBPALMER)\nUjjwal Sharma (USA)`;
const duplicate = `Chris de Almeida (CDA)\nRob Palmer (RPR)\nUjjwal Sharma (USA)\nUjjwal Sharma (USA)`;
const valid = `Chris de Almeida (CDA)\nMichael Ficarra (MF)\nRob Palmer (RPR)\nUjjwal Sharma (USA)`;

assert.throws(() => checkDelegates(lex), { message: 'Line 3: Not in lexicographic order.' }); // also validates expected line number
assert.throws(() => checkDelegates(missing), { message: /Missing abbreviation for/ });
assert.throws(() => checkDelegates(uppercaseLatin), { message: /Abbreviations must be all uppercase Latin letters/ });
assert.throws(() => checkDelegates(twoLetter), { message: /not in allowlist. New delegate abbreviations must be three letters/ });
assert.throws(() => checkDelegates(threeLetter), { message: /New delegate abbreviations must be three letters/ });
assert.throws(() => checkDelegates(duplicate), { message: /Conflicting usage on line/ });

assert.doesNotThrow(() => checkDelegates(valid));
