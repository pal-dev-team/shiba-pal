import { AddressType } from "../types/address";
import { contractName } from "./contractName";

const ADDRESS: AddressType = {
  1: {
    [contractName.BaseToken]: "0xd5525d397898e5502075ea5e830d8914f6f0affe",
    [contractName.MemeLtd]: "0xe4605d46fd0b3f8329d936a8b258d69276cba264",
    [contractName.MemeLimitedCollections]: "0x1d90d50D5dd04FA7c8BeF89aA5872F0701Be7982"
  },
  4: {
    [contractName.BaseToken]: "0x643b7dcb3d49e07e6b60c62d4594c2758ca72edd",
    [contractName.MemeLtd]: "0x9ad9329ba3ce87181ebf26f1f4d5927f3b8c80eb",
    [contractName.MemeLimitedCollections]: "0x86e9980cc068fc737ffef70fc30627d3b5fdd347"
  },
};

export default ADDRESS;