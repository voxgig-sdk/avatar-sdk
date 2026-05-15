
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AvatarSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AvatarSDK.test()
    equal(null !== testsdk, true)
  })

})
