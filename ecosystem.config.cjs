module.exports = {
  apps: [
    {
      name: "gostaresh-website",
      exec_mode: "cluster",
      instances: "max",
      script: "./server.mjs",
      env: {
        NODE_ENV: "production",

      },
    },
  ],
};
