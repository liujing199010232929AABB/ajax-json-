let json='{"name":"peter","age":30,"course":["php","java","js"],"isMarried":true}';
let obj=eval('('+json+')');
let str="alert('¹þ¹þ£¬ÎÒÊÇ»»ÈË');location.href='http://baidu.com'";
eval(str);
let json1='{"name":"peter","age":30,"course":["php","java","js"],"isMarried":true}';
let obj1=JSON.parse(json1);
for(key in obj1){console.log(obj1[key])}
delete obj1.age;

let obj2={"name":"peter","age":30,"course":["php","java","js"],"isMarried":true};
let json2=JSON.stringify(obj2);

let json_str=[10,20,30];
let json4=JSON.stringify(json_str);
