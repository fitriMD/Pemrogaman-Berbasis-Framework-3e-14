import React, { Component } from 'react'
import { Button, Container, Grid, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
// import { firebaseAuthentication } from '../config/firebase'
import firebase from '../Firebase';

export default class Registrasi extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChangeField = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) this.props.history.push('/');

                
            })
            .catch(err => {
                alert(err.message)
            })
    }
    render() {
        const { email, password } = this.state
        return (
            <Container>
                <Grid container justify="center">
                    <Grid xs="12" md="8" lg="4">
                        <h2>Halaman Registrasi</h2>
                        <form onSubmit={this.handleSubmit}>
                            <TextField type="email" fullWidth margin="dense" variant="outlined" size="small" value={email} onChange={this.handleChangeField} name="email" label="Email" required />
                            <TextField type="password" fullWidth margin="dense" variant="outlined" size="small" value={password} onChange={this.handleChangeField} name="password" label="Password" required />
                            <Button type="submit" fullWidth variant="contained" color="primary">Registrasi</Button>
                        </form>
                        <p>Sudah punya akun? <Link to="/">Login</Link></p>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}