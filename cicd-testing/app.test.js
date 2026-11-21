const { test } = require('node:test');
const assert = require('node:assert');
const { add, multiply } = require('./app');

test('Addition test', () => {
    assert.strictEqual(add(5, 3), 8);
});

test('Multiplication test', () => {
    assert.strictEqual(multiply(5, 3), 15);
});
