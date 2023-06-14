const pool = require('../connection');

var qb;

const getOrderDetails = async() =>{
    try{
        qb = await pool.get_connection();
        const response = await qb
        .select('o.order_id, u.username, p.product_name, p.price as ordered_price')
        .from('orders o')
        .join('users u','o.user_id = u.user_id', 'left')
        .join('products p', 'o.product_id = p.product_id', 'left')
        .get();
        console.log(response);
        console.log('Last query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const getOrderDetailsById = async(id) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb
        .select('o.order_id, u.username, p.product_name, p.price as ordered_price')
        .from('orders o')
        .join('users u','o.user_id = u.user_id', 'left')
        .join('products p', 'o.product_id = p.product_id', 'left')
        .where('order_id', id)
        .get();
        console.log('Last query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const deleteOrderDetails = async(id) => {
    try{
        qb = await pool.get_connection();
        const response = await qb.delete('orders', {'order_id': id});
        console.log('Query ran: ' + qb.last_query());
        return response
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}


module.exports = {
    getOrderDetails,
    getOrderDetailsById,
    deleteOrderDetails
}