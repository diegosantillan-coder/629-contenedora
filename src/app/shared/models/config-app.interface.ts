import { DynatraceActions } from '@shared/enums/dynatrace.enum';

export interface ConfigApp {
	develop: ConfigEnv;
	staging: ConfigEnv;
	production: ConfigEnv;
	test: ConfigEnv;
}

export interface ConfigEnv {
	environment: string;
	appName: string;
	appUrl: string;
	spName: string;
	trackingIdAnalytics: string;
	trackingIdGtmAnalytics: string;
	supportMail: string;
	services: Services;
	sites: Record<string, string>[];
	webcomponents: Record<string, string>[];
	scripts: Record<string, string>;
}

export interface Services {
	apiUrl: string;
	resourcesUrl: string;
}

export interface DynatraceConfig {
	ruta?: string;
	mensajeDynatrace: DynatraceActions;
}
