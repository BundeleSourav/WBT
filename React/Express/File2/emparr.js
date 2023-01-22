var emp=[{id:"1",name:"Sourav",desg:"Admin"},
{id:"2",name:"Durgesh",desg:"Co-Admin"},
{id:"3",name:"Aniket",desg:"Advisor"}]

exports.setemp=function(ob){
    emp.push(ob);
}

exports.getlength=function(){
    return emp.getlength;
}

exports.searchob=function(id){
    for(var arr of emp)
    {
        if(arr.id===id)
        {
            return arr;
        }
    }
    return null;
}