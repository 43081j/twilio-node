/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Routes = require('../Routes');
import Version = require('../../base/Version');
import { PhoneNumberList } from './v2/phoneNumber';
import { PhoneNumberListInstance } from './v2/phoneNumber';
import { SipDomainList } from './v2/sipDomain';
import { SipDomainListInstance } from './v2/sipDomain';
import { TrunkList } from './v2/trunk';
import { TrunkListInstance } from './v2/trunk';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of Routes
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Routes);

  readonly phoneNumbers: PhoneNumberListInstance;
  readonly sipDomains: SipDomainListInstance;
  readonly trunks: TrunkListInstance;
}

export = V2;