// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PackagesPackagesAPI from '../packages/packages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Packages extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read_write</code>.
   *
   * @example
   * ```ts
   * const _package =
   *   await client.projects.offerings.packages.create(
   *     'ofrnge1a2b3c4d5',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       display_name: 'monthly with one-week trial',
   *       lookup_key: 'monthly',
   *     },
   *   );
   * ```
   */
  create(
    offeringID: string,
    params: PackageCreateParams,
    options?: RequestOptions,
  ): APIPromise<PackagesPackagesAPI.Package> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/offerings/${offeringID}/packages`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:packages:read</code>.
   *
   * @example
   * ```ts
   * const packages =
   *   await client.projects.offerings.packages.list(
   *     'ofrnge1a2b3c4d5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  list(
    offeringID: string,
    params: PackageListParams,
    options?: RequestOptions,
  ): APIPromise<PackageListResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/offerings/${offeringID}/packages`, {
      query,
      ...options,
    });
  }
}

export interface PackageListResponse {
  /**
   * Details about each object.
   */
  items: Array<PackagesPackagesAPI.Package>;

  /**
   * URL to access the next page of the project's packages. If not present / null,
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

export interface PackageCreateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The display name of the package
   */
  display_name: string;

  /**
   * Body param: The lookup_key of the package
   */
  lookup_key: string;

  /**
   * Body param: The position of the package in the offering
   */
  position?: number;
}

export interface PackageListParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param: Specifies which fields in the response should be expanded. Accepted
   * values are: `items.product` (requires `project_configuration:products:read`
   * permission).
   */
  expand?: Array<'items.product'>;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  starting_after?: string;
}

export declare namespace Packages {
  export {
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
    type PackageListParams as PackageListParams,
  };
}
