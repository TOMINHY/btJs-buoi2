/**
 * Author: TO MINH Y
 * Function: Tính tiền lương nhân viên
 * Release : 3/7/2022
 */


/**
 * Khối 1: Input
 * + tienLuong1Ngay = 100000;
 * + soNgayLam = (người dùng nhập vào số ngày làm)
 *  
 * Khối 2: Các bước xử lý
 * B1: tạo biến cho người dùng nhập vào và gán lại giá trị cho biến
 * B2: Lập công thức tính toán 
 *  tienLuong = tienLuong1Ngay
 * 
 * Khối 3: Output
 * tienLuong1Ngay
 * soNgayLam
 * tienLuong
 */

function tinhLuong(){
  var tienLuong1Ngay = document.getElementById('tienLuong1Ngay').value;
  var soNgayLam = document.getElementById('soNgayLam').value;

  var tienLuong = tienLuong1Ngay * soNgayLam;
  document.getElementById('numResult').innerHTML = tienLuong.toLocaleString();
}
document.getElementById('btnTinhTien').onclick = tinhLuong;