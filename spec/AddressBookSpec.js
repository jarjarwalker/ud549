describe('Address Book', function () {
    
    it('should be able to add a contact', () => {
        const addressBook = new AddressBook();
        const thisContact = new Contact();

        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });   
    
    it('should be able to delete a contact', () => {
        const addressBook = new AddressBook();
        const thisContact = new Contact();

        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Sync Address Book', () => {

    const addressBook = new AddressBook();

    beforeEach((done) => {
        addressBook.getInitialContacts(function () {
            done();
        })
    });

    it('should grab initial contacts', (done) => { 
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});