var boolsApp = new Vue(
    {
        el : '#app',
        data : {
            lastAccess : dayjs().format('D:M:YYYY ore: M:ss'),
            // search in contacts list
            searchContact : "",
            // save typed input
            newMessage : "",
            contacts: [ 
                {
                    name: 'Michele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    found : true,
                    messages: [
                        {
                            date : '10/01/2020 15:30:55',
                            text : 'Hai portato a spasso il cane?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : '10/01/2020 15:50:00',
                            text : 'gli hai dato da mangiare?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : '10/01/2020 16:15:22',
                            text : 'Tutto fatto',
                            status : 'received',
                            openDropMenu : false
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_1.jpg',
                    visible: false,
                    found : true,
                    messages: [
                        {
                            date : '20/03/2020 16:30:00',
                            text : 'Ciao come stai?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : '20/03/2020 16:30:55',
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : '20/03/2020 16:35:00',
                            text : 'Mi piacerebbe, ma stasera sono impegnato',
                            status : 'sent',
                            openDropMenu : false
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpg',
                    visible: false,
                    found : true,
                    messages: [
                        {
                            date : '28/03/2020 10:10:40',
                            text : 'Ciao, stasera cinema?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : '28/03/2020 10:20:10',
                            text : 'Ottima idea, a che ora?',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : '28/03/2020 16:15:22',
                            text : 'Spettacolo delle 20:30, ci vediamo là 10 minuti prima',
                            status : 'sent',
                            openDropMenu : false
                        },
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_2.jpg',
                    visible: false,
                    found : true,
                    messages: [
                        {
                            date : '10/01/2020 15:30:55',
                            text : 'Hai comprato il pane?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : '10/01/2020 15:50:00',
                            text : 'Si',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : '10/01/2020 15:53:16',
                            text : 'Ottimo, grazie',
                            status : 'sent',
                            openDropMenu : false
                        },
                    ],
                },
            ]    
        },
        methods : {
            openChat : function(contact) {
                if(!contact.visible) {
                    // delete every open chat before opening a new one
                    this.contacts.forEach((contact) => {
                        contact.visible = false;
                    }),
                    contact.visible = true;
                    this.getTime;
                }
            },
            // send new message
            sendMessage : function(contact) {
                let newMesObj ={date: dayjs().format('D/M/YYYY ore: HH:mm:ss'), text : this.newMessage, status : 'sent', openDropMenu : false}
                if(this.newMessage !== "" && this.newMessage !== " ") {
                    // push new message 
                    contact.messages.push(newMesObj);
                    this.newMessage = "";
                    // get auto answer
                    setTimeout(function() {                   
                        newMesObj = {date: dayjs().format('D/M/YYYY ore: HH:mm:ss'), text : 'ok', status : 'received', openDropMenu : false};
                        contact.messages.push(newMesObj);
                        this.newMessage = "";
                    }
                    ,1000);
                }
            },
            // search contact by name
            startResearch : function() {
                this.contacts.forEach((contact) => {
                    // exclude unrelated contacts
                    if(!contact.name.toLowerCase().includes(this.searchContact.toLowerCase())) {
                        contact.found = false;
                        console.log("questo NON è correlato: ",contact.name, contact.found);
                     // print only relates contacts 
                    }else {                        
                        console.log("questo è correlato: ",contact.name, contact.found);
                        contact.found = true;
                    }
                })
            },
            // function to get dropdown menu to show
            openDropdownMenu : function(contact, j) {
                if(contact.messages[j].openDropMenu === false) {
                    contact.messages[j].openDropMenu = true;
                }else if(contact.messages[j].openDropMenu === true) {
                    contact.messages[j].openDropMenu = false;
                }
            },
            // function to eliminate message
            deleteMsg : function(contact, j) {
                contact.messages.splice(j, 1)
            }

        },
    }
)