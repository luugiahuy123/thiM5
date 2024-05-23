import axios from "axios";

export const getAllSanPham = async () => {
    try {
        const res = await axios.get("http://localhost:8080/sanPham");
        return res.data;
    } catch (e) {
        console.log(e);
    }
}