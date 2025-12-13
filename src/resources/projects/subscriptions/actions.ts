// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Cancel an active Web Billing subscription. The customer will lose access to the
   * associated entitlements at the end of the current period. This endpoint requires
   * the following permission(s):
   * <code>customer_information:subscriptions:read_write</code>.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.projects.subscriptions.actions.cancel(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  cancel(
    subscriptionID: string,
    params: ActionCancelParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionsAPI.Subscription> {
    const { project_id } = params;
    return this._client.post(
      path`/projects/${project_id}/subscriptions/${subscriptionID}/actions/cancel`,
      options,
    );
  }

  /**
   * Cancel a Web Billing subscription by refunding the most recent payment. The
   * customer will immediately lose access to the associated entitlements. This
   * endpoint requires the following permission(s):
   * <code>customer_information:subscriptions:read_write</code>.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.projects.subscriptions.actions.refund(
   *     'sub1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  refund(
    subscriptionID: string,
    params: ActionRefundParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionsAPI.Subscription> {
    const { project_id } = params;
    return this._client.post(
      path`/projects/${project_id}/subscriptions/${subscriptionID}/actions/refund`,
      options,
    );
  }
}

export interface ActionCancelParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface ActionRefundParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export declare namespace Actions {
  export { type ActionCancelParams as ActionCancelParams, type ActionRefundParams as ActionRefundParams };
}
