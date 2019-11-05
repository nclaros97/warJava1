/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:6:55.12
*/
gx.evt.autoSkip = false;
gx.define('academia.horariogeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.horariogeneral" ;
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
   this.Valid_Lugarid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("LUGARID");
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
         var gxballoon = gx.util.balloon.getNew("DOCENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11151_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.horario", ["UPD", this.A24HorarioId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12151_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.horario", ["DLT", this.A24HorarioId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15152_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16152_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76];
   this.GXLastCtrlId =76;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLE",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"TRANSACTIONDETAIL_TABLEATTRIBUTES",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"",grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HORARIOID",gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HORARIOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(){gx.fn.setControlValue("HORARIONOMBRE",gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("HORARIONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIODIAS",gxz:"Z38HorarioDias",gxold:"O38HorarioDias",gxvar:"A38HorarioDias",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A38HorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z38HorarioDias=Value},v2c:function(){gx.fn.setControlValue("HORARIODIAS",gx.O.A38HorarioDias,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A38HorarioDias=this.val()},val:function(){return gx.fn.getControlValue("HORARIODIAS")},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CURSOID",gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CURSOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NIVELID",gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NIVELID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(){gx.fn.setControlValue("NIVELNOMBRE",gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(){return gx.fn.getControlValue("NIVELNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Lugarid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARID",gxz:"Z25LugarId",gxold:"O25LugarId",gxvar:"A25LugarId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A25LugarId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z25LugarId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("LUGARID",gx.O.A25LugarId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A25LugarId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("LUGARID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"LUGARNOMBRE",gxz:"Z39LugarNombre",gxold:"O39LugarNombre",gxvar:"A39LugarNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A39LugarNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z39LugarNombre=Value},v2c:function(){gx.fn.setControlValue("LUGARNOMBRE",gx.O.A39LugarNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A39LugarNombre=this.val()},val:function(){return gx.fn.getControlValue("LUGARNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Docenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTEID",gxz:"Z12DocenteId",gxold:"O12DocenteId",gxvar:"A12DocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A12DocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z12DocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("DOCENTEID",gx.O.A12DocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A12DocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("DOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(){gx.fn.setControlValue("DOCENTENOMBRE",gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("DOCENTENOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HORARIOFECHAINICIO",gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("HORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id: 74, fld:"BTNUPDATE",grid:0};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"BTNDELETE",grid:0};
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
   this.Events = {"e15152_client": ["ENTER", true] ,"e16152_client": ["CANCEL", true] ,"e11151_client": ["'DOUPDATE'", false] ,"e12151_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A25LugarId',fld:'LUGARID',pic:'ZZZ9'},{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7HorarioId',fld:'vHORARIOID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A25LugarId',fld:'LUGARID',pic:'ZZZ9'},{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("LUGARNOMBRE","Link")',ctrl:'LUGARNOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Link")',ctrl:'DOCENTENOMBRE',prop:'Link'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
