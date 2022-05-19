/*
  b1: input 
    tên khách hàng
    tổng thu nhập năm
    số người phụ thuộc
  
  b2: tính toán
  phần thu nhập chịu thuế = tổng thu nhập năm - 4e6 - số người phụ thuộc * 16e5;
  
  nếu thu nhập chịu thuế <= 60e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 5%
  nếu thu nhập chịu thuế <= 120e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 10%
  nếu thu nhập chịu thuế <= 21e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 15%
  nếu thu nhập chịu thuế <= 384e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 20%
  nếu thu nhập chịu thuế <= 624e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 25%
  nếu thu nhập chịu thuế <= 960e6     =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 30%
  còn lại                             =>  tiền thuế cá nhân = phần thu nhập chịu thuế * 35%
  
  


  b3: xuất kết quả ra màn hình




*/
function calculateTax() {
  var getName = document.getElementById("getName").value;
  var getAnnualSalary = +document.getElementById("getAnnualSalary").value;
  var getDependantPeople =  +document.getElementById("getDependantPeople").value;
  var annualSalaryTax = getAnnualSalary - 4e6 - getDependantPeople *16e5;
  

  if (annualSalaryTax <= 0) {
    alert(`Số tiền thu nhập không hợp lệ`);
  } else {
    document.getElementById("ketQua").style.display = "block";

    document.getElementById(
      "spanKetQua"
    ).innerHTML = `Họ tên: ${getName}; Tiền thuế thu nhập cá nhân: ${totalTax(annualSalaryTax).toLocaleString()} VND`;
  }
}
function totalTax(annualSalaryTax) {
  
  if (annualSalaryTax <= 60e6) {
    return 0.05 * annualSalaryTax;
  } else if (annualSalaryTax <= 120e6) {
    return 0.1 * annualSalaryTax;
  } else if (annualSalaryTax <= 210e6) {
    return 0.15 * annualSalaryTax;
  } else if (annualSalaryTax <= 384e6) {
    return 0.2 * annualSalaryTax;
  } else if (annualSalaryTax <= 624e6) {
    return 0.25 * annualSalaryTax;
  } else if (annualSalaryTax <= 960e6) {
    return 0.3 * annualSalaryTax;
  } else {
    return 0.35 * annualSalaryTax;
  }
}


// function getName() {
//   return document.getElementById("getName").value;
// }

// function getAnnualSalary() {
//   return +document.getElementById("getAnnualSalary").value;
// }
// function getDependantPeople() {
//   return +document.getElementById("getDependantPeople").value;
// }
// function annualSalaryTax(){
//   return getAnnualSalary() - 4e6 - getDependantPeople() *16e5;
// }


//=======================Bài 1=======================//

//=======================Bài 2=======================//

/* 
b1:input:
+loại khách hảng ?
     nhà dân
     doanh nghiệp
+phí xử lý hoá đơn
+phí dịch vụ cơ bản
+phí thuê kênh cao cấp

b2: tính toán

tongtien = phiXuLiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap

nếu là khách hàng doanh nghiệp thì 
  + nhập vào số kết nối

  if(soKetNoi <= 10)
  tongtien = phiXuLiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap + 75
  else 
  tongtien = phiXuLiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap + 75 + (soKetNoi-10)*5

b3: xuất ra kết quả









*/
var price = 0;
var phiXuLiHoaDon = 0;
var phiDichVuCoBan = 0;
var phiThueKenhCaoCap = 0;
function calculatePrice() {
  if (typeSelector() == "B") {
    businessType();
    price = phiXuLiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
    document.getElementById("ketQua2").style.display = "block";
    document.getElementById(
      "spanKetQua2"
    ).innerHTML = `Mã khách hàng: ${getCustomer()}. Tiền cáp: ${Intl.NumberFormat(
      "en-US",
      { style: "currency", currency: "USD" }
    ).format(price)}`;
  } else if (typeSelector() == "A") {
    normalType();
    price = phiXuLiHoaDon + phiDichVuCoBan + phiThueKenhCaoCap;
    document.getElementById("ketQua2").style.display = "block";
    document.getElementById(
      "spanKetQua2"
    ).innerHTML = `Mã khách hàng: ${getCustomer()}. Tiền cáp: ${Intl.NumberFormat(
      "en-US",
      { style: "currency", currency: "USD" }
    ).format(price)}`;
  } else {
    alert(`Hãy chọn loại khách hàng`);
  }
}

function getCustomer() {
  return document.getElementById("getCustomer").value;
}

function getConnections() {
  return document.getElementById("getConnections").value;
}

function typeSelector() {
  return document.getElementById("typeSelector").value;
}

function getPremium() {
  return document.getElementById("getPremium").value;
}

function businessType() {
  if (typeSelector() === "B") {
    document.getElementById("showBusinessConnections").style.display = "block";
  } else {
    document.getElementById("showBusinessConnections").style.display = "none";
  }
  phiXuLiHoaDon = 15;
  if (getConnections() <= 10) {
    phiDichVuCoBan = 75;
  } else {
    phiDichVuCoBan = 75 + (getConnections() - 10) * 5;
  }
  phiThueKenhCaoCap = 50 * getPremium();
}

function normalType() {
  phiXuLiHoaDon = 4.5;
  phiDichVuCoBan = 20.5;
  phiThueKenhCaoCap = 7.5 * getPremium();
}
