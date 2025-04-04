import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { AggregateRoot } from '@Libs/ddd/AggregateRoot.base';
import { AggregateID } from '@Libs/ddd/Entity.base';

import {
	UserContactProps,
	UserProps,
	UserTariffHistoryProps
} from '@Entities/User/Domain/User.types';

export class UserAggregate extends AggregateRoot<UserProps> {
	private readonly logger = new Logger(UserAggregate.name);
	public static create(create: UserProps, id?: AggregateID, createdAt?: Date, updatedAt?: Date) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: UserProps = { ...create };

		return new UserAggregate({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(update: Partial<Pick<UserProps, 'email' | 'companyName' | 'role'>>): void {
		Object.assign(
			this.props,
			_.omitBy(_.pick(update, ['email', 'companyName', 'role']), _.isNil.bind(_))
		);
	}
	public updateContactData(contactData: UserContactProps) {
		Object.assign(this.props.contacts, _.omitBy(contactData, _.isNil.bind(_)));
	}
	public updateTariffHistory(newHistoryElement: UserTariffHistoryProps) {
		this.props.tariffHistory[this.props.tariffHistory.length].endDate = new Date();
		this.props.tariffHistory.push(newHistoryElement);
	}

	public validate(): void {}
}
