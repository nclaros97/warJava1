/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:16:26.59
*/
gx.evt.autoSkip = false;
gx.define('academia.politicaww', false, function () {
   this.ServerClass =  "academia.politicaww" ;
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
      this.AV81Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV81Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s142_client=function()
   {
      this.s172_client();
      if ( this.AV12OrderedBy == 2 )
      {
         this.DDO_POLITICAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_POLITICANOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_POLITICAIDContainer.SortedStatus =  ""  ;
      this.DDO_POLITICANOMBREContainer.SortedStatus =  ""  ;
      this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus =  ""  ;
      this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFPoliticaId = gx.num.trunc( 0 ,0) ;
      this.DDO_POLITICAIDContainer.FilteredText_set =  ""  ;
      this.AV47TFPoliticaId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_POLITICAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPoliticaNombre =  ''  ;
      this.DDO_POLITICANOMBREContainer.FilteredText_set =  ""  ;
      this.AV51TFPoliticaNombre_Sel =  ''  ;
      this.DDO_POLITICANOMBREContainer.SelectedValue_set =  ""  ;
      this.AV54TFPoliticaPrecioMensual =  0.0  ;
      this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_set =  ""  ;
      this.AV55TFPoliticaPrecioMensual_To =  0.0  ;
      this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_set =  ""  ;
      this.AV58TFPoliticaPrecioCompleto =  0.0  ;
      this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_set =  ""  ;
      this.AV59TFPoliticaPrecioCompleto_To =  0.0  ;
      this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120i2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130i2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140i2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150i2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICANOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160i2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAPRECIOMENSUAL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170i2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICAPRECIOCOMPLETO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180i2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110i2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190i2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e200i2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e210i2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e250i2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e260i2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,55,56,57,59,61,63,65,69,70,71,72,73,74,75,76,77,78,79];
   this.GXLastCtrlId =79;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.politicaww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(26,47,"POLITICAID","","","PoliticaId","int",0,"px",4,4,"right",null,[],26,"PoliticaId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(41,48,"POLITICANOMBRE","","","PoliticaNombre","char",0,"px",50,50,"left",null,[],41,"PoliticaNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(22,49,"POLITICAPRECIOMENSUAL","","","PoliticaPrecioMensual","decimal",0,"px",10,10,"right",null,[],22,"PoliticaPrecioMensual",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(69,50,"POLITICAPRECIOCOMPLETO","","","PoliticaPrecioCompleto","decimal",0,"px",10,10,"right",null,[],69,"PoliticaPrecioCompleto",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 54, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV63GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV63GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV63GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV64GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV64GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120i2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130i2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_POLITICAIDContainer = gx.uc.getNew(this, 58, 35, "BootstrapDropDownOptions", "DDO_POLITICAIDContainer", "Ddo_politicaid", "DDO_POLITICAID");
   var DDO_POLITICAIDContainer = this.DDO_POLITICAIDContainer;
   DDO_POLITICAIDContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_POLITICAIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_POLITICAIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_POLITICAIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_POLITICAIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_POLITICAIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_POLITICAIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_POLITICAIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_POLITICAIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_POLITICAIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_POLITICAIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_POLITICAIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAIDContainer.addV2CFunction('AV61DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV61DDO_TitleSettingsIcons); });
   DDO_POLITICAIDContainer.addV2CFunction('AV45PoliticaIdTitleFilterData', "vPOLITICAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45PoliticaIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAIDTITLEFILTERDATA",UC.ParentObject.AV45PoliticaIdTitleFilterData); });
   DDO_POLITICAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAIDContainer.addEventHandler("OnOptionClicked", this.e140i2_client);
   this.setUserControl(DDO_POLITICAIDContainer);
   this.DDO_POLITICANOMBREContainer = gx.uc.getNew(this, 60, 35, "BootstrapDropDownOptions", "DDO_POLITICANOMBREContainer", "Ddo_politicanombre", "DDO_POLITICANOMBRE");
   var DDO_POLITICANOMBREContainer = this.DDO_POLITICANOMBREContainer;
   DDO_POLITICANOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICANOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICANOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICANOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICANOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICANOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICANOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICANOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICANOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICANOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICANOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICANOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICANOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICANOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICANOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICANOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICANOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICANOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICANOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICANOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICANOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICANOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICANOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICANOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICANOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICANOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_POLITICANOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_POLITICANOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_POLITICANOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_POLITICANOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_POLITICANOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICANOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.PoliticaWWGetFilterData", "str");
   DDO_POLITICANOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICANOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_POLITICANOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICANOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICANOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICANOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICANOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICANOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICANOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICANOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICANOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICANOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_POLITICANOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICANOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_POLITICANOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_POLITICANOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_POLITICANOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICANOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICANOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICANOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICANOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICANOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICANOMBREContainer.addV2CFunction('AV61DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICANOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV61DDO_TitleSettingsIcons); });
   DDO_POLITICANOMBREContainer.addV2CFunction('AV49PoliticaNombreTitleFilterData', "vPOLITICANOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICANOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PoliticaNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICANOMBRETITLEFILTERDATA",UC.ParentObject.AV49PoliticaNombreTitleFilterData); });
   DDO_POLITICANOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICANOMBREContainer.addEventHandler("OnOptionClicked", this.e150i2_client);
   this.setUserControl(DDO_POLITICANOMBREContainer);
   this.DDO_POLITICAPRECIOMENSUALContainer = gx.uc.getNew(this, 62, 35, "BootstrapDropDownOptions", "DDO_POLITICAPRECIOMENSUALContainer", "Ddo_politicapreciomensual", "DDO_POLITICAPRECIOMENSUAL");
   var DDO_POLITICAPRECIOMENSUALContainer = this.DDO_POLITICAPRECIOMENSUALContainer;
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAPRECIOMENSUALContainer.addV2CFunction('AV61DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAPRECIOMENSUALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV61DDO_TitleSettingsIcons); });
   DDO_POLITICAPRECIOMENSUALContainer.addV2CFunction('AV53PoliticaPrecioMensualTitleFilterData', "vPOLITICAPRECIOMENSUALTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAPRECIOMENSUALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53PoliticaPrecioMensualTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAPRECIOMENSUALTITLEFILTERDATA",UC.ParentObject.AV53PoliticaPrecioMensualTitleFilterData); });
   DDO_POLITICAPRECIOMENSUALContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAPRECIOMENSUALContainer.addEventHandler("OnOptionClicked", this.e160i2_client);
   this.setUserControl(DDO_POLITICAPRECIOMENSUALContainer);
   this.DDO_POLITICAPRECIOCOMPLETOContainer = gx.uc.getNew(this, 64, 35, "BootstrapDropDownOptions", "DDO_POLITICAPRECIOCOMPLETOContainer", "Ddo_politicapreciocompleto", "DDO_POLITICAPRECIOCOMPLETO");
   var DDO_POLITICAPRECIOCOMPLETOContainer = this.DDO_POLITICAPRECIOCOMPLETOContainer;
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Class", "Class", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Icon", "Icon", "", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Caption", "Caption", "", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_POLITICAPRECIOCOMPLETOContainer.addV2CFunction('AV61DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICAPRECIOCOMPLETOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV61DDO_TitleSettingsIcons); });
   DDO_POLITICAPRECIOCOMPLETOContainer.addV2CFunction('AV57PoliticaPrecioCompletoTitleFilterData', "vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICAPRECIOCOMPLETOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57PoliticaPrecioCompletoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA",UC.ParentObject.AV57PoliticaPrecioCompletoTitleFilterData); });
   DDO_POLITICAPRECIOCOMPLETOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICAPRECIOCOMPLETOContainer.addEventHandler("OnOptionClicked", this.e170i2_client);
   this.setUserControl(DDO_POLITICAPRECIOCOMPLETOContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 66, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 67, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 68, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV61DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV61DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e180i2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110i2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV67Update",gxold:"OV67Update",gxvar:"AV67Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV67Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV67Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV67Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV68Delete",gxold:"OV68Delete",gxvar:"AV68Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV68Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV68Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV68Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAID",gxz:"Z26PoliticaId",gxold:"O26PoliticaId",gxvar:"A26PoliticaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A26PoliticaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z26PoliticaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("POLITICAID",row || gx.fn.currentGridRowImpl(44),gx.O.A26PoliticaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A26PoliticaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("POLITICAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICANOMBRE",gxz:"Z41PoliticaNombre",gxold:"O41PoliticaNombre",gxvar:"A41PoliticaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A41PoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z41PoliticaNombre=Value},v2c:function(row){gx.fn.setGridControlValue("POLITICANOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A41PoliticaNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A41PoliticaNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("POLITICANOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPRECIOMENSUAL",gxz:"Z22PoliticaPrecioMensual",gxold:"O22PoliticaPrecioMensual",gxvar:"A22PoliticaPrecioMensual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A22PoliticaPrecioMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z22PoliticaPrecioMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("POLITICAPRECIOMENSUAL",row || gx.fn.currentGridRowImpl(44),gx.O.A22PoliticaPrecioMensual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A22PoliticaPrecioMensual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("POLITICAPRECIOMENSUAL",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPRECIOCOMPLETO",gxz:"Z69PoliticaPrecioCompleto",gxold:"O69PoliticaPrecioCompleto",gxvar:"A69PoliticaPrecioCompleto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A69PoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z69PoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("POLITICAPRECIOCOMPLETO",row || gx.fn.currentGridRowImpl(44),gx.O.A69PoliticaPrecioCompleto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A69PoliticaPrecioCompleto=this.val()},val:function(row){return gx.fn.getGridDecimalValue("POLITICAPRECIOCOMPLETO",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_PoliticaIdTitleControlIdToReplace",gxold:"OV48ddo_PoliticaIdTitleControlIdToReplace",gxvar:"AV48ddo_PoliticaIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_PoliticaIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_PoliticaIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_PoliticaIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_PoliticaIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_PoliticaNombreTitleControlIdToReplace",gxold:"OV52ddo_PoliticaNombreTitleControlIdToReplace",gxvar:"AV52ddo_PoliticaNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_PoliticaNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_PoliticaNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE",gx.O.AV52ddo_PoliticaNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_PoliticaNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_PoliticaPrecioMensualTitleControlIdToReplace",gxold:"OV56ddo_PoliticaPrecioMensualTitleControlIdToReplace",gxvar:"AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_PoliticaPrecioMensualTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace",gxold:"OV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace",gxvar:"AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAID",gxz:"ZV46TFPoliticaId",gxold:"OV46TFPoliticaId",gxvar:"AV46TFPoliticaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFPoliticaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFPoliticaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPOLITICAID",gx.O.AV46TFPoliticaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFPoliticaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPOLITICAID",'.')},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAID_TO",gxz:"ZV47TFPoliticaId_To",gxold:"OV47TFPoliticaId_To",gxvar:"AV47TFPoliticaId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFPoliticaId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFPoliticaId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPOLITICAID_TO",gx.O.AV47TFPoliticaId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFPoliticaId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPOLITICAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICANOMBRE",gxz:"ZV50TFPoliticaNombre",gxold:"OV50TFPoliticaNombre",gxvar:"AV50TFPoliticaNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPoliticaNombre=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICANOMBRE",gx.O.AV50TFPoliticaNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPoliticaNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICANOMBRE")},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICANOMBRE_SEL",gxz:"ZV51TFPoliticaNombre_Sel",gxold:"OV51TFPoliticaNombre_Sel",gxvar:"AV51TFPoliticaNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPoliticaNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPoliticaNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICANOMBRE_SEL",gx.O.AV51TFPoliticaNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPoliticaNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICANOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPRECIOMENSUAL",gxz:"ZV54TFPoliticaPrecioMensual",gxold:"OV54TFPoliticaPrecioMensual",gxvar:"AV54TFPoliticaPrecioMensual",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFPoliticaPrecioMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFPoliticaPrecioMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPRECIOMENSUAL",gx.O.AV54TFPoliticaPrecioMensual,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFPoliticaPrecioMensual=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPRECIOMENSUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPRECIOMENSUAL_TO",gxz:"ZV55TFPoliticaPrecioMensual_To",gxold:"OV55TFPoliticaPrecioMensual_To",gxvar:"AV55TFPoliticaPrecioMensual_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFPoliticaPrecioMensual_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFPoliticaPrecioMensual_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPRECIOMENSUAL_TO",gx.O.AV55TFPoliticaPrecioMensual_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFPoliticaPrecioMensual_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPRECIOMENSUAL_TO",'.',',')},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPRECIOCOMPLETO",gxz:"ZV58TFPoliticaPrecioCompleto",gxold:"OV58TFPoliticaPrecioCompleto",gxvar:"AV58TFPoliticaPrecioCompleto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFPoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFPoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPRECIOCOMPLETO",gx.O.AV58TFPoliticaPrecioCompleto,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFPoliticaPrecioCompleto=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPRECIOCOMPLETO",'.',',')},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICAPRECIOCOMPLETO_TO",gxz:"ZV59TFPoliticaPrecioCompleto_To",gxold:"OV59TFPoliticaPrecioCompleto_To",gxvar:"AV59TFPoliticaPrecioCompleto_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFPoliticaPrecioCompleto_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFPoliticaPrecioCompleto_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPOLITICAPRECIOCOMPLETO_TO",gx.O.AV59TFPoliticaPrecioCompleto_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFPoliticaPrecioCompleto_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPOLITICAPRECIOCOMPLETO_TO",'.',',')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV67Update = "" ;
   this.OV67Update = "" ;
   this.ZV68Delete = "" ;
   this.OV68Delete = "" ;
   this.Z26PoliticaId = 0 ;
   this.O26PoliticaId = 0 ;
   this.Z41PoliticaNombre = "" ;
   this.O41PoliticaNombre = "" ;
   this.Z22PoliticaPrecioMensual = 0 ;
   this.O22PoliticaPrecioMensual = 0 ;
   this.Z69PoliticaPrecioCompleto = 0 ;
   this.O69PoliticaPrecioCompleto = 0 ;
   this.AV48ddo_PoliticaIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_PoliticaIdTitleControlIdToReplace = "" ;
   this.OV48ddo_PoliticaIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.ZV52ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.OV52ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace = "" ;
   this.ZV56ddo_PoliticaPrecioMensualTitleControlIdToReplace = "" ;
   this.OV56ddo_PoliticaPrecioMensualTitleControlIdToReplace = "" ;
   this.AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace = "" ;
   this.ZV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace = "" ;
   this.OV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPoliticaId = 0 ;
   this.ZV46TFPoliticaId = 0 ;
   this.OV46TFPoliticaId = 0 ;
   this.AV47TFPoliticaId_To = 0 ;
   this.ZV47TFPoliticaId_To = 0 ;
   this.OV47TFPoliticaId_To = 0 ;
   this.AV50TFPoliticaNombre = "" ;
   this.ZV50TFPoliticaNombre = "" ;
   this.OV50TFPoliticaNombre = "" ;
   this.AV51TFPoliticaNombre_Sel = "" ;
   this.ZV51TFPoliticaNombre_Sel = "" ;
   this.OV51TFPoliticaNombre_Sel = "" ;
   this.AV54TFPoliticaPrecioMensual = 0 ;
   this.ZV54TFPoliticaPrecioMensual = 0 ;
   this.OV54TFPoliticaPrecioMensual = 0 ;
   this.AV55TFPoliticaPrecioMensual_To = 0 ;
   this.ZV55TFPoliticaPrecioMensual_To = 0 ;
   this.OV55TFPoliticaPrecioMensual_To = 0 ;
   this.AV58TFPoliticaPrecioCompleto = 0 ;
   this.ZV58TFPoliticaPrecioCompleto = 0 ;
   this.OV58TFPoliticaPrecioCompleto = 0 ;
   this.AV59TFPoliticaPrecioCompleto_To = 0 ;
   this.ZV59TFPoliticaPrecioCompleto_To = 0 ;
   this.OV59TFPoliticaPrecioCompleto_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV63GridCurrentPage = 0 ;
   this.AV61DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_PoliticaIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace = "" ;
   this.AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPoliticaId = 0 ;
   this.AV47TFPoliticaId_To = 0 ;
   this.AV50TFPoliticaNombre = "" ;
   this.AV51TFPoliticaNombre_Sel = "" ;
   this.AV54TFPoliticaPrecioMensual = 0 ;
   this.AV55TFPoliticaPrecioMensual_To = 0 ;
   this.AV58TFPoliticaPrecioCompleto = 0 ;
   this.AV59TFPoliticaPrecioCompleto_To = 0 ;
   this.AV67Update = "" ;
   this.AV68Delete = "" ;
   this.A26PoliticaId = 0 ;
   this.A41PoliticaNombre = "" ;
   this.A22PoliticaPrecioMensual = 0 ;
   this.A69PoliticaPrecioCompleto = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV81Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120i2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130i2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140i2_client": ["DDO_POLITICAID.ONOPTIONCLICKED", true] ,"e150i2_client": ["DDO_POLITICANOMBRE.ONOPTIONCLICKED", true] ,"e160i2_client": ["DDO_POLITICAPRECIOMENSUAL.ONOPTIONCLICKED", true] ,"e170i2_client": ["DDO_POLITICAPRECIOCOMPLETO.ONOPTIONCLICKED", true] ,"e180i2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110i2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e190i2_client": ["'DOINSERT'", true] ,"e200i2_client": ["'DOEXPORT'", true] ,"e210i2_client": ["'DOEXPORTREPORT'", true] ,"e250i2_client": ["ENTER", true] ,"e260i2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAID","Visible")',ctrl:'vTFPOLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAID_TO","Visible")',ctrl:'vTFPOLITICAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICANOMBRE","Visible")',ctrl:'vTFPOLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICANOMBRE_SEL","Visible")',ctrl:'vTFPOLITICANOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPRECIOMENSUAL","Visible")',ctrl:'vTFPOLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPRECIOMENSUAL_TO","Visible")',ctrl:'vTFPOLITICAPRECIOMENSUAL_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPRECIOCOMPLETO","Visible")',ctrl:'vTFPOLITICAPRECIOCOMPLETO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICAPRECIOCOMPLETO_TO","Visible")',ctrl:'vTFPOLITICAPRECIOCOMPLETO_TO',prop:'Visible'},{av:'this.DDO_POLITICAIDContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICANOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICANOMBRE',prop:'TitleControlIdToReplace'},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'TitleControlIdToReplace'},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'TitleControlIdToReplace'},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV61DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredTextTo_set'},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredTextTo_set'},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAIDContainer.FilteredText_set',ctrl:'DDO_POLITICAID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_POLITICAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAIDContainer.ActiveEventKey',ctrl:'DDO_POLITICAID',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAIDContainer.FilteredText_get',ctrl:'DDO_POLITICAID',prop:'FilteredText_get'},{av:'this.DDO_POLITICAIDContainer.FilteredTextTo_get',ctrl:'DDO_POLITICAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICANOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICANOMBREContainer.ActiveEventKey',ctrl:'DDO_POLITICANOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_get',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_get'},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_get',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICAPRECIOMENSUAL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.ActiveEventKey',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_get',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredText_get'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_get',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICAPRECIOCOMPLETO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.ActiveEventKey',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'ActiveEventKey'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_get',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredText_get'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_get',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9',hsh:true}],[{av:'AV67Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV68Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Link")',ctrl:'POLITICANOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PoliticaIdTitleControlIdToReplace',fld:'vDDO_POLITICAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PoliticaPrecioMensualTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PoliticaPrecioCompletoTitleControlIdToReplace',fld:'vDDO_POLITICAPRECIOCOMPLETOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'this.DDO_POLITICAIDContainer.FilteredText_set',ctrl:'DDO_POLITICAID',prop:'FilteredText_set'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAID',prop:'FilteredTextTo_set'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredText_set'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredTextTo_set'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredText_set'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredTextTo_set'},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV45PoliticaIdTitleFilterData',fld:'vPOLITICAIDTITLEFILTERDATA',pic:''},{av:'AV49PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV53PoliticaPrecioMensualTitleFilterData',fld:'vPOLITICAPRECIOMENSUALTITLEFILTERDATA',pic:''},{av:'AV57PoliticaPrecioCompletoTitleFilterData',fld:'vPOLITICAPRECIOCOMPLETOTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("POLITICAID","Visible")',ctrl:'POLITICAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Visible")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Visible")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Visible'},{ctrl:'POLITICAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("POLITICAID","Title")',ctrl:'POLITICAID',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'POLITICAPRECIOMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOMENSUAL","Title")',ctrl:'POLITICAPRECIOMENSUAL',prop:'Title'},{ctrl:'POLITICAPRECIOCOMPLETO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICAPRECIOCOMPLETO","Title")',ctrl:'POLITICAPRECIOCOMPLETO',prop:'Title'},{av:'AV63GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV64GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredTextTo_set'},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredTextTo_set'},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAIDContainer.FilteredText_set',ctrl:'DDO_POLITICAID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV81Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_POLITICAIDContainer.SortedStatus',ctrl:'DDO_POLITICAID',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'SortedStatus'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.SortedStatus',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'SortedStatus'},{av:'AV58TFPoliticaPrecioCompleto',fld:'vTFPOLITICAPRECIOCOMPLETO',pic:'ZZZZZZ9.99'},{av:'AV59TFPoliticaPrecioCompleto_To',fld:'vTFPOLITICAPRECIOCOMPLETO_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOCOMPLETOContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOCOMPLETO',prop:'FilteredTextTo_set'},{av:'AV54TFPoliticaPrecioMensual',fld:'vTFPOLITICAPRECIOMENSUAL',pic:'ZZZZZZ9.99'},{av:'AV55TFPoliticaPrecioMensual_To',fld:'vTFPOLITICAPRECIOMENSUAL_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredText_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_POLITICAPRECIOMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAPRECIOMENSUAL',prop:'FilteredTextTo_set'},{av:'AV51TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV50TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV46TFPoliticaId',fld:'vTFPOLITICAID',pic:'ZZZ9'},{av:'AV47TFPoliticaId_To',fld:'vTFPOLITICAID_TO',pic:'ZZZ9'},{av:'this.DDO_POLITICAIDContainer.FilteredText_set',ctrl:'DDO_POLITICAID',prop:'FilteredText_set'},{av:'this.DDO_POLITICAIDContainer.FilteredTextTo_set',ctrl:'DDO_POLITICAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV81Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV81Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV81Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar({rfrVar:"AV81Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.politicaww);});
