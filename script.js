//11th method

function firstLast6(arr){
    if(arr[0]==6){
        return true;
    }
    if(arr[arr.length-1]==6){
        return true;
    }

    return false;
}


//12th method

function has23(x){
    for(var i=0; i<x.length; i++){
        if(x[i]==2 || x[i]==3){
            return true;
        }
    }
    return false;
}

//13th method
function fix23(x){
    for(var i=0 ;i<x.length; i++){
        if(x[i]==2 && x[i+1]==3){
            x[i+1]=0;
        }
    }
    return x;
}


//14th method
function countYZ(x){
    var count = 0;
    x = x.toLowerCase();
    for(var i=0; i<x.length; i++){
        if(x[i]=="y" && (x[i+1]==" "|| i==x.length-1)) {
            count = count + 1
        }
        if(x[i]=="z" && (x[i+1]==" "|| i==x.length-1)){
            count= count+1
        }

    }
    return count;
}
//15th method
function endOther(x,y){
    x = x.toLowerCase();
    y = y.toLowerCase();
    if(y.substring(y.length-x.length)==x) {
        return true;
    }

    if(x.substring(x.length-y.length)==y){
        return true;
    }

    return false;
}


//16th method
function starOut(x){
    y="";
    for(var i = 0; i<x.length; i++){
        if(!(x.substring(i,i+1)=="*" || x.substring(i+1,i+2)=="*" || x.substring(i-1,i)=="*")){
            y= y + x.substring(i,i+1);
        }

    }
    return y;
}
//17th method
function getSandwich(x) {
    var first = x.indexOf("bread");
    var last = x.lastIndexOf("bread");
    if(first == -1 || last== -1){
        return ""
    }

    if(last==first){
        return ""
    }

    return x.substring(first+5,last);

}

//18 method
function canBalance(x){
    var sum1 = 0;
    var sum2 = 0;
    for (var i = 0; i < x.length; i++) {
        sum1=sum1+x[i];
        for (var j = i + 1; j<x.length; j++) {
            sum2 = sum2 + x[j];
        }
        if (sum1 == sum2) {
            return true;
        }
        sum2=0;
    }
    return false;
}

//19th method
function countClumps(x){
    var numclumps = 0;

    for(var i=0; i<x.length; i++){

        if(x[i]==x[i+1]&&x[i+1]!=x[i+2]){
            numclumps = numclumps+1;
        }


    }return numclumps;

}

//20th method
function evenlySpaced(x,y,z) {

    if((z-y)==(y-x)){
        return true;
    }
    if((y-z)==(z-x)) {
        return true;
    }
    if((x-y)==(y-z)){
        return true;
    }

    if((z-x)==(x-y)){
        return true;
    }

    return false;
}




