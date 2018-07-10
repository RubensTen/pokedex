import React, {Component} from 'react';
import './index.css';
import Grid from '@material-ui/core/Grid';

export class Footer extends Component {
    render () {
        return (
            <footer>
                <div className="wrapper">
                    <Grid container spacing={24} alignItems="stretch" direction="center" justify="center">
                        <Grid item xs={12} sm={4} md={4} className="col">
                            <h4 className="title">
                                Información
                            </h4>
                            <ul>
                                <li><a href="#">Términos y Condiciones</a></li>
                                <li><a href="#">Preguntas frecuentes</a></li>
                                <li><a href="#">Aviso de privacidad</a></li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} className="col">
                            <h4 className="title">
                                Formas de pago
                            </h4>
                            <ul>
                                <li><a href="#">Paypal</a></li>
                                <li><a href="#">Mercado Pago</a></li>                                
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} className="col">
                            <h4 className="title">
                                Extra info
                            </h4>
                            <ul>
                                <li><a href="#">Paypal</a></li>
                                <li><a href="#">Mercado Pago</a></li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </footer>
        );
    }
}