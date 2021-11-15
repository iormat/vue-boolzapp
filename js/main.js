var boolsApp = new Vue(
    {
        el : '#app',
        data : {
            contacts: [ 
                {
                    name: 'Michele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date : '10/01/2020 15:30:00',
                            text : 'Hai portato a spasso il cane?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:31:00',
                            text : 'gli hai dato da mangiare?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:35:00',
                            text : 'Tutto fatto',
                            status : 'received'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_1.jpg',
                    visible: false,
                    messages: [
                        {
                            date : '10/01/2020 15:30:00',
                            text : 'Ciao come stai?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:31:00',
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received'
                        },
                        {
                            date : '10/01/2020 15:28:00',
                            text : 'Mi piacerebbe, ma stasera sono impegnato',
                            status : 'sent'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_4.jpg',
                    visible: false,
                    messages: [
                        {
                            date : '10/01/2020 15:30:00',
                            text : 'Ciao, stasera cinema?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:31:00',
                            text : 'Ottima idea, a che ora?',
                            status : 'received'
                        },
                        {
                            date : '10/01/2020 15:28:00',
                            text : 'Spettacolo delle 20:30, ci vediamo là 10 minuti prima',
                            status : 'sent'
                        },
                    ],
                },
                {
                    name: 'Luisa',
                    avatar: 'img/avatar_2.jpg',
                    visible: false,
                    messages: [
                        {
                            date : '10/01/2020 15:30:00',
                            text : 'Hai comprato il pane?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:31:00',
                            text : 'Si',
                            status : 'received'
                        },
                        {
                            date : '10/01/2020 15:28:00',
                            text : 'Ottimo, grazie',
                            status : 'sent'
                        },
                    ],
                },


            ]    
        },
        methods : {
            openChat : function(contact) {
                console.log(contact.visible);
                if(!contact.visible) {
                    console.log(contact)
                    this.contacts.forEach((contact) => {
                        contact.visible = false;
                    }),
                    contact.visible = true;
                }else {
                    contact.visible = false;
                }
            },
        }
    }
)