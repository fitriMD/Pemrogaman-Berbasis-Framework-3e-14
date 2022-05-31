import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('mahasiswas');
    this.unsubscribe = null;
    this.state = {
      mahasiswas: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const mahasiswas = [];
    querySnapshot.forEach((doc) => {
      const { nim, nama, alamat, tahunangkatan, status } = doc.data();
      mahasiswas.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nim,
        nama,
        alamat,
        tahunangkatan,
        status
      });
    });
    this.setState({
      mahasiswas
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Mahasiswa LIST
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create" class="btn btn-primary">Add Mahasiswa</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama</th>
                  <th>Alamat</th>
                  <th>Tahun Angkatan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.mahasiswas.map(mahasiswas =>
                  <tr>
                    <td><Link to={`/show/${mahasiswas.key}`}>{mahasiswas.nim}</Link></td>
                    <td>{mahasiswas.nama}</td>
                    <td>{mahasiswas.alamat}</td>
                    <td>{mahasiswas.tahunangkatan}</td>
                    <td>{mahasiswas.status}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
