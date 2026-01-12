{
	"SyncOptions": {
		"SysSettingsImportConfig": [],
		"ModelDataImportConfig": [
			{
				"Name": "BertG_Idea",
				"SyncColumns": [
					"BertG_BriefDescription",
					"BertG_Description",
					"BertG_Assignee",
					"BertG_Type"
				]
			},
			{
				"Name": "BertG_IdeaStatus",
				"SyncColumns": []
			},
			{
				"Name": "Contact",
				"SyncColumns": []
			},
			{
				"Name": "SocialMessage",
				"SyncColumns": [
					"EntityId"
				]
			},
			{
				"Name": "SysFile",
				"SyncColumns": [
					"RecordId",
					"Name",
					"Type",
					"Data",
					"Size",
					"RecordSchemaName"
				],
				"QueryFilter": {
					"items": {
						"DesignerDefaultRecordSchemaNameFilter": {
							"filterType": 4,
							"comparisonType": 3,
							"isEnabled": true,
							"trimDateTimeParameterToDate": false,
							"leftExpression": {
								"expressionType": 0,
								"columnPath": "RecordSchemaName"
							},
							"rightExpressions": [
								{
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "BertG_Idea"
									}
								}
							]
						}
					},
					"logicalOperation": 0,
					"isEnabled": true,
					"filterType": 6
				}
			},
			{
				"Name": "FileGroup",
				"SyncColumns": []
			},
			{
				"Name": "BertG_IdeaType",
				"SyncColumns": []
			}
		]
	},
	"Modules": {
		"BertG_Idea": {
			"Group": "main",
			"Model": "BertG_Idea",
			"Position": 10,
			"isStartPage": false,
			"Title": "BertG_IdeaSectionTitle",
			"Hidden": false,
			"sysModuleId": "5f4edc56-b39c-4596-b1bd-6be0f535c8f6",
			"screens": {
				"start": {
					"schemaName": "BertG_MobileBertG_IdeaGridPageSettingsDefaultWorkplace"
				},
				"edit": {
					"schemaName": "BertG_MobileBertG_IdeaRecordPageSettingsDefaultWorkplace"
				}
			}
		}
	},
	"Models": {
		"BertG_Idea": {
			"RequiredModels": [
				"BertG_Idea",
				"BertG_IdeaStatus",
				"Contact",
				"SocialMessage",
				"SysFile",
				"FileGroup",
				"BertG_IdeaType"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"BertG_MobileBertG_IdeaActionsSettingsDefaultWorkplace",
				"BertG_MobileBertG_IdeaGridPageSettingsDefaultWorkplace",
				"BertG_MobileBertG_IdeaRecordPageSettingsDefaultWorkplace"
			]
		},
		"SocialMessage": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"SysFile": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		}
	},
	"ModuleGroups": {
		"main": {}
	},
	"UseUTC": true
}