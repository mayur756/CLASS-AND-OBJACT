class animal{

    // Attributes
    name;
    type;
    color;

   


    // methodes

    setdata(name,type,color){

        this.name=name;
        this.type=type;
        this.color=color;
    }

    getdata(){
        console.log(`name:${this.name}`);
        console.log(`type:${this.type}`);
        console.log(`color:${this.color}`);
    }

}

// Object

let dog=new animal();

// ************************** second class ********************//
dog.setdata("shiro","domestic","black");
dog.getdata();




class cricket{

    // attributes

    name;
    tshirt;
    run;


    // mehtodes

    setdata(name,tshirt,run){
        this.name=name;
        this.tshirt=tshirt;
        this.run=run;
    }

    getdata(){
        console.log(`name:${this.name}`);
        console.log(`tshirt:${this.tshirt}`);
        console.log(`run:${this.run}`);
    }
}

// objact

let man=new cricket();

man.setdata("dhoni","india","5000");

man.getdata();