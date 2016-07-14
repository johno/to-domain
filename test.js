import test from 'ava'
import toDomain from './'

test('to-domain does something awesome', t => {
  t.plan(3)

  t.is(toDomain('foo_bar/baz'), 'foo-bar-baz')
  t.is(toDomain('foo/bar/baz'), 'foo-bar-baz')
  t.is(toDomain('foo bar'), 'foo-bar')
})
