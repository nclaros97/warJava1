/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:11:23.9
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.menuitem', false, function () {
   this.ServerClass =  "wwpbaseobjects.menuitem" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("trn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.AV7MenuItemId=gx.fn.getIntegerValue("vMENUITEMID",'.') ;
      this.AV11Insert_MenuItemFatherId=gx.fn.getIntegerValue("vINSERT_MENUITEMFATHERID",'.') ;
      this.AV13MenuItemFatherId=gx.fn.getIntegerValue("vMENUITEMFATHERID",'.') ;
      this.AV14MenuItemCaption=gx.fn.getControlValue("vMENUITEMCAPTION") ;
      this.AV15MenuItemIconClass=gx.fn.getControlValue("vMENUITEMICONCLASS") ;
      this.Gx_BScreen=gx.fn.getIntegerValue("vGXBSCREEN",'.') ;
      this.AV16MenuItemShowDeveloperMenuOption=gx.fn.getControlValue("vMENUITEMSHOWDEVELOPERMENUOPTION") ;
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
      this.A101MenuItemOrder=gx.fn.getIntegerValue("MENUITEMORDER",'.') ;
      this.A46MenuItemFatherCaption=gx.fn.getControlValue("MENUITEMFATHERCAPTION") ;
      this.A98MenuItemFatherType=gx.fn.getIntegerValue("MENUITEMFATHERTYPE",'.') ;
      this.AV20Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.Valid_Menuitemid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUITEMID");
         this.AnyError  = 0;

         this.refreshOutputs([{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]);
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Menuitemfatherid=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menuitemfatherid",["gx.O.A30MenuItemFatherId", "gx.O.A46MenuItemFatherCaption", "gx.O.A98MenuItemFatherType"],["A46MenuItemFatherCaption", "A98MenuItemFatherType"]);
      return true;
   }
   this.Valid_Menuitemcaption=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Menuitemcaption",["gx.O.A43MenuItemCaption"],[]);
      return true;
   }
   this.Valid_Menuitemtype=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("MENUITEMTYPE");
         this.AnyError  = 0;
         if ( ! ( ( this.A45MenuItemType == 1 ) || ( this.A45MenuItemType == 2 ) ) )
         {
            try {
               gxballoon.setError("Campo Type fuera de rango");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }
         try {
            gx.fn.setCtrlProperty("MENUITEMLINK","Visible", (this.AV13MenuItemFatherId>0)&&(this.A45MenuItemType==1) );
         }
         catch(e){}
         try {
            if ( ! ( ( this.AV13MenuItemFatherId > 0 ) && ( this.A45MenuItemType == 1 ) ) )
            {
               gx.fn.setCtrlProperty("MENUITEMLINK_CELL","Class", "Invisible" );
            }
            else
            {
               if ( ( this.AV13MenuItemFatherId > 0 ) && ( this.A45MenuItemType == 1 ) )
               {
                  gx.fn.setCtrlProperty("MENUITEMLINK_CELL","Class", "col-xs-12 DataContentCell" );
               }
            }
         }
         catch(e){}
         try {
            gx.fn.setCtrlProperty("MENUITEMLINKPARAMETERS","Visible", (this.AV13MenuItemFatherId>0)&&(this.A45MenuItemType==1) );
         }
         catch(e){}
         try {
            if ( ! ( ( this.AV13MenuItemFatherId > 0 ) && ( this.A45MenuItemType == 1 ) ) )
            {
               gx.fn.setCtrlProperty("MENUITEMLINKPARAMETERS_CELL","Class", "Invisible" );
            }
            else
            {
               if ( ( this.AV13MenuItemFatherId > 0 ) && ( this.A45MenuItemType == 1 ) )
               {
                  gx.fn.setCtrlProperty("MENUITEMLINKPARAMETERS_CELL","Class", "col-xs-12 DataContentCell" );
               }
            }
         }
         catch(e){}

         this.refreshOutputs([{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]);
      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.s112_client=function()
   {
      if ( this.AV13MenuItemFatherId == 0 )
      {
         gx.fn.setCtrlProperty("MENUITEMFATHERID","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMFATHERID_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMTYPE","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMTYPE_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMICONCLASS","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMICONCLASS_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMLINK","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMLINK_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMLINKPARAMETERS","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMLINKPARAMETERS_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMSHOWDEVELOPERMENUOPTIO","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMSHOWDEVELOPERMENUOPTION_CELL","Class", "Invisible" );
         gx.fn.setCtrlProperty("MENUITEMSHOWEDITMENUOPTIONS","Visible", false );
         gx.fn.setCtrlProperty("MENUITEMSHOWEDITMENUOPTIONS_CELL","Class", "Invisible" );
      }
   };
   this.e12092_client=function()
   {
      return this.executeServerEvent("AFTER TRN", true, null, false, false);
   };
   this.e130910_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e140910_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106];
   this.GXLastCtrlId =106;
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
   DVPANEL_TABLEATTRIBUTESContainer.setProp("Title", "Title", "General Information", "str");
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
   GXValidFnc[22]={ id: 22, fld:"MENUITEMFATHERID_CELL",grid:0};
   GXValidFnc[23]={ id: 23, fld:"UNNAMEDTABLEMENUITEMFATHERID",grid:0};
   GXValidFnc[24]={ id: 24, fld:"",grid:0};
   GXValidFnc[25]={ id: 25, fld:"",grid:0};
   GXValidFnc[26]={ id: 26, fld:"TEXTBLOCKMENUITEMFATHERID", format:0,grid:0};
   GXValidFnc[27]={ id: 27, fld:"",grid:0};
   GXValidFnc[28]={ id: 28, fld:"",grid:0};
   GXValidFnc[29]={ id:29 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menuitemfatherid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMFATHERID",gxz:"Z30MenuItemFatherId",gxold:"O30MenuItemFatherId",gxvar:"A30MenuItemFatherId",ucs:[],op:[],ip:[29],
						nacdep:[],ctrltype:"dyncombo",v2v:function(Value){if(Value!==undefined)gx.O.A30MenuItemFatherId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z30MenuItemFatherId=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("MENUITEMFATHERID",gx.O.A30MenuItemFatherId)},c2v:function(){if(this.val()!==undefined)gx.O.A30MenuItemFatherId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUITEMFATHERID",'.')},nac:function(){return (this.Gx_mode=="INS")&&!((0==this.AV11Insert_MenuItemFatherId))}};
   GXValidFnc[30]={ id: 30, fld:"",grid:0};
   GXValidFnc[31]={ id: 31, fld:"",grid:0};
   GXValidFnc[32]={ id: 32, fld:"UNNAMEDTABLEMENUITEMCAPTION",grid:0};
   GXValidFnc[33]={ id: 33, fld:"",grid:0};
   GXValidFnc[34]={ id: 34, fld:"",grid:0};
   GXValidFnc[35]={ id: 35, fld:"TEXTBLOCKMENUITEMCAPTION", format:0,grid:0};
   GXValidFnc[36]={ id: 36, fld:"",grid:0};
   GXValidFnc[37]={ id: 37, fld:"",grid:0};
   GXValidFnc[38]={ id:38 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menuitemcaption,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMCAPTION",gxz:"Z43MenuItemCaption",gxold:"O43MenuItemCaption",gxvar:"A43MenuItemCaption",ucs:[],op:[38],ip:[38],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A43MenuItemCaption=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z43MenuItemCaption=Value},v2c:function(){gx.fn.setControlValue("MENUITEMCAPTION",gx.O.A43MenuItemCaption,0)},c2v:function(){if(this.val()!==undefined)gx.O.A43MenuItemCaption=this.val()},val:function(){return gx.fn.getControlValue("MENUITEMCAPTION")},nac:gx.falseFn};
   GXValidFnc[39]={ id: 39, fld:"",grid:0};
   GXValidFnc[40]={ id: 40, fld:"MENUITEMTYPE_CELL",grid:0};
   GXValidFnc[41]={ id: 41, fld:"UNNAMEDTABLEMENUITEMTYPE",grid:0};
   GXValidFnc[42]={ id: 42, fld:"",grid:0};
   GXValidFnc[43]={ id: 43, fld:"",grid:0};
   GXValidFnc[44]={ id: 44, fld:"TEXTBLOCKMENUITEMTYPE", format:0,grid:0};
   GXValidFnc[45]={ id: 45, fld:"",grid:0};
   GXValidFnc[46]={ id: 46, fld:"",grid:0};
   GXValidFnc[47]={ id:47 ,lvl:0,type:"int",len:1,dec:0,sign:false,pic:"9",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Menuitemtype,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMTYPE",gxz:"Z45MenuItemType",gxold:"O45MenuItemType",gxvar:"A45MenuItemType",ucs:[],op:[47],ip:[47],
						nacdep:[],ctrltype:"combo",v2v:function(Value){if(Value!==undefined)gx.O.A45MenuItemType=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z45MenuItemType=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("MENUITEMTYPE",gx.O.A45MenuItemType);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){if(this.val()!==undefined)gx.O.A45MenuItemType=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUITEMTYPE",'.')},nac:gx.falseFn};
   this.declareDomainHdlr( 47 , function() {
   });
   GXValidFnc[48]={ id: 48, fld:"",grid:0};
   GXValidFnc[49]={ id: 49, fld:"MENUITEMICONCLASS_CELL",grid:0};
   GXValidFnc[50]={ id: 50, fld:"UNNAMEDTABLEMENUITEMICONCLASS",grid:0};
   GXValidFnc[51]={ id: 51, fld:"",grid:0};
   GXValidFnc[52]={ id: 52, fld:"",grid:0};
   GXValidFnc[53]={ id: 53, fld:"TEXTBLOCKMENUITEMICONCLASS", format:0,grid:0};
   GXValidFnc[54]={ id: 54, fld:"",grid:0};
   GXValidFnc[55]={ id: 55, fld:"",grid:0};
   GXValidFnc[56]={ id:56 ,lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMICONCLASS",gxz:"Z44MenuItemIconClass",gxold:"O44MenuItemIconClass",gxvar:"A44MenuItemIconClass",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A44MenuItemIconClass=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z44MenuItemIconClass=Value},v2c:function(){gx.fn.setControlValue("MENUITEMICONCLASS",gx.O.A44MenuItemIconClass,0)},c2v:function(){if(this.val()!==undefined)gx.O.A44MenuItemIconClass=this.val()},val:function(){return gx.fn.getControlValue("MENUITEMICONCLASS")},nac:gx.falseFn};
   GXValidFnc[57]={ id: 57, fld:"",grid:0};
   GXValidFnc[58]={ id: 58, fld:"MENUITEMLINK_CELL",grid:0};
   GXValidFnc[59]={ id: 59, fld:"UNNAMEDTABLEMENUITEMLINK",grid:0};
   GXValidFnc[60]={ id: 60, fld:"",grid:0};
   GXValidFnc[61]={ id: 61, fld:"",grid:0};
   GXValidFnc[62]={ id: 62, fld:"TEXTBLOCKMENUITEMLINK", format:0,grid:0};
   GXValidFnc[63]={ id: 63, fld:"",grid:0};
   GXValidFnc[64]={ id: 64, fld:"",grid:0};
   GXValidFnc[65]={ id:65 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMLINK",gxz:"Z95MenuItemLink",gxold:"O95MenuItemLink",gxvar:"A95MenuItemLink",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A95MenuItemLink=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z95MenuItemLink=Value},v2c:function(){gx.fn.setControlValue("MENUITEMLINK",gx.O.A95MenuItemLink,0)},c2v:function(){if(this.val()!==undefined)gx.O.A95MenuItemLink=this.val()},val:function(){return gx.fn.getControlValue("MENUITEMLINK")},nac:gx.falseFn};
   GXValidFnc[66]={ id: 66, fld:"",grid:0};
   GXValidFnc[67]={ id: 67, fld:"MENUITEMLINKPARAMETERS_CELL",grid:0};
   GXValidFnc[68]={ id: 68, fld:"UNNAMEDTABLEMENUITEMLINKPARAMETERS",grid:0};
   GXValidFnc[69]={ id: 69, fld:"",grid:0};
   GXValidFnc[70]={ id: 70, fld:"",grid:0};
   GXValidFnc[71]={ id: 71, fld:"TEXTBLOCKMENUITEMLINKPARAMETERS", format:0,grid:0};
   GXValidFnc[72]={ id: 72, fld:"",grid:0};
   GXValidFnc[73]={ id: 73, fld:"",grid:0};
   GXValidFnc[74]={ id:74 ,lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMLINKPARAMETERS",gxz:"Z97MenuItemLinkParameters",gxold:"O97MenuItemLinkParameters",gxvar:"A97MenuItemLinkParameters",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A97MenuItemLinkParameters=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z97MenuItemLinkParameters=Value},v2c:function(){gx.fn.setControlValue("MENUITEMLINKPARAMETERS",gx.O.A97MenuItemLinkParameters,0)},c2v:function(){if(this.val()!==undefined)gx.O.A97MenuItemLinkParameters=this.val()},val:function(){return gx.fn.getControlValue("MENUITEMLINKPARAMETERS")},nac:gx.falseFn};
   GXValidFnc[75]={ id: 75, fld:"",grid:0};
   GXValidFnc[76]={ id: 76, fld:"",grid:0};
   GXValidFnc[77]={ id: 77, fld:"UNNAMEDTABLEMENUITEMLINKTARGET",grid:0};
   GXValidFnc[78]={ id: 78, fld:"",grid:0};
   GXValidFnc[79]={ id: 79, fld:"",grid:0};
   GXValidFnc[80]={ id: 80, fld:"TEXTBLOCKMENUITEMLINKTARGET", format:0,grid:0};
   GXValidFnc[81]={ id: 81, fld:"",grid:0};
   GXValidFnc[82]={ id: 82, fld:"",grid:0};
   GXValidFnc[83]={ id:83 ,lvl:0,type:"svchar",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMLINKTARGET",gxz:"Z96MenuItemLinkTarget",gxold:"O96MenuItemLinkTarget",gxvar:"A96MenuItemLinkTarget",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A96MenuItemLinkTarget=Value},v2z:function(Value){if(Value!==undefined)gx.O.Z96MenuItemLinkTarget=Value},v2c:function(){gx.fn.setCheckBoxValue("MENUITEMLINKTARGET",gx.O.A96MenuItemLinkTarget,"_blank")},c2v:function(){if(this.val()!==undefined)gx.O.A96MenuItemLinkTarget=this.val()},val:function(){return gx.fn.getControlValue("MENUITEMLINKTARGET")},nac:gx.falseFn,values:['_blank','_']};
   GXValidFnc[84]={ id: 84, fld:"",grid:0};
   GXValidFnc[85]={ id: 85, fld:"MENUITEMSHOWDEVELOPERMENUOPTION_CELL",grid:0};
   GXValidFnc[86]={ id: 86, fld:"",grid:0};
   GXValidFnc[87]={ id: 87, fld:"",grid:0};
   GXValidFnc[88]={ id:88 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMSHOWDEVELOPERMENUOPTIO",gxz:"Z99MenuItemShowDeveloperMenuOptio",gxold:"O99MenuItemShowDeveloperMenuOptio",gxvar:"A99MenuItemShowDeveloperMenuOptio",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A99MenuItemShowDeveloperMenuOptio=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z99MenuItemShowDeveloperMenuOptio=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MENUITEMSHOWDEVELOPERMENUOPTIO",gx.O.A99MenuItemShowDeveloperMenuOptio,true)},c2v:function(){if(this.val()!==undefined)gx.O.A99MenuItemShowDeveloperMenuOptio=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MENUITEMSHOWDEVELOPERMENUOPTIO")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[89]={ id: 89, fld:"",grid:0};
   GXValidFnc[90]={ id: 90, fld:"MENUITEMSHOWEDITMENUOPTIONS_CELL",grid:0};
   GXValidFnc[91]={ id: 91, fld:"",grid:0};
   GXValidFnc[92]={ id: 92, fld:"",grid:0};
   GXValidFnc[93]={ id:93 ,lvl:0,type:"boolean",len:4,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMSHOWEDITMENUOPTIONS",gxz:"Z100MenuItemShowEditMenuOptions",gxold:"O100MenuItemShowEditMenuOptions",gxvar:"A100MenuItemShowEditMenuOptions",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"checkbox",v2v:function(Value){if(Value!==undefined)gx.O.A100MenuItemShowEditMenuOptions=gx.lang.booleanValue(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z100MenuItemShowEditMenuOptions=gx.lang.booleanValue(Value)},v2c:function(){gx.fn.setCheckBoxValue("MENUITEMSHOWEDITMENUOPTIONS",gx.O.A100MenuItemShowEditMenuOptions,true)},c2v:function(){if(this.val()!==undefined)gx.O.A100MenuItemShowEditMenuOptions=gx.lang.booleanValue(this.val())},val:function(){return gx.fn.getControlValue("MENUITEMSHOWEDITMENUOPTIONS")},nac:gx.falseFn,values:['true','false']};
   GXValidFnc[94]={ id: 94, fld:"",grid:0};
   GXValidFnc[95]={ id: 95, fld:"",grid:0};
   GXValidFnc[96]={ id: 96, fld:"",grid:0};
   GXValidFnc[97]={ id: 97, fld:"",grid:0};
   GXValidFnc[98]={ id: 98, fld:"BTNTRN_ENTER",grid:0};
   GXValidFnc[99]={ id: 99, fld:"",grid:0};
   GXValidFnc[100]={ id: 100, fld:"BTNTRN_CANCEL",grid:0};
   GXValidFnc[101]={ id: 101, fld:"",grid:0};
   GXValidFnc[102]={ id: 102, fld:"BTNTRN_DELETE",grid:0};
   GXValidFnc[103]={ id: 103, fld:"",grid:0};
   GXValidFnc[104]={ id: 104, fld:"",grid:0};
   GXValidFnc[105]={ id: 105, fld:"HTML_BOTTOMAUXILIARCONTROLS",grid:0};
   GXValidFnc[106]={ id:106 ,lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,grid:0,gxgrid:null,fnc:this.Valid_Menuitemid,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"MENUITEMID",gxz:"Z29MenuItemId",gxold:"O29MenuItemId",gxvar:"A29MenuItemId",ucs:[],op:[],ip:[],
						nacdep:[],ctrltype:"edit",v2v:function(Value){if(Value!==undefined)gx.O.A29MenuItemId=gx.num.intval(Value)},v2z:function(Value){if(Value!==undefined)gx.O.Z29MenuItemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("MENUITEMID",gx.O.A29MenuItemId,0)},c2v:function(){if(this.val()!==undefined)gx.O.A29MenuItemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("MENUITEMID",'.')},nac:gx.falseFn};
   this.A30MenuItemFatherId = 0 ;
   this.Z30MenuItemFatherId = 0 ;
   this.O30MenuItemFatherId = 0 ;
   this.A43MenuItemCaption = "" ;
   this.Z43MenuItemCaption = "" ;
   this.O43MenuItemCaption = "" ;
   this.A45MenuItemType = 0 ;
   this.Z45MenuItemType = 0 ;
   this.O45MenuItemType = 0 ;
   this.A44MenuItemIconClass = "" ;
   this.Z44MenuItemIconClass = "" ;
   this.O44MenuItemIconClass = "" ;
   this.A95MenuItemLink = "" ;
   this.Z95MenuItemLink = "" ;
   this.O95MenuItemLink = "" ;
   this.A97MenuItemLinkParameters = "" ;
   this.Z97MenuItemLinkParameters = "" ;
   this.O97MenuItemLinkParameters = "" ;
   this.A96MenuItemLinkTarget = "" ;
   this.Z96MenuItemLinkTarget = "" ;
   this.O96MenuItemLinkTarget = "" ;
   this.A99MenuItemShowDeveloperMenuOptio = false ;
   this.Z99MenuItemShowDeveloperMenuOptio = false ;
   this.O99MenuItemShowDeveloperMenuOptio = false ;
   this.A100MenuItemShowEditMenuOptions = false ;
   this.Z100MenuItemShowEditMenuOptions = false ;
   this.O100MenuItemShowEditMenuOptions = false ;
   this.A29MenuItemId = 0 ;
   this.Z29MenuItemId = 0 ;
   this.O29MenuItemId = 0 ;
   this.AV8WWPContext = {UserId:0,UserName:""} ;
   this.AV9TrnContext = {CallerObject:"",CallerOnDelete:false,CallerURL:"",TransactionName:"",Attributes:[]} ;
   this.AV21GXV1 = 0 ;
   this.AV11Insert_MenuItemFatherId = 0 ;
   this.AV16MenuItemShowDeveloperMenuOption = false ;
   this.AV12TrnContextAtt = {AttributeName:"",AttributeValue:""} ;
   this.AV7MenuItemId = 0 ;
   this.AV13MenuItemFatherId = 0 ;
   this.AV10WebSession = {} ;
   this.A29MenuItemId = 0 ;
   this.A30MenuItemFatherId = 0 ;
   this.A45MenuItemType = 0 ;
   this.AV14MenuItemCaption = "" ;
   this.AV15MenuItemIconClass = "" ;
   this.A43MenuItemCaption = "" ;
   this.AV20Pgmname = "" ;
   this.Gx_BScreen = 0 ;
   this.A101MenuItemOrder = 0 ;
   this.A46MenuItemFatherCaption = "" ;
   this.A98MenuItemFatherType = 0 ;
   this.A95MenuItemLink = "" ;
   this.A97MenuItemLinkParameters = "" ;
   this.A96MenuItemLinkTarget = "" ;
   this.A44MenuItemIconClass = "" ;
   this.A99MenuItemShowDeveloperMenuOptio = false ;
   this.A100MenuItemShowEditMenuOptions = false ;
   this.Gx_mode = "" ;
   this.Events = {"e12092_client": ["AFTER TRN", true] ,"e130910_client": ["ENTER", true] ,"e140910_client": ["CANCEL", true]};
   this.EvtParms["ENTER"] = [[{postForm:true},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7MenuItemId',fld:'vMENUITEMID',pic:'ZZZ9',hsh:true},{av:'AV13MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}],[{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]];
   this.EvtParms["REFRESH"] = [[{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV7MenuItemId',fld:'vMENUITEMID',pic:'ZZZ9',hsh:true},{av:'AV11Insert_MenuItemFatherId',fld:'vINSERT_MENUITEMFATHERID',pic:'ZZZ9'},{av:'AV16MenuItemShowDeveloperMenuOption',fld:'vMENUITEMSHOWDEVELOPERMENUOPTION',pic:''},{av:'A101MenuItemOrder',fld:'MENUITEMORDER',pic:'ZZZ9'},{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}],[{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]];
   this.EvtParms["START"] = [[{av:'AV20Pgmname',fld:'vPGMNAME',pic:''},{av:'Gx_mode',fld:'vMODE',pic:'@!',hsh:true},{av:'AV13MenuItemFatherId',fld:'vMENUITEMFATHERID',pic:'ZZZ9'},{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}],[{av:'AV8WWPContext',fld:'vWWPCONTEXT',pic:''},{av:'AV9TrnContext',fld:'vTRNCONTEXT',pic:''},{av:'AV21GXV1',fld:'vGXV1',pic:'99999999'},{av:'AV12TrnContextAtt',fld:'vTRNCONTEXTATT',pic:''},{av:'AV11Insert_MenuItemFatherId',fld:'vINSERT_MENUITEMFATHERID',pic:'ZZZ9'},{av:'gx.fn.getCtrlProperty("MENUITEMID","Visible")',ctrl:'MENUITEMID',prop:'Visible'},{av:'AV16MenuItemShowDeveloperMenuOption',fld:'vMENUITEMSHOWDEVELOPERMENUOPTION',pic:''},{av:'gx.fn.getCtrlProperty("MENUITEMFATHERID_CELL","Class")',ctrl:'MENUITEMFATHERID_CELL',prop:'Class'},{ctrl:'MENUITEMTYPE'},{av:'gx.fn.getCtrlProperty("MENUITEMTYPE_CELL","Class")',ctrl:'MENUITEMTYPE_CELL',prop:'Class'},{av:'gx.fn.getCtrlProperty("MENUITEMICONCLASS","Visible")',ctrl:'MENUITEMICONCLASS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MENUITEMICONCLASS_CELL","Class")',ctrl:'MENUITEMICONCLASS_CELL',prop:'Class'},{av:'gx.fn.getCtrlProperty("MENUITEMLINK","Visible")',ctrl:'MENUITEMLINK',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MENUITEMLINK_CELL","Class")',ctrl:'MENUITEMLINK_CELL',prop:'Class'},{av:'gx.fn.getCtrlProperty("MENUITEMLINKPARAMETERS","Visible")',ctrl:'MENUITEMLINKPARAMETERS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MENUITEMLINKPARAMETERS_CELL","Class")',ctrl:'MENUITEMLINKPARAMETERS_CELL',prop:'Class'},{av:'gx.fn.getCtrlProperty("MENUITEMSHOWDEVELOPERMENUOPTIO","Visible")',ctrl:'MENUITEMSHOWDEVELOPERMENUOPTIO',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MENUITEMSHOWDEVELOPERMENUOPTION_CELL","Class")',ctrl:'MENUITEMSHOWDEVELOPERMENUOPTION_CELL',prop:'Class'},{av:'gx.fn.getCtrlProperty("MENUITEMSHOWEDITMENUOPTIONS","Visible")',ctrl:'MENUITEMSHOWEDITMENUOPTIONS',prop:'Visible'},{av:'gx.fn.getCtrlProperty("MENUITEMSHOWEDITMENUOPTIONS_CELL","Class")',ctrl:'MENUITEMSHOWEDITMENUOPTIONS_CELL',prop:'Class'},{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]];
   this.EvtParms["AFTER TRN"] = [[{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}],[{ctrl:'MENUITEMFATHERID'},{av:'A30MenuItemFatherId',fld:'MENUITEMFATHERID',pic:'ZZZ9'}]];
   this.EnterCtrl = ["BTNTRN_ENTER"];
   this.setVCMap("AV7MenuItemId", "vMENUITEMID", 0, "int", 4, 0);
   this.setVCMap("AV11Insert_MenuItemFatherId", "vINSERT_MENUITEMFATHERID", 0, "int", 4, 0);
   this.setVCMap("AV13MenuItemFatherId", "vMENUITEMFATHERID", 0, "int", 4, 0);
   this.setVCMap("AV14MenuItemCaption", "vMENUITEMCAPTION", 0, "svchar", 40, 0);
   this.setVCMap("AV15MenuItemIconClass", "vMENUITEMICONCLASS", 0, "svchar", 40, 0);
   this.setVCMap("Gx_BScreen", "vGXBSCREEN", 0, "int", 1, 0);
   this.setVCMap("AV16MenuItemShowDeveloperMenuOption", "vMENUITEMSHOWDEVELOPERMENUOPTION", 0, "boolean", 4, 0);
   this.setVCMap("Gx_mode", "vMODE", 0, "char", 3, 0);
   this.setVCMap("A101MenuItemOrder", "MENUITEMORDER", 0, "int", 4, 0);
   this.setVCMap("A46MenuItemFatherCaption", "MENUITEMFATHERCAPTION", 0, "svchar", 40, 0);
   this.setVCMap("A98MenuItemFatherType", "MENUITEMFATHERTYPE", 0, "int", 1, 0);
   this.setVCMap("AV20Pgmname", "vPGMNAME", 0, "char", 129, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.menuitem);});
