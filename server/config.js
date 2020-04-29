module.exports = {
  port: 8080,
  db: {
    prod: process.env.DATABASE_URL || 'mongodb+srv://Admin:admin@cluster-knvz2.mongodb.net/test?retryWrites=true&w=majority',
    test: 'mongodb://localhost/reddit_test',
    options: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 500
    }
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'development_secret',
    expiry: '7d'
  }
};
