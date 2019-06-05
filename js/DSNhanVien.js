function DanhSachNhanVien(){
	this.mangNhanVien = [];

	this.ThemNhanVien = function(nv){
		this.mangNhanVien.push(nv);
	};

	this.XuatLuong = function(){
		for(var i=0; i < this.mangNhanVien.length; i++){
			this.mangNhanVien[i].tinhLuong();
		}
	};
}