/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:20:32.76
*/
gx.evt.autoSkip = false;
gx.define('academia.horarioww', false, function () {
   this.ServerClass =  "academia.horarioww" ;
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
      this.AV131Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV131Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Cursoid=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CURSOID", gx.fn.currentGridRowImpl(44));
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
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NIVELID", gx.fn.currentGridRowImpl(44));
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
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("LUGARID", gx.fn.currentGridRowImpl(44));
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
         if(  gx.fn.currentGridRowImpl(44) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("DOCENTEID", gx.fn.currentGridRowImpl(44));
         this.AnyError  = 0;

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
         if ( ! ( (new gx.date.gxdate('').compare(this.AV90TFHorarioFechaInicio)==0) || new gx.date.gxdate( this.AV90TFHorarioFechaInicio ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
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
         if ( ! ( (new gx.date.gxdate('').compare(this.AV91TFHorarioFechaInicio_To)==0) || new gx.date.gxdate( this.AV91TFHorarioFechaInicio_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
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
         if ( ! ( (new gx.date.gxdate('').compare(this.AV92DDO_HorarioFechaInicioAuxDate)==0) || new gx.date.gxdate( this.AV92DDO_HorarioFechaInicioAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
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
         if ( ! ( (new gx.date.gxdate('').compare(this.AV93DDO_HorarioFechaInicioAuxDateTo)==0) || new gx.date.gxdate( this.AV93DDO_HorarioFechaInicioAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
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
         this.DDO_HORARIOIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_HORARIONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_HORARIODIASContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_CURSOIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_CURSONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_NIVELIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 7 )
      {
         this.DDO_NIVELNOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 8 )
      {
         this.DDO_LUGARIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 9 )
      {
         this.DDO_LUGARNOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 10 )
      {
         this.DDO_DOCENTEIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 11 )
      {
         this.DDO_DOCENTENOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 12 )
      {
         this.DDO_HORARIOFECHAINICIOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_HORARIOIDContainer.SortedStatus =  ""  ;
      this.DDO_HORARIONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_HORARIODIASContainer.SortedStatus =  ""  ;
      this.DDO_CURSOIDContainer.SortedStatus =  ""  ;
      this.DDO_CURSONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_NIVELIDContainer.SortedStatus =  ""  ;
      this.DDO_NIVELNOMBREContainer.SortedStatus =  ""  ;
      this.DDO_LUGARIDContainer.SortedStatus =  ""  ;
      this.DDO_LUGARNOMBREContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTEIDContainer.SortedStatus =  ""  ;
      this.DDO_DOCENTENOMBREContainer.SortedStatus =  ""  ;
      this.DDO_HORARIOFECHAINICIOContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFHorarioId = gx.num.trunc( 0 ,0) ;
      this.DDO_HORARIOIDContainer.FilteredText_set =  ""  ;
      this.AV47TFHorarioId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_HORARIOIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFHorarioNombre =  ''  ;
      this.DDO_HORARIONOMBREContainer.FilteredText_set =  ""  ;
      this.AV51TFHorarioNombre_Sel =  ''  ;
      this.DDO_HORARIONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV54TFHorarioDias =  ''  ;
      this.DDO_HORARIODIASContainer.FilteredText_set =  ""  ;
      this.AV55TFHorarioDias_Sel =  ''  ;
      this.DDO_HORARIODIASContainer.SelectedValue_set =  ""  ;
      this.AV58TFCursoId = gx.num.trunc( 0 ,0) ;
      this.DDO_CURSOIDContainer.FilteredText_set =  ""  ;
      this.AV59TFCursoId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_CURSOIDContainer.FilteredTextTo_set =  ""  ;
      this.AV62TFCursoNombre =  ''  ;
      this.DDO_CURSONOMBREContainer.FilteredText_set =  ""  ;
      this.AV63TFCursoNombre_Sel =  ''  ;
      this.DDO_CURSONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV66TFNivelId = gx.num.trunc( 0 ,0) ;
      this.DDO_NIVELIDContainer.FilteredText_set =  ""  ;
      this.AV67TFNivelId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_NIVELIDContainer.FilteredTextTo_set =  ""  ;
      this.AV70TFNivelNombre =  ''  ;
      this.DDO_NIVELNOMBREContainer.FilteredText_set =  ""  ;
      this.AV71TFNivelNombre_Sel =  ''  ;
      this.DDO_NIVELNOMBREContainer.SelectedValue_set =  ""  ;
      this.AV74TFLugarId = gx.num.trunc( 0 ,0) ;
      this.DDO_LUGARIDContainer.FilteredText_set =  ""  ;
      this.AV75TFLugarId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_LUGARIDContainer.FilteredTextTo_set =  ""  ;
      this.AV78TFLugarNombre =  ''  ;
      this.DDO_LUGARNOMBREContainer.FilteredText_set =  ""  ;
      this.AV79TFLugarNombre_Sel =  ''  ;
      this.DDO_LUGARNOMBREContainer.SelectedValue_set =  ""  ;
      this.AV82TFDocenteId = gx.num.trunc( 0 ,0) ;
      this.DDO_DOCENTEIDContainer.FilteredText_set =  ""  ;
      this.AV83TFDocenteId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_DOCENTEIDContainer.FilteredTextTo_set =  ""  ;
      this.AV86TFDocenteNombre =  ''  ;
      this.DDO_DOCENTENOMBREContainer.FilteredText_set =  ""  ;
      this.AV87TFDocenteNombre_Sel =  ''  ;
      this.DDO_DOCENTENOMBREContainer.SelectedValue_set =  ""  ;
      this.AV90TFHorarioFechaInicio =  ''  ;
      this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set =  ""  ;
      this.AV91TFHorarioFechaInicio_To =  ''  ;
      this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120f2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130f2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140f2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150f2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160f2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIODIAS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170f2_client=function()
   {
      return this.executeServerEvent("DDO_CURSOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180f2_client=function()
   {
      return this.executeServerEvent("DDO_CURSONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190f2_client=function()
   {
      return this.executeServerEvent("DDO_NIVELID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200f2_client=function()
   {
      return this.executeServerEvent("DDO_NIVELNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210f2_client=function()
   {
      return this.executeServerEvent("DDO_LUGARID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e220f2_client=function()
   {
      return this.executeServerEvent("DDO_LUGARNOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e230f2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTEID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e240f2_client=function()
   {
      return this.executeServerEvent("DDO_DOCENTENOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e250f2_client=function()
   {
      return this.executeServerEvent("DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e260f2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110f2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e270f2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e280f2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e290f2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e330f2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e340f2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,63,64,65,67,69,71,73,75,77,79,81,83,85,87,89,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122];
   this.GXLastCtrlId =122;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.horarioww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(24,47,"HORARIOID","","","HorarioId","int",0,"px",4,4,"right",null,[],24,"HorarioId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(18,48,"HORARIONOMBRE","","","HorarioNombre","char",0,"px",50,50,"left",null,[],18,"HorarioNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(38,49,"HORARIODIAS","","","HorarioDias","char",0,"px",50,50,"left",null,[],38,"HorarioDias",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(10,50,"CURSOID","","","CursoId","int",0,"px",4,4,"right",null,[],10,"CursoId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(11,51,"CURSONOMBRE","","","CursoNombre","char",0,"px",50,50,"left",null,[],11,"CursoNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(23,52,"NIVELID","","","NivelId","int",0,"px",4,4,"right",null,[],23,"NivelId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(19,53,"NIVELNOMBRE","","","NivelNombre","char",0,"px",50,50,"left",null,[],19,"NivelNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(25,54,"LUGARID","","","LugarId","int",0,"px",4,4,"right",null,[],25,"LugarId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(39,55,"LUGARNOMBRE","","","LugarNombre","char",0,"px",50,50,"left",null,[],39,"LugarNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(12,56,"DOCENTEID","","","DocenteId","int",0,"px",4,4,"right",null,[],12,"DocenteId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(14,57,"DOCENTENOMBRE","","","DocenteNombre","char",0,"px",50,50,"left",null,[],14,"DocenteNombre",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(20,58,"HORARIOFECHAINICIO","","","HorarioFechaInicio","date",0,"px",8,8,"right",null,[],20,"HorarioFechaInicio",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 62, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV97GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV97GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV97GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV98GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV98GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV98GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120f2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130f2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_HORARIOIDContainer = gx.uc.getNew(this, 66, 35, "BootstrapDropDownOptions", "DDO_HORARIOIDContainer", "Ddo_horarioid", "DDO_HORARIOID");
   var DDO_HORARIOIDContainer = this.DDO_HORARIOIDContainer;
   DDO_HORARIOIDContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIOIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIOIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_HORARIOIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_HORARIOIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_HORARIOIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
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
   DDO_HORARIOIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_HORARIOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_HORARIOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_HORARIOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_HORARIOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIOIDContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_HORARIOIDContainer.addV2CFunction('AV45HorarioIdTitleFilterData', "vHORARIOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45HorarioIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIOIDTITLEFILTERDATA",UC.ParentObject.AV45HorarioIdTitleFilterData); });
   DDO_HORARIOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIOIDContainer.addEventHandler("OnOptionClicked", this.e140f2_client);
   this.setUserControl(DDO_HORARIOIDContainer);
   this.DDO_HORARIONOMBREContainer = gx.uc.getNew(this, 68, 35, "BootstrapDropDownOptions", "DDO_HORARIONOMBREContainer", "Ddo_horarionombre", "DDO_HORARIONOMBRE");
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
   DDO_HORARIONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
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
   DDO_HORARIONOMBREContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_HORARIONOMBREContainer.addV2CFunction('AV49HorarioNombreTitleFilterData', "vHORARIONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49HorarioNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIONOMBRETITLEFILTERDATA",UC.ParentObject.AV49HorarioNombreTitleFilterData); });
   DDO_HORARIONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIONOMBREContainer.addEventHandler("OnOptionClicked", this.e150f2_client);
   this.setUserControl(DDO_HORARIONOMBREContainer);
   this.DDO_HORARIODIASContainer = gx.uc.getNew(this, 70, 35, "BootstrapDropDownOptions", "DDO_HORARIODIASContainer", "Ddo_horariodias", "DDO_HORARIODIAS");
   var DDO_HORARIODIASContainer = this.DDO_HORARIODIASContainer;
   DDO_HORARIODIASContainer.setProp("Class", "Class", "", "char");
   DDO_HORARIODIASContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_HORARIODIASContainer.setProp("Icon", "Icon", "", "str");
   DDO_HORARIODIASContainer.setProp("Caption", "Caption", "", "str");
   DDO_HORARIODIASContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_HORARIODIASContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_HORARIODIASContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_HORARIODIASContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_HORARIODIASContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_HORARIODIASContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_HORARIODIASContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_HORARIODIASContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_HORARIODIASContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_HORARIODIASContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_HORARIODIASContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_HORARIODIASContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_HORARIODIASContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
   DDO_HORARIODIASContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_HORARIODIASContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_HORARIODIASContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_HORARIODIASContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_HORARIODIASContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_HORARIODIASContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_HORARIODIASContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_HORARIODIASContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_HORARIODIASContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_HORARIODIASContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_HORARIODIASContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_HORARIODIASContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_HORARIODIASContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_HORARIODIASContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_HORARIODIASContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_HORARIODIASContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_HORARIODIASContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_HORARIODIASContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_HORARIODIASContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_HORARIODIASContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_HORARIODIASContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_HORARIODIASContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIODIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_HORARIODIASContainer.addV2CFunction('AV53HorarioDiasTitleFilterData', "vHORARIODIASTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIODIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53HorarioDiasTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIODIASTITLEFILTERDATA",UC.ParentObject.AV53HorarioDiasTitleFilterData); });
   DDO_HORARIODIASContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIODIASContainer.addEventHandler("OnOptionClicked", this.e160f2_client);
   this.setUserControl(DDO_HORARIODIASContainer);
   this.DDO_CURSOIDContainer = gx.uc.getNew(this, 72, 35, "BootstrapDropDownOptions", "DDO_CURSOIDContainer", "Ddo_cursoid", "DDO_CURSOID");
   var DDO_CURSOIDContainer = this.DDO_CURSOIDContainer;
   DDO_CURSOIDContainer.setProp("Class", "Class", "", "char");
   DDO_CURSOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_CURSOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_CURSOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_CURSOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_CURSOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_CURSOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_CURSOIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_CURSOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_CURSOIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_CURSOIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_CURSOIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_CURSOIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
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
   DDO_CURSOIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_CURSOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_CURSOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_CURSOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_CURSOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_CURSOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_CURSOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_CURSOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_CURSOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_CURSOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_CURSOIDContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_CURSOIDContainer.addV2CFunction('AV57CursoIdTitleFilterData', "vCURSOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57CursoIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSOIDTITLEFILTERDATA",UC.ParentObject.AV57CursoIdTitleFilterData); });
   DDO_CURSOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSOIDContainer.addEventHandler("OnOptionClicked", this.e170f2_client);
   this.setUserControl(DDO_CURSOIDContainer);
   this.DDO_CURSONOMBREContainer = gx.uc.getNew(this, 74, 35, "BootstrapDropDownOptions", "DDO_CURSONOMBREContainer", "Ddo_cursonombre", "DDO_CURSONOMBRE");
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
   DDO_CURSONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
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
   DDO_CURSONOMBREContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_CURSONOMBREContainer.addV2CFunction('AV61CursoNombreTitleFilterData', "vCURSONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_CURSONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61CursoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCURSONOMBRETITLEFILTERDATA",UC.ParentObject.AV61CursoNombreTitleFilterData); });
   DDO_CURSONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_CURSONOMBREContainer.addEventHandler("OnOptionClicked", this.e180f2_client);
   this.setUserControl(DDO_CURSONOMBREContainer);
   this.DDO_NIVELIDContainer = gx.uc.getNew(this, 76, 35, "BootstrapDropDownOptions", "DDO_NIVELIDContainer", "Ddo_nivelid", "DDO_NIVELID");
   var DDO_NIVELIDContainer = this.DDO_NIVELIDContainer;
   DDO_NIVELIDContainer.setProp("Class", "Class", "", "char");
   DDO_NIVELIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_NIVELIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_NIVELIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_NIVELIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_NIVELIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_NIVELIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_NIVELIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_NIVELIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_NIVELIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_NIVELIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_NIVELIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_NIVELIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
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
   DDO_NIVELIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_NIVELIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_NIVELIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_NIVELIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_NIVELIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_NIVELIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_NIVELIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_NIVELIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_NIVELIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_NIVELIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_NIVELIDContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_NIVELIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_NIVELIDContainer.addV2CFunction('AV65NivelIdTitleFilterData', "vNIVELIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_NIVELIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV65NivelIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vNIVELIDTITLEFILTERDATA",UC.ParentObject.AV65NivelIdTitleFilterData); });
   DDO_NIVELIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_NIVELIDContainer.addEventHandler("OnOptionClicked", this.e190f2_client);
   this.setUserControl(DDO_NIVELIDContainer);
   this.DDO_NIVELNOMBREContainer = gx.uc.getNew(this, 78, 35, "BootstrapDropDownOptions", "DDO_NIVELNOMBREContainer", "Ddo_nivelnombre", "DDO_NIVELNOMBRE");
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
   DDO_NIVELNOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
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
   DDO_NIVELNOMBREContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_NIVELNOMBREContainer.addV2CFunction('AV69NivelNombreTitleFilterData', "vNIVELNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_NIVELNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69NivelNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vNIVELNOMBRETITLEFILTERDATA",UC.ParentObject.AV69NivelNombreTitleFilterData); });
   DDO_NIVELNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_NIVELNOMBREContainer.addEventHandler("OnOptionClicked", this.e200f2_client);
   this.setUserControl(DDO_NIVELNOMBREContainer);
   this.DDO_LUGARIDContainer = gx.uc.getNew(this, 80, 35, "BootstrapDropDownOptions", "DDO_LUGARIDContainer", "Ddo_lugarid", "DDO_LUGARID");
   var DDO_LUGARIDContainer = this.DDO_LUGARIDContainer;
   DDO_LUGARIDContainer.setProp("Class", "Class", "", "char");
   DDO_LUGARIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_LUGARIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_LUGARIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_LUGARIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_LUGARIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_LUGARIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_LUGARIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_LUGARIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_LUGARIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
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
   DDO_LUGARIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_LUGARIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_LUGARIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
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
   DDO_LUGARIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_LUGARIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_LUGARIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_LUGARIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_LUGARIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_LUGARIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_LUGARIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_LUGARIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_LUGARIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_LUGARIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_LUGARIDContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_LUGARIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_LUGARIDContainer.addV2CFunction('AV73LugarIdTitleFilterData', "vLUGARIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_LUGARIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV73LugarIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vLUGARIDTITLEFILTERDATA",UC.ParentObject.AV73LugarIdTitleFilterData); });
   DDO_LUGARIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_LUGARIDContainer.addEventHandler("OnOptionClicked", this.e210f2_client);
   this.setUserControl(DDO_LUGARIDContainer);
   this.DDO_LUGARNOMBREContainer = gx.uc.getNew(this, 82, 35, "BootstrapDropDownOptions", "DDO_LUGARNOMBREContainer", "Ddo_lugarnombre", "DDO_LUGARNOMBRE");
   var DDO_LUGARNOMBREContainer = this.DDO_LUGARNOMBREContainer;
   DDO_LUGARNOMBREContainer.setProp("Class", "Class", "", "char");
   DDO_LUGARNOMBREContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_LUGARNOMBREContainer.setProp("Icon", "Icon", "", "str");
   DDO_LUGARNOMBREContainer.setProp("Caption", "Caption", "", "str");
   DDO_LUGARNOMBREContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_LUGARNOMBREContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_LUGARNOMBREContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_LUGARNOMBREContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_LUGARNOMBREContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_LUGARNOMBREContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
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
   DDO_LUGARNOMBREContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_LUGARNOMBREContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_LUGARNOMBREContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_LUGARNOMBREContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_LUGARNOMBREContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_LUGARNOMBREContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_LUGARNOMBREContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
   DDO_LUGARNOMBREContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_LUGARNOMBREContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_LUGARNOMBREContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_LUGARNOMBREContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_LUGARNOMBREContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_LUGARNOMBREContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_LUGARNOMBREContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_LUGARNOMBREContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_LUGARNOMBREContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_LUGARNOMBREContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_LUGARNOMBREContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_LUGARNOMBREContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_LUGARNOMBREContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_LUGARNOMBREContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_LUGARNOMBREContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_LUGARNOMBREContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_LUGARNOMBREContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_LUGARNOMBREContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_LUGARNOMBREContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_LUGARNOMBREContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_LUGARNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_LUGARNOMBREContainer.addV2CFunction('AV77LugarNombreTitleFilterData', "vLUGARNOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_LUGARNOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV77LugarNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vLUGARNOMBRETITLEFILTERDATA",UC.ParentObject.AV77LugarNombreTitleFilterData); });
   DDO_LUGARNOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_LUGARNOMBREContainer.addEventHandler("OnOptionClicked", this.e220f2_client);
   this.setUserControl(DDO_LUGARNOMBREContainer);
   this.DDO_DOCENTEIDContainer = gx.uc.getNew(this, 84, 35, "BootstrapDropDownOptions", "DDO_DOCENTEIDContainer", "Ddo_docenteid", "DDO_DOCENTEID");
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
   DDO_DOCENTEIDContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_DOCENTEIDContainer.addV2CFunction('AV81DocenteIdTitleFilterData', "vDOCENTEIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTEIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV81DocenteIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTEIDTITLEFILTERDATA",UC.ParentObject.AV81DocenteIdTitleFilterData); });
   DDO_DOCENTEIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTEIDContainer.addEventHandler("OnOptionClicked", this.e230f2_client);
   this.setUserControl(DDO_DOCENTEIDContainer);
   this.DDO_DOCENTENOMBREContainer = gx.uc.getNew(this, 86, 35, "BootstrapDropDownOptions", "DDO_DOCENTENOMBREContainer", "Ddo_docentenombre", "DDO_DOCENTENOMBRE");
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
   DDO_DOCENTENOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.HorarioWWGetFilterData", "str");
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
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_DOCENTENOMBREContainer.addV2CFunction('AV85DocenteNombreTitleFilterData', "vDOCENTENOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_DOCENTENOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DocenteNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vDOCENTENOMBRETITLEFILTERDATA",UC.ParentObject.AV85DocenteNombreTitleFilterData); });
   DDO_DOCENTENOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_DOCENTENOMBREContainer.addEventHandler("OnOptionClicked", this.e240f2_client);
   this.setUserControl(DDO_DOCENTENOMBREContainer);
   this.DDO_HORARIOFECHAINICIOContainer = gx.uc.getNew(this, 88, 35, "BootstrapDropDownOptions", "DDO_HORARIOFECHAINICIOContainer", "Ddo_horariofechainicio", "DDO_HORARIOFECHAINICIO");
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
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_HORARIOFECHAINICIOContainer.addV2CFunction('AV89HorarioFechaInicioTitleFilterData', "vHORARIOFECHAINICIOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_HORARIOFECHAINICIOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV89HorarioFechaInicioTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vHORARIOFECHAINICIOTITLEFILTERDATA",UC.ParentObject.AV89HorarioFechaInicioTitleFilterData); });
   DDO_HORARIOFECHAINICIOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_HORARIOFECHAINICIOContainer.addEventHandler("OnOptionClicked", this.e250f2_client);
   this.setUserControl(DDO_HORARIOFECHAINICIOContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 90, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 91, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 92, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV95DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV95DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV95DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e260f2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110f2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV101Update",gxold:"OV101Update",gxvar:"AV101Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV101Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV101Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV101Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV101Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV102Delete",gxold:"OV102Delete",gxvar:"AV102Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV102Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV102Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV102Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV102Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HORARIOID",row || gx.fn.currentGridRowImpl(44),gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HORARIOID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(row){gx.fn.setGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("HORARIONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIODIAS",gxz:"Z38HorarioDias",gxold:"O38HorarioDias",gxvar:"A38HorarioDias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A38HorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z38HorarioDias=Value},v2c:function(row){gx.fn.setGridControlValue("HORARIODIAS",row || gx.fn.currentGridRowImpl(44),gx.O.A38HorarioDias,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A38HorarioDias=this.val()},val:function(row){return gx.fn.getGridControlValue("HORARIODIAS",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CURSOID",row || gx.fn.currentGridRowImpl(44),gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CURSOID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("CURSONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NIVELID",row || gx.fn.currentGridRowImpl(44),gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NIVELID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[53]={ id:53 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(row){gx.fn.setGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[54]={ id:54 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Lugarid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARID",gxz:"Z25LugarId",gxold:"O25LugarId",gxvar:"A25LugarId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A25LugarId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z25LugarId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("LUGARID",row || gx.fn.currentGridRowImpl(44),gx.O.A25LugarId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A25LugarId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("LUGARID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[55]={ id:55 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARNOMBRE",gxz:"Z39LugarNombre",gxold:"O39LugarNombre",gxvar:"A39LugarNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A39LugarNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z39LugarNombre=Value},v2c:function(row){gx.fn.setGridControlValue("LUGARNOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A39LugarNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A39LugarNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("LUGARNOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[56]={ id:56 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:this.Valid_Docenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("DOCENTEID",row || gx.fn.currentGridRowImpl(44),gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("DOCENTEID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[57]={ id:57 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(row){gx.fn.setGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[58]={ id:58 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(44),gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HORARIOFECHAINICIO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id: 65, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[67]={ id:67 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_HorarioIdTitleControlIdToReplace",gxold:"OV48ddo_HorarioIdTitleControlIdToReplace",gxvar:"AV48ddo_HorarioIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_HorarioIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_HorarioIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_HorarioIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_HorarioIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_HorarioNombreTitleControlIdToReplace",gxold:"OV52ddo_HorarioNombreTitleControlIdToReplace",gxvar:"AV52ddo_HorarioNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_HorarioNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_HorarioNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV52ddo_HorarioNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_HorarioNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[71]={ id:71 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIODIASTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_HorarioDiasTitleControlIdToReplace",gxold:"OV56ddo_HorarioDiasTitleControlIdToReplace",gxvar:"AV56ddo_HorarioDiasTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_HorarioDiasTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_HorarioDiasTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_HorarioDiasTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_HorarioDiasTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[73]={ id:73 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_CursoIdTitleControlIdToReplace",gxold:"OV60ddo_CursoIdTitleControlIdToReplace",gxvar:"AV60ddo_CursoIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_CursoIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_CursoIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_CursoIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_CursoIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV64ddo_CursoNombreTitleControlIdToReplace",gxold:"OV64ddo_CursoNombreTitleControlIdToReplace",gxvar:"AV64ddo_CursoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64ddo_CursoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64ddo_CursoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV64ddo_CursoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64ddo_CursoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[77]={ id:77 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_NIVELIDTITLECONTROLIDTOREPLACE",gxz:"ZV68ddo_NivelIdTitleControlIdToReplace",gxold:"OV68ddo_NivelIdTitleControlIdToReplace",gxvar:"AV68ddo_NivelIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68ddo_NivelIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68ddo_NivelIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_NIVELIDTITLECONTROLIDTOREPLACE",gx.O.AV68ddo_NivelIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68ddo_NivelIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_NIVELIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV72ddo_NivelNombreTitleControlIdToReplace",gxold:"OV72ddo_NivelNombreTitleControlIdToReplace",gxvar:"AV72ddo_NivelNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72ddo_NivelNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72ddo_NivelNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV72ddo_NivelNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV72ddo_NivelNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[81]={ id:81 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_LUGARIDTITLECONTROLIDTOREPLACE",gxz:"ZV76ddo_LugarIdTitleControlIdToReplace",gxold:"OV76ddo_LugarIdTitleControlIdToReplace",gxvar:"AV76ddo_LugarIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV76ddo_LugarIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV76ddo_LugarIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_LUGARIDTITLECONTROLIDTOREPLACE",gx.O.AV76ddo_LugarIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV76ddo_LugarIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_LUGARIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV80ddo_LugarNombreTitleControlIdToReplace",gxold:"OV80ddo_LugarNombreTitleControlIdToReplace",gxvar:"AV80ddo_LugarNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV80ddo_LugarNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV80ddo_LugarNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE",gx.O.AV80ddo_LugarNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV80ddo_LugarNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gxz:"ZV84ddo_DocenteIdTitleControlIdToReplace",gxold:"OV84ddo_DocenteIdTitleControlIdToReplace",gxvar:"AV84ddo_DocenteIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV84ddo_DocenteIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV84ddo_DocenteIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE",gx.O.AV84ddo_DocenteIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV84ddo_DocenteIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV88ddo_DocenteNombreTitleControlIdToReplace",gxold:"OV88ddo_DocenteNombreTitleControlIdToReplace",gxvar:"AV88ddo_DocenteNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV88ddo_DocenteNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV88ddo_DocenteNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE",gx.O.AV88ddo_DocenteNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV88ddo_DocenteNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gxz:"ZV94ddo_HorarioFechaInicioTitleControlIdToReplace",gxold:"OV94ddo_HorarioFechaInicioTitleControlIdToReplace",gxvar:"AV94ddo_HorarioFechaInicioTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV94ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV94ddo_HorarioFechaInicioTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE",gx.O.AV94ddo_HorarioFechaInicioTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV94ddo_HorarioFechaInicioTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOID",gxz:"ZV46TFHorarioId",gxold:"OV46TFHorarioId",gxvar:"AV46TFHorarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFHorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFHorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOID",gx.O.AV46TFHorarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFHorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFHORARIOID",'.')},nac:gx.falseFn};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOID_TO",gxz:"ZV47TFHorarioId_To",gxold:"OV47TFHorarioId_To",gxvar:"AV47TFHorarioId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFHorarioId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFHorarioId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOID_TO",gx.O.AV47TFHorarioId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFHorarioId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFHORARIOID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIONOMBRE",gxz:"ZV50TFHorarioNombre",gxold:"OV50TFHorarioNombre",gxvar:"AV50TFHorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFHorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFHorarioNombre=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIONOMBRE",gx.O.AV50TFHorarioNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFHorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIONOMBRE")},nac:gx.falseFn};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIONOMBRE_SEL",gxz:"ZV51TFHorarioNombre_Sel",gxold:"OV51TFHorarioNombre_Sel",gxvar:"AV51TFHorarioNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFHorarioNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFHorarioNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIONOMBRE_SEL",gx.O.AV51TFHorarioNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFHorarioNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIODIAS",gxz:"ZV54TFHorarioDias",gxold:"OV54TFHorarioDias",gxvar:"AV54TFHorarioDias",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFHorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFHorarioDias=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIODIAS",gx.O.AV54TFHorarioDias,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFHorarioDias=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIODIAS")},nac:gx.falseFn};
   GXValidFnc[101]={ id:101 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIODIAS_SEL",gxz:"ZV55TFHorarioDias_Sel",gxold:"OV55TFHorarioDias_Sel",gxvar:"AV55TFHorarioDias_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFHorarioDias_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFHorarioDias_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFHORARIODIAS_SEL",gx.O.AV55TFHorarioDias_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFHorarioDias_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFHORARIODIAS_SEL")},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSOID",gxz:"ZV58TFCursoId",gxold:"OV58TFCursoId",gxvar:"AV58TFCursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFCursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFCursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFCURSOID",gx.O.AV58TFCursoId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFCursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFCURSOID",'.')},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSOID_TO",gxz:"ZV59TFCursoId_To",gxold:"OV59TFCursoId_To",gxvar:"AV59TFCursoId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFCursoId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFCursoId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFCURSOID_TO",gx.O.AV59TFCursoId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFCursoId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFCURSOID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE",gxz:"ZV62TFCursoNombre",gxold:"OV62TFCursoNombre",gxvar:"AV62TFCursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFCursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFCursoNombre=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE",gx.O.AV62TFCursoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFCursoNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE")},nac:gx.falseFn};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFCURSONOMBRE_SEL",gxz:"ZV63TFCursoNombre_Sel",gxold:"OV63TFCursoNombre_Sel",gxvar:"AV63TFCursoNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63TFCursoNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TFCursoNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFCURSONOMBRE_SEL",gx.O.AV63TFCursoNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63TFCursoNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFCURSONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELID",gxz:"ZV66TFNivelId",gxold:"OV66TFNivelId",gxvar:"AV66TFNivelId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66TFNivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV66TFNivelId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFNIVELID",gx.O.AV66TFNivelId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66TFNivelId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFNIVELID",'.')},nac:gx.falseFn};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELID_TO",gxz:"ZV67TFNivelId_To",gxold:"OV67TFNivelId_To",gxvar:"AV67TFNivelId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV67TFNivelId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV67TFNivelId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFNIVELID_TO",gx.O.AV67TFNivelId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV67TFNivelId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFNIVELID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELNOMBRE",gxz:"ZV70TFNivelNombre",gxold:"OV70TFNivelNombre",gxvar:"AV70TFNivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70TFNivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70TFNivelNombre=Value},v2c:function(){gx.fn.setControlValue("vTFNIVELNOMBRE",gx.O.AV70TFNivelNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV70TFNivelNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFNIVELNOMBRE")},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFNIVELNOMBRE_SEL",gxz:"ZV71TFNivelNombre_Sel",gxold:"OV71TFNivelNombre_Sel",gxvar:"AV71TFNivelNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV71TFNivelNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV71TFNivelNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFNIVELNOMBRE_SEL",gx.O.AV71TFNivelNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV71TFNivelNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFNIVELNOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[110]={ id:110 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFLUGARID",gxz:"ZV74TFLugarId",gxold:"OV74TFLugarId",gxvar:"AV74TFLugarId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV74TFLugarId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV74TFLugarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFLUGARID",gx.O.AV74TFLugarId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV74TFLugarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFLUGARID",'.')},nac:gx.falseFn};
   GXValidFnc[111]={ id:111 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFLUGARID_TO",gxz:"ZV75TFLugarId_To",gxold:"OV75TFLugarId_To",gxvar:"AV75TFLugarId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV75TFLugarId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV75TFLugarId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFLUGARID_TO",gx.O.AV75TFLugarId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV75TFLugarId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFLUGARID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[112]={ id:112 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFLUGARNOMBRE",gxz:"ZV78TFLugarNombre",gxold:"OV78TFLugarNombre",gxvar:"AV78TFLugarNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV78TFLugarNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV78TFLugarNombre=Value},v2c:function(){gx.fn.setControlValue("vTFLUGARNOMBRE",gx.O.AV78TFLugarNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV78TFLugarNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFLUGARNOMBRE")},nac:gx.falseFn};
   GXValidFnc[113]={ id:113 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFLUGARNOMBRE_SEL",gxz:"ZV79TFLugarNombre_Sel",gxold:"OV79TFLugarNombre_Sel",gxvar:"AV79TFLugarNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV79TFLugarNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV79TFLugarNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFLUGARNOMBRE_SEL",gx.O.AV79TFLugarNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV79TFLugarNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFLUGARNOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[114]={ id:114 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEID",gxz:"ZV82TFDocenteId",gxold:"OV82TFDocenteId",gxvar:"AV82TFDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV82TFDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV82TFDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFDOCENTEID",gx.O.AV82TFDocenteId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV82TFDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFDOCENTEID",'.')},nac:gx.falseFn};
   GXValidFnc[115]={ id:115 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTEID_TO",gxz:"ZV83TFDocenteId_To",gxold:"OV83TFDocenteId_To",gxvar:"AV83TFDocenteId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83TFDocenteId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV83TFDocenteId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFDOCENTEID_TO",gx.O.AV83TFDocenteId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV83TFDocenteId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFDOCENTEID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[116]={ id:116 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENOMBRE",gxz:"ZV86TFDocenteNombre",gxold:"OV86TFDocenteNombre",gxvar:"AV86TFDocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV86TFDocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV86TFDocenteNombre=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENOMBRE",gx.O.AV86TFDocenteNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV86TFDocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENOMBRE")},nac:gx.falseFn};
   GXValidFnc[117]={ id:117 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFDOCENTENOMBRE_SEL",gxz:"ZV87TFDocenteNombre_Sel",gxold:"OV87TFDocenteNombre_Sel",gxvar:"AV87TFDocenteNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV87TFDocenteNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV87TFDocenteNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFDOCENTENOMBRE_SEL",gx.O.AV87TFDocenteNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV87TFDocenteNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFDOCENTENOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[118]={ id:118 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfhorariofechainicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOFECHAINICIO",gxz:"ZV90TFHorarioFechaInicio",gxold:"OV90TFHorarioFechaInicio",gxvar:"AV90TFHorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[118],ip:[118],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV90TFHorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV90TFHorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOFECHAINICIO",gx.O.AV90TFHorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV90TFHorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFHORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[119]={ id:119 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfhorariofechainicio_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFHORARIOFECHAINICIO_TO",gxz:"ZV91TFHorarioFechaInicio_To",gxold:"OV91TFHorarioFechaInicio_To",gxvar:"AV91TFHorarioFechaInicio_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[119],ip:[119],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV91TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV91TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFHORARIOFECHAINICIO_TO",gx.O.AV91TFHorarioFechaInicio_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV91TFHorarioFechaInicio_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFHORARIOFECHAINICIO_TO")},nac:gx.falseFn};
   GXValidFnc[120]={ id: 120, fld:"DDO_HORARIOFECHAINICIOAUXDATES",grid:0};
   GXValidFnc[121]={ id:121 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_horariofechainicioauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOAUXDATE",gxz:"ZV92DDO_HorarioFechaInicioAuxDate",gxold:"OV92DDO_HorarioFechaInicioAuxDate",gxvar:"AV92DDO_HorarioFechaInicioAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[121],ip:[121],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV92DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV92DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOAUXDATE",gx.O.AV92DDO_HorarioFechaInicioAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV92DDO_HorarioFechaInicioAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOAUXDATE")},nac:gx.falseFn};
   GXValidFnc[122]={ id:122 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_horariofechainicioauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_HORARIOFECHAINICIOAUXDATETO",gxz:"ZV93DDO_HorarioFechaInicioAuxDateTo",gxold:"OV93DDO_HorarioFechaInicioAuxDateTo",gxvar:"AV93DDO_HorarioFechaInicioAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[122],ip:[122],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV93DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV93DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_HORARIOFECHAINICIOAUXDATETO",gx.O.AV93DDO_HorarioFechaInicioAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV93DDO_HorarioFechaInicioAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_HORARIOFECHAINICIOAUXDATETO")},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV101Update = "" ;
   this.OV101Update = "" ;
   this.ZV102Delete = "" ;
   this.OV102Delete = "" ;
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
   this.AV48ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.OV48ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.AV52ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.ZV52ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.OV52ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.ZV56ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.OV56ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.AV60ddo_CursoIdTitleControlIdToReplace = "" ;
   this.ZV60ddo_CursoIdTitleControlIdToReplace = "" ;
   this.OV60ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV64ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.ZV64ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.OV64ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV68ddo_NivelIdTitleControlIdToReplace = "" ;
   this.ZV68ddo_NivelIdTitleControlIdToReplace = "" ;
   this.OV68ddo_NivelIdTitleControlIdToReplace = "" ;
   this.AV72ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.ZV72ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.OV72ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV76ddo_LugarIdTitleControlIdToReplace = "" ;
   this.ZV76ddo_LugarIdTitleControlIdToReplace = "" ;
   this.OV76ddo_LugarIdTitleControlIdToReplace = "" ;
   this.AV80ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.ZV80ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.OV80ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.AV84ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.ZV84ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.OV84ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV88ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.ZV88ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.OV88ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV94ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.ZV94ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.OV94ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFHorarioId = 0 ;
   this.ZV46TFHorarioId = 0 ;
   this.OV46TFHorarioId = 0 ;
   this.AV47TFHorarioId_To = 0 ;
   this.ZV47TFHorarioId_To = 0 ;
   this.OV47TFHorarioId_To = 0 ;
   this.AV50TFHorarioNombre = "" ;
   this.ZV50TFHorarioNombre = "" ;
   this.OV50TFHorarioNombre = "" ;
   this.AV51TFHorarioNombre_Sel = "" ;
   this.ZV51TFHorarioNombre_Sel = "" ;
   this.OV51TFHorarioNombre_Sel = "" ;
   this.AV54TFHorarioDias = "" ;
   this.ZV54TFHorarioDias = "" ;
   this.OV54TFHorarioDias = "" ;
   this.AV55TFHorarioDias_Sel = "" ;
   this.ZV55TFHorarioDias_Sel = "" ;
   this.OV55TFHorarioDias_Sel = "" ;
   this.AV58TFCursoId = 0 ;
   this.ZV58TFCursoId = 0 ;
   this.OV58TFCursoId = 0 ;
   this.AV59TFCursoId_To = 0 ;
   this.ZV59TFCursoId_To = 0 ;
   this.OV59TFCursoId_To = 0 ;
   this.AV62TFCursoNombre = "" ;
   this.ZV62TFCursoNombre = "" ;
   this.OV62TFCursoNombre = "" ;
   this.AV63TFCursoNombre_Sel = "" ;
   this.ZV63TFCursoNombre_Sel = "" ;
   this.OV63TFCursoNombre_Sel = "" ;
   this.AV66TFNivelId = 0 ;
   this.ZV66TFNivelId = 0 ;
   this.OV66TFNivelId = 0 ;
   this.AV67TFNivelId_To = 0 ;
   this.ZV67TFNivelId_To = 0 ;
   this.OV67TFNivelId_To = 0 ;
   this.AV70TFNivelNombre = "" ;
   this.ZV70TFNivelNombre = "" ;
   this.OV70TFNivelNombre = "" ;
   this.AV71TFNivelNombre_Sel = "" ;
   this.ZV71TFNivelNombre_Sel = "" ;
   this.OV71TFNivelNombre_Sel = "" ;
   this.AV74TFLugarId = 0 ;
   this.ZV74TFLugarId = 0 ;
   this.OV74TFLugarId = 0 ;
   this.AV75TFLugarId_To = 0 ;
   this.ZV75TFLugarId_To = 0 ;
   this.OV75TFLugarId_To = 0 ;
   this.AV78TFLugarNombre = "" ;
   this.ZV78TFLugarNombre = "" ;
   this.OV78TFLugarNombre = "" ;
   this.AV79TFLugarNombre_Sel = "" ;
   this.ZV79TFLugarNombre_Sel = "" ;
   this.OV79TFLugarNombre_Sel = "" ;
   this.AV82TFDocenteId = 0 ;
   this.ZV82TFDocenteId = 0 ;
   this.OV82TFDocenteId = 0 ;
   this.AV83TFDocenteId_To = 0 ;
   this.ZV83TFDocenteId_To = 0 ;
   this.OV83TFDocenteId_To = 0 ;
   this.AV86TFDocenteNombre = "" ;
   this.ZV86TFDocenteNombre = "" ;
   this.OV86TFDocenteNombre = "" ;
   this.AV87TFDocenteNombre_Sel = "" ;
   this.ZV87TFDocenteNombre_Sel = "" ;
   this.OV87TFDocenteNombre_Sel = "" ;
   this.AV90TFHorarioFechaInicio = gx.date.nullDate() ;
   this.ZV90TFHorarioFechaInicio = gx.date.nullDate() ;
   this.OV90TFHorarioFechaInicio = gx.date.nullDate() ;
   this.AV91TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.ZV91TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.OV91TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.AV92DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.ZV92DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.OV92DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.AV93DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.ZV93DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.OV93DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV97GridCurrentPage = 0 ;
   this.AV95DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_HorarioIdTitleControlIdToReplace = "" ;
   this.AV52ddo_HorarioNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_HorarioDiasTitleControlIdToReplace = "" ;
   this.AV60ddo_CursoIdTitleControlIdToReplace = "" ;
   this.AV64ddo_CursoNombreTitleControlIdToReplace = "" ;
   this.AV68ddo_NivelIdTitleControlIdToReplace = "" ;
   this.AV72ddo_NivelNombreTitleControlIdToReplace = "" ;
   this.AV76ddo_LugarIdTitleControlIdToReplace = "" ;
   this.AV80ddo_LugarNombreTitleControlIdToReplace = "" ;
   this.AV84ddo_DocenteIdTitleControlIdToReplace = "" ;
   this.AV88ddo_DocenteNombreTitleControlIdToReplace = "" ;
   this.AV94ddo_HorarioFechaInicioTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFHorarioId = 0 ;
   this.AV47TFHorarioId_To = 0 ;
   this.AV50TFHorarioNombre = "" ;
   this.AV51TFHorarioNombre_Sel = "" ;
   this.AV54TFHorarioDias = "" ;
   this.AV55TFHorarioDias_Sel = "" ;
   this.AV58TFCursoId = 0 ;
   this.AV59TFCursoId_To = 0 ;
   this.AV62TFCursoNombre = "" ;
   this.AV63TFCursoNombre_Sel = "" ;
   this.AV66TFNivelId = 0 ;
   this.AV67TFNivelId_To = 0 ;
   this.AV70TFNivelNombre = "" ;
   this.AV71TFNivelNombre_Sel = "" ;
   this.AV74TFLugarId = 0 ;
   this.AV75TFLugarId_To = 0 ;
   this.AV78TFLugarNombre = "" ;
   this.AV79TFLugarNombre_Sel = "" ;
   this.AV82TFDocenteId = 0 ;
   this.AV83TFDocenteId_To = 0 ;
   this.AV86TFDocenteNombre = "" ;
   this.AV87TFDocenteNombre_Sel = "" ;
   this.AV90TFHorarioFechaInicio = gx.date.nullDate() ;
   this.AV91TFHorarioFechaInicio_To = gx.date.nullDate() ;
   this.AV92DDO_HorarioFechaInicioAuxDate = gx.date.nullDate() ;
   this.AV93DDO_HorarioFechaInicioAuxDateTo = gx.date.nullDate() ;
   this.AV101Update = "" ;
   this.AV102Delete = "" ;
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
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV131Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120f2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130f2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140f2_client": ["DDO_HORARIOID.ONOPTIONCLICKED", true] ,"e150f2_client": ["DDO_HORARIONOMBRE.ONOPTIONCLICKED", true] ,"e160f2_client": ["DDO_HORARIODIAS.ONOPTIONCLICKED", true] ,"e170f2_client": ["DDO_CURSOID.ONOPTIONCLICKED", true] ,"e180f2_client": ["DDO_CURSONOMBRE.ONOPTIONCLICKED", true] ,"e190f2_client": ["DDO_NIVELID.ONOPTIONCLICKED", true] ,"e200f2_client": ["DDO_NIVELNOMBRE.ONOPTIONCLICKED", true] ,"e210f2_client": ["DDO_LUGARID.ONOPTIONCLICKED", true] ,"e220f2_client": ["DDO_LUGARNOMBRE.ONOPTIONCLICKED", true] ,"e230f2_client": ["DDO_DOCENTEID.ONOPTIONCLICKED", true] ,"e240f2_client": ["DDO_DOCENTENOMBRE.ONOPTIONCLICKED", true] ,"e250f2_client": ["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED", true] ,"e260f2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110f2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e270f2_client": ["'DOINSERT'", true] ,"e280f2_client": ["'DOEXPORT'", true] ,"e290f2_client": ["'DOEXPORTREPORT'", true] ,"e330f2_client": ["ENTER", true] ,"e340f2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOID","Visible")',ctrl:'vTFHORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOID_TO","Visible")',ctrl:'vTFHORARIOID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIONOMBRE","Visible")',ctrl:'vTFHORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIONOMBRE_SEL","Visible")',ctrl:'vTFHORARIONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIODIAS","Visible")',ctrl:'vTFHORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIODIAS_SEL","Visible")',ctrl:'vTFHORARIODIAS_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSOID","Visible")',ctrl:'vTFCURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSOID_TO","Visible")',ctrl:'vTFCURSOID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE","Visible")',ctrl:'vTFCURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFCURSONOMBRE_SEL","Visible")',ctrl:'vTFCURSONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELID","Visible")',ctrl:'vTFNIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELID_TO","Visible")',ctrl:'vTFNIVELID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELNOMBRE","Visible")',ctrl:'vTFNIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFNIVELNOMBRE_SEL","Visible")',ctrl:'vTFNIVELNOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFLUGARID","Visible")',ctrl:'vTFLUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFLUGARID_TO","Visible")',ctrl:'vTFLUGARID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFLUGARNOMBRE","Visible")',ctrl:'vTFLUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFLUGARNOMBRE_SEL","Visible")',ctrl:'vTFLUGARNOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEID","Visible")',ctrl:'vTFDOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTEID_TO","Visible")',ctrl:'vTFDOCENTEID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENOMBRE","Visible")',ctrl:'vTFDOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFDOCENTENOMBRE_SEL","Visible")',ctrl:'vTFDOCENTENOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOFECHAINICIO","Visible")',ctrl:'vTFHORARIOFECHAINICIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFHORARIOFECHAINICIO_TO","Visible")',ctrl:'vTFHORARIOFECHAINICIO_TO',prop:'Visible'},{av:'this.DDO_HORARIOIDContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIOID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIODIASContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIODIAS',prop:'TitleControlIdToReplace'},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIODIASTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSOIDContainer.TitleControlIdToReplace',ctrl:'DDO_CURSOID',prop:'TitleControlIdToReplace'},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_CURSONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_CURSONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_NIVELIDContainer.TitleControlIdToReplace',ctrl:'DDO_NIVELID',prop:'TitleControlIdToReplace'},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_NIVELIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_NIVELNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_NIVELNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_LUGARIDContainer.TitleControlIdToReplace',ctrl:'DDO_LUGARID',prop:'TitleControlIdToReplace'},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_LUGARIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_LUGARNOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_LUGARNOMBRE',prop:'TitleControlIdToReplace'},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTEIDContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTEID',prop:'TitleControlIdToReplace'},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_DOCENTENOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_DOCENTENOMBRE',prop:'TitleControlIdToReplace'},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_HORARIOFECHAINICIOContainer.TitleControlIdToReplace',ctrl:'DDO_HORARIOFECHAINICIO',prop:'TitleControlIdToReplace'},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV95DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SelectedValue_set',ctrl:'DDO_LUGARNOMBRE',prop:'SelectedValue_set'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'this.DDO_LUGARNOMBREContainer.FilteredText_set',ctrl:'DDO_LUGARNOMBRE',prop:'FilteredText_set'},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'this.DDO_LUGARIDContainer.FilteredText_set',ctrl:'DDO_LUGARID',prop:'FilteredText_set'},{av:'this.DDO_LUGARIDContainer.FilteredTextTo_set',ctrl:'DDO_LUGARID',prop:'FilteredTextTo_set'},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'this.DDO_NIVELIDContainer.FilteredText_set',ctrl:'DDO_NIVELID',prop:'FilteredText_set'},{av:'this.DDO_NIVELIDContainer.FilteredTextTo_set',ctrl:'DDO_NIVELID',prop:'FilteredTextTo_set'},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'this.DDO_HORARIODIASContainer.SelectedValue_set',ctrl:'DDO_HORARIODIAS',prop:'SelectedValue_set'},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'this.DDO_HORARIODIASContainer.FilteredText_set',ctrl:'DDO_HORARIODIAS',prop:'FilteredText_set'},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.FilteredText_set',ctrl:'DDO_HORARIOID',prop:'FilteredText_set'},{av:'this.DDO_HORARIOIDContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_HORARIOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIOIDContainer.ActiveEventKey',ctrl:'DDO_HORARIOID',prop:'ActiveEventKey'},{av:'this.DDO_HORARIOIDContainer.FilteredText_get',ctrl:'DDO_HORARIOID',prop:'FilteredText_get'},{av:'this.DDO_HORARIOIDContainer.FilteredTextTo_get',ctrl:'DDO_HORARIOID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIONOMBREContainer.ActiveEventKey',ctrl:'DDO_HORARIONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_get',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_get',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIODIAS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIODIASContainer.ActiveEventKey',ctrl:'DDO_HORARIODIAS',prop:'ActiveEventKey'},{av:'this.DDO_HORARIODIASContainer.FilteredText_get',ctrl:'DDO_HORARIODIAS',prop:'FilteredText_get'},{av:'this.DDO_HORARIODIASContainer.SelectedValue_get',ctrl:'DDO_HORARIODIAS',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_CURSOIDContainer.ActiveEventKey',ctrl:'DDO_CURSOID',prop:'ActiveEventKey'},{av:'this.DDO_CURSOIDContainer.FilteredText_get',ctrl:'DDO_CURSOID',prop:'FilteredText_get'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_get',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_CURSONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_CURSONOMBREContainer.ActiveEventKey',ctrl:'DDO_CURSONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_CURSONOMBREContainer.FilteredText_get',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_get',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_NIVELID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_NIVELIDContainer.ActiveEventKey',ctrl:'DDO_NIVELID',prop:'ActiveEventKey'},{av:'this.DDO_NIVELIDContainer.FilteredText_get',ctrl:'DDO_NIVELID',prop:'FilteredText_get'},{av:'this.DDO_NIVELIDContainer.FilteredTextTo_get',ctrl:'DDO_NIVELID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_NIVELNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_NIVELNOMBREContainer.ActiveEventKey',ctrl:'DDO_NIVELNOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_get',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_get'},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_get',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_LUGARID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_LUGARIDContainer.ActiveEventKey',ctrl:'DDO_LUGARID',prop:'ActiveEventKey'},{av:'this.DDO_LUGARIDContainer.FilteredText_get',ctrl:'DDO_LUGARID',prop:'FilteredText_get'},{av:'this.DDO_LUGARIDContainer.FilteredTextTo_get',ctrl:'DDO_LUGARID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_LUGARNOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_LUGARNOMBREContainer.ActiveEventKey',ctrl:'DDO_LUGARNOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_LUGARNOMBREContainer.FilteredText_get',ctrl:'DDO_LUGARNOMBRE',prop:'FilteredText_get'},{av:'this.DDO_LUGARNOMBREContainer.SelectedValue_get',ctrl:'DDO_LUGARNOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTEID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTEIDContainer.ActiveEventKey',ctrl:'DDO_DOCENTEID',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_get',ctrl:'DDO_DOCENTEID',prop:'FilteredText_get'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_get',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_DOCENTENOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.ActiveEventKey',ctrl:'DDO_DOCENTENOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_get',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_get'},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_get',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_HORARIOFECHAINICIO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.ActiveEventKey',ctrl:'DDO_HORARIOFECHAINICIO',prop:'ActiveEventKey'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_get',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_get'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_get',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9',hsh:true},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A25LugarId',fld:'LUGARID',pic:'ZZZ9'},{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[{av:'AV101Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV102Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Link")',ctrl:'HORARIONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Link")',ctrl:'LUGARNOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Link")',ctrl:'DOCENTENOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_HorarioIdTitleControlIdToReplace',fld:'vDDO_HORARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_HorarioNombreTitleControlIdToReplace',fld:'vDDO_HORARIONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_HorarioDiasTitleControlIdToReplace',fld:'vDDO_HORARIODIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_CursoIdTitleControlIdToReplace',fld:'vDDO_CURSOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_CursoNombreTitleControlIdToReplace',fld:'vDDO_CURSONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_NivelIdTitleControlIdToReplace',fld:'vDDO_NIVELIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_NivelNombreTitleControlIdToReplace',fld:'vDDO_NIVELNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_LugarIdTitleControlIdToReplace',fld:'vDDO_LUGARIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_LugarNombreTitleControlIdToReplace',fld:'vDDO_LUGARNOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_DocenteIdTitleControlIdToReplace',fld:'vDDO_DOCENTEIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV88ddo_DocenteNombreTitleControlIdToReplace',fld:'vDDO_DOCENTENOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV94ddo_HorarioFechaInicioTitleControlIdToReplace',fld:'vDDO_HORARIOFECHAINICIOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.FilteredText_set',ctrl:'DDO_HORARIOID',prop:'FilteredText_set'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOID',prop:'FilteredTextTo_set'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'this.DDO_HORARIODIASContainer.FilteredText_set',ctrl:'DDO_HORARIODIAS',prop:'FilteredText_set'},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'this.DDO_HORARIODIASContainer.SelectedValue_set',ctrl:'DDO_HORARIODIAS',prop:'SelectedValue_set'},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'this.DDO_NIVELIDContainer.FilteredText_set',ctrl:'DDO_NIVELID',prop:'FilteredText_set'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'this.DDO_NIVELIDContainer.FilteredTextTo_set',ctrl:'DDO_NIVELID',prop:'FilteredTextTo_set'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'this.DDO_LUGARIDContainer.FilteredText_set',ctrl:'DDO_LUGARID',prop:'FilteredText_set'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'this.DDO_LUGARIDContainer.FilteredTextTo_set',ctrl:'DDO_LUGARID',prop:'FilteredTextTo_set'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'this.DDO_LUGARNOMBREContainer.FilteredText_set',ctrl:'DDO_LUGARNOMBRE',prop:'FilteredText_set'},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SelectedValue_set',ctrl:'DDO_LUGARNOMBRE',prop:'SelectedValue_set'},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV45HorarioIdTitleFilterData',fld:'vHORARIOIDTITLEFILTERDATA',pic:''},{av:'AV49HorarioNombreTitleFilterData',fld:'vHORARIONOMBRETITLEFILTERDATA',pic:''},{av:'AV53HorarioDiasTitleFilterData',fld:'vHORARIODIASTITLEFILTERDATA',pic:''},{av:'AV57CursoIdTitleFilterData',fld:'vCURSOIDTITLEFILTERDATA',pic:''},{av:'AV61CursoNombreTitleFilterData',fld:'vCURSONOMBRETITLEFILTERDATA',pic:''},{av:'AV65NivelIdTitleFilterData',fld:'vNIVELIDTITLEFILTERDATA',pic:''},{av:'AV69NivelNombreTitleFilterData',fld:'vNIVELNOMBRETITLEFILTERDATA',pic:''},{av:'AV73LugarIdTitleFilterData',fld:'vLUGARIDTITLEFILTERDATA',pic:''},{av:'AV77LugarNombreTitleFilterData',fld:'vLUGARNOMBRETITLEFILTERDATA',pic:''},{av:'AV81DocenteIdTitleFilterData',fld:'vDOCENTEIDTITLEFILTERDATA',pic:''},{av:'AV85DocenteNombreTitleFilterData',fld:'vDOCENTENOMBRETITLEFILTERDATA',pic:''},{av:'AV89HorarioFechaInicioTitleFilterData',fld:'vHORARIOFECHAINICIOTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("HORARIOID","Visible")',ctrl:'HORARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Visible")',ctrl:'HORARIONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Visible")',ctrl:'HORARIODIAS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSOID","Visible")',ctrl:'CURSOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Visible")',ctrl:'CURSONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELID","Visible")',ctrl:'NIVELID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Visible")',ctrl:'NIVELNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARID","Visible")',ctrl:'LUGARID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Visible")',ctrl:'LUGARNOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Visible")',ctrl:'DOCENTEID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Visible")',ctrl:'DOCENTENOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Visible")',ctrl:'HORARIOFECHAINICIO',prop:'Visible'},{ctrl:'HORARIOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("HORARIOID","Title")',ctrl:'HORARIOID',prop:'Title'},{ctrl:'HORARIONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Title")',ctrl:'HORARIONOMBRE',prop:'Title'},{ctrl:'HORARIODIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIODIAS","Title")',ctrl:'HORARIODIAS',prop:'Title'},{ctrl:'CURSOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSOID","Title")',ctrl:'CURSOID',prop:'Title'},{ctrl:'CURSONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Title")',ctrl:'CURSONOMBRE',prop:'Title'},{ctrl:'NIVELID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELID","Title")',ctrl:'NIVELID',prop:'Title'},{ctrl:'NIVELNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("NIVELNOMBRE","Title")',ctrl:'NIVELNOMBRE',prop:'Title'},{ctrl:'LUGARID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARID","Title")',ctrl:'LUGARID',prop:'Title'},{ctrl:'LUGARNOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Title")',ctrl:'LUGARNOMBRE',prop:'Title'},{ctrl:'DOCENTEID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTEID","Title")',ctrl:'DOCENTEID',prop:'Title'},{ctrl:'DOCENTENOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Title")',ctrl:'DOCENTENOMBRE',prop:'Title'},{ctrl:'HORARIOFECHAINICIO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HORARIOFECHAINICIO","Title")',ctrl:'HORARIOFECHAINICIO',prop:'Title'},{av:'AV97GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV98GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SelectedValue_set',ctrl:'DDO_LUGARNOMBRE',prop:'SelectedValue_set'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'this.DDO_LUGARNOMBREContainer.FilteredText_set',ctrl:'DDO_LUGARNOMBRE',prop:'FilteredText_set'},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'this.DDO_LUGARIDContainer.FilteredText_set',ctrl:'DDO_LUGARID',prop:'FilteredText_set'},{av:'this.DDO_LUGARIDContainer.FilteredTextTo_set',ctrl:'DDO_LUGARID',prop:'FilteredTextTo_set'},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'this.DDO_NIVELIDContainer.FilteredText_set',ctrl:'DDO_NIVELID',prop:'FilteredText_set'},{av:'this.DDO_NIVELIDContainer.FilteredTextTo_set',ctrl:'DDO_NIVELID',prop:'FilteredTextTo_set'},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'this.DDO_HORARIODIASContainer.SelectedValue_set',ctrl:'DDO_HORARIODIAS',prop:'SelectedValue_set'},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'this.DDO_HORARIODIASContainer.FilteredText_set',ctrl:'DDO_HORARIODIAS',prop:'FilteredText_set'},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.FilteredText_set',ctrl:'DDO_HORARIOID',prop:'FilteredText_set'},{av:'this.DDO_HORARIOIDContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV131Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_HORARIOFECHAINICIOContainer.SortedStatus',ctrl:'DDO_HORARIOFECHAINICIO',prop:'SortedStatus'},{av:'this.DDO_DOCENTENOMBREContainer.SortedStatus',ctrl:'DDO_DOCENTENOMBRE',prop:'SortedStatus'},{av:'this.DDO_DOCENTEIDContainer.SortedStatus',ctrl:'DDO_DOCENTEID',prop:'SortedStatus'},{av:'this.DDO_LUGARNOMBREContainer.SortedStatus',ctrl:'DDO_LUGARNOMBRE',prop:'SortedStatus'},{av:'this.DDO_LUGARIDContainer.SortedStatus',ctrl:'DDO_LUGARID',prop:'SortedStatus'},{av:'this.DDO_NIVELNOMBREContainer.SortedStatus',ctrl:'DDO_NIVELNOMBRE',prop:'SortedStatus'},{av:'this.DDO_NIVELIDContainer.SortedStatus',ctrl:'DDO_NIVELID',prop:'SortedStatus'},{av:'this.DDO_CURSONOMBREContainer.SortedStatus',ctrl:'DDO_CURSONOMBRE',prop:'SortedStatus'},{av:'this.DDO_CURSOIDContainer.SortedStatus',ctrl:'DDO_CURSOID',prop:'SortedStatus'},{av:'this.DDO_HORARIODIASContainer.SortedStatus',ctrl:'DDO_HORARIODIAS',prop:'SortedStatus'},{av:'this.DDO_HORARIONOMBREContainer.SortedStatus',ctrl:'DDO_HORARIONOMBRE',prop:'SortedStatus'},{av:'this.DDO_HORARIOIDContainer.SortedStatus',ctrl:'DDO_HORARIOID',prop:'SortedStatus'},{av:'AV90TFHorarioFechaInicio',fld:'vTFHORARIOFECHAINICIO',pic:''},{av:'AV91TFHorarioFechaInicio_To',fld:'vTFHORARIOFECHAINICIO_TO',pic:''},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredText_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredText_set'},{av:'this.DDO_HORARIOFECHAINICIOContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOFECHAINICIO',prop:'FilteredTextTo_set'},{av:'AV87TFDocenteNombre_Sel',fld:'vTFDOCENTENOMBRE_SEL',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.SelectedValue_set',ctrl:'DDO_DOCENTENOMBRE',prop:'SelectedValue_set'},{av:'AV86TFDocenteNombre',fld:'vTFDOCENTENOMBRE',pic:''},{av:'this.DDO_DOCENTENOMBREContainer.FilteredText_set',ctrl:'DDO_DOCENTENOMBRE',prop:'FilteredText_set'},{av:'AV82TFDocenteId',fld:'vTFDOCENTEID',pic:'ZZZ9'},{av:'AV83TFDocenteId_To',fld:'vTFDOCENTEID_TO',pic:'ZZZ9'},{av:'this.DDO_DOCENTEIDContainer.FilteredText_set',ctrl:'DDO_DOCENTEID',prop:'FilteredText_set'},{av:'this.DDO_DOCENTEIDContainer.FilteredTextTo_set',ctrl:'DDO_DOCENTEID',prop:'FilteredTextTo_set'},{av:'AV79TFLugarNombre_Sel',fld:'vTFLUGARNOMBRE_SEL',pic:''},{av:'this.DDO_LUGARNOMBREContainer.SelectedValue_set',ctrl:'DDO_LUGARNOMBRE',prop:'SelectedValue_set'},{av:'AV78TFLugarNombre',fld:'vTFLUGARNOMBRE',pic:''},{av:'this.DDO_LUGARNOMBREContainer.FilteredText_set',ctrl:'DDO_LUGARNOMBRE',prop:'FilteredText_set'},{av:'AV74TFLugarId',fld:'vTFLUGARID',pic:'ZZZ9'},{av:'AV75TFLugarId_To',fld:'vTFLUGARID_TO',pic:'ZZZ9'},{av:'this.DDO_LUGARIDContainer.FilteredText_set',ctrl:'DDO_LUGARID',prop:'FilteredText_set'},{av:'this.DDO_LUGARIDContainer.FilteredTextTo_set',ctrl:'DDO_LUGARID',prop:'FilteredTextTo_set'},{av:'AV71TFNivelNombre_Sel',fld:'vTFNIVELNOMBRE_SEL',pic:''},{av:'this.DDO_NIVELNOMBREContainer.SelectedValue_set',ctrl:'DDO_NIVELNOMBRE',prop:'SelectedValue_set'},{av:'AV70TFNivelNombre',fld:'vTFNIVELNOMBRE',pic:''},{av:'this.DDO_NIVELNOMBREContainer.FilteredText_set',ctrl:'DDO_NIVELNOMBRE',prop:'FilteredText_set'},{av:'AV66TFNivelId',fld:'vTFNIVELID',pic:'ZZZ9'},{av:'AV67TFNivelId_To',fld:'vTFNIVELID_TO',pic:'ZZZ9'},{av:'this.DDO_NIVELIDContainer.FilteredText_set',ctrl:'DDO_NIVELID',prop:'FilteredText_set'},{av:'this.DDO_NIVELIDContainer.FilteredTextTo_set',ctrl:'DDO_NIVELID',prop:'FilteredTextTo_set'},{av:'AV63TFCursoNombre_Sel',fld:'vTFCURSONOMBRE_SEL',pic:''},{av:'this.DDO_CURSONOMBREContainer.SelectedValue_set',ctrl:'DDO_CURSONOMBRE',prop:'SelectedValue_set'},{av:'AV62TFCursoNombre',fld:'vTFCURSONOMBRE',pic:''},{av:'this.DDO_CURSONOMBREContainer.FilteredText_set',ctrl:'DDO_CURSONOMBRE',prop:'FilteredText_set'},{av:'AV58TFCursoId',fld:'vTFCURSOID',pic:'ZZZ9'},{av:'AV59TFCursoId_To',fld:'vTFCURSOID_TO',pic:'ZZZ9'},{av:'this.DDO_CURSOIDContainer.FilteredText_set',ctrl:'DDO_CURSOID',prop:'FilteredText_set'},{av:'this.DDO_CURSOIDContainer.FilteredTextTo_set',ctrl:'DDO_CURSOID',prop:'FilteredTextTo_set'},{av:'AV55TFHorarioDias_Sel',fld:'vTFHORARIODIAS_SEL',pic:''},{av:'this.DDO_HORARIODIASContainer.SelectedValue_set',ctrl:'DDO_HORARIODIAS',prop:'SelectedValue_set'},{av:'AV54TFHorarioDias',fld:'vTFHORARIODIAS',pic:''},{av:'this.DDO_HORARIODIASContainer.FilteredText_set',ctrl:'DDO_HORARIODIAS',prop:'FilteredText_set'},{av:'AV51TFHorarioNombre_Sel',fld:'vTFHORARIONOMBRE_SEL',pic:''},{av:'this.DDO_HORARIONOMBREContainer.SelectedValue_set',ctrl:'DDO_HORARIONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFHorarioNombre',fld:'vTFHORARIONOMBRE',pic:''},{av:'this.DDO_HORARIONOMBREContainer.FilteredText_set',ctrl:'DDO_HORARIONOMBRE',prop:'FilteredText_set'},{av:'AV46TFHorarioId',fld:'vTFHORARIOID',pic:'ZZZ9'},{av:'AV47TFHorarioId_To',fld:'vTFHORARIOID_TO',pic:'ZZZ9'},{av:'this.DDO_HORARIOIDContainer.FilteredText_set',ctrl:'DDO_HORARIOID',prop:'FilteredText_set'},{av:'this.DDO_HORARIOIDContainer.FilteredTextTo_set',ctrl:'DDO_HORARIOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV131Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV131Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV131Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[98]);
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar(this.GXValidFnc[105]);
   GridContainer.addRefreshingVar(this.GXValidFnc[106]);
   GridContainer.addRefreshingVar(this.GXValidFnc[107]);
   GridContainer.addRefreshingVar(this.GXValidFnc[108]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridContainer.addRefreshingVar(this.GXValidFnc[111]);
   GridContainer.addRefreshingVar(this.GXValidFnc[112]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingVar(this.GXValidFnc[115]);
   GridContainer.addRefreshingVar(this.GXValidFnc[116]);
   GridContainer.addRefreshingVar(this.GXValidFnc[117]);
   GridContainer.addRefreshingVar(this.GXValidFnc[118]);
   GridContainer.addRefreshingVar(this.GXValidFnc[119]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar(this.GXValidFnc[69]);
   GridContainer.addRefreshingVar(this.GXValidFnc[71]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar(this.GXValidFnc[75]);
   GridContainer.addRefreshingVar(this.GXValidFnc[77]);
   GridContainer.addRefreshingVar(this.GXValidFnc[79]);
   GridContainer.addRefreshingVar(this.GXValidFnc[81]);
   GridContainer.addRefreshingVar(this.GXValidFnc[83]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar({rfrVar:"AV131Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.horarioww);});
