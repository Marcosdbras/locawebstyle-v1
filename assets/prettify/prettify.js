!function(){var e=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var r=e.charAt(1);return(t=m[r])?t:r>="0"&&"7">=r?parseInt(e.substring(1),8):"u"===r||"x"===r?parseInt(e.substring(2),16):e.charCodeAt(1)}function r(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function a(e){var a=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],n="^"===a[0],i=["["];n&&i.push("^");for(var n=n?1:0,s=a.length;s>n;++n){var o=a[n];if(/\\[bdsw]/i.test(o))i.push(o);else{var l,o=t(o);s>n+2&&"-"===a[n+1]?(l=t(a[n+2]),n+=2):l=o,e.push([o,l]),65>l||o>122||(65>l||o>90||e.push([32|Math.max(65,o),32|Math.min(l,90)]),97>l||o>122||e.push([-33&Math.max(97,o),-33&Math.min(l,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),a=[],s=[],n=0;n<e.length;++n)o=e[n],o[0]<=s[1]+1?s[1]=Math.max(s[1],o[1]):a.push(s=o);for(n=0;n<a.length;++n)o=a[n],i.push(r(o[0])),o[1]>o[0]&&(o[1]+1>o[0]&&i.push("-"),i.push(r(o[1])));return i.push("]"),i.join("")}function n(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),n=t.length,o=[],l=0,c=0;n>l;++l){var d=t[l];"("===d?++c:"\\"===d.charAt(0)&&(d=+d.substring(1))&&(c>=d?o[d]=-1:t[l]=r(d))}for(l=1;l<o.length;++l)-1===o[l]&&(o[l]=++i);for(c=l=0;n>l;++l)d=t[l],"("===d?(++c,o[c]||(t[l]="(?:")):"\\"===d.charAt(0)&&(d=+d.substring(1))&&c>=d&&(t[l]="\\"+o[d]);for(l=0;n>l;++l)"^"===t[l]&&"^"!==t[l+1]&&(t[l]="");if(e.ignoreCase&&s)for(l=0;n>l;++l)d=t[l],e=d.charAt(0),d.length>=2&&"["===e?t[l]=a(d):"\\"!==e&&(t[l]=d.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var i=0,s=!1,o=!1,l=0,c=e.length;c>l;++l){var d=e[l];if(d.ignoreCase)o=!0;else if(/[a-z]/i.test(d.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){s=!0,o=!1;break}}for(var m={b:8,t:9,n:10,v:11,f:12,r:13},p=[],l=0,c=e.length;c>l;++l){if(d=e[l],d.global||d.multiline)throw Error(""+d);p.push("(?:"+n(d)+")")}return RegExp(p.join("|"),o?"gi":"g")}function r(e,t){function r(e){var l=e.nodeType;if(1==l){if(!a.test(e.className)){for(l=e.firstChild;l;l=l.nextSibling)r(l);l=e.nodeName.toLowerCase(),("br"===l||"li"===l)&&(n[o]="\n",s[o<<1]=i++,s[o++<<1|1]=e)}}else(3==l||4==l)&&(l=e.nodeValue,l.length&&(l=t?l.replace(/\r\n?/g,"\n"):l.replace(/[\t\n\r ]+/g," "),n[o]=l,s[o<<1]=i,i+=l.length,s[o++<<1|1]=e))}var a=/(?:^|\s)nocode(?:\s|$)/,n=[],i=0,s=[],o=0;return r(e),{a:n.join("").replace(/\n$/,""),d:s}}function a(e,t,r,a){t&&(e={a:t,e:e},r(e),a.push.apply(a,e.g))}function n(e){for(var t=void 0,r=e.firstChild;r;r=r.nextSibling)var a=r.nodeType,t=1===a?t?e:r:3===a&&w.test(r.nodeValue)?e:t;return t===e?void 0:t}function i(r,n){function i(e){for(var t=e.e,r=[t,"pln"],d=0,m=e.a.match(s)||[],p={},u=0,f=m.length;f>u;++u){var g,h=m[u],b=p[h],x=void 0;if("string"==typeof b)g=!1;else{var y=o[h.charAt(0)];if(y)x=h.match(y[1]),b=y[0];else{for(g=0;l>g;++g)if(y=n[g],x=h.match(y[1])){b=y[0];break}x||(b="pln")}!(g=b.length>=5&&"lang-"===b.substring(0,5))||x&&"string"==typeof x[1]||(g=!1,b="src"),g||(p[h]=b)}if(y=d,d+=h.length,g){g=x[1];var v=h.indexOf(g),w=v+g.length;x[2]&&(w=h.length-x[2].length,v=w-g.length),b=b.substring(5),a(t+y,h.substring(0,v),i,r),a(t+y+v,g,c(b,g),r),a(t+y+w,h.substring(w),i,r)}else r.push(t+y,b)}e.g=r}var s,o={};!function(){for(var a=r.concat(n),i=[],l={},c=0,d=a.length;d>c;++c){var m=a[c],p=m[3];if(p)for(var u=p.length;--u>=0;)o[p.charAt(u)]=m;m=m[1],p=""+m,l.hasOwnProperty(p)||(i.push(m),l[p]=e)}i.push(/[\S\s]/),s=t(i)}();var l=n.length;return i}function s(t){var r=[],a=[];r.push(t.tripleQuotedStrings?["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]:t.multiLineStrings?["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]:["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&a.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var n=t.hashComments;if(n&&(t.cStyleComments?(r.push(n>1?["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]:["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),a.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):r.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(a.push(["com",/^\/\/[^\n\r]*/,e]),a.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),n=t.regexLiterals){var s=(n=n>1?"":"\n\r")?".":"[\\S\\s]";a.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+n+"])(?:[^/\\x5B\\x5C"+n+"]|\\x5C"+s+"|\\x5B(?:[^\\x5C\\x5D"+n+"]|\\x5C"+s+")*(?:\\x5D|$))+/")+")")])}return(n=t.types)&&a.push(["typ",n]),n=(""+t.keywords).replace(/^ | $/g,""),n.length&&a.push(["kwd",RegExp("^(?:"+n.replace(/[\s,]+/g,"|")+")\\b"),e]),r.push(["pln",/^\s+/,e," \r\n	\xa0"]),n="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(n+="(?!s*/)"),a.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(n),e]),i(r,a)}function o(e,t,r){function a(e){var t=e.nodeType;if(1!=t||i.test(e.className)){if((3==t||4==t)&&r){var l=e.nodeValue,c=l.match(s);c&&(t=l.substring(0,c.index),e.nodeValue=t,(l=l.substring(c.index+c[0].length))&&e.parentNode.insertBefore(o.createTextNode(l),e.nextSibling),n(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)n(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)a(e)}function n(e){function t(e,r){var a=r?e.cloneNode(!1):e,n=e.parentNode;if(n){var n=t(n,1),i=e.nextSibling;n.appendChild(a);for(var s=i;s;s=i)i=s.nextSibling,n.appendChild(s)}return a}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var r,e=t(e.nextSibling,0);(r=e.parentNode)&&1===r.nodeType;)e=r;c.push(e)}for(var i=/(?:^|\s)nocode(?:\s|$)/,s=/\r\n?|\n/,o=e.ownerDocument,l=o.createElement("li");e.firstChild;)l.appendChild(e.firstChild);for(var c=[l],d=0;d<c.length;++d)a(c[d]);t===(0|t)&&c[0].setAttribute("value",t);var m=o.createElement("ol");m.className="linenums";for(var t=Math.max(0,t-1|0)||0,d=0,p=c.length;p>d;++d)l=c[d],l.className="L"+(d+t)%10,l.firstChild||l.appendChild(o.createTextNode("\xa0")),m.appendChild(l);e.appendChild(m)}function l(e,t){for(var r=t.length;--r>=0;){var a=t[r];q.hasOwnProperty(a)?m.console&&console.warn("cannot override language handler %s",a):q[a]=e}}function c(e,t){return e&&q.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),q[e]}function d(e){var t=e.h;try{var a=r(e.c,e.i),n=a.a;e.a=n,e.d=a.d,e.e=0,c(t,n)(e);var i=/\bMSIE\s(\d+)/.exec(navigator.userAgent),i=i&&+i[1]<=8,t=/\n/g,s=e.a,o=s.length,a=0,l=e.d,d=l.length,n=0,p=e.g,u=p.length,f=0;p[u]=o;var g,h;for(h=g=0;u>h;)p[h]!==p[h+2]?(p[g++]=p[h++],p[g++]=p[h++]):h+=2;for(u=g,h=g=0;u>h;){for(var b=p[h],x=p[h+1],y=h+2;u>=y+2&&p[y+1]===x;)y+=2;p[g++]=b,p[g++]=x,h=y}p.length=g;var v,w=e.c;w&&(v=w.style.display,w.style.display="none");try{for(;d>n;){var k,q=l[n+2]||o,S=p[f+2]||o,y=Math.min(q,S),R=l[n+1];if(1!==R.nodeType&&(k=s.substring(a,y))){i&&(k=k.replace(t,"\r")),R.nodeValue=k;var N=R.ownerDocument,z=N.createElement("span");z.className=p[f+1];var A=R.parentNode;A.replaceChild(z,R),z.appendChild(R),q>a&&(l[n+1]=R=N.createTextNode(s.substring(y,q)),A.insertBefore(R,z.nextSibling))}a=y,a>=q&&(n+=2),a>=S&&(f+=2)}}finally{w&&(w.style.display=v)}}catch(P){m.console&&console.log(P&&P.stack||P)}}var m=window,p=["break,continue,do,else,for,if,return,while"],u=[[p,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],f=[u,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],g=[u,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],h=[g,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],u=[u,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],b=[p,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],x=[p,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],y=[p,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],p=[p,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],v=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,w=/\S/,k=s({keywords:[f,h,u,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",b,x,p],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),q={};l(k,["default-code"]),l(i([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),l(i([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),l(i([],[["atv",/^[\S\s]+/]]),["uq.val"]),l(s({keywords:f,hashComments:!0,cStyleComments:!0,types:v}),["c","cc","cpp","cxx","cyc","m"]),l(s({keywords:"null,true,false"}),["json"]),l(s({keywords:h,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:v}),["cs"]),l(s({keywords:g,cStyleComments:!0}),["java"]),l(s({keywords:p,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),l(s({keywords:b,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),l(s({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),l(s({keywords:x,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),l(s({keywords:u,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),l(s({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),l(s({keywords:y,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),l(i([],[["str",/^[\S\s]+/]]),["regex"]);var S=m.PR={createSimpleLexer:i,registerLangHandler:l,sourceDecorator:s,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:m.prettyPrintOne=function(e,t,r){var a=document.createElement("div");return a.innerHTML="<pre>"+e+"</pre>",a=a.firstChild,r&&o(a,r,!0),d({h:t,j:r,c:a,i:1}),a.innerHTML},prettyPrint:m.prettyPrint=function(t,r){function a(){for(var r=m.PR_SHOULD_USE_CONTINUATION?f.now()+250:1/0;h<l.length&&f.now()<r;h++){for(var i=l[h],c=q,p=i;p=p.previousSibling;){var u=p.nodeType,S=(7===u||8===u)&&p.nodeValue;if(S?!/^\??prettify\b/.test(S):3!==u||/\S/.test(p.nodeValue))break;if(S){c={},S.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,r){c[t]=r});break}}if(p=i.className,(c!==q||x.test(p))&&!y.test(p)){for(u=!1,S=i.parentNode;S;S=S.parentNode)if(k.test(S.tagName)&&S.className&&x.test(S.className)){u=!0;break}if(!u){if(i.className+=" prettyprinted",u=c.lang,!u){var R,u=p.match(b);!u&&(R=n(i))&&w.test(R.tagName)&&(u=R.className.match(b)),u&&(u=u[1])}if(v.test(i.tagName))S=1;else var S=i.currentStyle,N=s.defaultView,S=(S=S?S.whiteSpace:N&&N.getComputedStyle?N.getComputedStyle(i,e).getPropertyValue("white-space"):0)&&"pre"===S.substring(0,3);N=c.linenums,(N="true"===N||+N)||(N=(N=p.match(/\blinenums\b(?::(\d+))?/))?N[1]&&N[1].length?+N[1]:!0:!1),N&&o(i,N,S),g={h:u,c:i,j:N,i:S},d(g)}}}h<l.length?setTimeout(a,250):"function"==typeof t&&t()}for(var i=r||document.body,s=i.ownerDocument||document,i=[i.getElementsByTagName("pre"),i.getElementsByTagName("code"),i.getElementsByTagName("xmp")],l=[],c=0;c<i.length;++c)for(var p=0,u=i[c].length;u>p;++p)l.push(i[c][p]);var i=e,f=Date;f.now||(f={now:function(){return+new Date}});var g,h=0,b=/\blang(?:uage)?-([\w.]+)(?!\S)/,x=/\bprettyprint\b/,y=/\bprettyprinted\b/,v=/pre|xmp/i,w=/^code$/i,k=/^(?:pre|code|xmp)$/i,q={};a()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return S})}()}();