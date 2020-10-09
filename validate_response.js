const chai = require('chai');
const expect = chai.expect;
const axios = require('axios').default;
const chaiResponseValidator = require('chai-openapi-response-validator');

// Load your OpenAPI from URL
before(async function() {
    const axios = require('axios');
    const response = await axios.get('https://beta.swissmodel.expasy.org/docs/3dbeacons_openapi.js');
    const openApiSpec = response.data; 
    chai.use(chaiResponseValidator(openApiSpec));
});

// Or from file. Requires absolute path
//chai.use(chaiResponseValidator('D:/code/api/3dbeacons_openapi.js.json'));

describe('GET P60995.json', function() {
  it('should satisfy OpenAPI spec', async function() {
    const res = await axios.get('https://beta.swissmodel.expasy.org/3d-beacons/uniprot/P60995.json');
    expect(res.status).to.equal(200);
    expect(res).to.satisfyApiSpec;
  });
});
