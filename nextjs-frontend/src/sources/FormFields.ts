import { fieldType } from '@/utilities/constants/application';
import { options } from './OptionValues';

export const userFormFields = [
  {
    name: 'fullname',
    type: fieldType.TEXT,
    label: 'Full Name *',
    xsGrid: 6
  },
  {
    name: 'phone',
    type: fieldType.TEXT,
    label: 'Phone Number *',
    xsGrid: 6
  },
  {
    name: 'role_id',
    type: fieldType.SELECT,
    label: 'User Role *',
    xsGrid: 6,
    options: [],
    optionKeyProp: 'id',
    optionLabelProp: 'name'
  },
  {
    name: 'username',
    type: fieldType.TEXT,
    label: 'Username *',
    xsGrid: 6
  },
  {
    name: 'password',
    type: fieldType.TEXT,
    label: 'Password *',
    xsGrid: 3,
    disableEdited: true
  },
  {
    name: 're_password',
    type: fieldType.TEXT,
    label: 'Confirm Password *',
    xsGrid: 3,
    disableEdited: true
  },
  {
    name: 'description',
    type: fieldType.TEXT,
    label: 'Description *',
    xsGrid: 12
  }
];

export const editUserFormFields = [
  {
    name: 'name',
    type: fieldType.TEXT,
    label: 'Full Name *',
    xsGrid: 12
  },
  {
    name: 'phone',
    type: fieldType.TEXT,
    label: 'Phone Number *',
    xsGrid: 12
  },
  {
    name: 'address',
    type: fieldType.TEXT,
    label: 'Address *',
    xsGrid: 12
  }
];

export const changePasswordFormFields = [
  {
    name: 'password',
    type: fieldType.TEXT,
    label: 'Old Password *',
    xsGrid: 12
  },
  {
    name: 'new_password',
    type: fieldType.TEXT,
    label: 'New Password *',
    xsGrid: 12
  },
  {
    name: 'confirm_password',
    type: fieldType.TEXT,
    label: 'Confirm Password *',
    xsGrid: 12
  }
];

export const userRoleFormFields = [
  {
    name: 'name',
    type: fieldType.SELECT,
    label: 'User Role *',
    options: options.userRole,
    optionKeyProp: 'value',
    optionLabelProp: 'label',
    xsGrid: 12
  },
  {
    name: 'level',
    type: fieldType.RADIOBOX,
    label: 'Choose the desired access level from the available options. *',
    options: options.userLevel,
    xsGrid: 12
  }
];

export const languageFormFields = [
  {
    name: 'name',
    type: fieldType.TEXT,
    label: 'Language *',
    xsGrid: 12
  },
  {
    name: 'active',
    type: fieldType.SWITCH,
    label: 'Is active record?',
    xsGrid: 6
  }
];

export const recordFormFields = [
  {
    name: 'application_id',
    type: fieldType.TEXT,
    label: 'ApplicationID *',
    xsGrid: 12
  },
  {
    name: 'sales_agent_id',
    type: fieldType.TEXT,
    label: 'Sale Agent *',
    xsGrid: 12
  },
  {
    name: 'account_type',
    type: fieldType.TEXT,
    label: 'Account Type *',
    xsGrid: 12
  },
  {
    name: 'application_status',
    type: fieldType.TEXT,
    label: 'Application Status *',
    xsGrid: 12
  },
  {
    name: 'business_category',
    type: fieldType.RADIOBOX,
    label: 'Business Category *',
    options: options.businessCategory,
    xsGrid: 6
  }
];
