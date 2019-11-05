/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:21:18.9
*/
gx.evt.autoSkip = false;
gx.define('academia.matriculaww', false, function () {
   this.ServerClass =  "academia.matriculaww" ;
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
      this.AV140Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A1AlumnoId=gx.fn.getIntegerValue("ALUMNOID",'.') ;
      this.A24HorarioId=gx.fn.getIntegerValue("HORARIOID",'.') ;
      this.A10CursoId=gx.fn.getIntegerValue("CURSOID",'.') ;
      this.A26PoliticaId=gx.fn.getIntegerValue("POLITICAID",'.') ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV140Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Tfmatriculafecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFMATRICULAFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV50TFMatriculaFecha)==0) || new gx.date.gxdate( this.AV50TFMatriculaFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFMatricula Fecha fuera de rango");
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
   this.Validv_Tfmatriculafecha_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFMATRICULAFECHA_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV51TFMatriculaFecha_To)==0) || new gx.date.gxdate( this.AV51TFMatriculaFecha_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFMatricula Fecha_To fuera de rango");
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
   this.Validv_Ddo_matriculafechaauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_MATRICULAFECHAAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV52DDO_MatriculaFechaAuxDate)==0) || new gx.date.gxdate( this.AV52DDO_MatriculaFechaAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Matricula Fecha Aux Date fuera de rango");
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
   this.Validv_Ddo_matriculafechaauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_MATRICULAFECHAAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV53DDO_MatriculaFechaAuxDateTo)==0) || new gx.date.gxdate( this.AV53DDO_MatriculaFechaAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Matricula Fecha Aux Date To fuera de rango");
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
   this.Validv_Tfhorariofechainicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFHORARIOFECHAINICIO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV72TFHorarioFechaInicio)==0) || new gx.date.gxdate( this.AV72TFHorarioFechaInicio ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFHorario Fecha Inicio fuera de rango");
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
   this.Validv_Tfhorariofechainicio_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFHORARIOFECHAINICIO_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV73TFHorarioFechaInicio_To)==0) || new gx.date.gxdate( this.AV73TFHorarioFechaInicio_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFHorario Fecha Inicio_To fuera de rango");
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
   this.Validv_Ddo_horariofechainicioauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_HORARIOFECHAINICIOAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV74DDO_HorarioFechaInicioAuxDate)==0) || new gx.date.gxdate( this.AV74DDO_HorarioFechaInicioAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Horario Fecha Inicio Aux Date fuera de rango");
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
   this.Validv_Ddo_horariofechainicioauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_HORARIOFECHAINICIOAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV75DDO_HorarioFechaInicioAuxDateTo)==0) || new gx.date.gxdate( this.AV75DDO_HorarioFechaInicioAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Horario Fecha Inicio Aux Date To fuera de rango");
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
         this.DDO_MATRICULAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_MATRICULAFECHAContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_ALUMNONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_HORARIONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_HORARIOFECHAINICIOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_CURSONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 7 )
      {
         this.DDO_NIVELNOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 8 )
      {
         this.DDO_POLITICANOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 9 )
      {
         this.DDO_MATRICULAAPROBADOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_MATRICULAIDContainer.SortedStatus =  ""  ;
      this.DDO_MATRICULAFECHAContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_HORARIONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_HORARIOFECHAINICIOContainer.SortedStatus =  ""  ;
      this.DDO_CURSONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_NIVELNOMBREContainer.SortedStatus =  ""  ;
      this.DDO_POLITICANOMBREContainer.SortedStatus =  ""  ;
      this.DDO_MATRICULAAPROBADOContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFMatriculaId = gx.num.trunc( 0 ,0) ;
      this.DDO_MATRICULAIDContainer.FilteredText_set =  ""  ;
      this.AV47TFMatriculaId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_MATRICULAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFMatriculaFecha =  ''  ;
      this.DDO_MATRICULAFECHAContainer.FilteredText_set =  ""  ;
      this.AV51TFMatriculaFecha_To =  ''  ;
      this.DDO_MATRICULAFECHAContainer.FilteredTextTo_set =  ""  ;
      this.AV60TFAlumnoNombre =  ''  ;
      this.DDO_ALUMNONOMBREContainer.FilteredText_set =  ""  ;
      this.AV61TFAlumnoNombre_Sel =  ''  ;
      this.DDO_ALUMNONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV68TFHorarioNombre =  ''  ;
      this.DDO_HORARIONOMBREContainer.FilteredText_set =  ""  ;
      this.AV69TFHorarioNombre_Sel =  ''  ;
      this.DDO_HORARIONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV72TFHorarioFechaInicio =  ''  ;
      this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set =  ""  ;
      this.AV73TFHorarioFechaInicio_To =  ''  ;
      this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set =  ""  ;
      this.AV82TFCursoNombre =  ''  ;
      this.DDO_CURSONOMBREContainer.FilteredText_set =  ""  ;
      this.AV83TFCursoNombre_Sel =  ''  ;
      this.DDO_CURSONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV90TFNivelNombre =  ''  ;
      this.DDO_NIVELNOMBREContainer.FilteredText_set =  ""  ;
      this.AV91TFNivelNombre_Sel =  ''  ;
      this.DDO_NIVELNOMBREContainer.SelectedValue_set =  ""  ;
      this.AV98TFPoliticaNombre =  ''  ;
      this.DDO_POLITICANOMBREContainer.FilteredText_set =  ""  ;
      this.AV99TFPoliticaNombre_Sel =  ''  ;
      this.DDO_POLITICANOMBREContainer.SelectedValue_set =  ""  ;
      this.AV105TFMatriculaAprobado_Sel = gx.num.trunc( 0 ,0) ;
      this.DDO_MATRICULAAPROBADOContainer.SelectedValue_set =  ""  ;
   };
   this.e120n2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130n2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140n2_client=function()
   {
      return this.executeServerEvent("DDO_MATRICULAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150n2_client=function()
   {
      return this.executeServerEvent("DDO_MATRICULAFECHA.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160n2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170n2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180n2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190n2_client=function()
   {
      return this.executeServerEvent("DDO_CURSONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200n2_client=function()
   {
      return this.executeServerEvent("DDO_NIVELNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210n2_client=function()
   {
      return this.executeServerEvent("DDO_POLITICANOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e220n2_client=function()
   {
      return this.executeServerEvent("DDO_MATRICULAAPROBADO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e230n2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110n2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e240n2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e250n2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e260n2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e300n2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e310n2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,64,66,68,70,72,74,76,78,80,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109];
   this.GXLastCtrlId =109;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.matriculaww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(27,47,"MATRICULAID","","","MatriculaId","int",0,"px",4,4,"right",null,[],27,"MatriculaId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(40,48,"MATRICULAFECHA","","","MatriculaFecha","date",0,"px",8,8,"right",null,[],40,"MatriculaFecha",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(2,49,"ALUMNONOMBRE","","","AlumnoNombre","char",0,"px",50,50,"left",null,[],2,"AlumnoNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(18,50,"HORARIONOMBRE","","","HorarioNombre","char",0,"px",50,50,"left",null,[],18,"HorarioNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(20,51,"HORARIOFECHAINICIO","","","HorarioFechaInicio","date",0,"px",8,8,"right",null,[],20,"HorarioFechaInicio",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(11,52,"CURSONOMBRE","","","CursoNombre","char",0,"px",50,50,"left",null,[],11,"CursoNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(19,53,"NIVELNOMBRE","","","NivelNombre","char",0,"px",50,50,"left",null,[],19,"NivelNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(41,54,"POLITICANOMBRE","","","PoliticaNombre","char",0,"px",50,50,"left",null,[],41,"PoliticaNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(83,55,"MATRICULAAPROBADO","","","MatriculaAprobado","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 59, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV113GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV113GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV113GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV114GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV114GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV114GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120n2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130n2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_MATRICULAIDContainer = gx.uc.getNew(this, 63, 35, "BootstrapDropDownOptions", "DDO_MATRICULAIDContainer", "Ddo_matriculaid", "DDO_MATRICULAID");
   var DDO_MATRICULAIDContainer = this.DDO_MATRICULAIDContainer;
   DDO_MATRICULAIDContainer.setProp("Class", "Class", "", "char");
   DDO_MATRICULAIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_MATRICULAIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_MATRICULAIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_MATRICULAIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_MATRICULAIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_MATRICULAIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MATRICULAIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_MATRICULAIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_MATRICULAIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_MATRICULAIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_MATRICULAIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_MATRICULAIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_MATRICULAIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_MATRICULAIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_MATRICULAIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_MATRICULAIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MATRICULAIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_MATRICULAIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_MATRICULAIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MATRICULAIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MATRICULAIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_MATRICULAIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_MATRICULAIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_MATRICULAIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_MATRICULAIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_MATRICULAIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_MATRICULAIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_MATRICULAIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_MATRICULAIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_MATRICULAIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_MATRICULAIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_MATRICULAIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_MATRICULAIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_MATRICULAIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_MATRICULAIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_MATRICULAIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_MATRICULAIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_MATRICULAIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_MATRICULAIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_MATRICULAIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_MATRICULAIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_MATRICULAIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_MATRICULAIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_MATRICULAIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_MATRICULAIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_MATRICULAIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_MATRICULAIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_MATRICULAIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_MATRICULAIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_MATRICULAIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_MATRICULAIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_MATRICULAIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_MATRICULAIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_MATRICULAIDContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_MATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_MATRICULAIDContainer.addV2CFunction('AV45MatriculaIdTitleFilterData', "vMATRICULAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_MATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45MatriculaIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMATRICULAIDTITLEFILTERDATA",UC.ParentObject.AV45MatriculaIdTitleFilterData); });
   DDO_MATRICULAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MATRICULAIDContainer.addEventHandler("OnOptionClicked", this.e140n2_client);
   this.setUserControl(DDO_MATRICULAIDContainer);
   this.DDO_MATRICULAFECHAContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_MATRICULAFECHAContainer", "Ddo_matriculafecha", "DDO_MATRICULAFECHA");
   var DDO_MATRICULAFECHAContainer = this.DDO_MATRICULAFECHAContainer;
   DDO_MATRICULAFECHAContainer.setProp("Class", "Class", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_MATRICULAFECHAContainer.setProp("Icon", "Icon", "", "str");
   DDO_MATRICULAFECHAContainer.setProp("Caption", "Caption", "", "str");
   DDO_MATRICULAFECHAContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_MATRICULAFECHAContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_MATRICULAFECHAContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MATRICULAFECHAContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_MATRICULAFECHAContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MATRICULAFECHAContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_MATRICULAFECHAContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_MATRICULAFECHAContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MATRICULAFECHAContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MATRICULAFECHAContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_MATRICULAFECHAContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_MATRICULAFECHAContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_MATRICULAFECHAContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_MATRICULAFECHAContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_MATRICULAFECHAContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_MATRICULAFECHAContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_MATRICULAFECHAContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_MATRICULAFECHAContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_MATRICULAFECHAContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_MATRICULAFECHAContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_MATRICULAFECHAContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_MATRICULAFECHAContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_MATRICULAFECHAContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_MATRICULAFECHAContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_MATRICULAFECHAContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_MATRICULAFECHAContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_MATRICULAFECHAContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_MATRICULAFECHAContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_MATRICULAFECHAContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_MATRICULAFECHAContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_MATRICULAFECHAContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_MATRICULAFECHAContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_MATRICULAFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_MATRICULAFECHAContainer.addV2CFunction('AV49MatriculaFechaTitleFilterData', "vMATRICULAFECHATITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_MATRICULAFECHAContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49MatriculaFechaTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMATRICULAFECHATITLEFILTERDATA",UC.ParentObject.AV49MatriculaFechaTitleFilterData); });
   DDO_MATRICULAFECHAContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MATRICULAFECHAContainer.addEventHandler("OnOptionClicked", this.e150n2_client);
   this.setUserControl(DDO_MATRICULAFECHAContainer);
   this.DDO_ALUMNONOMBREContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_ALUMNONOMBREContainer", "Ddo_alumnonombre", "DDO_ALUMNONOMBRE");
   var DDO_ALUMNONOMBREContainer = this.DDO_ALUMNONOMBREContainer;
   DDO_ALUMNONOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNONOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNONOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNONOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNONOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNONOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNONOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNONOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNONOMBREContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNONOMBREContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNONOMBREContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNONOMBREContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNONOMBREContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNONOMBREContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNONOMBREContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNONOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNONOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNONOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNONOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNONOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNONOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.MatriculaWWGetFilterData", "str");
   DDO_ALUMNONOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNONOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNONOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNONOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNONOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNONOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNONOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNONOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNONOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNONOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNONOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNONOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNONOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNONOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNONOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNONOMBREContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_ALUMNONOMBREContainer.addV2CFunction('AV59AlumnoNombreTitleFilterData', "vALUMNONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV59AlumnoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNONOMBRETITLEFILTERDATA",UC.ParentObject.AV59AlumnoNombreTitleFilterData); });
   DDO_ALUMNONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNONOMBREContainer.addEventHandler("OnOptionClicked", this.e160n2_client);
   this.setUserControl(DDO_ALUMNONOMBREContainer);
   this.DDO_HORARIONOMBREContainer = gx.uc.getNew(this, 69, 35, "BootstrapDropDownOptions", "DDO_HORARIONOMBREContainer", "Ddo_horarionombre", "DDO_HORARIONOMBRE");
   var DDO_HORARIONOMBREContainer = this.DDO_HORARIONOMBREContainer;
   DDO_HORARIONOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIONOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIONOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIONOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIONOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIONOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIONOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIONOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIONOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIONOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_HORARIONOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_HORARIONOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_HORARIONOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_HORARIONOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_HORARIONOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_HORARIONOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_HORARIONOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.MatriculaWWGetFilterData", "str");
   DDO_HORARIONOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIONOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_HORARIONOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIONOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIONOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIONOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIONOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIONOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIONOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_HORARIONOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_HORARIONOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIONOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIONOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_HORARIONOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIONOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIONOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIONOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIONOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIONOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIONOMBREContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_HORARIONOMBREContainer.addV2CFunction('AV67HorarioNombreTitleFilterData', "vHORARIONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67HorarioNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIONOMBRETITLEFILTERDATA",UC.ParentObject.AV67HorarioNombreTitleFilterData); });
   DDO_HORARIONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIONOMBREContainer.addEventHandler("OnOptionClicked", this.e170n2_client);
   this.setUserControl(DDO_HORARIONOMBREContainer);
   this.DDO_HORARIOFECHAINICIOContainer = gx.uc.getNew(this, 71, 35, "BootstrapDropDownOptions", "DDO_HORARIOFECHAINICIOContainer", "Ddo_horariofechainicio", "DDO_HORARIOFECHAINICIO");
   var DDO_HORARIOFECHAINICIOContainer = this.DDO_HORARIOFECHAINICIOContainer;
   DDO_HORARIOFECHAINICIOContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_HORARIOFECHAINICIOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
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
   DDO_HORARIOFECHAINICIOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIOFECHAINICIOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIOFECHAINICIOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV71HorarioFechaInicioTitleFilterData', "vHORARIOFECHAINICIOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71HorarioFechaInicioTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIOFECHAINICIOTITLEFILTERDATA",UC.ParentObject.AV71HorarioFechaInicioTitleFilterData); });
   DDO_HORARIOFECHAINICIOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIOFECHAINICIOContainer.addEventHandler("OnOptionClicked", this.e180n2_client);
   this.setUserControl(DDO_HORARIOFECHAINICIOContainer);
   this.DDO_CURSONOMBREContainer = gx.uc.getNew(this, 73, 35, "BootstrapDropDownOptions", "DDO_CURSONOMBREContainer", "Ddo_cursonombre", "DDO_CURSONOMBRE");
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
   DDO_CURSONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.MatriculaWWGetFilterData", "str");
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
   DDO_CURSONOMBREContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_CURSONOMBREContainer.addV2CFunction('AV81CursoNombreTitleFilterData', "vCURSONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV81CursoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSONOMBRETITLEFILTERDATA",UC.ParentObject.AV81CursoNombreTitleFilterData); });
   DDO_CURSONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSONOMBREContainer.addEventHandler("OnOptionClicked", this.e190n2_client);
   this.setUserControl(DDO_CURSONOMBREContainer);
   this.DDO_NIVELNOMBREContainer = gx.uc.getNew(this, 75, 35, "BootstrapDropDownOptions", "DDO_NIVELNOMBREContainer", "Ddo_nivelnombre", "DDO_NIVELNOMBRE");
   var DDO_NIVELNOMBREContainer = this.DDO_NIVELNOMBREContainer;
   DDO_NIVELNOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_NIVELNOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_NIVELNOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_NIVELNOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_NIVELNOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_NIVELNOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_NIVELNOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_NIVELNOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_NIVELNOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_NIVELNOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_NIVELNOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_NIVELNOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_NIVELNOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_NIVELNOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_NIVELNOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_NIVELNOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_NIVELNOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.MatriculaWWGetFilterData", "str");
   DDO_NIVELNOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_NIVELNOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_NIVELNOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_NIVELNOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_NIVELNOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_NIVELNOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_NIVELNOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_NIVELNOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_NIVELNOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_NIVELNOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_NIVELNOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_NIVELNOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_NIVELNOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_NIVELNOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_NIVELNOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_NIVELNOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_NIVELNOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_NIVELNOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_NIVELNOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_NIVELNOMBREContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_NIVELNOMBREContainer.addV2CFunction('AV89NivelNombreTitleFilterData', "vNIVELNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV89NivelNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vNIVELNOMBRETITLEFILTERDATA",UC.ParentObject.AV89NivelNombreTitleFilterData); });
   DDO_NIVELNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_NIVELNOMBREContainer.addEventHandler("OnOptionClicked", this.e200n2_client);
   this.setUserControl(DDO_NIVELNOMBREContainer);
   this.DDO_POLITICANOMBREContainer = gx.uc.getNew(this, 77, 35, "BootstrapDropDownOptions", "DDO_POLITICANOMBREContainer", "Ddo_politicanombre", "DDO_POLITICANOMBRE");
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
   DDO_POLITICANOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.MatriculaWWGetFilterData", "str");
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
   DDO_POLITICANOMBREContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_POLITICANOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_POLITICANOMBREContainer.addV2CFunction('AV97PoliticaNombreTitleFilterData', "vPOLITICANOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_POLITICANOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV97PoliticaNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPOLITICANOMBRETITLEFILTERDATA",UC.ParentObject.AV97PoliticaNombreTitleFilterData); });
   DDO_POLITICANOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_POLITICANOMBREContainer.addEventHandler("OnOptionClicked", this.e210n2_client);
   this.setUserControl(DDO_POLITICANOMBREContainer);
   this.DDO_MATRICULAAPROBADOContainer = gx.uc.getNew(this, 79, 35, "BootstrapDropDownOptions", "DDO_MATRICULAAPROBADOContainer", "Ddo_matriculaaprobado", "DDO_MATRICULAAPROBADO");
   var DDO_MATRICULAAPROBADOContainer = this.DDO_MATRICULAAPROBADOContainer;
   DDO_MATRICULAAPROBADOContainer.setProp("Class", "Class", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("Icon", "Icon", "", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("Caption", "Caption", "", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_MATRICULAAPROBADOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_MATRICULAAPROBADOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_MATRICULAAPROBADOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_MATRICULAAPROBADOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_MATRICULAAPROBADOContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_MATRICULAAPROBADOContainer.setProp("DataListType", "Datalisttype", "FixedValues", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_MATRICULAAPROBADOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "1:WWP_TSChecked,2:WWP_TSUnChecked", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_MATRICULAAPROBADOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_MATRICULAAPROBADOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_MATRICULAAPROBADOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_MATRICULAAPROBADOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_MATRICULAAPROBADOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_MATRICULAAPROBADOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_MATRICULAAPROBADOContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_MATRICULAAPROBADOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_MATRICULAAPROBADOContainer.addV2CFunction('AV104MatriculaAprobadoTitleFilterData', "vMATRICULAAPROBADOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_MATRICULAAPROBADOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV104MatriculaAprobadoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMATRICULAAPROBADOTITLEFILTERDATA",UC.ParentObject.AV104MatriculaAprobadoTitleFilterData); });
   DDO_MATRICULAAPROBADOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MATRICULAAPROBADOContainer.addEventHandler("OnOptionClicked", this.e220n2_client);
   this.setUserControl(DDO_MATRICULAAPROBADOContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 81, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 82, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 83, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV111DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV111DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV111DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e230n2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110n2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV117Update",gxold:"OV117Update",gxvar:"AV117Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV117Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV117Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV117Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV117Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV118Delete",gxold:"OV118Delete",gxvar:"AV118Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV118Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV118Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV118Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV118Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MATRICULAID",row || gx.fn.currentGridRowImpl(44),gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MATRICULAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAFECHA",gxz:"Z40MatriculaFecha",gxold:"O40MatriculaFecha",gxvar:"A40MatriculaFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MATRICULAFECHA",row || gx.fn.currentGridRowImpl(44),gx.O.A40MatriculaFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MATRICULAFECHA",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNONOMBRE",gxz:"Z2AlumnoNombre",gxold:"O2AlumnoNombre",gxvar:"A2AlumnoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A2AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2AlumnoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A2AlumnoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A2AlumnoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(row){gx.fn.setGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(44),gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={ id:53 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(row){gx.fn.setGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[54]={ id:54 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICANOMBRE",gxz:"Z41PoliticaNombre",gxold:"O41PoliticaNombre",gxvar:"A41PoliticaNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A41PoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z41PoliticaNombre=Value},v2c:function(row){gx.fn.setGridControlValue("POLITICANOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A41PoliticaNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A41PoliticaNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("POLITICANOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[55]={ id:55 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAAPROBADO",gxz:"Z83MatriculaAprobado",gxold:"O83MatriculaAprobado",gxvar:"A83MatriculaAprobado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z83MatriculaAprobado=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("MATRICULAAPROBADO",row || gx.fn.currentGridRowImpl(44),gx.O.A83MatriculaAprobado,true)},c2v:function(){if(this.val()!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("MATRICULAAPROBADO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_MatriculaIdTitleControlIdToReplace",gxold:"OV48ddo_MatriculaIdTitleControlIdToReplace",gxvar:"AV48ddo_MatriculaIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_MatriculaIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_MatriculaIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_MatriculaIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_MatriculaIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE",gxz:"ZV54ddo_MatriculaFechaTitleControlIdToReplace",gxold:"OV54ddo_MatriculaFechaTitleControlIdToReplace",gxvar:"AV54ddo_MatriculaFechaTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54ddo_MatriculaFechaTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54ddo_MatriculaFechaTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE",gx.O.AV54ddo_MatriculaFechaTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54ddo_MatriculaFechaTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV62ddo_AlumnoNombreTitleControlIdToReplace",gxold:"OV62ddo_AlumnoNombreTitleControlIdToReplace",gxvar:"AV62ddo_AlumnoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62ddo_AlumnoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62ddo_AlumnoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV62ddo_AlumnoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62ddo_AlumnoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV70ddo_HorarioNombreTitleControlIdToReplace",gxold:"OV70ddo_HorarioNombreTitleControlIdToReplace",gxvar:"AV70ddo_HorarioNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70ddo_HorarioNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70ddo_HorarioNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV70ddo_HorarioNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV70ddo_HorarioNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gxz:"ZV76ddo_HorarioFechaInicioTitleControlIdToReplace",gxold:"OV76ddo_HorarioFechaInicioTitleControlIdToReplace",gxvar:"AV76ddo_HorarioFechaInicioTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV76ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV76ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gx.O.AV76ddo_HorarioFechaInicioTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV76ddo_HorarioFechaInicioTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV84ddo_CursoNombreTitleControlIdToReplace",gxold:"OV84ddo_CursoNombreTitleControlIdToReplace",gxvar:"AV84ddo_CursoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV84ddo_CursoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV84ddo_CursoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV84ddo_CursoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV84ddo_CursoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV92ddo_NivelNombreTitleControlIdToReplace",gxold:"OV92ddo_NivelNombreTitleControlIdToReplace",gxvar:"AV92ddo_NivelNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV92ddo_NivelNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV92ddo_NivelNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV92ddo_NivelNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV92ddo_NivelNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV100ddo_PoliticaNombreTitleControlIdToReplace",gxold:"OV100ddo_PoliticaNombreTitleControlIdToReplace",gxvar:"AV100ddo_PoliticaNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV100ddo_PoliticaNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV100ddo_PoliticaNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE",gx.O.AV100ddo_PoliticaNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV100ddo_PoliticaNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE",gxz:"ZV106ddo_MatriculaAprobadoTitleControlIdToReplace",gxold:"OV106ddo_MatriculaAprobadoTitleControlIdToReplace",gxvar:"AV106ddo_MatriculaAprobadoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV106ddo_MatriculaAprobadoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV106ddo_MatriculaAprobadoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE",gx.O.AV106ddo_MatriculaAprobadoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV106ddo_MatriculaAprobadoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAID",gxz:"ZV46TFMatriculaId",gxold:"OV46TFMatriculaId",gxvar:"AV46TFMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAID",gx.O.AV46TFMatriculaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFMATRICULAID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAID_TO",gxz:"ZV47TFMatriculaId_To",gxold:"OV47TFMatriculaId_To",gxvar:"AV47TFMatriculaId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFMatriculaId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFMatriculaId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAID_TO",gx.O.AV47TFMatriculaId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFMatriculaId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFMATRICULAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfmatriculafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAFECHA",gxz:"ZV50TFMatriculaFecha",gxold:"OV50TFMatriculaFecha",gxvar:"AV50TFMatriculaFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[89],ip:[89],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFMatriculaFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFMatriculaFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAFECHA",gx.O.AV50TFMatriculaFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFMatriculaFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFMATRICULAFECHA")},nac:gx.falseFn};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfmatriculafecha_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAFECHA_TO",gxz:"ZV51TFMatriculaFecha_To",gxold:"OV51TFMatriculaFecha_To",gxvar:"AV51TFMatriculaFecha_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[90],ip:[90],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFMatriculaFecha_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFMatriculaFecha_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAFECHA_TO",gx.O.AV51TFMatriculaFecha_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFMatriculaFecha_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFMATRICULAFECHA_TO")},nac:gx.falseFn};
   GXValidFnc[91]={ id: 91, fld:"DDO_MATRICULAFECHAAUXDATES",grid:0};
   GXValidFnc[92]={ id:92 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_matriculafechaauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAFECHAAUXDATE",gxz:"ZV52DDO_MatriculaFechaAuxDate",gxold:"OV52DDO_MatriculaFechaAuxDate",gxvar:"AV52DDO_MatriculaFechaAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[92],ip:[92],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52DDO_MatriculaFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52DDO_MatriculaFechaAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAFECHAAUXDATE",gx.O.AV52DDO_MatriculaFechaAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52DDO_MatriculaFechaAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAFECHAAUXDATE")},nac:gx.falseFn};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_matriculafechaauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAFECHAAUXDATETO",gxz:"ZV53DDO_MatriculaFechaAuxDateTo",gxold:"OV53DDO_MatriculaFechaAuxDateTo",gxvar:"AV53DDO_MatriculaFechaAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[93],ip:[93],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53DDO_MatriculaFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53DDO_MatriculaFechaAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAFECHAAUXDATETO",gx.O.AV53DDO_MatriculaFechaAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV53DDO_MatriculaFechaAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAFECHAAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNONOMBRE",gxz:"ZV60TFAlumnoNombre",gxold:"OV60TFAlumnoNombre",gxvar:"AV60TFAlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60TFAlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60TFAlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNONOMBRE",gx.O.AV60TFAlumnoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60TFAlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNONOMBRE")},nac:gx.falseFn};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNONOMBRE_SEL",gxz:"ZV61TFAlumnoNombre_Sel",gxold:"OV61TFAlumnoNombre_Sel",gxvar:"AV61TFAlumnoNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV61TFAlumnoNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV61TFAlumnoNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNONOMBRE_SEL",gx.O.AV61TFAlumnoNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV61TFAlumnoNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIONOMBRE",gxz:"ZV68TFHorarioNombre",gxold:"OV68TFHorarioNombre",gxvar:"AV68TFHorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68TFHorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68TFHorarioNombre=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIONOMBRE",gx.O.AV68TFHorarioNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68TFHorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIONOMBRE")},nac:gx.falseFn};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIONOMBRE_SEL",gxz:"ZV69TFHorarioNombre_Sel",gxold:"OV69TFHorarioNombre_Sel",gxvar:"AV69TFHorarioNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV69TFHorarioNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV69TFHorarioNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIONOMBRE_SEL",gx.O.AV69TFHorarioNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV69TFHorarioNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfhorariofechainicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOFECHAINICIO",gxz:"ZV72TFHorarioFechaInicio",gxold:"OV72TFHorarioFechaInicio",gxvar:"AV72TFHorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[98],ip:[98],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72TFHorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV72TFHorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOFECHAINICIO",gx.O.AV72TFHorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV72TFHorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFHORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfhorariofechainicio_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOFECHAINICIO_TO",gxz:"ZV73TFHorarioFechaInicio_To",gxold:"OV73TFHorarioFechaInicio_To",gxvar:"AV73TFHorarioFechaInicio_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[99],ip:[99],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV73TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV73TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOFECHAINICIO_TO",gx.O.AV73TFHorarioFechaInicio_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV73TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFHORARIOFECHAINICIO_TO")},nac:gx.falseFn};
   GXValidFnc[100]={ id: 100, fld:"DDO_HORARIOFECHAINICIOAUXDATES",grid:0};
   GXValidFnc[101]={ id:101 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_horariofechainicioauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOAUXDATE",gxz:"ZV74DDO_HorarioFechaInicioAuxDate",gxold:"OV74DDO_HorarioFechaInicioAuxDate",gxvar:"AV74DDO_HorarioFechaInicioAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[101],ip:[101],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV74DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV74DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOAUXDATE",gx.O.AV74DDO_HorarioFechaInicioAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV74DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOAUXDATE")},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_horariofechainicioauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOAUXDATETO",gxz:"ZV75DDO_HorarioFechaInicioAuxDateTo",gxold:"OV75DDO_HorarioFechaInicioAuxDateTo",gxvar:"AV75DDO_HorarioFechaInicioAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[102],ip:[102],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV75DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV75DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOAUXDATETO",gx.O.AV75DDO_HorarioFechaInicioAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV75DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE",gxz:"ZV82TFCursoNombre",gxold:"OV82TFCursoNombre",gxvar:"AV82TFCursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV82TFCursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV82TFCursoNombre=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE",gx.O.AV82TFCursoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV82TFCursoNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE")},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE_SEL",gxz:"ZV83TFCursoNombre_Sel",gxold:"OV83TFCursoNombre_Sel",gxvar:"AV83TFCursoNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83TFCursoNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV83TFCursoNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE_SEL",gx.O.AV83TFCursoNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV83TFCursoNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELNOMBRE",gxz:"ZV90TFNivelNombre",gxold:"OV90TFNivelNombre",gxvar:"AV90TFNivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV90TFNivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV90TFNivelNombre=Value},v2c:function(){gx.fn.setControlValue("vTFNIVELNOMBRE",gx.O.AV90TFNivelNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV90TFNivelNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFNIVELNOMBRE")},nac:gx.falseFn};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELNOMBRE_SEL",gxz:"ZV91TFNivelNombre_Sel",gxold:"OV91TFNivelNombre_Sel",gxvar:"AV91TFNivelNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV91TFNivelNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91TFNivelNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFNIVELNOMBRE_SEL",gx.O.AV91TFNivelNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV91TFNivelNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFNIVELNOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICANOMBRE",gxz:"ZV98TFPoliticaNombre",gxold:"OV98TFPoliticaNombre",gxvar:"AV98TFPoliticaNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV98TFPoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV98TFPoliticaNombre=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICANOMBRE",gx.O.AV98TFPoliticaNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV98TFPoliticaNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICANOMBRE")},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPOLITICANOMBRE_SEL",gxz:"ZV99TFPoliticaNombre_Sel",gxold:"OV99TFPoliticaNombre_Sel",gxvar:"AV99TFPoliticaNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV99TFPoliticaNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV99TFPoliticaNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPOLITICANOMBRE_SEL",gx.O.AV99TFPoliticaNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV99TFPoliticaNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPOLITICANOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAAPROBADO_SEL",gxz:"ZV105TFMatriculaAprobado_Sel",gxold:"OV105TFMatriculaAprobado_Sel",gxvar:"AV105TFMatriculaAprobado_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV105TFMatriculaAprobado_Sel=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV105TFMatriculaAprobado_Sel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAAPROBADO_SEL",gx.O.AV105TFMatriculaAprobado_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV105TFMatriculaAprobado_Sel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFMATRICULAAPROBADO_SEL",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV117Update = "" ;
   this.OV117Update = "" ;
   this.ZV118Delete = "" ;
   this.OV118Delete = "" ;
   this.Z27MatriculaId = 0 ;
   this.O27MatriculaId = 0 ;
   this.Z40MatriculaFecha = gx.date.nullDate() ;
   this.O40MatriculaFecha = gx.date.nullDate() ;
   this.Z2AlumnoNombre = "" ;
   this.O2AlumnoNombre = "" ;
   this.Z18HorarioNombre = "" ;
   this.O18HorarioNombre = "" ;
   this.Z20HorarioFechaInicio = gx.date.nullDate() ;
   this.O20HorarioFechaInicio = gx.date.nullDate() ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.Z19NivelNombre = "" ;
   this.O19NivelNombre = "" ;
   this.Z41PoliticaNombre = "" ;
   this.O41PoliticaNombre = "" ;
   this.Z83MatriculaAprobado = false ;
   this.O83MatriculaAprobado = false ;
   this.AV48ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.OV48ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.AV54ddo_MatriculaFechaTitleControlIdToReplace = "" ;
   this.ZV54ddo_MatriculaFechaTitleControlIdToReplace = "" ;
   this.OV54ddo_MatriculaFechaTitleControlIdToReplace = "" ;
   this.AV62ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.ZV62ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.OV62ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.AV70ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.ZV70ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.OV70ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV76ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.ZV76ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.OV76ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.AV84ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.ZV84ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.OV84ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV92ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.ZV92ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.OV92ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV100ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.ZV100ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.OV100ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.AV106ddo_MatriculaAprobadoTitleControlIdToReplace = "" ;
   this.ZV106ddo_MatriculaAprobadoTitleControlIdToReplace = "" ;
   this.OV106ddo_MatriculaAprobadoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFMatriculaId = 0 ;
   this.ZV46TFMatriculaId = 0 ;
   this.OV46TFMatriculaId = 0 ;
   this.AV47TFMatriculaId_To = 0 ;
   this.ZV47TFMatriculaId_To = 0 ;
   this.OV47TFMatriculaId_To = 0 ;
   this.AV50TFMatriculaFecha = gx.date.nullDate() ;
   this.ZV50TFMatriculaFecha = gx.date.nullDate() ;
   this.OV50TFMatriculaFecha = gx.date.nullDate() ;
   this.AV51TFMatriculaFecha_To = gx.date.nullDate() ;
   this.ZV51TFMatriculaFecha_To = gx.date.nullDate() ;
   this.OV51TFMatriculaFecha_To = gx.date.nullDate() ;
   this.AV52DDO_MatriculaFechaAuxDate = gx.date.nullDate() ;
   this.ZV52DDO_MatriculaFechaAuxDate = gx.date.nullDate() ;
   this.OV52DDO_MatriculaFechaAuxDate = gx.date.nullDate() ;
   this.AV53DDO_MatriculaFechaAuxDateTo = gx.date.nullDate() ;
   this.ZV53DDO_MatriculaFechaAuxDateTo = gx.date.nullDate() ;
   this.OV53DDO_MatriculaFechaAuxDateTo = gx.date.nullDate() ;
   this.AV60TFAlumnoNombre = "" ;
   this.ZV60TFAlumnoNombre = "" ;
   this.OV60TFAlumnoNombre = "" ;
   this.AV61TFAlumnoNombre_Sel = "" ;
   this.ZV61TFAlumnoNombre_Sel = "" ;
   this.OV61TFAlumnoNombre_Sel = "" ;
   this.AV68TFHorarioNombre = "" ;
   this.ZV68TFHorarioNombre = "" ;
   this.OV68TFHorarioNombre = "" ;
   this.AV69TFHorarioNombre_Sel = "" ;
   this.ZV69TFHorarioNombre_Sel = "" ;
   this.OV69TFHorarioNombre_Sel = "" ;
   this.AV72TFHorarioFechaInicio = gx.date.nullDate() ;
   this.ZV72TFHorarioFechaInicio = gx.date.nullDate() ;
   this.OV72TFHorarioFechaInicio = gx.date.nullDate() ;
   this.AV73TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.ZV73TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.OV73TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.AV74DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.ZV74DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.OV74DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.AV75DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.ZV75DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.OV75DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.AV82TFCursoNombre = "" ;
   this.ZV82TFCursoNombre = "" ;
   this.OV82TFCursoNombre = "" ;
   this.AV83TFCursoNombre_Sel = "" ;
   this.ZV83TFCursoNombre_Sel = "" ;
   this.OV83TFCursoNombre_Sel = "" ;
   this.AV90TFNivelNombre = "" ;
   this.ZV90TFNivelNombre = "" ;
   this.OV90TFNivelNombre = "" ;
   this.AV91TFNivelNombre_Sel = "" ;
   this.ZV91TFNivelNombre_Sel = "" ;
   this.OV91TFNivelNombre_Sel = "" ;
   this.AV98TFPoliticaNombre = "" ;
   this.ZV98TFPoliticaNombre = "" ;
   this.OV98TFPoliticaNombre = "" ;
   this.AV99TFPoliticaNombre_Sel = "" ;
   this.ZV99TFPoliticaNombre_Sel = "" ;
   this.OV99TFPoliticaNombre_Sel = "" ;
   this.AV105TFMatriculaAprobado_Sel = 0 ;
   this.ZV105TFMatriculaAprobado_Sel = 0 ;
   this.OV105TFMatriculaAprobado_Sel = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV113GridCurrentPage = 0 ;
   this.AV111DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.AV54ddo_MatriculaFechaTitleControlIdToReplace = "" ;
   this.AV62ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.AV70ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV76ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.AV84ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV92ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV100ddo_PoliticaNombreTitleControlIdToReplace = "" ;
   this.AV106ddo_MatriculaAprobadoTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFMatriculaId = 0 ;
   this.AV47TFMatriculaId_To = 0 ;
   this.AV50TFMatriculaFecha = gx.date.nullDate() ;
   this.AV51TFMatriculaFecha_To = gx.date.nullDate() ;
   this.AV52DDO_MatriculaFechaAuxDate = gx.date.nullDate() ;
   this.AV53DDO_MatriculaFechaAuxDateTo = gx.date.nullDate() ;
   this.AV60TFAlumnoNombre = "" ;
   this.AV61TFAlumnoNombre_Sel = "" ;
   this.AV68TFHorarioNombre = "" ;
   this.AV69TFHorarioNombre_Sel = "" ;
   this.AV72TFHorarioFechaInicio = gx.date.nullDate() ;
   this.AV73TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.AV74DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.AV75DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.AV82TFCursoNombre = "" ;
   this.AV83TFCursoNombre_Sel = "" ;
   this.AV90TFNivelNombre = "" ;
   this.AV91TFNivelNombre_Sel = "" ;
   this.AV98TFPoliticaNombre = "" ;
   this.AV99TFPoliticaNombre_Sel = "" ;
   this.AV105TFMatriculaAprobado_Sel = 0 ;
   this.A1AlumnoId = 0 ;
   this.A24HorarioId = 0 ;
   this.A10CursoId = 0 ;
   this.A26PoliticaId = 0 ;
   this.A23NivelId = 0 ;
   this.AV117Update = "" ;
   this.AV118Delete = "" ;
   this.A27MatriculaId = 0 ;
   this.A40MatriculaFecha = gx.date.nullDate() ;
   this.A2AlumnoNombre = "" ;
   this.A18HorarioNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.A11CursoNombre = "" ;
   this.A19NivelNombre = "" ;
   this.A41PoliticaNombre = "" ;
   this.A83MatriculaAprobado = false ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV140Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120n2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130n2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140n2_client": ["DDO_MATRICULAID.ONOPTIONCLICKED", true] ,"e150n2_client": ["DDO_MATRICULAFECHA.ONOPTIONCLICKED", true] ,"e160n2_client": ["DDO_ALUMNONOMBRE.ONOPTIONCLICKED", true] ,"e170n2_client": ["DDO_HORARIONOMBRE.ONOPTIONCLICKED", true] ,"e180n2_client": ["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", true] ,"e190n2_client": ["DDO_CURSONOMBRE.ONOPTIONCLICKED", true] ,"e200n2_client": ["DDO_NIVELNOMBRE.ONOPTIONCLICKED", true] ,"e210n2_client": ["DDO_POLITICANOMBRE.ONOPTIONCLICKED", true] ,"e220n2_client": ["DDO_MATRICULAAPROBADO.ONOPTIONCLICKED", true] ,"e230n2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110n2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e240n2_client": ["'DOINSERT'", true] ,"e250n2_client": ["'DOEXPORT'", true] ,"e260n2_client": ["'DOEXPORTREPORT'", true] ,"e300n2_client": ["ENTER", true] ,"e310n2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAID","Visible")',ctrl:'vTFMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAID_TO","Visible")',ctrl:'vTFMATRICULAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAFECHA","Visible")',ctrl:'vTFMATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAFECHA_TO","Visible")',ctrl:'vTFMATRICULAFECHA_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNONOMBRE","Visible")',ctrl:'vTFALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNONOMBRE_SEL","Visible")',ctrl:'vTFALUMNONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIONOMBRE","Visible")',ctrl:'vTFHORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIONOMBRE_SEL","Visible")',ctrl:'vTFHORARIONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOFECHAINICIO","Visible")',ctrl:'vTFHORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOFECHAINICIO_TO","Visible")',ctrl:'vTFHORARIOFECHAINICIO_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE","Visible")',ctrl:'vTFCURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE_SEL","Visible")',ctrl:'vTFCURSONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELNOMBRE","Visible")',ctrl:'vTFNIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELNOMBRE_SEL","Visible")',ctrl:'vTFNIVELNOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICANOMBRE","Visible")',ctrl:'vTFPOLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPOLITICANOMBRE_SEL","Visible")',ctrl:'vTFPOLITICANOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAAPROBADO_SEL","Visible")',ctrl:'vTFMATRICULAAPROBADO_SEL',prop:'Visible'},{av:'this.DDO_MATRICULAIDContainer.TitleControlIdToReplace',ctrl:'DDO_MATRICULAID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_MATRICULAFECHAContainer.TitleControlIdToReplace',ctrl:'DDO_MATRICULAFECHA',prop:'TitleControlIdToReplace'},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIOFECHAINICIOContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIOFECHAINICIO',prop:'TitleControlIdToReplace'},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_CURSONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_NIVELNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_NIVELNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_POLITICANOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_POLITICANOMBRE',prop:'TitleControlIdToReplace'},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_MATRICULAAPROBADOContainer.TitleControlIdToReplace',ctrl:'DDO_MATRICULAAPROBADO',prop:'TitleControlIdToReplace'},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV111DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'this.DDO_MATRICULAAPROBADOContainer.SelectedValue_set',ctrl:'DDO_MATRICULAAPROBADO',prop:'SelectedValue_set'},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.FilteredText_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAFECHAContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_MATRICULAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MATRICULAIDContainer.ActiveEventKey',ctrl:'DDO_MATRICULAID',prop:'ActiveEventKey'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_get',ctrl:'DDO_MATRICULAID',prop:'FilteredText_get'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_get',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MATRICULAFECHA.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.ActiveEventKey',ctrl:'DDO_MATRICULAFECHA',prop:'ActiveEventKey'},{av:'this.DDO_MATRICULAFECHAContainer.FilteredText_get',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredText_get'},{av:'this.DDO_MATRICULAFECHAContainer.FilteredTextTo_get',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.ActiveEventKey',ctrl:'DDO_ALUMNONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_get',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_get',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIONOMBREContainer.ActiveEventKey',ctrl:'DDO_HORARIONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_get',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_get',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.ActiveEventKey',ctrl:'DDO_HORARIOFECHAINICIO',prop:'ActiveEventKey'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_get',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_get'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_get',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_CURSONOMBREContainer.ActiveEventKey',ctrl:'DDO_CURSONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_CURSONOMBREContainer.FilteredText_get',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_get',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_NIVELNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_NIVELNOMBREContainer.ActiveEventKey',ctrl:'DDO_NIVELNOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_get',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_get'},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_get',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_POLITICANOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_POLITICANOMBREContainer.ActiveEventKey',ctrl:'DDO_POLITICANOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_get',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_get'},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_get',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MATRICULAAPROBADO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MATRICULAAPROBADOContainer.ActiveEventKey',ctrl:'DDO_MATRICULAAPROBADO',prop:'ActiveEventKey'},{av:'this.DDO_MATRICULAAPROBADOContainer.SelectedValue_get',ctrl:'DDO_MATRICULAAPROBADO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A27MatriculaId',fld:'MATRICULAID',pic:'ZZZ9',hsh:true},{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9'},{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9'}],[{av:'AV117Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV118Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Link")',ctrl:'MATRICULAFECHA',prop:'Link'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Link")',ctrl:'ALUMNONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Link")',ctrl:'HORARIONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Link")',ctrl:'POLITICANOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_MatriculaFechaTitleControlIdToReplace',fld:'vDDO_MATRICULAFECHATITLECONTROLIDTOREPLACE',pic:''},{av:'AV62ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV92ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV100ddo_PoliticaNombreTitleControlIdToReplace',fld:'vDDO_POLITICANOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV106ddo_MatriculaAprobadoTitleControlIdToReplace',fld:'vDDO_MATRICULAAPROBADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.FilteredText_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredText_set'},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredTextTo_set'},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'this.DDO_MATRICULAAPROBADOContainer.SelectedValue_set',ctrl:'DDO_MATRICULAAPROBADO',prop:'SelectedValue_set'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49MatriculaFechaTitleFilterData',fld:'vMATRICULAFECHATITLEFILTERDATA',pic:''},{av:'AV59AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV67HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV71HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV81CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV89NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV97PoliticaNombreTitleFilterData',fld:'vPOLITICANOMBRETITLEFILTERDATA',pic:''},{av:'AV104MatriculaAprobadoTitleFilterData',fld:'vMATRICULAAPROBADOTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Visible")',ctrl:'MATRICULAFECHA',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Visible")',ctrl:'POLITICANOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Visible")',ctrl:'MATRICULAAPROBADO',prop:'Visible'},{ctrl:'MATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{ctrl:'MATRICULAFECHA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAFECHA","Title")',ctrl:'MATRICULAFECHA',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'POLITICANOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Title")',ctrl:'POLITICANOMBRE',prop:'Title'},{ctrl:'MATRICULAAPROBADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Title")',ctrl:'MATRICULAAPROBADO',prop:'Title'},{av:'AV113GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV114GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A27MatriculaId',fld:'MATRICULAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'this.DDO_MATRICULAAPROBADOContainer.SelectedValue_set',ctrl:'DDO_MATRICULAAPROBADO',prop:'SelectedValue_set'},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.FilteredText_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAFECHAContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV140Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_MATRICULAAPROBADOContainer.SortedStatus',ctrl:'DDO_MATRICULAAPROBADO',prop:'SortedStatus'},{av:'this.DDO_POLITICANOMBREContainer.SortedStatus',ctrl:'DDO_POLITICANOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_MATRICULAFECHAContainer.SortedStatus',ctrl:'DDO_MATRICULAFECHA',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV105TFMatriculaAprobado_Sel',fld:'vTFMATRICULAAPROBADO_SEL',pic:'9'},{av:'this.DDO_MATRICULAAPROBADOContainer.SelectedValue_set',ctrl:'DDO_MATRICULAAPROBADO',prop:'SelectedValue_set'},{av:'AV99TFPoliticaNombre_Sel',fld:'vTFPOLITICANOMBRE_SEL',pic:''},{av:'this.DDO_POLITICANOMBREContainer.SelectedValue_set',ctrl:'DDO_POLITICANOMBRE',prop:'SelectedValue_set'},{av:'AV98TFPoliticaNombre',fld:'vTFPOLITICANOMBRE',pic:''},{av:'this.DDO_POLITICANOMBREContainer.FilteredText_set',ctrl:'DDO_POLITICANOMBRE',prop:'FilteredText_set'},{av:'AV91TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV90TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV83TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV82TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV72TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV73TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV69TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV68TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV61TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV60TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV50TFMatriculaFecha',fld:'vTFMATRICULAFECHA',pic:''},{av:'AV51TFMatriculaFecha_To',fld:'vTFMATRICULAFECHA_TO',pic:''},{av:'this.DDO_MATRICULAFECHAContainer.FilteredText_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAFECHAContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAFECHA',prop:'FilteredTextTo_set'},{av:'AV46TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV47TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV140Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("A1AlumnoId", "ALUMNOID", 0, "int", 4, 0);
   this.setVCMap("A24HorarioId", "HORARIOID", 0, "int", 4, 0);
   this.setVCMap("A10CursoId", "CURSOID", 0, "int", 4, 0);
   this.setVCMap("A26PoliticaId", "POLITICAID", 0, "int", 4, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV140Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV140Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[98]);
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar(this.GXValidFnc[106]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar(this.GXValidFnc[108]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[64]);
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV140Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.matriculaww);});
