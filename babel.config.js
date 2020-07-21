module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./"
        }
      }
    ],
    [
      "babel-plugin-transform-inline-environment-variables",
      {
        "include": [
          "NODE_ENV"
        ]
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-arrow-functions"
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
}
