const pool = require('../connection');


var qb;

const getProductDetails = async() =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.select('*').get('products');
        console.log("Last query ran: " + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const getProductDetailsById = async(id) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.select('*').where({'product_id =' : id}).get('products');
        console.log("Last query ran: " + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const postProductDetails = async(data) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.insert('products',{
            product_name : data.product_name,
            product_description : data.product_description,
            price : data.price
        })
        console.log('Query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err)
    }finally{
        qb.release();
    }
}

const updateProductDetails = async(id, data) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.update('products',{
            product_name : data.product_name,
            product_description : data.product_description,
            price : data.price
        }, {'product_id': id});
        console.log('Last query ran: ' + qb.last_query());
        return response;
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

const deleteProductDetails = async(id) =>{
    try{
        qb = await pool.get_connection();
        const response = await qb.delete('products', {'product_id': id});
        console.log('Query ran: ' + qb.last_query());
        return response
    }catch(err){
        console.log(err);
    }finally{
        qb.release();
    }
}

module.exports = {
    getProductDetails,
    getProductDetailsById,
    postProductDetails,
    updateProductDetails,
    deleteProductDetails
}