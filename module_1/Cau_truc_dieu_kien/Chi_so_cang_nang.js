function check() {
    let weight = parseInt(document.getElementById("cannang").value);
    let height = parseFloat(document.getElementById("chieucao").value);
    console.log(height);
    let Bmi = weight/Math.pow(height,2); // Math.pow hàm lũy thừa
    if (Bmi < 18){
        document.getElementById("result").innerHTML="chỉ số Bmi : "+
            Bmi+"<br><b>ốm quá rồi</b>"+"<img src='https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height='100'>"
    }else if (Bmi < 25.0) {
        document.getElementById("result").innerHTML="chỉ số Bmi : "+
            Bmi+"<br><b>bình thương nha</b>"+"<img src='https://img4.thuthuatphanmem.vn/uploads/2020/08/29/hinh-anh-dong-cute-dep_105546064.gif' width='100' height='100'>"

    }else if (Bmi < 30.0){
        document.getElementById("result").innerHTML="chỉ số Bmi : "+
            Bmi+"<br><b>béo quá béo rồi</b>"+" <img src='https://phunugioi.com/wp-content/uploads/2020/11/anh-dong-ga-di-cho-cute.gif' width='100' height='100'>"

    } else (
        document.getElementById("result").innerHTML="chỉ số Bmi : "+
            Bmi+"<br><b>siêu Béo</b>"+" <img src='https://thuthuatnhanh.com/wp-content/uploads/2020/04/anh-dong-meo-con-khoc-vi-bung-beo.gif' width='100' height='100'>"

    )

}