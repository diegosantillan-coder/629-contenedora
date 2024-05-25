export class MenuItem {
	label: string;
	link?: string;
	type: string;
	subMenu?: MenuItem[];
	constructor(label: string, type: string) {
		this.label = label;
		this.type = type;
	}
}
