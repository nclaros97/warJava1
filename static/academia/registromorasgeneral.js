/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:13:14.3
*/
gx.evt.autoSkip = false;
gx.define('academia.registromorasgeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.registromorasgeneral" ;
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
   this.Valid_Registromorasid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("REGISTROMORASID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e111t1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.registromoras", ["UPD", this.A37RegistroMorasId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121t1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.registromoras", ["DLT", this.A37RegistroMorasId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151t2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161t2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];
   this.GXLastCtrlId =41;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Registromorasid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASID",gxz:"Z37RegistroMorasId",gxold:"O37RegistroMorasId",gxvar:"A37RegistroMorasId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z37RegistroMorasId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASID",gx.O.A37RegistroMorasId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A37RegistroMorasId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REGISTROMORASID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PAGOMATRICULAID",gxz:"Z33PagoMatriculaId",gxold:"O33PagoMatriculaId",gxvar:"A33PagoMatriculaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z33PagoMatriculaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PAGOMATRICULAID",gx.O.A33PagoMatriculaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A33PagoMatriculaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PAGOMATRICULAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"PARAMETROMORAID",gxz:"Z35ParametroMoraId",gxold:"O35ParametroMoraId",gxvar:"A35ParametroMoraId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z35ParametroMoraId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("PARAMETROMORAID",gx.O.A35ParametroMoraId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A35ParametroMoraId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("PARAMETROMORAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"date",len:8,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASFECHA",gxz:"Z117RegistroMorasFecha",gxold:"O117RegistroMorasFecha",gxvar:"A117RegistroMorasFecha",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z117RegistroMorasFecha=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASFECHA",gx.O.A117RegistroMorasFecha,0)},c2v:function(){if(this.val()!==undefined)gx.O.A117RegistroMorasFecha=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("REGISTROMORASFECHA")},nac:gx.falseFn};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id:34 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"REGISTROMORASVALOR",gxz:"Z118RegistroMorasValor",gxold:"O118RegistroMorasValor",gxvar:"A118RegistroMorasValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z118RegistroMorasValor=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("REGISTROMORASVALOR",gx.O.A118RegistroMorasValor,0)},c2v:function(){if(this.val()!==undefined)gx.O.A118RegistroMorasValor=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("REGISTROMORASVALOR",'.')},nac:gx.falseFn};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id: 38, fld:"",grid:0};
   GXValidFnc[39]={ id: 39, fld:"BTNUPDATE",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"BTNDELETE",grid:0};
   this.A37RegistroMorasId = 0 ;
   this.Z37RegistroMorasId = 0 ;
   this.O37RegistroMorasId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.Z33PagoMatriculaId = 0 ;
   this.O33PagoMatriculaId = 0 ;
   this.A35ParametroMoraId = 0 ;
   this.Z35ParametroMoraId = 0 ;
   this.O35ParametroMoraId = 0 ;
   this.A117RegistroMorasFecha = gx.date.nullDate() ;
   this.Z117RegistroMorasFecha = gx.date.nullDate() ;
   this.O117RegistroMorasFecha = gx.date.nullDate() ;
   this.A118RegistroMorasValor = 0 ;
   this.Z118RegistroMorasValor = 0 ;
   this.O118RegistroMorasValor = 0 ;
   this.A37RegistroMorasId = 0 ;
   this.A33PagoMatriculaId = 0 ;
   this.A35ParametroMoraId = 0 ;
   this.A117RegistroMorasFecha = gx.date.nullDate() ;
   this.A118RegistroMorasValor = 0 ;
   this.Events = {"e151t2_client": ["ENTER", true] ,"e161t2_client": ["CANCEL", true] ,"e111t1_client": ["'DOUPDATE'", false] ,"e121t1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7RegistroMorasId',fld:'vREGISTROMORASID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A37RegistroMorasId',fld:'REGISTROMORASID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A37RegistroMorasId',fld:'REGISTROMORASID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
