/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:2.61
*/
gx.evt.autoSkip = false;
gx.define('academia.politicapagodocenteshorariowc', true, function (CmpContext) {
   this.ServerClass =  "academia.politicapagodocenteshorariowc" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.setCmpContext(CmpContext);
   this.ReadonlyForm = true;
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV11GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV7PoliticaPagoDocenteId=gx.fn.getIntegerValue("vPOLITICAPAGODOCENTEID",'.') ;
      this.AV7PoliticaPagoDocenteId=gx.fn.getIntegerValue("vPOLITICAPAGODOCENTEID",'.') ;
      this.AV58Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Horarioid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("HORARIOID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Cursoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CURSOID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Nivelid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NIVELID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Lugarid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LUGARID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Docenteid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(38) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("DOCENTEID", gx.fn.currentGridRowImpl(38));
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s152_client=function()
   {
      this.AV15FilterFullText =  ''  ;
   };
   this.e121c2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e131c2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e141c2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e151c2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e161c2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIODIAS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e171c2_client=function()
   {
      return this.executeServerEvent("DDO_CURSOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e181c2_client=function()
   {
      return this.executeServerEvent("DDO_CURSONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e191c2_client=function()
   {
      return this.executeServerEvent("DDO_NIVELID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e201c2_client=function()
   {
      return this.executeServerEvent("DDO_NIVELNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e211c2_client=function()
   {
      return this.executeServerEvent("DDO_LUGARID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e221c2_client=function()
   {
      return this.executeServerEvent("DDO_LUGARNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e231c2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTEID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e241c2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTENOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e251c2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e111c2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e261c2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e301c2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e311c2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,25,28,31,32,33,34,35,36,37,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,58,59,61,63,65,67,69,71,73,75,77,79,81,83,84,86,87,88];
   this.GXLastCtrlId =88;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.politicapagodocenteshorariowc",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",39,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",40,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(24,41,"HORARIOID","","","HorarioId","int",0,"px",4,4,"right",null,[],24,"HorarioId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(18,42,"HORARIONOMBRE","","","HorarioNombre","char",0,"px",50,50,"left",null,[],18,"HorarioNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(38,43,"HORARIODIAS","","","HorarioDias","char",0,"px",50,50,"left",null,[],38,"HorarioDias",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(10,44,"CURSOID","","","CursoId","int",0,"px",4,4,"right",null,[],10,"CursoId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(11,45,"CURSONOMBRE","","","CursoNombre","char",0,"px",50,50,"left",null,[],11,"CursoNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(23,46,"NIVELID","","","NivelId","int",0,"px",4,4,"right",null,[],23,"NivelId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(19,47,"NIVELNOMBRE","","","NivelNombre","char",0,"px",50,50,"left",null,[],19,"NivelNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(25,48,"LUGARID","","","LugarId","int",0,"px",4,4,"right",null,[],25,"LugarId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(39,49,"LUGARNOMBRE","","","LugarNombre","char",0,"px",50,50,"left",null,[],39,"LugarNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(12,50,"DOCENTEID","","","DocenteId","int",0,"px",4,4,"right",null,[],12,"DocenteId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(14,51,"DOCENTENOMBRE","","","DocenteNombre","char",0,"px",50,50,"left",null,[],14,"DocenteNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(20,52,"HORARIOFECHAINICIO","","","HorarioFechaInicio","date",0,"px",8,8,"right",null,[],20,"HorarioFechaInicio",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 56, 32, "DVelop_DVPaginationBar", this.CmpContext + "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV50GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV50GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV50GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV51GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV51GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV51GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e121c2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e131c2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_HORARIOIDContainer = gx.uc.getNew(this, 60, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_HORARIOIDContainer", "Ddo_horarioid", "DDO_HORARIOID");
   var DDO_HORARIOIDContainer = this.DDO_HORARIOIDContainer;
   DDO_HORARIOIDContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIOIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIOIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIOIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_HORARIOIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_HORARIOIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_HORARIOIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_HORARIOIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_HORARIOIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_HORARIOIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_HORARIOIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_HORARIOIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_HORARIOIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_HORARIOIDContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_HORARIOIDContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_HORARIOIDContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_HORARIOIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_HORARIOIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_HORARIOIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_HORARIOIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIOIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_HORARIOIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIOIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_HORARIOIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIOIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIOIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIOIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIOIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIOIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIOIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIOIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIOIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIOIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_HORARIOIDContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_HORARIOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIOIDContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_HORARIOIDContainer.addV2CFunction('AV23HorarioIdTitleFilterData', "vHORARIOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV23HorarioIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIOIDTITLEFILTERDATA",UC.ParentObject.AV23HorarioIdTitleFilterData); });
   DDO_HORARIOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIOIDContainer.addEventHandler("OnOptionClicked", this.e141c2_client);
   this.setUserControl(DDO_HORARIOIDContainer);
   this.DDO_HORARIONOMBREContainer = gx.uc.getNew(this, 62, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_HORARIONOMBREContainer", "Ddo_horarionombre", "DDO_HORARIONOMBRE");
   var DDO_HORARIONOMBREContainer = this.DDO_HORARIONOMBREContainer;
   DDO_HORARIONOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIONOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIONOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIONOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIONOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIONOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIONOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_HORARIONOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_HORARIONOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_HORARIONOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_HORARIONOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_HORARIONOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_HORARIONOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_HORARIONOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_HORARIONOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_HORARIONOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_HORARIONOMBREContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_HORARIONOMBREContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_HORARIONOMBREContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_HORARIONOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_HORARIONOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIONOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_HORARIONOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIONOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIONOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIONOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIONOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIONOMBREContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_HORARIONOMBREContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_HORARIONOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIONOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIONOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIONOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIONOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIONOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIONOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIONOMBREContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_HORARIONOMBREContainer.addV2CFunction('AV25HorarioNombreTitleFilterData', "vHORARIONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV25HorarioNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIONOMBRETITLEFILTERDATA",UC.ParentObject.AV25HorarioNombreTitleFilterData); });
   DDO_HORARIONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIONOMBREContainer.addEventHandler("OnOptionClicked", this.e151c2_client);
   this.setUserControl(DDO_HORARIONOMBREContainer);
   this.DDO_HORARIODIASContainer = gx.uc.getNew(this, 64, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_HORARIODIASContainer", "Ddo_horariodias", "DDO_HORARIODIAS");
   var DDO_HORARIODIASContainer = this.DDO_HORARIODIASContainer;
   DDO_HORARIODIASContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIODIASContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIODIASContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIODIASContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIODIASContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIODIASContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIODIASContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_HORARIODIASContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_HORARIODIASContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_HORARIODIASContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_HORARIODIASContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_HORARIODIASContainer.setProp("Visible", "Visible", true, "bool");
   DDO_HORARIODIASContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_HORARIODIASContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_HORARIODIASContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_HORARIODIASContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_HORARIODIASContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_HORARIODIASContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_HORARIODIASContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_HORARIODIASContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_HORARIODIASContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_HORARIODIASContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_HORARIODIASContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_HORARIODIASContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIODIASContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_HORARIODIASContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIODIASContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIODIASContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIODIASContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIODIASContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIODIASContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIODIASContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIODIASContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIODIASContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_HORARIODIASContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_HORARIODIASContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIODIASContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIODIASContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIODIASContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIODIASContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIODIASContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIODIASContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIODIASContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIODIASContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIODIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_HORARIODIASContainer.addV2CFunction('AV27HorarioDiasTitleFilterData', "vHORARIODIASTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIODIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV27HorarioDiasTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIODIASTITLEFILTERDATA",UC.ParentObject.AV27HorarioDiasTitleFilterData); });
   DDO_HORARIODIASContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIODIASContainer.addEventHandler("OnOptionClicked", this.e161c2_client);
   this.setUserControl(DDO_HORARIODIASContainer);
   this.DDO_CURSOIDContainer = gx.uc.getNew(this, 66, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_CURSOIDContainer", "Ddo_cursoid", "DDO_CURSOID");
   var DDO_CURSOIDContainer = this.DDO_CURSOIDContainer;
   DDO_CURSOIDContainer.setProp("Class", "Class", "", "char");
   DDO_CURSOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_CURSOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_CURSOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_CURSOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_CURSOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_CURSOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_CURSOIDContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_CURSOIDContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_CURSOIDContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
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
   DDO_CURSOIDContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_CURSOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_CURSOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_CURSOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_CURSOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_CURSOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_CURSOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_CURSOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_CURSOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_CURSOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_CURSOIDContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_CURSOIDContainer.addV2CFunction('AV29CursoIdTitleFilterData', "vCURSOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV29CursoIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSOIDTITLEFILTERDATA",UC.ParentObject.AV29CursoIdTitleFilterData); });
   DDO_CURSOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSOIDContainer.addEventHandler("OnOptionClicked", this.e171c2_client);
   this.setUserControl(DDO_CURSOIDContainer);
   this.DDO_CURSONOMBREContainer = gx.uc.getNew(this, 68, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_CURSONOMBREContainer", "Ddo_cursonombre", "DDO_CURSONOMBRE");
   var DDO_CURSONOMBREContainer = this.DDO_CURSONOMBREContainer;
   DDO_CURSONOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_CURSONOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_CURSONOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_CURSONOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_CURSONOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_CURSONOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_CURSONOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_CURSONOMBREContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_CURSONOMBREContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_CURSONOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_CURSONOMBREContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_CURSONOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_CURSONOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_CURSONOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_CURSONOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_CURSONOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_CURSONOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_CURSONOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_CURSONOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_CURSONOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_CURSONOMBREContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_CURSONOMBREContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_CURSONOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_CURSONOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_CURSONOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_CURSONOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_CURSONOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_CURSONOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_CURSONOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_CURSONOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_CURSONOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_CURSONOMBREContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_CURSONOMBREContainer.addV2CFunction('AV31CursoNombreTitleFilterData', "vCURSONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV31CursoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSONOMBRETITLEFILTERDATA",UC.ParentObject.AV31CursoNombreTitleFilterData); });
   DDO_CURSONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSONOMBREContainer.addEventHandler("OnOptionClicked", this.e181c2_client);
   this.setUserControl(DDO_CURSONOMBREContainer);
   this.DDO_NIVELIDContainer = gx.uc.getNew(this, 70, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_NIVELIDContainer", "Ddo_nivelid", "DDO_NIVELID");
   var DDO_NIVELIDContainer = this.DDO_NIVELIDContainer;
   DDO_NIVELIDContainer.setProp("Class", "Class", "", "char");
   DDO_NIVELIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_NIVELIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_NIVELIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_NIVELIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_NIVELIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_NIVELIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_NIVELIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_NIVELIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_NIVELIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_NIVELIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_NIVELIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_NIVELIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_NIVELIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_NIVELIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_NIVELIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_NIVELIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_NIVELIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_NIVELIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_NIVELIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_NIVELIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_NIVELIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_NIVELIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_NIVELIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_NIVELIDContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_NIVELIDContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_NIVELIDContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_NIVELIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_NIVELIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_NIVELIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_NIVELIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_NIVELIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_NIVELIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_NIVELIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_NIVELIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_NIVELIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_NIVELIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_NIVELIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_NIVELIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_NIVELIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_NIVELIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_NIVELIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_NIVELIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_NIVELIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_NIVELIDContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_NIVELIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_NIVELIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_NIVELIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_NIVELIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_NIVELIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_NIVELIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_NIVELIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_NIVELIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_NIVELIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_NIVELIDContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_NIVELIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_NIVELIDContainer.addV2CFunction('AV33NivelIdTitleFilterData', "vNIVELIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_NIVELIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV33NivelIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vNIVELIDTITLEFILTERDATA",UC.ParentObject.AV33NivelIdTitleFilterData); });
   DDO_NIVELIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_NIVELIDContainer.addEventHandler("OnOptionClicked", this.e191c2_client);
   this.setUserControl(DDO_NIVELIDContainer);
   this.DDO_NIVELNOMBREContainer = gx.uc.getNew(this, 72, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_NIVELNOMBREContainer", "Ddo_nivelnombre", "DDO_NIVELNOMBRE");
   var DDO_NIVELNOMBREContainer = this.DDO_NIVELNOMBREContainer;
   DDO_NIVELNOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_NIVELNOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_NIVELNOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_NIVELNOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_NIVELNOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_NIVELNOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_NIVELNOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_NIVELNOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_NIVELNOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_NIVELNOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_NIVELNOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_NIVELNOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_NIVELNOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_NIVELNOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_NIVELNOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_NIVELNOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_NIVELNOMBREContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_NIVELNOMBREContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_NIVELNOMBREContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_NIVELNOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_NIVELNOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_NIVELNOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_NIVELNOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_NIVELNOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_NIVELNOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_NIVELNOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_NIVELNOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_NIVELNOMBREContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_NIVELNOMBREContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_NIVELNOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_NIVELNOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_NIVELNOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_NIVELNOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_NIVELNOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_NIVELNOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_NIVELNOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_NIVELNOMBREContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_NIVELNOMBREContainer.addV2CFunction('AV35NivelNombreTitleFilterData', "vNIVELNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV35NivelNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vNIVELNOMBRETITLEFILTERDATA",UC.ParentObject.AV35NivelNombreTitleFilterData); });
   DDO_NIVELNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_NIVELNOMBREContainer.addEventHandler("OnOptionClicked", this.e201c2_client);
   this.setUserControl(DDO_NIVELNOMBREContainer);
   this.DDO_LUGARIDContainer = gx.uc.getNew(this, 74, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_LUGARIDContainer", "Ddo_lugarid", "DDO_LUGARID");
   var DDO_LUGARIDContainer = this.DDO_LUGARIDContainer;
   DDO_LUGARIDContainer.setProp("Class", "Class", "", "char");
   DDO_LUGARIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_LUGARIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_LUGARIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_LUGARIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_LUGARIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_LUGARIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_LUGARIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_LUGARIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_LUGARIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_LUGARIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_LUGARIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_LUGARIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_LUGARIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_LUGARIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_LUGARIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_LUGARIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_LUGARIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_LUGARIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_LUGARIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_LUGARIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_LUGARIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_LUGARIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_LUGARIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_LUGARIDContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_LUGARIDContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_LUGARIDContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_LUGARIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_LUGARIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_LUGARIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_LUGARIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_LUGARIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_LUGARIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_LUGARIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_LUGARIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_LUGARIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_LUGARIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_LUGARIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_LUGARIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_LUGARIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_LUGARIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_LUGARIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_LUGARIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_LUGARIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_LUGARIDContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_LUGARIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_LUGARIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_LUGARIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_LUGARIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_LUGARIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_LUGARIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_LUGARIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_LUGARIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_LUGARIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_LUGARIDContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_LUGARIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_LUGARIDContainer.addV2CFunction('AV37LugarIdTitleFilterData', "vLUGARIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_LUGARIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV37LugarIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vLUGARIDTITLEFILTERDATA",UC.ParentObject.AV37LugarIdTitleFilterData); });
   DDO_LUGARIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_LUGARIDContainer.addEventHandler("OnOptionClicked", this.e211c2_client);
   this.setUserControl(DDO_LUGARIDContainer);
   this.DDO_LUGARNOMBREContainer = gx.uc.getNew(this, 76, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_LUGARNOMBREContainer", "Ddo_lugarnombre", "DDO_LUGARNOMBRE");
   var DDO_LUGARNOMBREContainer = this.DDO_LUGARNOMBREContainer;
   DDO_LUGARNOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_LUGARNOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_LUGARNOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_LUGARNOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_LUGARNOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_LUGARNOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_LUGARNOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_LUGARNOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_LUGARNOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_LUGARNOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_LUGARNOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_LUGARNOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_LUGARNOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_LUGARNOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_LUGARNOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_LUGARNOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_LUGARNOMBREContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_LUGARNOMBREContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_LUGARNOMBREContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_LUGARNOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_LUGARNOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_LUGARNOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_LUGARNOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_LUGARNOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_LUGARNOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_LUGARNOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_LUGARNOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_LUGARNOMBREContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_LUGARNOMBREContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_LUGARNOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_LUGARNOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_LUGARNOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_LUGARNOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_LUGARNOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_LUGARNOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_LUGARNOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_LUGARNOMBREContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_LUGARNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_LUGARNOMBREContainer.addV2CFunction('AV39LugarNombreTitleFilterData', "vLUGARNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_LUGARNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV39LugarNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vLUGARNOMBRETITLEFILTERDATA",UC.ParentObject.AV39LugarNombreTitleFilterData); });
   DDO_LUGARNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_LUGARNOMBREContainer.addEventHandler("OnOptionClicked", this.e221c2_client);
   this.setUserControl(DDO_LUGARNOMBREContainer);
   this.DDO_DOCENTEIDContainer = gx.uc.getNew(this, 78, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_DOCENTEIDContainer", "Ddo_docenteid", "DDO_DOCENTEID");
   var DDO_DOCENTEIDContainer = this.DDO_DOCENTEIDContainer;
   DDO_DOCENTEIDContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTEIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTEIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTEIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTEIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTEIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTEIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_DOCENTEIDContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_DOCENTEIDContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_DOCENTEIDContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
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
   DDO_DOCENTEIDContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_DOCENTEIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTEIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTEIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_DOCENTEIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTEIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTEIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTEIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTEIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTEIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTEIDContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_DOCENTEIDContainer.addV2CFunction('AV41DocenteIdTitleFilterData', "vDOCENTEIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV41DocenteIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTEIDTITLEFILTERDATA",UC.ParentObject.AV41DocenteIdTitleFilterData); });
   DDO_DOCENTEIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTEIDContainer.addEventHandler("OnOptionClicked", this.e231c2_client);
   this.setUserControl(DDO_DOCENTEIDContainer);
   this.DDO_DOCENTENOMBREContainer = gx.uc.getNew(this, 80, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_DOCENTENOMBREContainer", "Ddo_docentenombre", "DDO_DOCENTENOMBRE");
   var DDO_DOCENTENOMBREContainer = this.DDO_DOCENTENOMBREContainer;
   DDO_DOCENTENOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_DOCENTENOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_DOCENTENOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_DOCENTENOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_DOCENTENOMBREContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_DOCENTENOMBREContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_DOCENTENOMBREContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_DOCENTENOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_DOCENTENOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_DOCENTENOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_DOCENTENOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_DOCENTENOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_DOCENTENOMBREContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_DOCENTENOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_DOCENTENOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_DOCENTENOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV43DocenteNombreTitleFilterData', "vDOCENTENOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV43DocenteNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTENOMBRETITLEFILTERDATA",UC.ParentObject.AV43DocenteNombreTitleFilterData); });
   DDO_DOCENTENOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTENOMBREContainer.addEventHandler("OnOptionClicked", this.e241c2_client);
   this.setUserControl(DDO_DOCENTENOMBREContainer);
   this.DDO_HORARIOFECHAINICIOContainer = gx.uc.getNew(this, 82, 32, "BootstrapDropDownOptions", this.CmpContext + "DDO_HORARIOFECHAINICIOContainer", "Ddo_horariofechainicio", "DDO_HORARIOFECHAINICIO");
   var DDO_HORARIOFECHAINICIOContainer = this.DDO_HORARIOFECHAINICIOContainer;
   DDO_HORARIOFECHAINICIOContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_HORARIOFECHAINICIOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_HORARIOFECHAINICIOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_HORARIOFECHAINICIOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_HORARIOFECHAINICIOContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_HORARIOFECHAINICIOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_HORARIOFECHAINICIOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIOFECHAINICIOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIOFECHAINICIOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("CleanFilter", "Cleanfilter", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV47DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV47DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV47DDO_TitleSettingsIcons); });
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV45HorarioFechaInicioTitleFilterData', "vHORARIOFECHAINICIOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45HorarioFechaInicioTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIOFECHAINICIOTITLEFILTERDATA",UC.ParentObject.AV45HorarioFechaInicioTitleFilterData); });
   DDO_HORARIOFECHAINICIOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIOFECHAINICIOContainer.addEventHandler("OnOptionClicked", this.e251c2_client);
   this.setUserControl(DDO_HORARIOFECHAINICIOContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 85, 32, "DVelop_WorkWithPlusUtilities", this.CmpContext + "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.DDO_MANAGEFILTERSContainer = gx.uc.getNew(this, 26, 0, "BootstrapDropDownOptions", this.CmpContext + "DDO_MANAGEFILTERSContainer", "Ddo_managefilters", "DDO_MANAGEFILTERS");
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
   DDO_MANAGEFILTERSContainer.addV2CFunction('AV21ManageFiltersData', "vMANAGEFILTERSDATA", 'SetDropDownOptionsData');
   DDO_MANAGEFILTERSContainer.addC2VFunction(function(UC) { UC.ParentObject.AV21ManageFiltersData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMANAGEFILTERSDATA",UC.ParentObject.AV21ManageFiltersData); });
   DDO_MANAGEFILTERSContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e111c2_client);
   this.setUserControl(DDO_MANAGEFILTERSContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEGRIDHEADER",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLEHEADER",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"TABLEACTIONS",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"BTNINSERT",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"TABLERIGHTHEADER",grid:0};
   GXValidFnc[25]={ id: 25, fld:"HTML_MANAGEFILTERS",grid:0};
   GXValidFnc[28]={ id: 28, fld:"TABLEFILTERS",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vFILTERFULLTEXT",gxz:"ZV15FilterFullText",gxold:"OV15FilterFullText",gxvar:"AV15FilterFullText",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15FilterFullText=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15FilterFullText=Value},v2c:function(){gx.fn.setControlValue("vFILTERFULLTEXT",gx.O.AV15FilterFullText,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.AV15FilterFullText=this.val()},val:function(){return gx.fn.getControlValue("vFILTERFULLTEXT")},nac:gx.falseFn};
   this.declareDomainHdlr( 32 , function() {
   });
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"GRIDTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV54Update",gxold:"OV54Update",gxvar:"AV54Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV54Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(38),gx.O.AV54Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV54Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[40]={ id:40 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV55Delete",gxold:"OV55Delete",gxvar:"AV55Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV55Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(38),gx.O.AV55Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV55Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[41]={ id:41 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[47,45,49,51,42,43,44,46,48,50,52],ip:[47,45,49,51,42,43,52,46,44,48,50,41],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HORARIOID",row || gx.fn.currentGridRowImpl(38),gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HORARIOID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[42]={ id:42 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(row){gx.fn.setGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(38),gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[43]={ id:43 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIODIAS",gxz:"Z38HorarioDias",gxold:"O38HorarioDias",gxvar:"A38HorarioDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A38HorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z38HorarioDias=Value},v2c:function(row){gx.fn.setGridControlValue("HORARIODIAS",row || gx.fn.currentGridRowImpl(38),gx.O.A38HorarioDias,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A38HorarioDias=this.val()},val:function(row){return gx.fn.getGridControlValue("HORARIODIAS",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[44]={ id:44 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CURSOID",row || gx.fn.currentGridRowImpl(38),gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CURSOID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(38),gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NIVELID",row || gx.fn.currentGridRowImpl(38),gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NIVELID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(row){gx.fn.setGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(38),gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Lugarid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARID",gxz:"Z25LugarId",gxold:"O25LugarId",gxvar:"A25LugarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A25LugarId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z25LugarId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LUGARID",row || gx.fn.currentGridRowImpl(38),gx.O.A25LugarId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A25LugarId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LUGARID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARNOMBRE",gxz:"Z39LugarNombre",gxold:"O39LugarNombre",gxvar:"A39LugarNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A39LugarNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z39LugarNombre=Value},v2c:function(row){gx.fn.setGridControlValue("LUGARNOMBRE",row || gx.fn.currentGridRowImpl(38),gx.O.A39LugarNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A39LugarNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("LUGARNOMBRE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:this.Valid_Docenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCENTEID",row || gx.fn.currentGridRowImpl(38),gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCENTEID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(38),gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(38),gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[61]={ id:61 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOIDTITLECONTROLIDTOREPLACE",gxz:"ZV24ddo_HorarioIdTitleControlIdToReplace",gxold:"OV24ddo_HorarioIdTitleControlIdToReplace",gxvar:"AV24ddo_HorarioIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV24ddo_HorarioIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24ddo_HorarioIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE",gx.O.AV24ddo_HorarioIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV24ddo_HorarioIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[63]={ id:63 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV26ddo_HorarioNombreTitleControlIdToReplace",gxold:"OV26ddo_HorarioNombreTitleControlIdToReplace",gxvar:"AV26ddo_HorarioNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV26ddo_HorarioNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26ddo_HorarioNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV26ddo_HorarioNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV26ddo_HorarioNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIODIASTITLECONTROLIDTOREPLACE",gxz:"ZV28ddo_HorarioDiasTitleControlIdToReplace",gxold:"OV28ddo_HorarioDiasTitleControlIdToReplace",gxvar:"AV28ddo_HorarioDiasTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV28ddo_HorarioDiasTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV28ddo_HorarioDiasTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE",gx.O.AV28ddo_HorarioDiasTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV28ddo_HorarioDiasTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gxz:"ZV30ddo_CursoIdTitleControlIdToReplace",gxold:"OV30ddo_CursoIdTitleControlIdToReplace",gxvar:"AV30ddo_CursoIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV30ddo_CursoIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV30ddo_CursoIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gx.O.AV30ddo_CursoIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV30ddo_CursoIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV32ddo_CursoNombreTitleControlIdToReplace",gxold:"OV32ddo_CursoNombreTitleControlIdToReplace",gxvar:"AV32ddo_CursoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV32ddo_CursoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV32ddo_CursoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV32ddo_CursoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV32ddo_CursoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_NIVELIDTITLECONTROLIDTOREPLACE",gxz:"ZV34ddo_NivelIdTitleControlIdToReplace",gxold:"OV34ddo_NivelIdTitleControlIdToReplace",gxvar:"AV34ddo_NivelIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV34ddo_NivelIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV34ddo_NivelIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_NIVELIDTITLECONTROLIDTOREPLACE",gx.O.AV34ddo_NivelIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV34ddo_NivelIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_NIVELIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV36ddo_NivelNombreTitleControlIdToReplace",gxold:"OV36ddo_NivelNombreTitleControlIdToReplace",gxvar:"AV36ddo_NivelNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV36ddo_NivelNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV36ddo_NivelNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV36ddo_NivelNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV36ddo_NivelNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_LUGARIDTITLECONTROLIDTOREPLACE",gxz:"ZV38ddo_LugarIdTitleControlIdToReplace",gxold:"OV38ddo_LugarIdTitleControlIdToReplace",gxvar:"AV38ddo_LugarIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV38ddo_LugarIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV38ddo_LugarIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_LUGARIDTITLECONTROLIDTOREPLACE",gx.O.AV38ddo_LugarIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV38ddo_LugarIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_LUGARIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV40ddo_LugarNombreTitleControlIdToReplace",gxold:"OV40ddo_LugarNombreTitleControlIdToReplace",gxvar:"AV40ddo_LugarNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV40ddo_LugarNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV40ddo_LugarNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV40ddo_LugarNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV40ddo_LugarNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gxz:"ZV42ddo_DocenteIdTitleControlIdToReplace",gxold:"OV42ddo_DocenteIdTitleControlIdToReplace",gxvar:"AV42ddo_DocenteIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV42ddo_DocenteIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV42ddo_DocenteIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gx.O.AV42ddo_DocenteIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV42ddo_DocenteIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV44ddo_DocenteNombreTitleControlIdToReplace",gxold:"OV44ddo_DocenteNombreTitleControlIdToReplace",gxvar:"AV44ddo_DocenteNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV44ddo_DocenteNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV44ddo_DocenteNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gx.O.AV44ddo_DocenteNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV44ddo_DocenteNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gxz:"ZV46ddo_HorarioFechaInicioTitleControlIdToReplace",gxold:"OV46ddo_HorarioFechaInicioTitleControlIdToReplace",gxvar:"AV46ddo_HorarioFechaInicioTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV46ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gx.O.AV46ddo_HorarioFechaInicioTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46ddo_HorarioFechaInicioTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEID",gxz:"Z32PoliticaPagoDocenteId",gxold:"O32PoliticaPagoDocenteId",gxvar:"A32PoliticaPagoDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z32PoliticaPagoDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAPAGODOCENTEID",gx.O.A32PoliticaPagoDocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAPAGODOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 84 , function() {
   });
   GXValidFnc[86]={ id:86 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV13OrderedBy",gxold:"OV13OrderedBy",gxvar:"AV13OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV13OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV14OrderedDsc",gxold:"OV14OrderedDsc",gxvar:"AV14OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV14OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV14OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV14OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV14OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV17ManageFiltersExecutionStep",gxold:"OV17ManageFiltersExecutionStep",gxvar:"AV17ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV17ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV17ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV17ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV17ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV54Update = "" ;
   this.OV54Update = "" ;
   this.ZV55Delete = "" ;
   this.OV55Delete = "" ;
   this.Z24HorarioId = 0 ;
   this.O24HorarioId = 0 ;
   this.Z18HorarioNombre = "" ;
   this.O18HorarioNombre = "" ;
   this.Z38HorarioDias = "" ;
   this.O38HorarioDias = "" ;
   this.Z10CursoId = 0 ;
   this.O10CursoId = 0 ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.Z23NivelId = 0 ;
   this.O23NivelId = 0 ;
   this.Z19NivelNombre = "" ;
   this.O19NivelNombre = "" ;
   this.Z25LugarId = 0 ;
   this.O25LugarId = 0 ;
   this.Z39LugarNombre = "" ;
   this.O39LugarNombre = "" ;
   this.Z12DocenteId = 0 ;
   this.O12DocenteId = 0 ;
   this.Z14DocenteNombre = "" ;
   this.O14DocenteNombre = "" ;
   this.Z20HorarioFechaInicio = gx.date.nullDate() ;
   this.O20HorarioFechaInicio = gx.date.nullDate() ;
   this.AV24ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.ZV24ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.OV24ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.AV26ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.ZV26ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.OV26ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV28ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.ZV28ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.OV28ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.AV30ddo_CursoIdTitleControlIdToReplace = "" ;
   this.ZV30ddo_CursoIdTitleControlIdToReplace = "" ;
   this.OV30ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV32ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.ZV32ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.OV32ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV34ddo_NivelIdTitleControlIdToReplace = "" ;
   this.ZV34ddo_NivelIdTitleControlIdToReplace = "" ;
   this.OV34ddo_NivelIdTitleControlIdToReplace = "" ;
   this.AV36ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.ZV36ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.OV36ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV38ddo_LugarIdTitleControlIdToReplace = "" ;
   this.ZV38ddo_LugarIdTitleControlIdToReplace = "" ;
   this.OV38ddo_LugarIdTitleControlIdToReplace = "" ;
   this.AV40ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.ZV40ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.OV40ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.AV42ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.ZV42ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.OV42ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV44ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.ZV44ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.OV44ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV46ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.ZV46ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.OV46ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.Z32PoliticaPagoDocenteId = 0 ;
   this.O32PoliticaPagoDocenteId = 0 ;
   this.AV13OrderedBy = 0 ;
   this.ZV13OrderedBy = 0 ;
   this.OV13OrderedBy = 0 ;
   this.AV14OrderedDsc = false ;
   this.ZV14OrderedDsc = false ;
   this.OV14OrderedDsc = false ;
   this.AV17ManageFiltersExecutionStep = 0 ;
   this.ZV17ManageFiltersExecutionStep = 0 ;
   this.OV17ManageFiltersExecutionStep = 0 ;
   this.AV21ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV50GridCurrentPage = 0 ;
   this.AV47DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV24ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.AV26ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV28ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.AV30ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV32ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV34ddo_NivelIdTitleControlIdToReplace = "" ;
   this.AV36ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV38ddo_LugarIdTitleControlIdToReplace = "" ;
   this.AV40ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.AV42ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV44ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV46ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.AV13OrderedBy = 0 ;
   this.AV14OrderedDsc = false ;
   this.AV17ManageFiltersExecutionStep = 0 ;
   this.AV7PoliticaPagoDocenteId = 0 ;
   this.AV54Update = "" ;
   this.AV55Delete = "" ;
   this.A24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.A38HorarioDias = "" ;
   this.A10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.A23NivelId = 0 ;
   this.A19NivelNombre = "" ;
   this.A25LugarId = 0 ;
   this.A39LugarNombre = "" ;
   this.A12DocenteId = 0 ;
   this.A14DocenteNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.AV58Pgmname = "" ;
   this.AV11GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e121c2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e131c2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e141c2_client": ["DDO_HORARIOID.ONOPTIONCLICKED", true] ,"e151c2_client": ["DDO_HORARIONOMBRE.ONOPTIONCLICKED", true] ,"e161c2_client": ["DDO_HORARIODIAS.ONOPTIONCLICKED", true] ,"e171c2_client": ["DDO_CURSOID.ONOPTIONCLICKED", true] ,"e181c2_client": ["DDO_CURSONOMBRE.ONOPTIONCLICKED", true] ,"e191c2_client": ["DDO_NIVELID.ONOPTIONCLICKED", true] ,"e201c2_client": ["DDO_NIVELNOMBRE.ONOPTIONCLICKED", true] ,"e211c2_client": ["DDO_LUGARID.ONOPTIONCLICKED", true] ,"e221c2_client": ["DDO_LUGARNOMBRE.ONOPTIONCLICKED", true] ,"e231c2_client": ["DDO_DOCENTEID.ONOPTIONCLICKED", true] ,"e241c2_client": ["DDO_DOCENTENOMBRE.ONOPTIONCLICKED", true] ,"e251c2_client": ["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", true] ,"e111c2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e261c2_client": ["'DOINSERT'", true] ,"e301c2_client": ["ENTER", true] ,"e311c2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'sPrefix'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'this.DDO_HORARIOIDContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIOID',prop:'TitleControlIdToReplace'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIODIASContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIODIAS',prop:'TitleControlIdToReplace'},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSOIDContainer.TitleControlIdToReplace',ctrl:'DDO_CURSOID',prop:'TitleControlIdToReplace'},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_CURSONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_NIVELIDContainer.TitleControlIdToReplace',ctrl:'DDO_NIVELID',prop:'TitleControlIdToReplace'},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_NIVELIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_NIVELNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_NIVELNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_LUGARIDContainer.TitleControlIdToReplace',ctrl:'DDO_LUGARID',prop:'TitleControlIdToReplace'},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_LUGARIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_LUGARNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_LUGARNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTEIDContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTEID',prop:'TitleControlIdToReplace'},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTENOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTENOMBRE',prop:'TitleControlIdToReplace'},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIOFECHAINICIOContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIOFECHAINICIO',prop:'TitleControlIdToReplace'},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEID","Visible")',ctrl:'POLITICAPAGODOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV47DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_HORARIOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_HORARIOIDContainer.ActiveEventKey',ctrl:'DDO_HORARIOID',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_HORARIONOMBREContainer.ActiveEventKey',ctrl:'DDO_HORARIONOMBRE',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIODIAS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_HORARIODIASContainer.ActiveEventKey',ctrl:'DDO_HORARIODIAS',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_CURSOIDContainer.ActiveEventKey',ctrl:'DDO_CURSOID',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_CURSONOMBREContainer.ActiveEventKey',ctrl:'DDO_CURSONOMBRE',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_NIVELID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_NIVELIDContainer.ActiveEventKey',ctrl:'DDO_NIVELID',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_NIVELNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_NIVELNOMBREContainer.ActiveEventKey',ctrl:'DDO_NIVELNOMBRE',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_LUGARID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_LUGARIDContainer.ActiveEventKey',ctrl:'DDO_LUGARID',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_LUGARNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_LUGARNOMBREContainer.ActiveEventKey',ctrl:'DDO_LUGARNOMBRE',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTEID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_DOCENTEIDContainer.ActiveEventKey',ctrl:'DDO_DOCENTEID',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTENOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_DOCENTENOMBREContainer.ActiveEventKey',ctrl:'DDO_DOCENTENOMBRE',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_HORARIOFECHAINICIOContainer.ActiveEventKey',ctrl:'DDO_HORARIOFECHAINICIO',prop:'ActiveEventKey'}],[{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9',hsh:true},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A25LugarId',fld:'LUGARID',pic:'ZZZ9'},{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[{av:'AV54Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV55Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Link")',ctrl:'HORARIONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Link")',ctrl:'LUGARNOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Link")',ctrl:'DOCENTENOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV24ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV26ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV28ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV30ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV32ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV34ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV36ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV38ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV40ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV42ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV44ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV46ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV58Pgmname',fld:'vPGMNAME',pic:''},{av:'sPrefix'},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV17ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV11GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV14OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV23HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV25HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV27HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV29CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV31CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV33NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV35NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV37LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV39LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV41DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV43DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV45HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV50GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV51GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV21ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9',hsh:true}],[]];
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV11GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV7PoliticaPagoDocenteId", "vPOLITICAPAGODOCENTEID", 0, "int", 4, 0);
   this.setVCMap("AV7PoliticaPagoDocenteId", "vPOLITICAPAGODOCENTEID", 0, "int", 4, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV7PoliticaPagoDocenteId", "vPOLITICAPAGODOCENTEID", 0, "int", 4, 0);
   this.setVCMap("AV58Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[32]);
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar({rfrVar:"AV7PoliticaPagoDocenteId"});
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[61]);
   GridContainer.addRefreshingVar(this.GXValidFnc[63]);
   GridContainer.addRefreshingVar(this.GXValidFnc[65]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar({rfrVar:"AV58Pgmname"});
   this.Initialize( );
});
