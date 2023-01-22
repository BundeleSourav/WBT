import axios from 'axios';

class Facultyservice{

    constructor(){
        this.baseUrl="http://localhost:9900/";
    }

    getAllplayer()
    {
        return axios.get(this.baseUrl+"faculty");
    }

    addPlayer(ob)
    {
        return axios.post(this.baseUrl+"faculty",ob);
    }

    editPlayer(ob)
    {
        return axios.put(this.baseUrl+"faculty/"+ob.id,ob);
    }

    deletePlayer(id)
    {
        return axios.delete(this.baseUrl+"faculty/"+id);
    }
}

export default new Facultyservice();