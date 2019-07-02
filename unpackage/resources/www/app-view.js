var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20181221_syb_scopedata*/window.__wcc_version__='v0.5vv_20181221_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'x-else-user'])
Z([[2,'==='],[[7],[3,'size']],[1,'large']])
Z([3,'大实例未实现'])
Z([[2,'==='],[[7],[3,'size']],[1,'small']])
Z([3,'小实例未实现'])
Z([[2,'==='],[[7],[3,'size']],[1,'default']])
Z([3,'none'])
Z([[7],[3,'url']])
Z([3,'aspectFit'])
Z([3,'/static/user.png'])
Z([3,'x-else-user-class'])
Z(z[7])
Z(z[8])
Z([3,'x-else-user-text'])
Z([3,'小敏子'])
Z([3,'x-else-user-font'])
Z([3,'12 天前'])
Z([3,'x-else-user-tabs'])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[7],[3,'distribution']])
Z([3,'x-card-solid'])
Z([3,'x-card'])
Z(z[1])
Z([3,'x-if-card'])
Z([3,'x-card-header'])
Z([3,'title'])
Z([3,'none'])
Z([[7],[3,'url']])
Z([3,'汉服运动X周年庆典 汉服运动'])
Z([3,'user'])
Z(z[8])
Z(z[9])
Z([3,'aspectFit'])
Z([3,'../../static/user.png'])
Z([3,'小敏子'])
Z([3,'tips'])
Z([3,'tip'])
Z(z[8])
Z(z[9])
Z(z[14])
Z([3,'../../static/eye.png'])
Z([3,'10109'])
Z([3,'time'])
Z([3,'1小时前'])
Z([3,'x-card-image'])
Z(z[8])
Z(z[9])
Z(z[14])
Z([3,'../../static/card.png'])
Z([3,'x-else-card-image'])
Z(z[8])
Z(z[9])
Z(z[14])
Z(z[30])
Z([3,'x-else-card-header'])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[17])
Z(z[18])
Z(z[8])
Z(z[9])
Z(z[14])
Z(z[22])
Z(z[23])
Z(z[24])
Z(z[25])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'a'])
Z([3,'header'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[4],[[5],[[5],[1,'header']],[[2,'?:'],[[7],[3,'backdrop']],[1,'white'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'styles']]],[1,';']])
Z([[2,'==='],[[7],[3,'mode']],[1,'default']])
Z([3,'tabs'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'tabChange']]]]]]]]])
Z([3,'text-xl'])
Z([[7],[3,'tabList']])
Z([[7],[3,'TabCur']])
Z([[2,'==='],[[7],[3,'mode']],[1,'leftback']])
Z([3,'300'])
Z([3,'pop-out'])
Z([3,'none'])
Z([3,'navigateBack'])
Z([3,'left-image'])
Z([3,'widthFix'])
Z([[2,'+'],[1,'/static/'],[[7],[3,'fontcolor']]])
Z([[2,'==='],[[7],[3,'mode']],[1,'rightback']])
Z([3,'还没有被定义'])
Z([3,'search'])
Z([3,'icon search'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[4],[[5],[[5],[1,'status']],[[2,'?:'],[[7],[3,'backdrop']],[1,'white'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'position:'],[[7],[3,'headerPosition']]],[1,';']],[[2,'+'],[[2,'+'],[1,'top:'],[[7],[3,'statusTop']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'opacity:'],[[7],[3,'afterHeaderOpacity']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'styles']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'x-tag'])
Z([a,[[7],[3,'title']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([[4],[[5],[[5],[1,'wuc-tab']],[[7],[3,'tabClass']]]])
Z([[7],[3,'scrollLeft']])
Z([[7],[3,'tabStyle']])
Z([[2,'!'],[[7],[3,'textFlex']]])
Z([3,'_div'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabList']])
Z(z[6])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'wuc-tab-item _div']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'tabCur']]],[[2,'+'],[[7],[3,'selectClass']],[1,' cur']],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'tabSelect']],[[4],[[5],[[5],[[7],[3,'index']]],[1,'$event']]]]]]]]]]])
Z([[7],[3,'index']])
Z([[4],[[5],[[6],[[7],[3,'item']],[3,'icon']]]])
Z([3,'_span'])
Z([a,[[6],[[7],[3,'item']],[3,'name']]])
Z([[7],[3,'textFlex']])
Z([3,'flex text-center _div'])
Z(z[6])
Z(z[7])
Z(z[8])
Z(z[6])
Z(z[10])
Z([[4],[[5],[[5],[1,'wuc-tab-item flex-sub _div']],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[[7],[3,'tabCur']]],[[2,'+'],[[7],[3,'selectClass']],[1,' cur']],[1,'']]]])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z([a,z[16][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,false])
Z([[7],[3,'bgs']])
Z(z[1])
Z([[7],[3,'fontcolor']])
Z([3,'leftback'])
Z(z[2])
Z([3,'details-header'])
Z([3,'../../static/card.png'])
Z([3,'details-content'])
Z([3,'header'])
Z([3,'avatar'])
Z([3,'关注'])
Z([3,'title'])
Z([3,'标题标题标题标题标题标题标题'])
Z([3,'subtitle'])
Z(z[14])
Z([3,'details-bottom'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'content'])
Z([1,false])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'asd'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'aaa'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'_div'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/avatar/index.wxml','./components/card/index.wxml','./components/index.wxml','./components/navbar/index.wxml','./components/status/index.wxml','./components/tag/index.wxml','./components/wuc-tab/wuc-tab.wxml','./pages/Article/index.wxml','./pages/index/index.wxml','./pages/tabBar/Popup.wxml','./pages/tabBar/index.wxml','./pages/tabBar/literature.wxml','./pages/tabBar/periphery.wxml','./pages/tabBar/user.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
cs.push("./components/avatar/index.wxml:view:1:1")
var oB=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
cs.push("./components/avatar/index.wxml:block:1:42")
cs.push("./components/avatar/index.wxml:view:1:76")
var oD=_n('view')
var fE=_oz(z,3,e,s,gg)
_(oD,fE)
cs.pop()
_(xC,oD)
cs.pop()
}
else{xC.wxVkey=2
cs.push("./components/avatar/index.wxml:block:1:115")
var cF=_v()
_(xC,cF)
if(_oz(z,4,e,s,gg)){cF.wxVkey=1
cs.push("./components/avatar/index.wxml:block:1:130")
cs.push("./components/avatar/index.wxml:view:1:164")
var hG=_n('view')
var oH=_oz(z,5,e,s,gg)
_(hG,oH)
cs.pop()
_(cF,hG)
cs.pop()
}
else{cF.wxVkey=2
cs.push("./components/avatar/index.wxml:block:1:203")
var cI=_v()
_(cF,cI)
if(_oz(z,6,e,s,gg)){cI.wxVkey=1
cs.push("./components/avatar/index.wxml:block:1:218")
cs.push("./components/avatar/index.wxml:view:1:254")
var oJ=_n('view')
cs.push("./components/avatar/index.wxml:navigator:1:260")
var lK=_mz(z,'navigator',['hoverClass',7,'url',1],[],e,s,gg)
cs.push("./components/avatar/index.wxml:image:1:304")
var aL=_mz(z,'image',['mode',9,'src',1],[],e,s,gg)
cs.pop()
_(lK,aL)
cs.pop()
_(oJ,lK)
cs.push("./components/avatar/index.wxml:view:1:371")
var tM=_n('view')
_rz(z,tM,'class',11,e,s,gg)
cs.push("./components/avatar/index.wxml:navigator:1:403")
var eN=_mz(z,'navigator',['hoverClass',12,'url',1],[],e,s,gg)
cs.push("./components/avatar/index.wxml:view:1:447")
var bO=_n('view')
_rz(z,bO,'class',14,e,s,gg)
cs.push("./components/avatar/index.wxml:text:1:478")
var oP=_n('text')
var xQ=_oz(z,15,e,s,gg)
_(oP,xQ)
cs.pop()
_(bO,oP)
cs.pop()
_(eN,bO)
cs.pop()
_(tM,eN)
cs.push("./components/avatar/index.wxml:view:1:519")
var oR=_n('view')
_rz(z,oR,'class',16,e,s,gg)
cs.push("./components/avatar/index.wxml:text:1:550")
var fS=_n('text')
var cT=_oz(z,17,e,s,gg)
_(fS,cT)
cs.pop()
_(oR,fS)
cs.pop()
_(tM,oR)
cs.pop()
_(oJ,tM)
cs.push("./components/avatar/index.wxml:view:1:586")
var hU=_n('view')
_rz(z,hU,'class',18,e,s,gg)
cs.push("./components/avatar/index.wxml:x-tag:1:617")
var oV=_n('x-tag')
_rz(z,oV,'title',19,e,s,gg)
cs.pop()
_(hU,oV)
cs.pop()
_(oJ,hU)
cs.pop()
_(cI,oJ)
cs.pop()
}
cI.wxXCkey=1
cI.wxXCkey=3
cs.pop()
}
cF.wxXCkey=1
cF.wxXCkey=3
cs.pop()
}
xC.wxXCkey=1
xC.wxXCkey=3
cs.pop()
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
cs.push("./components/card/index.wxml:view:1:1")
var oX=_n('view')
_rz(z,oX,'bind:__l',0,e,s,gg)
var lY=_v()
_(oX,lY)
if(_oz(z,1,e,s,gg)){lY.wxVkey=1
cs.push("./components/card/index.wxml:block:1:22")
cs.push("./components/card/index.wxml:view:1:54")
var t1=_n('view')
_rz(z,t1,'class',2,e,s,gg)
cs.pop()
_(lY,t1)
cs.pop()
}
cs.push("./components/card/index.wxml:view:1:96")
var e2=_n('view')
_rz(z,e2,'class',3,e,s,gg)
var b3=_v()
_(e2,b3)
if(_oz(z,4,e,s,gg)){b3.wxVkey=1
cs.push("./components/card/index.wxml:block:1:117")
cs.push("./components/card/index.wxml:view:1:149")
var o4=_n('view')
_rz(z,o4,'class',5,e,s,gg)
cs.push("./components/card/index.wxml:view:1:173")
var x5=_n('view')
_rz(z,x5,'class',6,e,s,gg)
cs.push("./components/card/index.wxml:view:1:201")
var o6=_n('view')
_rz(z,o6,'class',7,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:221")
var f7=_mz(z,'navigator',['hoverClass',8,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:text:1:265")
var c8=_n('text')
var h9=_oz(z,10,e,s,gg)
_(c8,h9)
cs.pop()
_(f7,c8)
cs.pop()
_(o6,f7)
cs.pop()
_(x5,o6)
cs.push("./components/card/index.wxml:view:1:335")
var o0=_n('view')
_rz(z,o0,'class',11,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:354")
var cAB=_mz(z,'navigator',['hoverClass',12,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:image:1:398")
var oBB=_mz(z,'image',['mode',14,'src',1],[],e,s,gg)
cs.pop()
_(cAB,oBB)
cs.push("./components/card/index.wxml:text:1:458")
var lCB=_n('text')
var aDB=_oz(z,16,e,s,gg)
_(lCB,aDB)
cs.pop()
_(cAB,lCB)
cs.pop()
_(o0,cAB)
cs.pop()
_(x5,o0)
cs.push("./components/card/index.wxml:view:1:499")
var tEB=_n('view')
_rz(z,tEB,'class',17,e,s,gg)
cs.push("./components/card/index.wxml:view:1:518")
var eFB=_n('view')
_rz(z,eFB,'class',18,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:536")
var bGB=_mz(z,'navigator',['hoverClass',19,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:image:1:580")
var oHB=_mz(z,'image',['mode',21,'src',1],[],e,s,gg)
cs.pop()
_(bGB,oHB)
cs.push("./components/card/index.wxml:text:1:639")
var xIB=_n('text')
var oJB=_oz(z,23,e,s,gg)
_(xIB,oJB)
cs.pop()
_(bGB,xIB)
cs.pop()
_(eFB,bGB)
cs.pop()
_(tEB,eFB)
cs.push("./components/card/index.wxml:view:1:676")
var fKB=_n('view')
_rz(z,fKB,'class',24,e,s,gg)
cs.push("./components/card/index.wxml:text:1:695")
var cLB=_n('text')
var hMB=_oz(z,25,e,s,gg)
_(cLB,hMB)
cs.pop()
_(fKB,cLB)
cs.pop()
_(tEB,fKB)
cs.pop()
_(x5,tEB)
cs.pop()
_(o4,x5)
cs.push("./components/card/index.wxml:view:1:739")
var oNB=_n('view')
_rz(z,oNB,'class',26,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:766")
var cOB=_mz(z,'navigator',['hoverClass',27,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:image:1:810")
var oPB=_mz(z,'image',['mode',29,'src',1],[],e,s,gg)
cs.pop()
_(cOB,oPB)
cs.pop()
_(oNB,cOB)
cs.pop()
_(o4,oNB)
cs.pop()
_(b3,o4)
cs.pop()
}
else{b3.wxVkey=2
cs.push("./components/card/index.wxml:block:1:904")
cs.push("./components/card/index.wxml:view:1:919")
var lQB=_n('view')
cs.push("./components/card/index.wxml:view:1:925")
var aRB=_n('view')
cs.push("./components/card/index.wxml:x-avatar:1:931")
var tSB=_n('x-avatar')
cs.pop()
_(aRB,tSB)
cs.pop()
_(lQB,aRB)
cs.push("./components/card/index.wxml:view:1:959")
var eTB=_n('view')
_rz(z,eTB,'class',31,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:991")
var bUB=_mz(z,'navigator',['hoverClass',32,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:image:1:1035")
var oVB=_mz(z,'image',['mode',34,'src',1],[],e,s,gg)
cs.pop()
_(bUB,oVB)
cs.pop()
_(eTB,bUB)
cs.pop()
_(lQB,eTB)
cs.push("./components/card/index.wxml:view:1:1114")
var xWB=_n('view')
_rz(z,xWB,'class',36,e,s,gg)
cs.push("./components/card/index.wxml:view:1:1147")
var oXB=_n('view')
_rz(z,oXB,'class',37,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:1167")
var fYB=_mz(z,'navigator',['hoverClass',38,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:text:1:1211")
var cZB=_n('text')
var h1B=_oz(z,40,e,s,gg)
_(cZB,h1B)
cs.pop()
_(fYB,cZB)
cs.pop()
_(oXB,fYB)
cs.pop()
_(xWB,oXB)
cs.push("./components/card/index.wxml:view:1:1281")
var o2B=_n('view')
_rz(z,o2B,'class',41,e,s,gg)
cs.push("./components/card/index.wxml:view:1:1300")
var c3B=_n('view')
_rz(z,c3B,'class',42,e,s,gg)
cs.push("./components/card/index.wxml:navigator:1:1318")
var o4B=_mz(z,'navigator',['hoverClass',43,'url',1],[],e,s,gg)
cs.push("./components/card/index.wxml:image:1:1362")
var l5B=_mz(z,'image',['mode',45,'src',1],[],e,s,gg)
cs.pop()
_(o4B,l5B)
cs.push("./components/card/index.wxml:text:1:1421")
var a6B=_n('text')
var t7B=_oz(z,47,e,s,gg)
_(a6B,t7B)
cs.pop()
_(o4B,a6B)
cs.pop()
_(c3B,o4B)
cs.pop()
_(o2B,c3B)
cs.push("./components/card/index.wxml:view:1:1458")
var e8B=_n('view')
_rz(z,e8B,'class',48,e,s,gg)
cs.push("./components/card/index.wxml:text:1:1477")
var b9B=_n('text')
var o0B=_oz(z,49,e,s,gg)
_(b9B,o0B)
cs.pop()
_(e8B,b9B)
cs.pop()
_(o2B,e8B)
cs.pop()
_(xWB,o2B)
cs.pop()
_(lQB,xWB)
cs.pop()
_(b3,lQB)
cs.pop()
}
b3.wxXCkey=1
b3.wxXCkey=3
cs.pop()
_(oX,e2)
var aZ=_v()
_(oX,aZ)
if(_oz(z,50,e,s,gg)){aZ.wxVkey=1
cs.push("./components/card/index.wxml:block:1:1543")
cs.push("./components/card/index.wxml:view:1:1575")
var xAC=_n('view')
_rz(z,xAC,'class',51,e,s,gg)
cs.pop()
_(aZ,xAC)
cs.pop()
}
lY.wxXCkey=1
aZ.wxXCkey=1
cs.pop()
_(r,oX)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
cs.push("./components/index.wxml:view:1:1")
var fCC=_n('view')
_rz(z,fCC,'bind:__l',0,e,s,gg)
cs.push("./components/index.wxml:text:1:22")
var cDC=_n('text')
_rz(z,cDC,'class',1,e,s,gg)
var hEC=_oz(z,2,e,s,gg)
_(cDC,hEC)
cs.pop()
_(fCC,cDC)
cs.pop()
_(r,fCC)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
cs.push("./components/navbar/index.wxml:view:1:1")
var cGC=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
if(_oz(z,3,e,s,gg)){oHC.wxVkey=1
cs.push("./components/navbar/index.wxml:block:1:112")
cs.push("./components/navbar/index.wxml:view:1:148")
var lIC=_n('view')
_rz(z,lIC,'class',4,e,s,gg)
cs.push("./components/navbar/index.wxml:wuc-tab:1:167")
var aJC=_mz(z,'wuc-tab',['bind:change',5,'data-event-opts',1,'selectClass',2,'tabList',3,'tabCur',4],[],e,s,gg)
cs.pop()
_(lIC,aJC)
cs.pop()
_(oHC,lIC)
cs.pop()
}
else{oHC.wxVkey=2
cs.push("./components/navbar/index.wxml:block:1:337")
var tKC=_v()
_(oHC,tKC)
if(_oz(z,10,e,s,gg)){tKC.wxVkey=1
cs.push("./components/navbar/index.wxml:block:1:352")
cs.push("./components/navbar/index.wxml:view:1:389")
var eLC=_n('view')
cs.push("./components/navbar/index.wxml:navigator:1:395")
var bMC=_mz(z,'navigator',['animationDuration',11,'animationType',1,'hoverClass',2,'openType',3],[],e,s,gg)
cs.push("./components/navbar/index.wxml:view:1:500")
var oNC=_n('view')
_rz(z,oNC,'class',15,e,s,gg)
cs.push("./components/navbar/index.wxml:image:1:525")
var xOC=_mz(z,'image',['mode',16,'src',1],[],e,s,gg)
cs.pop()
_(oNC,xOC)
cs.pop()
_(bMC,oNC)
cs.pop()
_(eLC,bMC)
cs.pop()
_(tKC,eLC)
cs.pop()
}
else{tKC.wxVkey=2
cs.push("./components/navbar/index.wxml:block:1:621")
var oPC=_v()
_(tKC,oPC)
if(_oz(z,18,e,s,gg)){oPC.wxVkey=1
cs.push("./components/navbar/index.wxml:block:1:636")
cs.push("./components/navbar/index.wxml:view:1:674")
var fQC=_n('view')
var cRC=_oz(z,19,e,s,gg)
_(fQC,cRC)
cs.pop()
_(oPC,fQC)
cs.pop()
}
oPC.wxXCkey=1
cs.pop()
}
tKC.wxXCkey=1
cs.pop()
}
cs.push("./components/navbar/index.wxml:view:1:729")
var hSC=_n('view')
_rz(z,hSC,'class',20,e,s,gg)
cs.push("./components/navbar/index.wxml:view:1:750")
var oTC=_n('view')
_rz(z,oTC,'class',21,e,s,gg)
cs.pop()
_(hSC,oTC)
cs.pop()
_(cGC,hSC)
oHC.wxXCkey=1
oHC.wxXCkey=3
cs.pop()
_(r,cGC)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
cs.push("./components/status/index.wxml:view:1:1")
var oVC=_mz(z,'view',['bind:__l',0,'class',1,'style',1],[],e,s,gg)
cs.pop()
_(r,oVC)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
cs.push("./components/tag/index.wxml:view:1:1")
var aXC=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.push("./components/tag/index.wxml:text:1:36")
var tYC=_n('text')
var eZC=_oz(z,2,e,s,gg)
_(tYC,eZC)
cs.pop()
_(aXC,tYC)
cs.pop()
_(r,aXC)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
cs.push("./components/wuc-tab/wuc-tab.wxml:scroll-view:1:1")
var o2C=_mz(z,'scroll-view',['scrollWithAnimation',-1,'scrollX',-1,'bind:__l',0,'class',1,'scrollLeft',1,'style',2],[],e,s,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,4,e,s,gg)){x3C.wxVkey=1
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:145")
cs.push("./components/wuc-tab/wuc-tab.wxml:view:1:174")
var f5C=_n('view')
_rz(z,f5C,'class',5,e,s,gg)
var c6C=_v()
_(f5C,c6C)
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:193")
var h7C=function(c9C,o8C,o0C,gg){
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:193")
cs.push("./components/wuc-tab/wuc-tab.wxml:view:1:276")
var aBD=_mz(z,'view',['bindtap',10,'class',1,'data-event-opts',2,'id',3],[],c9C,o8C,gg)
cs.push("./components/wuc-tab/wuc-tab.wxml:text:1:447")
var tCD=_n('text')
_rz(z,tCD,'class',14,c9C,o8C,gg)
cs.pop()
_(aBD,tCD)
cs.push("./components/wuc-tab/wuc-tab.wxml:label:1:484")
var eDD=_n('label')
_rz(z,eDD,'class',15,c9C,o8C,gg)
var bED=_oz(z,16,c9C,o8C,gg)
_(eDD,bED)
cs.pop()
_(aBD,eDD)
cs.pop()
_(o0C,aBD)
cs.pop()
return o0C
}
c6C.wxXCkey=2
_2z(z,8,h7C,e,s,gg,c6C,'item','index','index')
cs.pop()
cs.pop()
_(x3C,f5C)
cs.pop()
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,17,e,s,gg)){o4C.wxVkey=1
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:556")
cs.push("./components/wuc-tab/wuc-tab.wxml:view:1:584")
var oFD=_n('view')
_rz(z,oFD,'class',18,e,s,gg)
var xGD=_v()
_(oFD,xGD)
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:620")
var oHD=function(cJD,fID,hKD,gg){
cs.push("./components/wuc-tab/wuc-tab.wxml:block:1:620")
cs.push("./components/wuc-tab/wuc-tab.wxml:view:1:703")
var cMD=_mz(z,'view',['bindtap',23,'class',1,'data-event-opts',2,'id',3],[],cJD,fID,gg)
cs.push("./components/wuc-tab/wuc-tab.wxml:text:1:883")
var oND=_n('text')
_rz(z,oND,'class',27,cJD,fID,gg)
cs.pop()
_(cMD,oND)
cs.push("./components/wuc-tab/wuc-tab.wxml:label:1:920")
var lOD=_n('label')
_rz(z,lOD,'class',28,cJD,fID,gg)
var aPD=_oz(z,29,cJD,fID,gg)
_(lOD,aPD)
cs.pop()
_(cMD,lOD)
cs.pop()
_(hKD,cMD)
cs.pop()
return hKD
}
xGD.wxXCkey=2
_2z(z,21,oHD,e,s,gg,xGD,'item','index','index')
cs.pop()
cs.pop()
_(o4C,oFD)
cs.pop()
}
x3C.wxXCkey=1
o4C.wxXCkey=1
cs.pop()
_(r,o2C)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
cs.push("./pages/Article/index.wxml:view:1:1")
var eRD=_n('view')
_rz(z,eRD,'bind:__l',0,e,s,gg)
cs.push("./pages/Article/index.wxml:x-status:1:22")
var bSD=_mz(z,'x-status',['backdrop',1,'styles',1],[],e,s,gg)
cs.pop()
_(eRD,bSD)
cs.push("./pages/Article/index.wxml:x-navbar:1:81")
var oTD=_mz(z,'x-navbar',['backdrop',3,'fontcolor',1,'mode',2,'styles',3],[],e,s,gg)
cs.pop()
_(eRD,oTD)
cs.push("./pages/Article/index.wxml:view:1:182")
var xUD=_n('view')
_rz(z,xUD,'class',7,e,s,gg)
cs.push("./pages/Article/index.wxml:view:1:211")
var oVD=_n('view')
cs.push("./pages/Article/index.wxml:image:1:217")
var fWD=_mz(z,'image',['mode',-1,'src',8],[],e,s,gg)
cs.pop()
_(oVD,fWD)
cs.pop()
_(xUD,oVD)
cs.pop()
_(eRD,xUD)
cs.push("./pages/Article/index.wxml:view:1:279")
var cXD=_n('view')
_rz(z,cXD,'class',9,e,s,gg)
cs.push("./pages/Article/index.wxml:view:1:309")
var hYD=_n('view')
_rz(z,hYD,'class',10,e,s,gg)
cs.push("./pages/Article/index.wxml:x-avatar:1:330")
var oZD=_mz(z,'x-avatar',['class',11,'title',1],[],e,s,gg)
cs.pop()
_(hYD,oZD)
cs.push("./pages/Article/index.wxml:view:1:381")
var c1D=_n('view')
_rz(z,c1D,'class',13,e,s,gg)
cs.push("./pages/Article/index.wxml:text:1:401")
var o2D=_n('text')
var l3D=_oz(z,14,e,s,gg)
_(o2D,l3D)
cs.pop()
_(c1D,o2D)
cs.pop()
_(hYD,c1D)
cs.push("./pages/Article/index.wxml:view:1:463")
var a4D=_n('view')
_rz(z,a4D,'class',15,e,s,gg)
cs.push("./pages/Article/index.wxml:text:1:486")
var t5D=_n('text')
var e6D=_oz(z,16,e,s,gg)
_(t5D,e6D)
cs.pop()
_(a4D,t5D)
cs.pop()
_(hYD,a4D)
cs.pop()
_(cXD,hYD)
cs.pop()
_(eRD,cXD)
cs.push("./pages/Article/index.wxml:view:1:562")
var b7D=_n('view')
_rz(z,b7D,'class',17,e,s,gg)
cs.pop()
_(eRD,b7D)
cs.pop()
_(r,eRD)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
cs.push("./pages/index/index.wxml:view:1:1")
var x9D=_n('view')
_rz(z,x9D,'bind:__l',0,e,s,gg)
cs.push("./pages/index/index.wxml:ustatus:1:22")
var o0D=_n('ustatus')
cs.pop()
_(x9D,o0D)
cs.push("./pages/index/index.wxml:x-navbar:1:41")
var fAE=_n('x-navbar')
cs.pop()
_(x9D,fAE)
cs.push("./pages/index/index.wxml:view:1:62")
var cBE=_n('view')
_rz(z,cBE,'class',1,e,s,gg)
cs.push("./pages/index/index.wxml:card:1:84")
var hCE=_n('card')
cs.pop()
_(cBE,hCE)
cs.push("./pages/index/index.wxml:card:1:97")
var oDE=_n('card')
_rz(z,oDE,'distribution',2,e,s,gg)
cs.pop()
_(cBE,oDE)
cs.push("./pages/index/index.wxml:card:1:135")
var cEE=_n('card')
cs.pop()
_(cBE,cEE)
cs.push("./pages/index/index.wxml:card:1:148")
var oFE=_n('card')
_rz(z,oFE,'distribution',3,e,s,gg)
cs.pop()
_(cBE,oFE)
cs.push("./pages/index/index.wxml:card:1:186")
var lGE=_n('card')
cs.pop()
_(cBE,lGE)
cs.push("./pages/index/index.wxml:card:1:199")
var aHE=_n('card')
cs.pop()
_(cBE,aHE)
cs.push("./pages/index/index.wxml:card:1:212")
var tIE=_n('card')
cs.pop()
_(cBE,tIE)
cs.push("./pages/index/index.wxml:card:1:225")
var eJE=_n('card')
cs.pop()
_(cBE,eJE)
cs.push("./pages/index/index.wxml:card:1:238")
var bKE=_n('card')
cs.pop()
_(cBE,bKE)
cs.push("./pages/index/index.wxml:card:1:251")
var oLE=_n('card')
cs.pop()
_(cBE,oLE)
cs.push("./pages/index/index.wxml:card:1:264")
var xME=_n('card')
cs.pop()
_(cBE,xME)
cs.push("./pages/index/index.wxml:card:1:277")
var oNE=_n('card')
cs.pop()
_(cBE,oNE)
cs.push("./pages/index/index.wxml:card:1:290")
var fOE=_n('card')
cs.pop()
_(cBE,fOE)
cs.push("./pages/index/index.wxml:card:1:303")
var cPE=_n('card')
cs.pop()
_(cBE,cPE)
cs.push("./pages/index/index.wxml:card:1:316")
var hQE=_n('card')
cs.pop()
_(cBE,hQE)
cs.push("./pages/index/index.wxml:card:1:329")
var oRE=_n('card')
cs.pop()
_(cBE,oRE)
cs.pop()
_(x9D,cBE)
cs.pop()
_(r,x9D)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
cs.push("./pages/tabBar/Popup.wxml:view:1:1")
var oTE=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.pop()
_(r,oTE)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
cs.push("./pages/tabBar/index.wxml:view:1:1")
var aVE=_n('view')
_rz(z,aVE,'bind:__l',0,e,s,gg)
var tWE=_oz(z,1,e,s,gg)
_(aVE,tWE)
cs.pop()
_(r,aVE)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
cs.push("./pages/tabBar/literature.wxml:view:1:1")
var bYE=_n('view')
_rz(z,bYE,'bind:__l',0,e,s,gg)
var oZE=_oz(z,1,e,s,gg)
_(bYE,oZE)
cs.pop()
_(r,bYE)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
cs.push("./pages/tabBar/periphery.wxml:view:1:1")
var o2E=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.pop()
_(r,o2E)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
cs.push("./pages/tabBar/user.wxml:view:1:1")
var c4E=_mz(z,'view',['bind:__l',0,'class',1],[],e,s,gg)
cs.pop()
_(r,c4E)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],["@charset \x22UTF-8\x22;\n@font-face { font-family: Helvetica; font-weight: normal; font-style: normal; src: url(../../static/fonts/PingFang_SC_Semibold.46f83368.ttf-do-not-use-local-path-./common/main.wxss\x2632\x267) format(\x22PingFang SC Semibold\x22), url(data:font/ttf;base64,AAEAAAAOAIAAAwBgT1MvMlPPO0EAAGtoAAAATmNtYXA1V/6IAABG0AAABYBjdnQgwIprdgAAAOwAAAAQZnBnbbEzAoMAAAD8AAAASGdseWYJg6SLAAABRAAARwpoZWFkYZhDAQAATFAAAAA2aGhlYQXOA4IAAEyIAAAAJGhtdHj8+wh/AABMrAAABkBrZXJuYgFh3wAAUuwAAAYSbG9jYQBWYqYAAFkAAAAGQG1heHAEEQHXAABfQAAAACBuYW1lPR4mgAAAX2AAAALucG9zdFkFpjUAAGJQAAAJE3ByZXC4Af+FAABrZAAAAAQB9QKcA+jzHgAAt7y6q74AsAAsIC+wAiUzirgQAGOwAiNwsAJFILAEJbAEJUlhZLBAUFiwAyUjOhshWSGwASNCIFgXPBshWbABQxAgWBc8GyFZLbABLMAtAAIAQQACAOMCpQAEAAsAADc1MxUjNwM1MxUDI0iSkiIpoixNApmZ2AEpoqL+1wACAAkBnwEbApwABAAJAD0YAUACCAFAAwYJAkEEAGkABwAFAAArQAIDAUADAQQCQQQAaQACAAAAACsxGAC4AAGwAT9ABAIGBwOwASowEzUzFSMzNTMVIwloaKdrawGf/f39/QAAAgACAAIBtAKlABwAIQBsGAEYAEAGBwoLDg8FQAYFEBEeHwVBBABiAAYABAAAK0AHAxITHSAhBkAHARQVGBkcBkEEAGIAAgAAAAAruAAGsAA/QAYHCgsODwWwASq4AAiwAT9ABAkMDQOwASq4ABawBD9ABBcaGwOwASowNyM1MzcjNTM3MwczNzMHMxUjBzMVIwcjNyMHIzc3NyMHM09NWg5TYRxWHkgcUxtMWg5MWhxWHkgcUxypDkgOSMVkWmS+vr6+ZFpkw8PDw2RaWgADAAf/kgGtAsgAMQA5AEQAlBgBsABAAjUBQQQAhAArACEAACuwALAAQQQAfgBBAAwAACtABB0uLwNABRE6O0QEQQQAQQAcABAAACsxGABAAg0BQAMuMQJBBADRAAwAAAAAK0ACHQFAAjsBQQQAaAAaACQAACu4AEGwAD9ABxcgISQ7PgawASq4ABqwAT9ABBscHQOwASq4AACwBD9AAy4xArABKjAXJiIjJiY1NDY1NDY1MxQWFzUmJicmJjU0NjM1MxUyFhUjNCYnFRYWFxYWFRQGIxUjNTc2NjU0JicVAzUiBgcGBhUUFhewAQEBPmgBAXYVKlBVDAMDZkNPP2h9GCBRVw4DA19PT0EgGB4aMxAVBQoEGR8MAQFaWQMHBAQHAzokC6MeVy8KFgtIcUFBY1kgLwWcHV4zDBkMRWpjYmgLJhUVKRGVATyHCgsFEwsaKgsABQAQ/+0C3QKcAAQAEQAkADEARAB0GAEYAEACAgGwAEEEAAcAAQAoAAArsACwAEEEAFQAGwAOAAArsABAAiQBQQQATAAIABIAACuwAEACRAFBBABMACgAMgAAK7gAJbAAP0AFKzE4QQSwASq4AAGwAT9AAwIoArABKrgADrAEP0AEAAMEA7ABKjAXATMBIzc0NjMyFhUUBiMiJjU3IgYHBhQVFBYzMjY3NjQ1NCYjJTQ2MzIWFRQGIyImNTciBgcGFBUUFjMyNjc2NDU0JiO3ATBN/tJP/UxJSkpEUFRBlRMOAQEJGhIOAgEJGv3HSUlLSkVQUz+SEw4BAQkaEQ8CAQkaEwKv/VG1VlRPW1NTXUldJRYJEgclLh8SChEHKjPvVFNOWVVUXktbJRYJEAcmMB8TChMHKjEAAwAm//UCRwKsAD8AWQBvAGQYAbAAsABBBACEAAEAKAAAKzEYAEACAgGwAEEEAA4AAQAJAAArQAIlAbAAQQQAYgAkAGYAACu4AFqwAD9ABh4oYGlvBbABKrgAJLABP0ACJQGwASq4AAGwBD9ABAIDCQOwASowJRcjJwYGBwYiIyIiIyYmJzQ0NSYmNSYmNTQ2NyYmNTQ2NzYyMzMWFhUUBgcGBgcXNjY1NDQ1NCY1MxQUBwYGBwcnBgYHBgYVFBYVFhYXFhYXMhYzMjY3NjY3AzY2NzY2NTQmJyYmIyIGFRQWFxYWFwHlYqIcGkYkBAkEAgMCRHYJAQEBAUc0HBtgOgQIBAxVTwIBCDouRgYJAX8BAyMYm2kFCQQNDAECBgQKIBEDBQMECAQOGgk/EBMFBgMPCQMFAxYXCAcDCAWUkioaGgIBAlFMAgQCAwYDBAkETWQgKEgcQU8FAQJZNggPCClLE2gOIBEDCQUDBQMFCQU1ZScHnAUMBRQmEAMHBAoUCQ8XAwEBAQMRDQFMCBIJCRIIDBUFAgIXEQoYDQYNBgABAC8BigC7ApwACwA1GAEYAEACAwFAAwELAkEEAIsAAgAAAAAruAAEsAA/QAQAAQsDsAEquAACsAE/QAIDAbABKjATIzUzFRQGIzUyNjV8TYxIRCUoAhGLmTZDMTElAAABAAr/YQDmApwAFwAiGAGwALAAQQQAjAAQAAYAACsxGAC4AAywAT9AAg0BsAEqMBcmJicmJjU0Njc2NjczBgYVFBYXFhYXB3UlMgwEBAIBCDApcRwtCAgJIBdxn02dUB47HhIjElOkTDzXgC5gMTt1OAEAAAEADP9hAOMCnAAXACIYAbAAsABBBACMABAABgAAKzEYALgACbABP0ACCgGwASowFzY2NzY2NTQmJzMWFhcUFBUUBgcGBgcHDBAZCA0MLR1wLjcCAwQKLydwnylRKDx6On/hSVnUbQQHBBs2HEqURgEAAAEALAFoAXwCnAAPAAATJzcXNTMVNxcHFwcnByc3lGgcYVZiG2hNRkg/RUUB7iNNI2FhI00cXTBTUzBWAAEACQACAZ8BuwAMAEMYAUAEBwoLA0AFAQQFDARBBABpAAYAAAAAKzEYAEAEBAcIA0AEAgkKA0EEAGIAAwABAAAruAAAsAQ/QAMLDAKwASowNzUjNTM1MxUzFSMVI6KZmWuSkmsCtWSgoGS1AAEASP+FAOMAmwALACkYARgAQAIDAUAEAQQLA0EEAJoAAgAAAAAruAAAsAQ/QAQBBAsDsAEqMDcjNTMVFAYjNTY2NZtTm1dEJC8CmZk0STABKCQAAAEAHgDTAQYBYQAEAAA3NTMVIx7o6NOOjgAAAQBPAAIA4wCbAAQAADc1MxUjT5SUApmZAAAB/+L/rgEJApwABAAABxMzAyMexGPFYlIC7v0SAAACABD/7gGfApwAEQAgAEwYARgAsACwAEEEAG8ABwAZAAArQAIgAbAAQQQAbwASAA4AACu4AAGwAD9ABAoWHAOwASq4AAewAT9AAQCwASq4AA6wBD9AAQCwASowNxE0Njc2NjMyFhURFAYjJiY1FzI2NRE0JiMiBhURFBYzEAQFDlJaelJ9VmhUwxwXEiEfEhcamwFaDR8QKENrSv7CbU4FX0k/HD8BIiUvLyX+3i8sAAEAFwACATcCjgAPAD4YARgAsABAAgIBQQQAaAAJAAEAACu4AAGwAD9AAgIBsAEquAAMsAE/QAINAbABKrgAALAEP0ADDg8CsAEqMDcRIzUyFjMyFjMyNjczESOiiwMFAwIFAzxbCWuVAgHCaQEBNS79dAAAAQAJAAIBpgKcACUAXxgBQAIkAbAAQQQAoQAjAAwAACuwAEADEyUCQQQAkgASAAAAACsxGACwALAAQQQAbwAWAA8AACu4ABmwAD9AAgwBsAEquAAWsAE/QAEAsAEquAAAsAQ/QAMkJQKwASowNzY2NzY2NzY2NzY2NTQmIyIGFSM2NjMyFhUUFAcGBgcGBgczFSEJA04uGzUSBwsDBQQaEisWkgVKhHJTAghEJypGBe/+YwJliTIeMxcKFAoNGAseLT9Ba4RvSAoVCzNZJihFHX0AAQAH//UBmAKlAEkAchgBQAMkMwJAAjQBQQQAkgALAAoAACtAAgQBsABBBACSAAMAGgAAKzEYALAAsABBBABvAEAAKgAAK7AAsABBBABoAB4AHQAAK7gAJ7AAP0AGLTM0OkMFsAEquABAsAE/QAEAsAEquAAHsAQ/QAEAsAEqMAEWFhUVFAYjIiY1MxQGFTAUBxQGFRQWMzI2NTQmIzUyMjMWMjMyNjc0JiMiBhUUFBcUFBUjNCY1NCY1NDQ3NjYzMhYVFBQHBgYHATBEJH9NSXqSAQEBFhcmGzVLAwUDAgUDJjoEFxwaGAGSAQEBBl1oUGcBAyUxAWgaVTsOZlVgjgQJBQEBBQoEIDIjPzsiaAEeQBosLh0DBQMDBgMCBAMCBAIFCgZBbFhKBw4HKUkNAAL/+wACAaYCjgALAA8AXxgBQAQFCAkDQAYKCwwNDwVBBACMAAQAAAAAKzEYAEAGBQYMDg8FQAUBBwgLBEEEAHcAAgAAAAAruAANsAA/QAEAsAEquAADsAE/QAIEAbABKrgACbAEP0ACCgGwASowNyM1EzMRMxUjFSM1NTUHM9zh0Zw+Poxra395AZb+anl9fXnMzAABABX/9AGhAo4AOABgGAEYAEACNQFAAjcBQQQAdwA0ADYAACuwAEACGQFBBAB3ACYAGAAAK7AAsABBBABvAAMALwAAK7gANrAAP0ADAzcCsAEquAA0sAE/QAI1AbABKrgAGLAEP0ACGQGwASowEzY2MzIWMxYWFxQUFRYUFRQWFRQGBwYGBwcmJjU0NjU0NjUzFBYzMjY1NDQnJiYjIgYHIxMhFSMHlAtDJgULBS9OBQEBWTYOGw0OXVwBAYseHBcWAQMbFxoZBYQVAVfoBwGYExwBBk1YBAgFAwYDBw4GfV8LAwMBAQF6TAIEAwIEAj8jPygGDQYqRhEgAWV2gAAAAgAX//UBnwKlACkANgBLGAEYALAAsABBBAB3ABcAIgAAK7AAsABBBABvAAMAMAAAK7gAGrAAP0AFFBscKASwASq4ABewAT9AAQCwASq4AA2wBD9AAQCwASowEzY2MzIWMxYWFRUUBiMiJiMmJjURNDYzMhYVIzU0JicmIiMiIgcGBhUVEzI2NTQmIyIGFRQWF6IUOx8ECQUvTlppBw0HQGptT1ZvkhkPAgMCAgMCER0qISAUJh8SEBoBkRAVAQZbbA5ofQEGUWMBPl9YUV8HFxgCAQECHBpk/tknSTE6OjE0NwUAAQAJAAIBkQKOAA4AQRgBGABAAgkBQAIHAUEEAHcACAAGAAAruAAGsAA/QAMHCgKwASq4AAiwAT9AAgkBsAEquAAAsAQ/QAMNDgKwASowNzY2NzY2NyM1IRUGAgcjVgwqHhMuG/0BiD5QC6ICbpxILl83dm91/uqSAAADABD/9QGfAqwAIgAvADwATxgBGABAAgoBsABBBABvAAkANgAAK0ACPAGwAEEEAGgAMAApAAAruAADsAA/QAQQMzkDsAEquAAJsAE/QAIKAbABKrgAHLAEP0ABALABKjATJiY1NDY3NjYzMzIWFxYWFRQGBxYWFxYWFRQGIyImNTQ2NxMyNjU0JiMiBhUUFjMRMjY1NCYjIgYVFBYzaisvAQEIXFYJXWIIAQEuKwMGAiUqbGBjYDEpaSYUHhwfEhIfHB4eHBoXHBUBaApPMAcNBzxkZDwHDQcuUAsBAwITOlBtY194QUYV/vszLzswNTYqOAE1JTElKC8lJikAAAIAEP/1AZgCrAArADgAThgBGABAAjgBsABBBAB3ACwAAwAAK0ACDQGwAEEEAG8ADAAyAAAruAATsAA/QAMvNQKwASq4AAywAT9AAg0BsAEquAAXsAQ/QAEAsAEqMAEGBiMiJicmJjU0NjczMhYXFhYVERQGIyImNTMwFBUGFDEUFjMyMjc2NjU1JzI2NTQmIyIGFRQWMwEGDDggBgwFLk1Ccw5rUgYBAWBlVGiSARwRAgMCEBozJhQeHBoXEh8BDRMcAQEIWF96jgVxRAkTCf7eU2hKYwMBAQMZHAEDHhtrRk4xOi87NTs9AAIANgACAMkB/AAEAAkANBgBGABAAgcBQAMICQJBBACaAAYABQAAK7gABrAAP0ACBwGwASq4AACwBD9AAwMEArABKjA3NTMVIxE1MxUjNpOTk5MCmZkBX5ubAAIAL/+FAMkB9QALABAAShgBGABAAg4BQAMPEAJBBACaAA0ADAAAK0ACAwFABAEECwNBBACaAAIAAAAAK7gADbAAP0ACDgGwASq4AACwBD9ABAEECwOwASowNyM1MxUUBiM1NjY1AzUzFSODVJpWRCUvVJOTApmZNEkwASgkAVibmwABABf/7QGRAeAABwAANwUVJTUlFQWGAQv+hgF6/vXqlGnRVsxkkgAAAgAJAFwBpgF1AAQACQAZGAEYAEACBwFAAwgJAkEEAGgABgAFAAArMDc1IRUhNTUhFSEJAZ3+YwGd/mNcaWmxaGgAAQAe/+0BmAHnAAcAACUlNQUVBTUlASn+9QF6/oYBC+OSctNdymmNAAIAAgACAZgCswAEADYAVRgBQAMDNQJAAwY2AkEEAIwAAgAFAAArMRgAsACwAEEEAHcAHwAVAAAruAASsAA/QAYPGBkiIwWwASq4AB+wAT9AAQCwASq4AACwBD9AAwMEArABKjA3NTMVIzc1NDY3NjY3NjY3NjY1NCYjIgYVIzQ2NzY2MzIWFxUUBgcGBgcGBhUUFhUUFhUUFBUjeJWVBxYRCBIJCRAICQgfFxoXkgIDClNhYG4FLBoEBwQWIgEBjgKZmdE6IyoTCBMLChgPFCEMGxsxKg0cDjthT1MLMUkgBAkEHDokAQMCAQIBAQIBAAIAHP/4AsECugCDAJwAaxgBsACwAEEEAGEAJgAkAAArMRgAsACwAEEEAFQAHgCWAAArsACwAEEEAFAAMAB6AAArsACwAEEEAEcAbQA/AAAruAAYsAA/QAUeJCUmBLABKrgAbbABP0ACPwGwASq4AF6wBD9AAQCwASowJQYGBwYGIyImJzQmNTQmNSYmNTQ2NzY2NzY2NzI2MzIyMxYWFzczAxQGMRQGFRQWMzI2NzY2NzQ2NTY2NTQmIyIGBwYGFRQUFRQUMxQUFRYWMzI2NzY2NzMGBgciBiMiJic0JjU0JjU0Njc2NjMyFhcWFhcVFAYHBgYjIiY1NDY3NDY1JxQWMzI2MzAwMTI2MzY2NSYmIyIGBwYGBwG0ECQSDRsMNE8HAQEBAjUfBw4HCh0PBQsFAwYDIToMB1sqAQEHBQcVChEdBAEBAYdsChUKXZsBA61rCRIKKVElWi+ISQcOB4DZCQEBpmMYLxcSJhNXkwlUMxkuExMcAQEBpyoaAQQDAwQBJDYBKBkGDAYfMwLFERgHBAVELwMFAgMGAwcOBkRVGQUKBAcHAgECGhgx/u4BAgECAQgKDAsRNB8ECQQIEQhmiAIBDpeIAQIBAQECAwFlnAECBiklR0cGAaqVAwUDAwUDkLEeBwcEBBSLgg9Mch4PDxcTAgUDAgUCayUqAQEFQT8kIwICCUAyAAL//QACAeICnAAIAAwAQhgBGABAAwoMAkACBgFBBAB3AAkABQAAK7gAC7AAP0ABALABKrgAAbABP0ACAgGwASq4AACwBD9ABQMEBwgEsAEqMCcTMxMjJyMHIzczAwMDmbeVoxV4FaDDVSksAgKa/WaEhP0BJ/7ZAAMAHwACAc0CnAASABoAIwBCGAEYAEACAgFAAiIBQQQAdwABACEAACu4AAWwAD9ABB4hIgOwASq4AAGwAT9AAgIBsAEquAAAsAQ/QAMREgKwASowNxEzMhYVFAYHBgYHFhYVFAYjIzcyNjU0JicVETI2NTQmIyMVH9tOfiUWCRIHNS9ebuKaOz1CNjsvHRozAgKaR1k5QA4FBwEaQ0ZeZXYaOjYbBaoBICA2Gh6OAAEAGP/1Ac0CswAvADsYARgAsACwAEEEAHwADwAbAAAruAAMsAA/QAQSFSEDsAEquAAPsAE/QAEAsAEquAAIsAQ/QAEAsAEqMAEzFRQGBwYGIyImNRE0NjMyFhUVIzU0JiciIiMiIiMGBhURFBYXMjIzMjI3NjY1NQEqo185ESIPcGthemN3qh0SAQMBAQMBEx4eEwEDAQIEARQgAQ1rTE4MBANkcwEpT29hZDpWFBcCAhkZ/p8XHQIBAiIfXQACACYAAgHNApwACgAWAD4YARgAQAICAbAAQQQAbwABABUAACu4AA+wAD9AAgUBsAEquAABsAE/QAICAbABKrgAALAEP0ADCQoCsAEqMDcRMzIWFREUBiMjNzI2NRE0JiciIiMRJriDbF5u26EsNzAcBgsGAgKaO17+n0lXdhcvATAnFwH+SwAAAQAeAAIBkQKcAAwAUxgBGABAAgYBQAIIAUEEAIsABQAHAAArQAICAUACBAFBBAB8AAEAAwAAK7gAA7AAP0ACBAGwASq4AAGwAT9AAgIBsAEquAAAsAQ/QAMLDAKwASowNxEhFSMVMxUjFTMVIR4Bc9PFxdP+jQICmn2Ai46EAAABACUAAgGYApwACgBTGAEYAEACBgFAAggBQQQAhAAFAAcAACtAAgIBQAIEAUEEAHwAAQADAAAruAADsAA/QAIEAbABKrgAAbABP0ACAgGwASq4AACwBD9AAwkKArABKjA3ESEVIxUzFSMRIyUBc9O+vqACApp9eYT+4AAAAQAY//EBvwKzADAAYRgBGABAAi8BsABBBAASAC4AAwAAK7AAsABBBAB8AA0AFgAAK0ACLQFAAisBQQQAdwAsACoAACu4AAqwAD9ABBATHAOwASq4AA2wAT9AAQCwASq4AC6wBD9AAwMvArABKjAlBgYjIiIjJiY1ETQ2MzIWFRUjNTQmIyIiIwYGFREUFhcyMjMyMjM2NjU1IzUzESMnAU0EWDUDBQM5YGRwY3CjHhIBAwEUISEUAQMBAgQBEh4302sHOh0sA1RoAUVZZV9fOlYUEgIXFP6YGx4CAxsWVnf+mjgAAQAYAAIBxgKcAAwANxgBGABAAgQBQAIKAUEEAIsAAwAJAAAruAABsAE/QAQCBQYDsAEquAAAsAQ/QAUHCAsMBLABKjA3ETMVMzUzESMRIxEjGKFqo6NqoQICmv39/WYBEv7uAAEAKAACAMkCnAAEAAA3ETMRIyihoQICmv1mAAABAAD/9QFhApwAGgBFGAFAAgIBQAMZGgJBBAChAAEAAAAAK0ACEwGwAEEEAIQAEgAIAAArMRgAuAAAsAE/QAMBGgKwASq4AAWwBD9AAQCwASowEzMRFAYjIiY1NDY1NDY1NDQ1MxUUFjMyNjURvqNaUFNkAQGEEgoLEQKc/fFDVVGDAwYDAgMCAgMCVhANDAoCFgAAAQAfAAIB2wKcAAwAADcRMxETMwMTIycHFSMfmnGxlZWqUyWaAgKa/vUBC/7Z/o3YP5kAAAEAFwACAXUCnAAGAAA3ETMRMxUhF6C+/qICApr96oQAAQAsAAIChwKcAA0AADcRMxMTMxEjEwMjAxMjLOFNU9qSDnJvchWZAgKa/nEBj/1mAgH9/wIB/f8AAAEAHwACAcYCnAAKAAA3ETMTAzMRIwMTIx+hfxWco38VmgICmv5/AYH9ZgFz/o0AAAIAH//1AdQCrAARACYAPBgBGACwALAAQQQAdwAEACMAACu4AAGwAD9ABQoSHSYEsAEquAAEsAE/QAEAsAEquAAOsAQ/QAEAsAEqMDcRNDYzMhYXFhYVERQGIyImNRMRFBYzMjIzNjY1ETQmJyIiIyIGFR+AWwwZDEBpaXh6WqEjFQEBARQiIhQBAQEVI8wBKWRTAgEJUFv+12N0g1QBMP6tHB0BHBwBUxwcARwdAAIAJgACAdQCnAAQABkAUxgBGABAAhkBsABBBAB3ABEACAAAK0ACAgFAAhgBQQQAdwABABcAACu4ABSwAD9ABAUXGAOwASq4AAGwAT9AAgIBsAEquAAAsAQ/QAMPEAKwASowNxEzMhYVFAYjIiYjIiYjESMTMjY1NCYjIxUmv41ihFoGDAUGDAahoUogKyMcAgKaZmSCTAEB/vwBejU2IxyqAAIAH/+ZAekCrAAaAC8ATRgBGACwALAAQQQAfAAfABcAACuwALAAQQQAdwAEACwAACu4AAqwAD9ABQEbJi8EsAEquAAEsAE/QAEAsAEquAARsAQ/QAMPFwKwASowNxE0NjMyFhcWFhURFAYHFwcnJgYjBiIjIiYnExEUFjMyMjM2NjURNCYnIiIjIgYVH3lbDBkMQGkeFU9dWwMGBAwZC2JuBZojFQEBARQiIhQBAQEVI8wBMF9RAgEJUFv+1zRQFU1NWwEBAVmAATD+rRwdARwcAVMcHAEcHQAAAgAfAAIB4gKcABsAJQBqGAEYALAAQAUQERobBEEEABYADwAAAAArQAMdJQJAAhkBQQQAdwAcABgAACtAAgIBsABBBABvAAEAJAAAK7gABbAAP0ADICECsAEquAABsAE/QAICAbABKrgAALAEP0AGDxARGhsFsAEqMDcRMzIWFxQGBxYWFRcUFjMVIyImNTU0JiMjESMTMzI2NTUmJiMVH+lTZgUnLyUqBxIKjh8SGiQloaElFycKMyYCAppOWUBUFQoqIKIlGhUTJYshIP78AXomKxM6E7EAAQAA//QBmAKzAFcAeRgBQAQvRkcDQAMwMQJBBACSAC4AFgAAK7AAsABBBACSAAoATgAAKzEYAEADAVcCQAJLAUEEAPYAAABKAAArsACwAEEEAHcAKwA3AAAruAAfsAA/QAclLi8wMT0GsAEquAArsAE/QAEAsAEquABKsAQ/QAJLAbABKjA3MxQUFQYUFQYGFRQWFzIyMzIyNzY2NTQmJyYmJyYmNTQ2NTQ2NTQ2NTY2MzIWFRUjNTQmJyYmIyIiIwYGFRQWFxYWFxYWFxUUBiMHJiY1NDY1NDQ1NjQ1ApIBAQEkFgEBAQIFAhIdJx0OHg8wUAEBAQloUVF7khwRBAYDAQEBER0rHwwbDi5NA39UFVVbAQHqAgQCAgUCBAgDLS4BAQQhHB0qEwoSCx9cTgECAgECAQUKBTthYmoOEyMmBQEBARwVHykSCA8IG1VOEXZXAQVoXwUKBQIEAgMIAwAAAQAJAAIBnwKcAAgAWRgBQAIHAUADAQgCQQQAoQAGAAAAACsxGABAAgQBQAQCBQYDQQQAhAADAAEAACu4AAGwAD9ABAIFBgOwASq4AAOwAT9AAgQBsAEquAAAsAQ/QAMHCAKwASowNxEjNSEVIxEjhn0BlnajAgIWhIT96gAAAQAf//UBzQKcABgAABMzERQWFzIyMzIyNzY2NREzERQGIyImNREfoR4SAQEBAgQBEh6jbl5wcgKc/gYaHgEBAiAdAfP+KXhYWGMB7AAAAQAHAAIB7AKcAAcAADcDMxMTMwMjmpOhTlSilL4CApr+NwHJ/WYAAAEAAgACAqUCnAANAAA3AzMTEzMTEzMDIwMDI3FvmSpIkkExlHGxMDiqAgKa/j4Bwv4+AcL9ZgHJ/jcAAAEABwACAeUCnAAMAAATAzMXNzMDEyMnByMTmoyaTk2bjZSpRlWakwFTAUnDw/63/q/KygFRAAEAAAACAeUCnAAJAEQYAUACCAFABAEDCQNBBAChAAcAAAAAKzEYALgABLAAP0ABALABKrgAArABP0AEAwUGA7ABKrgAALAEP0ADCAkCsAEqMDcRAzMXNzMDESOhoaFVVJuiogIBJwFz0dH+jf7ZAAAB//sAAgF8ApwACgBBGAEYAEACBQFAAgMBQQQAhAAEAAIAACu4AAKwAD9AAwMGArABKrgABLABP0ACBQGwASq4AACwBD9AAwkKArABKjAnNRMjNSEVAzMVIQXKvAFsxcz+fwJ9AZmEff5nhAABACH/WgDmApwACAAlGAEYAEACAgFAAgQBQQQAVAABAAMAACu4AAGwAT9AAgIBsAEqMBcRMxUjETMVIyHFR0fFpgNCU/1lVAAB/6AAAgE+ApwABAAANwEzASPF/tt3ASd5AgKa/WYAAAEABf9aANACnAAIADkYAUACBwFAAgMBQQQAfgAGAAIAACsxGABAAgYBQAIEAUEEAFsABQADAAAruAAFsAE/QAIGAbABKjAXNTMRIzUzESMFTU3Ly6ZbAo1a/L4AAf/7/5kBvf/RAAQAAAc1IRUhBQHC/j5nODgAAAEANgGRAMICpQALAC4YARgAsACwAEEEADIABAAFAAAruAAIsAA/QAIJAbABKrgABLABP0ACBQGwASowEzU0NjMVIgYVMxUjNk0/JShNjAGRnDo+MioqjgACABD/9QGfAgMANABOAE8YAbAAsABBBACMADIAMwAAKzEYAEACMwGwAEEEAA4AMgAGAAArsACwAEEEAGIAJQAeAAAruAAlsAA/QAEAsAEquAAysAQ/QAMGMwKwASowJQYGByIGIyIiIyYmNTQ2NzY2NzY2NzY2NTQ0NSYmIyIGFSM0NjMyFhcUFhURFBYXFhYXIycnBgYHBgYVFBQXFBQVFhYXFjIzMjYzNjY1NQENDDcfBQsFAQMCMFA6NhQuGhASBAICARgRJhuLZFhsUgYBBAICBAKLBwcKEwkdKQEBGw8CBAICBQISHTMaHgUBAkJGVToRBw4KBhIKBAgEAQEBEBwjKV9RRysFCwX+4B0YCQYMCjHFBQkFDiIfAQIBAQICExkCAQEEJSFPAAACAB7/8QGYAqUAGAAzAFAYARgAQAMXGAKwAEEEABIAAAAQAAArsACwAEEEAHcACQAtAAAruAAJsAA/QAIDAbABKrgAAbABP0ACAgGwASq4AACwBD9ABRAWFxgEsAEqMDcRMxU2Njc2NjMyFhUVFAYjIiYnJiYnFSMTFRQWFzIWMzIyMzY2NTU0JiciJiMiIiMGBhUekgoWChIkEDJGTjUMGg0PHQ2LkhcOAgUCAQMBDRYVDAMEAgEDAQ8YAgKj0wkPBgoJUUrpOVUGBgcXESoBUbEZIQUBAyAdsRcaBAEDHBcAAQAl//UBkQIKACwALBgBGACwALAAQQQAbwAMABgAACu4AAywAD9AAQCwASq4AAWwBD9AAQCwASowJTMVFAYjIiY1NTQ2MzIWFRUjNTQmJyImIyIiIwYGFRUUFhcyMjMyNjM2NjU1AQaLY1tPX0RjW2qLFQwDBAIBAwEPGBgPAQMBAgQDDBXTF3BXTFPURV1OchMxFxkDAQIZE9oYHQMBBBwXPwACAB7/+AGKAqUAGAAzAE0YARgAQAIXAbAAQQQACwAWAAYAACuwALAAQQQAfAANAC0AACu4AA2wAD9AAhMBsAEquAAUsAE/QAIVAbABKrgAFrAEP0ADBhcCsAEqMCUGBgcGBiMiJjU1NDYzMjIXFhYXNTMRIzUDFRQWFzIyMzI2MzY2NTU0JiciJiMiIiMGBhUBDRA0GwcNBy5HSCsDBwQdNQ6LfWQYDwEDAQIEAwwVFQwDBAIBAwEPGEEdJAUCAU1W6EZDAQMlH+H9XT8BGbEaIAMBBB4asRcaBAEDHBcAAAIAF//1AZECCgAfACsAQRgBGACwALAAQQQAYgAaACUAACtAAyErAkADHh8CQQQAWwAgAAAAACu4ABqwAD9AAQCwASq4ABOwBD9AAQCwASowNxUUFhcyMjMyMjM2NjU1MxUUBiMiJjU1NDYzMhYVFSM1MzU0JiMiBhUUFBWiHREBAQEBAQESHotaVFtxfFBUWu9rHhwfEupPHiMBASUjFRNRXlFO1FpIUUuEWxMgLjsjAQEBAAEAEAACARsCpQATAFgYARgAQAIJAbAAQQQAaAAIAAoAACtABAQODwNABAIQEQNBBABiAAMAAQAAK7gAA7AAP0AFBA0ODwSwASq4AAiwAT9AAgkBsAEquAAAsAQ/QAMSEwKwASowNxEjNTM1NDYzMxUiBhUVMxUjESNIODhFP08fIkFBkgIBj2Q4Oj5qCRojZP5xAAACABf/WwGRAggAMABLAEMYARgAsACwAEEEAHcADQBFAAArsACwAEEEAG8AOAAGAAAruAAUsAA/QAQNExUDsAEquAAWsAQ/QAYGHyAmLwWwASowJQYGBwYGIyImNTU0NjMyFhcWFhc1MxEUBgcGBiMiJicXMBQVBhQxFBYzMjI3NjY1NQMVFBYXMjIzMjYzNjY1NTQmJyImIyIiIwYGFQEGDy0YCBAHLUhOLgYMBhovC4teOQcQB1tlBZIBGhEDBQMPGV0YDwEDAQIEAwwVFQwDBAIBAwEPGEgTHAUCAkJJ6EJDAQIFIRs4/f9SRgYBAURPAQEBAQEVFQEDExFhARKcGiADAQQeGpwXGgQBAxwXAAEAHgACAZECpQAdAD4YARgAsACwAEEEAHcACQAVAAAruAAJsAA/QAIDAbABKrgAAbABP0ACAgGwASq4AACwBD9ABQ0OHB0EsAEqMDcRMxU2Njc2NjMyFhURIxE0JiciIiMiBiMGBhURIx6SDykVCA8HLkiSFQ0BAQECBAMMFZICAqPMFBgFAQJBO/5xAWYWGAEBBBkR/poAAgAvAAIAwgKlAAQACQBBGAEYAEACBwFAAwgJAkEEAHcABgAFAAAruAABsAA/QAICAbABKrgABrABP0ACBwGwASq4AACwBD9AAwMEArABKjA3ETMRIxE1MxUjL5OTk5MCAfr+BgIreHgAAAIADP9aAMkCpQAOABMAWxgBQAQCERIDQAYNDg8QEwVBBACSAAEAAAAAKzEYAEACEQFAAxITAkEEAHcAEAAPAAAruAAAsAA/QAMBDgKwASq4ABCwAT9AAhEBsAEquAANsAQ/QAICAbABKjATMxEUBgcGBiMHNTY2NRE1NTMVIzaTNB8JEwhGGhCTkwH8/fFMPAYDAQFpAQ4qAgAxeHgAAQAXAAIBpgKlAAwAADcRMxE3MwcTIycHFSMXkl2gi4uSVhWSAgKj/rWizP7SwyOgAAABACgAAgC7AqUABAAANxEzESMok5MCAqP9XQAAAQAcAAICYwIIADIAXhgBsACwAEEEAJIAIQAJAAArMRgAQAISAUACAgFBBAALAAkAAQAAK0ACEgFAAi0BQQQAbwAJACEAACu4AAGwAD9ABgIDCQwSBbABKrgAALAEP0AHGRolJjEyBrABKjA3ETMVNjY3NjYzMhYXNjY3MjYzMjIzFhYVESMRNCYnIiIjIgYVESMRNCYnIiIjIgYVESMcjBExGwUMBSA2Cg42HgQJBAIEAilEjBYNAQMBDhiMFg0BAwEOGJMCAfo4HCEFAQEiIh4hBAEDNzb+agFfFxoDGhr+oQFfFxoDGhr+oQABACUAAgGRAgUAHQBDGAEYALAAQAICAUEEAAcACQABAAArsACwAEEEAHcACQAVAAAruAABsAA/QAMCCQKwASq4AACwBD9ABQ0OHB0EsAEqMDcRMxU2Njc2NjMyFhURIxE0JiciJiMiIiMGBhURIyWEDTQdBgsGLEeLFQwDBAIBAQENFZICAfpIIycFAQE3L/5jAV8UGAMBARcY/qEAAAIAJf/1AZECCgAOACkALBgBGACwALAAQQQAbwAEACMAACu4AASwAD9AAQCwASq4AAuwBD9AAQCwASowNzU0NjMyFhUVFAYjIiY1NxUUFhcyFjMyMjM2NjU1NCYnIiIjIgYjBgYVJWdQZFFcWWRTixcOAgUCAQMBDRYWDQEDAQIFAg4XhvZBTVg29klIUz7i2xcdBAECGRfiFxoDAQQbFAACAB7/WgGRAgUAGAAzAD4YARgAsACwAEEEAHcACQAtAAArsACwAEEEAG8AIAAQAAAruAABsAA/QAMCCQKwASq4ABCwBD9AAhYBsAEqMBcRMxU2Njc2NjMyFhUVFAYjIiYnJiYnFSMTFRQWFzIWMzIyMzY2NTU0JiciJiMiIiMGBhUehBEsFwgQBy9NSjIMGgwNGgySkhcOAgUCAQMBDRYVDAMEAgEDAQ8YpgKiQRwiBwMCUUzpN1UGBwYWENIB+bEZIQUBAyAdsRocBAEDHhoAAgAX/2EBgwIIABsANgA9GAEYALAAsABBBAB3ABAAMAAAK7AAsABBBABvACMABgAAK7gAF7AAP0ADEBgCsAEquAAGsAQ/QAEAsAEqMDcGBgciBiMiJjU1NDY3MjIzMjIzFhYXNTMRIzUDFRQWFxYyMzI2NzY2NTU0JiciJiMiIiMGBhX4DzQcBAcEK0hHKwEBAQIFAiE8DYSLVhYNAQMBAgUCDhcVDAMEAgEDAQ8YOh0hBAFMWOhCQgEDKidI/WXZASCxHyMDAQEBBCUbsRcaBAEDHBcAAAEAJQACARsCAwAMAEEYARgAsABAAgIBQQQABwAGAAEAACuwALAAQQQAmgAGAAcAACu4AAGwAD9AAwIGArABKrgAALAEP0ADCwwCsAEqMDcRMxU2NjMVIgYVESMlhBo5HzspkgIB+k87G5sRNf7gAAABAAn/9QFoAgoAPABSGAGwAEADEzwCQQQAhAAsAAAAACtABB01NgOwAEEEAHYAHAAKAAArMRgAsACwAEEEAGIAGQAlAAAruAAZsAA/QAEAsAEquAA5sAQ/QAEAsAEqMDczFhYXMhYzMjY1NCYnJiYnJiY1NDY3NjYzMhYVFSM1NCYnJiIjIgYjBgYVFxYWFxYWFxYWFxUUBiMiJjUJfQEbEAMFAhQhHxgOHxArSV45BxAHQWl+GQ8CAwIDBQIOFwECIhgMGQ0mQgVQaFhPmyMjBAEdEhIZDAYOCBZIRUtDBQEBVEkMDxobAgEBBBUOBBQaCwYLBhM+ORM9XV1JAAEACQACARsChwAcAGAYAUAEAwYHA0AFARgZHARBBACSAAIAAAAAKzEYAEAFAwQbHARABAYZGgNBBABoAAAABQAAK7gAALAAP0AFAwQbHASwASq4AAGwAT9AAgIBsAEquAAUsAQ/QAIVAbABKjATNTMVMxUjERQWMzI2NzI2MzI2MxUjIiY1ESM1M0GSSEgREAQLBgIEAgMFAocqKTg4AfyLi2v+9RARAgEBAWhBLgEgawABAB7/8wGDAfwAIAAzGAEYAEACHwGwAEEEAA4AHgAGAAAruAANsAA/QAQOHB0DsAEquAAesAQ/QAMGHwKwASowNwYGByIiIyIiIyYmNREzERQWFxYyMzIyNzY2NREzESM1/wk9IwIDAgEBASlFkhEJAgMCAgMCDBSLhDoiIwIBMTEBpv6KDhMCAQECFhIBb/4GOAAAAQAFAAIBhwH1AAcAADcDMxMTMwMjbmmaIzmMcKkCAfP+uwFF/g0AAAEAAAACAkcB9QANAAA3AzMTEzMTEzMDIycHI1tbjCM5dzEqjWmUKiqbAgHz/rsBRf67AUX+Dfb2AAAB//sAAgF8AfUADAAAJzcnMxc3MwcXIycHIwV2b5IqLJJvb5IsKpkC9v2Njf32kpIAAAH/+/9gAXUB9QAgAAA3EzMDBgYjIiYjIiYjIiIjNTYyMxYyMzIWMzI2NTUDMxO+M4RvEU4+Bw8HBQoEAwcDAgUCAgMCAwcDERBvkjGpAUz96k8wAQFoAQEBDg4PAgH+tAAAAQAQAAIBUwH1AAoAMxgBGABAAgUBQAIDAUEEAG8ABAACAAAruAAEsAA/QAIFAbABKrgAALAEP0ADCQoCsAEqMDc1EyM1IRUDMxUhEJmSATyjo/69AmgBGXJr/u52AAH/8f+0APsCqQAxAC4YARgAsACwAEEEAAQAIQAnAAAruAAnsAE/QAIhAbABKrgAE7AEP0ACBAGwASowExYWFRUUFhcWFhcGIiMGIiMiJjU1NCYnNjY3NjY1NTQ2MzIWMxYWFwYGBwYGFRUUBgdnKiMbHgMHBAULBgsVCUg+Fy4FCAMgFVE8BgwGCRAHGyUFAQEjKgEpBSk2oDMoDgEDAgEBMzegMSoQAgMCDSYuuDMtAQEBAQYnFwQJBL85JAsAAAEAMwACALACpQAEAAA3ETMRIzN9fQICo/1dAAAB//D/rgD7AqUAJgAAEyImNTU0JicmJicyFhUVFBYXBgYHBgYVFRQGIwc2Njc2NjU1NDY3gyUoFRYGDAheZSwbBwwGFRlWODYLDwYWECMqASkxKaouKRAECAUhSb8pJQUDBgIKIC+uRyEBBggEDiUrmTYyCgAAAQAMAK8BXQH8ABAAABM0NjMyFhcVFAYHIiIjIiY1DGI/QGsFZj0CBAI/ZwFaVU1LUAdRVwNWVQAB//7/oAHsAqwAHABbGAFAAhYBQAIYAUEEAH4AFQAXAAArQAIaAUADGxwCQQQAfgAZAAAAACsxGABAAhMBQAQVGBkDQQQAaAASABQAACu4AAywAD9AAQCwASq4ABKwAT9AAhMBsAEqMBMiIiMwIjEGIjEiJjU0NDc2NjMhFSMRIxEjESMRkwEBAQEBAkdHAQNXVgE9I384fwFuAVw6AwcDO2Fq/V4Cov1eAc4AAv/iAkIBOgK6AAQACQAAAzUzFSMzNTMVIx6Tk8SUlAJCeHh4eAABAC8CNAFIAroABAAAEzczByMvW76bfgI0hoYAAQAl/zoBDQAJAC0AMxgBGACwALAAQQQAGgAVAA4AACuwALAAQQQAJgAIACIAACu4AACwBD9ABQECCC0EsAEqMDczBzY2MzI2MzIWFRQGIyImIyYmJyc3FhYXFhYzMjY1NCYjIgYHMCIxBgYjJzd/OCMDBgIFCAQmN0kuBQsGBgsFRRUHDgcKFQkVHRkUBQwHAQIDAhQwCTgCAQEoGiovAQECARQqAgUCAwMQDg4VAwIBAQ1UAAACABf/WwGmAgoAMwA4ADcYARgAQAI2AUADNzgCQQQAmgA1ADQAACu4ADWwAD9AAjYBsAEquAAjsAQ/QAYLFBogLAWwASowEzMVFAYHBgYHBgYHFAYHFAYHBgYVFBYXMjIzMjY3NjY1NTMVFAYHBgYjIiY1NDY3NjY1NSc1MxUjoocVEAcPCA0ZCQEBAQEBAh0RAQEBAwYEERyLBgcSWVJqWysbGisHlZUBMD8gJxIHEAkPKBwBAwICAwIFCQMVGgEBAQUkIRAxDCAQKENkWClAHx9BKAk+nJwAAAIAJQBxAZgBywAHAA8AABMnNRcVBzU3Myc1FxUHNTd/WqCgWtRboKBbARs4eGqHaXkxOHhqh2l5MQABAC8BigC7ApwACwA1GAEYAEACAwFAAwELAkEEAIsAAgAAAAAruAAEsAA/QAQAAQsDsAEquAACsAE/QAIDAbABKjATIzUzFRQGIzUyNjV8TYxIRCUoAhGLmTZDMTElAAAC//QAMwG9AgMAMABDAGkYAUACJwFAAikBQQQAbwADAAEAACuwALAAQQQAdgAVAD0AACsxGACwAEACKAFBBAALACQAHQAAK7AAQAJDAUEEAHcACQAxAAArsACwAEEEAG8AOgAkAAAruAAJsAA/QAUCAw8QBLABKjATJzcXNjY3MjYzMjIzFhYXNxcHFhYVFAYHBgYHFwcnBgYHIiIjIiYnByc3JiY1NDY3FyIGBxQGFRQWMzI2NTQ0NSYmIx4qRikUMRoGDAYEBwMcNRMpSCwPFAwOAgUCLEgpFjgcAwUDHz0YKUYqExERE7UrMQUBNTYyMQM2MwGRKkgqDQ8CAQIPDipIKho/IxY0GgQHBCpFKQ4QARAPKUUqID4eHjsaDjghBAcEKkE+JgIEAidAAAIACQGfARsCnAAEAAkAPRgBQAIIAUADBgkCQQQAaQAHAAUAACtAAgMBQAMBBAJBBABpAAIAAAAAKzEYALgAAbABP0AEAgYHA7ABKjATNTMVIzM1MxUjCWhop2trAZ/9/f39AAAD//T/wwG9Ai0AIwAzAD8AaRgBsABAAzI1AkEEAH4AEAAxAAArQAYlMzQ+PwVAAgcBQQQAkgAkAAYAACsxGACwALAAQQQAaAAKADsAACuwALAAQQQAaAArABoAACu4AAqwAD9AAw0PArABKrgAILAEP0ADGiICsAEqMDcmJicmNDU1NDYzMhYXNxcHFhYVFRQGByIGIyIiIyYmJwcnNzcVFBYXMjIzMjI3NjY1NQc1NzQmJyIiIyIGFRUsBgYBAWBVGj4hMEE6CwpiOgcNBwEDASZEDzA/OIQWDQEDAQIFAg4XVlYYDwEDARAaSAwjEw4bC6o8WAoLRipWECYkuFlLBgEBEg1NKltaIxIVAgEDGBSVeUF3HB0CGRSFAAEAF//4AZECpQAzAHMYAUACEQGwAEEEAH4AEAAUAAArMRgAQAQXMjMDsABBBAALAAAAFAAAK7AAsABBBABiAAQAKwAAK7AAsABBBABiACUAJAAAK7gAMbAAP0AEAQcoA7ABKrgABLABP0ABALABKrgAALAEP0AFFBcyMwSwASowNxE0NjMyFhUUBgcGBgcWFhUVBgYjIiYnNTIWMxYWMzI2NTQmIzUyNjU0JiMiBgcGFBURIxdmT1ZhDCMFCwYgMwQ+Pw4jEwIEAQQIAhgNGSEcEBsREg4CAZICAg9EUFFKNDcXAwYDCURfIFhgBgRoAQEBNDhLJ2EnNholHhIIDwb+DQAAAgBI/2EA4wH1AAYACwAzGAEYAEACCQFAAwoLAkEEAJQACAAHAAAruAAIsAA/QAIJAbABKrgAAbAEP0ACBAGwASowFzUTMxMVIxE1MxUjSCJUJZubm5+oARn+56gCAJSUAAAC/+YAAgKcAqUAEAAVAFgYARgAQAIGAUAFCBEUFQRBBACEAAUABwAAK0ACAgFAAhMBQQQAaAABABIAACu4AAOwAD9AAgQBsAEquAABsAE/QAICAbABKrgAALAEP0AFCwwPEASwASowJxMhFSMVMxUjFTMVITUjByMBESMDMxrtAcLDtbXK/pt5Kq4BUQdNVAICo4aAhJWEi4sBGQEg/uAAA//9/7wCBQLkACYAMgA/AHkYAUACFwFABDE0NQNBBAChABYAMAAAK0ADPj8CQAIEAUEEAJoAMwADAAArMRgAsACwAEEEAHwACgA4AAArsACwAEEEAHwALQAdAAAruAA+sAA/QAUEFjQ1BLABKrgAELABP0ADChICsAEquAAdsAQ/QAMjJQKwASowNyYmNRE0NjcyNjMyMjMWFhc3FwcWFhURFAYHIiIjIiInJiYnByc3NxQWFzIyMzI2NTUHJzc1NCYjIiIjBgYVFTsQDHRGBw0HAwUDJkUUMVZGCwN8SgIDAQUJBSA8GDFMPoUhFAEDARIeagdxIBQBAQEWJE8aPzsBBGhgBwECFRJWKngQNCX+0GFSAQEBDQxUKmlhHCECGhfMvl3MEykkASYd6AADABP/8wKGAg0AZgB3AIIARRgBGABAA3mCAkADZWYCQQQAYgB4AAAAACuwALAAQQQAYgBVADwAACu4AFuwAD9AA1VeArABKrgAG7AEP0ADHiQCsAEqMCUVFBYXMjIzMjIzNjY1NTMUFhUUFBUUBgciBiMiJicGBgcGBiMiJjUwNjU0NjE2Njc2Njc2NjU0JiciIiMiBiMGBhUwFhUUFjEjNCY1NCY1NDY3MjIzMjIXFhYXNjYzMhYXFhYVFSMnBgYHBgYVFBYzMjYzNjY1NTczNDQ1JiYjIgYVAZccEAEBAQEBARAajAFiOgcNByxNDRUzGg0aDTtfAQEDSy0MFwsgLRwQAQEBAgUCERwBAZMBAXNFAQEBBQkFIj8WFT4iBw0HO2PvjA8ZChoXGRACBQITHoxjARAgIBLjTxoiAgIlJwwDBgMHDAVKRwcBHRwTGQcDA0pIAwEBA0xAEAQGBAkaGxkdAQEEJSADAQEDAwUDAwUDUkkBAQITDxIUAQEGS0WSDgYLBQ4iHhoaAQQiG1ZUBQkEIDY5LwACAAkBnwEbApwABAAJAD0YAUACCAFAAwYJAkEEAGkABwAFAAArQAIDAUADAQQCQQQAaQACAAAAACsxGAC4AAGwAT9ABAIGBwOwASowEzUzFSMzNTMVIwloaKdrawGf/f39/QAAAgAXAGoBkQHEAAcADwAAExcVJzU3FQczFxUnNTcVB2Nbp6db1Fqnp1oBGzh5cIBqeDE4eXCAangxAAIAHv+EAZECZQAtADcAQxgBGABAAioBQAIwAUEEAFsAKQAvAAArsACwAEEEAFsADgAfAAAruAAAsAA/QAQpKi0DsAEquAAisAQ/QAIfAbABKjABFhYXFBQVIzQmJzQmNQMyMhcyMjEyFjMyNjU1MwYGIwcjNyYmNTU0NjMzNzMHAxMjIgYVFRQWFwEwNikChAIEAToBAgEBAQIDASEUhAVXcBVUHCQ2YkkTFVQVhzoMFCECBQH1FGA2AwcDHiMPAQEB/r4BAS4gMZdAcX4FWEO4UFJpcP5nAUMfH78VIRAAAf/mAAIBxAKlABkAXBgBGABABAgQEQNABAYSEwNBBAA4AAcABQAAK0AEBBQVA0AEAhYXA0EEADgAAwABAAAruAAMsAA/QAEAsAEquAAKsAE/QAQLDQ4DsAEquAAAsAQ/QAMYGQKwASowNzUjNTM1IzUzNQMzFzczAxUzFSMVMxUjFSN/TExMTJmuP0Gwm0xMTEyqAmE4KjojAYPa2v59IzoqOGEAAAH/+//zAZgCrABYAJgYAUACFgGwAEEEAIQAFQAXAAArsABAAlgBQQQAfgApAAAAACsxGACwALAAQQQAFgBLAEIAACuwALAAQQQAdwASABoAACuwALAAQQQAaAA1AEsAACtABAMmJwNABQEoKVgEQQQAOAACAAAAACu4AB2wAD9ABQwVFhcEsAEquAASsAE/QAEAsAEquABLsAQ/QAQ/Qk4DsAEqMBMjNTMmJicmJic0NDU0NDc2NjcyFhUVIzQmIyIGFRQWFxYWFxYWFzMVIxYWFRYWFRQGBzY2MzIWFxYWMzI2NxcGBiMiJicmJicmJiMiBgcnNjY3NjY1NCYnSE04AQEBDhcBAQVYa1ZhhB4cHhoIBQMFAwMFA4ByAQIBAT8vHzIVEh8ODhsNECMSHCI3Fg8eDgUJBRMoFhUyHiofKAkEAwUFASk4AQIBFEooAQMBBQkFPmkCd2ARPzElHBEnFAgSCAoSCDgECQUHDgU0VR4PDAcDBAcREm8QDQQDAQIBBAcJC2ENPiMNGQwOGwoAAAIAEP9bAZgCrABZAHEAUhgBsACwAEEEAHYAcAAMAAArMRgAsACwAEEEAGgANwBGAAAruAAxsAA/QAc9Pj9ATE0GsAEquAA3sAE/QAEAsAEquAATsAQ/QAUGDA0fBLABKjAlFhYXFhYVFAYjIiY1MxQUFQYUFRQWFzIyMzIyNzY2NTQmJyYmJyYmNTQ2NzY2NyYmNTQ2NzY2MzIWFxYWFRUjNTQmJyYiIyIiIwYGFQcUFBcWFhcWFhUUBgcnNjY1NCYnJiYnJwYGBwYGFRQUFxYWFxcBUw8UBQQDY1NJZX0BHhMBAwECAwIPGSAYDiEQLUsBAQUhHhYYAQEIU0dZTgcBAX0VDAMEAgEDAQ8YAQEESSotSxwpTQ0NAgMDCwdrBgsDAwMBAQoHcnEQIxIMGApBYlBeAQIBAgIBHCACAQIaFhYlEQoVDB5XSAcNBx85ERAzHAYMBjNVRysGDQYQBxQVAwECFQ8EAgMBGzcgIlM2MUEVRgsXDAUKBQcOBlQGDwgGCwUBBAEIDgVdAAMAAgD/APgCswAEABMAIgBrGAFAAxUiAkADBhMCQQQAYQAUAAUAACtABAMMDQNAAhwBQQQAXQACABsAACsxGACwALAAQQQAPQAYABAAACuwALAAQQQAPQAJAB8AACu4AAWwAD9ABQ0TFRsEsAEquAAJsAE/QAIfAbABKjA3NTMVIyc1NDYzMhYVFRQGIyImNTcVFBYzMjY1NTQmIyIGFQnv7wc9OTpGPzo0SWESCgsREQsKEv9NTehpKTotL3BAMixGcH4SFBQSfhAPDxAAAwACAPgA/wKzAAQALgBCAGYYAUACNQGwAEEEAGEAIwARAAArQAIrAUADQUICQQQAXQAqAC8AACsxGACwALAAQQQAQwAnACAAACuwALAAQQQAQwA7AAsAACu4AC+wAD9ABRE1QUIEsAEquAAnsAE/QAIgAbABKjA3NTMVIzcGBgcGIiMiIiMmJjU0Njc2Njc2NjU0JicmIiMiBhUjNDYzMhYVFRcjJycGBgcGBhUUFhcyMjMyMjc2NjU1Cfb2mQciEwMFAwEBASA2Mh4RIQwICg8KAQMCDBRaRDk1PQdWBwcJDwYNDRAJAQMBAQICCA34RkaZEhYCAQEvLicsDAgKBQMIBBESAgEUEi87Ji/UHCN5BQoEChQODxICAQEPC0YAAAAAAAAAAAAAAAAAAAACAAEAAAAAABQAAwABAAABGgAAAQYAAQEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGEAAGNkAGYAAGlqAAAAAABwAHJzAAAAAHh5ent8fX5/gIEAg4SFhgAAAIqLjAAAAAAAAAAAAJYAAAAAAACdngAAAKKjAAAAAACpAAADrK2uALAAsrO0AAAAAAAAALy9vgAAAAAAAADGxwDJygDMzQAAAADSANTVAAAAAAAAAAAAAAAABARmAAEAugCAAAYAOgB+AP8BBwERARsBHwExAToBRAFIAVUBWwFlAXEBfgGSAroCxwLJAtwDkwOYA6MDpgOpA7EDtQPAA8QDxiAUIBogHiAiICYgMCA6IDwgfyCjIKchIiGVIagiAiIGIg8iEiIVIhoiHyIpIisiSCJhImUjAiMQIyElACUCJQwlECUUJRglHCUkJSwlNCU8JWwlgCWEJYgljCWTJaAlrCWyJbolvCXEJcsl2SY8JkAmQiZgJmMmZiZr8AL//wAAACAAoAECAQwBGAEeATABOQE9AUcBUAFYAV4BbgF4AZICugLGAskC2AOTA5gDowOmA6kDsQO0A8ADwwPGIBMgFyAcICAgJiAwIDkgPCB/IKMgpyEiIZAhqCICIgYiDyISIhUiGSIeIikiKyJIImAiZCMCIxAjICUAJQIlDCUQJRQlGCUcJSQlLCU0JTwlUCWAJYQliCWMJZAloCWsJbIluiW8JcQlyiXYJjomQCZCJmAmYyZlJmrwAP///+MAAAAAAAAALv/ZAAAAEQAAAAkAAAAAAAAAAAAA/xT+JAAA/hAAAP17/Xf89v1q/Pb9YP1e/Nv9Uf1QAAAAAAAAAADgheCV4ITgz+CN4FPgZt9qAADfdN6W3qLei97c3qYAAAAA3vXecd5fAADeMN4A3hDeAdxn3GbcXdxa3FfcVNxR3ErcQ9w83DXcItus26nbptuj26DbZdt323PbbNtr22QAANtR2vra99r22tna19rW2tMAAAABAAAAuAF2AYAAAAAAAYYAAAGGAAABkgGcAaIBsAG2AAAAAAG+AAABvgAAAAAAAAAAAAAAAAAAAAAAAAAAAbIBtAG6Ab4AAAAAAAAAAAAAAAAAAAAAAbIAAAAAAAAAAAAAAAABsAGyAAAAAAAAAa4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABegAAAAAAAAAAAAAAAAAAAAABbAAAAAMAowCEAIUAvACWAOcAhgCOAIsAnQCpAKQBBACKAQcBCACTAPEA8gCNAJcAiAEJAN0A8ACeAKoA9ADzAPUAogCsAMgAxgCtAGIAYwCQAGQAygBlAMcAyQDOAMsAzADNAOgAZgDSAM8A0ACuAGcA7wCRANUA0wDUAGgA6gDsAIkAagBpAGsAbQBsAG4AoABvAHEAcAByAHMAdQB0AHYAdwDpAHgAegB5AHsAfQB8ALcAoQB/AH4AgACBAOsA7QC5AT8BQAFBAUIA/AD9AP4A/wFDAUQBRQEAAPkA1gFMAU0BZQFmAOEA4gFOAU8BUgFTAK8AsAFUAVUBKwFWAVcBWAD6APsA4wDkAVkBWgFbAVwBXQFeAWABXwC6AWEBYgFjAWQA5QDmANgA4ADaANsA3ADfANcBAwCyAQoAtQC2AMMAswC0AMQAggDBAQYBFwEYAQEBGQEaARsAwgClAJIBHQCPAR8AuAEkANEAvwDAAAEAAAAAAAB4ZQM1Xw889QAJA+gAAAAAAAAAAAAAAAAAAAAA/6D/OgLdAuQAAAAFAAEAAQAAAAAAAQAAAsj/WgCWAu//oP+pAs0AAQAAAAAAAAAAAAAAAAAAAY8AAAAAAAAAAAHVAAAB1QAAATsAQQE7AAkBuQACAbkABwLvABACYAAmAPwALwD8AAoA/AAMAbkALAG5AAkBOwBIATsAHgE7AE8A/P/iAbkAEAG5ABcBuQAJAbkABwG5//sBuQAVAbkAFwG5AAkBuQAQAbkAEAD8ADYA/AAvAbkAFwG5AAkBuQAeAbkAAgLvABwB+P/9AfgAHwH4ABgB+AAmAbkAHgG5ACUB+AAYAfgAGAD8ACgBjwAAAfgAHwGPABcCxgAsAfgAHwH4AB8B+AAmAfgAHwH4AB8BuQAAAbkACQH4AB8CDQAHAsYAAgINAAcCDQAAAY//+wD8ACEA5/+gAPwABQHVAAABuf/7APwANgG5ABABuQAeAbkAJQG5AB4BuQAXATsAEAG5ABcBuQAeAPwALwD8AAwBuQAXAPwAKAKKABwBuQAlAbkAJQG5AB4BuQAXATsAJQGPAAkBOwAJAbkAHgGkAAUCYAAAAY//+wGP//sBZQAQAPz/8QDnADMA/P/wAdUAAAAAAAAB1QAAAXoADAAAAAAB4//+AAAAAAAAAAAB1QAAAaT/4gAAAAAAAAAAAAAAAAAAAAAAAAAAAdUAAAAAAAAB1QAAAdUAAAAAAAAAAAAAAAAAAAAAAAAB1QAAAdUAAAHVAAABpAAvAdUAAAHVAAAB1QAAAWUAJQHVAAAB1QAAAAAAAAHVAAABuQAXAbkAJQHVAAAAAAAAAAAAAAAAAAAA/AAvAbn/9AE7AAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbn/9AHVAAAAAAAAAAAAAAAAAAAB1QAAAdUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbkAFwAAAAAAAAAAATsASALG/+YB+P/9AAAAAAKKABMAAAAAAdUAAAHVAAAB1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE7AAkBuQAXAdUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuQAeAdUAAAAAAAABuf/mAbn/+wAAAAAB1QAAAbkAEAAAAAAAAAAAAAAAAAAAAAAB1QAAAAAAAAHVAAAB1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERAAIAAAAAAAAAAAAAAAAB1QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1QAAAAAAAQAABg4AAQEAAwAABwMAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMAAwAAAAMACwAAAAMAHgAAAAMAHgAAAAMAHgAAAAMAHgAAAAMAHgAAAAMAHgAAAAMAHgAAAAMALgAAAAMAQwAAAAMASAAAAAMASAAAAAMAbQAAAAMAdwAAAAMAeQAAAAMAgQAAAAMAgQAAAAMAgQAAAAMAgQAAAAMAhgAAAAMAkAAAAAMAkAAAAAMAkQAAAAMAlwAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMArgAAAAMAvAAAAAMAvAAAAAMAvAAAAAMA2AAKAAMA4QAAAAMA4QAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAAMA4gAAAA8AA/7YACUATwAAACUAUgAAACYAUgAAACsASAAAADYASAAAAEQAEAAAAEQARgAAAEcAEAAAAEgAUQAAAEgAVwAAAEwARgAAAEwAUwB0AE4A2AAAAE4A2AAAAE8AWQAAAFEARwAAAFYASAAAAFcANgAAAGIA2AAAAIUAAwAAAM0AAwAAANgAAwABANgAAwAAANgAAwAAANgAAwAAANgAAwAAANgAAwAAANgAAwAAANgACwAAANgAFwAAANgAMwAAANgAOwACANgARQAAANgAdQAAANgAgQAAANgAgQAAANgAgQAAANgAgQAAANgAgQAAANgAhgAAANgArgAAANgArgAAANgArgAAANgArgAAANgArgAAANgAswAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAANgA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC4AAACSAAABYAAAArQAAAPsAAAFjAAABewAAAZgAAAG0gAABw4AAAd6AAAHzgAAB+gAAAgCAAAIIAAACNAAAAlEAAAKFgAAC0YAAAvaAAAM2gAADb4AAA44AAAPNgAAECAAABB6AAAQ/AAAESQAABFmAAARjgAAEn4AABSIAAAVAAAAFa4AABZsAAAW9AAAF3QAABfwAAAY1AAAGTgAABlUAAAZ6AAAGhwAABo8AAAadgAAGqYAABtUAAAb9gAAHNAAAB2oAAAfCgAAH4gAAB/WAAAf/gAAIDoAACBwAAAg4AAAIUwAACGUAAAhtAAAIhAAACIQAAAiLAAAIoQAACOwAAAkkgAAJTYAACYWAAAmygAAJ14AAChuAAApBgAAKXAAACoOAAAqQAAAKlwAACtIAAAr5gAALIYAAC1WAAAuLAAALpwAAC+aAAAwTAAAMOAAADEIAAAxQgAAMXQAADHWAAAyNAAAMvQAADMQAAAzhgAAM4YAADOGAAAzhgAAM74AADO+AAA0agAANGoAADRqAAA0agAANJAAADSQAAA0kAAANJAAADSQAAA0kAAANJAAADSQAAA0kAAANJAAADSQAAA0kAAANJAAADSQAAA0kAAANJAAADSQAAA0rAAANKwAADSsAAA0rAAANWIAADViAAA1YgAANWIAADViAAA2PAAANnYAADZ2AAA2dgAANnYAADZ2AAA21gAAOAQAADhoAAA4aAAAOGgAADhoAAA4aAAAOGgAADhoAAA4aAAAOGgAADhoAAA4aAAAOGgAADhoAAA4aAAAOGgAADhoAAA4aAAAOYQAADmEAAA5hAAAOYQAADmEAAA5hAAAOYQAADmEAAA5hAAAOYQAADmEAAA5hAAAOogAADqIAAA6iAAAOuoAADuKAAA8uAAAPLgAAD5QAAA+UAAAPlAAAD5QAAA+UAAAPlAAAD5QAAA+UAAAPlAAAD5QAAA+UAAAPlAAAD60AAA+7gAAPu4AAD7uAAA+7gAAPu4AAD7uAAA+7gAAPu4AAD7uAAA/zgAAP84AAD/OAABAdAAAQgYAAEIGAABCBgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAEOSAABDkgAAQ5IAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAERgAABEYAAARGAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWAAABFgAAARYAAAEWA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BHBsdXMFY29tbWEGaHlwaGVuBnBlcmlvZAVzbGFzaAR6ZXJvA29uZQN0d28FdGhyZWUEZm91cgRmaXZlA3NpeAVzZXZlbgVlaWdodARuaW5lBWNvbG9uCXNlbWljb2xvbgRsZXNzBWVxdWFsB2dyZWF0ZXIIcXVlc3Rpb24CYXQBQQFCAUMBRAFFAUYBRwFIAUkBSgFLAUwBTQFOAU8BUAFRAVIBUwFUAVUBVgFXAVgBWQFaC2JyYWNrZXRsZWZ0CWJhY2tzbGFzaAxicmFja2V0cmlnaHQLYXNjaWljaXJjdW0KdW5kZXJzY29yZQVncmF2ZQFhAWIBYwFkAWUBZgFnAWgBaQFqAWsBbAFtAW4BbwFwAXEBcgFzAXQBdQF2AXcBeAF5AXoJYnJhY2VsZWZ0A2JhcgpicmFjZXJpZ2h0CmFzY2lpdGlsZGUJQWRpZXJlc2lzBUFyaW5nCENjZWRpbGxhBkVhY3V0ZQZOdGlsZGUJT2RpZXJlc2lzCVVkaWVyZXNpcwZhYWN1dGUGYWdyYXZlC2FjaXJjdW1mbGV4CWFkaWVyZXNpcwZhdGlsZGUFYXJpbmcIY2NlZGlsbGEGZWFjdXRlBmVncmF2ZQtlY2lyY3VtZmxleAllZGllcmVzaXMGaWFjdXRlBmlncmF2ZQtpY2lyY3VtZmxleAlpZGllcmVzaXMGbnRpbGRlBm9hY3V0ZQZvZ3JhdmULb2NpcmN1bWZsZXgJb2RpZXJlc2lzBm90aWxkZQZ1YWN1dGUGdWdyYXZlC3VjaXJjdW1mbGV4CXVkaWVyZXNpcwZkYWdnZXIGZGVncmVlBGNlbnQIc3RlcmxpbmcHc2VjdGlvbgZidWxsZXQJcGFyYWdyYXBoCmdlcm1hbmRibHMKcmVnaXN0ZXJlZAljb3B5cmlnaHQJdHJhZGVtYXJrBWFjdXRlCGRpZXJlc2lzAkFFBk9zbGFzaAlwbHVzbWludXMDeWVuAm11C29yZGZlbWluaW5lDG9yZG1hc2N1bGluZQJhZQZvc2xhc2gMcXVlc3Rpb25kb3duCmV4Y2xhbWRvd24GZmxvcmluDWd1aWxsZW1vdGxlZnQOZ3VpbGxlbW90cmlnaHQIZWxsaXBzaXMGQWdyYXZlBkF0aWxkZQZPdGlsZGUCT0UCb2UGZW5kYXNoBmVtZGFzaAxxdW90ZWRibGxlZnQNcXVvdGVkYmxyaWdodAlxdW90ZWxlZnQKcXVvdGVyaWdodAl5ZGllcmVzaXMJWWRpZXJlc2lzCGZyYWN0aW9uCGN1cnJlbmN5DWd1aWxzaW5nbGxlZnQOZ3VpbHNpbmdscmlnaHQCZmkCZmwJZGFnZ2VyZGJsDnBlcmlvZGNlbnRlcmVkDHF1b3RlZGJsYmFzZQtwZXJ0aG91c2FuZAtBY2lyY3VtZmxleAtFY2lyY3VtZmxleAZBYWN1dGUJRWRpZXJlc2lzBkVncmF2ZQZJYWN1dGULSWNpcmN1bWZsZXgJSWRpZXJlc2lzBklncmF2ZQZPYWN1dGULT2NpcmN1bWZsZXgGT2dyYXZlBlVhY3V0ZQtVY2lyY3VtZmxleAZVZ3JhdmUIZG90bGVzc2kKY2lyY3VtZmxleAV0aWxkZQZtYWNyb24FYnJldmUJZG90YWNjZW50BHJpbmcHY2VkaWxsYQxodW5nYXJ1bWxhdXQGb2dvbmVrBWNhcm9uBkxzbGFzaAZsc2xhc2gGU2Nhcm9uBnNjYXJvbgNFdGgDZXRoBVRob3JuBXRob3JuB29uZWhhbGYKYXJyb3dyaWdodAVob3VzZQZlbmRhc2gJc2Z0aHlwaGVuCWZpbGxlZGJveAZidWxsZXQAuAH/hQAAAVoBkAAFAAQC7gLuAAAAyALuAu4AAAEsADIA9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBVEVDAEAAIPACArP/WgCWAuQAxwAA) format(\x22Helvetica-Condensed-Black-Se\x22); }\nbody { width: ",[0,750],"; height: -webkit-fit-content; height: -moz-fit-content; height: fit-content; font-family: Helvetica,\x22Helvetica Neue\x22,\x22PingFang SC\x22,\x22Hiragino Sans GB\x22,\x22Microsoft YaHei\x22,\x22\\5FAE\\8F6F\\96C5\\9ED1\x22,Arial,sans-serif; font-size: 16px; font-style: normal; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; background: #f9f9f9; }\n.",[1],"xuni-swiper { height: auto !important; }\n.",[1],"xuni-swiper .",[1],"uni-swiper-wrapper { overflow: unset !important; }\n.",[1],"xuni-swiper .",[1],"uni-swiper-wrapper wx-uni-swiper-item { overflow: unset !important; }\n",],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/avatar/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"x-else-user { height: ",[0,75],"; color: #575757; margin-bottom: ",[0,20],"; }\n.",[1],"x-else-user .",[1],"x-else-user-class { float: left; margin-left: ",[0,10],"; }\n.",[1],"x-else-user .",[1],"x-else-user-class .",[1],"x-else-user-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"x-else-user .",[1],"x-else-user-class .",[1],"x-else-user-font { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; margin-top: ",[0,3],"; }\n.",[1],"x-else-user .",[1],"x-else-user-class .",[1],"x-else-user-font wx-text { color: #909090; font-size: ",[0,20],"; }\n.",[1],"x-else-user .",[1],"x-else-user-class wx-text { float: left; color: #575757; font-size: ",[0,30],"; padding: ",[0,0]," ",[0,6],"; }\n.",[1],"x-else-user .",[1],"x-else-user-tabs { float: right; padding: ",[0,16],"; font-size: ",[0,30],"; }\n.",[1],"x-else-user wx-image { float: left; width: ",[0,75],"; height: ",[0,75],"; border-radius: ",[0,50],"; }\n",],undefined,{path:"./components/avatar/index.wxss"});    
__wxAppCode__['components/avatar/index.wxml']=$gwx('./components/avatar/index.wxml');

__wxAppCode__['components/card/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"x-card-solid { border-top: 1px solid #FCFCFC; }\n.",[1],"x-card { padding: ",[0,40],"; background: #FFFFFF; }\n.",[1],"x-card .",[1],"x-if-card { height: ",[0,170],"; }\n.",[1],"x-card .",[1],"x-card-header { float: left; position: relative; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"title { margin-top: ",[0,7],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"title wx-text { color: #222222; font-size: ",[0,32],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"user { height: ",[0,40],"; margin-top: ",[0,18],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"user wx-image { float: left; width: ",[0,40],"; height: ",[0,40],"; border-radius: ",[0,50],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"user wx-text { float: left; color: #575757; font-size: ",[0,24],"; padding: ",[0,3]," ",[0,6],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"tips { height: ",[0,28],"; margin-top: ",[0,25],"; line-height: ",[0,29.45],"; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"tips .",[1],"tip { float: left; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"tips .",[1],"time { float: right; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"tips wx-image { width: ",[0,28],"; height: ",[0,28],"; float: left; will-change: transform; }\n.",[1],"x-card .",[1],"x-card-header .",[1],"tips wx-text { float: left; color: #7f7f7f; font-size: ",[0,20],"; margin: 0 ",[0,5],"; }\n.",[1],"x-card .",[1],"x-card-image { float: right; }\n.",[1],"x-card .",[1],"x-card-image wx-image { width: ",[0,233],"; height: ",[0,170],"; border-radius: ",[0,15],"; }\n.",[1],"x-card .",[1],"x-else-card-image wx-image { width: ",[0,665],"; height: ",[0,485],"; border-radius: ",[0,15],"; }\n.",[1],"x-card .",[1],"x-else-card-header { position: relative; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"title { margin-top: ",[0,7],"; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"title wx-text { color: #222222; font-size: ",[0,32],"; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"tips { height: ",[0,28],"; margin-top: ",[0,25],"; line-height: ",[0,29.45],"; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"tips .",[1],"tip { float: left; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"tips .",[1],"time { float: right; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"tips wx-image { width: ",[0,28],"; height: ",[0,28],"; float: left; will-change: transform; }\n.",[1],"x-card .",[1],"x-else-card-header .",[1],"tips wx-text { float: left; color: #7f7f7f; font-size: ",[0,20],"; margin: 0 ",[0,5],"; }\n",],undefined,{path:"./components/card/index.wxss"});    
__wxAppCode__['components/card/index.wxml']=$gwx('./components/card/index.wxml');

__wxAppCode__['components/index.wxss']=setCssToHead([".",[1],"header { width: 92%; padding: 0 4%; height: ",[0,97.2],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: fixed; top: 0; z-index: 10; background-color: #F8F8F8; top: var(--status-bar-height); }\n",],undefined,{path:"./components/index.wxss"});    
__wxAppCode__['components/index.wxml']=$gwx('./components/index.wxml');

__wxAppCode__['components/navbar/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"white { background-color: #FFFFFF; -webkit-box-shadow: 0 ",[0,5]," ",[0,10]," 0 #f8f8f8; box-shadow: 0 ",[0,5]," ",[0,10]," 0 #f8f8f8; }\n.",[1],"header { width: 92%; padding: 0 4%; height: ",[0,97.2],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; top: 0; z-index: 10; position: fixed; top: var(--status-bar-height); }\n.",[1],"header .",[1],"left-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"header .",[1],"left-image wx-image { width: ",[0,50],"; height: ",[0,50],"; }\n.",[1],"header .",[1],"tabs { width: 90%; height: ",[0,60],"; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,28],"; }\n.",[1],"header .",[1],"tabs .",[1],"icon { height: ",[0,60],"; margin-right: ",[0,5],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; font-size: ",[0,42],"; color: #ffc50a; }\n.",[1],"header .",[1],"tabs wx-swiper { width: 100%; height: 100%; }\n.",[1],"header .",[1],"search { width: ",[0,60],"; height: ",[0,60],"; right: 0; position: relative; }\n.",[1],"header .",[1],"search .",[1],"icon { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; position: absolute; top: 0; right: 0; width: ",[0,60],"; height: ",[0,60],"; font-size: ",[0,40],"; color: #5e5e5e; }\n",],undefined,{path:"./components/navbar/index.wxss"});    
__wxAppCode__['components/navbar/index.wxml']=$gwx('./components/navbar/index.wxml');

__wxAppCode__['components/status/index.wxss']=setCssToHead([".",[1],"white { background-color: #FFFFFF; }\n.",[1],"status { width: 100%; height: 0; position: fixed; z-index: 10; top: 0; height: var(--status-bar-height); }\n",],undefined,{path:"./components/status/index.wxss"});    
__wxAppCode__['components/status/index.wxml']=$gwx('./components/status/index.wxml');

__wxAppCode__['components/tag/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"x-tag { height: ",[0,45],"; padding: 0 ",[0,10],"; background: #4382ff; border-radius: ",[0,5],"; }\n.",[1],"x-tag wx-text { color: #FFFFFF; }\n",],undefined,{path:"./components/tag/index.wxss"});    
__wxAppCode__['components/tag/index.wxml']=$gwx('./components/tag/index.wxml');

__wxAppCode__['components/wuc-tab/wuc-tab.wxss']=setCssToHead([".",[1],"_div, wx-scroll-view, wx-swiper { -webkit-box-sizing: border-box; box-sizing: border-box; }\n.",[1],"wuc-tab { white-space: nowrap; }\n.",[1],"wuc-tab-item { height: ",[0,90],"; display: inline-block; line-height: ",[0,90],"; margin: 0 ",[0,10],"; padding: 0 ",[0,20],"; color: #787878; }\n.",[1],"wuc-tab-item.",[1],"cur { border-bottom: ",[0,7]," solid #3d7eff; border-radius: ",[0,3],"; font-weight: 600; }\n.",[1],"wuc-tab.",[1],"fixed { position: fixed; width: 100%; top: 0; z-index: 1024; -webkit-box-shadow: 0 ",[0,1]," ",[0,6]," rgba(0, 0, 0, 0.1); box-shadow: 0 ",[0,1]," ",[0,6]," rgba(0, 0, 0, 0.1); }\n.",[1],"flex { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"text-center { text-align: center; }\n.",[1],"flex-sub { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; }\n.",[1],"text-blue{ color:#0081ff; }\n.",[1],"text-white{ color:#ffffff; }\n.",[1],"bg-white{ background-color: #ffffff; }\n.",[1],"bg-blue{ background-color: #0081ff; }\n.",[1],"text-orange{ color: #f37b1d }\n.",[1],"text-xl { font-size: ",[0,36],"; }\n",],undefined,{path:"./components/wuc-tab/wuc-tab.wxss"});    
__wxAppCode__['components/wuc-tab/wuc-tab.wxml']=$gwx('./components/wuc-tab/wuc-tab.wxml');

__wxAppCode__['pages/Article/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\n.",[1],"details-content { width: 80%; height: ",[0,2000],"; margin: ",[0,-80]," auto; position: relative; background: rgba(255, 255, 255, 0.9); border-top-left-radius: ",[0,30],"; border-top-right-radius: ",[0,30],"; padding: ",[0,30],"; }\n.",[1],"details-content .",[1],"avatar { top: ",[0,15],"; position: relative; }\n.",[1],"details-content .",[1],"title { top: ",[0,55],"; margin-top: ",[0,50],"; font-size: ",[0,30],"; }\n.",[1],"details-content .",[1],"subtitle { top: ",[0,55],"; margin-top: 50px; font-size: ",[0,30],"; }\nwx-image { width: ",[0,750],"; height: ",[0,540],"; will-change: transform; }\n",],undefined,{path:"./pages/Article/index.wxss"});    
__wxAppCode__['pages/Article/index.wxml']=$gwx('./pages/Article/index.wxml');

__wxAppCode__['pages/index/index.wxss']=setCssToHead(["@charset \x22UTF-8\x22;\nbody { position: relative; }\n@font-face { font-family: \x27HMfont-home\x27; src: url(\x22data:application/x-font-woff2;charset\x3dutf-8;base64,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\x3d\x3d\x22) format(\x22woff2\x22); }\n.",[1],"icon { font-family: \x27HMfont-home\x27 !important; font-size: ",[0,60],"; font-style: normal; color: #000000; }\n.",[1],"icon.",[1],"yuyin:before { content: \x27\\E64E\x27; }\n.",[1],"icon.",[1],"tongzhi:before { content: \x27\\E729\x27; }\n.",[1],"icon.",[1],"search:before { content: \x27\\E628\x27; }\n.",[1],"icon.",[1],"location:before { content: \x27\\E611\x27; }\n.",[1],"icon.",[1],"xia:before { content: \x27\\E689\x27; }\n.",[1],"content { margin: ",[0,97.2]," auto; position: relative; top: var(--status-bar-height); }\n.",[1],"swiper { width: 100%; margin-top: ",[0,10],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"swiper .",[1],"swiper-box { width: 92%; height: 30.7vw; overflow: hidden; border-radius: ",[0,15],"; -webkit-box-shadow: ",[0,0]," ",[0,8]," ",[0,25]," rgba(0, 0, 0, 0.2); box-shadow: ",[0,0]," ",[0,8]," ",[0,25]," rgba(0, 0, 0, 0.2); position: relative; z-index: 1; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper { width: 100%; height: 30.7vw; }\n.",[1],"swiper .",[1],"swiper-box wx-swiper wx-swiper-item wx-image { width: 100%; height: 30.7vw; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator { position: absolute; bottom: ",[0,20],"; left: ",[0,20],"; background-color: rgba(255, 255, 255, 0.4); width: ",[0,150],"; height: ",[0,5],"; border-radius: ",[0,3],"; overflow: hidden; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots { width: 100%; }\n.",[1],"swiper .",[1],"swiper-box .",[1],"indicator .",[1],"dots.",[1],"on { background-color: white; }\n.",[1],"text-xl { color: #222222 !important; }\n",],undefined,{path:"./pages/index/index.wxss"});    
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/tabBar/index.wxss']=undefined;    
__wxAppCode__['pages/tabBar/index.wxml']=$gwx('./pages/tabBar/index.wxml');

__wxAppCode__['pages/tabBar/literature.wxss']=undefined;    
__wxAppCode__['pages/tabBar/literature.wxml']=$gwx('./pages/tabBar/literature.wxml');

__wxAppCode__['pages/tabBar/periphery.wxss']=undefined;    
__wxAppCode__['pages/tabBar/periphery.wxml']=$gwx('./pages/tabBar/periphery.wxml');

__wxAppCode__['pages/tabBar/Popup.wxss']=undefined;    
__wxAppCode__['pages/tabBar/Popup.wxml']=$gwx('./pages/tabBar/Popup.wxml');

__wxAppCode__['pages/tabBar/user.wxss']=undefined;    
__wxAppCode__['pages/tabBar/user.wxml']=$gwx('./pages/tabBar/user.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
