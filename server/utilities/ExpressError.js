class ExpressError extends Error {
  constructor(message) {
    super();
    this.message = message;
  }
}

export default ExpressError;
