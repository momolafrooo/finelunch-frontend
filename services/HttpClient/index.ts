import { Axios } from "../Axios";

export class HttpClient {
  static get(url: string, params?: any): Promise<any> {
    return Axios.get(url, {
      params,
    });
  }

  static post(url: string, body: any): Promise<any> {
    return Axios.post(url, body);
  }

  static put(url: string, body: any): Promise<any> {
    return Axios.put(url, body);
  }

  static delete(url: string): Promise<any> {
    return Axios.delete(url);
  }
}
