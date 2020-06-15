export default class Error {
    constructor(error) {
        this.error = error;
    }

    getErrorMessage() {
        const message = `
            <div class="error-container">
                <p>There was a problem. 🧐</p>
                <p class="error-container__message">${this.error}</p>
            </div>
        `;
        this.errorMessage = message;
    }
}