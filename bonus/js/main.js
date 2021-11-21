var boolsApp = new Vue(
    {
        el : '#app',
        data : {
            activeChat : 0, 
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
                    messages: [
                        {
                            date : '10/01/2020 15:30:55',
                            text : 'Hai portato a spasso il cane?',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '10/01/2020 15:50:00',
                            text : 'gli hai dato da mangiare?',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '10/01/2020 16:15:22',
                            text : 'Tutto fatto',
                            status : 'received',
                            openDropMenu : false,
                            selected : false,
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date : '20/03/2020 16:30:00',
                            text : 'Ciao come stai?',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '20/03/2020 16:30:55',
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '20/03/2020 16:35:00',
                            text : 'Mi piacerebbe, ma stasera sono impegnato',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date : '28/03/2020 10:10:40',
                            text : 'Ciao, stasera cinema?',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '28/03/2020 10:20:10',
                            text : 'Ottima idea, a che ora?',
                            status : 'received',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '28/03/2020 16:15:22',
                            text : 'Spettacolo delle 20:30, ci vediamo là 10 minuti prima',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date : '10/01/2020 15:30:55',
                            text : 'Hai comprato il pane?',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '10/01/2020 15:50:00',
                            text : 'Si',
                            status : 'received',
                            openDropMenu : false,
                            selected : false,
                        },
                        {
                            date : '10/01/2020 15:53:16',
                            text : 'Ottimo, grazie',
                            status : 'sent',
                            openDropMenu : false,
                            selected : false,
                        },
                    ],
                },
            ]    
        },
        methods : {
            openChat : function (i) {
                if(this.activeChat !== i){
                    this.activeChat = i;
                }
            },
             // send new message
            sendMessage : function() {
                let newMesObj =
                { 
                    date: dayjs().format('D/M/YYYY ore: HH:mm:ss'), 
                    text : this.newMessage, 
                    status : 'sent', 
                    openDropMenu : false, 
                    selected : false,
                };
                if(this.newMessage !== "" && this.newMessage !== " ") {
                    // push new message 
                    this.contacts[this.activeChat].messages.push(newMesObj);
                    this.newMessage = "";
                    let currentChat = this.contacts[this.activeChat].messages;
                    // get auto answer
                    setTimeout(function() {                   
                        newMesObj = 
                        {
                            date: dayjs().format('D/M/YYYY ore: HH:mm:ss'), 
                            text : 'ok', 
                            status : 'received', 
                            openDropMenu : false, 
                            selected : false,
                        };
                        currentChat.push(newMesObj);
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
                        contact.visible = false;
                        console.log("questo NON è correlato: ",contact.name, contact.visible);
                     // print only relates contacts 
                    }else {                        
                        console.log("questo è correlato: ",contact.name, contact.visible);
                   contact.visible = true;
                    }
                })
            },
            // function to get dropdown menu to show
            openDropdownMenu : function(message) {
                if(message.openDropMenu === false) {
                    message.openDropMenu = true;
                }else if(message.openDropMenu === true) {
                    message.openDropMenu = false;
                }
            },
            // function to select message by message (prep to try and add possibility to delete multiple messages at once)
            selectMessage : function(message) {
                if(message.selected === false) {
                    message.selected = true;
                }else if(message.selected === true) {
                    message.selected = false;
                }
            },
            // function to eliminate message
            deleteMsg : function(j) {
                this.contacts[this.activeChat].messages.splice(j, 1);
            }
        },
    }
)