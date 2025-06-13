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