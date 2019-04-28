if (self.CavalryLogger) { CavalryLogger.start_js(["9AVu+"]); }

__d("MessengerPlatformInterfaceType",[],(function(a,b,c,d,e,f){e.exports={UNKNOWN_INTERFACE:0,MESSENGER_INTERFACE:1,FB_INTERFACE:2,FB_POST_INTERFACE:3,FB_MESSAGING_INTERFACE:4}}),null);
__d("UFIInstanceAction",["UFIInstanceActionType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={changeOrderingMode:function(a,c){return{type:b("UFIInstanceActionType").CHANGE_ORDER_MODE,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,mode:c}},toggleComments:function(a){return{type:b("UFIInstanceActionType").TOGGLE_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},changeCommentListVisibility:function(a,c){return{type:b("UFIInstanceActionType").CHANGE_VISIBILITY,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,visibility:c}},init:function(a,c){return{type:b("UFIInstanceActionType").INIT,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,payload:c}},didRequestVODComments:function(a){return{type:b("UFIInstanceActionType").REQUESTED_VOD_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},didReceiveVODComments:function(a){return{type:b("UFIInstanceActionType").RECEIVED_VOD_COMMENTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},remove:function(a){return{type:b("UFIInstanceActionType").REMOVE,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},toggleCommercialBreak:function(a,c){return{type:b("UFIInstanceActionType").TOGGLE_COMMERCIAL_BREAK,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,inCommercial:c}},translateAll:function(a){return{type:b("UFIInstanceActionType").TRANSLATE_ALL,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier}},playLiveVODHighlights:function(a,c){return{type:b("UFIInstanceActionType").PLAY_LIVE_VOD_HIGHLIGHTS,instanceID:a.instanceid,ftentidentifier:a.ftentidentifier,playingLiveVODHighlights:c}},foundVideoPlayerController:function(a,b){return{ftentidentifier:a.ftentidentifier,instanceID:a.instanceid,videoPlayerController:b,type:"found_video_player_controller"}}};e.exports=a}),null);
__d("XIdentityBadgesInfomationDialogController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/identity_badge/information_dialog/init/",{badges:{type:"String"},comment_id:{type:"FBID"}})}),null);
__d("IdentityBadges.react",["cx","AsyncRequest","Image.react","Link.react","React","XIdentityBadgesInfomationDialogController","gkx"],(function(a,b,c,d,e,f,g){__p&&__p();var h=12;a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.$2=function(){var a=b("XIdentityBadgesInfomationDialogController").getURIBuilder().setString("badges",JSON.stringify(d.props.badges)).setFBID("comment_id",d.props.commentID).getURI();a=new(b("AsyncRequest"))().setURI(a).setMethod("POST").setReadOnly(!0);a.send()},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.render=function(){var a=this.props.badges;if(!Array.isArray(a)||a.length===0)return null;a=this.props.shouldColorBadges===!0?b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_3x69 _7w-m"},this.$1(!0)),b("React").createElement("div",{className:"_3x69 _7w-n"},this.$1(!1))):b("React").createElement("div",{className:"_3x69"},this.$1(!1));return b("React").createElement(b("Link.react"),{onClick:this.props.disableClick===!0?void 0:this.$2},b("React").createElement("div",{className:"_7w-o"},a))};d.$1=function(a){var c=this.props.canShowMultipleBadges===!0&&b("gkx")("890475"),d=this.props.badges.length===1||!c;return d?this.$3(c,a):this.$4(a)};d.$3=function(a,c){var d=this.props.badges,e=d[0];d=d.length===1?null:" +"+(d.length-1);var f=c?e.multiple_badge_asset_colored:e.multiple_badge_asset;return b("React").createElement(b("React").Fragment,null,b("React").createElement(b("Image.react"),{className:"_3-8_",height:h,src:a?f:e.badge_asset}),b("React").createElement("span",{className:"_3x6z",style:c?{color:e.badge_color}:null},e.text,d))};d.$4=function(a){return this.props.badges.map(function(c){return b("React").createElement(b("Image.react"),{className:"_3-8_",height:h,key:c.type,src:a?c.multiple_badge_asset_colored:c.multiple_badge_asset})})};return c}(b("React").Component);e.exports=a}),null);
__d("LiveVideoAnnouncementGlyph",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({BULB:"bulb",COMMENT:"comment",EYE:"eye",INVITE:"invite",LIKE:"like",LIVE_VIDEO:"live-video",FOLLOW:"follow",FOLLOWING:"following",SHARE:"share",SEE_FIRST:"see_first",LIVING_ROOM_START:"living_room_start",CHECKMARK:"checkmark",AVATAR:"avatar",PLAY:"play",MESSENGER:"messenger",FOLLOW_RECOGNITION:"follow_recognition"})}),null);
__d("UFICommentLiveVideoAnnouncementImage.react",["ix","cx","CurrentUser","Image.react","LiveVideoAnnouncementGlyph","React","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.$1();if(!a)return b("React").createElement("span",null);var c=b("CurrentUser").isWorkUser();return this.props.isJoinEvent?b("React").createElement("div",{className:"_15lj"},b("React").createElement(b("Image.react"),{className:"_24l1",src:a})):b("React").createElement("div",{className:"_15lj"+(c?"":" _z79")+(c?" _66n8":"")},b("React").createElement(b("Image.react"),{className:"_15lk",height:20,src:a,width:20}))};d.$1=function(){__p&&__p();if(!this.props.isJoinEvent)if(b("CurrentUser").isWorkUser())return g("127093");else return g("114228");if(this.props.image)return this.props.image;switch(this.props.glyphName){case b("LiveVideoAnnouncementGlyph").COMMENT:return g("114673");case b("LiveVideoAnnouncementGlyph").EYE:return g("114860");case b("LiveVideoAnnouncementGlyph").BULB:return g("114492");case b("LiveVideoAnnouncementGlyph").LIKE:return g("115160");default:return null}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("UFICommentVoteArrow.react",["cx","Arbiter","FBFeedLocations","JSResource","React","UFIConstants","lazyLoadComponent"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("lazyLoadComponent")(b("JSResource")("UFICommentVoteFirstArrowNUX.react").__setRef("UFICommentVoteArrow.react")),i=b("lazyLoadComponent")(b("JSResource")("UFICommentVoteNUX.react").__setRef("UFICommentVoteArrow.react")),j="TahoeView/selectCommentTab";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b){var c;c=a.call(this,b)||this;c.state={enableFirstArrowNux:!0};c.arrowRef=null;c.setArrowRef=function(a){c.arrowRef=a,c.$1()&&c.forceUpdate()};return c}var d=c.prototype;d.componentDidMount=function(){var a=this;this.props.isFirstComment&&this.props.contextArgs.feedLocationType===b("FBFeedLocations").TAHOE&&(this.setState({enableFirstArrowNux:!1}),b("Arbiter").subscribe(j,function(){return a.setState({enableFirstArrowNux:!0})}))};d.render=function(){var a=this,c=this.props,d=c.arrowType,e=c.hasViewerVoted,f=c.onArrowClick;c=c.UIVersion;var g=d===b("UFIConstants").UFICommentVoteType.UPVOTE,h=g&&e;g=g&&!e;d=d===b("UFIConstants").UFICommentVoteType.DOWNVOTE;var i=d&&e;d=d&&!e;return b("React").createElement("a",{className:(c===b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE?"_4-4u":"")+(h?" _2wdx":"")+(g?" _2wdy":"")+(i?" _2wdz":"")+(d?" _2wd-":""),href:"#",onClick:function(){f(),a.shouldRenderArrowNUX=!0},ref:this.setArrowRef,role:"button"},this.$2(),this.$3())};d.$2=function(){if(!this.shouldRenderArrowNUX)return null;var a=null;this.props.UIVersion===b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE&&(a=this.props.nuxConfigs.voteArrowNUXV2);return!a||!this.arrowRef?null:b("React").createElement(b("React").Suspense,{fallback:b("React").createElement("div",null)},b("React").createElement(i,{context:this.arrowRef,nuxConfig:a,UIVersion:this.props.UIVersion,arrowNUXTextV2:this.props.arrowNUXTextV2}))};d.$1=function(){return Boolean(this.props.isFirstComment&&this.props.nuxConfigs.voteFirstArrowNUXV2&&this.props.UIVersion===b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE&&this.arrowRef&&this.state.enableFirstArrowNux)};d.$3=function(){return!this.$1()?null:b("React").createElement(b("React").Suspense,{fallback:b("React").createElement("div",null)},b("React").createElement(h,{context:this.arrowRef,firstArrowNUXTitleV2:this.props.firstArrowNUXTitleV2,firstArrowNUXBodyV2:this.props.firstArrowNUXBodyV2,nuxConfig:this.props.nuxConfigs.voteFirstArrowNUXV2}))};return c}(b("React").Component);e.exports=a}),null);
__d("UFICommentVoteArrowTooltip.react",["cx","React","UFIConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){if(this.props.UIVersion!==b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE||this.props.displayedArrowTooltipType===b("UFIConstants").UFICommentVoteType.NONE)return null;var a=null;switch(this.props.displayedArrowTooltipType){case b("UFIConstants").UFICommentVoteType.UPVOTE:a=this.props.promoteText;break;case b("UFIConstants").UFICommentVoteType.DOWNVOTE:a=this.props.demoteText;break}return a===null?null:b("React").createElement("div",{className:"_6cw5"},a)};return c}(b("React").Component);e.exports=a}),null);
__d("UFICommentVoteCount.react",["cx","React","UFIConstants"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.voteCount,d=a.voteState,e=a.UIVersion;a=a.voteCountFormatter;var f=d===b("UFIConstants").UFICommentVoteType.UPVOTE,g=d===b("UFIConstants").UFICommentVoteType.DOWNVOTE;d=d===b("UFIConstants").UFICommentVoteType.NONE;e=e===b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE;var h=null;e&&(c<0?g?h=a(-1):h=a(0):h=a(c));return h===null?null:b("React").createElement("a",{className:(e?"_4-4u":"")+" _14d0"+(f?" _12a5":"")+(g?" _12a6":"")+(d?" _12a7":""),href:"#"},h)};return c}(b("React").Component);e.exports=a}),null);
__d("UFICommentVote.react",["cx","React","UFICommentVoteArrow.react","UFICommentVoteArrowTooltip.react","UFICommentVoteCount.react","UFIConstants","debounce"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(d){var e;e=a.call(this,d)||this;e.state={displayedArrowTooltipType:b("UFIConstants").UFICommentVoteType.NONE};e.$2=function(){e.setState({displayedArrowTooltipType:b("UFIConstants").UFICommentVoteType.NONE})};c.disableFirstArrowTooltipDisplay=e.props.nuxConfigs.voteArrowNUXV2!==null;e.$1=b("debounce")(e.$2,e.props.arrowTooltipDisplayTimeMS);return e}var d=c.prototype;d.render=function(){var a=this,c=this.props,d=c.contextArgs,e=c.feedback,f=c.UIVersion,g=c.voteCount,h=c.voteState,i=c.onUpArrowClick,j=c.onDownArrowClick,k=c.arrowNUXTextV2,l=c.firstArrowNUXTitleV2;c=c.firstArrowNUXBodyV2;var m=this.props.voteCountFormatter(g).length<4;return b("React").createElement("div",{className:(f===b("UFIConstants").UFICommentVoteUIVersion.VERTICAL_ON_THE_SIDE?"_2tm9":"")+(m?" _6jru":"")+(m?"":" _6jrv")},b("React").createElement(b("UFICommentVoteArrow.react"),{arrowType:b("UFIConstants").UFICommentVoteType.UPVOTE,contextArgs:d,feedback:e,hasViewerVoted:h===b("UFIConstants").UFICommentVoteType.UPVOTE,UIVersion:f,onArrowClick:function(){i(),a.$3(b("UFIConstants").UFICommentVoteType.UPVOTE)},isFirstComment:this.props.isFirstComment,arrowNUXTextV2:k,firstArrowNUXTitleV2:l,firstArrowNUXBodyV2:c,nuxConfigs:this.props.nuxConfigs}),b("React").createElement(b("UFICommentVoteCount.react"),{voteCount:g,voteCountFormatter:this.props.voteCountFormatter,voteState:h,UIVersion:f}),b("React").createElement(b("UFICommentVoteArrow.react"),{arrowType:b("UFIConstants").UFICommentVoteType.DOWNVOTE,contextArgs:d,feedback:e,hasViewerVoted:h===b("UFIConstants").UFICommentVoteType.DOWNVOTE,UIVersion:f,onArrowClick:function(){j(),a.$3(b("UFIConstants").UFICommentVoteType.DOWNVOTE)},arrowNUXTextV2:k,firstArrowNUXTitleV2:l,firstArrowNUXBodyV2:c,nuxConfigs:this.props.nuxConfigs}),this.props.promoteText&&this.props.demoteText&&b("React").createElement(b("UFICommentVoteArrowTooltip.react"),{displayedArrowTooltipType:this.state.displayedArrowTooltipType,UIVersion:f,promoteText:this.props.promoteText,demoteText:this.props.demoteText}))};d.$3=function(a){if(c.disableFirstArrowTooltipDisplay){c.disableFirstArrowTooltipDisplay=!1;return}var d=this.state.displayedArrowTooltipType;d===b("UFIConstants").UFICommentVoteType.NONE?this.props.voteState===a?this.$2():this.$4(a):d===a?this.$2():this.$4(a)};d.$4=function(a){this.setState({displayedArrowTooltipType:a}),this.$1()};return c}(b("React").Component);a.disableFirstArrowTooltipDisplay=!1;a.defaultProps={arrowTooltipDisplayTimeMS:0,arrowNUXTextV2:"",firstArrowNUXTitleV2:"",firstArrowNUXBodyV2:"",nuxConfigs:{voteArrowNUXV2:null,voteFirstArrowNUXV2:null},voteCountFormatter:function(a){return a.toString()}};e.exports=a}),null);
__d("UFIGifButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","LayerTabIsolation","Link.react","MessengerPlatformInterfaceType","React","SubscriptionsHandler"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=278;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c;c=a.call(this)||this;c.$5=function(){c.setState({flyoutShown:!1,query:""})};c.$8=function(){c.$3=c.state.flyoutShown};c.$7=function(a){__p&&__p();a.preventDefault();if(c.state.renderFlyout!==null){c.$3||(c.props.onGifFlyoutShow&&c.props.onGifFlyoutShow(),c.setState({flyoutShown:!0}));return}a=b("Bootloader").loadModules(["XUIContextualDialog.react","ChatContentSearchFlyout.react","ContextualLayerAutoFlip"],function(a,d,e){c.setState({flyoutShown:!0,renderFlyout:function(){return b("React").createElement(a,{alignment:"right",behaviors:{flip:e,LayerTabIsolation:b("LayerTabIsolation")},className:"_5trk",contextRef:function(){return c.$1},onBlur:c.$5,onToggle:function(a){!a&&c.state.flyoutShown&&c.$5()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:i},b("React").createElement("div",null,b("React").createElement(d,{onEscKeyDown:c.$5,onSelect:c.$9,query:c.state.query,shown:c.state.flyoutShown,searchInterface:b("MessengerPlatformInterfaceType").FB_INTERFACE,queryDefault:c.props.defaultGifSelection})))}}),c.props.onGifFlyoutShow&&c.props.onGifFlyoutShow()},"UFIGifButton.react");c.$4.addSubscriptions(a)};c.$9=function(a){c.props.onGifSelected(a),c.$5()};c.$6=function(a){c.$1=a};c.state={renderFlyout:null,flyoutShown:!1,query:""};return c}var d=c.prototype;d.componentDidMount=function(){var a=this;this.$4=new(b("SubscriptionsHandler"))();this.$2=b("Arbiter").subscribe("page_transition",function(){return a.$5()})};d.componentWillUnmount=function(){this.$2&&this.$2.unsubscribe(),this.$4&&this.$4.release(),delete this.$4};d.render=function(){var a=h._("Post a GIF"),c=this.state.renderFlyout&&this.state.flyoutShown?this.state.renderFlyout():null;return b("React").createElement(b("FocusRelocator.react"),{from:this.$1,to:this.refs.icon},b("React").createElement(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentGifButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this.$6,onClick:this.$7,onMouseDown:this.$8,role:"button"},b("React").createElement("div",{ref:"icon",className:"UFICommentGifIcon"+(this.state.flyoutShown?" UFICommentGifIconActive":"")}),this.props.children,c))};return c}(b("React").Component);a.defaultProps={children:[],showTooltip:!0,defaultGifSelection:null};e.exports=a}),null);
__d("UFIStickerButton.react",["cx","fbt","Arbiter","Bootloader","FocusRelocator.react","Link.react","React","StickerInterfaces","getObjectValues"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"UFIStickerButton",_clickGuard:!1,_updateListener:null,_linkRef:null,propTypes:{allowCustomStickers:a.bool,allowCustomStickersV2:a.bool,customStickerOwnerID:a.string,onStickerFlyoutShow:a.func,onStickerSelected:a.func.isRequired,showTooltip:a.bool,stickerInterface:a.oneOf(b("getObjectValues")(b("StickerInterfaces"))),tabIndex:a.number},getDefaultProps:function(){return{allowCustomStickers:!1,allowCustomStickersV2:!1,customStickerOwnerID:"",showTooltip:!0,stickerInterface:b("StickerInterfaces").COMMENTS}},getInitialState:function(){return{renderFlyout:null,flyoutShown:!1}},componentDidMount:function(){var a=this;this._updateListener=b("Arbiter").subscribe("page_transition",function(){return a._hideFlyout()})},componentWillUnmount:function(){this._updateListener&&this._updateListener.unsubscribe()},render:function(){var a=h._("Post a sticker");return b("React").createElement(b("FocusRelocator.react"),{from:this._linkRef,to:this.refs.icon},b("React").createElement(b("Link.react"),{"aria-label":a,className:"_r1a UFICommentStickerButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":this.props.showTooltip?a:null,linkRef:this._setRef,onClick:this._onLinkClicked,onMouseDown:this._prepareForClick,role:"button",tabIndex:this.props.tabIndex},b("React").createElement("div",{ref:"icon",className:"UFICommentStickerIcon"+(this.state.flyoutShown?" UFICommentStickerIconActive":"")}),this.props.children,this.state.renderFlyout?this.state.renderFlyout():null))},_hideFlyout:function(){this.setState({flyoutShown:!1})},_prepareForClick:function(){this._clickGuard=this.state.flyoutShown},_onLinkClicked:function(a){__p&&__p();var c=this;a.preventDefault();if(this.state.renderFlyout!==null){this._clickGuard||(this.props.onStickerFlyoutShow&&this.props.onStickerFlyoutShow(),this.setState({flyoutShown:!0}));return}b("Bootloader").loadModules(["ContextualLayerAutoFlip","LayerTabIsolation","StickersFlyout.react","XUIContextualDialog.react"],function(a,d,e,f){c.setState({flyoutShown:!0,renderFlyout:function(){return b("React").createElement(f,{alignment:"right",behaviors:{ContextualLayerAutoFlip:a,LayerTabIsolation:d},className:"_5e-r",contextRef:function(){return c._linkRef},onBlur:c._hideFlyout,onToggle:function(a){!a&&c.state.flyoutShown&&c._hideFlyout()},position:"above",shown:c.state.flyoutShown,hasActionableContext:!0,width:c.props.allowCustomStickers?213:278},b("React").createElement("div",null,b("React").createElement(e,{allowCustomStickers:c.props.allowCustomStickers,allowCustomStickersV2:c.props.allowCustomStickersV2,customStickerOwnerID:c.props.customStickerOwnerID,onEscKeyDown:c._hideFlyout,onStickerSelect:c._onStickerSelected,stickerInterface:c.props.stickerInterface,shown:c.state.flyoutShown})))}}),c.props.onStickerFlyoutShow&&c.props.onStickerFlyoutShow()},"UFIStickerButton.react")},_onStickerSelected:function(a,b,c){this.props.onStickerSelected(a,b,c),this._hideFlyout()},_setRef:function(a){this._linkRef=a}});e.exports=c}),null);
__d("XUIEditButton.react",["cx","fbt","React","XUIAbstractGlyphButton.react","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.label,c=this.props.title;!this.props.title&&!this.props.tooltip&&(c=a);return b("React").createElement(b("XUIAbstractGlyphButton.react"),babelHelpers["extends"]({},this.props,{label:a,title:c,"data-hover":this.props.tooltip&&"tooltip","data-tooltip-alignh":this.props.tooltip&&"center","data-tooltip-content":this.props.tooltip,className:b("joinClasses")(this.props.className,"_5upq _5upr")}))};return c}(b("React").Component);a.defaultProps={label:h._("Edit")};e.exports=a}),null);
__d("UFIInsightsSharingCommentTag.react",["cx","fbt","invariant","Arbiter","DOMScroll","Middot.react","React","ReactDOM","ShimButton.react","Tooltip.react"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={isSelected:!1},d.$2=function(){var a=d.props.commentId,c=d.$1();c!==void 0&&a!==void 0&&(b("Arbiter").inform("InsightsComments/"+c+"/clickedInsightsCommentTag",{commentId:a}),d.setSelected())},d.$3=function(){var a=d.$1();a!==void 0&&b("Arbiter").inform("InsightsComments/"+a+"/clickedInsightsCommentTag",{commentId:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentWillUnmount=function(){this.onCommentClicked&&b("Arbiter").unsubscribe(this.onCommentClicked)};d.setSelected=function(){var a=this;this.setState({isSelected:!0});window.setTimeout(function(){a.setState({isSelected:!1})},2e3)};d.componentDidMount=function(){var a=this,c=this.props.commentId;c!==void 0&&c!==null&&(this.onCommentClicked=b("Arbiter").subscribe("InsightsComments/clickedInsightComment/"+c,function(){var c=b("ReactDOM").findDOMNode(a.refs.commentTagContainer);c instanceof Element||i(0,4555);b("DOMScroll").ensureVisible(c,null,55,180);a.setSelected()}))};d.$1=function(){var a=this.props,b=a.feedbackTargetID;a=a.feedbackTargetGraphQLId;if(b!==null&&b!==void 0)return b;return a!==null&&a!==void 0?atob(a).split(":")[1]:""};d.render=function(){var a=this.props.showMiddot,c=a&&b("React").createElement(b("Tooltip.react"),{tooltip:h._("Comment posted with relevance to a certain point on the graph")},b("React").createElement(b("Middot.react"),{className:"_6y-0"})),d="_71ku"+(this.state.isSelected?" _71kv":"");return b("React").createElement("span",{className:d,ref:"commentTagContainer",role:"link",tabIndex:0,onBlur:this.$3,onClick:this.$2},c,b("React").createElement(b("ShimButton.react"),{className:"_39g5 _71kw",form:"link"},a&&"commented about ["+this.props.formattedValue+"] "))};return c}(b("React").Component);e.exports=a}),null);
__d("ClipboardPhotoUploader",["ArbiterMixin","AsyncRequest","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c){var d;d=a.call(this)||this;d.uploadURIString=b;d.data=c;return d}var d=c.prototype;d.handlePaste=function(a){__p&&__p();a=c.getImages(a);for(var d=0;d<a.length;++d){var e=new FormData();e.append("pasted_file",a[d]);var f=new(b("AsyncRequest"))();f.setURI(this.uploadURIString).setData(this.data).setRawData(e).setHandler(function(a){this.inform("upload_success",a)}.bind(this)).setErrorHandler(function(a){this.inform("upload_error",a)}.bind(this)).setAbortHandler(function(a){this.inform("upload_error",a)}.bind(this));this.inform("upload_start");f.send();break}};c.getImages=function(a){__p&&__p();if(!a.clipboardData)return[];a=a.clipboardData.items;if(!a)return[];var b,c=[];for(var d=0;d<a.length;++d){b=a[d];if(b.kind==="string")return[];b.kind==="file"&&b.type.indexOf("image/")!==-1&&c.push(b.getAsFile());b.kind==="blob"&&c.push(b.blob)}return c};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("TimeOffset",["DateConsts"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={timeToTimestamp:function(a){if(a<=0)return"0:00";var b=Math.floor(a/3600),c=b?b+":":"";c+=((b?"0":"")+Math.floor(a%3600/60)).slice(-2)+":";return c+("0"+a%60).slice(-2)},timestampToTime:function(a){a=a.match(/(?:(\d{1,2}):)?(?:(\d{1,2}):)?(\d{1,2})/);if(!a)return-1;var c=parseInt(a[3],10);a[1]&&!a[2]?c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_MIN:a[1]&&a[2]&&(c+=parseInt(a[1],10)*b("DateConsts").SEC_PER_HOUR+parseInt(a[2],10)*b("DateConsts").SEC_PER_MIN);return c}};e.exports=a}),null);
__d("FRXServerFbt.react",["cx","React","ServerHTML.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.blob,d=a.className;a=babelHelpers.objectWithoutPropertiesLoose(a,["blob","className"]);return c==null?null:b("React").createElement(b("ServerHTML.react"),babelHelpers["extends"]({blob:c,className:b("joinClasses")("_6u30",d)},a))};return c}(b("React").Component);e.exports=a}),null);