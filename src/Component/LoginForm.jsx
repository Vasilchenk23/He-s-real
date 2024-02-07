import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import AdminComponent from './AdminComponent';
import MainComponent from './MainComponent';
import '../../src/App.css';


const LoginForm = () => {
  const adminCredentials = {
    username: 'admin',
    password: 'adminpassword',
  };

  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setSubmitted(true);
    if (values.username === adminCredentials.username && values.password === adminCredentials.password) {
      setLoggedInAsAdmin(true);
    } else {
      resetForm();
    }
  };

  if (loggedInAsAdmin) {
    return <AdminComponent />;
  } else if (submitted) {
    return <MainComponent />;
  } else {
    return (
      <div className="login-form-container">
        <h2 className='formForLoginUser'>Форма входа</h2>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={handleSubmit}
        >
          <Form className="login-form">
            <div>
              <label htmlFor="username">Логин:</label>
              <Field id="username" name="username" placeholder="Введите логин" />
            </div>
            <div>
              <label htmlFor="password">Пароль:</label>
              <Field id="password" name="password" type="password" placeholder="Введите пароль" />
            </div>
            <button type="submit" className="login-button">Отправить</button>
          </Form>
        </Formik>
      </div>
    );
  }
};

export default LoginForm;