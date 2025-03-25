import { Breadcrumb } from './breadcrumb';
import { Popover } from './popover';

export interface Page {
  tabsBreadcrumbList: Breadcrumb;
  title: string; // Show as a form name and header name
  subTitle?: string;
  redirectionHandler?: string;
  inputGroups: { [key: string]: Field[] }; // Using for add new formGroup with main formGroup like UnitInput {"unit":"","uom":""}
  steps: Partial<Step>[]; // This is contain main form fields
  className: string; // This is use for assign form class name , like divide columns in form
  store: string; // This is contains main form store name, In Store Config file we are adding all URLs with other Api related information
  lists?: { [key: string]: Option[] }; //
  formGroups?: { [key: string]: Field[] }; //
  buttonList?: Button[]; // this is contains all form buttons list
  formCss?: Partial<{}>; // We can add custom css for form , like form width, height, padding etc .
  formLayoutType?: string; // This is contains position of form , like right, left, etc.....we can make own css in pouUp component and changeed position of form
  menuBarList?: MenuBar[];
  parentBackRoute?: string;
  getAllDataInColumnFilterApi?:string // used to get all data in columnfilter for the dropdown
  parentQueryParams?: {};
  parentFields?: string[];
  parentStore?: string;
  tableList?: TableEntity[];
  childTableList?: TableEntity[];
  tableHeight?: string;
  multiRowSelect?: boolean;
  tableNestedField?: string;
  nestedTableColSpan?:number;
  contextMenuDetails?: {
    functionFileName: string;
    triggerEvent: string;
    dialogFieldName: string;
    isApiCall?: boolean;
    constButtonFunctionName?:string;
    refreshStoreList?:string[];
  };
  detailsInfoConfig?: {
    rowCount:number,
    columnCount:number
  }
  viewPolicy?: { modelName: string; policy: boolean };
  toggleButton?: Toggle; // Toggle Button dto
  sectionClass?: string;
  filterFieldName?: string; // filter all field according to this field
  pageIconUrl?: string;
  name?: string;
  tableTool?: TableTool;
  tableToolAccessConfig?:{accessRoute:string,accessGroup?:string};
  tableAllCheckBoxActive?:boolean;
  parentResource?: string;
  columnFilterApi?: string;
  applyFilterApi?: boolean;
  updatableQueryparamForColumnFilterApi?: string[];
  pageModifierFunName?: string;
  storeUpdateFunction?: any[]; // use for update store
  footerPopUp?: boolean;
  bottomPopUpList?: BottomPopUp[];
  popoverList?: Popover[];
  noDataInTableMsg?: boolean;
  customToastMessage?: string;
  customToastErrorMessage?: string;
  showFieldInToastMessage?: string;
  queryParamInColfilter?: string;
  bottomPopUpListApi?: string;
  bottomPopUpFunctionName?: string;
  tableUniqueFieldName?: string;
  uniqueIdFieds?:string[];
  customAdvanceFilter:[];
  childUniqueIdFieds?:string[];
  formEditTitleName?:string;
  parentTitleFieldReference?: string;
  advanceFilteRreference?: { [key: string]: AdvanceFilter };
  importTemplateName?: string;
  importParentCodeField?:string;
  importUrl?: string;
  pageEntityName?: string; // This is use for Audit
  payloadModifierFunctionName?: string; // This function use if you want to modifier you post payload
  headerTools?: HeaderTools;
  paginationBbottomFixed?: boolean;
  moduleName?: string; // Module name use for system

  menuItemDefault?: string;
  isMultiInlineEdit?: boolean; // We will use for use multiinline
  mode: 'edit' | 'new' | 'view' | 'copy' | 'inlineEdit';
  tableMappingTextMsg: String;
  columnFilterBy?: string;
  apiModificationFunction?:any;
  eraseFields?:string[];
  checkedRowFunction?:string;
  detailViewFunction?:DetailView;
  filter: any;
  inlineFieldDisableCheckFunction?:string;
  hieraricalObjMapper?:{entityName:string,parentValField:string,responseFieldName:string,responseFieldNameField?:string,responseFieldCodeField?:string};
  approvalContextFieldname?:string;
  showCalender?: boolean;
  eodDashboard?: boolean;
  showCalenderName?:string;
  showCalenderField?:string;
  countTitle?: string;
  btnAccessPolicies?:{ [key: string]: {accessRoute:string,accessGroup:string,actionName:string} };
  defaultSelect?: boolean;
  getDataModifierFunction?:string;
  auditTrailHeaderId?: string;
}



export interface BottomPopUp {
  btnMessage: string;

