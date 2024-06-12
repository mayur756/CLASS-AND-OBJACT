class emp {

    #id;
    #name;

    // constructor

    constructor(id,name){
        console.log("loading started..");
        this.#id=id;
        this.#name=name;

        console.log(`employee name ${this.setname} and hired with id :${this.setid}`);
    }

    //setter

    set setname(name){
        this.#name=name;
    }
    set setid(id){
        this.#id=id;
    }


    get getname(){
        return this.#name;
    }

    get getid(){
        return this.#id;
    }
}

let e= new emp(101,"man");

e.setname = "mayan";

e.setid = 302;

console.log(`name of emp :${e.getname}`);


console.log(`name of id :${e.getid}`);