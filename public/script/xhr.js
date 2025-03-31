class XHR {
    #xhr = new XMLHttpRequest();

    get(url = "", output = function(param={}){}, _async) {
        this.#xhr.open("GET", url, _async);

        this.#xhr.onreadystatechange = () => {
            if (this.#xhr.readyState == 4 && this.#xhr.status == 200) {
                output(JSON.parse(this.#xhr.responseText));
            }
        }

        this.#xhr.send();
    }

    post(url = "", data = {}, output = function(param={}){}, _async = false) {
        this.#xhr.open("POST", url, _async);
        this.#xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        this.#xhr.onreadystatechange = () => {
            if (this.#xhr.readyState == 4 && this.#xhr.status == 200) {
                output(JSON.parse(this.#xhr.responseText));
            }
        }

        this.#xhr.send(JSON.stringify(data));
    }
}

const xhr = new XHR();