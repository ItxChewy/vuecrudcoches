import Global from "@/Global"
export default class CocheService{

    getCoches(){
        return new Promise(function(resolve){
            //let coches =[];
            let request = "api/coches";
            let url = Global.urlCoches + request;
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            
        })
    }
    getCoche(id){
        return new Promise(function(resolve){
            let request = "api/coches/findcoche/" + id
            let url = Global.urlCoches + request
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
        })
    }

    postCoche(coche){
        return new Promise(function(resolve){
            let request = "api/coches/insertcoche"
            let url = Global.urlCoches + request
            const cocheJSON = {
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(coche)
            }
            fetch(url,cocheJSON)
            .then(response => response.json())
            .then(data =>resolve(data))
        })
    }

    putCoche(coche){
        return new Promise(function(resolve){
            let request = "api/coches/updatecoche"
            let url = Global.urlCoches + request
            const cocheJSON = {
                method:"PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(coche)
            }
             fetch(url,cocheJSON)
            .then(response => response.ok)
            .then(data =>resolve(data))
        })
    }
    deleteCoche(id){
        return new Promise(function(resolve){
            let request = "api/coches/deletecoche/" + id
            let url = Global.urlCoches + request
            fetch(url)
            .then(response => response.ok)
            .then(data => resolve(data))
        })
    }
}