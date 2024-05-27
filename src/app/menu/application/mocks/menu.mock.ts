import { MenuItem } from '@menu/domain/models/menu-item.model';

export const menuMock: MenuItem[] = [
	{
		label: 'Mi Resumen',
		link: 'home',
		subMenu: [],
		type: 'parent',
		order: 8,
		grouped: false,
	},
	{
		label: 'Salud',
		subMenu: [
			{ label: 'Datos del usuario', link: 'datos-del-usuario', type: 'child' },
			{ label: 'Citas médicas', link: 'citas-medicas', type: 'child' },
			{
				label: 'Resultados de exámenes',
				link: 'resultados-de-examenes',
				type: 'child',
			},
			{
				label: 'Atención virtual prioritaria',
				link: 'atencion-virtual-prioritaria',
				type: 'child',
			},
			{
				label: 'Autorizaciones póliza',
				link: 'autorizaciones-poliza',
				type: 'child',
			},
			{
				label: 'Reembolsos de salud póliza',
				link: 'reembolsos-de-salud-poliza',
				type: 'child',
			},
			{
				label: 'Mi historia clínica EPS SURA',
				link: 'historia-clinica-eps-sura',
				type: 'child',
			},
			{
				label: 'Autorizaciones EPS SURA',
				link: 'autorizaciones-eps-sura',
				type: 'child',
			},
			{
				label: 'Medicamentos EPS SURA',
				link: 'medicamentos-eps-sura',
				type: 'child',
			},
		],
		type: 'parent',
		order: 1,
		grouped: false,
	},
	{
		label: 'Vida',
		subMenu: [
			{
				label: 'Designación de beneficiarios',
				link: 'designacion-de-beneficiarios',
				type: 'child',
			},
			{
				label: 'Todos mis productos',
				link: 'todos-mis-productos',
				type: 'child',
				subMenu: [
					{
						label: 'Vida Test 1',
						link: 'vida-test-1',
						type: 'grandchild',
					},
				],
			},
			{
				label: 'Reclamaciones de vida',
				link: 'reclamaciones-de-vida',
				type: 'child',
			},
			{
				label: 'Preguntas frecuentes',
				link: 'preguntas-frecuentes',
				type: 'child',
			},
		],
		type: 'parent',
		order: 2,
		grouped: false,
	},
	{
		label: 'Pagos SURA',
		subMenu: [
			{
				label: 'Pago express',
				link: 'pago-express',
				type: 'child',
			},
			{ label: 'Bolsillo SURA', link: 'bolsillo-sura', type: 'child' },
			{ label: 'Medios de pago', link: 'medios-de-pago', type: 'child' },
		],
		type: 'parent',
		order: 3,
		grouped: true,
	},
	{
		label: 'Reclamaciones y reembolsos',
		subMenu: [],
		type: 'parent',
		order: 4,
		grouped: true,
	},
	{
		label: 'Documentos y Certificados',
		subMenu: [],
		type: 'parent',
		order: 5,
		grouped: true,
	},
	{
		label: 'Buscador',
		subMenu: [],
		type: 'parent',
		order: 6,
		grouped: true,
	},
	{
		label: 'Ayuda FAQ',
		subMenu: [],
		type: 'parent',
		order: 7,
		grouped: true,
	},
];
