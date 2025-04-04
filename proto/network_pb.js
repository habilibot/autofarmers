// source: network.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.network.AgentRuntimeInfo', null, global);
goog.exportSymbol('proto.network.CheckLiveRequest', null, global);
goog.exportSymbol('proto.network.DeregisterAgentRequest', null, global);
goog.exportSymbol('proto.network.GetAgentRuntimeInfoRequest', null, global);
goog.exportSymbol('proto.network.GetAgentRuntimeInfoResponse', null, global);
goog.exportSymbol('proto.network.RegisterAgentRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.CheckLiveRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.CheckLiveRequest.repeatedFields_, null);
};
goog.inherits(proto.network.CheckLiveRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.CheckLiveRequest.displayName = 'proto.network.CheckLiveRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.DeregisterAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.DeregisterAgentRequest.repeatedFields_, null);
};
goog.inherits(proto.network.DeregisterAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.DeregisterAgentRequest.displayName = 'proto.network.DeregisterAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.RegisterAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.RegisterAgentRequest.repeatedFields_, null);
};
goog.inherits(proto.network.RegisterAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.RegisterAgentRequest.displayName = 'proto.network.RegisterAgentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.GetAgentRuntimeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.GetAgentRuntimeInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.network.GetAgentRuntimeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.GetAgentRuntimeInfoRequest.displayName = 'proto.network.GetAgentRuntimeInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.GetAgentRuntimeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.GetAgentRuntimeInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.network.GetAgentRuntimeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.GetAgentRuntimeInfoResponse.displayName = 'proto.network.GetAgentRuntimeInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.network.AgentRuntimeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.network.AgentRuntimeInfo.repeatedFields_, null);
};
goog.inherits(proto.network.AgentRuntimeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.network.AgentRuntimeInfo.displayName = 'proto.network.AgentRuntimeInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.CheckLiveRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.CheckLiveRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.network.CheckLiveRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.CheckLiveRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.CheckLiveRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.CheckLiveRequest}
 */
proto.network.CheckLiveRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.CheckLiveRequest;
  return proto.network.CheckLiveRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.CheckLiveRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.CheckLiveRequest}
 */
proto.network.CheckLiveRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.CheckLiveRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.CheckLiveRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.CheckLiveRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.CheckLiveRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.network.CheckLiveRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.network.CheckLiveRequest} returns this
 */
proto.network.CheckLiveRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.network.CheckLiveRequest} returns this
 */
proto.network.CheckLiveRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.CheckLiveRequest} returns this
 */
proto.network.CheckLiveRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.DeregisterAgentRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.DeregisterAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.network.DeregisterAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.DeregisterAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.DeregisterAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.DeregisterAgentRequest}
 */
proto.network.DeregisterAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.DeregisterAgentRequest;
  return proto.network.DeregisterAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.DeregisterAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.DeregisterAgentRequest}
 */
proto.network.DeregisterAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.DeregisterAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.DeregisterAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.DeregisterAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.DeregisterAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * repeated string names = 3;
 * @return {!Array<string>}
 */
proto.network.DeregisterAgentRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.network.DeregisterAgentRequest} returns this
 */
proto.network.DeregisterAgentRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.network.DeregisterAgentRequest} returns this
 */
proto.network.DeregisterAgentRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.DeregisterAgentRequest} returns this
 */
proto.network.DeregisterAgentRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.RegisterAgentRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.RegisterAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.network.RegisterAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.RegisterAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.RegisterAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secure: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    namesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.RegisterAgentRequest}
 */
proto.network.RegisterAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.RegisterAgentRequest;
  return proto.network.RegisterAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.RegisterAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.RegisterAgentRequest}
 */
proto.network.RegisterAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecure(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.RegisterAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.RegisterAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.RegisterAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.RegisterAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecure();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string addr = 1;
 * @return {string}
 */
proto.network.RegisterAgentRequest.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.network.RegisterAgentRequest} returns this
 */
proto.network.RegisterAgentRequest.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool secure = 2;
 * @return {boolean}
 */
proto.network.RegisterAgentRequest.prototype.getSecure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.network.RegisterAgentRequest} returns this
 */
proto.network.RegisterAgentRequest.prototype.setSecure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated string names = 3;
 * @return {!Array<string>}
 */
proto.network.RegisterAgentRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.network.RegisterAgentRequest} returns this
 */
proto.network.RegisterAgentRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.network.RegisterAgentRequest} returns this
 */
proto.network.RegisterAgentRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.RegisterAgentRequest} returns this
 */
proto.network.RegisterAgentRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.GetAgentRuntimeInfoRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.network.GetAgentRuntimeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.GetAgentRuntimeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.GetAgentRuntimeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    namesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    all: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.GetAgentRuntimeInfoRequest}
 */
