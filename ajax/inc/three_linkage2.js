//声明省
var oProc = ["anhui","上海","山东"];
//直接声明array 声明市
var oCity =[
    ["hefei","淮南","芜湖"],
    ["浦东","闵行","浦西"],
    ["济南","青岛","枣庄"]
];
//声明区
var oDist = [
    [
        ["政务区","庐阳区","蜀山区"],
        ["田家庵区","大同区","九龙岗区"],
        ["jinghuqu","鸠江区","三山区"]
    ],
    [
        ["浦东1","浦东2","浦东3"],
        ["闵行1","闵行2","闵行3"],
        ["浦西1","浦西2","浦西3"]
    ],
    [
        ["历下区","天桥区","长清区"],
        ["市南区","市北区","李沧区"],
        ["薛城区","市中区"," 峄城区"]
    ]
];
var oproc = document.getElementById("proc");
var ocity = document.getElementById("city");
var odist = document.getElementById("dist");
window.onload =function(){
    for(var i=0;i<oProc.length;i++){
        //创建元素节点
        var oOpt = document.createElement("option");
        //文本节点
        var oTxt =document.createTextNode(oProc[i]);
        oOpt.appendChild(oTxt);
        oproc.appendChild(oOpt);
    }
};

function showCity(){
    if(oproc.value=="-1"){
        ocity.options.length=1;
        odist.options.length=1;
    }else{
        ocity.options.length=1;
        odist.options.length=1;
        var num=oproc.options.selectedIndex;
        for(var i=0;i<oCity[num-1].length;i++){
            var oOpt=document.createElement("option");
            var oTxt=document.createTextNode(oCity[num-1][i]);
            oOpt.appendChild(oTxt);
            ocity.appendChild(oOpt);
        }
    }
}

function showDist(){
    if(ocity.value =="-1"){
        odist.options.length=1;
    }else{
        odist.options.length=1;
        var numPro=oproc.options.selectedIndex;
        var numCity=ocity.options.selectedIndex;
        for(var i=0;i<oDist[numPro-1][numCity-1].length;i++){
            var oOpt=document.createElement("option");
            var oTxt=document.createTextNode(oDist[numPro-1][numCity-1][i]);
            oOpt.appendChild(oTxt);
            odist.appendChild(oOpt);
        }
    }
}


