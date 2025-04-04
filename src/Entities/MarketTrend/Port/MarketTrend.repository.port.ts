import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { MarketTrendEntity } from '@Entities/MarketTrend/Domain/MarketTrend.entity';

export interface MarketTrendRepositoryPort extends ReadRepositoryPort<MarketTrendEntity> {
	save(entity: MarketTrendEntity): Promise<void>;
	delete(entity: MarketTrendEntity): Promise<boolean>;
	// findMany
}
