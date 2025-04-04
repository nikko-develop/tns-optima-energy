import { ULID } from '@Libs/types/ULID.type';

export interface ConsumptionDataProps {
	userId: ULID;
	meterNumber: string;
	readings: ConsumptionDataReadingProps[];
	anomalies: ConsumptionDataAnomalyProps[];
}

export interface ConsumptionDataReadingProps {
	date: Date;
	value: number;
	peakType?: ConsumptionDataReadingPeakType;
}

export interface ConsumptionDataAnomalyProps {
	date: Date;
	expectedValue: number;
	actualValue: number;
}

export enum ConsumptionDataReadingPeakType {
	day = 'day',
	night = 'night'
}
