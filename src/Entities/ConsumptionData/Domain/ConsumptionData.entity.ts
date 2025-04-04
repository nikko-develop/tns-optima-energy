import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import {
	ConsumptionDataAnomalyProps,
	ConsumptionDataProps,
	ConsumptionDataReadingProps
} from '@Entities/ConsumptionData/Domain/ConsumptionData.types';

export class ConsumptionDataEntity extends Entity<ConsumptionDataProps> {
	private readonly logger = new Logger(ConsumptionDataEntity.name);
	public static create(
		create: ConsumptionDataProps,
		id?: ULID,
		createdAt?: Date,
		updatedAt?: Date
	) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: ConsumptionDataProps = { ...create };

		return new ConsumptionDataEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(update: Partial<Pick<ConsumptionDataProps, 'meterNumber'>>): void {
		Object.assign(this.props, _.omitBy(_.pick(update, ['meterNumber']), _.isNil.bind(_)));
	}
	public addReading(newReading: ConsumptionDataReadingProps) {
		this.props.readings.push(newReading);
	}
	public addAnomaly(newAnomaly: ConsumptionDataAnomalyProps) {
		this.props.anomalies.push(newAnomaly);
	}

	public validate(): void {}
}
