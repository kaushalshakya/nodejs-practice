const pool = require('../../connection');

var qb;

const removeRefreshToken = async(username) =>{
    try{
    qb = await pool.get_connection();
    const response = qb.update('users', {'refresh_token': null}, {'username': username});
    console.log('Last query ran: ', qb.last_query());
    return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

module.exports = removeRefreshToken;