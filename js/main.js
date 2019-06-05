
function getEle(id) {
    return document.getElementById(id);
}
function create(tag) {
    return document.createElement(tag);
}
var nhanVien = [];
function themNhanVien() {
    var ho = getEle("ho").value;
    var ten = getEle("ten").value;
    var id = getEle("msnv").value;
    var date = getEle("datepicker").value;
    var chucvu = getEle("chucvu").value;

    var newNhanVien = new NHANVIEN(ho, ten, id, date, chucvu);
    nhanVien.push(newNhanVien);
    console.log(nhanVien);
    taoBang(nhanVien);
}
function taoBang(input) {
    var tbody = getEle("tbody");
    tbody.innerHTML = "";
    for (i = 0; i < input.length; i++) {
        var trTag = create("tr");
        var tdHo = create("td");
        var tdTen = create("td");
        var tdID = create("td");
        var tdChucVu = create("td");
        var tdLuong = create("td");
        var tdXoa = create("td");

        var nhanVienList = input[i];

        tdHo.innerHTML = nhanVienList.Ho;
        tdTen.innerHTML = nhanVienList.Ten;
        tdID.innerHTML = nhanVienList.ID;
        tdChucVu.innerHTML = nhanVienList.CHUCVU;
        tdLuong.innerHTML = nhanVienList.TinhLuong();
        tdXoa.innerHTML = `<button class="btn btn-success" id="delete${i}">Delete</button>
        <button 
            class='btn btn-info' 
            data-ho='${nhanVienList.Ho}'
            data-ten='${nhanVienList.Ten}'
            data-id='${nhanVienList.ID}'
            data-chucvu='${nhanVienList.CHUCVU}'
            data-date='${nhanVienList.DATE}'
            id='btnSua_${i}'>Edit</button>
        `;

        trTag.appendChild(tdHo);
        trTag.appendChild(tdTen);
        trTag.appendChild(tdID);
        trTag.appendChild(tdChucVu);
        trTag.appendChild(tdLuong);
        trTag.appendChild(tdXoa);

        tbody.appendChild(trTag);

        //DOM btn delete after create button Delete
        xoaNV("delete" + i, nhanVienList.ID);
        getInfo('btnSua_' + i);

    }
}

/* Delete
    - tim vi tri / find location
    - use 'slice(n,m') n = location; m = [x] number / so phan tu
*/
function xoaNV(id, ID) {
    getEle(id).addEventListener("click", function () {
        //Sweet alert library-------
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                var flag = false;
                for (var i = 0; i < nhanVien.length; i++) {
                    if (nhanVien[i].ID === ID) {
                        nhanVien.splice(i, 1);
                        flag = true;
                    }
                }
                if (flag) {
                    swal(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
                else {
                    swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>'
                    })
                }
                taoBang(nhanVien);
            }
        })






    })
}
// EDIT INFOMATION
// Get info and show info
function getInfo(id) {
    getEle(id).addEventListener('click', function () {
        var ho = this.getAttribute('data-ho');
        var ten = this.getAttribute('data-ten');
        var id = this.getAttribute('data-id');
        var date = this.getAttribute('data-date');
        var chuc = this.getAttribute('data-chucvu');

        //hien thi thong tin cu cua nhan vien
        getEle('ho').value = ho;
        getEle('ten').value = ten;
        getEle('msnv').value = id;
        getEle('datepicker').value = date;
        getEle('chucvu').value = chuc;

        // readonly for ID <input>
        getEle('msnv').setAttribute('readonly', true);
    })
}
// Edit info
function edit() {


    var ho = getEle('ho').value;
    var ten = getEle('ten').value;
    var id = getEle('msnv').value;
    var date = getEle('datepicker').value;
    var chucvu = getEle('chucvu').value;

    for (var i = 0; i < nhanVien.length; i++) {
        if (nhanVien[i].ID === id) {
            nhanVien[i].Ho = ho;
            nhanVien[i].Ten = ten;
            nhanVien[i].ID = id;
            nhanVien[i].DATE = date;
            nhanVien[i].CHUCVU = chucvu;        
        }
    }
    

    getEle('msnv').removeAttribute('readonly', true);
    taoBang(nhanVien);
}

// Search by ID
function searchID() {
    var keyword = getEle("txtSearch").value;
    var searchList = [];
    for (var i = 0; i < nhanVien.length; i++) {
        if (keyword === nhanVien[i].ID) {
            searchList.push(nhanVien[i]);
        }
    }
    taoBang(searchList);
}

// Search by Name
function timKiemTheoTen() {
    var keyword = getEle('txtSearch').value;
    var searchList = [];
    for (var i = 0; i < nhanVien.length; i++) {
        if (nhanVien[i].Ten.indexOf(keyword) != -1 || nhanVien[i].ID == keyword) {
            searchList.push(nhanVien[i]);
        }
    }
    taoBang(searchList);
}






// Action / run function
var btnNhanVien = getEle("btnThemNV");
btnNhanVien.addEventListener("click", themNhanVien);

var getSearch = getEle("btnSearch");
getSearch.addEventListener("click", searchID);

getEle('txtSearch').addEventListener('keyup', timKiemTheoTen);
getEle('btnEdit').addEventListener('click', edit);