// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource virtualCurrencies', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.projects.customers.virtualCurrencies.list(
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
    const response = await client.projects.customers.virtualCurrencies.list(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', include_empty_balances: true, limit: 10, starting_after: 'ent12354' },
    );
  });

  // Prism tests are disabled
  test.skip('transactions: only required params', async () => {
    const responsePromise = client.projects.customers.virtualCurrencies.transactions(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', adjustments: { foo: 0 } },
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
  test.skip('transactions: required and optional params', async () => {
    const response = await client.projects.customers.virtualCurrencies.transactions(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        adjustments: { foo: 0 },
        include_empty_balances: true,
        reference: 'reference',
        'Idempotency-Key': '1234-5678-9101-1121',
      },
    );
  });

  // Prism tests are disabled
  test.skip('updateBalance: only required params', async () => {
    const responsePromise = client.projects.customers.virtualCurrencies.updateBalance(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      { project_id: 'proj1ab2c3d4', adjustments: { foo: 0 } },
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
  test.skip('updateBalance: required and optional params', async () => {
    const response = await client.projects.customers.virtualCurrencies.updateBalance(
      '19b8de26-77c1-49f1-aa18-019a391603e2',
      {
        project_id: 'proj1ab2c3d4',
        adjustments: { foo: 0 },
        include_empty_balances: true,
        reference: 'reference',
        'Idempotency-Key': '1234-5678-9101-1121',
      },
    );
  });
});
