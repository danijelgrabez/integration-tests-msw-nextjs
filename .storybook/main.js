module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../pages/**/*.stories.mdx',
    '../pages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  stories: ['../components/**/+(*.stories).(tsx|js|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
