// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Revenuecat from 'revenuecat';

const client = new Revenuecat({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource apps', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.projects.apps.create('proj1ab2c3d4', {
      name: 'My App Store App',
      type: 'app_store',
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
    const response = await client.projects.apps.create('proj1ab2c3d4', {
      name: 'My App Store App',
      type: 'app_store',
      amazon: { package_name: 'x', shared_secret: 'shared_secret' },
      app_store: {
        bundle_id: 'com.apple.Pages',
        app_store_connect_api_key: 'x',
        app_store_connect_api_key_id: 'x',
        app_store_connect_api_key_issuer: 'x',
        app_store_connect_vendor_number: 'x',
        shared_secret: '1234567890abcdef1234567890abcdef',
        subscription_key_id: '6345942CC3',
        subscription_key_issuer: '5a049d62-1b9b-453c-b605-1988189d8129',
        subscription_private_key:
          '-----BEGIN EC PRIVATE KEY-----\nMHQCAQEEIGAkwOF0qkGO19yJlIzQVcOg+HBfvLL4KDXDtL+MMHk2oAcGBSuBBAAK\noUQDQgAEhDP7RaX4c6qOHkE1nIWMr5C90ybtr87VRGFm4VsfWqG47NPN+/dHcfwJ\nJPZGFgMcgvBc37AxQPPQjyXYjhhQDg==\n-----END EC PRIVATE KEY-----',
      },
      mac_app_store: { bundle_id: 'x', shared_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      paddle: {
        paddle_api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        paddle_is_sandbox: true,
      },
      play_store: { package_name: 'x' },
      rc_billing: { app_name: 'x', default_currency: 'USD', stripe_account_id: 'x', support_email: 'x' },
      roku: {
        roku_api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        roku_channel_id: 'xxxxxx',
        roku_channel_name: 'x',
      },
      stripe: { stripe_account_id: 'x' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.projects.apps.retrieve('app1ab2c3d4', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.apps.retrieve('app1ab2c3d4', { project_id: 'proj1ab2c3d4' });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.projects.apps.update('app1ab2c3d4', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.apps.update('app1ab2c3d4', {
      project_id: 'proj1ab2c3d4',
      amazon: { package_name: 'x', shared_secret: 'shared_secret' },
      app_store: { bundle_id: 'com.my.new-app', shared_secret: '1234567890abcdef1234567890abcdef' },
      mac_app_store: { bundle_id: 'x', shared_secret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' },
      name: 'New App name',
      paddle: {
        paddle_api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        paddle_is_sandbox: true,
      },
      play_store: { package_name: 'x' },
      rc_billing: { app_name: 'x', default_currency: 'USD', stripe_account_id: 'x', support_email: 'x' },
      roku: {
        roku_api_key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        roku_channel_id: 'xxxxxx',
        roku_channel_name: 'x',
      },
      stripe: { stripe_account_id: 'x' },
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.projects.apps.list('proj1ab2c3d4');
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
      client.projects.apps.list(
        'proj1ab2c3d4',
        { limit: 10, starting_after: 'ent12354' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Revenuecat.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.projects.apps.delete('app1ab2c3d4', { project_id: 'proj1ab2c3d4' });
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
    const response = await client.projects.apps.delete('app1ab2c3d4', { project_id: 'proj1ab2c3d4' });
  });

  // Prism tests are disabled
  test.skip('listPublicAPIKeys: only required params', async () => {
    const responsePromise = client.projects.apps.listPublicAPIKeys('app1ab2c3d4', {
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
  test.skip('listPublicAPIKeys: required and optional params', async () => {
    const response = await client.projects.apps.listPublicAPIKeys('app1ab2c3d4', {
      project_id: 'proj1ab2c3d4',
    });
  });

  // Prism tests are disabled
  test.skip('retrieveStoreKitConfig: only required params', async () => {
    const responsePromise = client.projects.apps.retrieveStoreKitConfig('app1ab2c3d4', {
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
  test.skip('retrieveStoreKitConfig: required and optional params', async () => {
    const response = await client.projects.apps.retrieveStoreKitConfig('app1ab2c3d4', {
      project_id: 'proj1ab2c3d4',
    });
  });
});
