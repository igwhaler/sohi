export default (target, name, descriptor) => {
    let oldValue = descriptor.value;

    descriptor.value = function() {
        return oldValue.apply(this, arguments);
    };

    return descriptor;
}
