import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component {
    state = {               //komponen state dari React untuk statefull component
        listArtikel: []     //variabel array yang digunakan untuk menyimpan data API
    }

    componentDidMount() {      //komponen untuk mengecek ketika component telah di-mount-ing, maka panggil API
        fetch('https://jsonplaceholder.typicode.com/posts') //alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())      //ubah response data dari URL API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        //data json hasil ambil dari API kita masukkan ke dalam listArtikel pada state
                this.setState({
                    listArtikel: jsonHasilAmbilDariAPI
                })
            })

    }

    render() {
        return (
            <div className="post-artikel">
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => { //looping dan masukkan untuk setiap data yang ada di listArtikel ke variabel artikel
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} />     //mapping data json dari API sesuai dengan kategorinya
                    })
                }
            </div>
        )
    }
}

// class BlogPost extends Component {
//     render() {
//         return (
//             <div class="post-artikel">
//                 <h2>Daftar Artikel</h2>
//                 <Post judul="JTI Polinema" isi="Jurusan Teknologi Informasi - Politeknik Negeri Malang"/>
//                 {/* <div class="artikel">
//                     <div class="gambar-artikel">
//                         <img src=" http://placeimg.com/80/80/tech" alt="Gambar Thumbnail Artikel" />
//                     </div>
//                     <div class="konten-artikel">
//                         <div class="judul-artikel">Judul Artikel</div>
//                         <p class="isi-artikel">Isi Artikel</p>
//                         </div>
//                 </div> */}
//             </div>
//         )
//     }
// }

export default BlogPost;