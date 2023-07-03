"use strict";(self.webpackChunkng_asana_blocker=self.webpackChunkng_asana_blocker||[]).push([[560],{5560:(ke,_,i)=>{i.r(_),i.d(_,{SettingsModule:()=>g});var u=i(8692),b=i(8239),n=i(92),D=i(7723),Z=i(2085),L=i(408),w=i(8499),O=i(5955),U=i(1995),e=i(4537),v=i(1188),F=i(5732);class h{constructor(d){this.http=d,this.authUrl="https://asana-blocker212.onrender.com/api/v1",this.usermethodUrl=this.authUrl+"/method",this.usertextUrl=this.authUrl+"/text",this.userCheckIntervalUrl=this.authUrl+"/CheckInterval"}user(d){return this.http.post(this.usermethodUrl,d)}userLogin(d){return this.http.post(this.usertextUrl,d)}updateUser(d){return this.http.put(this.usermethodUrl+"/"+d.userId,d)}getMDataByUserId(d){return this.http.get(this.usermethodUrl+"?userId="+d)}getTDataByUserId(d){return this.http.get(this.usertextUrl+"?userId="+d)}getCheckIntervalDataByUserId(d){return this.http.get(this.usertextUrl+"?userId="+d)}}h.\u0275fac=function(d){return new(d||h)(e.LFG(F.eN))},h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"});var B=i(7666),z=i(6026),f=i(8659),q=i(8954),s=i(1379),x=i(4929);const G=["switch"],E=["*"],V=new e.OlP("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1})}),J={provide:n.JU,useExisting:(0,e.Gpc)(()=>k),multi:!0};class y{constructor(d,a){this.source=d,this.checked=a}}let X=0;const j=(0,s.sb)((0,s.pj)((0,s.Kr)((0,s.Id)(class{constructor(t){this._elementRef=t}}))));let N=(()=>{class t extends j{constructor(a,c,o,r,l,m,ye){super(a),this._focusMonitor=c,this._changeDetectorRef=o,this.defaults=l,this._onChange=Me=>{},this._onTouched=()=>{},this._required=!1,this._checked=!1,this.name=null,this.labelPosition="after",this.ariaLabel=null,this.ariaLabelledby=null,this.change=new e.vpe,this.toggleChange=new e.vpe,this.tabIndex=parseInt(r)||0,this.color=this.defaultColor=l.color||"accent",this._noopAnimations="NoopAnimations"===m,this.id=this._uniqueId=`${ye}${++X}`}get required(){return this._required}set required(a){this._required=(0,x.Ig)(a)}get checked(){return this._checked}set checked(a){this._checked=(0,x.Ig)(a),this._changeDetectorRef.markForCheck()}get inputId(){return`${this.id||this._uniqueId}-input`}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(a=>{"keyboard"===a||"program"===a?(this._focused=!0,this._changeDetectorRef.markForCheck()):a||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(a){this.checked=!!a}registerOnChange(a){this._onChange=a}registerOnTouched(a){this._onTouched=a}setDisabledState(a){this.disabled=a,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}}return t.\u0275fac=function(a){e.$Z()},t.\u0275dir=e.lG2({type:t,inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"],required:"required",checked:"checked"},outputs:{change:"change",toggleChange:"toggleChange"},features:[e.qOj]}),t})(),k=(()=>{class t extends N{constructor(a,c,o,r,l,m){super(a,c,o,r,l,m,"mat-mdc-slide-toggle-"),this._labelId=this._uniqueId+"-label"}get buttonId(){return`${this.id||this._uniqueId}-button`}_handleClick(){this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new y(this,this.checked)))}focus(){this._switchElement.nativeElement.focus()}_createChangeEvent(a){return new y(this,a)}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(e.SBq),e.Y36(q.tE),e.Y36(e.sBO),e.$8M("tabindex"),e.Y36(V),e.Y36(e.QbO,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-slide-toggle"]],viewQuery:function(a,c){if(1&a&&e.Gf(G,5),2&a){let o;e.iGM(o=e.CRH())&&(c._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:11,hostBindings:function(a,c){2&a&&(e.Ikx("id",c.id),e.uIk("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),e.ekj("mat-mdc-slide-toggle-focused",c._focused)("mat-mdc-slide-toggle-checked",c.checked)("_mat-animation-noopable",c._noopAnimations))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex"},exportAs:["matSlideToggle"],features:[e._Bn([J]),e.qOj],ngContentSelectors:E,decls:17,vars:24,consts:[[1,"mdc-form-field"],["role","switch","type","button",1,"mdc-switch",3,"tabIndex","disabled","click"],["switch",""],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-mdc-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],["viewBox","0 0 24 24",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"],[3,"for","click"]],template:function(a,c){if(1&a&&(e.F$t(),e.TgZ(0,"div",0)(1,"button",1,2),e.NdJ("click",function(){return c._handleClick()}),e._UZ(3,"div",3),e.TgZ(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"div",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"div",9),e.qZA(),e.TgZ(10,"div",10),e.O4$(),e.TgZ(11,"svg",11),e._UZ(12,"path",12),e.qZA(),e.TgZ(13,"svg",13),e._UZ(14,"path",14),e.qZA()()()()(),e.kcU(),e.TgZ(15,"label",15),e.NdJ("click",function(r){return r.stopPropagation()}),e.Hsn(16),e.qZA()()),2&a){const o=e.MAs(2);e.ekj("mdc-form-field--align-end","before"==c.labelPosition),e.xp6(1),e.ekj("mdc-switch--selected",c.checked)("mdc-switch--unselected",!c.checked)("mdc-switch--checked",c.checked)("mdc-switch--disabled",c.disabled),e.Q6J("tabIndex",c.tabIndex)("disabled",c.disabled),e.uIk("id",c.buttonId)("name",c.name)("aria-label",c.ariaLabel)("aria-labelledby",c._getAriaLabelledBy())("aria-describedby",c.ariaDescribedby)("aria-required",c.required||null)("aria-checked",c.checked),e.xp6(8),e.Q6J("matRippleTrigger",o)("matRippleDisabled",c.disableRipple||c.disabled)("matRippleCentered",!0),e.xp6(6),e.Q6J("for",c.buttonId),e.uIk("id",c._labelId)}},dependencies:[s.wG],styles:['.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch[hidden]{display:none}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}@media screen and (forced-colors: active){.mdc-switch__track::before,.mdc-switch__track::after{border-color:currentColor}}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%)}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%)}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%)}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid rgba(0,0,0,0);border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1),border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}@media screen and (forced-colors: active){.mdc-switch__handle::before,.mdc-switch__handle::after{border-color:currentColor}}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle{display:inline-block;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0}.mat-mdc-slide-toggle .mdc-switch{width:var(--mdc-switch-track-width, 36px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-hover-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-selected-focus-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-selected-pressed-handle-color, #310077)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:var(--mdc-switch-unselected-handle-color, #616161)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle::before{background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-handle-elevation, 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__shadow{box-shadow:var(--mdc-switch-disabled-handle-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__focus-ring-wrapper,.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{height:var(--mdc-switch-handle-height, 20px)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__handle::after{opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{border-radius:var(--mdc-switch-handle-shape, 10px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle{width:var(--mdc-switch-handle-width, 20px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__handle-track{width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected .mdc-switch__icon{width:var(--mdc-switch-selected-icon-size, 18px);height:var(--mdc-switch-selected-icon-size, 18px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:var(--mdc-switch-unselected-icon-size, 18px);height:var(--mdc-switch-unselected-icon-size, 18px)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #6200ee))}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__ripple{height:var(--mdc-switch-state-layer-size, 48px);width:var(--mdc-switch-state-layer-size, 48px)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__track{height:var(--mdc-switch-track-height, 14px)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track{opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__track::after{background:var(--mdc-switch-selected-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-hover-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:var(--mdc-switch-selected-focus-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:enabled:active .mdc-switch__track::after{background:var(--mdc-switch-selected-pressed-track-color, #d7bbff)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track::after{background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mat-mdc-slide-toggle .mdc-switch:enabled .mdc-switch__track::before{background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:enabled:active .mdc-switch__track::before{background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mat-mdc-slide-toggle .mdc-switch:disabled .mdc-switch__track::before{background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mat-mdc-slide-toggle .mdc-switch .mdc-switch__track{border-radius:var(--mdc-switch-track-shape, 7px)}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,.mat-mdc-slide-toggle .mdc-switch__ripple::after{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty){transform:translateZ(0)}.mat-mdc-slide-toggle .mdc-switch__ripple::after{content:"";opacity:0}.mat-mdc-slide-toggle .mdc-switch:hover .mdc-switch__ripple::after{opacity:.04;transition:opacity 75ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mdc-switch .mdc-switch__ripple::after{opacity:.12}.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-mdc-focus-indicator::before{content:""}.mat-mdc-slide-toggle .mat-ripple-element{opacity:.12}.mat-mdc-slide-toggle .mat-mdc-focus-indicator::before{border-radius:50%}.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-elevation-overlay,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after{transition:none}'],encapsulation:2,changeDetection:0}),t})(),C=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({}),t})(),H=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[C,s.BQ,s.si,u.ez,C,s.BQ]}),t})();var M=i(8033);const Y=["*"],te=new e.OlP("MAT_CARD_CONFIG");let T=(()=>{class t{constructor(a){this.appearance=a?.appearance||"raised"}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(te,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(a,c){2&a&&e.ekj("mat-mdc-card-outlined","outlined"===c.appearance)("mdc-card--outlined","outlined"===c.appearance)},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Y,decls:1,vars:0,template:function(a,c){1&a&&(e.F$t(),e.Hsn(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mat-mdc-card{position:relative;border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px));background-color:var(--mdc-elevated-card-container-color, transparent);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color, transparent)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width, 1px);border-style:solid;border-color:var(--mdc-outlined-card-outline-color, transparent)}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0}),t})(),S=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275dir=e.lG2({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]}),t})(),ue=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.BQ,u.ez,s.BQ]}),t})();var I=i(9638),A=i(7406);function pe(t,d){if(1&t&&(e.TgZ(0,"mat-option",12),e._uU(1),e.qZA()),2&t){const a=d.$implicit;e.Q6J("value",a.id),e.xp6(1),e.hij(" ",a.name," ")}}function fe(t,d){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Random text length is required "),e.qZA())}function be(t,d){if(1&t&&(e.TgZ(0,"div",11),e._uU(1," Example of string: "),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&t){const a=e.oxw();e.xp6(3),e.Oqu(a.randomTextOfLength)}}function _e(t,d){1&t&&(e.TgZ(0,"mat-error"),e._uU(1," Interval in minutes is required "),e.qZA())}class p{constructor(d,a,c,o,r,l){this.storageService=d,this.settingService=a,this._stor=c,this._snackBar=o,this._cdr=r,this._titleService=l,this.randomTextOnOff=new n.NI(!1),this.randomTextStringLength=new n.NI(10,[n.kI.required]),this.asanaTaskCheck=new n.NI(.02,[n.kI.required,n.kI.min(1e-9)]),this.data=[],this.randomTextOfLength="",this.rewardMethod=new n.NI("automatic"),this.rewardMethods=[{id:"automatic",name:"Automatic"},{id:"manual",name:"Manual"}]}ngOnInit(){this._titleService.title$.next("Settings"),this.initRandomText(),this.initRandomTextWatchers(),this.initAsanaTaskCheck(),this.initRewardMethod(),this._cdr.detectChanges()}initRewardMethod(){var d=this;return(0,b.Z)(function*(){const a=yield d._stor.get("rewardMethod");a&&d.rewardMethod.setValue(a)})()}saveRewardMethodChange(){this.rewardMethod.value&&(this._stor.set({rewardMethod:this.rewardMethod.value}),this.openSnackBar("Saved!","close"))}initRandomTextWatchers(){this.randomTextStringLength.valueChanges.pipe(function R(t){return(0,Z.e)((d,a)=>{let c=!1,o=null,r=null;const l=()=>{if(r?.unsubscribe(),r=null,c){c=!1;const m=o;o=null,a.next(m)}};d.subscribe((0,w.x)(a,m=>{r?.unsubscribe(),c=!0,o=m,r=(0,w.x)(a,l,L.Z),(0,O.Xf)(t(m)).subscribe(r)},()=>{l(),a.complete()},void 0,()=>{o=r=null}))})}(()=>(0,U.H)(400))).subscribe(()=>{this.generateRandomText()})}initAsanaTaskCheck(){var d=this;return(0,b.Z)(function*(){const a=yield d._stor.get("asanaTaskCheckIntervalBg");a&&d.asanaTaskCheck.setValue(a)})()}initRandomText(){var d=this;return(0,b.Z)(function*(){let a=yield d._stor.get("randomText");a&&void 0!==a.onoff&&(d.randomTextOnOff.setValue(a.onoff),a.onoff&&d.randomTextStringLength.setValidators([n.kI.required])),a&&void 0!==a.len&&d.randomTextStringLength.setValue(a.len),d.generateRandomText()})()}saveRandomText(){let d=this.randomTextOnOff.value;this.randomTextStringLength.valid||!d?(this._stor.set({randomText:{onoff:d,len:d?this.randomTextStringLength.value:void 0}}),this.openSnackBar("Saved!","close")):this.randomTextStringLength.markAsTouched(),this._cdr.detectChanges()}saveAsanaTaskInterval(){const d=this.asanaTaskCheck.value;this.asanaTaskCheck.invalid?this.asanaTaskCheck.markAsTouched():(this._stor.set({asanaTaskCheckInterval:d}),this._stor.set({asanaTaskCheckIntervalBg:d}),this.openSnackBar("Saved!","close")),this._cdr.detectChanges()}generateRandomText(){this.randomTextOfLength=this.randomTextStringLength.value?D.m.getRandomString(this.randomTextStringLength.value):"",this._cdr.detectChanges()}openSnackBar(d,a){this._snackBar.open(d,a)}}p.\u0275fac=function(d){return new(d||p)(e.Y36(v.V),e.Y36(h),e.Y36(v.V),e.Y36(B.ux),e.Y36(e.sBO),e.Y36(z.y))},p.\u0275cmp=e.Xpm({type:p,selectors:[["ab-settings"]],decls:47,vars:9,consts:[[1,"mb-3"],[1,"mat-subtitle-1"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary",1,"rewards-save",3,"click"],[1,"random-text-length-field"],["matInput","","placeholder","Ex. 10",3,"readonly","formControl"],[4,"ngIf"],["class","random-text-example mb-3",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["matInput","","placeholder","Ex. 0.02",3,"formControl"],[1,"random-text-example","mb-3"],[3,"value"],[1,"example-string"]],template:function(d,a){1&d&&(e.TgZ(0,"mat-card")(1,"mat-card-content")(2,"div",0)(3,"h3",1),e._uU(4,"Reward activation method"),e.qZA()(),e.TgZ(5,"div")(6,"mat-form-field")(7,"mat-label"),e._uU(8,"Method"),e.qZA(),e.TgZ(9,"mat-select",2),e.YNc(10,pe,2,2,"mat-option",3),e.qZA()()(),e.TgZ(11,"div")(12,"button",4),e.NdJ("click",function(){return a.saveRewardMethodChange()}),e._uU(13,"Save"),e.qZA()()()(),e.TgZ(14,"mat-card")(15,"mat-card-content")(16,"div",0)(17,"h3",1),e._uU(18,"Random text unblock"),e.qZA(),e.TgZ(19,"mat-slide-toggle",2),e._uU(20,"On/off"),e.qZA()(),e.TgZ(21,"div")(22,"mat-form-field",5)(23,"mat-label"),e._uU(24,"Random text length"),e.qZA(),e._UZ(25,"input",6),e.qZA(),e.YNc(26,fe,2,0,"mat-error",7),e.YNc(27,be,4,1,"div",8),e.qZA(),e.TgZ(28,"div")(29,"button",9),e.NdJ("click",function(){return a.saveRandomText()}),e._uU(30,"Save"),e.qZA()()()(),e.TgZ(31,"mat-card")(32,"mat-card-content")(33,"div",0)(34,"h3",1),e._uU(35,"Asana task check interval in minutes"),e.qZA()(),e.TgZ(36,"div")(37,"mat-form-field",5)(38,"mat-label"),e._uU(39,"Interval in minutes"),e.qZA(),e._UZ(40,"input",10),e.qZA(),e.YNc(41,_e,2,0,"mat-error",7),e.TgZ(42,"div",11),e._uU(43," Note: Saved time interval will take an effect only after the next start of the blocking "),e.qZA()(),e.TgZ(44,"div")(45,"button",9),e.NdJ("click",function(){return a.saveAsanaTaskInterval()}),e._uU(46,"Save"),e.qZA()()()()),2&d&&(e.xp6(9),e.Q6J("formControl",a.rewardMethod),e.xp6(1),e.Q6J("ngForOf",a.rewardMethods),e.xp6(9),e.Q6J("formControl",a.randomTextOnOff),e.xp6(6),e.Q6J("readonly",!a.randomTextOnOff.value)("formControl",a.randomTextStringLength),e.xp6(1),e.Q6J("ngIf",a.randomTextStringLength.invalid&&a.randomTextStringLength.touched&&a.randomTextOnOff.value),e.xp6(1),e.Q6J("ngIf",a.randomTextStringLength.value),e.xp6(13),e.Q6J("formControl",a.asanaTaskCheck),e.xp6(1),e.Q6J("ngIf",a.asanaTaskCheck.invalid&&a.asanaTaskCheck.touched))},dependencies:[u.sg,u.O5,f.KE,f.hX,f.TO,k,M.gD,s.ey,T,S,I.lW,A.Nt,n.Fj,n.JJ,n.oH],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]{margin:10px}[_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .random-text-length-field[_ngcontent-%COMP%]{margin-bottom:5px}[_nghost-%COMP%]   .example-string[_ngcontent-%COMP%]{font-weight:800;word-break:break-word}[_nghost-%COMP%]   .rewards-save[_ngcontent-%COMP%]{margin-top:15px}"],changeDetection:0});var we=i(3331),ve=i(3580);const xe=[{path:"",component:p}];class g{}g.\u0275fac=function(d){return new(d||g)},g.\u0275mod=e.oAB({type:g}),g.\u0275inj=e.cJS({imports:[u.ez,we.Ps,f.lN,H,M.LD,ue,I.ot,A.c,n.UX,ve.Bz.forRoot(xe),n.u5]})}}]);