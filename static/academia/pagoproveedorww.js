/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:24:42.47
*/
gx.evt.autoSkip = false;
gx.define('academia.pagoproveedorww', false, function () {
   this.ServerClass =  "academia.pagoproveedorww" ;
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
      this.AV101Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV101Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Proveedorid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("PROVEEDORID", gx.fn.currentGridRowImpl(44));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Validv_Tfpagoproveedorfecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOPROVEEDORFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV50TFPagoProveedorFecha)==0) || new gx.date.gxdate( this.AV50TFPagoProveedorFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Proveedor Fecha fuera de rango");
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
   this.Validv_Tfpagoproveedorfecha_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOPROVEEDORFECHA_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV51TFPagoProveedorFecha_To)==0) || new gx.date.gxdate( this.AV51TFPagoProveedorFecha_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Proveedor Fecha_To fuera de rango");
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
   this.Validv_Ddo_pagoproveedorfechaauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOPROVEEDORFECHAAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV52DDO_PagoProveedorFechaAuxDate)==0) || new gx.date.gxdate( this.AV52DDO_PagoProveedorFechaAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Proveedor Fecha Aux Date fuera de rango");
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
   this.Validv_Ddo_pagoproveedorfechaauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOPROVEEDORFECHAAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV53DDO_PagoProveedorFechaAuxDateTo)==0) || new gx.date.gxdate( this.AV53DDO_PagoProveedorFechaAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Proveedor Fecha Aux Date To fuera de rango");
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
         this.DDO_PAGOPROVEEDORIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_PROVEEDORIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_PROVEEDORNOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 7 )
      {
         this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_PAGOPROVEEDORIDContainer.SortedStatus =  ""  ;
      this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus =  ""  ;
      this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORIDContainer.SortedStatus =  ""  ;
      this.DDO_PROVEEDORNOMBREContainer.SortedStatus =  ""  ;
      this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus =  ""  ;
      this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFPagoProveedorId = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOPROVEEDORIDContainer.FilteredText_set =  ""  ;
      this.AV47TFPagoProveedorId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPagoProveedorFecha =  ''  ;
      this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_set =  ""  ;
      this.AV51TFPagoProveedorFecha_To =  ''  ;
      this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_set =  ""  ;
      this.AV56TFPagoProveedorFactura =  ''  ;
      this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_set =  ""  ;
      this.AV57TFPagoProveedorFactura_Sel =  ''  ;
      this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_set =  ""  ;
      this.AV60TFProveedorId = gx.num.trunc( 0 ,0) ;
      this.DDO_PROVEEDORIDContainer.FilteredText_set =  ""  ;
      this.AV61TFProveedorId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PROVEEDORIDContainer.FilteredTextTo_set =  ""  ;
      this.AV64TFProveedorNombre =  ''  ;
      this.DDO_PROVEEDORNOMBREContainer.FilteredText_set =  ""  ;
      this.AV65TFProveedorNombre_Sel =  ''  ;
      this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set =  ""  ;
      this.AV68TFPagoProveedorDescripcion =  ''  ;
      this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_set =  ""  ;
      this.AV69TFPagoProveedorDescripcion_Sel =  ''  ;
      this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_set =  ""  ;
      this.AV72TFPagoProveedorValor =  0.0  ;
      this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_set =  ""  ;
      this.AV73TFPagoProveedorValor_To =  0.0  ;
      this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120u2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130u2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140u2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOPROVEEDORID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150u2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOPROVEEDORFECHA.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160u2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOPROVEEDORFACTURA.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170u2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180u2_client=function()
   {
      return this.executeServerEvent("DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190u2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOPROVEEDORDESCRIPCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200u2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOPROVEEDORVALOR.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210u2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110u2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e220u2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e230u2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e240u2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e280u2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e290u2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,58,59,60,62,64,66,68,70,72,74,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97];
   this.GXLastCtrlId =97;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.pagoproveedorww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(34,47,"PAGOPROVEEDORID","","","PagoProveedorId","int",0,"px",4,4,"right",null,[],34,"PagoProveedorId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(60,48,"PAGOPROVEEDORFECHA","","","PagoProveedorFecha","date",0,"px",8,8,"right",null,[],60,"PagoProveedorFecha",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(61,49,"PAGOPROVEEDORFACTURA","","","PagoProveedorFactura","char",0,"px",50,50,"left",null,[],61,"PagoProveedorFactura",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(28,50,"PROVEEDORID","","","ProveedorId","int",0,"px",4,4,"right",null,[],28,"ProveedorId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(62,51,"PROVEEDORNOMBRE","","","ProveedorNombre","char",0,"px",50,50,"left",null,[],62,"ProveedorNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(63,52,"PAGOPROVEEDORDESCRIPCION","","","PagoProveedorDescripcion","char",0,"px",256,80,"left",null,[],63,"PagoProveedorDescripcion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(64,53,"PAGOPROVEEDORVALOR","","","PagoProveedorValor","decimal",0,"px",10,10,"right",null,[],64,"PagoProveedorValor",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 57, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV77GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV77GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV77GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV78GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV78GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV78GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120u2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130u2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_PAGOPROVEEDORIDContainer = gx.uc.getNew(this, 61, 35, "BootstrapDropDownOptions", "DDO_PAGOPROVEEDORIDContainer", "Ddo_pagoproveedorid", "DDO_PAGOPROVEEDORID");
   var DDO_PAGOPROVEEDORIDContainer = this.DDO_PAGOPROVEEDORIDContainer;
   DDO_PAGOPROVEEDORIDContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOPROVEEDORIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOPROVEEDORIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOPROVEEDORIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOPROVEEDORIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOPROVEEDORIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOPROVEEDORIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOPROVEEDORIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOPROVEEDORIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOPROVEEDORIDContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOPROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PAGOPROVEEDORIDContainer.addV2CFunction('AV45PagoProveedorIdTitleFilterData', "vPAGOPROVEEDORIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOPROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45PagoProveedorIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOPROVEEDORIDTITLEFILTERDATA",UC.ParentObject.AV45PagoProveedorIdTitleFilterData); });
   DDO_PAGOPROVEEDORIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOPROVEEDORIDContainer.addEventHandler("OnOptionClicked", this.e140u2_client);
   this.setUserControl(DDO_PAGOPROVEEDORIDContainer);
   this.DDO_PAGOPROVEEDORFECHAContainer = gx.uc.getNew(this, 63, 35, "BootstrapDropDownOptions", "DDO_PAGOPROVEEDORFECHAContainer", "Ddo_pagoproveedorfecha", "DDO_PAGOPROVEEDORFECHA");
   var DDO_PAGOPROVEEDORFECHAContainer = this.DDO_PAGOPROVEEDORFECHAContainer;
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOPROVEEDORFECHAContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOPROVEEDORFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PAGOPROVEEDORFECHAContainer.addV2CFunction('AV49PagoProveedorFechaTitleFilterData', "vPAGOPROVEEDORFECHATITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOPROVEEDORFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PagoProveedorFechaTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOPROVEEDORFECHATITLEFILTERDATA",UC.ParentObject.AV49PagoProveedorFechaTitleFilterData); });
   DDO_PAGOPROVEEDORFECHAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOPROVEEDORFECHAContainer.addEventHandler("OnOptionClicked", this.e150u2_client);
   this.setUserControl(DDO_PAGOPROVEEDORFECHAContainer);
   this.DDO_PAGOPROVEEDORFACTURAContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_PAGOPROVEEDORFACTURAContainer", "Ddo_pagoproveedorfactura", "DDO_PAGOPROVEEDORFACTURA");
   var DDO_PAGOPROVEEDORFACTURAContainer = this.DDO_PAGOPROVEEDORFACTURAContainer;
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoProveedorWWGetFilterData", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOPROVEEDORFACTURAContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOPROVEEDORFACTURAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PAGOPROVEEDORFACTURAContainer.addV2CFunction('AV55PagoProveedorFacturaTitleFilterData', "vPAGOPROVEEDORFACTURATITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOPROVEEDORFACTURAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV55PagoProveedorFacturaTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOPROVEEDORFACTURATITLEFILTERDATA",UC.ParentObject.AV55PagoProveedorFacturaTitleFilterData); });
   DDO_PAGOPROVEEDORFACTURAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOPROVEEDORFACTURAContainer.addEventHandler("OnOptionClicked", this.e160u2_client);
   this.setUserControl(DDO_PAGOPROVEEDORFACTURAContainer);
   this.DDO_PROVEEDORIDContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORIDContainer", "Ddo_proveedorid", "DDO_PROVEEDORID");
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
   DDO_PROVEEDORIDContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PROVEEDORIDContainer.addV2CFunction('AV59ProveedorIdTitleFilterData', "vPROVEEDORIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV59ProveedorIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORIDTITLEFILTERDATA",UC.ParentObject.AV59ProveedorIdTitleFilterData); });
   DDO_PROVEEDORIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORIDContainer.addEventHandler("OnOptionClicked", this.e170u2_client);
   this.setUserControl(DDO_PROVEEDORIDContainer);
   this.DDO_PROVEEDORNOMBREContainer = gx.uc.getNew(this, 69, 35, "BootstrapDropDownOptions", "DDO_PROVEEDORNOMBREContainer", "Ddo_proveedornombre", "DDO_PROVEEDORNOMBRE");
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
   DDO_PROVEEDORNOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoProveedorWWGetFilterData", "str");
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
   DDO_PROVEEDORNOMBREContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PROVEEDORNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PROVEEDORNOMBREContainer.addV2CFunction('AV63ProveedorNombreTitleFilterData', "vPROVEEDORNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PROVEEDORNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV63ProveedorNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPROVEEDORNOMBRETITLEFILTERDATA",UC.ParentObject.AV63ProveedorNombreTitleFilterData); });
   DDO_PROVEEDORNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PROVEEDORNOMBREContainer.addEventHandler("OnOptionClicked", this.e180u2_client);
   this.setUserControl(DDO_PROVEEDORNOMBREContainer);
   this.DDO_PAGOPROVEEDORDESCRIPCIONContainer = gx.uc.getNew(this, 71, 35, "BootstrapDropDownOptions", "DDO_PAGOPROVEEDORDESCRIPCIONContainer", "Ddo_pagoproveedordescripcion", "DDO_PAGOPROVEEDORDESCRIPCION");
   var DDO_PAGOPROVEEDORDESCRIPCIONContainer = this.DDO_PAGOPROVEEDORDESCRIPCIONContainer;
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoProveedorWWGetFilterData", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.addV2CFunction('AV67PagoProveedorDescripcionTitleFilterData', "vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67PagoProveedorDescripcionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA",UC.ParentObject.AV67PagoProveedorDescripcionTitleFilterData); });
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOPROVEEDORDESCRIPCIONContainer.addEventHandler("OnOptionClicked", this.e190u2_client);
   this.setUserControl(DDO_PAGOPROVEEDORDESCRIPCIONContainer);
   this.DDO_PAGOPROVEEDORVALORContainer = gx.uc.getNew(this, 73, 35, "BootstrapDropDownOptions", "DDO_PAGOPROVEEDORVALORContainer", "Ddo_pagoproveedorvalor", "DDO_PAGOPROVEEDORVALOR");
   var DDO_PAGOPROVEEDORVALORContainer = this.DDO_PAGOPROVEEDORVALORContainer;
   DDO_PAGOPROVEEDORVALORContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOPROVEEDORVALORContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOPROVEEDORVALORContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOPROVEEDORVALORContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOPROVEEDORVALORContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOPROVEEDORVALORContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOPROVEEDORVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_PAGOPROVEEDORVALORContainer.addV2CFunction('AV71PagoProveedorValorTitleFilterData', "vPAGOPROVEEDORVALORTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOPROVEEDORVALORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71PagoProveedorValorTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOPROVEEDORVALORTITLEFILTERDATA",UC.ParentObject.AV71PagoProveedorValorTitleFilterData); });
   DDO_PAGOPROVEEDORVALORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOPROVEEDORVALORContainer.addEventHandler("OnOptionClicked", this.e200u2_client);
   this.setUserControl(DDO_PAGOPROVEEDORVALORContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 75, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 76, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 77, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV75DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV75DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV75DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e210u2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110u2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV81Update",gxold:"OV81Update",gxvar:"AV81Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV81Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV81Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV81Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV81Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV82Delete",gxold:"OV82Delete",gxvar:"AV82Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV82Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV82Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV82Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV82Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORID",gxz:"Z34PagoProveedorId",gxold:"O34PagoProveedorId",gxvar:"A34PagoProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z34PagoProveedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOPROVEEDORID",row || gx.fn.currentGridRowImpl(44),gx.O.A34PagoProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A34PagoProveedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGOPROVEEDORID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFECHA",gxz:"Z60PagoProveedorFecha",gxold:"O60PagoProveedorFecha",gxvar:"A60PagoProveedorFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z60PagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOPROVEEDORFECHA",row || gx.fn.currentGridRowImpl(44),gx.O.A60PagoProveedorFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A60PagoProveedorFecha=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PAGOPROVEEDORFECHA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORFACTURA",gxz:"Z61PagoProveedorFactura",gxold:"O61PagoProveedorFactura",gxvar:"A61PagoProveedorFactura",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A61PagoProveedorFactura=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z61PagoProveedorFactura=Value},v2c:function(row){gx.fn.setGridControlValue("PAGOPROVEEDORFACTURA",row || gx.fn.currentGridRowImpl(44),gx.O.A61PagoProveedorFactura,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A61PagoProveedorFactura=this.val()},val:function(row){return gx.fn.getGridControlValue("PAGOPROVEEDORFACTURA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Proveedorid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORID",gxz:"Z28ProveedorId",gxold:"O28ProveedorId",gxvar:"A28ProveedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A28ProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z28ProveedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORID",row || gx.fn.currentGridRowImpl(44),gx.O.A28ProveedorId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A28ProveedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROVEEDORID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PROVEEDORNOMBRE",gxz:"Z62ProveedorNombre",gxold:"O62ProveedorNombre",gxvar:"A62ProveedorNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A62ProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z62ProveedorNombre=Value},v2c:function(row){gx.fn.setGridControlValue("PROVEEDORNOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A62ProveedorNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A62ProveedorNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("PROVEEDORNOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"char",len:256,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORDESCRIPCION",gxz:"Z63PagoProveedorDescripcion",gxold:"O63PagoProveedorDescripcion",gxvar:"A63PagoProveedorDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A63PagoProveedorDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z63PagoProveedorDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("PAGOPROVEEDORDESCRIPCION",row || gx.fn.currentGridRowImpl(44),gx.O.A63PagoProveedorDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A63PagoProveedorDescripcion=this.val()},val:function(row){return gx.fn.getGridControlValue("PAGOPROVEEDORDESCRIPCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={ id:53 ,lvl:2,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOPROVEEDORVALOR",gxz:"Z64PagoProveedorValor",gxold:"O64PagoProveedorValor",gxvar:"A64PagoProveedorValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A64PagoProveedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z64PagoProveedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PAGOPROVEEDORVALOR",row || gx.fn.currentGridRowImpl(44),gx.O.A64PagoProveedorValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A64PagoProveedorValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PAGOPROVEEDORVALOR",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[62]={ id:62 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_PagoProveedorIdTitleControlIdToReplace",gxold:"OV48ddo_PagoProveedorIdTitleControlIdToReplace",gxvar:"AV48ddo_PagoProveedorIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_PagoProveedorIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_PagoProveedorIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_PagoProveedorIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_PagoProveedorIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE",gxz:"ZV54ddo_PagoProveedorFechaTitleControlIdToReplace",gxold:"OV54ddo_PagoProveedorFechaTitleControlIdToReplace",gxvar:"AV54ddo_PagoProveedorFechaTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54ddo_PagoProveedorFechaTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54ddo_PagoProveedorFechaTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE",gx.O.AV54ddo_PagoProveedorFechaTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54ddo_PagoProveedorFechaTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE",gxz:"ZV58ddo_PagoProveedorFacturaTitleControlIdToReplace",gxold:"OV58ddo_PagoProveedorFacturaTitleControlIdToReplace",gxvar:"AV58ddo_PagoProveedorFacturaTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58ddo_PagoProveedorFacturaTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58ddo_PagoProveedorFacturaTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE",gx.O.AV58ddo_PagoProveedorFacturaTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58ddo_PagoProveedorFacturaTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE",gxz:"ZV62ddo_ProveedorIdTitleControlIdToReplace",gxold:"OV62ddo_ProveedorIdTitleControlIdToReplace",gxvar:"AV62ddo_ProveedorIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62ddo_ProveedorIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62ddo_ProveedorIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE",gx.O.AV62ddo_ProveedorIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62ddo_ProveedorIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV66ddo_ProveedorNombreTitleControlIdToReplace",gxold:"OV66ddo_ProveedorNombreTitleControlIdToReplace",gxvar:"AV66ddo_ProveedorNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66ddo_ProveedorNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66ddo_ProveedorNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV66ddo_ProveedorNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66ddo_ProveedorNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE",gxz:"ZV70ddo_PagoProveedorDescripcionTitleControlIdToReplace",gxold:"OV70ddo_PagoProveedorDescripcionTitleControlIdToReplace",gxvar:"AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70ddo_PagoProveedorDescripcionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE",gx.O.AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE",gxz:"ZV74ddo_PagoProveedorValorTitleControlIdToReplace",gxold:"OV74ddo_PagoProveedorValorTitleControlIdToReplace",gxvar:"AV74ddo_PagoProveedorValorTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV74ddo_PagoProveedorValorTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV74ddo_PagoProveedorValorTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE",gx.O.AV74ddo_PagoProveedorValorTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV74ddo_PagoProveedorValorTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORID",gxz:"ZV46TFPagoProveedorId",gxold:"OV46TFPagoProveedorId",gxvar:"AV46TFPagoProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFPagoProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFPagoProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORID",gx.O.AV46TFPagoProveedorId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFPagoProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOPROVEEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORID_TO",gxz:"ZV47TFPagoProveedorId_To",gxold:"OV47TFPagoProveedorId_To",gxvar:"AV47TFPagoProveedorId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFPagoProveedorId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFPagoProveedorId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORID_TO",gx.O.AV47TFPagoProveedorId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFPagoProveedorId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOPROVEEDORID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagoproveedorfecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORFECHA",gxz:"ZV50TFPagoProveedorFecha",gxold:"OV50TFPagoProveedorFecha",gxvar:"AV50TFPagoProveedorFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[83],ip:[83],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPagoProveedorFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORFECHA",gx.O.AV50TFPagoProveedorFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPagoProveedorFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORFECHA")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagoproveedorfecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORFECHA_TO",gxz:"ZV51TFPagoProveedorFecha_To",gxold:"OV51TFPagoProveedorFecha_To",gxvar:"AV51TFPagoProveedorFecha_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[84],ip:[84],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPagoProveedorFecha_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPagoProveedorFecha_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORFECHA_TO",gx.O.AV51TFPagoProveedorFecha_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPagoProveedorFecha_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORFECHA_TO")},nac:gx.falseFn};
   GXValidFnc[85]={ id: 85, fld:"DDO_PAGOPROVEEDORFECHAAUXDATES",grid:0};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagoproveedorfechaauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORFECHAAUXDATE",gxz:"ZV52DDO_PagoProveedorFechaAuxDate",gxold:"OV52DDO_PagoProveedorFechaAuxDate",gxvar:"AV52DDO_PagoProveedorFechaAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[86],ip:[86],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52DDO_PagoProveedorFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52DDO_PagoProveedorFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORFECHAAUXDATE",gx.O.AV52DDO_PagoProveedorFechaAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52DDO_PagoProveedorFechaAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORFECHAAUXDATE")},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagoproveedorfechaauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOPROVEEDORFECHAAUXDATETO",gxz:"ZV53DDO_PagoProveedorFechaAuxDateTo",gxold:"OV53DDO_PagoProveedorFechaAuxDateTo",gxvar:"AV53DDO_PagoProveedorFechaAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[87],ip:[87],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53DDO_PagoProveedorFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53DDO_PagoProveedorFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOPROVEEDORFECHAAUXDATETO",gx.O.AV53DDO_PagoProveedorFechaAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV53DDO_PagoProveedorFechaAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOPROVEEDORFECHAAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORFACTURA",gxz:"ZV56TFPagoProveedorFactura",gxold:"OV56TFPagoProveedorFactura",gxvar:"AV56TFPagoProveedorFactura",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56TFPagoProveedorFactura=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56TFPagoProveedorFactura=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORFACTURA",gx.O.AV56TFPagoProveedorFactura,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56TFPagoProveedorFactura=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORFACTURA")},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORFACTURA_SEL",gxz:"ZV57TFPagoProveedorFactura_Sel",gxold:"OV57TFPagoProveedorFactura_Sel",gxvar:"AV57TFPagoProveedorFactura_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV57TFPagoProveedorFactura_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV57TFPagoProveedorFactura_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORFACTURA_SEL",gx.O.AV57TFPagoProveedorFactura_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV57TFPagoProveedorFactura_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORFACTURA_SEL")},nac:gx.falseFn};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORID",gxz:"ZV60TFProveedorId",gxold:"OV60TFProveedorId",gxvar:"AV60TFProveedorId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60TFProveedorId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV60TFProveedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORID",gx.O.AV60TFProveedorId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60TFProveedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPROVEEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[91]={ id:91 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORID_TO",gxz:"ZV61TFProveedorId_To",gxold:"OV61TFProveedorId_To",gxvar:"AV61TFProveedorId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV61TFProveedorId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV61TFProveedorId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORID_TO",gx.O.AV61TFProveedorId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV61TFProveedorId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPROVEEDORID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[92]={ id:92 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORNOMBRE",gxz:"ZV64TFProveedorNombre",gxold:"OV64TFProveedorNombre",gxvar:"AV64TFProveedorNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64TFProveedorNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64TFProveedorNombre=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORNOMBRE",gx.O.AV64TFProveedorNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64TFProveedorNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORNOMBRE")},nac:gx.falseFn};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPROVEEDORNOMBRE_SEL",gxz:"ZV65TFProveedorNombre_Sel",gxold:"OV65TFProveedorNombre_Sel",gxvar:"AV65TFProveedorNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV65TFProveedorNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV65TFProveedorNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPROVEEDORNOMBRE_SEL",gx.O.AV65TFProveedorNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV65TFProveedorNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPROVEEDORNOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORDESCRIPCION",gxz:"ZV68TFPagoProveedorDescripcion",gxold:"OV68TFPagoProveedorDescripcion",gxvar:"AV68TFPagoProveedorDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68TFPagoProveedorDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68TFPagoProveedorDescripcion=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORDESCRIPCION",gx.O.AV68TFPagoProveedorDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68TFPagoProveedorDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORDESCRIPCION_SEL",gxz:"ZV69TFPagoProveedorDescripcion_Sel",gxold:"OV69TFPagoProveedorDescripcion_Sel",gxvar:"AV69TFPagoProveedorDescripcion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV69TFPagoProveedorDescripcion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV69TFPagoProveedorDescripcion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOPROVEEDORDESCRIPCION_SEL",gx.O.AV69TFPagoProveedorDescripcion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV69TFPagoProveedorDescripcion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOPROVEEDORDESCRIPCION_SEL")},nac:gx.falseFn};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORVALOR",gxz:"ZV72TFPagoProveedorValor",gxold:"OV72TFPagoProveedorValor",gxvar:"AV72TFPagoProveedorValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72TFPagoProveedorValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV72TFPagoProveedorValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOPROVEEDORVALOR",gx.O.AV72TFPagoProveedorValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV72TFPagoProveedorValor=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOPROVEEDORVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOPROVEEDORVALOR_TO",gxz:"ZV73TFPagoProveedorValor_To",gxold:"OV73TFPagoProveedorValor_To",gxvar:"AV73TFPagoProveedorValor_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV73TFPagoProveedorValor_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV73TFPagoProveedorValor_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOPROVEEDORVALOR_TO",gx.O.AV73TFPagoProveedorValor_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV73TFPagoProveedorValor_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOPROVEEDORVALOR_TO",'.',',')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV81Update = "" ;
   this.OV81Update = "" ;
   this.ZV82Delete = "" ;
   this.OV82Delete = "" ;
   this.Z34PagoProveedorId = 0 ;
   this.O34PagoProveedorId = 0 ;
   this.Z60PagoProveedorFecha = gx.date.nullDate() ;
   this.O60PagoProveedorFecha = gx.date.nullDate() ;
   this.Z61PagoProveedorFactura = "" ;
   this.O61PagoProveedorFactura = "" ;
   this.Z28ProveedorId = 0 ;
   this.O28ProveedorId = 0 ;
   this.Z62ProveedorNombre = "" ;
   this.O62ProveedorNombre = "" ;
   this.Z63PagoProveedorDescripcion = "" ;
   this.O63PagoProveedorDescripcion = "" ;
   this.Z64PagoProveedorValor = 0 ;
   this.O64PagoProveedorValor = 0 ;
   this.AV48ddo_PagoProveedorIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_PagoProveedorIdTitleControlIdToReplace = "" ;
   this.OV48ddo_PagoProveedorIdTitleControlIdToReplace = "" ;
   this.AV54ddo_PagoProveedorFechaTitleControlIdToReplace = "" ;
   this.ZV54ddo_PagoProveedorFechaTitleControlIdToReplace = "" ;
   this.OV54ddo_PagoProveedorFechaTitleControlIdToReplace = "" ;
   this.AV58ddo_PagoProveedorFacturaTitleControlIdToReplace = "" ;
   this.ZV58ddo_PagoProveedorFacturaTitleControlIdToReplace = "" ;
   this.OV58ddo_PagoProveedorFacturaTitleControlIdToReplace = "" ;
   this.AV62ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.ZV62ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.OV62ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.AV66ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.ZV66ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.OV66ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace = "" ;
   this.ZV70ddo_PagoProveedorDescripcionTitleControlIdToReplace = "" ;
   this.OV70ddo_PagoProveedorDescripcionTitleControlIdToReplace = "" ;
   this.AV74ddo_PagoProveedorValorTitleControlIdToReplace = "" ;
   this.ZV74ddo_PagoProveedorValorTitleControlIdToReplace = "" ;
   this.OV74ddo_PagoProveedorValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPagoProveedorId = 0 ;
   this.ZV46TFPagoProveedorId = 0 ;
   this.OV46TFPagoProveedorId = 0 ;
   this.AV47TFPagoProveedorId_To = 0 ;
   this.ZV47TFPagoProveedorId_To = 0 ;
   this.OV47TFPagoProveedorId_To = 0 ;
   this.AV50TFPagoProveedorFecha = gx.date.nullDate() ;
   this.ZV50TFPagoProveedorFecha = gx.date.nullDate() ;
   this.OV50TFPagoProveedorFecha = gx.date.nullDate() ;
   this.AV51TFPagoProveedorFecha_To = gx.date.nullDate() ;
   this.ZV51TFPagoProveedorFecha_To = gx.date.nullDate() ;
   this.OV51TFPagoProveedorFecha_To = gx.date.nullDate() ;
   this.AV52DDO_PagoProveedorFechaAuxDate = gx.date.nullDate() ;
   this.ZV52DDO_PagoProveedorFechaAuxDate = gx.date.nullDate() ;
   this.OV52DDO_PagoProveedorFechaAuxDate = gx.date.nullDate() ;
   this.AV53DDO_PagoProveedorFechaAuxDateTo = gx.date.nullDate() ;
   this.ZV53DDO_PagoProveedorFechaAuxDateTo = gx.date.nullDate() ;
   this.OV53DDO_PagoProveedorFechaAuxDateTo = gx.date.nullDate() ;
   this.AV56TFPagoProveedorFactura = "" ;
   this.ZV56TFPagoProveedorFactura = "" ;
   this.OV56TFPagoProveedorFactura = "" ;
   this.AV57TFPagoProveedorFactura_Sel = "" ;
   this.ZV57TFPagoProveedorFactura_Sel = "" ;
   this.OV57TFPagoProveedorFactura_Sel = "" ;
   this.AV60TFProveedorId = 0 ;
   this.ZV60TFProveedorId = 0 ;
   this.OV60TFProveedorId = 0 ;
   this.AV61TFProveedorId_To = 0 ;
   this.ZV61TFProveedorId_To = 0 ;
   this.OV61TFProveedorId_To = 0 ;
   this.AV64TFProveedorNombre = "" ;
   this.ZV64TFProveedorNombre = "" ;
   this.OV64TFProveedorNombre = "" ;
   this.AV65TFProveedorNombre_Sel = "" ;
   this.ZV65TFProveedorNombre_Sel = "" ;
   this.OV65TFProveedorNombre_Sel = "" ;
   this.AV68TFPagoProveedorDescripcion = "" ;
   this.ZV68TFPagoProveedorDescripcion = "" ;
   this.OV68TFPagoProveedorDescripcion = "" ;
   this.AV69TFPagoProveedorDescripcion_Sel = "" ;
   this.ZV69TFPagoProveedorDescripcion_Sel = "" ;
   this.OV69TFPagoProveedorDescripcion_Sel = "" ;
   this.AV72TFPagoProveedorValor = 0 ;
   this.ZV72TFPagoProveedorValor = 0 ;
   this.OV72TFPagoProveedorValor = 0 ;
   this.AV73TFPagoProveedorValor_To = 0 ;
   this.ZV73TFPagoProveedorValor_To = 0 ;
   this.OV73TFPagoProveedorValor_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV77GridCurrentPage = 0 ;
   this.AV75DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_PagoProveedorIdTitleControlIdToReplace = "" ;
   this.AV54ddo_PagoProveedorFechaTitleControlIdToReplace = "" ;
   this.AV58ddo_PagoProveedorFacturaTitleControlIdToReplace = "" ;
   this.AV62ddo_ProveedorIdTitleControlIdToReplace = "" ;
   this.AV66ddo_ProveedorNombreTitleControlIdToReplace = "" ;
   this.AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace = "" ;
   this.AV74ddo_PagoProveedorValorTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPagoProveedorId = 0 ;
   this.AV47TFPagoProveedorId_To = 0 ;
   this.AV50TFPagoProveedorFecha = gx.date.nullDate() ;
   this.AV51TFPagoProveedorFecha_To = gx.date.nullDate() ;
   this.AV52DDO_PagoProveedorFechaAuxDate = gx.date.nullDate() ;
   this.AV53DDO_PagoProveedorFechaAuxDateTo = gx.date.nullDate() ;
   this.AV56TFPagoProveedorFactura = "" ;
   this.AV57TFPagoProveedorFactura_Sel = "" ;
   this.AV60TFProveedorId = 0 ;
   this.AV61TFProveedorId_To = 0 ;
   this.AV64TFProveedorNombre = "" ;
   this.AV65TFProveedorNombre_Sel = "" ;
   this.AV68TFPagoProveedorDescripcion = "" ;
   this.AV69TFPagoProveedorDescripcion_Sel = "" ;
   this.AV72TFPagoProveedorValor = 0 ;
   this.AV73TFPagoProveedorValor_To = 0 ;
   this.AV81Update = "" ;
   this.AV82Delete = "" ;
   this.A34PagoProveedorId = 0 ;
   this.A60PagoProveedorFecha = gx.date.nullDate() ;
   this.A61PagoProveedorFactura = "" ;
   this.A28ProveedorId = 0 ;
   this.A62ProveedorNombre = "" ;
   this.A63PagoProveedorDescripcion = "" ;
   this.A64PagoProveedorValor = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV101Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120u2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130u2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140u2_client": ["DDO_PAGOPROVEEDORID.ONOPTIONCLICKED", true] ,"e150u2_client": ["DDO_PAGOPROVEEDORFECHA.ONOPTIONCLICKED", true] ,"e160u2_client": ["DDO_PAGOPROVEEDORFACTURA.ONOPTIONCLICKED", true] ,"e170u2_client": ["DDO_PROVEEDORID.ONOPTIONCLICKED", true] ,"e180u2_client": ["DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED", true] ,"e190u2_client": ["DDO_PAGOPROVEEDORDESCRIPCION.ONOPTIONCLICKED", true] ,"e200u2_client": ["DDO_PAGOPROVEEDORVALOR.ONOPTIONCLICKED", true] ,"e210u2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110u2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e220u2_client": ["'DOINSERT'", true] ,"e230u2_client": ["'DOEXPORT'", true] ,"e240u2_client": ["'DOEXPORTREPORT'", true] ,"e280u2_client": ["ENTER", true] ,"e290u2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORID","Visible")',ctrl:'vTFPAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORID_TO","Visible")',ctrl:'vTFPAGOPROVEEDORID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORFECHA","Visible")',ctrl:'vTFPAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORFECHA_TO","Visible")',ctrl:'vTFPAGOPROVEEDORFECHA_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORFACTURA","Visible")',ctrl:'vTFPAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORFACTURA_SEL","Visible")',ctrl:'vTFPAGOPROVEEDORFACTURA_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORID","Visible")',ctrl:'vTFPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORID_TO","Visible")',ctrl:'vTFPROVEEDORID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORNOMBRE","Visible")',ctrl:'vTFPROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPROVEEDORNOMBRE_SEL","Visible")',ctrl:'vTFPROVEEDORNOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'vTFPAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORDESCRIPCION_SEL","Visible")',ctrl:'vTFPAGOPROVEEDORDESCRIPCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORVALOR","Visible")',ctrl:'vTFPAGOPROVEEDORVALOR',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOPROVEEDORVALOR_TO","Visible")',ctrl:'vTFPAGOPROVEEDORVALOR_TO',prop:'Visible'},{av:'this.DDO_PAGOPROVEEDORIDContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOPROVEEDORID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'TitleControlIdToReplace'},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'TitleControlIdToReplace'},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORIDContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORID',prop:'TitleControlIdToReplace'},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PROVEEDORNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_PROVEEDORNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'TitleControlIdToReplace'},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'TitleControlIdToReplace'},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV75DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredTextTo_set'},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SelectedValue_set'},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'FilteredText_set'},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SelectedValue_set'},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'FilteredText_set'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_PAGOPROVEEDORID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.ActiveEventKey',ctrl:'DDO_PAGOPROVEEDORID',prop:'ActiveEventKey'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredText_get',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredText_get'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_get',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOPROVEEDORFECHA.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.ActiveEventKey',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'ActiveEventKey'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_get',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredText_get'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_get',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOPROVEEDORFACTURA.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.ActiveEventKey',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'ActiveEventKey'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_get',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'FilteredText_get'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_get',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORIDContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORID',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_get',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_get',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PROVEEDORNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.ActiveEventKey',ctrl:'DDO_PROVEEDORNOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_get',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_get'},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_get',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOPROVEEDORDESCRIPCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.ActiveEventKey',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'ActiveEventKey'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_get',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'FilteredText_get'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_get',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOPROVEEDORVALOR.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOPROVEEDORVALORContainer.ActiveEventKey',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'ActiveEventKey'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_get',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredText_get'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_get',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A34PagoProveedorId',fld:'PAGOPROVEEDORID',pic:'ZZZ9',hsh:true},{av:'A28ProveedorId',fld:'PROVEEDORID',pic:'ZZZ9'}],[{av:'AV81Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV82Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Link")',ctrl:'PAGOPROVEEDORFECHA',prop:'Link'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Link")',ctrl:'PROVEEDORNOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoProveedorIdTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoProveedorFechaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV58ddo_PagoProveedorFacturaTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORFACTURATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_ProveedorIdTitleControlIdToReplace',fld:'vDDO_PROVEEDORIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_ProveedorNombreTitleControlIdToReplace',fld:'vDDO_PROVEEDORNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_PagoProveedorDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORDESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV74ddo_PagoProveedorValorTitleControlIdToReplace',fld:'vDDO_PAGOPROVEEDORVALORTITLECONTROLIDTOREPLACE',pic:''},{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredText_set'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredText_set'},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredTextTo_set'},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'FilteredText_set'},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SelectedValue_set'},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'FilteredText_set'},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SelectedValue_set'},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredText_set'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredTextTo_set'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'AV45PagoProveedorIdTitleFilterData',fld:'vPAGOPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV49PagoProveedorFechaTitleFilterData',fld:'vPAGOPROVEEDORFECHATITLEFILTERDATA',pic:''},{av:'AV55PagoProveedorFacturaTitleFilterData',fld:'vPAGOPROVEEDORFACTURATITLEFILTERDATA',pic:''},{av:'AV59ProveedorIdTitleFilterData',fld:'vPROVEEDORIDTITLEFILTERDATA',pic:''},{av:'AV63ProveedorNombreTitleFilterData',fld:'vPROVEEDORNOMBRETITLEFILTERDATA',pic:''},{av:'AV67PagoProveedorDescripcionTitleFilterData',fld:'vPAGOPROVEEDORDESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV71PagoProveedorValorTitleFilterData',fld:'vPAGOPROVEEDORVALORTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Visible")',ctrl:'PAGOPROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Visible")',ctrl:'PAGOPROVEEDORFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Visible")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Visible")',ctrl:'PROVEEDORID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Visible")',ctrl:'PROVEEDORNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Visible")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Visible")',ctrl:'PAGOPROVEEDORVALOR',prop:'Visible'},{ctrl:'PAGOPROVEEDORID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORID","Title")',ctrl:'PAGOPROVEEDORID',prop:'Title'},{ctrl:'PAGOPROVEEDORFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFECHA","Title")',ctrl:'PAGOPROVEEDORFECHA',prop:'Title'},{ctrl:'PAGOPROVEEDORFACTURA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORFACTURA","Title")',ctrl:'PAGOPROVEEDORFACTURA',prop:'Title'},{ctrl:'PROVEEDORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORID","Title")',ctrl:'PROVEEDORID',prop:'Title'},{ctrl:'PROVEEDORNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROVEEDORNOMBRE","Title")',ctrl:'PROVEEDORNOMBRE',prop:'Title'},{ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORDESCRIPCION","Title")',ctrl:'PAGOPROVEEDORDESCRIPCION',prop:'Title'},{ctrl:'PAGOPROVEEDORVALOR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOPROVEEDORVALOR","Title")',ctrl:'PAGOPROVEEDORVALOR',prop:'Title'},{av:'AV77GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV78GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A34PagoProveedorId',fld:'PAGOPROVEEDORID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredTextTo_set'},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SelectedValue_set'},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'FilteredText_set'},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SelectedValue_set'},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'FilteredText_set'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV101Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORNOMBREContainer.SortedStatus',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SortedStatus'},{av:'this.DDO_PROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PROVEEDORID',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'SortedStatus'},{av:'this.DDO_PAGOPROVEEDORIDContainer.SortedStatus',ctrl:'DDO_PAGOPROVEEDORID',prop:'SortedStatus'},{av:'AV72TFPagoProveedorValor',fld:'vTFPAGOPROVEEDORVALOR',pic:'ZZZZZZ9.99'},{av:'AV73TFPagoProveedorValor_To',fld:'vTFPAGOPROVEEDORVALOR_TO',pic:'ZZZZZZ9.99'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORVALORContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORVALOR',prop:'FilteredTextTo_set'},{av:'AV69TFPagoProveedorDescripcion_Sel',fld:'vTFPAGOPROVEEDORDESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'SelectedValue_set'},{av:'AV68TFPagoProveedorDescripcion',fld:'vTFPAGOPROVEEDORDESCRIPCION',pic:''},{av:'this.DDO_PAGOPROVEEDORDESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORDESCRIPCION',prop:'FilteredText_set'},{av:'AV65TFProveedorNombre_Sel',fld:'vTFPROVEEDORNOMBRE_SEL',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.SelectedValue_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'SelectedValue_set'},{av:'AV64TFProveedorNombre',fld:'vTFPROVEEDORNOMBRE',pic:''},{av:'this.DDO_PROVEEDORNOMBREContainer.FilteredText_set',ctrl:'DDO_PROVEEDORNOMBRE',prop:'FilteredText_set'},{av:'AV60TFProveedorId',fld:'vTFPROVEEDORID',pic:'ZZZ9'},{av:'AV61TFProveedorId_To',fld:'vTFPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV57TFPagoProveedorFactura_Sel',fld:'vTFPAGOPROVEEDORFACTURA_SEL',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.SelectedValue_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'SelectedValue_set'},{av:'AV56TFPagoProveedorFactura',fld:'vTFPAGOPROVEEDORFACTURA',pic:''},{av:'this.DDO_PAGOPROVEEDORFACTURAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFACTURA',prop:'FilteredText_set'},{av:'AV50TFPagoProveedorFecha',fld:'vTFPAGOPROVEEDORFECHA',pic:''},{av:'AV51TFPagoProveedorFecha_To',fld:'vTFPAGOPROVEEDORFECHA_TO',pic:''},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORFECHAContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFPagoProveedorId',fld:'vTFPAGOPROVEEDORID',pic:'ZZZ9'},{av:'AV47TFPagoProveedorId_To',fld:'vTFPAGOPROVEEDORID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredText_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredText_set'},{av:'this.DDO_PAGOPROVEEDORIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOPROVEEDORID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV101Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV101Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV101Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[91]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[62]);
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar({rfrVar:"AV101Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.pagoproveedorww);});
