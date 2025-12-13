// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import * as PackagesAPI from './packages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read_write</code>.
   *
   * @example
   * ```ts
   * const _package =
   *   await client.projects.packages.actions.attachProducts(
   *     'pkge1a2b3c4d5',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       products: [
   *         {
   *           product_id: 'prod1a2b3c4d5e',
   *           eligibility_criteria: 'all',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  attachProducts(
    packageID: string,
    params: ActionAttachProductsParams,
    options?: RequestOptions,
  ): APIPromise<PackagesAPI.Package> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/packages/${packageID}/actions/attach_products`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read_write</code>.
   *
   * @example
   * ```ts
   * const _package =
   *   await client.projects.packages.actions.detachProducts(
   *     'pkge1a2b3c4d5',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       product_ids: ['prod1a2b3c4d5e'],
   *     },
   *   );
   * ```
   */
  detachProducts(
    packageID: string,
    params: ActionDetachProductsParams,
    options?: RequestOptions,
  ): APIPromise<PackagesAPI.Package> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/packages/${packageID}/actions/detach_products`, {
      body,
      ...options,
    });
  }
}

export type EligibilityCriteria = 'all' | 'google_sdk_lt_6' | 'google_sdk_ge_6';

export interface ActionAttachProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: Product association list
   */
  products: Array<ActionAttachProductsParams.Product>;
}

export namespace ActionAttachProductsParams {
  export interface Product {
    eligibility_criteria: ActionsAPI.EligibilityCriteria;

    product_id: string;
  }
}

export interface ActionDetachProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: IDs of the products to detach from the package
   */
  product_ids: Array<string>;
}

export declare namespace Actions {
  export {
    type EligibilityCriteria as EligibilityCriteria,
    type ActionAttachProductsParams as ActionAttachProductsParams,
    type ActionDetachProductsParams as ActionDetachProductsParams,
  };
}
