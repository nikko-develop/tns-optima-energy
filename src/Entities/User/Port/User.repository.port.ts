import { ReadRepositoryPort } from '@Libs/Ports/ReadRepositoryPort.base';

import { UserAggregate } from '@Entities/User/Domain/User.entity';

export interface UserRepositoryPort extends ReadRepositoryPort<UserAggregate> {
	save(entity: UserAggregate): Promise<void>;
	delete(entity: UserAggregate): Promise<boolean>;
	findByEmail(email: string): Promise<UserAggregate>;
	existsByEmail(email: string): Promise<boolean>;
	// findMany
}
