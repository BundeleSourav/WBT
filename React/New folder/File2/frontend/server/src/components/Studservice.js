import axios from 'axios';

class Studservice{
    constructor(){
        this.baseUrl="http://localhost:6300/";
    }

    getStudent(){
        return axios.get(this.baseUrl+"student");
    }

    addStudent(ob){
        return axios.post(this.baseUrl+"student",ob);
    }

    deleteStudent(id){
        return axios.delete(this.baseUrl+"student/"+id);
    }

    editStudent(stl){
        return axios.put(this.baseUrl+"student/"+stl.rollno,stl);
    }
}

export default new Studservice();