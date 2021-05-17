// auth\src\errors\not-found-error.ts

import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;

  reason = 'This route does not exist';

  constructor() {
    super('This route does not exist');

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    {
      return [{ message: this.reason }];
    }
  }
}
