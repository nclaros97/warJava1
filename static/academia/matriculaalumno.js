/*!   GeneXus Java 16_0_1-129648 on November 3, 2019 16:4:11.18
*/
gx.evt.autoSkip = false;
gx.define('academia.matriculaalumno', false, function () {
   this.ServerClass =  "academia.matriculaalumno" ;
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
      this.AV12NombreAlumno=gx.fn.getControlValue("vNOMBREALUMNO") ;
      this.AV14SDT_MatriculasAlumno=gx.fn.getControlValue("vSDT_MATRICULASALUMNO") ;
      this.AV12NombreAlumno=gx.fn.getControlValue("vNOMBREALUMNO") ;
   };
   this.e182n2_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.alumnoprompt", [this.AV11IdAlumno, this.AV12NombreAlumno]);
      this.refreshOutputs([{av:'AV12NombreAlumno',fld:'vNOMBREALUMNO',pic:''},{av:'AV11IdAlumno',fld:'vIDALUMNO',pic:'ZZZ9'}]);
      return gx.$.Deferred().resolve();
   };
   this.e112n2_client=function()
   {
      return this.executeServerEvent("GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEPAGE", false, null, true, true);
   };
   this.e122n2_client=function()
   {
      return this.executeServerEvent("GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEROWSPERPAGE", false, null, true, true);
   };
   this.e132n2_client=function()
   {
      return this.executeServerEvent("'DOBTNBUSCAR'", false, null, false, false);
   };
   this.e172n2_client=function()
   {
      return this.executeServerEvent("VBTNPAGOS.CLICK", true, arguments[0], false, false);
   };
   this.e192n2_client=function()
   {
      return this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e202n2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,23,26,27,28,30,31,32,35,38,39,40,42,43,44,45,46,47,48,49,50,51,52,53,55];
   this.GXLastCtrlId =55;
   this.Gridsdt_matriculasalumnosContainer = new gx.grid.grid(this, 2,"WbpLvl2",41,"Gridsdt_matriculasalumnos","Gridsdt_matriculasalumnos","Gridsdt_matriculasalumnosContainer",this.CmpContext,this.IsMasterPage,"academia.matriculaalumno",[],false,1,false,true,0,false,false,false,"CollAcademia\SDT_MatriculasAlumno.SDT_MatriculasAlumnoItem",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"AV14SDT_MatriculasAlumno",false,[1,1,1,1],false,0,true,false);
   var Gridsdt_matriculasalumnosContainer = this.Gridsdt_matriculasalumnosContainer;
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV2",42,"SDT_MATRICULASALUMNO__ALUMNOID","Id","","AlumnoId","int",0,"px",4,4,"right",null,[],"GXV2","GXV2",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV3",43,"SDT_MATRICULASALUMNO__ALUMNONOMBRE","Alumno","","AlumnoNombre","char",0,"px",50,50,"left",null,[],"GXV3","GXV3",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV4",44,"SDT_MATRICULASALUMNO__ALUMNOTELEFONO","Teléfono","","AlumnoTelefono","char",0,"px",20,20,"left",null,[],"GXV4","GXV4",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addCheckBox("GXV5",45,"SDT_MATRICULASALUMNO__ALUMNOACTIVO","Activo","","AlumnoActivo","boolean","true","false",null,true,false,0,"px","WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV6",46,"SDT_MATRICULASALUMNO__MATRICULAFECHA","Fecha Matrícula","","MatriculaFecha","date",0,"px",8,8,"right",null,[],"GXV6","GXV6",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV7",47,"SDT_MATRICULASALUMNO__CURSONOMBRE","Curso","","CursoNombre","char",0,"px",50,50,"left",null,[],"GXV7","GXV7",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV8",48,"SDT_MATRICULASALUMNO__NIVELNOMBRE","Nivel","","NivelNombre","char",0,"px",50,50,"left",null,[],"GXV8","GXV8",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("GXV9",49,"SDT_MATRICULASALUMNO__DOCENTENOMBRE","Docente","","DocenteNombre","char",0,"px",50,50,"left",null,[],"GXV9","GXV9",true,0,false,false,"Attribute",1,"WWColumn");
   Gridsdt_matriculasalumnosContainer.addSingleLineEdit("Btnpagos",50,"vBTNPAGOS","","","btnPagos","char",0,"px",20,20,"left","e172n2_client",[],"Btnpagos","btnPagos",true,0,false,false,"Attribute",1,"WWActionColumn");
   this.Gridsdt_matriculasalumnosContainer.emptyText = "";
   this.setGrid(Gridsdt_matriculasalumnosContainer);
   this.DVPANEL_UNNAMEDTABLE1Container = gx.uc.getNew(this, 16, 0, "BootstrapPanel", "DVPANEL_UNNAMEDTABLE1Container", "Dvpanel_unnamedtable1", "DVPANEL_UNNAMEDTABLE1");
   var DVPANEL_UNNAMEDTABLE1Container = this.DVPANEL_UNNAMEDTABLE1Container;
   DVPANEL_UNNAMEDTABLE1Container.setProp("Class", "Class", "", "char");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Width", "Width", "100%", "str");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Height", "Height", "100", "str");
   DVPANEL_UNNAMEDTABLE1Container.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Cls", "Cls", "PanelCard_BaseColor", "str");
   DVPANEL_UNNAMEDTABLE1Container.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Title", "Title", "Pagos Alumnos", "str");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Collapsible", "Collapsible", true, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("IconPosition", "Iconposition", "left", "str");
   DVPANEL_UNNAMEDTABLE1Container.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setProp("Visible", "Visible", true, "bool");
   DVPANEL_UNNAMEDTABLE1Container.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_UNNAMEDTABLE1Container);
   this.GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer = gx.uc.getNew(this, 54, 28, "DVelop_DVPaginationBar", "GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer", "Gridsdt_matriculasalumnospaginationbar", "GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR");
   var GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer = this.GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer;
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Enabled", "Enabled", true, "boolean");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Class", "Class", "PaginationBar", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("ShowFirst", "Showfirst", false, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("ShowPrevious", "Showprevious", true, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("ShowNext", "Shownext", true, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("ShowLast", "Showlast", false, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("PagesToShow", "Pagestoshow", 5, "num");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("PagingButtonsPosition", "Pagingbuttonsposition", "Right", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("PagingCaptionPosition", "Pagingcaptionposition", "Left", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("EmptyGridClass", "Emptygridclass", "PaginationBarEmptyGrid", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("SelectedPage", "Selectedpage", "", "char");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("RowsPerPageSelector", "Rowsperpageselector", true, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setDynProp("RowsPerPageSelectedValue", "Rowsperpageselectedvalue", 10, "num");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("RowsPerPageOptions", "Rowsperpageoptions", "5:WWP_Rows5,10:WWP_Rows10,20:WWP_Rows20,50:WWP_Rows50", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("First", "First", "First", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Previous", "Previous", "WWP_PagingPreviousCaption", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Next", "Next", "WWP_PagingNextCaption", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Last", "Last", "Last", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Caption", "Caption", "Página <CURRENT_PAGE> de <TOTAL_PAGES>", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("EmptyGridCaption", "Emptygridcaption", "WWP_PagingEmptyGridCaption", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("RowsPerPageCaption", "Rowsperpagecaption", "WWP_PagingRowsPerPage", "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addV2CFunction('AV7GridSDT_MatriculasAlumnosCurrentPage', "vGRIDSDT_MATRICULASALUMNOSCURRENTPAGE", 'SetCurrentPage');
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV7GridSDT_MatriculasAlumnosCurrentPage=UC.GetCurrentPage();gx.fn.setControlValue("vGRIDSDT_MATRICULASALUMNOSCURRENTPAGE",UC.ParentObject.AV7GridSDT_MatriculasAlumnosCurrentPage); });
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addV2CFunction('AV8GridSDT_MatriculasAlumnosPageCount', "vGRIDSDT_MATRICULASALUMNOSPAGECOUNT", 'SetPageCount');
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addC2VFunction(function(UC) { UC.ParentObject.AV8GridSDT_MatriculasAlumnosPageCount=UC.GetPageCount();gx.fn.setControlValue("vGRIDSDT_MATRICULASALUMNOSPAGECOUNT",UC.ParentObject.AV8GridSDT_MatriculasAlumnosPageCount); });
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("RecordCount", "Recordcount", '', "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Page", "Page", '', "str");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setProp("Visible", "Visible", true, "bool");
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.setC2ShowFunction(function(UC) { UC.show(); });
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addEventHandler("ChangePage", this.e112n2_client);
   GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.addEventHandler("ChangeRowsPerPage", this.e122n2_client);
   this.setUserControl(GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer);
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"TABLECONTENT",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"HTML_DVPANEL_UNNAMEDTABLE1",grid:0};
   GXValidFnc[18]={ id: 18, fld:"LAYOUT_UNNAMEDTABLE1",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[23]={ id: 23, fld:"UNNAMEDTABLE2",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id:28 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vIDALUMNO",gxz:"ZV11IdAlumno",gxold:"OV11IdAlumno",gxvar:"AV11IdAlumno",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV11IdAlumno=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV11IdAlumno=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vIDALUMNO",gx.O.AV11IdAlumno,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV11IdAlumno=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vIDALUMNO",'.')},nac:gx.falseFn};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id:32 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vALUMNONOMBRE",gxz:"ZV15AlumnoNombre",gxold:"OV15AlumnoNombre",gxvar:"AV15AlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV15AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV15AlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("vALUMNONOMBRE",gx.O.AV15AlumnoNombre,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV15AlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("vALUMNONOMBRE")},nac:gx.falseFn};
   GXValidFnc[35]={ id: 35, fld:"BTNBTNBUSCAR",grid:0};
   GXValidFnc[38]={ id: 38, fld:"GRIDSDT_MATRICULASALUMNOSTABLEWITHPAGINATIONBAR",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[42]={ id:42 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__ALUMNOID",gxz:"ZV19GXV2",gxold:"OV19GXV2",gxvar:"GXV2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.GXV2=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV19GXV2=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__ALUMNOID",row || gx.fn.currentGridRowImpl(41),gx.O.GXV2,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV2=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SDT_MATRICULASALUMNO__ALUMNOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[43]={ id:43 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__ALUMNONOMBRE",gxz:"ZV20GXV3",gxold:"OV20GXV3",gxvar:"GXV3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV3=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV20GXV3=Value},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(41),gx.O.GXV3,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV3=this.val()},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__ALUMNONOMBRE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={ id:44 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__ALUMNOTELEFONO",gxz:"ZV21GXV4",gxold:"OV21GXV4",gxvar:"GXV4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.GXV4=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV21GXV4=Value},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__ALUMNOTELEFONO",row || gx.fn.currentGridRowImpl(41),gx.O.GXV4,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV4=this.val()},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__ALUMNOTELEFONO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={ id:45 ,lvl:2,type:"boolean",len:4,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__ALUMNOACTIVO",gxz:"ZV22GXV5",gxold:"OV22GXV5",gxvar:"GXV5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.GXV5=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.ZV22GXV5=gx.lang.booleanValue(Value)},v2c:function(row){gx.fn.setGridCheckBoxValue("SDT_MATRICULASALUMNO__ALUMNOACTIVO",row || gx.fn.currentGridRowImpl(41),gx.O.GXV5,true)},c2v:function(){if(this.val()!==undefined)gx.O.GXV5=gx.lang.booleanValue(this.val())},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__ALUMNOACTIVO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[46]={ id:46 ,lvl:2,type:"date",len:8,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__MATRICULAFECHA",gxz:"ZV23GXV6",gxold:"OV23GXV6",gxvar:"GXV6",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){if(Value!==undefined)gx.O.GXV6=gx.fn.toDatetimeValue(Value,"Y4MD")},v2z:function(Value){if(Value!==undefined)gx.O.ZV23GXV6=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__MATRICULAFECHA",row || gx.fn.currentGridRowImpl(41),gx.O.GXV6,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV6=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SDT_MATRICULASALUMNO__MATRICULAFECHA",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={ id:47 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__CURSONOMBRE",gxz:"ZV24GXV7",gxold:"OV24GXV7",gxvar:"GXV7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV7=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV24GXV7=Value},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__CURSONOMBRE",row || gx.fn.currentGridRowImpl(41),gx.O.GXV7,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV7=this.val()},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__CURSONOMBRE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={ id:48 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__NIVELNOMBRE",gxz:"ZV25GXV8",gxold:"OV25GXV8",gxvar:"GXV8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV8=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV25GXV8=Value},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__NIVELNOMBRE",row || gx.fn.currentGridRowImpl(41),gx.O.GXV8,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV8=this.val()},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__NIVELNOMBRE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={ id:49 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"SDT_MATRICULASALUMNO__DOCENTENOMBRE",gxz:"ZV26GXV9",gxold:"OV26GXV9",gxvar:"GXV9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.GXV9=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV26GXV9=Value},v2c:function(row){gx.fn.setGridControlValue("SDT_MATRICULASALUMNO__DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(41),gx.O.GXV9,0)},c2v:function(){if(this.val()!==undefined)gx.O.GXV9=this.val()},val:function(row){return gx.fn.getGridControlValue("SDT_MATRICULASALUMNO__DOCENTENOMBRE",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={ id:50 ,lvl:2,type:"char",len:20,dec:0,sign:false,ro:0,isacc:0,grid:41,gxgrid:this.Gridsdt_matriculasalumnosContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vBTNPAGOS",gxz:"ZV6btnPagos",gxold:"OV6btnPagos",gxvar:"AV6btnPagos",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.AV6btnPagos=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV6btnPagos=Value},v2c:function(row){gx.fn.setGridControlValue("vBTNPAGOS",row || gx.fn.currentGridRowImpl(41),gx.O.AV6btnPagos,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV6btnPagos=this.val()},val:function(row){return gx.fn.getGridControlValue("vBTNPAGOS",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn,evt:"e172n2_client"};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"HTML_GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR",grid:0};
   GXValidFnc[55]={ id: 55, fld:"PROMPT_IDALUMNO_ALUMNONOMBRE",grid:0};
   this.AV11IdAlumno = 0 ;
   this.ZV11IdAlumno = 0 ;
   this.OV11IdAlumno = 0 ;
   this.AV15AlumnoNombre = "" ;
   this.ZV15AlumnoNombre = "" ;
   this.OV15AlumnoNombre = "" ;
   this.ZV19GXV2 = 0 ;
   this.OV19GXV2 = 0 ;
   this.ZV20GXV3 = "" ;
   this.OV20GXV3 = "" ;
   this.ZV21GXV4 = "" ;
   this.OV21GXV4 = "" ;
   this.ZV22GXV5 = false ;
   this.OV22GXV5 = false ;
   this.ZV23GXV6 = gx.date.nullDate() ;
   this.OV23GXV6 = gx.date.nullDate() ;
   this.ZV24GXV7 = "" ;
   this.OV24GXV7 = "" ;
   this.ZV25GXV8 = "" ;
   this.OV25GXV8 = "" ;
   this.ZV26GXV9 = "" ;
   this.OV26GXV9 = "" ;
   this.ZV6btnPagos = "" ;
   this.OV6btnPagos = "" ;
   this.AV11IdAlumno = 0 ;
   this.AV15AlumnoNombre = "" ;
   this.AV7GridSDT_MatriculasAlumnosCurrentPage = 0 ;
   this.GXV2 = 0 ;
   this.GXV3 = "" ;
   this.GXV4 = "" ;
   this.GXV5 = false ;
   this.GXV6 = gx.date.nullDate() ;
   this.GXV7 = "" ;
   this.GXV8 = "" ;
   this.GXV9 = "" ;
   this.AV6btnPagos = "" ;
   this.AV12NombreAlumno = "" ;
   this.AV14SDT_MatriculasAlumno = [ ] ;
   this.Events = {"e112n2_client": ["GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEPAGE", true] ,"e122n2_client": ["GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEROWSPERPAGE", true] ,"e132n2_client": ["'DOBTNBUSCAR'", true] ,"e172n2_client": ["VBTNPAGOS.CLICK", true] ,"e192n2_client": ["ENTER", true] ,"e202n2_client": ["CANCEL", true] ,"e182n2_client": ["'DOBTNBUSCAREXTRA'", false]};
   this.EvtParms["REFRESH"] = [[{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'GRIDSDT_MATRICULASALUMNOS_nEOF'},{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'},{ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'Rows'}],[{av:'AV7GridSDT_MatriculasAlumnosCurrentPage',fld:'vGRIDSDT_MATRICULASALUMNOSCURRENTPAGE',pic:'ZZZZZZZZZ9'},{av:'AV8GridSDT_MatriculasAlumnosPageCount',fld:'vGRIDSDT_MATRICULASALUMNOSPAGECOUNT',pic:'ZZZZZZZZZ9'}]];
   this.EvtParms["START"] = [[],[{ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'Rows'},{av:'this.GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}]];
   this.EvtParms["GRIDSDT_MATRICULASALUMNOS.LOAD"] = [[],[{av:'AV6btnPagos',fld:'vBTNPAGOS',pic:''}]];
   this.EvtParms["GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEPAGE"] = [[{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'GRIDSDT_MATRICULASALUMNOS_nEOF'},{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'},{ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'Rows'},{av:'this.GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.SelectedPage',ctrl:'GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR',prop:'SelectedPage'}],[]];
   this.EvtParms["GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR.CHANGEROWSPERPAGE"] = [[{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'GRIDSDT_MATRICULASALUMNOS_nEOF'},{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'},{ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'Rows'},{av:'this.GRIDSDT_MATRICULASALUMNOSPAGINATIONBARContainer.RowsPerPageSelectedValue',ctrl:'GRIDSDT_MATRICULASALUMNOSPAGINATIONBAR',prop:'RowsPerPageSelectedValue'}],[{ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'Rows'}]];
   this.EvtParms["'DOBTNBUSCAR'"] = [[{av:'AV11IdAlumno',fld:'vIDALUMNO',pic:'ZZZ9'},{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'},{av:'GRIDSDT_MATRICULASALUMNOS_nEOF'},{av:'subGridsdt_matriculasalumnos_Rows'}],[{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'}]];
   this.EvtParms["'DOBTNBUSCAREXTRA'"] = [[{av:'AV11IdAlumno',fld:'vIDALUMNO',pic:'ZZZ9'},{av:'AV12NombreAlumno',fld:'vNOMBREALUMNO',pic:''}],[{av:'AV12NombreAlumno',fld:'vNOMBREALUMNO',pic:''},{av:'AV11IdAlumno',fld:'vIDALUMNO',pic:'ZZZ9'}]];
   this.EvtParms["VBTNPAGOS.CLICK"] = [[{av:'AV14SDT_MatriculasAlumno',fld:'vSDT_MATRICULASALUMNO',grid:41,pic:''},{av:'GRIDSDT_MATRICULASALUMNOS_nFirstRecordOnPage'},{av:'nRC_GXsfl_41',ctrl:'GRIDSDT_MATRICULASALUMNOS',prop:'GridRC'}],[]];
   this.setPrompt("PROMPT_IDALUMNO_ALUMNONOMBRE", [28,32]);
   this.setVCMap("AV12NombreAlumno", "vNOMBREALUMNO", 0, "svchar", 40, 0);
   this.setVCMap("AV14SDT_MatriculasAlumno", "vSDT_MATRICULASALUMNO", 0, "CollAcademia\SDT_MatriculasAlumno.SDT_MatriculasAlumnoItem", 0, 0);
   this.setVCMap("AV12NombreAlumno", "vNOMBREALUMNO", 0, "svchar", 40, 0);
   this.addGridBCProperty("Sdt_matriculasalumno", ["AlumnoId"], this.GXValidFnc[42], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["AlumnoNombre"], this.GXValidFnc[43], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["AlumnoTelefono"], this.GXValidFnc[44], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["AlumnoActivo"], this.GXValidFnc[45], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["MatriculaFecha"], this.GXValidFnc[46], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["CursoNombre"], this.GXValidFnc[47], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["NivelNombre"], this.GXValidFnc[48], "AV14SDT_MatriculasAlumno");
   this.addGridBCProperty("Sdt_matriculasalumno", ["DocenteNombre"], this.GXValidFnc[49], "AV14SDT_MatriculasAlumno");
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.matriculaalumno);});
