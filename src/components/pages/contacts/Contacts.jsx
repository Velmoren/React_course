import React from 'react';
import { Formik } from 'formik';
import Banner from '../../banner';
import Footer from '../../footer';

// files
import logoDark from '../../../media/logo/Beans_logo_dark.svg'

// style
import styled from 'styled-components';

import { Col, Row, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import classes from './Contacts.module.css';
import classesCommon from '../../app/App.module.css';

const { contacts, textarea, btn } = classes;
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

const Contacts = (props) => (
    < div >
        <Formik
            initialValues={{ name: '', email: '', phone: '', text: '' }}
            validate={values => {

                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                } else if (
                    !/^[a-zA-Zа-яёА-ЯЁ]+$/u.test(values.name)
                ) {
                    errors.name = 'Invalid name';
                }

                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                if (!values.phone) {
                    errors.phone = 'Required';
                } else if (
                    /\D/g.test(values.phone)
                ) {
                    errors.phone = 'Invalid phone number';
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
            }) => (
                    <>
                        <Banner text={'Contact us'} />

                        <section className={contacts}>
                            <Container>
                                <Row>
                                    <Col lg={{ size: '6', offset: 3 }}>
                                        <div className={title}>Tell us about your tastes</div>
                                        <img className={beanslogo} src={logoDark} alt="Beans logo" />

                                        <Form onSubmit={handleSubmit}>

                                            <StdFormGroup row>
                                                <Label for="nameForm" sm={2}>Name*</Label>
                                                <Col sm={7}>
                                                    <Input
                                                        type="text"
                                                        name="name"
                                                        id="nameForm"
                                                        placeholder=""
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.name}
                                                    />
                                                    {errors.name && touched.name && errors.name}
                                                </Col>
                                            </StdFormGroup>

                                            <StdFormGroup row>
                                                <Label for="emailForm" sm={2}>E-mail*</Label>
                                                <Col sm={7}>
                                                    <Input
                                                        type="email"
                                                        name="email"
                                                        id="emailForm"
                                                        placeholder=""
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                    {errors.email && touched.email && errors.email}
                                                </Col>
                                            </StdFormGroup>

                                            <StdFormGroup row>
                                                <Label for="phoneForm" sm={2}>Phone*</Label>
                                                <Col sm={7}>
                                                    <Input
                                                        type="phone"
                                                        name="phone"
                                                        id="phoneForm"
                                                        placeholder=""
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.phone}
                                                    />
                                                    {errors.phone && touched.phone && errors.phone}
                                                </Col>
                                            </StdFormGroup>

                                            <StdFormGroup className={textarea}>
                                                <Label for="textForm">Your message*</Label>
                                                <StdTextArea
                                                    type="textarea"
                                                    name="text"
                                                    id="textForm"
                                                    placeholder="Tell us..."
                                                    rows='5'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.text}
                                                />
                                                {errors.text && touched.text && errors.text}
                                            </StdFormGroup>

                                            <StdButton
                                                className={btn}
                                                outline
                                                color="secondary"
                                                type="submit"
                                                disabled={isSubmitting}
                                            >Send us
                                            </StdButton >
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </section>

                        <Footer />
                    </>
                )}
        </Formik>
    </div >
);

export default Contacts;




























        // import React from 'react';
        // import Banner from '../../banner';
        // import Footer from '../../footer';

        // // files
        // import logoDark from '../../../media/logo/Beans_logo_dark.svg'

        // // style
        // import styled from 'styled-components';
        // // , FormText
// import {Col, Row, Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';
        // import classes from './Contacts.module.css';
        // import classesCommon from '../../app/App.module.css';

// const {contacts, textarea, btn} = classes;
// const {title, beanslogo} = classesCommon;

        // const StdButton = styled(Button)`
        //     display: block;
        //     margin: 0 auto;
        //     margin-top: 40px;
        // `

        // const StdFormGroup = styled(FormGroup)`
        //     margin-top: 30px;
        //     justify-content: space-between;
        // `
        // const StdTextArea = styled(Input)`
        //     width: 350px;
        //     margin: 0 auto;
        // `

// const Contacts = () => {
//     return (
//         <>
//             <Banner text={'Contact us'} />
//             <section className={contacts}>
//                 <Container>
//                     <Row>
//                         <Col lg={{ size: '6', offset: 3 }}>
//                             <div className={title}>Tell us about your tastes</div>
//                             <img className={beanslogo} src={logoDark} alt="Beans logo" />
                            // <Form>

                            //     <StdFormGroup row>
                            //         <Label for="nameForm" sm={2}>Name*</Label>
                            //         <Col sm={7}>
                            //             <Input type="text" name="name" id="nameForm" placeholder="" />
                            //         </Col>
                            //     </StdFormGroup>

                            //     <StdFormGroup row>
                            //         <Label for="emailForm" sm={2}>E-mail*</Label>
                            //         <Col sm={7}>
                            //             <Input type="email" name="email" id="emailForm" placeholder="" />
                            //         </Col>
                            //     </StdFormGroup>

                            //     <StdFormGroup row>
                            //         <Label for="phoneForm" sm={2}>Phone*</Label>
                            //         <Col sm={7}>
                            //             <Input type="phone" name="phone" id="phoneForm" placeholder="" />
                            //         </Col>
                            //     </StdFormGroup>

                            //     <StdFormGroup className={textarea}>
                            //         <Label for="textForm">Your message*</Label>
                            //         <StdTextArea type="textarea" name="text" id="textForm" placeholder="Tell us..." rows='5' />
                            //     </StdFormGroup>

                            //     <StdButton className={btn} outline color="secondary">Send us</StdButton >

                            // </Form>
//                         </Col>
//                     </Row >
//                 </Container>
//             </section>
//             <Footer />
//         </>
//     )
// }

// export default Contacts;