/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:33.60
*/
gx.evt.autoSkip = false;
gx.define('academia.pagodocentegeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.pagodocentegeneral" ;
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
   this.Valid_Pagodocenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGODOCENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
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
   this.Valid_Politicapagodocenteid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("POLITICAPAGODOCENTEID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Politicapagodocentevalor=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("POLITICAPAGODOCENTEVALOR");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Pagodocentetotalhoras=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("PAGODOCENTETOTALHORAS");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e11251_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagodocente", ["UPD", this.A31PagoDocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12251_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.pagodocente", ["DLT", this.A31PagoDocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15252_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16252_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91];
   this.GXLastCtrlId =91;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagodocenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTEID",gxz:"Z31PagoDocenteId",gxold:"O31PagoDocenteId",gxvar:"A31PagoDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A31PagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z31PagoDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGODOCENTEID",gx.O.A31PagoDocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A31PagoDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGODOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTEFECHA",gxz:"Z47PagoDocenteFecha",gxold:"O47PagoDocenteFecha",gxvar:"A47PagoDocenteFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A47PagoDocenteFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z47PagoDocenteFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("PAGODOCENTEFECHA",gx.O.A47PagoDocenteFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A47PagoDocenteFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("PAGODOCENTEFECHA")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HORARIOID",gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HORARIOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(){gx.fn.setControlValue("HORARIONOMBRE",gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("HORARIONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIODIAS",gxz:"Z38HorarioDias",gxold:"O38HorarioDias",gxvar:"A38HorarioDias",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A38HorarioDias=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z38HorarioDias=Value},v2c:function(){gx.fn.setControlValue("HORARIODIAS",gx.O.A38HorarioDias,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A38HorarioDias=this.val()},val:function(){return gx.fn.getControlValue("HORARIODIAS")},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"DOCENTENOMBRE",gxz:"Z14DocenteNombre",gxold:"O14DocenteNombre",gxvar:"A14DocenteNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A14DocenteNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z14DocenteNombre=Value},v2c:function(){gx.fn.setControlValue("DOCENTENOMBRE",gx.O.A14DocenteNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A14DocenteNombre=this.val()},val:function(){return gx.fn.getControlValue("DOCENTENOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Politicapagodocenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEID",gxz:"Z32PoliticaPagoDocenteId",gxold:"O32PoliticaPagoDocenteId",gxvar:"A32PoliticaPagoDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z32PoliticaPagoDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAPAGODOCENTEID",gx.O.A32PoliticaPagoDocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAPAGODOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 44 , function() {
   });
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEDESCRIPCION",gxz:"Z48PoliticaPagoDocenteDescripcion",gxold:"O48PoliticaPagoDocenteDescripcion",gxvar:"A48PoliticaPagoDocenteDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z48PoliticaPagoDocenteDescripcion=Value},v2c:function(){gx.fn.setControlValue("POLITICAPAGODOCENTEDESCRIPCION",gx.O.A48PoliticaPagoDocenteDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=this.val()},val:function(){return gx.fn.getControlValue("POLITICAPAGODOCENTEDESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Politicapagodocentevalor,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEVALOR",gxz:"Z49PoliticaPagoDocenteValor",gxold:"O49PoliticaPagoDocenteValor",gxvar:"A49PoliticaPagoDocenteValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("POLITICAPAGODOCENTEVALOR",gx.O.A49PoliticaPagoDocenteValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A49PoliticaPagoDocenteValor=this.val()},val:function(){return gx.fn.getDecimalValue("POLITICAPAGODOCENTEVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 59 , function() {
   });
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"",grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id:64 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(){gx.fn.setControlValue("NIVELNOMBRE",gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(){return gx.fn.getControlValue("NIVELNOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 64 , function() {
   });
   GXValidFnc[65]={ id: 65, fld:"",grid:0};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"",grid:0};
   GXValidFnc[68]={ id: 68, fld:"",grid:0};
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTECANTIDADALUMNOS",gxz:"Z50PagoDocenteCantidadAlumnos",gxold:"O50PagoDocenteCantidadAlumnos",gxvar:"A50PagoDocenteCantidadAlumnos",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A50PagoDocenteCantidadAlumnos=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z50PagoDocenteCantidadAlumnos=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGODOCENTECANTIDADALUMNOS",gx.O.A50PagoDocenteCantidadAlumnos,0)},c2v:function(){if(this.val()!==undefined)gx.O.A50PagoDocenteCantidadAlumnos=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGODOCENTECANTIDADALUMNOS",'.')},nac:gx.falseFn};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Pagodocentetotalhoras,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTETOTALHORAS",gxz:"Z51PagoDocenteTotalHoras",gxold:"O51PagoDocenteTotalHoras",gxvar:"A51PagoDocenteTotalHoras",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A51PagoDocenteTotalHoras=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z51PagoDocenteTotalHoras=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGODOCENTETOTALHORAS",gx.O.A51PagoDocenteTotalHoras,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A51PagoDocenteTotalHoras=this.val()},val:function(){return gx.fn.getDecimalValue("PAGODOCENTETOTALHORAS",'.',',')},nac:gx.falseFn};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id:79 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTETOTALPAGAR",gxz:"Z52PagoDocenteTotalPagar",gxold:"O52PagoDocenteTotalPagar",gxvar:"A52PagoDocenteTotalPagar",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A52PagoDocenteTotalPagar=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z52PagoDocenteTotalPagar=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("PAGODOCENTETOTALPAGAR",gx.O.A52PagoDocenteTotalPagar,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A52PagoDocenteTotalPagar=this.val()},val:function(){return gx.fn.getDecimalValue("PAGODOCENTETOTALPAGAR",'.',',')},nac:gx.falseFn};
   GXValidFnc[80]={ id: 80, fld:"",grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id: 83, fld:"",grid:0};
   GXValidFnc[84]={ id:84 ,lvl:0,type:"char",len:128,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGODOCENTEDESCRIPCION",gxz:"Z119PagoDocenteDescripcion",gxold:"O119PagoDocenteDescripcion",gxvar:"A119PagoDocenteDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A119PagoDocenteDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z119PagoDocenteDescripcion=Value},v2c:function(){gx.fn.setControlValue("PAGODOCENTEDESCRIPCION",gx.O.A119PagoDocenteDescripcion,0)},c2v:function(){if(this.val()!==undefined)gx.O.A119PagoDocenteDescripcion=this.val()},val:function(){return gx.fn.getControlValue("PAGODOCENTEDESCRIPCION")},nac:gx.falseFn};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id: 88, fld:"",grid:0};
   GXValidFnc[89]={ id: 89, fld:"BTNUPDATE",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"BTNDELETE",grid:0};
   this.A31PagoDocenteId = 0 ;
   this.Z31PagoDocenteId = 0 ;
   this.O31PagoDocenteId = 0 ;
   this.A47PagoDocenteFecha = gx.date.nullDate() ;
   this.Z47PagoDocenteFecha = gx.date.nullDate() ;
   this.O47PagoDocenteFecha = gx.date.nullDate() ;
   this.A24HorarioId = 0 ;
   this.Z24HorarioId = 0 ;
   this.O24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.Z18HorarioNombre = "" ;
   this.O18HorarioNombre = "" ;
   this.A38HorarioDias = "" ;
   this.Z38HorarioDias = "" ;
   this.O38HorarioDias = "" ;
   this.A14DocenteNombre = "" ;
   this.Z14DocenteNombre = "" ;
   this.O14DocenteNombre = "" ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.Z32PoliticaPagoDocenteId = 0 ;
   this.O32PoliticaPagoDocenteId = 0 ;
   this.A48PoliticaPagoDocenteDescripcion = "" ;
   this.Z48PoliticaPagoDocenteDescripcion = "" ;
   this.O48PoliticaPagoDocenteDescripcion = "" ;
   this.A49PoliticaPagoDocenteValor = 0 ;
   this.Z49PoliticaPagoDocenteValor = 0 ;
   this.O49PoliticaPagoDocenteValor = 0 ;
   this.A11CursoNombre = "" ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.A19NivelNombre = "" ;
   this.Z19NivelNombre = "" ;
   this.O19NivelNombre = "" ;
   this.A50PagoDocenteCantidadAlumnos = 0 ;
   this.Z50PagoDocenteCantidadAlumnos = 0 ;
   this.O50PagoDocenteCantidadAlumnos = 0 ;
   this.A51PagoDocenteTotalHoras = 0 ;
   this.Z51PagoDocenteTotalHoras = 0 ;
   this.O51PagoDocenteTotalHoras = 0 ;
   this.A52PagoDocenteTotalPagar = 0 ;
   this.Z52PagoDocenteTotalPagar = 0 ;
   this.O52PagoDocenteTotalPagar = 0 ;
   this.A119PagoDocenteDescripcion = "" ;
   this.Z119PagoDocenteDescripcion = "" ;
   this.O119PagoDocenteDescripcion = "" ;
   this.A31PagoDocenteId = 0 ;
   this.A47PagoDocenteFecha = gx.date.nullDate() ;
   this.A24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.A38HorarioDias = "" ;
   this.A14DocenteNombre = "" ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.A48PoliticaPagoDocenteDescripcion = "" ;
   this.A49PoliticaPagoDocenteValor = 0 ;
   this.A11CursoNombre = "" ;
   this.A19NivelNombre = "" ;
   this.A50PagoDocenteCantidadAlumnos = 0 ;
   this.A51PagoDocenteTotalHoras = 0 ;
   this.A52PagoDocenteTotalPagar = 0 ;
   this.A119PagoDocenteDescripcion = "" ;
   this.A12DocenteId = 0 ;
   this.A10CursoId = 0 ;
   this.A23NivelId = 0 ;
   this.Events = {"e15252_client": ["ENTER", true] ,"e16252_client": ["CANCEL", true] ,"e11251_client": ["'DOUPDATE'", false] ,"e12251_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PagoDocenteId',fld:'vPAGODOCENTEID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("PAGODOCENTEDESCRIPCION","Tooltiptext")',ctrl:'PAGODOCENTEDESCRIPCION',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("PAGODOCENTETOTALPAGAR","Tooltiptext")',ctrl:'PAGODOCENTETOTALPAGAR',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("PAGODOCENTETOTALHORAS","Tooltiptext")',ctrl:'PAGODOCENTETOTALHORAS',prop:'Tooltiptext'}]];
   this.EvtParms["LOAD"] = [[{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'A12DocenteId',fld:'DOCENTEID',pic:'ZZZ9'},{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9'},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Link")',ctrl:'HORARIONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("DOCENTENOMBRE","Link")',ctrl:'DOCENTENOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("POLITICAPAGODOCENTEVALOR","Link")',ctrl:'POLITICAPAGODOCENTEVALOR',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A31PagoDocenteId',fld:'PAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A31PagoDocenteId',fld:'PAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
