import React, {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {getAllSanPham} from "../service/SanPhamService";
import {createSanPham} from "../service/DonHangService";
import {toast} from "react-toastify";


const Create = () => {
    const [sanPham, setSanPham] = useState();
    const navigate = useNavigate();

    const getAllSanPham2 = async () => {
        try {
            const res = await getAllSanPham();
            setSanPham(res);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getAllSanPham2();
    }, [])


    const handleSubmit = async (value) => {
        const newValue = JSON.parse(value.sanPham);
        value.sanPham = newValue;
        await createSanPham(newValue).then((data) => {
            toast.success("Successfully created!");
            navigate("/");
        })
    }
    if (!sanPham) {
        return <div>loading...</div>;
    }

    return (
        <div className={'d-flex w-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h1>Add a Product</h1>
                <Formik
                    initialValues={{
                        maDonHang: "",
                        ngayMua: "",
                        gia: "",
                        soLuong: "",
                        tenSanPham: "",
                        sanPham: JSON.stringify(sanPham[0]),
                    }}
                    onSubmit={(values) => {
                        handleSubmit(values);
                    }
                    }>

                    <Form>
                        <div className="mb-3">
                            <label htmlFor="kk2" className="form-label">Ma don hang</label>
                            <Field name="maDonHang" type="text" className="form-control" id="kk2"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="kk2" className="form-label">Tên </label>
                            <Field name="tenSanPham" type="text" className="form-control" id="kk2"/>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="kk3" className="form-label">Thể loại</label>
                            <Field name="category" as="select" className="form-control" id="kk3" required>
                                <option value="" selected disabled>Chọn thể loại</option>
                                {
                                    sanPham.map(category => (
                                        <option key={category.maSanPham}
                                                value={JSON.stringify(category)}>{category.loaiSanPham}</option>
                                    ))
                                }

                            </Field>

                        </div>

                        <div className="mb-3">
                            <label htmlFor="kk4" className="form-label">Ngày nhập sách</label>
                            <Field name="ngayMua" type="date" className="form-control" id="kk4"/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="kk5" className="form-label">Số lượng sách</label>
                            <Field name="soLuong" type="number" className="form-control" id="kk5"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="kk5" className="form-label">gia </label>
                            <Field name="gia" type="number" className="form-control" id="kk5"/>
                        </div>


                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="submit">Thêm mới</button>
                            <Link to={"/"} className="btn btn-danger">Hủy</Link>
                        </div>


                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Create;
