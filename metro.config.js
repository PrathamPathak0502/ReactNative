const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
<<<<<<< HEAD
 * @type {import('metro-config').MetroConfig}
=======
 * @type {import('@react-native/metro-config').MetroConfig}
>>>>>>> 9f79f39 (Initial commit)
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
