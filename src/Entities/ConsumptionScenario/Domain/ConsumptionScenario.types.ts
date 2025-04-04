import { ULID } from '@Libs/types/ULID.type';

export interface ConsumptionScenarioProps {
	userEmail: string;
	name: string;
	basedOnDataId: ULID;
	adjustments: ConsumptionScenarioAdjustmentsProps;
	results: ConsumptionScenarioResult[];
}

export interface ConsumptionScenarioAdjustmentsProps {
	increasePercent?: number;
	newPeakHours?: { start: number; end: number };
}

export interface ConsumptionScenarioResult {
	tariffCode: string;
	estimatedCost: number;
}
