import {twirp} from '../generated/haberdasher'
import {makeRpcClient} from './rpc'

const {Haberdasher, Size} = twirp.example.haberdasher

const rpc = makeRpcClient('http://localhost:8080', 'twirp.example.haberdasher.Haberdasher', 'MakeHat')
const haberdasher = Haberdasher.create(rpc)

const sizeOne = Size.create({inches: 1})

haberdasher.makeHat(sizeOne)
  .then((hat) => console.log('What a beautiful hat:', hat))
  .catch((error) => console.error('Oops', error.message))
