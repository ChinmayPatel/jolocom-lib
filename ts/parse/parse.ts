import { JSONWebTokenParser } from '../interactionTokens/JSONWebTokenParser'
import { Credential } from '../credentials/credential/credential'
import { SignedCredential } from '../credentials/signedCredential/signedCredential'
import { ICredentialAttrs } from '../credentials/credential/types'
import { ISignedCredentialAttrs } from '../credentials/signedCredential/types'
import { JSONWebToken } from '../interactionTokens/JSONWebToken'
import {
  IJSONWebTokenAttrs,
  IInteractionToken,
} from '../interactionTokens/types'

/**
 * Aggregates parsing methods for easier access
 * The types are declared explicitly to ensure the d.ts file is
 * generated correctly.
 */

export interface ParseMethods {
  interactionToken: {
    fromJWT: <T extends IInteractionToken>(jwt: string) => JSONWebToken<T>
    fromJSON: <T extends IInteractionToken>(
      json: IJSONWebTokenAttrs,
    ) => JSONWebToken<T>
  }
  credential: (json: ICredentialAttrs) => Credential
  signedCredential: (json: ISignedCredentialAttrs) => SignedCredential
}

export const parse: ParseMethods = {
  interactionToken: JSONWebTokenParser,
  credential: Credential.fromJSON,
  signedCredential: SignedCredential.fromJSON,
}
