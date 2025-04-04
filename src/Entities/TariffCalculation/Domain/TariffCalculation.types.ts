import { ULID } from '@Libs/types/ULID.type';

export interface TariffCalculationProps {
	userEmail: string;
	consumptionDataId: ULID;
	date: Date;
	optimalTariffCode: string;
	alternatives: TariffCalculationAlternatives[];
	assumptions: TariffCalculationAssumptions;
}

export interface TariffCalculationAlternatives {
	tariffCode: string;
	totalCost: number;
	savings?: number;
}

export interface TariffCalculationAssumptions {
	predictedConsumption?: number;
	usedAlgorithm: string;
}
