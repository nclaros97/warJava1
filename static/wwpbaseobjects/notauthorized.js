/*!   GeneXus Java 16_0_1-129648 on November 1, 2019 22:28:22.32
*/
gx.evt.autoSkip = false;
gx.define('wwpbaseobjects.notauthorized', false, function () {
   this.ServerClass =  "wwpbaseobjects.notauthorized" ;
   this.PackageName =  "com.taankanik" ;
   this.setObjectType("web");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.autoRefresh = true;
   this.fullAjax = true;
   this.supportAjaxEvents =  true ;
   this.ajaxSecurityToken =  true ;
   this.SetStandaloneVars=function()
   {
      this.GxObject=gx.fn.getControlValue("vGXOBJECT") ;
   };
   this.e122j2_client=function()
   {
      return this.executeServerEvent("LOGINAGAIN.CLICK", true, null, false, true);
   };
   this.e142j2_client=function()
   {
      return this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e152j2_client=function()
   {
      return this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,18,20,23,25];
   this.GXLastCtrlId =25;
   GXValidFnc[2]={ id: 2, fld:"",grid:0};
   GXValidFnc[3]={ id: 3, fld:"LAYOUTMAINTABLE",grid:0};
   GXValidFnc[4]={ id: 4, fld:"",grid:0};
   GXValidFnc[5]={ id: 5, fld:"",grid:0};
   GXValidFnc[6]={ id: 6, fld:"TABLEMAIN",grid:0};
   GXValidFnc[7]={ id: 7, fld:"",grid:0};
   GXValidFnc[8]={ id: 8, fld:"",grid:0};
   GXValidFnc[9]={ id: 9, fld:"NOTAUTHORIZEDIMAGE",grid:0};
   GXValidFnc[10]={ id: 10, fld:"",grid:0};
   GXValidFnc[11]={ id: 11, fld:"",grid:0};
   GXValidFnc[12]={ id: 12, fld:"UNAUTHORIZEDACCESS", format:0,grid:0};
   GXValidFnc[13]={ id: 13, fld:"",grid:0};
   GXValidFnc[14]={ id: 14, fld:"",grid:0};
   GXValidFnc[15]={ id: 15, fld:"UNNAMEDTABLE1",grid:0};
   GXValidFnc[18]={ id: 18, fld:"TOLOGINAGAIN", format:0,grid:0};
   GXValidFnc[20]={ id: 20, fld:"LOGINAGAIN", format:0,grid:0,evt:"e122j2_client"};
   GXValidFnc[23]={ id: 23, fld:"TORETURN", format:0,grid:0};
   GXValidFnc[25]={ id: 25, fld:"RETURN", format:0,grid:0};
   this.GxObject = "" ;
   this.Events = {"e122j2_client": ["LOGINAGAIN.CLICK", true] ,"e142j2_client": ["ENTER", true] ,"e152j2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["START"] = [[],[{av:'gx.fn.getCtrlProperty("LAYOUTMAINTABLE","Class")',ctrl:'LAYOUTMAINTABLE',prop:'Class'},{ctrl:'FORM',prop:'Backcolor'}]];
   this.EvtParms["LOGINAGAIN.CLICK"] = [[],[]];
   this.setVCMap("GxObject", "vGXOBJECT", 0, "svchar", 256, 0);
   this.Initialize( );
});
gx.wi( function() { gx.createParentObj(wwpbaseobjects.notauthorized);});
