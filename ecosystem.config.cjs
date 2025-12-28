module.exports = {
  apps: [
    {
      name: "gostaresh-website",
      exec_mode: "cluster",
      instances: "max",
      script: "./server.mjs",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOST: "0.0.0.0",
      },
    },
  ],
};
