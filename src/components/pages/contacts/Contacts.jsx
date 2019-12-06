import React, { Component } from 'react';
import Banner from '../../banner';
import Footer from '../../footer';
import MaskedInput from 'react-text-mask';
import Data from '../../../services/dataService/dataService';
import firebase from '../../../services/firebase';

// files
import logoDark from '../../../media/logo/Beans_logo_dark.svg'

// style
import styled from 'styled-components';
import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import classes from './Contacts.module.css';
import classesCommon from '../../app/App.module.css';

const { contacts, textarea, input__phone, warning, warning__textarea } = classes;
const { title, beanslogo } = classesCommon;

const StdButton = styled(Button)`
            display: block;
            margin: 0 auto;
            margin-top: 40px;
        `

const StdFormGroup = styled(FormGroup)`
            margin-top: 30px;
            justify-content: space-between;
        `
const StdTextArea = styled(Input)`
            width: 350px;
            margin: 0 auto;
        `

class Contacts extends Component {

    data = new Data()

    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        notValidWarnings: {
            nameNotValid: 'Name must be 2 - 20 simbols',
            emailNotValid: 'Please provide a valid email address',
            messageNotValid: 'Please fill this field to send the form'
        },
        deniedSubmitFields: {
            validEmail: true,
            validMessage: true,
            validName: true,
            deniedSubmissionsCounter: 0
        }
    }

    onValueChange = event => {
        const { deniedSubmitFields } = this.state

        for (let key in deniedSubmitFields) {
            if (key.toLowerCase().includes((event.target.name).toLowerCase())) {
                this.setState({ deniedSubmitFields: { ...deniedSubmitFields, [key]: true } })
            }
        }

        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onEmailValidation = () => {
        const { email } = this.state

        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return false
        }
        return true
    }

    onNameValidation = () => {
        const { name } = this.state

        if (name.length < 2 || name.length > 20) {
            return false
        }
        return true
    }

    onMessageValidation = () => {
        const { message } = this.state

        if (!message) {
            return false
        }
        return true
    }

    onStateDataFilter = () => {
        const filteredState = Object.entries(this.state)
            .map(item => item.filter(el => !(el instanceof Object)))
            .filter(item => item.length > 1)

        const postDataObj = {}

        filteredState.forEach(el => postDataObj[el[0]] = el[1])

        return postDataObj
    }

    onLoading = () => {
        this.setState({ loading: true })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const { history } = this.props



        if (this.onEmailValidation() && this.onNameValidation() && this.onMessageValidation()) {

            // this.data.submit(`http://localhost:3001/contacts`, this.onStateDataFilter())
            //     .then(() => history.push("/Contacts/thank-you"))
            //     .catch(() => history.push("/error-page"))

            firebase
                .database()
                .ref()
                .child('contacts')
                .push(this.onStateDataFilter())
                .then(() => history.push("/Contacts/thank-you"))
                .catch(() => history.push("/error-page"))
        }

        this.setState(({ deniedSubmitFields: { deniedSubmissionsCounter } }) => {
            return {
                deniedSubmitFields: {
                    deniedSubmissionsCounter: ++deniedSubmissionsCounter,
                    validEmail: this.onEmailValidation(),
                    validName: this.onNameValidation(),
                    validMessage: this.onMessageValidation()
                }
            }
        })
    }

    render() {
        const { name, phone } = this.state;
        const { nameNotValid, emailNotValid, messageNotValid } = this.state.notValidWarnings
        const { deniedSubmissionsCounter, validName, validEmail, validMessage } = this.state.deniedSubmitFields

        return (
            <>
                <Banner text={'Contact us'} />
                <section className={contacts}>
                    <Container>
                        <Row>
                            <Col lg={{ size: '6', offset: 3 }}>
                                <div className={title}>Tell us about your tastes</div>
                                <img className={beanslogo} src={logoDark} alt="Beans logo" />
                                <Form onSubmit={this.onSubmit}>

                                    <StdFormGroup row>
                                        <Label for="nameForm" sm={2}>Name<span style={{ color: 'red' }}>*</span></Label>
                                        <Col sm={7}>
                                            <Input
                                                id='name'
                                                name='name'
                                                type="text"
                                                onChange={this.onValueChange}
                                                value={name}
                                            />
                                            {(deniedSubmissionsCounter && !validName) ? <span className={warning}>{nameNotValid}</span> : null}
                                        </Col>
                                    </StdFormGroup>

                                    <StdFormGroup row>
                                        <Label for="emailForm" sm={2}>E-mail<span style={{ color: 'red' }}>*</span></Label>
                                        <Col sm={7}>
                                            <Input
                                                id='email'
                                                name='email'
                                                type="text"
                                                onChange={this.onValueChange}
                                            />
                                            {(deniedSubmissionsCounter && !validEmail) ? <span className={warning}>{emailNotValid}</span> : null}
                                        </Col>
                                    </StdFormGroup>

                                    <StdFormGroup row>
                                        <Label for="phoneForm" sm={2}>Phone</Label>
                                        <Col sm={7}>
                                            <MaskedInput
                                                className={input__phone}
                                                id='phone'
                                                name='phone'
                                                type="tel"
                                                mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                                guide={true}
                                                showMask={true}
                                                onChange={this.onValueChange}
                                                value={phone}
                                            />
                                        </Col>
                                    </StdFormGroup>

                                    <StdFormGroup className={textarea}>
                                        <Label for="textForm">Your message<span style={{ color: 'red' }}>*</span></Label>
                                        <StdTextArea
                                            name="message"
                                            id="message"
                                            type="textarea"
                                            rows='5'
                                            placeholder="Leave your comments here"
                                            onChange={this.onValueChange}
                                        />
                                        {(deniedSubmissionsCounter && !validMessage) ? <span className={`${warning} ${warning__textarea}`}>{messageNotValid}</span> : null}
                                    </StdFormGroup>

                                    <StdButton outline color="secondary">Send us</StdButton >

                                </Form>
                            </Col>
                        </Row >
                    </Container>
                </section>
                <Footer />
            </>
        )
    }
}

export default Contacts;