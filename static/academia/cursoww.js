/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:14:38.57
*/
gx.evt.autoSkip = false;
gx.define('academia.cursoww', false, function () {
   this.ServerClass =  "academia.cursoww" ;
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
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV69Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s142_client=function()
   {
      this.s172_client();
      if ( this.AV12OrderedBy == 2 )
      {
         this.DDO_CURSOIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_CURSONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_CURSOIDContainer.SortedStatus =  ""  ;
      this.DDO_CURSONOMBREContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFCursoId = gx.num.trunc( 0 ,0) ;
      this.DDO_CURSOIDContainer.FilteredText_set =  ""  ;
      this.AV47TFCursoId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_CURSOIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFCursoNombre =  ''  ;
      this.DDO_CURSONOMBREContainer.FilteredText_set =  ""  ;
      this.AV51TFCursoNombre_Sel =  ''  ;
      this.DDO_CURSONOMBREContainer.SelectedValue_set =  ""  ;
   };
   this.e120a2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130a2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140a2_client=function()
   {
      return this.executeServerEvent("DDO_CURSOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150a2_client=function()
   {
      return this.executeServerEvent("DDO_CURSONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160a2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110a2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170a2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e180a2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e190a2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e230a2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e240a2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,53,54,55,57,59,63,64,65,66,67,68,69];
   this.GXLastCtrlId =69;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.cursoww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(10,47,"CURSOID","","","CursoId","int",0,"px",4,4,"right",null,[],10,"CursoId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(11,48,"CURSONOMBRE","","","CursoNombre","char",0,"px",50,50,"left",null,[],11,"CursoNombre",true,0,false,false,"Attribute",1,"WWColumn");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 52, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV55GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV55GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV55GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV56GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV56GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV56GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120a2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130a2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_CURSOIDContainer = gx.uc.getNew(this, 56, 35, "BootstrapDropDownOptions", "DDO_CURSOIDContainer", "Ddo_cursoid", "DDO_CURSOID");
   var DDO_CURSOIDContainer = this.DDO_CURSOIDContainer;
   DDO_CURSOIDContainer.setProp("Class", "Class", "", "char");
   DDO_CURSOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_CURSOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_CURSOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_CURSOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_CURSOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_CURSOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_CURSOIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_CURSOIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_CURSOIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_CURSOIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_CURSOIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_CURSOIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_CURSOIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_CURSOIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_CURSOIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_CURSOIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_CURSOIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_CURSOIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_CURSOIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_CURSOIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_CURSOIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_CURSOIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_CURSOIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_CURSOIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_CURSOIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_CURSOIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_CURSOIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_CURSOIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_CURSOIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_CURSOIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_CURSOIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_CURSOIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_CURSOIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_CURSOIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_CURSOIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_CURSOIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_CURSOIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_CURSOIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_CURSOIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_CURSOIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_CURSOIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_CURSOIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_CURSOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_CURSOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_CURSOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_CURSOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_CURSOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_CURSOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_CURSOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_CURSOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_CURSOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_CURSOIDContainer.addV2CFunction('AV53DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV53DDO_TitleSettingsIcons); });
   DDO_CURSOIDContainer.addV2CFunction('AV45CursoIdTitleFilterData', "vCURSOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45CursoIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSOIDTITLEFILTERDATA",UC.ParentObject.AV45CursoIdTitleFilterData); });
   DDO_CURSOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSOIDContainer.addEventHandler("OnOptionClicked", this.e140a2_client);
   this.setUserControl(DDO_CURSOIDContainer);
   this.DDO_CURSONOMBREContainer = gx.uc.getNew(this, 58, 35, "BootstrapDropDownOptions", "DDO_CURSONOMBREContainer", "Ddo_cursonombre", "DDO_CURSONOMBRE");
   var DDO_CURSONOMBREContainer = this.DDO_CURSONOMBREContainer;
   DDO_CURSONOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_CURSONOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_CURSONOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_CURSONOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_CURSONOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_CURSONOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_CURSONOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_CURSONOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_CURSONOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_CURSONOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_CURSONOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_CURSONOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_CURSONOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_CURSONOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_CURSONOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_CURSONOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_CURSONOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_CURSONOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_CURSONOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_CURSONOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_CURSONOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_CURSONOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_CURSONOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_CURSONOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_CURSONOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.CursoWWGetFilterData", "str");
   DDO_CURSONOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_CURSONOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_CURSONOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_CURSONOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_CURSONOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_CURSONOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_CURSONOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_CURSONOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_CURSONOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_CURSONOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_CURSONOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_CURSONOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_CURSONOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_CURSONOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_CURSONOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_CURSONOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_CURSONOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_CURSONOMBREContainer.addV2CFunction('AV53DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV53DDO_TitleSettingsIcons); });
   DDO_CURSONOMBREContainer.addV2CFunction('AV49CursoNombreTitleFilterData', "vCURSONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49CursoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSONOMBRETITLEFILTERDATA",UC.ParentObject.AV49CursoNombreTitleFilterData); });
   DDO_CURSONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSONOMBREContainer.addEventHandler("OnOptionClicked", this.e150a2_client);
   this.setUserControl(DDO_CURSONOMBREContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 60, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 61, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
   var INNEWWINDOW1Container = this.INNEWWINDOW1Container;
   INNEWWINDOW1Container.setProp("Class", "Class", "", "char");
   INNEWWINDOW1Container.setProp("Enabled", "Enabled", true, "boolean");
   INNEWWINDOW1Container.setDynProp("Width", "Width", "50", "str");
   INNEWWINDOW1Container.setDynProp("Height", "Height", "50", "str");
   INNEWWINDOW1Container.setProp("Name", "Name", "", "str");
   INNEWWINDOW1Container.setDynProp("Target", "Target", "", "str");
   INNEWWINDOW1Container.setProp("Fullscreen", "Fullscreen", false, "bool");
   INNEWWINDOW1Container.setProp("Location", "Location", true, "bool");
   INNEWWINDOW1Container.setProp("MenuBar", "Menubar", true, "bool");
   INNEWWINDOW1Container.setProp("Resizable", "Resizable", true, "bool");
   INNEWWINDOW1Container.setProp("Scrollbars", "Scrollbars", true, "bool");
   INNEWWINDOW1Container.setProp("TitleBar", "Titlebar", true, "bool");
   INNEWWINDOW1Container.setProp("ToolBar", "Toolbar", true, "bool");
   INNEWWINDOW1Container.setProp("directories", "Directories", true, "bool");
   INNEWWINDOW1Container.setProp("status", "Status", true, "bool");
   INNEWWINDOW1Container.setProp("copyhistory", "Copyhistory", true, "bool");
   INNEWWINDOW1Container.setProp("top", "Top", "5", "str");
   INNEWWINDOW1Container.setProp("left", "Left", "5", "str");
   INNEWWINDOW1Container.setProp("fitscreen", "Fitscreen", false, "bool");
   INNEWWINDOW1Container.setProp("RefreshParentOnClose", "Refreshparentonclose", false, "bool");
   INNEWWINDOW1Container.setProp("Targets", "Targets", '', "str");
   INNEWWINDOW1Container.setProp("Visible", "Visible", true, "bool");
   INNEWWINDOW1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(INNEWWINDOW1Container);
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 62, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
   var DDO_GRIDCOLUMNSSELECTORContainer = this.DDO_GRIDCOLUMNSSELECTORContainer;
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Class", "Class", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Icon", "Icon", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Caption", "Caption", "Selecciona columnas", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Tooltip", "Tooltip", "WWP_EditColumnsTooltip", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Cls", "Cls", "ColumnsSelector hidden-xs", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridColumnsSelector", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_GRIDCOLUMNSSELECTORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeSortASC", "Includesortasc", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeSortDSC", "Includesortdsc", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeFilter", "Includefilter", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeDataList", "Includedatalist", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("FixedFilters", "Fixedfilters", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SortASC", "Sortasc", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SortDSC", "Sortdsc", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SearchButtonText", "Searchbuttontext", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("UpdateButtonText", "Updatebuttontext", "WWP_ColumnsSelectorButton", "str");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV53DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV53DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e160a2_client);
   this.setUserControl(DDO_GRIDCOLUMNSSELECTORContainer);
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 29, 0, "BootstrapDropDownOptions", "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
   var DDO_MANAGEFILTERSContainer = this.DDO_MANAGEFILTERSContainer;
   DDO_MANAGEFILTERSContainer.setProp("Class", "Class", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_MANAGEFILTERSContainer.setDynProp("Icon", "Icon", "", "str");
   DDO_MANAGEFILTERSContainer.setProp("Caption", "Caption", "", "str");
   DDO_MANAGEFILTERSContainer.setProp("Tooltip", "Tooltip", "Manage filters", "str");
   DDO_MANAGEFILTERSContainer.setProp("Cls", "Cls", "ManageFilters", "str");
   DDO_MANAGEFILTERSContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MANAGEFILTERSContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "Regular", "str");
   DDO_MANAGEFILTERSContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_MANAGEFILTERSContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MANAGEFILTERSContainer.setProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MANAGEFILTERSContainer.setProp("IncludeSortASC", "Includesortasc", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("IncludeSortDSC", "Includesortdsc", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("IncludeFilter", "Includefilter", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("IncludeDataList", "Includedatalist", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_MANAGEFILTERSContainer.setProp("FixedFilters", "Fixedfilters", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_MANAGEFILTERSContainer.setProp("SortASC", "Sortasc", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SortDSC", "Sortdsc", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SearchButtonText", "Searchbuttontext", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("UpdateButtonText", "Updatebuttontext", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_MANAGEFILTERSContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_MANAGEFILTERSContainer.DropDownOptionsTitleSettingsIcons = '';
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV43ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV43ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV43ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110a2_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
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
   GXValidFnc[19]={ id: 19, fld:"BTNEXPORT",grid:0};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"BTNEXPORTREPORT",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"BTNEDITCOLUMNS",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[28]={ id: 28, fld:"HTML_MANAGEFILTERS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vFILTERFULLTEXT",gxz:"ZV15FilterFullText",gxold:"OV15FilterFullText",gxvar:"AV15FilterFullText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15FilterFullText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15FilterFullText=Value},v2c:function(){gx.fn.setControlValue("vFILTERFULLTEXT",gx.O.AV15FilterFullText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15FilterFullText=this.val()},val:function(){return gx.fn.getControlValue("vFILTERFULLTEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV59Update",gxold:"OV59Update",gxvar:"AV59Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV59Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV59Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV59Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV60Delete",gxold:"OV60Delete",gxvar:"AV60Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV60Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV60Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV60Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CURSOID",row || gx.fn.currentGridRowImpl(44),gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CURSOID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[57]={ id:57 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_CursoIdTitleControlIdToReplace",gxold:"OV48ddo_CursoIdTitleControlIdToReplace",gxvar:"AV48ddo_CursoIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_CursoIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_CursoIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_CursoIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_CursoIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_CursoNombreTitleControlIdToReplace",gxold:"OV52ddo_CursoNombreTitleControlIdToReplace",gxvar:"AV52ddo_CursoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_CursoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_CursoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV52ddo_CursoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_CursoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSOID",gxz:"ZV46TFCursoId",gxold:"OV46TFCursoId",gxvar:"AV46TFCursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFCursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFCursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFCURSOID",gx.O.AV46TFCursoId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFCursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFCURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSOID_TO",gxz:"ZV47TFCursoId_To",gxold:"OV47TFCursoId_To",gxvar:"AV47TFCursoId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFCursoId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFCursoId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFCURSOID_TO",gx.O.AV47TFCursoId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFCursoId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFCURSOID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE",gxz:"ZV50TFCursoNombre",gxold:"OV50TFCursoNombre",gxvar:"AV50TFCursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFCursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFCursoNombre=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE",gx.O.AV50TFCursoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFCursoNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE_SEL",gxz:"ZV51TFCursoNombre_Sel",gxold:"OV51TFCursoNombre_Sel",gxvar:"AV51TFCursoNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFCursoNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFCursoNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE_SEL",gx.O.AV51TFCursoNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFCursoNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE_SEL")},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV59Update = "" ;
   this.OV59Update = "" ;
   this.ZV60Delete = "" ;
   this.OV60Delete = "" ;
   this.Z10CursoId = 0 ;
   this.O10CursoId = 0 ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.AV48ddo_CursoIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_CursoIdTitleControlIdToReplace = "" ;
   this.OV48ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV52ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.ZV52ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.OV52ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFCursoId = 0 ;
   this.ZV46TFCursoId = 0 ;
   this.OV46TFCursoId = 0 ;
   this.AV47TFCursoId_To = 0 ;
   this.ZV47TFCursoId_To = 0 ;
   this.OV47TFCursoId_To = 0 ;
   this.AV50TFCursoNombre = "" ;
   this.ZV50TFCursoNombre = "" ;
   this.OV50TFCursoNombre = "" ;
   this.AV51TFCursoNombre_Sel = "" ;
   this.ZV51TFCursoNombre_Sel = "" ;
   this.OV51TFCursoNombre_Sel = "" ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV55GridCurrentPage = 0 ;
   this.AV53DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV52ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFCursoId = 0 ;
   this.AV47TFCursoId_To = 0 ;
   this.AV50TFCursoNombre = "" ;
   this.AV51TFCursoNombre_Sel = "" ;
   this.AV59Update = "" ;
   this.AV60Delete = "" ;
   this.A10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV69Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120a2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130a2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140a2_client": ["DDO_CURSOID.ONOPTIONCLICKED", true] ,"e150a2_client": ["DDO_CURSONOMBRE.ONOPTIONCLICKED", true] ,"e160a2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110a2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e170a2_client": ["'DOINSERT'", true] ,"e180a2_client": ["'DOEXPORT'", true] ,"e190a2_client": ["'DOEXPORTREPORT'", true] ,"e230a2_client": ["ENTER", true] ,"e240a2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV49CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{ctrl:'CURSOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{av:'AV55GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV56GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSOID","Visible")',ctrl:'vTFCURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSOID_TO","Visible")',ctrl:'vTFCURSOID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE","Visible")',ctrl:'vTFCURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE_SEL","Visible")',ctrl:'vTFCURSONOMBRE_SEL',prop:'Visible'},{av:'this.DDO_CURSOIDContainer.TitleControlIdToReplace',ctrl:'DDO_CURSOID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_CURSONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV53DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_CURSOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_CURSOIDContainer.ActiveEventKey',ctrl:'DDO_CURSOID',prop:'ActiveEventKey'},{av:'this.DDO_CURSOIDContainer.FilteredText_get',ctrl:'DDO_CURSOID',prop:'FilteredText_get'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_get',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV45CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV49CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{ctrl:'CURSOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{av:'AV55GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV56GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_CURSONOMBREContainer.ActiveEventKey',ctrl:'DDO_CURSONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_CURSONOMBREContainer.FilteredText_get',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_get',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'AV45CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV49CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{ctrl:'CURSOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{av:'AV55GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV56GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9',hsh:true}],[{av:'AV59Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV60Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV49CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{ctrl:'CURSOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{av:'AV55GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV56GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV45CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV49CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{ctrl:'CURSOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{av:'AV55GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV56GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV69Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV47TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV50TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV51TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV69Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[57]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV69Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.cursoww);});
