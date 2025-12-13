// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from '../apps';
import * as PackagesAPI from './packages';
import {
  PackageCreateParams,
  PackageListParams,
  PackageListResponse,
  Packages as PackagesAPIPackages,
} from './packages';
import * as PackagesPackagesAPI from '../packages/packages';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Offerings extends APIResource {
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read_write</code>.
   *
   * @example
   * ```ts
   * const offering = await client.projects.offerings.create(
   *   'proj1ab2c3d4',
   *   {
   *     display_name: 'The standard set of packages',
   *     lookup_key: 'default',
   *   },
   * );
   * ```
   */
  create(projectID: string, body: OfferingCreateParams, options?: RequestOptions): APIPromise<Offering> {
    return this._client.post(path`/projects/${projectID}/offerings`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read</code>.
   *
   * @example
   * ```ts
   * const offering = await client.projects.offerings.retrieve(
   *   'ofrnge1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  retrieve(
    offeringID: string,
    params: OfferingRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Offering> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/offerings/${offeringID}`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read_write</code>.
   *
   * @example
   * ```ts
   * const offering = await client.projects.offerings.update(
   *   'ofrnge1a2b3c4d5',
   *   { project_id: 'proj1ab2c3d4' },
   * );
   * ```
   */
  update(offeringID: string, params: OfferingUpdateParams, options?: RequestOptions): APIPromise<Offering> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/offerings/${offeringID}`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read</code>.
   *
   * @example
   * ```ts
   * const offerings = await client.projects.offerings.list(
   *   'proj1ab2c3d4',
   * );
   * ```
   */
  list(
    projectID: string,
    query: OfferingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OfferingListResponse> {
    return this._client.get(path`/projects/${projectID}/offerings`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject =
   *   await client.projects.offerings.delete(
   *     'ofrnge1a2b3c4d5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  delete(
    offeringID: string,
    params: OfferingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/offerings/${offeringID}`, options);
  }
}

export interface Offering {
  /**
   * The id of the offering
   */
  id: string;

  /**
   * The date the offering was created at in ms since epoch
   */
  created_at: number;

  /**
   * The display name of the offering
   */
  display_name: string;

  /**
   * Indicates if the offering is the current offering
   */
  is_current: boolean;

  /**
   * A custom identifier of the entitlement
   */
  lookup_key: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'offering';

  /**
   * ID of the project to which the offering belongs
   */
  project_id: string;

  /**
   * Custom metadata of the offering
   */
  metadata?: { [key: string]: unknown } | null;

  packages?: Offering.Packages | null;
}

export namespace Offering {
  export interface Packages {
    /**
     * Details about each object.
     */
    items: Array<PackagesPackagesAPI.Package>;

    /**
     * URL to access the next page of the Offering's packages. If not present / null,
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

export interface OfferingListResponse {
  /**
   * Details about each object.
   */
  items: Array<Offering>;

  /**
   * URL to access the next page of the project's offerings. If not present / null,
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

export interface OfferingCreateParams {
  /**
   * The display_name of the offering
   */
  display_name: string;

  /**
   * The custom identifier of the offering
   */
  lookup_key: string;

  /**
   * Custom metadata of the offering
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface OfferingRetrieveParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param: Specifies which fields in the response should be expanded. Accepted
   * values are: `package` (requires `project_configuration:packages:read`
   * permission), `package.product` (requires `project_configuration:products:read`
   * permission).
   */
  expand?: Array<'package' | 'package.product'>;
}

export interface OfferingUpdateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The display name of the offering
   */
  display_name?: string;

  /**
   * Body param: Indicates if the offering is the current offering
   */
  is_current?: boolean;

  /**
   * Body param: Custom metadata of the offering
   */
  metadata?: { [key: string]: unknown } | null;
}

export interface OfferingListParams {
  /**
   * Specifies which fields in the response should be expanded. Accepted values are:
   * `items.package` (requires `project_configuration:packages:read` permission),
   * `items.package.product` (requires `project_configuration:products:read`
   * permission).
   */
  expand?: Array<'items.package' | 'items.package.product'>;

  limit?: number;

  starting_after?: string;
}

export interface OfferingDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

Offerings.Packages = PackagesAPIPackages;

export declare namespace Offerings {
  export {
    type Offering as Offering,
    type OfferingListResponse as OfferingListResponse,
    type OfferingCreateParams as OfferingCreateParams,
    type OfferingRetrieveParams as OfferingRetrieveParams,
    type OfferingUpdateParams as OfferingUpdateParams,
    type OfferingListParams as OfferingListParams,
    type OfferingDeleteParams as OfferingDeleteParams,
  };

  export {
    PackagesAPIPackages as Packages,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
    type PackageListParams as PackageListParams,
  };
}
