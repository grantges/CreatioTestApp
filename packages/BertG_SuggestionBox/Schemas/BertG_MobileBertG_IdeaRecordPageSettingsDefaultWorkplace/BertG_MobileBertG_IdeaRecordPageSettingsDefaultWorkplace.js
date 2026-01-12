[
	{
		"operation": "insert",
		"name": "settings",
		"values": {
			"entitySchemaName": "BertG_Idea",
			"details": [],
			"columnSets": [],
			"localizableStrings": {
				"SocialMessageDetailCaptionBertG_Idea_caption": "Feed",
				"AttachmentsDetailCaptionBertG_Idea_caption": "Attachments",
				"primaryColumnSetBertG_Idea_caption": "General information"
			},
			"settingsType": "RecordPage",
			"operation": "insert"
		}
	},
	{
		"operation": "insert",
		"name": "SocialMessageDetailV2StandardDetail",
		"values": {
			"caption": "SocialMessageDetailCaptionBertG_Idea_caption",
			"entitySchemaName": "SocialMessage",
			"showForVisibleModule": true,
			"filter": {
				"detailColumn": "EntityId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "AttachmentsFlutterDetailStandardDetail",
		"values": {
			"caption": "AttachmentsDetailCaptionBertG_Idea_caption",
			"entitySchemaName": "SysFile",
			"filter": {
				"detailColumn": "RecordId",
				"masterColumn": "Id"
			},
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "primaryColumnSet",
		"values": {
			"items": [],
			"rows": 1,
			"entitySchemaName": "BertG_Idea",
			"caption": "primaryColumnSetBertG_Idea_caption",
			"position": 0,
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "columnSets",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "6b8dd459-cfaf-4a3b-b665-b271f5752f01",
		"values": {
			"row": 0,
			"content": "Brief Description",
			"columnName": "BertG_BriefDescription",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 0
	},
	{
		"operation": "insert",
		"name": "82bf5dd8-a031-42a9-b347-261048d4e64c",
		"values": {
			"row": 1,
			"content": "Description",
			"columnName": "BertG_Description",
			"dataValueType": 1,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 1
	},
	{
		"operation": "insert",
		"name": "e852d5ea-9f81-4e38-9190-02b91fb49ee6",
		"values": {
			"row": 2,
			"content": "Assignee",
			"columnName": "BertG_Assignee",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 2
	},
	{
		"operation": "insert",
		"name": "da54136e-3918-48ea-b014-95fbf8ca9fab",
		"values": {
			"row": 3,
			"content": "Type",
			"columnName": "BertG_Type",
			"dataValueType": 10,
			"operation": "insert"
		},
		"parentName": "primaryColumnSet",
		"propertyName": "items",
		"index": 3
	}
]