!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],e):"object"==typeof exports?exports.quark=e(require("react"),require("prop-types")):t.quark=e(t.React,t.PropTypes)}(this,function(t,e){return function(t){function e(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=190)}({0:function(e,a){e.exports=t},10:function(t,e,a){e=t.exports=a(3)(void 0),e.push([t.i,'.tm-quark-notification{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;padding-left:20px;padding-right:20px;z-index:2}.tm-quark-notification *,.tm-quark-notification :after,.tm-quark-notification :before{-webkit-box-sizing:inherit;box-sizing:inherit}.tm-quark-notification_position_absolute{position:absolute}.tm-quark-notification_position_fixed{position:fixed}.tm-quark-notification_position_relative{position:relative}.tm-quark-notification_placement_bottom,.tm-quark-notification_placement_left,.tm-quark-notification_placement_right,.tm-quark-notification_placement_top{border-radius:3px}.tm-quark-notification_placement_left,.tm-quark-notification_placement_right{top:50%}.tm-quark-notification_placement_bottom,.tm-quark-notification_placement_top{left:50%}.tm-quark-notification_placement_left{left:0}.tm-quark-notification_placement_left.tm-quark-notification_visible{-webkit-animation:TMQuarkNotificationShowToLeft .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationShowToLeft .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationShowToLeft{0%{margin-left:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(-100%) scale(.8);transform:translateY(-50%) translateX(-100%) scale(.8)}to{margin-left:-20px;-webkit-transform:translateY(-50%) translateX(-100%) scale(1);transform:translateY(-50%) translateX(-100%) scale(1);opacity:1}}@keyframes TMQuarkNotificationShowToLeft{0%{margin-left:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(-100%) scale(.8);transform:translateY(-50%) translateX(-100%) scale(.8)}to{margin-left:-20px;-webkit-transform:translateY(-50%) translateX(-100%) scale(1);transform:translateY(-50%) translateX(-100%) scale(1);opacity:1}}.tm-quark-notification_placement_left.tm-quark-notification_hidden{-webkit-animation:TMQuarkNotificationHideFromLeft .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationHideFromLeft .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationHideFromLeft{0%{margin-left:-20px;opacity:1;-webkit-transform:translateY(-50%) translateX(-100%) scale(1);transform:translateY(-50%) translateX(-100%) scale(1)}to{margin-left:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(-100%) scale(.8);transform:translateY(-50%) translateX(-100%) scale(.8)}}@keyframes TMQuarkNotificationHideFromLeft{0%{margin-left:-20px;opacity:1;-webkit-transform:translateY(-50%) translateX(-100%) scale(1);transform:translateY(-50%) translateX(-100%) scale(1)}to{margin-left:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(-100%) scale(.8);transform:translateY(-50%) translateX(-100%) scale(.8)}}.tm-quark-notification_placement_top{top:0}.tm-quark-notification_placement_top.tm-quark-notification_visible{-webkit-animation:TMQuarkNotificationShowToTop .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationShowToTop .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationShowToTop{0%{margin-top:-60px;opacity:0;-webkit-transform:translateY(-100%) translateX(-50%) scale(.8);transform:translateY(-100%) translateX(-50%) scale(.8)}to{margin-top:-20px;-webkit-transform:translateY(-100%) translateX(-50%) scale(1);transform:translateY(-100%) translateX(-50%) scale(1);opacity:1}}@keyframes TMQuarkNotificationShowToTop{0%{margin-top:-60px;opacity:0;-webkit-transform:translateY(-100%) translateX(-50%) scale(.8);transform:translateY(-100%) translateX(-50%) scale(.8)}to{margin-top:-20px;-webkit-transform:translateY(-100%) translateX(-50%) scale(1);transform:translateY(-100%) translateX(-50%) scale(1);opacity:1}}.tm-quark-notification_placement_top.tm-quark-notification_hidden{-webkit-animation:TMQuarkNotificationHideFromTop .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationHideFromTop .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationHideFromTop{0%{margin-top:-20px;opacity:1;-webkit-transform:translateY(-100%) translateX(-50%) scale(1);transform:translateY(-100%) translateX(-50%) scale(1)}to{margin-top:-60px;opacity:0;-webkit-transform:translateY(-100%) translateX(-50%) scale(.8);transform:translateY(-100%) translateX(-50%) scale(.8)}}@keyframes TMQuarkNotificationHideFromTop{0%{margin-top:-20px;opacity:1;-webkit-transform:translateY(-100%) translateX(-50%) scale(1);transform:translateY(-100%) translateX(-50%) scale(1)}to{margin-top:-60px;opacity:0;-webkit-transform:translateY(-100%) translateX(-50%) scale(.8);transform:translateY(-100%) translateX(-50%) scale(.8)}}.tm-quark-notification_placement_bottom{bottom:0}.tm-quark-notification_placement_bottom.tm-quark-notification_visible{-webkit-animation:TMQuarkNotificationShowToBottom .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationShowToBottom .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationShowToBottom{0%{margin-bottom:-60px;opacity:0;-webkit-transform:translateY(100%) translateX(-50%) scale(.8);transform:translateY(100%) translateX(-50%) scale(.8)}to{margin-bottom:-20px;-webkit-transform:translateY(100%) translateX(-50%) scale(1);transform:translateY(100%) translateX(-50%) scale(1);opacity:1}}@keyframes TMQuarkNotificationShowToBottom{0%{margin-bottom:-60px;opacity:0;-webkit-transform:translateY(100%) translateX(-50%) scale(.8);transform:translateY(100%) translateX(-50%) scale(.8)}to{margin-bottom:-20px;-webkit-transform:translateY(100%) translateX(-50%) scale(1);transform:translateY(100%) translateX(-50%) scale(1);opacity:1}}.tm-quark-notification_placement_bottom.tm-quark-notification_hidden{-webkit-animation:TMQuarkNotificationHideFromBottom .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationHideFromBottom .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationHideFromBottom{0%{margin-bottom:-20px;opacity:1;-webkit-transform:translateY(100%) translateX(-50%) scale(1);transform:translateY(100%) translateX(-50%) scale(1)}to{margin-bottom:-60px;opacity:0;-webkit-transform:translateY(100%) translateX(-50%) scale(.8);transform:translateY(100%) translateX(-50%) scale(.8)}}@keyframes TMQuarkNotificationHideFromBottom{0%{margin-bottom:-20px;opacity:1;-webkit-transform:translateY(100%) translateX(-50%) scale(1);transform:translateY(100%) translateX(-50%) scale(1)}to{margin-bottom:-60px;opacity:0;-webkit-transform:translateY(100%) translateX(-50%) scale(.8);transform:translateY(100%) translateX(-50%) scale(.8)}}.tm-quark-notification_placement_right{right:0}.tm-quark-notification_placement_right.tm-quark-notification_visible{-webkit-animation:TMQuarkNotificationShowToRight .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationShowToRight .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationShowToRight{0%{margin-right:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(100%) scale(.8);transform:translateY(-50%) translateX(100%) scale(.8)}to{margin-right:-20px;-webkit-transform:translateY(-50%) translateX(100%) scale(1);transform:translateY(-50%) translateX(100%) scale(1);opacity:1}}@keyframes TMQuarkNotificationShowToRight{0%{margin-right:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(100%) scale(.8);transform:translateY(-50%) translateX(100%) scale(.8)}to{margin-right:-20px;-webkit-transform:translateY(-50%) translateX(100%) scale(1);transform:translateY(-50%) translateX(100%) scale(1);opacity:1}}.tm-quark-notification_placement_right.tm-quark-notification_hidden{-webkit-animation:TMQuarkNotificationHideFromRight .5s cubic-bezier(.68,-.55,.265,1.55) forwards;animation:TMQuarkNotificationHideFromRight .5s cubic-bezier(.68,-.55,.265,1.55) forwards}@-webkit-keyframes TMQuarkNotificationHideFromRight{0%{margin-right:-20px;-webkit-transform:translateY(-50%) translateX(100%) scale(1);transform:translateY(-50%) translateX(100%) scale(1);opacity:1}to{margin-right:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(100%) scale(.8);transform:translateY(-50%) translateX(100%) scale(.8)}}@keyframes TMQuarkNotificationHideFromRight{0%{margin-right:-20px;-webkit-transform:translateY(-50%) translateX(100%) scale(1);transform:translateY(-50%) translateX(100%) scale(1);opacity:1}to{margin-right:-60px;opacity:0;-webkit-transform:translateY(-50%) translateX(100%) scale(.8);transform:translateY(-50%) translateX(100%) scale(.8)}}.tm-quark-notification_height_fixed-small{font-size:13px;line-height:20px;height:40px;padding-top:10px;padding-bottom:10px}.tm-quark-notification_height_fixed-medium{font-size:13px;height:60px}.tm-quark-notification_height_auto{font-size:13px;padding-bottom:20px;padding-top:20px}.tm-quark-notification_type_default{color:#546e7a;background-color:#546e7a;-webkit-box-shadow:0 5px 10px 0 rgba(36,35,56,.2);box-shadow:0 5px 10px 0 rgba(36,35,56,.2)}.tm-quark-notification_type_success{color:#1ab744;background-color:#1ab744;-webkit-box-shadow:0 5px 10px 0 rgba(0,96,35,.2);box-shadow:0 5px 10px 0 rgba(0,96,35,.2)}.tm-quark-notification_type_error{color:#d84315;background-color:#d84315;-webkit-box-shadow:0 5px 10px 0 rgba(191,54,12,.2);box-shadow:0 5px 10px 0 rgba(191,54,12,.2)}.tm-quark-notification_type_warning{background-color:#ff8f00;-webkit-box-shadow:0 5px 10px 0 rgba(255,111,0,.2);box-shadow:0 5px 10px 0 rgba(255,111,0,.2)}.tm-quark-notification_arrow-placement_bottom:before,.tm-quark-notification_arrow-placement_left:before,.tm-quark-notification_arrow-placement_right:before,.tm-quark-notification_arrow-placement_top:before{border:8px solid;border-radius:3px;content:"";position:absolute}.tm-quark-notification_arrow-placement_left:before,.tm-quark-notification_arrow-placement_right:before{top:50%}.tm-quark-notification_arrow-placement_bottom:before,.tm-quark-notification_arrow-placement_top:before{left:50%}.tm-quark-notification_arrow-placement_left:before{left:-6px;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}.tm-quark-notification_arrow-placement_top:before{-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);top:-6px}.tm-quark-notification_arrow-placement_bottom:before{-webkit-transform:translateX(-50%) rotate(45deg);transform:translateX(-50%) rotate(45deg);bottom:-6px}.tm-quark-notification_arrow-placement_right:before{right:-6px;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}.tm-quark-notification__content{color:#fff;white-space:nowrap;width:100%}',""])},130:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"left",height:"fixed-small",width:"auto",arrowPlacement:"right"},t))};e.default=u},131:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"right",height:"fixed-small",width:"auto",arrowPlacement:"left"},t))};e.default=u},132:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"bottom",height:"fixed-small",width:"auto",arrowPlacement:"top"},t))};e.default=u},133:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"top",height:"fixed-small",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},134:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"top",height:"auto",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},135:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"bottom",height:"auto",width:"auto",arrowPlacement:"top"},t))};e.default=u},136:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"right",height:"auto",width:"auto",arrowPlacement:"left"},t))};e.default=u},137:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"absolute",placement:"left",height:"auto",width:"auto",arrowPlacement:"right"},t))};e.default=u},138:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"default",position:"fixed",placement:"right",height:"auto",width:"auto",showArrow:"false",showCloseBtn:!0},t))};e.default=u},139:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"left",height:"fixed-small",width:"auto",arrowPlacement:"right"},t))};e.default=u},140:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"right",height:"fixed-small",width:"auto",arrowPlacement:"left"},t))};e.default=u},141:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"bottom",height:"fixed-small",width:"auto",arrowPlacement:"top"},t))};e.default=u},142:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"top",height:"fixed-small",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},143:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"top",height:"auto",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},144:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"bottom",height:"auto",width:"auto",arrowPlacement:"top"},t))};e.default=u},145:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"right",height:"auto",width:"auto",arrowPlacement:"left"},t))};e.default=u},146:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"error",position:"absolute",placement:"left",height:"auto",width:"auto",arrowPlacement:"right"},t))};e.default=u},147:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"left",height:"fixed-small",width:"auto",arrowPlacement:"right"},t))};e.default=u},148:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"right",height:"fixed-small",width:"auto",arrowPlacement:"left"},t))};e.default=u},149:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"bottom",height:"fixed-small",width:"auto",arrowPlacement:"top"},t))};e.default=u},150:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"top",height:"fixed-small",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},151:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"top",height:"auto",width:"auto",arrowPlacement:"bottom"},t))};e.default=u},152:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"bottom",height:"auto",width:"auto",arrowPlacement:"top"},t))};e.default=u},153:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"right",height:"auto",width:"auto",arrowPlacement:"left"},t))};e.default=u},154:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},o=a(0),i=r(o),l=a(8),s=r(l),u=function(t){return i.default.createElement(s.default,n({type:"success",position:"absolute",placement:"left",height:"auto",width:"auto",arrowPlacement:"right"},t))};e.default=u},190:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.N3I=e.N3G=e.N3F=e.N3E=e.N3D=e.N3C=e.N3B=e.N3A=e.N2I=e.N2G=e.N2F=e.N2E=e.N2D=e.N2C=e.N2B=e.N2A=e.N1J=e.N1I=e.N1G=e.N1F=e.N1E=e.N1D=e.N1C=e.N1B=e.N1A=void 0;var n=a(130),o=r(n),i=a(131),l=r(i),s=a(132),u=r(s),c=a(133),f=r(c),p=a(134),d=r(p),m=a(135),b=r(m),h=a(136),w=r(h),g=a(137),y=r(g),_=a(138),v=r(_),k=a(139),O=r(k),x=a(140),j=r(x),N=a(141),M=r(N),P=a(142),q=r(P),T=a(143),X=r(T),Y=a(144),E=r(Y),C=a(145),R=r(C),Q=a(146),S=r(Q),B=a(147),L=r(B),z=a(148),A=r(z),F=a(149),U=r(F),H=a(150),I=r(H),D=a(151),G=r(D),J=a(152),$=r(J),W=a(153),K=r(W),V=a(154),Z=r(V);e.N1A=o.default,e.N1B=l.default,e.N1C=u.default,e.N1D=f.default,e.N1E=d.default,e.N1F=b.default,e.N1G=w.default,e.N1I=y.default,e.N1J=v.default,e.N2A=O.default,e.N2B=j.default,e.N2C=M.default,e.N2D=q.default,e.N2E=X.default,e.N2F=E.default,e.N2G=R.default,e.N2I=S.default,e.N3A=L.default,e.N3B=A.default,e.N3C=U.default,e.N3D=I.default,e.N3E=G.default,e.N3F=$.default,e.N3G=K.default,e.N3I=Z.default},2:function(t,a){t.exports=e},3:function(t,e){function a(t,e){var a=t[1]||"",n=t[3];if(!n)return a;if(e&&"function"==typeof btoa){var o=r(n);return[a].concat(n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"})).concat([o]).join("\n")}return[a].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=a(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&r[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},4:function(t,e,a){function r(t,e){for(var a=0;a<t.length;a++){var r=t[a],n=m[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(c(r.parts[o],e))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(c(r.parts[o],e));m[r.id]={id:r.id,refs:1,parts:i}}}}function n(t,e){for(var a=[],r={},n=0;n<t.length;n++){var o=t[n],i=e.base?o[0]+e.base:o[0],l=o[1],s=o[2],u=o[3],c={css:l,media:s,sourceMap:u};r[i]?r[i].parts.push(c):a.push(r[i]={id:i,parts:[c]})}return a}function o(t,e){var a=h(t.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?a.insertBefore(e,r.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(e)}}function i(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function l(t){var e=document.createElement("style");return t.attrs.type="text/css",u(e,t.attrs),o(t,e),e}function s(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",u(e,t.attrs),o(t,e),e}function u(t,e){Object.keys(e).forEach(function(a){t.setAttribute(a,e[a])})}function c(t,e){var a,r,n,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var u=g++;a=w||(w=l(e)),r=f.bind(null,a,u,!1),n=f.bind(null,a,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=s(e),r=d.bind(null,a,e),n=function(){i(a),a.href&&URL.revokeObjectURL(a.href)}):(a=l(e),r=p.bind(null,a),n=function(){i(a)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}function f(t,e,a,r){var n=a?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,n);else{var o=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function p(t,e){var a=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}function d(t,e,a){var r=a.css,n=a.sourceMap,o=void 0===e.convertToAbsoluteUrls&&n;(e.convertToAbsoluteUrls||o)&&(r=_(r)),n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var i=new Blob([r],{type:"text/css"}),l=t.href;t.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),h=function(t){var e={};return function(a){return void 0===e[a]&&(e[a]=t.call(this,a)),e[a]}}(function(t){return document.querySelector(t)}),w=null,g=0,y=[],_=a(5);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var a=n(t,e);return r(a,e),function(t){for(var o=[],i=0;i<a.length;i++){var l=a[i],s=m[l.id];s.refs--,o.push(s)}t&&r(n(t,e),e);for(var i=0;i<o.length;i++){var s=o[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete m[s.id]}}}};var v=function(){var t=[];return function(e,a){return t[e]=a,t.filter(Boolean).join("\n")}}()},5:function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var a=e.protocol+"//"+e.host,r=a+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n))return t;var o;return o=0===n.indexOf("//")?n:0===n.indexOf("/")?a+n:r+n.replace(/^\.\//,""),"url("+JSON.stringify(o)+")"})}},8:function(t,e,a){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var a={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(a[r]=t[r]);return a}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},u=function(){function t(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),c=a(0),f=r(c),p=a(2),d=r(p);a(9);var m=function(t){function e(){var t,a,r,n;o(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return a=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.state={renderContainer:r.props.show},r.handleAnimationEnd=function(t){t.target!==r.container||r.props.show?window.addEventListener("click",r.handleClickOutside):(window.removeEventListener("click",r.handleClickOutside),r.removeContainer())},r.handleClickOutside=function(t){r.props.hideOnClickOutside&&r.container&&t.target!==r.container&&!r.container.contains(t.target)&&r.props.show&&r.props.onRequestHide()},r.removeContainer=function(){r.setState({renderContainer:!1})},n=a,i(r,n)}return l(e,t),u(e,[{key:"componentWillReceiveProps",value:function(t){t.show&&!this.state.renderContainer&&this.setState({renderContainer:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleClickOutside)}},{key:"render",value:function(){var t=this,e=this.props,a=e.onRequestHide,r=e.position,o=e.placement,i=e.height,l=e.width,u=e.type,c=e.showArrow,p=e.arrowPlacement,d=e.showCloseBtn,m=e.className,b=(e.hideOnClickOutside,e.show),h=e.children,w=n(e,["onRequestHide","position","placement","height","width","type","showArrow","arrowPlacement","showCloseBtn","className","hideOnClickOutside","show","children"]),g="tm-quark-notification_position_"+r,y="tm-quark-notification_placement_"+o,_="tm-quark-notification_height_"+i,v="tm-quark-notification_width_"+l,k="tm-quark-notification_type_"+u,O=c?"tm-quark-notification_arrow-placement_"+p:"",x="tm-quark-notification_"+(b?"visible":"hidden");return this.state.renderContainer?f.default.createElement("div",s({},w,{className:"tm-quark-notification "+g+" "+y+" "+_+" "+v+" "+k+" "+O+" "+x+" "+m,onAnimationEnd:this.handleAnimationEnd,role:"alert",ref:function(e){t.container=e}}),d&&f.default.createElement("button",{className:"tm-quark-notification__close-btn",type:"button","aria-label":"Close",onClick:a}),f.default.createElement("div",{className:"tm-quark-notification__content"},h)):null}}]),e}(c.Component);m.propTypes={onRequestHide:d.default.func,position:d.default.oneOf(["absolute","fixed","relative"]).isRequired,placement:d.default.oneOf(["bottom","left","top","right","static","document-top","document-right"]).isRequired,height:d.default.oneOf(["auto","fixed-small","fixed-medium"]).isRequired,width:d.default.oneOf(["auto","full"]).isRequired,type:d.default.oneOf(["default","success","warning","error"]).isRequired,show:d.default.bool,className:d.default.string,showArrow:d.default.bool,arrowPlacement:d.default.oneOf(["bottom","left","top","right"]).isRequired,showCloseBtn:d.default.bool,hideOnClickOutside:d.default.bool,children:d.default.node},m.defaultProps={onRequestHide:function(){},show:!1,showArrow:!0,showCloseBtn:!1,hideOnClickOutside:!0,className:"",children:null},e.default=m},9:function(t,e,a){var r=a(10);"string"==typeof r&&(r=[[t.i,r,""]]);var n={};n.transform=void 0,a(4)(r,n),r.locals&&(t.exports=r.locals)}})});