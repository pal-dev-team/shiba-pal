import { Contract } from '@ethersproject/contracts';
import { AddressZero } from '@ethersproject/constants';
import { useWeb3React } from '@web3-react/core';
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { Signer } from '@ethersproject/abstract-signer';
import { Provider } from '@ethersproject/abstract-provider';
import { get } from 'lodash';
import { formatUnits } from '@ethersproject/units';


import ADDRESS from '../constants/address';
import ABI from '../constants/abi';
import { isAddress } from '../lib/check-address';

export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked();
}

export function getProviderOrSigner(
  library: Web3Provider,
  account?: string,
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export function getContract(
  address: string,
  // eslint-disable-next-line
  ABI: any,
  library: Web3Provider,
  account?: string,
): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return new Contract(address, ABI, getProviderOrSigner(library, account) as Signer | Provider);
}

export function useContract(contractName: string): Contract {
  const { account, library, chainId } = useWeb3React<Web3Provider>();
  return getContract(
    get(ADDRESS[chainId || 4], contractName),
    get(ABI, contractName.split('.')[0]),
    library as Web3Provider,
    account as string,
  );
}

export function useContractAddress(contractAddress: string): Contract {
  const { account, library } = useWeb3React<Web3Provider>();

  return getContract(
    contractAddress.split('.')[1],
    get(ABI, contractAddress.split('.')[0]),
    library as Web3Provider,
    account as string,
  );
}

export async function getBalanceOf(contractName: string, account?: string | null): Promise<number> {
  const contract = useContract(contractName);
  return parseFloat(formatUnits(await contract.balanceOf(account), 18));
}
