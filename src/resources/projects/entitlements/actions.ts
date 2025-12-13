// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EntitlementsAPI from './entitlements';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read_write</code>.
   *
   * @example
   * ```ts
   * const entitlement =
   *   await client.projects.entitlements.actions.attachProducts(
   *     'entla1b2c3d4e5',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       product_ids: ['prod1a2b3c4d5e'],
   *     },
   *   );
   * ```
   */
  attachProducts(
    entitlementID: string,
    params: ActionAttachProductsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementsAPI.Entitlement> {
    const { project_id, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/entitlements/${entitlementID}/actions/attach_products`,
      { body, ...options },
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read_write</code>.
   *
   * @example
   * ```ts
   * const entitlement =
   *   await client.projects.entitlements.actions.detachProducts(
   *     'entla1b2c3d4e5',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       product_ids: ['prod1a2b3c4d5e'],
   *     },
   *   );
   * ```
   */
  detachProducts(
    entitlementID: string,
    params: ActionDetachProductsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementsAPI.Entitlement> {
    const { project_id, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/entitlements/${entitlementID}/actions/detach_products`,
      { body, ...options },
    );
  }
}

export interface ActionAttachProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: IDs of the products to be attached to the entitlement.
   */
  product_ids: Array<string>;
}

export interface ActionDetachProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: IDs of the products to be detached from the entitlement.
   */
  product_ids: Array<string>;
}

export declare namespace Actions {
  export {
    type ActionAttachProductsParams as ActionAttachProductsParams,
    type ActionDetachProductsParams as ActionDetachProductsParams,
  };
}
