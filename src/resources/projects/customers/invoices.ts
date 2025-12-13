// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SubscriptionsAPI from '../subscriptions/subscriptions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:invoices:read</code>.
   *
   * @example
   * ```ts
   * const invoices =
   *   await client.projects.customers.invoices.list(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     { project_id: 'proj1ab2c3d4' },
   *   );
   * ```
   */
  list(
    customerID: string,
    params: InvoiceListParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    const { project_id, ...query } = params;
    return this._client.get(path`/projects/${project_id}/customers/${customerID}/invoices`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:invoices:read</code>.
   *
   * @example
   * ```ts
   * await client.projects.customers.invoices.retrieveFile(
   *   'rcbin1a2b3c4d5e',
   *   {
   *     project_id: 'proj1ab2c3d4',
   *     customer_id: '19b8de26-77c1-49f1-aa18-019a391603e2',
   *   },
   * );
   * ```
   */
  retrieveFile(
    invoiceID: string,
    params: InvoiceRetrieveFileParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { project_id, customer_id } = params;
    return this._client.get(
      path`/projects/${project_id}/customers/${customer_id}/invoices/${invoiceID}/file`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface InvoiceListResponse {
  /**
   * Details about each object.
   */
  items: Array<InvoiceListResponse.Item>;

  /**
   * URL to access the next page of the customer's invoice. If not present / null,
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

export namespace InvoiceListResponse {
  export interface Item {
    /**
     * The id of the invoice
     */
    id: string;

    /**
     * URL to download the invoice pdf
     */
    invoice_url: string | null;

    /**
     * The date when the invoiced was issued in ms since epoch
     */
    issued_at: number;

    /**
     * List of line items that are part of the invoice. Each line item represents a
     * product that was purchased.
     */
    line_items: Array<Item.LineItem>;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'invoice';

    /**
     * The date when the invoiced was paid in ms since epoch
     */
    paid_at: number | null;

    total_amount: SubscriptionsAPI.MonetaryAmount;
  }

  export namespace Item {
    export interface LineItem {
      /**
       * String representing the object's type. Objects of the same type share the same
       * value.
       */
      object: 'invoice.line_item';

      /**
       * The display name of the product
       */
      product_display_name: string | null;

      /**
       * The duration of the subscription in ISO-8601 standard
       */
      product_duration: string | null;

      /**
       * The product identifier
       */
      product_identifier: string;

      /**
       * Total purchased items
       */
      quantity: number;

      unit_amount: SubscriptionsAPI.MonetaryAmount;
    }
  }
}

export interface InvoiceListParams {
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

export interface InvoiceRetrieveFileParams {
  /**
   * ID of the project
   */
  project_id: string;

  /**
   * ID of the customer
   */
  customer_id: string;
}

export declare namespace Invoices {
  export {
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceRetrieveFileParams as InvoiceRetrieveFileParams,
  };
}
