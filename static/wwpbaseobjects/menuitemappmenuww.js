/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:24:12.7
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.menuitemappmenuww', false, function () {
   this.ServerClass =  "wwpbaseobjects.menuitemappmenuww" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV59MenuItemFatherId=gx.fn.getIntegerValue("vMENUITEMFATHERID",'.') ;
      this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV59MenuItemFatherId=gx.fn.getIntegerValue("vMENUITEMFATHERID",'.') ;
   };
   this.s142_client=function()
   {
      this.DDO_MENUITEMCAPTIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
   };
   this.e110y2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e120y2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e130y2_client=function()
   {
      return this.executeServerEvent("DDO_MENUITEMCAPTION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e140y2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e180y2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e190y2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21,22,23,24,25,27,28,29,30,31,32,33,34,36,37,38,40,42,43,44];
   this.GXLastCtrlId =44;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",26,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwpbaseobjects.menuitemappmenuww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Menuoptions",27,"vMENUOPTIONS","","Editar menú","MenuOptions","char",0,"px",20,20,"left",null,[],"Menuoptions","MenuOptions",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Update",28,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",29,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(29,30,"MENUITEMID","Id","","MenuItemId","int",0,"px",4,4,"right",null,[],29,"MenuItemId",false,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(43,31,"MENUITEMCAPTION","","","MenuItemCaption","svchar",0,"px",40,40,"left",null,[],43,"MenuItemCaption",true,0,false,false,"Attribute",1,"WWColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 35, 27, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
   var GRIDPAGINATIONBARContainer = this.GRIDPAGINATIONBARContainer;
   GRIDPAGINATIONBARContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDPAGINATIONBARContainer.setProp("Class", "Class", "PaginationBar", "str");
   GRIDPAGINATIONBARContainer.setProp("ShowFirst", "Showfirst", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowPrevious", "Showprevious", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowNext", "Shownext", true, "bool");
   GRIDPAGINATIONBARContainer.setProp("ShowLast", "Showlast", false, "bool");
   GRIDPAGINATIONBARContainer.setProp("PagesToShow", "Pagestoshow", 5, "num");
   GRIDPAGINATIONBARContainer.setProp("PagingButtonsPosition", "Pagingbuttonsposition", "Right", "str");
   GRIDPAGINATIONBARContainer.setProp("PagingCaptionPosition", "Pagingcaptionposition", "Left", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridClass", "Emptygridclass", "PaginationBarEmptyGrid", "str");
   GRIDPAGINATIONBARContainer.setProp("SelectedPage", "Selectedpage", "", "char");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageSelector", "Rowsperpageselector", true, "bool");
   GRIDPAGINATIONBARContainer.setDynProp("RowsPerPageSelectedValue", "Rowsperpageselectedvalue", 10, "num");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageOptions", "Rowsperpageoptions", "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50", "str");
   GRIDPAGINATIONBARContainer.setProp("First", "First", "First", "str");
   GRIDPAGINATIONBARContainer.setProp("Previous", "Previous", "WWP_PagingPreviousCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Next", "Next", "WWP_PagingNextCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("Last", "Last", "Last", "str");
   GRIDPAGINATIONBARContainer.setProp("Caption", "Caption", "Página <CURRENT_PAGE> de <TOTAL_PAGES>", "str");
   GRIDPAGINATIONBARContainer.setProp("EmptyGridCaption", "Emptygridcaption", "WWP_PagingEmptyGridCaption", "str");
   GRIDPAGINATIONBARContainer.setProp("RowsPerPageCaption", "Rowsperpagecaption", "WWP_PagingRowsPerPage", "str");
   GRIDPAGINATIONBARContainer.addV2CFunction('AV52GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV52GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV52GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV62GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV62GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV62GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e110y2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e120y2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_MENUITEMCAPTIONContainer = gx.uc.getNew(this, 39, 27, "BootstrapDropDownOptions", "DDO_MENUITEMCAPTIONContainer", "Ddo_menuitemcaption", "DDO_MENUITEMCAPTION");
   var DDO_MENUITEMCAPTIONContainer = this.DDO_MENUITEMCAPTIONContainer;
   DDO_MENUITEMCAPTIONContainer.setProp("Class", "Class", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MENUITEMCAPTIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_MENUITEMCAPTIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_MENUITEMCAPTIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("DataListProc", "Datalistproc", "WWPBaseObjects.MenuItemAppMenuWWGetFilterData", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_MENUITEMCAPTIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_MENUITEMCAPTIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_MENUITEMCAPTIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_MENUITEMCAPTIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_MENUITEMCAPTIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_MENUITEMCAPTIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_MENUITEMCAPTIONContainer.addV2CFunction('AV50DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_MENUITEMCAPTIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV50DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV50DDO_TitleSettingsIcons); });
   DDO_MENUITEMCAPTIONContainer.addV2CFunction('AV42MenuItemCaptionTitleFilterData', "vMENUITEMCAPTIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_MENUITEMCAPTIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV42MenuItemCaptionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMENUITEMCAPTIONTITLEFILTERDATA",UC.ParentObject.AV42MenuItemCaptionTitleFilterData); });
   DDO_MENUITEMCAPTIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MENUITEMCAPTIONContainer.addEventHandler("OnOptionClicked", this.e130y2_client);
   this.setUserControl(DDO_MENUITEMCAPTIONContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 41, 40, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
   var WORKWITHPLUSUTILITIES1Container = this.WORKWITHPLUSUTILITIES1Container;
   WORKWITHPLUSUTILITIES1Container.setProp("Class", "Class", "", "char");
   WORKWITHPLUSUTILITIES1Container.setProp("Enabled", "Enabled", true, "boolean");
   WORKWITHPLUSUTILITIES1Container.setProp("Width", "Width", "100", "str");
   WORKWITHPLUSUTILITIES1Container.setProp("Height", "Height", "100", "str");
   WORKWITHPLUSUTILITIES1Container.setProp("EnableAutoUpdateFromDocumentTitle", "Enableautoupdatefromdocumenttitle", false, "bool");
   WORKWITHPLUSUTILITIES1Container.setProp("EnableFixObjectFitCover", "Enablefixobjectfitcover", false, "bool");
   WORKWITHPLUSUTILITIES1Container.setProp("EnableFloatingLabels", "Enablefloatinglabels", false, "bool");
   WORKWITHPLUSUTILITIES1Container.setProp("EnableConvertComboToBootstrapSelect", "Enableconvertcombotobootstrapselect", false, "bool");
   WORKWITHPLUSUTILITIES1Container.setProp("CurrentTab_ReturnUrl", "Currenttab_returnurl", "", "char");
   WORKWITHPLUSUTILITIES1Container.setProp("Visible", "Visible", true, "bool");
   WORKWITHPLUSUTILITIES1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(WORKWITHPLUSUTILITIES1Container);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TABLEHEADER",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"BTNINSERT",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[27]={ id:27 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMENUOPTIONS",gxz:"ZV60MenuOptions",gxold:"OV60MenuOptions",gxvar:"AV60MenuOptions",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV60MenuOptions=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60MenuOptions=Value},v2c:function(row){gx.fn.setGridControlValue("vMENUOPTIONS",row || gx.fn.currentGridRowImpl(26),gx.O.AV60MenuOptions,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV60MenuOptions=this.val()},val:function(row){return gx.fn.getGridControlValue("vMENUOPTIONS",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[28]={ id:28 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV16Update",gxold:"OV16Update",gxvar:"AV16Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV16Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV16Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(26),gx.O.AV16Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV16Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[29]={ id:29 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV15Delete",gxold:"OV15Delete",gxvar:"AV15Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV15Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(26),gx.O.AV15Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV15Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[30]={ id:30 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMID",gxz:"Z29MenuItemId",gxold:"O29MenuItemId",gxvar:"A29MenuItemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A29MenuItemId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z29MenuItemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MENUITEMID",row || gx.fn.currentGridRowImpl(26),gx.O.A29MenuItemId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A29MenuItemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MENUITEMID",row || gx.fn.currentGridRowImpl(26),'.')},nac:gx.falseFn};
   GXValidFnc[31]={ id:31 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:26,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMCAPTION",gxz:"Z43MenuItemCaption",gxold:"O43MenuItemCaption",gxvar:"A43MenuItemCaption",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A43MenuItemCaption=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z43MenuItemCaption=Value},v2c:function(row){gx.fn.setGridControlValue("MENUITEMCAPTION",row || gx.fn.currentGridRowImpl(26),gx.O.A43MenuItemCaption,0)},c2v:function(){if(this.val()!==undefined)gx.O.A43MenuItemCaption=this.val()},val:function(row){return gx.fn.getGridControlValue("MENUITEMCAPTION",row || gx.fn.currentGridRowImpl(26))},nac:gx.falseFn};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE",gxz:"ZV45ddo_MenuItemCaptionTitleControlIdToReplace",gxold:"OV45ddo_MenuItemCaptionTitleControlIdToReplace",gxvar:"AV45ddo_MenuItemCaptionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV45ddo_MenuItemCaptionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV45ddo_MenuItemCaptionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE",gx.O.AV45ddo_MenuItemCaptionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV45ddo_MenuItemCaptionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[42]={ id:42 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[43]={ id:43 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMENUITEMCAPTION",gxz:"ZV43TFMenuItemCaption",gxold:"OV43TFMenuItemCaption",gxvar:"AV43TFMenuItemCaption",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV43TFMenuItemCaption=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV43TFMenuItemCaption=Value},v2c:function(){gx.fn.setControlValue("vTFMENUITEMCAPTION",gx.O.AV43TFMenuItemCaption,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV43TFMenuItemCaption=this.val()},val:function(){return gx.fn.getControlValue("vTFMENUITEMCAPTION")},nac:gx.falseFn};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMENUITEMCAPTION_SEL",gxz:"ZV44TFMenuItemCaption_Sel",gxold:"OV44TFMenuItemCaption_Sel",gxvar:"AV44TFMenuItemCaption_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44TFMenuItemCaption_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44TFMenuItemCaption_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFMENUITEMCAPTION_SEL",gx.O.AV44TFMenuItemCaption_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV44TFMenuItemCaption_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFMENUITEMCAPTION_SEL")},nac:gx.falseFn};
   this.ZV60MenuOptions = "" ;
   this.OV60MenuOptions = "" ;
   this.ZV16Update = "" ;
   this.OV16Update = "" ;
   this.ZV15Delete = "" ;
   this.OV15Delete = "" ;
   this.Z29MenuItemId = 0 ;
   this.O29MenuItemId = 0 ;
   this.Z43MenuItemCaption = "" ;
   this.O43MenuItemCaption = "" ;
   this.AV45ddo_MenuItemCaptionTitleControlIdToReplace = "" ;
   this.ZV45ddo_MenuItemCaptionTitleControlIdToReplace = "" ;
   this.OV45ddo_MenuItemCaptionTitleControlIdToReplace = "" ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV43TFMenuItemCaption = "" ;
   this.ZV43TFMenuItemCaption = "" ;
   this.OV43TFMenuItemCaption = "" ;
   this.AV44TFMenuItemCaption_Sel = "" ;
   this.ZV44TFMenuItemCaption_Sel = "" ;
   this.OV44TFMenuItemCaption_Sel = "" ;
   this.AV52GridCurrentPage = 0 ;
   this.AV50DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV45ddo_MenuItemCaptionTitleControlIdToReplace = "" ;
   this.AV13OrderedDsc = false ;
   this.AV43TFMenuItemCaption = "" ;
   this.AV44TFMenuItemCaption_Sel = "" ;
   this.A30MenuItemFatherId = 0 ;
   this.AV60MenuOptions = "" ;
   this.AV16Update = "" ;
   this.AV15Delete = "" ;
   this.A29MenuItemId = 0 ;
   this.A43MenuItemCaption = "" ;
   this.AV69Pgmname = "" ;
   this.AV59MenuItemFatherId = 0 ;
   this.Events = {"e110y2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e120y2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e130y2_client": ["DDO_MENUITEMCAPTION.ONOPTIONCLICKED", true] ,"e140y2_client": ["'DOINSERT'", true] ,"e180y2_client": ["ENTER", true] ,"e190y2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{av:'AV45ddo_MenuItemCaptionTitleControlIdToReplace',fld:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV42MenuItemCaptionTitleFilterData',fld:'vMENUITEMCAPTIONTITLEFILTERDATA',pic:''},{ctrl:'MENUITEMCAPTION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUITEMCAPTION","Title")',ctrl:'MENUITEMCAPTION',prop:'Title'},{av:'AV52GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV62GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]];
   this.EvtParms["START"] = [[{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vTFMENUITEMCAPTION","Visible")',ctrl:'vTFMENUITEMCAPTION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMENUITEMCAPTION_SEL","Visible")',ctrl:'vTFMENUITEMCAPTION_SEL',prop:'Visible'},{av:'this.DDO_MENUITEMCAPTIONContainer.TitleControlIdToReplace',ctrl:'DDO_MENUITEMCAPTION',prop:'TitleControlIdToReplace'},{av:'AV45ddo_MenuItemCaptionTitleControlIdToReplace',fld:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'AV50DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'this.DDO_MENUITEMCAPTIONContainer.FilteredText_set',ctrl:'DDO_MENUITEMCAPTION',prop:'FilteredText_set'},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'this.DDO_MENUITEMCAPTIONContainer.SelectedValue_set',ctrl:'DDO_MENUITEMCAPTION',prop:'SelectedValue_set'},{av:'this.DDO_MENUITEMCAPTIONContainer.SortedStatus',ctrl:'DDO_MENUITEMCAPTION',prop:'SortedStatus'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'AV45ddo_MenuItemCaptionTitleControlIdToReplace',fld:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'AV45ddo_MenuItemCaptionTitleControlIdToReplace',fld:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_MENUITEMCAPTION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'AV45ddo_MenuItemCaptionTitleControlIdToReplace',fld:'vDDO_MENUITEMCAPTIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{av:'this.DDO_MENUITEMCAPTIONContainer.ActiveEventKey',ctrl:'DDO_MENUITEMCAPTION',prop:'ActiveEventKey'},{av:'this.DDO_MENUITEMCAPTIONContainer.FilteredText_get',ctrl:'DDO_MENUITEMCAPTION',prop:'FilteredText_get'},{av:'this.DDO_MENUITEMCAPTIONContainer.SelectedValue_get',ctrl:'DDO_MENUITEMCAPTION',prop:'SelectedValue_get'}],[{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MENUITEMCAPTIONContainer.SortedStatus',ctrl:'DDO_MENUITEMCAPTION',prop:'SortedStatus'},{av:'AV43TFMenuItemCaption',fld:'vTFMENUITEMCAPTION',pic:''},{av:'AV44TFMenuItemCaption_Sel',fld:'vTFMENUITEMCAPTION_SEL',pic:''},{av:'AV42MenuItemCaptionTitleFilterData',fld:'vMENUITEMCAPTIONTITLEFILTERDATA',pic:''},{ctrl:'MENUITEMCAPTION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MENUITEMCAPTION","Title")',ctrl:'MENUITEMCAPTION',prop:'Title'},{av:'AV52GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV62GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A29MenuItemId',fld:'MENUITEMID',pic:'ZZZ9',hsh:true},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'}],[{av:'AV60MenuOptions',fld:'vMENUOPTIONS',pic:''},{av:'gx.fn.getCtrlProperty("vMENUOPTIONS","Link")',ctrl:'vMENUOPTIONS',prop:'Link'},{av:'AV16Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV15Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("MENUITEMCAPTION","Link")',ctrl:'MENUITEMCAPTION',prop:'Link'}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A29MenuItemId',fld:'MENUITEMID',pic:'ZZZ9',hsh:true},{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'}],[{av:'AV59MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'}]];
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV59MenuItemFatherId", "vMENUITEMFATHERID", 0, "int", 4, 0);
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV59MenuItemFatherId", "vMENUITEMFATHERID", 0, "int", 4, 0);
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV59MenuItemFatherId", "vMENUITEMFATHERID", 0, "int", 4, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[42]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[44]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar({rfrVar:"AV69Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"AV59MenuItemFatherId"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.menuitemappmenuww);});
