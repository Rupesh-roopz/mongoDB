const readFindOne = async (client) => {
    const result = await client.db('movieData').collection('movies').findOne({name : 'The Last Ship'});

    console.log(result);
}

const readFind = async (client) => {
    const curser = client.db('movieData').collection('movies').find({url: 'http://www.tvmaze.com/shows/97/the-biggest-loser'});
    const result = await curser.toArray()

    console.log( result )

}
module.exports = { readFindOne, readFind }