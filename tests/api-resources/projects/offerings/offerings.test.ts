// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource offerings', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.offerings.create('proj1ab2c3d4', {
      display_name: 'The standard set of packages',
      lookup_key: 'default',
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
    const response = await client.projects.offerings.create('proj1ab2c3d4', {
      display_name: 'The standard set of packages',
      lookup_key: 'default',
      metadata: { color: 'bar', call_to_action: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.offerings.retrieve('ofrnge1a2b3c4d5', {
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
    const response = await client.projects.offerings.retrieve('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      expand: ['package'],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.offerings.update('ofrnge1a2b3c4d5', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.projects.offerings.update('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'premium access to features',
      is_current: true,
      metadata: { color: 'bar', call_to_action: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.offerings.list('proj1ab2c3d4');
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
      client.projects.offerings.list(
        'proj1ab2c3d4',
        { expand: ['items.package'], limit: 10, starting_after: 'ent12354' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Revenuecat.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.offerings.delete('ofrnge1a2b3c4d5', {
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
    const response = await client.projects.offerings.delete('ofrnge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
    });
  });
});
