import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AxiosService {
  token: string;

  constructor() {}

  tokenConfigurado: boolean = false;

  public Criar(): AxiosInstance {
    const instance = axios.create({
      baseURL: environment.urlApi,
      headers: {
        'Content-Type': 'application/json',
      },
      validateStatus: (status) => {
        if (status == 401) {
          window.location.href = '/';
          return false;
        }

        if (status == 200) return true;

        return false;
      },
    });

    instance.interceptors.request.use((config) => {
      //config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');

      return config;
    });

    return instance;
  }
}
