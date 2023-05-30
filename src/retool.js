import eventEmitter from './eventEmitter.js';

let CONTEXT = null;
let LISTENING = false;
let CREATED = false;

const listen = () => {
    if(!LISTENING) {
        onCreate(() => {
            CREATED = true;
        });
        console.log(getContext().subscribe)
        getContext().subscribe(model => {
            if (!model) {
                return;
            }

            console.log({
                subscribe: 'subscribe',
                LISTENING,
                CREATED
            })

            !CREATED
                ?eventEmitter.emit('intreface:retool:onCreate', model)
                :eventEmitter.emit('intreface:retool:onUpdate', model)
            ;

            eventEmitter.emit('intreface:retool:onListen', model)
        });
    }

    LISTENING = true;
}

const getContext = () => {
    return CONTEXT ?? window.Retool;
}

const setContext = (context) => {
    CONTEXT = context;
}

const onCreate = (fn) => {
    eventEmitter.once('intreface:retool:onCreate', fn);
}

const onUpdate = (fn) => {
    eventEmitter.on('intreface:retool:onUpdate', fn);
}

const onListen = (fn) => {
    eventEmitter.on('intreface:retool:onListen', fn);
}

export {
    onCreate,
    onUpdate,
    onListen,
    getContext,
    setContext,
    listen
}