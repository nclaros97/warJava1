/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:7:7.92
*/
gx.evt.autoSkip = false;
gx.define('academia.horario', false, function () {
   this.ServerClass =  "academia.horario" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV19HorarioId=gx.fn.getIntegerValue("vHORARIOID",'.') ;
      this.AV10Insert_CursoId=gx.fn.getIntegerValue("vINSERT_CURSOID",'.') ;
      this.AV11Insert_NivelId=gx.fn.getIntegerValue("vINSERT_NIVELID",'.') ;
      this.AV12Insert_LugarId=gx.fn.getIntegerValue("vINSERT_LUGARID",'.') ;
      this.AV13Insert_DocenteId=gx.fn.getIntegerValue("vINSERT_DOCENTEID",'.') ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
   this.Valid_Horarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HORARIOID");
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
      gx.ajax.validSrvEvt("dyncall","valid_Cursoid",["gx.O.A10CursoId", "gx.O.A11CursoNombre"],["A11CursoNombre"]);
      return true;
   }
   this.Valid_Nivelid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Nivelid",["gx.O.A10CursoId", "gx.O.A23NivelId", "gx.O.A19NivelNombre"],["A19NivelNombre"]);
      return true;
   }
   this.Valid_Lugarid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Lugarid",["gx.O.A25LugarId", "gx.O.A39LugarNombre"],["A39LugarNombre"]);
      return true;
   }
   this.Valid_Docenteid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Docenteid",["gx.O.A12DocenteId", "gx.O.A14DocenteNombre"],["A14DocenteNombre"]);
      return true;
   }
   this.Valid_Horariofechainicio=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("HORARIOFECHAINICIO");
         this.AnyError  = 0;
         if ( ! ( (new gx.date.gxdate('').compare(this.A20HorarioFechaInicio)==0) || new gx.date.gxdate( this.A20HorarioFechaInicio ).compare( gx.date.ymdtod( 1000, 01, 01) ) >= 0 ) )
         {
            try {
               gxballoon.setError("Campo Horario Fecha Inicio fuera de rango");
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
   this.e12022_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e13023_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14023_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93];
   this.GXLastCtrlId =93;
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
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "Información General", "str");
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HORARIOID",gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HORARIOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(){gx.fn.setControlValue("HORARIONOMBRE",gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("HORARIONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id:35 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIODIAS",gxz:"Z38HorarioDias",gxold:"O38HorarioDias",gxvar:"A38HorarioDias",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A38HorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z38HorarioDias=Value},v2c:function(){gx.fn.setControlValue("HORARIODIAS",gx.O.A38HorarioDias,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A38HorarioDias=this.val()},val:function(){return gx.fn.getControlValue("HORARIODIAS")},nac:gx.falseFn};
   this.declareDomainHdlr( 35 , function() {
   });
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id:40 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[45],ip:[45,40],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CURSOID",gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CURSOID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV10Insert_CursoId))}};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id:45 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"",grid:0};
   GXValidFnc[50]={ id:50 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[55],ip:[55,50,40],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NIVELID",gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NIVELID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_NivelId))}};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id:55 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(){gx.fn.setControlValue("NIVELNOMBRE",gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(){return gx.fn.getControlValue("NIVELNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id: 59, fld:"",grid:0};
   GXValidFnc[60]={ id:60 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Lugarid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARID",gxz:"Z25LugarId",gxold:"O25LugarId",gxvar:"A25LugarId",ucs:[],op:[65],ip:[65,60],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A25LugarId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z25LugarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LUGARID",gx.O.A25LugarId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A25LugarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LUGARID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV12Insert_LugarId))}};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARNOMBRE",gxz:"Z39LugarNombre",gxold:"O39LugarNombre",gxvar:"A39LugarNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A39LugarNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z39LugarNombre=Value},v2c:function(){gx.fn.setControlValue("LUGARNOMBRE",gx.O.A39LugarNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A39LugarNombre=this.val()},val:function(){return gx.fn.getControlValue("LUGARNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id:70 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Docenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[75],ip:[75,70],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCENTEID",gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCENTEID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV13Insert_DocenteId))}};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"",grid:0};
   GXValidFnc[75]={ id:75 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(){gx.fn.setControlValue("DOCENTENOMBRE",gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("DOCENTENOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id:80 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Horariofechainicio,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[80],ip:[80],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HORARIOFECHAINICIO",gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("HORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"BTNTRN_DELETE",grid:0};
   GXValidFnc[90]={ id: 90, fld:"PROMPT_10",grid:3};
   GXValidFnc[91]={ id: 91, fld:"PROMPT_23",grid:3};
   GXValidFnc[92]={ id: 92, fld:"PROMPT_25",grid:3};
   GXValidFnc[93]={ id: 93, fld:"PROMPT_12",grid:3};
   this.A24HorarioId = 0 ;
   this.Z24HorarioId = 0 ;
   this.O24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.Z18HorarioNombre = "" ;
   this.O18HorarioNombre = "" ;
   this.A38HorarioDias = "" ;
   this.Z38HorarioDias = "" ;
   this.O38HorarioDias = "" ;
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
   this.A25LugarId = 0 ;
   this.Z25LugarId = 0 ;
   this.O25LugarId = 0 ;
   this.A39LugarNombre = "" ;
   this.Z39LugarNombre = "" ;
   this.O39LugarNombre = "" ;
   this.A12DocenteId = 0 ;
   this.Z12DocenteId = 0 ;
   this.O12DocenteId = 0 ;
   this.A14DocenteNombre = "" ;
   this.Z14DocenteNombre = "" ;
   this.O14DocenteNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.Z20HorarioFechaInicio = gx.date.nullDate() ;
   this.O20HorarioFechaInicio = gx.date.nullDate() ;
   this.AV7WWPContext = {UserId:0,UserName:""} ;
   this.AV8TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV21GXV1 = 0 ;
   this.AV10Insert_CursoId = 0 ;
   this.AV11Insert_NivelId = 0 ;
   this.AV12Insert_LugarId = 0 ;
   this.AV13Insert_DocenteId = 0 ;
   this.AV14TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV19HorarioId = 0 ;
   this.AV9WebSession = {} ;
   this.A24HorarioId = 0 ;
   this.A10CursoId = 0 ;
   this.A23NivelId = 0 ;
   this.A25LugarId = 0 ;
   this.A12DocenteId = 0 ;
   this.AV20Pgmname = "" ;
   this.A18HorarioNombre = "" ;
   this.A38HorarioDias = "" ;
   this.A11CursoNombre = "" ;
   this.A19NivelNombre = "" ;
   this.A39LugarNombre = "" ;
   this.A14DocenteNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.Gx_mode = "" ;
   this.Events = {"e12022_client": ["AFTER TRN", true] ,"e13023_client": ["ENTER", true] ,"e14023_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV19HorarioId',fld:'vHORARIOID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV19HorarioId',fld:'vHORARIOID',pic:'ZZZ9',hsh:true},{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'AV10Insert_CursoId',fld:'vINSERT_CURSOID',pic:'ZZZ9'},{av:'AV11Insert_NivelId',fld:'vINSERT_NIVELID',pic:'ZZZ9'},{av:'AV12Insert_LugarId',fld:'vINSERT_LUGARID',pic:'ZZZ9'},{av:'AV13Insert_DocenteId',fld:'vINSERT_DOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV20Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true}],[{av:'AV7WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV21GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV14TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV10Insert_CursoId',fld:'vINSERT_CURSOID',pic:'ZZZ9'},{av:'AV11Insert_NivelId',fld:'vINSERT_NIVELID',pic:'ZZZ9'},{av:'AV12Insert_LugarId',fld:'vINSERT_LUGARID',pic:'ZZZ9'},{av:'AV13Insert_DocenteId',fld:'vINSERT_DOCENTEID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.setPrompt("PROMPT_10", [40]);
   this.setPrompt("PROMPT_23", [50]);
   this.setPrompt("PROMPT_25", [60]);
   this.setPrompt("PROMPT_12", [70]);
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV19HorarioId", "vHORARIOID", 0, "int", 4, 0);
   this.setVCMap("AV10Insert_CursoId", "vINSERT_CURSOID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_NivelId", "vINSERT_NIVELID", 0, "int", 4, 0);
   this.setVCMap("AV12Insert_LugarId", "vINSERT_LUGARID", 0, "int", 4, 0);
   this.setVCMap("AV13Insert_DocenteId", "vINSERT_DOCENTEID", 0, "int", 4, 0);
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV8TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.horario);});
