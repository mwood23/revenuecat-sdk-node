// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Revenuecat } from '../client';

export abstract class APIResource {
  protected _client: Revenuecat;

  constructor(client: Revenuecat) {
    this._client = client;
  }
}
