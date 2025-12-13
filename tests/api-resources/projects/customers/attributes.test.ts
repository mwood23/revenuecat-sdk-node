// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revcat-do-not-use';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource attributes', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.customers.attributes.create(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        attributes: [
          { name: '$email', value: 'support@revenuecat.com' },
          { name: '$displayName', value: 'John Appleseed' },
          { name: 'my_custom_attr', value: 'custom value' },
        ],
      },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.projects.customers.attributes.create(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        attributes: [
          { name: '$email', value: 'support@revenuecat.com' },
          { name: '$displayName', value: 'John Appleseed' },
          { name: 'my_custom_attr', value: 'custom value' },
        ],
      },
    );
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.customers.attributes.list(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.projects.customers.attributes.list('19b8de26-77c1-49f1-aa18-019a391603e2', {
      project_id: 'proj1ab2c3d4',
      limit: 10,
      starting_after: 'ent12354',
    });
  });
});
