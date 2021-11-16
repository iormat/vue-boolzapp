const now = new Date().toUTCString();

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
                            status : 'sent'
                        },
                        {
                            date : now,
                            text : 'gli hai dato da mangiare?',
                            status : 'sent'
                        },
                        {
                            date : now,
                            text : 'Tutto fatto',
                            status : 'received'
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
                            status : 'sent'
                        },
                        {
                            date : now,
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received'
                        },
                        {
                            date : now,
                            text : 'Mi piacerebbe, ma stasera sono impegnato',
                            status : 'sent'
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
                            status : 'sent'
                        },
                        {
                            date : now,
                            text : 'Ottima idea, a che ora?',
                            status : 'received'
                        },
                        {
                            date : now,
                            text : 'Spettacolo delle 20:30, ci vediamo là 10 minuti prima',
                            status : 'sent'
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
                            status : 'sent'
                        },
                        {
                            date : now,
                            text : 'Si',
                            status : 'received'
                        },
                        {
                            date : now,
                            text : 'Ottimo, grazie',
                            status : 'sent'
                        },
                    ],
                },
            ]    
        },
        methods : {
            // choose chat
            openChat : function(contact) {
                if(!contact.visible) {
                    // delete every open chat before opening a new one
                    this.contacts.forEach((contact) => {
                        contact.visible = false;
                    }),
                    contact.visible = true;
                }
            },
            // send new message
            sendMessage : function(contact) {
                let newMesObj ={date: now, text : this.newMessage, status : 'sent'}
                if(this.newMessage !== "" && this.newMessage !== " ") {
                    // push new message 
                    contact.messages.push(newMesObj);
                    this.newMessage = "";
                    // get auto answer
                    setTimeout(function() {                   
                        newMesObj = {date: now, text : 'Automessage: ok', status : 'received'};
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
                        console.log("questi NON è correlato: ",contact.name, contact.found);
                     // print only relates contacts 
                    }else {                        
                        console.log("questi sono è correlato: ",contact.name, contact.found);
                        contact.found = true;
                    }
                })
            },

        },
    }
)