import { Page } from "./page";

export const newTradePage:any={
    "title": "Trade",
    "name": "Trade",
    "store": "trade",
    "detailsInfoConfig" : {
      "rowCount" : 4,
      "columnCount" : 9
    },
    "defaultSelect":true,
    "redirectionHandler" : "tradeRedirection",
    "moduleName": "Trade",
    "className": "grid-cols-3",
    "formLayoutType": "right",
    "sectionClass": "col-span-3",
    "publishId": "tradeTypeFix",
    "multiRowSelect": true,
    "applyFilterApi": true,
    "pageIconUrl": "./assets/sidenav/dealcontract.svg",
    "importTemplateName": "Trade_Template.xlsx",
    "importUrl": "/ctrm-api/v2/api/file-import/import-file-data/Physical-Trade?filePath=",
    "updatableQueryparamForColumnFilterApi": [
        "page",
        "size"
    ],
    "columnFilterApi": "/ctrm-api/api/trade/v1/getTradeByCriteriaV2?page=${page}&size=${size}",
    "getAllDataInColumnFilterApi":"/ctrm-api/api/trade/v2/getAllDataInColumnfilter",
    "pageEntityName": "PhysicalTrade",
    "tableUniqueFieldName": "plannedObligationId",
    "storeUpdateFunction": [
        {
            "field": "tradeFormUpdate"
        }
    ],
    "payloadModifierFunctionName": "tradeObjectChnager",
    "approvalContextFieldname":"uuid",
    "getDataModifierFunction":"tradeDataModification",
    "formGroups": {
        "deliverySchedule": [
            {
                "name": "shipDelMonth",
                "label": "Shipment Month",
                "type": "input",
                "inputType": "month",
                "isDisabled": false,
                "isViewLabel": false,
                "isView" : true
            },
            {
                "name": "periodStartDate",
                "label": "Shipment Start Date",
                "type": "input",
                "inputType": "date",
                "isDisabled": false,
                "isViewLabel": false,
                "isView" : true
            },
            {
                "name": "periodEndDate",
                "label": "Shipment End Date",
                "type": "input",
                "inputType": "date",
                "isDisabled": false,
                "isViewLabel": false,
                "isView" : true
            },
            {
                "name": "noOfUnits",
                "label": "No. of Units",
                "type": "input",
                "inputType": "number",
                "isDisabled": true,
                "isViewLabel": false,
                "isView" : true
            },
            {
                "name": "quantity",
                "label": "Quantity",
                "type": "input",
                "inputType": "number",
                "isDisabled": true,
                "isViewLabel": false,
                "isView" : true
            },
            {
              "name": "priceQuotationStartDate",
              "label": "Price Quotation Start Date",
              "type": "input",
              "inputType": "date",
              "maxDateReference": "priceQuotationEndDate",
              "attachPairWise": true,
              "isDisabled": false,
              "isViewLabel": false
            },
            {
              "name": "priceQuotationEndDate",
              "label": "Price Quotation End Date",
              "type": "input",
              "inputType": "date",
              "minDateReference": "priceQuotationStartDate",
              "attachPairWise": true,
              "isDisabled": false,
              "isViewLabel": false
            },
            {
              "name": "laycanStartDate",
              "label": "Laycan Start Date",
              "type": "input",
              "inputType": "date",
              "maxDateReference": "laycanEndDate",
              "isDisabled": false,
              "isViewLabel": false
            },
            {
              "name": "laycanEndDate",
              "label": "Laycan End Date",
              "type": "input",
              "inputType": "date",
              "minDateReference": "laycanStartDate",
              "isDisabled": false,
              "isViewLabel": false
            },
            {
                "name": "package",
                "label": "",
                "type": "input",
                "isView": false,
                "isViewLabel": false
            },
            {
                "name": "packageType",
                "label": "",
                "type": "input",
                "isView": false,
                "isViewLabel": false
            }
        ]
    },
    "steps": [
        {
            "stepName": "step1",
            "index": 1,
            "status": true,
            "label": "Step 1",
            "fields": [
                {
                    "name": "tradePriceCurrencytest",
                    "label": "Price Currency",
                    "type": "select",
                    "store": "currency",
                    "publishId": "tradeDataLoad",
                    "value": "USD",
                    "isSystem": true,
                    "isDuplicate": true
                },
                {
                    "sectionName": "Trade Counterparty and Company Details",
                    "name": "tradeId",
                    "label": "Trade ID",
                    "type": "input",
                    "inputType": "text",
                    "isDisabled": true,
                    "validation": {
                        "required": false,
                        "max":0
                    }
                },
                {
                    "name": "tradeApprovalStatus",
                    "label": "Trade Overall Status",
                    "type": "input",
                    "inputType": "text",
                    "value": "Draft",
                    "isDisabled": true
                },
                {
                    "name": "manualTradeId",
                    "label": "Manual Trade ID",
                    "type": "input",
                    "inputType": "text"
                },
                {
                    "name": "tradeDateTime",
                    "label": "Trade Date",
                    "type": "input",
                    "inputType": "date",
                    "isDuplicate": true,
                    "maxDateReference": "today",
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "tradeTransactionType",
                    "label": "Buy/Sell",
                    "type": "radioInputGroup",
                    "customCss": "toggle-container-1",
                    "toggleValues": [
                        {
                            "label": "BUY",
                            "value": "BUY"
                        },
                        {
                            "label": "SELL",
                            "value": "SELL"
                        }
                    ],
                    "value": "BUY",
                    "validation": {
                        "required": true
                    },
                    "isDuplicate": true,
                    "isDisabled": true
                },
                {
                    "name": "company",
                    "label": "Company",
                    "type": "select",
                    "store": "userCompany",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "attachPairWise": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "counterpartyCode",
                    "label": "Counterparty Code",
                    "type": "select",
                    "store": "userCounterparty",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "profitcenter",
                    "label": "Profit Center",
                    "store": "userProfitCenter",
                    "isDuplicate": true,
                    "type": "select",
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "internalProfitCenter",
                    "label": "Sell Profit Center",
                    "isDuplicate": true,
                    "type": "select",
                    "isDisabled": true
                },
                {
                    "name": "traderName",
                    "label": "Trader Name",
                    "type": "select",
                    "store": "Trader",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "createdBy",
                    "label": "Created By",
                    "type": "input",
                    "inputType": "text",
                    "isDuplicate": true,
                    "isDisabled": true
                },
                {
                    "name": "broker",
                    "label": "Broker",
                    "type": "select",
                    "store": "broker",
                    "isDuplicate": true
                },
                {
                    "name": "brokerReference",
                    "label": "Broker Reference",
                    "type": "input",
                    "isDuplicate": true,
                    "inputType": "text"
                },
                {
                    "name": "externalReference",
                    "label": "External Reference",
                    "type": "input",
                    "inputType": "text",
                    "isDuplicate": true
                },
                {
                    "name": "contractTerm",
                    "label": "Contract Term",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "isDuplicate": true,
                    "globalIndicatorGroupName": "trade_contract_term_ind"
                },
                {
                    "sectionName": "Trade Commodity Origin and Specification Details",
                    "name": "commodity",
                    "label": "Commodity",
                    "type": "select",
                    "store": "userCommodity",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "attachPairWise": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "origin",
                    "label": "Origin",
                    "type": "multi-select",
                    "inputType": "string",
                    "isDuplicate": true
                },
                {
                    "name": "grade",
                    "label": "Grade",
                    "type": "select",
                    "isDuplicate": true
                },
                {
                    "name": "brand",
                    "label": "Brand",
                    "type": "select",
                    "isDuplicate": true
                },
                {
                    "name": "season",
                    "label": "Season",
                    "type": "select",
                    "isDuplicate": true
                },
                {
                    "name": "qualityTermsClause",
                    "label": "Quality Terms Clause",
                    "type": "input-select",
                    "colSpan": "col-span-3",
                    "store": "qualityTermsClauseList",
                    "isDuplicate": true
                },
                {
                    "sectionName": "Quantity and Delivery Details",
                    "name": "incoterm",
                    "label": "Incoterm",
                    "type": "select",
                     "publishId":"loadandUnloadPortValidation",
                    "store": "incoterm",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "locationType",
                    "label": "Location Type",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "location_type_ind",
                    "publishId": "tradeDataLoad",
                    "value": "Country",
                    "isDuplicate": true
                },
                {
                    "name": "location",
                    "label": "Location",
                    "type": "multi-select",
                    "inputType": "string",
                    "isDuplicate": true
                },
                {
                    "name": "modeOfTransport",
                    "label": "Mode Of Transport",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "mode_of_transport_ind",
                    "value": "Ocean",
                    "isDuplicate": true
                },
                {
                    "name": "loadLocationType",
                    "label": "Load Location Type",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "location_type_ind",
                    "publishId": "tradeDataLoad",
                    "value": "Port",
                    "isDuplicate": true
                },
                {
                    "name": "loadLocation",
                    "label": "Load Location",
                    "type": "multi-select",
                    "inputType": "string",
                    "publishId": "defaultValueNA",
                    "validation": {
                        "required": true
                    },
                    "isDuplicate": true
                },
                {
                    "name": "unloadLocationType",
                    "label": "Unload Location Type",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "location_type_ind",
                    "publishId": "tradeDataLoad",
                    "value": "Port",
                    "isDuplicate": true
                },
                {
                    "name": "dischargeLocation",
                    "label": "Unload Location",
                    "type": "multi-select",
                    "inputType": "string",
                    "publishId": "defaultValueNA",
                    "validation": {
                        "required": true
                    },
                    "isDuplicate": true
                },
                {
                    "name": "packageType",
                    "label": "Shipment Type",
                    "type": "radioInputGroup",
                    "customCss": "toggle-container-1",
                    "toggleValues": [
                        {
                            "label": "Bulk/Break-Bulk",
                            "value": "Bulk"
                        },
                        {
                            "label": "Container/Packed",
                            "value": "Unit"
                        }
                    ],
                    "value": "Bulk",
                    "colSpan": "col-span-3",
                    "publishId": "tradeDataLoad",
                    "attachPairWise": true,
                    "isDuplicate": true
                },
                {
                    "name": "weightBasis",
                    "label": "Weight Basis",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "weight_basis_ind",
                    "value": "Net Shipped Weights",
                    "isDuplicate": true
                },
                {
                    "name": "internalPackage",
                    "label": "Package Type",
                    "type": "select",
                    "isDisabled": true,
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true
                },
                {
                    "name": "internalPackageUnit",
                    "label": "# of Units/External Pkg",
                    "type": "input",
                    "inputType": "number",
                    "isDisabled": true,
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "validation": {
                        "min":"0"
                    }
                },
                {
                    "name": "externalPackage",
                    "label": "External Package Type",
                    "type": "select",
                    "store": "externalPackage",
                    "isDisabled": true,
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true

                },
                {
                    "name": "externalPackageUnit",
                    "label": "External Package Units",
                    "type": "input",
                    "inputType": "number",
                    "value": 0,
                    "isDisabled": true,
                    "isDuplicate": true,
                    "publishId": "tradeDataLoad"
                },
                {
                  "name": "noOfUnitsPeriod",
                  "label": "# of Units/Period",
                  "type": "input",
                  "inputType": "number",
                  "isDisabled": true,
                  "publishId": "noOfUnits",
                  "isDuplicate": true,
                  "validation": {
                    "min":"0"
                  }
                },
                {
                    "name": "quantityUom",
                    "label": "Quantity Uom",
                    "type": "select",
                    "publishId": "tradeDataLoad",
                    "store": "uom",
                    "validation": {
                        "required": true
                    },
                    "isDuplicate": true
                },
                {
                    "name": "quantity",
                    "label": "Quantity/Period",
                    "type": "input",
                    "inputType": "number",
                    "publishId": "tradeDataLoad",
                    "roundingType": "quantityRounding",
                    "validation": {
                        "min": "0",
                        "required": true
                    },
                    "isDuplicate": true,
                    "attachPairWise": true
                },
                {
                    "name": "quantityPeriodicity",
                    "label": "Quantity Periodicity",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "quantity_periodicity_ind",
                    "publishId": "tradeDataLoad",
                    "value": "Fixed",
                    "isDuplicate": true
                },
                {
                    "name": "periodStartDate",
                    "label": "Period Start Date",
                    "type": "input",
                    "inputType": "date",
                    "publishId": "tradeDataLoad",
                    "minDateReference": "tradeDateTime",
                    "validation": {
                        "required": true
                    },
                    "isDuplicate": true
                },
                {
                    "name": "periodEndDate",
                    "label": "Period End Date",
                    "type": "input",
                    "inputType": "date",
                    "minDateReference": "periodStartDate",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "deliverySchedule",
                    "label": "Delivery and Event Schedule",
                    "type": "popup-repeater",
                    "reference": "deliverySchedule",
                    "repeaterColumnClass": "grid-cols-9",
                    "repeaterColumnTitle": "Delivery and Event Schedule",
                    "addNewEntity": false,
                    "isDuplicate": true
                },
                {
                    "name": "totalUnits",
                    "label": "Total Units",
                    "type": "input",
                    "inputType": "number",
                    "isDisabled": true,
                    "isDuplicate": true
                },
                {
                    "name": "totalTradeQty",
                    "label": "Total Quantity",
                    "type": "input",
                    "inputType": "number",
                    "roundingType": "quantityRounding",
                    "publishId":"updateTotalTradeValueByTotalQuantity",
                    "pipe":"quantityRounding",
                    "isDisabled": true,
                    "isDuplicate": true
                },
                {
                    "name": "deliveryTermsClause",
                    "label": "Delivery Terms Clause",
                    "type": "input-select",
                    "colSpan": "col-span-3",
                    "store": "deliveryTermsClauseList",
                    "isDuplicate": true
                },
                {
                    "name": "quantityTermsClause",
                    "label": "Quantity Terms Clause",
                    "type": "input-select",
                    "colSpan": "col-span-3",
                    "store": "quantityTermsClauseList",
                    "isDuplicate": true
                },
                {
                    "sectionName": "Trade Tolerance Details",
                    "name": "quantityToleranceType",
                    "label": "Quantity Tolerance Type",
                    "type": "radioInputGroup",
                    "customCss": "toggle-container-1",
                    "toggleValues": [
                        {
                            "label": "Percentage",
                            "value": "percentage"
                        },
                        {
                            "label": "Weight",
                            "value": "weight"
                        }
                    ],
                    "value": "percentage",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "toleranceValue",
                    "label": "Tolerance Value",
                    "type": "minMax",
                    "minRangeSlider": -100,
                    "maxRangeSlider": 100,
                    "value": "{\"min\":2,\"max\":2}",
                    "isDuplicate": true
                },
                {
                    "sectionName": "Trade Price Details",
                    "name": "priceType",
                    "label": "Price Type",
                    "type": "select",
                    "store": "globalIndicatorDetails",
                    "globalIndicatorGroupName": "price_type_ind",
                    "publishId": "tradeDataLoad",
                    "value": "Fixed",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "priceTicker",
                    "label": "Price Ticker",
                    "type": "select",
                    "isDuplicate": true,
                    "isDisabled":true
                },
                {
                    "name": "tradePriceCurrency",
                    "label": "Price Currency",
                    "type": "select",
                    "store": "currency",
                    "publishId": "tradeDataLoad",
                    "value": "USD",
                    "isDuplicate": true
                },
                {
                    "name": "tradePrice",
                    "label": "Price",
                    "type": "input",
                    "inputType": "number",
                    "roundingType": "priceRounding",
                    "isDuplicate": true,
                    "publishId": "tradeDataLoad",
                    "validation": {
                        "required": true,
                        "pattern": "\\d{0,10}(\\.\\d{1,3})?"
                    }
                },
                {
                    "name": "tradePriceUom",
                    "label": "Price UOM",
                    "store": "uom",
                    "type": "select",
                    "value": "MT",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true
                },
                {
                    "name": "totalTradeValue",
                    "label": "Total Trade Value",
                    "type": "input",
                    "inputType": "number",
                    "roundingType": "priceRounding",
                    "isDisabled": true,
                    "isDuplicate": true
                },
                {
                    "name": "quotationPeriodClause",
                    "label": "Quotation Period Clause",
                    "type": "input-select",
                    "colSpan": "col-span-3",
                    "store": "quantityTermsClauseList",
                    "isDuplicate": true
                },
                {
                    "name": "pricingTermsClause",
                    "label": "Pricing Terms Clause",
                    "type": "input-select",
                    "colSpan": "col-span-3",
                    "store": "pricingTermsClauseList",
                    "isDuplicate": true
                },
                {
                    "sectionName": "Trade Provisional Price Details",
                    "name": "provisionalPricing",
                    "label": "Provisional Pricing",
                    "type": "status",
                    "inputType": "boolean",
                    "value": false,
                    "toggleValues": [
                        "Yes",
                        "No"
                    ],
                    "isDisabled": true,
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true
                },
                {
                    "name": "provisionalPriceType",
                    "label": "Provisional Price Type",
                    "type": "select",
                    "isDisabled": true,
                    "store": "globalIndicatorDetails",
                    "value":"Fixed",
                    "globalIndicatorGroupName": "provisional_price_type_ind",
                    "publishId": "tradeDataLoad",
                    "isDuplicate": true
                },
                {
                    "name": "percentage",
                    "label": "Percentage",
                    "type": "input",
                    "value": 0.0,
                    "inputType": "number",
                    "roundingType": "priceRounding",
                    "isDisabled": true,
                    "isDuplicate": true
                },
                {
                    "name": "provisionalPrice",
                    "label": "Provisional Price",
                    "type": "input",
                    "inputType": "number",
                    "value": 0.0,
                    "roundingType": "priceRounding",
                    "isDisabled": true,
                    "isDuplicate": true,
                    "publishId": "tradeDataLoad",
                    "validation": {
                        "pattern": "\\d{0,10}(\\.\\d{1,3})?"
                    }
                },
                {
                    "name": "provisionalPriceCurrency",
                    "label": "Provisional Price Currency",
                    "type": "select",
                    "isDisabled": true,
                    "isDuplicate": true,
                    "store": "currency"
                },
                {
                    "name": "provisionalPriceUom",
                    "label": "Provisional Price UOM",
                    "type": "select",
                    "store": "uom",
                    "isDuplicate": true,
                    "isDisabled": true
                },
                {
                    "sectionName": "Trade FX & Settlement Details",
                    "name": "tradeSettlementCurrency",
                    "label": "Settlement Currency",
                    "type": "select",
                    "store": "currency",
                    "isDuplicate": true,
                    "publishId": "tradeDataLoad",
                    "value": "USD"
                },
                {
                    "name": "fxrate",
                    "label": "FX Rate",
                    "type": "input",
                    "inputType": "number",
                    "roundingType": "fxRounding",
                    "isDuplicate": true,
                    "isDisabled": true,
                    "value": 1
                },
              {
                "name": "settlementToleranceValue",
                "label": "Settlement Tolerance Value",
                "type": "minMax",
                "minRangeSlider": -100,
                "maxRangeSlider": 100,
                "value": "{\"min\":2,\"max\":2}",
                "isDuplicate": true,
                "publishId": "tradeDataLoad"
              },

                {
                    "name": "provisionalFxRate",
                    "label": "Provisional Fx Rate",
                    "type": "input",
                    "inputType": "number",
                    "roundingType": "fxRounding",
                    "isDuplicate": true,
                    "value": 1
                },
                {
                    "name": "paymentterm",
                    "label": "Payment Term",
                    "publishId": "tradeDataLoad",
                    "type": "select",
                    "isDuplicate": true,
                    "validation": {
                        "required": true
                    }
                },
                {
                    "name": "paymentTermsClause",
                    "label": "Payment Terms Clause",
                    "type": "input",
                    "inputType": "text",
                    "isDuplicate": true
                },
                {
                    "sectionName": "Others",
                    "name": "specialInstructions",
                    "label": "Special Instructions",
                    "isDuplicate": true,
                    "type": "textArea",
                    "colSpan":"col-span-3",
                    "validation": {
                      "maxLength": 2048
                    }
                },
                {
                    "name": "comments",
                    "label": "Comments",
                    "isDuplicate": true,
                    "type": "textArea",
                    "colSpan":"col-span-3",
                    "validation": {
                      "maxLength": 2048
                    }
                },
                {
                    "name": "isInternalTrade",
                    "label": "",
                    "type": "text",
                    "isDuplicate": true,
                    "value": false,
                    "isView": false
                },
                {
                    "name": "counterparty",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "paperTrade",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "capacity",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "deliveryStartDate",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "deliveryEndDate",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "futureIndex",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "tradeApprovalStatus",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "tradeType",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "value": "Physical",
                    "isDuplicate": true
                },
                {
                    "name": "counterpartyName",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "companyCode",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "profitcenterCode",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "commodityCode",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
                {
                    "name": "uomConversionFactor",
                    "label": "",
                    "type": "text",
                    "isView": false,
                    "isDuplicate": true
                },
              {
                "name": "priceQuotationStartDate",
                "label": "Price Quotation Start Date",
                "type": "input",
                "inputType": "date",
                "isView": false,
                "isDuplicate": true
              },
              {
                "name": "priceQuotationEndDate",
                "label": "Price Quotation End Date",
                "type": "input",
                "inputType": "date",
                "isView": false,
                "isDuplicate": true
              },
              {
                "name": "laycanStartDate",
                "label": "Laycan Start Date",
                "type": "input",
                "inputType": "date",
                "isView": false,
                "isDuplicate": true
              },
              {
                "name": "laycanEndDate",
                "label": "Laycan End Date",
                "type": "input",
                "inputType": "date",
                "isView": false,
                "isDuplicate": true
              },
              {
                "name": "laycanEndDate",
                "label": "Laycan End Date",
                "type": "input",
                "inputType": "date",
                "isView": false,
                "isSystem": false,
                "isDuplicate": true
              }
            ]
        }
    ],
    "buttonList": [
        {
            "label": "Save",
            "isView": true,
            "keepFormOpen": true
        }
    ],
    "formCss": {
        "width": "50vw",
        "height": "100vh"
    },
    "tableList": [
        {
            "name": "checkbox",
            "label": "",
            "isHeaderView": true,
            "style": {
                "position": "sticky",
                "left": 0,
                "width": "2rem",
                "z-index": 1
            }
        },
        {
            "name": "actionSection",
            "label": "Action",
            "isHeaderView": true,
            "style": {
                "position": "sticky",
                "left": "2rem",
                "width": "7rem",
                "z-index": 1
            },
          "tableActions": {
            "edit": {
              "fieldName": "tradeApprovalStatus",
              "isView": true,
              "value": [
                "Draft",
                "Awaiting Approval"
              ]
            },
            "context": {
              "isView": true
            },
            "duplicate": {
              "isView": true
            }
          }
        },
        {
            "name": "plannedObligationId",
            "label": "Obligation ID",
            "columnFilter": true,
            "getAllDataInColFilter":true,
            "pipe": "viewChildConfirmed",
            "isHeaderView":false,
            "advanceFilterName": "filter1",
            "isDefaultUserPreferences":false,
            "style": {
                "position": "sticky",
                "left": "9rem",
                "min-width": "7rem",
                "z-index": 1
            }
        },
        {
            "name": "tradeId",
            "label": "Trade ID",
            "columnFilter": true,
            "getAllDataInColFilter":true,
            "pipe": "viewChild",
            "advanceFilterName": "filter1"
        },
        {
            "name": "tradeDateTime",
            "label": "Trade Date",
            "pipe": "Date",
            "columnFilter": true,
            "advanceFilterName": "filter4"
        },
        {
            "name": "counterpartyName",
            "label": "Counterparty Name",
            "columnFilter": true,
            "pipe":"counterpartyNamePipe",
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
        "name": "counterpartyCode",
        "label": "Counterparty Code",
        "columnFilter": true,
        "advanceFilterName": "filter1"
        },
        {
            "name": "tradeTransactionType",
            "label": "Buy/Sell",
            "columnFilter": true,
            "advanceFilterName": "filter5",
            "pipe": "tradeTransactionType"
        },
        {
            "name": "commodity",
            "label": "Commodity",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "commodityCode",
            "label": "Commodity Code",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "grade",
            "label": "Grade",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
       {
        "name": "contractTerm",
        "label": "Contract Term",
        "columnFilter": true,
        "advanceFilterName": "filter1"
       },

      {
        "name": "periodStartDate",
        "label": "Period Start Date",
        "pipe": "Date",
        "columnFilter": true,
        "advanceFilterName": "filter4"
      },
      {
        "name": "periodEndDate",
        "label": "Period End Date",
        "pipe": "Date",
        "columnFilter": true,
        "advanceFilterName": "filter4"
      },
        {
        "name": "incoterm",
        "label": "Incoterm",
        "columnFilter": true,
        "advanceFilterName": "filter6"
        },
      {
        "name": "loadLocation",
        "label": "Load Location",
        "columnFilter": true,
        "advanceFilterName": "filter1"
      },
      {
        "name": "dischargeLocation",
        "label": "Unload Location",
        "columnFilter": true,
        "advanceFilterName": "filter1"
      },
        {
        "name": "priceType",
        "label": "Price Type",
        "columnFilter": true,
        "advanceFilterName": "filter6"
        },
      {
        "name": "provisionalPrice",
        "label": "Provisional Price",
        "columnFilter": true,
        "advanceFilterName": "filter7",
        "pipe": "tradeProvisionalPrice"
      },
      {
        "name": "tradePrice",
        "label": "Price",
        "columnFilter": true,
        "advanceFilterName": "filter7",
        "pipe": "tradePricePipe"
      },
      {
        "name": "quantity",
        "label": "Quantity",
        "columnFilter": true,
        "advanceFilterName": "filter7",
        "pipe": "tradeQuantity"
      },
      {
        "name": "broker",
        "label": "Broker",
        "columnFilter": true,
        "advanceFilterName": "filter1"
      },
      {
        "name": "brokerReference",
        "label": "Broker Reference",
        "columnFilter": true,
        "advanceFilterName": "filter1"
      },
      {
        "name": "company",
        "label": "Company",
        "advanceFilterName": "filter1",
        "isHeaderView": false,
        "columnFilter": true
      },
      {
        "name": "companyCode",
        "label": "Company Code",
        "columnFilter": true,
        "advanceFilterName": "filter1",
        "isHeaderView":false,
        "isDefaultUserPreferences":false
    },
      {
        "name": "profitcenter",
        "label": "Profit Center",
        "columnFilter": true,
        "advanceFilterName": "filter1"
      },
      {
        "name": "profitcenterCode",
        "label": "Profit Center Code",
        "columnFilter": true,
        "advanceFilterName": "filter1",
        "isHeaderView":false,
        "isDefaultUserPreferences":false
    },
        {
            "name": "traderName",
            "label": "Trader Name",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "createdBy",
            "label": "Created By",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "origin",
            "label": "Origin",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "tradeApprovalStatus",
            "label": "Trade Overall Status",
            "pipe": "tradeworkflowStatus",
            "popover": "tradeOverallStatus"
        },
        {
            "name": "quantityPeriodicity",
            "label": "Quantity Periodicity",
            "columnFilter": true,
            "advanceFilterName": "filter6"
        },

        {
            "name": "tradePriceCurrency",
            "label": "Price Currency",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "totalTradeValue",
            "label": "Total Trade Value",
            "pipe": "roundUpValues",
            "roundOffType": "currency_roundoff",
            "columnFilter": true,
            "advanceFilterName": "filter7"
        },

        {
            "name": "paymentterm",
            "label": "Payment Term",
            "columnFilter": true,
            "advanceFilterName": "filter1"
        },
        {
            "name": "totalTradeQty",
            "label": "Total Quantity",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "pipe": "tradeQuantity",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "tradeType",
            "label": "Trade Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "deliveryTermsClause",
            "label": "Delivery Terms Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "quantityTermsClause",
            "label": "Quantity Terms Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "quantityToleranceType",
            "label": "Quantity Tolerance Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "toleranceValue",
            "label": "Tolerance Value",
            "pipe":"toleranceValue",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "priceTicker",
            "label": "Price Ticker",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "tradePriceUom",
            "label": "Trade Price Uom",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "quotationPeriodClause",
            "label": "Quotation Period Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "pricingTermsClause",
            "label": "Pricing Terms Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "isProvisionalPricing",
            "label": "Provisional Pricing",
            "columnFilter": true,
            "advanceFilterName": "filter8",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "provisionalPriceType",
            "label": "Provisional Price Type",
            "columnFilter": true,
            "advanceFilterName": "filter9",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "percentage",
            "label": "Percentage",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "provisionalPriceCurrency",
            "label": "Provisional Price Currency",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "provisionalPriceUom",
            "label": "Provisional Price Uom",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "tradeSettlementCurrency",
            "label": "Trade Settlement Currency",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "settlementToleranceValue",
            "label": "Settlement Tolerance Value",
            "pipe":"toleranceValue",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "fxrate",
            "label": "FX rate",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "provisionalFxRate",
            "label": "Provisional Fx Rate",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "internalProfitCenter",
            "label": "Internal Profit Center",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "externalReference",
            "label": "External Reference",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "brand",
            "label": "Brand",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "season",
            "label": "Season",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "qualityTermsClause",
            "label": "Quality Terms Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "locationType",
            "label": "Location Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "location",
            "label": "Location",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "modeOfTransport",
            "label": "Mode Of Transport",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "loadLocationType",
            "label": "Load Location Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "packageType",
            "label": "Package Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "weightBasis",
            "label": "Weight Basis",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "quantityUom",
            "label": "Quantity Uom",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "internalPackage",
            "label": "Internal Package",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "internalPackageUnit",
            "label": "Internal Package Unit",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "deliveryStartDate",
            "label": "Delivery Start Date",
            "columnFilter": true,
            "advanceFilterName": "filter4",
            "pipe": "Date",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "deliveryEndDate",
            "label": "Delivery End Date",
            "columnFilter": true,
            "advanceFilterName": "filter4",
            "pipe": "Date",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "externalPackage",
            "label": "External Package",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "comments",
            "label": "Comments",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "specialInstructions",
            "label": "Special Instructions",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "externalPackageUnit",
            "label": "External Package Unit",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "unloadLocationType",
            "label": "Unload Location Type",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "totalUnits",
            "label": "Total Units",
            "columnFilter": true,
            "advanceFilterName": "filter7",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        },
        {
            "name": "paymentTermsClause",
            "label": "Payment Terms Clause",
            "columnFilter": true,
            "advanceFilterName": "filter1",
            "isHeaderView":false,
            "isDefaultUserPreferences":false
        }
    ],
  "popoverList":[
    {
      "type":"table",
      "name":"tradeOverallStatus",
      "title":"Trade Overall Status",
      "list":[
        {
          "headerName":"Approval",
          "fieldname":"actionName"
        },
        {
          "headerName":"Status",
          "fieldname":"updateStatus"
        },
        {
          "headerName":"Approved By",
          "fieldname":"userId"
        },
        {
          "headerName":"Date",
          "fieldname":"updateDate",
          "pipe": "date"
        }
      ]
    }
  ],
    "tableTool": {
        "add": true,
        "edit": true,
        "duplicate": false,
        "delete": false,
        "refresh": true,
        "import": true,
        "export": true,
        "fontInc": true,
        "fontDec": true,
        "exportAll": true,
        "print": false,
        "auditTrail": true,
        "preferences": false
    },
    "tableToolAccessConfig":{
        "accessRoute":"/trade-draft"
    },
    "toggleButton": {
        "elements": [
            {
                "label": "Draft",
                "value": "Draft",
                "functionNume": "tradeScreen",
                "referenceField": "tradeApprovalStatus",
                "tabAccessKey":"draftRead",
                "accessPolicyKey":"/trade-draft",
                "parentAccessUrl":"/trade"
            },
            {
                "label": "Confirmed",
                "value": "Confirmed",
                "functionNume": "tradeScreen",
                "referenceField": "tradeApprovalStatus",
                "tabAccessKey":"confirmedRead",
                "accessPolicyKey":"/trade-confirmed",
                "parentAccessUrl":"/trade"
            },
            {
                "label": "Void",
                "value": "void",
                "functionNume": "tradeScreen",
                "referenceField": "tradeApprovalStatus",
                "tabAccessKey":"voidRead",
                "accessPolicyKey":"/trade-void",
                "parentAccessUrl":"/trade"
            }
        ],
        "buttonStyleClass": "bluebutton-group-1 "
    },
    "contextMenuDetails": {
        "functionFileName": "tradeApproval",
        "triggerEvent": "TradeApproval",
        "dialogFieldName": "tradeId",
        "isApiCall": true,
        "refreshStoreList":["userDetails"]
    },
    "advanceFilteRreference": {
        "filter1": {
            "inputField": "text",
            "constraints": [
                {
                    "label": "Equals",
                    "value": "equals"
                },
                {
                    "label": "Not Equals",
                    "value": "notequals"
                },
                {
                    "label": "Contains",
                    "value": "contains"
                }
            ]
        },
        "filter2": {
            "inputField": "date",
            "constraints": [
                {
                    "label": "Equals Date",
                    "value": "equalsdate"
                }
            ]
        },
        "filter3": {
            "inputField": "select",
            "constraints": [
                {
                    "label": "is",
                    "value": "equals"
                },
                {
                    "label": "is not",
                    "value": "notequals"
                }
            ],
            "options": [
                {
                    "label": "Draft",
                    "value": "Draft"
                },
                {
                    "label": "Awaiting Approval",
                    "value": "Awaiting Approval"
                },
                {
                    "label": "Confirmed",
                    "value": "Confirmed"
                },
                {
                    "label": "Void",
                    "value": "void"
                },
                {
                    "label": "Deleted",
                    "value": "deleted"
                }
            ]
        },
        "filter4": {
            "inputField": "date",
            "constraints": [
                {
                    "label": "Equals",
                    "value": "equalsdate"
                },
                {
                    "label": "Not Equals",
                    "value": "notequalsdate"
                },
                {
                    "label": "Before",
                    "value": "datelessthanequal"
                },
                {
                    "label": "After",
                    "value": "dategreaterthanequal"
                },
                {
                    "label": "Date Range",
                    "value": "betweendates2"
                }
            ]
        },
        "filter5": {
            "inputField": "select",
            "constraints": [
                {
                    "label": "is",
                    "value": "equals"
                },
                {
                    "label": "is not",
                    "value": "notequals"
                }
            ],
            "options": [
                {
                    "label": "BUY",
                    "value": "BUY"
                },
                {
                    "label": "SELL",
                    "value": "SELL"
                }
            ]
        },
        "filter6": {
            "inputField": "text",
            "constraints": [
                {
                    "label": "is",
                    "value": "equals"
                },
                {
                    "label": "is not",
                    "value": "notequals"
                }
            ]
        },
      "filter7": {
        "inputField": "number",
        "constraints": [
          {
            "label": "Equals",
            "value": "equals"
          },
          {
            "label": "Not Equals",
            "value": "notequals"
          },
          {
            "label": "Less than",
            "value": "lessThan"
          },
          {
            "label": "Greater than",
            "value": "greaterThan"
          }
        ]
      },
      "filter8": {
        "inputField": "select",
        "constraints": [
            {
                "label": "is",
                "value": "equals"
            },
            {
                "label": "is not",
                "value": "notequals"
            }
        ],
        "options": [
            {
                "label": "Yes",
                "value": true
            },
            {
                "label": "No",
                "value": false
            }
        ]
    },
    "filter9": {
        "inputField": "select",
        "constraints": [
            {
                "label": "Equals",
                "value": "equals"
            },
            {
                "label": "Not Equals",
                "value": "notequals"
            },
            {
                "label": "Contains",
                "value": "contains"
            }
        ],
        "options": [
            {
                "label": "Fixed",
                "value": "Fixed"
            },
            {
                "label": "Percentage",
                "value": "Percentage"
            }
        ]
    }
    },
    "headerTools": {
        "systemView": true,
        "advanceFilter": true,
        "columnView": true
    },
    "eraseFields":["plannedObligationId"],
    "btnAccessPolicies":{
        "reopenVoid":{
            "accessRoute":"/trade-void",
            "accessGroup":"Action",
            "actionName":"reopenVoid"
        },
        "sendForApproval":{
            "accessRoute":"/trade-draft",
            "accessGroup":"Action",
            "actionName":"sendForApproval"
        },
        "voidConfirmed":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"void"
        },
        "voidDraft":{
            "accessRoute":"/trade-draft",
            "accessGroup":"Action",
            "actionName":"void"
        },
        "amend":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"amend"
        },
        "unConfirm":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"unConfirm"
        },
        "generateProFormaInvoice":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"generateProFormaInvoice"
        },
        "generateAdvancedInvoice":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"generateAdvancedInvoice"
        },
        "generateDocumentConfirmed":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"generateDocument"
        },
        "generateDocumentDraft":{
            "accessRoute":"/trade-draft",
            "accessGroup":"Action",
            "actionName":"generateDocument"
        },
        "addCostConfirmed":{
            "accessRoute":"/trade-confirmed",
            "accessGroup":"Action",
            "actionName":"addCost"
        },
        "addCostDraft":{
            "accessRoute":"/trade-draft",
            "accessGroup":"Action",
            "actionName":"addCost"
        },
        "createMultipleCopiesDraft": {
          "accessRoute":"/trade-draft",
          "accessGroup":"Action",
          "actionName":"createMultipleCopies"
        },
        "createMultipleCopiesConfirmed": {
          "accessRoute":"/trade-confirmed",
          "accessGroup":"Action",
          "actionName":"createMultipleCopies"
        }
    }
}

