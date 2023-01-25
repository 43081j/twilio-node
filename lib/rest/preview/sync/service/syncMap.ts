/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import Sync from "../../Sync";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { SyncMapItemListInstance } from "./syncMap/syncMapItem";
import { SyncMapPermissionListInstance } from "./syncMap/syncMapPermission";

/**
 * Options to pass to create a SyncMapInstance
 */
export interface SyncMapListInstanceCreateOptions {
  /**  */
  uniqueName?: string;
}
/**
 * Options to pass to each
 */
export interface SyncMapListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface SyncMapListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface SyncMapListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface SyncMapContext {
  syncMapItems: SyncMapItemListInstance;
  syncMapPermissions: SyncMapPermissionListInstance;

  /**
   * Remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapInstance) => any
  ): Promise<SyncMapInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SyncMapContextSolution {
  serviceSid: string;
  sid: string;
}

export class SyncMapContextImpl implements SyncMapContext {
  protected _solution: SyncMapContextSolution;
  protected _uri: string;

  protected _syncMapItems?: SyncMapItemListInstance;
  protected _syncMapPermissions?: SyncMapPermissionListInstance;

  constructor(protected _version: Sync, serviceSid: string, sid: string) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, sid };
    this._uri = `/Services/${serviceSid}/Maps/${sid}`;
  }

  get syncMapItems(): SyncMapItemListInstance {
    this._syncMapItems =
      this._syncMapItems ||
      SyncMapItemListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._syncMapItems;
  }

  get syncMapPermissions(): SyncMapPermissionListInstance {
    this._syncMapPermissions =
      this._syncMapPermissions ||
      SyncMapPermissionListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._syncMapPermissions;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: SyncMapInstance) => any
  ): Promise<SyncMapInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface SyncMapPayload extends TwilioResponsePayload {
  maps: SyncMapResource[];
}

interface SyncMapResource {
  sid: string;
  unique_name: string;
  account_sid: string;
  service_sid: string;
  url: string;
  links: Record<string, string>;
  revision: string;
  date_created: Date;
  date_updated: Date;
  created_by: string;
}

export class SyncMapInstance {
  protected _solution: SyncMapContextSolution;
  protected _context?: SyncMapContext;

  constructor(
    protected _version: Sync,
    payload: SyncMapResource,
    serviceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.url = payload.url;
    this.links = payload.links;
    this.revision = payload.revision;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;

    this._solution = { serviceSid, sid: sid || this.sid };
  }

  sid: string;
  uniqueName: string;
  accountSid: string;
  serviceSid: string;
  url: string;
  links: Record<string, string>;
  revision: string;
  dateCreated: Date;
  dateUpdated: Date;
  createdBy: string;

  private get _proxy(): SyncMapContext {
    this._context =
      this._context ||
      new SyncMapContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SyncMapInstance) => any
  ): Promise<SyncMapInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the syncMapItems.
   */
  syncMapItems(): SyncMapItemListInstance {
    return this._proxy.syncMapItems;
  }

  /**
   * Access the syncMapPermissions.
   */
  syncMapPermissions(): SyncMapPermissionListInstance {
    return this._proxy.syncMapPermissions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      uniqueName: this.uniqueName,
      accountSid: this.accountSid,
      serviceSid: this.serviceSid,
      url: this.url,
      links: this.links,
      revision: this.revision,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SyncMapSolution {
  serviceSid: string;
}

export interface SyncMapListInstance {
  _version: Sync;
  _solution: SyncMapSolution;
  _uri: string;

  (sid: string): SyncMapContext;
  get(sid: string): SyncMapContext;

  /**
   * Create a SyncMapInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapInstance
   */
  create(
    callback?: (error: Error | null, item?: SyncMapInstance) => any
  ): Promise<SyncMapInstance>;
  /**
   * Create a SyncMapInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SyncMapInstance
   */
  create(
    params: SyncMapListInstanceCreateOptions,
    callback?: (error: Error | null, item?: SyncMapInstance) => any
  ): Promise<SyncMapInstance>;

  /**
   * Streams SyncMapInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: SyncMapListInstanceEachOptions,
    callback?: (item: SyncMapInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncMapPage) => any
  ): Promise<SyncMapPage>;
  /**
   * Lists SyncMapInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: SyncMapInstance[]) => any
  ): Promise<SyncMapInstance[]>;
  list(
    params: SyncMapListInstanceOptions,
    callback?: (error: Error | null, items: SyncMapInstance[]) => any
  ): Promise<SyncMapInstance[]>;
  /**
   * Retrieve a single page of SyncMapInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { SyncMapListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: SyncMapPage) => any
  ): Promise<SyncMapPage>;
  page(
    params: SyncMapListInstancePageOptions,
    callback?: (error: Error | null, items: SyncMapPage) => any
  ): Promise<SyncMapPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function SyncMapListInstance(
  version: Sync,
  serviceSid: string
): SyncMapListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as SyncMapListInstance;

  instance.get = function get(sid): SyncMapContext {
    return new SyncMapContextImpl(version, serviceSid, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid };
  instance._uri = `/Services/${serviceSid}/Maps`;

  instance.create = function create(
    params?:
      | SyncMapListInstanceCreateOptions
      | ((error: Error | null, items: SyncMapInstance) => any),
    callback?: (error: Error | null, items: SyncMapInstance) => any
  ): Promise<SyncMapInstance> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | SyncMapListInstancePageOptions
      | ((error: Error | null, items: SyncMapPage) => any),
    callback?: (error: Error | null, items: SyncMapPage) => any
  ): Promise<SyncMapPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SyncMapPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: SyncMapPage) => any
  ): Promise<SyncMapPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new SyncMapPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

export class SyncMapPage extends Page<
  Sync,
  SyncMapPayload,
  SyncMapResource,
  SyncMapInstance
> {
  /**
   * Initialize the SyncMapPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Sync,
    response: Response<string>,
    solution: SyncMapSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of SyncMapInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncMapResource): SyncMapInstance {
    return new SyncMapInstance(
      this._version,
      payload,
      this._solution.serviceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}