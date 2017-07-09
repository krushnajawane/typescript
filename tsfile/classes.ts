class person{
    name:string;
    age:number;
    address:string;
    service:calSer;
    saveAddress():string{
        return this.name;
    }
    
    constructor(private _service:calSer){ //Inject services here 
          this._service.addNumber(2,3);
    }

}

interface IAddress{
    addressLine1:string;
    addressLine2:string;
    PinCode:number;

}

class calSer{    // create services Here
    addNumber(a:number,b:number){
        return a+b;
    }
}