/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:6:59.64
*/
gx.evt.autoSkip = false;
gx.define('academia.curso', false, function () {
   this.ServerClass =  "academia.curso" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV12CursoId=gx.fn.getIntegerValue("vCURSOID",'.') ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.AV8TrnContext=gx.fn.getControlValue("vTRNCONTEXT") ;
   };
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
         if(  gx.fn.currentGridRowImpl(36) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("NIVELID", gx.fn.currentGridRowImpl(36));
         this.AnyError  = 0;
         this.sMode2 =  this.Gx_mode  ;
         this.Gx_mode =  gx.fn.getGridRowMode(2,36)  ;
         this.standaloneModal012( );
         this.standaloneNotModal012( );
         if ( gx.fn.gridDuplicateKey(37) )
         {
            gxballoon.setError(gx.text.format( gx.getMessage( "GXM_1004"), "Nivel", "", "", "", "", "", "", "", ""));
            this.AnyError = gx.num.trunc( 1 ,0) ;
         }

      }
      catch(e){}
      try {
         this.Gx_mode =  this.sMode2  ;
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.standaloneModal012=function()
   {
      try {
         if ( this.Gx_mode != "INS" )
         {
            gx.fn.setCtrlProperty("NIVELID","Enabled", 0 );
         }
         else
         {
            gx.fn.setCtrlProperty("NIVELID","Enabled", 1 );
         }
      }
      catch(e){}
      return true;
   }
   this.standaloneNotModal012=function()
   {
      return true;
   }
   this.e12012_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, arguments[0], false, false);
   };
   this.e13011_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e14011_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,39,40,41,42,43,44,45,46,47];
   this.GXLastCtrlId =47;
   this.Gridlevel_nivelContainer = new gx.grid.grid(this, 2,"Nivel",36,"Gridlevel_nivel","Gridlevel_nivel","Gridlevel_nivelContainer",this.CmpContext,this.IsMasterPage,"academia.curso",[23],false,1,false,true,5,false,false,false,"",0,"px",0,"px","Nueva fila",true,false,false,null,null,false,"",false,[1,1,1,1],false,0,true,false);
   var Gridlevel_nivelContainer = this.Gridlevel_nivelContainer;
   Gridlevel_nivelContainer.addSingleLineEdit(23,37,"NIVELID","Número","","NivelId","int",0,"px",4,4,"right",null,[],23,"NivelId",true,0,false,false,"Attribute",1,"TrnColumn");
   Gridlevel_nivelContainer.addSingleLineEdit(19,38,"NIVELNOMBRE","Nombre Nivel","","NivelNombre","char",0,"px",50,50,"left",null,[],19,"NivelNombre",true,0,false,false,"Attribute",1,"TrnColumn");
   this.Gridlevel_nivelContainer.emptyText = "";
   this.setGrid(Gridlevel_nivelContainer);
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
   GXValidFnc[25]={ id:25 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Cursoid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.Gridlevel_nivelContainer],fld:"CURSOID",gxz:"Z10CursoId",gxold:"O10CursoId",gxvar:"A10CursoId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A10CursoId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z10CursoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("CURSOID",gx.O.A10CursoId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A10CursoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("CURSOID",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 25 , function() {
   });
   GXValidFnc[26]={ id: 26, fld:"",grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id: 29, fld:"",grid:0};
   GXValidFnc[30]={ id:30 ,lvl:0,type:"char",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CURSONOMBRE",gxz:"Z11CursoNombre",gxold:"O11CursoNombre",gxvar:"A11CursoNombre",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A11CursoNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z11CursoNombre=Value},v2c:function(){gx.fn.setControlValue("CURSONOMBRE",gx.O.A11CursoNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A11CursoNombre=this.val()},val:function(){return gx.fn.getControlValue("CURSONOMBRE")},nac:gx.falseFn};
   this.declareDomainHdlr( 30 , function() {
   });
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"",grid:0};
   GXValidFnc[33]={ id: 33, fld:"TABLELEAFLEVEL_NIVEL",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"",grid:0};
   GXValidFnc[37]={ id:37 ,lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,isacc:1,grid:36,gxgrid:this.Gridlevel_nivelContainer,fnc:this.Valid_Nivelid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELID",gxz:"Z23NivelId",gxold:"O23NivelId",gxvar:"A23NivelId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'number',v2v:function(Value){if(Value!==undefined)gx.O.A23NivelId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z23NivelId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("NIVELID",row || gx.fn.currentGridRowImpl(36),gx.O.A23NivelId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A23NivelId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("NIVELID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[38]={ id:38 ,lvl:2,type:"char",len:50,dec:0,sign:false,ro:0,isacc:1,grid:36,gxgrid:this.Gridlevel_nivelContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"NIVELNOMBRE",gxz:"Z19NivelNombre",gxold:"O19NivelNombre",gxvar:"A19NivelNombre",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){if(Value!==undefined)gx.O.A19NivelNombre=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z19NivelNombre=Value},v2c:function(row){gx.fn.setGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(36),gx.O.A19NivelNombre,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A19NivelNombre=this.val()},val:function(row){return gx.fn.getGridControlValue("NIVELNOMBRE",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"",grid:0};
   GXValidFnc[41]={ id: 41, fld:"",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[44]={ id: 44, fld:"",grid:0};
   GXValidFnc[45]={ id: 45, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id: 47, fld:"BTNTRN_DELETE",grid:0};
   this.A10CursoId = 0 ;
   this.Z10CursoId = 0 ;
   this.O10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.Z11CursoNombre = "" ;
   this.O11CursoNombre = "" ;
   this.Z23NivelId = 0 ;
   this.O23NivelId = 0 ;
   this.Z19NivelNombre = "" ;
   this.O19NivelNombre = "" ;
   this.A23NivelId = 0 ;
   this.A19NivelNombre = "" ;
   this.AV7WWPContext = {UserId:0,UserName:""} ;
   this.AV8TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV12CursoId = 0 ;
   this.AV9WebSession = {} ;
   this.A10CursoId = 0 ;
   this.A11CursoNombre = "" ;
   this.Gx_mode = "" ;
   this.Events = {"e12012_client": ["AFTER TRN", true] ,"e13011_client": ["ENTER", true] ,"e14011_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12CursoId',fld:'vCURSOID',pic:'ZZZ9',hsh:true}],[]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV12CursoId',fld:'vCURSOID',pic:'ZZZ9',hsh:true},{av:'A10CursoId',fld:'CURSOID',pic:'ZZZ9'}],[]];
   this.EvtParms["START"] = [[],[{av:'AV7WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}]];
   this.EvtParms["AFTER TRN"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV8TrnContext',fld:'vTRNCONTEXT',pic:''}],[]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV12CursoId", "vCURSOID", 0, "int", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("AV8TrnContext", "vTRNCONTEXT", 0, "WWPBaseObjects\WWPTransactionContext", 0, 0);
   Gridlevel_nivelContainer.addPostingVar({rfrVar:"Gx_mode"});
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(academia.curso);});
