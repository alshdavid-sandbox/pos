import { Injectable } from '@angular/core'

/*
    Using the old school way of making pop ups because making dynamic elements
    appear in Angular is not trivial and these dialogs are really simple
*/
@Injectable()
export class NoticeService {
    public hasNotice = false

    alert(message) {
        const elements = {
            root: document.createElement('nav'),
            box: document.createElement('div'),
            message: document.createElement('p'),
            confirm: document.createElement('button'),
        }

        const styles = {
            root: `
                position: fixed;
                z-index: 9999;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: rgba(0,0,0,0.6);
                user-select: none;
                animation: kf_fade_in .25s ease-out;
            `,
            box: `
                padding: 20px;
                background-color: white;
                border-radius: 4px;
                text-align: center;
            `,
            message: `
                margin-bottom: 16px;
            `,
            confirm: `
                padding: 8px 40px;
                border-radius: 40px;
                cursor: pointer;
                background-color: #26408B;
                color: white;
                border: none;
            `
        }

        elements.root.style.cssText = styles.root
        elements.box.style.cssText = styles.box

        elements.message.style.cssText = styles.message
        elements.message.innerText = message

        elements.confirm.style.cssText = styles.confirm
        elements.confirm.innerText = 'Okay'

        elements.box.appendChild(elements.message)
        elements.box.appendChild(elements.confirm)
        elements.root.appendChild(elements.box)
        document.body.appendChild(elements.root)

        return new Promise(res => elements.confirm.onclick = () => {
            document.body.removeChild(elements.root)
            res()
        })

    }
}