import {RPCImpl} from 'protobufjs'
import * as rp from 'request-promise'

const capitalize = (str: string) => str.charAt(0).toUpperCase()  + str.substring(1) 

/**
 * protobufjs doesn't provide any metadata (service/method name)
 * to custom RPCImpls so we can't automatically figure out the
 * service name here, and we use a hack to get the method name.
 */
export const makeRpcClient = (url: string, serviceName: string): RPCImpl => {
  const endpointPrefix = `${url}/twirp/${serviceName}/`

  return (method, requestData, callback) => {
    const endpoint = endpointPrefix + capitalize(method.name)

    console.log('RPC client sending request to', endpoint)
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
