const path = require('path');

module.exports = {

    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {


        clientLogLevel: 'info',
        Proxy: {

            '/api':{

                target: 'http://localhost:5000'

            }
        }
    }   
};