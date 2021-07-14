import mongoose from 'mongoose';
export async function connection() {
    try {
        const db = await mongoose.connect(process.env.DATABASE_URL, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
            .then(db => console.log('db on'));
        return db;
    } catch (err) {
        console.log(`error connection db -->  ${err}`)
    }
}