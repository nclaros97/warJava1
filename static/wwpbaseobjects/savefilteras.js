/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:28:21.72
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.savefilteras', false, function () {
   this.ServerClass =  "wwpbaseobjects.savefilteras" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV15UserKey=gx.fn.getControlValue("vUSERKEY") ;
      this.AV5GridStateKey=gx.fn.getControlValue("vGRIDSTATEKEY") ;
   };
   this.e122h2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e142h1_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,16,17,18];
   this.GXLastCtrlId =18;
   GXValidFnc[2]={ id: 2, fld:"TABLEMAIN",grid:0};
   GXValidFnc[8]={ id: 8, fld:"TABLECONTENT",grid:0};
   GXValidFnc[11]={ id: 11, fld:"TEXTBLOCKFILTERNAME", format:0,grid:0};
   GXValidFnc[13]={ id:13 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vFILTERNAME",gxz:"ZV8FilterName",gxold:"OV8FilterName",gxvar:"AV8FilterName",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.AV8FilterName=Value},v2z:function(Value){if(Value!==undefined)gx.O.ZV8FilterName=Value},v2c:function(){gx.fn.setControlValue("vFILTERNAME",gx.O.AV8FilterName,0)},c2v:function(){if(this.val()!==undefined)gx.O.AV8FilterName=this.val()},val:function(){return gx.fn.getControlValue("vFILTERNAME")},nac:gx.falseFn};
   GXValidFnc[16]={ id: 16, fld:"ACTIONGROUP_ACTIONS",grid:0};
   GXValidFnc[17]={ id: 17, fld:"BTNENTER",grid:0};
   GXValidFnc[18]={ id: 18, fld:"BTNCANCEL",grid:0};
   this.AV8FilterName = "" ;
   this.ZV8FilterName = "" ;
   this.OV8FilterName = "" ;
   this.AV8FilterName = "" ;
   this.AV15UserKey = "" ;
   this.AV5GridStateKey = "" ;
   this.Events = {"e122h2_client": ["ENTER", true] ,"e142h1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'AV15UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV5GridStateKey',fld:'vGRIDSTATEKEY',pic:'',hsh:true}],[]];
   this.EvtParms["START"] = [[],[]];
   this.EvtParms["ENTER"] = [[{av:'AV8FilterName',fld:'vFILTERNAME',pic:''},{av:'AV15UserKey',fld:'vUSERKEY',pic:'',hsh:true},{av:'AV5GridStateKey',fld:'vGRIDSTATEKEY',pic:'',hsh:true}],[{av:'AV8FilterName',fld:'vFILTERNAME',pic:''}]];
   this.EnterCtrl = ["BTNENTER"];
   this.setVCMap("AV15UserKey", "vUSERKEY", 0, "svchar", 100, 0);
   this.setVCMap("AV5GridStateKey", "vGRIDSTATEKEY", 0, "svchar", 100, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.savefilteras);});
