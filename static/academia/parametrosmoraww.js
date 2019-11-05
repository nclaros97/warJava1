/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:26:20.3
*/
gx.evt.autoSkip = false;
gx.define('academia.parametrosmoraww', false, function () {
   this.ServerClass =  "academia.parametrosmoraww" ;
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
      this.AV86Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV86Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.s142_client=function()
   {
      this.s172_client();
      if ( this.AV12OrderedBy == 2 )
      {
         this.DDO_PARAMETROMORAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PERIODOSMORAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_PARAMETROMORAVALORContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_PARAMETROMORAIDContainer.SortedStatus =  ""  ;
      this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus =  ""  ;
      this.DDO_PERIODOSMORAIDContainer.SortedStatus =  ""  ;
      this.DDO_PARAMETROMORAVALORContainer.SortedStatus =  ""  ;
      this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFParametroMoraId = gx.num.trunc( 0 ,0) ;
      this.DDO_PARAMETROMORAIDContainer.FilteredText_set =  ""  ;
      this.AV47TFParametroMoraId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFParametroMoraDescripcion =  ''  ;
      this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_set =  ""  ;
      this.AV72TFParametroMoraDescripcion_Sel =  ''  ;
      this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_set =  ""  ;
      this.AV54TFPeriodosMoraId = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAIDContainer.FilteredText_set =  ""  ;
      this.AV55TFPeriodosMoraId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV58TFParametroMoraValor =  0.0  ;
      this.DDO_PARAMETROMORAVALORContainer.FilteredText_set =  ""  ;
      this.AV59TFParametroMoraValor_To =  0.0  ;
      this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_set =  ""  ;
      this.AV62TFParametrosMoraActivo_Sel = gx.num.trunc( 0 ,0) ;
      this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_set =  ""  ;
   };
   this.e120v2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130v2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140v2_client=function()
   {
      return this.executeServerEvent("DDO_PARAMETROMORAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150v2_client=function()
   {
      return this.executeServerEvent("DDO_PARAMETROMORADESCRIPCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160v2_client=function()
   {
      return this.executeServerEvent("DDO_PERIODOSMORAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170v2_client=function()
   {
      return this.executeServerEvent("DDO_PARAMETROMORAVALOR.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180v2_client=function()
   {
      return this.executeServerEvent("DDO_PARAMETROSMORAACTIVO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190v2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110v2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200v2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e210v2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e220v2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e260v2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e270v2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,56,57,58,60,62,64,66,68,72,73,74,75,76,77,78,79,80,81,82,83];
   this.GXLastCtrlId =83;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.parametrosmoraww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(35,47,"PARAMETROMORAID","","","ParametroMoraId","int",0,"px",4,4,"right",null,[],35,"ParametroMoraId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(65,48,"PARAMETROMORADESCRIPCION","","","ParametroMoraDescripcion","char",0,"px",50,50,"left",null,[],65,"ParametroMoraDescripcion",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(36,49,"PERIODOSMORAID","","","PeriodosMoraId","int",0,"px",4,4,"right",null,[],36,"PeriodosMoraId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(66,50,"PARAMETROMORAVALOR","","","ParametroMoraValor","decimal",0,"px",6,6,"right",null,[],66,"ParametroMoraValor",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(115,51,"PARAMETROSMORAACTIVO","","","ParametrosMoraActivo","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 55, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV66GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV66GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV66GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV67GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV67GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120v2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130v2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_PARAMETROMORAIDContainer = gx.uc.getNew(this, 59, 35, "BootstrapDropDownOptions", "DDO_PARAMETROMORAIDContainer", "Ddo_parametromoraid", "DDO_PARAMETROMORAID");
   var DDO_PARAMETROMORAIDContainer = this.DDO_PARAMETROMORAIDContainer;
   DDO_PARAMETROMORAIDContainer.setProp("Class", "Class", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PARAMETROMORAIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_PARAMETROMORAIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_PARAMETROMORAIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PARAMETROMORAIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PARAMETROMORAIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PARAMETROMORAIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PARAMETROMORAIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PARAMETROMORAIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PARAMETROMORAIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PARAMETROMORAIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PARAMETROMORAIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PARAMETROMORAIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PARAMETROMORAIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PARAMETROMORAIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PARAMETROMORAIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PARAMETROMORAIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PARAMETROMORAIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PARAMETROMORAIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PARAMETROMORAIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PARAMETROMORAIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PARAMETROMORAIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PARAMETROMORAIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PARAMETROMORAIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PARAMETROMORAIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PARAMETROMORAIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PARAMETROMORAIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PARAMETROMORAIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PARAMETROMORAIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PARAMETROMORAIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PARAMETROMORAIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PARAMETROMORAIDContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PARAMETROMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_PARAMETROMORAIDContainer.addV2CFunction('AV45ParametroMoraIdTitleFilterData', "vPARAMETROMORAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PARAMETROMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45ParametroMoraIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPARAMETROMORAIDTITLEFILTERDATA",UC.ParentObject.AV45ParametroMoraIdTitleFilterData); });
   DDO_PARAMETROMORAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PARAMETROMORAIDContainer.addEventHandler("OnOptionClicked", this.e140v2_client);
   this.setUserControl(DDO_PARAMETROMORAIDContainer);
   this.DDO_PARAMETROMORADESCRIPCIONContainer = gx.uc.getNew(this, 61, 35, "BootstrapDropDownOptions", "DDO_PARAMETROMORADESCRIPCIONContainer", "Ddo_parametromoradescripcion", "DDO_PARAMETROMORADESCRIPCION");
   var DDO_PARAMETROMORADESCRIPCIONContainer = this.DDO_PARAMETROMORADESCRIPCIONContainer;
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Class", "Class", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.ParametrosMoraWWGetFilterData", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PARAMETROMORADESCRIPCIONContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PARAMETROMORADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_PARAMETROMORADESCRIPCIONContainer.addV2CFunction('AV49ParametroMoraDescripcionTitleFilterData', "vPARAMETROMORADESCRIPCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PARAMETROMORADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49ParametroMoraDescripcionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPARAMETROMORADESCRIPCIONTITLEFILTERDATA",UC.ParentObject.AV49ParametroMoraDescripcionTitleFilterData); });
   DDO_PARAMETROMORADESCRIPCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PARAMETROMORADESCRIPCIONContainer.addEventHandler("OnOptionClicked", this.e150v2_client);
   this.setUserControl(DDO_PARAMETROMORADESCRIPCIONContainer);
   this.DDO_PERIODOSMORAIDContainer = gx.uc.getNew(this, 63, 35, "BootstrapDropDownOptions", "DDO_PERIODOSMORAIDContainer", "Ddo_periodosmoraid", "DDO_PERIODOSMORAID");
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
   DDO_PERIODOSMORAIDContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PERIODOSMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_PERIODOSMORAIDContainer.addV2CFunction('AV53PeriodosMoraIdTitleFilterData', "vPERIODOSMORAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PERIODOSMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53PeriodosMoraIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPERIODOSMORAIDTITLEFILTERDATA",UC.ParentObject.AV53PeriodosMoraIdTitleFilterData); });
   DDO_PERIODOSMORAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PERIODOSMORAIDContainer.addEventHandler("OnOptionClicked", this.e160v2_client);
   this.setUserControl(DDO_PERIODOSMORAIDContainer);
   this.DDO_PARAMETROMORAVALORContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_PARAMETROMORAVALORContainer", "Ddo_parametromoravalor", "DDO_PARAMETROMORAVALOR");
   var DDO_PARAMETROMORAVALORContainer = this.DDO_PARAMETROMORAVALORContainer;
   DDO_PARAMETROMORAVALORContainer.setProp("Class", "Class", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("Icon", "Icon", "", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("Caption", "Caption", "", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PARAMETROMORAVALORContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PARAMETROMORAVALORContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PARAMETROMORAVALORContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PARAMETROMORAVALORContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PARAMETROMORAVALORContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PARAMETROMORAVALORContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PARAMETROMORAVALORContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PARAMETROMORAVALORContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PARAMETROMORAVALORContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PARAMETROMORAVALORContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PARAMETROMORAVALORContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PARAMETROMORAVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_PARAMETROMORAVALORContainer.addV2CFunction('AV57ParametroMoraValorTitleFilterData', "vPARAMETROMORAVALORTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PARAMETROMORAVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57ParametroMoraValorTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPARAMETROMORAVALORTITLEFILTERDATA",UC.ParentObject.AV57ParametroMoraValorTitleFilterData); });
   DDO_PARAMETROMORAVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PARAMETROMORAVALORContainer.addEventHandler("OnOptionClicked", this.e170v2_client);
   this.setUserControl(DDO_PARAMETROMORAVALORContainer);
   this.DDO_PARAMETROSMORAACTIVOContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_PARAMETROSMORAACTIVOContainer", "Ddo_parametrosmoraactivo", "DDO_PARAMETROSMORAACTIVO");
   var DDO_PARAMETROSMORAACTIVOContainer = this.DDO_PARAMETROSMORAACTIVOContainer;
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Class", "Class", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Icon", "Icon", "", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Caption", "Caption", "", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DataListType", "Datalisttype", "FixedValues", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "1:WWP_TSChecked,2:WWP_TSUnChecked", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PARAMETROSMORAACTIVOContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PARAMETROSMORAACTIVOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_PARAMETROSMORAACTIVOContainer.addV2CFunction('AV61ParametrosMoraActivoTitleFilterData', "vPARAMETROSMORAACTIVOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PARAMETROSMORAACTIVOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61ParametrosMoraActivoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPARAMETROSMORAACTIVOTITLEFILTERDATA",UC.ParentObject.AV61ParametrosMoraActivoTitleFilterData); });
   DDO_PARAMETROSMORAACTIVOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PARAMETROSMORAACTIVOContainer.addEventHandler("OnOptionClicked", this.e180v2_client);
   this.setUserControl(DDO_PARAMETROSMORAACTIVOContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 69, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 70, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 71, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV64DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV64DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV64DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e190v2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110v2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV70Update",gxold:"OV70Update",gxvar:"AV70Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV70Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV70Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV70Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV71Delete",gxold:"OV71Delete",gxvar:"AV71Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV71Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV71Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV71Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV71Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAID",gxz:"Z35ParametroMoraId",gxold:"O35ParametroMoraId",gxvar:"A35ParametroMoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z35ParametroMoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROMORAID",row || gx.fn.currentGridRowImpl(44),gx.O.A35ParametroMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROMORAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORADESCRIPCION",gxz:"Z65ParametroMoraDescripcion",gxold:"O65ParametroMoraDescripcion",gxvar:"A65ParametroMoraDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A65ParametroMoraDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z65ParametroMoraDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("PARAMETROMORADESCRIPCION",row || gx.fn.currentGridRowImpl(44),gx.O.A65ParametroMoraDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A65ParametroMoraDescripcion=this.val()},val:function(row){return gx.fn.getGridControlValue("PARAMETROMORADESCRIPCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PERIODOSMORAID",gxz:"Z36PeriodosMoraId",gxold:"O36PeriodosMoraId",gxvar:"A36PeriodosMoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z36PeriodosMoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PERIODOSMORAID",row || gx.fn.currentGridRowImpl(44),gx.O.A36PeriodosMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A36PeriodosMoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PERIODOSMORAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAVALOR",gxz:"Z66ParametroMoraValor",gxold:"O66ParametroMoraValor",gxvar:"A66ParametroMoraValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A66ParametroMoraValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z66ParametroMoraValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PARAMETROMORAVALOR",row || gx.fn.currentGridRowImpl(44),gx.O.A66ParametroMoraValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A66ParametroMoraValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PARAMETROMORAVALOR",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROSMORAACTIVO",gxz:"Z115ParametrosMoraActivo",gxold:"O115ParametrosMoraActivo",gxvar:"A115ParametrosMoraActivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A115ParametrosMoraActivo=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z115ParametrosMoraActivo=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("PARAMETROSMORAACTIVO",row || gx.fn.currentGridRowImpl(44),gx.O.A115ParametrosMoraActivo,true)},c2v:function(){if(this.val()!==undefined)gx.O.A115ParametrosMoraActivo=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("PARAMETROSMORAACTIVO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_ParametroMoraIdTitleControlIdToReplace",gxold:"OV48ddo_ParametroMoraIdTitleControlIdToReplace",gxvar:"AV48ddo_ParametroMoraIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_ParametroMoraIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_ParametroMoraIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_ParametroMoraIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_ParametroMoraIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_ParametroMoraDescripcionTitleControlIdToReplace",gxold:"OV52ddo_ParametroMoraDescripcionTitleControlIdToReplace",gxvar:"AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_ParametroMoraDescripcionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE",gx.O.AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_PeriodosMoraIdTitleControlIdToReplace",gxold:"OV56ddo_PeriodosMoraIdTitleControlIdToReplace",gxvar:"AV56ddo_PeriodosMoraIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_PeriodosMoraIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_PeriodosMoraIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_PeriodosMoraIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_PeriodosMoraIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_ParametroMoraValorTitleControlIdToReplace",gxold:"OV60ddo_ParametroMoraValorTitleControlIdToReplace",gxvar:"AV60ddo_ParametroMoraValorTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_ParametroMoraValorTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_ParametroMoraValorTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_ParametroMoraValorTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_ParametroMoraValorTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE",gxz:"ZV63ddo_ParametrosMoraActivoTitleControlIdToReplace",gxold:"OV63ddo_ParametrosMoraActivoTitleControlIdToReplace",gxvar:"AV63ddo_ParametrosMoraActivoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63ddo_ParametrosMoraActivoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63ddo_ParametrosMoraActivoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE",gx.O.AV63ddo_ParametrosMoraActivoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63ddo_ParametrosMoraActivoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAID",gxz:"ZV46TFParametroMoraId",gxold:"OV46TFParametroMoraId",gxvar:"AV46TFParametroMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFParametroMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORAID",gx.O.AV46TFParametroMoraId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFParametroMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPARAMETROMORAID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAID_TO",gxz:"ZV47TFParametroMoraId_To",gxold:"OV47TFParametroMoraId_To",gxvar:"AV47TFParametroMoraId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFParametroMoraId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFParametroMoraId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORAID_TO",gx.O.AV47TFParametroMoraId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFParametroMoraId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPARAMETROMORAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORADESCRIPCION",gxz:"ZV50TFParametroMoraDescripcion",gxold:"OV50TFParametroMoraDescripcion",gxvar:"AV50TFParametroMoraDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFParametroMoraDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFParametroMoraDescripcion=Value},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORADESCRIPCION",gx.O.AV50TFParametroMoraDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFParametroMoraDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vTFPARAMETROMORADESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORADESCRIPCION_SEL",gxz:"ZV72TFParametroMoraDescripcion_Sel",gxold:"OV72TFParametroMoraDescripcion_Sel",gxvar:"AV72TFParametroMoraDescripcion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72TFParametroMoraDescripcion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72TFParametroMoraDescripcion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORADESCRIPCION_SEL",gx.O.AV72TFParametroMoraDescripcion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV72TFParametroMoraDescripcion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPARAMETROMORADESCRIPCION_SEL")},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAID",gxz:"ZV54TFPeriodosMoraId",gxold:"OV54TFPeriodosMoraId",gxvar:"AV54TFPeriodosMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFPeriodosMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFPeriodosMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAID",gx.O.AV54TFPeriodosMoraId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFPeriodosMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPERIODOSMORAID_TO",gxz:"ZV55TFPeriodosMoraId_To",gxold:"OV55TFPeriodosMoraId_To",gxvar:"AV55TFPeriodosMoraId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFPeriodosMoraId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFPeriodosMoraId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPERIODOSMORAID_TO",gx.O.AV55TFPeriodosMoraId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFPeriodosMoraId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPERIODOSMORAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAVALOR",gxz:"ZV58TFParametroMoraValor",gxold:"OV58TFParametroMoraValor",gxvar:"AV58TFParametroMoraValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFParametroMoraValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFParametroMoraValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPARAMETROMORAVALOR",gx.O.AV58TFParametroMoraValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFParametroMoraValor=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPARAMETROMORAVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"decimal",len:6,dec:2,sign:false,pic:"ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAVALOR_TO",gxz:"ZV59TFParametroMoraValor_To",gxold:"OV59TFParametroMoraValor_To",gxvar:"AV59TFParametroMoraValor_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFParametroMoraValor_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFParametroMoraValor_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPARAMETROMORAVALOR_TO",gx.O.AV59TFParametroMoraValor_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFParametroMoraValor_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPARAMETROMORAVALOR_TO",'.',',')},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROSMORAACTIVO_SEL",gxz:"ZV62TFParametrosMoraActivo_Sel",gxold:"OV62TFParametrosMoraActivo_Sel",gxvar:"AV62TFParametrosMoraActivo_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFParametrosMoraActivo_Sel=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFParametrosMoraActivo_Sel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPARAMETROSMORAACTIVO_SEL",gx.O.AV62TFParametrosMoraActivo_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFParametrosMoraActivo_Sel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPARAMETROSMORAACTIVO_SEL",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV70Update = "" ;
   this.OV70Update = "" ;
   this.ZV71Delete = "" ;
   this.OV71Delete = "" ;
   this.Z35ParametroMoraId = 0 ;
   this.O35ParametroMoraId = 0 ;
   this.Z65ParametroMoraDescripcion = "" ;
   this.O65ParametroMoraDescripcion = "" ;
   this.Z36PeriodosMoraId = 0 ;
   this.O36PeriodosMoraId = 0 ;
   this.Z66ParametroMoraValor = 0 ;
   this.O66ParametroMoraValor = 0 ;
   this.Z115ParametrosMoraActivo = false ;
   this.O115ParametrosMoraActivo = false ;
   this.AV48ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.OV48ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace = "" ;
   this.ZV52ddo_ParametroMoraDescripcionTitleControlIdToReplace = "" ;
   this.OV52ddo_ParametroMoraDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.ZV56ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.OV56ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.AV60ddo_ParametroMoraValorTitleControlIdToReplace = "" ;
   this.ZV60ddo_ParametroMoraValorTitleControlIdToReplace = "" ;
   this.OV60ddo_ParametroMoraValorTitleControlIdToReplace = "" ;
   this.AV63ddo_ParametrosMoraActivoTitleControlIdToReplace = "" ;
   this.ZV63ddo_ParametrosMoraActivoTitleControlIdToReplace = "" ;
   this.OV63ddo_ParametrosMoraActivoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFParametroMoraId = 0 ;
   this.ZV46TFParametroMoraId = 0 ;
   this.OV46TFParametroMoraId = 0 ;
   this.AV47TFParametroMoraId_To = 0 ;
   this.ZV47TFParametroMoraId_To = 0 ;
   this.OV47TFParametroMoraId_To = 0 ;
   this.AV50TFParametroMoraDescripcion = "" ;
   this.ZV50TFParametroMoraDescripcion = "" ;
   this.OV50TFParametroMoraDescripcion = "" ;
   this.AV72TFParametroMoraDescripcion_Sel = "" ;
   this.ZV72TFParametroMoraDescripcion_Sel = "" ;
   this.OV72TFParametroMoraDescripcion_Sel = "" ;
   this.AV54TFPeriodosMoraId = 0 ;
   this.ZV54TFPeriodosMoraId = 0 ;
   this.OV54TFPeriodosMoraId = 0 ;
   this.AV55TFPeriodosMoraId_To = 0 ;
   this.ZV55TFPeriodosMoraId_To = 0 ;
   this.OV55TFPeriodosMoraId_To = 0 ;
   this.AV58TFParametroMoraValor = 0 ;
   this.ZV58TFParametroMoraValor = 0 ;
   this.OV58TFParametroMoraValor = 0 ;
   this.AV59TFParametroMoraValor_To = 0 ;
   this.ZV59TFParametroMoraValor_To = 0 ;
   this.OV59TFParametroMoraValor_To = 0 ;
   this.AV62TFParametrosMoraActivo_Sel = 0 ;
   this.ZV62TFParametrosMoraActivo_Sel = 0 ;
   this.OV62TFParametrosMoraActivo_Sel = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV66GridCurrentPage = 0 ;
   this.AV64DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace = "" ;
   this.AV56ddo_PeriodosMoraIdTitleControlIdToReplace = "" ;
   this.AV60ddo_ParametroMoraValorTitleControlIdToReplace = "" ;
   this.AV63ddo_ParametrosMoraActivoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFParametroMoraId = 0 ;
   this.AV47TFParametroMoraId_To = 0 ;
   this.AV50TFParametroMoraDescripcion = "" ;
   this.AV72TFParametroMoraDescripcion_Sel = "" ;
   this.AV54TFPeriodosMoraId = 0 ;
   this.AV55TFPeriodosMoraId_To = 0 ;
   this.AV58TFParametroMoraValor = 0 ;
   this.AV59TFParametroMoraValor_To = 0 ;
   this.AV62TFParametrosMoraActivo_Sel = 0 ;
   this.AV70Update = "" ;
   this.AV71Delete = "" ;
   this.A35ParametroMoraId = 0 ;
   this.A65ParametroMoraDescripcion = "" ;
   this.A36PeriodosMoraId = 0 ;
   this.A66ParametroMoraValor = 0 ;
   this.A115ParametrosMoraActivo = false ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV86Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120v2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130v2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140v2_client": ["DDO_PARAMETROMORAID.ONOPTIONCLICKED", true] ,"e150v2_client": ["DDO_PARAMETROMORADESCRIPCION.ONOPTIONCLICKED", true] ,"e160v2_client": ["DDO_PERIODOSMORAID.ONOPTIONCLICKED", true] ,"e170v2_client": ["DDO_PARAMETROMORAVALOR.ONOPTIONCLICKED", true] ,"e180v2_client": ["DDO_PARAMETROSMORAACTIVO.ONOPTIONCLICKED", true] ,"e190v2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110v2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e200v2_client": ["'DOINSERT'", true] ,"e210v2_client": ["'DOEXPORT'", true] ,"e220v2_client": ["'DOEXPORTREPORT'", true] ,"e260v2_client": ["ENTER", true] ,"e270v2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAID","Visible")',ctrl:'vTFPARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAID_TO","Visible")',ctrl:'vTFPARAMETROMORAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORADESCRIPCION","Visible")',ctrl:'vTFPARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORADESCRIPCION_SEL","Visible")',ctrl:'vTFPARAMETROMORADESCRIPCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAID","Visible")',ctrl:'vTFPERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPERIODOSMORAID_TO","Visible")',ctrl:'vTFPERIODOSMORAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAVALOR","Visible")',ctrl:'vTFPARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAVALOR_TO","Visible")',ctrl:'vTFPARAMETROMORAVALOR_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROSMORAACTIVO_SEL","Visible")',ctrl:'vTFPARAMETROSMORAACTIVO_SEL',prop:'Visible'},{av:'this.DDO_PARAMETROMORAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PARAMETROMORAID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.TitleControlIdToReplace',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'TitleControlIdToReplace'},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PERIODOSMORAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PERIODOSMORAID',prop:'TitleControlIdToReplace'},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PARAMETROMORAVALORContainer.TitleControlIdToReplace',ctrl:'DDO_PARAMETROMORAVALOR',prop:'TitleControlIdToReplace'},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.TitleControlIdToReplace',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'TitleControlIdToReplace'},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV64DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_set',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SelectedValue_set'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredTextTo_set'},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_PARAMETROMORAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.ActiveEventKey',ctrl:'DDO_PARAMETROMORAID',prop:'ActiveEventKey'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_get',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_get'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_get',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PARAMETROMORADESCRIPCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.ActiveEventKey',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'ActiveEventKey'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_get',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'FilteredText_get'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_get',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PERIODOSMORAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.ActiveEventKey',ctrl:'DDO_PERIODOSMORAID',prop:'ActiveEventKey'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_get',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_get'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_get',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PARAMETROMORAVALOR.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PARAMETROMORAVALORContainer.ActiveEventKey',ctrl:'DDO_PARAMETROMORAVALOR',prop:'ActiveEventKey'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredText_get',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredText_get'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_get',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PARAMETROSMORAACTIVO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.ActiveEventKey',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'ActiveEventKey'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_get',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A35ParametroMoraId',fld:'PARAMETROMORAID',pic:'ZZZ9',hsh:true}],[{av:'AV70Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV71Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Link")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ParametroMoraDescripcionTitleControlIdToReplace',fld:'vDDO_PARAMETROMORADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_PeriodosMoraIdTitleControlIdToReplace',fld:'vDDO_PERIODOSMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ParametroMoraValorTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV63ddo_ParametrosMoraActivoTitleControlIdToReplace',fld:'vDDO_PARAMETROSMORAACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredText_set'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredTextTo_set'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_set',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SelectedValue_set'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV45ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV49ParametroMoraDescripcionTitleFilterData',fld:'vPARAMETROMORADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV53PeriodosMoraIdTitleFilterData',fld:'vPERIODOSMORAIDTITLEFILTERDATA',pic:''},{av:'AV57ParametroMoraValorTitleFilterData',fld:'vPARAMETROMORAVALORTITLEFILTERDATA',pic:''},{av:'AV61ParametrosMoraActivoTitleFilterData',fld:'vPARAMETROSMORAACTIVOTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Visible")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Visible")',ctrl:'PERIODOSMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Visible")',ctrl:'PARAMETROMORAVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Visible")',ctrl:'PARAMETROSMORAACTIVO',prop:'Visible'},{ctrl:'PARAMETROMORAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'PARAMETROMORADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORADESCRIPCION","Title")',ctrl:'PARAMETROMORADESCRIPCION',prop:'Title'},{ctrl:'PERIODOSMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PERIODOSMORAID","Title")',ctrl:'PERIODOSMORAID',prop:'Title'},{ctrl:'PARAMETROMORAVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAVALOR","Title")',ctrl:'PARAMETROMORAVALOR',prop:'Title'},{ctrl:'PARAMETROSMORAACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROSMORAACTIVO","Title")',ctrl:'PARAMETROSMORAACTIVO',prop:'Title'},{av:'AV66GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV67GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A35ParametroMoraId',fld:'PARAMETROMORAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_set',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SelectedValue_set'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredTextTo_set'},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV86Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PERIODOSMORAIDContainer.SortedStatus',ctrl:'DDO_PERIODOSMORAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAVALORContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAVALOR',prop:'SortedStatus'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SortedStatus',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SortedStatus'},{av:'AV62TFParametrosMoraActivo_Sel',fld:'vTFPARAMETROSMORAACTIVO_SEL',pic:'9'},{av:'this.DDO_PARAMETROSMORAACTIVOContainer.SelectedValue_set',ctrl:'DDO_PARAMETROSMORAACTIVO',prop:'SelectedValue_set'},{av:'AV58TFParametroMoraValor',fld:'vTFPARAMETROMORAVALOR',pic:'ZZ9.99'},{av:'AV59TFParametroMoraValor_To',fld:'vTFPARAMETROMORAVALOR_TO',pic:'ZZ9.99'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAVALORContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAVALOR',prop:'FilteredTextTo_set'},{av:'AV54TFPeriodosMoraId',fld:'vTFPERIODOSMORAID',pic:'ZZZ9'},{av:'AV55TFPeriodosMoraId_To',fld:'vTFPERIODOSMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredText_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredText_set'},{av:'this.DDO_PERIODOSMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PERIODOSMORAID',prop:'FilteredTextTo_set'},{av:'AV72TFParametroMoraDescripcion_Sel',fld:'vTFPARAMETROMORADESCRIPCION_SEL',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'SelectedValue_set'},{av:'AV50TFParametroMoraDescripcion',fld:'vTFPARAMETROMORADESCRIPCION',pic:''},{av:'this.DDO_PARAMETROMORADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORADESCRIPCION',prop:'FilteredText_set'},{av:'AV46TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV47TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV86Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV86Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV86Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV86Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.parametrosmoraww);});
