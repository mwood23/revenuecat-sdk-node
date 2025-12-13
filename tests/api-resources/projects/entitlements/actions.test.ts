// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('attachProducts: only required params', async () => {
    const responsePromise = client.projects.entitlements.actions.attachProducts('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      product_ids: ['prod1a2b3c4d5e'],
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
  test.skip('attachProducts: required and optional params', async () => {
    const response = await client.projects.entitlements.actions.attachProducts('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      product_ids: ['prod1a2b3c4d5e'],
    });
  });

  // Prism tests are disabled
  test.skip('detachProducts: only required params', async () => {
    const responsePromise = client.projects.entitlements.actions.detachProducts('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      product_ids: ['prod1a2b3c4d5e'],
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
  test.skip('detachProducts: required and optional params', async () => {
    const response = await client.projects.entitlements.actions.detachProducts('entla1b2c3d4e5', {
      project_id: 'proj1ab2c3d4',
      product_ids: ['prod1a2b3c4d5e'],
    });
  });
});
