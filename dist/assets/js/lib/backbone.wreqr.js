// Backbone.Wreqr (Backbone.Marionette)
// ----------------------------------
// v0.2.0
//
// Copyright (c)2013 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://github.com/marionettejs/backbone.wreqr

Backbone.Wreqr=function(e,t,n){var r={};return r.Handlers=function(e,t){var n=function(e){this.options=e,this._wreqrHandlers={},t.isFunction(this.initialize)&&this.initialize(e)};return n.extend=e.Model.extend,t.extend(n.prototype,e.Events,{setHandlers:function(e){t.each(e,function(e,n){var r=null;t.isObject(e)&&!t.isFunction(e)&&(r=e.context,e=e.callback),this.setHandler(n,e,r)},this)},setHandler:function(e,t,n){var r={callback:t,context:n};this._wreqrHandlers[e]=r,this.trigger("handler:add",e,t,n)},hasHandler:function(e){return!!this._wreqrHandlers[e]},getHandler:function(e){var t=this._wreqrHandlers[e];if(!t)throw new Error("Handler not found for '"+e+"'");return function(){var e=Array.prototype.slice.apply(arguments);return t.callback.apply(t.context,e)}},removeHandler:function(e){delete this._wreqrHandlers[e]},removeAllHandlers:function(){this._wreqrHandlers={}}}),n}(e,n),r.CommandStorage=function(){var t=function(e){this.options=e,this._commands={},n.isFunction(this.initialize)&&this.initialize(e)};return n.extend(t.prototype,e.Events,{getCommands:function(e){var t=this._commands[e];return t||(t={command:e,instances:[]},this._commands[e]=t),t},addCommand:function(e,t){var n=this.getCommands(e);n.instances.push(t)},clearCommands:function(e){var t=this.getCommands(e);t.instances=[]}}),t}(),r.Commands=function(e){return e.Handlers.extend({storageType:e.CommandStorage,constructor:function(t){this.options=t||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this);var n=Array.prototype.slice.call(arguments);e.Handlers.prototype.constructor.apply(this,n)},execute:function(e,t){e=arguments[0],t=Array.prototype.slice.call(arguments,1),this.hasHandler(e)?this.getHandler(e).apply(this,t):this.storage.addCommand(e,t)},_executeCommands:function(e,t,r){var i=this.storage.getCommands(e);n.each(i.instances,function(e){t.apply(r,e)}),this.storage.clearCommands(e)},_initializeStorage:function(e){var t,r=e.storageType||this.storageType;n.isFunction(r)?t=new r:t=r,this.storage=t}})}(r),r.RequestResponse=function(e){return e.Handlers.extend({request:function(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return this.getHandler(e).apply(this,t)}})}(r),r.EventAggregator=function(e,t){var n=function(){};return n.extend=e.Model.extend,t.extend(n.prototype,e.Events),n}(e,n),r}(Backbone,Backbone.Marionette,_);