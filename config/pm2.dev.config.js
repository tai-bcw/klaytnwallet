
module.exports = {
  apps: [{
    name: 'klaytnwallet-baobab-frontend',
    script: './klaytnwalletFront.js',
    args: 'webpack.config.js',

    /**
     * Execution mode
     * - The number of instances is 1
     * - Manage log files as one
     */
    instances: 1,
    merge_logs: true,

    env: {
      NODE_ENV: 'dev',
    },

    output: '/var/log/nodejs/ground-x/app/klaytnwallet-baobab-frontend/out.log',
    error: '/var/log/nodejs/ground-x/app/klaytnwallet-baobab-frontend/error.log',
  }],
};
