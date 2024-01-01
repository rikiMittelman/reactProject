import { observable, makeObservable, action } from 'mobx';
class GlobalState {

    isLogin = false;
    business = {
        id: "",
        name: "",
        address: "",
        phone: "",
        owner: "",
        logo: "",
        description: "",
    };
    service = [
        {
            id: "",
            name: "",
            description: "",
            price: '',
            duration: "",
        },

    ];
    events = [{
        id: "זוהי רשימת האירועים שלי",
        serviceType: "!!!בהצלחה",
        dateTime: "",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "",
        clientPhone: "",
        clientEmail: "",
    },];
    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin: action,
            business: observable,
            initBusiness: action,
            setBusiness: action,
            edit: observable,
            sentToEdit: action,
            isAdmin: observable,
            setIsAdmin: action,
            service: observable,
            initServices: action,
            setServices: action,
            events: observable,
            setEvents: action,
            initEvents: action,
            isEvent: observable,
            setIsEvent: action,
            error: observable,
            setError: action,
            isSelect: observable,
            setIsSelect: action,
            isDate: observable,
            setIsDate: action,
            isClicked:observable,
            setIsClicked:action
        })
    }


isDate=false;
isSelect=false;
isClicked=false;
setIsDate=(val)=>{
this.isDate=val
}
setIsSelect=(val)=>{
    this.isSelect=val
    }
    setIsClicked=(val)=>{
        this.isClicked=val
        }

    error = false;
    edit = true;
    isEvent = false;
    setError = (val) => {
        this.error = val;
    }
    sentToEdit = (val) => {
        this.edit = val;
    }
    isAdmin = false;
    setIsAdmin = (val) => {
        this.isAdmin = val;
    }
    setIsEvent = (val) => {
        this.isEvent = val;
    }
    //#region login
    setIsLogin = (val) => { this.isLogin = val }
    saveIsLogin = async(name, password) => {
        const res = await fetch("http://localhost:8787/login",
            {
                method: "POST",
                body: JSON.stringify({ name, password }),
                headers: {
                    "Content-Type": "application/json"
                },
            });

        if (res.status === 200) {
            this.isLogin = true;
            this.error = false;

        }
        
        else {
            this.isLogin = false;
            this.error = true;
        }
    }
    //#endregion
    //#region business
    initBusiness = async () => {
        const response = await fetch("http://localhost:8787/businessData");
        const data = await response.json();
        // this.business=data;
        this.setBusiness(data)
    }
    postDetails = async (data) => {
        await fetch('http://localhost:8787/businessData', {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }
    setBusiness(val) {
        this.business = val;
    }
    //#endregion 
    //#region services
    initServices = async () => {
        const response = await fetch("http://localhost:8787/services");
        const data1 = await response.json();
        //this.services=data1;
        this.setServices(data1);
    }
    setServices(val) {
        this.service = val;
    }
    postServices = async (data) => {
        await fetch('http://localhost:8787/service', {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
    }
    getServices = async () => {
        fetch("http://localhost:8787/services").then(r => (r.json().then(rr => this.setServices(rr))));
      }
    //#endregion

    //#region events
    initEvents = async () => {
        const response = await fetch("http://localhost:8787/appointments");
        const data1 = await response.json();
        //this.services=data1;
        this.setServices(data1);
    }
    setEvents(val) {
        this.events = val;

    }
    postEvents = async (data) => {

       const res= await fetch('http://localhost:8787/appointment', {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
if(res.status===200)
       { 
        this.events.push(data);
        // this.setIsClicked(false);
    }
    else{
       if(this.isClicked)
            alert("date exists")
    }
    }

    //#endregion
}
export default new GlobalState();