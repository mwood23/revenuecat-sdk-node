// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revcat-do-not-use';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.subscriptions.retrieve('sub1a2b3c4d5e', {
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
    const response = await client.projects.subscriptions.retrieve('sub1a2b3c4d5e', {
      project_id: 'proj1ab2c3d4',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.subscriptions.list('proj1ab2c3d4', {
      store_subscription_identifier: 'x',
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
    const response = await client.projects.subscriptions.list('proj1ab2c3d4', {
      store_subscription_identifier: 'x',
    });
  });

  // Prism tests are disabled
  test.skip('getAuthenticatedManagementURL: only required params', async () => {
    const responsePromise = client.projects.subscriptions.getAuthenticatedManagementURL('sub1a2b3c4d5e', {
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
  test.skip('getAuthenticatedManagementURL: required and optional params', async () => {
    const response = await client.projects.subscriptions.getAuthenticatedManagementURL('sub1a2b3c4d5e', {
      project_id: 'proj1ab2c3d4',
    });
  });

  // Prism tests are disabled
  test.skip('listEntitlements: only required params', async () => {
    const responsePromise = client.projects.subscriptions.listEntitlements('sub1a2b3c4d5e', {
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
  test.skip('listEntitlements: required and optional params', async () => {
    const response = await client.projects.subscriptions.listEntitlements('sub1a2b3c4d5e', {
      project_id: 'proj1ab2c3d4',
      limit: 10,
      starting_after: 'ent12354',
    });
  });
});
