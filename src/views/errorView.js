import { elements } from './base';

export const renderErrorPage = (error) => {
    error.getErrorMessage();
    elements.container.insertAdjacentHTML('afterbegin', error.errorMessage);
};