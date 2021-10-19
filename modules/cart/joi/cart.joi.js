const Joi = require('joi');

module.exports = {
    addSchema:{
        body: Joi.object().required().keys({
            addedBy: Joi.string().required().messages({
                'string.empty':'sorry user id is required',
            }),
            product: Joi.string().required().messages({
                'string.empty':'sorry product id is required',
            }),
    })
}
};