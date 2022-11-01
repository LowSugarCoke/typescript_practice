"use strict";
const implementAddition = {
    addition(p1, p2) {
        if (typeof p1 === 'number' && typeof p2 === 'number') {
            return p1 + p2;
        }
        else if (typeof p1 === 'string' && typeof p2 === 'string') {
            return parseInt(p1, 10) + parseInt(p2, 10);
        }
        throw new Error(`Parameter \`p1\` and \`p2\` should only accept both \`number\`type or \`string\` type.`);
    }
};
