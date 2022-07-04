/**
 * Author: TO MINH Y
 * Function: Tính chu vi và diện tích HCN
 * Release : 4/7/2022
 */

/**
 * Khối 1:Input 
 * + cDaiHCN (Chiều dài của hình chữ nhật)
 * + cRongHCN (Chiều rộng của hình chữ nhật)
 * 
 * Khối 2:Các bước cần xử lý
 * B1: Tạo các biến cho người dùng nhập vào giá trị và gán lại cho biến
 * B2: Lập công thức tính toán
 * B3: Tính Chu vi
 * + chuVi = (cDaiHCN + cRongHCN) * 2;
 * + dienTich = cDaiHCN * cRongHCN;
 * B4: In kết quả ra màn hình
 * Khối 3: Output
 * + Chu Vi
 * + Dien Tich
 */

function tinhHCN(){
    var cDaiHCN = document.getElementById('cDaiHCN').value;
    var cRongHCN = document.getElementById('cRongHCN').value;

    var chuVi = (Number(cDaiHCN) + Number(cRongHCN)) * 2;
    document.getElementById('chuVi').innerHTML = chuVi;
    var dienTich = cDaiHCN * cRongHCN;
    document.getElementById('dienTich').innerHTML = dienTich;
}
document.getElementById('btnHCN').onclick = tinhHCN;