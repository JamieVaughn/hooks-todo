module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/stories/components/**/*.stories.@(js|jsx|ts|tsx)",

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y'
  ],
  "core": {
    "builder": "storybook-builder-vite"
  }
}
