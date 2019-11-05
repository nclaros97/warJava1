/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:7:28.9
*/
gx.evt.autoSkip = false;
gx.define('academia.politicageneral', true, function (CmpContext) {
   this.ServerClass =  "academia.politicageneral" ;
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
   this.e11121_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.politica", ["UPD", this.A26PoliticaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e12121_client=function()
   {
      this.clearMessages();
      this.call("com.taankanik.academia.politica", ["DLT", this.A26PoliticaId]);
      this.refreshOutputs([]);
      return gx.$.Deferred().resolve();
   };
   this.e15122_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e16122_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36];
   this.GXLastCtrlId =36;
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
   GXValidFnc[14]={ id:14 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Politicaid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAID",gxz:"Z26PoliticaId",gxold:"O26PoliticaId",gxvar:"A26PoliticaId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A26PoliticaId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z26PoliticaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("POLITICAID",gx.O.A26PoliticaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A26PoliticaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("POLITICAID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[15]={ id: 15, fld:"",grid:0};
   GXValidFnc[16]={ id: 16, fld:"",grid:0};
   GXValidFnc[17]={ id: 17, fld:"",grid:0};
   GXValidFnc[18]={ id: 18, fld:"",grid:0};
   GXValidFnc[19]={ id:19 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICANOMBRE",gxz:"Z41PoliticaNombre",gxold:"O41PoliticaNombre",gxvar:"A41PoliticaNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A41PoliticaNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z41PoliticaNombre=Value},v2c:function(){gx.fn.setControlValue("POLITICANOMBRE",gx.O.A41PoliticaNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A41PoliticaNombre=this.val()},val:function(){return gx.fn.getControlValue("POLITICANOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 19 , function() {
   });
   GXValidFnc[20]={ id: 20, fld:"",grid:0};
   GXValidFnc[21]={ id: 21, fld:"",grid:0};
   GXValidFnc[22]={ id: 22, fld:"",grid:0};
   GXValidFnc[23]={ id: 23, fld:"",grid:0};
   GXValidFnc[24]={ id:24 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPRECIOMENSUAL",gxz:"Z22PoliticaPrecioMensual",gxold:"O22PoliticaPrecioMensual",gxvar:"A22PoliticaPrecioMensual",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A22PoliticaPrecioMensual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z22PoliticaPrecioMensual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("POLITICAPRECIOMENSUAL",gx.O.A22PoliticaPrecioMensual,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A22PoliticaPrecioMensual=this.val()},val:function(){return gx.fn.getDecimalValue("POLITICAPRECIOMENSUAL",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 24 , function() {
   });
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"decimal",len:10,dec:2,sign:false,pic:"ZZZZZZ9.99",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"POLITICAPRECIOCOMPLETO",gxz:"Z69PoliticaPrecioCompleto",gxold:"O69PoliticaPrecioCompleto",gxvar:"A69PoliticaPrecioCompleto",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A69PoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){if(Value!==undefined)gx.O.Z69PoliticaPrecioCompleto=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("POLITICAPRECIOCOMPLETO",gx.O.A69PoliticaPrecioCompleto,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A69PoliticaPrecioCompleto=this.val()},val:function(){return gx.fn.getDecimalValue("POLITICAPRECIOCOMPLETO",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 29 , function() {
   });
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"BTNUPDATE",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[36]={ id: 36, fld:"BTNDELETE",grid:0};
   this.A26PoliticaId = 0 ;
   this.Z26PoliticaId = 0 ;
   this.O26PoliticaId = 0 ;
   this.A41PoliticaNombre = "" ;
   this.Z41PoliticaNombre = "" ;
   this.O41PoliticaNombre = "" ;
   this.A22PoliticaPrecioMensual = 0 ;
   this.Z22PoliticaPrecioMensual = 0 ;
   this.O22PoliticaPrecioMensual = 0 ;
   this.A69PoliticaPrecioCompleto = 0 ;
   this.Z69PoliticaPrecioCompleto = 0 ;
   this.O69PoliticaPrecioCompleto = 0 ;
   this.A26PoliticaId = 0 ;
   this.A41PoliticaNombre = "" ;
   this.A22PoliticaPrecioMensual = 0 ;
   this.A69PoliticaPrecioCompleto = 0 ;
   this.Events = {"e15122_client": ["ENTER", true] ,"e16122_client": ["CANCEL", true] ,"e11121_client": ["'DOUPDATE'", false] ,"e12121_client": ["'DODELETE'", false]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[{av:'AV16Pgmname',fld:'vPGMNAME',pic:''},{av:'AV7PoliticaId',fld:'vPOLITICAID',pic:'ZZZ9'}],[]];
   this.EvtParms["LOAD"] = [[],[]];
   this.EvtParms["'DOUPDATE'"] = [[{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9'}],[]];
   this.EvtParms["'DODELETE'"] = [[{av:'A26PoliticaId',fld:'POLITICAID',pic:'ZZZ9'}],[]];
   this.Initialize( );
});
