// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entitlements', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.entitlements.create('proj1ab2c3d4', {
      display_name: 'Premium access to all features',
      lookup_key: 'premium',
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
    const response = await client.projects.entitlements.create('proj1ab2c3d4', {
      display_name: 'Premium access to all features',
      lookup_key: 'premium',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.entitlements.retrieve('entla1b2c3d4e5', {
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.projects.entitlements.retrieve('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      expand: ['product'],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.entitlements.update('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'Premium',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.projects.entitlements.update('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'Premium',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.entitlements.list('proj1ab2c3d4');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.projects.entitlements.list(
        'proj1ab2c3d4',
        { expand: ['items.product'], limit: 10, starting_after: 'ent12354' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Revenuecat.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.entitlements.delete('entla1b2c3d4e5', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.projects.entitlements.delete('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
    });
  });

  // Prism tests are disabled
  test.skip('listProducts: only required params', async () => {
    const responsePromise = client.projects.entitlements.listProducts('entla1b2c3d4e5', {
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
  test.skip('listProducts: required and optional params', async () => {
    const response = await client.projects.entitlements.listProducts('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      limit: 10,
      starting_after: 'ent12354',
    });
  });
});
