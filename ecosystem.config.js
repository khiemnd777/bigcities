module.exports = {
  apps: [
    {
      name: 'bigcities-api',
      script: './server.js',
      env: {
        NODE_ENV: "development",
	  },
	  env_production: {
		NODE_ENV: "production",
	  },
	},
  ],
}; 