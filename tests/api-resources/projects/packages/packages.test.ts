// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packages', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.packages.retrieve('pkge1a2b3c4d5', {
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
    const response = await client.projects.packages.retrieve('pkge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      expand: ['product'],
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.packages.update('pkge1a2b3c4d5', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.packages.update('pkge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      display_name: 'monthly with one-week trial',
      position: 2,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.packages.delete('pkge1a2b3c4d5', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.packages.delete('pkge1a2b3c4d5', { project_id: 'proj1ab2c3d4' });
  });

  // Prism tests are disabled
  test.skip('listProducts: only required params', async () => {
    const responsePromise = client.projects.packages.listProducts('pkge1a2b3c4d5', {
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
    const response = await client.projects.packages.listProducts('pkge1a2b3c4d5', {
      project_id: 'proj1ab2c3d4',
      limit: 10,
      starting_after: 'ent12354',
    });
  });
});
