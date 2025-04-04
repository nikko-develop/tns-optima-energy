import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import { MarketTrendProps } from '@Entities/MarketTrend/Domain/MarketTrend.types';

export class MarketTrendEntity extends Entity<MarketTrendProps> {
	private readonly logger = new Logger(MarketTrendEntity.name);
	public static create(create: MarketTrendProps, id?: ULID, createdAt?: Date, updatedAt?: Date) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: MarketTrendProps = { ...create };

		return new MarketTrendEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(
		update: Partial<
			Pick<MarketTrendProps, 'region' | 'trend' | 'changePercent' | 'effectiveDate' | 'source'>
		>
	): void {
		Object.assign(
			this.props,
			_.omitBy(
				_.pick(update, ['region', 'trend', 'changePercent', 'effectiveDate', 'source']),
				_.isNil.bind(_)
			)
		);
	}

	public validate(): void {}
}
