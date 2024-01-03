/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Media
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export type MediaProcessorOrder = "asc" | "desc";

export type MediaProcessorStatus = "failed" | "started" | "ended";

export type MediaProcessorUpdateStatus = "ended";

/**
 * Options to pass to update a MediaProcessorInstance
 */
export interface MediaProcessorContextUpdateOptions {
  /**  */
  status: MediaProcessorUpdateStatus;
}

/**
 * Options to pass to create a MediaProcessorInstance
 */
export interface MediaProcessorListInstanceCreateOptions {
  /** The [Media Extension](/docs/live/media-extensions-overview) name or URL. Ex: `video-composer-v2` */
  extension: string;
  /** The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/media-extensions-overview) you are using for more information about the context to send. */
  extensionContext: string;
  /** User-defined environment variables for the Media Extension, represented as a JSON dictionary of key/value strings. See the documentation for the specific [Media Extension](/docs/live/media-extensions-overview) you are using for more information about whether you need to provide this. */
  extensionEnvironment?: any;
  /** The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/api/status-callbacks) for details. */
  statusCallback?: string;
  /** The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`. */
  statusCallbackMethod?: string;
  /** The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming. */
  maxDuration?: number;
}
/**
 * Options to pass to each
 */
export interface MediaProcessorListInstanceEachOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaProcessorOrder;
  /** Status to filter by, with possible values `started`, `ended` or `failed`. */
  status?: MediaProcessorStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: MediaProcessorInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MediaProcessorListInstanceOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaProcessorOrder;
  /** Status to filter by, with possible values `started`, `ended` or `failed`. */
  status?: MediaProcessorStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MediaProcessorListInstancePageOptions {
  /** The sort order of the list by `date_created`. Can be: `asc` (ascending) or `desc` (descending) with `desc` as the default. */
  order?: MediaProcessorOrder;
  /** Status to filter by, with possible values `started`, `ended` or `failed`. */
  status?: MediaProcessorStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MediaProcessorContext {
  /**
   * Fetch a MediaProcessorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaProcessorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance>;

  /**
   * Update a MediaProcessorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaProcessorInstance
   */
  update(
    params: MediaProcessorContextUpdateOptions,
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface MediaProcessorContextSolution {
  sid: string;
}

export class MediaProcessorContextImpl implements MediaProcessorContext {
  protected _solution: MediaProcessorContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/MediaProcessors/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaProcessorInstance(
          operationVersion,
          payload,
          instance._solution.sid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params: MediaProcessorContextUpdateOptions,
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["status"] === null || params["status"] === undefined) {
      throw new Error("Required parameter \"params['status']\" missing.");
    }

    let data: any = {};

    data["Status"] = params["status"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new MediaProcessorInstance(
          operationVersion,
          payload,
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

interface MediaProcessorPayload extends TwilioResponsePayload {
  media_processors: MediaProcessorResource[];
}

interface MediaProcessorResource {
  account_sid: string;
  sid: string;
  date_created: Date;
  date_updated: Date;
  extension: string;
  extension_context: string;
  status: MediaProcessorStatus;
  url: string;
  ended_reason: string;
  status_callback: string;
  status_callback_method: string;
  max_duration: number;
}

export class MediaProcessorInstance {
  protected _solution: MediaProcessorContextSolution;
  protected _context?: MediaProcessorContext;

  constructor(
    protected _version: V1,
    payload: MediaProcessorResource,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.extension = payload.extension;
    this.extensionContext = payload.extension_context;
    this.status = payload.status;
    this.url = payload.url;
    this.endedReason = payload.ended_reason;
    this.statusCallback = payload.status_callback;
    this.statusCallbackMethod = payload.status_callback_method;
    this.maxDuration = deserialize.integer(payload.max_duration);

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the MediaProcessor resource.
   */
  accountSid: string;
  /**
   * The unique string generated to identify the MediaProcessor resource.
   */
  sid: string;
  /**
   * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;
  /**
   * The [Media Extension](/docs/live/media-extensions-overview) name or URL. Ex: `video-composer-v2`
   */
  extension: string;
  /**
   * The context of the Media Extension, represented as a JSON dictionary. See the documentation for the specific [Media Extension](/docs/live/media-extensions-overview) you are using for more information about the context to send.
   */
  extensionContext: string;
  status: MediaProcessorStatus;
  /**
   * The absolute URL of the resource.
   */
  url: string;
  /**
   * The reason why a MediaProcessor ended. When a MediaProcessor is in progress, will be `null`. When a MediaProcessor is completed, can be `ended-via-api`, `max-duration-exceeded`, `error-loading-extension`, `error-streaming-media` or `internal-service-error`. See [ended reasons](/docs/live/api/mediaprocessors#mediaprocessor-ended-reason-values) for more details.
   */
  endedReason: string;
  /**
   * The URL to which Twilio will send asynchronous webhook requests for every MediaProcessor event. See [Status Callbacks](/docs/live/api/status-callbacks) for details.
   */
  statusCallback: string;
  /**
   * The HTTP method Twilio should use to call the `status_callback` URL. Can be `POST` or `GET` and the default is `POST`.
   */
  statusCallbackMethod: string;
  /**
   * The maximum time, in seconds, that the MediaProcessor can run before automatically ends. The default value is 300 seconds, and the maximum value is 90000 seconds. Once this maximum duration is reached, Twilio will end the MediaProcessor, regardless of whether media is still streaming.
   */
  maxDuration: number;

  private get _proxy(): MediaProcessorContext {
    this._context =
      this._context ||
      new MediaProcessorContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a MediaProcessorInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaProcessorInstance
   */
  fetch(
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a MediaProcessorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaProcessorInstance
   */
  update(
    params: MediaProcessorContextUpdateOptions,
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      sid: this.sid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      extension: this.extension,
      extensionContext: this.extensionContext,
      status: this.status,
      url: this.url,
      endedReason: this.endedReason,
      statusCallback: this.statusCallback,
      statusCallbackMethod: this.statusCallbackMethod,
      maxDuration: this.maxDuration,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface MediaProcessorSolution {}

export interface MediaProcessorListInstance {
  _version: V1;
  _solution: MediaProcessorSolution;
  _uri: string;

  (sid: string): MediaProcessorContext;
  get(sid: string): MediaProcessorContext;

  /**
   * Create a MediaProcessorInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed MediaProcessorInstance
   */
  create(
    params: MediaProcessorListInstanceCreateOptions,
    callback?: (error: Error | null, item?: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance>;

  /**
   * Streams MediaProcessorInstance records from the API.
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
   * @param { MediaProcessorListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: MediaProcessorInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: MediaProcessorListInstanceEachOptions,
    callback?: (
      item: MediaProcessorInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MediaProcessorPage) => any
  ): Promise<MediaProcessorPage>;
  /**
   * Lists MediaProcessorInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaProcessorListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MediaProcessorInstance[]) => any
  ): Promise<MediaProcessorInstance[]>;
  list(
    params: MediaProcessorListInstanceOptions,
    callback?: (error: Error | null, items: MediaProcessorInstance[]) => any
  ): Promise<MediaProcessorInstance[]>;
  /**
   * Retrieve a single page of MediaProcessorInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MediaProcessorListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MediaProcessorPage) => any
  ): Promise<MediaProcessorPage>;
  page(
    params: MediaProcessorListInstancePageOptions,
    callback?: (error: Error | null, items: MediaProcessorPage) => any
  ): Promise<MediaProcessorPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MediaProcessorListInstance(
  version: V1
): MediaProcessorListInstance {
  const instance = ((sid) => instance.get(sid)) as MediaProcessorListInstance;

  instance.get = function get(sid): MediaProcessorContext {
    return new MediaProcessorContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/MediaProcessors`;

  instance.create = function create(
    params: MediaProcessorListInstanceCreateOptions,
    callback?: (error: Error | null, items: MediaProcessorInstance) => any
  ): Promise<MediaProcessorInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["extension"] === null || params["extension"] === undefined) {
      throw new Error("Required parameter \"params['extension']\" missing.");
    }

    if (
      params["extensionContext"] === null ||
      params["extensionContext"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['extensionContext']\" missing."
      );
    }

    let data: any = {};

    data["Extension"] = params["extension"];

    data["ExtensionContext"] = params["extensionContext"];
    if (params["extensionEnvironment"] !== undefined)
      data["ExtensionEnvironment"] = serialize.object(
        params["extensionEnvironment"]
      );
    if (params["statusCallback"] !== undefined)
      data["StatusCallback"] = params["statusCallback"];
    if (params["statusCallbackMethod"] !== undefined)
      data["StatusCallbackMethod"] = params["statusCallbackMethod"];
    if (params["maxDuration"] !== undefined)
      data["MaxDuration"] = params["maxDuration"];

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
      (payload) => new MediaProcessorInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | MediaProcessorListInstancePageOptions
      | ((error: Error | null, items: MediaProcessorPage) => any),
    callback?: (error: Error | null, items: MediaProcessorPage) => any
  ): Promise<MediaProcessorPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["order"] !== undefined) data["Order"] = params["order"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
        new MediaProcessorPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: MediaProcessorPage) => any
  ): Promise<MediaProcessorPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MediaProcessorPage(instance._version, payload, instance._solution)
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

export class MediaProcessorPage extends Page<
  V1,
  MediaProcessorPayload,
  MediaProcessorResource,
  MediaProcessorInstance
> {
  /**
   * Initialize the MediaProcessorPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: MediaProcessorSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MediaProcessorInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MediaProcessorResource): MediaProcessorInstance {
    return new MediaProcessorInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}