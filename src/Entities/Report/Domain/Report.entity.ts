import { Logger } from '@nestjs/common';
import _ from 'lodash';
import { ulid } from 'ulid';

import { Entity } from '@Libs/ddd/Entity.base';
import { ULID } from '@Libs/types/ULID.type';

import { ReportProps, ReportSendTarget } from '@Entities/Report/Domain/Report.types';

export class ReportEntity extends Entity<ReportProps> {
	private readonly logger = new Logger(ReportEntity.name);
	public static create(create: ReportProps, id?: ULID, createdAt?: Date, updatedAt?: Date) {
		const newId = id ? id : ulid();
		const now = new Date(Date.now());
		const newCreatedAt = createdAt ?? now;
		const newUpdatedAt = updatedAt ?? now;
		const props: ReportProps = { ...create };

		return new ReportEntity({
			id: newId,
			createdAt: newCreatedAt,
			updatedAt: newUpdatedAt,
			props
		});
	}
	public update(update: Partial<Pick<ReportProps, 'format' | 'url'>>): void {
		Object.assign(this.props, _.omitBy(_.pick(update, ['format', 'url']), _.isNil.bind(_)));
	}
	public addNotification(newTarget: ReportSendTarget) {
		this.props.sendedTo.push(newTarget);
	}

	public validate(): void {}
}
