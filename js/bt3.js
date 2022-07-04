/**
 * Author: TO MINH Y
 * Function: Tính tiền lương nhân viên
 * Release : 3/7/2022
 */

 /**
 * Khối 1: Input
 * 1USD = 23.500 VND;
 * 
 *  
 * Khối 2: Các bước xử lý
 * B1: tạo biến cho người dùng nhập vào và gán lại giá trị cho biến
 * B2: Lập công thức tính toán 
 *  1USD = 1 * 23.500 = 23.500 VND
 * B3: In kết quả ra màn hình
 * 
 * Khối 3: Output
 * USD
 * QuyDoi
 * 
 */

 function QuyDoiTien(){
    var soUSD = document.getElementById('soTienUSD').value;
    var soVND = document.getElementById('soTienVND').value;
    var quyDoi = soUSD * soVND;

document.getElementById('VND').innerHTML = quyDoi.toLocaleString();
 }
 document.getElementById('btnQuyDoi').onclick = QuyDoiTien;