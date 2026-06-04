# Avatar SDK

Browse characters, episodes, and trivia from Avatar: The Last Airbender and The Legend of Korra

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Avatar

This SDK wraps the Avatar dataset hosted on [Sample APIs](https://sampleapis.com), a free hub that publishes static JSON endpoints for prototyping and demos. The dataset covers the animated series *Avatar: The Last Airbender* (and related *Legend of Korra* characters) and is catalogued on [Free Public APIs](https://freepublicapis.com/avatar).

What you get from the API:

- A list of show characters (Aang, Katara, Sokka, Toph, Zuko, Iroh, Azula, Appa, Momo, and more) with biographical details.
- Episode entries from the series.
- General information about the show / film.
- Trivia-style questions related to the Avatar universe.

The service is open: no API key, no rate-limit headers documented, and CORS is enabled on all endpoints, which makes it well suited to browser demos and tutorials.

## Try it

**TypeScript**
```bash
npm install avatar
```

**Python**
```bash
pip install avatar-sdk
```

**PHP**
```bash
composer require voxgig/avatar-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/avatar-sdk/go
```

**Ruby**
```bash
gem install avatar-sdk
```

**Lua**
```bash
luarocks install avatar-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AvatarSDK } from 'avatar'

const client = new AvatarSDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o avatar-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "avatar": {
      "command": "/abs/path/to/avatar-mcp"
    }
  }
}
```

## Entities

The API exposes 3 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A person, animal, or spirit from the Avatar universe, served from `https://api.sampleapis.com/avatar/characters`. | `/characters` |
| **Episode** | An entry describing an episode of the animated series, served from `https://api.sampleapis.com/avatar/episodes`. | `/episodes` |
| **Question** | A trivia question about the Avatar universe, intended for quiz-style apps. | `/questions` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from avatar_sdk import AvatarSDK

client = AvatarSDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'avatar_sdk.php';

$client = new AvatarSDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/avatar-sdk/go"

client := sdk.NewAvatarSDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Avatar_sdk"

client = AvatarSDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("avatar_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AvatarSDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AvatarSDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AvatarSDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AvatarSDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Avatar

- Upstream: [https://sampleapis.com/api-list/avatar](https://sampleapis.com/api-list/avatar)

- The hosting service ([Sample APIs](https://sampleapis.com)) does not publish an explicit licence for this dataset.
- Content references Avatar: The Last Airbender and The Legend of Korra, which are trademarks of their respective rights holders — use the data for learning, demos, and fan projects rather than commercial republishing.
- No API key or authentication is required; CORS is enabled.

---

Generated from the Avatar OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
