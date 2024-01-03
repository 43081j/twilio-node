/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Messaging
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import MessagingBase from "../MessagingBase";
import Version from "../../base/Version";
import { BrandRegistrationListInstance } from "./v1/brandRegistration";
import { DeactivationsListInstance } from "./v1/deactivations";
import { DomainCertsListInstance } from "./v1/domainCerts";
import { DomainConfigListInstance } from "./v1/domainConfig";
import { DomainConfigMessagingServiceListInstance } from "./v1/domainConfigMessagingService";
import { ExternalCampaignListInstance } from "./v1/externalCampaign";
import { LinkshorteningMessagingServiceListInstance } from "./v1/linkshorteningMessagingService";
import { LinkshorteningMessagingServiceDomainAssociationListInstance } from "./v1/linkshorteningMessagingServiceDomainAssociation";
import { ServiceListInstance } from "./v1/service";
import { TollfreeVerificationListInstance } from "./v1/tollfreeVerification";
import { UsecaseListInstance } from "./v1/usecase";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Messaging
   *
   * @param domain - The Twilio (Twilio.Messaging) domain
   */
  constructor(domain: MessagingBase) {
    super(domain, "v1");
  }

  /** brandRegistrations - { Twilio.Messaging.V1.BrandRegistrationListInstance } resource */
  protected _brandRegistrations?: BrandRegistrationListInstance;
  /** deactivations - { Twilio.Messaging.V1.DeactivationsListInstance } resource */
  protected _deactivations?: DeactivationsListInstance;
  /** domainCerts - { Twilio.Messaging.V1.DomainCertsListInstance } resource */
  protected _domainCerts?: DomainCertsListInstance;
  /** domainConfig - { Twilio.Messaging.V1.DomainConfigListInstance } resource */
  protected _domainConfig?: DomainConfigListInstance;
  /** domainConfigMessagingService - { Twilio.Messaging.V1.DomainConfigMessagingServiceListInstance } resource */
  protected _domainConfigMessagingService?: DomainConfigMessagingServiceListInstance;
  /** externalCampaign - { Twilio.Messaging.V1.ExternalCampaignListInstance } resource */
  protected _externalCampaign?: ExternalCampaignListInstance;
  /** linkshorteningMessagingService - { Twilio.Messaging.V1.LinkshorteningMessagingServiceListInstance } resource */
  protected _linkshorteningMessagingService?: LinkshorteningMessagingServiceListInstance;
  /** linkshorteningMessagingServiceDomainAssociation - { Twilio.Messaging.V1.LinkshorteningMessagingServiceDomainAssociationListInstance } resource */
  protected _linkshorteningMessagingServiceDomainAssociation?: LinkshorteningMessagingServiceDomainAssociationListInstance;
  /** services - { Twilio.Messaging.V1.ServiceListInstance } resource */
  protected _services?: ServiceListInstance;
  /** tollfreeVerifications - { Twilio.Messaging.V1.TollfreeVerificationListInstance } resource */
  protected _tollfreeVerifications?: TollfreeVerificationListInstance;
  /** usecases - { Twilio.Messaging.V1.UsecaseListInstance } resource */
  protected _usecases?: UsecaseListInstance;

  /** Getter for brandRegistrations resource */
  get brandRegistrations(): BrandRegistrationListInstance {
    this._brandRegistrations =
      this._brandRegistrations || BrandRegistrationListInstance(this);
    return this._brandRegistrations;
  }

  /** Getter for deactivations resource */
  get deactivations(): DeactivationsListInstance {
    this._deactivations =
      this._deactivations || DeactivationsListInstance(this);
    return this._deactivations;
  }

  /** Getter for domainCerts resource */
  get domainCerts(): DomainCertsListInstance {
    this._domainCerts = this._domainCerts || DomainCertsListInstance(this);
    return this._domainCerts;
  }

  /** Getter for domainConfig resource */
  get domainConfig(): DomainConfigListInstance {
    this._domainConfig = this._domainConfig || DomainConfigListInstance(this);
    return this._domainConfig;
  }

  /** Getter for domainConfigMessagingService resource */
  get domainConfigMessagingService(): DomainConfigMessagingServiceListInstance {
    this._domainConfigMessagingService =
      this._domainConfigMessagingService ||
      DomainConfigMessagingServiceListInstance(this);
    return this._domainConfigMessagingService;
  }

  /** Getter for externalCampaign resource */
  get externalCampaign(): ExternalCampaignListInstance {
    this._externalCampaign =
      this._externalCampaign || ExternalCampaignListInstance(this);
    return this._externalCampaign;
  }

  /** Getter for linkshorteningMessagingService resource */
  get linkshorteningMessagingService(): LinkshorteningMessagingServiceListInstance {
    this._linkshorteningMessagingService =
      this._linkshorteningMessagingService ||
      LinkshorteningMessagingServiceListInstance(this);
    return this._linkshorteningMessagingService;
  }

  /** Getter for linkshorteningMessagingServiceDomainAssociation resource */
  get linkshorteningMessagingServiceDomainAssociation(): LinkshorteningMessagingServiceDomainAssociationListInstance {
    this._linkshorteningMessagingServiceDomainAssociation =
      this._linkshorteningMessagingServiceDomainAssociation ||
      LinkshorteningMessagingServiceDomainAssociationListInstance(this);
    return this._linkshorteningMessagingServiceDomainAssociation;
  }

  /** Getter for services resource */
  get services(): ServiceListInstance {
    this._services = this._services || ServiceListInstance(this);
    return this._services;
  }

  /** Getter for tollfreeVerifications resource */
  get tollfreeVerifications(): TollfreeVerificationListInstance {
    this._tollfreeVerifications =
      this._tollfreeVerifications || TollfreeVerificationListInstance(this);
    return this._tollfreeVerifications;
  }

  /** Getter for usecases resource */
  get usecases(): UsecaseListInstance {
    this._usecases = this._usecases || UsecaseListInstance(this);
    return this._usecases;
  }
}