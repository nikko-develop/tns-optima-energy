export interface MarketTrendProps {
	region: string;
	trend: MarketTrend;
	changePercent: number;
	effectiveDate: Date;
	source: string;
}

export enum MarketTrend {
	up = 'up',
	doown = 'down'
}
