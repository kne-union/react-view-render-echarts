(this["webpackJsonpreact-view-render-example"]=this["webpackJsonpreact-view-render-example"]||[]).push([[16],{388:function(t,e,n){"use strict";n.r(e);var r=n(381);n.d(e,"version",(function(){return r.bb})),n.d(e,"dependencies",(function(){return r.l})),n.d(e,"PRIORITY",(function(){return r.g})),n.d(e,"init",(function(){return r.B})),n.d(e,"connect",(function(){return r.j})),n.d(e,"disConnect",(function(){return r.m})),n.d(e,"disconnect",(function(){return r.n})),n.d(e,"dispose",(function(){return r.o})),n.d(e,"getInstanceByDom",(function(){return r.w})),n.d(e,"getInstanceById",(function(){return r.x})),n.d(e,"registerTheme",(function(){return r.R})),n.d(e,"registerPreprocessor",(function(){return r.P})),n.d(e,"registerProcessor",(function(){return r.Q})),n.d(e,"registerPostInit",(function(){return r.N})),n.d(e,"registerPostUpdate",(function(){return r.O})),n.d(e,"registerUpdateLifecycle",(function(){return r.T})),n.d(e,"registerAction",(function(){return r.H})),n.d(e,"registerCoordinateSystem",(function(){return r.I})),n.d(e,"getCoordinateSystemDimensions",(function(){return r.v})),n.d(e,"registerLocale",(function(){return r.L})),n.d(e,"registerLayout",(function(){return r.J})),n.d(e,"registerVisual",(function(){return r.U})),n.d(e,"registerLoading",(function(){return r.K})),n.d(e,"setCanvasCreator",(function(){return r.V})),n.d(e,"registerMap",(function(){return r.M})),n.d(e,"getMap",(function(){return r.y})),n.d(e,"registerTransform",(function(){return r.S})),n.d(e,"dataTool",(function(){return r.k})),n.d(e,"zrender",(function(){return r.db})),n.d(e,"matrix",(function(){return r.D})),n.d(e,"vector",(function(){return r.ab})),n.d(e,"zrUtil",(function(){return r.cb})),n.d(e,"color",(function(){return r.i})),n.d(e,"throttle",(function(){return r.W})),n.d(e,"helper",(function(){return r.A})),n.d(e,"use",(function(){return r.Y})),n.d(e,"parseGeoJSON",(function(){return r.F})),n.d(e,"parseGeoJson",(function(){return r.G})),n.d(e,"number",(function(){return r.E})),n.d(e,"time",(function(){return r.X})),n.d(e,"graphic",(function(){return r.z})),n.d(e,"format",(function(){return r.u})),n.d(e,"util",(function(){return r.Z})),n.d(e,"env",(function(){return r.p})),n.d(e,"List",(function(){return r.e})),n.d(e,"Model",(function(){return r.f})),n.d(e,"Axis",(function(){return r.a})),n.d(e,"ComponentModel",(function(){return r.c})),n.d(e,"ComponentView",(function(){return r.d})),n.d(e,"SeriesModel",(function(){return r.h})),n.d(e,"ChartView",(function(){return r.b})),n.d(e,"innerDrawElementOnCanvas",(function(){return r.C})),n.d(e,"extendComponentModel",(function(){return r.r})),n.d(e,"extendComponentView",(function(){return r.s})),n.d(e,"extendSeriesModel",(function(){return r.t})),n.d(e,"extendChartView",(function(){return r.q}))},401:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var r=n(411),i=n(353);function o(t,e){var n=t.mapDimensionsAll("defaultedLabel"),i=n.length;if(1===i){var o=Object(r.e)(t,e,n[0]);return null!=o?o+"":null}if(i){for(var a=[],s=0;s<n.length;s++)a.push(Object(r.e)(t,e,n[s]));return a.join(" ")}}function a(t,e){var n=t.mapDimensionsAll("defaultedLabel");if(!Object(i.isArray)(e))return e+"";for(var r=[],o=0;o<n.length;o++){var a=t.getDimensionIndex(n[o]);a>=0&&r.push(e[a])}return r.join(" ")}},405:function(t,e,n){"use strict";var r=n(354),i=n(374),o=n(378),a=n(418),s=n(360),l=n(358),u=n(401),c=n(353),p=n(359),d=n(385),h=function(t){function e(e,n,r,i){var o=t.call(this)||this;return o.updateData(e,n,r,i),o}return Object(r.b)(e,t),e.prototype._createSymbol=function(t,e,n,r,o){this.removeAll();var a=Object(i.a)(t,-1,-1,2,2,null,o);a.attr({z2:100,culling:!0,scaleX:r[0]/2,scaleY:r[1]/2}),a.drift=f,this._symbolType=t,this.add(a)},e.prototype.stopSymbolAnimation=function(t){this.childAt(0).stopAnimation(null,t)},e.prototype.getSymbolType=function(){return this._symbolType},e.prototype.getSymbolPath=function(){return this.childAt(0)},e.prototype.highlight=function(){Object(l.r)(this.childAt(0))},e.prototype.downplay=function(){Object(l.C)(this.childAt(0))},e.prototype.setZ=function(t,e){var n=this.childAt(0);n.zlevel=t,n.z=e},e.prototype.setDraggable=function(t){var e=this.childAt(0);e.draggable=t,e.cursor=t?"move":e.cursor},e.prototype.updateData=function(t,n,r,i){this.silent=!1;var a=t.getItemVisual(n,"symbol")||"circle",s=t.hostModel,l=e.getSymbolSize(t,n),u=a!==this._symbolType,c=i&&i.disableAnimation;if(u){var p=t.getItemVisual(n,"symbolKeepAspect");this._createSymbol(a,t,n,l,p)}else{(h=this.childAt(0)).silent=!1;var d={scaleX:l[0]/2,scaleY:l[1]/2};c?h.attr(d):o.h(h,d,s,n),Object(o.g)(h)}if(this._updateCommon(t,n,l,r,i),u){var h=this.childAt(0);if(!c){d={scaleX:this._sizeX,scaleY:this._sizeY,style:{opacity:h.style.opacity}};h.scaleX=h.scaleY=0,h.style.opacity=0,o.c(h,d,s,n)}}c&&this.childAt(0).stopAnimation("remove"),this._seriesModel=s},e.prototype._updateCommon=function(t,e,n,r,o){var a,s,h,f,m,y,g,v,b=this.childAt(0),S=t.hostModel;if(r&&(a=r.emphasisItemStyle,s=r.blurItemStyle,h=r.selectItemStyle,f=r.focus,m=r.blurScope,y=r.labelStatesModels,g=r.hoverScale,v=r.cursorStyle),!r||t.hasItemOption){var _=r&&r.itemModel?r.itemModel:t.getItemModel(e),I=_.getModel("emphasis");a=I.getModel("itemStyle").getItemStyle(),h=_.getModel(["select","itemStyle"]).getItemStyle(),s=_.getModel(["blur","itemStyle"]).getItemStyle(),f=I.get("focus"),m=I.get("blurScope"),y=Object(p.e)(_),g=I.getShallow("scale"),v=_.getShallow("cursor")}var x=t.getItemVisual(e,"symbolRotate");b.attr("rotation",(x||0)*Math.PI/180||0);var w=Object(i.b)(t.getItemVisual(e,"symbolOffset"),n);w&&(b.x=w[0],b.y=w[1]),v&&b.attr("cursor",v);var C=t.getItemVisual(e,"style"),O=C.fill;if(b instanceof d.a){var D=b.style;b.useStyle(Object(c.extend)({image:D.image,x:D.x,y:D.y,width:D.width,height:D.height},C))}else b.__isEmptyBrush?b.useStyle(Object(c.extend)({},C)):b.useStyle(C),b.style.decal=null,b.setColor(O,o&&o.symbolInnerColor),b.style.strokeNoScale=!0;var A=t.getItemVisual(e,"liftZ"),j=this._z2;null!=A?null==j&&(this._z2=b.z2,b.z2+=A):null!=j&&(b.z2=j,this._z2=null);var M=o&&o.useNameLabel;Object(p.g)(b,y,{labelFetcher:S,labelDataIndex:e,defaultText:function(e){return M?t.getName(e):Object(u.b)(t,e)},inheritColor:O,defaultOpacity:C.opacity}),this._sizeX=n[0]/2,this._sizeY=n[1]/2;var z=b.ensureState("emphasis");if(z.style=a,b.ensureState("select").style=h,b.ensureState("blur").style=s,g){var P=Math.max(1.1,3/this._sizeY);z.scaleX=this._sizeX*P,z.scaleY=this._sizeY*P}this.setSymbolScale(1),Object(l.o)(this,f,m)},e.prototype.setSymbolScale=function(t){this.scaleX=this.scaleY=t},e.prototype.fadeOut=function(t,e){var n=this.childAt(0),r=this._seriesModel,i=Object(s.a)(this).dataIndex,a=e&&e.animation;if(this.silent=n.silent=!0,e&&e.fadeLabel){var l=n.getTextContent();l&&o.e(l,{style:{opacity:0}},r,{dataIndex:i,removeOpt:a,cb:function(){n.removeTextContent()}})}else n.removeTextContent();o.e(n,{style:{opacity:0},scaleX:0,scaleY:0},r,{dataIndex:i,cb:t,removeOpt:a})},e.getSymbolSize=function(t,e){return Object(i.c)(t.getItemVisual(e,"symbolSize"))},e}(a.a);function f(t,e){this.parent.drift(t,e)}e.a=h},406:function(t,e,n){"use strict";var r=n(418),i=n(378),o=n(405),a=n(353),s=n(359);function l(t,e,n,r){return e&&!isNaN(e[0])&&!isNaN(e[1])&&!(r.isIgnore&&r.isIgnore(n))&&!(r.clipShape&&!r.clipShape.contain(e[0],e[1]))&&"none"!==t.getItemVisual(n,"symbol")}function u(t){return null==t||Object(a.isObject)(t)||(t={isIgnore:t}),t||{}}function c(t){var e=t.hostModel,n=e.getModel("emphasis");return{emphasisItemStyle:n.getModel("itemStyle").getItemStyle(),blurItemStyle:e.getModel(["blur","itemStyle"]).getItemStyle(),selectItemStyle:e.getModel(["select","itemStyle"]).getItemStyle(),focus:n.get("focus"),blurScope:n.get("blurScope"),hoverScale:n.get("scale"),labelStatesModels:Object(s.e)(e),cursorStyle:e.get("cursor")}}var p=function(){function t(t){this.group=new r.a,this._SymbolCtor=t||o.a}return t.prototype.updateData=function(t,e){e=u(e);var n=this.group,r=t.hostModel,o=this._data,a=this._SymbolCtor,s=e.disableAnimation,p=c(t),d={disableAnimation:s},h=e.getSymbolPoint||function(e){return t.getItemLayout(e)};o||n.removeAll(),t.diff(o).add((function(r){var i=h(r);if(l(t,i,r,e)){var o=new a(t,r,p,d);o.setPosition(i),t.setItemGraphicEl(r,o),n.add(o)}})).update((function(u,c){var f=o.getItemGraphicEl(c),m=h(u);if(l(t,m,u,e)){var y=t.getItemVisual(u,"symbol")||"circle",g=f&&f.getSymbolType&&f.getSymbolType();if(!f||g&&g!==y)n.remove(f),(f=new a(t,u,p,d)).setPosition(m);else{f.updateData(t,u,p,d);var v={x:m[0],y:m[1]};s?f.attr(v):i.h(f,v,r)}n.add(f),t.setItemGraphicEl(u,f)}else n.remove(f)})).remove((function(t){var e=o.getItemGraphicEl(t);e&&e.fadeOut((function(){n.remove(e)}))})).execute(),this._getSymbolPoint=h,this._data=t},t.prototype.isPersistent=function(){return!0},t.prototype.updateLayout=function(){var t=this,e=this._data;e&&e.eachItemGraphicEl((function(e,n){var r=t._getSymbolPoint(n);e.setPosition(r),e.markRedraw()}))},t.prototype.incrementalPrepareUpdate=function(t){this._seriesScope=c(t),this._data=null,this.group.removeAll()},t.prototype.incrementalUpdate=function(t,e,n){function r(t){t.isGroup||(t.incremental=!0,t.ensureState("emphasis").hoverLayer=!0)}n=u(n);for(var i=t.start;i<t.end;i++){var o=e.getItemLayout(i);if(l(e,o,i,n)){var a=new this._SymbolCtor(e,i,this._seriesScope);a.traverse(r),a.setPosition(o),this.group.add(a),e.setItemGraphicEl(i,a)}}},t.prototype.remove=function(t){var e=this.group,n=this._data;n&&t?n.eachItemGraphicEl((function(t){t.fadeOut((function(){e.remove(t)}))})):e.removeAll()},t}();e.a=p},412:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(353),i=n(428),o=n(400),a=n(419);function s(t,e){return{seriesType:t,plan:Object(i.a)(),reset:function(t){var n=t.getData(),i=t.coordinateSystem,s=t.pipelineContext,l=e||s.large;if(i){var u=Object(r.map)(i.dimensions,(function(t){return n.mapDimension(t)})).slice(0,2),c=u.length,p=n.getCalculationInfo("stackResultDimension");Object(o.c)(n,u[0])&&(u[0]=p),Object(o.c)(n,u[1])&&(u[1]=p);var d=n.getStore(),h=n.getDimensionIndex(u[0]),f=n.getDimensionIndex(u[1]);return c&&{progress:function(t,e){for(var n=t.end-t.start,r=l&&Object(a.a)(n*c),o=[],s=[],u=t.start,p=0;u<t.end;u++){var m=void 0;if(1===c){var y=d.get(h,u);m=i.dataToPoint(y,null,s)}else o[0]=d.get(h,u),o[1]=d.get(f,u),m=i.dataToPoint(o,null,s);l?(r[p++]=m[0],r[p++]=m[1]):e.setItemLayout(u,m.slice())}l&&e.setLayout("points",r)}}}}}}},419:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(353),i="undefined"!==typeof Float32Array,o=i?Float32Array:Array;function a(t){return Object(r.isArray)(t)?i?new Float32Array(t):t:new o(t)}},656:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n(382),i=n(354),o=n(393),a=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=e.type,n.hasSymbolVisual=!0,n}return Object(i.b)(e,t),e.prototype.getInitialData=function(t,e){return Object(o.a)(null,this,{useEncodeDefaulter:!0})},e.prototype.getProgressive=function(){var t=this.option.progressive;return null==t?this.option.large?5e3:this.get("progressive"):t},e.prototype.getProgressiveThreshold=function(){var t=this.option.progressiveThreshold;return null==t?this.option.large?1e4:this.get("progressiveThreshold"):t},e.prototype.brushSelector=function(t,e,n){return n.point(e.getItemLayout(t))},e.type="series.scatter",e.dependencies=["grid","polar","geo","singleAxis","calendar"],e.defaultOption={coordinateSystem:"cartesian2d",zlevel:0,z:2,legendHoverLink:!0,symbolSize:10,large:!1,largeThreshold:2e3,itemStyle:{opacity:.8},emphasis:{scale:!0},clip:!0,select:{itemStyle:{borderColor:"#212121"}},universalTransition:{divideShape:"clone"}},e}(n(362).b),s=n(406),l=n(367),u=n(418),c=n(374),p=n(450),d=n(360),h=function(){},f=function(t){function e(e){return t.call(this,e)||this}return Object(i.b)(e,t),e.prototype.getDefaultShape=function(){return new h},e.prototype.buildPath=function(t,e){var n=e.points,r=e.size,i=this.symbolProxy,o=i.shape,a=t.getContext?t.getContext():t;if(a&&r[0]<4)this._ctx=a;else{this._ctx=null;for(var s=0;s<n.length;){var l=n[s++],u=n[s++];isNaN(l)||isNaN(u)||(this.softClipShape&&!this.softClipShape.contain(l,u)||(o.x=l-r[0]/2,o.y=u-r[1]/2,o.width=r[0],o.height=r[1],i.buildPath(t,o,!0)))}}},e.prototype.afterBrush=function(){var t=this.shape,e=t.points,n=t.size,r=this._ctx;if(r)for(var i=0;i<e.length;){var o=e[i++],a=e[i++];isNaN(o)||isNaN(a)||(this.softClipShape&&!this.softClipShape.contain(o,a)||r.fillRect(o-n[0]/2,a-n[1]/2,n[0],n[1]))}},e.prototype.findDataIndex=function(t,e){for(var n=this.shape,r=n.points,i=n.size,o=Math.max(i[0],4),a=Math.max(i[1],4),s=r.length/2-1;s>=0;s--){var l=2*s,u=r[l]-o/2,c=r[l+1]-a/2;if(t>=u&&e>=c&&t<=u+o&&e<=c+a)return s}return-1},e}(l.b),m=function(){function t(){this.group=new u.a}return t.prototype.isPersistent=function(){return!this._incremental},t.prototype.updateData=function(t,e){this.group.removeAll();var n=new f({rectHover:!0,cursor:"default"});n.setShape({points:t.getLayout("points")}),this._setCommon(n,t,!1,e),this.group.add(n),this._incremental=null},t.prototype.updateLayout=function(t){if(!this._incremental){var e=t.getLayout("points");this.group.eachChild((function(t){if(null!=t.startIndex){var n=2*(t.endIndex-t.startIndex),r=4*t.startIndex*2;e=new Float32Array(e.buffer,r,n)}t.setShape("points",e)}))}},t.prototype.incrementalPrepareUpdate=function(t){this.group.removeAll(),this._clearIncremental(),t.count()>2e6?(this._incremental||(this._incremental=new p.a({silent:!0})),this.group.add(this._incremental)):this._incremental=null},t.prototype.incrementalUpdate=function(t,e,n){var r;this._incremental?(r=new f,this._incremental.addDisplayable(r,!0)):((r=new f({rectHover:!0,cursor:"default",startIndex:t.start,endIndex:t.end})).incremental=!0,this.group.add(r)),r.setShape({points:e.getLayout("points")}),this._setCommon(r,e,!!this._incremental,n)},t.prototype._setCommon=function(t,e,n,r){var i=e.hostModel;r=r||{};var o=e.getVisual("symbolSize");t.setShape("size",o instanceof Array?o:[o,o]),t.softClipShape=r.clipShape||null,t.symbolProxy=Object(c.a)(e.getVisual("symbol"),0,0,0,0),t.setColor=t.symbolProxy.setColor;var a=t.shape.size[0]<4;t.useStyle(i.getModel("itemStyle").getItemStyle(a?["color","shadowBlur","shadowColor"]:["color"]));var s=e.getVisual("style"),l=s&&s.fill;if(l&&t.setColor(l),!n){var u=Object(d.a)(t);u.seriesIndex=i.seriesIndex,t.on("mousemove",(function(e){u.dataIndex=null;var n=t.findDataIndex(e.offsetX,e.offsetY);n>=0&&(u.dataIndex=n+(t.startIndex||0))}))}},t.prototype.remove=function(){this._clearIncremental(),this._incremental=null,this.group.removeAll()},t.prototype._clearIncremental=function(){var t=this._incremental;t&&t.clearDisplaybles()},t}(),y=n(412),g=function(t){function e(){var n=null!==t&&t.apply(this,arguments)||this;return n.type=e.type,n}return Object(i.b)(e,t),e.prototype.render=function(t,e,n){var r=t.getData();this._updateSymbolDraw(r,t).updateData(r,{clipShape:this._getClipShape(t)}),this._finished=!0},e.prototype.incrementalPrepareRender=function(t,e,n){var r=t.getData();this._updateSymbolDraw(r,t).incrementalPrepareUpdate(r),this._finished=!1},e.prototype.incrementalRender=function(t,e,n){this._symbolDraw.incrementalUpdate(t,e.getData(),{clipShape:this._getClipShape(e)}),this._finished=t.end===e.getData().count()},e.prototype.updateTransform=function(t,e,n){var r=t.getData();if(this.group.dirty(),!this._finished||r.count()>1e4||!this._symbolDraw.isPersistent())return{update:!0};var i=Object(y.a)("").reset(t,e,n);i.progress&&i.progress({start:0,end:r.count(),count:r.count()},r),this._symbolDraw.updateLayout(r)},e.prototype._getClipShape=function(t){var e=t.coordinateSystem,n=e&&e.getArea&&e.getArea();return t.get("clip",!0)?n:null},e.prototype._updateSymbolDraw=function(t,e){var n=this._symbolDraw,r=e.pipelineContext.large;return n&&r===this._isLargeDraw||(n&&n.remove(),n=this._symbolDraw=r?new m:new s.a,this._isLargeDraw=r,this.group.removeAll()),this.group.add(n.group),n},e.prototype.remove=function(t,e){this._symbolDraw&&this._symbolDraw.remove(!0),this._symbolDraw=null},e.prototype.dispose=function(){},e.type="scatter",e}(n(361).a),v=n(539);function b(t){Object(r.a)(v.a),t.registerSeriesModel(a),t.registerChartView(g),t.registerLayout(Object(y.a)("scatter"))}}}]);
//# sourceMappingURL=16.dad70d93.chunk.js.map