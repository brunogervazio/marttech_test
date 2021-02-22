import React, { useState } from 'react';

import { cpfMask } from '../utils/cpfMask'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import makeStyle from '@material-ui/core/styles/makeStyles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyle((themes) => ({
  button:{
    color: '#ffffff'
  },
  card:{
    width: '100%',
    maxWidth: 700,
    margin: 20
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textField: {
    margin: `${themes.spacing(1)}px 0`,
  },
}));

export default function ModalCheckout(props){
  const classes  = useStyles();

  const [form, setForm] = useState({name: '', cpf: ''})

  const handleInputChange = e => {
    const {name, value} = e.target
    setForm({
      ...form,
      [name]: value
    });
  }

  const inputCPF = e => {
    setForm({...form, cpf: cpfMask(e.target.value)})
  }

  return(
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={() => props.modalOpen()}>
      {
        <Card className={classes.card}>
          <CardHeader
            title="VAMOS CONCLUIR A COMPRA?"
            subheader="Insira seus dados para que possamos te identificar..."/>
          <CardContent>
            <form onSubmit={() => props.modalConfirm(form)}>
              <Box display="flex" flexDirection="column">
                <TextField
                  className={classes.textField}
                  name="name"
                  label="Nome"
                  value={form.name}
                  required
                  onChange={handleInputChange} />
                <TextField
                  className={classes.textField}
                  name="cpf"
                  label="CPF"
                  value={form.cpf}
                  required
                  onChange={inputCPF} />
                <Button
                  type="submit"
                  className={classes.button}
                  color="secondary"
                  variant="contained"
                  size="large"
                  fullWidth>
                  Concluir
                </Button>
              </Box>
            </form>
          </CardContent>
        </Card>
      }
    </Modal>
   
  );
}