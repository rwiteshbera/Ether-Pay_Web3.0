export const ShortenAddress = (address) => {
  // return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  return `${address}`.slice(0,5) + "..." + `${address}`.slice(`${address}`.length-4);
}
