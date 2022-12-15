export const withInstall = (component) => {
    component.install = function (app) {
        app.component(component.name, component);
    };
    return component;
};
 function (app) {
        app.component(component.name, component);
    };
    return component;
};
exports.withInstall = withInstall;
