<?php
//header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
$schools = ['丐帮', '古墓派', '峨眉派'];
//echo json_encode($schools);die;
$option ='<option value="">请选择</option>';
foreach($schools as $key => $value){
    $option .="<option value='{$key}'>{$value}</option>";
}
echo $option;
