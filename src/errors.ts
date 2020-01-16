

type GlobalErrorType = 'AuthExpiredError' | 'ResourceNotFound';
abstract class GlobalError extends Error {
  public abstract get type(): GlobalErrorType; 
}

export class AuthExpiredError extends GlobalError {
  get type() {
    return 'AuthExpiredError' as 'AuthExpiredError';
  }
}

export const createAuthExpiredError = (msg: string) => {
  return new AuthExpiredError(msg)
}

export class ResourceNotFound extends GlobalError {
  get type() {
    return 'ResourceNotFound' as 'ResourceNotFound';
  }
}