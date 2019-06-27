const services = require('../services/products-services');
const mongoose = require('mongoose');
const ERROR =  require('../config/error');

const getById = async function (req, h) {
    try {
        const productID = req.params.id;
        if(!mongoose.Types.ObjectId.isValid(productID)){
            obj ={statusCode: ERROR.Code.INVALID, message: ERROR.Message.InvalidObjectID}
            return h.response(obj);
        }
        
        const result = await services.getById(productID);
        return h.response(result).code(200);
    } catch (err) {
        throw err;
    }
}

const getListByCategory = async function (req, h) {

    try {
        const category = req.query.categories;    
        const result = await services.findProductsByCategory(category);
        return result;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    getById,
    getListByCategory

}