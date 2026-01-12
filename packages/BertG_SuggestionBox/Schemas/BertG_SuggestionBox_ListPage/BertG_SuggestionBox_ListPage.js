define("BertG_SuggestionBox_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"size": "large"
				}
			},
			{
				"operation": "remove",
				"name": "DataImportButton"
			},
			{
				"operation": "remove",
				"name": "MenuItem_ImportFromExcel"
			},
			{
				"operation": "remove",
				"name": "OpenLandingDesigner"
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "BertG_Idea"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_BertG_BriefDescription",
							"caption": "#ResourceString(PDS_BertG_BriefDescription)#",
							"dataValueType": 1
						},
						{
							"id": "4a69886f-79c2-7c48-a8b8-6d2d803ccfc1",
							"code": "PDS_BertG_Author",
							"caption": "#ResourceString(PDS_BertG_Author)#",
							"dataValueType": 10
						},
						{
							"id": "340c07ad-9a06-7c14-16d8-89b57565bb06",
							"code": "PDS_BertG_Status",
							"caption": "#ResourceString(PDS_BertG_Status)#",
							"dataValueType": 10
						},
						{
							"id": "e1a9a8d9-6b99-ffb1-9547-747e5ffe9281",
							"code": "PDS_BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1",
							"caption": "#ResourceString(PDS_BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1)#",
							"dataValueType": 32
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "BertG_Idea",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": []
					}
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_BertG_BriefDescription": {
						"modelConfig": {
							"path": "PDS.BertG_BriefDescription"
						}
					},
					"PDS_BertG_Author": {
						"modelConfig": {
							"path": "PDS.BertG_Author"
						}
					},
					"PDS_BertG_Status": {
						"modelConfig": {
							"path": "PDS.BertG_Status"
						}
					},
					"PDS_BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1": {
						"modelConfig": {
							"path": "PDS.BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "BertG_Idea",
					"attributes": {
						"BertG_BriefDescription": {
							"path": "BertG_BriefDescription"
						},
						"BertG_Author": {
							"path": "BertG_Author"
						},
						"BertG_Status": {
							"path": "BertG_Status"
						},
						"BertG_IdeaExpenseBertG_IdeaExpenseIdeaLookupBertG_IdeaExpenseAmountSum9c7dfde1": {
							"type": "Aggregation",
							"path": "[BertG_IdeaExpense:BertG_IdeaExpenseIdeaLookup].BertG_IdeaExpenseAmount",
							"aggregationConfig": {
								"aggregationFunction": "Sum"
							}
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});