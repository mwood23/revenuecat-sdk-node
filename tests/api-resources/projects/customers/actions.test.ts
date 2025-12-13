// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource actions', () => {
  // Prism tests are disabled
  test.skip('assignOffering: only required params', async () => {
    const responsePromise = client.projects.customers.actions.assignOffering(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', offering_id: 'offrng1b2c3d4e5' },
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
  test.skip('assignOffering: required and optional params', async () => {
    const response = await client.projects.customers.actions.assignOffering(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', offering_id: 'offrng1b2c3d4e5' },
    );
  });

  // Prism tests are disabled
  test.skip('grantEntitlement: only required params', async () => {
    const responsePromise = client.projects.customers.actions.grantEntitlement(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', entitlement_id: 'entla1b2c3d4e5', expires_at: 1658399423658 },
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
  test.skip('grantEntitlement: required and optional params', async () => {
    const response = await client.projects.customers.actions.grantEntitlement(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', entitlement_id: 'entla1b2c3d4e5', expires_at: 1658399423658 },
    );
  });

  // Prism tests are disabled
  test.skip('revokeGrantedEntitlement: only required params', async () => {
    const responsePromise = client.projects.customers.actions.revokeGrantedEntitlement(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', entitlement_id: 'entla1b2c3d4e5' },
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
  test.skip('revokeGrantedEntitlement: required and optional params', async () => {
    const response = await client.projects.customers.actions.revokeGrantedEntitlement(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', entitlement_id: 'entla1b2c3d4e5' },
    );
  });

  // Prism tests are disabled
  test.skip('transfer: only required params', async () => {
    const responsePromise = client.projects.customers.actions.transfer(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', target_customer_id: 'target_customer_id' },
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
  test.skip('transfer: required and optional params', async () => {
    const response = await client.projects.customers.actions.transfer(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', target_customer_id: 'target_customer_id', app_ids: ['appa2b3c4d5e'] },
    );
  });
});
