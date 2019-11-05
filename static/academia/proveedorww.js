/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:19:30.4
*/
gx.evt.autoSkip = false;
gx.define('academia.proveedorww', false, function () {
   this.ServerClass =  "academia.proveedorww" ;
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
   this.Validv_Tfproveedoremail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPROVEEDOREMAIL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV62TFProveedorEmail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV62TFProveedorEmail)) ) )
         {
            try {
               gxballoon.setError("El valor de TFProveedor Email no coincide con el patrón especificado");
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
   this.Validv_Tfproveedoremail_sel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPROVEEDOREMAIL_SEL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV63TFProveedorEmail_Sel, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV63TFProveedorEmail_Sel)) ) )
         {
            try {
               gxballoon.setError("El valor de TFProveedor Email_Sel no coincide con el patrón especificado");
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
   this.Validv_Tfproveedorwebsite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPROVEEDORWEBSITE");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV66TFProveedorWebsite, "^((?:[a-zA-Z]+:(//)?)?((?:(?:[a-zA-Z]([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*)(?:\\.(?:([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*))*)|(?:(\\d{1,3}\\.){3}\\d{1,3}))(?::\\d+)?(?:/([a-zA-Z0-9$\\-_@.&+!*\"'(),=;: ]|%[0-9a-fA-F]{2})+)*/?(?:[#?](?:[a-zA-Z0-9$\\-_@.&+!*\"'(),=;: /]|%[0-9a-fA-F]{2})*)?)?\\s*$") || ((''==this.AV66TFProveedorWebsite)) ) )
         {
            try {
               gxballoon.setError("El valor de TFProveedor Website no coincide con el patrón especificado");
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
   this.Validv_Tfproveedorwebsite_sel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPROVEEDORWEBSITE_SEL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV67TFProveedorWebsite_Sel, "^((?:[a-zA-Z]+:(//)?)?((?:(?:[a-zA-Z]([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*)(?:\\.(?:([a-zA-Z0-9$\\-_@&+!*\"'(),]|%[0-9a-fA-F]{2})*))*)|(?:(\\d{1,3}\\.){3}\\d{1,3}))(?::\\d+)?(?:/([a-zA-Z0-9$\\-_@.&+!*\"'(),=;: ]|%[0-9a-fA-F]{2})+)*/?(?:[#?](?:[a-zA-Z0-9$\\-_@.&+!*\"'(),=;: /]|%[0-9a-fA-F]{2})*)?)?\\s*$") || ((''==this.AV67TFProveedorWebsite_Sel)) ) )
         {
            try {
               gxballoon.setError("El valor de TFProveedor Website_Sel no coincide con el patrón especificado");
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
         this.DDO_PROVEEDORIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_PROVEEDORNOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PROVEEDORTELEFONOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_PROVEEDOREMAILContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_PROVEEDORWEBSITEContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_PROVEEDORIDContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORNOMBREContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORTELEFONOContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDOREMAILContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORWEBSITEContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFProveedorId = gx.num.trunc( 0 ,0) ;
      this.DDO_PROVEEDORIDContainer.FilteredText_set =  ""  ;
      this.AV47TFProveedorId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PROVEEDORIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFProveedorNombre =  ''  ;
      this.DDO_PROVEEDORNOMBREContainer.FilteredText_set =  ""  ;
      this.AV51TFProveedorNombre_Sel =  ''  ;
      this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set =  ""  ;
      this.AV54TFProveedorTelefono =  ''  ;
      this.DDO_PROVEEDORTELEFONOContainer.FilteredText_set =  ""  ;
      this.AV55TFProveedorTelefono_Sel =  ''  ;
      this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_set =  ""  ;
      this.AV58TFProveedorDireccion =  ''  ;
      this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_set =  ""  ;
      this.AV59TFProveedorDireccion_Sel =  ''  ;
      this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_set =  ""  ;
      this.AV62TFProveedorEmail =  ''  ;
      this.DDO_PROVEEDOREMAILContainer.FilteredText_set =  ""  ;
      this.AV63TFProveedorEmail_Sel =  ''  ;
      this.DDO_PROVEEDOREMAILContainer.SelectedValue_set =  ""  ;
      this.AV66TFProveedorWebsite =  ''  ;
      this.DDO_PROVEEDORWEBSITEContainer.FilteredText_set =  ""  ;
      this.AV67TFProveedorWebsite_Sel =  ''  ;
      this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_set =  ""  ;
   };
   this.e120o2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130o2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORTELEFONO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORDIRECCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDOREMAIL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190o2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORWEBSITE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200o2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110o2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210o2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e220o2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e230o2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e270o2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e280o2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,57,58,59,61,63,65,67,69,71,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89];
   this.GXLastCtrlId =89;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.proveedorww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(28,47,"PROVEEDORID","","","ProveedorId","int",0,"px",4,4,"right",null,[],28,"ProveedorId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(62,48,"PROVEEDORNOMBRE","","","ProveedorNombre","char",0,"px",50,50,"left",null,[],62,"ProveedorNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(70,49,"PROVEEDORTELEFONO","","","ProveedorTelefono","char",0,"px",20,20,"left",null,[],70,"ProveedorTelefono",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(71,50,"PROVEEDORDIRECCION","","","ProveedorDireccion","svchar",0,"px",1024,80,"left",null,[],71,"ProveedorDireccion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(72,51,"PROVEEDOREMAIL","","","ProveedorEmail","svchar",0,"px",100,80,"left",null,[],72,"ProveedorEmail",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(73,52,"PROVEEDORWEBSITE","","","ProveedorWebsite","svchar",410,"px",1000,80,"left",null,[],73,"ProveedorWebsite",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
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
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120o2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130o2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_PROVEEDORIDContainer = gx.uc.getNew(this, 60, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORIDContainer", "Ddo_proveedorid", "DDO_PROVEEDORID");
   var DDO_PROVEEDORIDContainer = this.DDO_PROVEEDORIDContainer;
   DDO_PROVEEDORIDContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDORIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDORIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDORIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDORIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDORIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDORIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDORIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDORIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDORIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDORIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDORIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDORIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDORIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDORIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDORIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDORIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDORIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDORIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDORIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDORIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDORIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PROVEEDORIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PROVEEDORIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PROVEEDORIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PROVEEDORIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PROVEEDORIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDORIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PROVEEDORIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDORIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PROVEEDORIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDORIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDORIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDORIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDORIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDORIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDORIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDORIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDORIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDORIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PROVEEDORIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDORIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PROVEEDORIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PROVEEDORIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDORIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDORIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDORIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDORIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDORIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDORIDContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDORIDContainer.addV2CFunction('AV45ProveedorIdTitleFilterData', "vPROVEEDORIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45ProveedorIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORIDTITLEFILTERDATA",UC.ParentObject.AV45ProveedorIdTitleFilterData); });
   DDO_PROVEEDORIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORIDContainer.addEventHandler("OnOptionClicked", this.e140o2_client);
   this.setUserControl(DDO_PROVEEDORIDContainer);
   this.DDO_PROVEEDORNOMBREContainer = gx.uc.getNew(this, 62, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORNOMBREContainer", "Ddo_proveedornombre", "DDO_PROVEEDORNOMBRE");
   var DDO_PROVEEDORNOMBREContainer = this.DDO_PROVEEDORNOMBREContainer;
   DDO_PROVEEDORNOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDORNOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDORNOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PROVEEDORNOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.ProveedorWWGetFilterData", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PROVEEDORNOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDORNOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDORNOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDORNOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDORNOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDORNOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDORNOMBREContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDORNOMBREContainer.addV2CFunction('AV49ProveedorNombreTitleFilterData', "vPROVEEDORNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49ProveedorNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORNOMBRETITLEFILTERDATA",UC.ParentObject.AV49ProveedorNombreTitleFilterData); });
   DDO_PROVEEDORNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORNOMBREContainer.addEventHandler("OnOptionClicked", this.e150o2_client);
   this.setUserControl(DDO_PROVEEDORNOMBREContainer);
   this.DDO_PROVEEDORTELEFONOContainer = gx.uc.getNew(this, 64, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORTELEFONOContainer", "Ddo_proveedortelefono", "DDO_PROVEEDORTELEFONO");
   var DDO_PROVEEDORTELEFONOContainer = this.DDO_PROVEEDORTELEFONOContainer;
   DDO_PROVEEDORTELEFONOContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PROVEEDORTELEFONOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("DataListProc", "Datalistproc", "Academia.ProveedorWWGetFilterData", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PROVEEDORTELEFONOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDORTELEFONOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDORTELEFONOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDORTELEFONOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDORTELEFONOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDORTELEFONOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDORTELEFONOContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORTELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDORTELEFONOContainer.addV2CFunction('AV53ProveedorTelefonoTitleFilterData', "vPROVEEDORTELEFONOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORTELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53ProveedorTelefonoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORTELEFONOTITLEFILTERDATA",UC.ParentObject.AV53ProveedorTelefonoTitleFilterData); });
   DDO_PROVEEDORTELEFONOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORTELEFONOContainer.addEventHandler("OnOptionClicked", this.e160o2_client);
   this.setUserControl(DDO_PROVEEDORTELEFONOContainer);
   this.DDO_PROVEEDORDIRECCIONContainer = gx.uc.getNew(this, 66, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORDIRECCIONContainer", "Ddo_proveedordireccion", "DDO_PROVEEDORDIRECCION");
   var DDO_PROVEEDORDIRECCIONContainer = this.DDO_PROVEEDORDIRECCIONContainer;
   DDO_PROVEEDORDIRECCIONContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.ProveedorWWGetFilterData", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PROVEEDORDIRECCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDORDIRECCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDORDIRECCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDORDIRECCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDORDIRECCIONContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORDIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDORDIRECCIONContainer.addV2CFunction('AV57ProveedorDireccionTitleFilterData', "vPROVEEDORDIRECCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORDIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57ProveedorDireccionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORDIRECCIONTITLEFILTERDATA",UC.ParentObject.AV57ProveedorDireccionTitleFilterData); });
   DDO_PROVEEDORDIRECCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORDIRECCIONContainer.addEventHandler("OnOptionClicked", this.e170o2_client);
   this.setUserControl(DDO_PROVEEDORDIRECCIONContainer);
   this.DDO_PROVEEDOREMAILContainer = gx.uc.getNew(this, 68, 35, "BootstrapDropDownOptions", "DDO_PROVEEDOREMAILContainer", "Ddo_proveedoremail", "DDO_PROVEEDOREMAIL");
   var DDO_PROVEEDOREMAILContainer = this.DDO_PROVEEDOREMAILContainer;
   DDO_PROVEEDOREMAILContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDOREMAILContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDOREMAILContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDOREMAILContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDOREMAILContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDOREMAILContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDOREMAILContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDOREMAILContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDOREMAILContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDOREMAILContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDOREMAILContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDOREMAILContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PROVEEDOREMAILContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PROVEEDOREMAILContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PROVEEDOREMAILContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("DataListProc", "Datalistproc", "Academia.ProveedorWWGetFilterData", "str");
   DDO_PROVEEDOREMAILContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PROVEEDOREMAILContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDOREMAILContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDOREMAILContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDOREMAILContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDOREMAILContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDOREMAILContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDOREMAILContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDOREMAILContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PROVEEDOREMAILContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDOREMAILContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PROVEEDOREMAILContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDOREMAILContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDOREMAILContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDOREMAILContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDOREMAILContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDOREMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDOREMAILContainer.addV2CFunction('AV61ProveedorEmailTitleFilterData', "vPROVEEDOREMAILTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDOREMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61ProveedorEmailTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDOREMAILTITLEFILTERDATA",UC.ParentObject.AV61ProveedorEmailTitleFilterData); });
   DDO_PROVEEDOREMAILContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDOREMAILContainer.addEventHandler("OnOptionClicked", this.e180o2_client);
   this.setUserControl(DDO_PROVEEDOREMAILContainer);
   this.DDO_PROVEEDORWEBSITEContainer = gx.uc.getNew(this, 70, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORWEBSITEContainer", "Ddo_proveedorwebsite", "DDO_PROVEEDORWEBSITE");
   var DDO_PROVEEDORWEBSITEContainer = this.DDO_PROVEEDORWEBSITEContainer;
   DDO_PROVEEDORWEBSITEContainer.setProp("Class", "Class", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("Icon", "Icon", "", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("Caption", "Caption", "", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PROVEEDORWEBSITEContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("DataListProc", "Datalistproc", "Academia.ProveedorWWGetFilterData", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PROVEEDORWEBSITEContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PROVEEDORWEBSITEContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PROVEEDORWEBSITEContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PROVEEDORWEBSITEContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PROVEEDORWEBSITEContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PROVEEDORWEBSITEContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PROVEEDORWEBSITEContainer.addV2CFunction('AV69DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORWEBSITEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV69DDO_TitleSettingsIcons); });
   DDO_PROVEEDORWEBSITEContainer.addV2CFunction('AV65ProveedorWebsiteTitleFilterData', "vPROVEEDORWEBSITETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORWEBSITEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV65ProveedorWebsiteTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORWEBSITETITLEFILTERDATA",UC.ParentObject.AV65ProveedorWebsiteTitleFilterData); });
   DDO_PROVEEDORWEBSITEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORWEBSITEContainer.addEventHandler("OnOptionClicked", this.e190o2_client);
   this.setUserControl(DDO_PROVEEDORWEBSITEContainer);
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
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e200o2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110o2_client);
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
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORID",row || gx.fn.currentGridRowImpl(44),gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROVEEDORID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORNOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDORNOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORTELEFONO",gxz:"Z70ProveedorTelefono",gxold:"O70ProveedorTelefono",gxvar:"A70ProveedorTelefono",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'tel',v2v:function(Value){if(Value!==undefined)gx.O.A70ProveedorTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z70ProveedorTelefono=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORTELEFONO",row || gx.fn.currentGridRowImpl(44),gx.O.A70ProveedorTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A70ProveedorTelefono=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDORTELEFONO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"svchar",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORDIRECCION",gxz:"Z71ProveedorDireccion",gxold:"O71ProveedorDireccion",gxvar:"A71ProveedorDireccion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A71ProveedorDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z71ProveedorDireccion=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORDIRECCION",row || gx.fn.currentGridRowImpl(44),gx.O.A71ProveedorDireccion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A71ProveedorDireccion=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDORDIRECCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDOREMAIL",gxz:"Z72ProveedorEmail",gxold:"O72ProveedorEmail",gxvar:"A72ProveedorEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'email',v2v:function(Value){if(Value!==undefined)gx.O.A72ProveedorEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z72ProveedorEmail=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDOREMAIL",row || gx.fn.currentGridRowImpl(44),gx.O.A72ProveedorEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A72ProveedorEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDOREMAIL",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"svchar",len:1000,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORWEBSITE",gxz:"Z73ProveedorWebsite",gxold:"O73ProveedorWebsite",gxvar:"A73ProveedorWebsite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'url',v2v:function(Value){if(Value!==undefined)gx.O.A73ProveedorWebsite=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z73ProveedorWebsite=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORWEBSITE",row || gx.fn.currentGridRowImpl(44),gx.O.A73ProveedorWebsite,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A73ProveedorWebsite=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDORWEBSITE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_ProveedorIdTitleControlIdToReplace",gxold:"OV48ddo_ProveedorIdTitleControlIdToReplace",gxvar:"AV48ddo_ProveedorIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_ProveedorIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_ProveedorIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_ProveedorIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_ProveedorIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_ProveedorNombreTitleControlIdToReplace",gxold:"OV52ddo_ProveedorNombreTitleControlIdToReplace",gxvar:"AV52ddo_ProveedorNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_ProveedorNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_ProveedorNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV52ddo_ProveedorNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_ProveedorNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_ProveedorTelefonoTitleControlIdToReplace",gxold:"OV56ddo_ProveedorTelefonoTitleControlIdToReplace",gxvar:"AV56ddo_ProveedorTelefonoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_ProveedorTelefonoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_ProveedorTelefonoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_ProveedorTelefonoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_ProveedorTelefonoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_ProveedorDireccionTitleControlIdToReplace",gxold:"OV60ddo_ProveedorDireccionTitleControlIdToReplace",gxvar:"AV60ddo_ProveedorDireccionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_ProveedorDireccionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_ProveedorDireccionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_ProveedorDireccionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_ProveedorDireccionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE",gxz:"ZV64ddo_ProveedorEmailTitleControlIdToReplace",gxold:"OV64ddo_ProveedorEmailTitleControlIdToReplace",gxvar:"AV64ddo_ProveedorEmailTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64ddo_ProveedorEmailTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64ddo_ProveedorEmailTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE",gx.O.AV64ddo_ProveedorEmailTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64ddo_ProveedorEmailTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE",gxz:"ZV68ddo_ProveedorWebsiteTitleControlIdToReplace",gxold:"OV68ddo_ProveedorWebsiteTitleControlIdToReplace",gxvar:"AV68ddo_ProveedorWebsiteTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68ddo_ProveedorWebsiteTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68ddo_ProveedorWebsiteTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE",gx.O.AV68ddo_ProveedorWebsiteTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68ddo_ProveedorWebsiteTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORID",gxz:"ZV46TFProveedorId",gxold:"OV46TFProveedorId",gxvar:"AV46TFProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORID",gx.O.AV46TFProveedorId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPROVEEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORID_TO",gxz:"ZV47TFProveedorId_To",gxold:"OV47TFProveedorId_To",gxvar:"AV47TFProveedorId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFProveedorId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFProveedorId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORID_TO",gx.O.AV47TFProveedorId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFProveedorId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPROVEEDORID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORNOMBRE",gxz:"ZV50TFProveedorNombre",gxold:"OV50TFProveedorNombre",gxvar:"AV50TFProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORNOMBRE",gx.O.AV50TFProveedorNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORNOMBRE")},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORNOMBRE_SEL",gxz:"ZV51TFProveedorNombre_Sel",gxold:"OV51TFProveedorNombre_Sel",gxvar:"AV51TFProveedorNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFProveedorNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFProveedorNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORNOMBRE_SEL",gx.O.AV51TFProveedorNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFProveedorNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORNOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORTELEFONO",gxz:"ZV54TFProveedorTelefono",gxold:"OV54TFProveedorTelefono",gxvar:"AV54TFProveedorTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFProveedorTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFProveedorTelefono=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORTELEFONO",gx.O.AV54TFProveedorTelefono,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFProveedorTelefono=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORTELEFONO")},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORTELEFONO_SEL",gxz:"ZV55TFProveedorTelefono_Sel",gxold:"OV55TFProveedorTelefono_Sel",gxvar:"AV55TFProveedorTelefono_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFProveedorTelefono_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFProveedorTelefono_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORTELEFONO_SEL",gx.O.AV55TFProveedorTelefono_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFProveedorTelefono_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORTELEFONO_SEL")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORDIRECCION",gxz:"ZV58TFProveedorDireccion",gxold:"OV58TFProveedorDireccion",gxvar:"AV58TFProveedorDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFProveedorDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFProveedorDireccion=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORDIRECCION",gx.O.AV58TFProveedorDireccion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFProveedorDireccion=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORDIRECCION")},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"svchar",len:1024,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORDIRECCION_SEL",gxz:"ZV59TFProveedorDireccion_Sel",gxold:"OV59TFProveedorDireccion_Sel",gxvar:"AV59TFProveedorDireccion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFProveedorDireccion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFProveedorDireccion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORDIRECCION_SEL",gx.O.AV59TFProveedorDireccion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFProveedorDireccion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORDIRECCION_SEL")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfproveedoremail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDOREMAIL",gxz:"ZV62TFProveedorEmail",gxold:"OV62TFProveedorEmail",gxvar:"AV62TFProveedorEmail",ucs:[],op:[86],ip:[86],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFProveedorEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFProveedorEmail=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDOREMAIL",gx.O.AV62TFProveedorEmail,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFProveedorEmail=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDOREMAIL")},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfproveedoremail_sel,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDOREMAIL_SEL",gxz:"ZV63TFProveedorEmail_Sel",gxold:"OV63TFProveedorEmail_Sel",gxvar:"AV63TFProveedorEmail_Sel",ucs:[],op:[87],ip:[87],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63TFProveedorEmail_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TFProveedorEmail_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDOREMAIL_SEL",gx.O.AV63TFProveedorEmail_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63TFProveedorEmail_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDOREMAIL_SEL")},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfproveedorwebsite,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORWEBSITE",gxz:"ZV66TFProveedorWebsite",gxold:"OV66TFProveedorWebsite",gxvar:"AV66TFProveedorWebsite",ucs:[],op:[88],ip:[88],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66TFProveedorWebsite=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66TFProveedorWebsite=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORWEBSITE",gx.O.AV66TFProveedorWebsite,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66TFProveedorWebsite=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORWEBSITE")},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"svchar",len:1000,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfproveedorwebsite_sel,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORWEBSITE_SEL",gxz:"ZV67TFProveedorWebsite_Sel",gxold:"OV67TFProveedorWebsite_Sel",gxvar:"AV67TFProveedorWebsite_Sel",ucs:[],op:[89],ip:[89],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV67TFProveedorWebsite_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67TFProveedorWebsite_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORWEBSITE_SEL",gx.O.AV67TFProveedorWebsite_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV67TFProveedorWebsite_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORWEBSITE_SEL")},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV75Update = "" ;
   this.OV75Update = "" ;
   this.ZV76Delete = "" ;
   this.OV76Delete = "" ;
   this.Z28ProveedorId = 0 ;
   this.O28ProveedorId = 0 ;
   this.Z62ProveedorNombre = "" ;
   this.O62ProveedorNombre = "" ;
   this.Z70ProveedorTelefono = "" ;
   this.O70ProveedorTelefono = "" ;
   this.Z71ProveedorDireccion = "" ;
   this.O71ProveedorDireccion = "" ;
   this.Z72ProveedorEmail = "" ;
   this.O72ProveedorEmail = "" ;
   this.Z73ProveedorWebsite = "" ;
   this.O73ProveedorWebsite = "" ;
   this.AV48ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.OV48ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.AV52ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.ZV52ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.OV52ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_ProveedorTelefonoTitleControlIdToReplace = "" ;
   this.ZV56ddo_ProveedorTelefonoTitleControlIdToReplace = "" ;
   this.OV56ddo_ProveedorTelefonoTitleControlIdToReplace = "" ;
   this.AV60ddo_ProveedorDireccionTitleControlIdToReplace = "" ;
   this.ZV60ddo_ProveedorDireccionTitleControlIdToReplace = "" ;
   this.OV60ddo_ProveedorDireccionTitleControlIdToReplace = "" ;
   this.AV64ddo_ProveedorEmailTitleControlIdToReplace = "" ;
   this.ZV64ddo_ProveedorEmailTitleControlIdToReplace = "" ;
   this.OV64ddo_ProveedorEmailTitleControlIdToReplace = "" ;
   this.AV68ddo_ProveedorWebsiteTitleControlIdToReplace = "" ;
   this.ZV68ddo_ProveedorWebsiteTitleControlIdToReplace = "" ;
   this.OV68ddo_ProveedorWebsiteTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFProveedorId = 0 ;
   this.ZV46TFProveedorId = 0 ;
   this.OV46TFProveedorId = 0 ;
   this.AV47TFProveedorId_To = 0 ;
   this.ZV47TFProveedorId_To = 0 ;
   this.OV47TFProveedorId_To = 0 ;
   this.AV50TFProveedorNombre = "" ;
   this.ZV50TFProveedorNombre = "" ;
   this.OV50TFProveedorNombre = "" ;
   this.AV51TFProveedorNombre_Sel = "" ;
   this.ZV51TFProveedorNombre_Sel = "" ;
   this.OV51TFProveedorNombre_Sel = "" ;
   this.AV54TFProveedorTelefono = "" ;
   this.ZV54TFProveedorTelefono = "" ;
   this.OV54TFProveedorTelefono = "" ;
   this.AV55TFProveedorTelefono_Sel = "" ;
   this.ZV55TFProveedorTelefono_Sel = "" ;
   this.OV55TFProveedorTelefono_Sel = "" ;
   this.AV58TFProveedorDireccion = "" ;
   this.ZV58TFProveedorDireccion = "" ;
   this.OV58TFProveedorDireccion = "" ;
   this.AV59TFProveedorDireccion_Sel = "" ;
   this.ZV59TFProveedorDireccion_Sel = "" ;
   this.OV59TFProveedorDireccion_Sel = "" ;
   this.AV62TFProveedorEmail = "" ;
   this.ZV62TFProveedorEmail = "" ;
   this.OV62TFProveedorEmail = "" ;
   this.AV63TFProveedorEmail_Sel = "" ;
   this.ZV63TFProveedorEmail_Sel = "" ;
   this.OV63TFProveedorEmail_Sel = "" ;
   this.AV66TFProveedorWebsite = "" ;
   this.ZV66TFProveedorWebsite = "" ;
   this.OV66TFProveedorWebsite = "" ;
   this.AV67TFProveedorWebsite_Sel = "" ;
   this.ZV67TFProveedorWebsite_Sel = "" ;
   this.OV67TFProveedorWebsite_Sel = "" ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV71GridCurrentPage = 0 ;
   this.AV69DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.AV52ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_ProveedorTelefonoTitleControlIdToReplace = "" ;
   this.AV60ddo_ProveedorDireccionTitleControlIdToReplace = "" ;
   this.AV64ddo_ProveedorEmailTitleControlIdToReplace = "" ;
   this.AV68ddo_ProveedorWebsiteTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFProveedorId = 0 ;
   this.AV47TFProveedorId_To = 0 ;
   this.AV50TFProveedorNombre = "" ;
   this.AV51TFProveedorNombre_Sel = "" ;
   this.AV54TFProveedorTelefono = "" ;
   this.AV55TFProveedorTelefono_Sel = "" ;
   this.AV58TFProveedorDireccion = "" ;
   this.AV59TFProveedorDireccion_Sel = "" ;
   this.AV62TFProveedorEmail = "" ;
   this.AV63TFProveedorEmail_Sel = "" ;
   this.AV66TFProveedorWebsite = "" ;
   this.AV67TFProveedorWebsite_Sel = "" ;
   this.AV75Update = "" ;
   this.AV76Delete = "" ;
   this.A28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.A70ProveedorTelefono = "" ;
   this.A71ProveedorDireccion = "" ;
   this.A72ProveedorEmail = "" ;
   this.A73ProveedorWebsite = "" ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV93Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120o2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130o2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140o2_client": ["DDO_PROVEEDORID.ONOPTIONCLICKED", true] ,"e150o2_client": ["DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED", true] ,"e160o2_client": ["DDO_PROVEEDORTELEFONO.ONOPTIONCLICKED", true] ,"e170o2_client": ["DDO_PROVEEDORDIRECCION.ONOPTIONCLICKED", true] ,"e180o2_client": ["DDO_PROVEEDOREMAIL.ONOPTIONCLICKED", true] ,"e190o2_client": ["DDO_PROVEEDORWEBSITE.ONOPTIONCLICKED", true] ,"e200o2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110o2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e210o2_client": ["'DOINSERT'", true] ,"e220o2_client": ["'DOEXPORT'", true] ,"e230o2_client": ["'DOEXPORTREPORT'", true] ,"e270o2_client": ["ENTER", true] ,"e280o2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORID","Visible")',ctrl:'vTFPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORID_TO","Visible")',ctrl:'vTFPROVEEDORID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORNOMBRE","Visible")',ctrl:'vTFPROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORNOMBRE_SEL","Visible")',ctrl:'vTFPROVEEDORNOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORTELEFONO","Visible")',ctrl:'vTFPROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORTELEFONO_SEL","Visible")',ctrl:'vTFPROVEEDORTELEFONO_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORDIRECCION","Visible")',ctrl:'vTFPROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORDIRECCION_SEL","Visible")',ctrl:'vTFPROVEEDORDIRECCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDOREMAIL","Visible")',ctrl:'vTFPROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDOREMAIL_SEL","Visible")',ctrl:'vTFPROVEEDOREMAIL_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORWEBSITE","Visible")',ctrl:'vTFPROVEEDORWEBSITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORWEBSITE_SEL","Visible")',ctrl:'vTFPROVEEDORWEBSITE_SEL',prop:'Visible'},{av:'this.DDO_PROVEEDORIDContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORTELEFONOContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORTELEFONO',prop:'TitleControlIdToReplace'},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORDIRECCION',prop:'TitleControlIdToReplace'},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDOREMAILContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDOREMAIL',prop:'TitleControlIdToReplace'},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORWEBSITEContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORWEBSITE',prop:'TitleControlIdToReplace'},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV69DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SelectedValue_set'},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.FilteredText_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'FilteredText_set'},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.SelectedValue_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'SelectedValue_set'},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.FilteredText_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'FilteredText_set'},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SelectedValue_set'},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'FilteredText_set'},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.FilteredText_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'FilteredText_set'},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_PROVEEDORID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORIDContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORID',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_get',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_get',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORNOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_get',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_get',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORTELEFONO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORTELEFONO',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORTELEFONOContainer.FilteredText_get',ctrl:'DDO_PROVEEDORTELEFONO',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_get',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORDIRECCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORDIRECCION',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_get',ctrl:'DDO_PROVEEDORDIRECCION',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_get',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDOREMAIL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.ActiveEventKey',ctrl:'DDO_PROVEEDOREMAIL',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDOREMAILContainer.FilteredText_get',ctrl:'DDO_PROVEEDOREMAIL',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDOREMAILContainer.SelectedValue_get',ctrl:'DDO_PROVEEDOREMAIL',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORWEBSITE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORWEBSITE',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORWEBSITEContainer.FilteredText_get',ctrl:'DDO_PROVEEDORWEBSITE',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_get',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9',hsh:true},{av:'A73ProveedorWebsite',fld:'PROVEEDORWEBSITE',pic:''}],[{av:'AV75Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV76Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Link")',ctrl:'PROVEEDORNOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Linktarget")',ctrl:'PROVEEDORWEBSITE',prop:'Linktarget'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Link")',ctrl:'PROVEEDORWEBSITE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_ProveedorTelefonoTitleControlIdToReplace',fld:'vDDO_PROVEEDORTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_ProveedorDireccionTitleControlIdToReplace',fld:'vDDO_PROVEEDORDIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_ProveedorEmailTitleControlIdToReplace',fld:'vDDO_PROVEEDOREMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_ProveedorWebsiteTitleControlIdToReplace',fld:'vDDO_PROVEEDORWEBSITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.FilteredText_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'FilteredText_set'},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SelectedValue_set'},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'FilteredText_set'},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SelectedValue_set'},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.FilteredText_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'FilteredText_set'},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.SelectedValue_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'SelectedValue_set'},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.FilteredText_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'FilteredText_set'},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SelectedValue_set'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV45ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV53ProveedorTelefonoTitleFilterData',fld:'vPROVEEDORTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57ProveedorDireccionTitleFilterData',fld:'vPROVEEDORDIRECCIONTITLEFILTERDATA',pic:''},{av:'AV61ProveedorEmailTitleFilterData',fld:'vPROVEEDOREMAILTITLEFILTERDATA',pic:''},{av:'AV65ProveedorWebsiteTitleFilterData',fld:'vPROVEEDORWEBSITETITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Visible")',ctrl:'PROVEEDORTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Visible")',ctrl:'PROVEEDORDIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Visible")',ctrl:'PROVEEDOREMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Visible")',ctrl:'PROVEEDORWEBSITE',prop:'Visible'},{ctrl:'PROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PROVEEDORTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORTELEFONO","Title")',ctrl:'PROVEEDORTELEFONO',prop:'Title'},{ctrl:'PROVEEDORDIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORDIRECCION","Title")',ctrl:'PROVEEDORDIRECCION',prop:'Title'},{ctrl:'PROVEEDOREMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDOREMAIL","Title")',ctrl:'PROVEEDOREMAIL',prop:'Title'},{ctrl:'PROVEEDORWEBSITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORWEBSITE","Title")',ctrl:'PROVEEDORWEBSITE',prop:'Title'},{av:'AV71GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV72GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SelectedValue_set'},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.FilteredText_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'FilteredText_set'},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.SelectedValue_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'SelectedValue_set'},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.FilteredText_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'FilteredText_set'},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SelectedValue_set'},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'FilteredText_set'},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.FilteredText_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'FilteredText_set'},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV93Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PROVEEDORWEBSITEContainer.SortedStatus',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDOREMAILContainer.SortedStatus',ctrl:'DDO_PROVEEDOREMAIL',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SortedStatus',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORTELEFONOContainer.SortedStatus',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV67TFProveedorWebsite_Sel',fld:'vTFPROVEEDORWEBSITE_SEL',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'SelectedValue_set'},{av:'AV66TFProveedorWebsite',fld:'vTFPROVEEDORWEBSITE',pic:''},{av:'this.DDO_PROVEEDORWEBSITEContainer.FilteredText_set',ctrl:'DDO_PROVEEDORWEBSITE',prop:'FilteredText_set'},{av:'AV63TFProveedorEmail_Sel',fld:'vTFPROVEEDOREMAIL_SEL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.SelectedValue_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'SelectedValue_set'},{av:'AV62TFProveedorEmail',fld:'vTFPROVEEDOREMAIL',pic:''},{av:'this.DDO_PROVEEDOREMAILContainer.FilteredText_set',ctrl:'DDO_PROVEEDOREMAIL',prop:'FilteredText_set'},{av:'AV59TFProveedorDireccion_Sel',fld:'vTFPROVEEDORDIRECCION_SEL',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'SelectedValue_set'},{av:'AV58TFProveedorDireccion',fld:'vTFPROVEEDORDIRECCION',pic:''},{av:'this.DDO_PROVEEDORDIRECCIONContainer.FilteredText_set',ctrl:'DDO_PROVEEDORDIRECCION',prop:'FilteredText_set'},{av:'AV55TFProveedorTelefono_Sel',fld:'vTFPROVEEDORTELEFONO_SEL',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFProveedorTelefono',fld:'vTFPROVEEDORTELEFONO',pic:''},{av:'this.DDO_PROVEEDORTELEFONOContainer.FilteredText_set',ctrl:'DDO_PROVEEDORTELEFONO',prop:'FilteredText_set'},{av:'AV51TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV50TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV46TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
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
gx.wi( function() { gx.createParentObj(academia.proveedorww);});
