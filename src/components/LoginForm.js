import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='email'
                        placeholder='email@gmail.com'
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;