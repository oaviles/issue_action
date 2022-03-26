# GitHub Action (Create Issue)

This actions helps to create issues programmatically, how to use:

```
on: [workflow_dispatch]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: create-issue
        uses: oaviles/issue-action@v1
        with:
          issue-title: <Your Issue Title / mandatory>
          issue-body: <Your Issue coment / optional but nice to have>
          repo-token: ${{secrets.GITHUB_TOKEN}} 
```

References: 
- [GitHub JavaScrit Action](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action)
- [GitHub Issues API](https://docs.github.com/en/rest/reference/issues#create-an-issue)