// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ActionsAPI from './actions';
import { ActionRefundParams, Actions, SubscriptionTransaction } from './actions';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Transactions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read</code>.
   *
   * @example
   * ```ts
   * const transactions =
   *   await client.projects.subscriptions.transactions.list(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  list(
    subscriptionID: string,
    params: TransactionListParams,
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    const { project_id } = params;
    return this._client.get(
      path`/projects/${project_id}/subscriptions/${subscriptionID}/transactions`,
      options,
    );
  }
}

export interface TransactionListResponse {
  /**
   * Details about each object.
   */
  items: Array<ActionsAPI.SubscriptionTransaction>;

  /**
   * URL to access the next page of the projects. If not present / null, there is no
   * next page
   */
  next_page: string | null;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value. Always has the value `list`.
   */
  object: 'list';

  /**
   * The URL where this list can be accessed.
   */
  url: string;
}

export interface TransactionListParams {
  /**
   * ID of the project
   */
  project_id: string;
}

Transactions.Actions = Actions;

export declare namespace Transactions {
  export {
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Actions as Actions,
    type SubscriptionTransaction as SubscriptionTransaction,
    type ActionRefundParams as ActionRefundParams,
  };
}
