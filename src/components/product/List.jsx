import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import * as DonHangService from "../service/DonHangService";

const List = () => {
    const [donHang, setDonHang] = useState([]);

    const getAllDonHang = async () => {
        try {
            const res = await DonHangService.getAll();
            setDonHang(res);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllDonHang();
    }, []);

    if (!donHang) {
        return <div>Loading...</div>;
    }



    return (
        <div className={'d-flex flex-column justify-content-center align-items-center bg-light vh-100'}>
            <h1>Thống kê đơn hàng </h1>
            <div className={'w-75 rounded bg-white border shadow p-4'}>
                <div className={'d-flex justify-content-end'}>
                    <Link to={'/create'} className={'btn btn-success'}>Add new</Link>
                </div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Mã đơn Hàng</th>
                        <th>Tên Sản Phảm</th>
                        <th>Giá</th>
                        <th>Loại sản phảm</th>
                        <th>Ngày mua</th>
                        <th>Số Lượng</th>
                        <th>tổng tiền</th>
                        <th>Actior</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        donHang.map((donHang1, index) => (
                            <tr key={donHang1.maDonHang}>
                                <td>{index + 1}</td>
                                <td>{donHang1.tenSanPham}</td>
                                <td>{donHang1.gia}</td>
                                <td>{donHang1.sanPham.loaiSanPham}</td>
                                <td>{donHang1.ngayMua}</td>
                                <td>{donHang1.soLuong}</td>
                                <td>{donHang1.soLuong * donHang1.gia} </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default List;