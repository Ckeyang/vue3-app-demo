import focus from '~/directives/focus';
const directives = {
    focus: focus
}
export default {
    installDirective(app: any) {
        Object.entries(directives).map(item => {
            app.directive(item[0], item[1])
        });
    }
}