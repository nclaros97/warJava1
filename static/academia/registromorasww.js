/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:25:52.47
*/
gx.evt.autoSkip = false;
gx.define('academia.registromorasww', false, function () {
   this.ServerClass =  "academia.registromorasww" ;
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
      this.AV89Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV89Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Tfregistromorasfecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFREGISTROMORASFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV58TFRegistroMorasFecha)==0) || new gx.date.gxdate( this.AV58TFRegistroMorasFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFRegistro Moras Fecha fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tfregistromorasfecha_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFREGISTROMORASFECHA_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV59TFRegistroMorasFecha_To)==0) || new gx.date.gxdate( this.AV59TFRegistroMorasFecha_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFRegistro Moras Fecha_To fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ddo_registromorasfechaauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_REGISTROMORASFECHAAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV60DDO_RegistroMorasFechaAuxDate)==0) || new gx.date.gxdate( this.AV60DDO_RegistroMorasFechaAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Registro Moras Fecha Aux Date fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Ddo_registromorasfechaauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_REGISTROMORASFECHAAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV61DDO_RegistroMorasFechaAuxDateTo)==0) || new gx.date.gxdate( this.AV61DDO_RegistroMorasFechaAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Registro Moras Fecha Aux Date To fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s142_client=function()
   {
      this.s172_client();
      if ( this.AV12OrderedBy == 2 )
      {
         this.DDO_REGISTROMORASIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PAGOMATRICULAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_PARAMETROMORAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_REGISTROMORASFECHAContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_REGISTROMORASVALORContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_REGISTROMORASIDContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAIDContainer.SortedStatus =  ""  ;
      this.DDO_PARAMETROMORAIDContainer.SortedStatus =  ""  ;
      this.DDO_REGISTROMORASFECHAContainer.SortedStatus =  ""  ;
      this.DDO_REGISTROMORASVALORContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFRegistroMorasId = gx.num.trunc( 0 ,0) ;
      this.DDO_REGISTROMORASIDContainer.FilteredText_set =  ""  ;
      this.AV47TFRegistroMorasId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_REGISTROMORASIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPagoMatriculaId = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOMATRICULAIDContainer.FilteredText_set =  ""  ;
      this.AV51TFPagoMatriculaId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV54TFParametroMoraId = gx.num.trunc( 0 ,0) ;
      this.DDO_PARAMETROMORAIDContainer.FilteredText_set =  ""  ;
      this.AV55TFParametroMoraId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV58TFRegistroMorasFecha =  ''  ;
      this.DDO_REGISTROMORASFECHAContainer.FilteredText_set =  ""  ;
      this.AV59TFRegistroMorasFecha_To =  ''  ;
      this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_set =  ""  ;
      this.AV64TFRegistroMorasValor = gx.num.trunc( 0 ,0) ;
      this.DDO_REGISTROMORASVALORContainer.FilteredText_set =  ""  ;
      this.AV65TFRegistroMorasValor_To = gx.num.trunc( 0 ,0) ;
      this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120x2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130x2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140x2_client=function()
   {
      return this.executeServerEvent("DDO_REGISTROMORASID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150x2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160x2_client=function()
   {
      return this.executeServerEvent("DDO_PARAMETROMORAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170x2_client=function()
   {
      return this.executeServerEvent("DDO_REGISTROMORASFECHA.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180x2_client=function()
   {
      return this.executeServerEvent("DDO_REGISTROMORASVALOR.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190x2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110x2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200x2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e210x2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e220x2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e260x2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e270x2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,56,57,58,60,62,64,66,68,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87];
   this.GXLastCtrlId =87;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.registromorasww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(37,47,"REGISTROMORASID","","","RegistroMorasId","int",0,"px",4,4,"right",null,[],37,"RegistroMorasId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(33,48,"PAGOMATRICULAID","","","PagoMatriculaId","int",0,"px",4,4,"right",null,[],33,"PagoMatriculaId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(35,49,"PARAMETROMORAID","","","ParametroMoraId","int",0,"px",4,4,"right",null,[],35,"ParametroMoraId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(117,50,"REGISTROMORASFECHA","","","RegistroMorasFecha","date",0,"px",8,8,"right",null,[],117,"RegistroMorasFecha",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(118,51,"REGISTROMORASVALOR","","","RegistroMorasValor","int",0,"px",4,4,"right",null,[],118,"RegistroMorasValor",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV69GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV69GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV70GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV70GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV70GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120x2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130x2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_REGISTROMORASIDContainer = gx.uc.getNew(this, 59, 35, "BootstrapDropDownOptions", "DDO_REGISTROMORASIDContainer", "Ddo_registromorasid", "DDO_REGISTROMORASID");
   var DDO_REGISTROMORASIDContainer = this.DDO_REGISTROMORASIDContainer;
   DDO_REGISTROMORASIDContainer.setProp("Class", "Class", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_REGISTROMORASIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_REGISTROMORASIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_REGISTROMORASIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_REGISTROMORASIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_REGISTROMORASIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_REGISTROMORASIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_REGISTROMORASIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_REGISTROMORASIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_REGISTROMORASIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_REGISTROMORASIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_REGISTROMORASIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_REGISTROMORASIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_REGISTROMORASIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_REGISTROMORASIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_REGISTROMORASIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_REGISTROMORASIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_REGISTROMORASIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_REGISTROMORASIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_REGISTROMORASIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_REGISTROMORASIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_REGISTROMORASIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_REGISTROMORASIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_REGISTROMORASIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_REGISTROMORASIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_REGISTROMORASIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_REGISTROMORASIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_REGISTROMORASIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_REGISTROMORASIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_REGISTROMORASIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_REGISTROMORASIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_REGISTROMORASIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_REGISTROMORASIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_REGISTROMORASIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_REGISTROMORASIDContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_REGISTROMORASIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_REGISTROMORASIDContainer.addV2CFunction('AV45RegistroMorasIdTitleFilterData', "vREGISTROMORASIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_REGISTROMORASIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45RegistroMorasIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vREGISTROMORASIDTITLEFILTERDATA",UC.ParentObject.AV45RegistroMorasIdTitleFilterData); });
   DDO_REGISTROMORASIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_REGISTROMORASIDContainer.addEventHandler("OnOptionClicked", this.e140x2_client);
   this.setUserControl(DDO_REGISTROMORASIDContainer);
   this.DDO_PAGOMATRICULAIDContainer = gx.uc.getNew(this, 61, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAIDContainer", "Ddo_pagomatriculaid", "DDO_PAGOMATRICULAID");
   var DDO_PAGOMATRICULAIDContainer = this.DDO_PAGOMATRICULAIDContainer;
   DDO_PAGOMATRICULAIDContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOMATRICULAIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOMATRICULAIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOMATRICULAIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAIDContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAIDContainer.addV2CFunction('AV49PagoMatriculaIdTitleFilterData', "vPAGOMATRICULAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PagoMatriculaIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAIDTITLEFILTERDATA",UC.ParentObject.AV49PagoMatriculaIdTitleFilterData); });
   DDO_PAGOMATRICULAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAIDContainer.addEventHandler("OnOptionClicked", this.e150x2_client);
   this.setUserControl(DDO_PAGOMATRICULAIDContainer);
   this.DDO_PARAMETROMORAIDContainer = gx.uc.getNew(this, 63, 35, "BootstrapDropDownOptions", "DDO_PARAMETROMORAIDContainer", "Ddo_parametromoraid", "DDO_PARAMETROMORAID");
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
   DDO_PARAMETROMORAIDContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PARAMETROMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_PARAMETROMORAIDContainer.addV2CFunction('AV53ParametroMoraIdTitleFilterData', "vPARAMETROMORAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PARAMETROMORAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53ParametroMoraIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPARAMETROMORAIDTITLEFILTERDATA",UC.ParentObject.AV53ParametroMoraIdTitleFilterData); });
   DDO_PARAMETROMORAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PARAMETROMORAIDContainer.addEventHandler("OnOptionClicked", this.e160x2_client);
   this.setUserControl(DDO_PARAMETROMORAIDContainer);
   this.DDO_REGISTROMORASFECHAContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_REGISTROMORASFECHAContainer", "Ddo_registromorasfecha", "DDO_REGISTROMORASFECHA");
   var DDO_REGISTROMORASFECHAContainer = this.DDO_REGISTROMORASFECHAContainer;
   DDO_REGISTROMORASFECHAContainer.setProp("Class", "Class", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("Icon", "Icon", "", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("Caption", "Caption", "", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_REGISTROMORASFECHAContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_REGISTROMORASFECHAContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setProp("Visible", "Visible", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_REGISTROMORASFECHAContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_REGISTROMORASFECHAContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_REGISTROMORASFECHAContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_REGISTROMORASFECHAContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_REGISTROMORASFECHAContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_REGISTROMORASFECHAContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_REGISTROMORASFECHAContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_REGISTROMORASFECHAContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_REGISTROMORASFECHAContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_REGISTROMORASFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_REGISTROMORASFECHAContainer.addV2CFunction('AV57RegistroMorasFechaTitleFilterData', "vREGISTROMORASFECHATITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_REGISTROMORASFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57RegistroMorasFechaTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vREGISTROMORASFECHATITLEFILTERDATA",UC.ParentObject.AV57RegistroMorasFechaTitleFilterData); });
   DDO_REGISTROMORASFECHAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_REGISTROMORASFECHAContainer.addEventHandler("OnOptionClicked", this.e170x2_client);
   this.setUserControl(DDO_REGISTROMORASFECHAContainer);
   this.DDO_REGISTROMORASVALORContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_REGISTROMORASVALORContainer", "Ddo_registromorasvalor", "DDO_REGISTROMORASVALOR");
   var DDO_REGISTROMORASVALORContainer = this.DDO_REGISTROMORASVALORContainer;
   DDO_REGISTROMORASVALORContainer.setProp("Class", "Class", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_REGISTROMORASVALORContainer.setProp("Icon", "Icon", "", "str");
   DDO_REGISTROMORASVALORContainer.setProp("Caption", "Caption", "", "str");
   DDO_REGISTROMORASVALORContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_REGISTROMORASVALORContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_REGISTROMORASVALORContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_REGISTROMORASVALORContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_REGISTROMORASVALORContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_REGISTROMORASVALORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_REGISTROMORASVALORContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_REGISTROMORASVALORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_REGISTROMORASVALORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_REGISTROMORASVALORContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_REGISTROMORASVALORContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_REGISTROMORASVALORContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_REGISTROMORASVALORContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_REGISTROMORASVALORContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_REGISTROMORASVALORContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_REGISTROMORASVALORContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_REGISTROMORASVALORContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_REGISTROMORASVALORContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_REGISTROMORASVALORContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_REGISTROMORASVALORContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_REGISTROMORASVALORContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_REGISTROMORASVALORContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_REGISTROMORASVALORContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_REGISTROMORASVALORContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_REGISTROMORASVALORContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_REGISTROMORASVALORContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_REGISTROMORASVALORContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_REGISTROMORASVALORContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_REGISTROMORASVALORContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_REGISTROMORASVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_REGISTROMORASVALORContainer.addV2CFunction('AV63RegistroMorasValorTitleFilterData', "vREGISTROMORASVALORTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_REGISTROMORASVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV63RegistroMorasValorTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vREGISTROMORASVALORTITLEFILTERDATA",UC.ParentObject.AV63RegistroMorasValorTitleFilterData); });
   DDO_REGISTROMORASVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_REGISTROMORASVALORContainer.addEventHandler("OnOptionClicked", this.e180x2_client);
   this.setUserControl(DDO_REGISTROMORASVALORContainer);
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV67DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV67DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e190x2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110x2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV73Update",gxold:"OV73Update",gxvar:"AV73Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV73Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV73Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV73Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV73Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV74Delete",gxold:"OV74Delete",gxvar:"AV74Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV74Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV74Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV74Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV74Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASID",gxz:"Z37RegistroMorasId",gxold:"O37RegistroMorasId",gxvar:"A37RegistroMorasId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z37RegistroMorasId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REGISTROMORASID",row || gx.fn.currentGridRowImpl(44),gx.O.A37RegistroMorasId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REGISTROMORASID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULAID",row || gx.fn.currentGridRowImpl(44),gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGOMATRICULAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAID",gxz:"Z35ParametroMoraId",gxold:"O35ParametroMoraId",gxvar:"A35ParametroMoraId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z35ParametroMoraId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PARAMETROMORAID",row || gx.fn.currentGridRowImpl(44),gx.O.A35ParametroMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PARAMETROMORAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASFECHA",gxz:"Z117RegistroMorasFecha",gxold:"O117RegistroMorasFecha",gxvar:"A117RegistroMorasFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("REGISTROMORASFECHA",row || gx.fn.currentGridRowImpl(44),gx.O.A117RegistroMorasFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("REGISTROMORASFECHA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASVALOR",gxz:"Z118RegistroMorasValor",gxold:"O118RegistroMorasValor",gxvar:"A118RegistroMorasValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z118RegistroMorasValor=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("REGISTROMORASVALOR",row || gx.fn.currentGridRowImpl(44),gx.O.A118RegistroMorasValor,0)},c2v:function(){if(this.val()!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("REGISTROMORASVALOR",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_RegistroMorasIdTitleControlIdToReplace",gxold:"OV48ddo_RegistroMorasIdTitleControlIdToReplace",gxvar:"AV48ddo_RegistroMorasIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_RegistroMorasIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_RegistroMorasIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_RegistroMorasIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_RegistroMorasIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_PagoMatriculaIdTitleControlIdToReplace",gxold:"OV52ddo_PagoMatriculaIdTitleControlIdToReplace",gxvar:"AV52ddo_PagoMatriculaIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_PagoMatriculaIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_PagoMatriculaIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE",gx.O.AV52ddo_PagoMatriculaIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_PagoMatriculaIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_ParametroMoraIdTitleControlIdToReplace",gxold:"OV56ddo_ParametroMoraIdTitleControlIdToReplace",gxvar:"AV56ddo_ParametroMoraIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_ParametroMoraIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_ParametroMoraIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_ParametroMoraIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_ParametroMoraIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE",gxz:"ZV62ddo_RegistroMorasFechaTitleControlIdToReplace",gxold:"OV62ddo_RegistroMorasFechaTitleControlIdToReplace",gxvar:"AV62ddo_RegistroMorasFechaTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62ddo_RegistroMorasFechaTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62ddo_RegistroMorasFechaTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE",gx.O.AV62ddo_RegistroMorasFechaTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62ddo_RegistroMorasFechaTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE",gxz:"ZV66ddo_RegistroMorasValorTitleControlIdToReplace",gxold:"OV66ddo_RegistroMorasValorTitleControlIdToReplace",gxvar:"AV66ddo_RegistroMorasValorTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66ddo_RegistroMorasValorTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66ddo_RegistroMorasValorTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE",gx.O.AV66ddo_RegistroMorasValorTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66ddo_RegistroMorasValorTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASID",gxz:"ZV46TFRegistroMorasId",gxold:"OV46TFRegistroMorasId",gxvar:"AV46TFRegistroMorasId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFRegistroMorasId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFRegistroMorasId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASID",gx.O.AV46TFRegistroMorasId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFRegistroMorasId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFREGISTROMORASID",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASID_TO",gxz:"ZV47TFRegistroMorasId_To",gxold:"OV47TFRegistroMorasId_To",gxvar:"AV47TFRegistroMorasId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFRegistroMorasId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFRegistroMorasId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASID_TO",gx.O.AV47TFRegistroMorasId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFRegistroMorasId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFREGISTROMORASID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAID",gxz:"ZV50TFPagoMatriculaId",gxold:"OV50TFPagoMatriculaId",gxvar:"AV50TFPagoMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAID",gx.O.AV50TFPagoMatriculaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOMATRICULAID",'.')},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAID_TO",gxz:"ZV51TFPagoMatriculaId_To",gxold:"OV51TFPagoMatriculaId_To",gxvar:"AV51TFPagoMatriculaId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPagoMatriculaId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPagoMatriculaId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAID_TO",gx.O.AV51TFPagoMatriculaId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPagoMatriculaId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOMATRICULAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAID",gxz:"ZV54TFParametroMoraId",gxold:"OV54TFParametroMoraId",gxvar:"AV54TFParametroMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFParametroMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORAID",gx.O.AV54TFParametroMoraId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFParametroMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPARAMETROMORAID",'.')},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPARAMETROMORAID_TO",gxz:"ZV55TFParametroMoraId_To",gxold:"OV55TFParametroMoraId_To",gxvar:"AV55TFParametroMoraId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFParametroMoraId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFParametroMoraId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPARAMETROMORAID_TO",gx.O.AV55TFParametroMoraId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFParametroMoraId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPARAMETROMORAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfregistromorasfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASFECHA",gxz:"ZV58TFRegistroMorasFecha",gxold:"OV58TFRegistroMorasFecha",gxvar:"AV58TFRegistroMorasFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[81],ip:[81],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFRegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFRegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASFECHA",gx.O.AV58TFRegistroMorasFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFRegistroMorasFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFREGISTROMORASFECHA")},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfregistromorasfecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASFECHA_TO",gxz:"ZV59TFRegistroMorasFecha_To",gxold:"OV59TFRegistroMorasFecha_To",gxvar:"AV59TFRegistroMorasFecha_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[82],ip:[82],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFRegistroMorasFecha_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFRegistroMorasFecha_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASFECHA_TO",gx.O.AV59TFRegistroMorasFecha_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFRegistroMorasFecha_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFREGISTROMORASFECHA_TO")},nac:gx.falseFn};
   GXValidFnc[83]={ id: 83, fld:"DDO_REGISTROMORASFECHAAUXDATES",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_registromorasfechaauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_REGISTROMORASFECHAAUXDATE",gxz:"ZV60DDO_RegistroMorasFechaAuxDate",gxold:"OV60DDO_RegistroMorasFechaAuxDate",gxvar:"AV60DDO_RegistroMorasFechaAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[84],ip:[84],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60DDO_RegistroMorasFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV60DDO_RegistroMorasFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_REGISTROMORASFECHAAUXDATE",gx.O.AV60DDO_RegistroMorasFechaAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60DDO_RegistroMorasFechaAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_REGISTROMORASFECHAAUXDATE")},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_registromorasfechaauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_REGISTROMORASFECHAAUXDATETO",gxz:"ZV61DDO_RegistroMorasFechaAuxDateTo",gxold:"OV61DDO_RegistroMorasFechaAuxDateTo",gxvar:"AV61DDO_RegistroMorasFechaAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[85],ip:[85],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV61DDO_RegistroMorasFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV61DDO_RegistroMorasFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_REGISTROMORASFECHAAUXDATETO",gx.O.AV61DDO_RegistroMorasFechaAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV61DDO_RegistroMorasFechaAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_REGISTROMORASFECHAAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASVALOR",gxz:"ZV64TFRegistroMorasValor",gxold:"OV64TFRegistroMorasValor",gxvar:"AV64TFRegistroMorasValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64TFRegistroMorasValor=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV64TFRegistroMorasValor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASVALOR",gx.O.AV64TFRegistroMorasValor,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64TFRegistroMorasValor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFREGISTROMORASVALOR",'.')},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFREGISTROMORASVALOR_TO",gxz:"ZV65TFRegistroMorasValor_To",gxold:"OV65TFRegistroMorasValor_To",gxvar:"AV65TFRegistroMorasValor_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV65TFRegistroMorasValor_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV65TFRegistroMorasValor_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFREGISTROMORASVALOR_TO",gx.O.AV65TFRegistroMorasValor_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV65TFRegistroMorasValor_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFREGISTROMORASVALOR_TO",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV73Update = "" ;
   this.OV73Update = "" ;
   this.ZV74Delete = "" ;
   this.OV74Delete = "" ;
   this.Z37RegistroMorasId = 0 ;
   this.O37RegistroMorasId = 0 ;
   this.Z33PagoMatriculaId = 0 ;
   this.O33PagoMatriculaId = 0 ;
   this.Z35ParametroMoraId = 0 ;
   this.O35ParametroMoraId = 0 ;
   this.Z117RegistroMorasFecha = gx.date.nullDate() ;
   this.O117RegistroMorasFecha = gx.date.nullDate() ;
   this.Z118RegistroMorasValor = 0 ;
   this.O118RegistroMorasValor = 0 ;
   this.AV48ddo_RegistroMorasIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_RegistroMorasIdTitleControlIdToReplace = "" ;
   this.OV48ddo_RegistroMorasIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.ZV52ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.OV52ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.AV56ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.ZV56ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.OV56ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.AV62ddo_RegistroMorasFechaTitleControlIdToReplace = "" ;
   this.ZV62ddo_RegistroMorasFechaTitleControlIdToReplace = "" ;
   this.OV62ddo_RegistroMorasFechaTitleControlIdToReplace = "" ;
   this.AV66ddo_RegistroMorasValorTitleControlIdToReplace = "" ;
   this.ZV66ddo_RegistroMorasValorTitleControlIdToReplace = "" ;
   this.OV66ddo_RegistroMorasValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFRegistroMorasId = 0 ;
   this.ZV46TFRegistroMorasId = 0 ;
   this.OV46TFRegistroMorasId = 0 ;
   this.AV47TFRegistroMorasId_To = 0 ;
   this.ZV47TFRegistroMorasId_To = 0 ;
   this.OV47TFRegistroMorasId_To = 0 ;
   this.AV50TFPagoMatriculaId = 0 ;
   this.ZV50TFPagoMatriculaId = 0 ;
   this.OV50TFPagoMatriculaId = 0 ;
   this.AV51TFPagoMatriculaId_To = 0 ;
   this.ZV51TFPagoMatriculaId_To = 0 ;
   this.OV51TFPagoMatriculaId_To = 0 ;
   this.AV54TFParametroMoraId = 0 ;
   this.ZV54TFParametroMoraId = 0 ;
   this.OV54TFParametroMoraId = 0 ;
   this.AV55TFParametroMoraId_To = 0 ;
   this.ZV55TFParametroMoraId_To = 0 ;
   this.OV55TFParametroMoraId_To = 0 ;
   this.AV58TFRegistroMorasFecha = gx.date.nullDate() ;
   this.ZV58TFRegistroMorasFecha = gx.date.nullDate() ;
   this.OV58TFRegistroMorasFecha = gx.date.nullDate() ;
   this.AV59TFRegistroMorasFecha_To = gx.date.nullDate() ;
   this.ZV59TFRegistroMorasFecha_To = gx.date.nullDate() ;
   this.OV59TFRegistroMorasFecha_To = gx.date.nullDate() ;
   this.AV60DDO_RegistroMorasFechaAuxDate = gx.date.nullDate() ;
   this.ZV60DDO_RegistroMorasFechaAuxDate = gx.date.nullDate() ;
   this.OV60DDO_RegistroMorasFechaAuxDate = gx.date.nullDate() ;
   this.AV61DDO_RegistroMorasFechaAuxDateTo = gx.date.nullDate() ;
   this.ZV61DDO_RegistroMorasFechaAuxDateTo = gx.date.nullDate() ;
   this.OV61DDO_RegistroMorasFechaAuxDateTo = gx.date.nullDate() ;
   this.AV64TFRegistroMorasValor = 0 ;
   this.ZV64TFRegistroMorasValor = 0 ;
   this.OV64TFRegistroMorasValor = 0 ;
   this.AV65TFRegistroMorasValor_To = 0 ;
   this.ZV65TFRegistroMorasValor_To = 0 ;
   this.OV65TFRegistroMorasValor_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV69GridCurrentPage = 0 ;
   this.AV67DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_RegistroMorasIdTitleControlIdToReplace = "" ;
   this.AV52ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.AV56ddo_ParametroMoraIdTitleControlIdToReplace = "" ;
   this.AV62ddo_RegistroMorasFechaTitleControlIdToReplace = "" ;
   this.AV66ddo_RegistroMorasValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFRegistroMorasId = 0 ;
   this.AV47TFRegistroMorasId_To = 0 ;
   this.AV50TFPagoMatriculaId = 0 ;
   this.AV51TFPagoMatriculaId_To = 0 ;
   this.AV54TFParametroMoraId = 0 ;
   this.AV55TFParametroMoraId_To = 0 ;
   this.AV58TFRegistroMorasFecha = gx.date.nullDate() ;
   this.AV59TFRegistroMorasFecha_To = gx.date.nullDate() ;
   this.AV60DDO_RegistroMorasFechaAuxDate = gx.date.nullDate() ;
   this.AV61DDO_RegistroMorasFechaAuxDateTo = gx.date.nullDate() ;
   this.AV64TFRegistroMorasValor = 0 ;
   this.AV65TFRegistroMorasValor_To = 0 ;
   this.AV73Update = "" ;
   this.AV74Delete = "" ;
   this.A37RegistroMorasId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.A35ParametroMoraId = 0 ;
   this.A117RegistroMorasFecha = gx.date.nullDate() ;
   this.A118RegistroMorasValor = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV89Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120x2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130x2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140x2_client": ["DDO_REGISTROMORASID.ONOPTIONCLICKED", true] ,"e150x2_client": ["DDO_PAGOMATRICULAID.ONOPTIONCLICKED", true] ,"e160x2_client": ["DDO_PARAMETROMORAID.ONOPTIONCLICKED", true] ,"e170x2_client": ["DDO_REGISTROMORASFECHA.ONOPTIONCLICKED", true] ,"e180x2_client": ["DDO_REGISTROMORASVALOR.ONOPTIONCLICKED", true] ,"e190x2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110x2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e200x2_client": ["'DOINSERT'", true] ,"e210x2_client": ["'DOEXPORT'", true] ,"e220x2_client": ["'DOEXPORTREPORT'", true] ,"e260x2_client": ["ENTER", true] ,"e270x2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASID","Visible")',ctrl:'vTFREGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASID_TO","Visible")',ctrl:'vTFREGISTROMORASID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAID","Visible")',ctrl:'vTFPAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAID_TO","Visible")',ctrl:'vTFPAGOMATRICULAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAID","Visible")',ctrl:'vTFPARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPARAMETROMORAID_TO","Visible")',ctrl:'vTFPARAMETROMORAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASFECHA","Visible")',ctrl:'vTFREGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASFECHA_TO","Visible")',ctrl:'vTFREGISTROMORASFECHA_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASVALOR","Visible")',ctrl:'vTFREGISTROMORASVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFREGISTROMORASVALOR_TO","Visible")',ctrl:'vTFREGISTROMORASVALOR_TO',prop:'Visible'},{av:'this.DDO_REGISTROMORASIDContainer.TitleControlIdToReplace',ctrl:'DDO_REGISTROMORASID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAID',prop:'TitleControlIdToReplace'},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PARAMETROMORAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PARAMETROMORAID',prop:'TitleControlIdToReplace'},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_REGISTROMORASFECHAContainer.TitleControlIdToReplace',ctrl:'DDO_REGISTROMORASFECHA',prop:'TitleControlIdToReplace'},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_REGISTROMORASVALORContainer.TitleControlIdToReplace',ctrl:'DDO_REGISTROMORASVALOR',prop:'TitleControlIdToReplace'},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV67DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredTextTo_set'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredTextTo_set'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_REGISTROMORASID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_REGISTROMORASIDContainer.ActiveEventKey',ctrl:'DDO_REGISTROMORASID',prop:'ActiveEventKey'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredText_get',ctrl:'DDO_REGISTROMORASID',prop:'FilteredText_get'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredTextTo_get',ctrl:'DDO_REGISTROMORASID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAID',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PARAMETROMORAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.ActiveEventKey',ctrl:'DDO_PARAMETROMORAID',prop:'ActiveEventKey'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_get',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_get'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_get',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_REGISTROMORASFECHA.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.ActiveEventKey',ctrl:'DDO_REGISTROMORASFECHA',prop:'ActiveEventKey'},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredText_get',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredText_get'},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_get',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_REGISTROMORASVALOR.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_REGISTROMORASVALORContainer.ActiveEventKey',ctrl:'DDO_REGISTROMORASVALOR',prop:'ActiveEventKey'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredText_get',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredText_get'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_get',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A37RegistroMorasId',fld:'REGISTROMORASID',pic:'ZZZ9',hsh:true}],[{av:'AV73Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV74Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Link")',ctrl:'REGISTROMORASFECHA',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_RegistroMorasIdTitleControlIdToReplace',fld:'vDDO_REGISTROMORASIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ParametroMoraIdTitleControlIdToReplace',fld:'vDDO_PARAMETROMORAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_RegistroMorasFechaTitleControlIdToReplace',fld:'vDDO_REGISTROMORASFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_RegistroMorasValorTitleControlIdToReplace',fld:'vDDO_REGISTROMORASVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredText_set'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredText_set'},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredTextTo_set'},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredText_set'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredTextTo_set'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV45RegistroMorasIdTitleFilterData',fld:'vREGISTROMORASIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV53ParametroMoraIdTitleFilterData',fld:'vPARAMETROMORAIDTITLEFILTERDATA',pic:''},{av:'AV57RegistroMorasFechaTitleFilterData',fld:'vREGISTROMORASFECHATITLEFILTERDATA',pic:''},{av:'AV63RegistroMorasValorTitleFilterData',fld:'vREGISTROMORASVALORTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Visible")',ctrl:'REGISTROMORASID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Visible")',ctrl:'PARAMETROMORAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Visible")',ctrl:'REGISTROMORASFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Visible")',ctrl:'REGISTROMORASVALOR',prop:'Visible'},{ctrl:'REGISTROMORASID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("REGISTROMORASID","Title")',ctrl:'REGISTROMORASID',prop:'Title'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PARAMETROMORAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PARAMETROMORAID","Title")',ctrl:'PARAMETROMORAID',prop:'Title'},{ctrl:'REGISTROMORASFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASFECHA","Title")',ctrl:'REGISTROMORASFECHA',prop:'Title'},{ctrl:'REGISTROMORASVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("REGISTROMORASVALOR","Title")',ctrl:'REGISTROMORASVALOR',prop:'Title'},{av:'AV69GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV70GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A37RegistroMorasId',fld:'REGISTROMORASID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredTextTo_set'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredTextTo_set'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV89Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_REGISTROMORASIDContainer.SortedStatus',ctrl:'DDO_REGISTROMORASID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PARAMETROMORAIDContainer.SortedStatus',ctrl:'DDO_PARAMETROMORAID',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASFECHAContainer.SortedStatus',ctrl:'DDO_REGISTROMORASFECHA',prop:'SortedStatus'},{av:'this.DDO_REGISTROMORASVALORContainer.SortedStatus',ctrl:'DDO_REGISTROMORASVALOR',prop:'SortedStatus'},{av:'AV64TFRegistroMorasValor',fld:'vTFREGISTROMORASVALOR',pic:'ZZZ9'},{av:'AV65TFRegistroMorasValor_To',fld:'vTFREGISTROMORASVALOR_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASVALORContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASVALOR',prop:'FilteredTextTo_set'},{av:'AV58TFRegistroMorasFecha',fld:'vTFREGISTROMORASFECHA',pic:''},{av:'AV59TFRegistroMorasFecha_To',fld:'vTFREGISTROMORASFECHA_TO',pic:''},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASFECHAContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASFECHA',prop:'FilteredTextTo_set'},{av:'AV54TFParametroMoraId',fld:'vTFPARAMETROMORAID',pic:'ZZZ9'},{av:'AV55TFParametroMoraId_To',fld:'vTFPARAMETROMORAID_TO',pic:'ZZZ9'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredText_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredText_set'},{av:'this.DDO_PARAMETROMORAIDContainer.FilteredTextTo_set',ctrl:'DDO_PARAMETROMORAID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV51TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV46TFRegistroMorasId',fld:'vTFREGISTROMORASID',pic:'ZZZ9'},{av:'AV47TFRegistroMorasId_To',fld:'vTFREGISTROMORASID_TO',pic:'ZZZ9'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredText_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredText_set'},{av:'this.DDO_REGISTROMORASIDContainer.FilteredTextTo_set',ctrl:'DDO_REGISTROMORASID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV89Pgmname", "vPGMNAME", 0, "char", 129, 0);
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
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[60]);
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV89Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.registromorasww);});
