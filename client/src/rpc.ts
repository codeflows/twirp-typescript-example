import {RPCImpl} from 'protobufjs'
import * as rp from 'request-promise'

/**
 * protobufjs doesn't provide any metadata to custom RPCImpls so we
 * can't automatically call a Twirp service as we don't know the
 * service nor methods names at this level. :(
 */
export const makeRpcClient = (url: string, serviceName: string, methodName: string): RPCImpl => {
  const endpoint = `${url}/twirp/${serviceName}/${methodName}`

  return (method, requestData, callback) => {
    return rp.post(endpoint, {
      headers: {
        'Content-Type': 'application/protobuf'
      },
      encoding: null, // sends binary
      body: requestData
    })
    .then((data) => callback(null, data))
    .catch((error) => callback(error, null))
  }
}