proto.network.GetAgentRuntimeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.GetAgentRuntimeInfoRequest;
  return proto.network.GetAgentRuntimeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.GetAgentRuntimeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.GetAgentRuntimeInfoRequest}
 */
proto.network.GetAgentRuntimeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNames(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAll(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.GetAgentRuntimeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.GetAgentRuntimeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.GetAgentRuntimeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string names = 1;
 * @return {!Array<string>}
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.getNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.network.GetAgentRuntimeInfoRequest} returns this
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.setNamesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.network.GetAgentRuntimeInfoRequest} returns this
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.addNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.GetAgentRuntimeInfoRequest} returns this
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.clearNamesList = function() {
  return this.setNamesList([]);
};


/**
 * optional bool all = 2;
 * @return {boolean}
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.getAll = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.network.GetAgentRuntimeInfoRequest} returns this
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.setAll = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.network.GetAgentRuntimeInfoRequest} returns this
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.clearAll = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.network.GetAgentRuntimeInfoRequest.prototype.hasAll = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.GetAgentRuntimeInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.GetAgentRuntimeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.network.GetAgentRuntimeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.GetAgentRuntimeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.GetAgentRuntimeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    agentRuntimeInfoList: jspb.Message.toObjectList(msg.getAgentRuntimeInfoList(),
    proto.network.AgentRuntimeInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.GetAgentRuntimeInfoResponse}
 */
proto.network.GetAgentRuntimeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.GetAgentRuntimeInfoResponse;
  return proto.network.GetAgentRuntimeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.GetAgentRuntimeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.GetAgentRuntimeInfoResponse}
 */
proto.network.GetAgentRuntimeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.network.AgentRuntimeInfo;
      reader.readMessage(value,proto.network.AgentRuntimeInfo.deserializeBinaryFromReader);
      msg.addAgentRuntimeInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.GetAgentRuntimeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.GetAgentRuntimeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.GetAgentRuntimeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.GetAgentRuntimeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgentRuntimeInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.network.AgentRuntimeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AgentRuntimeInfo agent_runtime_info = 1;
 * @return {!Array<!proto.network.AgentRuntimeInfo>}
 */
proto.network.GetAgentRuntimeInfoResponse.prototype.getAgentRuntimeInfoList = function() {
  return /** @type{!Array<!proto.network.AgentRuntimeInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.network.AgentRuntimeInfo, 1));
};


/**
 * @param {!Array<!proto.network.AgentRuntimeInfo>} value
 * @return {!proto.network.GetAgentRuntimeInfoResponse} returns this
*/
proto.network.GetAgentRuntimeInfoResponse.prototype.setAgentRuntimeInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.network.AgentRuntimeInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.network.AgentRuntimeInfo}
 */
proto.network.GetAgentRuntimeInfoResponse.prototype.addAgentRuntimeInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.network.AgentRuntimeInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.GetAgentRuntimeInfoResponse} returns this
 */
proto.network.GetAgentRuntimeInfoResponse.prototype.clearAgentRuntimeInfoList = function() {
  return this.setAgentRuntimeInfoList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.network.AgentRuntimeInfo.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.network.AgentRuntimeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.network.AgentRuntimeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.network.AgentRuntimeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.AgentRuntimeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    addr: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secure: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    agentNamesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.network.AgentRuntimeInfo}
 */
proto.network.AgentRuntimeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.network.AgentRuntimeInfo;
  return proto.network.AgentRuntimeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.network.AgentRuntimeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.network.AgentRuntimeInfo}
 */
proto.network.AgentRuntimeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddr(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecure(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAgentNames(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.network.AgentRuntimeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.network.AgentRuntimeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.network.AgentRuntimeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.network.AgentRuntimeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddr();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecure();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAgentNamesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string addr = 2;
 * @return {string}
 */
proto.network.AgentRuntimeInfo.prototype.getAddr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.network.AgentRuntimeInfo} returns this
 */
proto.network.AgentRuntimeInfo.prototype.setAddr = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool secure = 3;
 * @return {boolean}
 */
proto.network.AgentRuntimeInfo.prototype.getSecure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.network.AgentRuntimeInfo} returns this
 */
proto.network.AgentRuntimeInfo.prototype.setSecure = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated string agent_names = 4;
 * @return {!Array<string>}
 */
proto.network.AgentRuntimeInfo.prototype.getAgentNamesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.network.AgentRuntimeInfo} returns this
 */
proto.network.AgentRuntimeInfo.prototype.setAgentNamesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.network.AgentRuntimeInfo} returns this
 */
proto.network.AgentRuntimeInfo.prototype.addAgentNames = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.network.AgentRuntimeInfo} returns this
 */
proto.network.AgentRuntimeInfo.prototype.clearAgentNamesList = function() {
  return this.setAgentNamesList([]);
};


goog.object.extend(exports, proto.network);
