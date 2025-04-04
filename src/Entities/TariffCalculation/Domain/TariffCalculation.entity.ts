import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import {
	TariffCalculationAlternatives,
	TariffCalculationAssumptions,
	TariffCalculationProps
} from '@Entities/TariffCalculation/Domain/TariffCalculation.types';

export class TariffCalculationEntity extends Entity<TariffCalculationProps> {
	private readonly logger = new Logger(TariffCalculationEntity.name);
	public static create(
		create: TariffCalculationProps,
		id?: ULID,
		createdAt?: Date,
		updatedAt?: Date
	) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: TariffCalculationProps = { ...create };

		return new TariffCalculationEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(update: Partial<Pick<TariffCalculationProps, 'date' | 'optimalTariffCode'>>): void {
		Object.assign(
			this.props,
			_.omitBy(_.pick(update, ['date', 'optimalTariffCode']), _.isNil.bind(_))
		);
	}
	public updateAssumptions(assumptions: TariffCalculationAssumptions) {
		Object.assign(this.props.assumptions, _.omitBy(assumptions, _.isNil.bind(_)));
	}
	public addAlternative(newAlternative: TariffCalculationAlternatives) {
		this.props.alternatives.push(newAlternative);
	}

	public validate(): void {}
}
