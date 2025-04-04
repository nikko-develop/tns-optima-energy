import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { TariffCalculationEntity } from '@Entities/TariffCalculation/Domain/TariffCalculation.entity';

export interface TariffCalculationRepositoryPort
	extends ReadRepositoryPort<TariffCalculationEntity> {
	save(entity: TariffCalculationEntity): Promise<void>;
	delete(entity: TariffCalculationEntity): Promise<boolean>;
	findByUserEmail(email: string): Promise<TariffCalculationEntity[]>;
}
