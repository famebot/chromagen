!function(l,h){"object"==typeof exports&&"undefined"!=typeof module?module.exports=h():"function"==typeof define&&define.amd?define(h):(l||self).chromagen=h()}(this,function(){var l=function(l,h){return Math.floor(Math.random()*(h-l+1))+l};return function(){var h,e=l(1,359),s=e>180?e-180:e+179;switch(e){case e<135:h=e+224;break;case e>224:h=e-223;break;default:var o=e+225;h=o>359?o-359:o}var a=l(80,100),n=l(64,80),t=l(0,24),r=l(48,64),i=l(84,92),u=l(28,36),m=n>76?68:84,d=t<8?16:0;return{hue:e,complement:s,analogous:h,saturation:a,xlight:i,lighter:m,lightness:n,midrange:r,lowmid:u,darkness:t,darker:d,huehsl:"hsl("+e+", "+a+"%, "+n+"%)",complementhsl:"hsl("+s+", "+a+"%, "+n+"%)",analogoushsl:"hsl("+h+", "+a+"%, "+n+"%)",huehslxlight:"hsl("+e+", "+a+"%, "+i+"%)",huehsllighter:"hsl("+e+", "+a+"%, "+m+"%)",huehslmid:"hsl("+e+", "+a+"%, "+r+"%)",huehsllowmid:"hsl("+e+", "+a+"%, "+u+"%)",huehsldark:"hsl("+e+", "+a+"%, "+t+"%)",huehsldarker:"hsl("+e+", "+a+"%, "+d+"%)",complementhslxlight:"hsl("+s+", "+a+"%, "+i+"%)",complementhsllighter:"hsl("+s+", "+a+"%, "+m+"%)",complementhslmid:"hsl("+s+", "+a+"%, "+r+"%)",complementhsllowmid:"hsl("+s+", "+a+"%, "+u+"%)",complementhsldark:"hsl("+s+", "+a+"%, "+t+"%)",complementhsldarker:"hsl("+s+", "+a+"%, "+d+"%)",analogoushslxlight:"hsl("+h+", "+a+"%, "+i+"%)",analogoushsllighter:"hsl("+h+", "+a+"%, "+m+"%)",analogoushslmid:"hsl("+h+", "+a+"%, "+r+"%)",analogoushsllowmid:"hsl("+h+", "+a+"%, "+u+"%)",analogoushsldark:"hsl("+h+", "+a+"%, "+t+"%)",analogoushsldarker:"hsl("+h+", "+a+"%, "+d+"%)"}}});
//# sourceMappingURL=chromagen.umd.js.map
