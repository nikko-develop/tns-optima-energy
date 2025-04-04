import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { ConsumptionDataEntity } from '@Entities/ConsumptionData/Domain/ConsumptionData.entity';

export interface ConsumptionDataRepositoryPort extends ReadRepositoryPort<ConsumptionDataEntity> {
	save(entity: ConsumptionDataEntity): Promise<void>;
	delete(entity: ConsumptionDataEntity): Promise<boolean>;
	findById(email: string): Promise<ConsumptionDataEntity>;
	findByUserEmail(email: string): Promise<ConsumptionDataEntity[]>;
}
