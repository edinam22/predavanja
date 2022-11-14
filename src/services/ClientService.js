//this is an example for client list response
import ClientModel from "./models/ClientModel";
import {userRoles} from "../config/config";

export const clients = [
    {
        id: 1,
        firstName: 'Adebayo',
        lastName: 'Danell',
        identificationNumber: '2342',
        phoneNumber: '056123123',
        email: 'adebayo.danell@gmail.com',
        dateOfFirstReservation: '01.01.2022.',
        dateOfLastReservation: '10.02.2022.',
        description: 'Some description...',
        country: {
            id: 1,
            name: 'Montenegro',
            code: 'mne',
        },
        role: userRoles.EMPLOYEE
    },
    {
        id: 2,
        firstName: 'Eutychios',
        lastName: 'Mendelsohn',
        identificationNumber: '2342',
        phoneNumber: '056123123',
        email: 'eutychios.mendelsohn@gmail.com',
        dateOfFirstReservation: '01.01.2022.',
        dateOfLastReservation: '10.02.2022.',
        description: 'Some description...',
        country: {
            id: 5,
            name: 'Bosnia and Herzegovina',
            code: 'bih',
        },
        role: userRoles.EMPLOYEE
    },
    {
        id: 3,
        firstName: 'Seppe',
        lastName: 'Leyton',
        identificationNumber: '2342',
        phoneNumber: '056123123',
        email: 'seppe.leyton@gmail.com',
        dateOfFirstReservation: '01.01.2022.',
        dateOfLastReservation: '10.02.2022.',
        description: 'Some description...',
        country: {
            id: 3,
            name: 'Serbia',
            code: 'srb',
        },
        role: userRoles.USER
    },
    {
        id: 4,
        firstName: 'Jeb',
        lastName: 'Best',
        identificationNumber: '2342',
        phoneNumber: '056123123',
        email: 'jeb.best@gmail.com',
        dateOfFirstReservation: '01.01.2022.',
        dateOfLastReservation: '10.02.2022.',
        description: 'Some description...',
        country: {
            id: 2,
            name: 'USA',
            code: 'usa',
        },
        role: userRoles.USER
    },
    {
        id: 5,
        firstName: 'Gratianus',
        lastName: 'Kwan',
        identificationNumber: '2342',
        phoneNumber: '056123123',
        email: 'gratianus.kwan@gmail.com',
        dateOfFirstReservation: '01.01.2022.',
        dateOfLastReservation: '10.02.2022.',
        description: 'Some description...',
        country: {
            id: 2,
            name: 'USA',
            code: 'usa',
        },
        role: userRoles.EMPLOYEE
    },

]

//TODO
// implement apis when we get to requests

class ClientService {
    //apis used for client requests
    api = {}

    //parameters used in apis
    params = {}

    // for now this returns data for client
    getClientById(id){
        const client = clients.find(item => item.id === id);
        return new ClientModel(client)
    }

    //for now this returns list of users
    getAll(){
        return clients.map(item => new ClientModel(item))
    }

    add(data){
        console.log("add")
        console.log(data)
    }

    edit(data){
        console.log("edit")
        console.log(data)
    }

}

export const clientService = new ClientService();