// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PackagesAPI from './packages';
import * as AppsAPI from '../apps';
import * as ProductsAPI from '../products';
import * as ActionsAPI from './actions';
import {
  ActionAttachProductsParams,
  ActionDetachProductsParams,
  Actions,
  EligibilityCriteria,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Packages extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read</code>.
   *
   * @example
   * ```ts
   * const _package = await client.projects.packages.retrieve(
   *   'pkge1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  retrieve(packageID: string, params: PackageRetrieveParams, options?: RequestOptions): APIPromise<Package> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/packages/${packageID}`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read_write</code>.
   *
   * @example
   * ```ts
   * const _package = await client.projects.packages.update(
   *   'pkge1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  update(packageID: string, params: PackageUpdateParams, options?: RequestOptions): APIPromise<Package> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/packages/${packageID}`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject = await client.projects.packages.delete(
   *   'pkge1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  delete(
    packageID: string,
    params: PackageDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/packages/${packageID}`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.packages.listProducts(
   *     'pkge1a2b3c4d5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  listProducts(
    packageID: string,
    params: PackageListProductsParams,
    options?: RequestOptions,
  ): APIPromise<PackageListProductsResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/packages/${packageID}/products`, {
      query,
      ...options,
    });
  }
}

export interface Package {
  /**
   * The id of the package
   */
  id: string;

  /**
   * The date the package was created at in ms since epoch
   */
  created_at: number;

  /**
   * The display name of the package
   */
  display_name: string;

  /**
   * The lookup_key of the package
   */
  lookup_key: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'package';

  /**
   * The position of the package within the offering
   */
  position: number | null;

  products?: Package.Products | null;
}

export namespace Package {
  export interface Products {
    /**
     * Product association
     */
    items: Array<PackagesAPI.PackageProductAssociation>;

    /**
     * URL to access the next page of the project's products. If not present / null,
     * there is no next page
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
}

export interface PackageProductAssociation {
  eligibility_criteria: ActionsAPI.EligibilityCriteria;

  product: ProductsAPI.Product;
}

export interface PackageListProductsResponse {
  /**
   * Details about each object.
   */
  items: Array<PackageProductAssociation>;

  /**
   * URL to access the next page of the entitlement's products. If not present /
   * null, there is no next page
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

export interface PackageRetrieveParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param: Specifies which fields in the response should be expanded. Accepted
   * values are: `product` (requires `project_configuration:products:read`
   * permission).
   */
  expand?: Array<'product'>;
}

export interface PackageUpdateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The display name of the package
   */
  display_name?: string;

  /**
   * Body param: The position of the package within the offering
   */
  position?: number;
}

export interface PackageDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface PackageListProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  starting_after?: string;
}

Packages.Actions = Actions;

export declare namespace Packages {
  export {
    type Package as Package,
    type PackageProductAssociation as PackageProductAssociation,
    type PackageListProductsResponse as PackageListProductsResponse,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageUpdateParams as PackageUpdateParams,
    type PackageDeleteParams as PackageDeleteParams,
    type PackageListProductsParams as PackageListProductsParams,
  };

  export {
    Actions as Actions,
    type EligibilityCriteria as EligibilityCriteria,
    type ActionAttachProductsParams as ActionAttachProductsParams,
    type ActionDetachProductsParams as ActionDetachProductsParams,
  };
}
