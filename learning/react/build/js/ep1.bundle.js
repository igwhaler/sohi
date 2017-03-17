webpackJsonp([0],[/* 0 */
,/* 1 */
,/* 2 */
,/* 3 */
/***/
function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(7),(0,a(n(1)).default)("body").css({backgroundColor:"tan"})},/* 4 */
/***/
function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var l=n(0),u=a(l),i=n(2),d=a(i),r=n(1),o=a(r),s=u.default.createClass({displayName:"ComponentItem",getInitialState:function(){return{like:!0}},componentWillMount:function(){},componentDidMount:function(){},componentWillUpdate:function(e,t){},componentDidUpdate:function(e,t){},render:function(){var e=[this.props,this.state],t=e[0],n=e[1];return u.default.createElement("div",{className:"box1",onClick:this.handleClick},"你好,",t.question," ",u.default.createElement("span",null,"我",n.like?"是":"不是",t.name,"!")," ")},handleClick:function(){var e=[this.props,this.state],t=e[0],n=e[1];this.setState({like:!n.like}),t.handles(t.name)}}),c=["asd","fgh","jkl"],f=u.default.createClass({displayName:"ComponentArr",propTypes:{title:u.default.PropTypes.string.isRequired},getDefaultProps:function(){return{age:24}},getInitialState:function(){return{data:null,loading:!0}},componentDidMount:function(){var e=this;o.default.ajax({url:"//licaishi.sina.com.cn/admin2/api/leftMenu",type:"get",dataType:"jsonp",data:{}}).done(function(t){t&&0===t.code?e.setState({data:t,loading:!1}):e.setState({data:t,loading:!1})}).fail(function(){e.setState({data:null,loading:!1})})},render:function(){var e=this,t=[this.props,this.state],n=t[0],a=t[1];return u.default.createElement("div",{onClick:this.handleClick},c.map(function(t){return u.default.createElement(s,{question:n.question,name:t,handles:e.inputFocus})}),u.default.createElement("input",{type:"text",ref:"myTextInput"}),u.default.createElement(p,{data:a.data,loading:a.loading}))},inputFocus:function(e){this.refs.myTextInput.value=e,this.refs.myTextInput.focus()}}),p=u.default.createClass({displayName:"ComponentTest",render:function(){var e=this.props,t=e.data;return u.default.createElement("div",null,e.loading?u.default.createElement("h2",null,u.default.createElement(m,null)):u.default.createElement("h2",null,t&&0===t.code?u.default.createElement(h,{data:t}):u.default.createElement(g,null)))}}),m=u.default.createClass({displayName:"Loadinng",render:function(){return u.default.createElement("div",null,"loading")}}),h=u.default.createClass({displayName:"LoadSuccess",render:function(){var e=this.props,t=e.data;return u.default.createElement("div",null,t.msg)}}),g=u.default.createClass({displayName:"LoadFail",render:function(){return u.default.createElement("div",null,"加载失败")}});d.default.render(u.default.createElement("div",{className:"container"},u.default.createElement(f,{question:"我是谁？",title:123})),document.body)},/* 5 */
,/* 6 */
,/* 7 */
/***/
function(e,t){},/* 8 */
,/* 9 */
,/* 10 */
/***/
function(e,t,n){n(3),e.exports=n(4)}],[10]);