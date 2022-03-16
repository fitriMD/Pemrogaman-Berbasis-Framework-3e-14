import React, { Component } from "react";
import './Mhs.css';
import MhsPost from '../../component/BlogMahasiswa/MhsPost';

class BlogMhs extends Component {
    state = {               //komponen state dari React untuk statefull component
        listMhs: [],    //variabel array yang digunakan untuk menyimpan data API
        insertMhs: {    //variabel yang digunakan untuk menampung sementara data yang akan di insert
            id: 1,
            nim: "",
            nama: "",
            alamat: "",
            hp: "",
            angkatan: "",
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {                      //fungsi untuk mengambil data dari API dengan menambahkan sort dan order
        fetch('http://localhost:3002/mahasiswa?_sort=id&_order=desc')        //penambahan sort dan order berdasarkan parameter
            .then(response => response.json())      //ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        //data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listMhs: jsonHasilAmbilDariAPI
                })
            })

    }
    componentDidMount() {           //komponen untuk mengecek ketika component telah telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI()   //ambil dari data server API lokal
    }

    handleHapusMhs = (data) => {
        fetch(`http://localhost:3002/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMhs = (event) => {      //fungsi untuk meng-handle form tambah data artikel
        let formInsertMhs = { ...this.state.insertMhs };        //clonning data state insertArtikel ke dalam variabel formInsertArtikel
        let timestamp = new Date().getTime();                           //digunakan untuk menyimpan waktu (sebagi ID artikel)
        formInsertMhs['id'] = timestamp;
        formInsertMhs[event.target.name] = event.target.value;      //menyimpan data onchange ke formInsertArtikel sesuai dengan target yg diisi
        this.setState({
            insertMhs: formInsertMhs
        });
    }

    handleTombolSimpan = () => {            //fungsi untuk meng-handle tombol simpan
        fetch('http://localhost:3002/mahasiswa', {
            method: 'post',                             //method POST untuk input/insert data
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMhs)      //kirimkan ke body request untuk data artikel yang akan ditambahkan (insert)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();      //reload/refresh data
            });
    }

    render() {
        return (
            <div className="post-mhs">
                <div className="form pb-2 border-buttom">
                    <div className="form-group row">
                        <label htmlFor="nim" className="col-sm-2 col-form-label">NIM</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nim" name="nim" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="hp" className="col-sm-2 col-form-label">Nomor Hp</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMhs} />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMhs.map(mhs => {
                        return <MhsPost key={mhs.id} nim={mhs.nim} nama={mhs.nama} alamat={mhs.alamat} hp={mhs.hp} angkatan={mhs.angkatan} status={mhs.status} hapusMhs={this.handleHapusMhs} />
                    })
                }
            </div>
        )
    }
}


export default BlogMhs;