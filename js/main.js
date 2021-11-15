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
                            text : 'Ciao come stai?',
                            status : 'sent'
                        },
                        {
                            date : '10/01/2020 15:31:00',
                            text : 'Bene grazie, stasera ci vediamo?',
                            status : 'received'
                        },
                        {
                            date : '10/01/2020 15:35:00',
                            text : 'Mi piacerebbe, ma stasera sono impegnato',
                            status : 'sent'
                        },
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
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
                    visible: true,
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
                    name: 'Luisa',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
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


            ]    
        }
    }
)