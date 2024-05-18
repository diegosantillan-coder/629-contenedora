import { CONFIG_APP } from '@shared/config/config';
import { ConfigEnv } from '@shared/models/config-app.interface';

function buildEnvironment(): ConfigEnv {
	const url = window.location.origin;

	if (url.includes(CONFIG_APP.production.appUrl)) {
		return CONFIG_APP.production;
	} else if (url.includes(CONFIG_APP.staging.appUrl)) {
		return CONFIG_APP.staging;
	} else if (url.includes(CONFIG_APP.develop.appUrl)) {
		return CONFIG_APP.develop;
	} else {
		return CONFIG_APP.test;
	}
}

export const CONFIG_ENVIRONMENT = buildEnvironment();
