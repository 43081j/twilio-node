/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Numbers
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

export interface PortingPortInPhoneNumberContext {
  /**
   * Remove a PortingPortInPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a PortingPortInPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInPhoneNumberInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: PortingPortInPhoneNumberInstance
    ) => any
  ): Promise<PortingPortInPhoneNumberInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface PortingPortInPhoneNumberContextSolution {
  portInRequestSid: string;
  phoneNumberSid: string;
}

export class PortingPortInPhoneNumberContextImpl
  implements PortingPortInPhoneNumberContext
{
  protected _solution: PortingPortInPhoneNumberContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    portInRequestSid: string,
    phoneNumberSid: string
  ) {
    if (!isValidPathParam(portInRequestSid)) {
      throw new Error("Parameter 'portInRequestSid' is not valid.");
    }

    if (!isValidPathParam(phoneNumberSid)) {
      throw new Error("Parameter 'phoneNumberSid' is not valid.");
    }

    this._solution = { portInRequestSid, phoneNumberSid };
    this._uri = `/Porting/PortIn/${portInRequestSid}/PhoneNumber/${phoneNumberSid}`;
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
    callback?: (
      error: Error | null,
      item?: PortingPortInPhoneNumberInstance
    ) => any
  ): Promise<PortingPortInPhoneNumberInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new PortingPortInPhoneNumberInstance(
          operationVersion,
          payload,
          instance._solution.portInRequestSid,
          instance._solution.phoneNumberSid
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

interface PortingPortInPhoneNumberPayload
  extends PortingPortInPhoneNumberResource {}

interface PortingPortInPhoneNumberResource {
  port_in_request_sid: string;
  phone_number_sid: string;
  url: string;
  account_sid: string;
  phone_number_type: string;
  date_created: Date;
  country: string;
  missing_required_fields: boolean;
  last_updated: Date;
  phone_number: string;
  portable: boolean;
  not_portability_reason: string;
  not_portability_reason_code: number;
  port_in_phone_number_status: string;
  port_out_pin: number;
  rejection_reason: string;
  rejection_reason_code: number;
}

export class PortingPortInPhoneNumberInstance {
  protected _solution: PortingPortInPhoneNumberContextSolution;
  protected _context?: PortingPortInPhoneNumberContext;

  constructor(
    protected _version: V1,
    payload: PortingPortInPhoneNumberResource,
    portInRequestSid?: string,
    phoneNumberSid?: string
  ) {
    this.portInRequestSid = payload.port_in_request_sid;
    this.phoneNumberSid = payload.phone_number_sid;
    this.url = payload.url;
    this.accountSid = payload.account_sid;
    this.phoneNumberType = payload.phone_number_type;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.country = payload.country;
    this.missingRequiredFields = payload.missing_required_fields;
    this.lastUpdated = deserialize.iso8601DateTime(payload.last_updated);
    this.phoneNumber = payload.phone_number;
    this.portable = payload.portable;
    this.notPortabilityReason = payload.not_portability_reason;
    this.notPortabilityReasonCode = deserialize.integer(
      payload.not_portability_reason_code
    );
    this.portInPhoneNumberStatus = payload.port_in_phone_number_status;
    this.portOutPin = deserialize.integer(payload.port_out_pin);
    this.rejectionReason = payload.rejection_reason;
    this.rejectionReasonCode = deserialize.integer(
      payload.rejection_reason_code
    );

    this._solution = {
      portInRequestSid: portInRequestSid || this.portInRequestSid,
      phoneNumberSid: phoneNumberSid || this.phoneNumberSid,
    };
  }

  /**
   * The SID of the Port In request. This is a unique identifier of the port in request.
   */
  portInRequestSid: string;
  /**
   * The SID of the Port In request phone number. This is a unique identifier of the phone number.
   */
  phoneNumberSid: string;
  url: string;
  /**
   * The SID of the account that the phone number belongs to.
   */
  accountSid: string;
  /**
   * The type of the phone number.
   */
  phoneNumberType: string;
  /**
   * The date when the phone number was created.
   */
  dateCreated: Date;
  /**
   * The country of the phone number.
   */
  country: string;
  /**
   * The phone number is missing required fields.
   */
  missingRequiredFields: boolean;
  /**
   * The timestamp when the status was last updated.
   */
  lastUpdated: Date;
  /**
   * The phone number.
   */
  phoneNumber: string;
  /**
   * The phone number is portable.
   */
  portable: boolean;
  /**
   * The reason why the phone number is not portable.
   */
  notPortabilityReason: string;
  /**
   * The code of the reason why the phone number is not portable.
   */
  notPortabilityReasonCode: number;
  /**
   * The status of the phone number in the port in request.
   */
  portInPhoneNumberStatus: string;
  /**
   * The pin required for the losing carrier to port out the phone number.
   */
  portOutPin: number;
  /**
   * The rejection reason returned by the vendor.
   */
  rejectionReason: string;
  /**
   * The rejection reason code returned by the vendor.
   */
  rejectionReasonCode: number;

  private get _proxy(): PortingPortInPhoneNumberContext {
    this._context =
      this._context ||
      new PortingPortInPhoneNumberContextImpl(
        this._version,
        this._solution.portInRequestSid,
        this._solution.phoneNumberSid
      );
    return this._context;
  }

  /**
   * Remove a PortingPortInPhoneNumberInstance
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
   * Fetch a PortingPortInPhoneNumberInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed PortingPortInPhoneNumberInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: PortingPortInPhoneNumberInstance
    ) => any
  ): Promise<PortingPortInPhoneNumberInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      portInRequestSid: this.portInRequestSid,
      phoneNumberSid: this.phoneNumberSid,
      url: this.url,
      accountSid: this.accountSid,
      phoneNumberType: this.phoneNumberType,
      dateCreated: this.dateCreated,
      country: this.country,
      missingRequiredFields: this.missingRequiredFields,
      lastUpdated: this.lastUpdated,
      phoneNumber: this.phoneNumber,
      portable: this.portable,
      notPortabilityReason: this.notPortabilityReason,
      notPortabilityReasonCode: this.notPortabilityReasonCode,
      portInPhoneNumberStatus: this.portInPhoneNumberStatus,
      portOutPin: this.portOutPin,
      rejectionReason: this.rejectionReason,
      rejectionReasonCode: this.rejectionReasonCode,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface PortingPortInPhoneNumberSolution {}

export interface PortingPortInPhoneNumberListInstance {
  _version: V1;
  _solution: PortingPortInPhoneNumberSolution;
  _uri: string;

  (
    portInRequestSid: string,
    phoneNumberSid: string
  ): PortingPortInPhoneNumberContext;
  get(
    portInRequestSid: string,
    phoneNumberSid: string
  ): PortingPortInPhoneNumberContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function PortingPortInPhoneNumberListInstance(
  version: V1
): PortingPortInPhoneNumberListInstance {
  const instance = ((portInRequestSid, phoneNumberSid) =>
    instance.get(
      portInRequestSid,
      phoneNumberSid
    )) as PortingPortInPhoneNumberListInstance;

  instance.get = function get(
    portInRequestSid,
    phoneNumberSid
  ): PortingPortInPhoneNumberContext {
    return new PortingPortInPhoneNumberContextImpl(
      version,
      portInRequestSid,
      phoneNumberSid
    );
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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