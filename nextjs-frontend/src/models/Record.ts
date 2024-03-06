import { InitialValuesFactory } from './sources';

export interface Township {
  id: string | number;
  application_id: string;
  sales_agent_id: string;
  account_type: string;
  application_status: string;
  business_category: string;
}

export class RecordFactory implements InitialValuesFactory {
  createValues(properties: {
    id: string | number;
    application_id: string;
    sales_agent_id: string;
    account_type: string;
    application_status: string;
    business_category: string;
  }): Township {
    return properties;
  }
}

export const newRecordFactory = new RecordFactory();
