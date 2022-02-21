const focus = {
    mounted: (el: any) => {
        let findInput = (dom: any) => {
            if (dom.nodeName === 'INPUT') {
                dom.focus();
                return
            }
            if (dom.children) {
                findInput(dom.children[0]);
            }
        }
        findInput(el);
    }
}
export default focus