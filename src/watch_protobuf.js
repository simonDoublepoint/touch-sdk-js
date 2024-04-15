/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.HapticEvent = (function() {
    
        /**
         * Properties of a HapticEvent.
         * @exports IHapticEvent
         * @interface IHapticEvent
         * @property {HapticEvent.HapticType|null} [type] HapticEvent type
         * @property {number|null} [intensity] HapticEvent intensity
         * @property {number|null} [length] HapticEvent length
         */
    
        /**
         * Constructs a new HapticEvent.
         * @exports HapticEvent
         * @classdesc Represents a HapticEvent.
         * @implements IHapticEvent
         * @constructor
         * @param {IHapticEvent=} [properties] Properties to set
         */
        function HapticEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * HapticEvent type.
         * @member {HapticEvent.HapticType} type
         * @memberof HapticEvent
         * @instance
         */
        HapticEvent.prototype.type = 0;
    
        /**
         * HapticEvent intensity.
         * @member {number} intensity
         * @memberof HapticEvent
         * @instance
         */
        HapticEvent.prototype.intensity = 0;
    
        /**
         * HapticEvent length.
         * @member {number} length
         * @memberof HapticEvent
         * @instance
         */
        HapticEvent.prototype.length = 0;
    
        /**
         * Creates a new HapticEvent instance using the specified properties.
         * @function create
         * @memberof HapticEvent
         * @static
         * @param {IHapticEvent=} [properties] Properties to set
         * @returns {HapticEvent} HapticEvent instance
         */
        HapticEvent.create = function create(properties) {
            return new HapticEvent(properties);
        };
    
        /**
         * Encodes the specified HapticEvent message. Does not implicitly {@link HapticEvent.verify|verify} messages.
         * @function encode
         * @memberof HapticEvent
         * @static
         * @param {IHapticEvent} message HapticEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HapticEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.intensity != null && Object.hasOwnProperty.call(message, "intensity"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.intensity);
            if (message.length != null && Object.hasOwnProperty.call(message, "length"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.length);
            return writer;
        };
    
        /**
         * Encodes the specified HapticEvent message, length delimited. Does not implicitly {@link HapticEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof HapticEvent
         * @static
         * @param {IHapticEvent} message HapticEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HapticEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a HapticEvent message from the specified reader or buffer.
         * @function decode
         * @memberof HapticEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {HapticEvent} HapticEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HapticEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.HapticEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.intensity = reader.float();
                        break;
                    }
                case 3: {
                        message.length = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a HapticEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof HapticEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {HapticEvent} HapticEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HapticEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a HapticEvent message.
         * @function verify
         * @memberof HapticEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HapticEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.intensity != null && message.hasOwnProperty("intensity"))
                if (typeof message.intensity !== "number")
                    return "intensity: number expected";
            if (message.length != null && message.hasOwnProperty("length"))
                if (!$util.isInteger(message.length))
                    return "length: integer expected";
            return null;
        };
    
        /**
         * Creates a HapticEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof HapticEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {HapticEvent} HapticEvent
         */
        HapticEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.HapticEvent)
                return object;
            var message = new $root.HapticEvent();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CANCEL":
            case 0:
                message.type = 0;
                break;
            case "ONESHOT":
            case 1:
                message.type = 1;
                break;
            }
            if (object.intensity != null)
                message.intensity = Number(object.intensity);
            if (object.length != null)
                message.length = object.length | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a HapticEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof HapticEvent
         * @static
         * @param {HapticEvent} message HapticEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HapticEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "CANCEL" : 0;
                object.intensity = 0;
                object.length = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.HapticEvent.HapticType[message.type] === undefined ? message.type : $root.HapticEvent.HapticType[message.type] : message.type;
            if (message.intensity != null && message.hasOwnProperty("intensity"))
                object.intensity = options.json && !isFinite(message.intensity) ? String(message.intensity) : message.intensity;
            if (message.length != null && message.hasOwnProperty("length"))
                object.length = message.length;
            return object;
        };
    
        /**
         * Converts this HapticEvent to JSON.
         * @function toJSON
         * @memberof HapticEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HapticEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for HapticEvent
         * @function getTypeUrl
         * @memberof HapticEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HapticEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/HapticEvent";
        };
    
        /**
         * HapticType enum.
         * @name HapticEvent.HapticType
         * @enum {number}
         * @property {number} CANCEL=0 CANCEL value
         * @property {number} ONESHOT=1 ONESHOT value
         */
        HapticEvent.HapticType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CANCEL"] = 0;
            values[valuesById[1] = "ONESHOT"] = 1;
            return values;
        })();
    
        return HapticEvent;
    })();
    
    $root.ClientInfo = (function() {
    
        /**
         * Properties of a ClientInfo.
         * @exports IClientInfo
         * @interface IClientInfo
         * @property {string|null} [appName] ClientInfo appName
         * @property {string|null} [deviceName] ClientInfo deviceName
         * @property {string|null} [title] ClientInfo title
         * @property {string|null} [os] ClientInfo os
         */
    
        /**
         * Constructs a new ClientInfo.
         * @exports ClientInfo
         * @classdesc Represents a ClientInfo.
         * @implements IClientInfo
         * @constructor
         * @param {IClientInfo=} [properties] Properties to set
         */
        function ClientInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ClientInfo appName.
         * @member {string} appName
         * @memberof ClientInfo
         * @instance
         */
        ClientInfo.prototype.appName = "";
    
        /**
         * ClientInfo deviceName.
         * @member {string} deviceName
         * @memberof ClientInfo
         * @instance
         */
        ClientInfo.prototype.deviceName = "";
    
        /**
         * ClientInfo title.
         * @member {string} title
         * @memberof ClientInfo
         * @instance
         */
        ClientInfo.prototype.title = "";
    
        /**
         * ClientInfo os.
         * @member {string} os
         * @memberof ClientInfo
         * @instance
         */
        ClientInfo.prototype.os = "";
    
        /**
         * Creates a new ClientInfo instance using the specified properties.
         * @function create
         * @memberof ClientInfo
         * @static
         * @param {IClientInfo=} [properties] Properties to set
         * @returns {ClientInfo} ClientInfo instance
         */
        ClientInfo.create = function create(properties) {
            return new ClientInfo(properties);
        };
    
        /**
         * Encodes the specified ClientInfo message. Does not implicitly {@link ClientInfo.verify|verify} messages.
         * @function encode
         * @memberof ClientInfo
         * @static
         * @param {IClientInfo} message ClientInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.appName != null && Object.hasOwnProperty.call(message, "appName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.appName);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceName);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
            if (message.os != null && Object.hasOwnProperty.call(message, "os"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.os);
            return writer;
        };
    
        /**
         * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link ClientInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ClientInfo
         * @static
         * @param {IClientInfo} message ClientInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ClientInfo message from the specified reader or buffer.
         * @function decode
         * @memberof ClientInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ClientInfo} ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ClientInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.appName = reader.string();
                        break;
                    }
                case 2: {
                        message.deviceName = reader.string();
                        break;
                    }
                case 3: {
                        message.title = reader.string();
                        break;
                    }
                case 4: {
                        message.os = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ClientInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ClientInfo} ClientInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ClientInfo message.
         * @function verify
         * @memberof ClientInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.appName != null && message.hasOwnProperty("appName"))
                if (!$util.isString(message.appName))
                    return "appName: string expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.os != null && message.hasOwnProperty("os"))
                if (!$util.isString(message.os))
                    return "os: string expected";
            return null;
        };
    
        /**
         * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ClientInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ClientInfo} ClientInfo
         */
        ClientInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.ClientInfo)
                return object;
            var message = new $root.ClientInfo();
            if (object.appName != null)
                message.appName = String(object.appName);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.title != null)
                message.title = String(object.title);
            if (object.os != null)
                message.os = String(object.os);
            return message;
        };
    
        /**
         * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ClientInfo
         * @static
         * @param {ClientInfo} message ClientInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.appName = "";
                object.deviceName = "";
                object.title = "";
                object.os = "";
            }
            if (message.appName != null && message.hasOwnProperty("appName"))
                object.appName = message.appName;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.os != null && message.hasOwnProperty("os"))
                object.os = message.os;
            return object;
        };
    
        /**
         * Converts this ClientInfo to JSON.
         * @function toJSON
         * @memberof ClientInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ClientInfo
         * @function getTypeUrl
         * @memberof ClientInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ClientInfo";
        };
    
        return ClientInfo;
    })();
    
    $root.InputUpdate = (function() {
    
        /**
         * Properties of an InputUpdate.
         * @exports IInputUpdate
         * @interface IInputUpdate
         * @property {IHapticEvent|null} [hapticEvent] InputUpdate hapticEvent
         * @property {IClientInfo|null} [clientInfo] InputUpdate clientInfo
         * @property {IModel|null} [modelRequest] InputUpdate modelRequest
         */
    
        /**
         * Constructs a new InputUpdate.
         * @exports InputUpdate
         * @classdesc Represents an InputUpdate.
         * @implements IInputUpdate
         * @constructor
         * @param {IInputUpdate=} [properties] Properties to set
         */
        function InputUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * InputUpdate hapticEvent.
         * @member {IHapticEvent|null|undefined} hapticEvent
         * @memberof InputUpdate
         * @instance
         */
        InputUpdate.prototype.hapticEvent = null;
    
        /**
         * InputUpdate clientInfo.
         * @member {IClientInfo|null|undefined} clientInfo
         * @memberof InputUpdate
         * @instance
         */
        InputUpdate.prototype.clientInfo = null;
    
        /**
         * InputUpdate modelRequest.
         * @member {IModel|null|undefined} modelRequest
         * @memberof InputUpdate
         * @instance
         */
        InputUpdate.prototype.modelRequest = null;
    
        /**
         * Creates a new InputUpdate instance using the specified properties.
         * @function create
         * @memberof InputUpdate
         * @static
         * @param {IInputUpdate=} [properties] Properties to set
         * @returns {InputUpdate} InputUpdate instance
         */
        InputUpdate.create = function create(properties) {
            return new InputUpdate(properties);
        };
    
        /**
         * Encodes the specified InputUpdate message. Does not implicitly {@link InputUpdate.verify|verify} messages.
         * @function encode
         * @memberof InputUpdate
         * @static
         * @param {IInputUpdate} message InputUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hapticEvent != null && Object.hasOwnProperty.call(message, "hapticEvent"))
                $root.HapticEvent.encode(message.hapticEvent, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.clientInfo != null && Object.hasOwnProperty.call(message, "clientInfo"))
                $root.ClientInfo.encode(message.clientInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.modelRequest != null && Object.hasOwnProperty.call(message, "modelRequest"))
                $root.Model.encode(message.modelRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified InputUpdate message, length delimited. Does not implicitly {@link InputUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof InputUpdate
         * @static
         * @param {IInputUpdate} message InputUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InputUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an InputUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof InputUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {InputUpdate} InputUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.InputUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hapticEvent = $root.HapticEvent.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.clientInfo = $root.ClientInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.modelRequest = $root.Model.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an InputUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof InputUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {InputUpdate} InputUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InputUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an InputUpdate message.
         * @function verify
         * @memberof InputUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InputUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hapticEvent != null && message.hasOwnProperty("hapticEvent")) {
                var error = $root.HapticEvent.verify(message.hapticEvent);
                if (error)
                    return "hapticEvent." + error;
            }
            if (message.clientInfo != null && message.hasOwnProperty("clientInfo")) {
                var error = $root.ClientInfo.verify(message.clientInfo);
                if (error)
                    return "clientInfo." + error;
            }
            if (message.modelRequest != null && message.hasOwnProperty("modelRequest")) {
                var error = $root.Model.verify(message.modelRequest);
                if (error)
                    return "modelRequest." + error;
            }
            return null;
        };
    
        /**
         * Creates an InputUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof InputUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {InputUpdate} InputUpdate
         */
        InputUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.InputUpdate)
                return object;
            var message = new $root.InputUpdate();
            if (object.hapticEvent != null) {
                if (typeof object.hapticEvent !== "object")
                    throw TypeError(".InputUpdate.hapticEvent: object expected");
                message.hapticEvent = $root.HapticEvent.fromObject(object.hapticEvent);
            }
            if (object.clientInfo != null) {
                if (typeof object.clientInfo !== "object")
                    throw TypeError(".InputUpdate.clientInfo: object expected");
                message.clientInfo = $root.ClientInfo.fromObject(object.clientInfo);
            }
            if (object.modelRequest != null) {
                if (typeof object.modelRequest !== "object")
                    throw TypeError(".InputUpdate.modelRequest: object expected");
                message.modelRequest = $root.Model.fromObject(object.modelRequest);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an InputUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof InputUpdate
         * @static
         * @param {InputUpdate} message InputUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InputUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.hapticEvent = null;
                object.clientInfo = null;
                object.modelRequest = null;
            }
            if (message.hapticEvent != null && message.hasOwnProperty("hapticEvent"))
                object.hapticEvent = $root.HapticEvent.toObject(message.hapticEvent, options);
            if (message.clientInfo != null && message.hasOwnProperty("clientInfo"))
                object.clientInfo = $root.ClientInfo.toObject(message.clientInfo, options);
            if (message.modelRequest != null && message.hasOwnProperty("modelRequest"))
                object.modelRequest = $root.Model.toObject(message.modelRequest, options);
            return object;
        };
    
        /**
         * Converts this InputUpdate to JSON.
         * @function toJSON
         * @memberof InputUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InputUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for InputUpdate
         * @function getTypeUrl
         * @memberof InputUpdate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        InputUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/InputUpdate";
        };
    
        return InputUpdate;
    })();
    
    $root.Vec2 = (function() {
    
        /**
         * Properties of a Vec2.
         * @exports IVec2
         * @interface IVec2
         * @property {number|null} [x] Vec2 x
         * @property {number|null} [y] Vec2 y
         */
    
        /**
         * Constructs a new Vec2.
         * @exports Vec2
         * @classdesc Represents a Vec2.
         * @implements IVec2
         * @constructor
         * @param {IVec2=} [properties] Properties to set
         */
        function Vec2(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Vec2 x.
         * @member {number} x
         * @memberof Vec2
         * @instance
         */
        Vec2.prototype.x = 0;
    
        /**
         * Vec2 y.
         * @member {number} y
         * @memberof Vec2
         * @instance
         */
        Vec2.prototype.y = 0;
    
        /**
         * Creates a new Vec2 instance using the specified properties.
         * @function create
         * @memberof Vec2
         * @static
         * @param {IVec2=} [properties] Properties to set
         * @returns {Vec2} Vec2 instance
         */
        Vec2.create = function create(properties) {
            return new Vec2(properties);
        };
    
        /**
         * Encodes the specified Vec2 message. Does not implicitly {@link Vec2.verify|verify} messages.
         * @function encode
         * @memberof Vec2
         * @static
         * @param {IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            return writer;
        };
    
        /**
         * Encodes the specified Vec2 message, length delimited. Does not implicitly {@link Vec2.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Vec2
         * @static
         * @param {IVec2} message Vec2 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec2.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Vec2 message from the specified reader or buffer.
         * @function decode
         * @memberof Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vec2();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Vec2 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Vec2
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Vec2} Vec2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec2.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Vec2 message.
         * @function verify
         * @memberof Vec2
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec2.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            return null;
        };
    
        /**
         * Creates a Vec2 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Vec2
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Vec2} Vec2
         */
        Vec2.fromObject = function fromObject(object) {
            if (object instanceof $root.Vec2)
                return object;
            var message = new $root.Vec2();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            return message;
        };
    
        /**
         * Creates a plain object from a Vec2 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Vec2
         * @static
         * @param {Vec2} message Vec2
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec2.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            return object;
        };
    
        /**
         * Converts this Vec2 to JSON.
         * @function toJSON
         * @memberof Vec2
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec2.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Vec2
         * @function getTypeUrl
         * @memberof Vec2
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vec2.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Vec2";
        };
    
        return Vec2;
    })();
    
    $root.Vec3 = (function() {
    
        /**
         * Properties of a Vec3.
         * @exports IVec3
         * @interface IVec3
         * @property {number|null} [x] Vec3 x
         * @property {number|null} [y] Vec3 y
         * @property {number|null} [z] Vec3 z
         */
    
        /**
         * Constructs a new Vec3.
         * @exports Vec3
         * @classdesc Represents a Vec3.
         * @implements IVec3
         * @constructor
         * @param {IVec3=} [properties] Properties to set
         */
        function Vec3(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Vec3 x.
         * @member {number} x
         * @memberof Vec3
         * @instance
         */
        Vec3.prototype.x = 0;
    
        /**
         * Vec3 y.
         * @member {number} y
         * @memberof Vec3
         * @instance
         */
        Vec3.prototype.y = 0;
    
        /**
         * Vec3 z.
         * @member {number} z
         * @memberof Vec3
         * @instance
         */
        Vec3.prototype.z = 0;
    
        /**
         * Creates a new Vec3 instance using the specified properties.
         * @function create
         * @memberof Vec3
         * @static
         * @param {IVec3=} [properties] Properties to set
         * @returns {Vec3} Vec3 instance
         */
        Vec3.create = function create(properties) {
            return new Vec3(properties);
        };
    
        /**
         * Encodes the specified Vec3 message. Does not implicitly {@link Vec3.verify|verify} messages.
         * @function encode
         * @memberof Vec3
         * @static
         * @param {IVec3} message Vec3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec3.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified Vec3 message, length delimited. Does not implicitly {@link Vec3.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Vec3
         * @static
         * @param {IVec3} message Vec3 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vec3.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Vec3 message from the specified reader or buffer.
         * @function decode
         * @memberof Vec3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Vec3} Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec3.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vec3();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.x = reader.float();
                        break;
                    }
                case 2: {
                        message.y = reader.float();
                        break;
                    }
                case 3: {
                        message.z = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Vec3 message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Vec3
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Vec3} Vec3
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vec3.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Vec3 message.
         * @function verify
         * @memberof Vec3
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vec3.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a Vec3 message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Vec3
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Vec3} Vec3
         */
        Vec3.fromObject = function fromObject(object) {
            if (object instanceof $root.Vec3)
                return object;
            var message = new $root.Vec3();
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a Vec3 message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Vec3
         * @static
         * @param {Vec3} message Vec3
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vec3.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this Vec3 to JSON.
         * @function toJSON
         * @memberof Vec3
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vec3.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Vec3
         * @function getTypeUrl
         * @memberof Vec3
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Vec3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Vec3";
        };
    
        return Vec3;
    })();
    
    $root.Quat = (function() {
    
        /**
         * Properties of a Quat.
         * @exports IQuat
         * @interface IQuat
         * @property {number|null} [w] Quat w
         * @property {number|null} [x] Quat x
         * @property {number|null} [y] Quat y
         * @property {number|null} [z] Quat z
         */
    
        /**
         * Constructs a new Quat.
         * @exports Quat
         * @classdesc Represents a Quat.
         * @implements IQuat
         * @constructor
         * @param {IQuat=} [properties] Properties to set
         */
        function Quat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Quat w.
         * @member {number} w
         * @memberof Quat
         * @instance
         */
        Quat.prototype.w = 0;
    
        /**
         * Quat x.
         * @member {number} x
         * @memberof Quat
         * @instance
         */
        Quat.prototype.x = 0;
    
        /**
         * Quat y.
         * @member {number} y
         * @memberof Quat
         * @instance
         */
        Quat.prototype.y = 0;
    
        /**
         * Quat z.
         * @member {number} z
         * @memberof Quat
         * @instance
         */
        Quat.prototype.z = 0;
    
        /**
         * Creates a new Quat instance using the specified properties.
         * @function create
         * @memberof Quat
         * @static
         * @param {IQuat=} [properties] Properties to set
         * @returns {Quat} Quat instance
         */
        Quat.create = function create(properties) {
            return new Quat(properties);
        };
    
        /**
         * Encodes the specified Quat message. Does not implicitly {@link Quat.verify|verify} messages.
         * @function encode
         * @memberof Quat
         * @static
         * @param {IQuat} message Quat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.w != null && Object.hasOwnProperty.call(message, "w"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.w);
            if (message.x != null && Object.hasOwnProperty.call(message, "x"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.x);
            if (message.y != null && Object.hasOwnProperty.call(message, "y"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.y);
            if (message.z != null && Object.hasOwnProperty.call(message, "z"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.z);
            return writer;
        };
    
        /**
         * Encodes the specified Quat message, length delimited. Does not implicitly {@link Quat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Quat
         * @static
         * @param {IQuat} message Quat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Quat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Quat message from the specified reader or buffer.
         * @function decode
         * @memberof Quat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Quat} Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Quat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.w = reader.float();
                        break;
                    }
                case 2: {
                        message.x = reader.float();
                        break;
                    }
                case 3: {
                        message.y = reader.float();
                        break;
                    }
                case 4: {
                        message.z = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Quat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Quat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Quat} Quat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Quat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Quat message.
         * @function verify
         * @memberof Quat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Quat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.w != null && message.hasOwnProperty("w"))
                if (typeof message.w !== "number")
                    return "w: number expected";
            if (message.x != null && message.hasOwnProperty("x"))
                if (typeof message.x !== "number")
                    return "x: number expected";
            if (message.y != null && message.hasOwnProperty("y"))
                if (typeof message.y !== "number")
                    return "y: number expected";
            if (message.z != null && message.hasOwnProperty("z"))
                if (typeof message.z !== "number")
                    return "z: number expected";
            return null;
        };
    
        /**
         * Creates a Quat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Quat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Quat} Quat
         */
        Quat.fromObject = function fromObject(object) {
            if (object instanceof $root.Quat)
                return object;
            var message = new $root.Quat();
            if (object.w != null)
                message.w = Number(object.w);
            if (object.x != null)
                message.x = Number(object.x);
            if (object.y != null)
                message.y = Number(object.y);
            if (object.z != null)
                message.z = Number(object.z);
            return message;
        };
    
        /**
         * Creates a plain object from a Quat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Quat
         * @static
         * @param {Quat} message Quat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Quat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.w = 0;
                object.x = 0;
                object.y = 0;
                object.z = 0;
            }
            if (message.w != null && message.hasOwnProperty("w"))
                object.w = options.json && !isFinite(message.w) ? String(message.w) : message.w;
            if (message.x != null && message.hasOwnProperty("x"))
                object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
            if (message.y != null && message.hasOwnProperty("y"))
                object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
            if (message.z != null && message.hasOwnProperty("z"))
                object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
            return object;
        };
    
        /**
         * Converts this Quat to JSON.
         * @function toJSON
         * @memberof Quat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Quat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Quat
         * @function getTypeUrl
         * @memberof Quat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Quat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Quat";
        };
    
        return Quat;
    })();
    
    /**
     * GestureType enum.
     * @exports GestureType
     * @enum {number}
     * @property {number} NONE=0 NONE value
     * @property {number} PINCH_TAP=1 PINCH_TAP value
     * @property {number} CLENCH=2 CLENCH value
     * @property {number} SURFACE_TAP=3 SURFACE_TAP value
     * @property {number} PINCH_HOLD=4 PINCH_HOLD value
     */
    $root.GestureType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "PINCH_TAP"] = 1;
        values[valuesById[2] = "CLENCH"] = 2;
        values[valuesById[3] = "SURFACE_TAP"] = 3;
        values[valuesById[4] = "PINCH_HOLD"] = 4;
        return values;
    })();
    
    $root.Model = (function() {
    
        /**
         * Properties of a Model.
         * @exports IModel
         * @interface IModel
         * @property {Array.<GestureType>|null} [gestures] Model gestures
         */
    
        /**
         * Constructs a new Model.
         * @exports Model
         * @classdesc Represents a Model.
         * @implements IModel
         * @constructor
         * @param {IModel=} [properties] Properties to set
         */
        function Model(properties) {
            this.gestures = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Model gestures.
         * @member {Array.<GestureType>} gestures
         * @memberof Model
         * @instance
         */
        Model.prototype.gestures = $util.emptyArray;
    
        /**
         * Creates a new Model instance using the specified properties.
         * @function create
         * @memberof Model
         * @static
         * @param {IModel=} [properties] Properties to set
         * @returns {Model} Model instance
         */
        Model.create = function create(properties) {
            return new Model(properties);
        };
    
        /**
         * Encodes the specified Model message. Does not implicitly {@link Model.verify|verify} messages.
         * @function encode
         * @memberof Model
         * @static
         * @param {IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gestures != null && message.gestures.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.gestures.length; ++i)
                    writer.int32(message.gestures[i]);
                writer.ldelim();
            }
            return writer;
        };
    
        /**
         * Encodes the specified Model message, length delimited. Does not implicitly {@link Model.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Model
         * @static
         * @param {IModel} message Model message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Model.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Model message from the specified reader or buffer.
         * @function decode
         * @memberof Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Model();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.gestures && message.gestures.length))
                            message.gestures = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.gestures.push(reader.int32());
                        } else
                            message.gestures.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Model message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Model
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Model} Model
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Model.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Model message.
         * @function verify
         * @memberof Model
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Model.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gestures != null && message.hasOwnProperty("gestures")) {
                if (!Array.isArray(message.gestures))
                    return "gestures: array expected";
                for (var i = 0; i < message.gestures.length; ++i)
                    switch (message.gestures[i]) {
                    default:
                        return "gestures: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
            }
            return null;
        };
    
        /**
         * Creates a Model message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Model
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Model} Model
         */
        Model.fromObject = function fromObject(object) {
            if (object instanceof $root.Model)
                return object;
            var message = new $root.Model();
            if (object.gestures) {
                if (!Array.isArray(object.gestures))
                    throw TypeError(".Model.gestures: array expected");
                message.gestures = [];
                for (var i = 0; i < object.gestures.length; ++i)
                    switch (object.gestures[i]) {
                    default:
                        if (typeof object.gestures[i] === "number") {
                            message.gestures[i] = object.gestures[i];
                            break;
                        }
                    case "NONE":
                    case 0:
                        message.gestures[i] = 0;
                        break;
                    case "PINCH_TAP":
                    case 1:
                        message.gestures[i] = 1;
                        break;
                    case "CLENCH":
                    case 2:
                        message.gestures[i] = 2;
                        break;
                    case "SURFACE_TAP":
                    case 3:
                        message.gestures[i] = 3;
                        break;
                    case "PINCH_HOLD":
                    case 4:
                        message.gestures[i] = 4;
                        break;
                    }
            }
            return message;
        };
    
        /**
         * Creates a plain object from a Model message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Model
         * @static
         * @param {Model} message Model
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Model.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.gestures = [];
            if (message.gestures && message.gestures.length) {
                object.gestures = [];
                for (var j = 0; j < message.gestures.length; ++j)
                    object.gestures[j] = options.enums === String ? $root.GestureType[message.gestures[j]] === undefined ? message.gestures[j] : $root.GestureType[message.gestures[j]] : message.gestures[j];
            }
            return object;
        };
    
        /**
         * Converts this Model to JSON.
         * @function toJSON
         * @memberof Model
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Model.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Model
         * @function getTypeUrl
         * @memberof Model
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Model.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Model";
        };
    
        return Model;
    })();
    
    $root.Info = (function() {
    
        /**
         * Properties of an Info.
         * @exports IInfo
         * @interface IInfo
         * @property {Info.Hand|null} [hand] Info hand
         * @property {string|null} [appId] Info appId
         * @property {string|null} [appVersion] Info appVersion
         * @property {Array.<IModel>|null} [availableModels] Info availableModels
         * @property {IModel|null} [activeModel] Info activeModel
         * @property {string|null} [modelInfo] Info modelInfo
         * @property {string|null} [manufacturer] Info manufacturer
         * @property {string|null} [deviceName] Info deviceName
         * @property {number|null} [batteryPercentage] Info batteryPercentage
         * @property {boolean|null} [hapticsAvailable] Info hapticsAvailable
         * @property {IVec2|null} [touchScreenResolution] Info touchScreenResolution
         */
    
        /**
         * Constructs a new Info.
         * @exports Info
         * @classdesc Represents an Info.
         * @implements IInfo
         * @constructor
         * @param {IInfo=} [properties] Properties to set
         */
        function Info(properties) {
            this.availableModels = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Info hand.
         * @member {Info.Hand} hand
         * @memberof Info
         * @instance
         */
        Info.prototype.hand = 0;
    
        /**
         * Info appId.
         * @member {string} appId
         * @memberof Info
         * @instance
         */
        Info.prototype.appId = "";
    
        /**
         * Info appVersion.
         * @member {string} appVersion
         * @memberof Info
         * @instance
         */
        Info.prototype.appVersion = "";
    
        /**
         * Info availableModels.
         * @member {Array.<IModel>} availableModels
         * @memberof Info
         * @instance
         */
        Info.prototype.availableModels = $util.emptyArray;
    
        /**
         * Info activeModel.
         * @member {IModel|null|undefined} activeModel
         * @memberof Info
         * @instance
         */
        Info.prototype.activeModel = null;
    
        /**
         * Info modelInfo.
         * @member {string} modelInfo
         * @memberof Info
         * @instance
         */
        Info.prototype.modelInfo = "";
    
        /**
         * Info manufacturer.
         * @member {string} manufacturer
         * @memberof Info
         * @instance
         */
        Info.prototype.manufacturer = "";
    
        /**
         * Info deviceName.
         * @member {string} deviceName
         * @memberof Info
         * @instance
         */
        Info.prototype.deviceName = "";
    
        /**
         * Info batteryPercentage.
         * @member {number} batteryPercentage
         * @memberof Info
         * @instance
         */
        Info.prototype.batteryPercentage = 0;
    
        /**
         * Info hapticsAvailable.
         * @member {boolean} hapticsAvailable
         * @memberof Info
         * @instance
         */
        Info.prototype.hapticsAvailable = false;
    
        /**
         * Info touchScreenResolution.
         * @member {IVec2|null|undefined} touchScreenResolution
         * @memberof Info
         * @instance
         */
        Info.prototype.touchScreenResolution = null;
    
        /**
         * Creates a new Info instance using the specified properties.
         * @function create
         * @memberof Info
         * @static
         * @param {IInfo=} [properties] Properties to set
         * @returns {Info} Info instance
         */
        Info.create = function create(properties) {
            return new Info(properties);
        };
    
        /**
         * Encodes the specified Info message. Does not implicitly {@link Info.verify|verify} messages.
         * @function encode
         * @memberof Info
         * @static
         * @param {IInfo} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.hand != null && Object.hasOwnProperty.call(message, "hand"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.hand);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.appId);
            if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appVersion);
            if (message.availableModels != null && message.availableModels.length)
                for (var i = 0; i < message.availableModels.length; ++i)
                    $root.Model.encode(message.availableModels[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.activeModel != null && Object.hasOwnProperty.call(message, "activeModel"))
                $root.Model.encode(message.activeModel, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.modelInfo != null && Object.hasOwnProperty.call(message, "modelInfo"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.modelInfo);
            if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.manufacturer);
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.deviceName);
            if (message.batteryPercentage != null && Object.hasOwnProperty.call(message, "batteryPercentage"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.batteryPercentage);
            if (message.hapticsAvailable != null && Object.hasOwnProperty.call(message, "hapticsAvailable"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.hapticsAvailable);
            if (message.touchScreenResolution != null && Object.hasOwnProperty.call(message, "touchScreenResolution"))
                $root.Vec2.encode(message.touchScreenResolution, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified Info message, length delimited. Does not implicitly {@link Info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Info
         * @static
         * @param {IInfo} message Info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Info message from the specified reader or buffer.
         * @function decode
         * @memberof Info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.hand = reader.int32();
                        break;
                    }
                case 2: {
                        message.appId = reader.string();
                        break;
                    }
                case 3: {
                        message.appVersion = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.availableModels && message.availableModels.length))
                            message.availableModels = [];
                        message.availableModels.push($root.Model.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.activeModel = $root.Model.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.modelInfo = reader.string();
                        break;
                    }
                case 7: {
                        message.manufacturer = reader.string();
                        break;
                    }
                case 8: {
                        message.deviceName = reader.string();
                        break;
                    }
                case 9: {
                        message.batteryPercentage = reader.int32();
                        break;
                    }
                case 10: {
                        message.hapticsAvailable = reader.bool();
                        break;
                    }
                case 11: {
                        message.touchScreenResolution = $root.Vec2.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Info} Info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Info message.
         * @function verify
         * @memberof Info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.hand != null && message.hasOwnProperty("hand"))
                switch (message.hand) {
                default:
                    return "hand: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                if (!$util.isString(message.appVersion))
                    return "appVersion: string expected";
            if (message.availableModels != null && message.hasOwnProperty("availableModels")) {
                if (!Array.isArray(message.availableModels))
                    return "availableModels: array expected";
                for (var i = 0; i < message.availableModels.length; ++i) {
                    var error = $root.Model.verify(message.availableModels[i]);
                    if (error)
                        return "availableModels." + error;
                }
            }
            if (message.activeModel != null && message.hasOwnProperty("activeModel")) {
                var error = $root.Model.verify(message.activeModel);
                if (error)
                    return "activeModel." + error;
            }
            if (message.modelInfo != null && message.hasOwnProperty("modelInfo"))
                if (!$util.isString(message.modelInfo))
                    return "modelInfo: string expected";
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                if (!$util.isString(message.manufacturer))
                    return "manufacturer: string expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.batteryPercentage != null && message.hasOwnProperty("batteryPercentage"))
                if (!$util.isInteger(message.batteryPercentage))
                    return "batteryPercentage: integer expected";
            if (message.hapticsAvailable != null && message.hasOwnProperty("hapticsAvailable"))
                if (typeof message.hapticsAvailable !== "boolean")
                    return "hapticsAvailable: boolean expected";
            if (message.touchScreenResolution != null && message.hasOwnProperty("touchScreenResolution")) {
                var error = $root.Vec2.verify(message.touchScreenResolution);
                if (error)
                    return "touchScreenResolution." + error;
            }
            return null;
        };
    
        /**
         * Creates an Info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Info} Info
         */
        Info.fromObject = function fromObject(object) {
            if (object instanceof $root.Info)
                return object;
            var message = new $root.Info();
            switch (object.hand) {
            default:
                if (typeof object.hand === "number") {
                    message.hand = object.hand;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.hand = 0;
                break;
            case "RIGHT":
            case 1:
                message.hand = 1;
                break;
            case "LEFT":
            case 2:
                message.hand = 2;
                break;
            }
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.appVersion != null)
                message.appVersion = String(object.appVersion);
            if (object.availableModels) {
                if (!Array.isArray(object.availableModels))
                    throw TypeError(".Info.availableModels: array expected");
                message.availableModels = [];
                for (var i = 0; i < object.availableModels.length; ++i) {
                    if (typeof object.availableModels[i] !== "object")
                        throw TypeError(".Info.availableModels: object expected");
                    message.availableModels[i] = $root.Model.fromObject(object.availableModels[i]);
                }
            }
            if (object.activeModel != null) {
                if (typeof object.activeModel !== "object")
                    throw TypeError(".Info.activeModel: object expected");
                message.activeModel = $root.Model.fromObject(object.activeModel);
            }
            if (object.modelInfo != null)
                message.modelInfo = String(object.modelInfo);
            if (object.manufacturer != null)
                message.manufacturer = String(object.manufacturer);
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.batteryPercentage != null)
                message.batteryPercentage = object.batteryPercentage | 0;
            if (object.hapticsAvailable != null)
                message.hapticsAvailable = Boolean(object.hapticsAvailable);
            if (object.touchScreenResolution != null) {
                if (typeof object.touchScreenResolution !== "object")
                    throw TypeError(".Info.touchScreenResolution: object expected");
                message.touchScreenResolution = $root.Vec2.fromObject(object.touchScreenResolution);
            }
            return message;
        };
    
        /**
         * Creates a plain object from an Info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Info
         * @static
         * @param {Info} message Info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.availableModels = [];
            if (options.defaults) {
                object.hand = options.enums === String ? "NONE" : 0;
                object.appId = "";
                object.appVersion = "";
                object.activeModel = null;
                object.modelInfo = "";
                object.manufacturer = "";
                object.deviceName = "";
                object.batteryPercentage = 0;
                object.hapticsAvailable = false;
                object.touchScreenResolution = null;
            }
            if (message.hand != null && message.hasOwnProperty("hand"))
                object.hand = options.enums === String ? $root.Info.Hand[message.hand] === undefined ? message.hand : $root.Info.Hand[message.hand] : message.hand;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.appVersion != null && message.hasOwnProperty("appVersion"))
                object.appVersion = message.appVersion;
            if (message.availableModels && message.availableModels.length) {
                object.availableModels = [];
                for (var j = 0; j < message.availableModels.length; ++j)
                    object.availableModels[j] = $root.Model.toObject(message.availableModels[j], options);
            }
            if (message.activeModel != null && message.hasOwnProperty("activeModel"))
                object.activeModel = $root.Model.toObject(message.activeModel, options);
            if (message.modelInfo != null && message.hasOwnProperty("modelInfo"))
                object.modelInfo = message.modelInfo;
            if (message.manufacturer != null && message.hasOwnProperty("manufacturer"))
                object.manufacturer = message.manufacturer;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.batteryPercentage != null && message.hasOwnProperty("batteryPercentage"))
                object.batteryPercentage = message.batteryPercentage;
            if (message.hapticsAvailable != null && message.hasOwnProperty("hapticsAvailable"))
                object.hapticsAvailable = message.hapticsAvailable;
            if (message.touchScreenResolution != null && message.hasOwnProperty("touchScreenResolution"))
                object.touchScreenResolution = $root.Vec2.toObject(message.touchScreenResolution, options);
            return object;
        };
    
        /**
         * Converts this Info to JSON.
         * @function toJSON
         * @memberof Info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Info
         * @function getTypeUrl
         * @memberof Info
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Info";
        };
    
        /**
         * Hand enum.
         * @name Info.Hand
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} RIGHT=1 RIGHT value
         * @property {number} LEFT=2 LEFT value
         */
        Info.Hand = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "RIGHT"] = 1;
            values[valuesById[2] = "LEFT"] = 2;
            return values;
        })();
    
        return Info;
    })();
    
    $root.SensorFrame = (function() {
    
        /**
         * Properties of a SensorFrame.
         * @exports ISensorFrame
         * @interface ISensorFrame
         * @property {IVec3|null} [gyro] SensorFrame gyro
         * @property {IVec3|null} [acc] SensorFrame acc
         * @property {IVec3|null} [grav] SensorFrame grav
         * @property {IQuat|null} [quat] SensorFrame quat
         * @property {IVec3|null} [mag] SensorFrame mag
         * @property {IVec3|null} [magCal] SensorFrame magCal
         * @property {number|null} [deltaTime] SensorFrame deltaTime
         */
    
        /**
         * Constructs a new SensorFrame.
         * @exports SensorFrame
         * @classdesc Represents a SensorFrame.
         * @implements ISensorFrame
         * @constructor
         * @param {ISensorFrame=} [properties] Properties to set
         */
        function SensorFrame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * SensorFrame gyro.
         * @member {IVec3|null|undefined} gyro
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.gyro = null;
    
        /**
         * SensorFrame acc.
         * @member {IVec3|null|undefined} acc
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.acc = null;
    
        /**
         * SensorFrame grav.
         * @member {IVec3|null|undefined} grav
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.grav = null;
    
        /**
         * SensorFrame quat.
         * @member {IQuat|null|undefined} quat
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.quat = null;
    
        /**
         * SensorFrame mag.
         * @member {IVec3|null|undefined} mag
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.mag = null;
    
        /**
         * SensorFrame magCal.
         * @member {IVec3|null|undefined} magCal
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.magCal = null;
    
        /**
         * SensorFrame deltaTime.
         * @member {number} deltaTime
         * @memberof SensorFrame
         * @instance
         */
        SensorFrame.prototype.deltaTime = 0;
    
        /**
         * Creates a new SensorFrame instance using the specified properties.
         * @function create
         * @memberof SensorFrame
         * @static
         * @param {ISensorFrame=} [properties] Properties to set
         * @returns {SensorFrame} SensorFrame instance
         */
        SensorFrame.create = function create(properties) {
            return new SensorFrame(properties);
        };
    
        /**
         * Encodes the specified SensorFrame message. Does not implicitly {@link SensorFrame.verify|verify} messages.
         * @function encode
         * @memberof SensorFrame
         * @static
         * @param {ISensorFrame} message SensorFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SensorFrame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gyro != null && Object.hasOwnProperty.call(message, "gyro"))
                $root.Vec3.encode(message.gyro, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.acc != null && Object.hasOwnProperty.call(message, "acc"))
                $root.Vec3.encode(message.acc, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.grav != null && Object.hasOwnProperty.call(message, "grav"))
                $root.Vec3.encode(message.grav, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.quat != null && Object.hasOwnProperty.call(message, "quat"))
                $root.Quat.encode(message.quat, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.deltaTime);
            if (message.mag != null && Object.hasOwnProperty.call(message, "mag"))
                $root.Vec3.encode(message.mag, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.magCal != null && Object.hasOwnProperty.call(message, "magCal"))
                $root.Vec3.encode(message.magCal, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };
    
        /**
         * Encodes the specified SensorFrame message, length delimited. Does not implicitly {@link SensorFrame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SensorFrame
         * @static
         * @param {ISensorFrame} message SensorFrame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SensorFrame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a SensorFrame message from the specified reader or buffer.
         * @function decode
         * @memberof SensorFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SensorFrame} SensorFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SensorFrame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SensorFrame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.gyro = $root.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.acc = $root.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.grav = $root.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.quat = $root.Quat.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.mag = $root.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.magCal = $root.Vec3.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a SensorFrame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SensorFrame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SensorFrame} SensorFrame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SensorFrame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a SensorFrame message.
         * @function verify
         * @memberof SensorFrame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SensorFrame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.gyro != null && message.hasOwnProperty("gyro")) {
                var error = $root.Vec3.verify(message.gyro);
                if (error)
                    return "gyro." + error;
            }
            if (message.acc != null && message.hasOwnProperty("acc")) {
                var error = $root.Vec3.verify(message.acc);
                if (error)
                    return "acc." + error;
            }
            if (message.grav != null && message.hasOwnProperty("grav")) {
                var error = $root.Vec3.verify(message.grav);
                if (error)
                    return "grav." + error;
            }
            if (message.quat != null && message.hasOwnProperty("quat")) {
                var error = $root.Quat.verify(message.quat);
                if (error)
                    return "quat." + error;
            }
            if (message.mag != null && message.hasOwnProperty("mag")) {
                var error = $root.Vec3.verify(message.mag);
                if (error)
                    return "mag." + error;
            }
            if (message.magCal != null && message.hasOwnProperty("magCal")) {
                var error = $root.Vec3.verify(message.magCal);
                if (error)
                    return "magCal." + error;
            }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            return null;
        };
    
        /**
         * Creates a SensorFrame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SensorFrame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SensorFrame} SensorFrame
         */
        SensorFrame.fromObject = function fromObject(object) {
            if (object instanceof $root.SensorFrame)
                return object;
            var message = new $root.SensorFrame();
            if (object.gyro != null) {
                if (typeof object.gyro !== "object")
                    throw TypeError(".SensorFrame.gyro: object expected");
                message.gyro = $root.Vec3.fromObject(object.gyro);
            }
            if (object.acc != null) {
                if (typeof object.acc !== "object")
                    throw TypeError(".SensorFrame.acc: object expected");
                message.acc = $root.Vec3.fromObject(object.acc);
            }
            if (object.grav != null) {
                if (typeof object.grav !== "object")
                    throw TypeError(".SensorFrame.grav: object expected");
                message.grav = $root.Vec3.fromObject(object.grav);
            }
            if (object.quat != null) {
                if (typeof object.quat !== "object")
                    throw TypeError(".SensorFrame.quat: object expected");
                message.quat = $root.Quat.fromObject(object.quat);
            }
            if (object.mag != null) {
                if (typeof object.mag !== "object")
                    throw TypeError(".SensorFrame.mag: object expected");
                message.mag = $root.Vec3.fromObject(object.mag);
            }
            if (object.magCal != null) {
                if (typeof object.magCal !== "object")
                    throw TypeError(".SensorFrame.magCal: object expected");
                message.magCal = $root.Vec3.fromObject(object.magCal);
            }
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a SensorFrame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SensorFrame
         * @static
         * @param {SensorFrame} message SensorFrame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SensorFrame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.gyro = null;
                object.acc = null;
                object.grav = null;
                object.quat = null;
                object.deltaTime = 0;
                object.mag = null;
                object.magCal = null;
            }
            if (message.gyro != null && message.hasOwnProperty("gyro"))
                object.gyro = $root.Vec3.toObject(message.gyro, options);
            if (message.acc != null && message.hasOwnProperty("acc"))
                object.acc = $root.Vec3.toObject(message.acc, options);
            if (message.grav != null && message.hasOwnProperty("grav"))
                object.grav = $root.Vec3.toObject(message.grav, options);
            if (message.quat != null && message.hasOwnProperty("quat"))
                object.quat = $root.Quat.toObject(message.quat, options);
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            if (message.mag != null && message.hasOwnProperty("mag"))
                object.mag = $root.Vec3.toObject(message.mag, options);
            if (message.magCal != null && message.hasOwnProperty("magCal"))
                object.magCal = $root.Vec3.toObject(message.magCal, options);
            return object;
        };
    
        /**
         * Converts this SensorFrame to JSON.
         * @function toJSON
         * @memberof SensorFrame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SensorFrame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for SensorFrame
         * @function getTypeUrl
         * @memberof SensorFrame
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SensorFrame.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SensorFrame";
        };
    
        return SensorFrame;
    })();
    
    $root.Gesture = (function() {
    
        /**
         * Properties of a Gesture.
         * @exports IGesture
         * @interface IGesture
         * @property {GestureType|null} [type] Gesture type
         * @property {number|null} [deltaTime] Gesture deltaTime
         */
    
        /**
         * Constructs a new Gesture.
         * @exports Gesture
         * @classdesc Represents a Gesture.
         * @implements IGesture
         * @constructor
         * @param {IGesture=} [properties] Properties to set
         */
        function Gesture(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Gesture type.
         * @member {GestureType} type
         * @memberof Gesture
         * @instance
         */
        Gesture.prototype.type = 0;
    
        /**
         * Gesture deltaTime.
         * @member {number} deltaTime
         * @memberof Gesture
         * @instance
         */
        Gesture.prototype.deltaTime = 0;
    
        /**
         * Creates a new Gesture instance using the specified properties.
         * @function create
         * @memberof Gesture
         * @static
         * @param {IGesture=} [properties] Properties to set
         * @returns {Gesture} Gesture instance
         */
        Gesture.create = function create(properties) {
            return new Gesture(properties);
        };
    
        /**
         * Encodes the specified Gesture message. Does not implicitly {@link Gesture.verify|verify} messages.
         * @function encode
         * @memberof Gesture
         * @static
         * @param {IGesture} message Gesture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gesture.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deltaTime);
            return writer;
        };
    
        /**
         * Encodes the specified Gesture message, length delimited. Does not implicitly {@link Gesture.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Gesture
         * @static
         * @param {IGesture} message Gesture message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Gesture.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a Gesture message from the specified reader or buffer.
         * @function decode
         * @memberof Gesture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Gesture} Gesture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gesture.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Gesture();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a Gesture message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Gesture
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Gesture} Gesture
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Gesture.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a Gesture message.
         * @function verify
         * @memberof Gesture
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Gesture.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            return null;
        };
    
        /**
         * Creates a Gesture message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Gesture
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Gesture} Gesture
         */
        Gesture.fromObject = function fromObject(object) {
            if (object instanceof $root.Gesture)
                return object;
            var message = new $root.Gesture();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.type = 0;
                break;
            case "PINCH_TAP":
            case 1:
                message.type = 1;
                break;
            case "CLENCH":
            case 2:
                message.type = 2;
                break;
            case "SURFACE_TAP":
            case 3:
                message.type = 3;
                break;
            case "PINCH_HOLD":
            case 4:
                message.type = 4;
                break;
            }
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a Gesture message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Gesture
         * @static
         * @param {Gesture} message Gesture
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Gesture.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "NONE" : 0;
                object.deltaTime = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.GestureType[message.type] === undefined ? message.type : $root.GestureType[message.type] : message.type;
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            return object;
        };
    
        /**
         * Converts this Gesture to JSON.
         * @function toJSON
         * @memberof Gesture
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Gesture.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Gesture
         * @function getTypeUrl
         * @memberof Gesture
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Gesture.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Gesture";
        };
    
        return Gesture;
    })();
    
    $root.TouchEvent = (function() {
    
        /**
         * Properties of a TouchEvent.
         * @exports ITouchEvent
         * @interface ITouchEvent
         * @property {TouchEvent.TouchEventType|null} [eventType] TouchEvent eventType
         * @property {number|null} [actionIndex] TouchEvent actionIndex
         * @property {Array.<number>|null} [pointerIds] TouchEvent pointerIds
         * @property {Array.<IVec2>|null} [coords] TouchEvent coords
         * @property {number|null} [deltaTime] TouchEvent deltaTime
         */
    
        /**
         * Constructs a new TouchEvent.
         * @exports TouchEvent
         * @classdesc Represents a TouchEvent.
         * @implements ITouchEvent
         * @constructor
         * @param {ITouchEvent=} [properties] Properties to set
         */
        function TouchEvent(properties) {
            this.pointerIds = [];
            this.coords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * TouchEvent eventType.
         * @member {TouchEvent.TouchEventType} eventType
         * @memberof TouchEvent
         * @instance
         */
        TouchEvent.prototype.eventType = 0;
    
        /**
         * TouchEvent actionIndex.
         * @member {number} actionIndex
         * @memberof TouchEvent
         * @instance
         */
        TouchEvent.prototype.actionIndex = 0;
    
        /**
         * TouchEvent pointerIds.
         * @member {Array.<number>} pointerIds
         * @memberof TouchEvent
         * @instance
         */
        TouchEvent.prototype.pointerIds = $util.emptyArray;
    
        /**
         * TouchEvent coords.
         * @member {Array.<IVec2>} coords
         * @memberof TouchEvent
         * @instance
         */
        TouchEvent.prototype.coords = $util.emptyArray;
    
        /**
         * TouchEvent deltaTime.
         * @member {number} deltaTime
         * @memberof TouchEvent
         * @instance
         */
        TouchEvent.prototype.deltaTime = 0;
    
        /**
         * Creates a new TouchEvent instance using the specified properties.
         * @function create
         * @memberof TouchEvent
         * @static
         * @param {ITouchEvent=} [properties] Properties to set
         * @returns {TouchEvent} TouchEvent instance
         */
        TouchEvent.create = function create(properties) {
            return new TouchEvent(properties);
        };
    
        /**
         * Encodes the specified TouchEvent message. Does not implicitly {@link TouchEvent.verify|verify} messages.
         * @function encode
         * @memberof TouchEvent
         * @static
         * @param {ITouchEvent} message TouchEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TouchEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.eventType != null && Object.hasOwnProperty.call(message, "eventType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.eventType);
            if (message.actionIndex != null && Object.hasOwnProperty.call(message, "actionIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.actionIndex);
            if (message.pointerIds != null && message.pointerIds.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.pointerIds.length; ++i)
                    writer.int32(message.pointerIds[i]);
                writer.ldelim();
            }
            if (message.coords != null && message.coords.length)
                for (var i = 0; i < message.coords.length; ++i)
                    $root.Vec2.encode(message.coords[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.deltaTime);
            return writer;
        };
    
        /**
         * Encodes the specified TouchEvent message, length delimited. Does not implicitly {@link TouchEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof TouchEvent
         * @static
         * @param {ITouchEvent} message TouchEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TouchEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a TouchEvent message from the specified reader or buffer.
         * @function decode
         * @memberof TouchEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {TouchEvent} TouchEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TouchEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.TouchEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.eventType = reader.int32();
                        break;
                    }
                case 2: {
                        message.actionIndex = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.pointerIds && message.pointerIds.length))
                            message.pointerIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.pointerIds.push(reader.int32());
                        } else
                            message.pointerIds.push(reader.int32());
                        break;
                    }
                case 4: {
                        if (!(message.coords && message.coords.length))
                            message.coords = [];
                        message.coords.push($root.Vec2.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a TouchEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof TouchEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {TouchEvent} TouchEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TouchEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a TouchEvent message.
         * @function verify
         * @memberof TouchEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TouchEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                switch (message.eventType) {
                default:
                    return "eventType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.actionIndex != null && message.hasOwnProperty("actionIndex"))
                if (!$util.isInteger(message.actionIndex))
                    return "actionIndex: integer expected";
            if (message.pointerIds != null && message.hasOwnProperty("pointerIds")) {
                if (!Array.isArray(message.pointerIds))
                    return "pointerIds: array expected";
                for (var i = 0; i < message.pointerIds.length; ++i)
                    if (!$util.isInteger(message.pointerIds[i]))
                        return "pointerIds: integer[] expected";
            }
            if (message.coords != null && message.hasOwnProperty("coords")) {
                if (!Array.isArray(message.coords))
                    return "coords: array expected";
                for (var i = 0; i < message.coords.length; ++i) {
                    var error = $root.Vec2.verify(message.coords[i]);
                    if (error)
                        return "coords." + error;
                }
            }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            return null;
        };
    
        /**
         * Creates a TouchEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof TouchEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {TouchEvent} TouchEvent
         */
        TouchEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.TouchEvent)
                return object;
            var message = new $root.TouchEvent();
            switch (object.eventType) {
            default:
                if (typeof object.eventType === "number") {
                    message.eventType = object.eventType;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.eventType = 0;
                break;
            case "BEGIN":
            case 1:
                message.eventType = 1;
                break;
            case "END":
            case 2:
                message.eventType = 2;
                break;
            case "MOVE":
            case 3:
                message.eventType = 3;
                break;
            case "CANCEL":
            case 4:
                message.eventType = 4;
                break;
            }
            if (object.actionIndex != null)
                message.actionIndex = object.actionIndex | 0;
            if (object.pointerIds) {
                if (!Array.isArray(object.pointerIds))
                    throw TypeError(".TouchEvent.pointerIds: array expected");
                message.pointerIds = [];
                for (var i = 0; i < object.pointerIds.length; ++i)
                    message.pointerIds[i] = object.pointerIds[i] | 0;
            }
            if (object.coords) {
                if (!Array.isArray(object.coords))
                    throw TypeError(".TouchEvent.coords: array expected");
                message.coords = [];
                for (var i = 0; i < object.coords.length; ++i) {
                    if (typeof object.coords[i] !== "object")
                        throw TypeError(".TouchEvent.coords: object expected");
                    message.coords[i] = $root.Vec2.fromObject(object.coords[i]);
                }
            }
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a TouchEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof TouchEvent
         * @static
         * @param {TouchEvent} message TouchEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TouchEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.pointerIds = [];
                object.coords = [];
            }
            if (options.defaults) {
                object.eventType = options.enums === String ? "NONE" : 0;
                object.actionIndex = 0;
                object.deltaTime = 0;
            }
            if (message.eventType != null && message.hasOwnProperty("eventType"))
                object.eventType = options.enums === String ? $root.TouchEvent.TouchEventType[message.eventType] === undefined ? message.eventType : $root.TouchEvent.TouchEventType[message.eventType] : message.eventType;
            if (message.actionIndex != null && message.hasOwnProperty("actionIndex"))
                object.actionIndex = message.actionIndex;
            if (message.pointerIds && message.pointerIds.length) {
                object.pointerIds = [];
                for (var j = 0; j < message.pointerIds.length; ++j)
                    object.pointerIds[j] = message.pointerIds[j];
            }
            if (message.coords && message.coords.length) {
                object.coords = [];
                for (var j = 0; j < message.coords.length; ++j)
                    object.coords[j] = $root.Vec2.toObject(message.coords[j], options);
            }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            return object;
        };
    
        /**
         * Converts this TouchEvent to JSON.
         * @function toJSON
         * @memberof TouchEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TouchEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for TouchEvent
         * @function getTypeUrl
         * @memberof TouchEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        TouchEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/TouchEvent";
        };
    
        /**
         * TouchEventType enum.
         * @name TouchEvent.TouchEventType
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} BEGIN=1 BEGIN value
         * @property {number} END=2 END value
         * @property {number} MOVE=3 MOVE value
         * @property {number} CANCEL=4 CANCEL value
         */
        TouchEvent.TouchEventType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "BEGIN"] = 1;
            values[valuesById[2] = "END"] = 2;
            values[valuesById[3] = "MOVE"] = 3;
            values[valuesById[4] = "CANCEL"] = 4;
            return values;
        })();
    
        return TouchEvent;
    })();
    
    $root.RotaryEvent = (function() {
    
        /**
         * Properties of a RotaryEvent.
         * @exports IRotaryEvent
         * @interface IRotaryEvent
         * @property {number|null} [step] RotaryEvent step
         * @property {number|null} [deltaTime] RotaryEvent deltaTime
         */
    
        /**
         * Constructs a new RotaryEvent.
         * @exports RotaryEvent
         * @classdesc Represents a RotaryEvent.
         * @implements IRotaryEvent
         * @constructor
         * @param {IRotaryEvent=} [properties] Properties to set
         */
        function RotaryEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * RotaryEvent step.
         * @member {number} step
         * @memberof RotaryEvent
         * @instance
         */
        RotaryEvent.prototype.step = 0;
    
        /**
         * RotaryEvent deltaTime.
         * @member {number} deltaTime
         * @memberof RotaryEvent
         * @instance
         */
        RotaryEvent.prototype.deltaTime = 0;
    
        /**
         * Creates a new RotaryEvent instance using the specified properties.
         * @function create
         * @memberof RotaryEvent
         * @static
         * @param {IRotaryEvent=} [properties] Properties to set
         * @returns {RotaryEvent} RotaryEvent instance
         */
        RotaryEvent.create = function create(properties) {
            return new RotaryEvent(properties);
        };
    
        /**
         * Encodes the specified RotaryEvent message. Does not implicitly {@link RotaryEvent.verify|verify} messages.
         * @function encode
         * @memberof RotaryEvent
         * @static
         * @param {IRotaryEvent} message RotaryEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RotaryEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.step != null && Object.hasOwnProperty.call(message, "step"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.step);
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deltaTime);
            return writer;
        };
    
        /**
         * Encodes the specified RotaryEvent message, length delimited. Does not implicitly {@link RotaryEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RotaryEvent
         * @static
         * @param {IRotaryEvent} message RotaryEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RotaryEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a RotaryEvent message from the specified reader or buffer.
         * @function decode
         * @memberof RotaryEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RotaryEvent} RotaryEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RotaryEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RotaryEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.step = reader.int32();
                        break;
                    }
                case 2: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a RotaryEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RotaryEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RotaryEvent} RotaryEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RotaryEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a RotaryEvent message.
         * @function verify
         * @memberof RotaryEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RotaryEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.step != null && message.hasOwnProperty("step"))
                if (!$util.isInteger(message.step))
                    return "step: integer expected";
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            return null;
        };
    
        /**
         * Creates a RotaryEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RotaryEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RotaryEvent} RotaryEvent
         */
        RotaryEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.RotaryEvent)
                return object;
            var message = new $root.RotaryEvent();
            if (object.step != null)
                message.step = object.step | 0;
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a RotaryEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RotaryEvent
         * @static
         * @param {RotaryEvent} message RotaryEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RotaryEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.step = 0;
                object.deltaTime = 0;
            }
            if (message.step != null && message.hasOwnProperty("step"))
                object.step = message.step;
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            return object;
        };
    
        /**
         * Converts this RotaryEvent to JSON.
         * @function toJSON
         * @memberof RotaryEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RotaryEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for RotaryEvent
         * @function getTypeUrl
         * @memberof RotaryEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RotaryEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/RotaryEvent";
        };
    
        return RotaryEvent;
    })();
    
    $root.ButtonEvent = (function() {
    
        /**
         * Properties of a ButtonEvent.
         * @exports IButtonEvent
         * @interface IButtonEvent
         * @property {number|null} [id] ButtonEvent id
         * @property {number|null} [deltaTime] ButtonEvent deltaTime
         */
    
        /**
         * Constructs a new ButtonEvent.
         * @exports ButtonEvent
         * @classdesc Represents a ButtonEvent.
         * @implements IButtonEvent
         * @constructor
         * @param {IButtonEvent=} [properties] Properties to set
         */
        function ButtonEvent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ButtonEvent id.
         * @member {number} id
         * @memberof ButtonEvent
         * @instance
         */
        ButtonEvent.prototype.id = 0;
    
        /**
         * ButtonEvent deltaTime.
         * @member {number} deltaTime
         * @memberof ButtonEvent
         * @instance
         */
        ButtonEvent.prototype.deltaTime = 0;
    
        /**
         * Creates a new ButtonEvent instance using the specified properties.
         * @function create
         * @memberof ButtonEvent
         * @static
         * @param {IButtonEvent=} [properties] Properties to set
         * @returns {ButtonEvent} ButtonEvent instance
         */
        ButtonEvent.create = function create(properties) {
            return new ButtonEvent(properties);
        };
    
        /**
         * Encodes the specified ButtonEvent message. Does not implicitly {@link ButtonEvent.verify|verify} messages.
         * @function encode
         * @memberof ButtonEvent
         * @static
         * @param {IButtonEvent} message ButtonEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonEvent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deltaTime);
            return writer;
        };
    
        /**
         * Encodes the specified ButtonEvent message, length delimited. Does not implicitly {@link ButtonEvent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ButtonEvent
         * @static
         * @param {IButtonEvent} message ButtonEvent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonEvent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ButtonEvent message from the specified reader or buffer.
         * @function decode
         * @memberof ButtonEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ButtonEvent} ButtonEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonEvent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ButtonEvent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ButtonEvent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ButtonEvent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ButtonEvent} ButtonEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonEvent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ButtonEvent message.
         * @function verify
         * @memberof ButtonEvent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonEvent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            return null;
        };
    
        /**
         * Creates a ButtonEvent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ButtonEvent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ButtonEvent} ButtonEvent
         */
        ButtonEvent.fromObject = function fromObject(object) {
            if (object instanceof $root.ButtonEvent)
                return object;
            var message = new $root.ButtonEvent();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            return message;
        };
    
        /**
         * Creates a plain object from a ButtonEvent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ButtonEvent
         * @static
         * @param {ButtonEvent} message ButtonEvent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonEvent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.deltaTime = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            return object;
        };
    
        /**
         * Converts this ButtonEvent to JSON.
         * @function toJSON
         * @memberof ButtonEvent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonEvent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ButtonEvent
         * @function getTypeUrl
         * @memberof ButtonEvent
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ButtonEvent";
        };
    
        return ButtonEvent;
    })();
    
    $root.ProbabilityEntry = (function() {
    
        /**
         * Properties of a ProbabilityEntry.
         * @exports IProbabilityEntry
         * @interface IProbabilityEntry
         * @property {GestureType|null} [label] ProbabilityEntry label
         * @property {number|null} [probability] ProbabilityEntry probability
         */
    
        /**
         * Constructs a new ProbabilityEntry.
         * @exports ProbabilityEntry
         * @classdesc Represents a ProbabilityEntry.
         * @implements IProbabilityEntry
         * @constructor
         * @param {IProbabilityEntry=} [properties] Properties to set
         */
        function ProbabilityEntry(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * ProbabilityEntry label.
         * @member {GestureType} label
         * @memberof ProbabilityEntry
         * @instance
         */
        ProbabilityEntry.prototype.label = 0;
    
        /**
         * ProbabilityEntry probability.
         * @member {number} probability
         * @memberof ProbabilityEntry
         * @instance
         */
        ProbabilityEntry.prototype.probability = 0;
    
        /**
         * Creates a new ProbabilityEntry instance using the specified properties.
         * @function create
         * @memberof ProbabilityEntry
         * @static
         * @param {IProbabilityEntry=} [properties] Properties to set
         * @returns {ProbabilityEntry} ProbabilityEntry instance
         */
        ProbabilityEntry.create = function create(properties) {
            return new ProbabilityEntry(properties);
        };
    
        /**
         * Encodes the specified ProbabilityEntry message. Does not implicitly {@link ProbabilityEntry.verify|verify} messages.
         * @function encode
         * @memberof ProbabilityEntry
         * @static
         * @param {IProbabilityEntry} message ProbabilityEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbabilityEntry.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.label);
            if (message.probability != null && Object.hasOwnProperty.call(message, "probability"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.probability);
            return writer;
        };
    
        /**
         * Encodes the specified ProbabilityEntry message, length delimited. Does not implicitly {@link ProbabilityEntry.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProbabilityEntry
         * @static
         * @param {IProbabilityEntry} message ProbabilityEntry message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProbabilityEntry.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes a ProbabilityEntry message from the specified reader or buffer.
         * @function decode
         * @memberof ProbabilityEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProbabilityEntry} ProbabilityEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbabilityEntry.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProbabilityEntry();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.label = reader.int32();
                        break;
                    }
                case 2: {
                        message.probability = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes a ProbabilityEntry message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProbabilityEntry
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProbabilityEntry} ProbabilityEntry
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProbabilityEntry.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies a ProbabilityEntry message.
         * @function verify
         * @memberof ProbabilityEntry
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProbabilityEntry.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.label != null && message.hasOwnProperty("label"))
                switch (message.label) {
                default:
                    return "label: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.probability != null && message.hasOwnProperty("probability"))
                if (typeof message.probability !== "number")
                    return "probability: number expected";
            return null;
        };
    
        /**
         * Creates a ProbabilityEntry message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProbabilityEntry
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProbabilityEntry} ProbabilityEntry
         */
        ProbabilityEntry.fromObject = function fromObject(object) {
            if (object instanceof $root.ProbabilityEntry)
                return object;
            var message = new $root.ProbabilityEntry();
            switch (object.label) {
            default:
                if (typeof object.label === "number") {
                    message.label = object.label;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.label = 0;
                break;
            case "PINCH_TAP":
            case 1:
                message.label = 1;
                break;
            case "CLENCH":
            case 2:
                message.label = 2;
                break;
            case "SURFACE_TAP":
            case 3:
                message.label = 3;
                break;
            case "PINCH_HOLD":
            case 4:
                message.label = 4;
                break;
            }
            if (object.probability != null)
                message.probability = Number(object.probability);
            return message;
        };
    
        /**
         * Creates a plain object from a ProbabilityEntry message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProbabilityEntry
         * @static
         * @param {ProbabilityEntry} message ProbabilityEntry
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProbabilityEntry.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.label = options.enums === String ? "NONE" : 0;
                object.probability = 0;
            }
            if (message.label != null && message.hasOwnProperty("label"))
                object.label = options.enums === String ? $root.GestureType[message.label] === undefined ? message.label : $root.GestureType[message.label] : message.label;
            if (message.probability != null && message.hasOwnProperty("probability"))
                object.probability = options.json && !isFinite(message.probability) ? String(message.probability) : message.probability;
            return object;
        };
    
        /**
         * Converts this ProbabilityEntry to JSON.
         * @function toJSON
         * @memberof ProbabilityEntry
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProbabilityEntry.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for ProbabilityEntry
         * @function getTypeUrl
         * @memberof ProbabilityEntry
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProbabilityEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ProbabilityEntry";
        };
    
        return ProbabilityEntry;
    })();
    
    $root.Update = (function() {
    
        /**
         * Properties of an Update.
         * @exports IUpdate
         * @interface IUpdate
         * @property {Array.<ISensorFrame>|null} [sensorFrames] Update sensorFrames
         * @property {Array.<IGesture>|null} [gestures] Update gestures
         * @property {Array.<ITouchEvent>|null} [touchEvents] Update touchEvents
         * @property {Array.<IButtonEvent>|null} [buttonEvents] Update buttonEvents
         * @property {Array.<IRotaryEvent>|null} [rotaryEvents] Update rotaryEvents
         * @property {Array.<Update.Signal>|null} [signals] Update signals
         * @property {number|null} [deltaTime] Update deltaTime
         * @property {number|Long|null} [unixTime] Update unixTime
         * @property {IInfo|null} [info] Update info
         * @property {Array.<IProbabilityEntry>|null} [probabilities] Update probabilities
         * @property {number|null} [pressure] Update pressure
         */
    
        /**
         * Constructs a new Update.
         * @exports Update
         * @classdesc Represents an Update.
         * @implements IUpdate
         * @constructor
         * @param {IUpdate=} [properties] Properties to set
         */
        function Update(properties) {
            this.sensorFrames = [];
            this.gestures = [];
            this.touchEvents = [];
            this.buttonEvents = [];
            this.rotaryEvents = [];
            this.signals = [];
            this.probabilities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
    
        /**
         * Update sensorFrames.
         * @member {Array.<ISensorFrame>} sensorFrames
         * @memberof Update
         * @instance
         */
        Update.prototype.sensorFrames = $util.emptyArray;
    
        /**
         * Update gestures.
         * @member {Array.<IGesture>} gestures
         * @memberof Update
         * @instance
         */
        Update.prototype.gestures = $util.emptyArray;
    
        /**
         * Update touchEvents.
         * @member {Array.<ITouchEvent>} touchEvents
         * @memberof Update
         * @instance
         */
        Update.prototype.touchEvents = $util.emptyArray;
    
        /**
         * Update buttonEvents.
         * @member {Array.<IButtonEvent>} buttonEvents
         * @memberof Update
         * @instance
         */
        Update.prototype.buttonEvents = $util.emptyArray;
    
        /**
         * Update rotaryEvents.
         * @member {Array.<IRotaryEvent>} rotaryEvents
         * @memberof Update
         * @instance
         */
        Update.prototype.rotaryEvents = $util.emptyArray;
    
        /**
         * Update signals.
         * @member {Array.<Update.Signal>} signals
         * @memberof Update
         * @instance
         */
        Update.prototype.signals = $util.emptyArray;
    
        /**
         * Update deltaTime.
         * @member {number} deltaTime
         * @memberof Update
         * @instance
         */
        Update.prototype.deltaTime = 0;
    
        /**
         * Update unixTime.
         * @member {number|Long} unixTime
         * @memberof Update
         * @instance
         */
        Update.prototype.unixTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
        /**
         * Update info.
         * @member {IInfo|null|undefined} info
         * @memberof Update
         * @instance
         */
        Update.prototype.info = null;
    
        /**
         * Update probabilities.
         * @member {Array.<IProbabilityEntry>} probabilities
         * @memberof Update
         * @instance
         */
        Update.prototype.probabilities = $util.emptyArray;
    
        /**
         * Update pressure.
         * @member {number} pressure
         * @memberof Update
         * @instance
         */
        Update.prototype.pressure = 0;
    
        /**
         * Creates a new Update instance using the specified properties.
         * @function create
         * @memberof Update
         * @static
         * @param {IUpdate=} [properties] Properties to set
         * @returns {Update} Update instance
         */
        Update.create = function create(properties) {
            return new Update(properties);
        };
    
        /**
         * Encodes the specified Update message. Does not implicitly {@link Update.verify|verify} messages.
         * @function encode
         * @memberof Update
         * @static
         * @param {IUpdate} message Update message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Update.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sensorFrames != null && message.sensorFrames.length)
                for (var i = 0; i < message.sensorFrames.length; ++i)
                    $root.SensorFrame.encode(message.sensorFrames[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.gestures != null && message.gestures.length)
                for (var i = 0; i < message.gestures.length; ++i)
                    $root.Gesture.encode(message.gestures[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.touchEvents != null && message.touchEvents.length)
                for (var i = 0; i < message.touchEvents.length; ++i)
                    $root.TouchEvent.encode(message.touchEvents[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.buttonEvents != null && message.buttonEvents.length)
                for (var i = 0; i < message.buttonEvents.length; ++i)
                    $root.ButtonEvent.encode(message.buttonEvents[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.rotaryEvents != null && message.rotaryEvents.length)
                for (var i = 0; i < message.rotaryEvents.length; ++i)
                    $root.RotaryEvent.encode(message.rotaryEvents[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.signals != null && message.signals.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.signals.length; ++i)
                    writer.int32(message.signals[i]);
                writer.ldelim();
            }
            if (message.deltaTime != null && Object.hasOwnProperty.call(message, "deltaTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.deltaTime);
            if (message.unixTime != null && Object.hasOwnProperty.call(message, "unixTime"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.unixTime);
            if (message.info != null && Object.hasOwnProperty.call(message, "info"))
                $root.Info.encode(message.info, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.probabilities != null && message.probabilities.length)
                for (var i = 0; i < message.probabilities.length; ++i)
                    $root.ProbabilityEntry.encode(message.probabilities[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
                writer.uint32(/* id 16, wireType 5 =*/133).float(message.pressure);
            return writer;
        };
    
        /**
         * Encodes the specified Update message, length delimited. Does not implicitly {@link Update.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Update
         * @static
         * @param {IUpdate} message Update message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Update.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };
    
        /**
         * Decodes an Update message from the specified reader or buffer.
         * @function decode
         * @memberof Update
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Update} Update
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Update.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Update();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.sensorFrames && message.sensorFrames.length))
                            message.sensorFrames = [];
                        message.sensorFrames.push($root.SensorFrame.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (!(message.gestures && message.gestures.length))
                            message.gestures = [];
                        message.gestures.push($root.Gesture.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.touchEvents && message.touchEvents.length))
                            message.touchEvents = [];
                        message.touchEvents.push($root.TouchEvent.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.buttonEvents && message.buttonEvents.length))
                            message.buttonEvents = [];
                        message.buttonEvents.push($root.ButtonEvent.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        if (!(message.rotaryEvents && message.rotaryEvents.length))
                            message.rotaryEvents = [];
                        message.rotaryEvents.push($root.RotaryEvent.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        if (!(message.signals && message.signals.length))
                            message.signals = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.signals.push(reader.int32());
                        } else
                            message.signals.push(reader.int32());
                        break;
                    }
                case 7: {
                        message.deltaTime = reader.int32();
                        break;
                    }
                case 8: {
                        message.unixTime = reader.int64();
                        break;
                    }
                case 9: {
                        message.info = $root.Info.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        if (!(message.probabilities && message.probabilities.length))
                            message.probabilities = [];
                        message.probabilities.push($root.ProbabilityEntry.decode(reader, reader.uint32()));
                        break;
                    }
                case 16: {
                        message.pressure = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };
    
        /**
         * Decodes an Update message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Update
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Update} Update
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Update.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };
    
        /**
         * Verifies an Update message.
         * @function verify
         * @memberof Update
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Update.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sensorFrames != null && message.hasOwnProperty("sensorFrames")) {
                if (!Array.isArray(message.sensorFrames))
                    return "sensorFrames: array expected";
                for (var i = 0; i < message.sensorFrames.length; ++i) {
                    var error = $root.SensorFrame.verify(message.sensorFrames[i]);
                    if (error)
                        return "sensorFrames." + error;
                }
            }
            if (message.gestures != null && message.hasOwnProperty("gestures")) {
                if (!Array.isArray(message.gestures))
                    return "gestures: array expected";
                for (var i = 0; i < message.gestures.length; ++i) {
                    var error = $root.Gesture.verify(message.gestures[i]);
                    if (error)
                        return "gestures." + error;
                }
            }
            if (message.touchEvents != null && message.hasOwnProperty("touchEvents")) {
                if (!Array.isArray(message.touchEvents))
                    return "touchEvents: array expected";
                for (var i = 0; i < message.touchEvents.length; ++i) {
                    var error = $root.TouchEvent.verify(message.touchEvents[i]);
                    if (error)
                        return "touchEvents." + error;
                }
            }
            if (message.buttonEvents != null && message.hasOwnProperty("buttonEvents")) {
                if (!Array.isArray(message.buttonEvents))
                    return "buttonEvents: array expected";
                for (var i = 0; i < message.buttonEvents.length; ++i) {
                    var error = $root.ButtonEvent.verify(message.buttonEvents[i]);
                    if (error)
                        return "buttonEvents." + error;
                }
            }
            if (message.rotaryEvents != null && message.hasOwnProperty("rotaryEvents")) {
                if (!Array.isArray(message.rotaryEvents))
                    return "rotaryEvents: array expected";
                for (var i = 0; i < message.rotaryEvents.length; ++i) {
                    var error = $root.RotaryEvent.verify(message.rotaryEvents[i]);
                    if (error)
                        return "rotaryEvents." + error;
                }
            }
            if (message.signals != null && message.hasOwnProperty("signals")) {
                if (!Array.isArray(message.signals))
                    return "signals: array expected";
                for (var i = 0; i < message.signals.length; ++i)
                    switch (message.signals[i]) {
                    default:
                        return "signals: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
            }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                if (!$util.isInteger(message.deltaTime))
                    return "deltaTime: integer expected";
            if (message.unixTime != null && message.hasOwnProperty("unixTime"))
                if (!$util.isInteger(message.unixTime) && !(message.unixTime && $util.isInteger(message.unixTime.low) && $util.isInteger(message.unixTime.high)))
                    return "unixTime: integer|Long expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.Info.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.probabilities != null && message.hasOwnProperty("probabilities")) {
                if (!Array.isArray(message.probabilities))
                    return "probabilities: array expected";
                for (var i = 0; i < message.probabilities.length; ++i) {
                    var error = $root.ProbabilityEntry.verify(message.probabilities[i]);
                    if (error)
                        return "probabilities." + error;
                }
            }
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                if (typeof message.pressure !== "number")
                    return "pressure: number expected";
            return null;
        };
    
        /**
         * Creates an Update message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Update
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Update} Update
         */
        Update.fromObject = function fromObject(object) {
            if (object instanceof $root.Update)
                return object;
            var message = new $root.Update();
            if (object.sensorFrames) {
                if (!Array.isArray(object.sensorFrames))
                    throw TypeError(".Update.sensorFrames: array expected");
                message.sensorFrames = [];
                for (var i = 0; i < object.sensorFrames.length; ++i) {
                    if (typeof object.sensorFrames[i] !== "object")
                        throw TypeError(".Update.sensorFrames: object expected");
                    message.sensorFrames[i] = $root.SensorFrame.fromObject(object.sensorFrames[i]);
                }
            }
            if (object.gestures) {
                if (!Array.isArray(object.gestures))
                    throw TypeError(".Update.gestures: array expected");
                message.gestures = [];
                for (var i = 0; i < object.gestures.length; ++i) {
                    if (typeof object.gestures[i] !== "object")
                        throw TypeError(".Update.gestures: object expected");
                    message.gestures[i] = $root.Gesture.fromObject(object.gestures[i]);
                }
            }
            if (object.touchEvents) {
                if (!Array.isArray(object.touchEvents))
                    throw TypeError(".Update.touchEvents: array expected");
                message.touchEvents = [];
                for (var i = 0; i < object.touchEvents.length; ++i) {
                    if (typeof object.touchEvents[i] !== "object")
                        throw TypeError(".Update.touchEvents: object expected");
                    message.touchEvents[i] = $root.TouchEvent.fromObject(object.touchEvents[i]);
                }
            }
            if (object.buttonEvents) {
                if (!Array.isArray(object.buttonEvents))
                    throw TypeError(".Update.buttonEvents: array expected");
                message.buttonEvents = [];
                for (var i = 0; i < object.buttonEvents.length; ++i) {
                    if (typeof object.buttonEvents[i] !== "object")
                        throw TypeError(".Update.buttonEvents: object expected");
                    message.buttonEvents[i] = $root.ButtonEvent.fromObject(object.buttonEvents[i]);
                }
            }
            if (object.rotaryEvents) {
                if (!Array.isArray(object.rotaryEvents))
                    throw TypeError(".Update.rotaryEvents: array expected");
                message.rotaryEvents = [];
                for (var i = 0; i < object.rotaryEvents.length; ++i) {
                    if (typeof object.rotaryEvents[i] !== "object")
                        throw TypeError(".Update.rotaryEvents: object expected");
                    message.rotaryEvents[i] = $root.RotaryEvent.fromObject(object.rotaryEvents[i]);
                }
            }
            if (object.signals) {
                if (!Array.isArray(object.signals))
                    throw TypeError(".Update.signals: array expected");
                message.signals = [];
                for (var i = 0; i < object.signals.length; ++i)
                    switch (object.signals[i]) {
                    default:
                        if (typeof object.signals[i] === "number") {
                            message.signals[i] = object.signals[i];
                            break;
                        }
                    case "NONE":
                    case 0:
                        message.signals[i] = 0;
                        break;
                    case "DISCONNECT":
                    case 1:
                        message.signals[i] = 1;
                        break;
                    case "CONNECT_APPROVED":
                    case 2:
                        message.signals[i] = 2;
                        break;
                    case "DESCRIPTION_UPDATE":
                    case 3:
                        message.signals[i] = 3;
                        break;
                    }
            }
            if (object.deltaTime != null)
                message.deltaTime = object.deltaTime | 0;
            if (object.unixTime != null)
                if ($util.Long)
                    (message.unixTime = $util.Long.fromValue(object.unixTime)).unsigned = false;
                else if (typeof object.unixTime === "string")
                    message.unixTime = parseInt(object.unixTime, 10);
                else if (typeof object.unixTime === "number")
                    message.unixTime = object.unixTime;
                else if (typeof object.unixTime === "object")
                    message.unixTime = new $util.LongBits(object.unixTime.low >>> 0, object.unixTime.high >>> 0).toNumber();
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".Update.info: object expected");
                message.info = $root.Info.fromObject(object.info);
            }
            if (object.probabilities) {
                if (!Array.isArray(object.probabilities))
                    throw TypeError(".Update.probabilities: array expected");
                message.probabilities = [];
                for (var i = 0; i < object.probabilities.length; ++i) {
                    if (typeof object.probabilities[i] !== "object")
                        throw TypeError(".Update.probabilities: object expected");
                    message.probabilities[i] = $root.ProbabilityEntry.fromObject(object.probabilities[i]);
                }
            }
            if (object.pressure != null)
                message.pressure = Number(object.pressure);
            return message;
        };
    
        /**
         * Creates a plain object from an Update message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Update
         * @static
         * @param {Update} message Update
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Update.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.sensorFrames = [];
                object.gestures = [];
                object.touchEvents = [];
                object.buttonEvents = [];
                object.rotaryEvents = [];
                object.signals = [];
                object.probabilities = [];
            }
            if (options.defaults) {
                object.deltaTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.unixTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unixTime = options.longs === String ? "0" : 0;
                object.info = null;
                object.pressure = 0;
            }
            if (message.sensorFrames && message.sensorFrames.length) {
                object.sensorFrames = [];
                for (var j = 0; j < message.sensorFrames.length; ++j)
                    object.sensorFrames[j] = $root.SensorFrame.toObject(message.sensorFrames[j], options);
            }
            if (message.gestures && message.gestures.length) {
                object.gestures = [];
                for (var j = 0; j < message.gestures.length; ++j)
                    object.gestures[j] = $root.Gesture.toObject(message.gestures[j], options);
            }
            if (message.touchEvents && message.touchEvents.length) {
                object.touchEvents = [];
                for (var j = 0; j < message.touchEvents.length; ++j)
                    object.touchEvents[j] = $root.TouchEvent.toObject(message.touchEvents[j], options);
            }
            if (message.buttonEvents && message.buttonEvents.length) {
                object.buttonEvents = [];
                for (var j = 0; j < message.buttonEvents.length; ++j)
                    object.buttonEvents[j] = $root.ButtonEvent.toObject(message.buttonEvents[j], options);
            }
            if (message.rotaryEvents && message.rotaryEvents.length) {
                object.rotaryEvents = [];
                for (var j = 0; j < message.rotaryEvents.length; ++j)
                    object.rotaryEvents[j] = $root.RotaryEvent.toObject(message.rotaryEvents[j], options);
            }
            if (message.signals && message.signals.length) {
                object.signals = [];
                for (var j = 0; j < message.signals.length; ++j)
                    object.signals[j] = options.enums === String ? $root.Update.Signal[message.signals[j]] === undefined ? message.signals[j] : $root.Update.Signal[message.signals[j]] : message.signals[j];
            }
            if (message.deltaTime != null && message.hasOwnProperty("deltaTime"))
                object.deltaTime = message.deltaTime;
            if (message.unixTime != null && message.hasOwnProperty("unixTime"))
                if (typeof message.unixTime === "number")
                    object.unixTime = options.longs === String ? String(message.unixTime) : message.unixTime;
                else
                    object.unixTime = options.longs === String ? $util.Long.prototype.toString.call(message.unixTime) : options.longs === Number ? new $util.LongBits(message.unixTime.low >>> 0, message.unixTime.high >>> 0).toNumber() : message.unixTime;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.Info.toObject(message.info, options);
            if (message.probabilities && message.probabilities.length) {
                object.probabilities = [];
                for (var j = 0; j < message.probabilities.length; ++j)
                    object.probabilities[j] = $root.ProbabilityEntry.toObject(message.probabilities[j], options);
            }
            if (message.pressure != null && message.hasOwnProperty("pressure"))
                object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
            return object;
        };
    
        /**
         * Converts this Update to JSON.
         * @function toJSON
         * @memberof Update
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Update.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
    
        /**
         * Gets the default type url for Update
         * @function getTypeUrl
         * @memberof Update
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Update.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Update";
        };
    
        /**
         * Signal enum.
         * @name Update.Signal
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} DISCONNECT=1 DISCONNECT value
         * @property {number} CONNECT_APPROVED=2 CONNECT_APPROVED value
         * @property {number} DESCRIPTION_UPDATE=3 DESCRIPTION_UPDATE value
         */
        Update.Signal = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "DISCONNECT"] = 1;
            values[valuesById[2] = "CONNECT_APPROVED"] = 2;
            values[valuesById[3] = "DESCRIPTION_UPDATE"] = 3;
            return values;
        })();
    
        return Update;
    })();

    return $root;
});
