// success: 0 成功
exports.error = {status: -1, message: '未知错误'};
// errorInternal: -2 内部错误
exports.errorAuthentication = {status: -4, message: '用户认证失败'};
exports.errorAuthorization = {status: -6, message: '用户授权失败'};
exports.errorInvalidOperation = {status: -7, message: '非法操作'};

exports.success = function(data){
    return {status: 0, message: '成功', data: data};
};

exports.errorInternal = function(ex) {
    return {status: -2, message: '内部错误'};
};

exports.exception = function (status) {
    Error.call(this);
    Error.captureStackTrace(this, this.constructor);
    this.name = "ErrorWithStatus";
    this.message = status.message;
    this.status = status;
};

require('util').inherits(this.exception, Error);
