// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.products.create('proj1ab2c3d4', {
      app_id: 'app1a2b3c4',
      store_identifier: 'com.revenuecat.magicweather.monthly9.99',
      type: 'subscription',
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
    const response = await client.projects.products.create('proj1ab2c3d4', {
      app_id: 'app1a2b3c4',
      store_identifier: 'com.revenuecat.magicweather.monthly9.99',
      type: 'subscription',
      display_name: 'Premium Monthly 2023',
      subscription: { duration: 'P1W' },
      title: 'Premium Monthly 2023',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.products.retrieve('prod1a2b3c4d5', {
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
    const response = await client.projects.products.retrieve('prod1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      expand: ['app'],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.products.list('proj1ab2c3d4');
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
      client.projects.products.list(
        'proj1ab2c3d4',
        { app_id: 'app1a2b3c4', expand: ['items.app'], limit: 10, starting_after: 'ent12354' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Revenuecat.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.products.delete('prod1a2b3c4d5', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.products.delete('prod1a2b3c4d5', { project_id: 'proj1ab2c3d4' });
  });

  // Prism tests are disabled
  test.skip('pushToStore: only required params', async () => {
    const responsePromise = client.projects.products.pushToStore('prod1a2b3c4d5', {
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
  test.skip('pushToStore: required and optional params', async () => {
    const response = await client.projects.products.pushToStore('prod1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      store_information: {
        duration: 'ONE_MONTH',
        subscription_group_name: 'Premium Subscriptions',
        subscription_group_id: 'sub_group_123',
      },
    });
  });
});
