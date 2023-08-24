import axios from "axios";

class Service{

    constructor(){
        this.baseUrl="http://localhost:4000/";
    }

    getAllData()
    {
        return axios.get(this.baseUrl+"data");
    }

    addData(data)
    {
        return axios.post(this.baseUrl+"add",data);
    }

    editData(data)
    {
        return axios.put(this.baseUrl+"edit/"+data.labels.data);
    }

    deleteData(labels)
    {
        return axios.delete(this.baseUrl+"delete/"+labels);
    }
}

export default new Service();