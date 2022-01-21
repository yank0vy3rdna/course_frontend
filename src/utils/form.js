export function SerializeForm(form) {
    const object = {};
    [...form.elements].forEach(function (value) {
        object[value['name']] = value['value'];
    });
    return JSON.stringify(object);
}
