import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { ConsumptionScenarioEntity } from '@Entities/ConsumptionScenario/Domain/ConsumptionScenario.entity';

export interface ConsumptionScenarioRepositoryPort
	extends ReadRepositoryPort<ConsumptionScenarioEntity> {
	save(entity: ConsumptionScenarioEntity): Promise<void>;
	delete(entity: ConsumptionScenarioEntity): Promise<boolean>;
	findByUser(email: string): Promise<ConsumptionScenarioEntity[]>;
	// findMany
}
