define("BertG_Page_udldfn9", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "#FFFFFF",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true,
					"visible": true,
					"stretch": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text",
					"visible": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "insert",
				"name": "Button_vw5ohih",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vw5ohih_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": false,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "BertG_Process_072e532",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "IdeaID"
						}
					},
					"clickMode": "default",
					"menuItems": []
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_vwieqrb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vwieqrb_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": false,
					"clicked": {
						"request": "crt.PrintablesRequest",
						"params": {
							"dataSourceName": "BertG_IdeaDS"
						}
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EntityStageProgressBar_muwel8y",
				"values": {
					"type": "crt.EntityStageProgressBar",
					"saveOnChange": true,
					"askUserToChangeSchema": true,
					"entityName": "BertG_Idea",
					"visible": true
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Approval_9wxzljj",
				"values": {
					"type": "crt.Approval",
					"activeColor": "white",
					"inactiveColor": "white",
					"items": [],
					"entityName": "BertG_Idea",
					"approvalEntityName": "SysApproval",
					"visible": true,
					"hiddenWhenNoData": true
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_1gyxbma",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "#ResourceString(Input_1gyxbma_label)#",
					"control": "$BertG_IdeaDS_BertG_Number_bgxcari",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_m0gpgzh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_Owner_9yr4zf1",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaDS_BertG_Owner_9yr4zf1"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_aujc12v",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_aujc12v_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_m0gpgzh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_IdeaAuthor",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_Author_v13psze",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaDS_BertG_Author_v13psze",
					"visible": false,
					"readonly": true,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_vj4o6cg",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_vj4o6cg_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_IdeaAuthor",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_zi0ph95",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "#ResourceString(ComboBox_zi0ph95_label)#",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaDS_BertG_Assignee_zx9324f",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_yl4xcdl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yl4xcdl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_zi0ph95",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_lno5mek",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_Status_wd8ywt6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaDS_BertG_Status_wd8ywt6"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_x12dxss",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_x12dxss_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lno5mek",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fqugr9a",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Label_be7raiv",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_be7raiv_caption)#)#",
					"labelType": "headline-4",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "#181818",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_fqugr9a",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_ljgydmr",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_ExpenseTotal_t68ez29",
					"control": "$BertG_IdeaDS_BertG_ExpenseTotal_t68ez29",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_fqugr9a",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_sye1flu",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "CardContentContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_pvo6wk0",
				"values": {
					"type": "crt.Input",
					"label": "#ResourceString(Input_pvo6wk0_label)#",
					"control": "$BertG_IdeaDS_BertG_BriefDescription_u1ta9gh",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_sye1flu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_xwzxl10",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_Description_kqtu5jb",
					"control": "$BertG_IdeaDS_BertG_Description_kqtu5jb",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "above",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 3
					}
				},
				"parentName": "GridContainer_sye1flu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_dsef81i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_sye1flu",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_x4mpr7j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.BertG_IdeaDS_BertG_Type_8thwua6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaDS_BertG_Type_8thwua6",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_dsef81i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_rk457rk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rk457rk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_x4mpr7j",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_d06uocl",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "primary",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_au18ylr",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_au18ylr_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_d06uocl",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_8q2y5nq",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_au18ylr",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_64yvmp7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_8q2y5nq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_p6b70qg",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_p6b70qg_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "BertG_Entity_IdeaActivity",
							"defaultValues": [
								{
									"attributeName": "BertG_IdeaId",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_64yvmp7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_379y9rb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_379y9rb_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_a1i6iniDS"
						}
					}
				},
				"parentName": "FlexContainer_64yvmp7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_o9w785p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_o9w785p_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_64yvmp7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_ji73d4c",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_ji73d4c_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_a1i6ini"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o9w785p",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ehiiyk5",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ehiiyk5_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "BertG_Entity_IdeaActivity"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_o9w785p",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_wxtq6ix",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_wxtq6ix_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_wxtq6ix_GridDetail_a1i6ini",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_a1i6ini"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_wxtq6ix_SearchValue",
							"GridDetailSearchFilter_wxtq6ix_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_64yvmp7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_7728eyy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_au18ylr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_a1i6ini",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_a1i6ini",
					"primaryColumnName": "GridDetail_a1i6iniDS_Id",
					"columns": [
						{
							"id": "af2b7d64-a8c4-c52d-17c3-517be086a0f1",
							"code": "GridDetail_a1i6iniDS_BertG_Summary",
							"caption": "#ResourceString(GridDetail_a1i6iniDS_BertG_Summary)#",
							"dataValueType": 28
						},
						{
							"id": "68f8a5fb-f261-2886-eb50-0d9b9d169fca",
							"code": "GridDetail_a1i6iniDS_BertG_IdeaActivityOwner",
							"caption": "#ResourceString(GridDetail_a1i6iniDS_BertG_IdeaActivityOwner)#",
							"dataValueType": 10,
							"width": 139.00001525878906
						},
						{
							"id": "a2f4fd3a-22d3-54ec-ae7c-3654e522b6b1",
							"code": "GridDetail_a1i6iniDS_BertG_DueDate",
							"caption": "#ResourceString(GridDetail_a1i6iniDS_BertG_DueDate)#",
							"dataValueType": 8
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_7728eyy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_6re6x94",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_6re6x94_caption)#",
					"iconPosition": "only-text"
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d9xlwp4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "large",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "center",
					"gap": "large",
					"wrap": "wrap"
				},
				"parentName": "TabContainer_6re6x94",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_98dzs9h",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_98dzs9h_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_98dzs9h_Data",
								"schemaName": "BertG_IdeaExpense",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "BertG_IdeaExpense"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "Id"
											},
											"functionType": 2,
											"aggregationType": 1,
											"aggregationEvalType": 2
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "BertG_IdeaExpenseIdeaLookup",
										"relationPath": "BertG_IdeaDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 0,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_98dzs9h_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "rusty-orange",
							"icon": {
								"iconName": "diagram-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true
				},
				"parentName": "FlexContainer_d9xlwp4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "IndicatorWidget_ha0cz4n",
				"values": {
					"type": "crt.IndicatorWidget",
					"config": {
						"title": "#ResourceString(IndicatorWidget_ha0cz4n_title)#",
						"data": {
							"providing": {
								"attribute": "IndicatorWidget_ha0cz4n_Data",
								"schemaName": "BertG_IdeaExpense",
								"filters": {
									"filter": {
										"items": {},
										"logicalOperation": 0,
										"isEnabled": true,
										"filterType": 6,
										"rootSchemaName": "BertG_IdeaExpense"
									},
									"filterAttributes": []
								},
								"aggregation": {
									"column": {
										"orderDirection": 0,
										"orderPosition": -1,
										"isVisible": true,
										"expression": {
											"expressionType": 1,
											"functionArgument": {
												"expressionType": 0,
												"columnPath": "BertG_IdeaExpenseAmount"
											},
											"functionType": 2,
											"aggregationType": 2,
											"aggregationEvalType": 0
										}
									}
								},
								"dependencies": [
									{
										"attributePath": "BertG_IdeaExpenseIdeaLookup",
										"relationPath": "BertG_IdeaDS.Id"
									}
								]
							},
							"formatting": {
								"type": "number",
								"decimalSeparator": ".",
								"decimalPrecision": 2,
								"thousandSeparator": ","
							}
						},
						"text": {
							"template": "#ResourceString(IndicatorWidget_ha0cz4n_template)#",
							"metricMacros": "{0}",
							"fontSizeMode": "large",
							"labelPosition": "above-under"
						},
						"layout": {
							"color": "green",
							"icon": {
								"iconName": "money-icon"
							},
							"border": {
								"hidden": true
							}
						},
						"theme": "without-fill",
						"hideTitle": false
					},
					"visible": true,
					"layoutConfig": {
						"width": 299.69097900390625
					}
				},
				"parentName": "FlexContainer_d9xlwp4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_4e9yfkt",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_4e9yfkt_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_6re6x94",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_7f89tx8",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4e9yfkt",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_t8jjnr7",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7f89tx8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_AddExepnse",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_AddExepnse_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "BertG_IdeaExpense",
							"defaultValues": [
								{
									"attributeName": "BertG_IdeaExpenseIdeaLookup",
									"value": "$Id"
								}
							]
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_t8jjnr7",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_a4ce4q8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_a4ce4q8_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_0vacs39DS"
						}
					}
				},
				"parentName": "FlexContainer_t8jjnr7",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ExpenseDetailMenu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ExpenseDetailMenu_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": [],
					"visible": false
				},
				"parentName": "FlexContainer_t8jjnr7",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_f5p5gd4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_f5p5gd4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_0vacs39"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ExpenseDetailMenu",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_g5sz9gb",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_g5sz9gb_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "BertG_IdeaExpense"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ExpenseDetailMenu",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_jzi8q0n",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_jzi8q0n_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_jzi8q0n_GridDetail_0vacs39",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_0vacs39"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_jzi8q0n_SearchValue",
							"GridDetailSearchFilter_jzi8q0n_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_t8jjnr7",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_roan9yy",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_4e9yfkt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_0vacs39",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"columns": {
							"dragAndDrop": false,
							"resizing": false
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_0vacs39",
					"primaryColumnName": "GridDetail_0vacs39DS_Id",
					"columns": [
						{
							"id": "a0237a50-4ad1-2cc2-ec3a-88f50d395392",
							"code": "GridDetail_0vacs39DS_BertG_IdeaExpenseAmount",
							"caption": "#ResourceString(GridDetail_0vacs39DS_BertG_IdeaExpenseAmount)#",
							"dataValueType": 32
						},
						{
							"id": "85360eef-84c1-d435-3cd8-993f1d5e15b1",
							"code": "GridDetail_0vacs39DS_BertG_IdeaExpenseComment",
							"caption": "#ResourceString(GridDetail_0vacs39DS_BertG_IdeaExpenseComment)#",
							"dataValueType": 30,
							"width": 446.00001525878906
						},
						{
							"id": "a8d62e4a-050f-12fd-0ade-12c781983e3f",
							"code": "GridDetail_0vacs39DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_0vacs39DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "1bd86268-5a97-73e1-7ec7-36665123c4f1",
							"code": "GridDetail_0vacs39DS_CreatedBy",
							"caption": "#ResourceString(GridDetail_0vacs39DS_CreatedBy)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_roan9yy",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabContainer_k2h03d1",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(TabContainer_k2h03d1_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_tnzwltq",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "large"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "primary",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "TabContainer_k2h03d1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_us7cw5t",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.BertG_IdeaSolutionDS_BertG_Solution_9bpadrw",
					"control": "$BertG_IdeaSolutionDS_BertG_Solution_9bpadrw",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "above",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 3
					}
				},
				"parentName": "GridContainer_tnzwltq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_2vgn5bf",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_tnzwltq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_wsdrmbc",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.BertG_IdeaSolutionDS_BertG_Score_cri0orp",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$BertG_IdeaSolutionDS_BertG_Score_cri0orp",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_2vgn5bf",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_gafsw46",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_gafsw46_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_wsdrmbc",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_de58l80",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 3,
						"row": 1,
						"rowSpan": 4
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.BertG_IdeaSolutionDS_BertG_Comment_va45nn2",
					"control": "$BertG_IdeaSolutionDS_BertG_Comment_va45nn2",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_2vgn5bf",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d5pcspa",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "GridContainer_tnzwltq",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"BertG_IdeaDS_BertG_BriefDescription_u1ta9gh": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_BriefDescription"
						}
					},
					"BertG_IdeaDS_BertG_Number_bgxcari": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Number"
						}
					},
					"Parameter_qghqwhf": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Author"
						}
					},
					"BertG_IdeaSolutionDS_BertG_Solution_9bpadrw": {
						"modelConfig": {
							"path": "BertG_IdeaSolutionDS.BertG_Solution"
						}
					},
					"BertG_IdeaSolutionDS_BertG_Score_n4jeof0": {
						"modelConfig": {
							"path": "BertG_IdeaSolutionDS.BertG_Score"
						}
					},
					"BertG_IdeaDS_BertG_Status_2huatk3": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Status"
						}
					},
					"BertG_IdeaDS_BertG_Assignee_zx9324f": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Assignee"
						}
					},
					"BertG_IdeaDS_BertG_Assignee_zx9324f_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"BertG_IdeaSolutionDS_BertG_Score_cri0orp": {
						"modelConfig": {
							"path": "BertG_IdeaSolutionDS.BertG_Score"
						}
					},
					"BertG_IdeaSolutionDS_BertG_Score_cri0orp_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"BertG_IdeaDS_BertG_Author_v13psze": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Author"
						}
					},
					"BertG_IdeaDS_BertG_Author_v13psze_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"BertG_IdeaDS_BertG_Owner_9yr4zf1": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Owner"
						}
					},
					"BertG_IdeaDS_BertG_Owner_9yr4zf1_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"GridDetail_0vacs39": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_0vacs39DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_jzi8q0n_GridDetail_0vacs39",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_0vacs39_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_0vacs39DS_BertG_IdeaExpenseAmount": {
									"modelConfig": {
										"path": "GridDetail_0vacs39DS.BertG_IdeaExpenseAmount"
									}
								},
								"GridDetail_0vacs39DS_BertG_IdeaExpenseComment": {
									"modelConfig": {
										"path": "GridDetail_0vacs39DS.BertG_IdeaExpenseComment"
									}
								},
								"GridDetail_0vacs39DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_0vacs39DS.CreatedOn"
									}
								},
								"GridDetail_0vacs39DS_CreatedBy": {
									"modelConfig": {
										"path": "GridDetail_0vacs39DS.CreatedBy"
									}
								},
								"GridDetail_0vacs39DS_Id": {
									"modelConfig": {
										"path": "GridDetail_0vacs39DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_0vacs39_PredefinedFilter": {
						"value": null
					},
					"BertG_IdeaDS_BertG_Description_kqtu5jb": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Description"
						}
					},
					"BertG_IdeaSolutionDS_BertG_Comment_va45nn2": {
						"modelConfig": {
							"path": "BertG_IdeaSolutionDS.BertG_Comment"
						}
					},
					"BertG_IdeaDS_BertG_ExpenseTotal_t68ez29": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_ExpenseTotal"
						}
					},
					"GridDetail_a1i6ini": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_a1i6iniDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_wxtq6ix_GridDetail_a1i6ini",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_a1i6ini_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_a1i6iniDS_BertG_Summary": {
									"modelConfig": {
										"path": "GridDetail_a1i6iniDS.BertG_Summary"
									}
								},
								"GridDetail_a1i6iniDS_BertG_IdeaActivityOwner": {
									"modelConfig": {
										"path": "GridDetail_a1i6iniDS.BertG_IdeaActivityOwner"
									}
								},
								"GridDetail_a1i6iniDS_BertG_DueDate": {
									"modelConfig": {
										"path": "GridDetail_a1i6iniDS.BertG_DueDate"
									}
								},
								"GridDetail_a1i6iniDS_Id": {
									"modelConfig": {
										"path": "GridDetail_a1i6iniDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_a1i6ini_PredefinedFilter": {
						"value": null
					},
					"BertG_IdeaDS_BertG_Type_8thwua6": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Type"
						}
					},
					"BertG_IdeaDS_BertG_Type_8thwua6_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"BertG_IdeaDS_BertG_Status_wd8ywt6": {
						"modelConfig": {
							"path": "BertG_IdeaDS.BertG_Status"
						}
					},
					"BertG_IdeaDS_BertG_Status_wd8ywt6_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "BertG_IdeaDS",
					"loadingConfig": {},
					"dependencies": {
						"BertG_IdeaSolutionDS": [
							{
								"attributePath": "BertG_IdeaId",
								"relationPath": "BertG_IdeaDS.Id"
							}
						],
						"BertG_IdeaExpenseDS": [
							{
								"attributePath": "BertG_IdeaExpenseIdeaLookup",
								"relationPath": "BertG_IdeaDS.Id"
							}
						],
						"GridDetail_0vacs39DS": [
							{
								"attributePath": "BertG_IdeaExpenseIdeaLookup",
								"relationPath": "BertG_IdeaDS.Id"
							}
						],
						"BertG_Entity_IdeaActivityDS": [
							{
								"attributePath": "BertG_IdeaId",
								"relationPath": "BertG_IdeaDS.Id"
							}
						],
						"GridDetail_a1i6iniDS": [
							{
								"attributePath": "BertG_IdeaId",
								"relationPath": "BertG_IdeaDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"BertG_IdeaDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "BertG_Idea",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					},
					"BertG_IdeaSolutionDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "BertG_IdeaSolution",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": [
											{
												"columnName": "CreatedOn",
												"direction": "desc"
											}
										]
									}
								}
							},
							"allowCopyingRecords": true
						}
					},
					"BertG_IdeaExpenseDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "BertG_IdeaExpense",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": [
											{
												"columnName": "CreatedOn",
												"direction": "desc"
											}
										]
									}
								}
							},
							"allowCopyingRecords": true
						}
					},
					"GridDetail_0vacs39DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "BertG_IdeaExpense",
							"attributes": {
								"BertG_IdeaExpenseAmount": {
									"path": "BertG_IdeaExpenseAmount"
								},
								"BertG_IdeaExpenseComment": {
									"path": "BertG_IdeaExpenseComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"CreatedBy": {
									"path": "CreatedBy"
								}
							}
						}
					},
					"BertG_Entity_IdeaActivityDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "BertG_Entity_IdeaActivity",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": [
											{
												"columnName": "CreatedOn",
												"direction": "desc"
											}
										]
									}
								}
							},
							"allowCopyingRecords": true
						}
					},
					"GridDetail_a1i6iniDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "BertG_Entity_IdeaActivity",
							"attributes": {
								"BertG_Summary": {
									"path": "BertG_Summary"
								},
								"BertG_IdeaActivityOwner": {
									"path": "BertG_IdeaActivityOwner"
								},
								"BertG_DueDate": {
									"path": "BertG_DueDate"
								}
							}
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