/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:24:9.66
*/
gx.evt.autoSkip = false;
gx.define('academia.pagomatriculaww', false, function () {
   this.ServerClass =  "academia.pagomatriculaww" ;
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
      this.AV115Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV115Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Tfpagomatriculafechapago=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOMATRICULAFECHAPAGO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV50TFPagoMatriculaFechaPago)==0) || new gx.date.gxdate( this.AV50TFPagoMatriculaFechaPago ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Matricula Fecha Pago fuera de rango");
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
   this.Validv_Tfpagomatriculafechapago_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOMATRICULAFECHAPAGO_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV51TFPagoMatriculaFechaPago_To)==0) || new gx.date.gxdate( this.AV51TFPagoMatriculaFechaPago_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Matricula Fecha Pago_To fuera de rango");
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
   this.Validv_Ddo_pagomatriculafechapagoauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOMATRICULAFECHAPAGOAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV52DDO_PagoMatriculaFechaPagoAuxDate)==0) || new gx.date.gxdate( this.AV52DDO_PagoMatriculaFechaPagoAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Matricula Fecha Pago Aux Date fuera de rango");
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
   this.Validv_Ddo_pagomatriculafechapagoauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOMATRICULAFECHAPAGOAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV53DDO_PagoMatriculaFechaPagoAuxDateTo)==0) || new gx.date.gxdate( this.AV53DDO_PagoMatriculaFechaPagoAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Matricula Fecha Pago Aux Date To fuera de rango");
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
   this.Validv_Tfpagomatriculafechalimite=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOMATRICULAFECHALIMITE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV56TFPagoMatriculaFechaLimite)==0) || new gx.date.gxdate( this.AV56TFPagoMatriculaFechaLimite ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Matricula Fecha Limite fuera de rango");
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
   this.Validv_Tfpagomatriculafechalimite_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFPAGOMATRICULAFECHALIMITE_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV57TFPagoMatriculaFechaLimite_To)==0) || new gx.date.gxdate( this.AV57TFPagoMatriculaFechaLimite_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFPago Matricula Fecha Limite_To fuera de rango");
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
   this.Validv_Ddo_pagomatriculafechalimiteauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOMATRICULAFECHALIMITEAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV58DDO_PagoMatriculaFechaLimiteAuxDate)==0) || new gx.date.gxdate( this.AV58DDO_PagoMatriculaFechaLimiteAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Matricula Fecha Limite Aux Date fuera de rango");
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
   this.Validv_Ddo_pagomatriculafechalimiteauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_PAGOMATRICULAFECHALIMITEAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo)==0) || new gx.date.gxdate( this.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Pago Matricula Fecha Limite Aux Date To fuera de rango");
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
         this.DDO_PAGOMATRICULAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 7 )
      {
         this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 8 )
      {
         this.DDO_USUARIOIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 9 )
      {
         this.DDO_MATRICULAIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_PAGOMATRICULAIDContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus =  ""  ;
      this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus =  ""  ;
      this.DDO_USUARIOIDContainer.SortedStatus =  ""  ;
      this.DDO_MATRICULAIDContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFPagoMatriculaId = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOMATRICULAIDContainer.FilteredText_set =  ""  ;
      this.AV47TFPagoMatriculaId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set =  ""  ;
      this.AV50TFPagoMatriculaFechaPago =  ''  ;
      this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_set =  ""  ;
      this.AV51TFPagoMatriculaFechaPago_To =  ''  ;
      this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_set =  ""  ;
      this.AV56TFPagoMatriculaFechaLimite =  ''  ;
      this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_set =  ""  ;
      this.AV57TFPagoMatriculaFechaLimite_To =  ''  ;
      this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_set =  ""  ;
      this.AV62TFPagoMatriculaEstado =  ''  ;
      this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_set =  ""  ;
      this.AV63TFPagoMatriculaEstado_Sel =  ''  ;
      this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_set =  ""  ;
      this.AV66TFPagoMatriculaDescripcion =  ''  ;
      this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_set =  ""  ;
      this.AV67TFPagoMatriculaDescripcion_Sel =  ''  ;
      this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_set =  ""  ;
      this.AV70TFPagoMatriculaValorMensual =  0.0  ;
      this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_set =  ""  ;
      this.AV71TFPagoMatriculaValorMensual_To =  0.0  ;
      this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_set =  ""  ;
      this.AV74TFPagoMatriculaValorTotal =  0.0  ;
      this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_set =  ""  ;
      this.AV75TFPagoMatriculaValorTotal_To =  0.0  ;
      this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_set =  ""  ;
      this.AV78TFUsuarioId =  ''  ;
      this.DDO_USUARIOIDContainer.FilteredText_set =  ""  ;
      this.AV79TFUsuarioId_Sel =  ''  ;
      this.DDO_USUARIOIDContainer.SelectedValue_set =  ""  ;
      this.AV82TFMatriculaId = gx.num.trunc( 0 ,0) ;
      this.DDO_MATRICULAIDContainer.FilteredText_set =  ""  ;
      this.AV83TFMatriculaId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_MATRICULAIDContainer.FilteredTextTo_set =  ""  ;
   };
   this.e120r2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130r2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAFECHAPAGO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAFECHALIMITE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAESTADO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULADESCRIPCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAVALORMENSUAL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200r2_client=function()
   {
      return this.executeServerEvent("DDO_PAGOMATRICULAVALORTOTAL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210r2_client=function()
   {
      return this.executeServerEvent("DDO_USUARIOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e220r2_client=function()
   {
      return this.executeServerEvent("DDO_MATRICULAID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e230r2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110r2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e240r2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e250r2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e260r2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e300r2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e310r2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,61,62,64,66,68,70,72,74,76,78,80,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110];
   this.GXLastCtrlId =110;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.pagomatriculaww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(33,47,"PAGOMATRICULAID","","","PagoMatriculaId","int",0,"px",4,4,"right",null,[],33,"PagoMatriculaId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(53,48,"PAGOMATRICULAFECHAPAGO","","","PagoMatriculaFechaPago","date",0,"px",8,8,"right",null,[],53,"PagoMatriculaFechaPago",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(54,49,"PAGOMATRICULAFECHALIMITE","","","PagoMatriculaFechaLimite","date",0,"px",8,8,"right",null,[],54,"PagoMatriculaFechaLimite",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(55,50,"PAGOMATRICULAESTADO","","","PagoMatriculaEstado","svchar",0,"px",40,40,"left",null,[],55,"PagoMatriculaEstado",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(56,51,"PAGOMATRICULADESCRIPCION","","","PagoMatriculaDescripcion","svchar",0,"px",200,80,"left",null,[],56,"PagoMatriculaDescripcion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(57,52,"PAGOMATRICULAVALORMENSUAL","","","PagoMatriculaValorMensual","decimal",0,"px",8,8,"right",null,[],57,"PagoMatriculaValorMensual",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(58,53,"PAGOMATRICULAVALORTOTAL","","","PagoMatriculaValorTotal","decimal",0,"px",8,8,"right",null,[],58,"PagoMatriculaValorTotal",true,2,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(59,54,"USUARIOID","","","UsuarioId","svchar",0,"px",100,80,"left",null,[],59,"UsuarioId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(27,55,"MATRICULAID","","","MatriculaId","int",0,"px",4,4,"right",null,[],27,"MatriculaId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV87GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV87GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV87GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV88GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV88GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV88GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120r2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130r2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_PAGOMATRICULAIDContainer = gx.uc.getNew(this, 63, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAIDContainer", "Ddo_pagomatriculaid", "DDO_PAGOMATRICULAID");
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
   DDO_PAGOMATRICULAIDContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAIDContainer.addV2CFunction('AV45PagoMatriculaIdTitleFilterData', "vPAGOMATRICULAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45PagoMatriculaIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAIDTITLEFILTERDATA",UC.ParentObject.AV45PagoMatriculaIdTitleFilterData); });
   DDO_PAGOMATRICULAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAIDContainer.addEventHandler("OnOptionClicked", this.e140r2_client);
   this.setUserControl(DDO_PAGOMATRICULAIDContainer);
   this.DDO_PAGOMATRICULAFECHAPAGOContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAFECHAPAGOContainer", "Ddo_pagomatriculafechapago", "DDO_PAGOMATRICULAFECHAPAGO");
   var DDO_PAGOMATRICULAFECHAPAGOContainer = this.DDO_PAGOMATRICULAFECHAPAGOContainer;
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAFECHAPAGOContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAFECHAPAGOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAFECHAPAGOContainer.addV2CFunction('AV49PagoMatriculaFechaPagoTitleFilterData', "vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAFECHAPAGOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49PagoMatriculaFechaPagoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA",UC.ParentObject.AV49PagoMatriculaFechaPagoTitleFilterData); });
   DDO_PAGOMATRICULAFECHAPAGOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAFECHAPAGOContainer.addEventHandler("OnOptionClicked", this.e150r2_client);
   this.setUserControl(DDO_PAGOMATRICULAFECHAPAGOContainer);
   this.DDO_PAGOMATRICULAFECHALIMITEContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAFECHALIMITEContainer", "Ddo_pagomatriculafechalimite", "DDO_PAGOMATRICULAFECHALIMITE");
   var DDO_PAGOMATRICULAFECHALIMITEContainer = this.DDO_PAGOMATRICULAFECHALIMITEContainer;
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAFECHALIMITEContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAFECHALIMITEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAFECHALIMITEContainer.addV2CFunction('AV55PagoMatriculaFechaLimiteTitleFilterData', "vPAGOMATRICULAFECHALIMITETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAFECHALIMITEContainer.addC2VFunction(function(UC) { UC.ParentObject.AV55PagoMatriculaFechaLimiteTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAFECHALIMITETITLEFILTERDATA",UC.ParentObject.AV55PagoMatriculaFechaLimiteTitleFilterData); });
   DDO_PAGOMATRICULAFECHALIMITEContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAFECHALIMITEContainer.addEventHandler("OnOptionClicked", this.e160r2_client);
   this.setUserControl(DDO_PAGOMATRICULAFECHALIMITEContainer);
   this.DDO_PAGOMATRICULAESTADOContainer = gx.uc.getNew(this, 69, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAESTADOContainer", "Ddo_pagomatriculaestado", "DDO_PAGOMATRICULAESTADO");
   var DDO_PAGOMATRICULAESTADOContainer = this.DDO_PAGOMATRICULAESTADOContainer;
   DDO_PAGOMATRICULAESTADOContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoMatriculaWWGetFilterData", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PAGOMATRICULAESTADOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAESTADOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAESTADOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAESTADOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAESTADOContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAESTADOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAESTADOContainer.addV2CFunction('AV61PagoMatriculaEstadoTitleFilterData', "vPAGOMATRICULAESTADOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAESTADOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61PagoMatriculaEstadoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAESTADOTITLEFILTERDATA",UC.ParentObject.AV61PagoMatriculaEstadoTitleFilterData); });
   DDO_PAGOMATRICULAESTADOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAESTADOContainer.addEventHandler("OnOptionClicked", this.e170r2_client);
   this.setUserControl(DDO_PAGOMATRICULAESTADOContainer);
   this.DDO_PAGOMATRICULADESCRIPCIONContainer = gx.uc.getNew(this, 71, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULADESCRIPCIONContainer", "Ddo_pagomatriculadescripcion", "DDO_PAGOMATRICULADESCRIPCION");
   var DDO_PAGOMATRICULADESCRIPCIONContainer = this.DDO_PAGOMATRICULADESCRIPCIONContainer;
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoMatriculaWWGetFilterData", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULADESCRIPCIONContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULADESCRIPCIONContainer.addV2CFunction('AV65PagoMatriculaDescripcionTitleFilterData', "vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULADESCRIPCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV65PagoMatriculaDescripcionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA",UC.ParentObject.AV65PagoMatriculaDescripcionTitleFilterData); });
   DDO_PAGOMATRICULADESCRIPCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULADESCRIPCIONContainer.addEventHandler("OnOptionClicked", this.e180r2_client);
   this.setUserControl(DDO_PAGOMATRICULADESCRIPCIONContainer);
   this.DDO_PAGOMATRICULAVALORMENSUALContainer = gx.uc.getNew(this, 73, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAVALORMENSUALContainer", "Ddo_pagomatriculavalormensual", "DDO_PAGOMATRICULAVALORMENSUAL");
   var DDO_PAGOMATRICULAVALORMENSUALContainer = this.DDO_PAGOMATRICULAVALORMENSUALContainer;
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAVALORMENSUALContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAVALORMENSUALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAVALORMENSUALContainer.addV2CFunction('AV69PagoMatriculaValorMensualTitleFilterData', "vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAVALORMENSUALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV69PagoMatriculaValorMensualTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA",UC.ParentObject.AV69PagoMatriculaValorMensualTitleFilterData); });
   DDO_PAGOMATRICULAVALORMENSUALContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAVALORMENSUALContainer.addEventHandler("OnOptionClicked", this.e190r2_client);
   this.setUserControl(DDO_PAGOMATRICULAVALORMENSUALContainer);
   this.DDO_PAGOMATRICULAVALORTOTALContainer = gx.uc.getNew(this, 75, 35, "BootstrapDropDownOptions", "DDO_PAGOMATRICULAVALORTOTALContainer", "Ddo_pagomatriculavalortotal", "DDO_PAGOMATRICULAVALORTOTAL");
   var DDO_PAGOMATRICULAVALORTOTALContainer = this.DDO_PAGOMATRICULAVALORTOTALContainer;
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Class", "Class", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Icon", "Icon", "", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Caption", "Caption", "", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("Visible", "Visible", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_PAGOMATRICULAVALORTOTALContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_PAGOMATRICULAVALORTOTALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_PAGOMATRICULAVALORTOTALContainer.addV2CFunction('AV73PagoMatriculaValorTotalTitleFilterData', "vPAGOMATRICULAVALORTOTALTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_PAGOMATRICULAVALORTOTALContainer.addC2VFunction(function(UC) { UC.ParentObject.AV73PagoMatriculaValorTotalTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vPAGOMATRICULAVALORTOTALTITLEFILTERDATA",UC.ParentObject.AV73PagoMatriculaValorTotalTitleFilterData); });
   DDO_PAGOMATRICULAVALORTOTALContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_PAGOMATRICULAVALORTOTALContainer.addEventHandler("OnOptionClicked", this.e200r2_client);
   this.setUserControl(DDO_PAGOMATRICULAVALORTOTALContainer);
   this.DDO_USUARIOIDContainer = gx.uc.getNew(this, 77, 35, "BootstrapDropDownOptions", "DDO_USUARIOIDContainer", "Ddo_usuarioid", "DDO_USUARIOID");
   var DDO_USUARIOIDContainer = this.DDO_USUARIOIDContainer;
   DDO_USUARIOIDContainer.setProp("Class", "Class", "", "char");
   DDO_USUARIOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_USUARIOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_USUARIOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_USUARIOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_USUARIOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_USUARIOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_USUARIOIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_USUARIOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_USUARIOIDContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_USUARIOIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_USUARIOIDContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_USUARIOIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_USUARIOIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_USUARIOIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_USUARIOIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_USUARIOIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_USUARIOIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_USUARIOIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_USUARIOIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_USUARIOIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_USUARIOIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_USUARIOIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_USUARIOIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_USUARIOIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_USUARIOIDContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_USUARIOIDContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_USUARIOIDContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_USUARIOIDContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_USUARIOIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_USUARIOIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_USUARIOIDContainer.setProp("DataListProc", "Datalistproc", "Academia.PagoMatriculaWWGetFilterData", "str");
   DDO_USUARIOIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_USUARIOIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_USUARIOIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_USUARIOIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_USUARIOIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_USUARIOIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_USUARIOIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_USUARIOIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_USUARIOIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_USUARIOIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_USUARIOIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_USUARIOIDContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_USUARIOIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_USUARIOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_USUARIOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_USUARIOIDContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_USUARIOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_USUARIOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_USUARIOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_USUARIOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_USUARIOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_USUARIOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_USUARIOIDContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_USUARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_USUARIOIDContainer.addV2CFunction('AV77UsuarioIdTitleFilterData', "vUSUARIOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_USUARIOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV77UsuarioIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vUSUARIOIDTITLEFILTERDATA",UC.ParentObject.AV77UsuarioIdTitleFilterData); });
   DDO_USUARIOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_USUARIOIDContainer.addEventHandler("OnOptionClicked", this.e210r2_client);
   this.setUserControl(DDO_USUARIOIDContainer);
   this.DDO_MATRICULAIDContainer = gx.uc.getNew(this, 79, 35, "BootstrapDropDownOptions", "DDO_MATRICULAIDContainer", "Ddo_matriculaid", "DDO_MATRICULAID");
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
   DDO_MATRICULAIDContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_MATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_MATRICULAIDContainer.addV2CFunction('AV81MatriculaIdTitleFilterData', "vMATRICULAIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_MATRICULAIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV81MatriculaIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vMATRICULAIDTITLEFILTERDATA",UC.ParentObject.AV81MatriculaIdTitleFilterData); });
   DDO_MATRICULAIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_MATRICULAIDContainer.addEventHandler("OnOptionClicked", this.e220r2_client);
   this.setUserControl(DDO_MATRICULAIDContainer);
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV85DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV85DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV85DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e230r2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110r2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV91Update",gxold:"OV91Update",gxvar:"AV91Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV91Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV91Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV91Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV92Delete",gxold:"OV92Delete",gxvar:"AV92Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV92Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV92Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV92Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV92Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULAID",row || gx.fn.currentGridRowImpl(44),gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PAGOMATRICULAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHAPAGO",gxz:"Z53PagoMatriculaFechaPago",gxold:"O53PagoMatriculaFechaPago",gxvar:"A53PagoMatriculaFechaPago",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULAFECHAPAGO",row || gx.fn.currentGridRowImpl(44),gx.O.A53PagoMatriculaFechaPago,0)},c2v:function(){if(this.val()!==undefined)gx.O.A53PagoMatriculaFechaPago=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PAGOMATRICULAFECHAPAGO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAFECHALIMITE",gxz:"Z54PagoMatriculaFechaLimite",gxold:"O54PagoMatriculaFechaLimite",gxvar:"A54PagoMatriculaFechaLimite",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULAFECHALIMITE",row || gx.fn.currentGridRowImpl(44),gx.O.A54PagoMatriculaFechaLimite,0)},c2v:function(){if(this.val()!==undefined)gx.O.A54PagoMatriculaFechaLimite=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PAGOMATRICULAFECHALIMITE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAESTADO",gxz:"Z55PagoMatriculaEstado",gxold:"O55PagoMatriculaEstado",gxvar:"A55PagoMatriculaEstado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A55PagoMatriculaEstado=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z55PagoMatriculaEstado=Value},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULAESTADO",row || gx.fn.currentGridRowImpl(44),gx.O.A55PagoMatriculaEstado,0)},c2v:function(){if(this.val()!==undefined)gx.O.A55PagoMatriculaEstado=this.val()},val:function(row){return gx.fn.getGridControlValue("PAGOMATRICULAESTADO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"svchar",len:200,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULADESCRIPCION",gxz:"Z56PagoMatriculaDescripcion",gxold:"O56PagoMatriculaDescripcion",gxvar:"A56PagoMatriculaDescripcion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A56PagoMatriculaDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z56PagoMatriculaDescripcion=Value},v2c:function(row){gx.fn.setGridControlValue("PAGOMATRICULADESCRIPCION",row || gx.fn.currentGridRowImpl(44),gx.O.A56PagoMatriculaDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A56PagoMatriculaDescripcion=this.val()},val:function(row){return gx.fn.getGridControlValue("PAGOMATRICULADESCRIPCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORMENSUAL",gxz:"Z57PagoMatriculaValorMensual",gxold:"O57PagoMatriculaValorMensual",gxvar:"A57PagoMatriculaValorMensual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z57PagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PAGOMATRICULAVALORMENSUAL",row || gx.fn.currentGridRowImpl(44),gx.O.A57PagoMatriculaValorMensual,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A57PagoMatriculaValorMensual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PAGOMATRICULAVALORMENSUAL",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[53]={ id:53 ,lvl:2,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAVALORTOTAL",gxz:"Z58PagoMatriculaValorTotal",gxold:"O58PagoMatriculaValorTotal",gxvar:"A58PagoMatriculaValorTotal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z58PagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("PAGOMATRICULAVALORTOTAL",row || gx.fn.currentGridRowImpl(44),gx.O.A58PagoMatriculaValorTotal,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A58PagoMatriculaValorTotal=this.val()},val:function(row){return gx.fn.getGridDecimalValue("PAGOMATRICULAVALORTOTAL",row || gx.fn.currentGridRowImpl(44),'.',',')},nac:gx.falseFn};
   GXValidFnc[54]={ id:54 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"USUARIOID",gxz:"Z59UsuarioId",gxold:"O59UsuarioId",gxvar:"A59UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A59UsuarioId=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z59UsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(44),gx.O.A59UsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A59UsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("USUARIOID",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[55]={ id:55 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MATRICULAID",row || gx.fn.currentGridRowImpl(44),gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MATRICULAID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_PagoMatriculaIdTitleControlIdToReplace",gxold:"OV48ddo_PagoMatriculaIdTitleControlIdToReplace",gxvar:"AV48ddo_PagoMatriculaIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_PagoMatriculaIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_PagoMatriculaIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_PagoMatriculaIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_PagoMatriculaIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE",gxz:"ZV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace",gxold:"OV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace",gxvar:"AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE",gx.O.AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace",gxold:"OV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace",gxvar:"AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE",gx.O.AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE",gxz:"ZV64ddo_PagoMatriculaEstadoTitleControlIdToReplace",gxold:"OV64ddo_PagoMatriculaEstadoTitleControlIdToReplace",gxvar:"AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV64ddo_PagoMatriculaEstadoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE",gx.O.AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE",gxz:"ZV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace",gxold:"OV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace",gxvar:"AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE",gx.O.AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE",gxz:"ZV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace",gxold:"OV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace",gxvar:"AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE",gx.O.AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE",gxz:"ZV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace",gxold:"OV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace",gxvar:"AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE",gx.O.AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_USUARIOIDTITLECONTROLIDTOREPLACE",gxz:"ZV80ddo_UsuarioIdTitleControlIdToReplace",gxold:"OV80ddo_UsuarioIdTitleControlIdToReplace",gxvar:"AV80ddo_UsuarioIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV80ddo_UsuarioIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV80ddo_UsuarioIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_USUARIOIDTITLECONTROLIDTOREPLACE",gx.O.AV80ddo_UsuarioIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV80ddo_UsuarioIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_USUARIOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE",gxz:"ZV84ddo_MatriculaIdTitleControlIdToReplace",gxold:"OV84ddo_MatriculaIdTitleControlIdToReplace",gxvar:"AV84ddo_MatriculaIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV84ddo_MatriculaIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV84ddo_MatriculaIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE",gx.O.AV84ddo_MatriculaIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV84ddo_MatriculaIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[87]={ id:87 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAID",gxz:"ZV46TFPagoMatriculaId",gxold:"OV46TFPagoMatriculaId",gxvar:"AV46TFPagoMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFPagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFPagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAID",gx.O.AV46TFPagoMatriculaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFPagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOMATRICULAID",'.')},nac:gx.falseFn};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAID_TO",gxz:"ZV47TFPagoMatriculaId_To",gxold:"OV47TFPagoMatriculaId_To",gxvar:"AV47TFPagoMatriculaId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFPagoMatriculaId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFPagoMatriculaId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAID_TO",gx.O.AV47TFPagoMatriculaId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFPagoMatriculaId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFPAGOMATRICULAID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[89]={ id:89 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagomatriculafechapago,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAFECHAPAGO",gxz:"ZV50TFPagoMatriculaFechaPago",gxold:"OV50TFPagoMatriculaFechaPago",gxvar:"AV50TFPagoMatriculaFechaPago",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[89],ip:[89],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFPagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFPagoMatriculaFechaPago=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAFECHAPAGO",gx.O.AV50TFPagoMatriculaFechaPago,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFPagoMatriculaFechaPago=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAFECHAPAGO")},nac:gx.falseFn};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagomatriculafechapago_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAFECHAPAGO_TO",gxz:"ZV51TFPagoMatriculaFechaPago_To",gxold:"OV51TFPagoMatriculaFechaPago_To",gxvar:"AV51TFPagoMatriculaFechaPago_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[90],ip:[90],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFPagoMatriculaFechaPago_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFPagoMatriculaFechaPago_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAFECHAPAGO_TO",gx.O.AV51TFPagoMatriculaFechaPago_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFPagoMatriculaFechaPago_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAFECHAPAGO_TO")},nac:gx.falseFn};
   GXValidFnc[91]={ id: 91, fld:"DDO_PAGOMATRICULAFECHAPAGOAUXDATES",grid:0};
   GXValidFnc[92]={ id:92 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagomatriculafechapagoauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHAPAGOAUXDATE",gxz:"ZV52DDO_PagoMatriculaFechaPagoAuxDate",gxold:"OV52DDO_PagoMatriculaFechaPagoAuxDate",gxvar:"AV52DDO_PagoMatriculaFechaPagoAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[92],ip:[92],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52DDO_PagoMatriculaFechaPagoAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV52DDO_PagoMatriculaFechaPagoAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHAPAGOAUXDATE",gx.O.AV52DDO_PagoMatriculaFechaPagoAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52DDO_PagoMatriculaFechaPagoAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHAPAGOAUXDATE")},nac:gx.falseFn};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagomatriculafechapagoauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHAPAGOAUXDATETO",gxz:"ZV53DDO_PagoMatriculaFechaPagoAuxDateTo",gxold:"OV53DDO_PagoMatriculaFechaPagoAuxDateTo",gxvar:"AV53DDO_PagoMatriculaFechaPagoAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[93],ip:[93],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV53DDO_PagoMatriculaFechaPagoAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV53DDO_PagoMatriculaFechaPagoAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHAPAGOAUXDATETO",gx.O.AV53DDO_PagoMatriculaFechaPagoAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV53DDO_PagoMatriculaFechaPagoAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHAPAGOAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagomatriculafechalimite,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAFECHALIMITE",gxz:"ZV56TFPagoMatriculaFechaLimite",gxold:"OV56TFPagoMatriculaFechaLimite",gxvar:"AV56TFPagoMatriculaFechaLimite",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[94],ip:[94],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56TFPagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV56TFPagoMatriculaFechaLimite=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAFECHALIMITE",gx.O.AV56TFPagoMatriculaFechaLimite,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56TFPagoMatriculaFechaLimite=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAFECHALIMITE")},nac:gx.falseFn};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfpagomatriculafechalimite_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAFECHALIMITE_TO",gxz:"ZV57TFPagoMatriculaFechaLimite_To",gxold:"OV57TFPagoMatriculaFechaLimite_To",gxvar:"AV57TFPagoMatriculaFechaLimite_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[95],ip:[95],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV57TFPagoMatriculaFechaLimite_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV57TFPagoMatriculaFechaLimite_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAFECHALIMITE_TO",gx.O.AV57TFPagoMatriculaFechaLimite_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV57TFPagoMatriculaFechaLimite_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAFECHALIMITE_TO")},nac:gx.falseFn};
   GXValidFnc[96]={ id: 96, fld:"DDO_PAGOMATRICULAFECHALIMITEAUXDATES",grid:0};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagomatriculafechalimiteauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHALIMITEAUXDATE",gxz:"ZV58DDO_PagoMatriculaFechaLimiteAuxDate",gxold:"OV58DDO_PagoMatriculaFechaLimiteAuxDate",gxvar:"AV58DDO_PagoMatriculaFechaLimiteAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[97],ip:[97],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58DDO_PagoMatriculaFechaLimiteAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV58DDO_PagoMatriculaFechaLimiteAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHALIMITEAUXDATE",gx.O.AV58DDO_PagoMatriculaFechaLimiteAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58DDO_PagoMatriculaFechaLimiteAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHALIMITEAUXDATE")},nac:gx.falseFn};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_pagomatriculafechalimiteauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_PAGOMATRICULAFECHALIMITEAUXDATETO",gxz:"ZV59DDO_PagoMatriculaFechaLimiteAuxDateTo",gxold:"OV59DDO_PagoMatriculaFechaLimiteAuxDateTo",gxvar:"AV59DDO_PagoMatriculaFechaLimiteAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[98],ip:[98],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV59DDO_PagoMatriculaFechaLimiteAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_PAGOMATRICULAFECHALIMITEAUXDATETO",gx.O.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_PAGOMATRICULAFECHALIMITEAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAESTADO",gxz:"ZV62TFPagoMatriculaEstado",gxold:"OV62TFPagoMatriculaEstado",gxvar:"AV62TFPagoMatriculaEstado",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFPagoMatriculaEstado=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFPagoMatriculaEstado=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAESTADO",gx.O.AV62TFPagoMatriculaEstado,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFPagoMatriculaEstado=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAESTADO")},nac:gx.falseFn};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAESTADO_SEL",gxz:"ZV63TFPagoMatriculaEstado_Sel",gxold:"OV63TFPagoMatriculaEstado_Sel",gxvar:"AV63TFPagoMatriculaEstado_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63TFPagoMatriculaEstado_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TFPagoMatriculaEstado_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULAESTADO_SEL",gx.O.AV63TFPagoMatriculaEstado_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63TFPagoMatriculaEstado_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULAESTADO_SEL")},nac:gx.falseFn};
   GXValidFnc[101]={ id:101 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULADESCRIPCION",gxz:"ZV66TFPagoMatriculaDescripcion",gxold:"OV66TFPagoMatriculaDescripcion",gxvar:"AV66TFPagoMatriculaDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66TFPagoMatriculaDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66TFPagoMatriculaDescripcion=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULADESCRIPCION",gx.O.AV66TFPagoMatriculaDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66TFPagoMatriculaDescripcion=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULADESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"svchar",len:200,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULADESCRIPCION_SEL",gxz:"ZV67TFPagoMatriculaDescripcion_Sel",gxold:"OV67TFPagoMatriculaDescripcion_Sel",gxvar:"AV67TFPagoMatriculaDescripcion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV67TFPagoMatriculaDescripcion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV67TFPagoMatriculaDescripcion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFPAGOMATRICULADESCRIPCION_SEL",gx.O.AV67TFPagoMatriculaDescripcion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV67TFPagoMatriculaDescripcion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFPAGOMATRICULADESCRIPCION_SEL")},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAVALORMENSUAL",gxz:"ZV70TFPagoMatriculaValorMensual",gxold:"OV70TFPagoMatriculaValorMensual",gxvar:"AV70TFPagoMatriculaValorMensual",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70TFPagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV70TFPagoMatriculaValorMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOMATRICULAVALORMENSUAL",gx.O.AV70TFPagoMatriculaValorMensual,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV70TFPagoMatriculaValorMensual=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOMATRICULAVALORMENSUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAVALORMENSUAL_TO",gxz:"ZV71TFPagoMatriculaValorMensual_To",gxold:"OV71TFPagoMatriculaValorMensual_To",gxvar:"AV71TFPagoMatriculaValorMensual_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV71TFPagoMatriculaValorMensual_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV71TFPagoMatriculaValorMensual_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOMATRICULAVALORMENSUAL_TO",gx.O.AV71TFPagoMatriculaValorMensual_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV71TFPagoMatriculaValorMensual_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOMATRICULAVALORMENSUAL_TO",'.',',')},nac:gx.falseFn};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAVALORTOTAL",gxz:"ZV74TFPagoMatriculaValorTotal",gxold:"OV74TFPagoMatriculaValorTotal",gxvar:"AV74TFPagoMatriculaValorTotal",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV74TFPagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV74TFPagoMatriculaValorTotal=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOMATRICULAVALORTOTAL",gx.O.AV74TFPagoMatriculaValorTotal,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV74TFPagoMatriculaValorTotal=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOMATRICULAVALORTOTAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFPAGOMATRICULAVALORTOTAL_TO",gxz:"ZV75TFPagoMatriculaValorTotal_To",gxold:"OV75TFPagoMatriculaValorTotal_To",gxvar:"AV75TFPagoMatriculaValorTotal_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV75TFPagoMatriculaValorTotal_To=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.ZV75TFPagoMatriculaValorTotal_To=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vTFPAGOMATRICULAVALORTOTAL_TO",gx.O.AV75TFPagoMatriculaValorTotal_To,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.AV75TFPagoMatriculaValorTotal_To=this.val()},val:function(){return gx.fn.getDecimalValue("vTFPAGOMATRICULAVALORTOTAL_TO",'.',',')},nac:gx.falseFn};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFUSUARIOID",gxz:"ZV78TFUsuarioId",gxold:"OV78TFUsuarioId",gxvar:"AV78TFUsuarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV78TFUsuarioId=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV78TFUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vTFUSUARIOID",gx.O.AV78TFUsuarioId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV78TFUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vTFUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFUSUARIOID_SEL",gxz:"ZV79TFUsuarioId_Sel",gxold:"OV79TFUsuarioId_Sel",gxvar:"AV79TFUsuarioId_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV79TFUsuarioId_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV79TFUsuarioId_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFUSUARIOID_SEL",gx.O.AV79TFUsuarioId_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV79TFUsuarioId_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFUSUARIOID_SEL")},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAID",gxz:"ZV82TFMatriculaId",gxold:"OV82TFMatriculaId",gxvar:"AV82TFMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV82TFMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV82TFMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAID",gx.O.AV82TFMatriculaId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV82TFMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFMATRICULAID",'.')},nac:gx.falseFn};
   GXValidFnc[110]={ id:110 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFMATRICULAID_TO",gxz:"ZV83TFMatriculaId_To",gxold:"OV83TFMatriculaId_To",gxvar:"AV83TFMatriculaId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83TFMatriculaId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV83TFMatriculaId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFMATRICULAID_TO",gx.O.AV83TFMatriculaId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV83TFMatriculaId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFMATRICULAID_TO",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV91Update = "" ;
   this.OV91Update = "" ;
   this.ZV92Delete = "" ;
   this.OV92Delete = "" ;
   this.Z33PagoMatriculaId = 0 ;
   this.O33PagoMatriculaId = 0 ;
   this.Z53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.O53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.Z54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.O54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.Z55PagoMatriculaEstado = "" ;
   this.O55PagoMatriculaEstado = "" ;
   this.Z56PagoMatriculaDescripcion = "" ;
   this.O56PagoMatriculaDescripcion = "" ;
   this.Z57PagoMatriculaValorMensual = 0 ;
   this.O57PagoMatriculaValorMensual = 0 ;
   this.Z58PagoMatriculaValorTotal = 0 ;
   this.O58PagoMatriculaValorTotal = 0 ;
   this.Z59UsuarioId = "" ;
   this.O59UsuarioId = "" ;
   this.Z27MatriculaId = 0 ;
   this.O27MatriculaId = 0 ;
   this.AV48ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.OV48ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace = "" ;
   this.ZV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace = "" ;
   this.OV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace = "" ;
   this.AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace = "" ;
   this.ZV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace = "" ;
   this.OV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace = "" ;
   this.AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace = "" ;
   this.ZV64ddo_PagoMatriculaEstadoTitleControlIdToReplace = "" ;
   this.OV64ddo_PagoMatriculaEstadoTitleControlIdToReplace = "" ;
   this.AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace = "" ;
   this.ZV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace = "" ;
   this.OV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace = "" ;
   this.AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace = "" ;
   this.ZV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace = "" ;
   this.OV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace = "" ;
   this.AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace = "" ;
   this.ZV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace = "" ;
   this.OV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace = "" ;
   this.AV80ddo_UsuarioIdTitleControlIdToReplace = "" ;
   this.ZV80ddo_UsuarioIdTitleControlIdToReplace = "" ;
   this.OV80ddo_UsuarioIdTitleControlIdToReplace = "" ;
   this.AV84ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.ZV84ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.OV84ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPagoMatriculaId = 0 ;
   this.ZV46TFPagoMatriculaId = 0 ;
   this.OV46TFPagoMatriculaId = 0 ;
   this.AV47TFPagoMatriculaId_To = 0 ;
   this.ZV47TFPagoMatriculaId_To = 0 ;
   this.OV47TFPagoMatriculaId_To = 0 ;
   this.AV50TFPagoMatriculaFechaPago = gx.date.nullDate() ;
   this.ZV50TFPagoMatriculaFechaPago = gx.date.nullDate() ;
   this.OV50TFPagoMatriculaFechaPago = gx.date.nullDate() ;
   this.AV51TFPagoMatriculaFechaPago_To = gx.date.nullDate() ;
   this.ZV51TFPagoMatriculaFechaPago_To = gx.date.nullDate() ;
   this.OV51TFPagoMatriculaFechaPago_To = gx.date.nullDate() ;
   this.AV52DDO_PagoMatriculaFechaPagoAuxDate = gx.date.nullDate() ;
   this.ZV52DDO_PagoMatriculaFechaPagoAuxDate = gx.date.nullDate() ;
   this.OV52DDO_PagoMatriculaFechaPagoAuxDate = gx.date.nullDate() ;
   this.AV53DDO_PagoMatriculaFechaPagoAuxDateTo = gx.date.nullDate() ;
   this.ZV53DDO_PagoMatriculaFechaPagoAuxDateTo = gx.date.nullDate() ;
   this.OV53DDO_PagoMatriculaFechaPagoAuxDateTo = gx.date.nullDate() ;
   this.AV56TFPagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.ZV56TFPagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.OV56TFPagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.AV57TFPagoMatriculaFechaLimite_To = gx.date.nullDate() ;
   this.ZV57TFPagoMatriculaFechaLimite_To = gx.date.nullDate() ;
   this.OV57TFPagoMatriculaFechaLimite_To = gx.date.nullDate() ;
   this.AV58DDO_PagoMatriculaFechaLimiteAuxDate = gx.date.nullDate() ;
   this.ZV58DDO_PagoMatriculaFechaLimiteAuxDate = gx.date.nullDate() ;
   this.OV58DDO_PagoMatriculaFechaLimiteAuxDate = gx.date.nullDate() ;
   this.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo = gx.date.nullDate() ;
   this.ZV59DDO_PagoMatriculaFechaLimiteAuxDateTo = gx.date.nullDate() ;
   this.OV59DDO_PagoMatriculaFechaLimiteAuxDateTo = gx.date.nullDate() ;
   this.AV62TFPagoMatriculaEstado = "" ;
   this.ZV62TFPagoMatriculaEstado = "" ;
   this.OV62TFPagoMatriculaEstado = "" ;
   this.AV63TFPagoMatriculaEstado_Sel = "" ;
   this.ZV63TFPagoMatriculaEstado_Sel = "" ;
   this.OV63TFPagoMatriculaEstado_Sel = "" ;
   this.AV66TFPagoMatriculaDescripcion = "" ;
   this.ZV66TFPagoMatriculaDescripcion = "" ;
   this.OV66TFPagoMatriculaDescripcion = "" ;
   this.AV67TFPagoMatriculaDescripcion_Sel = "" ;
   this.ZV67TFPagoMatriculaDescripcion_Sel = "" ;
   this.OV67TFPagoMatriculaDescripcion_Sel = "" ;
   this.AV70TFPagoMatriculaValorMensual = 0 ;
   this.ZV70TFPagoMatriculaValorMensual = 0 ;
   this.OV70TFPagoMatriculaValorMensual = 0 ;
   this.AV71TFPagoMatriculaValorMensual_To = 0 ;
   this.ZV71TFPagoMatriculaValorMensual_To = 0 ;
   this.OV71TFPagoMatriculaValorMensual_To = 0 ;
   this.AV74TFPagoMatriculaValorTotal = 0 ;
   this.ZV74TFPagoMatriculaValorTotal = 0 ;
   this.OV74TFPagoMatriculaValorTotal = 0 ;
   this.AV75TFPagoMatriculaValorTotal_To = 0 ;
   this.ZV75TFPagoMatriculaValorTotal_To = 0 ;
   this.OV75TFPagoMatriculaValorTotal_To = 0 ;
   this.AV78TFUsuarioId = "" ;
   this.ZV78TFUsuarioId = "" ;
   this.OV78TFUsuarioId = "" ;
   this.AV79TFUsuarioId_Sel = "" ;
   this.ZV79TFUsuarioId_Sel = "" ;
   this.OV79TFUsuarioId_Sel = "" ;
   this.AV82TFMatriculaId = 0 ;
   this.ZV82TFMatriculaId = 0 ;
   this.OV82TFMatriculaId = 0 ;
   this.AV83TFMatriculaId_To = 0 ;
   this.ZV83TFMatriculaId_To = 0 ;
   this.OV83TFMatriculaId_To = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV87GridCurrentPage = 0 ;
   this.AV85DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_PagoMatriculaIdTitleControlIdToReplace = "" ;
   this.AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace = "" ;
   this.AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace = "" ;
   this.AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace = "" ;
   this.AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace = "" ;
   this.AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace = "" ;
   this.AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace = "" ;
   this.AV80ddo_UsuarioIdTitleControlIdToReplace = "" ;
   this.AV84ddo_MatriculaIdTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFPagoMatriculaId = 0 ;
   this.AV47TFPagoMatriculaId_To = 0 ;
   this.AV50TFPagoMatriculaFechaPago = gx.date.nullDate() ;
   this.AV51TFPagoMatriculaFechaPago_To = gx.date.nullDate() ;
   this.AV52DDO_PagoMatriculaFechaPagoAuxDate = gx.date.nullDate() ;
   this.AV53DDO_PagoMatriculaFechaPagoAuxDateTo = gx.date.nullDate() ;
   this.AV56TFPagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.AV57TFPagoMatriculaFechaLimite_To = gx.date.nullDate() ;
   this.AV58DDO_PagoMatriculaFechaLimiteAuxDate = gx.date.nullDate() ;
   this.AV59DDO_PagoMatriculaFechaLimiteAuxDateTo = gx.date.nullDate() ;
   this.AV62TFPagoMatriculaEstado = "" ;
   this.AV63TFPagoMatriculaEstado_Sel = "" ;
   this.AV66TFPagoMatriculaDescripcion = "" ;
   this.AV67TFPagoMatriculaDescripcion_Sel = "" ;
   this.AV70TFPagoMatriculaValorMensual = 0 ;
   this.AV71TFPagoMatriculaValorMensual_To = 0 ;
   this.AV74TFPagoMatriculaValorTotal = 0 ;
   this.AV75TFPagoMatriculaValorTotal_To = 0 ;
   this.AV78TFUsuarioId = "" ;
   this.AV79TFUsuarioId_Sel = "" ;
   this.AV82TFMatriculaId = 0 ;
   this.AV83TFMatriculaId_To = 0 ;
   this.AV91Update = "" ;
   this.AV92Delete = "" ;
   this.A33PagoMatriculaId = 0 ;
   this.A53PagoMatriculaFechaPago = gx.date.nullDate() ;
   this.A54PagoMatriculaFechaLimite = gx.date.nullDate() ;
   this.A55PagoMatriculaEstado = "" ;
   this.A56PagoMatriculaDescripcion = "" ;
   this.A57PagoMatriculaValorMensual = 0 ;
   this.A58PagoMatriculaValorTotal = 0 ;
   this.A59UsuarioId = "" ;
   this.A27MatriculaId = 0 ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV115Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120r2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130r2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140r2_client": ["DDO_PAGOMATRICULAID.ONOPTIONCLICKED", true] ,"e150r2_client": ["DDO_PAGOMATRICULAFECHAPAGO.ONOPTIONCLICKED", true] ,"e160r2_client": ["DDO_PAGOMATRICULAFECHALIMITE.ONOPTIONCLICKED", true] ,"e170r2_client": ["DDO_PAGOMATRICULAESTADO.ONOPTIONCLICKED", true] ,"e180r2_client": ["DDO_PAGOMATRICULADESCRIPCION.ONOPTIONCLICKED", true] ,"e190r2_client": ["DDO_PAGOMATRICULAVALORMENSUAL.ONOPTIONCLICKED", true] ,"e200r2_client": ["DDO_PAGOMATRICULAVALORTOTAL.ONOPTIONCLICKED", true] ,"e210r2_client": ["DDO_USUARIOID.ONOPTIONCLICKED", true] ,"e220r2_client": ["DDO_MATRICULAID.ONOPTIONCLICKED", true] ,"e230r2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110r2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e240r2_client": ["'DOINSERT'", true] ,"e250r2_client": ["'DOEXPORT'", true] ,"e260r2_client": ["'DOEXPORTREPORT'", true] ,"e300r2_client": ["ENTER", true] ,"e310r2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAID","Visible")',ctrl:'vTFPAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAID_TO","Visible")',ctrl:'vTFPAGOMATRICULAID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAFECHAPAGO","Visible")',ctrl:'vTFPAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAFECHAPAGO_TO","Visible")',ctrl:'vTFPAGOMATRICULAFECHAPAGO_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAFECHALIMITE","Visible")',ctrl:'vTFPAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAFECHALIMITE_TO","Visible")',ctrl:'vTFPAGOMATRICULAFECHALIMITE_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAESTADO","Visible")',ctrl:'vTFPAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAESTADO_SEL","Visible")',ctrl:'vTFPAGOMATRICULAESTADO_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULADESCRIPCION","Visible")',ctrl:'vTFPAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULADESCRIPCION_SEL","Visible")',ctrl:'vTFPAGOMATRICULADESCRIPCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'vTFPAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAVALORMENSUAL_TO","Visible")',ctrl:'vTFPAGOMATRICULAVALORMENSUAL_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAVALORTOTAL","Visible")',ctrl:'vTFPAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFPAGOMATRICULAVALORTOTAL_TO","Visible")',ctrl:'vTFPAGOMATRICULAVALORTOTAL_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFUSUARIOID","Visible")',ctrl:'vTFUSUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFUSUARIOID_SEL","Visible")',ctrl:'vTFUSUARIOID_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAID","Visible")',ctrl:'vTFMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFMATRICULAID_TO","Visible")',ctrl:'vTFMATRICULAID_TO',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAIDContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'TitleControlIdToReplace'},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'TitleControlIdToReplace'},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'TitleControlIdToReplace'},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'TitleControlIdToReplace'},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'TitleControlIdToReplace'},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.TitleControlIdToReplace',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'TitleControlIdToReplace'},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_USUARIOIDContainer.TitleControlIdToReplace',ctrl:'DDO_USUARIOID',prop:'TitleControlIdToReplace'},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_USUARIOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_MATRICULAIDContainer.TitleControlIdToReplace',ctrl:'DDO_MATRICULAID',prop:'TitleControlIdToReplace'},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV85DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'this.DDO_USUARIOIDContainer.SelectedValue_set',ctrl:'DDO_USUARIOID',prop:'SelectedValue_set'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'this.DDO_USUARIOIDContainer.FilteredText_set',ctrl:'DDO_USUARIOID',prop:'FilteredText_set'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredTextTo_set'},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredTextTo_set'},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SelectedValue_set'},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'FilteredText_set'},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SelectedValue_set'},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'FilteredText_set'},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredTextTo_set'},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_PAGOMATRICULAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAID',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAFECHAPAGO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAFECHALIMITE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAESTADO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_get',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULADESCRIPCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_get',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAVALORMENSUAL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_PAGOMATRICULAVALORTOTAL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.ActiveEventKey',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'ActiveEventKey'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_get',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredText_get'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_get',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_USUARIOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_USUARIOIDContainer.ActiveEventKey',ctrl:'DDO_USUARIOID',prop:'ActiveEventKey'},{av:'this.DDO_USUARIOIDContainer.FilteredText_get',ctrl:'DDO_USUARIOID',prop:'FilteredText_get'},{av:'this.DDO_USUARIOIDContainer.SelectedValue_get',ctrl:'DDO_USUARIOID',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MATRICULAID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MATRICULAIDContainer.ActiveEventKey',ctrl:'DDO_MATRICULAID',prop:'ActiveEventKey'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_get',ctrl:'DDO_MATRICULAID',prop:'FilteredText_get'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_get',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A33PagoMatriculaId',fld:'PAGOMATRICULAID',pic:'ZZZ9',hsh:true}],[{av:'AV91Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV92Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Link")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_PagoMatriculaIdTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV54ddo_PagoMatriculaFechaPagoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHAPAGOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_PagoMatriculaFechaLimiteTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAFECHALIMITETITLECONTROLIDTOREPLACE',pic:''},{av:'AV64ddo_PagoMatriculaEstadoTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAESTADOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV68ddo_PagoMatriculaDescripcionTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULADESCRIPCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV72ddo_PagoMatriculaValorMensualTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORMENSUALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV76ddo_PagoMatriculaValorTotalTitleControlIdToReplace',fld:'vDDO_PAGOMATRICULAVALORTOTALTITLECONTROLIDTOREPLACE',pic:''},{av:'AV80ddo_UsuarioIdTitleControlIdToReplace',fld:'vDDO_USUARIOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV84ddo_MatriculaIdTitleControlIdToReplace',fld:'vDDO_MATRICULAIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredText_set'},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredTextTo_set'},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredText_set'},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredTextTo_set'},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'FilteredText_set'},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SelectedValue_set'},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'FilteredText_set'},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SelectedValue_set'},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredText_set'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredTextTo_set'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredText_set'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredTextTo_set'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'this.DDO_USUARIOIDContainer.FilteredText_set',ctrl:'DDO_USUARIOID',prop:'FilteredText_set'},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'this.DDO_USUARIOIDContainer.SelectedValue_set',ctrl:'DDO_USUARIOID',prop:'SelectedValue_set'},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV45PagoMatriculaIdTitleFilterData',fld:'vPAGOMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV49PagoMatriculaFechaPagoTitleFilterData',fld:'vPAGOMATRICULAFECHAPAGOTITLEFILTERDATA',pic:''},{av:'AV55PagoMatriculaFechaLimiteTitleFilterData',fld:'vPAGOMATRICULAFECHALIMITETITLEFILTERDATA',pic:''},{av:'AV61PagoMatriculaEstadoTitleFilterData',fld:'vPAGOMATRICULAESTADOTITLEFILTERDATA',pic:''},{av:'AV65PagoMatriculaDescripcionTitleFilterData',fld:'vPAGOMATRICULADESCRIPCIONTITLEFILTERDATA',pic:''},{av:'AV69PagoMatriculaValorMensualTitleFilterData',fld:'vPAGOMATRICULAVALORMENSUALTITLEFILTERDATA',pic:''},{av:'AV73PagoMatriculaValorTotalTitleFilterData',fld:'vPAGOMATRICULAVALORTOTALTITLEFILTERDATA',pic:''},{av:'AV77UsuarioIdTitleFilterData',fld:'vUSUARIOIDTITLEFILTERDATA',pic:''},{av:'AV81MatriculaIdTitleFilterData',fld:'vMATRICULAIDTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Visible")',ctrl:'PAGOMATRICULAID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Visible")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Visible")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Visible")',ctrl:'PAGOMATRICULAESTADO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Visible")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Visible")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Visible")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("USUARIOID","Visible")',ctrl:'USUARIOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Visible")',ctrl:'MATRICULAID',prop:'Visible'},{ctrl:'PAGOMATRICULAID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAID","Title")',ctrl:'PAGOMATRICULAID',prop:'Title'},{ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHAPAGO","Title")',ctrl:'PAGOMATRICULAFECHAPAGO',prop:'Title'},{ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAFECHALIMITE","Title")',ctrl:'PAGOMATRICULAFECHALIMITE',prop:'Title'},{ctrl:'PAGOMATRICULAESTADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAESTADO","Title")',ctrl:'PAGOMATRICULAESTADO',prop:'Title'},{ctrl:'PAGOMATRICULADESCRIPCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULADESCRIPCION","Title")',ctrl:'PAGOMATRICULADESCRIPCION',prop:'Title'},{ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORMENSUAL","Title")',ctrl:'PAGOMATRICULAVALORMENSUAL',prop:'Title'},{ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PAGOMATRICULAVALORTOTAL","Title")',ctrl:'PAGOMATRICULAVALORTOTAL',prop:'Title'},{ctrl:'USUARIOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("USUARIOID","Title")',ctrl:'USUARIOID',prop:'Title'},{ctrl:'MATRICULAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("MATRICULAID","Title")',ctrl:'MATRICULAID',prop:'Title'},{av:'AV87GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV88GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A33PagoMatriculaId',fld:'PAGOMATRICULAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'this.DDO_USUARIOIDContainer.SelectedValue_set',ctrl:'DDO_USUARIOID',prop:'SelectedValue_set'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'this.DDO_USUARIOIDContainer.FilteredText_set',ctrl:'DDO_USUARIOID',prop:'FilteredText_set'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredTextTo_set'},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredTextTo_set'},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SelectedValue_set'},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'FilteredText_set'},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SelectedValue_set'},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'FilteredText_set'},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredTextTo_set'},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV115Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_MATRICULAIDContainer.SortedStatus',ctrl:'DDO_MATRICULAID',prop:'SortedStatus'},{av:'this.DDO_USUARIOIDContainer.SortedStatus',ctrl:'DDO_USUARIOID',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'SortedStatus'},{av:'this.DDO_PAGOMATRICULAIDContainer.SortedStatus',ctrl:'DDO_PAGOMATRICULAID',prop:'SortedStatus'},{av:'AV82TFMatriculaId',fld:'vTFMATRICULAID',pic:'ZZZ9'},{av:'AV83TFMatriculaId_To',fld:'vTFMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_MATRICULAIDContainer.FilteredText_set',ctrl:'DDO_MATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_MATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_MATRICULAID',prop:'FilteredTextTo_set'},{av:'AV79TFUsuarioId_Sel',fld:'vTFUSUARIOID_SEL',pic:''},{av:'this.DDO_USUARIOIDContainer.SelectedValue_set',ctrl:'DDO_USUARIOID',prop:'SelectedValue_set'},{av:'AV78TFUsuarioId',fld:'vTFUSUARIOID',pic:''},{av:'this.DDO_USUARIOIDContainer.FilteredText_set',ctrl:'DDO_USUARIOID',prop:'FilteredText_set'},{av:'AV74TFPagoMatriculaValorTotal',fld:'vTFPAGOMATRICULAVALORTOTAL',pic:'ZZZZ9.99'},{av:'AV75TFPagoMatriculaValorTotal_To',fld:'vTFPAGOMATRICULAVALORTOTAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORTOTALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORTOTAL',prop:'FilteredTextTo_set'},{av:'AV70TFPagoMatriculaValorMensual',fld:'vTFPAGOMATRICULAVALORMENSUAL',pic:'ZZZZ9.99'},{av:'AV71TFPagoMatriculaValorMensual_To',fld:'vTFPAGOMATRICULAVALORMENSUAL_TO',pic:'ZZZZ9.99'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAVALORMENSUALContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAVALORMENSUAL',prop:'FilteredTextTo_set'},{av:'AV67TFPagoMatriculaDescripcion_Sel',fld:'vTFPAGOMATRICULADESCRIPCION_SEL',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'SelectedValue_set'},{av:'AV66TFPagoMatriculaDescripcion',fld:'vTFPAGOMATRICULADESCRIPCION',pic:''},{av:'this.DDO_PAGOMATRICULADESCRIPCIONContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULADESCRIPCION',prop:'FilteredText_set'},{av:'AV63TFPagoMatriculaEstado_Sel',fld:'vTFPAGOMATRICULAESTADO_SEL',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.SelectedValue_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'SelectedValue_set'},{av:'AV62TFPagoMatriculaEstado',fld:'vTFPAGOMATRICULAESTADO',pic:''},{av:'this.DDO_PAGOMATRICULAESTADOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAESTADO',prop:'FilteredText_set'},{av:'AV56TFPagoMatriculaFechaLimite',fld:'vTFPAGOMATRICULAFECHALIMITE',pic:''},{av:'AV57TFPagoMatriculaFechaLimite_To',fld:'vTFPAGOMATRICULAFECHALIMITE_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHALIMITEContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHALIMITE',prop:'FilteredTextTo_set'},{av:'AV50TFPagoMatriculaFechaPago',fld:'vTFPAGOMATRICULAFECHAPAGO',pic:''},{av:'AV51TFPagoMatriculaFechaPago_To',fld:'vTFPAGOMATRICULAFECHAPAGO_TO',pic:''},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAFECHAPAGOContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAFECHAPAGO',prop:'FilteredTextTo_set'},{av:'AV46TFPagoMatriculaId',fld:'vTFPAGOMATRICULAID',pic:'ZZZ9'},{av:'AV47TFPagoMatriculaId_To',fld:'vTFPAGOMATRICULAID_TO',pic:'ZZZ9'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredText_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredText_set'},{av:'this.DDO_PAGOMATRICULAIDContainer.FilteredTextTo_set',ctrl:'DDO_PAGOMATRICULAID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV115Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV115Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV115Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[85]);
   GridContainer.addRefreshingVar(this.GXValidFnc[87]);
   GridContainer.addRefreshingVar(this.GXValidFnc[88]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
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
   GridContainer.addRefreshingVar({rfrVar:"AV115Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.pagomatriculaww);});
