(app => {

    var isLoaded;

    // Add the following method to app.homeView....
    // ** load()
    //      - if !isLoaded
    //            - get list of tutors from app.scheduler
    //            - select profiles container from html
    //            - select profiles template from html

    //            - iterate through tutors
    //                  for each tutur:
    //                  - create clone of profile template's content
    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
    //                  - select and populate clone's h2 element with tutor's name
    //                  - select and populate clone's p element with tutor's skills array
    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
    //                          - (individual spans allow for styling) 
    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
    //                  - append clone to profiles container
    //            - set isLoaded to true so the const list does not have to be loaded again 
    //      - invoke app._changeView to show homeView (regardless of isLoaded status)
    app.homeView = {
        load(){
            if(!isLoaded){
                const tutors = app.scheduler.getTutors();
                const fragment = document.createDocumentFragment();
                const profilesContainer = document.querySelector('#profile');
                const profileTemplate = document.querySelector('#profile-template');

                tutors.forEach(tutor => {
                    let newNode = profileTemplate.content.cloneNode(true);
                    let img = newNode.querySelector('img');
                    img.src = "https://via.placeholder.com/150x150";
                    let h3 = newNode.querySelector('h3');
                    h3.innerText= tutor.name;
                    let p = newNode.querySelector('p');
                    p.innerHTML = tutor.skills.map(x => `<span>${x}</span>`).join('');
                    newNode.querySelector('button').addEventListener('click', () => {
                        app.calendarView.load(tutor.id);
                    });
                    fragment.appendChild(newNode);
                });
                profilesContainer.appendChild(fragment);
                isLoaded = true;
            }
            app._changeView('homeView');
        }
    }

})(app || (app = {}));