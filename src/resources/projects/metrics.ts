// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Metrics extends APIResource {
  /**
   * This endpoint requires the following permission(s):
   * <code>charts_metrics:overview:read</code>.
   *
   * @example
   * ```ts
   * const response = await client.projects.metrics.getOverview(
   *   'proj1ab2c3d4',
   * );
   * ```
   */
  getOverview(
    projectID: string,
    query: MetricGetOverviewParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricGetOverviewResponse> {
    return this._client.get(path`/projects/${projectID}/metrics/overview`, { query, ...options });
  }
}

export interface MetricGetOverviewResponse {
  /**
   * Details about each overview metric.
   */
  metrics: Array<MetricGetOverviewResponse.Metric>;

  /**
   * String representing the object's type. Objects of the same type share the same
   * value.
   */
  object: 'overview_metrics';
}

export namespace MetricGetOverviewResponse {
  export interface Metric {
    /**
     * Id of the overview metric
     */
    id: string;

    /**
     * Description of the overview metric
     */
    description: string;

    /**
     * Last time the overview metric was updated in ms since epoch
     */
    last_updated_at: number | null;

    /**
     * Last time the overview metric was updated datetime in ISO 8601 format
     */
    last_updated_at_iso8601: string | null;

    /**
     * Display name of the overview metric
     */
    name: string;

    /**
     * String representing the object's type. Objects of the same type share the same
     * value.
     */
    object: 'overview_metric';

    /**
     * Length of time during which metric data is collected in ISO 8601 format. Zero
     * period means metric data was collected now
     */
    period: 'P0D' | 'P28D';

    /**
     * Unit of the overview metric
     */
    unit: string;

    /**
     * Value of the overview metric
     */
    value: number;
  }
}

export interface MetricGetOverviewParams {
  /**
   * ISO 4217 currency code
   */
  currency?: 'USD' | 'EUR' | 'GBP' | 'AUD' | 'CAD' | 'JPY' | 'BRL' | 'KRW' | 'CNY' | 'MXN' | 'SEK' | 'PLN';
}

export declare namespace Metrics {
  export {
    type MetricGetOverviewResponse as MetricGetOverviewResponse,
    type MetricGetOverviewParams as MetricGetOverviewParams,
  };
}
