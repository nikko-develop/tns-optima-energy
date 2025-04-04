export interface UserProps {
	email: string;
	passwordHash: string;
	companyName: string;
	role: UserRole;
	contacts: UserContactProps;
	tariffHistory: UserTariffHistoryProps[];
}

export interface UserContactProps {
	telegram?: string;
	phoneNumber?: string;
}

export interface UserTariffHistoryProps {
	tariffCode: string;
	startDate: Date;
	endDate?: Date;
}

export enum UserRole {
	admin = 'admin',
	user = 'user'
}
