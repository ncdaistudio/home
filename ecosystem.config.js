module.exports = {
  apps: [
    {
      name: 'ncdai-web-alpha',
      script: 'yarn start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
