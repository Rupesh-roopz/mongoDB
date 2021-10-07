const { MongoClient } = require('mongodb');

const { createInsertOne,
        createInsertMany,
        orderedInserts 
        } = require('./create');
const { readFindOne,
        readFind 
        } = require('./read');

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri);

const connection = async () => {
    try {
        await client.connect();

        // await createInsertOne(client);
        // await createInsertMany(client)
        // await orderedInserts(client)

        // await readFindOne(client);
        await readFind(client);
        
    } catch (error) {
        console.log('error ' + error);
    } finally {
        client.close();
    }
}

connection()
    .then(() => console.log('connection successfull'))
    .catch((error) => console.log(error));

