const path = require('path');
const webpack = require('webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const appDirectory = path.resolve(__dirname);
const { presets, plugins } = require(`${appDirectory}/babel.config.js`);

const rnweb = [
	'react-native-web',
    '@babel/plugin-transform-export-namespace-from',
    ['module-resolver', {
      alias: {
        '^react-native$': 'react-native-web',
      },
    }],
];

const compileNodeModules = [
	// React-Native package that needs Babel compiling
	'react-native-vector-icons',
].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

// Webpack compile JavaScript packages.
const babelLoaderConfiguration = {
	test: /\.(js|jsx|ts|tsx)$/,
	include: [
		path.resolve(appDirectory, 'index.js'),
		path.resolve(appDirectory, 'src'),
		...compileNodeModules,
	],
	use: {
		loader: 'babel-loader',
		options: {
			presets,
			plugins: [...rnweb, ...plugins],
			cacheDirectory: true,
		},
	},
};

// Disable strict ESM on mjs and js file
const disableStrictESM = {
	test: /\.m?js/,
	resolve: {
		fullySpecified: false,
	},
};

module.exports = function override(config, env) {
	//do stuff with the webpack config...

	// Use source map to verify bundle
	if (env === 'production') {
		// Disable source maps in production
		config.devtool = false;
	}

	// Allow imports outside of src/ 
	config.resolve.plugins = config.resolve.plugins.filter(
		(plugin) => !(plugin instanceof ModuleScopePlugin)
	);

	// Ensure tree-shaking works
	config.optimization = {
		...config.optimization,
		usedExports: true,
		sideEffects: false,
	};
	
	// Resolve React Native libraries
	config.resolve.alias = {
		...config.resolve.alias,
		'react-native$': 'react-native-web',
	};
	
	config.module.rules = [
		...config.module.rules,
		babelLoaderConfiguration,
		disableStrictESM,
	];

	config.plugins = [
		...config.plugins,
		new webpack.DefinePlugin({
			__DEV__: process.env.NODE_ENV !== 'production',
		}),
	];

	return config;
};
