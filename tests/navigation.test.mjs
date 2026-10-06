import { test } from 'node:test';
import assert from 'node:assert/strict';
import { currentBook } from '../site/assets/js/lib/scope.js';
import { prefs } from '../site/assets/js/lib/store.js';

test('reading shortcuts follow the displayed book before a remembered study scope', () => {
  const before = { scope: prefs.scope, lastRead: prefs.lastRead };
  const work = { id: 'homer.iliad', available: [1, 2, 13] };
  const cat = { works: [work], by: {
    works: new Map([[work.id, work]]),
    scopes: new Map([['homer.iliad.13', { kind: 'book', work: work.id, book: 13 }]]),
  } };
  try {
    prefs.scope = 'homer.iliad.13';
    prefs.lastRead = { work: work.id, book: 2 };
    for (const name of ['read', 'book', 'vocab']) {
      assert.deepEqual(currentBook(cat, { name, parts: [work.id, '1'] }), { work: work.id, book: 1 });
    }
    assert.deepEqual(currentBook(cat, { name: 'index', parts: [] }), { work: work.id, book: 13 });
    assert.deepEqual(currentBook(cat, { name: 'read', parts: [work.id, '24'] }), { work: work.id, book: 13 });
    prefs.scope = 'all';
    assert.deepEqual(currentBook(cat), { work: work.id, book: 2 });
    prefs.lastRead = null;
    assert.deepEqual(currentBook(cat), { work: work.id, book: 13 });
  } finally { Object.assign(prefs, before); }
});
