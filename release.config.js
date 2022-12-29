/*eslint-disable*/
module.exports = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
    {
      name: 'master',
      channel: 'latest',
    },
    {
      name: 'beta',
      channel: 'beta',
      prerelease: true,
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { type: 'refactor', release: 'patch' },
          { type: 'docs', release: 'patch' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github',
  ],
};
