const _ = require('lodash');
const moment = require('moment');

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Offline layers example',
        lodash: _.zip(['a', 'b'], [1, 2], [true, false]),
        moment: moment('1980-11-02')
      },        
      
    ),
  };
};
