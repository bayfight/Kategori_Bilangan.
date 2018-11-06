var aaa = [aa,bb,cc,dd,ee,ff,gg,hh]
var aa = ['cacah']
var bb = ['negatif']
var cc = ['nol']
var dd = ['asli']
var ee = ['ganjil']
var ff = ['genap']
var gg = ['prima']
var hh = ['komposit']
kumpul = []
prima = []

function data(x) {
    // for(i = 0 ;i <= aaa.length;i++)
    if(x >= 0){
        kumpul.push(aa[0])
    }
    if(x < 0){
        kumpul.push(bb[0])
    }
    if(x == 0){
        kumpul.push(cc[0])
    }if(x > 0){
        kumpul.push(dd[0])
    }
    if(x%2 ==0){
        kumpul.push(ff[0])
    }if (x%2 == 1){
        kumpul.push(ee[0])
    }
    for(i=0 ; i <= x ; i++){
        if(x % i == 0){
            prima.push(i)
            }
            }
            if(prima.length < 3){
                kumpul.push(gg[0])
            }
            if(prima.length > 2){
                kumpul.push(hh[0])
            }
}
data(9)   
console.log(kumpul)
console.log(prima)