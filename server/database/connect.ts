import mongoose from 'mongoose';
import consola from 'consola';

mongoose.connect('mongodb+srv://admin:1dbGod@cluster0-wrvd8.gcp.mongodb.net/test?retryWrites=true&w=majority\n', {
  dbName: 'PathFinder',
  useNewUrlParser: true
})
  .catch(e => {
    consola.error(e);
    throw e;
  });
