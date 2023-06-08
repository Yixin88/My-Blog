const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) { //this will be used in npm run dev
    return {
      env: {
        mongodb_username: 'ying',
        mongodb_password: 'ying',
        mongodb_clusterName: 'cluster0',
        mongodb_database: 'my-blog-dev' //we can change different env depending on what phase we are in
      }
    }
  }


  return { //this will be used in production npm run build
    env: {
      mongodb_username: 'ying',
      mongodb_password: 'ying',
      mongodb_clusterName: 'cluster0',
      mongodb_database: 'my-blog'
    }
  }
}