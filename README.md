# github-action-test

# Trigger workflow

## Step1: workflow settings
```yml
on:
  repository_dispatch:
    types: [external-trigger]
```

## Step2: http post
```bash
curl -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  -H "Authorization: token YOUR_GITHUB_TOKEN" \
  https://api.github.com/repos/OWNER/REPO/dispatches \
  -d '{"event_type":"external-trigger", "client_payload": { "branch": "mock-branch"} }'
```
然後在 workflow 中用 ${{ github.event.client_payload.branch }} 取用。

## env
可以在 yml 裡使用 env，這樣就不需要在寫到 .env 了。YA
```yml
- name: npm install, test and build
  env:
    MOCK_KEY: ${{ secrets.MOCK_KEY }}
```

不需要這樣：
`echo "SECRET_KEY=${{ secrets.SECRET_KEY }}" >> .env`