module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.c0hax.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', ),
        database: env('DATABASE_NAME', 'bigcities'),
        username: env('DATABASE_USERNAME', 'bigcities'),
        password: env('DATABASE_PASSWORD', 'jB8oyiOH3IdMzIUi'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
