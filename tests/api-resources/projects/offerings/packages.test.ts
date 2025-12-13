// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.offerings.packages.create('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'monthly with one-week trial',
      lookup_key: 'monthly',
    });
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
    const response = await client.projects.offerings.packages.create('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'monthly with one-week trial',
      lookup_key: 'monthly',
      position: 1,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.offerings.packages.list('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
    });
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
    const response = await client.projects.offerings.packages.list('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      expand: ['items.product'],
      limit: 10,
      starting_after: 'ent12354',
    });
  });
});
