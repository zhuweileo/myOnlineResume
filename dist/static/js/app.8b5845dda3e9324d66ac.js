webpackJsonp([1],[,,,,,,,,,,,function(t,e,s){"use strict";var a=s(6),n=s(80),r=s(67),i=s.n(r);a.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Hello",component:i.a}]})},function(t,e,s){s(60);var a=s(0)(s(13),s(78),null,null);t.exports=a.exports},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(52),n=(s.n(a),s(53)),r=(s.n(n),s(70)),i=s.n(r),o=s(68),c=s.n(o),l=s(65),v=s.n(l),u=s(71),_=s.n(u),f=s(69),d=s.n(f),h=s(66),p=s.n(h);e.default={name:"app",components:{TopBar:i.a,Home:c.a,About:v.a,Work:_.a,ProDiscribe:d.a,Contact:p.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"About",data:function(){return{selected:"profile",items:["profile","skills"]}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Contact",data:function(){return{addme:!1}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Home"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(23),n=s.n(a),r=s(21);e.default={name:"ProDiscribe",data:function(){return{show:"resumer",pros:r.a,timer:0}},created:function(){this.run()},methods:{stop:function(){clearInterval(this.timer)},run:function(){var t=this,e=[],s=0;e=n()(r.a),this.timer=setInterval(function(){t.show=e[s],(s+=1)>=3&&(s=0)},3e3)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"TopBar",data:function(){return{close:!0}}}},function(t,e){},function(t,e,s){"use strict";e.a={resumer:"一个在线简历生成工具。应用主要分为编辑器，预览，登录三部分。编辑器部分提供了常用简历信息分类，每个分类下用户都可根据需求添加自定义数量的信息。编辑器输入框内输入的信息会实时的呈现在预览区。预览区内容做了简单样式处理。用户在编辑完成后点击左上方保存按钮可以将简历信息保存于自己的账号，下次登录后可以直接看到。",tips:"一个可登陆的在线便利贴应用程序。使用者可以利用github账号第三方登陆本应用，登陆后可以建立自己的便利贴。单个便利贴可以进行编辑，鼠标拖动，删除等操作。便利贴过多时可以点击整理按钮，所有便利贴将按瀑布流布局整理。",music:"一个简洁易用的音乐播放器，可以轻松的插入到任意页面中。播放器利用ajax从第三方网络API请求音乐资源。可以实现暂停播放，下一曲，上一曲等功能。播放器可记忆播放过的音乐，无需担心找不到播放过的歌曲。点击音乐Icon，可以隐藏播放器面板，节省网页空间。"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(6),n=s(12),r=s.n(n),i=s(11);a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,s){t.exports=s.p+"static/img/2Dcode.d8ff6e2.png"},function(t,e,s){s(54);var a=s(0)(s(14),s(72),null,null);t.exports=a.exports},function(t,e,s){s(57);var a=s(0)(s(15),s(75),null,null);t.exports=a.exports},function(t,e,s){s(61);var a=s(0)(s(16),s(79),"data-v-d7fa6f36",null);t.exports=a.exports},function(t,e,s){s(56);var a=s(0)(s(17),s(74),null,null);t.exports=a.exports},function(t,e,s){s(59);var a=s(0)(s(18),s(77),null,null);t.exports=a.exports},function(t,e,s){s(55);var a=s(0)(s(19),s(73),null,null);t.exports=a.exports},function(t,e,s){s(58);var a=s(0)(s(20),s(76),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"About"}},[s("div",{staticClass:"holder"},[t._m(0),t._v(" "),s("div",{staticClass:"tabs"},[s("div",{staticClass:"tab"},t._l(t.items,function(e){return s("a",{class:{active:t.selected===e},attrs:{href:""},on:{click:function(s){s.preventDefault(),t.selected=e}}},[t._v(t._s(e))])})),t._v(" "),s("div",{staticClass:"tab-content"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"profile"===t.selected,expression:"selected === 'profile'"}],staticClass:"profile"},[s("p",[t._v("我是"),s("strong",[t._v("朱维")]),t._v("，一位有有灵魂的前端工程师！热爱前端，热爱编程，热爱调试BUG!")]),t._v(" "),s("p",[t._v("有一年的前端开发经验，熟悉html/css/javascript，熟悉W3C标准，熟练使用Jquery等常用库，有一定的"),s("strong",[t._v("Vuejs")]),t._v("使用经验，并且熟练使用webpack等前端工具；\n了解ajax/http/BOM/DOM等前端相关知识；对js"),s("strong",[t._v("模块化")]),t._v("、"),s("strong",[t._v("面向对象编程")]),t._v("有一定理解；对各种前端新技术都充满了学习热情；具备基础的Photoshop使用能力，有一定的审美能力，喜欢思考如何使产品更加符合用户体验。")]),t._v(" "),s("p",[t._v("我是一位性格幽默，做事认真的人。注重前端基本功的同时，对新兴技术有较大的热情，喜欢学习新技术，不单纯将技术作为工作需求，而是个人爱好；拥有认真负责的工作态度，\n积极解决工作中遇到的各种困难；能够独立的解决问题，自我学习能力较强，能够在没有带领的情况下自我进步；较好的问题分析解决能力。")]),t._v(" "),s("p",[t._v("我希望能得到一份"),s("strong",[t._v("前端工程师")]),t._v("的工作。点击下方按钮可以下载我的个人PDF简历。")]),t._v(" "),s("div",{staticClass:"btns"},[s("a",{staticClass:"button",attrs:{href:"/myOnlineResume/src/assets/pdf/朱维简历.pdf",target:"_blank"}},[t._v("Download PDF")]),s("a",{staticClass:"button",attrs:{href:"mailto:zhuwei_leo@163.com"}},[t._v("Hire me")])])])]),t._v(" "),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:"skills"===t.selected,expression:"selected ==='skills'"}],staticClass:"skills"},[s("div",{staticClass:"html"},[s("div",[t._v("html")])]),t._v(" "),s("div",{staticClass:"css"},[s("div",[t._v("css")])]),t._v(" "),s("div",{staticClass:"javascript"},[s("div",[t._v("javascript")])]),t._v(" "),s("div",{staticClass:"jquery"},[s("div",[t._v("jquery")])]),t._v(" "),s("div",{staticClass:"vue"},[s("div",[t._v("vue")])]),t._v(" "),s("div",{staticClass:"webpack"},[s("div",[t._v("webpack")])]),t._v(" "),s("div",{staticClass:"photoshop"},[s("div",[t._v("photoshop")])])])])],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",[t._v("About"),s("br")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{attrs:{id:"TopBar"}},[s("div",{class:{close:t.close}},[t._m(0),t._v(" "),s("div",{staticClass:"nav-bar",on:{click:function(e){t.close=!t.close}}},[s("div",{staticClass:"toggle-bar"})])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",[s("div",{staticClass:"holder"},[s("a",{attrs:{href:"#Home"}},[t._v("HOME")]),t._v(" "),s("a",{attrs:{href:"#About"}},[t._v("ABOUT")]),t._v(" "),s("a",{attrs:{href:"#Work"}},[t._v("WORKS")]),t._v(" "),s("a",{attrs:{href:"#ProDiscribe"}},[t._v("ProDiscribe")]),t._v(" "),s("a",{attrs:{href:"#Contact"}},[t._v("GET IN TOUCH")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"Home"}},[s("div",{staticClass:"content"},[s("h1",{staticClass:"fade-in one"},[t._v("I’m "),s("strong",[t._v("ZHUWEI")])]),t._v(" "),s("p",{staticClass:"fade-in two"},[t._v("Front End Developer."),s("br"),t._v("\n      Take a look at some of my works, and if you like them, feel free to contact me. "),s("br"),t._v("\n      Let’s create something WOW!\n    ")]),t._v(" "),s("a",{staticClass:"button fade-in three",attrs:{href:"#Work"}},[t._v("VIEW MY WORK")])]),t._v(" "),s("div",{staticClass:"scroll-down"},[s("i",{staticClass:"iconfont icon-xiangxia animated infinite bounce"})])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"Contact"}},[a("h2",[t._v("Want to work with me?")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"logos"},[a("div",{staticClass:"wrapper"},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("i",[a("a",{staticClass:"iconfont icon-weichat",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.addme=!0}}})]),t._v(" "),t._m(3)])]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"copyright"},[t._v("© Copyright 2017 朱维 personal portfolio")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.addme,expression:"addme"}],staticClass:"weixin",on:{click:function(e){t.addme=!1}}},[a("img",{attrs:{src:s(64),alt:"扫一扫添加我"},on:{click:function(t){t.stopPropagation()}}})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"methods"},[s("div",{staticClass:"wrapper"},[s("i",{staticClass:"iconfont icon-email"},[s("a",{attrs:{href:"mailto:zhuwei_leo@163.com"}},[t._v("zhuwei_leo@163.com")])]),t._v(" "),s("i",{staticClass:"iconfont icon-phone"},[t._v("18246690670")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",[s("a",{staticClass:"iconfont icon-github",attrs:{href:"https://github.com/zhuweileo",target:"_blank"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",[s("a",{staticClass:"iconfont icon-qq",attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=576998768&site=qq&menu=yes",target:"_blank"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",[s("a",{staticClass:"iconfont icon-jian",attrs:{href:"http://www.jianshu.com/u/8ab9cd297212",target:"_blank"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"btn"},[s("a",{staticClass:"button",attrs:{href:"mailto:zhuwei_leo@163.com"}},[t._v("get in touch")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"Work"}},[s("h2",[t._v("Works")]),t._v(" "),s("div",{staticClass:"holder"},[s("div",{staticClass:"pro"},[s("a",{attrs:{href:"https://zhuweileo.github.io/resume/dist",target:"_blank"}},[s("div",{staticClass:"bg resumer"}),t._v(" "),s("div",{staticClass:"discribe"},[s("h3",[t._v("Resumer")]),t._v(" "),s("p",[t._v("在线简历生成器")])])])]),t._v(" "),s("div",{staticClass:"pro"},[s("a",{attrs:{href:"http://zhuweileo.top",target:"_blank"}},[s("div",{staticClass:"bg tips"}),t._v(" "),s("div",{staticClass:"discribe"},[s("h3",[t._v("Tips")]),t._v(" "),s("p",[t._v("便利贴应用")])])])]),t._v(" "),s("div",{staticClass:"pro"},[s("a",{attrs:{href:"http://zhuweileo.coding.me/music/",target:"_blank"}},[s("div",{staticClass:"bg music"}),t._v(" "),s("div",{staticClass:"discribe"},[s("h3",[t._v("Music")]),t._v(" "),s("p",[t._v("在线音乐播放器")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"ProDiscribe"}},[s("div",{staticClass:"holder"},[t._l(t.pros,function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.show===a,expression:"show===pro"}],staticClass:"discribe"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show===a,expression:"show===pro"}]},[s("h2",[t._v(t._s(a))]),t._v(" "),s("p",{on:{mouseover:t.stop,mouseout:t.run}},[t._v(t._s(e))])])])],1)}),t._v(" "),s("ul",{staticClass:"tab"},t._l(t.pros,function(e,a){return s("li",{class:{active:t.show===a},on:{click:function(e){t.show=a}}})}))],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("TopBar"),t._v(" "),s("Home"),t._v(" "),s("About"),t._v(" "),s("work"),t._v(" "),s("ProDiscribe"),t._v(" "),s("Contact")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}}],[22]);
//# sourceMappingURL=app.8b5845dda3e9324d66ac.js.map