/**
 * Author: TO MINH Y
 * Function : Tính tổng 2 ký số
 * Release : 4/7/2022
 */

/**
 * Khối 1:Input
 * + so2KySo
 * 
 * Khối 2:Các bước cần xử lý
 * + B1: Tạo các biến cho người dùng nhập vào và gán lại giá trị cho biến
 * + B2: Tách lấy số hàng chục 
 * + B3: Tách lấy số hàng đơn vị
 * + B4: Lập công thức tính toán
 * soHangChuc = so / 10;
 * soHangDonVi = so % 10;
 * tinhTong = soHangChuc + soHàngDonVi
 * + B5: Thông báo kết quả ra màn hình
 * 
 * Khối 3: Output
 * tinhTong
 */

function tinhTong2(){
    var num = document.getElementById('numInput').value;
    var soHangChuc = Math.floor(num /10) ;
    var soHangDonVi = (num %10);
    var tinhTong = soHangChuc + soHangDonVi;
    
document.getElementById('tong').innerHTML = tinhTong.toLocaleString();
}
document.getElementById('btnTinhTong2').onclick = tinhTong2;