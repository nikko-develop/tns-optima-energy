import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import {
	ConsumptionScenarioAdjustmentsProps,
	ConsumptionScenarioProps,
	ConsumptionScenarioResult
} from '@Entities/ConsumptionScenario/Domain/ConsumptionScenario.types';

export class ConsumptionScenarioEntity extends Entity<ConsumptionScenarioProps> {
	private readonly logger = new Logger(ConsumptionScenarioEntity.name);
	public static create(
		create: ConsumptionScenarioProps,
		id?: ULID,
		createdAt?: Date,
		updatedAt?: Date
	) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: ConsumptionScenarioProps = { ...create };

		return new ConsumptionScenarioEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(update: Partial<Pick<ConsumptionScenarioProps, 'name'>>): void {
		Object.assign(this.props, _.omitBy(_.pick(update, ['name']), _.isNil.bind(_)));
	}
	public updateContactData(adjustment: ConsumptionScenarioAdjustmentsProps) {
		Object.assign(this.props.adjustments, _.omitBy(adjustment, _.isNil.bind(_)));
	}
	public addResult(newResult: ConsumptionScenarioResult) {
		this.props.results.push(newResult);
	}

	public validate(): void {}
}
