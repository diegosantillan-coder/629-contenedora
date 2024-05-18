import { ExternalSite } from '@shared/enums/external-site.enum';
import { WebComponents } from '@shared/enums/webcomponent.enum';
import { ConfigApp } from '@shared/models/config-app.interface';

export const CONFIG_APP: ConfigApp = {
	develop: {
		environment: 'dllo',
		appName: 'Sucursal Virtual Personas - DEV',
		appUrl: 'http://localhost.suramericana.com.co:4200',
		spName: 'AtencionVirtualSaludDev',
		trackingIdAnalytics: 'UA-193315851-1',
		trackingIdGtmAnalytics: 'GTM-T6Z8SQ7P',
		supportMail:
			'mailto:ajaramilloh@sura.com.co?Subject=Problema Asistente Virtual Web Dllo',
		services: {
			apiUrl: 'http://localhost.suramericana.com.co:9090',
			resourcesUrl: 'https://staticdigital.labsura.com.co/public-resources/',
		},
		sites: [
			{
				name: ExternalSite.AUTORIZACIONES_SALUD,
				url: 'https://appssegdllo01.suranet.com/ADR/servicioVisualCrearSolADR?claseSeguridad=suramericana.pubs.mus.RepositorioMUS&dniSolicitante={DNI_SOLICITANTE}&cdTipoSolicitud=PAUT&dniAsegurado={DNI_ASEGURADO}',
			},
			{
				name: ExternalSite.AUTORIZACIONES_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/ordenes/ingreso/',
			},
			{
				name: ExternalSite.MEDICAMENTOS_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/inicio/medicamentos',
			},
		],
		webcomponents: [
			{
				name: WebComponents.HOME,
				url: 'assets/scripts/wc-home-svp.js',
			},
			{
				name: WebComponents.PERFIL_USUARIO,
				url: 'assets/scripts/wc-actualizacion-datos.js',
			},
			{
				name: WebComponents.CITA_MEDICA,
				url: 'assets/scripts/wc-cita-medica.js',
			},
			{
				name: WebComponents.HADA,
				url: 'https://autotriajedllo.epssura.com/static/js/wc-hada.js',
			},
			{
				name: WebComponents.AYUDAS_DIAGNOSTICAS,
				url: 'assets/scripts/wc-ayudas-diagnosticas.js',
			},
			{
				name: WebComponents.RECLAMACION_SALUD,
				url: 'assets/scripts/wc-reclamaciones-salud.js',
			},
			{
				name: WebComponents.ATENCION_VIRTUAL_SALUD,
				url: 'assets/scripts/wc-avs.js',
			},
			{
				name: WebComponents.BENEFICIARIO,
				url: 'assets/scripts/wc-beneficiario.js',
			},
			{
				name: WebComponents.RECLAMACIONES,
				url: 'assets/scripts/wc-reclamaciones-vida.js',
			},
			{
				name: WebComponents.MEDIO_PAGO,
				url: 'assets/scripts/wc-medio-pago.js',
			},
			{
				name: WebComponents.BOLSILLO_SURA,
				url: 'assets/scripts/wc-bolsillo-sura.js',
			},
			{
				name: WebComponents.PAGO_EN_LINEA,
				url: 'assets/scripts/wc-pago-en-linea.js',
			},
			{
				name: WebComponents.CERTIFICADOS,
				url: 'assets/scripts/wc-certificado.js',
			},
			{
				name: WebComponents.PRE_REGISTRO,
				url: 'assets/scripts/wc-prerregistro-datos-cliente-salud.js',
			},
		],
		scripts: {
			riskDeviceLoader:
				'https://wcdigitallab.segurossura.com.co/public-resources/assets/scripts/device/risk_loader.js',
		},
	},
	staging: {
		environment: 'lab',
		appName: 'Sucursal Virtual Personas - LAB',
		appUrl: 'https://sucursallab.segurossura.com.co',
		spName: 'AtencionVirtualSaludLab',
		trackingIdAnalytics: 'UA-193323321-1',
		trackingIdGtmAnalytics: 'GTM-T6Z8SQ7P',
		supportMail:
			'mailto:ajaramilloh@sura.com.co?Subject=Problema Asistente Virtual Web Lab',
		services: {
			apiUrl: 'https://apidigitallab.segurossura.com.co/apigw-svp',
			resourcesUrl: 'https://staticdigital.labsura.com.co/public-resources/',
		},
		sites: [
			{
				name: ExternalSite.AUTORIZACIONES_SALUD,
				url: 'https://appsseglab.suranet.com/ADR/servicioVisualCrearSolADR?claseSeguridad=suramericana.pubs.mus.RepositorioMUS&dniSolicitante={DNI_SOLICITANTE}&cdTipoSolicitud=PAUT&dniAsegurado={DNI_ASEGURADO}',
			},
			{
				name: ExternalSite.AUTORIZACIONES_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/ordenes/ingreso/',
			},
			{
				name: ExternalSite.MEDICAMENTOS_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/inicio/medicamentos',
			},
		],
		webcomponents: [
			{
				name: WebComponents.HOME,
				url: 'https://staticdigital.labsura.com.co/wc-home-svp/wc-home-svp.js',
			},
			{
				name: WebComponents.PERFIL_USUARIO,
				url: 'https://staticdigital.labsura.com.co/wc-perfil-usuario/wc-actualizacion-datos.js',
			},
			{
				name: WebComponents.CITA_MEDICA,
				url: 'https://staticdigital.labsura.com.co/wc-cita-medica/wc-cita-medica.js',
			},
			{
				name: WebComponents.HADA,
				url: 'https://autotriajelab.epssura.com/static/js/wc-hada.js',
			},
			{
				name: WebComponents.AYUDAS_DIAGNOSTICAS,
				url: 'https://staticdigital.labsura.com.co/wc-ayudas-diagnosticas/wc-ayudas-diagnosticas.js',
			},
			{
				name: WebComponents.RECLAMACION_SALUD,
				url: 'https://staticdigital.labsura.com.co/wc-reclamaciones-salud/wc-reclamaciones-salud.js',
			},
			{
				name: WebComponents.ATENCION_VIRTUAL_SALUD,
				url: 'https://staticdigital.labsura.com.co/wc-avs/wc-avs.js',
			},
			{
				name: WebComponents.BENEFICIARIO,
				url: 'https://staticdigital.labsura.com.co/wc-beneficiarios/wc-beneficiario.js',
			},
			{
				name: WebComponents.RECLAMACIONES,
				url: 'https://wc-reclamoenlinealab.sura.com.co/wc-reclamaciones-vida/wc-reclamaciones-vida.js',
			},
			{
				name: WebComponents.MEDIO_PAGO,
				url: 'https://staticdigital.labsura.com.co/wc-medio-pago/wc-medio-pago.js',
			},
			{
				name: WebComponents.BOLSILLO_SURA,
				url: 'https://staticdigital.labsura.com.co/wc-bolsillo-sura/wc-bolsillo-sura.js',
			},
			{
				name: WebComponents.PAGO_EN_LINEA,
				url: 'https://staticdigital.labsura.com.co/wc-pago-en-linea/wc-pago-en-linea.js',
			},
			{
				name: WebComponents.CERTIFICADOS,
				url: 'https://staticdigital.labsura.com.co/wc-certificados/wc-certificado.js',
			},
			{
				name: WebComponents.DATOS_SALUD,
				url: 'https://staticdigital.labsura.com.co/wc-datos-usuario-salud/wc-datos-salud/wc-datos-salud.js',
			},
			{
				name: WebComponents.SINIESTRO_INTEGRAL,
				url: 'https://siniestroint.labsura.com.co/wc-siniestro-integral.js',
			},
			{
				name: WebComponents.PRE_REGISTRO,
				url: 'https://staticdigital.labsura.com.co/wc-preregistro-cita-medica/wc-prerregistro-datos-cliente-salud.js',
			},
			{
				name: WebComponents.HISTORIA_CLINICA,
				url: 'https://staticdigital.labsura.com.co/wc-historia-clinica/wc-historia-clinica.js',
			},
		],
		scripts: {
			dynatrace:
				'https://js-cdn.dynatrace.com/jstag/17ec423115e/bf10877tff/bc01c6536db073cf_complete.js',
			dynatrace_pago_express:
				'https://js-cdn.dynatrace.com/jstag/17ec423115e/bf10877tff/f6c9bd8860245316_complete.js',
			riskDeviceLoader:
				'https://staticdigital.labsura.com.co/public-resources/assets/scripts/device/risk_loader.js',
			webComponentsSVP: 'https://staticdigital.labsura.com.co/wc-svp/wc-svp.js',
			tibotChat:
				'https://parly-webchat-suraco-mastertibot.10prniy4eo5z.us-east.codeengine.appdomain.cloud/arl/js/chat-control.js',
			medalliaEncuesta:
				'https://resources.digital-cloud.medallia.eu/wdceu/344901/onsite/embed.js',
		},
	},
	production: {
		environment: 'pdn',
		appName: 'Sucursal Virtual Personas',
		appUrl: 'https://sucursal.segurossura.com.co',
		spName: 'AtencionVirtualSalud',
		trackingIdAnalytics: 'UA-193315851-1',
		trackingIdGtmAnalytics: 'GTM-M9H7QXC',
		supportMail:
			'mailto:soporteginteractiva@suramericana.com.co?Subject=Problema Asistente Virtual Web',
		services: {
			apiUrl: 'https://apidigital.segurossura.com.co/apigw-svp',
			resourcesUrl: 'https://staticdigital.com.co/public-resources/',
		},
		sites: [
			{
				name: ExternalSite.AUTORIZACIONES_SALUD,
				url: 'https://epsapps.suramericana.com/ADR/servicioVisualCrearSolADR?claseSeguridad=suramericana.pubs.mus.RepositorioMUS&dniSolicitante={DNI_SOLICITANTE}&cdTipoSolicitud=PAUT&dniAsegurado={DNI_ASEGURADO}',
			},
			{
				name: ExternalSite.AUTORIZACIONES_SALUD_EPS,
				url: 'https://portaleps.epssura.com/ServiciosUnClick/#/ordenes/ingreso/',
			},
			{
				name: ExternalSite.MEDICAMENTOS_SALUD_EPS,
				url: 'https://portaleps.epssura.com/ServiciosUnClick/#/inicio/medicamentos',
			},
		],
		webcomponents: [
			{
				name: WebComponents.HOME,
				url: 'https://staticdigital.segurossura.com.co/wc-home-svp/wc-home-svp.js',
			},
			{
				name: WebComponents.PERFIL_USUARIO,
				url: 'https://staticdigital.segurossura.com.co/wc-perfil-usuario/wc-actualizacion-datos.js',
			},
			{
				name: WebComponents.CITA_MEDICA,
				url: 'https://staticdigital.segurossura.com.co/wc-cita-medica/wc-cita-medica.js',
			},
			{
				name: WebComponents.HADA,
				url: 'https://autotriaje.epssura.com/static/js/wc-hada.js',
			},
			{
				name: WebComponents.AYUDAS_DIAGNOSTICAS,
				url: 'https://staticdigital.segurossura.com.co/wc-ayudas-diagnosticas/wc-ayudas-diagnosticas.js',
			},
			{
				name: WebComponents.RECLAMACION_SALUD,
				url: 'https://staticdigital.segurossura.com.co/wc-reclamaciones-salud/wc-reclamaciones-salud.js',
			},
			{
				name: WebComponents.ATENCION_VIRTUAL_SALUD,
				url: 'https://staticdigital.segurossura.com.co/wc-avs/wc-avs.js',
			},
			{
				name: WebComponents.BENEFICIARIO,
				url: 'https://staticdigital.segurossura.com.co/wc-beneficiarios/wc-beneficiario.js',
			},
			{
				name: WebComponents.RECLAMACIONES,
				url: 'https://wc-reclamoenlinea.sura.com.co/wc-reclamaciones-vida/wc-reclamaciones-vida.js',
			},
			{
				name: WebComponents.MEDIO_PAGO,
				url: 'https://staticdigital.segurossura.com.co/wc-medio-pago/wc-medio-pago.js',
			},
			{
				name: WebComponents.BOLSILLO_SURA,
				url: 'https://staticdigital.segurossura.com.co/wc-bolsillo-sura/wc-bolsillo-sura.js',
			},
			{
				name: WebComponents.PAGO_EN_LINEA,
				url: 'https://staticdigital.segurossura.com.co/wc-pago-en-linea/wc-pago-en-linea.js',
			},
			{
				name: WebComponents.CERTIFICADOS,
				url: 'https://staticdigital.segurossura.com.co/wc-certificados/wc-certificado.js',
			},
			{
				name: WebComponents.DATOS_SALUD,
				url: 'https://staticdigital.segurossura.com.co/wc-datos-usuario-salud/wc-datos-salud/wc-datos-salud.js',
			},
			{
				name: WebComponents.PRE_REGISTRO,
				url: 'https://staticdigital.segurossura.com.co/wc-preregistro-cita-medica/wc-prerregistro-datos-cliente-salud.js',
			},
			{
				name: WebComponents.SINIESTRO_INTEGRAL,
				url: 'https://siniestroint.sura.com.co/wc-siniestro-integral.js',
			},
			{
				name: WebComponents.HISTORIA_CLINICA,
				url: 'https://staticdigital.segurossura.com.co/wc-historia-clinica/wc-historia-clinica.js',
			},
		],
		scripts: {
			dynatrace:
				'https://js-cdn.dynatrace.com/jstag/16dcf18d41e/bf66036yys/471487000f8f2563_complete.js',
			dynatrace_pago_express:
				'https://js-cdn.dynatrace.com/jstag/16dcf18d41e/bf66036yys/1c28d57f77793c4f_complete.js',
			riskDeviceLoader:
				'https://staticdigital.segurossura.com.co/public-resources/assets/scripts/device/risk_loader.js',
			webComponentsSVP:
				'https://staticdigital.segurossura.com.co/wc-svp/wc-svp.js',
			tibotChat:
				'https://parly-webchat-suraco-mastertibot.10prniy4eo5z.us-east.codeengine.appdomain.cloud/arl/js/chat-control.js',
			medalliaEncuesta:
				'https://resources.digital-cloud.medallia.eu/wdceu/344901/onsite/embed.js',
		},
	},
	test: {
		environment: 'test',
		appName: '',
		appUrl: '',
		spName: '',
		trackingIdAnalytics: '',
		trackingIdGtmAnalytics: '',
		supportMail: '',
		services: {
			apiUrl: '',
			resourcesUrl: '',
		},
		sites: [
			{
				name: ExternalSite.AUTORIZACIONES_SALUD,
				url: 'https://appssegdllo01.suranet.com/ADR/servicioVisualCrearSolADR?claseSeguridad=suramericana.pubs.mus.RepositorioMUS&dniSolicitante={DNI_SOLICITANTE}&cdTipoSolicitud=PAUT&dniAsegurado={DNI_ASEGURADO}',
			},
			{
				name: ExternalSite.AUTORIZACIONES_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/ordenes/ingreso/',
			},
			{
				name: ExternalSite.MEDICAMENTOS_SALUD_EPS,
				url: 'https://portalepslab.epssura.com/ServiciosUnClick/#/inicio/medicamentos',
			},
		],
		webcomponents: [
			{
				name: WebComponents.HADA,
				url: 'https://autotriajedllo.epssura.com/static/js/wc-hada.js',
			},
			{
				name: WebComponents.ATENCION_VIRTUAL_SALUD,
				url: 'https://stwcdigitalpersonalab001.blob.core.windows.net/wc-avs/wc-avs.js',
			},
		],
		scripts: {
			dynatrace:
				'https://js-cdn.dynatrace.com/jstag/17052aca8bb/bf31768vmw/39a9b8147b136624_complete.js',
		},
	},
};
