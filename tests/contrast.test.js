import{test}from'node:test';import assert from'node:assert/strict';
const lum=h=>{const c=h.match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;};
test('cinema and light catalog text palettes meet 4.5:1 contrast',()=>{for(const [fg,bg] of [['f5f2ec','111111'],['bcbab6','111111'],['171a0c','e8fd8c'],['181916','f0eee7'],['55594f','f0eee7'],['45600a','f0eee7']]){const[a,b]=[lum(fg),lum(bg)].sort((a,b)=>b-a);assert.ok((a+.05)/(b+.05)>=4.5,fg+' on '+bg);}});
