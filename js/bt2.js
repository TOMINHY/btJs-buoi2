/**
 * Author: TO MINH Y
 * Function: Tính điểm trung bình của 5 số thực
 * Release : 3/7/2022
 */

/**
 * Khối 1: Input
 * + num1
 * + num2
 * + num3
 * + num4
 * + num5
 * 
 * Khối 2: Progress
 * B1: tạo biến và cho người dùng nhập vào sau đó gán giá trị lại cho biến
 * B2: Lập công thức tính toán số trung bình của 5 số thực 
 * TinhTrungBinh = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) )/5;
 * 
 * Khối 3: Output
 * + soTrungBinh
 */

function tinhTrungBinh() {
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var num3 = document.getElementById('number3').value;
    var num4 = document.getElementById('number4').value;
    var num5 = document.getElementById('number5').value;
    var tinhTB = (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5) )/5;
document.getElementById('soTrungBinh').innerHTML = tinhTB.toLocaleString();
}
document.getElementById('btnTinhTB').onclick = tinhTrungBinh;