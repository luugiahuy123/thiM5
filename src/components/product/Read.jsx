import {Link} from "react-router-dom";


function Read() {



    return (
        <div className={'d-flex w-100 vh-100 justify-content-center align-items-center bg-light'}>
            <div className={'w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'}>
                <h3>Detail of Product</h3>
                <div className={'mb-2'}>
                    <strong>Title: </strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Price: </strong>
                </div>
                <div className={'mb-2'}>
                    <strong>Description: </strong>
                </div>
                <Link to={`/edit/`} className={'btn btn-success'}>Edit</Link>
                <Link to={'/'} className={'btn btn-primary m-3'}>Black</Link>
            </div>
        </div>
    )
}

export default Read;