class AddressBook {
    constructor() {
        this.contacts = [];
        this.initialComplete = false;
    }

    getInitialContacts(cb){
        let self = this;

        setTimeout(() => {
            self.initialComplete = true;
            if(cb){
                return cb();
            }
        }, 3);
    }

    addContact(contact) {
        this.contacts.push(contact);
    }
    getContact(index) {
        return this.contacts[index];
    }
    deleteContact(index) {
        this.contacts.splice(index, 1);
    }
}
;




