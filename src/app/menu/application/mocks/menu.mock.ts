import { MenuItem } from '@menu/domain/models/menu-item.model';

export const menuMock: MenuItem[] = [
	{
		label: 'Mi Resumen',
		link: 'home',
	},
	{
		label: 'Salud',
		subMenu: [
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
			{ label: 'Datos del usuario', link: 'datos-del-usuario' },
		],
	},
];
