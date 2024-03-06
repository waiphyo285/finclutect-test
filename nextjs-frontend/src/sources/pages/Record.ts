import { recordPageValues } from '../PageValues';
import { recordModalValues } from '../ModalValues';
import { recordFormFields } from '../FormFields';
import { recordInitialValues } from '../InitialValues';
import { recordTableColumns } from '../TableColumns';
import { recordSearchOptions } from '../TableSearchOptions';
import { newRecordFactory } from '@/models/Record';
import { storeKeys } from '@/utilities/constants/storeKeys';
import { CommonComponent } from '../prototypes/CommonInstance';

const recordValues = new CommonComponent(
  storeKeys.RECORD,
  recordPageValues,
  recordModalValues,
  recordInitialValues,
  recordFormFields,
  recordTableColumns,
  recordSearchOptions,
  newRecordFactory
);

export default recordValues;
