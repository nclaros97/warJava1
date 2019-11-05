/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:20:14.49
*/
gx.evt.autoSkip = false;
gx.define('academia.alumnoww', false, function () {
   this.ServerClass =  "academia.alumnoww" ;
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
      this.AV121Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.AV10GridState=gx.fn.getControlValue("vGRIDSTATE") ;
      this.AV30ColumnsSelector=gx.fn.getControlValue("vCOLUMNSSELECTOR") ;
      this.AV121Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Validv_Tfalumnoemail=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFALUMNOEMAIL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV58TFAlumnoEmail, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV58TFAlumnoEmail)) ) )
         {
            try {
               gxballoon.setError("El valor de TFAlumno Email no coincide con el patrón especificado");
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
   this.Validv_Tfalumnoemail_sel=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFALUMNOEMAIL_SEL");
         this.AnyError  = 0;
         if ( ! ( gx.util.regExp.isMatch(this.AV59TFAlumnoEmail_Sel, "^((\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*)|(\\s*))$") || ((''==this.AV59TFAlumnoEmail_Sel)) ) )
         {
            try {
               gxballoon.setError("El valor de TFAlumno Email_Sel no coincide con el patrón especificado");
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
   this.Validv_Tfalumnofechanacimiento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFALUMNOFECHANACIMIENTO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV62TFAlumnoFechaNacimiento)==0) || new gx.date.gxdate( this.AV62TFAlumnoFechaNacimiento ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFAlumno Fecha Nacimiento fuera de rango");
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
   this.Validv_Tfalumnofechanacimiento_to=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTFALUMNOFECHANACIMIENTO_TO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV63TFAlumnoFechaNacimiento_To)==0) || new gx.date.gxdate( this.AV63TFAlumnoFechaNacimiento_To ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo TFAlumno Fecha Nacimiento_To fuera de rango");
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
   this.Validv_Ddo_alumnofechanacimientoauxdate=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_ALUMNOFECHANACIMIENTOAUXDATE");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV64DDO_AlumnoFechaNacimientoAuxDate)==0) || new gx.date.gxdate( this.AV64DDO_AlumnoFechaNacimientoAuxDate ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Alumno Fecha Nacimiento Aux Date fuera de rango");
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
   this.Validv_Ddo_alumnofechanacimientoauxdateto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vDDO_ALUMNOFECHANACIMIENTOAUXDATETO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.AV65DDO_AlumnoFechaNacimientoAuxDateTo)==0) || new gx.date.gxdate( this.AV65DDO_AlumnoFechaNacimientoAuxDateTo ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo DDO_Alumno Fecha Nacimiento Aux Date To fuera de rango");
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
         this.DDO_ALUMNOIDContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 3 )
      {
         this.DDO_ALUMNOIDENTIDADContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 1 )
      {
         this.DDO_ALUMNONOMBREContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 4 )
      {
         this.DDO_ALUMNOTELEFONOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 5 )
      {
         this.DDO_ALUMNOEMAILContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 6 )
      {
         this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 7 )
      {
         this.DDO_ALUMNODIRECCIONContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 8 )
      {
         this.DDO_ALUMNOFACEBOOKContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 9 )
      {
         this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 10 )
      {
         this.DDO_ALUMNOACTIVOContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
      else if ( this.AV12OrderedBy == 11 )
      {
         this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus =  (this.AV13OrderedDsc ? "DSC" : "ASC")  ;
      }
   };
   this.s172_client=function()
   {
      this.DDO_ALUMNOIDContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOIDENTIDADContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNONOMBREContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOTELEFONOContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOEMAILContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNODIRECCIONContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOFACEBOOKContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOACTIVOContainer.SortedStatus =  ""  ;
      this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus =  ""  ;
   };
   this.s182_client=function()
   {
      this.AV15FilterFullText =  ''  ;
      this.AV46TFAlumnoId = gx.num.trunc( 0 ,0) ;
      this.DDO_ALUMNOIDContainer.FilteredText_set =  ""  ;
      this.AV47TFAlumnoId_To = gx.num.trunc( 0 ,0) ;
      this.DDO_ALUMNOIDContainer.FilteredTextTo_set =  ""  ;
      this.AV83TFAlumnoIdentidad =  ''  ;
      this.DDO_ALUMNOIDENTIDADContainer.FilteredText_set =  ""  ;
      this.AV84TFAlumnoIdentidad_Sel =  ''  ;
      this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_set =  ""  ;
      this.AV50TFAlumnoNombre =  ''  ;
      this.DDO_ALUMNONOMBREContainer.FilteredText_set =  ""  ;
      this.AV51TFAlumnoNombre_Sel =  ''  ;
      this.DDO_ALUMNONOMBREContainer.SelectedValue_set =  ""  ;
      this.AV54TFAlumnoTelefono =  ''  ;
      this.DDO_ALUMNOTELEFONOContainer.FilteredText_set =  ""  ;
      this.AV55TFAlumnoTelefono_Sel =  ''  ;
      this.DDO_ALUMNOTELEFONOContainer.SelectedValue_set =  ""  ;
      this.AV58TFAlumnoEmail =  ''  ;
      this.DDO_ALUMNOEMAILContainer.FilteredText_set =  ""  ;
      this.AV59TFAlumnoEmail_Sel =  ''  ;
      this.DDO_ALUMNOEMAILContainer.SelectedValue_set =  ""  ;
      this.AV62TFAlumnoFechaNacimiento =  ''  ;
      this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_set =  ""  ;
      this.AV63TFAlumnoFechaNacimiento_To =  ''  ;
      this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_set =  ""  ;
      this.AV68TFAlumnoDireccion =  ''  ;
      this.DDO_ALUMNODIRECCIONContainer.FilteredText_set =  ""  ;
      this.AV69TFAlumnoDireccion_Sel =  ''  ;
      this.DDO_ALUMNODIRECCIONContainer.SelectedValue_set =  ""  ;
      this.AV87TFAlumnoFacebook =  ''  ;
      this.DDO_ALUMNOFACEBOOKContainer.FilteredText_set =  ""  ;
      this.AV88TFAlumnoFacebook_Sel =  ''  ;
      this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_set =  ""  ;
      this.AV91TFAlumnoInstagram =  ''  ;
      this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_set =  ""  ;
      this.AV92TFAlumnoInstagram_Sel =  ''  ;
      this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_set =  ""  ;
      this.AV72TFAlumnoActivo_Sel = gx.num.trunc( 0 ,0) ;
      this.DDO_ALUMNOACTIVOContainer.SelectedValue_set =  ""  ;
      this.AV95TFAlumnoAcuerdoFotografias_Sel = gx.num.trunc( 0 ,0) ;
      this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_set =  ""  ;
   };
   this.e120j2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e130j2_client=function()
   {
      return this.executeServerEvent("GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e140j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOID.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e150j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOIDENTIDAD.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e160j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNONOMBRE.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e170j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOTELEFONO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e180j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOEMAIL.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e190j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOFECHANACIMIENTO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e200j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNODIRECCION.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e210j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOFACEBOOK.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e220j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOINSTAGRAM.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e230j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOACTIVO.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e240j2_client=function()
   {
      return this.executeServerEvent("DDO_ALUMNOACUERDOFOTOGRAFIAS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e250j2_client=function()
   {
      return this.executeServerEvent("DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", false, null, true, true);
   };
   this.e110j2_client=function()
   {
      return this.executeServerEvent("DDO_MANAGEFILTERS.ONOPTIONCLICKED", false, null, true, true);
   };
   this.e260j2_client=function()
   {
      return this.executeServerEvent("'DOINSERT'", false, null, false, false);
   };
   this.e270j2_client=function()
   {
      return this.executeServerEvent("'DOEXPORT'", false, null, false, false);
   };
   this.e280j2_client=function()
   {
      return this.executeServerEvent("'DOEXPORTREPORT'", false, null, false, false);
   };
   this.e320j2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e330j2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,28,31,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,64,66,68,70,72,74,76,78,80,82,84,86,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115];
   this.GXLastCtrlId =115;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",44,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"academia.alumnoww",[],false,1,false,true,0,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit("Update",45,"vUPDATE","","Modificar","Update","char",0,"px",20,20,"left",null,[],"Update","Update",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit("Delete",46,"vDELETE","","Eliminar","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",true,0,false,false,"Attribute",1,"WWIconActionColumn");
   GridContainer.addSingleLineEdit(1,47,"ALUMNOID","","","AlumnoId","int",0,"px",4,4,"right",null,[],1,"AlumnoId",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(7,48,"ALUMNOIDENTIDAD","","","AlumnoIdentidad","char",0,"px",20,20,"left",null,[],7,"AlumnoIdentidad",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(2,49,"ALUMNONOMBRE","","","AlumnoNombre","char",0,"px",50,50,"left",null,[],2,"AlumnoNombre",true,0,false,false,"Attribute",1,"WWColumn");
   GridContainer.addSingleLineEdit(3,50,"ALUMNOTELEFONO","","","AlumnoTelefono","char",0,"px",20,20,"left",null,[],3,"AlumnoTelefono",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(4,51,"ALUMNOEMAIL","","","AlumnoEmail","svchar",0,"px",100,80,"left",null,[],4,"AlumnoEmail",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(5,52,"ALUMNOFECHANACIMIENTO","","","AlumnoFechaNacimiento","date",0,"px",8,8,"right",null,[],5,"AlumnoFechaNacimiento",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(6,53,"ALUMNODIRECCION","","","AlumnoDireccion","char",0,"px",256,80,"left",null,[],6,"AlumnoDireccion",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(8,54,"ALUMNOFACEBOOK","","","AlumnoFacebook","char",0,"px",50,50,"left",null,[],8,"AlumnoFacebook",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addSingleLineEdit(9,55,"ALUMNOINSTAGRAM","","","AlumnoInstagram","char",0,"px",50,50,"left",null,[],9,"AlumnoInstagram",true,0,false,false,"Attribute",1,"WWColumn hidden-xs");
   GridContainer.addCheckBox(76,56,"ALUMNOACTIVO","","","AlumnoActivo","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   GridContainer.addCheckBox(113,57,"ALUMNOACUERDOFOTOGRAFIAS","","","AlumnoAcuerdoFotografias","boolean","true","false",null,true,false,0,"px","WWColumn hidden-xs");
   this.GridContainer.emptyText = "";
   this.setGrid(GridContainer);
   this.GRIDPAGINATIONBARContainer = gx.uc.getNew(this, 61, 35, "DVelop_DVPaginationBar", "GRIDPAGINATIONBARContainer", "Gridpaginationbar", "GRIDPAGINATIONBAR");
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
   GRIDPAGINATIONBARContainer.addV2CFunction('AV76GridCurrentPage', "vGRIDCURRENTPAGE", 'SetCurrentPage');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV76GridCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDCURRENTPAGE",UC.ParentObject.AV76GridCurrentPage); });
   GRIDPAGINATIONBARContainer.addV2CFunction('AV77GridPageCount', "vGRIDPAGECOUNT", 'SetPageCount');
   GRIDPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV77GridPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDPAGECOUNT",UC.ParentObject.AV77GridPageCount); });
   GRIDPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDPAGINATIONBARContainer.addEventHandler("ChangePage", this.e120j2_client);
   GRIDPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e130j2_client);
   this.setUserControl(GRIDPAGINATIONBARContainer);
   this.DDO_ALUMNOIDContainer = gx.uc.getNew(this, 65, 35, "BootstrapDropDownOptions", "DDO_ALUMNOIDContainer", "Ddo_alumnoid", "DDO_ALUMNOID");
   var DDO_ALUMNOIDContainer = this.DDO_ALUMNOIDContainer;
   DDO_ALUMNOIDContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOIDContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOIDContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOIDContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOIDContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOIDContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOIDContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOIDContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOIDContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOIDContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOIDContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOIDContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOIDContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOIDContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOIDContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOIDContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOIDContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOIDContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOIDContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOIDContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOIDContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOIDContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOIDContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOIDContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOIDContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOIDContainer.setProp("FilterType", "Filtertype", "Numeric", "str");
   DDO_ALUMNOIDContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_ALUMNOIDContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_ALUMNOIDContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_ALUMNOIDContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_ALUMNOIDContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOIDContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_ALUMNOIDContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOIDContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_ALUMNOIDContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOIDContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOIDContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOIDContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOIDContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOIDContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOIDContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOIDContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOIDContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOIDContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_ALUMNOIDContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOIDContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_ALUMNOIDContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_ALUMNOIDContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_ALUMNOIDContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOIDContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOIDContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOIDContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOIDContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOIDContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOIDContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOIDContainer.addV2CFunction('AV45AlumnoIdTitleFilterData', "vALUMNOIDTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOIDContainer.addC2VFunction(function(UC) { UC.ParentObject.AV45AlumnoIdTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOIDTITLEFILTERDATA",UC.ParentObject.AV45AlumnoIdTitleFilterData); });
   DDO_ALUMNOIDContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOIDContainer.addEventHandler("OnOptionClicked", this.e140j2_client);
   this.setUserControl(DDO_ALUMNOIDContainer);
   this.DDO_ALUMNOIDENTIDADContainer = gx.uc.getNew(this, 67, 35, "BootstrapDropDownOptions", "DDO_ALUMNOIDENTIDADContainer", "Ddo_alumnoidentidad", "DDO_ALUMNOIDENTIDAD");
   var DDO_ALUMNOIDENTIDADContainer = this.DDO_ALUMNOIDENTIDADContainer;
   DDO_ALUMNOIDENTIDADContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOIDENTIDADContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNOIDENTIDADContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOIDENTIDADContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOIDENTIDADContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOIDENTIDADContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOIDENTIDADContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOIDENTIDADContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOIDENTIDADContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOIDENTIDADContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOIDENTIDADContainer.addV2CFunction('AV82AlumnoIdentidadTitleFilterData', "vALUMNOIDENTIDADTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOIDENTIDADContainer.addC2VFunction(function(UC) { UC.ParentObject.AV82AlumnoIdentidadTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOIDENTIDADTITLEFILTERDATA",UC.ParentObject.AV82AlumnoIdentidadTitleFilterData); });
   DDO_ALUMNOIDENTIDADContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOIDENTIDADContainer.addEventHandler("OnOptionClicked", this.e150j2_client);
   this.setUserControl(DDO_ALUMNOIDENTIDADContainer);
   this.DDO_ALUMNONOMBREContainer = gx.uc.getNew(this, 69, 35, "BootstrapDropDownOptions", "DDO_ALUMNONOMBREContainer", "Ddo_alumnonombre", "DDO_ALUMNONOMBRE");
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
   DDO_ALUMNONOMBREContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
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
   DDO_ALUMNONOMBREContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNONOMBREContainer.addV2CFunction('AV49AlumnoNombreTitleFilterData', "vALUMNONOMBRETITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNONOMBREContainer.addC2VFunction(function(UC) { UC.ParentObject.AV49AlumnoNombreTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNONOMBRETITLEFILTERDATA",UC.ParentObject.AV49AlumnoNombreTitleFilterData); });
   DDO_ALUMNONOMBREContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNONOMBREContainer.addEventHandler("OnOptionClicked", this.e160j2_client);
   this.setUserControl(DDO_ALUMNONOMBREContainer);
   this.DDO_ALUMNOTELEFONOContainer = gx.uc.getNew(this, 71, 35, "BootstrapDropDownOptions", "DDO_ALUMNOTELEFONOContainer", "Ddo_alumnotelefono", "DDO_ALUMNOTELEFONO");
   var DDO_ALUMNOTELEFONOContainer = this.DDO_ALUMNOTELEFONOContainer;
   DDO_ALUMNOTELEFONOContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOTELEFONOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOTELEFONOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOTELEFONOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNOTELEFONOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOTELEFONOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOTELEFONOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOTELEFONOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOTELEFONOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOTELEFONOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOTELEFONOContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOTELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOTELEFONOContainer.addV2CFunction('AV53AlumnoTelefonoTitleFilterData', "vALUMNOTELEFONOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOTELEFONOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV53AlumnoTelefonoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOTELEFONOTITLEFILTERDATA",UC.ParentObject.AV53AlumnoTelefonoTitleFilterData); });
   DDO_ALUMNOTELEFONOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOTELEFONOContainer.addEventHandler("OnOptionClicked", this.e170j2_client);
   this.setUserControl(DDO_ALUMNOTELEFONOContainer);
   this.DDO_ALUMNOEMAILContainer = gx.uc.getNew(this, 73, 35, "BootstrapDropDownOptions", "DDO_ALUMNOEMAILContainer", "Ddo_alumnoemail", "DDO_ALUMNOEMAIL");
   var DDO_ALUMNOEMAILContainer = this.DDO_ALUMNOEMAILContainer;
   DDO_ALUMNOEMAILContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOEMAILContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOEMAILContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOEMAILContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOEMAILContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOEMAILContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOEMAILContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOEMAILContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOEMAILContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOEMAILContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOEMAILContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOEMAILContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOEMAILContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOEMAILContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOEMAILContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOEMAILContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNOEMAILContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNOEMAILContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOEMAILContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNOEMAILContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOEMAILContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNOEMAILContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNOEMAILContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOEMAILContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOEMAILContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOEMAILContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOEMAILContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOEMAILContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOEMAILContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOEMAILContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNOEMAILContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOEMAILContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNOEMAILContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOEMAILContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOEMAILContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOEMAILContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOEMAILContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOEMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOEMAILContainer.addV2CFunction('AV57AlumnoEmailTitleFilterData', "vALUMNOEMAILTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOEMAILContainer.addC2VFunction(function(UC) { UC.ParentObject.AV57AlumnoEmailTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOEMAILTITLEFILTERDATA",UC.ParentObject.AV57AlumnoEmailTitleFilterData); });
   DDO_ALUMNOEMAILContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOEMAILContainer.addEventHandler("OnOptionClicked", this.e180j2_client);
   this.setUserControl(DDO_ALUMNOEMAILContainer);
   this.DDO_ALUMNOFECHANACIMIENTOContainer = gx.uc.getNew(this, 75, 35, "BootstrapDropDownOptions", "DDO_ALUMNOFECHANACIMIENTOContainer", "Ddo_alumnofechanacimiento", "DDO_ALUMNOFECHANACIMIENTO");
   var DDO_ALUMNOFECHANACIMIENTOContainer = this.DDO_ALUMNOFECHANACIMIENTOContainer;
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setDynProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("FilterType", "Filtertype", "Date", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("FilterIsRange", "Filterisrange", true, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeDataList", "Includedatalist", false, "bool");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DataListType", "Datalisttype", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "boolean");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "WWP_TSFrom", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("RangeFilterTo", "Rangefilterto", "WWP_TSTo", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOFECHANACIMIENTOContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOFECHANACIMIENTOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOFECHANACIMIENTOContainer.addV2CFunction('AV61AlumnoFechaNacimientoTitleFilterData', "vALUMNOFECHANACIMIENTOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOFECHANACIMIENTOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV61AlumnoFechaNacimientoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOFECHANACIMIENTOTITLEFILTERDATA",UC.ParentObject.AV61AlumnoFechaNacimientoTitleFilterData); });
   DDO_ALUMNOFECHANACIMIENTOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOFECHANACIMIENTOContainer.addEventHandler("OnOptionClicked", this.e190j2_client);
   this.setUserControl(DDO_ALUMNOFECHANACIMIENTOContainer);
   this.DDO_ALUMNODIRECCIONContainer = gx.uc.getNew(this, 77, 35, "BootstrapDropDownOptions", "DDO_ALUMNODIRECCIONContainer", "Ddo_alumnodireccion", "DDO_ALUMNODIRECCION");
   var DDO_ALUMNODIRECCIONContainer = this.DDO_ALUMNODIRECCIONContainer;
   DDO_ALUMNODIRECCIONContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNODIRECCIONContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNODIRECCIONContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNODIRECCIONContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNODIRECCIONContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNODIRECCIONContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNODIRECCIONContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNODIRECCIONContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNODIRECCIONContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNODIRECCIONContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNODIRECCIONContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNODIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNODIRECCIONContainer.addV2CFunction('AV67AlumnoDireccionTitleFilterData', "vALUMNODIRECCIONTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNODIRECCIONContainer.addC2VFunction(function(UC) { UC.ParentObject.AV67AlumnoDireccionTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNODIRECCIONTITLEFILTERDATA",UC.ParentObject.AV67AlumnoDireccionTitleFilterData); });
   DDO_ALUMNODIRECCIONContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNODIRECCIONContainer.addEventHandler("OnOptionClicked", this.e200j2_client);
   this.setUserControl(DDO_ALUMNODIRECCIONContainer);
   this.DDO_ALUMNOFACEBOOKContainer = gx.uc.getNew(this, 79, 35, "BootstrapDropDownOptions", "DDO_ALUMNOFACEBOOKContainer", "Ddo_alumnofacebook", "DDO_ALUMNOFACEBOOK");
   var DDO_ALUMNOFACEBOOKContainer = this.DDO_ALUMNOFACEBOOKContainer;
   DDO_ALUMNOFACEBOOKContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOFACEBOOKContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNOFACEBOOKContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOFACEBOOKContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOFACEBOOKContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOFACEBOOKContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOFACEBOOKContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOFACEBOOKContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOFACEBOOKContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOFACEBOOKContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOFACEBOOKContainer.addV2CFunction('AV86AlumnoFacebookTitleFilterData', "vALUMNOFACEBOOKTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOFACEBOOKContainer.addC2VFunction(function(UC) { UC.ParentObject.AV86AlumnoFacebookTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOFACEBOOKTITLEFILTERDATA",UC.ParentObject.AV86AlumnoFacebookTitleFilterData); });
   DDO_ALUMNOFACEBOOKContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOFACEBOOKContainer.addEventHandler("OnOptionClicked", this.e210j2_client);
   this.setUserControl(DDO_ALUMNOFACEBOOKContainer);
   this.DDO_ALUMNOINSTAGRAMContainer = gx.uc.getNew(this, 81, 35, "BootstrapDropDownOptions", "DDO_ALUMNOINSTAGRAMContainer", "Ddo_alumnoinstagram", "DDO_ALUMNOINSTAGRAM");
   var DDO_ALUMNOINSTAGRAMContainer = this.DDO_ALUMNOINSTAGRAMContainer;
   DDO_ALUMNOINSTAGRAMContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setDynProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeFilter", "Includefilter", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FilterType", "Filtertype", "Character", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FilterIsRange", "Filterisrange", false, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DataListType", "Datalisttype", "Dynamic", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DataListProc", "Datalistproc", "Academia.AlumnoWWGetFilterData", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", 0, "num");
   DDO_ALUMNOINSTAGRAMContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOINSTAGRAMContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOINSTAGRAMContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("LoadingData", "Loadingdata", "WWP_TSLoading", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("NoResultsFound", "Noresultsfound", "WWP_TSNoResults", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOINSTAGRAMContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOINSTAGRAMContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOINSTAGRAMContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOINSTAGRAMContainer.addV2CFunction('AV90AlumnoInstagramTitleFilterData', "vALUMNOINSTAGRAMTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOINSTAGRAMContainer.addC2VFunction(function(UC) { UC.ParentObject.AV90AlumnoInstagramTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOINSTAGRAMTITLEFILTERDATA",UC.ParentObject.AV90AlumnoInstagramTitleFilterData); });
   DDO_ALUMNOINSTAGRAMContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOINSTAGRAMContainer.addEventHandler("OnOptionClicked", this.e220j2_client);
   this.setUserControl(DDO_ALUMNOINSTAGRAMContainer);
   this.DDO_ALUMNOACTIVOContainer = gx.uc.getNew(this, 83, 35, "BootstrapDropDownOptions", "DDO_ALUMNOACTIVOContainer", "Ddo_alumnoactivo", "DDO_ALUMNOACTIVO");
   var DDO_ALUMNOACTIVOContainer = this.DDO_ALUMNOACTIVOContainer;
   DDO_ALUMNOACTIVOContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOACTIVOContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOACTIVOContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOACTIVOContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOACTIVOContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOACTIVOContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOACTIVOContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOACTIVOContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOACTIVOContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOACTIVOContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOACTIVOContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOACTIVOContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_ALUMNOACTIVOContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOACTIVOContainer.setProp("DataListType", "Datalisttype", "FixedValues", "str");
   DDO_ALUMNOACTIVOContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOACTIVOContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "1:WWP_TSChecked,2:WWP_TSUnChecked", "str");
   DDO_ALUMNOACTIVOContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_ALUMNOACTIVOContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOACTIVOContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOACTIVOContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOACTIVOContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOACTIVOContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOACTIVOContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOACTIVOContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOACTIVOContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOACTIVOContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOACTIVOContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOACTIVOContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOACTIVOContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOACTIVOContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOACTIVOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOACTIVOContainer.addV2CFunction('AV71AlumnoActivoTitleFilterData', "vALUMNOACTIVOTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOACTIVOContainer.addC2VFunction(function(UC) { UC.ParentObject.AV71AlumnoActivoTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOACTIVOTITLEFILTERDATA",UC.ParentObject.AV71AlumnoActivoTitleFilterData); });
   DDO_ALUMNOACTIVOContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOACTIVOContainer.addEventHandler("OnOptionClicked", this.e230j2_client);
   this.setUserControl(DDO_ALUMNOACTIVOContainer);
   this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer = gx.uc.getNew(this, 85, 35, "BootstrapDropDownOptions", "DDO_ALUMNOACUERDOFOTOGRAFIASContainer", "Ddo_alumnoacuerdofotografias", "DDO_ALUMNOACUERDOFOTOGRAFIAS");
   var DDO_ALUMNOACUERDOFOTOGRAFIASContainer = this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer;
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Class", "Class", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IconType", "Icontype", "Image", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Icon", "Icon", "", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Caption", "Caption", "", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Tooltip", "Tooltip", "WWP_TSColumnOptions", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Cls", "Cls", "ColumnSettings", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("ActiveEventKey", "Activeeventkey", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilteredText_set", "Filteredtext_set", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilteredText_get", "Filteredtext_get", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilteredTextTo_set", "Filteredtextto_set", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilteredTextTo_get", "Filteredtextto_get", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setDynProp("SelectedValue_set", "Selectedvalue_set", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SelectedValue_get", "Selectedvalue_get", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SelectedText_set", "Selectedtext_set", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SelectedText_get", "Selectedtext_get", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("GAMOAuthToken", "Gamoauthtoken", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("TitleControlAlign", "Titlecontrolalign", "Automatic", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DropDownOptionsType", "Dropdownoptionstype", "GridTitleSettings", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Enabled", "Enabled", true, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("Visible", "Visible", true, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setDynProp("TitleControlIdToReplace", "Titlecontrolidtoreplace", "", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeSortASC", "Includesortasc", true, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeSortDSC", "Includesortdsc", true, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setDynProp("SortedStatus", "Sortedstatus", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeFilter", "Includefilter", false, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilterType", "Filtertype", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FilterIsRange", "Filterisrange", false, "boolean");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeDataList", "Includedatalist", true, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DataListType", "Datalisttype", "FixedValues", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("AllowMultipleSelection", "Allowmultipleselection", false, "bool");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DataListFixedValues", "Datalistfixedvalues", "1:WWP_TSChecked,2:WWP_TSUnChecked", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DataListProc", "Datalistproc", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DataListProcParametersPrefix", "Datalistprocparametersprefix", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("DataListUpdateMinimumCharacters", "Datalistupdateminimumcharacters", '', "int");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("FixedFilters", "Fixedfilters", "", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SelectedFixedFilter", "Selectedfixedfilter", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("ColumnsSelectorValues", "Columnsselectorvalues", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeOnlySelectedOption", "Includeonlyselectedoption", false, "boolean");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("IncludeSelectAllOption", "Includeselectalloption", false, "boolean");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("CategoryFilteredBehaviour", "Categoryfilteredbehaviour", "ShowFilteredChildren", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("EmptyItem", "Emptyitem", false, "boolean");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SortASC", "Sortasc", "WWP_TSSortASC", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SortDSC", "Sortdsc", "WWP_TSSortDSC", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("LoadingData", "Loadingdata", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("CleanFilter", "Cleanfilter", "WWP_TSCleanFilter", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("RangeFilterFrom", "Rangefilterfrom", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("RangeFilterTo", "Rangefilterto", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("NoResultsFound", "Noresultsfound", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SearchButtonText", "Searchbuttontext", "WWP_TSSearchButtonCaption", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("UpdateButtonText", "Updatebuttontext", "Update", "str");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("EmptyItemText", "Emptyitemtext", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("OnlySelectedValues", "Onlyselectedvalues", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("SelectAllText", "Selectalltext", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setProp("MultipleValuesSeparator", "Multiplevaluesseparator", "", "char");
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.addV2CFunction('AV94AlumnoAcuerdoFotografiasTitleFilterData', "vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA", 'SetDropDownOptionsData');
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.addC2VFunction(function(UC) { UC.ParentObject.AV94AlumnoAcuerdoFotografiasTitleFilterData=UC.GetDropDownOptionsData();gx.fn.setControlValue("vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA",UC.ParentObject.AV94AlumnoAcuerdoFotografiasTitleFilterData); });
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_ALUMNOACUERDOFOTOGRAFIASContainer.addEventHandler("OnOptionClicked", this.e240j2_client);
   this.setUserControl(DDO_ALUMNOACUERDOFOTOGRAFIASContainer);
   this.WORKWITHPLUSUTILITIES1Container = gx.uc.getNew(this, 87, 35, "DVelop_WorkWithPlusUtilities", "WORKWITHPLUSUTILITIES1Container", "Workwithplusutilities1", "WORKWITHPLUSUTILITIES1");
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
   this.INNEWWINDOW1Container = gx.uc.getNew(this, 88, 35, "InNewWindow", "INNEWWINDOW1Container", "Innewwindow1", "INNEWWINDOW1");
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
   this.DDO_GRIDCOLUMNSSELECTORContainer = gx.uc.getNew(this, 89, 35, "BootstrapDropDownOptions", "DDO_GRIDCOLUMNSSELECTORContainer", "Ddo_gridcolumnsselector", "DDO_GRIDCOLUMNSSELECTOR");
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
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV74DDO_TitleSettingsIcons', "vDDO_TITLESETTINGSICONS", 'SetDropDownOptionsTitleSettingsIcons');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV74DDO_TitleSettingsIcons=UC.GetDropDownOptionsTitleSettingsIcons();gx.fn.setControlValue("vDDO_TITLESETTINGSICONS",UC.ParentObject.AV74DDO_TitleSettingsIcons); });
   DDO_GRIDCOLUMNSSELECTORContainer.addV2CFunction('AV30ColumnsSelector', "vCOLUMNSSELECTOR", 'SetDropDownOptionsData');
   DDO_GRIDCOLUMNSSELECTORContainer.addC2VFunction(function(UC) { UC.ParentObject.AV30ColumnsSelector=UC.GetDropDownOptionsData();gx.fn.setControlValue("vCOLUMNSSELECTOR",UC.ParentObject.AV30ColumnsSelector); });
   DDO_GRIDCOLUMNSSELECTORContainer.setC2ShowFunction(function(UC) { UC.show(); });
   DDO_GRIDCOLUMNSSELECTORContainer.addEventHandler("OnColumnsChanged", this.e250j2_client);
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
   DDO_MANAGEFILTERSContainer.addEventHandler("OnOptionClicked", this.e110j2_client);
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
   GXValidFnc[45]={ id:45 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV80Update",gxold:"OV80Update",gxvar:"AV80Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV80Update=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV80Update=Value},v2c:function(row){gx.fn.setGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44),gx.O.AV80Update,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV80Update=this.val()},val:function(row){return gx.fn.getGridControlValue("vUPDATE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV81Delete",gxold:"OV81Delete",gxvar:"AV81Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV81Delete=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV81Delete=Value},v2c:function(row){gx.fn.setGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44),gx.O.AV81Delete,1)},c2v:function(){if(this.val()!==undefined)gx.O.AV81Delete=this.val()},val:function(row){return gx.fn.getGridControlValue("vDELETE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOID",gxz:"Z1AlumnoId",gxold:"O1AlumnoId",gxvar:"A1AlumnoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A1AlumnoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1AlumnoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ALUMNOID",row || gx.fn.currentGridRowImpl(44),gx.O.A1AlumnoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A1AlumnoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ALUMNOID",row || gx.fn.currentGridRowImpl(44),'.')},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOIDENTIDAD",gxz:"Z7AlumnoIdentidad",gxold:"O7AlumnoIdentidad",gxvar:"A7AlumnoIdentidad",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A7AlumnoIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z7AlumnoIdentidad=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNOIDENTIDAD",row || gx.fn.currentGridRowImpl(44),gx.O.A7AlumnoIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.A7AlumnoIdentidad=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNOIDENTIDAD",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNONOMBRE",gxz:"Z2AlumnoNombre",gxold:"O2AlumnoNombre",gxvar:"A2AlumnoNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A2AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2AlumnoNombre=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(44),gx.O.A2AlumnoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A2AlumnoNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOTELEFONO",gxz:"Z3AlumnoTelefono",gxold:"O3AlumnoTelefono",gxvar:"A3AlumnoTelefono",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'tel',v2v:function(Value){if(Value!==undefined)gx.O.A3AlumnoTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z3AlumnoTelefono=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNOTELEFONO",row || gx.fn.currentGridRowImpl(44),gx.O.A3AlumnoTelefono,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A3AlumnoTelefono=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNOTELEFONO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[51]={ id:51 ,lvl:2,type:"svchar",len:100,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOEMAIL",gxz:"Z4AlumnoEmail",gxold:"O4AlumnoEmail",gxvar:"A4AlumnoEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'email',v2v:function(Value){if(Value!==undefined)gx.O.A4AlumnoEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z4AlumnoEmail=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNOEMAIL",row || gx.fn.currentGridRowImpl(44),gx.O.A4AlumnoEmail,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A4AlumnoEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNOEMAIL",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[52]={ id:52 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOFECHANACIMIENTO",gxz:"Z5AlumnoFechaNacimiento",gxold:"O5AlumnoFechaNacimiento",gxvar:"A5AlumnoFechaNacimiento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("ALUMNOFECHANACIMIENTO",row || gx.fn.currentGridRowImpl(44),gx.O.A5AlumnoFechaNacimiento,0)},c2v:function(){if(this.val()!==undefined)gx.O.A5AlumnoFechaNacimiento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("ALUMNOFECHANACIMIENTO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[53]={ id:53 ,lvl:2,type:"char",len:256,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNODIRECCION",gxz:"Z6AlumnoDireccion",gxold:"O6AlumnoDireccion",gxvar:"A6AlumnoDireccion",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A6AlumnoDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z6AlumnoDireccion=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNODIRECCION",row || gx.fn.currentGridRowImpl(44),gx.O.A6AlumnoDireccion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A6AlumnoDireccion=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNODIRECCION",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[54]={ id:54 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOFACEBOOK",gxz:"Z8AlumnoFacebook",gxold:"O8AlumnoFacebook",gxvar:"A8AlumnoFacebook",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A8AlumnoFacebook=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z8AlumnoFacebook=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNOFACEBOOK",row || gx.fn.currentGridRowImpl(44),gx.O.A8AlumnoFacebook,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A8AlumnoFacebook=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNOFACEBOOK",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[55]={ id:55 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOINSTAGRAM",gxz:"Z9AlumnoInstagram",gxold:"O9AlumnoInstagram",gxvar:"A9AlumnoInstagram",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A9AlumnoInstagram=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z9AlumnoInstagram=Value},v2c:function(row){gx.fn.setGridControlValue("ALUMNOINSTAGRAM",row || gx.fn.currentGridRowImpl(44),gx.O.A9AlumnoInstagram,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A9AlumnoInstagram=this.val()},val:function(row){return gx.fn.getGridControlValue("ALUMNOINSTAGRAM",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn};
   GXValidFnc[56]={ id:56 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOACTIVO",gxz:"Z76AlumnoActivo",gxold:"O76AlumnoActivo",gxvar:"A76AlumnoActivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A76AlumnoActivo=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z76AlumnoActivo=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("ALUMNOACTIVO",row || gx.fn.currentGridRowImpl(44),gx.O.A76AlumnoActivo,true)},c2v:function(){if(this.val()!==undefined)gx.O.A76AlumnoActivo=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("ALUMNOACTIVO",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[57]={ id:57 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:1,isacc:0,grid:44,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOACUERDOFOTOGRAFIAS",gxz:"Z113AlumnoAcuerdoFotografias",gxold:"O113AlumnoAcuerdoFotografias",gxvar:"A113AlumnoAcuerdoFotografias",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.A113AlumnoAcuerdoFotografias=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z113AlumnoAcuerdoFotografias=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("ALUMNOACUERDOFOTOGRAFIAS",row || gx.fn.currentGridRowImpl(44),gx.O.A113AlumnoAcuerdoFotografias,true)},c2v:function(){if(this.val()!==undefined)gx.O.A113AlumnoAcuerdoFotografias=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("ALUMNOACUERDOFOTOGRAFIAS",row || gx.fn.currentGridRowImpl(44))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id: 60, fld:"HTML_GRIDPAGINATIONBAR",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[66]={ id:66 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE",gxz:"ZV48ddo_AlumnoIdTitleControlIdToReplace",gxold:"OV48ddo_AlumnoIdTitleControlIdToReplace",gxvar:"AV48ddo_AlumnoIdTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV48ddo_AlumnoIdTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV48ddo_AlumnoIdTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE",gx.O.AV48ddo_AlumnoIdTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV48ddo_AlumnoIdTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[68]={ id:68 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE",gxz:"ZV85ddo_AlumnoIdentidadTitleControlIdToReplace",gxold:"OV85ddo_AlumnoIdentidadTitleControlIdToReplace",gxvar:"AV85ddo_AlumnoIdentidadTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV85ddo_AlumnoIdentidadTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV85ddo_AlumnoIdentidadTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE",gx.O.AV85ddo_AlumnoIdentidadTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV85ddo_AlumnoIdentidadTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE",gxz:"ZV52ddo_AlumnoNombreTitleControlIdToReplace",gxold:"OV52ddo_AlumnoNombreTitleControlIdToReplace",gxvar:"AV52ddo_AlumnoNombreTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV52ddo_AlumnoNombreTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV52ddo_AlumnoNombreTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE",gx.O.AV52ddo_AlumnoNombreTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV52ddo_AlumnoNombreTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[72]={ id:72 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE",gxz:"ZV56ddo_AlumnoTelefonoTitleControlIdToReplace",gxold:"OV56ddo_AlumnoTelefonoTitleControlIdToReplace",gxvar:"AV56ddo_AlumnoTelefonoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV56ddo_AlumnoTelefonoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV56ddo_AlumnoTelefonoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE",gx.O.AV56ddo_AlumnoTelefonoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV56ddo_AlumnoTelefonoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE",gxz:"ZV60ddo_AlumnoEmailTitleControlIdToReplace",gxold:"OV60ddo_AlumnoEmailTitleControlIdToReplace",gxvar:"AV60ddo_AlumnoEmailTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV60ddo_AlumnoEmailTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV60ddo_AlumnoEmailTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE",gx.O.AV60ddo_AlumnoEmailTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV60ddo_AlumnoEmailTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[76]={ id:76 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE",gxz:"ZV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace",gxold:"OV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace",gxvar:"AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE",gx.O.AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[78]={ id:78 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE",gxz:"ZV70ddo_AlumnoDireccionTitleControlIdToReplace",gxold:"OV70ddo_AlumnoDireccionTitleControlIdToReplace",gxvar:"AV70ddo_AlumnoDireccionTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV70ddo_AlumnoDireccionTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV70ddo_AlumnoDireccionTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE",gx.O.AV70ddo_AlumnoDireccionTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV70ddo_AlumnoDireccionTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE",gxz:"ZV89ddo_AlumnoFacebookTitleControlIdToReplace",gxold:"OV89ddo_AlumnoFacebookTitleControlIdToReplace",gxvar:"AV89ddo_AlumnoFacebookTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV89ddo_AlumnoFacebookTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV89ddo_AlumnoFacebookTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE",gx.O.AV89ddo_AlumnoFacebookTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV89ddo_AlumnoFacebookTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[82]={ id:82 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE",gxz:"ZV93ddo_AlumnoInstagramTitleControlIdToReplace",gxold:"OV93ddo_AlumnoInstagramTitleControlIdToReplace",gxvar:"AV93ddo_AlumnoInstagramTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV93ddo_AlumnoInstagramTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV93ddo_AlumnoInstagramTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE",gx.O.AV93ddo_AlumnoInstagramTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV93ddo_AlumnoInstagramTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE",gxz:"ZV73ddo_AlumnoActivoTitleControlIdToReplace",gxold:"OV73ddo_AlumnoActivoTitleControlIdToReplace",gxvar:"AV73ddo_AlumnoActivoTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV73ddo_AlumnoActivoTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV73ddo_AlumnoActivoTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE",gx.O.AV73ddo_AlumnoActivoTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV73ddo_AlumnoActivoTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"svchar",len:300,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE",gxz:"ZV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace",gxold:"OV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace",gxvar:"AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace=Value},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE",gx.O.AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace=this.val()},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE")},nac:gx.falseFn};
   GXValidFnc[90]={ id:90 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV12OrderedBy",gxold:"OV12OrderedBy",gxvar:"AV12OrderedBy",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV12OrderedBy=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV12OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV12OrderedBy,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV12OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[91]={ id:91 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vORDEREDDSC",gxz:"ZV13OrderedDsc",gxold:"OV13OrderedDsc",gxvar:"AV13OrderedDsc",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV13OrderedDsc=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDDSC",gx.O.AV13OrderedDsc,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV13OrderedDsc=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("vORDEREDDSC")},nac:gx.falseFn};
   GXValidFnc[92]={ id:92 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vMANAGEFILTERSEXECUTIONSTEP",gxz:"ZV39ManageFiltersExecutionStep",gxold:"OV39ManageFiltersExecutionStep",gxvar:"AV39ManageFiltersExecutionStep",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV39ManageFiltersExecutionStep=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vMANAGEFILTERSEXECUTIONSTEP",gx.O.AV39ManageFiltersExecutionStep,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV39ManageFiltersExecutionStep=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vMANAGEFILTERSEXECUTIONSTEP",'.')},nac:gx.falseFn};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOID",gxz:"ZV46TFAlumnoId",gxold:"OV46TFAlumnoId",gxvar:"AV46TFAlumnoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV46TFAlumnoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV46TFAlumnoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOID",gx.O.AV46TFAlumnoId,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV46TFAlumnoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFALUMNOID",'.')},nac:gx.falseFn};
   GXValidFnc[94]={ id:94 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOID_TO",gxz:"ZV47TFAlumnoId_To",gxold:"OV47TFAlumnoId_To",gxvar:"AV47TFAlumnoId_To",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV47TFAlumnoId_To=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV47TFAlumnoId_To=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOID_TO",gx.O.AV47TFAlumnoId_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV47TFAlumnoId_To=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFALUMNOID_TO",'.')},nac:gx.falseFn};
   GXValidFnc[95]={ id:95 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOIDENTIDAD",gxz:"ZV83TFAlumnoIdentidad",gxold:"OV83TFAlumnoIdentidad",gxvar:"AV83TFAlumnoIdentidad",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV83TFAlumnoIdentidad=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV83TFAlumnoIdentidad=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOIDENTIDAD",gx.O.AV83TFAlumnoIdentidad,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV83TFAlumnoIdentidad=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOIDENTIDAD")},nac:gx.falseFn};
   GXValidFnc[96]={ id:96 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOIDENTIDAD_SEL",gxz:"ZV84TFAlumnoIdentidad_Sel",gxold:"OV84TFAlumnoIdentidad_Sel",gxvar:"AV84TFAlumnoIdentidad_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV84TFAlumnoIdentidad_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV84TFAlumnoIdentidad_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOIDENTIDAD_SEL",gx.O.AV84TFAlumnoIdentidad_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV84TFAlumnoIdentidad_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOIDENTIDAD_SEL")},nac:gx.falseFn};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNONOMBRE",gxz:"ZV50TFAlumnoNombre",gxold:"OV50TFAlumnoNombre",gxvar:"AV50TFAlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV50TFAlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV50TFAlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNONOMBRE",gx.O.AV50TFAlumnoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV50TFAlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNONOMBRE")},nac:gx.falseFn};
   GXValidFnc[98]={ id:98 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNONOMBRE_SEL",gxz:"ZV51TFAlumnoNombre_Sel",gxold:"OV51TFAlumnoNombre_Sel",gxvar:"AV51TFAlumnoNombre_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV51TFAlumnoNombre_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV51TFAlumnoNombre_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNONOMBRE_SEL",gx.O.AV51TFAlumnoNombre_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV51TFAlumnoNombre_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNONOMBRE_SEL")},nac:gx.falseFn};
   GXValidFnc[99]={ id:99 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOTELEFONO",gxz:"ZV54TFAlumnoTelefono",gxold:"OV54TFAlumnoTelefono",gxvar:"AV54TFAlumnoTelefono",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV54TFAlumnoTelefono=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV54TFAlumnoTelefono=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOTELEFONO",gx.O.AV54TFAlumnoTelefono,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV54TFAlumnoTelefono=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOTELEFONO")},nac:gx.falseFn};
   GXValidFnc[100]={ id:100 ,lvl:0,type:"char",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOTELEFONO_SEL",gxz:"ZV55TFAlumnoTelefono_Sel",gxold:"OV55TFAlumnoTelefono_Sel",gxvar:"AV55TFAlumnoTelefono_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV55TFAlumnoTelefono_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV55TFAlumnoTelefono_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOTELEFONO_SEL",gx.O.AV55TFAlumnoTelefono_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV55TFAlumnoTelefono_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOTELEFONO_SEL")},nac:gx.falseFn};
   GXValidFnc[101]={ id:101 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfalumnoemail,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOEMAIL",gxz:"ZV58TFAlumnoEmail",gxold:"OV58TFAlumnoEmail",gxvar:"AV58TFAlumnoEmail",ucs:[],op:[101],ip:[101],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV58TFAlumnoEmail=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV58TFAlumnoEmail=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOEMAIL",gx.O.AV58TFAlumnoEmail,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV58TFAlumnoEmail=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOEMAIL")},nac:gx.falseFn};
   GXValidFnc[102]={ id:102 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfalumnoemail_sel,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOEMAIL_SEL",gxz:"ZV59TFAlumnoEmail_Sel",gxold:"OV59TFAlumnoEmail_Sel",gxvar:"AV59TFAlumnoEmail_Sel",ucs:[],op:[102],ip:[102],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV59TFAlumnoEmail_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV59TFAlumnoEmail_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOEMAIL_SEL",gx.O.AV59TFAlumnoEmail_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV59TFAlumnoEmail_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOEMAIL_SEL")},nac:gx.falseFn};
   GXValidFnc[103]={ id:103 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfalumnofechanacimiento,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOFECHANACIMIENTO",gxz:"ZV62TFAlumnoFechaNacimiento",gxold:"OV62TFAlumnoFechaNacimiento",gxvar:"AV62TFAlumnoFechaNacimiento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[103],ip:[103],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV62TFAlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV62TFAlumnoFechaNacimiento=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOFECHANACIMIENTO",gx.O.AV62TFAlumnoFechaNacimiento,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV62TFAlumnoFechaNacimiento=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFALUMNOFECHANACIMIENTO")},nac:gx.falseFn};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tfalumnofechanacimiento_to,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOFECHANACIMIENTO_TO",gxz:"ZV63TFAlumnoFechaNacimiento_To",gxold:"OV63TFAlumnoFechaNacimiento_To",gxvar:"AV63TFAlumnoFechaNacimiento_To",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[104],ip:[104],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV63TFAlumnoFechaNacimiento_To=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV63TFAlumnoFechaNacimiento_To=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOFECHANACIMIENTO_TO",gx.O.AV63TFAlumnoFechaNacimiento_To,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV63TFAlumnoFechaNacimiento_To=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vTFALUMNOFECHANACIMIENTO_TO")},nac:gx.falseFn};
   GXValidFnc[105]={ id: 105, fld:"DDO_ALUMNOFECHANACIMIENTOAUXDATES",grid:0};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_alumnofechanacimientoauxdate,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOFECHANACIMIENTOAUXDATE",gxz:"ZV64DDO_AlumnoFechaNacimientoAuxDate",gxold:"OV64DDO_AlumnoFechaNacimientoAuxDate",gxvar:"AV64DDO_AlumnoFechaNacimientoAuxDate",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[106],ip:[106],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV64DDO_AlumnoFechaNacimientoAuxDate=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV64DDO_AlumnoFechaNacimientoAuxDate=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOFECHANACIMIENTOAUXDATE",gx.O.AV64DDO_AlumnoFechaNacimientoAuxDate,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV64DDO_AlumnoFechaNacimientoAuxDate=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOFECHANACIMIENTOAUXDATE")},nac:gx.falseFn};
   GXValidFnc[107]={ id:107 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ddo_alumnofechanacimientoauxdateto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDDO_ALUMNOFECHANACIMIENTOAUXDATETO",gxz:"ZV65DDO_AlumnoFechaNacimientoAuxDateTo",gxold:"OV65DDO_AlumnoFechaNacimientoAuxDateTo",gxvar:"AV65DDO_AlumnoFechaNacimientoAuxDateTo",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[107],ip:[107],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV65DDO_AlumnoFechaNacimientoAuxDateTo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV65DDO_AlumnoFechaNacimientoAuxDateTo=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vDDO_ALUMNOFECHANACIMIENTOAUXDATETO",gx.O.AV65DDO_AlumnoFechaNacimientoAuxDateTo,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV65DDO_AlumnoFechaNacimientoAuxDateTo=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vDDO_ALUMNOFECHANACIMIENTOAUXDATETO")},nac:gx.falseFn};
   GXValidFnc[108]={ id:108 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNODIRECCION",gxz:"ZV68TFAlumnoDireccion",gxold:"OV68TFAlumnoDireccion",gxvar:"AV68TFAlumnoDireccion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV68TFAlumnoDireccion=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV68TFAlumnoDireccion=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNODIRECCION",gx.O.AV68TFAlumnoDireccion,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV68TFAlumnoDireccion=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNODIRECCION")},nac:gx.falseFn};
   GXValidFnc[109]={ id:109 ,lvl:0,type:"char",len:256,dec:0,sign:false,ro:0,multiline:true,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNODIRECCION_SEL",gxz:"ZV69TFAlumnoDireccion_Sel",gxold:"OV69TFAlumnoDireccion_Sel",gxvar:"AV69TFAlumnoDireccion_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV69TFAlumnoDireccion_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV69TFAlumnoDireccion_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNODIRECCION_SEL",gx.O.AV69TFAlumnoDireccion_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV69TFAlumnoDireccion_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNODIRECCION_SEL")},nac:gx.falseFn};
   GXValidFnc[110]={ id:110 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOFACEBOOK",gxz:"ZV87TFAlumnoFacebook",gxold:"OV87TFAlumnoFacebook",gxvar:"AV87TFAlumnoFacebook",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV87TFAlumnoFacebook=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV87TFAlumnoFacebook=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOFACEBOOK",gx.O.AV87TFAlumnoFacebook,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV87TFAlumnoFacebook=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOFACEBOOK")},nac:gx.falseFn};
   GXValidFnc[111]={ id:111 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOFACEBOOK_SEL",gxz:"ZV88TFAlumnoFacebook_Sel",gxold:"OV88TFAlumnoFacebook_Sel",gxvar:"AV88TFAlumnoFacebook_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV88TFAlumnoFacebook_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV88TFAlumnoFacebook_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOFACEBOOK_SEL",gx.O.AV88TFAlumnoFacebook_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV88TFAlumnoFacebook_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOFACEBOOK_SEL")},nac:gx.falseFn};
   GXValidFnc[112]={ id:112 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOINSTAGRAM",gxz:"ZV91TFAlumnoInstagram",gxold:"OV91TFAlumnoInstagram",gxvar:"AV91TFAlumnoInstagram",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV91TFAlumnoInstagram=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV91TFAlumnoInstagram=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOINSTAGRAM",gx.O.AV91TFAlumnoInstagram,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV91TFAlumnoInstagram=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOINSTAGRAM")},nac:gx.falseFn};
   GXValidFnc[113]={ id:113 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOINSTAGRAM_SEL",gxz:"ZV92TFAlumnoInstagram_Sel",gxold:"OV92TFAlumnoInstagram_Sel",gxvar:"AV92TFAlumnoInstagram_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV92TFAlumnoInstagram_Sel=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV92TFAlumnoInstagram_Sel=Value},v2c:function(){gx.fn.setControlValue("vTFALUMNOINSTAGRAM_SEL",gx.O.AV92TFAlumnoInstagram_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV92TFAlumnoInstagram_Sel=this.val()},val:function(){return gx.fn.getControlValue("vTFALUMNOINSTAGRAM_SEL")},nac:gx.falseFn};
   GXValidFnc[114]={ id:114 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOACTIVO_SEL",gxz:"ZV72TFAlumnoActivo_Sel",gxold:"OV72TFAlumnoActivo_Sel",gxvar:"AV72TFAlumnoActivo_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV72TFAlumnoActivo_Sel=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV72TFAlumnoActivo_Sel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOACTIVO_SEL",gx.O.AV72TFAlumnoActivo_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV72TFAlumnoActivo_Sel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFALUMNOACTIVO_SEL",'.')},nac:gx.falseFn};
   GXValidFnc[115]={ id:115 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vTFALUMNOACUERDOFOTOGRAFIAS_SEL",gxz:"ZV95TFAlumnoAcuerdoFotografias_Sel",gxold:"OV95TFAlumnoAcuerdoFotografias_Sel",gxvar:"AV95TFAlumnoAcuerdoFotografias_Sel",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV95TFAlumnoAcuerdoFotografias_Sel=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV95TFAlumnoAcuerdoFotografias_Sel=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTFALUMNOACUERDOFOTOGRAFIAS_SEL",gx.O.AV95TFAlumnoAcuerdoFotografias_Sel,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV95TFAlumnoAcuerdoFotografias_Sel=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTFALUMNOACUERDOFOTOGRAFIAS_SEL",'.')},nac:gx.falseFn};
   this.AV15FilterFullText = "" ;
   this.ZV15FilterFullText = "" ;
   this.OV15FilterFullText = "" ;
   this.ZV80Update = "" ;
   this.OV80Update = "" ;
   this.ZV81Delete = "" ;
   this.OV81Delete = "" ;
   this.Z1AlumnoId = 0 ;
   this.O1AlumnoId = 0 ;
   this.Z7AlumnoIdentidad = "" ;
   this.O7AlumnoIdentidad = "" ;
   this.Z2AlumnoNombre = "" ;
   this.O2AlumnoNombre = "" ;
   this.Z3AlumnoTelefono = "" ;
   this.O3AlumnoTelefono = "" ;
   this.Z4AlumnoEmail = "" ;
   this.O4AlumnoEmail = "" ;
   this.Z5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.O5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.Z6AlumnoDireccion = "" ;
   this.O6AlumnoDireccion = "" ;
   this.Z8AlumnoFacebook = "" ;
   this.O8AlumnoFacebook = "" ;
   this.Z9AlumnoInstagram = "" ;
   this.O9AlumnoInstagram = "" ;
   this.Z76AlumnoActivo = false ;
   this.O76AlumnoActivo = false ;
   this.Z113AlumnoAcuerdoFotografias = false ;
   this.O113AlumnoAcuerdoFotografias = false ;
   this.AV48ddo_AlumnoIdTitleControlIdToReplace = "" ;
   this.ZV48ddo_AlumnoIdTitleControlIdToReplace = "" ;
   this.OV48ddo_AlumnoIdTitleControlIdToReplace = "" ;
   this.AV85ddo_AlumnoIdentidadTitleControlIdToReplace = "" ;
   this.ZV85ddo_AlumnoIdentidadTitleControlIdToReplace = "" ;
   this.OV85ddo_AlumnoIdentidadTitleControlIdToReplace = "" ;
   this.AV52ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.ZV52ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.OV52ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_AlumnoTelefonoTitleControlIdToReplace = "" ;
   this.ZV56ddo_AlumnoTelefonoTitleControlIdToReplace = "" ;
   this.OV56ddo_AlumnoTelefonoTitleControlIdToReplace = "" ;
   this.AV60ddo_AlumnoEmailTitleControlIdToReplace = "" ;
   this.ZV60ddo_AlumnoEmailTitleControlIdToReplace = "" ;
   this.OV60ddo_AlumnoEmailTitleControlIdToReplace = "" ;
   this.AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace = "" ;
   this.ZV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace = "" ;
   this.OV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace = "" ;
   this.AV70ddo_AlumnoDireccionTitleControlIdToReplace = "" ;
   this.ZV70ddo_AlumnoDireccionTitleControlIdToReplace = "" ;
   this.OV70ddo_AlumnoDireccionTitleControlIdToReplace = "" ;
   this.AV89ddo_AlumnoFacebookTitleControlIdToReplace = "" ;
   this.ZV89ddo_AlumnoFacebookTitleControlIdToReplace = "" ;
   this.OV89ddo_AlumnoFacebookTitleControlIdToReplace = "" ;
   this.AV93ddo_AlumnoInstagramTitleControlIdToReplace = "" ;
   this.ZV93ddo_AlumnoInstagramTitleControlIdToReplace = "" ;
   this.OV93ddo_AlumnoInstagramTitleControlIdToReplace = "" ;
   this.AV73ddo_AlumnoActivoTitleControlIdToReplace = "" ;
   this.ZV73ddo_AlumnoActivoTitleControlIdToReplace = "" ;
   this.OV73ddo_AlumnoActivoTitleControlIdToReplace = "" ;
   this.AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace = "" ;
   this.ZV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace = "" ;
   this.OV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.ZV12OrderedBy = 0 ;
   this.OV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.ZV13OrderedDsc = false ;
   this.OV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.ZV39ManageFiltersExecutionStep = 0 ;
   this.OV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFAlumnoId = 0 ;
   this.ZV46TFAlumnoId = 0 ;
   this.OV46TFAlumnoId = 0 ;
   this.AV47TFAlumnoId_To = 0 ;
   this.ZV47TFAlumnoId_To = 0 ;
   this.OV47TFAlumnoId_To = 0 ;
   this.AV83TFAlumnoIdentidad = "" ;
   this.ZV83TFAlumnoIdentidad = "" ;
   this.OV83TFAlumnoIdentidad = "" ;
   this.AV84TFAlumnoIdentidad_Sel = "" ;
   this.ZV84TFAlumnoIdentidad_Sel = "" ;
   this.OV84TFAlumnoIdentidad_Sel = "" ;
   this.AV50TFAlumnoNombre = "" ;
   this.ZV50TFAlumnoNombre = "" ;
   this.OV50TFAlumnoNombre = "" ;
   this.AV51TFAlumnoNombre_Sel = "" ;
   this.ZV51TFAlumnoNombre_Sel = "" ;
   this.OV51TFAlumnoNombre_Sel = "" ;
   this.AV54TFAlumnoTelefono = "" ;
   this.ZV54TFAlumnoTelefono = "" ;
   this.OV54TFAlumnoTelefono = "" ;
   this.AV55TFAlumnoTelefono_Sel = "" ;
   this.ZV55TFAlumnoTelefono_Sel = "" ;
   this.OV55TFAlumnoTelefono_Sel = "" ;
   this.AV58TFAlumnoEmail = "" ;
   this.ZV58TFAlumnoEmail = "" ;
   this.OV58TFAlumnoEmail = "" ;
   this.AV59TFAlumnoEmail_Sel = "" ;
   this.ZV59TFAlumnoEmail_Sel = "" ;
   this.OV59TFAlumnoEmail_Sel = "" ;
   this.AV62TFAlumnoFechaNacimiento = gx.date.nullDate() ;
   this.ZV62TFAlumnoFechaNacimiento = gx.date.nullDate() ;
   this.OV62TFAlumnoFechaNacimiento = gx.date.nullDate() ;
   this.AV63TFAlumnoFechaNacimiento_To = gx.date.nullDate() ;
   this.ZV63TFAlumnoFechaNacimiento_To = gx.date.nullDate() ;
   this.OV63TFAlumnoFechaNacimiento_To = gx.date.nullDate() ;
   this.AV64DDO_AlumnoFechaNacimientoAuxDate = gx.date.nullDate() ;
   this.ZV64DDO_AlumnoFechaNacimientoAuxDate = gx.date.nullDate() ;
   this.OV64DDO_AlumnoFechaNacimientoAuxDate = gx.date.nullDate() ;
   this.AV65DDO_AlumnoFechaNacimientoAuxDateTo = gx.date.nullDate() ;
   this.ZV65DDO_AlumnoFechaNacimientoAuxDateTo = gx.date.nullDate() ;
   this.OV65DDO_AlumnoFechaNacimientoAuxDateTo = gx.date.nullDate() ;
   this.AV68TFAlumnoDireccion = "" ;
   this.ZV68TFAlumnoDireccion = "" ;
   this.OV68TFAlumnoDireccion = "" ;
   this.AV69TFAlumnoDireccion_Sel = "" ;
   this.ZV69TFAlumnoDireccion_Sel = "" ;
   this.OV69TFAlumnoDireccion_Sel = "" ;
   this.AV87TFAlumnoFacebook = "" ;
   this.ZV87TFAlumnoFacebook = "" ;
   this.OV87TFAlumnoFacebook = "" ;
   this.AV88TFAlumnoFacebook_Sel = "" ;
   this.ZV88TFAlumnoFacebook_Sel = "" ;
   this.OV88TFAlumnoFacebook_Sel = "" ;
   this.AV91TFAlumnoInstagram = "" ;
   this.ZV91TFAlumnoInstagram = "" ;
   this.OV91TFAlumnoInstagram = "" ;
   this.AV92TFAlumnoInstagram_Sel = "" ;
   this.ZV92TFAlumnoInstagram_Sel = "" ;
   this.OV92TFAlumnoInstagram_Sel = "" ;
   this.AV72TFAlumnoActivo_Sel = 0 ;
   this.ZV72TFAlumnoActivo_Sel = 0 ;
   this.OV72TFAlumnoActivo_Sel = 0 ;
   this.AV95TFAlumnoAcuerdoFotografias_Sel = 0 ;
   this.ZV95TFAlumnoAcuerdoFotografias_Sel = 0 ;
   this.OV95TFAlumnoAcuerdoFotografias_Sel = 0 ;
   this.AV43ManageFiltersData = [ ] ;
   this.AV15FilterFullText = "" ;
   this.AV76GridCurrentPage = 0 ;
   this.AV74DDO_TitleSettingsIcons = {Default:"",Default_GXI:"",Filtered:"",Filtered_GXI:"",SortedASC:"",SortedASC_GXI:"",SortedDSC:"",SortedDSC_GXI:"",FilteredSortedASC:"",FilteredSortedASC_GXI:"",FilteredSortedDSC:"",FilteredSortedDSC_GXI:"",OptionSortASC:"",OptionSortASC_GXI:"",OptionSortDSC:"",OptionSortDSC_GXI:"",OptionApplyFilter:"",OptionApplyFilter_GXI:"",OptionFilteringData:"",OptionFilteringData_GXI:"",OptionCleanFilters:"",OptionCleanFilters_GXI:"",SelectedOption:"",SelectedOption_GXI:"",MultiselOption:"",MultiselOption_GXI:"",MultiselSelOption:"",MultiselSelOption_GXI:"",TreeviewCollapse:"",TreeviewCollapse_GXI:"",TreeviewExpand:"",TreeviewExpand_GXI:""} ;
   this.AV48ddo_AlumnoIdTitleControlIdToReplace = "" ;
   this.AV85ddo_AlumnoIdentidadTitleControlIdToReplace = "" ;
   this.AV52ddo_AlumnoNombreTitleControlIdToReplace = "" ;
   this.AV56ddo_AlumnoTelefonoTitleControlIdToReplace = "" ;
   this.AV60ddo_AlumnoEmailTitleControlIdToReplace = "" ;
   this.AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace = "" ;
   this.AV70ddo_AlumnoDireccionTitleControlIdToReplace = "" ;
   this.AV89ddo_AlumnoFacebookTitleControlIdToReplace = "" ;
   this.AV93ddo_AlumnoInstagramTitleControlIdToReplace = "" ;
   this.AV73ddo_AlumnoActivoTitleControlIdToReplace = "" ;
   this.AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace = "" ;
   this.AV12OrderedBy = 0 ;
   this.AV13OrderedDsc = false ;
   this.AV39ManageFiltersExecutionStep = 0 ;
   this.AV46TFAlumnoId = 0 ;
   this.AV47TFAlumnoId_To = 0 ;
   this.AV83TFAlumnoIdentidad = "" ;
   this.AV84TFAlumnoIdentidad_Sel = "" ;
   this.AV50TFAlumnoNombre = "" ;
   this.AV51TFAlumnoNombre_Sel = "" ;
   this.AV54TFAlumnoTelefono = "" ;
   this.AV55TFAlumnoTelefono_Sel = "" ;
   this.AV58TFAlumnoEmail = "" ;
   this.AV59TFAlumnoEmail_Sel = "" ;
   this.AV62TFAlumnoFechaNacimiento = gx.date.nullDate() ;
   this.AV63TFAlumnoFechaNacimiento_To = gx.date.nullDate() ;
   this.AV64DDO_AlumnoFechaNacimientoAuxDate = gx.date.nullDate() ;
   this.AV65DDO_AlumnoFechaNacimientoAuxDateTo = gx.date.nullDate() ;
   this.AV68TFAlumnoDireccion = "" ;
   this.AV69TFAlumnoDireccion_Sel = "" ;
   this.AV87TFAlumnoFacebook = "" ;
   this.AV88TFAlumnoFacebook_Sel = "" ;
   this.AV91TFAlumnoInstagram = "" ;
   this.AV92TFAlumnoInstagram_Sel = "" ;
   this.AV72TFAlumnoActivo_Sel = 0 ;
   this.AV95TFAlumnoAcuerdoFotografias_Sel = 0 ;
   this.AV80Update = "" ;
   this.AV81Delete = "" ;
   this.A1AlumnoId = 0 ;
   this.A7AlumnoIdentidad = "" ;
   this.A2AlumnoNombre = "" ;
   this.A3AlumnoTelefono = "" ;
   this.A4AlumnoEmail = "" ;
   this.A5AlumnoFechaNacimiento = gx.date.nullDate() ;
   this.A6AlumnoDireccion = "" ;
   this.A8AlumnoFacebook = "" ;
   this.A9AlumnoInstagram = "" ;
   this.A76AlumnoActivo = false ;
   this.A113AlumnoAcuerdoFotografias = false ;
   this.AV30ColumnsSelector = {VisibleColumns:[],InvisibleColumns:[]} ;
   this.AV121Pgmname = "" ;
   this.AV10GridState = {CurrentPage:0,OrderedBy:0,OrderedDsc:false,HidingSearch:0,PageSize:"",FilterValues:[],DynamicFilters:[]} ;
   this.Events = {"e120j2_client": ["GRIDPAGINATIONBAR.CHANGEPAGE", true] ,"e130j2_client": ["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e140j2_client": ["DDO_ALUMNOID.ONOPTIONCLICKED", true] ,"e150j2_client": ["DDO_ALUMNOIDENTIDAD.ONOPTIONCLICKED", true] ,"e160j2_client": ["DDO_ALUMNONOMBRE.ONOPTIONCLICKED", true] ,"e170j2_client": ["DDO_ALUMNOTELEFONO.ONOPTIONCLICKED", true] ,"e180j2_client": ["DDO_ALUMNOEMAIL.ONOPTIONCLICKED", true] ,"e190j2_client": ["DDO_ALUMNOFECHANACIMIENTO.ONOPTIONCLICKED", true] ,"e200j2_client": ["DDO_ALUMNODIRECCION.ONOPTIONCLICKED", true] ,"e210j2_client": ["DDO_ALUMNOFACEBOOK.ONOPTIONCLICKED", true] ,"e220j2_client": ["DDO_ALUMNOINSTAGRAM.ONOPTIONCLICKED", true] ,"e230j2_client": ["DDO_ALUMNOACTIVO.ONOPTIONCLICKED", true] ,"e240j2_client": ["DDO_ALUMNOACUERDOFOTOGRAFIAS.ONOPTIONCLICKED", true] ,"e250j2_client": ["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED", true] ,"e110j2_client": ["DDO_MANAGEFILTERS.ONOPTIONCLICKED", true] ,"e260j2_client": ["'DOINSERT'", true] ,"e270j2_client": ["'DOEXPORT'", true] ,"e280j2_client": ["'DOEXPORTREPORT'", true] ,"e320j2_client": ["ENTER", true] ,"e330j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'}],[{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["START"] = [[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{ctrl:'GRID',prop:'Rows'},{av:'gx.fn.getCtrlProperty("vMANAGEFILTERSEXECUTIONSTEP","Visible")',ctrl:'vMANAGEFILTERSEXECUTIONSTEP',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOID","Visible")',ctrl:'vTFALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOID_TO","Visible")',ctrl:'vTFALUMNOID_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOIDENTIDAD","Visible")',ctrl:'vTFALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOIDENTIDAD_SEL","Visible")',ctrl:'vTFALUMNOIDENTIDAD_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNONOMBRE","Visible")',ctrl:'vTFALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNONOMBRE_SEL","Visible")',ctrl:'vTFALUMNONOMBRE_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOTELEFONO","Visible")',ctrl:'vTFALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOTELEFONO_SEL","Visible")',ctrl:'vTFALUMNOTELEFONO_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOEMAIL","Visible")',ctrl:'vTFALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOEMAIL_SEL","Visible")',ctrl:'vTFALUMNOEMAIL_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOFECHANACIMIENTO","Visible")',ctrl:'vTFALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOFECHANACIMIENTO_TO","Visible")',ctrl:'vTFALUMNOFECHANACIMIENTO_TO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNODIRECCION","Visible")',ctrl:'vTFALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNODIRECCION_SEL","Visible")',ctrl:'vTFALUMNODIRECCION_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOFACEBOOK","Visible")',ctrl:'vTFALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOFACEBOOK_SEL","Visible")',ctrl:'vTFALUMNOFACEBOOK_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOINSTAGRAM","Visible")',ctrl:'vTFALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOINSTAGRAM_SEL","Visible")',ctrl:'vTFALUMNOINSTAGRAM_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOACTIVO_SEL","Visible")',ctrl:'vTFALUMNOACTIVO_SEL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("vTFALUMNOACUERDOFOTOGRAFIAS_SEL","Visible")',ctrl:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',prop:'Visible'},{av:'this.DDO_ALUMNOIDContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOID',prop:'TitleControlIdToReplace'},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOIDENTIDADContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'TitleControlIdToReplace'},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNONOMBREContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNONOMBRE',prop:'TitleControlIdToReplace'},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOTELEFONOContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOTELEFONO',prop:'TitleControlIdToReplace'},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOEMAILContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOEMAIL',prop:'TitleControlIdToReplace'},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'TitleControlIdToReplace'},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNODIRECCIONContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNODIRECCION',prop:'TitleControlIdToReplace'},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOFACEBOOKContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOFACEBOOK',prop:'TitleControlIdToReplace'},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'TitleControlIdToReplace'},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOACTIVOContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOACTIVO',prop:'TitleControlIdToReplace'},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',prop:'Visible'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.TitleControlIdToReplace',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'TitleControlIdToReplace'},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'gx.fn.getCtrlProperty("vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE","Visible")',ctrl:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',prop:'Visible'},{ctrl:'FORM',prop:'Caption'},{av:'gx.fn.getCtrlProperty("vORDEREDBY","Visible")',ctrl:'vORDEREDBY',prop:'Visible'},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("vORDEREDDSC","Visible")',ctrl:'vORDEREDDSC',prop:'Visible'},{av:'this.DDO_MANAGEFILTERSContainer.Icon',ctrl:'DDO_MANAGEFILTERS',prop:'Icon'},{av:'AV74DDO_TitleSettingsIcons',fld:'vDDO_TITLESETTINGSICONS',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.TitleControlIdToReplace',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'TitleControlIdToReplace'},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SelectedValue_set'},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'this.DDO_ALUMNOACTIVOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACTIVO',prop:'SelectedValue_set'},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SelectedValue_set'},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'FilteredText_set'},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SelectedValue_set'},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.FilteredText_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'FilteredText_set'},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.SelectedValue_set',ctrl:'DDO_ALUMNODIRECCION',prop:'SelectedValue_set'},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.FilteredText_set',ctrl:'DDO_ALUMNODIRECCION',prop:'FilteredText_set'},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredTextTo_set'},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.SelectedValue_set',ctrl:'DDO_ALUMNOEMAIL',prop:'SelectedValue_set'},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.FilteredText_set',ctrl:'DDO_ALUMNOEMAIL',prop:'FilteredText_set'},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.FilteredText_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'FilteredText_set'},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SelectedValue_set'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.FilteredText_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDContainer.FilteredText_set',ctrl:'DDO_ALUMNOID',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOIDContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.GRIDPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRID',prop:'Rows'}]];
   this.EvtParms["DDO_ALUMNOID.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOIDContainer.ActiveEventKey',ctrl:'DDO_ALUMNOID',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOIDContainer.FilteredText_get',ctrl:'DDO_ALUMNOID',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOIDContainer.FilteredTextTo_get',ctrl:'DDO_ALUMNOID',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOIDENTIDAD.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.ActiveEventKey',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOIDENTIDADContainer.FilteredText_get',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_get',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNONOMBRE.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.ActiveEventKey',ctrl:'DDO_ALUMNONOMBRE',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_get',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_get'},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_get',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOTELEFONO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.ActiveEventKey',ctrl:'DDO_ALUMNOTELEFONO',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOTELEFONOContainer.FilteredText_get',ctrl:'DDO_ALUMNOTELEFONO',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOTELEFONOContainer.SelectedValue_get',ctrl:'DDO_ALUMNOTELEFONO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOEMAIL.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.ActiveEventKey',ctrl:'DDO_ALUMNOEMAIL',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOEMAILContainer.FilteredText_get',ctrl:'DDO_ALUMNOEMAIL',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOEMAILContainer.SelectedValue_get',ctrl:'DDO_ALUMNOEMAIL',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOFECHANACIMIENTO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.ActiveEventKey',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_get',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_get',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredTextTo_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNODIRECCION.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.ActiveEventKey',ctrl:'DDO_ALUMNODIRECCION',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNODIRECCIONContainer.FilteredText_get',ctrl:'DDO_ALUMNODIRECCION',prop:'FilteredText_get'},{av:'this.DDO_ALUMNODIRECCIONContainer.SelectedValue_get',ctrl:'DDO_ALUMNODIRECCION',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOFACEBOOK.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.ActiveEventKey',ctrl:'DDO_ALUMNOFACEBOOK',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOFACEBOOKContainer.FilteredText_get',ctrl:'DDO_ALUMNOFACEBOOK',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_get',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOINSTAGRAM.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.ActiveEventKey',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_get',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'FilteredText_get'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_get',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOACTIVO.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOACTIVOContainer.ActiveEventKey',ctrl:'DDO_ALUMNOACTIVO',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOACTIVOContainer.SelectedValue_get',ctrl:'DDO_ALUMNOACTIVO',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_ALUMNOACUERDOFOTOGRAFIAS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.ActiveEventKey',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'ActiveEventKey'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_get',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SelectedValue_get'}],[{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9',hsh:true}],[{av:'AV80Update',fld:'vUPDATE',pic:''},{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:'vUPDATE',prop:'Link'},{av:'AV81Delete',fld:'vDELETE',pic:''},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:'vDELETE',prop:'Link'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Link")',ctrl:'ALUMNONOMBRE',prop:'Link'}]];
   this.EvtParms["DDO_GRIDCOLUMNSSELECTOR.ONCOLUMNSCHANGED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_GRIDCOLUMNSSELECTORContainer.ColumnsSelectorValues',ctrl:'DDO_GRIDCOLUMNSSELECTOR',prop:'ColumnsSelectorValues'}],[{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}]];
   this.EvtParms["DDO_MANAGEFILTERS.ONOPTIONCLICKED"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{ctrl:'GRID',prop:'Rows'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'AV48ddo_AlumnoIdTitleControlIdToReplace',fld:'vDDO_ALUMNOIDTITLECONTROLIDTOREPLACE',pic:''},{av:'AV85ddo_AlumnoIdentidadTitleControlIdToReplace',fld:'vDDO_ALUMNOIDENTIDADTITLECONTROLIDTOREPLACE',pic:''},{av:'AV52ddo_AlumnoNombreTitleControlIdToReplace',fld:'vDDO_ALUMNONOMBRETITLECONTROLIDTOREPLACE',pic:''},{av:'AV56ddo_AlumnoTelefonoTitleControlIdToReplace',fld:'vDDO_ALUMNOTELEFONOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV60ddo_AlumnoEmailTitleControlIdToReplace',fld:'vDDO_ALUMNOEMAILTITLECONTROLIDTOREPLACE',pic:''},{av:'AV66ddo_AlumnoFechaNacimientoTitleControlIdToReplace',fld:'vDDO_ALUMNOFECHANACIMIENTOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV70ddo_AlumnoDireccionTitleControlIdToReplace',fld:'vDDO_ALUMNODIRECCIONTITLECONTROLIDTOREPLACE',pic:''},{av:'AV89ddo_AlumnoFacebookTitleControlIdToReplace',fld:'vDDO_ALUMNOFACEBOOKTITLECONTROLIDTOREPLACE',pic:''},{av:'AV93ddo_AlumnoInstagramTitleControlIdToReplace',fld:'vDDO_ALUMNOINSTAGRAMTITLECONTROLIDTOREPLACE',pic:''},{av:'AV73ddo_AlumnoActivoTitleControlIdToReplace',fld:'vDDO_ALUMNOACTIVOTITLECONTROLIDTOREPLACE',pic:''},{av:'AV96ddo_AlumnoAcuerdoFotografiasTitleControlIdToReplace',fld:'vDDO_ALUMNOACUERDOFOTOGRAFIASTITLECONTROLIDTOREPLACE',pic:''},{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'this.DDO_MANAGEFILTERSContainer.ActiveEventKey',ctrl:'DDO_MANAGEFILTERS',prop:'ActiveEventKey'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV39ManageFiltersExecutionStep',fld:'vMANAGEFILTERSEXECUTIONSTEP',pic:'9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDContainer.FilteredText_set',ctrl:'DDO_ALUMNOID',prop:'FilteredText_set'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOID',prop:'FilteredTextTo_set'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.FilteredText_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'FilteredText_set'},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SelectedValue_set'},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.FilteredText_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'FilteredText_set'},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'SelectedValue_set'},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.FilteredText_set',ctrl:'DDO_ALUMNOEMAIL',prop:'FilteredText_set'},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.SelectedValue_set',ctrl:'DDO_ALUMNOEMAIL',prop:'SelectedValue_set'},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredText_set'},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredTextTo_set'},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.FilteredText_set',ctrl:'DDO_ALUMNODIRECCION',prop:'FilteredText_set'},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.SelectedValue_set',ctrl:'DDO_ALUMNODIRECCION',prop:'SelectedValue_set'},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.FilteredText_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'FilteredText_set'},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SelectedValue_set'},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'FilteredText_set'},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SelectedValue_set'},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'this.DDO_ALUMNOACTIVOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACTIVO',prop:'SelectedValue_set'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SelectedValue_set'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'AV45AlumnoIdTitleFilterData',fld:'vALUMNOIDTITLEFILTERDATA',pic:''},{av:'AV82AlumnoIdentidadTitleFilterData',fld:'vALUMNOIDENTIDADTITLEFILTERDATA',pic:''},{av:'AV49AlumnoNombreTitleFilterData',fld:'vALUMNONOMBRETITLEFILTERDATA',pic:''},{av:'AV53AlumnoTelefonoTitleFilterData',fld:'vALUMNOTELEFONOTITLEFILTERDATA',pic:''},{av:'AV57AlumnoEmailTitleFilterData',fld:'vALUMNOEMAILTITLEFILTERDATA',pic:''},{av:'AV61AlumnoFechaNacimientoTitleFilterData',fld:'vALUMNOFECHANACIMIENTOTITLEFILTERDATA',pic:''},{av:'AV67AlumnoDireccionTitleFilterData',fld:'vALUMNODIRECCIONTITLEFILTERDATA',pic:''},{av:'AV86AlumnoFacebookTitleFilterData',fld:'vALUMNOFACEBOOKTITLEFILTERDATA',pic:''},{av:'AV90AlumnoInstagramTitleFilterData',fld:'vALUMNOINSTAGRAMTITLEFILTERDATA',pic:''},{av:'AV71AlumnoActivoTitleFilterData',fld:'vALUMNOACTIVOTITLEFILTERDATA',pic:''},{av:'AV94AlumnoAcuerdoFotografiasTitleFilterData',fld:'vALUMNOACUERDOFOTOGRAFIASTITLEFILTERDATA',pic:''},{av:'AV30ColumnsSelector',fld:'vCOLUMNSSELECTOR',pic:''},{av:'gx.fn.getCtrlProperty("ALUMNOID","Visible")',ctrl:'ALUMNOID',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Visible")',ctrl:'ALUMNOIDENTIDAD',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Visible")',ctrl:'ALUMNONOMBRE',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Visible")',ctrl:'ALUMNOTELEFONO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Visible")',ctrl:'ALUMNOEMAIL',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Visible")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Visible")',ctrl:'ALUMNODIRECCION',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Visible")',ctrl:'ALUMNOFACEBOOK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Visible")',ctrl:'ALUMNOINSTAGRAM',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Visible")',ctrl:'ALUMNOACTIVO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Visible")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Visible'},{ctrl:'ALUMNOID',prop:'Titleformat',hsh:true},{av:'gx.fn.getCtrlProperty("ALUMNOID","Title")',ctrl:'ALUMNOID',prop:'Title'},{ctrl:'ALUMNOIDENTIDAD',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOIDENTIDAD","Title")',ctrl:'ALUMNOIDENTIDAD',prop:'Title'},{ctrl:'ALUMNONOMBRE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Title")',ctrl:'ALUMNONOMBRE',prop:'Title'},{ctrl:'ALUMNOTELEFONO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOTELEFONO","Title")',ctrl:'ALUMNOTELEFONO',prop:'Title'},{ctrl:'ALUMNOEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOEMAIL","Title")',ctrl:'ALUMNOEMAIL',prop:'Title'},{ctrl:'ALUMNOFECHANACIMIENTO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFECHANACIMIENTO","Title")',ctrl:'ALUMNOFECHANACIMIENTO',prop:'Title'},{ctrl:'ALUMNODIRECCION',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNODIRECCION","Title")',ctrl:'ALUMNODIRECCION',prop:'Title'},{ctrl:'ALUMNOFACEBOOK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOFACEBOOK","Title")',ctrl:'ALUMNOFACEBOOK',prop:'Title'},{ctrl:'ALUMNOINSTAGRAM',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOINSTAGRAM","Title")',ctrl:'ALUMNOINSTAGRAM',prop:'Title'},{ctrl:'ALUMNOACTIVO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACTIVO","Title")',ctrl:'ALUMNOACTIVO',prop:'Title'},{ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("ALUMNOACUERDOFOTOGRAFIAS","Title")',ctrl:'ALUMNOACUERDOFOTOGRAFIAS',prop:'Title'},{av:'AV76GridCurrentPage',fld:'vGRIDCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV77GridPageCount',fld:'vGRIDPAGECOUNT',pic:'ZZZZZZZZZ9'},{av:'AV43ManageFiltersData',fld:'vMANAGEFILTERSDATA',pic:''}]];
   this.EvtParms["'DOINSERT'"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["'DOEXPORT'"] = [[{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SelectedValue_set'},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'this.DDO_ALUMNOACTIVOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACTIVO',prop:'SelectedValue_set'},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SelectedValue_set'},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'FilteredText_set'},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SelectedValue_set'},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.FilteredText_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'FilteredText_set'},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.SelectedValue_set',ctrl:'DDO_ALUMNODIRECCION',prop:'SelectedValue_set'},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.FilteredText_set',ctrl:'DDO_ALUMNODIRECCION',prop:'FilteredText_set'},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredTextTo_set'},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.SelectedValue_set',ctrl:'DDO_ALUMNOEMAIL',prop:'SelectedValue_set'},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.FilteredText_set',ctrl:'DDO_ALUMNOEMAIL',prop:'FilteredText_set'},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.FilteredText_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'FilteredText_set'},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SelectedValue_set'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.FilteredText_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDContainer.FilteredText_set',ctrl:'DDO_ALUMNOID',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOIDContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.EvtParms["'DOEXPORTREPORT'"] = [[{av:'AV121Pgmname',fld:'vPGMNAME',pic:''},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''}],[{av:'this.INNEWWINDOW1Container.Target',ctrl:'INNEWWINDOW1',prop:'Target'},{av:'this.INNEWWINDOW1Container.Height',ctrl:'INNEWWINDOW1',prop:'Height'},{av:'this.INNEWWINDOW1Container.Width',ctrl:'INNEWWINDOW1',prop:'Width'},{av:'AV10GridState',fld:'vGRIDSTATE',pic:''},{av:'AV12OrderedBy',fld:'vORDEREDBY',pic:'ZZZ9'},{av:'AV13OrderedDsc',fld:'vORDEREDDSC',pic:''},{ctrl:'GRID',prop:'Rows'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SortedStatus',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SortedStatus'},{av:'this.DDO_ALUMNOACTIVOContainer.SortedStatus',ctrl:'DDO_ALUMNOACTIVO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SortedStatus',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFACEBOOKContainer.SortedStatus',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SortedStatus'},{av:'this.DDO_ALUMNODIRECCIONContainer.SortedStatus',ctrl:'DDO_ALUMNODIRECCION',prop:'SortedStatus'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.SortedStatus',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'SortedStatus'},{av:'this.DDO_ALUMNOEMAILContainer.SortedStatus',ctrl:'DDO_ALUMNOEMAIL',prop:'SortedStatus'},{av:'this.DDO_ALUMNOTELEFONOContainer.SortedStatus',ctrl:'DDO_ALUMNOTELEFONO',prop:'SortedStatus'},{av:'this.DDO_ALUMNONOMBREContainer.SortedStatus',ctrl:'DDO_ALUMNONOMBRE',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDENTIDADContainer.SortedStatus',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SortedStatus'},{av:'this.DDO_ALUMNOIDContainer.SortedStatus',ctrl:'DDO_ALUMNOID',prop:'SortedStatus'},{av:'AV95TFAlumnoAcuerdoFotografias_Sel',fld:'vTFALUMNOACUERDOFOTOGRAFIAS_SEL',pic:'9'},{av:'this.DDO_ALUMNOACUERDOFOTOGRAFIASContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACUERDOFOTOGRAFIAS',prop:'SelectedValue_set'},{av:'AV72TFAlumnoActivo_Sel',fld:'vTFALUMNOACTIVO_SEL',pic:'9'},{av:'this.DDO_ALUMNOACTIVOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOACTIVO',prop:'SelectedValue_set'},{av:'AV92TFAlumnoInstagram_Sel',fld:'vTFALUMNOINSTAGRAM_SEL',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.SelectedValue_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'SelectedValue_set'},{av:'AV91TFAlumnoInstagram',fld:'vTFALUMNOINSTAGRAM',pic:''},{av:'this.DDO_ALUMNOINSTAGRAMContainer.FilteredText_set',ctrl:'DDO_ALUMNOINSTAGRAM',prop:'FilteredText_set'},{av:'AV88TFAlumnoFacebook_Sel',fld:'vTFALUMNOFACEBOOK_SEL',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.SelectedValue_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'SelectedValue_set'},{av:'AV87TFAlumnoFacebook',fld:'vTFALUMNOFACEBOOK',pic:''},{av:'this.DDO_ALUMNOFACEBOOKContainer.FilteredText_set',ctrl:'DDO_ALUMNOFACEBOOK',prop:'FilteredText_set'},{av:'AV69TFAlumnoDireccion_Sel',fld:'vTFALUMNODIRECCION_SEL',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.SelectedValue_set',ctrl:'DDO_ALUMNODIRECCION',prop:'SelectedValue_set'},{av:'AV68TFAlumnoDireccion',fld:'vTFALUMNODIRECCION',pic:''},{av:'this.DDO_ALUMNODIRECCIONContainer.FilteredText_set',ctrl:'DDO_ALUMNODIRECCION',prop:'FilteredText_set'},{av:'AV62TFAlumnoFechaNacimiento',fld:'vTFALUMNOFECHANACIMIENTO',pic:''},{av:'AV63TFAlumnoFechaNacimiento_To',fld:'vTFALUMNOFECHANACIMIENTO_TO',pic:''},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredText_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOFECHANACIMIENTOContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOFECHANACIMIENTO',prop:'FilteredTextTo_set'},{av:'AV59TFAlumnoEmail_Sel',fld:'vTFALUMNOEMAIL_SEL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.SelectedValue_set',ctrl:'DDO_ALUMNOEMAIL',prop:'SelectedValue_set'},{av:'AV58TFAlumnoEmail',fld:'vTFALUMNOEMAIL',pic:''},{av:'this.DDO_ALUMNOEMAILContainer.FilteredText_set',ctrl:'DDO_ALUMNOEMAIL',prop:'FilteredText_set'},{av:'AV55TFAlumnoTelefono_Sel',fld:'vTFALUMNOTELEFONO_SEL',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.SelectedValue_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'SelectedValue_set'},{av:'AV54TFAlumnoTelefono',fld:'vTFALUMNOTELEFONO',pic:''},{av:'this.DDO_ALUMNOTELEFONOContainer.FilteredText_set',ctrl:'DDO_ALUMNOTELEFONO',prop:'FilteredText_set'},{av:'AV51TFAlumnoNombre_Sel',fld:'vTFALUMNONOMBRE_SEL',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.SelectedValue_set',ctrl:'DDO_ALUMNONOMBRE',prop:'SelectedValue_set'},{av:'AV50TFAlumnoNombre',fld:'vTFALUMNONOMBRE',pic:''},{av:'this.DDO_ALUMNONOMBREContainer.FilteredText_set',ctrl:'DDO_ALUMNONOMBRE',prop:'FilteredText_set'},{av:'AV84TFAlumnoIdentidad_Sel',fld:'vTFALUMNOIDENTIDAD_SEL',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.SelectedValue_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'SelectedValue_set'},{av:'AV83TFAlumnoIdentidad',fld:'vTFALUMNOIDENTIDAD',pic:''},{av:'this.DDO_ALUMNOIDENTIDADContainer.FilteredText_set',ctrl:'DDO_ALUMNOIDENTIDAD',prop:'FilteredText_set'},{av:'AV46TFAlumnoId',fld:'vTFALUMNOID',pic:'ZZZ9'},{av:'AV47TFAlumnoId_To',fld:'vTFALUMNOID_TO',pic:'ZZZ9'},{av:'this.DDO_ALUMNOIDContainer.FilteredText_set',ctrl:'DDO_ALUMNOID',prop:'FilteredText_set'},{av:'this.DDO_ALUMNOIDContainer.FilteredTextTo_set',ctrl:'DDO_ALUMNOID',prop:'FilteredTextTo_set'},{av:'AV15FilterFullText',fld:'vFILTERFULLTEXT',pic:''}]];
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV121Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV10GridState", "vGRIDSTATE", 0, "WWPBaseObjects\WWPGridState", 0, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV121Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("AV30ColumnsSelector", "vCOLUMNSSELECTOR", 0, "WWPBaseObjects\WWPColumnsSelector", 0, 0);
   this.setVCMap("AV121Pgmname", "vPGMNAME", 0, "char", 129, 0);
   GridContainer.addRefreshingVar(this.GXValidFnc[35]);
   GridContainer.addRefreshingVar(this.GXValidFnc[90]);
   GridContainer.addRefreshingVar(this.GXValidFnc[91]);
   GridContainer.addRefreshingVar(this.GXValidFnc[93]);
   GridContainer.addRefreshingVar(this.GXValidFnc[94]);
   GridContainer.addRefreshingVar(this.GXValidFnc[95]);
   GridContainer.addRefreshingVar(this.GXValidFnc[96]);
   GridContainer.addRefreshingVar(this.GXValidFnc[97]);
   GridContainer.addRefreshingVar(this.GXValidFnc[98]);
   GridContainer.addRefreshingVar(this.GXValidFnc[99]);
   GridContainer.addRefreshingVar(this.GXValidFnc[100]);
   GridContainer.addRefreshingVar(this.GXValidFnc[101]);
   GridContainer.addRefreshingVar(this.GXValidFnc[102]);
   GridContainer.addRefreshingVar(this.GXValidFnc[103]);
   GridContainer.addRefreshingVar(this.GXValidFnc[104]);
   GridContainer.addRefreshingVar(this.GXValidFnc[108]);
   GridContainer.addRefreshingVar(this.GXValidFnc[109]);
   GridContainer.addRefreshingVar(this.GXValidFnc[110]);
   GridContainer.addRefreshingVar(this.GXValidFnc[111]);
   GridContainer.addRefreshingVar(this.GXValidFnc[112]);
   GridContainer.addRefreshingVar(this.GXValidFnc[113]);
   GridContainer.addRefreshingVar(this.GXValidFnc[114]);
   GridContainer.addRefreshingVar(this.GXValidFnc[115]);
   GridContainer.addRefreshingVar(this.GXValidFnc[92]);
   GridContainer.addRefreshingVar({rfrVar:"AV30ColumnsSelector"});
   GridContainer.addRefreshingVar(this.GXValidFnc[66]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar(this.GXValidFnc[72]);
   GridContainer.addRefreshingVar(this.GXValidFnc[74]);
   GridContainer.addRefreshingVar(this.GXValidFnc[76]);
   GridContainer.addRefreshingVar(this.GXValidFnc[78]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar(this.GXValidFnc[82]);
   GridContainer.addRefreshingVar(this.GXValidFnc[84]);
   GridContainer.addRefreshingVar(this.GXValidFnc[86]);
   GridContainer.addRefreshingVar({rfrVar:"AV121Pgmname"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.alumnoww);});
