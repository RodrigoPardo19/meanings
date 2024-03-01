import * as process from 'process';

export default () => {
	return {
		environment: {
			NODE_ENV: process.env.NODE_ENVIRONMENT,
			PORT: process.env.PORT,
		},
	};
};
