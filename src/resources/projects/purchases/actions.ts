// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PurchasesAPI from './purchases';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Refund a Web Billing purchase and revoke access to associated granted
   * entitlements. This endpoint requires the following permission(s):
   * <code>customer_information:purchases:read_write</code>.
   *
   * @example
   * ```ts
   * const purchase =
   *   await client.projects.purchases.actions.refund(
   *     'purc1a2b3c4d5e',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  refund(
    purchaseID: string,
    params: ActionRefundParams,
    options?: RequestOptions,
  ): APIPromise<PurchasesAPI.Purchase> {
    const { project_id } = params;
    return this._client.post(path`/projects/${project_id}/purchases/${purchaseID}/actions/refund`, options);
  }
}

export interface ActionRefundParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export declare namespace Actions {
  export { type ActionRefundParams as ActionRefundParams };
}
