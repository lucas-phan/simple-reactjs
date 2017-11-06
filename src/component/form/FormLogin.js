import React from 'react';
import { Form, Button } from "semantic-ui-react";
import Validator from "validator";
import PropTypes from 'prop-types';
import FormLoginErrors from '../messages/FormLoginErrors';


class FormLogin extends React.Component {
    state = {
        data: {
          email: '',
          password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
      this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
      })

    onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({errors});
      if(Object.keys(errors).length===0){
        this.props.submit(this.state.data)
      }
    }

    validate = (data) => {
      const errors = {};
      if(!Validator.isEmail(data.email)) errors.email="Email not true!";

      if(!data.password) errors.password = "Password don't blank!";

      return errors;
    }

    render () {
      const {email,password} = this.state.data
      const {errors} = this.state

        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                  <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder="example@example.com"
                      onChange={this.onChange}
                    />
                  {errors.email && <FormLoginErrors text={errors.email} />}
                  </Form.Field>
                  <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={this.onChange}
                    />
                  {errors.password && <FormLoginErrors text={errors.password} />}
                  </Form.Field>
                    <Button primary>Login</Button>
                </Form>
            </div>
        )
    }
}

FormLogin.propTypes = {
  submit: PropTypes.func.isRequired
};

export default FormLogin;
