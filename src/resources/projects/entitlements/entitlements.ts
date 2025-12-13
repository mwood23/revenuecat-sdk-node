// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AppsAPI from '../apps';
import * as ProductsAPI from '../products';
import * as ActionsAPI from './actions';
import { ActionAttachProductsParams, ActionDetachProductsParams, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Entitlements extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read_write</code>.
   *
   * @example
   * ```ts
   * const entitlement =
   *   await client.projects.entitlements.create(
   *     'proj1ab2c3d4',
   *     {
   *       display_name: 'Premium access to all features',
   *       lookup_key: 'premium',
   *     },
   *   );
   * ```
   */
  create(
    projectID: string,
    body: EntitlementCreateParams,
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    return this._client.post(path`/projects/${projectID}/entitlements`, { body, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read</code>.
   *
   * @example
   * ```ts
   * const entitlement =
   *   await client.projects.entitlements.retrieve(
   *     'entla1b2c3d4e5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  retrieve(
    entitlementID: string,
    params: EntitlementRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/entitlements/${entitlementID}`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read_write</code>.
   *
   * @example
   * ```ts
   * const entitlement =
   *   await client.projects.entitlements.update(
   *     'entla1b2c3d4e5',
   *     { project_id: 'proj1ab2c3d4', display_name: 'Premium' },
   *   );
   * ```
   */
  update(
    entitlementID: string,
    params: EntitlementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Entitlement> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/entitlements/${entitlementID}`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read</code>.
   *
   * @example
   * ```ts
   * const listEntitlements =
   *   await client.projects.entitlements.list('proj1ab2c3d4');
   * ```
   */
  list(
    projectID: string,
    query: EntitlementListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ListEntitlements> {
    return this._client.get(path`/projects/${projectID}/entitlements`, { query, ...options });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read_write</code>.
   *
   * @example
   * ```ts
   * const deletedObject =
   *   await client.projects.entitlements.delete(
   *     'entla1b2c3d4e5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  delete(
    entitlementID: string,
    params: EntitlementDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AppsAPI.DeletedObject> {
    const { project_id } = params;
    return this._client.delete(path`/projects/${project_id}/entitlements/${entitlementID}`, options);
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:entitlements:read</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.entitlements.listProducts(
   *     'entla1b2c3d4e5',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  listProducts(
    entitlementID: string,
    params: EntitlementListProductsParams,
    options?: RequestOptions,
  ): APIPromise<EntitlementListProductsResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/entitlements/${entitlementID}/products`, {
      query,
      ...options,
    });
  }
}

export interface Entitlement {
  /**
   * The id of the entitlement
   */
  id: string;

  /**
   * The date when the entitlement was created in ms since epoch
   */
  created_at: number;

  /**
   * The display name of the entitlement
   */
  display_name: string;

  /**
   * A custom identifier of the entitlement
   */
  lookup_key: string;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'entitlement';

  /**
   * ID of the project to which the entitlement belongs
   */
  project_id: string;

  /**
   * List of products attached to the entitlement
   */
  products?: Entitlement.Products | null;
}

export namespace Entitlement {
  /**
   * List of products attached to the entitlement
   */
  export interface Products {
    /**
     * Details about each object.
     */
    items: Array<ProductsAPI.Product>;

    /**
     * URL to access the next page of the Entitlement's products. If not present /
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
}

export interface ListEntitlements {
  /**
   * Details about each object.
   */
  items: Array<Entitlement>;

  /**
   * URL to access the next page of the project's entitlements. If not present /
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

export interface EntitlementListProductsResponse {
  /**
   * Details about each object.
   */
  items: Array<ProductsAPI.Product>;

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

export interface EntitlementCreateParams {
  /**
   * The display name of the entitlement
   */
  display_name: string;

  /**
   * The identifier of the entitlement
   */
  lookup_key: string;
}

export interface EntitlementRetrieveParams {
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

export interface EntitlementUpdateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The display name of the entitlement
   */
  display_name: string;
}

export interface EntitlementListParams {
  /**
   * Specifies which fields in the response should be expanded. Accepted values are:
   * `items.product` (requires `project_configuration:products:read` permission).
   */
  expand?: Array<'items.product'>;

  limit?: number;

  starting_after?: string;
}

export interface EntitlementDeleteParams {
  /**
   * ID of the project
   */
  project_id: string;
}

export interface EntitlementListProductsParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  starting_after?: string;
}

Entitlements.Actions = Actions;

export declare namespace Entitlements {
  export {
    type Entitlement as Entitlement,
    type ListEntitlements as ListEntitlements,
    type EntitlementListProductsResponse as EntitlementListProductsResponse,
    type EntitlementCreateParams as EntitlementCreateParams,
    type EntitlementRetrieveParams as EntitlementRetrieveParams,
    type EntitlementUpdateParams as EntitlementUpdateParams,
    type EntitlementListParams as EntitlementListParams,
    type EntitlementDeleteParams as EntitlementDeleteParams,
    type EntitlementListProductsParams as EntitlementListProductsParams,
  };

  export {
    Actions as Actions,
    type ActionAttachProductsParams as ActionAttachProductsParams,
    type ActionDetachProductsParams as ActionDetachProductsParams,
  };
}
