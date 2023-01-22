import axios from 'axios';

class ProdServices{
    constructor(){
        this.baseUrl="http://localhost:6600/";
    }

    getProduct(){
        return axios.get(this.baseUrl+"")
    }
    addprod(pr){
        return axios.post(this.baseUrl+"addprod"+pr)
    }
    deleteProd(id){
        return axios.delete(this.baseUrl+"del/"+id)
    }
}

export default new ProdServices();