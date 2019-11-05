/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:16:26.11
*/
gx.evt.autoSkip = false;
gx.define('academia.docenteww', false, function () {
   this.ServerClass =  "academia.docenteww" ;
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
      this.AV93Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV93Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Tfdocenteemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFDOCENTEEMAIL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV58TFDocenteEmail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV58TFDocenteEmail)) ) )
         {
            try {
               gxballoon.setError("El valor de TFDocente Email no coincide con el patrón especificado");
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
   this.Validv_Tfdocenteemail_sel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFDOCENTEEMAIL_SEL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV59TFDocenteEmail_Sel, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV59TFDocenteEmail_Sel)) ) )
         {
            try {
               gxballoon.setError("El valor de TFDocente Email_Sel no coincide con el patrón especificado");
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
         this.DDO_DOCENTEIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_DOCENTENOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_DOCENTEEMAILContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_DOCENTETELEFONOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_DOCENTEDIRECCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_DOCENTEIDContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTENOMBREContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTEEMAILContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTETELEFONOContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTEDIRECCIONContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFDocenteId = gx.num.trunc( 0 ,0) ;
      this.DDO_DOCENTEIDContainer.FilteredText_set =  ""  ;
      this.AV47TFDocenteId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_DOCENTEIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFDocenteNumeroIdentidad =  ''  ;
      this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_set =  ""  ;
      this.AV51TFDocenteNumeroIdentidad_Sel =  ''  ;
      this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_set =  ""  ;
      this.AV54TFDocenteNombre =  ''  ;
      this.DDO_DOCENTENOMBREContainer.FilteredText_set =  ""  ;
      this.AV55TFDocenteNombre_Sel =  ''  ;
      this.DDO_DOCENTENOMBREContainer.SelectedValue_set =  ""  ;
      this.AV58TFDocenteEmail =  ''  ;
      this.DDO_DOCENTEEMAILContainer.FilteredText_set =  ""  ;
      this.AV59TFDocenteEmail_Sel =  ''  ;
      this.DDO_DOCENTEEMAILContainer.SelectedValue_set =  ""  ;
      this.AV62TFDocenteTelefono =  ''  ;
      this.DDO_DOCENTETELEFONOContainer.FilteredText_set =  ""  ;
      this.AV63TFDocenteTelefono_Sel =  ''  ;
      this.DDO_DOCENTETELEFONOContainer.SelectedValue_set =  ""  ;
      this.AV66TFDocenteDireccion =  ''  ;
      this.DDO_DOCENTEDIRECCIONContainer.FilteredText_set =  ""  ;
      this.AV67TFDocenteDireccion_Sel =  ''  ;
      this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_set =  ""  ;
   };
   this.e120g2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130g2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTEID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTENUMEROIDENTIDAD.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTENOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTEEMAIL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTETELEFONO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190g2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTEDIRECCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200g2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110g2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210g2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e220g2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e230g2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e270g2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e280g2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,57,58,59,61,63,65,67,69,71,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89];
   this.GXLastCtrlId =89;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.docenteww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(12,47,"DOCENTEID","","","DocenteId","int",0,"px",4,4,"right",null,[],12,"DocenteId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(13,48,"DOCENTENUMEROIDENTIDAD","","","DocenteNumeroIdentidad","char",0,"px",20,20,"left",null,[],13,"DocenteNumeroIdentidad",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(14,49,"DOCENTENOMBRE","","","DocenteNombre","char",0,"px",50,50,"left",null,[],14,"DocenteNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(15,50,"DOCENTEEMAIL","","","DocenteEmail","svchar",0,"px",100,80,"left",null,[],15,"DocenteEmail",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(16,51,"DOCENTETELEFONO","","","DocenteTelefono","char",0,"px",20,20,"left",null,[],16,"DocenteTelefono",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(17,52,"DOCENTEDIRECCION","","","DocenteDireccion","svchar",0,"px",1024,80,"left",null,[],17,"DocenteDireccion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 56, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV71GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV71GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV72GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV72GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV72GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120g2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130g2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_DOCENTEIDContainer = gx.uc.getNew(this, 60, 35, "BootstrapDropDownOptions", "DDO_DOCENTEIDContainer", "Ddo_docenteid", "DDO_DOCENTEID");
   var DDO_DOCENTEIDContainer = this.DDO_DOCENTEIDContainer;
   DDO_DOCENTEIDContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTEIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTEIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTEIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTEIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTEIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTEIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTEIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTEIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTEIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTEIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTEIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTEIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTEIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTEIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTEIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTEIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTEIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTEIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTEIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_DOCENTEIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_DOCENTEIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_DOCENTEIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_DOCENTEIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_DOCENTEIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTEIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_DOCENTEIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTEIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_DOCENTEIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTEIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTEIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTEIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTEIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTEIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTEIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTEIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTEIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTEIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_DOCENTEIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTEIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_DOCENTEIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_DOCENTEIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_DOCENTEIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTEIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTEIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTEIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTEIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTEIDContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTEIDContainer.addV2CFunction('AV45DocenteIdTitleFilterData', "vDOCENTEIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45DocenteIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTEIDTITLEFILTERDATA",UC.ParentObject.AV45DocenteIdTitleFilterData); });
   DDO_DOCENTEIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTEIDContainer.addEventHandler("OnOptionClicked", this.e140g2_client);
   this.setUserControl(DDO_DOCENTEIDContainer);
   this.DDO_DOCENTENUMEROIDENTIDADContainer = gx.uc.getNew(this, 62, 35, "BootstrapDropDownOptions", "DDO_DOCENTENUMEROIDENTIDADContainer", "Ddo_docentenumeroidentidad", "DDO_DOCENTENUMEROIDENTIDAD");
   var DDO_DOCENTENUMEROIDENTIDADContainer = this.DDO_DOCENTENUMEROIDENTIDADContainer;
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DataListProc", "Datalistproc", "Academia.DocenteWWGetFilterData", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTENUMEROIDENTIDADContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTENUMEROIDENTIDADContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTENUMEROIDENTIDADContainer.addV2CFunction('AV49DocenteNumeroIdentidadTitleFilterData', "vDOCENTENUMEROIDENTIDADTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTENUMEROIDENTIDADContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49DocenteNumeroIdentidadTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTENUMEROIDENTIDADTITLEFILTERDATA",UC.ParentObject.AV49DocenteNumeroIdentidadTitleFilterData); });
   DDO_DOCENTENUMEROIDENTIDADContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTENUMEROIDENTIDADContainer.addEventHandler("OnOptionClicked", this.e150g2_client);
   this.setUserControl(DDO_DOCENTENUMEROIDENTIDADContainer);
   this.DDO_DOCENTENOMBREContainer = gx.uc.getNew(this, 64, 35, "BootstrapDropDownOptions", "DDO_DOCENTENOMBREContainer", "Ddo_docentenombre", "DDO_DOCENTENOMBRE");
   var DDO_DOCENTENOMBREContainer = this.DDO_DOCENTENOMBREContainer;
   DDO_DOCENTENOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTENOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTENOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTENOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTENOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTENOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTENOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTENOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTENOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTENOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTENOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTENOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTENOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_DOCENTENOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_DOCENTENOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_DOCENTENOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_DOCENTENOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_DOCENTENOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.DocenteWWGetFilterData", "str");
   DDO_DOCENTENOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_DOCENTENOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTENOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTENOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTENOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_DOCENTENOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTENOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_DOCENTENOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTENOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTENOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV53DocenteNombreTitleFilterData', "vDOCENTENOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53DocenteNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTENOMBRETITLEFILTERDATA",UC.ParentObject.AV53DocenteNombreTitleFilterData); });
   DDO_DOCENTENOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTENOMBREContainer.addEventHandler("OnOptionClicked", this.e160g2_client);
   this.setUserControl(DDO_DOCENTENOMBREContainer);
   this.DDO_DOCENTEEMAILContainer = gx.uc.getNew(this, 66, 35, "BootstrapDropDownOptions", "DDO_DOCENTEEMAILContainer", "Ddo_docenteemail", "DDO_DOCENTEEMAIL");
   var DDO_DOCENTEEMAILContainer = this.DDO_DOCENTEEMAILContainer;
   DDO_DOCENTEEMAILContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTEEMAILContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTEEMAILContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTEEMAILContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTEEMAILContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTEEMAILContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTEEMAILContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTEEMAILContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTEEMAILContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTEEMAILContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTEEMAILContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTEEMAILContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTEEMAILContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTEEMAILContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTEEMAILContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTEEMAILContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_DOCENTEEMAILContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_DOCENTEEMAILContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_DOCENTEEMAILContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_DOCENTEEMAILContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_DOCENTEEMAILContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("DataListProc", "Datalistproc", "Academia.DocenteWWGetFilterData", "str");
   DDO_DOCENTEEMAILContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_DOCENTEEMAILContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTEEMAILContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTEEMAILContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTEEMAILContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTEEMAILContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTEEMAILContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTEEMAILContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTEEMAILContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_DOCENTEEMAILContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTEEMAILContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_DOCENTEEMAILContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTEEMAILContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTEEMAILContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTEEMAILContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTEEMAILContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTEEMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTEEMAILContainer.addV2CFunction('AV57DocenteEmailTitleFilterData', "vDOCENTEEMAILTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTEEMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57DocenteEmailTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTEEMAILTITLEFILTERDATA",UC.ParentObject.AV57DocenteEmailTitleFilterData); });
   DDO_DOCENTEEMAILContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTEEMAILContainer.addEventHandler("OnOptionClicked", this.e170g2_client);
   this.setUserControl(DDO_DOCENTEEMAILContainer);
   this.DDO_DOCENTETELEFONOContainer = gx.uc.getNew(this, 68, 35, "BootstrapDropDownOptions", "DDO_DOCENTETELEFONOContainer", "Ddo_docentetelefono", "DDO_DOCENTETELEFONO");
   var DDO_DOCENTETELEFONOContainer = this.DDO_DOCENTETELEFONOContainer;
   DDO_DOCENTETELEFONOContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTETELEFONOContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTETELEFONOContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTETELEFONOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTETELEFONOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTETELEFONOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTETELEFONOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTETELEFONOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTETELEFONOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTETELEFONOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTETELEFONOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTETELEFONOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_DOCENTETELEFONOContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_DOCENTETELEFONOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_DOCENTETELEFONOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("DataListProc", "Datalistproc", "Academia.DocenteWWGetFilterData", "str");
   DDO_DOCENTETELEFONOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_DOCENTETELEFONOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTETELEFONOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTETELEFONOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTETELEFONOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTETELEFONOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTETELEFONOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTETELEFONOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTETELEFONOContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_DOCENTETELEFONOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTETELEFONOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_DOCENTETELEFONOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTETELEFONOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTETELEFONOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTETELEFONOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTETELEFONOContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTETELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTETELEFONOContainer.addV2CFunction('AV61DocenteTelefonoTitleFilterData', "vDOCENTETELEFONOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTETELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61DocenteTelefonoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTETELEFONOTITLEFILTERDATA",UC.ParentObject.AV61DocenteTelefonoTitleFilterData); });
   DDO_DOCENTETELEFONOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTETELEFONOContainer.addEventHandler("OnOptionClicked", this.e180g2_client);
   this.setUserControl(DDO_DOCENTETELEFONOContainer);
   this.DDO_DOCENTEDIRECCIONContainer = gx.uc.getNew(this, 70, 35, "BootstrapDropDownOptions", "DDO_DOCENTEDIRECCIONContainer", "Ddo_docentedireccion", "DDO_DOCENTEDIRECCION");
   var DDO_DOCENTEDIRECCIONContainer = this.DDO_DOCENTEDIRECCIONContainer;
   DDO_DOCENTEDIRECCIONContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_DOCENTEDIRECCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.DocenteWWGetFilterData", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_DOCENTEDIRECCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTEDIRECCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTEDIRECCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTEDIRECCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTEDIRECCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTEDIRECCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTEDIRECCIONContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTEDIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_DOCENTEDIRECCIONContainer.addV2CFunction('AV65DocenteDireccionTitleFilterData', "vDOCENTEDIRECCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTEDIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV65DocenteDireccionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTEDIRECCIONTITLEFILTERDATA",UC.ParentObject.AV65DocenteDireccionTitleFilterData); });
   DDO_DOCENTEDIRECCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTEDIRECCIONContainer.addEventHandler("OnOptionClicked", this.e190g2_client);
   this.setUserControl(DDO_DOCENTEDIRECCIONContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 72, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 73, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 74, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e200g2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110g2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV75Update",gxold:"OV75Update",gxvar:"AV75Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV75Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV75Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV75Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV75Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV76Delete",gxold:"OV76Delete",gxvar:"AV76Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV76Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV76Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV76Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV76Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCENTEID",row || gx.fn.currentGridRowImpl(44),gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCENTEID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENUMEROIDENTIDAD",gxz:"Z13DocenteNumeroIdentidad",gxold:"O13DocenteNumeroIdentidad",gxvar:"A13DocenteNumeroIdentidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A13DocenteNumeroIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z13DocenteNumeroIdentidad=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTENUMEROIDENTIDAD",row || gx.fn.currentGridRowImpl(44),gx.O.A13DocenteNumeroIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.A13DocenteNumeroIdentidad=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTENUMEROIDENTIDAD",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEEMAIL",gxz:"Z15DocenteEmail",gxold:"O15DocenteEmail",gxvar:"A15DocenteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'email',v2v:function(Value){if(Value!==undefined)gx.O.A15DocenteEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z15DocenteEmail=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTEEMAIL",row || gx.fn.currentGridRowImpl(44),gx.O.A15DocenteEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A15DocenteEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTEEMAIL",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTETELEFONO",gxz:"Z16DocenteTelefono",gxold:"O16DocenteTelefono",gxvar:"A16DocenteTelefono",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'tel',v2v:function(Value){if(Value!==undefined)gx.O.A16DocenteTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z16DocenteTelefono=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTETELEFONO",row || gx.fn.currentGridRowImpl(44),gx.O.A16DocenteTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A16DocenteTelefono=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTETELEFONO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"svchar",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEDIRECCION",gxz:"Z17DocenteDireccion",gxold:"O17DocenteDireccion",gxvar:"A17DocenteDireccion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A17DocenteDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z17DocenteDireccion=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTEDIRECCION",row || gx.fn.currentGridRowImpl(44),gx.O.A17DocenteDireccion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A17DocenteDireccion=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTEDIRECCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_DocenteIdTitleControlIdToReplace",gxold:"OV48ddo_DocenteIdTitleControlIdToReplace",gxvar:"AV48ddo_DocenteIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_DocenteIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_DocenteIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_DocenteIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_DocenteIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace",gxold:"OV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace",gxvar:"AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE",gx.O.AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_DocenteNombreTitleControlIdToReplace",gxold:"OV56ddo_DocenteNombreTitleControlIdToReplace",gxvar:"AV56ddo_DocenteNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_DocenteNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_DocenteNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gx.O.AV56ddo_DocenteNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_DocenteNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_DocenteEmailTitleControlIdToReplace",gxold:"OV60ddo_DocenteEmailTitleControlIdToReplace",gxvar:"AV60ddo_DocenteEmailTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_DocenteEmailTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_DocenteEmailTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_DocenteEmailTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_DocenteEmailTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE",gxz:"ZV64ddo_DocenteTelefonoTitleControlIdToReplace",gxold:"OV64ddo_DocenteTelefonoTitleControlIdToReplace",gxvar:"AV64ddo_DocenteTelefonoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64ddo_DocenteTelefonoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64ddo_DocenteTelefonoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE",gx.O.AV64ddo_DocenteTelefonoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64ddo_DocenteTelefonoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE",gxz:"ZV68ddo_DocenteDireccionTitleControlIdToReplace",gxold:"OV68ddo_DocenteDireccionTitleControlIdToReplace",gxvar:"AV68ddo_DocenteDireccionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68ddo_DocenteDireccionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68ddo_DocenteDireccionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE",gx.O.AV68ddo_DocenteDireccionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68ddo_DocenteDireccionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEID",gxz:"ZV46TFDocenteId",gxold:"OV46TFDocenteId",gxvar:"AV46TFDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFDOCENTEID",gx.O.AV46TFDocenteId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFDOCENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEID_TO",gxz:"ZV47TFDocenteId_To",gxold:"OV47TFDocenteId_To",gxvar:"AV47TFDocenteId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFDocenteId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFDocenteId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFDOCENTEID_TO",gx.O.AV47TFDocenteId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFDocenteId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFDOCENTEID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENUMEROIDENTIDAD",gxz:"ZV50TFDocenteNumeroIdentidad",gxold:"OV50TFDocenteNumeroIdentidad",gxvar:"AV50TFDocenteNumeroIdentidad",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFDocenteNumeroIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFDocenteNumeroIdentidad=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENUMEROIDENTIDAD",gx.O.AV50TFDocenteNumeroIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFDocenteNumeroIdentidad=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENUMEROIDENTIDAD")},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENUMEROIDENTIDAD_SEL",gxz:"ZV51TFDocenteNumeroIdentidad_Sel",gxold:"OV51TFDocenteNumeroIdentidad_Sel",gxvar:"AV51TFDocenteNumeroIdentidad_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFDocenteNumeroIdentidad_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFDocenteNumeroIdentidad_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENUMEROIDENTIDAD_SEL",gx.O.AV51TFDocenteNumeroIdentidad_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFDocenteNumeroIdentidad_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENUMEROIDENTIDAD_SEL")},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENOMBRE",gxz:"ZV54TFDocenteNombre",gxold:"OV54TFDocenteNombre",gxvar:"AV54TFDocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFDocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFDocenteNombre=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENOMBRE",gx.O.AV54TFDocenteNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFDocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENOMBRE")},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENOMBRE_SEL",gxz:"ZV55TFDocenteNombre_Sel",gxold:"OV55TFDocenteNombre_Sel",gxvar:"AV55TFDocenteNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFDocenteNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFDocenteNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENOMBRE_SEL",gx.O.AV55TFDocenteNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFDocenteNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfdocenteemail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEEMAIL",gxz:"ZV58TFDocenteEmail",gxold:"OV58TFDocenteEmail",gxvar:"AV58TFDocenteEmail",ucs:[],op:[84],ip:[84],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFDocenteEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFDocenteEmail=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTEEMAIL",gx.O.AV58TFDocenteEmail,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFDocenteEmail=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTEEMAIL")},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfdocenteemail_sel,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEEMAIL_SEL",gxz:"ZV59TFDocenteEmail_Sel",gxold:"OV59TFDocenteEmail_Sel",gxvar:"AV59TFDocenteEmail_Sel",ucs:[],op:[85],ip:[85],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFDocenteEmail_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFDocenteEmail_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTEEMAIL_SEL",gx.O.AV59TFDocenteEmail_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFDocenteEmail_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTEEMAIL_SEL")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTETELEFONO",gxz:"ZV62TFDocenteTelefono",gxold:"OV62TFDocenteTelefono",gxvar:"AV62TFDocenteTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFDocenteTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFDocenteTelefono=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTETELEFONO",gx.O.AV62TFDocenteTelefono,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFDocenteTelefono=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTETELEFONO")},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTETELEFONO_SEL",gxz:"ZV63TFDocenteTelefono_Sel",gxold:"OV63TFDocenteTelefono_Sel",gxvar:"AV63TFDocenteTelefono_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63TFDocenteTelefono_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TFDocenteTelefono_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTETELEFONO_SEL",gx.O.AV63TFDocenteTelefono_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63TFDocenteTelefono_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTETELEFONO_SEL")},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEDIRECCION",gxz:"ZV66TFDocenteDireccion",gxold:"OV66TFDocenteDireccion",gxvar:"AV66TFDocenteDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66TFDocenteDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66TFDocenteDireccion=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTEDIRECCION",gx.O.AV66TFDocenteDireccion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66TFDocenteDireccion=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTEDIRECCION")},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEDIRECCION_SEL",gxz:"ZV67TFDocenteDireccion_Sel",gxold:"OV67TFDocenteDireccion_Sel",gxvar:"AV67TFDocenteDireccion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV67TFDocenteDireccion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67TFDocenteDireccion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTEDIRECCION_SEL",gx.O.AV67TFDocenteDireccion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV67TFDocenteDireccion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTEDIRECCION_SEL")},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV75Update = "" ;
   this.OV75Update = "" ;
   this.ZV76Delete = "" ;
   this.OV76Delete = "" ;
   this.Z12DocenteId = 0 ;
   this.O12DocenteId = 0 ;
   this.Z13DocenteNumeroIdentidad = "" ;
   this.O13DocenteNumeroIdentidad = "" ;
   this.Z14DocenteNombre = "" ;
   this.O14DocenteNombre = "" ;
   this.Z15DocenteEmail = "" ;
   this.O15DocenteEmail = "" ;
   this.Z16DocenteTelefono = "" ;
   this.O16DocenteTelefono = "" ;
   this.Z17DocenteDireccion = "" ;
   this.O17DocenteDireccion = "" ;
   this.AV48ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.OV48ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace = "" ;
   this.ZV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace = "" ;
   this.OV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace = "" ;
   this.AV56ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.ZV56ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.OV56ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV60ddo_DocenteEmailTitleControlIdToReplace = "" ;
   this.ZV60ddo_DocenteEmailTitleControlIdToReplace = "" ;
   this.OV60ddo_DocenteEmailTitleControlIdToReplace = "" ;
   this.AV64ddo_DocenteTelefonoTitleControlIdToReplace = "" ;
   this.ZV64ddo_DocenteTelefonoTitleControlIdToReplace = "" ;
   this.OV64ddo_DocenteTelefonoTitleControlIdToReplace = "" ;
   this.AV68ddo_DocenteDireccionTitleControlIdToReplace = "" ;
   this.ZV68ddo_DocenteDireccionTitleControlIdToReplace = "" ;
   this.OV68ddo_DocenteDireccionTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFDocenteId = 0 ;
   this.ZV46TFDocenteId = 0 ;
   this.OV46TFDocenteId = 0 ;
   this.AV47TFDocenteId_To = 0 ;
   this.ZV47TFDocenteId_To = 0 ;
   this.OV47TFDocenteId_To = 0 ;
   this.AV50TFDocenteNumeroIdentidad = "" ;
   this.ZV50TFDocenteNumeroIdentidad = "" ;
   this.OV50TFDocenteNumeroIdentidad = "" ;
   this.AV51TFDocenteNumeroIdentidad_Sel = "" ;
   this.ZV51TFDocenteNumeroIdentidad_Sel = "" ;
   this.OV51TFDocenteNumeroIdentidad_Sel = "" ;
   this.AV54TFDocenteNombre = "" ;
   this.ZV54TFDocenteNombre = "" ;
   this.OV54TFDocenteNombre = "" ;
   this.AV55TFDocenteNombre_Sel = "" ;
   this.ZV55TFDocenteNombre_Sel = "" ;
   this.OV55TFDocenteNombre_Sel = "" ;
   this.AV58TFDocenteEmail = "" ;
   this.ZV58TFDocenteEmail = "" ;
   this.OV58TFDocenteEmail = "" ;
   this.AV59TFDocenteEmail_Sel = "" ;
   this.ZV59TFDocenteEmail_Sel = "" ;
   this.OV59TFDocenteEmail_Sel = "" ;
   this.AV62TFDocenteTelefono = "" ;
   this.ZV62TFDocenteTelefono = "" ;
   this.OV62TFDocenteTelefono = "" ;
   this.AV63TFDocenteTelefono_Sel = "" ;
   this.ZV63TFDocenteTelefono_Sel = "" ;
   this.OV63TFDocenteTelefono_Sel = "" ;
   this.AV66TFDocenteDireccion = "" ;
   this.ZV66TFDocenteDireccion = "" ;
   this.OV66TFDocenteDireccion = "" ;
   this.AV67TFDocenteDireccion_Sel = "" ;
   this.ZV67TFDocenteDireccion_Sel = "" ;
   this.OV67TFDocenteDireccion_Sel = "" ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV71GridCurrentPage = 0 ;
   this.AV69DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace = "" ;
   this.AV56ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV60ddo_DocenteEmailTitleControlIdToReplace = "" ;
   this.AV64ddo_DocenteTelefonoTitleControlIdToReplace = "" ;
   this.AV68ddo_DocenteDireccionTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFDocenteId = 0 ;
   this.AV47TFDocenteId_To = 0 ;
   this.AV50TFDocenteNumeroIdentidad = "" ;
   this.AV51TFDocenteNumeroIdentidad_Sel = "" ;
   this.AV54TFDocenteNombre = "" ;
   this.AV55TFDocenteNombre_Sel = "" ;
   this.AV58TFDocenteEmail = "" ;
   this.AV59TFDocenteEmail_Sel = "" ;
   this.AV62TFDocenteTelefono = "" ;
   this.AV63TFDocenteTelefono_Sel = "" ;
   this.AV66TFDocenteDireccion = "" ;
   this.AV67TFDocenteDireccion_Sel = "" ;
   this.AV75Update = "" ;
   this.AV76Delete = "" ;
   this.A12DocenteId = 0 ;
   this.A13DocenteNumeroIdentidad = "" ;
   this.A14DocenteNombre = "" ;
   this.A15DocenteEmail = "" ;
   this.A16DocenteTelefono = "" ;
   this.A17DocenteDireccion = "" ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV93Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120g2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130g2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140g2_client": ["DDO_DOCENTEID.ONOPTIONCLICKED", true] ,"e150g2_client": ["DDO_DOCENTENUMEROIDENTIDAD.ONOPTIONCLICKED", true] ,"e160g2_client": ["DDO_DOCENTENOMBRE.ONOPTIONCLICKED", true] ,"e170g2_client": ["DDO_DOCENTEEMAIL.ONOPTIONCLICKED", true] ,"e180g2_client": ["DDO_DOCENTETELEFONO.ONOPTIONCLICKED", true] ,"e190g2_client": ["DDO_DOCENTEDIRECCION.ONOPTIONCLICKED", true] ,"e200g2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110g2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e210g2_client": ["'DOINSERT'", true] ,"e220g2_client": ["'DOEXPORT'", true] ,"e230g2_client": ["'DOEXPORTREPORT'", true] ,"e270g2_client": ["ENTER", true] ,"e280g2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEID","Visible")',ctrl:'vTFDOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEID_TO","Visible")',ctrl:'vTFDOCENTEID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENUMEROIDENTIDAD","Visible")',ctrl:'vTFDOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENUMEROIDENTIDAD_SEL","Visible")',ctrl:'vTFDOCENTENUMEROIDENTIDAD_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENOMBRE","Visible")',ctrl:'vTFDOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENOMBRE_SEL","Visible")',ctrl:'vTFDOCENTENOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEEMAIL","Visible")',ctrl:'vTFDOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEEMAIL_SEL","Visible")',ctrl:'vTFDOCENTEEMAIL_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTETELEFONO","Visible")',ctrl:'vTFDOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTETELEFONO_SEL","Visible")',ctrl:'vTFDOCENTETELEFONO_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEDIRECCION","Visible")',ctrl:'vTFDOCENTEDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEDIRECCION_SEL","Visible")',ctrl:'vTFDOCENTEDIRECCION_SEL',prop:'Visible'},{av:'this.DDO_DOCENTEIDContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTEID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'TitleControlIdToReplace'},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTENOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTENOMBRE',prop:'TitleControlIdToReplace'},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTEEMAILContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTEEMAIL',prop:'TitleControlIdToReplace'},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTETELEFONOContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTETELEFONO',prop:'TitleControlIdToReplace'},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTEDIRECCIONContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTEDIRECCION',prop:'TitleControlIdToReplace'},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV69DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'SelectedValue_set'},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.FilteredText_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'FilteredText_set'},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.SelectedValue_set',ctrl:'DDO_DOCENTETELEFONO',prop:'SelectedValue_set'},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.FilteredText_set',ctrl:'DDO_DOCENTETELEFONO',prop:'FilteredText_set'},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.SelectedValue_set',ctrl:'DDO_DOCENTEEMAIL',prop:'SelectedValue_set'},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.FilteredText_set',ctrl:'DDO_DOCENTEEMAIL',prop:'FilteredText_set'},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SelectedValue_set'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_DOCENTEID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTEIDContainer.ActiveEventKey',ctrl:'DDO_DOCENTEID',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_get',ctrl:'DDO_DOCENTEID',prop:'FilteredText_get'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_get',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTENUMEROIDENTIDAD.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.ActiveEventKey',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_get',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'FilteredText_get'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_get',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTENOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.ActiveEventKey',ctrl:'DDO_DOCENTENOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_get',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_get'},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_get',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTEEMAIL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.ActiveEventKey',ctrl:'DDO_DOCENTEEMAIL',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTEEMAILContainer.FilteredText_get',ctrl:'DDO_DOCENTEEMAIL',prop:'FilteredText_get'},{av:'this.DDO_DOCENTEEMAILContainer.SelectedValue_get',ctrl:'DDO_DOCENTEEMAIL',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTETELEFONO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.ActiveEventKey',ctrl:'DDO_DOCENTETELEFONO',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTETELEFONOContainer.FilteredText_get',ctrl:'DDO_DOCENTETELEFONO',prop:'FilteredText_get'},{av:'this.DDO_DOCENTETELEFONOContainer.SelectedValue_get',ctrl:'DDO_DOCENTETELEFONO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTEDIRECCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.ActiveEventKey',ctrl:'DDO_DOCENTEDIRECCION',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTEDIRECCIONContainer.FilteredText_get',ctrl:'DDO_DOCENTEDIRECCION',prop:'FilteredText_get'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_get',ctrl:'DDO_DOCENTEDIRECCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9',hsh:true}],[{av:'AV75Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV76Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Link")',ctrl:'DOCENTENOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_DocenteNumeroIdentidadTitleControlIdToReplace',fld:'vDDO_DOCENTENUMEROIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_DocenteEmailTitleControlIdToReplace',fld:'vDDO_DOCENTEEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_DocenteTelefonoTitleControlIdToReplace',fld:'vDDO_DOCENTETELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_DocenteDireccionTitleControlIdToReplace',fld:'vDDO_DOCENTEDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'FilteredText_set'},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SelectedValue_set'},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.FilteredText_set',ctrl:'DDO_DOCENTEEMAIL',prop:'FilteredText_set'},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.SelectedValue_set',ctrl:'DDO_DOCENTEEMAIL',prop:'SelectedValue_set'},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.FilteredText_set',ctrl:'DDO_DOCENTETELEFONO',prop:'FilteredText_set'},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.SelectedValue_set',ctrl:'DDO_DOCENTETELEFONO',prop:'SelectedValue_set'},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.FilteredText_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'FilteredText_set'},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'SelectedValue_set'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV45DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV49DocenteNumeroIdentidadTitleFilterData',fld:'vDOCENTENUMEROIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV53DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV57DocenteEmailTitleFilterData',fld:'vDOCENTEEMAILTITLEFILTERDATA',pic:''},{av:'AV61DocenteTelefonoTitleFilterData',fld:'vDOCENTETELEFONOTITLEFILTERDATA',pic:''},{av:'AV65DocenteDireccionTitleFilterData',fld:'vDOCENTEDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Visible")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Visible")',ctrl:'DOCENTEEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Visible")',ctrl:'DOCENTETELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Visible")',ctrl:'DOCENTEDIRECCION',prop:'Visible'},{ctrl:'DOCENTEID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENUMEROIDENTIDAD","Title")',ctrl:'DOCENTENUMEROIDENTIDAD',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'DOCENTEEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEEMAIL","Title")',ctrl:'DOCENTEEMAIL',prop:'Title'},{ctrl:'DOCENTETELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTETELEFONO","Title")',ctrl:'DOCENTETELEFONO',prop:'Title'},{ctrl:'DOCENTEDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEDIRECCION","Title")',ctrl:'DOCENTEDIRECCION',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'SelectedValue_set'},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.FilteredText_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'FilteredText_set'},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.SelectedValue_set',ctrl:'DDO_DOCENTETELEFONO',prop:'SelectedValue_set'},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.FilteredText_set',ctrl:'DDO_DOCENTETELEFONO',prop:'FilteredText_set'},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.SelectedValue_set',ctrl:'DDO_DOCENTEEMAIL',prop:'SelectedValue_set'},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.FilteredText_set',ctrl:'DDO_DOCENTEEMAIL',prop:'FilteredText_set'},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SelectedValue_set'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_DOCENTEDIRECCIONContainer.SortedStatus',ctrl:'DDO_DOCENTEDIRECCION',prop:'SortedStatus'},{av:'this.DDO_DOCENTETELEFONOContainer.SortedStatus',ctrl:'DDO_DOCENTETELEFONO',prop:'SortedStatus'},{av:'this.DDO_DOCENTEEMAILContainer.SortedStatus',ctrl:'DDO_DOCENTEEMAIL',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SortedStatus',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV67TFDocenteDireccion_Sel',fld:'vTFDOCENTEDIRECCION_SEL',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'SelectedValue_set'},{av:'AV66TFDocenteDireccion',fld:'vTFDOCENTEDIRECCION',pic:''},{av:'this.DDO_DOCENTEDIRECCIONContainer.FilteredText_set',ctrl:'DDO_DOCENTEDIRECCION',prop:'FilteredText_set'},{av:'AV63TFDocenteTelefono_Sel',fld:'vTFDOCENTETELEFONO_SEL',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.SelectedValue_set',ctrl:'DDO_DOCENTETELEFONO',prop:'SelectedValue_set'},{av:'AV62TFDocenteTelefono',fld:'vTFDOCENTETELEFONO',pic:''},{av:'this.DDO_DOCENTETELEFONOContainer.FilteredText_set',ctrl:'DDO_DOCENTETELEFONO',prop:'FilteredText_set'},{av:'AV59TFDocenteEmail_Sel',fld:'vTFDOCENTEEMAIL_SEL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.SelectedValue_set',ctrl:'DDO_DOCENTEEMAIL',prop:'SelectedValue_set'},{av:'AV58TFDocenteEmail',fld:'vTFDOCENTEEMAIL',pic:''},{av:'this.DDO_DOCENTEEMAILContainer.FilteredText_set',ctrl:'DDO_DOCENTEEMAIL',prop:'FilteredText_set'},{av:'AV55TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV54TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV51TFDocenteNumeroIdentidad_Sel',fld:'vTFDOCENTENUMEROIDENTIDAD_SEL',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'SelectedValue_set'},{av:'AV50TFDocenteNumeroIdentidad',fld:'vTFDOCENTENUMEROIDENTIDAD',pic:''},{av:'this.DDO_DOCENTENUMEROIDENTIDADContainer.FilteredText_set',ctrl:'DDO_DOCENTENUMEROIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV47TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV93Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV93Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV93Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar({rfrVar:"AV93Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.docenteww);});
