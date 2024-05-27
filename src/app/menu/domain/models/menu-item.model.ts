export class MenuItem {
	label: string;
	type: string;
	grouped?: boolean;
	link?: string;
	subMenu?: MenuItem[];
	order?: number;
	constructor(label: string, type: string) {
		this.label = label;
		this.type = type;
	}
}
