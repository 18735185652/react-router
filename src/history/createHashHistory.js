function createHashHistory(){
    let stack = [];
    let index = -1;
    let action;//最新的动作
    let state;//这是最新的状态
    let listeners = [];
    function listen(listener){
        listeners.push(listener);
        return function(){//unlisten
            listeners = listeners.filter(l=>l!==listener);
        }
    }
    function go(n){
        action = 'POP';
        index += n;
        let nextLocation = stack[index];
        state = nextLocation.state;
        window.location.hash = nextLocation.pathname;
    }
    function goBack(){
        go(-1);
    }
    function goForward(){
        go(1);
    }
    function hashChange(){
        let pathname = window.location.hash.slice(1);
        Object.assign(history,{action,location:{pathname,state}});
        if(action === 'PUSH'){
            stack[++index]= history.location;
        }else if(action === 'REPLACE'){
            stack[index]= history.location;
        }
        listeners.forEach(listener=>listener(history.location));
    }
    window.addEventListener('hashchange',hashChange);
    function push(pathname,nextState){
        action = 'PUSH';
        if(typeof pathname === 'object'){
            state=pathname.state;
            pathname= pathname.pathname;
        }else{
            state = nextState;
        }
        window.location.hash = pathname;
    }
    function replace(pathname,nextState){
        action = 'REPLACE';
        if(typeof pathname === 'object'){
            state=pathname.state;
            pathname= pathname.pathname;
        }else{
            state = nextState;
        }
        window.location.hash = pathname;
    }
    const history = {
        action: "POP",//默认是POP
        go,
        goBack,
        goForward,
        push,
        replace,
        listen,
        location:{pathname:'/',state:undefined},
    }
  
    if(window.location.hash){
        window.location.hash = window.location.hash.slice(1)
        hashChange()
    }else {
        window.location.hash='/'
    }
    // window.location.hash = window.location.hash?window.location.hash.slice(1):'/';
    // console.log('window.location.hash',window.location.hash);
    return history;
}

export default createHashHistory;