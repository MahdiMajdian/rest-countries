// eslint-disable-next-line @typescript-eslint/no-unused-vars
function assertUnreachable(__: never): never {
  throw new Error(`Didn't expect to get here`);
}

export default assertUnreachable;
