export class MenuItem {
	label: string;
	link?: string;
	subMenu?: MenuItem[];
	constructor(label: string) {
		this.label = label;
	}
}
