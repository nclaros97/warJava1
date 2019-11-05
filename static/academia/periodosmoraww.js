/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:23:29.6
*/
gx.evt.autoSkip = false;
gx.define('academia.periodosmoraww', false, function () {
   this.ServerClass =  "academia.periodosmoraww" ;
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
      this.AV75Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV75Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s142_client=function()
   {
      this.s172_client();
      if ( this.AV12OrderedBy == 2 )
      {
         this.DDO_PERIODOSMORAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_PERIODOSMORAIDContainer.SortedStatus =  ""  ;
      this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus =  ""  ;
      this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFPeriodosMoraId = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAIDContainer.FilteredText_set =  ""  ;
      this.AV47TFPeriodosMoraId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPeriodosMoraDescripcion =  ''  ;
      this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_set =  ""  ;
      this.AV51TFPeriodosMoraDescripcion_Sel =  ''  ;
      this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_set =  ""  ;
      this.AV54TFPeriodosMoraPeriodoNumero = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_set =  ""  ;
      this.AV55TFPeriodosMoraPeriodoNumero_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120w2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130w2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140w2_client=function()
   {
      return this.executeServerEvent("DDO_PERIODOSMORAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150w2_client=function()
   {
      return this.executeServerEvent("DDO_PERIODOSMORADESCRIPCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160w2_client=function()
   {
      return this.executeServerEvent("DDO_PERIODOSMORAPERIODONUMERO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170w2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110w2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180w2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e190w2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e200w2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e240w2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e250w2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,58,60,62,66,67,68,69,70,71,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.periodosmoraww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(36,47,"PERIODOSMORAID","","","PeriodosMoraId","int",0,"px",4,4,"right",null,[],36,"PeriodosMoraId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(67,48,"PERIODOSMORADESCRIPCION","","","PeriodosMoraDescripcion","svchar",0,"px",40,40,"left",null,[],67,"PeriodosMoraDescripcion",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(68,49,"PERIODOSMORAPERIODONUMERO","","","PeriodosMoraPeriodoNumero","int",0,"px",4,4,"right",null,[],68,"PeriodosMoraPeriodoNumero",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 53, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV59GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV59GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV59GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV60GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV60GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV60GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120w2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130w2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_PERIODOSMORAIDContainer = gx.uc.getNew(this, 57, 35, "BootstrapDropDownOptions", "DDO_PERIODOSMORAIDContainer", "Ddo_periodosmoraid", "DDO_PERIODOSMORAID");
   var DDO_PERIODOSMORAIDContainer = this.DDO_PERIODOSMORAIDContainer;
   DDO_PERIODOSMORAIDContainer.setProp("Class", "Class", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PERIODOSMORAIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_PERIODOSMORAIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_PERIODOSMORAIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PERIODOSMORAIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PERIODOSMORAIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PERIODOSMORAIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PERIODOSMORAIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PERIODOSMORAIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PERIODOSMORAIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PERIODOSMORAIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PERIODOSMORAIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PERIODOSMORAIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PERIODOSMORAIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PERIODOSMORAIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PERIODOSMORAIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PERIODOSMORAIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PERIODOSMORAIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PERIODOSMORAIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PERIODOSMORAIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PERIODOSMORAIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PERIODOSMORAIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PERIODOSMORAIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PERIODOSMORAIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PERIODOSMORAIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PERIODOSMORAIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PERIODOSMORAIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PERIODOSMORAIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PERIODOSMORAIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PERIODOSMORAIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PERIODOSMORAIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PERIODOSMORAIDContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PERIODOSMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_PERIODOSMORAIDContainer.addV2CFunction('AV45PeriodosMoraIdTitleFilterData', "vPERIODOSMORAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PERIODOSMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45PeriodosMoraIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPERIODOSMORAIDTITLEFILTERDATA",UC.ParentObject.AV45PeriodosMoraIdTitleFilterData); });
   DDO_PERIODOSMORAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PERIODOSMORAIDContainer.addEventHandler("OnOptionClicked", this.e140w2_client);
   this.setUserControl(DDO_PERIODOSMORAIDContainer);
   this.DDO_PERIODOSMORADESCRIPCIONContainer = gx.uc.getNew(this, 59, 35, "BootstrapDropDownOptions", "DDO_PERIODOSMORADESCRIPCIONContainer", "Ddo_periodosmoradescripcion", "DDO_PERIODOSMORADESCRIPCION");
   var DDO_PERIODOSMORADESCRIPCIONContainer = this.DDO_PERIODOSMORADESCRIPCIONContainer;
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Class", "Class", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.PeriodosMoraWWGetFilterData", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PERIODOSMORADESCRIPCIONContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PERIODOSMORADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_PERIODOSMORADESCRIPCIONContainer.addV2CFunction('AV49PeriodosMoraDescripcionTitleFilterData', "vPERIODOSMORADESCRIPCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PERIODOSMORADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PeriodosMoraDescripcionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPERIODOSMORADESCRIPCIONTITLEFILTERDATA",UC.ParentObject.AV49PeriodosMoraDescripcionTitleFilterData); });
   DDO_PERIODOSMORADESCRIPCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PERIODOSMORADESCRIPCIONContainer.addEventHandler("OnOptionClicked", this.e150w2_client);
   this.setUserControl(DDO_PERIODOSMORADESCRIPCIONContainer);
   this.DDO_PERIODOSMORAPERIODONUMEROContainer = gx.uc.getNew(this, 61, 35, "BootstrapDropDownOptions", "DDO_PERIODOSMORAPERIODONUMEROContainer", "Ddo_periodosmoraperiodonumero", "DDO_PERIODOSMORAPERIODONUMERO");
   var DDO_PERIODOSMORAPERIODONUMEROContainer = this.DDO_PERIODOSMORAPERIODONUMEROContainer;
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Class", "Class", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Icon", "Icon", "", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Caption", "Caption", "", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PERIODOSMORAPERIODONUMEROContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PERIODOSMORAPERIODONUMEROContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_PERIODOSMORAPERIODONUMEROContainer.addV2CFunction('AV53PeriodosMoraPeriodoNumeroTitleFilterData', "vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PERIODOSMORAPERIODONUMEROContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53PeriodosMoraPeriodoNumeroTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA",UC.ParentObject.AV53PeriodosMoraPeriodoNumeroTitleFilterData); });
   DDO_PERIODOSMORAPERIODONUMEROContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PERIODOSMORAPERIODONUMEROContainer.addEventHandler("OnOptionClicked", this.e160w2_client);
   this.setUserControl(DDO_PERIODOSMORAPERIODONUMEROContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 63, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 64, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e170w2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110w2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV63Update",gxold:"OV63Update",gxvar:"AV63Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV63Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV63Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV63Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV64Delete",gxold:"OV64Delete",gxvar:"AV64Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV64Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV64Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV64Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOSMORAID",gxz:"Z36PeriodosMoraId",gxold:"O36PeriodosMoraId",gxvar:"A36PeriodosMoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z36PeriodosMoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERIODOSMORAID",row || gx.fn.currentGridRowImpl(44),gx.O.A36PeriodosMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERIODOSMORAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOSMORADESCRIPCION",gxz:"Z67PeriodosMoraDescripcion",gxold:"O67PeriodosMoraDescripcion",gxvar:"A67PeriodosMoraDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A67PeriodosMoraDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z67PeriodosMoraDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("PERIODOSMORADESCRIPCION",row || gx.fn.currentGridRowImpl(44),gx.O.A67PeriodosMoraDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A67PeriodosMoraDescripcion=this.val()},val:function(row){return gx.fn.getGridControlValue("PERIODOSMORADESCRIPCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOSMORAPERIODONUMERO",gxz:"Z68PeriodosMoraPeriodoNumero",gxold:"O68PeriodosMoraPeriodoNumero",gxvar:"A68PeriodosMoraPeriodoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A68PeriodosMoraPeriodoNumero=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z68PeriodosMoraPeriodoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERIODOSMORAPERIODONUMERO",row || gx.fn.currentGridRowImpl(44),gx.O.A68PeriodosMoraPeriodoNumero,0)},c2v:function(){if(this.val()!==undefined)gx.O.A68PeriodosMoraPeriodoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERIODOSMORAPERIODONUMERO",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_PeriodosMoraIdTitleControlIdToReplace",gxold:"OV48ddo_PeriodosMoraIdTitleControlIdToReplace",gxvar:"AV48ddo_PeriodosMoraIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_PeriodosMoraIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_PeriodosMoraIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_PeriodosMoraIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_PeriodosMoraIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace",gxold:"OV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace",gxvar:"AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE",gx.O.AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace",gxold:"OV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace",gxvar:"AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAID",gxz:"ZV46TFPeriodosMoraId",gxold:"OV46TFPeriodosMoraId",gxvar:"AV46TFPeriodosMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFPeriodosMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFPeriodosMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAID",gx.O.AV46TFPeriodosMoraId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFPeriodosMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAID",'.')},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAID_TO",gxz:"ZV47TFPeriodosMoraId_To",gxold:"OV47TFPeriodosMoraId_To",gxvar:"AV47TFPeriodosMoraId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFPeriodosMoraId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFPeriodosMoraId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAID_TO",gx.O.AV47TFPeriodosMoraId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFPeriodosMoraId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORADESCRIPCION",gxz:"ZV50TFPeriodosMoraDescripcion",gxold:"OV50TFPeriodosMoraDescripcion",gxvar:"AV50TFPeriodosMoraDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPeriodosMoraDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPeriodosMoraDescripcion=Value},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORADESCRIPCION",gx.O.AV50TFPeriodosMoraDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPeriodosMoraDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vTFPERIODOSMORADESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORADESCRIPCION_SEL",gxz:"ZV51TFPeriodosMoraDescripcion_Sel",gxold:"OV51TFPeriodosMoraDescripcion_Sel",gxvar:"AV51TFPeriodosMoraDescripcion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPeriodosMoraDescripcion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPeriodosMoraDescripcion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORADESCRIPCION_SEL",gx.O.AV51TFPeriodosMoraDescripcion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPeriodosMoraDescripcion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPERIODOSMORADESCRIPCION_SEL")},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAPERIODONUMERO",gxz:"ZV54TFPeriodosMoraPeriodoNumero",gxold:"OV54TFPeriodosMoraPeriodoNumero",gxvar:"AV54TFPeriodosMoraPeriodoNumero",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFPeriodosMoraPeriodoNumero=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFPeriodosMoraPeriodoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAPERIODONUMERO",gx.O.AV54TFPeriodosMoraPeriodoNumero,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFPeriodosMoraPeriodoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAPERIODONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAPERIODONUMERO_TO",gxz:"ZV55TFPeriodosMoraPeriodoNumero_To",gxold:"OV55TFPeriodosMoraPeriodoNumero_To",gxvar:"AV55TFPeriodosMoraPeriodoNumero_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFPeriodosMoraPeriodoNumero_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFPeriodosMoraPeriodoNumero_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAPERIODONUMERO_TO",gx.O.AV55TFPeriodosMoraPeriodoNumero_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFPeriodosMoraPeriodoNumero_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAPERIODONUMERO_TO",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV63Update = "" ;
   this.OV63Update = "" ;
   this.ZV64Delete = "" ;
   this.OV64Delete = "" ;
   this.Z36PeriodosMoraId = 0 ;
   this.O36PeriodosMoraId = 0 ;
   this.Z67PeriodosMoraDescripcion = "" ;
   this.O67PeriodosMoraDescripcion = "" ;
   this.Z68PeriodosMoraPeriodoNumero = 0 ;
   this.O68PeriodosMoraPeriodoNumero = 0 ;
   this.AV48ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.OV48ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace = "" ;
   this.ZV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace = "" ;
   this.OV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace = "" ;
   this.ZV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace = "" ;
   this.OV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPeriodosMoraId = 0 ;
   this.ZV46TFPeriodosMoraId = 0 ;
   this.OV46TFPeriodosMoraId = 0 ;
   this.AV47TFPeriodosMoraId_To = 0 ;
   this.ZV47TFPeriodosMoraId_To = 0 ;
   this.OV47TFPeriodosMoraId_To = 0 ;
   this.AV50TFPeriodosMoraDescripcion = "" ;
   this.ZV50TFPeriodosMoraDescripcion = "" ;
   this.OV50TFPeriodosMoraDescripcion = "" ;
   this.AV51TFPeriodosMoraDescripcion_Sel = "" ;
   this.ZV51TFPeriodosMoraDescripcion_Sel = "" ;
   this.OV51TFPeriodosMoraDescripcion_Sel = "" ;
   this.AV54TFPeriodosMoraPeriodoNumero = 0 ;
   this.ZV54TFPeriodosMoraPeriodoNumero = 0 ;
   this.OV54TFPeriodosMoraPeriodoNumero = 0 ;
   this.AV55TFPeriodosMoraPeriodoNumero_To = 0 ;
   this.ZV55TFPeriodosMoraPeriodoNumero_To = 0 ;
   this.OV55TFPeriodosMoraPeriodoNumero_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV59GridCurrentPage = 0 ;
   this.AV57DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPeriodosMoraId = 0 ;
   this.AV47TFPeriodosMoraId_To = 0 ;
   this.AV50TFPeriodosMoraDescripcion = "" ;
   this.AV51TFPeriodosMoraDescripcion_Sel = "" ;
   this.AV54TFPeriodosMoraPeriodoNumero = 0 ;
   this.AV55TFPeriodosMoraPeriodoNumero_To = 0 ;
   this.AV63Update = "" ;
   this.AV64Delete = "" ;
   this.A36PeriodosMoraId = 0 ;
   this.A67PeriodosMoraDescripcion = "" ;
   this.A68PeriodosMoraPeriodoNumero = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV75Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120w2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130w2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140w2_client": ["DDO_PERIODOSMORAID.ONOPTIONCLICKED", true] ,"e150w2_client": ["DDO_PERIODOSMORADESCRIPCION.ONOPTIONCLICKED", true] ,"e160w2_client": ["DDO_PERIODOSMORAPERIODONUMERO.ONOPTIONCLICKED", true] ,"e170w2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110w2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e180w2_client": ["'DOINSERT'", true] ,"e190w2_client": ["'DOEXPORT'", true] ,"e200w2_client": ["'DOEXPORTREPORT'", true] ,"e240w2_client": ["ENTER", true] ,"e250w2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAID","Visible")',ctrl:'vTFPERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAID_TO","Visible")',ctrl:'vTFPERIODOSMORAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORADESCRIPCION","Visible")',ctrl:'vTFPERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORADESCRIPCION_SEL","Visible")',ctrl:'vTFPERIODOSMORADESCRIPCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAPERIODONUMERO","Visible")',ctrl:'vTFPERIODOSMORAPERIODONUMERO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAPERIODONUMERO_TO","Visible")',ctrl:'vTFPERIODOSMORAPERIODONUMERO_TO',prop:'Visible'},{av:'this.DDO_PERIODOSMORAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PERIODOSMORAID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.TitleControlIdToReplace',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'TitleControlIdToReplace'},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.TitleControlIdToReplace',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'TitleControlIdToReplace'},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV57DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredTextTo_set'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_PERIODOSMORAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.ActiveEventKey',ctrl:'DDO_PERIODOSMORAID',prop:'ActiveEventKey'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_get',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_get'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_get',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PERIODOSMORADESCRIPCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.ActiveEventKey',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'ActiveEventKey'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_get',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'FilteredText_get'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_get',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PERIODOSMORAPERIODONUMERO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.ActiveEventKey',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'ActiveEventKey'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_get',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredText_get'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_get',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A36PeriodosMoraId',fld:'PERIODOSMORAID',pic:'ZZZ9',hsh:true}],[{av:'AV63Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV64Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Link")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PeriodosMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PERIODOSMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraPeriodoNumeroTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAPERIODONUMEROTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredText_set'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredTextTo_set'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV45PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV49PeriodosMoraDescripcionTitleFilterData',fld:'vPERIODOSMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraPeriodoNumeroTitleFilterData',fld:'vPERIODOSMORAPERIODONUMEROTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Visible")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Visible")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Visible'},{ctrl:'PERIODOSMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PERIODOSMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORADESCRIPCION","Title")',ctrl:'PERIODOSMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAPERIODONUMERO","Title")',ctrl:'PERIODOSMORAPERIODONUMERO',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A36PeriodosMoraId',fld:'PERIODOSMORAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredTextTo_set'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV47TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPeriodosMoraDescripcion',fld:'vTFPERIODOSMORADESCRIPCION',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPeriodosMoraDescripcion_Sel',fld:'vTFPERIODOSMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PERIODOSMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PERIODOSMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPeriodosMoraPeriodoNumero',fld:'vTFPERIODOSMORAPERIODONUMERO',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraPeriodoNumero_To',fld:'vTFPERIODOSMORAPERIODONUMERO_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAPERIODONUMEROContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAPERIODONUMERO',prop:'FilteredTextTo_set'}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV75Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV75Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV75Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[58]);
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar({rfrVar:"AV75Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.periodosmoraww);});
