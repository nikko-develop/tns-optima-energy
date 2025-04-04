import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { TariffEntity } from '@Entities/Tariff/Domain/Tariff.entity';

export interface TariffRepositoryPort extends ReadRepositoryPort<TariffEntity> {
	save(entity: TariffEntity): Promise<void>;
	delete(entity: TariffEntity): Promise<boolean>;
	findByCode(email: string): Promise<TariffEntity>;
	existsByCode(email: string): Promise<boolean>;
	// findMany
}
