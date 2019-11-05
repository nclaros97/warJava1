/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:21:57.96
*/
gx.evt.autoSkip = false;
gx.define('academia.politicapagodocentesww', false, function () {
   this.ServerClass =  "academia.politicapagodocentesww" ;
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
         this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus =  ""  ;
      this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus =  ""  ;
      this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFPoliticaPagoDocenteId = gx.num.trunc( 0 ,0) ;
      this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_set =  ""  ;
      this.AV47TFPoliticaPagoDocenteId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPoliticaPagoDocenteDescripcion =  ''  ;
      this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_set =  ""  ;
      this.AV51TFPoliticaPagoDocenteDescripcion_Sel =  ''  ;
      this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_set =  ""  ;
      this.AV54TFPoliticaPagoDocenteValor =  0.0  ;
      this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_set =  ""  ;
      this.AV55TFPoliticaPagoDocenteValor_To =  0.0  ;
      this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120s2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130s2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140s2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAPAGODOCENTEID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150s2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAPAGODOCENTEDESCRIPCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160s2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAPAGODOCENTEVALOR.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170s2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110s2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180s2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e190s2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e200s2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e240s2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e250s2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,54,55,56,58,60,62,66,67,68,69,70,71,72,73,74];
   this.GXLastCtrlId =74;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.politicapagodocentesww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(32,47,"POLITICAPAGODOCENTEID","","","PoliticaPagoDocenteId","int",0,"px",4,4,"right",null,[],32,"PoliticaPagoDocenteId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(48,48,"POLITICAPAGODOCENTEDESCRIPCION","","","PoliticaPagoDocenteDescripcion","char",0,"px",50,50,"left",null,[],48,"PoliticaPagoDocenteDescripcion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(49,49,"POLITICAPAGODOCENTEVALOR","","","PoliticaPagoDocenteValor","decimal",0,"px",8,8,"right",null,[],49,"PoliticaPagoDocenteValor",true,2,false,false,"Attribute",1,"WWColumn");
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
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120s2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130s2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_POLITICAPAGODOCENTEIDContainer = gx.uc.getNew(this, 57, 35, "BootstrapDropDownOptions", "DDO_POLITICAPAGODOCENTEIDContainer", "Ddo_politicapagodocenteid", "DDO_POLITICAPAGODOCENTEID");
   var DDO_POLITICAPAGODOCENTEIDContainer = this.DDO_POLITICAPAGODOCENTEIDContainer;
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAPAGODOCENTEIDContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAPAGODOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_POLITICAPAGODOCENTEIDContainer.addV2CFunction('AV45PoliticaPagoDocenteIdTitleFilterData', "vPOLITICAPAGODOCENTEIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAPAGODOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45PoliticaPagoDocenteIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAPAGODOCENTEIDTITLEFILTERDATA",UC.ParentObject.AV45PoliticaPagoDocenteIdTitleFilterData); });
   DDO_POLITICAPAGODOCENTEIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAPAGODOCENTEIDContainer.addEventHandler("OnOptionClicked", this.e140s2_client);
   this.setUserControl(DDO_POLITICAPAGODOCENTEIDContainer);
   this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer = gx.uc.getNew(this, 59, 35, "BootstrapDropDownOptions", "DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer", "Ddo_politicapagodocentedescripcion", "DDO_POLITICAPAGODOCENTEDESCRIPCION");
   var DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer = this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer;
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.PoliticaPagoDocentesWWGetFilterData", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.addV2CFunction('AV49PoliticaPagoDocenteDescripcionTitleFilterData', "vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PoliticaPagoDocenteDescripcionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA",UC.ParentObject.AV49PoliticaPagoDocenteDescripcionTitleFilterData); });
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.addEventHandler("OnOptionClicked", this.e150s2_client);
   this.setUserControl(DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer);
   this.DDO_POLITICAPAGODOCENTEVALORContainer = gx.uc.getNew(this, 61, 35, "BootstrapDropDownOptions", "DDO_POLITICAPAGODOCENTEVALORContainer", "Ddo_politicapagodocentevalor", "DDO_POLITICAPAGODOCENTEVALOR");
   var DDO_POLITICAPAGODOCENTEVALORContainer = this.DDO_POLITICAPAGODOCENTEVALORContainer;
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAPAGODOCENTEVALORContainer.addV2CFunction('AV57DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAPAGODOCENTEVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV57DDO_TitleSettingsIcons); });
   DDO_POLITICAPAGODOCENTEVALORContainer.addV2CFunction('AV53PoliticaPagoDocenteValorTitleFilterData', "vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAPAGODOCENTEVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53PoliticaPagoDocenteValorTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA",UC.ParentObject.AV53PoliticaPagoDocenteValorTitleFilterData); });
   DDO_POLITICAPAGODOCENTEVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAPAGODOCENTEVALORContainer.addEventHandler("OnOptionClicked", this.e160s2_client);
   this.setUserControl(DDO_POLITICAPAGODOCENTEVALORContainer);
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
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e170s2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110s2_client);
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
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEID",gxz:"Z32PoliticaPagoDocenteId",gxold:"O32PoliticaPagoDocenteId",gxvar:"A32PoliticaPagoDocenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z32PoliticaPagoDocenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("POLITICAPAGODOCENTEID",row || gx.fn.currentGridRowImpl(44),gx.O.A32PoliticaPagoDocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("POLITICAPAGODOCENTEID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEDESCRIPCION",gxz:"Z48PoliticaPagoDocenteDescripcion",gxold:"O48PoliticaPagoDocenteDescripcion",gxvar:"A48PoliticaPagoDocenteDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z48PoliticaPagoDocenteDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("POLITICAPAGODOCENTEDESCRIPCION",row || gx.fn.currentGridRowImpl(44),gx.O.A48PoliticaPagoDocenteDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=this.val()},val:function(row){return gx.fn.getGridControlValue("POLITICAPAGODOCENTEDESCRIPCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEVALOR",gxz:"Z49PoliticaPagoDocenteValor",gxold:"O49PoliticaPagoDocenteValor",gxvar:"A49PoliticaPagoDocenteValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("POLITICAPAGODOCENTEVALOR",row || gx.fn.currentGridRowImpl(44),gx.O.A49PoliticaPagoDocenteValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A49PoliticaPagoDocenteValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("POLITICAPAGODOCENTEVALOR",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[58]={ id:58 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace",gxold:"OV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace",gxvar:"AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace",gxold:"OV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace",gxvar:"AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE",gx.O.AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace",gxold:"OV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace",gxvar:"AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEID",gxz:"ZV46TFPoliticaPagoDocenteId",gxold:"OV46TFPoliticaPagoDocenteId",gxvar:"AV46TFPoliticaPagoDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFPoliticaPagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFPoliticaPagoDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPOLITICAPAGODOCENTEID",gx.O.AV46TFPoliticaPagoDocenteId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFPoliticaPagoDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPOLITICAPAGODOCENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEID_TO",gxz:"ZV47TFPoliticaPagoDocenteId_To",gxold:"OV47TFPoliticaPagoDocenteId_To",gxvar:"AV47TFPoliticaPagoDocenteId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFPoliticaPagoDocenteId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFPoliticaPagoDocenteId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPOLITICAPAGODOCENTEID_TO",gx.O.AV47TFPoliticaPagoDocenteId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFPoliticaPagoDocenteId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPOLITICAPAGODOCENTEID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEDESCRIPCION",gxz:"ZV50TFPoliticaPagoDocenteDescripcion",gxold:"OV50TFPoliticaPagoDocenteDescripcion",gxvar:"AV50TFPoliticaPagoDocenteDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPoliticaPagoDocenteDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPoliticaPagoDocenteDescripcion=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICAPAGODOCENTEDESCRIPCION",gx.O.AV50TFPoliticaPagoDocenteDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPoliticaPagoDocenteDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICAPAGODOCENTEDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL",gxz:"ZV51TFPoliticaPagoDocenteDescripcion_Sel",gxold:"OV51TFPoliticaPagoDocenteDescripcion_Sel",gxvar:"AV51TFPoliticaPagoDocenteDescripcion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPoliticaPagoDocenteDescripcion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPoliticaPagoDocenteDescripcion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL",gx.O.AV51TFPoliticaPagoDocenteDescripcion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPoliticaPagoDocenteDescripcion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL")},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEVALOR",gxz:"ZV54TFPoliticaPagoDocenteValor",gxold:"OV54TFPoliticaPagoDocenteValor",gxvar:"AV54TFPoliticaPagoDocenteValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFPoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFPoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPAGODOCENTEVALOR",gx.O.AV54TFPoliticaPagoDocenteValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFPoliticaPagoDocenteValor=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPAGODOCENTEVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPAGODOCENTEVALOR_TO",gxz:"ZV55TFPoliticaPagoDocenteValor_To",gxold:"OV55TFPoliticaPagoDocenteValor_To",gxvar:"AV55TFPoliticaPagoDocenteValor_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFPoliticaPagoDocenteValor_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFPoliticaPagoDocenteValor_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPAGODOCENTEVALOR_TO",gx.O.AV55TFPoliticaPagoDocenteValor_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFPoliticaPagoDocenteValor_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPAGODOCENTEVALOR_TO",'.',',')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV63Update = "" ;
   this.OV63Update = "" ;
   this.ZV64Delete = "" ;
   this.OV64Delete = "" ;
   this.Z32PoliticaPagoDocenteId = 0 ;
   this.O32PoliticaPagoDocenteId = 0 ;
   this.Z48PoliticaPagoDocenteDescripcion = "" ;
   this.O48PoliticaPagoDocenteDescripcion = "" ;
   this.Z49PoliticaPagoDocenteValor = 0 ;
   this.O49PoliticaPagoDocenteValor = 0 ;
   this.AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace = "" ;
   this.OV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace = "" ;
   this.ZV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace = "" ;
   this.OV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace = "" ;
   this.ZV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace = "" ;
   this.OV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPoliticaPagoDocenteId = 0 ;
   this.ZV46TFPoliticaPagoDocenteId = 0 ;
   this.OV46TFPoliticaPagoDocenteId = 0 ;
   this.AV47TFPoliticaPagoDocenteId_To = 0 ;
   this.ZV47TFPoliticaPagoDocenteId_To = 0 ;
   this.OV47TFPoliticaPagoDocenteId_To = 0 ;
   this.AV50TFPoliticaPagoDocenteDescripcion = "" ;
   this.ZV50TFPoliticaPagoDocenteDescripcion = "" ;
   this.OV50TFPoliticaPagoDocenteDescripcion = "" ;
   this.AV51TFPoliticaPagoDocenteDescripcion_Sel = "" ;
   this.ZV51TFPoliticaPagoDocenteDescripcion_Sel = "" ;
   this.OV51TFPoliticaPagoDocenteDescripcion_Sel = "" ;
   this.AV54TFPoliticaPagoDocenteValor = 0 ;
   this.ZV54TFPoliticaPagoDocenteValor = 0 ;
   this.OV54TFPoliticaPagoDocenteValor = 0 ;
   this.AV55TFPoliticaPagoDocenteValor_To = 0 ;
   this.ZV55TFPoliticaPagoDocenteValor_To = 0 ;
   this.OV55TFPoliticaPagoDocenteValor_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV59GridCurrentPage = 0 ;
   this.AV57DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPoliticaPagoDocenteId = 0 ;
   this.AV47TFPoliticaPagoDocenteId_To = 0 ;
   this.AV50TFPoliticaPagoDocenteDescripcion = "" ;
   this.AV51TFPoliticaPagoDocenteDescripcion_Sel = "" ;
   this.AV54TFPoliticaPagoDocenteValor = 0 ;
   this.AV55TFPoliticaPagoDocenteValor_To = 0 ;
   this.AV63Update = "" ;
   this.AV64Delete = "" ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.A48PoliticaPagoDocenteDescripcion = "" ;
   this.A49PoliticaPagoDocenteValor = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV75Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120s2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130s2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140s2_client": ["DDO_POLITICAPAGODOCENTEID.ONOPTIONCLICKED", true] ,"e150s2_client": ["DDO_POLITICAPAGODOCENTEDESCRIPCION.ONOPTIONCLICKED", true] ,"e160s2_client": ["DDO_POLITICAPAGODOCENTEVALOR.ONOPTIONCLICKED", true] ,"e170s2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110s2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e180s2_client": ["'DOINSERT'", true] ,"e190s2_client": ["'DOEXPORT'", true] ,"e200s2_client": ["'DOEXPORTREPORT'", true] ,"e240s2_client": ["ENTER", true] ,"e250s2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEID","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEID_TO","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEVALOR","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPAGODOCENTEVALOR_TO","Visible")',ctrl:'vTFPOLITICAPAGODOCENTEVALOR_TO',prop:'Visible'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'TitleControlIdToReplace'},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'TitleControlIdToReplace'},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV57DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredTextTo_set'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredTextTo_set'}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_POLITICAPAGODOCENTEID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.ActiveEventKey',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_get',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredText_get'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_get',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICAPAGODOCENTEDESCRIPCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.ActiveEventKey',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_get',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'FilteredText_get'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_get',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICAPAGODOCENTEVALOR.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.ActiveEventKey',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_get',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredText_get'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_get',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9',hsh:true}],[{av:'AV63Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV64Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Link")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaPagoDocenteIdTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaPagoDocenteDescripcionTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPagoDocenteValorTitleControlIdToReplace',fld:'vDDO_POLITICAPAGODOCENTEVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredText_set'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredTextTo_set'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredText_set'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredTextTo_set'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV45PoliticaPagoDocenteIdTitleFilterData',fld:'vPOLITICAPAGODOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaPagoDocenteDescripcionTitleFilterData',fld:'vPOLITICAPAGODOCENTEDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PoliticaPagoDocenteValorTitleFilterData',fld:'vPOLITICAPAGODOCENTEVALORTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Visible")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Visible")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Visible'},{ctrl:'POLITICAPAGODOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Title")',ctrl:'POLITICAPAGODOCENTEID',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEDESCRIPCION","Title")',ctrl:'POLITICAPAGODOCENTEDESCRIPCION',prop:'Title'},{ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Title")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Title'},{av:'AV59GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV60GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredTextTo_set'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredTextTo_set'}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV75Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.SortedStatus',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'SortedStatus'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaPagoDocenteId',fld:'vTFPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV47TFPoliticaPagoDocenteId_To',fld:'vTFPOLITICAPAGODOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEID',prop:'FilteredTextTo_set'},{av:'AV50TFPoliticaPagoDocenteDescripcion',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'FilteredText_set'},{av:'AV51TFPoliticaPagoDocenteDescripcion_Sel',fld:'vTFPOLITICAPAGODOCENTEDESCRIPCION_SEL',pic:''},{av:'this.DDO_POLITICAPAGODOCENTEDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_POLITICAPAGODOCENTEDESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPoliticaPagoDocenteValor',fld:'vTFPOLITICAPAGODOCENTEVALOR',pic:'ZZZZ9.99'},{av:'AV55TFPoliticaPagoDocenteValor_To',fld:'vTFPOLITICAPAGODOCENTEVALOR_TO',pic:'ZZZZ9.99'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredText_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPAGODOCENTEVALORContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPAGODOCENTEVALOR',prop:'FilteredTextTo_set'}]];
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
gx.wi( function() { gx.createParentObj(academia.politicapagodocentesww);});
