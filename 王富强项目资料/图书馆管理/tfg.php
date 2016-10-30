<?php
include "connect.php";

$sql = "select * from bookinfo order by id desc";

$result = mysqli_query($link, $sql);

while($row = mysqli_fetch_assoc($result)){

    $rec = $row['recommend'];
        //var_dump($rec);
    	if($rec == 1){

    		$rec= '是';
    		//var_dump($rec);
    	}else if($rec == 2){
    		$rec = '否';
    	}

    	// 如果单选按钮 则下面这样判断就可以了
    	$str = '';
    	if($row['book_category'] == 1){
            $str = $str.'计算机 ';
        }else if($row['book_category'] == 2){
            $str = $str.'文学 ';
        }else if($row['book_category'] == 3){
            $str = $str.'会计';
        }




    	$sayList[] = array(
    		'id'=>$row['id'],
    		'bookName'=>$row['book_name'],
    		'bookAuthor'=>$row['book_author'],
    		'recommend'=>$rec,
    		'category'=>$str,
    		'bookDesc'=>$row['book_desc']
        );


}
echo json_encode($sayList);