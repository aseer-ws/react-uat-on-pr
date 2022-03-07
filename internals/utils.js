function isUAT() {
  return process.env.ENVIRONMENT_NAME === 'development' && process.env.NODE_ENV === 'production';
}

function getBasePublicPath() {
  return isUAT() ? process.env.BRANCH_NAME || './' : '/';
}

module.exports = { getBasePublicPath, isUAT };
