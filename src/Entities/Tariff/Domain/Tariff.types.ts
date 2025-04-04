export interface TariffProps {
	name: string;
	code: string;
	description: string;
	priceDay: number;
	priceNight?: number;
	minConsumption: number;
	maxConsumption?: number;
	isActive: boolean;
	conditions: string[];
}
