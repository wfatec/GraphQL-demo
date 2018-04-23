import mongoose from 'mongoose'
import config from '../config'

require('./schema/info')
require('./schema/student')

export const database = () => {
    mongoose.set('debug',true);
    mongoose.connect(config.dbPath);

    mongoose.connection.on('desconnected', () => {
        mongoose.connect(config.dbPath);
    })
    mongoose.connection.on('error', err => {
        console.error(err);
    });
    mongosoe.connection.on('open', async () => {
        console.log('Connected to MongoDB', config.dbPath);
    })
}
