import CountryModel from "./CountryModel";

class ClientModel {
    //TODO
    // change values on the right side
    constructor(data) {
        this.id = data?.id;
        this.firstName = data?.firstName;
        this.lastName = data?.lastName;
        this.idNumber = data?.identificationNumber;
        this.phone = data?.phoneNumber;
        this.email = data?.email;
        this.firstReservationDate = data?.dateOfFirstReservation;
        this.lastReservationDate = data?.dateOfLastReservation;
        this.note = data?.description;
        this.country = new CountryModel(data?.country);
        this.role = data?.role;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

export default ClientModel;