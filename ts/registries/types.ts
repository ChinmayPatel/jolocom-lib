import { IIpfsConnector } from '../ipfs/types'
import { IEthereumConnector } from '../ethereum/types'
import { IdentityWallet } from '../identityWallet/identityWallet'
import {
  IVaultedKeyProvider,
  IKeyDerivationArgs,
} from '../vaultedKeyProvider/types'
import { Identity } from '../identity/identity'
import { IContractsAdapter, IContractsGateway } from '../contracts/types'

export interface IRegistryStaticCreationArgs {
  contracts: {
    adapter: IContractsAdapter
    gateway: IContractsGateway
  }
  ipfsConnector: IIpfsConnector
  ethereumConnector: IEthereumConnector
}

export interface IRegistryCommitArgs {
  vaultedKeyProvider: IVaultedKeyProvider
  keyMetadata: IKeyDerivationArgs
  identityWallet: IdentityWallet
}

export interface ISigner {
  did: string
  keyId: string
}

/*
 * We need a registry, and a registrar
 * registrar: 
 *  - createIdentity
 *  - updateIdentity
 *
 *  registry:
 *  - resolve
 *
 * fetchPublicProfile should not be a public method.
 */

export interface IRegistry {
  create: (
    vaultedKeyProvider: IVaultedKeyProvider,
    decryptionPassword: string,
  ) => Promise<IdentityWallet>
  commit: (commitArgs: IRegistryCommitArgs) => Promise<void>
  resolve: (did) => Promise<Identity>
  authenticate: (
    vaultedKeyProvider: IVaultedKeyProvider,
    derivationArgs: IKeyDerivationArgs,
  ) => Promise<IdentityWallet>
}
