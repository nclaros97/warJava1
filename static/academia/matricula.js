/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:8:30.67
*/
gx.evt.autoSkip = false;
gx.define('academia.matricula', false, function () {
   this.ServerClass =  "academia.matricula" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV16MatriculaId=gx.fn.getIntegerValue("vMATRICULAID",'.') ;
      this.AV10Insert_AlumnoId=gx.fn.getIntegerValue("vINSERT_ALUMNOID",'.') ;
      this.AV11Insert_HorarioId=gx.fn.getIntegerValue("vINSERT_HORARIOID",'.') ;
      this.AV12Insert_PoliticaId=gx.fn.getIntegerValue("vINSERT_POLITICAID",'.') ;
      this.Gx_date=gx.fn.getDateValue("vTODAY") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV19Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Matriculaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MATRICULAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Matriculafecha=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MATRICULAFECHA");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A40MatriculaFecha)==0) || new gx.date.gxdate( this.A40MatriculaFecha ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Matricula Fecha fuera de rango");
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
   this.Valid_Alumnoid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Alumnoid",["gx.O.A1AlumnoId", "gx.O.A2AlumnoNombre"],["A2AlumnoNombre"]);
      return true;
   }
   this.Valid_Horarioid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Horarioid",["gx.O.A24HorarioId", "gx.O.A10CursoId", "gx.O.A23NivelId", "gx.O.A18HorarioNombre", 'gx.date.urlDate(gx.O.A20HorarioFechaInicio,"DMY")', "gx.O.A11CursoNombre", "gx.O.A19NivelNombre"],["A18HorarioNombre", "A20HorarioFechaInicio", "A10CursoId", "A23NivelId", "A11CursoNombre", "A19NivelNombre"]);
      return true;
   }
   this.Valid_Cursoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("CURSOID");
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
         var gxballoon = gx.util.balloon.getNew("NIVELID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Politicaid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Politicaid",["gx.O.A26PoliticaId", "gx.O.A41PoliticaNombre"],["A41PoliticaNombre"]);
      return true;
   }
   this.Valid_Matriculapreciocompleto=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MATRICULAPRECIOCOMPLETO");
         this.AnyError  = 0;
         try {
            if ( this.A107MatriculaPrecioCompleto == true )
            {
               gx.fn.setCtrlProperty("MATRICULACANTIDADPERIODOSCANCE","Enabled", 0 );
            }
            else
            {
               gx.fn.setCtrlProperty("MATRICULACANTIDADPERIODOSCANCE","Enabled", 1 );
            }
         }
         catch(e){}
         try {
            if ( this.A107MatriculaPrecioCompleto == true )
            {
               this.A42MatriculaCantidadPeriodosCance = gx.num.trunc( 3 ,0) ;
            }
         }
         catch(e){}

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Matriculacantidadperiodoscance=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MATRICULACANTIDADPERIODOSCANCE");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e12072_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e13078_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14078_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,96,97,99,100,101,102,103,104,105,106,107,108,109,110,111,112,115,116,118,119,120,121,122,123,124,125,126,127,128,129,130];
   this.GXLastCtrlId =130;
   this.DVPANEL_TABLEATTRIBUTESContainer = gx.uc.getNew(this, 16, 0, "BootstrapPanel", "DVPANEL_TABLEATTRIBUTESContainer", "Dvpanel_tableattributes", "DVPANEL_TABLEATTRIBUTES");
   var DVPANEL_TABLEATTRIBUTESContainer = this.DVPANEL_TABLEATTRIBUTESContainer;
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Class", "Class", "", "char");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Enabled", "Enabled", true, "boolean");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Width", "Width", "100%", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Height", "Height", "100", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoWidth", "Autowidth", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoHeight", "Autoheight", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Cls", "Cls", "PanelCard_BaseColor", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowHeader", "Showheader", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Matrícula Alumno", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsible", "Collapsible", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Collapsed", "Collapsed", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("ShowCollapseIcon", "Showcollapseicon", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("IconPosition", "Iconposition", "left", "str");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("AutoScroll", "Autoscroll", false, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Visible", "Visible", true, "bool");
   DVPANEL_TABLEATTRIBUTESContainer.setC2ShowFunction(function(UC) { UC.show(); });
   this.setUserControl(DVPANEL_TABLEATTRIBUTESContainer);
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
   GXValidFnc[15]={ id: 15, fld:"HTML_DVPANEL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[18]={ id: 18, fld:"LAYOUT_TABLEATTRIBUTES",grid:0};
   GXValidFnc[19]={ id: 19, fld:"",grid:0};
   GXValidFnc[20]={ id: 20, fld:"TABLEATTRIBUTES",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Matriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAID",gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Matriculafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAFECHA",gxz:"Z40MatriculaFecha",gxold:"O40MatriculaFecha",gxvar:"A40MatriculaFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[30],ip:[30],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAFECHA",gx.O.A40MatriculaFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAFECHA")},nac:gx.falseFn};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Alumnoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOID",gxz:"Z1AlumnoId",gxold:"O1AlumnoId",gxvar:"A1AlumnoId",ucs:[],op:[40],ip:[40,35],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1AlumnoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1AlumnoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALUMNOID",gx.O.A1AlumnoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A1AlumnoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALUMNOID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV10Insert_AlumnoId))}};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNONOMBRE",gxz:"Z2AlumnoNombre",gxold:"O2AlumnoNombre",gxvar:"A2AlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2AlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("ALUMNONOMBRE",gx.O.A2AlumnoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A2AlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("ALUMNONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[75,65,70,60,55,50],ip:[75,65,55,50,70,60,45],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HORARIOID",gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HORARIOID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_HorarioId))}};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(){gx.fn.setControlValue("HORARIONOMBRE",gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("HORARIONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HORARIOFECHAINICIO",gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("HORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CURSOID",gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CURSOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NIVELID",gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NIVELID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(){gx.fn.setControlValue("NIVELNOMBRE",gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(){return gx.fn.getControlValue("NIVELNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Politicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAID",gxz:"Z26PoliticaId",gxold:"O26PoliticaId",gxvar:"A26PoliticaId",ucs:[],op:[85],ip:[85,80],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A26PoliticaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z26PoliticaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAID",gx.O.A26PoliticaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A26PoliticaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV12Insert_PoliticaId))}};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id:85 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICANOMBRE",gxz:"Z41PoliticaNombre",gxold:"O41PoliticaNombre",gxvar:"A41PoliticaNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A41PoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z41PoliticaNombre=Value},v2c:function(){gx.fn.setControlValue("POLITICANOMBRE",gx.O.A41PoliticaNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A41PoliticaNombre=this.val()},val:function(){return gx.fn.getControlValue("POLITICANOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"TABLESPLITTEDMATRICULAPRECIOCOMPLETO",grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"TEXTBLOCKMATRICULAPRECIOCOMPLETO", format:0,grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id: 93, fld:"TABLEMERGEDMATRICULAPRECIOCOMPLETO",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id:97 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Matriculapreciocompleto,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAPRECIOCOMPLETO",gxz:"Z107MatriculaPrecioCompleto",gxold:"O107MatriculaPrecioCompleto",gxvar:"A107MatriculaPrecioCompleto",ucs:[],op:[104],ip:[104,97],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A107MatriculaPrecioCompleto=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z107MatriculaPrecioCompleto=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MATRICULAPRECIOCOMPLETO",gx.O.A107MatriculaPrecioCompleto,true)},c2v:function(){if(this.val()!==undefined)gx.O.A107MatriculaPrecioCompleto=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAPRECIOCOMPLETO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[99]={ id: 99, fld:"MATRICULAPRECIOCOMPLETO_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id:104 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Matriculacantidadperiodoscance,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULACANTIDADPERIODOSCANCE",gxz:"Z42MatriculaCantidadPeriodosCance",gxold:"O42MatriculaCantidadPeriodosCance",gxvar:"A42MatriculaCantidadPeriodosCance",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A42MatriculaCantidadPeriodosCance=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z42MatriculaCantidadPeriodosCance=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULACANTIDADPERIODOSCANCE",gx.O.A42MatriculaCantidadPeriodosCance,0)},c2v:function(){if(this.val()!==undefined)gx.O.A42MatriculaCantidadPeriodosCance=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULACANTIDADPERIODOSCANCE",'.')},nac:function(){return (this.A107MatriculaPrecioCompleto==true)}};
   GXValidFnc[105]={ id: 105, fld:"",grid:0};
   GXValidFnc[106]={ id: 106, fld:"",grid:0};
   GXValidFnc[107]={ id: 107, fld:"TABLESPLITTEDMATRICULAAPROBADO",grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"TEXTBLOCKMATRICULAAPROBADO", format:0,grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"TABLEMERGEDMATRICULAAPROBADO",grid:0};
   GXValidFnc[115]={ id: 115, fld:"",grid:0};
   GXValidFnc[116]={ id:116 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAAPROBADO",gxz:"Z83MatriculaAprobado",gxold:"O83MatriculaAprobado",gxvar:"A83MatriculaAprobado",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z83MatriculaAprobado=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MATRICULAAPROBADO",gx.O.A83MatriculaAprobado,true)},c2v:function(){if(this.val()!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAAPROBADO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[118]={ id: 118, fld:"MATRICULAAPROBADO_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[119]={ id: 119, fld:"",grid:0};
   GXValidFnc[120]={ id: 120, fld:"",grid:0};
   GXValidFnc[121]={ id: 121, fld:"",grid:0};
   GXValidFnc[122]={ id: 122, fld:"",grid:0};
   GXValidFnc[123]={ id: 123, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[124]={ id: 124, fld:"",grid:0};
   GXValidFnc[125]={ id: 125, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[126]={ id: 126, fld:"",grid:0};
   GXValidFnc[127]={ id: 127, fld:"BTNTRN_DELETE",grid:0};
   GXValidFnc[128]={ id: 128, fld:"PROMPT_1",grid:8};
   GXValidFnc[129]={ id: 129, fld:"PROMPT_24",grid:8};
   GXValidFnc[130]={ id: 130, fld:"PROMPT_26",grid:8};
   this.A27MatriculaId = 0 ;
   this.Z27MatriculaId = 0 ;
   this.O27MatriculaId = 0 ;
   this.A40MatriculaFecha = gx.date.nullDate() ;
   this.Z40MatriculaFecha = gx.date.nullDate() ;
   this.O40MatriculaFecha = gx.date.nullDate() ;
   this.A1AlumnoId = 0 ;
   this.Z1AlumnoId = 0 ;
   this.O1AlumnoId = 0 ;
   this.A2AlumnoNombre = "" ;
   this.Z2AlumnoNombre = "" ;
   this.O2AlumnoNombre = "" ;
   this.A24HorarioId = 0 ;
   this.Z24HorarioId = 0 ;
   this.O24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.Z18HorarioNombre = "" ;
   this.O18HorarioNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.Z20HorarioFechaInicio = gx.date.nullDate() ;
   this.O20HorarioFechaInicio = gx.date.nullDate() ;
   this.A10CursoId = 0 ;
   this.Z10CursoId = 0 ;
   this.O10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.A23NivelId = 0 ;
   this.Z23NivelId = 0 ;
   this.O23NivelId = 0 ;
   this.A19NivelNombre = "" ;
   this.Z19NivelNombre = "" ;
   this.O19NivelNombre = "" ;
   this.A26PoliticaId = 0 ;
   this.Z26PoliticaId = 0 ;
   this.O26PoliticaId = 0 ;
   this.A41PoliticaNombre = "" ;
   this.Z41PoliticaNombre = "" ;
   this.O41PoliticaNombre = "" ;
   this.A107MatriculaPrecioCompleto = false ;
   this.Z107MatriculaPrecioCompleto = false ;
   this.O107MatriculaPrecioCompleto = false ;
   this.A42MatriculaCantidadPeriodosCance = 0 ;
   this.Z42MatriculaCantidadPeriodosCance = 0 ;
   this.O42MatriculaCantidadPeriodosCance = 0 ;
   this.A83MatriculaAprobado = false ;
   this.Z83MatriculaAprobado = false ;
   this.O83MatriculaAprobado = false ;
   this.AV7WWPContext = {UserId:0,UserName:""} ;
   this.AV8TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV20GXV1 = 0 ;
   this.AV10Insert_AlumnoId = 0 ;
   this.AV11Insert_HorarioId = 0 ;
   this.AV12Insert_PoliticaId = 0 ;
   this.AV13TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV16MatriculaId = 0 ;
   this.AV9WebSession = {} ;
   this.A27MatriculaId = 0 ;
   this.A1AlumnoId = 0 ;
   this.A24HorarioId = 0 ;
   this.A26PoliticaId = 0 ;
   this.A42MatriculaCantidadPeriodosCance = 0 ;
   this.AV19Pgmname = "" ;
   this.Gx_BScreen = 0 ;
   this.Gx_date = gx.date.nullDate() ;
   this.A40MatriculaFecha = gx.date.nullDate() ;
   this.A2AlumnoNombre = "" ;
   this.A18HorarioNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.A10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.A23NivelId = 0 ;
   this.A19NivelNombre = "" ;
   this.A41PoliticaNombre = "" ;
   this.A107MatriculaPrecioCompleto = false ;
   this.A83MatriculaAprobado = false ;
   this.Gx_mode = "" ;
   this.Events = {"e12072_client": ["AFTER TRN", true] ,"e13078_client": ["ENTER", true] ,"e14078_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV16MatriculaId',fld:'vMATRICULAID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV16MatriculaId',fld:'vMATRICULAID',pic:'ZZZ9',hsh:true},{av:'A27MatriculaId',fld:'MATRICULAID',pic:'ZZZ9'},{av:'AV10Insert_AlumnoId',fld:'vINSERT_ALUMNOID',pic:'ZZZ9'},{av:'AV11Insert_HorarioId',fld:'vINSERT_HORARIOID',pic:'ZZZ9'},{av:'AV12Insert_PoliticaId',fld:'vINSERT_POLITICAID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV19Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV7WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Tooltiptext")',ctrl:'MATRICULAAPROBADO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("MATRICULAPRECIOCOMPLETO","Tooltiptext")',ctrl:'MATRICULAPRECIOCOMPLETO',prop:'Tooltiptext'},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV20GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV13TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV10Insert_AlumnoId',fld:'vINSERT_ALUMNOID',pic:'ZZZ9'},{av:'AV11Insert_HorarioId',fld:'vINSERT_HORARIOID',pic:'ZZZ9'},{av:'AV12Insert_PoliticaId',fld:'vINSERT_POLITICAID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.setPrompt("PROMPT_1", [35]);
   this.setPrompt("PROMPT_24", [45]);
   this.setPrompt("PROMPT_26", [80]);
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV16MatriculaId", "vMATRICULAID", 0, "int", 4, 0);
   this.setVCMap("AV10Insert_AlumnoId", "vINSERT_ALUMNOID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_HorarioId", "vINSERT_HORARIOID", 0, "int", 4, 0);
   this.setVCMap("AV12Insert_PoliticaId", "vINSERT_POLITICAID", 0, "int", 4, 0);
   this.setVCMap("Gx_date", "vTODAY", 0, "date", 8, 0);
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int", 1, 0);
   this.setVCMap("AV19Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV8TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.matricula);});
