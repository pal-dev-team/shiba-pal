import { getAddress } from '@ethersproject/address';

// returns the checksummed address if the address is valid, otherwise returns false
// eslint-disable-next-line
export function isAddress(value: any): string | false {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address);
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`;
}