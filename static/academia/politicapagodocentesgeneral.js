/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:28.2
*/
gx.evt.autoSkip = false;
gx.define('academia.politicapagodocentesgeneral', true, function (CmpContext) {
   this.ServerClass =  "academia.politicapagodocentesgeneral" ;
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
   this.e111b1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.politicapagodocentes", ["UPD", this.A32PoliticaPagoDocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e121b1_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.politicapagodocentes", ["DLT", this.A32PoliticaPagoDocenteId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e151b2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e161b2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
   this.GXLastCtrlId =31;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Politicapagodocenteid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEID",gxz:"Z32PoliticaPagoDocenteId",gxold:"O32PoliticaPagoDocenteId",gxvar:"A32PoliticaPagoDocenteId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z32PoliticaPagoDocenteId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAPAGODOCENTEID",gx.O.A32PoliticaPagoDocenteId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A32PoliticaPagoDocenteId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAPAGODOCENTEID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEDESCRIPCION",gxz:"Z48PoliticaPagoDocenteDescripcion",gxold:"O48PoliticaPagoDocenteDescripcion",gxvar:"A48PoliticaPagoDocenteDescripcion",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z48PoliticaPagoDocenteDescripcion=Value},v2c:function(){gx.fn.setControlValue("POLITICAPAGODOCENTEDESCRIPCION",gx.O.A48PoliticaPagoDocenteDescripcion,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A48PoliticaPagoDocenteDescripcion=this.val()},val:function(){return gx.fn.getControlValue("POLITICAPAGODOCENTEDESCRIPCION")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"decimal",len:8,dec:2,sign:false,pic:"ZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPAGODOCENTEVALOR",gxz:"Z49PoliticaPagoDocenteValor",gxold:"O49PoliticaPagoDocenteValor",gxvar:"A49PoliticaPagoDocenteValor",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z49PoliticaPagoDocenteValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("POLITICAPAGODOCENTEVALOR",gx.O.A49PoliticaPagoDocenteValor,2,',')},c2v:function(){if(this.val()!==undefined)gx.O.A49PoliticaPagoDocenteValor=this.val()},val:function(){return gx.fn.getDecimalValue("POLITICAPAGODOCENTEVALOR",'.',',')},nac:gx.falseFn};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"BTNUPDATE",grid:0};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"BTNDELETE",grid:0};
   this.A32PoliticaPagoDocenteId = 0 ;
   this.Z32PoliticaPagoDocenteId = 0 ;
   this.O32PoliticaPagoDocenteId = 0 ;
   this.A48PoliticaPagoDocenteDescripcion = "" ;
   this.Z48PoliticaPagoDocenteDescripcion = "" ;
   this.O48PoliticaPagoDocenteDescripcion = "" ;
   this.A49PoliticaPagoDocenteValor = 0 ;
   this.Z49PoliticaPagoDocenteValor = 0 ;
   this.O49PoliticaPagoDocenteValor = 0 ;
   this.A32PoliticaPagoDocenteId = 0 ;
   this.A48PoliticaPagoDocenteDescripcion = "" ;
   this.A49PoliticaPagoDocenteValor = 0 ;
   this.Events = {"e151b2_client": ["ENTER", true] ,"e161b2_client": ["CANCEL", true] ,"e111b1_client": ["'DOUPDATE'", false] ,"e121b1_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PoliticaPagoDocenteId',fld:'vPOLITICAPAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A32PoliticaPagoDocenteId',fld:'POLITICAPAGODOCENTEID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
