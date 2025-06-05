---
name: Missing docs/manifest.md
about: Automated workflow detected a missing manifest file for documentation updates.
title: 'Action Required: Missing docs/manifest.md'
labels: documentation, action-required, automated
assignees: ''
---

## Automated Documentation Update Skipped

The automated workflow for updating `README.md` and `docs/manifest.md` was skipped for this repository because the `docs/manifest.md` file was not found.

To enable continuous automated documentation updates, please:

1.  **Manually run Jules** (or your preferred AI agent) on this repository to generate the initial `README.md` and `docs/manifest.md` files.

2.  **Review and merge** the pull request created by Jules.

Once these files are present, the GitHub Action will automatically update them on subsequent pushes.

**Repository:** `${{ github.repository }}`
**Workflow Run:** [Link to Workflow Run](https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }})

Thank you!
