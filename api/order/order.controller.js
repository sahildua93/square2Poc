'use strict';

const casperRunner = require('./../../services/casperRunner');

module.exports = config => {

    const orderController = {};

    /**
     * Fetch list of the beers
     * @param req
     * @param res
     */

    orderController.createOrder = (req, res) => {
        const orderParams = {
            testing:'hola',
            name:'world'
        };

        casperRunner.run(orderParams, (err, overallOutput)=>{
            console.log('I FINISHED!!!');
            console.log(overallOutput);
            if(err){
                res.status(500);
                res.send({
                    msg:'some error ocurred executing casper script',
                    err:err
                })
            }else{
                res.json(overallOutput.output);
            }
        });
    };

    return orderController;
};