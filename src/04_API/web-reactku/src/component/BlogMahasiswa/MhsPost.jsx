import React from "react";

const MhsPost = (props) => {
    return (
        <div className="mhs">
            <div className="daftar-mhs">
                <div className="data-mhs">Data Mahasiswa</div>
                <p className="nim-mhs">{props.nim}</p>
                <p className="nama-mhs">{props.nama}</p>
                <p className="alamat-mhs">{props.alamat}</p>
                <p className="hp-mhs">{props.hp}</p>
                <p className="angkatan-mhs">{props.angkatan}</p>
                <p className="status-mhs">{props.status}</p>
                <button className="btn btn-sm btn-warning" onClick={() => props.hapusMhs(props.id)}>Hapus</button>
            </div>
        </div>
    )
}

export default MhsPost;