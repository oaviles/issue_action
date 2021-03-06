const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
      const issueTitle = core.getInput("issue-title");
      const issueBody = core.getInput("issue-body");
      const token = core.getInput("repo-token");
  
      const octokit = new github.getOctokit(token);
      
      // API: https://docs.github.com/en/rest/reference/issues#create-an-issue
      const newIssue = await octokit.rest.issues.create({
          repo: github.context.repo.repo,
          owner: github.context.repo.owner,
          title: issueTitle,
          body: issueBody
      });
    } catch (err) {
        core.setFailed(err.message);
    }
  }
  
  run()