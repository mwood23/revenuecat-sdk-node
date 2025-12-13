// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CustomersAPI from './customers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>project_configuration:offerings:read</code>,
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * await client.projects.customers.actions.assignOffering(
   *   '19b8de26-77c1-49f1-aa18-019a391603e2',
   *   {
   *     project_id: 'proj1ab2c3d4',
   *     offering_id: 'offrng1b2c3d4e5',
   *   },
   * );
   * ```
   */
  assignOffering(
    customerID: string,
    params: ActionAssignOfferingParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/customers/${customerID}/actions/assign_offering`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * const customer =
   *   await client.projects.customers.actions.grantEntitlement(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       entitlement_id: 'entla1b2c3d4e5',
   *       expires_at: 1658399423658,
   *     },
   *   );
   * ```
   */
  grantEntitlement(
    customerID: string,
    params: ActionGrantEntitlementParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Customer> {
    const { project_id, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/customers/${customerID}/actions/grant_entitlement`,
      { body, ...options },
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>.
   *
   * @example
   * ```ts
   * const customer =
   *   await client.projects.customers.actions.revokeGrantedEntitlement(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       entitlement_id: 'entla1b2c3d4e5',
   *     },
   *   );
   * ```
   */
  revokeGrantedEntitlement(
    customerID: string,
    params: ActionRevokeGrantedEntitlementParams,
    options?: RequestOptions,
  ): APIPromise<CustomersAPI.Customer> {
    const { project_id, ...body } = params;
    return this._client.post(
      path`/projects/${project_id}/customers/${customerID}/actions/revoke_granted_entitlement`,
      { body, ...options },
    );
  }

  /**
   * This endpoint requires the following permission(s):
   * <code>customer_information:customers:read_write</code>,
   * <code>customer_information:subscriptions:read_write</code>,
   * <code>customer_information:purchases:read_write</code>.
   *
   * @example
   * ```ts
   * const response =
   *   await client.projects.customers.actions.transfer(
   *     '19b8de26-77c1-49f1-aa18-019a391603e2',
   *     {
   *       project_id: 'proj1ab2c3d4',
   *       target_customer_id: 'target_customer_id',
   *     },
   *   );
   * ```
   */
  transfer(
    customerID: string,
    params: ActionTransferParams,
    options?: RequestOptions,
  ): APIPromise<ActionTransferResponse> {
    const { project_id, ...body } = params;
    return this._client.post(path`/projects/${project_id}/customers/${customerID}/actions/transfer`, {
      body,
      ...options,
    });
  }
}

export interface ActionTransferResponse {
  /**
   * The original customer before the transfer
   */
  source_customer: CustomersAPI.Customer;

  /**
   * The target customer after the transfer
   */
  target_customer: CustomersAPI.Customer;
}

export interface ActionAssignOfferingParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The ID of the offering to assign to the customer. Set to null to
   * clear any existing override.
   */
  offering_id: string | null;
}

export interface ActionGrantEntitlementParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The ID of the entitlement to grant to the customer.
   */
  entitlement_id: string;

  /**
   * Body param: The date after which the access to the entitlement expires in ms
   * since epoch.
   */
  expires_at: number;
}

export interface ActionRevokeGrantedEntitlementParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The ID of the granted entitlement to revoke from the customer.
   */
  entitlement_id: string;
}

export interface ActionTransferParams {
  /**
   * Path param: ID of the project
   */
  project_id: string;

  /**
   * Body param: The ID of the customer to whom the subscriptions and one-time
   * purchases will be transferred.
   */
  target_customer_id: string;

  /**
   * Body param: Optional. The IDs of the apps to filter the transfer by. When
   * specified, only purchases and subscriptions associated with these apps will be
   * transferred.
   */
  app_ids?: Array<string> | null;
}

export declare namespace Actions {
  export {
    type ActionTransferResponse as ActionTransferResponse,
    type ActionAssignOfferingParams as ActionAssignOfferingParams,
    type ActionGrantEntitlementParams as ActionGrantEntitlementParams,
    type ActionRevokeGrantedEntitlementParams as ActionRevokeGrantedEntitlementParams,
    type ActionTransferParams as ActionTransferParams,
  };
}
