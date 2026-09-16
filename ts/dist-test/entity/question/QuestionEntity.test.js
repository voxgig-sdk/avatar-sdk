"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('QuestionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AVATAR_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AVATAR_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AvatarSDK.test();
        const ent = testsdk.Question();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AVATAR_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'question.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "answer", "req": false, "short": "The correct answer to the trivia question", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "difficulty", "req": false, "short": "Difficulty level of the question", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the trivia question", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "question", "req": false, "short": "The trivia question text", "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "question", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /questions", "json": "{\"operationId\":\"getTriviaQuestions\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"answer\":{\"description\":\"The correct answer to the trivia question\",\"type\":\"string\"},\"difficulty\":{\"description\":\"Difficulty level of the question\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the trivia question\",\"type\":\"integer\"},\"question\":{\"description\":\"The trivia question text\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of trivia questions\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/questions", "segments": [{ "lit": "questions" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /questions/{id}", "json": "{\"operationId\":\"getTriviaQuestionById\",\"parameters\":[{\"description\":\"The unique identifier of the trivia question\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"answer\":{\"description\":\"The correct answer to the trivia question\",\"type\":\"string\"},\"difficulty\":{\"description\":\"Difficulty level of the question\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the trivia question\",\"type\":\"integer\"},\"question\":{\"description\":\"The trivia question text\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with trivia question details\"},\"404\":{\"description\":\"Question not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/questions/{id}", "segments": [{ "lit": "questions" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "question", "name__orig": "question", "Name": "Question", "name_": "question", "name-": "question", "NAME": "QUESTION", "index$": 2 }, { "active": true, "entity": "question", "key$": "BasicQuestionFlow", "kind": "basic", "name": "BasicQuestionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "question_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "question_ref01", "srcdatavar": "question_ref01_data", "suffix": "_dt0" }, "match": { "id": "question01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-question_ref01" } }], "index$": 1 }] }, 'Question');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let question_ref01_data = Object.values(setup.data.existing.question)[0];
        // LIST
        const question_ref01_ent = client.Question();
        const question_ref01_match = {};
        const question_ref01_list = (await question_ref01_ent.list(question_ref01_match)).map((e) => e.data());
        // LOAD
        const question_ref01_match_dt0 = {};
        question_ref01_match_dt0.id = question_ref01_data.id;
        const question_ref01_data_dt0 = (await question_ref01_ent.load(question_ref01_match_dt0)).data();
        (0, node_assert_1.default)(question_ref01_data_dt0.id === question_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/question/QuestionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AvatarSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['question01', 'question02', 'question03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AVATAR_TEST_QUESTION_ENTID': idmap,
        'AVATAR_TEST_LIVE': 'FALSE',
        'AVATAR_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['AVATAR_TEST_QUESTION_ENTID'];
    const live = 'TRUE' === env.AVATAR_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AVATAR_TEST_QUESTION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AvatarSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=QuestionEntity.test.js.map