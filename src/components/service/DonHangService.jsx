import axios from "axios";

export const getAll = async (search, sort) => {
    try {
        const res = await axios.get(`http://localhost:8080/donHang?_sort=quantity&_order=asc&name_like=${search}&category.name_like=${sort}`);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

export const createSanPham = async (book) => {
    try {
        const res = await axios.post("http://localhost:8080/donHang", book);
        return res.data;
    } catch (e) {
        console.log(e);
    }
}

