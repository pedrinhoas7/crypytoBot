import React from 'react';

import api from '../../api'

export class LoginService extends React.Component {
    
    async postLogin(email, password) {
        try {
            const res = await api.post(`/login`,
            {"email": email, "password": password});
            return await res.data   
        } catch (error) {
            throw error;
        }
    }

}

export default new LoginService();