  label: string;
  value: string;
  functionName: string;
  alignment: string;
  className?: string;
  isActive?: boolean;
  buttonType?:string;
  buttonList?:BottomPopUp[];
  accessRoute?:string;
  accessGroup?:string;
  actionName?:string;
  isView?:boolean;
}

export interface Step {
  stepName: string;
  icon: string;
  index: number;
  status: boolean;
  fields: Field[];
  label: string;
  isView?:boolean
}

export interface Option {
  value: any;
  label: string;
}

export interface TopicListener {
  topic: string;
  function: string;
}

export interface Field {
  description?: string;
  isDescriptionView?: boolean;
  isHeaderView?: boolean;
  isSystem? : boolean
  name: string;
  type: string;
  inputType?: string;
  roundingType?: string;
  label?: string;
  colSpan?: string;
  minRangeSlider?: number;
  maxRangeSlider?: number;
  customCss?: string;
  reference?: string;
  validation?: Validation;
  store?: string;
  globalIndicatorGroupName?: string;
  value?: string;
  fields?: Field[];
  sectionName?: string;
  parentField?: string;
  toggleValues?: any[];
  isView?: boolean;
  publishId?: string; // This will contain web-function name
  subscribeId?: string; // This will contain field-name of publish id Field
  triggerEvent?: boolean;
  isDisabled?: boolean;
  columnFilter?: boolean;
  isViewTable?: boolean;
  inputDescription?: string;
  showMessage?: boolean;
  limit?: string;
  pipe?: string;

  addNewEntity?: boolean;
  minDateReference?: string;
  maxDateReference?: string;
  inputCalculationDescription?: string;
  isViewLabel?: boolean;
  repeaterColumnTitle?: string;
  repeaterColumnClass?: string;
  s3FolderName?: string;
  path?: string;
  functionName?:string;
  isDuplicate?: boolean;
  showInitialValue?: boolean;
  idField?: string;
  showHeader?: boolean;
  isSorted?: boolean;
  attachmentNameReference?:string;
  downloadUrl?:string;
  attachPairWise?:boolean;
  
}

// topicListener?:TopicListener[];
// topic?:string;
export interface Validation {
  min?: number;
  max?: number;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  lowerCase?:boolean
}

export interface Button {
  label: string;
  store?: string;
  disable?: string;
  defaultFromConfig?: string;
  isView: Partial<boolean>;
  isDisabled?: Partial<boolean>;
  funName?: Partial<string>;
  keepFormOpen?: boolean;
  type?: string;
}

export interface TableEntity {
  label: string;
  name: string;
  pipe?: string;
  style?: any;
  isHeaderView?: boolean;
  columnFilter?: boolean;
  filterFunctionName?: string;
  isEdit?: boolean;
  advanceFilterName?: string;
  resourceName?: string;
  isDefaultUserPreferences?: boolean;
  fixedValueOptions?:Option[];
  columnFilterStore?:string;
  isResizable?:boolean;
  tableActions?: {
    edit?: TableAction;
    context?: TableAction;
    duplicate?: TableAction;
  };
  roundingType?: string;
  getAllDataInColFilter?:boolean;
  columnFunctionName?:string;
}

export interface TableAction {
  fieldName: string;
  value: string;
  functionName?: string;
  isView?: boolean;
}

export interface AdvanceFilter {
  inputField: string;
  options?: Option[];
  constraints: Option[];
}

export interface Toggle {
  elements: {
    label: string;
    value: any;
    functionNume?: any;
    referenceField?: any;
    tabAccessKey?:string;
    accessPolicyKey?:string;
    parentAccessUrl?:string;
    isView?:boolean;
  }[];
  buttonStyleClass: string;
}

export interface TableTool {
  add: boolean;
  addInline?: boolean;
  edit: boolean;
  reopen:boolean;
  duplicate: boolean;
  refresh: boolean;
  delete: boolean;
  view: boolean;
  fontInc: boolean;
  fontDec: boolean;
  import: boolean;
  export: boolean;
  exportAll: boolean;
  exportasJson?:boolean;
  print: boolean;
  auditTrail: boolean;
  preferences: boolean;
  hierarchy?:boolean;
}
export interface MenuBar {
  linkName: string;
  linkUrl: string;
  id:string;
  isActive?:boolean;
  parentReferanceFieldName?:string;
}

export interface HeaderTools {
  systemView?: boolean;
  advanceFilter?: boolean;
  columnView?: boolean;
}

export interface DetailView{
  url?:string;
  queryParams?:{
    queryparamName:string,
    queryparamFieldName?:string,
  }[];
}
