//����ʡ
var oProc = ["anhui","�Ϻ�","ɽ��"];
//ֱ������array ������
var oCity =[
    ["hefei","����","�ߺ�"],
    ["�ֶ�","����","����"],
    ["����","�ൺ","��ׯ"]
];
//������
var oDist = [
    [
        ["������","®����","��ɽ��"],
        ["�������","��ͬ��","��������"],
        ["jinghuqu","𯽭��","��ɽ��"]
    ],
    [
        ["�ֶ�1","�ֶ�2","�ֶ�3"],
        ["����1","����2","����3"],
        ["����1","����2","����3"]
    ],
    [
        ["������","������","������"],
        ["������","�б���","�����"],
        ["Ѧ����","������"," ỳ���"]
    ]
];
var oproc = document.getElementById("proc");
var ocity = document.getElementById("city");
var odist = document.getElementById("dist");
window.onload =function(){
    for(var i=0;i<oProc.length;i++){
        //����Ԫ�ؽڵ�
        var oOpt = document.createElement("option");
        //�ı��ڵ�
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


