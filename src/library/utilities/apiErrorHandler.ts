import { AxiosError } from 'axios';

import { ERROR_MESSAGES } from '@modules/countries/utilities';

function apiErrorHandler(error: AxiosError) {
  switch (error.message) {
    case 'Request failed with status code 404':
      return {
        message: ERROR_MESSAGES.NOT_FOUND,
      };

    case 'timeout exceeded':
      return {
        message: ERROR_MESSAGES.TIME_OUT,
      };

    case 'Request failed with status code 400':
      return {
        message: ERROR_MESSAGES.BAD_REQUEST,
      };
  }
}
export default apiErrorHandler;
