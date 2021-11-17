now = dayjs().format('D-MM-YY ore: HH:mm');


var boolsApp = new Vue(
    {
        el : '#app',
        data : {
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
                            date : now,
                            text : 'Hai portato a spasso il cane?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : now,
                            text : 'gli hai dato da mangiare?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : now,
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
                            date : now,
                            text : 'Ciao come stai?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : now,
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : now,
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
                            date : now,
                            text : 'Ciao, stasera cinema?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : now,
                            text : 'Ottima idea, a che ora?',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : now,
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
                            date : now,
                            text : 'Hai comprato il pane?',
                            status : 'sent',
                            openDropMenu : false
                        },
                        {
                            date : now,
                            text : 'Si',
                            status : 'received',
                            openDropMenu : false
                        },
                        {
                            date : now,
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
                let newMesObj ={date: now, text : this.newMessage, status : 'sent', openDropMenu : false}
                if(this.newMessage !== "" && this.newMessage !== " ") {
                    // push new message 
                    contact.messages.push(newMesObj);
                    this.newMessage = "";
                    // get auto answer
                    setTimeout(function() {                   
                        newMesObj = {date: now, text : 'Automessage: ok', status : 'received', openDropMenu : false};
                        contact.messages.push(newMesObj);}
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
            // function to get dropdown menu
            openDropMenudown : function(contact, j) {
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