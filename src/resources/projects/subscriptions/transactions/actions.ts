// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Refund a Play Store subscription's transaction. This endpoint does not cancel
   * the subscription or revoke access to it. This endpoint requires the following
   * permission(s): <code>customer_information:subscriptions:read_write</code>.
   *
   * @example
   * ```ts
   * const subscriptionTransaction =
   *   await client.projects.subscriptions.transactions.actions.refund(
   *     'GPA.000-000-000-000',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       subscription_id: 'sub1a2b3c4d5e',
   *     },
   *   );
   * ```
   */
  refund(
    transactionID: string,
    params: ActionRefundParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionTransaction> {
    const { project_id, subscription_id } = params;
    return this._client.post(
      path`/projects/${project_id}/subscriptions/${subscription_id}/transactions/${transactionID}/actions/refund`,
      options,
    );
  }
}

export interface SubscriptionTransaction {
  /**
   * The ID of the subscription transaction in the store
   */
  id: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'subscription_transaction';

  /**
   * The date of the transaction in ms since epoch
   */
  purchased_at: number;
}

export interface ActionRefundParams {
  /**
   * ID of the project
   */
  project_id: string;

  /**
   * ID of the subscription
   */
  subscription_id: string;
}

export declare namespace Actions {
  export {
    type SubscriptionTransaction as SubscriptionTransaction,
    type ActionRefundParams as ActionRefundParams,
  };
}
