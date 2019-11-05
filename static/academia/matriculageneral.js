/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:8:45.44
*/
gx.evt.autoSkip = false;
gx.define('academia.matriculageneral', true, function (CmpContext) {
   this.ServerClass =  "academia.matriculageneral" ;
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
   this.Valid_Alumnoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ALUMNOID");
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
      try {
         var gxballoon = gx.util.balloon.getNew("POLITICAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111l1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.matricula", ["UPD", this.A27MatriculaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121l1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.matricula", ["DLT", this.A27MatriculaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151l2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161l2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,85,86,88,89,90,91,92,93,94,95,96,97,98,99,100,101,104,105,107,108,109,110,111,112,113,114];
   this.GXLastCtrlId =114;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Matriculaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAID",gxz:"Z27MatriculaId",gxold:"O27MatriculaId",gxvar:"A27MatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A27MatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z27MatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAID",gx.O.A27MatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A27MatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAFECHA",gxz:"Z40MatriculaFecha",gxold:"O40MatriculaFecha",gxvar:"A40MatriculaFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z40MatriculaFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("MATRICULAFECHA",gx.O.A40MatriculaFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A40MatriculaFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAFECHA")},nac:gx.falseFn};
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Alumnoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNOID",gxz:"Z1AlumnoId",gxold:"O1AlumnoId",gxvar:"A1AlumnoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A1AlumnoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z1AlumnoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("ALUMNOID",gx.O.A1AlumnoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A1AlumnoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("ALUMNOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"ALUMNONOMBRE",gxz:"Z2AlumnoNombre",gxold:"O2AlumnoNombre",gxvar:"A2AlumnoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A2AlumnoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z2AlumnoNombre=Value},v2c:function(){gx.fn.setControlValue("ALUMNONOMBRE",gx.O.A2AlumnoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A2AlumnoNombre=this.val()},val:function(){return gx.fn.getControlValue("ALUMNONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Horarioid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOID",gxz:"Z24HorarioId",gxold:"O24HorarioId",gxvar:"A24HorarioId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A24HorarioId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z24HorarioId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("HORARIOID",gx.O.A24HorarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A24HorarioId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("HORARIOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 34 , function() {
   });
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id:39 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIONOMBRE",gxz:"Z18HorarioNombre",gxold:"O18HorarioNombre",gxvar:"A18HorarioNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A18HorarioNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z18HorarioNombre=Value},v2c:function(){gx.fn.setControlValue("HORARIONOMBRE",gx.O.A18HorarioNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A18HorarioNombre=this.val()},val:function(){return gx.fn.getControlValue("HORARIONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 39 , function() {
   });
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id:44 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"HORARIOFECHAINICIO",gxz:"Z20HorarioFechaInicio",gxold:"O20HorarioFechaInicio",gxvar:"A20HorarioFechaInicio",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z20HorarioFechaInicio=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("HORARIOFECHAINICIO",gx.O.A20HorarioFechaInicio,0)},c2v:function(){if(this.val()!==undefined)gx.O.A20HorarioFechaInicio=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("HORARIOFECHAINICIO")},nac:gx.falseFn};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"",grid:0};
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id:49 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CURSOID",gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CURSOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 49 , function() {
   });
   GXValidFnc[50]={ id: 50, fld:"",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"",grid:0};
   GXValidFnc[54]={ id:54 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 54 , function() {
   });
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id: 56, fld:"",grid:0};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"",grid:0};
   GXValidFnc[59]={ id:59 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("NIVELID",gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("NIVELID",'.')},nac:gx.falseFn};
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
   GXValidFnc[69]={ id:69 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Politicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAID",gxz:"Z26PoliticaId",gxold:"O26PoliticaId",gxvar:"A26PoliticaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A26PoliticaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z26PoliticaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAID",gx.O.A26PoliticaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A26PoliticaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 69 , function() {
   });
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"",grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICANOMBRE",gxz:"Z41PoliticaNombre",gxold:"O41PoliticaNombre",gxvar:"A41PoliticaNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A41PoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z41PoliticaNombre=Value},v2c:function(){gx.fn.setControlValue("POLITICANOMBRE",gx.O.A41PoliticaNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A41PoliticaNombre=this.val()},val:function(){return gx.fn.getControlValue("POLITICANOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 74 , function() {
   });
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"TABLESPLITTEDMATRICULAPRECIOCOMPLETO",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"TEXTBLOCKMATRICULAPRECIOCOMPLETO", format:0,grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"TABLEMERGEDMATRICULAPRECIOCOMPLETO",grid:0};
   GXValidFnc[85]={ id: 85, fld:"",grid:0};
   GXValidFnc[86]={ id:86 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAPRECIOCOMPLETO",gxz:"Z107MatriculaPrecioCompleto",gxold:"O107MatriculaPrecioCompleto",gxvar:"A107MatriculaPrecioCompleto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A107MatriculaPrecioCompleto=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z107MatriculaPrecioCompleto=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MATRICULAPRECIOCOMPLETO",gx.O.A107MatriculaPrecioCompleto,true)},c2v:function(){if(this.val()!==undefined)gx.O.A107MatriculaPrecioCompleto=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAPRECIOCOMPLETO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[88]={ id: 88, fld:"MATRICULAPRECIOCOMPLETO_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULACANTIDADPERIODOSCANCE",gxz:"Z42MatriculaCantidadPeriodosCance",gxold:"O42MatriculaCantidadPeriodosCance",gxvar:"A42MatriculaCantidadPeriodosCance",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A42MatriculaCantidadPeriodosCance=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z42MatriculaCantidadPeriodosCance=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MATRICULACANTIDADPERIODOSCANCE",gx.O.A42MatriculaCantidadPeriodosCance,0)},c2v:function(){if(this.val()!==undefined)gx.O.A42MatriculaCantidadPeriodosCance=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MATRICULACANTIDADPERIODOSCANCE",'.')},nac:gx.falseFn};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"TABLESPLITTEDMATRICULAAPROBADO",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"",grid:0};
   GXValidFnc[99]={ id: 99, fld:"TEXTBLOCKMATRICULAAPROBADO", format:0,grid:0};
   GXValidFnc[100]={ id: 100, fld:"",grid:0};
   GXValidFnc[101]={ id: 101, fld:"TABLEMERGEDMATRICULAAPROBADO",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id:105 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MATRICULAAPROBADO",gxz:"Z83MatriculaAprobado",gxold:"O83MatriculaAprobado",gxvar:"A83MatriculaAprobado",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z83MatriculaAprobado=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MATRICULAAPROBADO",gx.O.A83MatriculaAprobado,true)},c2v:function(){if(this.val()!==undefined)gx.O.A83MatriculaAprobado=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MATRICULAAPROBADO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[107]={ id: 107, fld:"MATRICULAAPROBADO_RIGHTTEXT", format:0,grid:0};
   GXValidFnc[108]={ id: 108, fld:"",grid:0};
   GXValidFnc[109]={ id: 109, fld:"",grid:0};
   GXValidFnc[110]={ id: 110, fld:"",grid:0};
   GXValidFnc[111]={ id: 111, fld:"",grid:0};
   GXValidFnc[112]={ id: 112, fld:"BTNUPDATE",grid:0};
   GXValidFnc[113]={ id: 113, fld:"",grid:0};
   GXValidFnc[114]={ id: 114, fld:"BTNDELETE",grid:0};
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
   this.A27MatriculaId = 0 ;
   this.A40MatriculaFecha = gx.date.nullDate() ;
   this.A1AlumnoId = 0 ;
   this.A2AlumnoNombre = "" ;
   this.A24HorarioId = 0 ;
   this.A18HorarioNombre = "" ;
   this.A20HorarioFechaInicio = gx.date.nullDate() ;
   this.A10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.A23NivelId = 0 ;
   this.A19NivelNombre = "" ;
   this.A26PoliticaId = 0 ;
   this.A41PoliticaNombre = "" ;
   this.A107MatriculaPrecioCompleto = false ;
   this.A42MatriculaCantidadPeriodosCance = 0 ;
   this.A83MatriculaAprobado = false ;
   this.Events = {"e151l2_client": ["ENTER", true] ,"e161l2_client": ["CANCEL", true] ,"e111l1_client": ["'DOUPDATE'", false] ,"e121l1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9'},{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7MatriculaId',fld:'vMATRICULAID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("MATRICULAAPROBADO","Tooltiptext")',ctrl:'MATRICULAAPROBADO',prop:'Tooltiptext'},{av:'gx.fn.getCtrlProperty("MATRICULAPRECIOCOMPLETO","Tooltiptext")',ctrl:'MATRICULAPRECIOCOMPLETO',prop:'Tooltiptext'}]];
   this.EvtParms["LOAD"] = [[{av:'A1AlumnoId',fld:'ALUMNOID',pic:'ZZZ9'},{av:'A24HorarioId',fld:'HORARIOID',pic:'ZZZ9'},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'},{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9'}],[{av:'gx.fn.getCtrlProperty("ALUMNONOMBRE","Link")',ctrl:'ALUMNONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("HORARIONOMBRE","Link")',ctrl:'HORARIONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("CURSONOMBRE","Link")',ctrl:'CURSONOMBRE',prop:'Link'},{av:'gx.fn.getCtrlProperty("POLITICANOMBRE","Link")',ctrl:'POLITICANOMBRE',prop:'Link'}]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A27MatriculaId',fld:'MATRICULAID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A27MatriculaId',fld:'MATRICULAID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
