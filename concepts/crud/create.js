const createInsertOne = async ( client ) => {
    const result = await client.db('shareB').collection('Books').insertOne({ bookName : "A very new Book"});
    console.log(`New List had been added with id - ${result.insertedId}`);
} 

const createInsertMany = async ( client ) => {
    const result = await client.db('shareB').collection('Books').insertMany([
        {
            _id : 'thinkAndGrowRich',
            bookName : " Think and grow rich",
            authorName : " Nepholean"
        },
        {
            _id : 'naIStam',
            bookName : 'Na istam',
            authorName : 'RGV'
        },
        {
            '_id' : 'goodHabbitsAndBadHabbits',
            bookName : 'Good Habbits and Bad Habbits',
            authorName : 'Wendy Woods'
        }
    ]);

    console.log(result.insertedIds);
}

const orderedInserts = async ( client ) => {
    const result = await client.db('shareB').collection('Books').insertMany([
        {
            _id : 'naIStam',
            bookName : 'VLSI',
            authorName : 'vlsi author'
        },
        {
            '_id' : 'lic',
            bookName : "LIC",
            authorName : "lic author"
        }
    ], {ordered : false});

    console.log(result.insertedIds);
}

module.exports = {
    createInsertOne, createInsertMany, orderedInserts
}
