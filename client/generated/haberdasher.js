/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.twirp = (function() {

    /**
     * Namespace twirp.
     * @exports twirp
     * @namespace
     */
    var twirp = {};

    twirp.example = (function() {

        /**
         * Namespace example.
         * @memberof twirp
         * @namespace
         */
        var example = {};

        example.haberdasher = (function() {

            /**
             * Namespace haberdasher.
             * @memberof twirp.example
             * @namespace
             */
            var haberdasher = {};

            haberdasher.Haberdasher = (function() {

                /**
                 * Constructs a new Haberdasher service.
                 * @memberof twirp.example.haberdasher
                 * @classdesc Represents a Haberdasher
                 * @extends $protobuf.rpc.Service
                 * @constructor
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 */
                function Haberdasher(rpcImpl, requestDelimited, responseDelimited) {
                    $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                }

                (Haberdasher.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Haberdasher;

                /**
                 * Creates new Haberdasher service using the specified rpc implementation.
                 * @function create
                 * @memberof twirp.example.haberdasher.Haberdasher
                 * @static
                 * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                 * @returns {Haberdasher} RPC service. Useful where requests and/or responses are streamed.
                 */
                Haberdasher.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                    return new this(rpcImpl, requestDelimited, responseDelimited);
                };

                /**
                 * Callback as used by {@link twirp.example.haberdasher.Haberdasher#makeHat}.
                 * @memberof twirp.example.haberdasher.Haberdasher
                 * @typedef MakeHatCallback
                 * @type {function}
                 * @param {Error|null} error Error, if any
                 * @param {twirp.example.haberdasher.Hat} [response] Hat
                 */

                /**
                 * Calls MakeHat.
                 * @function makeHat
                 * @memberof twirp.example.haberdasher.Haberdasher
                 * @instance
                 * @param {twirp.example.haberdasher.ISize} request Size message or plain object
                 * @param {twirp.example.haberdasher.Haberdasher.MakeHatCallback} callback Node-style callback called with the error, if any, and Hat
                 * @returns {undefined}
                 * @variation 1
                 */
                Haberdasher.prototype.makeHat = function makeHat(request, callback) {
                    return this.rpcCall(makeHat, $root.twirp.example.haberdasher.Size, $root.twirp.example.haberdasher.Hat, request, callback);
                };

                /**
                 * Calls MakeHat.
                 * @function makeHat
                 * @memberof twirp.example.haberdasher.Haberdasher
                 * @instance
                 * @param {twirp.example.haberdasher.ISize} request Size message or plain object
                 * @returns {Promise<twirp.example.haberdasher.Hat>} Promise
                 * @variation 2
                 */

                return Haberdasher;
            })();

            haberdasher.Size = (function() {

                /**
                 * Properties of a Size.
                 * @memberof twirp.example.haberdasher
                 * @interface ISize
                 * @property {number|null} [inches] Size inches
                 */

                /**
                 * Constructs a new Size.
                 * @memberof twirp.example.haberdasher
                 * @classdesc Represents a Size.
                 * @implements ISize
                 * @constructor
                 * @param {twirp.example.haberdasher.ISize=} [properties] Properties to set
                 */
                function Size(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Size inches.
                 * @member {number} inches
                 * @memberof twirp.example.haberdasher.Size
                 * @instance
                 */
                Size.prototype.inches = 0;

                /**
                 * Creates a new Size instance using the specified properties.
                 * @function create
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {twirp.example.haberdasher.ISize=} [properties] Properties to set
                 * @returns {twirp.example.haberdasher.Size} Size instance
                 */
                Size.create = function create(properties) {
                    return new Size(properties);
                };

                /**
                 * Encodes the specified Size message. Does not implicitly {@link twirp.example.haberdasher.Size.verify|verify} messages.
                 * @function encode
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {twirp.example.haberdasher.ISize} message Size message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Size.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inches);
                    return writer;
                };

                /**
                 * Encodes the specified Size message, length delimited. Does not implicitly {@link twirp.example.haberdasher.Size.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {twirp.example.haberdasher.ISize} message Size message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Size.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Size message from the specified reader or buffer.
                 * @function decode
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {twirp.example.haberdasher.Size} Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Size.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.twirp.example.haberdasher.Size();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.inches = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Size message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {twirp.example.haberdasher.Size} Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Size.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Size message.
                 * @function verify
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Size.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        if (!$util.isInteger(message.inches))
                            return "inches: integer expected";
                    return null;
                };

                /**
                 * Creates a Size message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {twirp.example.haberdasher.Size} Size
                 */
                Size.fromObject = function fromObject(object) {
                    if (object instanceof $root.twirp.example.haberdasher.Size)
                        return object;
                    var message = new $root.twirp.example.haberdasher.Size();
                    if (object.inches != null)
                        message.inches = object.inches | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Size message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof twirp.example.haberdasher.Size
                 * @static
                 * @param {twirp.example.haberdasher.Size} message Size
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Size.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.inches = 0;
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        object.inches = message.inches;
                    return object;
                };

                /**
                 * Converts this Size to JSON.
                 * @function toJSON
                 * @memberof twirp.example.haberdasher.Size
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Size.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Size;
            })();

            haberdasher.Hat = (function() {

                /**
                 * Properties of a Hat.
                 * @memberof twirp.example.haberdasher
                 * @interface IHat
                 * @property {number|null} [inches] Hat inches
                 * @property {string|null} [color] Hat color
                 * @property {string|null} [name] Hat name
                 */

                /**
                 * Constructs a new Hat.
                 * @memberof twirp.example.haberdasher
                 * @classdesc Represents a Hat.
                 * @implements IHat
                 * @constructor
                 * @param {twirp.example.haberdasher.IHat=} [properties] Properties to set
                 */
                function Hat(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Hat inches.
                 * @member {number} inches
                 * @memberof twirp.example.haberdasher.Hat
                 * @instance
                 */
                Hat.prototype.inches = 0;

                /**
                 * Hat color.
                 * @member {string} color
                 * @memberof twirp.example.haberdasher.Hat
                 * @instance
                 */
                Hat.prototype.color = "";

                /**
                 * Hat name.
                 * @member {string} name
                 * @memberof twirp.example.haberdasher.Hat
                 * @instance
                 */
                Hat.prototype.name = "";

                /**
                 * Creates a new Hat instance using the specified properties.
                 * @function create
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {twirp.example.haberdasher.IHat=} [properties] Properties to set
                 * @returns {twirp.example.haberdasher.Hat} Hat instance
                 */
                Hat.create = function create(properties) {
                    return new Hat(properties);
                };

                /**
                 * Encodes the specified Hat message. Does not implicitly {@link twirp.example.haberdasher.Hat.verify|verify} messages.
                 * @function encode
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {twirp.example.haberdasher.IHat} message Hat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Hat.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.inches);
                    if (message.color != null && message.hasOwnProperty("color"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.color);
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
                    return writer;
                };

                /**
                 * Encodes the specified Hat message, length delimited. Does not implicitly {@link twirp.example.haberdasher.Hat.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {twirp.example.haberdasher.IHat} message Hat message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Hat.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Hat message from the specified reader or buffer.
                 * @function decode
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {twirp.example.haberdasher.Hat} Hat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Hat.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.twirp.example.haberdasher.Hat();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.inches = reader.int32();
                            break;
                        case 2:
                            message.color = reader.string();
                            break;
                        case 3:
                            message.name = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Hat message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {twirp.example.haberdasher.Hat} Hat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Hat.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Hat message.
                 * @function verify
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Hat.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        if (!$util.isInteger(message.inches))
                            return "inches: integer expected";
                    if (message.color != null && message.hasOwnProperty("color"))
                        if (!$util.isString(message.color))
                            return "color: string expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    return null;
                };

                /**
                 * Creates a Hat message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {twirp.example.haberdasher.Hat} Hat
                 */
                Hat.fromObject = function fromObject(object) {
                    if (object instanceof $root.twirp.example.haberdasher.Hat)
                        return object;
                    var message = new $root.twirp.example.haberdasher.Hat();
                    if (object.inches != null)
                        message.inches = object.inches | 0;
                    if (object.color != null)
                        message.color = String(object.color);
                    if (object.name != null)
                        message.name = String(object.name);
                    return message;
                };

                /**
                 * Creates a plain object from a Hat message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof twirp.example.haberdasher.Hat
                 * @static
                 * @param {twirp.example.haberdasher.Hat} message Hat
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Hat.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.inches = 0;
                        object.color = "";
                        object.name = "";
                    }
                    if (message.inches != null && message.hasOwnProperty("inches"))
                        object.inches = message.inches;
                    if (message.color != null && message.hasOwnProperty("color"))
                        object.color = message.color;
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    return object;
                };

                /**
                 * Converts this Hat to JSON.
                 * @function toJSON
                 * @memberof twirp.example.haberdasher.Hat
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Hat.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Hat;
            })();

            return haberdasher;
        })();

        return example;
    })();

    return twirp;
})();

module.exports = $root;
