var exec = require('cordova/exec')

exports.getLoginStatus = function getLoginStatus (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getLoginStatus', [])
}

exports.showDialog = function showDialog (options, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'showDialog', [options])
}

exports.login = function login (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'login', permissions)
}

exports.checkHasCorrectPermissions = function checkHasCorrectPermissions (permissions, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'checkHasCorrectPermissions', permissions)
}

exports.logEvent = function logEvent (name, params, valueToSum, s, f) {
  // Prevent NSNulls getting into iOS, messes up our [command.argument count]
  if (!params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name])
  } else if (params && !valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params])
  } else if (params && valueToSum) {
    exec(s, f, 'FacebookConnectPlugin', 'logEvent', [name, params, valueToSum])
  } else {
    f('Invalid arguments')
  }
}

exports.logViewContent = function logViewContent (contentType, contentData, contentId, contentCurrency, contentPrice, s, f)
{
  exec(s, f, 'FacebookConnectPlugin', 'logViewContent', [contentType, contentData, contentId, contentCurrency, contentPrice])
}

exports.logEventSearch = function logEventSearch (contentType, contentData, contentId, searchQuery, searchSuccess, s, f)
{
  exec(s, f, 'FacebookConnectPlugin', 'logEventSearch', [contentType, contentData, contentId, searchQuery, searchSuccess])
}

exports.logEventProductCartAdd = function logEventProductCartAdd (contentType, contentData, contentId, contentCurrency, contentPrice, s, f)
{
  exec(s, f, 'FacebookConnectPlugin', 'logEventProductCartAdd', [contentType, contentData, contentId, contentCurrency, contentPrice])
}

exports.logEventProductCustomize = function logEventProductCustomize (contentParam, contentValue, s, f)
{
  exec(s, f, 'FacebookConnectPlugin', 'logEventProductCustomize', [contentParam, contentValue])
}

exports.logEventProductPurchase = function logEventProductPurchase (contentType, contentData, contentId, contentCurrency, contentPrice, s, f)
{
  exec(s, f, 'FacebookConnectPlugin', 'logEventProductPurchase', [contentType, contentData, contentId, contentCurrency, contentPrice])
}

exports.logPurchase = function logPurchase (value, currency, s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logPurchase', [value, currency])
}

exports.getAccessToken = function getAccessToken (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getAccessToken', [])
}

exports.logout = function logout (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'logout', [])
}

exports.api = function api (graphPath, permissions, s, f) {
  permissions = permissions || []
  exec(s, f, 'FacebookConnectPlugin', 'graphApi', [graphPath, permissions])
}

exports.getDeferredApplink = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}

exports.activateApp = function (s, f) {
  exec(s, f, 'FacebookConnectPlugin', 'activateApp', [])
}

exports.getDeferredApplink = function (s, f) {
	  exec(s, f, 'FacebookConnectPlugin', 'getDeferredApplink', [])
}
