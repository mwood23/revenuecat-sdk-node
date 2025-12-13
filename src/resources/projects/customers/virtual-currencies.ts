// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VirtualCurrencies extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:purchases:read</code>.
   *
   * @example
   * ```ts
   * const listVirtualCurrenciesBalances =
   *   await client.projects.customers.virtualCurrencies.list(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  list(
    customerID: string,
    params: VirtualCurrencyListParams,
    options?: RequestOptions,
  ): APIPromise<ListVirtualCurrenciesBalances> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/virtual_currencies`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:purchases:read_write</code>.
   *
   * @example
   * ```ts
   * const listVirtualCurrenciesBalances =
   *   await client.projects.customers.virtualCurrencies.transactions(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4', adjustments: { foo: 0 } },
   *   );
   * ```
   */
  transactions(
    customerID: string,
    params: VirtualCurrencyTransactionsParams,
    options?: RequestOptions,
  ): APIPromise<ListVirtualCurrenciesBalances> {
    const { project_id, include_empty_balances, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/customers/${customerID}/virtual_currencies/transactions`,
      {
        query: { include_empty_balances },
        body,
        ...options,
        headers: buildHeaders([
          { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
          options?.headers,
        ]),
      },
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:purchases:read_write</code>.
   *
   * @example
   * ```ts
   * const listVirtualCurrenciesBalances =
   *   await client.projects.customers.virtualCurrencies.updateBalance(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4', adjustments: { foo: 0 } },
   *   );
   * ```
   */
  updateBalance(
    customerID: string,
    params: VirtualCurrencyUpdateBalanceParams,
    options?: RequestOptions,
  ): APIPromise<ListVirtualCurrenciesBalances> {
    const { project_id, include_empty_balances, 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/customers/${customerID}/virtual_currencies/update_balance`,
      {
        query: { include_empty_balances },
        body,
        ...options,
        headers: buildHeaders([
          { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
          options?.headers,
        ]),
      },
    );
  }
}

export interface ListVirtualCurrenciesBalances {
  /**
   * Details about each object.
   */
  items: Array<ListVirtualCurrenciesBalances.Item>;

  /**
   * URL to access the next page of the customer's balances. If not present / null,
   * there is no next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export namespace ListVirtualCurrenciesBalances {
  export interface Item {
    /**
     * The balance of the virtual currency.
     */
    balance: number;

    /**
     * The code of the virtual currency.
     */
    currency_code: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'virtual_currency_balance';

    /**
     * The description of the virtual currency.
     */
    description?: string;

    /**
     * The name of the virtual currency.
     */
    name?: string;
  }
}

export interface VirtualCurrencyListParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  include_empty_balances?: boolean;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

export interface VirtualCurrencyTransactionsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The adjustments to the virtual currencies
   */
  adjustments: { [key: string]: number };

  /**
   * Query param:
   */
  include_empty_balances?: boolean;

  /**
   * Body param: The reference of the transaction
   */
  reference?: string | null;

  /**
   * Header param: This is an optional idempotency key to ensure exactly once
   * execution of the request.
   */
  'Idempotency-Key'?: string;
}

export interface VirtualCurrencyUpdateBalanceParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The adjustments to the virtual currencies
   */
  adjustments: { [key: string]: number };

  /**
   * Query param:
   */
  include_empty_balances?: boolean;

  /**
   * Body param: The reference of the transaction
   */
  reference?: string | null;

  /**
   * Header param: This is an optional idempotency key to ensure exactly once
   * execution of the request.
   */
  'Idempotency-Key'?: string;
}

export declare namespace VirtualCurrencies {
  export {
    type ListVirtualCurrenciesBalances as ListVirtualCurrenciesBalances,
    type VirtualCurrencyListParams as VirtualCurrencyListParams,
    type VirtualCurrencyTransactionsParams as VirtualCurrencyTransactionsParams,
    type VirtualCurrencyUpdateBalanceParams as VirtualCurrencyUpdateBalanceParams,
  };
}
