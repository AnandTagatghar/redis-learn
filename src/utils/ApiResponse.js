class ApiResponse {
  constructor(statusCode, message = "success", data) {
    this.statusCode = statusCode;
    this.status = true;
    this.message = message;
    this.data = data;
  }
}

module.exports = {
  ApiResponse,
};
