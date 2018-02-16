import * as $protobuf from "protobufjs";

/** Namespace twirp. */
export namespace twirp {

    /** Namespace example. */
    namespace example {

        /** Namespace haberdasher. */
        namespace haberdasher {

            /** Represents a Haberdasher */
            class Haberdasher extends $protobuf.rpc.Service {

                /**
                 * Constructs a new Haberdasher service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new Haberdasher service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Haberdasher;

                /**
                 * Calls MakeHat.
                 * @param request Size message or plain object
                 * @param callback Node-style callback called with the error, if any, and Hat
                 */
                public makeHat(request: twirp.example.haberdasher.ISize, callback: twirp.example.haberdasher.Haberdasher.MakeHatCallback): void;

                /**
                 * Calls MakeHat.
                 * @param request Size message or plain object
                 * @returns Promise
                 */
                public makeHat(request: twirp.example.haberdasher.ISize): Promise<twirp.example.haberdasher.Hat>;
            }

            namespace Haberdasher {

                /**
                 * Callback as used by {@link twirp.example.haberdasher.Haberdasher#makeHat}.
                 * @param error Error, if any
                 * @param [response] Hat
                 */
                type MakeHatCallback = (error: (Error|null), response?: twirp.example.haberdasher.Hat) => void;
            }

            /** Properties of a Size. */
            interface ISize {

                /** Size inches */
                inches?: (number|null);
            }

            /** Represents a Size. */
            class Size implements ISize {

                /**
                 * Constructs a new Size.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: twirp.example.haberdasher.ISize);

                /** Size inches. */
                public inches: number;

                /**
                 * Creates a new Size instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Size instance
                 */
                public static create(properties?: twirp.example.haberdasher.ISize): twirp.example.haberdasher.Size;

                /**
                 * Encodes the specified Size message. Does not implicitly {@link twirp.example.haberdasher.Size.verify|verify} messages.
                 * @param message Size message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: twirp.example.haberdasher.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Size message, length delimited. Does not implicitly {@link twirp.example.haberdasher.Size.verify|verify} messages.
                 * @param message Size message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: twirp.example.haberdasher.ISize, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Size message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): twirp.example.haberdasher.Size;

                /**
                 * Decodes a Size message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Size
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): twirp.example.haberdasher.Size;

                /**
                 * Verifies a Size message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Size message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Size
                 */
                public static fromObject(object: { [k: string]: any }): twirp.example.haberdasher.Size;

                /**
                 * Creates a plain object from a Size message. Also converts values to other types if specified.
                 * @param message Size
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: twirp.example.haberdasher.Size, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Size to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Hat. */
            interface IHat {

                /** Hat inches */
                inches?: (number|null);

                /** Hat color */
                color?: (string|null);

                /** Hat name */
                name?: (string|null);
            }

            /** Represents a Hat. */
            class Hat implements IHat {

                /**
                 * Constructs a new Hat.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: twirp.example.haberdasher.IHat);

                /** Hat inches. */
                public inches: number;

                /** Hat color. */
                public color: string;

                /** Hat name. */
                public name: string;

                /**
                 * Creates a new Hat instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Hat instance
                 */
                public static create(properties?: twirp.example.haberdasher.IHat): twirp.example.haberdasher.Hat;

                /**
                 * Encodes the specified Hat message. Does not implicitly {@link twirp.example.haberdasher.Hat.verify|verify} messages.
                 * @param message Hat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: twirp.example.haberdasher.IHat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Hat message, length delimited. Does not implicitly {@link twirp.example.haberdasher.Hat.verify|verify} messages.
                 * @param message Hat message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: twirp.example.haberdasher.IHat, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Hat message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Hat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): twirp.example.haberdasher.Hat;

                /**
                 * Decodes a Hat message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Hat
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): twirp.example.haberdasher.Hat;

                /**
                 * Verifies a Hat message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Hat message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Hat
                 */
                public static fromObject(object: { [k: string]: any }): twirp.example.haberdasher.Hat;

                /**
                 * Creates a plain object from a Hat message. Also converts values to other types if specified.
                 * @param message Hat
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: twirp.example.haberdasher.Hat, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Hat to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
