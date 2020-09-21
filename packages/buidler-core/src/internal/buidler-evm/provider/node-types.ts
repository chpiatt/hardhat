import { BN } from "ethereumjs-util";

import { ForkConfig } from "../../../types";
import { CompilerInput, CompilerOutput } from "../stack-traces/compiler-types";

import { Block } from "./types/Block";

export type NodeConfig = LocalNodeConfig | ForkedNodeConfig;

interface CommonConfig {
  blockGasLimit: number;
  genesisAccounts: GenesisAccount[];
  allowUnlimitedContractSize?: boolean;
  tracingConfig?: TracingConfig;
}

export interface LocalNodeConfig extends CommonConfig {
  type: "local";
  hardfork: string;
  networkName: string;
  chainId: number;
  networkId: number;
  initialDate?: Date;
}

export interface ForkedNodeConfig extends CommonConfig {
  type: "forked";
  forkConfig: ForkConfig;
}

export interface TracingConfig {
  solcVersion: string;
  compilerInput: CompilerInput;
  compilerOutput: CompilerOutput;
}

export interface GenesisAccount {
  privateKey: string;
  balance: string | number | BN;
}

export interface CallParams {
  to: Buffer;
  from: Buffer;
  gasLimit: BN;
  gasPrice: BN;
  value: BN;
  data: Buffer;
}

export interface TransactionParams {
  to: Buffer;
  from: Buffer;
  gasLimit: BN;
  gasPrice: BN;
  value: BN;
  data: Buffer;
  nonce: BN;
}

export interface FilterParams {
  fromBlock: BN;
  toBlock: BN;
  addresses: Buffer[];
  normalizedTopics: Array<Array<Buffer | null> | null>;
}

export interface Snapshot {
  id: number;
  date: Date;
  latestBlock: Block;
  stateRoot: Buffer;
  blockTimeOffsetSeconds: BN;
  nextBlockTimestamp: BN;
}
