import React from 'react';

import api from '../../api'

export class HomePageService extends React.Component {

    /* async postVendas(body) {
        try {
            const res = await axios.post(`${this.baseUrl}/vendas`, {
                address: body.address,
                name: body.name,
                email: body.email,
                fone: body.fone,
            });

            return res.data.venda.id;
        } catch (error) {
            throw error;
        }
    }

    async postFinalizarVendas(id,valor) {
        try {
            const res = await axios.post(`${this.baseUrl}/vendas/finalizar`, {
                id: id,
                valor: valor,
            });
            return res;
        } catch (error) {
            throw error;
        }
    } */
    
     
    async getCoins() {
        try {
            const res = await api.get(`/coins`);
            return await res.data   
        } catch (error) {
            throw error;
        }
    }

    /* async deleteVenda(id) {
        try {

            const res = await axios.delete(`${this.baseUrl}/vendas?id=${id}`);
            return await res
            
        } catch (error) {
            throw error;
        }
    } */
  
}

export default new HomePageService();