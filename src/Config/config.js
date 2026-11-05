module.exports = {
  token: process.env.TOKEN,
  databaseUrl: process.env.DATABASE_URL,
  nodes: [
    {
      identifier: "LexM8",
      host: "lavalink.lexnet.cc",
      port: 443,
      password: "lexn3tl@val!nk",
      secure: true
    },
    {
      identifier: "AlexanderOF",
      host: "eu.lavalink.alexanderof.xyz",
      port: 2333,
      password: "lavalink",
      secure: false
    }
  ]
};
