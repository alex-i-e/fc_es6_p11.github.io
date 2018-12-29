// @flow

export default class NotificationFactory {
    constructor() {
    }

    requestDesktopNotificationPermission() {
        if (Notification && Notification.permission === 'default') {
            Notification.requestPermission(permission => {
                if (!('permission' in Notification)) {
                    Notification.permission = permission;

                    this.desktopNotification();
                }
            });
        }
    }

    desktopNotification() {
        if (Notification && Notification.permission === 'granted') {
            const text = 'Notification Body';
            this.sendDesktopNotification(text);
        }
    }

    sendDesktopNotification(text) {
        let notification = new Notification('Awesome Notification!', {
            icon: 'https://cdn-images-1.medium.com/max/1024/1*oDLd0PmGaw49GW8qT2F1cg.png',
            body: text,
            tag: `pet-pro-notification`
        });
        //’tag’ handles muti tab scenario i.e when multiple tabs are
        // open then only one notification is sent
//3. handle notification events and set timeout
        notification.onclick = function () {
            parent.focus();
            window.focus(); //just in case, older browsers
            this.close();
        };
        setTimeout(notification.close.bind(notification), 10000);
    }
}

