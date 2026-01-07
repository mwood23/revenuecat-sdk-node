// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource customers', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.customers.create('proj1ab2c3d4', {
      id: '19b8de26-77c1-49f1-aa18-019a391603e2',
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
    const response = await client.projects.customers.create('proj1ab2c3d4', {
      id: '19b8de26-77c1-49f1-aa18-019a391603e2',
      attributes: [{ name: '$email', value: 'cat@revenuecat.com' }],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.customers.retrieve('19b8de26-77c1-49f1-aa18-019a391603e2', {
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
    const response = await client.projects.customers.retrieve('19b8de26-77c1-49f1-aa18-019a391603e2', {
      project_id: 'proj1ab2c3d4',
      expand: ['attributes'],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.customers.list('proj1ab2c3d4');
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
      client.projects.customers.list(
        'proj1ab2c3d4',
        {
          limit: 10,
          search: 'example@example.com',
          starting_after: 'ent12354',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Revenuecat.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.customers.delete('19b8de26-77c1-49f1-aa18-019a391603e2', {
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
    const response = await client.projects.customers.delete('19b8de26-77c1-49f1-aa18-019a391603e2', {
      project_id: 'proj1ab2c3d4',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveActiveEntitlements: only required params', async () => {
    const responsePromise = client.projects.customers.retrieveActiveEntitlements(
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
  test.skip('retrieveActiveEntitlements: required and optional params', async () => {
    const response = await client.projects.customers.retrieveActiveEntitlements(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        limit: 10,
        starting_after: 'ent12354',
      },
    );
  });

  // Prism tests are disabled
  test.skip('retrieveAliases: only required params', async () => {
    const responsePromise = client.projects.customers.retrieveAliases(
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
  test.skip('retrieveAliases: required and optional params', async () => {
    const response = await client.projects.customers.retrieveAliases('19b8de26-77c1-49f1-aa18-019a391603e2', {
      project_id: 'proj1ab2c3d4',
      limit: 10,
      starting_after: 'ent12354',
    });
  });

  // Prism tests are disabled
  test.skip('retrievePurchases: only required params', async () => {
    const responsePromise = client.projects.customers.retrievePurchases(
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
  test.skip('retrievePurchases: required and optional params', async () => {
    const response = await client.projects.customers.retrievePurchases(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        environment: 'sandbox',
        limit: 10,
        starting_after: 'ent12354',
      },
    );
  });

  // Prism tests are disabled
  test.skip('retrieveSubscriptions: only required params', async () => {
    const responsePromise = client.projects.customers.retrieveSubscriptions(
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
  test.skip('retrieveSubscriptions: required and optional params', async () => {
    const response = await client.projects.customers.retrieveSubscriptions(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        environment: 'sandbox',
        limit: 10,
        starting_after: 'ent12354',
      },
    );
  });
});
