const pool = require('../connection');


var qb;

const getAllUsers = async () => {
    try {
      qb = await pool.get_connection();
      const response = await qb.select('*').get('users');
      console.log('Query ran: ' + qb.last_query());
      return response;
    } catch (err) {
      console.log(err);
    } finally {
        qb.release();
    }
};

const getAllUsersById = async(id) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.select('*').where({'user_id =': id}).get('users');
        console.log('Query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err)
    }finally{
        qb.release();
    }
}

const postUserDetails = async(data) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.insert('users',{
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name : data.last_name,
            username: data.username,
            email: data.email,
            password: data.password
        })
        console.log('Query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
    
}

const updateUserDetails = async(id, data) => {
    try{
        qb = await pool.get_connection();
        const response = await qb.update('users', {
            first_name: data.first_name,
            middle_name: data.middle_name,
            last_name : data.last_name,
            username: data.username,
            email: data.email,
            password: data.password
        },{'user_id': id});
        console.log('Query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err)
    }finally{
        qb.release();
    }
}

const deleteUserDetails = async(id) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.delete('users', {'user_id': id});
        console.log('Query ran: ' + qb.last_query());
        return response
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}


module.exports = {
    getAllUsers,
    getAllUsersById,
    postUserDetails,
    updateUserDetails,
    deleteUserDetails
}