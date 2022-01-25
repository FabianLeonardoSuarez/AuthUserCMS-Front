import { BehaviorSubject } from 'rxjs';

const usertokenSubject = new BehaviorSubject(sessionStorage.getItem('user-token'));

class Autentication {

login(token) {
    sessionStorage.setItem('user-token', token)
    usertokenSubject.next(token);
    window.location.href = '';
}

logout() {
    sessionStorage.removeItem('user-token');
    usertokenSubject.next(null);
    window.location.href = '/';
}

}

export default Autentication;