import { isString } from 'util'

type Method = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

class Client {
  constructor() {
    this.call = this.call.bind(this);
    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.patch = this.patch.bind(this);
    this.delete = this.delete.bind(this);
  }

  public get<T>(url: string) {
    return this.call<T>("GET", url);
  }

  public post<T>(url: string, body: string | object) {
    return this.call<T>("POST", url, body);
  }

  public put<T>(url: string, body: string | object) {
    return this.call<T>("PUT", url, body);
  }

  public patch<T>(url: string, body: string | object) {
    return this.call<T>("PATCH", url, body);
  }

  public delete<T>(url: string, body: string | object) {
    return this.call<T>("DELETE", url, body);
  }

  private call<T = {}>(
    method: Method,
    url: string,
    body: string | object | null = null
  ) {
    const headers = {
      "Content-Type": "application/json"
    };
    let options: { body?: string } = {};
    if (body && method !== "GET") {
      options.body = isString(body) ? body : JSON.stringify(body);
    }
    return fetch(url, {
      method,
      headers,
      ...options
    }).then(res => {
      if (res.status >= 400) {
        return res.json().then(Promise.reject.bind(Promise));
      }
      return res.json();
    }) as Promise<T>;
  }
}

export default new Client();
