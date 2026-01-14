// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Attributes extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * const listCustomerAttributes =
   *   await client.projects.customers.attributes.create(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       attributes: [
   *         { name: '$email', value: 'support@revenuecat.com' },
   *         { name: '$displayName', value: 'John Appleseed' },
   *         { name: 'my_custom_attr', value: 'custom value' },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    customerID: string,
    params: AttributeCreateParams,
    options?: RequestOptions,
  ): APIPromise<ListCustomerAttributes> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/customers/${customerID}/attributes`, {
      body,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read</code>.
   *
   * @example
   * ```ts
   * const listCustomerAttributes =
   *   await client.projects.customers.attributes.list(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  list(
    customerID: string,
    params: AttributeListParams,
    options?: RequestOptions,
  ): APIPromise<ListCustomerAttributes> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/attributes`, {
      query,
      ...options,
    });
  }
}

export interface ListCustomerAttributes {
  /**
   * Details about each object.
   */
  items: Array<ListCustomerAttributes.Item>;

  /**
   * URL to access the next page of the customer's aliases. If not present / null,
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

export namespace ListCustomerAttributes {
  export interface Item {
    /**
     * The name of the attribute. Reserved attributes are prefixed with a `$`.
     */
    name: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'customer.attribute';

    /**
     * The time when the attribute was last updated.
     */
    updated_at: number;

    /**
     * The value of the attribute.
     */
    value: string | null;
  }
}

export interface AttributeCreateParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param
   */
  attributes: Array<AttributeCreateParams.Attribute>;
}

export namespace AttributeCreateParams {
  export interface Attribute {
    /**
     * The name of the attribute
     */
    name: CustomersAPI.CustomerAttributeReservedName | (string & {});

    /**
     * The value of the attribute. Use null to delete the attribute.
     */
    value: string | null;
  }
}

export interface AttributeListParams {
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

export declare namespace Attributes {
  export {
    type ListCustomerAttributes as ListCustomerAttributes,
    type AttributeCreateParams as AttributeCreateParams,
    type AttributeListParams as AttributeListParams,
  };
}
