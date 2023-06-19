const pool = require('../connection');


var qb;
const loginUser = async(username, password) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb
        .select('*')
        .where({'username': username})
        .get('users');
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const setRefreshToken = async(username, refreshToken) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb
        .update('users', refreshToken, {'username': username});
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

module.exports = {
    loginUser,
    setRefreshToken
};