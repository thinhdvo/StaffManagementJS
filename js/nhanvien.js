
function NHANVIEN(ho,ten,id,date,chucvu){
	this.Ho = ho;
	this.Ten = ten;
	this.ID = id;
	this.DATE = date;
	this.CHUCVU = chucvu;
	this.LUONG = 500;
	this.TinhLuong = function(){
		if(this.CHUCVU === "Sếp"){
			return this.LUONG *3;
		}
		else if(this.CHUCVU === "Trưởng phòng"){
			return this.LUONG *2;
		}
		else{
			return this.LUONG *1;
		}
	}

}


//--------------------------example------------------------------


// function vidu(ho,ten,msnv,ngaybatdau,chucvu){
// 	this.Ho = ho;
// 	this.Ten = ten;
// 	this.MS = msnv;
// 	this.NgayBatDau = ngaybatdau;
// 	this.ChucVu = chucvu;
// 	this.LuongCoBan = 500;
// 	this.TinhLuong = function(){
// 		if(this.ChucVu === "Sếp"){
// 			return this.LuongCoBan * 3;
// 		}
// 		else if(this.ChucVu === "Trưởng phòng"){
// 			return this.LuongCoBan * 2;
// 		}
// 		else if(this.ChucVu === "Nhân viên"){
// 			return this.LuongCoBan * 1;
// 		}
// 	}
// }

// // Sua tu ben ngoai / them vao
// NhanVien.prototype.xeploai = "";
// NhanVien.prototype.xeploai = "";