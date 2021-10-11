const { MongoClient } = require('mongodb');

const { createInsertOne,
        createInsertMany,
        orderedInserts,
        schemaValidation
        } = require('./create');
const { readFindOne,
        readFind,
        readOperatorIn
        } = require('./read');

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri);

const connection = async () => {
    try {
        await client.connect();

        await schemaValidation(client)

        await createInsertOne(client);
        // await createInsertMany(client)
        // await orderedInserts(client)

        // await readFindOne(client);
        // await readFind(client);
        // await readOperatorIn(client)
        
    } catch (error) {
        console.log("error");
    } finally {
        client.close();
    }
}

connection()
    .then(() => console.log('connection successfull'))
    .catch((error) => console.log(error));

