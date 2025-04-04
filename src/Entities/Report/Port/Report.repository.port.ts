import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { ReportEntity } from '@Entities/Report/Domain/Report.entity';

export interface ReportRepositoryPort extends ReadRepositoryPort<ReportEntity> {
	save(entity: ReportEntity): Promise<void>;
	delete(entity: ReportEntity): Promise<boolean>;
	findByUser(email: string): Promise<ReportEntity[]>;
	// findMany
}
