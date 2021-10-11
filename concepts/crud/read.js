const readFindOne = async (client) => {
    const result = await client.db('movieData').collection('movies').findOne({name : 'The Last Ship'});

    console.log(result);
}

const readFind = async (client) => {
    // const curser = client.db('movieData').collection('movies').find({url: 'http://www.tvmaze.com/shows/97/the-biggest-loser'});
    const curser = client.db('movieData').collection('movies').find({status : 'Running'});
    const result = await curser.toArray()

    console.log( result.name )
}

//Query Operators

//in
const readOperatorIn = async (client) => {
    const curser = client.db('movieData').collection('movies').find({status : { $in : ['Ended', 'Running']}});
    const result = await curser.toArray();

    console.log(result)

} 



module.exports = { readFindOne, readFind, readOperatorIn }