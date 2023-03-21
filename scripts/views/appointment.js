(app => {

    let selected;
    // Add the following methods to app.appointmentView....
    // ** load(tutorId, day)
    //      - store tutorId and day on selected variable above 
    //      - load appointmentView using app._changeView 
    // ** save()
    //      - select DOM elements for name (input) and notes (textarea)
    //      - create new Appointment using values on selected variables and the form values submitted 
    //      - pass appointment to app.scheduler.saveAppointment
    //      - clear the two form element values
    //      - navigate back to calendar using app.calendarView.load with the selected tutorId
    app.appointmentView = {
        load(tutorId, day) {
            selected = { tutorId, day };
            app._changeView('appointmentView');
        },
        save() {
            const name = document.querySelector('#author');
            const notes = document.querySelector('#messg');
            const appointment = new app.Appointment(selected.tutorId, selected.day, name.value, notes.value);
            app.scheduler.saveAppointment(appointment);
            name.value = '';
            notes.value = '';
            app.calendarView.load(selected.tutorId);
        }
    };

})(app || (app = {}));