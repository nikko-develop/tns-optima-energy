import { ULID } from '@Libs/types/ULID.type';

export interface ReportProps {
	calculationId: ULID;
	format: ReportFormat;
	url: string;
	sendedTo: ReportSendTarget[];
}

export interface ReportSendTarget {
	type: RepordSendTargetType;
	value: string;
}

export enum ReportFormat {
	pdf = 'pdf',
	xlsx = 'xlsx'
}

export enum RepordSendTargetType {
	email = 'email',
	telegram = 'telegram'
}
