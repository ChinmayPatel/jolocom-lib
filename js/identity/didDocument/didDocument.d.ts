/// <reference types="node" />
import { IDidDocumentAttrs } from './types';
import { AuthenticationSection, PublicKeySection, ServiceEndpointsSection } from './sections';
import { ISigner } from '../../registries/types';
import { JsonLdContext } from '../../linkedData/types';
import { ILinkedDataSignature, IDigestable } from '../../linkedDataSignature/types';
export declare class DidDocument implements IDigestable {
    private _id;
    private _authentication;
    private _publicKey;
    private _service;
    private _created;
    private _proof;
    private '_@context';
    context: JsonLdContext;
    did: string;
    authentication: AuthenticationSection[];
    publicKey: PublicKeySection[];
    service: ServiceEndpointsSection[];
    created: Date;
    readonly signer: ISigner;
    signature: string;
    proof: ILinkedDataSignature;
    addAuthSection(section: AuthenticationSection): void;
    addPublicKeySection(section: PublicKeySection): void;
    addServiceEndpoint(endpoint: ServiceEndpointsSection): void;
    resetServiceEndpoints(): void;
    static fromPublicKey(publicKey: Buffer): DidDocument;
    private prepareSignature;
    digest(): Promise<Buffer>;
    toJSON(): IDidDocumentAttrs;
    static fromJSON(json: IDidDocumentAttrs): DidDocument;
    encode(): string;
    static decode(jwt: string): DidDocument;
}
