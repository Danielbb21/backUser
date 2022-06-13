module.exports =
  {
    "type": "postgres",
    "host":  'localhost',
    "port": 5435,
    "username": 'postgres',
    "password": 'postgress' ,
    "database": 'mm',
    "migrations": ["./src/migrations/*.ts"],
    "entities": ["./src/modules/**/entities/*.{ts,js}"],
    "cli": {
      "migrationsDir": "./src/migrations"
    },

    "logging": false,
    "syncronize": true
  }
