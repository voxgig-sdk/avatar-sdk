

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AvatarSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('QuestionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AVATAR_TEST_LIVE=TRUE.
  afterEach(liveDelay('AVATAR_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AvatarSDK.test()
    const ent = testsdk.Question()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AVATAR_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'question.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"answer","req":false,"short":"The correct answer to the trivia question","type":"`$STRING`","index$":0},{"active":true,"name":"difficulty","req":false,"short":"Difficulty level of the question","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"short":"Unique identifier for the trivia question","type":"`$INTEGER`","index$":2},{"active":true,"name":"question","req":false,"short":"The trivia question text","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"question","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /questions","json":"{\"operationId\":\"getTriviaQuestions\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"answer\":{\"description\":\"The correct answer to the trivia question\",\"type\":\"string\"},\"difficulty\":{\"description\":\"Difficulty level of the question\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the trivia question\",\"type\":\"integer\"},\"question\":{\"description\":\"The trivia question text\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of trivia questions\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/questions","segments":[{"lit":"questions"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$INTEGER`","index$":0}]},"contract":{"id":"GET /questions/{id}","json":"{\"operationId\":\"getTriviaQuestionById\",\"parameters\":[{\"description\":\"The unique identifier of the trivia question\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"answer\":{\"description\":\"The correct answer to the trivia question\",\"type\":\"string\"},\"difficulty\":{\"description\":\"Difficulty level of the question\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the trivia question\",\"type\":\"integer\"},\"question\":{\"description\":\"The trivia question text\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with trivia question details\"},\"404\":{\"description\":\"Question not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/questions/{id}","segments":[{"lit":"questions"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"question","name__orig":"question","Name":"Question","name_":"question","name-":"question","NAME":"QUESTION","index$":2}, {"active":true,"entity":"question","key$":"BasicQuestionFlow","kind":"basic","name":"BasicQuestionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"question_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"question_ref01","srcdatavar":"question_ref01_data","suffix":"_dt0"},"match":{"id":"question01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-question_ref01"}}],"index$":1}]}, 'Question')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let question_ref01_data = Object.values(setup.data.existing.question)[0] as any

    // LIST
    const question_ref01_ent = client.Question()
    const question_ref01_match: any = {}

    const question_ref01_list = (await question_ref01_ent.list(question_ref01_match)).map((e: any) => e.data())


    // LOAD
    const question_ref01_match_dt0: any = {}
    question_ref01_match_dt0.id = question_ref01_data.id
    const question_ref01_data_dt0 = (await question_ref01_ent.load(question_ref01_match_dt0)).data()
    assert(question_ref01_data_dt0.id === question_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/question/QuestionTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AvatarSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['question01','question02','question03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AVATAR_TEST_QUESTION_ENTID': idmap,
    'AVATAR_TEST_LIVE': 'FALSE',
    'AVATAR_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AVATAR_TEST_QUESTION_ENTID']

  const live = 'TRUE' === env.AVATAR_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AVATAR_TEST_QUESTION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AvatarSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AVATAR_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
