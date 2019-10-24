/// <reference types="node" />
import { IDigestable } from '../linkedDataSignature/types';
import { IVaultedKeyProvider, IKeyDerivationArgs } from './types';
export interface BackupFile {
    keys: EncryptedKey[];
    data: string;
}
export interface EncryptedKey {
    pubKey: string;
    cipher: string;
}
export declare class SoftwareKeyProvider implements IVaultedKeyProvider {
    private readonly _encryptedSeed;
    private readonly _iv;
    constructor(encryptedSeed: Buffer);
    readonly encryptedSeed: string;
    static fromSeed(seed: Buffer, encryptionPass: string): SoftwareKeyProvider;
    static recoverKeyPair(mnemonic: string, encryptionPass: string): SoftwareKeyProvider;
    getPublicKey(derivationArgs: IKeyDerivationArgs): Buffer;
    static getRandom(nr: number): Buffer;
    sign(derivationArgs: IKeyDerivationArgs, digest: Buffer): Buffer;
    static verify(digest: Buffer, publicKey: Buffer, signature: Buffer): boolean;
    getPrivateKey(derivationArgs: IKeyDerivationArgs): Buffer;
    getMnemonic(encryptionPass: string, did?: string): string;
    signDigestable(derivationArgs: IKeyDerivationArgs, toSign: IDigestable): Promise<Buffer>;
    static verifyDigestable(publicKey: Buffer, toVerify: IDigestable): Promise<boolean>;
    private static encrypt;
    private static decrypt;
    encryptHybrid(data: object, derivationArgs: IKeyDerivationArgs): Promise<string>;
    private stringifyEncryptedData;
    private static normalizePassword;
}
