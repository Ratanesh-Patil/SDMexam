var emp=[{id:1,name:"Ratnesh",desg:"xyz"},
{id:2,name:"ketan",desg:"xy"},
{id:3,name:"tanuja",desg:"yz"}]

exports.insertEmp=(ob)=>{
emp.push(ob);
}

exports.searchEmp=(id)=>{
    for(var empob of emp){
        if(empob.id===parseInt(id)){
            return empob;
        }

    }
    return null;
}