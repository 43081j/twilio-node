'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../base/Page');  /* jshint ignore:line */
var TrustProductsChannelEndpointAssignmentList = require(
    './trustProducts/trustProductsChannelEndpointAssignment').TrustProductsChannelEndpointAssignmentList;
var TrustProductsEntityAssignmentsList = require(
    './trustProducts/trustProductsEntityAssignments').TrustProductsEntityAssignmentsList;
var TrustProductsEvaluationsList = require(
    './trustProducts/trustProductsEvaluations').TrustProductsEvaluationsList;
var deserialize = require(
    '../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var TrustProductsList;
var TrustProductsPage;
var TrustProductsInstance;
var TrustProductsContext;

/* jshint ignore:start */
/**
 * Initialize the TrustProductsList
 *
 * @constructor Twilio.Trusthub.V1.TrustProductsList
 *
 * @param {Twilio.Trusthub.V1} version - Version of the resource
 */
/* jshint ignore:end */
TrustProductsList = function TrustProductsList(version) {
  /* jshint ignore:start */
  /**
   * @function trustProducts
   * @memberof Twilio.Trusthub.V1#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Trusthub.V1.TrustProductsContext}
   */
  /* jshint ignore:end */
  function TrustProductsListInstance(sid) {
    return TrustProductsListInstance.get(sid);
  }

  TrustProductsListInstance._version = version;
  // Path Solution
  TrustProductsListInstance._solution = {};
  TrustProductsListInstance._uri = `/TrustProducts`;
  /* jshint ignore:start */
  /**
   * create a TrustProductsInstance
   *
   * @function create
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {object} opts - Options for request
   * @param {string} opts.friendlyName -
   *          The string that you assigned to describe the resource
   * @param {string} opts.email - The email address
   * @param {string} opts.policySid - The unique string of a policy.
   * @param {string} [opts.statusCallback] -
   *          The URL we call to inform your application of status changes.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TrustProductsInstance
   */
  /* jshint ignore:end */
  TrustProductsListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.friendlyName)) {
      throw new Error('Required parameter "opts.friendlyName" missing.');
    }
    if (_.isUndefined(opts.email)) {
      throw new Error('Required parameter "opts.email" missing.');
    }
    if (_.isUndefined(opts.policySid)) {
      throw new Error('Required parameter "opts.policySid" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Email': _.get(opts, 'email'),
      'PolicySid': _.get(opts, 'policySid'),
      'StatusCallback': _.get(opts, 'statusCallback')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TrustProductsInstance(this._version, payload, this._solution.sid));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams TrustProductsInstance records from the API.
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
   * @function each
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {object} [opts] - Options for request
   * @param {trust_products.status} [opts.status] -
   *          The verification status of the Customer-Profile resource
   * @param {string} [opts.friendlyName] -
   *          The string that you assigned to describe the resource
   * @param {string} [opts.policySid] - The unique string of a policy.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  TrustProductsListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists TrustProductsInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {object} [opts] - Options for request
   * @param {trust_products.status} [opts.status] -
   *          The verification status of the Customer-Profile resource
   * @param {string} [opts.friendlyName] -
   *          The string that you assigned to describe the resource
   * @param {string} [opts.policySid] - The unique string of a policy.
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TrustProductsListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {object} [opts] - Options for request
   * @param {trust_products.status} [opts.status] -
   *          The verification status of the Customer-Profile resource
   * @param {string} [opts.friendlyName] -
   *          The string that you assigned to describe the resource
   * @param {string} [opts.policySid] - The unique string of a policy.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TrustProductsListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Status': _.get(opts, 'status'),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'PolicySid': _.get(opts, 'policySid'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TrustProductsPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of TrustProductsInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TrustProductsListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new TrustProductsPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a trust_products
   *
   * @function get
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @param {string} sid - The unique string that identifies the resource.
   *
   * @returns {Twilio.Trusthub.V1.TrustProductsContext}
   */
  /* jshint ignore:end */
  TrustProductsListInstance.get = function get(sid) {
    return new TrustProductsContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Trusthub.V1.TrustProductsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  TrustProductsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  TrustProductsListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return TrustProductsListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the TrustProductsPage
 *
 * @constructor Twilio.Trusthub.V1.TrustProductsPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {TrustProductsSolution} solution - Path solution
 *
 * @returns TrustProductsPage
 */
/* jshint ignore:end */
TrustProductsPage = function TrustProductsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TrustProductsPage.prototype, Page.prototype);
TrustProductsPage.prototype.constructor = TrustProductsPage;

/* jshint ignore:start */
/**
 * Build an instance of TrustProductsInstance
 *
 * @function getInstance
 * @memberof Twilio.Trusthub.V1.TrustProductsPage#
 *
 * @param {TrustProductsPayload} payload - Payload response from the API
 *
 * @returns TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsPage.prototype.getInstance = function getInstance(payload) {
  return new TrustProductsInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trusthub.V1.TrustProductsPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
TrustProductsPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TrustProductsPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TrustProductsContext
 *
 * @constructor Twilio.Trusthub.V1.TrustProductsInstance
 *
 * @property {string} sid - The unique string that identifies the resource.
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} policySid - The unique string of a policy.
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {trust_products.status} status -
 *          The verification status of the Customer-Profile resource
 * @property {Date} validUntil -
 *          The ISO 8601 date and time in GMT when the resource will be valid until.
 * @property {string} email - The email address
 * @property {string} statusCallback -
 *          The URL we call to inform your application of status changes.
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the Customer-Profile resource
 * @property {string} links -
 *          The URLs of the Assigned Items of the Customer-Profile resource
 *
 * @param {V1} version - Version of the resource
 * @param {TrustProductsPayload} payload - The instance payload
 * @param {sid} sid - The unique string that identifies the resource.
 */
/* jshint ignore:end */
TrustProductsInstance = function TrustProductsInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.policySid = payload.policy_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.validUntil = deserialize.iso8601DateTime(payload.valid_until); // jshint ignore:line
  this.email = payload.email; // jshint ignore:line
  this.statusCallback = payload.status_callback; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(TrustProductsInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new TrustProductsContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a TrustProductsInstance
 *
 * @function fetch
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a TrustProductsInstance
 *
 * @function update
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {trust_products.status} [opts.status] -
 *          The verification status of the Customer-Profile resource
 * @param {string} [opts.statusCallback] -
 *          The URL we call to inform your application of status changes.
 * @param {string} [opts.friendlyName] -
 *          The string that you assigned to describe the resource
 * @param {string} [opts.email] - The email address
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * remove a TrustProductsInstance
 *
 * @function remove
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * Access the trustProductsEntityAssignments
 *
 * @function trustProductsEntityAssignments
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @returns {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsEntityAssignmentsList}
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.trustProductsEntityAssignments = function
    trustProductsEntityAssignments() {
  return this._proxy.trustProductsEntityAssignments;
};

/* jshint ignore:start */
/**
 * Access the trustProductsEvaluations
 *
 * @function trustProductsEvaluations
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @returns {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsEvaluationsList}
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.trustProductsEvaluations = function
    trustProductsEvaluations() {
  return this._proxy.trustProductsEvaluations;
};

/* jshint ignore:start */
/**
 * Access the trustProductsChannelEndpointAssignment
 *
 * @function trustProductsChannelEndpointAssignment
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @returns {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsChannelEndpointAssignmentList}
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.trustProductsChannelEndpointAssignment =
    function trustProductsChannelEndpointAssignment() {
  return this._proxy.trustProductsChannelEndpointAssignment;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trusthub.V1.TrustProductsInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
TrustProductsInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

TrustProductsInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the TrustProductsContext
 *
 * @constructor Twilio.Trusthub.V1.TrustProductsContext
 *
 * @property {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsEntityAssignmentsList} trustProductsEntityAssignments -
 *          trustProductsEntityAssignments resource
 * @property {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsEvaluationsList} trustProductsEvaluations -
 *          trustProductsEvaluations resource
 * @property {Twilio.Trusthub.V1.TrustProductsContext.TrustProductsChannelEndpointAssignmentList} trustProductsChannelEndpointAssignment -
 *          trustProductsChannelEndpointAssignment resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid} sid - The unique string that identifies the resource.
 */
/* jshint ignore:end */
TrustProductsContext = function TrustProductsContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/TrustProducts/${sid}`;

  // Dependents
  this._trustProductsEntityAssignments = undefined;
  this._trustProductsEvaluations = undefined;
  this._trustProductsChannelEndpointAssignment = undefined;
};

/* jshint ignore:start */
/**
 * fetch a TrustProductsInstance
 *
 * @function fetch
 * @memberof Twilio.Trusthub.V1.TrustProductsContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new TrustProductsInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a TrustProductsInstance
 *
 * @function update
 * @memberof Twilio.Trusthub.V1.TrustProductsContext#
 *
 * @param {object} [opts] - Options for request
 * @param {trust_products.status} [opts.status] -
 *          The verification status of the Customer-Profile resource
 * @param {string} [opts.statusCallback] -
 *          The URL we call to inform your application of status changes.
 * @param {string} [opts.friendlyName] -
 *          The string that you assigned to describe the resource
 * @param {string} [opts.email] - The email address
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Status': _.get(opts, 'status'),
    'StatusCallback': _.get(opts, 'statusCallback'),
    'FriendlyName': _.get(opts, 'friendlyName'),
    'Email': _.get(opts, 'email')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new TrustProductsInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a TrustProductsInstance
 *
 * @function remove
 * @memberof Twilio.Trusthub.V1.TrustProductsContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TrustProductsInstance
 */
/* jshint ignore:end */
TrustProductsContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(TrustProductsContext.prototype,
  'trustProductsEntityAssignments', {
    get: function() {
      if (!this._trustProductsEntityAssignments) {
        this._trustProductsEntityAssignments = new TrustProductsEntityAssignmentsList(
          this._version,
          this._solution.sid
        );
      }
      return this._trustProductsEntityAssignments;
    }
});

Object.defineProperty(TrustProductsContext.prototype,
  'trustProductsEvaluations', {
    get: function() {
      if (!this._trustProductsEvaluations) {
        this._trustProductsEvaluations = new TrustProductsEvaluationsList(
          this._version,
          this._solution.sid
        );
      }
      return this._trustProductsEvaluations;
    }
});

Object.defineProperty(TrustProductsContext.prototype,
  'trustProductsChannelEndpointAssignment', {
    get: function() {
      if (!this._trustProductsChannelEndpointAssignment) {
        this._trustProductsChannelEndpointAssignment = new TrustProductsChannelEndpointAssignmentList(
          this._version,
          this._solution.sid
        );
      }
      return this._trustProductsChannelEndpointAssignment;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Trusthub.V1.TrustProductsContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
TrustProductsContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

TrustProductsContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  TrustProductsList: TrustProductsList,
  TrustProductsPage: TrustProductsPage,
  TrustProductsInstance: TrustProductsInstance,
  TrustProductsContext: TrustProductsContext
};