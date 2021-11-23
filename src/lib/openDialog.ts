import Dialog from './Dialog.vue'
import { createApp, h } from 'vue'

export const openDialog = (options) => {
    const { title, content, ok, cancel } = options
    const div = document.createElement('div')
    div.classList.add('div1')
    document.body.appendChild(div)
    const close = () => {
        //@ts-ignore
        app.unmount('div')  //销毁app
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                closeOnclickOverlay: false,
                'onUpdate:visible': (newVisible) => {
                    console.log('visible的新值是' + newVisible);
                    if (newVisible === false) {
                        close()
                    }
                }, ok, cancel
            }, {
                title, content
            })
        }
    })
    app.mount(div)
}
// export default openDialog