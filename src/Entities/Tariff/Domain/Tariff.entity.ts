import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import { TariffProps } from '@Entities/Tariff/Domain/Tariff.types';

export class TariffEntity extends Entity<TariffProps> {
	private readonly logger = new Logger(TariffEntity.name);
	public static create(create: TariffProps, id?: ULID, createdAt?: Date, updatedAt?: Date) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: TariffProps = { ...create };

		return new TariffEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(
		update: Partial<
			Pick<
				TariffProps,
				| 'name'
				| 'code'
				| 'description'
				| 'priceDay'
				| 'priceNight'
				| 'minConsumption'
				| 'maxConsumption'
				| 'isActive'
				| 'conditions'
			>
		>
	): void {
		Object.assign(
			this.props,
			_.omitBy(
				_.pick(update, [
					'name',
					'code',
					'description',
					'priceDay',
					'priceNight',
					'minConsumption',
					'maxConsumption',
					'isActive',
					'conditions'
				]),
				_.isNil.bind(_)
			)
		);
	}

	public validate(): void {}
}
